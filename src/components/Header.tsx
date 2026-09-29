"use client";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { navItems, personalInfo } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const drawer = (
    <Box sx={{ width: 260, pt: 2 }} role="presentation">
      <Typography variant="h6" sx={{ px: 2, mb: 1, fontWeight: 700 }}>
        {personalInfo.name.split(" ")[0]}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton onClick={() => handleNavClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(12px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(11, 17, 32, 0.85)"
              : "rgba(248, 250, 252, 0.85)",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Box
              onClick={() => handleNavClick("#hero")}
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Carlos Mbasogo"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 1.5,
                  display: "block",
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Carlos Mbasogo
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, mr: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color="inherit"
                  onClick={() => handleNavClick(item.href)}
                  sx={{ color: "text.secondary", fontWeight: 500 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <ThemeToggle />

            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: "none" }, ml: 0.5, color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
