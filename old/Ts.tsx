import React, { useRef } from 'react';

const Ts = () => {
  return <div>Hello world!</div>;
};

export default Ts;

// ------------------------ Опис простих (скалярних) типів
//---------------------boolean: логічний тип даних, який може приймати значення true або false.

const isDone: boolean = false;

//-------------------number: числовий тип даних для цілих та дійсних чисел.

const decimal: number = 6; // десяткові
const float: number = 3.14; // речові або число з плаваючою крапкою
const hex: number = 0xf00d; // шістнадцяткове
const binary: number = 0b1010; // двійкове
const octal: number = 0o744; // вісімкове
//-----------------string: текстовий тип даних для символів та рядків.

const color: string = 'blue';

//--------null та undefined: два спеціальні типи, що відповідають значенням null і undefined відповідно.

const empty: null = null;
const notParam: undefined = undefined;

//----------Також не обов'язково вказувати тип даних, якщо ви передаєте його явно.

const num = 10;
const str = 'Some string';
const bool = true;
const empty1 = null;
const notParam1 = undefined;

//------------Давайте спробуємо передати в аргумент функції тип даних:

function foo(num: number, str: string, bool: boolean, empty: null) {
  // Some logic
}

//----------Також, якщо ми задаємо значення за замовчуванням у функції, тип вказувати не потрібно.

function foo1(num = 10, str = 'Some string', bool = true, emoty = null) {
  // Some logic
}

//------------------------------Складні типи
//-------------------------Існує тип даних object:

const obj: object = {};
const obj1: {} = {};

//--------Як і зі скалярними типами даних, ми можемо не уточнювати, що це Object:

const user = {
  name: 'Tom',
  age: 30,
};

//------Ми можемо використовувати більш точну анотацію, за допомогою типу об'єкта:

const user1: {
  name: string;
  age: number;
} = {
  name: 'Tom',
  age: 30,
};

//---------------Ми можемо винести тип окремо за допомогою ключового слова type:

type User = {
  name: string;
  age: number;
};

const user2: User = {
  name: 'Tom',
  age: 30,
};

const user3: User = {
  name: 'Jack',
  age: 25,
};

//-----------Крім того, ми можемо використати interface для визначення об'єкта:

interface User1 {
  name: string;
  age: number;
}

const user4: User1 = {
  name: 'Tom',
  age: 30,
};

//------------------------------Array
//--------Для оголошення масиву в TypeScript використовується конструкція з квадратними дужками []
// --------------------------або загальний тип Array.

let arrString: string[];

arrString = ['text', 22]; // 22 помилка

//------------------------Давайте створимо масив чисел:

let arrNumber: number[];

arrNumber = [1, 'text']; // 'text' помилка

//------------------Крім того, масиви в TypeScript можуть бути багатовимірними.

let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

matrix = [[8, 12], ['text']]; // 'text' помилка

//-------------------Масиви також можуть містити елементи різних типів. Наприклад:

let mixed: (number | string)[] = [4, 'five'];

//----------------Ми також можемо вказати тип масиву через узагальнення (generic):

let numbers: Array<number> = [1, 2, 3, 4, 5, 'text'];

//--------------Можна визначити масив об'єктів у TypeScript.

const users: {
  name: string;
  age: number;
}[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 'Alise', age: '32' }, // '32' помилка
];

//---------------Або з використанням більш зручного запису:

type User2 = {
  name: string;
  age: number;
};

const users1: User2[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 15, age: 32 }, // 15 помилка
];

//-------Але іноді нам це не потрібно, і тоді ми можемо скористатися типом даних any:

let arrAny: any[];

arrAny = [123, 'text', { name: 'Tom' }, [1, 2, 'text']];

//-----------------------Типи для змінних та аргументів
//--------------------------------Any

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = {};
// notSure = 5;

let num1: number;
num1 = notSure;

//--------------------------Зберігай його у змінну, де вказано тип.

let num2: number;
num2 = notSure;

//---------------------Але в яких випадках він може бути корисним?

// let data: any = fetchData();

//---------------Це може бути, наприклад, певна колбек-функція.

function fetchUserData(id: string, callback: (data: any) => void): void {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: 'Tom' };

  callback(responseData);
}

