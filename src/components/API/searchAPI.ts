import React from 'react';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
const clientId: string = 'L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ';

interface axiosParams {
  params: {
    page: number;
    per_page: number;
    query: string;
    orientation: string;
    client_id: string;
  };
}

type PromiseTypes<T> = {
  results: T[];
  total: number;
  total_pages: number;
};

async function fetchPhotos<T>(
  searchRequest: string,
  page: number
): Promise<PromiseTypes<T>> {
  const axiosOptions: axiosParams = {
    params: {
      page: page,
      per_page: 12,
      query: searchRequest,
      orientation: 'landscape',
      client_id: clientId,
    },
  };

  const response = await axios.get<PromiseTypes<T>>(
    '/search/photos',
    axiosOptions
  );
  return response.data;
}

export default fetchPhotos;
