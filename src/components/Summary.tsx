import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { summary } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Summary() {
  return (
    <Box
      id="about"
      component="section"
      sx={{ py: { xs: 6, md: 8 }, scrollMarginTop: 96 }}
    >
      <Container maxWidth="lg">
        <SectionHeading title="About" subtitle="Professional Summary" />
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}
          >
            {summary}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
