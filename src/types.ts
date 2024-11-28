export interface Photos {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    first_name: string;
    location: string;
    total_likes: number;
  };
}

export interface OpenModal {
  openModal: (
    regular: string,
    firstName: string,
    location: string,
    totalLikes: number,
    description: string
  ) => void;
}

export interface ImageProps {
  photos: Photos[];
  openModal: (
    regular: string,
    firstName: string,
    location: string,
    totalLikes: number,
    description: string
  ) => void;
}

export interface ImageCardProps {
  small: string;
  regular: string;
  firstName: string;
  location: string;
  totalLikes: number;
  description: string;
  openModal: (
    regular: string,
    firstName: string,
    location: string,
    totalLikes: number,
    description: string
  ) => void;
}

export interface SearchBarProps {
  defaultValue: () => void;
  setSearchQuery: (query: string) => void;
}

export interface LoadMoreBtnProps {
  addNextPage: () => void;
}

export interface ErrorMessageProps {
  errorMessage: string;
}
