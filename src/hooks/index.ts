export type ApiResponse<T> = {
  count: number;
  results: T[];
};

export const rootUrl = "https://swapi.dev/api";
