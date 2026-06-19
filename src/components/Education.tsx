"use client";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { education } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        scrollMarginTop: 96,
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.02)"
            : "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading title="Background" subtitle="Education" />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            border: 1,
            borderColor: "divider",
            maxWidth: 600,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(100, 181, 246, 0.1)"
                    : "rgba(21, 101, 192, 0.08)",
                color: "primary.main",
                display: "flex",
              }}
            >
              <SchoolOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="h6">{education.degree}</Typography>
              <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>
                {education.school}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {education.period}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
