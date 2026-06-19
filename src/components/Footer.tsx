import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { personalInfo } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {year} {personalInfo.name}. All rights reserved.
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          align="center"
          sx={{ mt: 0.5, display: "block" }}
        >
          Built with Next.js & Material UI
        </Typography>
      </Container>
    </Box>
  );
}
