import { AddTodo } from "./components/AddTodo";

import { Container, Grid, Stack, Typography } from "@mui/material";
import { DisplayData } from "./components/DisplayData";

import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { Todos } from "./Models/TodoModel";

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <Container>
      <Stack component="div">
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          ToDo App
        </Typography>
      </Stack>
      {/* Add Task  */}

      <AddTodo />

      {/* dispaly data */}
      {todos.map((todo: Todos) => (
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
          mb={2}
          key={todo.id}
        >
          <DisplayData todo={todo} />
        </Grid>
      ))}
    </Container>
  );
}

export default App;