// Використання функції:
fetchUserData('123', data => {
  // console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});

//--------------Якщо ми спробуємо присвоїти значення змінної типу unknown
//----------- іншій змінній з конкретним типом без явного приведення типів,
//------------- TypeScript видасть помилку.Це допомагає запобігти випадковому
//------------ присвоєнню значень неправильного типу.

let notSure1: unknown = 4;
notSure1 = 'maybe a string instead';
notSure1 = false;

let num3: number;

num3 = notSure1; // Type 'unknown' is not assignable to type 'number'.
// Як бачимо, нам не вдалося зберегти значення змінної notSure в змінну num.

//-------------Ви отримуєте дані з API та не знаєте їхнього точного формату.
//------------ У цьому випадку вам потрібно буде провести уточнення типів.

function fetchUserData1() {
  return '12';
}
let userData: unknown = fetchUserData1(); // fetchUserData повертає невідомі дані
if (typeof userData === 'string') {
  // console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
} else if (typeof userData === 'number') {
  console.log(userData);
}
// Отже, ми можемо бути впевнені, що обробляємо дані правильного типу.

//-------------------------------Tuple
// Кортеж, особливо популярний у мовах програмування як Python, це незмінний масив.
// У TypeScript це тип даних, що дозволяє визначити масив з фіксованою кількістю елементів,
// типи яких відомі, але не обов'язково повинні бути однаковими.

//---------------------Він створюється як масив,
//------------ але замість значень ми передаємо типи даних, наприклад, [string, number].

let tupleType: [string, boolean];
tupleType = ['hello', true];
tupleType = [true, 'hello']; // Error. Неправильні типи
tupleType = ['hello', true, false]; // Error. Більше значень ніж у tuple

//----------Кортежі зручні, коли нам потрібно зберегти в масив фіксовані значення,
//----------------- наприклад, день, місяць та рік.
let date: [number, number, number];
date = [19, 11, 2024]; // OK
//-------Але є нюанс: якщо ми додамо елемент у кортеж через метод push,
//------ то TypeScript не заперечуватиме, він не відстежує реальний вміст масиву.

let fixed: [string, number];
fixed = ['Text', 12];
fixed.push('Add this text');
// console.log(fixed);

//---------Однак, TypeScript надає гнучкі можливості для роботи з кортежами,
//-------- включно з використанням оператора розширення (...)
//-------- для створення кортежів змінної довжини.
let tuple: [string, ...number[]];

tuple = ['hello', 11, 25, 100, 200]; // OK

//-----------------------------Enum
//----------- імена змінних цього типу мають починатися з великої літери.
enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  // console.log('Role ', Role.ADMIN);
}

//------Ми також можемо отримати значення enum, хоча це рідко використовується.
// console.log(Role[Role.ADMIN]); // "ADMIN"

//---------проте ми можемо задати свої значення.
enum userStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Banned = 'BANNED',
}
let status: userStatus = userStatus.Active;
// console.log(status);

//-----------Крім того, ви можете використовувати enum для угруповання взаємопов'язаних значень
enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unautorized = 401,
}

function respond(status: HttpCodes) {
  // handle response
  return status;
}

// console.log(respond(HttpCodes.OK));
//-------------Існує ще така конструкція, як const enum.
// ------------На відміну від звичайного enum,
// ------------const enum видаляється під час транспіляції
// ------------та не створює додаткового об'єкта в JavaScript.
//------------Значення const enum вставляють у місце використання у вигляді літералів.
const enum HttpCodes1 {
  OK = 200,
  BadRequest = 400,
  Unautorized = 401,
}
const status1 = HttpCodes1.OK; // Після компіляції у JavaScript отримаємо наступний код: const status = 200;

//-----------------------------------Union Type
//--------Union Type у TypeScript дозволяє вказати,
//------- що значенням може бути один із кількох типів. Це дуже зручно,
//------- коли хочемо визначити змінну, яка може приймати різні типи даних.
//------- Типи перераховуються через вертикальну риску |

let mixedType: string | number | boolean;

mixedType = 'string';
mixedType = 10;
mixedType = true;
mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

//--------------Union Type можна також використовувати для аргументів функцій.
function combine1(param1: number | string, param2: number | string) {
  return param1 + param2;
}
//---- Ми отримуємо помилку, тому що TypeScript просто не знає, рядок там чи число.
//------------Давайте перевіримо типи у функції.
function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// console.log(combine(2, 4));
// console.log(combine('Peter ', 'Joe'));
// console.log(combine('12 ', 15));

//-------------Union Type працює не лише з базовими типами, а й з об'єктами:
type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish;

// Однак існує важливе обмеження: коли ми працюємо зі змінною Union Type,
// ми можемо використовувати лише ті властивості та методи,
// які існують у всіх типів цього об'єднання.
// У прикладі вище ми не можемо викликати pet.bark(), якщо pet є типом Fish.
// Нам доведеться перевіряти, чи існує цей метод.

// function isDog(pet: Dog | Fish): pet is Dog {
//   return 'bark' in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }

//-------------------------------------Intersection Type
//-------Intersection type є способом об'єднання декількох типів в один.
// Це дозволяє створювати складні типи, комбінуючи прості.
// У TypeScript можна використовувати символ & для створення типу intersection.

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: 'Alice',
  id: 1,
  employees: [
    {
      name: 'Bob',
      id: 2,
    },
  ],
};
// console.log(ceo);

//-------------------------------Literal Type
//---------Literal Type — це тип, що набуває конкретного значення.
//-- З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1;
value = 2;
value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = 'yes' | 'no';
let answer: YesOrNo;
answer = 'yes';
answer = 'no';
answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

//----ми маємо функцію, що приймає рядок як аргумент
// і повертає стилі для кнопки в залежності від переданого значення.

type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case 'small':
      return { fontSize: '10px', padding: '5px' };
    case 'medium':
      return { fontSize: '14px', padding: '10px' };
    case 'large':
      return { fontSize: '18px', padding: '15px' };
    default:
      return { fontSize: '14px', padding: '10px' };
  }
}

let myButtonStyle = getButtonStyle('small');
myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.
// console.log(myButtonStyle);

