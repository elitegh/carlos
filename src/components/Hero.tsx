"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { personalInfo } from "@/data/resume";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
        scrollMarginTop: 96,
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "radial-gradient(ellipse at 30% 20%, rgba(21, 101, 192, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, rgba(0, 131, 143, 0.1) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 30% 20%, rgba(21, 101, 192, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, rgba(0, 131, 143, 0.06) 0%, transparent 50%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ alignItems: "flex-start" }}>
          <Chip
            icon={<WorkOutlineOutlinedIcon />}
            label="Available for opportunities"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 500 }}
          />

          <Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
                lineHeight: 1.15,
                mb: 1,
              }}
            >
              {personalInfo.name}
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              {personalInfo.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
              {personalInfo.subtitle}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{ flexWrap: "wrap", gap: { xs: 1, sm: 3 } }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <EmailOutlinedIcon fontSize="small" color="action" />
              <Typography
                component="a"
                href={`mailto:${personalInfo.email}`}
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {personalInfo.email}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PhoneOutlinedIcon fontSize="small" color="action" />
              <Typography
                component="a"
                href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {personalInfo.phone}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <LocationOnOutlinedIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {personalInfo.location}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              {personalInfo.github && (
                <Tooltip title="GitHub" arrow>
                  <IconButton
                    component="a"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    size="small"
                    sx={{ color: "text.secondary" }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {personalInfo.linkedin && (
                <Tooltip title="LinkedIn" arrow>
                  <IconButton
                    component="a"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    size="small"
                    sx={{ color: "text.secondary" }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollTo("#experience")}
            >
              View Experience
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollTo("#contact")}
            >
              Get in Touch
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
