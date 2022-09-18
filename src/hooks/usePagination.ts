import { useState } from "react";

const usePagination = (count: null | number) => {
  const [page, setPage] = useState<number>(1);
  const isFirstPage = page === 1;

  const isLastPage = count === null ? true : page === Math.ceil(count / 10);

  const onPreviousPage = () => !isFirstPage && setPage(page - 1);

  const onNextPage = () => !isLastPage && setPage(page + 1);

  return { page, isFirstPage, isLastPage, onPreviousPage, onNextPage };
};

export default usePagination;