//---------------------Типи для методів та функцій
//-----------------------Return Type
//--------Return type — це тип даних, який функція повертає під час її виклику.

function greet(): string {
  // return 'Hello World!';
  return 25; // Error: Type 'number' is not assignable to type 'string'
}
// console.log(greet());
//----------Для стрілочних функцій схожий синтаксис.
const greet1 = (): string => {
  // return 'Hello World';
  return 300; // Error: Type 'number' is not assignable to type 'string'
};
// console.log(greet1());
//----------отримує список користувачів та повертає імена цих користувачів у вигляді рядка.

type User5 = {
  id: number;
  name: string;
};

const getUserNames = (users: User5[]): string[] => {
  return users5.map(user => user.name);
};

const users5: User5[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const result = getUserNames(users5);
// console.log(result);

//----якщо ви не вказали тип значення, що повертається явно,
// але ваша функція повертає, наприклад, рядок,
// TypeScript автоматично присвоїть цій функції тип значення, що повертається string.

function greet2() {
  return 'Hello World!!!';
}

const result1: string = greet2();
// console.log(result1);

//-------------------------------Void
// ---Тип void у TypeScript використовується для позначення відсутності будь-якого типу взагалі,
// і зазвичай використовується як тип функцій, що повертається,
// в якому функції не повертають значення.

function logMessage(message: string): void {
  // console.log(message);
}
logMessage('Hello world!!');
//-----Тип void часто використовується в callback-функціях або функціях зворотного виклику,
// де ви хочете бути впевнені, що функція не повертає значення,
// і тому не важливо, що повертає функція зворотного виклику.
function doSomething(callback: () => void) {
  callback();
}

doSomething(() => {
  // console.log('Callback function!');
});

//--------Never
//---Це коли функція ніколи не закінчується та нічого не повертає.
// Часто тип never використовується для функцій,
// які завжди викидають вийняток або у нескінченних циклах.

// Функція, яка завжди викидає помилку
function throwError(message: string): never {
  throw new Error(message);
}

// Функція з нескінченним циклом
function infinityeLoop(): never {
  while (true) {}
}

//-----------Будь-які спроби присвоїти значення змінної value, яка має тип never,
//---------- призводять до помилки компіляції.
let value1: never;

value1 = 1;
value1 = '2';

//---------------------------------Function Type
//------Ми можемо описати функцію як тип. TypeScript дозволяє визначити типи параметрів,
// які функція набуває, і тип значення, що повертається.
// Це робить код більш надійним та зручним для читання та розуміння.

let myFunct: (firstArg: string, secondArg: number) => void;

myFunct = (first: string, second: number) => {
  // console.log(`First: ${first}, Second: ${second}`);
};

myFunct('Hello', 15);
//--------------------------------------------------------------------------------------
//----------- Визначення типу функції, який приймає два числа та повертає число
// type CallbackType = (num1: number, num2: number) => number;
//------------можна допустити функції, які можуть приймати будь-яку кількість аргументів.
type CallbackType = (...nums: number[]) => number;
// Функція, яка приймає два числа та функцію зворотного виклику,
// застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  // console.log('Result', callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);
//---------------------------------------------------------------------------------------

//------------------------------------Custom Types
//--Custom Types, або типи даних користувача, — це потужний інструмент у TypeScript,
// що дозволяє вам визначати власні структури даних.
// Ми вже описували свої типи, але давайте зануримось в цю тему глибше.
type User3 = {
  id: number;
  name: string;
};

const user5: User3 = {
  id: 1,
  name: 'Alice',
};

//----Користувацькі типи можуть бути більш складними і включати в себе інші типи даних користувача.
type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 1,
  name: 'Alice',
  coords: [10, 20],
};

//Скористаємося enum як сховищем ключів та опишемо для кожного тип.
enum AnimalIds {
  cat = 'cat',
  dog = 'dog',
  fish = 'fish',
}

type Animal = {
  [AnimalIds.cat]: {
    meow: () => string;
  };
  [AnimalIds.dog]: {
    bark: () => string;
  };
  [AnimalIds.fish]: {
    swim: () => undefined;
  };
};

// Створення об'єктів типу Animal
let cat: Animal[AnimalIds.cat] = {
  meow: () => 'Meow! I am a cat',
};

let dog: Animal[AnimalIds.dog] = {
  bark: () => 'Woof! I am a dog',
};

let fish: Animal[AnimalIds.fish] = {
  swim: () => undefined,
};
//-------------------------------
type Person = { name: string; age?: number };
let user6: Person = { name: 'Alice' };
user.age = '27'; //error
//-----------------------Опціональні параметри та властивості
//-- У TypeScript ви можете зробити параметр опціональним,
// додавши символ ? після назви параметра.
// Це означає, що параметр може бути пропущений під час виклику функції.
function greet3(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}

// console.log(greet3('Alice')); // Виводить: Hello, Alice!
// console.log(greet3()); // Виводить: Hello!
//-----Аналогічно у TypeScript ви можете зробити властивість інтерфейсу або типу опціональною,
// додавши символ ? після назви властивості.
type Person1 = {
  name: string;
  age?: number; // age є опціональною властивістю
};

