"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { experience } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <Box
      id="experience"
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
        <SectionHeading title="Career" subtitle="Professional Experience" />

        <Stack spacing={3}>
          {experience.map((job, index) => (
            <Paper
              key={`${job.company}-${job.period}`}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: 1,
                borderColor: "divider",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  bgcolor: index === 0 ? "primary.main" : "divider",
                },
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                sx={{
                  mb: 2,
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                }}
              >
                <Box>
                  <Typography variant="h5" component="h3">
                    {job.role}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.04)",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                  }}
                >
                  {job.period}
                </Typography>
              </Stack>

              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {job.highlights.map((highlight) => (
                  <Typography
                    key={highlight}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, lineHeight: 1.7 }}
                  >
                    {highlight}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
