"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Light mode" : "Dark mode"}>
      <IconButton
        onClick={() => setMode(isDark ? "light" : "dark")}
        color="inherit"
        aria-label="toggle theme"
        size="small"
      >
        {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  );
}
