import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

type IAvatarProps = {
  name?: string;
};

function CustomAvatar(props: IAvatarProps) {
  const { name } = props;

  return (
    <Avatar sx={{ width: 56, height: 56, bgcolor: "#000", }}>
    </Avatar>
  );
}

export default CustomAvatar;
