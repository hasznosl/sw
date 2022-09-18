import { Box, IconButton, TextField, Typography } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import usePeople from "../hooks/usePeople";
import PersonCard from "./PersonCard";
import Skeleton from "./Skeleton";
import useDebounce from "../hooks/useDebounce";

const PeopleList = () => {
  const {
    debouncedValue: debouncedSearch,
    setValue: setSearch,
    value: search,
  } = useDebounce();

  const {
    people,
    isFirstPage,
    isLastPage,
    page,
    onPreviousPage,
    onNextPage,
    isLoading,
    lastPage,
  } = usePeople({ search: debouncedSearch });

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
        <Typography variant="h5">People</Typography>
        <IconButton disabled={isFirstPage} onClick={onPreviousPage}>
          <KeyboardArrowLeft />
        </IconButton>
        <Typography>{lastPage ? `${page} / ${lastPage}` : page}</Typography>
        <IconButton disabled={isLastPage} onClick={onNextPage}>
          <KeyboardArrowRight />
        </IconButton>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="search"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={3}
        flexWrap="wrap"
      >
        {people.map((person, index) => (
          <Box key={index} sx={{ margin: 2 }}>
            <PersonCard
              person={person}
              skeleton={<Skeleton />}
              isLoading={isLoading}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PeopleList;
