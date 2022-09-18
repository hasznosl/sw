import { Box, IconButton, Typography } from "@mui/material";
import PlanetCard from "../components/PlanetCard";
import usePlanets from "../hooks/usePlanets";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const PlanetList = () => {
  const { planets, isFirstPage, isLastPage, page, onPreviousPage, onNextPage } =
    usePlanets();

  return (
    <>
      {" "}
      <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
        <Typography variant="h5">Planets</Typography>
        <IconButton disabled={isFirstPage} onClick={onPreviousPage}>
          <KeyboardArrowLeft />
        </IconButton>
        <Typography>{page}</Typography>
        <IconButton disabled={isLastPage} onClick={onNextPage}>
          <KeyboardArrowRight />
        </IconButton>
      </Box>
      {planets.map((planet) => (
        <Box key={planet.name} sx={{ margin: 2 }}>
          <PlanetCard planet={planet} />
        </Box>
      ))}
    </>
  );
};
export default PlanetList;
