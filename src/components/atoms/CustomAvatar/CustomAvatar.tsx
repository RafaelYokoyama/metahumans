import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

type IAvatarProps = {
  name?: string;
};

function CustomAvatar(props: IAvatarProps) {
  const { name } = props;

  return (
    <Avatar sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>
      {name}
    </Avatar>
  );
}

export default CustomAvatar;
