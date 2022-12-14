import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { ApiResponse, rootUrl } from ".";

export interface Planet {
  name: string;
  rotation_period: string;
}

const PAGE_SIZE = 10;

const usePlanets = ({ search }: { search?: string }) => {
  const [page, setPage] = useState<number>(1);

  const ref = useRef<ApiResponse<Planet>>();

  const { data, error } = useSWR<ApiResponse<Planet>>(
    `${rootUrl}/planets?page=${page}${search ? `&search=${search}` : ""}`,
    { fallbackData: ref.current }
  );

  useEffect(() => {
    ref.current = data;
  }, [data]);

  const isFirstPage = page === 1;

  const lastPage = data ? Math.ceil(data.count / PAGE_SIZE) : null;

  const isLastPage = data ? page === Math.ceil(data.count / PAGE_SIZE) : true;

  const onPreviousPage = () => !isFirstPage && setPage(page - 1);

  const onNextPage = () => !isLastPage && setPage(page + 1);

  return {
    planets: data
      ? data.results
      : Array.from({ length: 10 }, (_, index) => ({
          name: "",
          rotation_period: "",
        })),
    isError: error,
    isLoading: !error && !data,
    onNextPage,
    onPreviousPage,
    isFirstPage,
    isLastPage,
    page,
    count: data ? data.count : null,
    lastPage,
  };
};

export default usePlanets;