const alice: Person1 = { name: 'Alice', age: 27 };
const bob: Person1 = { name: 'Bob' }; // age не вказано, це припустимо
//-----------------------Різниця між Type та Interface
interface Animal1 {
  name: string;
}
//-----ми не ставимо знак дорівнює (=) після Animal, а відразу починаємо описувати тип.
type Animal2 = {
  name: string;
};
//Interface підтримує об'єднання через оголошення з тим самим ім'ям.
// Якщо ви визначите два interface з одним і тим же ім'ям, вони будуть "змерджені" в одне.
interface Animal3 {
  name: string;
}

interface Animal3 {
  age: number;
}

let dog3: Animal3 = {
  name: 'Fido',
  age: 5,
};
//--------------Якщо ми хочемо розширити один інтерфейс іншим,
// у яких різні імена, нам потрібно використовувати оператор extends:
interface Dog1 extends Animal {
  bark: string;
}
//------------- У випадку з типом нам довелося б використовувати intersection (&).
type AnimalName = {
  name: string;
};

type AnimalAge = {
  age: number;
};

type Animal4 = AnimalName & AnimalAge;

let dog5: Animal4 = {
  name: 'Fido',
  age: 5,
};
//-----Ми також можемо міксувати Interface та type, але результат нам доведеться зберегти як тип.
type Cat = {
  meow: () => string;
};

interface Dog_1 {
  bark: () => string;
}

type DogOrCat = Dog_1 | Cat;
type DogAndCat = Dog_1 & Cat;
//-----------Назва 'Interface' говорить сама за себе.
// Він являє собою якийсь 'інтерфейс', який має описувати структуру об'єктів,
// їхні методи та властивості. Інтерфейси переважно призначені для опису класів.
// Через це вони не можуть зберігати в собі примітивні значення, як це може робити Type,
// а також масиви та інші структури даних, які не є об'єктами.
// Ми просто не зможемо їх туди зберегти, оскільки за синтаксисом відразу йдуть фігурні дужки {}.
interface Animal_1 {
  name: string;
}

interface Dog_2 extends Animal_1 {
  bark: string;
}

class MyDog implements Dog_2 {
  name = 'Fido';
  bark = 'Woof!';
}

// Error: Property 'name' is missing in type 'OtherDog'
class OtherDog implements Dog_2 {
  bark = 'Woof!';
}
//-------За допомогою ключового слова 'implements' ми встановлюємо обов'язкові властивості для класу.
// Якщо тепер у класі ми пропустимо будь-яку властивість, вказану в інтерфейсі,
// ми отримаємо помилку, як це сталося в класі OtherDog.

//----------Ми можемо реалізовувати кілька інтерфейсів одночасно.
interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal_2 implements Walkable, Eatable {
  walk() {
    console.log('The animal walks...');
  }

  eat() {
    console.log('The animal eats...');
  }
}

const animal = new Animal_2();
//--------Ще за допомогою інтерфейсу можна описати функцію.
interface AddFunc {
  (n1: number, n2: number): number;
}

let add: AddFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
//---------Але, це не дуже зручно і складно виглядає, краще в таких випадках використовувати type.

//------------------------------------Інтерфейси
//--------------------------------Загальне поняття
//-----Інтерфейс — це визначення кастомного типу даних, але без будь-якої реалізації.
//-------У TypeScript інтерфейси відіграють ключову роль статичної типізації.
// Вони допомагають забезпечити узгодженість та чіткість структури об'єктів чи класів.
interface Person_1 {
  firstName: string;
  lastName: string;
  age?: number; // Необов'язкове поле
}

function greet_1(person: Person_1) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

const john: Person_1 = {
  firstName: 'John',
  lastName: 'Doe',
};

// console.log(greet_1(john));

//----------------------------------Інтерфейси об'єктів
//----У TypeScript ми можемо використовувати інтерфейси як тип даних для об'єктів.
// Розширимо наш приклад про літаки, додавши пілота. Для цього створимо інтерфейс IPerson:
interface IPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user_1: IPerson;

user_1 = {
  name: 'Anthony',
  age: 21,
  greet(phrase) {
    // console.log(phrase + ' ' + this.name);
  },
};

user_1.greet('Вітання всім, я'); // Вітання всім, я Anthony

//------------------Readonly
//---Інтерфейси дозволяють використовувати модифікатор readonly.
// Цей модифікатор робить властивість лише для читання, що означає,
// що його значення можна встановити лише при створенні об'єкта і не можна згодом змінити.
interface ITest {
  readonly name: string;
}

const person_2: ITest = {
  name: 'Person Name',
};

person_2.name = 'Another Name'; // Error: Cannot assign to 'name' because it is a read-only property.

//---------------------------------Extending Interfaces
// Однією із чудових можливостей, які надають нам інтерфейси, є можливість розширення.
// Інакше висловлюючись, один інтерфейс може наслідувати властивості
// та методи іншого інтерфейсу з допомогою ключового слова extends.
// Це особливо корисно, коли у вас є кілька об'єктів,
// які поділяють загальні властивості або методи, і ви хочете уникнути дублювання коду.
interface IPerson_1 {
  name: string;
  age: number;
  greet(phrase: string): void;
}

