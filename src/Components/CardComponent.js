import { Grid, Container } from "@mui/material";
import TaskCard from "./controls/TaskCard";
const CardComponent = () => {
  return (
    <Container
      sx={{
        padding: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: "10px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TaskCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TaskCard />
        </Grid>
      </Grid>
    </Container>
  );
};
export default CardComponent;
