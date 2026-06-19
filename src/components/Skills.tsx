import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { skills } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: { xs: 6, md: 8 }, scrollMarginTop: 96 }}
    >
      <Container maxWidth="lg">
        <SectionHeading title="Expertise" subtitle="Core Skills" />

        <Grid container spacing={3}>
          {skills.map((group) => (
            <Grid key={group.category} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {group.category}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ flexWrap: "wrap", gap: 1 }}
                >
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
