"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { personalInfo } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{ py: { xs: 6, md: 8 }, scrollMarginTop: 96 }}
    >
      <Container maxWidth="lg">
        <SectionHeading title="Connect" subtitle="Get in Touch" />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            border: 1,
            borderColor: "divider",
            textAlign: "center",
            background: (theme) =>
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(21, 101, 192, 0.1) 0%, rgba(0, 131, 143, 0.08) 100%)"
                : "linear-gradient(135deg, rgba(21, 101, 192, 0.05) 0%, rgba(0, 131, 143, 0.04) 100%)",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            Let&apos;s build something great together
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 520, mx: "auto" }}
          >
            I&apos;m open to discussing senior engineering roles, architecture
            consulting, and frontend leadership opportunities.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              href={`mailto:${personalInfo.email}`}
              component="a"
            >
              Email Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneOutlinedIcon />}
              href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
              component="a"
            >
              {personalInfo.phone}
            </Button>
            {personalInfo.github && (
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                component="a"
              >
                GitHub
              </Button>
            )}
            {personalInfo.linkedin && (
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                component="a"
              >
                LinkedIn
              </Button>
            )}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
