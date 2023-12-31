import React from "react";
import Avatar from "@mui/material/Avatar";


type IAvatarProps = {
  size?: number;
};

function CustomAvatar({ size }: IAvatarProps) {
  return (
    <Avatar
      sx={{
        width: size || 56,
        height: size || 56,
        bgcolor: "#000",
      }}
    ></Avatar>
  );
}

export default CustomAvatar;
