import { Card, List, ListItem, ListItemText } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH } from "../constants";
import { Person } from "../hooks/usePeople";

interface Props {
  person: Person;
  skeleton: React.ReactElement;
  isLoading: boolean;
}

const PersonCard = ({ person, isLoading, skeleton }: Props) =>
  isLoading ? (
    skeleton
  ) : (
    <Card sx={{ height: CARD_HEIGHT, width: CARD_WIDTH }}>
      <List>
        <ListItem>
          <ListItemText primary={person.name} secondary="name" />
        </ListItem>
        <ListItem>
          <ListItemText primary={person.hair_color} secondary="hair color" />
        </ListItem>
      </List>
    </Card>
  );

export default PersonCard;
