import { useDispatch } from "react-redux";

import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { deleteTask } from "../store/features/todoSlice";
import { Todos } from "../Models/TodoModel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#FFF6E9",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface Props {
  todo: Todos;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteModal = ({ todo, open, setOpen }: Props) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="delete modal"
      aria-describedby="delete modal"
    >
      <Box sx={{ ...style, width: 800 }}>
        <Typography variant="h2">Are you sure?</Typography>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={() => dispatch(deleteTask(todo.id))}
          >
            YES
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleClose}
          >
            Back
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
