import {
  Add,
  DateRange,
  EmojiEmotions,
  InsertPhoto,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:"95%", md:400},
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: "10px",
};
const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        sx={{ position: "fixed", left: "0", bottom: "0", m: 2.5 }}
        title="Add Post"
      >
        <Fab onClick={handleOpen} color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign={"center"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create a Post
          </Typography>
          <Stack mt={1} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{ mr: 1 }}
              alt="Remy Sharp"
              src="../../public/481000412_1293326945282422_8524302006337991592_n.jpg"
            />
            <Typography id="modal-modal-description">Hamza Elzeiny</Typography>
          </Stack>
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="filled-multiline-static"
            multiline
            rows={2.5}
            label="Whats Is in your mind ....."
            variant="filled"
          />
          <Box mt={2.3}>
            <IconButton
              sx={{ p: 1 }}
              color="primary"
              aria-label="add to shopping cart"
            >
              <EmojiEmotions />
            </IconButton>
            <IconButton
              sx={{ color: "purple", p: 1 }}
              aria-label="add to shopping cart"
            >
              <InsertPhoto />
            </IconButton>
            <IconButton
              sx={{ color: "green", p: 1 }}
              aria-label="add to shopping cart"
            >
              <VideoCameraBack />
            </IconButton>
            <IconButton
              sx={{ color: "darkred", p: 1 }}
              color="primary"
              aria-label="add to shopping cart"
            >
              <PersonAdd />
            </IconButton>
          </Box>
          <ButtonGroup
          sx={{mt:2, width:"100%"}}
            variant="contained"
            aria-label="Button group with a nested menu"
          >
            <Button sx={{flexGrow:1}}>Post</Button>
            <Button
              
              size="small"
              aria-label="select merge strategy"
              aria-haspopup="menu"
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
