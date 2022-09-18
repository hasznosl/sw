import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { ApiResponse, rootUrl } from ".";

export interface Person {
  name: string;
  hair_color: string;
}

const PAGE_SIZE = 10;

const usePeople = ({ search }: { search?: string }) => {
  const [page, setPage] = useState<number>(1);

  const ref = useRef<ApiResponse<Person>>();

  const { data, error } = useSWR<ApiResponse<Person>>(
    `${rootUrl}/people?page=${page}${search ? `&search=${search}` : ""}`,
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
    people: data
      ? data.results
      : Array.from({ length: 10 }, (_, index) => ({
          name: "",
          hair_color: "",
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

export default usePeople;
