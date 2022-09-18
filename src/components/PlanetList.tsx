import { Box, IconButton, TextField, Typography } from "@mui/material";
import PlanetCard from "../components/PlanetCard";
import usePlanets from "../hooks/usePlanets";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Skeleton from "./Skeleton";
import useDebounce from "../hooks/useDebounce";

const PlanetList = () => {
  const {
    debouncedValue: debouncedSearch,
    setValue: setSearch,
    value: search,
  } = useDebounce();

  const {
    planets,
    isFirstPage,
    isLastPage,
    page,
    onPreviousPage,
    onNextPage,
    isLoading,
    lastPage,
  } = usePlanets({ search: debouncedSearch });

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={3}
        flexWrap="wrap"
      >
        <Typography variant="h5">Planets</Typography>
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
        {planets.map((planet, index) => (
          <Box key={index} sx={{ margin: 2 }}>
            <PlanetCard
              planet={planet}
              isLoading={isLoading}
              skeleton={<Skeleton />}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PlanetList;
