import { Card, List, ListItem, ListItemText } from "@mui/material";
import { Planet } from "../hooks/usePlanets";

interface Props {
  planet: Planet;
}

const PlanetCard = ({ planet }: Props) => (
  <Card>
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