interface IPilot extends IPerson_1 {
  flyMessage(): void;
}
//-------------------------------------Інтерфейси як тип функції
// Інтерфейси можуть використовуватися не тільки для опису форми об'єктів,
// але і для визначення типів функцій.
interface AddFunc_1 {
  (n1: number, n2: number): number;
}

let add_1: AddFunc;

add_1 = (n1: number, n2: number) => {
  return n1 + n2;
};
//-----------------------------------Опціональні властивості
// Інтерфейси можуть включати опціональні властивості,
// що дозволяє створити більш гнучкі та універсальні типи.
// Все, що потрібно зробити, це додати знак питання (?) після імені властивості у визначенні інтерфейсу.
interface IPerson_2 {
  name?: string;
  age: number;
}

const mango: IPerson_2 = {
  name: 'mango',
  age: 2,
};

const poly: IPerson_2 = {
  age: 5,
};
//-----------------------------------Advanced Types
//------------------------------------Type Casting
//-----Type Casting (або Type Conversion) використовується для перетворення
//---- об'єкта одного типу на об'єкт іншого типу.
//-----TypeScript використовує два синтаксичні підходи для типового приведення:
//---- кутові дужки <> та оператор as.
let someValue_2: unknown = 'this is a string';

// let strLength1: number = (<string>someValue_2).length;
// or
let strLength2: number = (someValue_2 as string).length;

let strLength3: number = someValue_2.length;
//-----------Під час роботи з HTML-елементами, ми можемо отримати проблеми.

// const input = document.getElementById('inputEmail');

// input.value = 'test@test.ts';

//-------Спочатку TypeScript інтерпретує його як HTMLElement,
// у якому відсутня властивість value.
// Але тепер нам потрібно вказати правильний тип. Для цього у нас є два варіанти.

// const input = <HTMLInputElement>document.getElementById('inputEmail');

// input.value = 'test@test.ts';
//-------------І є другий, більш універсальний через as.
const input_2 = document.getElementById('inputEmail') as HTMLInputElement; //OK

// input_2.value = 'test@test.ts'; //OK

//--------Таким чином, ви можете змінювати або призначати тип у процесі виконання коду.
// Спробуємо видалити його зараз і призначити пізніше.

const input_3 = document.getElementById('inputEmail');

if (input_3) {
  (input_3 as HTMLInputElement).value = 'test@test.ts';
}
// Однак, коли використовується JSX (React), тільки оператор as можна використати,
// оскільки синтаксис <Type> може бути неправильно інтерпретований як JSX.

//--------------------------------Index Properties
// Бувають ситуації, коли ми знаємо якісь поля явно, але деякі поля нам невідомі,
// а ми точно знаємо, якого типу вони мають бути.
// Для цього можна скористатися ось такою конструкцією:
type IndexType = {
  [prop: string]: string;
};

type Person_3 = {
  name: string;
  [x: string]: string;
};

const user_2: Person_3 = {
  name: 'Alex',
  gender: 'MAN',
  country: 'Ukraine',
};
//------------Обов'язково потрібно вказати name та будь-яку кількість інших полів.
//-------Використання індексних властивостей дозволяє вам створювати словники або карти,
// де ключі та значення мають певний тип.
type User_3 = {
  id: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User_3;
};

let users_5: Users = {};

let user_5: User_3 = {
  id: '1',
  name: 'Alex',
  email: 'alex@example.com',
};

users_5[user_5.id] = user_5;
//--------------------------------Generics
//----------------------------Загальна концепція
// Узагальнені типи (Generics) - це один із потужних інструментів TypeScript,
// що допомагають створювати код, який можна використовувати повторно,
// зберігаючи водночас строгу типізацію.
// Основна ідея узагальнених типів (Generics) полягає в тому,
// що вони дозволяють визначити "узагальнений" тип,
// який потім може бути спеціалізований для роботи з різними іншими типами.
// Замість того, щоб визначати окремі функції для кожного можливого типу даних,
// ви можете визначити одну функцію, яка працює з "будь-яким" типом даних.

let arr: Array<string | number> = [];
arr = ['str', 15, 'yes', true]; // Error Type 'boolean' is not assignable to type 'string | number'.

// Оскільки Promise може повернути абсолютно все,
//  без дженерика ми ніколи не дізнаємось, що він повертає.
// Створимо Promise, вказавши тип.

