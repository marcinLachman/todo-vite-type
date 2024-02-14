import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { addTask } from "../store/features/todoSlice";
import { useDispatch } from "react-redux";

export const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
        mb={2}
      >
        <Grid item xs={10}>
          <TextField
            id="task input"
            label="Add Task"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(event) => setInput(event.target.value)}
            inputProps={{ minLength: 2, maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={2}>
          {input ? (
            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "1rem" }}
              fullWidth
            >
              Add Task
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "1rem" }}
              fullWidth
              disabled
            >
              Add Task
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};
