import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Chip,
  Button,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import {
  BookOpen,
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router";

const SpecialtyCard = ({ specialty }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        width: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Header */}
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            {specialty.name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            {specialty.purpose.substring(0, 120)}...
          </Typography>
        }
        avatar={<BookOpen size={24} />}
        action={<Chip label="Specialty" size="small" color="primary" />}
        sx={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          color: "white",
        }}
      />

      <CardContent>
        {/* Technologies */}
        <Box mb={2}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Технологияҳо
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {specialty.technologies.slice(0, 3).map((tech, i) => (
              <Chip key={i} label={tech} variant="outlined" color="primary" />
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Stats */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={4} textAlign="center">
            <Target size={16} style={{ color: "#6366f1" }} />
            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
            >
              Қобилиятҳо
            </Typography>
            <Typography fontWeight="bold" color="primary">
              {specialty.skills.technical.length + specialty.skills.soft.length}
            </Typography>
          </Grid>

          <Grid item xs={4} textAlign="center">
            <Briefcase size={16} style={{ color: "#6366f1" }} />
            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
            >
              Касбҳо
            </Typography>
            <Typography fontWeight="bold" color="primary">
              {specialty.careerOpportunities.length}
            </Typography>
          </Grid>

          <Grid item xs={4} textAlign="center">
            <GraduationCap size={16} style={{ color: "#6366f1" }} />
            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
            >
              Қадамҳо
            </Typography>
            <Typography fontWeight="bold" color="primary">
              {specialty.roadmap.length}
            </Typography>
          </Grid>
        </Grid>

        {/* Salary */}
        <Box
          sx={{
            bgcolor: "grey.100",
            p: 2,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Box display="flex" alignItems="center" mb={1}>
            <TrendingUp
              size={16}
              style={{ color: "#6366f1", marginRight: 6 }}
            />
            <Typography variant="subtitle2" fontWeight="bold">
              Маоши миёна
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Навкор:{" "}
            <Typography component="span" fontWeight="bold" color="primary.main">
              {specialty.salaryAndMarket.junior}
            </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Мутахасиси таҷрибадор:{" "}
            <Typography component="span" fontWeight="bold" color="primary.main">
              {specialty.salaryAndMarket.senior}
            </Typography>
          </Typography>
        </Box>
      </CardContent>

      {/* Footer */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Box display="flex" alignItems="center">
          <Users size={16} style={{ marginRight: 6, color: "gray" }} />
          <Typography variant="body2" color="text.secondary">
            {specialty.relatedSpecializations.length} related
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          endIcon={<ExternalLink size={15} />}
        >
          <Link to={`/info/${specialty._id}`}>
            <p className="text-[13px]">Маълумоти бештар</p>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default SpecialtyCard;
