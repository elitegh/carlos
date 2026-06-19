import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  return (
    <Box id={id} sx={{ mb: 4, scrollMarginTop: 96 }}>
      <Typography
        variant="overline"
        color="primary"
        sx={{ fontWeight: 700, letterSpacing: 2 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h4" component="h2" sx={{ mt: 0.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
