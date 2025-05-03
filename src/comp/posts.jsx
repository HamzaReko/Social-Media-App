import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  FavoriteBorder,
  Favorite,
  BookmarkBorder,
  Bookmark,
} from "@mui/icons-material";
import { useState } from "react";
const Posts = ({ theme }) => {
  const myCards = [
    {
      letter: "K",
      color: "#053ea8",
      userName: "Ali Hassan",
      imgLink:
        "https://images.pexels.com/photos/31887348/pexels-photo-31887348/free-photo-of-elegant-spring-white-flowers-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      letter: "A",
      color: "#a020f0",
      userName: "do3aa Fouad",
      imgLink:
        "https://images.pexels.com/photos/31477151/pexels-photo-31477151/free-photo-of-blossoming-cherry-blossom-tree-in-seoul-s-historic-palace.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      letter: "N",
      color: "#008080",
      userName: "Alaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "M",
      color: "#053ea8",
      userName: "Walaa Ahmed",
      imgLink:
        "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: "3" }}>
      <Card sx={{ my: 4, maxWidth: { xs: "97%", sm: 444 }, mx: "auto" }}>
        <CardHeader
          avatar={
            <Avatar
              src="../../public/481000412_1293326945282422_8524302006337991592_n.jpg"
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            />
          }
          action={
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Hamza Elzeiny"
          subheader="September 14, 2024"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Checkbox
            sx={{ ml: "auto" }}
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
          />
        </CardActions>
      </Card>
      {myCards.map((item, i) => {
        return (
          <Card
            key={i}
            sx={{ my: 4, maxWidth: { xs: "97%", sm: 444 }, mx: "auto" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    color: theme.palette.getContrastText(item.color),
                    bgcolor: item.color,
                  }}
                  aria-label="recipe"
                >
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2024"
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Checkbox
                sx={{ ml: "auto" }}
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
              />
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Posts;