const promise: Promise<string> = new Promise(resolve => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then(data => {
  // console.log(data);
});

//-------------------------------Generic function/method
// Узагальнені функції або методи в TypeScript є способом створення функцій,
// що можуть працювати з різними типами даних,
// зберігаючи водночас типізацію вхідних і вихідних даних.

function identity<T>(arg: T) {
  return arg;
}
// Ми можемо викликати цю функцію для різних типів:
// console.log(identity<number>(55));
// console.log(identity<string>('This is string'));

//Також TypeScript може автоматично виводити тип під час використання узагальнених функцій,
// тому ми можемо опустити явну вказівку типу:
// console.log(identity('This is also a string'));
// console.log(identity(69));
// console.log(identity(false));

//------- Generics дуже корисні у роботі з колекціями, промісами та багатьма іншими випадками,
// коли функція має бути гнучкою за типами даних, але водночас зберігати сувору типізацію.

function secondElement<T>(arr: T[]): T {
  return arr[1];
}

let numbers_1 = [1, 2, 3, 4, 5];
let secondNum = secondElement(numbers_1);
// console.log(secondNum);

let strings = ['1', '2', '3', '4', '5'];
let secondStr = secondElement(strings);
// console.log(secondStr);

//-----------------------------поєднання двох об'єктів.
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
const merged = merge({ name: 'Alisa' }, { age: 28 });
// console.log(merged.name);
// Ми отримали помилку на merged.name, тому що TypeScript просто не знає, що міститься в об'єкті.

// функція теж є об'єктом, а отже ми можемо вказати для неї дженерик,
// так само як ми це робили з масивом або промісом.

//------------------------------Extends
// У контексті узагальнених типів ключове слово extends
// використовується для визначення обмежень на типи,
// які можуть бути використані з узагальненим типом.
// Це дозволяє нам уточнити, які типи допустимі у наших узагальнених функціях чи класах.

function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const merged1 = merge1({ name: 'Alisa_1' }, { age: 32 });

// console.log(merged1.name);

//------------У нас є функція, що повертатиме довжину або рядка,
// або масиву. Ми вирішили використати для цього дженерики:
type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

// console.log(getLength('Text22'));
// console.log(getLength([1, 2, 3, 4]));
// console.log(getLength(1004)); // Error Argument of type 'number' is not assignable to parameter of type 'Length'.

//--------Ще одним прикладом використання extends може бути функція,
// що приймає масив елементів певного типу:
function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach(item => console.log(item));
}
// arrayLogger(['Hello', 'World']);
// arrayLogger(['1', '2', '3', '4']);

// ------------------- keyof
// keyof — це оператор у TypeScript, що повертає типізований набір ключів для заданого типу.
// Іншими словами, він повертає тип, який представляє всі можливі ключі цього типу.
type Person_4 = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person_4; // 'name' | 'age' | 'location'

function getPersonInfo(person: Person_4, key: PersonKeys) {
  return person[key];
}

const john_4: Person_4 = {
  name: 'John',
  age: 25,
  location: 'NY',
};

// console.log(getPersonInfo(john_4, 'age')); // 25
// console.log(getPersonInfo(john_4, 'name')); // 'John'
// console.log(getPersonInfo(john_4, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

//-----І тут ми можемо скористатися оператором 'keyof' + generics.
// Він дозволяє уточнити, що певний тип існує як ключ в об'єкті.

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

// console.log(extractValue({ name: 'John' }, 'name'));

//-------------------------------Generic Classes
// Узагальнені класи в TypeScript дозволяють визначити клас з типами,
// що можуть бути встановлені під час створення екземпляра класу.
// Це дозволяє створювати класи, що можуть працювати з різними типами даних,
// зберігаючи водночас сувору типізацію.

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Hello');
textStorage.addItem('World');
// console.log(textStorage.getItems()); // ['Hello', 'World']
textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
// console.log(numberStorage.getItems()); // [1, 2]
numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'
// У цьому прикладі клас "DataStorage" має узагальнений тип "T",
// який визначається під час створення екземпляра класу.
// В результаті ми отримуємо універсальний клас для зберігання даних,
// що може працювати з рядками, числами або будь-якими іншими типами, які ми визначимо.

//--- Це також корисно для створення класів, що працюють зі спеціалізованими типами.
// Наприклад, ми можемо визначити клас "KeyValuePair",
// який приймає два узагальнені типи: один для ключа та один для значення.

class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair('name', 'Alice');
// console.log(pair1.getKey()); // 'name'
// console.log(pair1.getValue()); // 'Alice'

const pair2 = new KeyValuePair(1, true);
// console.log(pair2.getKey()); // 1
// console.log(pair2.getValue()); // true

//---------------------Partial<T>
// Утилітний тип Partial<T> створює новий тип на основі типу T,
// але робить всі його властивості необов'язковими.
// Це дуже корисно в ситуаціях, коли ви хочете створити об'єкт,
// заснований на певному типі,
// але не хочете або не можете вказати значення всіх властивостей відразу.

type User_4 = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User_4>): User_4 {
  // Деякі значення за замовчуванням:
  const defaultUser: User_4 = {
    id: Date.now(),
    name: '',
    email: '',
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: 'Alice', email: 'alice@example.com' });

// console.log(newUser);

//----------------------------------- Readonly<T>
// Утилітний тип, що робить усі властивості у типі T тільки для читання.
// Це означає, що після того, як об'єкт буде створений, його властивості не можна буде змінити.

type User_6 = {
  id: number;
  name: string;
  email: string;
};

let alice_1: User_6 = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

alice_1.name = 'Bob'; // OK

let aliceReadonly: Readonly<User_6> = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

aliceReadonly.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
// console.log(aliceReadonly.name);

//--- Пам'ятаєте, ми створювали тип кортежу? Але метод 'push' все одно працював.
// Так ось, використовуючи Readonly, можна створити дійсно незмінний масив.

const arr_1: Readonly<string[]> = ['One', 'Two', 'Three'];

