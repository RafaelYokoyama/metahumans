import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Input from "@/components/atoms/Input/Input";
import { AuthContext } from "@/contexts/AuthContext";
import CustomAvatar from "@/components/atoms/CustomAvatar/CustomAvatar";
import { useRouter } from "next/navigation";
import Title from "@/components/atoms/Title/Title";

type IHeaderProps = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Header({ searchTerm, handleSearchChange }: IHeaderProps) {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 7 }}>
      <AppBar
        position="fixed"
        sx={{ background: "rgb(10 20 80 / 74%)", backdropFilter: "blur(20px)" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={handleMenuOpen}
            size="large"
            className="cursor-pointer gap-3"
          >
            <CustomAvatar size={30} />
            <Title>{user?.username || "Hero"}</Title>
          </IconButton>
          <Menu
            className="mt-8 "
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>

          <Input
            style={{ flex: 1, marginLeft: "20px" }}
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Nome do Herói 🦸🏿‍♂️"
            icon
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
