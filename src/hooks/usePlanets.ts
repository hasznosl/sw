import { useState } from "react";
import useSWR from "swr";
import { ApiResponse } from ".";

export interface Planet {
  name: string;
  rotation_period: string;
}

const usePlanets = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error } = useSWR<ApiResponse<Planet>>(
    `https://swapi.dev/api/planets?page=${page}`
  );

  const isFirstPage = page === 1;

  const isLastPage = data ? page === Math.ceil(data.count / 10) : true;

  const onPreviousPage = () => !isFirstPage && setPage(page - 1);

  const onNextPage = () => !isLastPage && setPage(page + 1);

  return {
    planets: data ? data.results : [],
    isError: error,
    isLoading: !error && !data,
    onNextPage,
    onPreviousPage,
    isFirstPage,
    isLastPage,
    page,
    count: data ? data.count : null,
  };
};

export default usePlanets;