arr_1.push('Four'); // Error: Property 'push' does not exist on type 'readonly string[]'.

//------------------------------- Pick<T, K>
// Pick — це утилітний тип у TypeScript,
//  що дозволяє вам обрати набір властивостей з існуючого типу
//  і створити новий тип на основі цих властивостей.
// Розглянемо приклад. У нас є тип User, що містить три властивості:
// id, name та email.Ми хочемо створити новий тип, що міститиме лише id і name.

type User4 = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<User4, 'id' | 'name'>;

let userBasicInfo: UserBasicInfo = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com', // Error: Property 'email' does not exist on type 'UserBasicInfo'
};
// Pick дуже корисний, коли ви хочете працювати тільки з певною підмножиною властивостей наявного типу.
// Він часто використовується для складання типів, наприклад, під час роботи з API,
// звідки може прийти безліч полів.Зазвичай для всіх цих полів вже існує якийсь базовий тип,
// чи то користувач, сторінка, чи документ, і з допомогою 'Pick'
//  ми вибираємо потрібні для конкретного випадку поля.

type BaseEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  startDate: Date;
  // ...і багато інших полів
};

type BaseProject = {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
  // ...і багато інших полів
};

type Assignment = {
  employee: Pick<BaseEmployee, 'id' | 'firstName' | 'lastName'>;
  projects: Pick<BaseProject, 'id' | 'name' | 'deadline'>[];
  shouldNotifyEmployee?: boolean;
};

//------------------------------------ Record<K, T>
// Record<K, T> — це утилітний тип, що дозволяє створювати типи із заздалегідь відомими властивостями.
// Це дуже корисно, коли вам потрібно створити об'єкт із певними ключами та значеннями,
// типи яких ви заздалегідь знаєте.
// Принцип роботи Record наступний:
// ви вказуєте набір ключів K і тип T, який буде присвоєно кожному з цих ключів.

type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: 'Понеділок',
  Tue: 'Вівторок',
  Wed: 'Середа',
  Thu: 'Четверг',
  Fri: "П'ятниця",
  Sat: 'Субота',
  Sun: 'Неділя',
};
// У цьому прикладі DayTranslations — це тип об'єкта, ключами якого є значення типу Day,
// а значеннями – рядки.Отже, ви отримуєте суворо типізований об'єкт перекладу,
//  який гарантує, що кожен день тижня буде перекладено.

// Record часто використовується для мапінгів, перекладів та інших ситуацій,
//  коли вам потрібно створити об'єкт із заздалегідь відомими ключами.

// Ми можемо використовувати enum для цього. Давайте визначимо enum для наших ролей:
enum UserRoles {
  admin = 'admin',
  manager = 'manager',
  employee = 'employee',
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
  [UserRoles.employee]: true,
};
// Тут UserRoles — це перерахування, що визначає можливі ролі користувача.
// UserRolesStatuses — це тип, що представляє запис,
//  де кожна роль користувача зіставлена з булевим значенням, що вказує на активацію цієї ролі.

// Розглянемо ще один приклад. Припустимо, ми маємо форму з типом 'InitialFormType',
//  і ми хочемо розширити цей тип помилками, які можуть виникнути.
type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

export type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};
// Ми визначаємо тип Form, який є об'єднанням InitialFormType та об'єкта,
// що містить поле errors.

// Keyof InitialFormType отримує всі ключі з InitialFormType
// (в цьому випадку, це name, email та password), і Record створює новий тип,
// в якому кожен із цих ключів відображається на масив рядків.
// Потім Partial робить кожну властивість цього нового типу необов'язковою.

//----------------------------------- Omit<T, K>
// Це Pick, але навпаки. Дозволяє створити новий тип на основі типу T шляхом виключення набору властивостей, зазначених у K.

type Person2 = {
  name: string;
  age: number;
  location: string;
};
// Ми можемо створити новий тип 'PersonWithoutLocation', використовуючи 'Omit':

type PersonWithoutLocation = Omit<Person2, 'location'>;

// Тепер 'PersonWithoutLocation' є таким самим типом, як і 'Person',
//  але без властивості 'location'.Це може бути корисно,
//  якщо в деяких контекстах ми не хочемо мати певних властивостей у наших типах.

//--------------------------------------- ReturnType<T>
// Дозволяє отримати тип функції, що повертається.
//  Для функцій він має використовуватися з typeof.

function greeting() {
  return 'Hello, world!';
}

type Greeting = ReturnType<typeof greeting>; // 'string'

function multiply(a: number, b: number) {
  return a * b;
}

type MultiplyResult = ReturnType<typeof multiply>; // 'number'

// Давайте напишемо обгортку для функції, але повертатимемо тип з колбеку.
// Тут нам не потрібен typeof, тому що TypeScript автоматично виводить типи для T.

type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}
// Тепер loggedFunction приймає функцію як аргумент і повертає нову функцію,
// яка всередині себе викликає вихідну функцію.Тип вихідної функції,
// що повертається, зберігається завдяки використанню ReturnType<T>.

//-------------------------------- Parameters<T>
// Витягує типи параметрів типу функції T.
//  Вона повертає кортеж, що містить типи всіх параметрів функції T у тому порядку,
//  в якому вони оголошені.

