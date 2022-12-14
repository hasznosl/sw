import { Card, List, ListItem, ListItemText } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH } from "../constants";
import { Planet } from "../hooks/usePlanets";

interface Props {
  planet: Planet;
  isLoading: boolean;
  skeleton: React.ReactElement;
}

const PlanetCard = ({ planet, skeleton, isLoading }: Props) =>
  isLoading ? (
    skeleton
  ) : (
    <Card sx={{ height: CARD_HEIGHT, width: CARD_WIDTH }}>
      <List>
        <ListItem>
          <ListItemText primary={planet.name} secondary="name" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={planet.rotation_period}
            secondary="rotation period"
          />
        </ListItem>
      </List>
    </Card>
  );

export default PlanetCard;
