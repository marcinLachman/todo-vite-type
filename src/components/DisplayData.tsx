import { useState } from "react";

import { Todos } from "../Models/TodoModel";
import { DeleteModal } from "./DeleteModal";

import { useDispatch } from "react-redux";

import { Button, ButtonGroup, Grid, TextField } from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface Props {
  todo: Todos;
}

export const DisplayData = ({ todo }: Props) => {
  const [editInput, setEditInput] = useState<string>("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditInput(todo.taskName);
    dispatch(
      editTask({
        id: todo.id,
        taskName: editInput,
        isDone: !todo.isDone,
        isTaskDone: todo.isTaskDone,
      })
    );
  };

  const handleIsDoneTask = () => {
    dispatch(
      isDoneTask({
        id: todo.id,
        isTaskDone: !todo.isTaskDone,
      })
    );
  };

  return (
    <>
      <Grid item xs={8}>
        <TextField
          hiddenLabel
          value={!editInput ? todo.taskName : editInput}
          variant="outlined"
          id="task input"
          fullWidth
          disabled={!todo.isDone}
          sx={{
            m: 1,
            textDecorationLine: todo.isTaskDone ? "line-through" : "",
          }}
          onChange={(e) => setEditInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        {!todo.isTaskDone ? (
          <ButtonGroup
            variant="contained"
            aria-label="Action buttons"
            fullWidth
          >
            <Button
              sx={{ padding: "1rem" }}
              onClick={handleIsDoneTask}
              disabled={!todo.isTaskDone ? false : true}
            >
              {!todo.isTaskDone ? <DoneIcon /> : <ClearIcon />}
            </Button>
            <Button onClick={handleEdit} color="secondary">
              {!todo.isDone ? (
                <EditIcon />
              ) : (
                <DoneOutlineIcon color="primary" />
              )}
            </Button>
            <Button onClick={() => setOpen(true)} color="error">
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        ) : (
          <ButtonGroup
            variant="contained"
            aria-label="Action buttons"
            fullWidth
          >
            <Button
              sx={{ padding: "1rem" }}
              onClick={handleIsDoneTask}
              disabled
            >
              <DoneIcon />
            </Button>
            <Button onClick={handleEdit} disabled>
              <EditIcon />
            </Button>
            <Button onClick={() => setOpen(true)} color="error">
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        )}
      </Grid>
      <DeleteModal open={open} setOpen={setOpen} todo={todo} />
    </>
  );
};