type MyFunctionType = (a: string, b: number, c: boolean) => void;

type MyParametersType = Parameters<MyFunctionType>;
// Результат: [string, number, boolean]

// У цьому прикладі MyFunctionType представляє тип функції з трьома параметрами:
//  a типу string, b типу number і c типу boolean.
// Потім ми використовуємо Parameters для отримання типів параметрів цієї функції
//  та привласнюємо результат типу MyParametersType.
// Результатом буде тип[string, number, boolean],
//  що представляє кортеж із трьох типів параметрів функції.
// Отже, утиліта Parameters дозволяє нам отримати доступ до
//  типів параметрів функції у TypeScript, як ми це зробили в прикладі з ReturnType.

//-------------------------------------NonNullable<T>
// Утилітний тип, що приймає тип T та виключає з нього null та undefined.
//  Цей тип корисний, коли ви хочете гарантувати, що значення не буде null чи undefined.

type SomeType = string | null | undefined;

// NonNullableType будет равен 'string'
type NonNullableType = NonNullable<SomeType>;

// У цьому прикладі SomeType — це тип, який може бути або рядком, або null,
//  або undefined.Під час використання NonNullable < SomeType > ми отримуємо тип NonNullableType,
//  який може бути тільки рядком.

//------------------------------ Типізація компонентів React

type Props = {
  name: string;
  age: number;
};

export function User({ name, age }: Props) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
    </div>
  );
}
// У цьому прикладі ми визначаємо тип Props, який описує пропси, що приймає наш компонент User.
//  Потім ми використовуємо цей тип для анотації пропсів у функції компонента.

// Ми також можемо використовувати React.FC або React.FunctionComponent
//  для визначення типів функціонального компонента:

type Props1 = {
  name: string;
  age: number;
};

export const user7: React.FC<Props1> = ({ name, age }) => {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
    </div>
  );
};
// У цьому прикладі React.FC<Props> визначає тип функціонального компонента, який приймає пропси типу Props.
//  Це використання generic дозволяє автоматично уточнити тип аргументів функції.Однак варто зазначити,
//  що React.FC і React.FunctionComponent автоматично додають визначення типу для пропа children,
//  навіть якщо він не визначений у типах пропсів.

// Тут зазначено, що React.FC сам типізує children, але давайте подивимося, як це зробити самостійно:

type Props2 = {
  name: string;
  age: number;
  children: React.ReactNode; // Типизация для children
};

export function User8({ name, age, children }: Props2) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
      {children} {/* Рендерим children */}
    </div>
  );
}
// Давайте трохи розберемося у цих типах для children.

// React.ReactNode: це більш загальний тип, який містить в собі майже всі можливі типи,
//  які можуть бути відрендерені в компоненті React.
//  Це може містити string, number, null, undefined, boolean, ReactElement, ReactFragment, ReactPortal.

//------------------------------ React.ReactElement
// якщо ви використовуєте ReactElement у типах для children, ви зможете приймати тільки елементи React.

// Ось приклад типізації children як ReactElement:

type Props3 = {
  children: React.ReactElement;
};

export function Panel({ children }: Props3) {
  return <div>{children}</div>;
}
// Тепер Panel може приймати лише дочірні елементи, які є елементами React:

// // Це працює:
// <Panel>
//   <div>Hello, world!</div>  !!!!!!
// </Panel>

// // Це не працює, тому що
// // "Hello, world!" - це рядок, а не елемент
// <Panel>Hello, world!</Panel>

// Ви також можете побачити такий тип даних, як JSX.Element, це по суті React.ReactElement,
//  єдина різниця, що ReactElement — це вбудований тип у бібліотеці React,
//  а JSX.Element — це інтерфейс, визначений у глобальній області JSX TypeScript.
//  Однак, використання ReactElement є більш явним та надійним.

type User9 = {
  name: string;
  email: string;
};

type Props4 = {
  user: User9;
  onUserUpdate: (user: User) => void;
};

export function UserProfile({ user, onUserUpdate }: Props4) {
  // компонент UserProfile
  return null;
}
// Тут user — це об'єкт з певною структурою, а onUserUpdate — це функція, що приймає об'єкт такої ж структури.

//---------------------------------------- useRef
// Коли ви використовуєте useRef, можна вказати тип посилання.
//  Це корисно, якщо ви маєте посилання на DOM - елемент,
//  і ви хочете отримати доступ до його властивостей або методів.

// Ось простий приклад використання useRef з типом HTMLInputElement:

export function TextInputWithFocus() {
  // Тут ми вказуємо, що ref буде посилатися на елемент типу HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // Поле current тепер має властивості, що є у елемента HTMLInputElement
    inputEl.current?.focus();
  };

  return (
    <>
      {/* Тут inputEl стане посиланням на цей input елемент */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Встановити фокус на поле введення</button>
    </>
  );
}
// У цьому прикладі useRef використовується для створення посилання на елемент input.
//  Зверніть увагу, що ми вказуємо HTMLInputElement як тип useRef.Це означає,
//  що ми матимемо доступ до всіх властивостей і методів input елемента, таких як метод focus.
