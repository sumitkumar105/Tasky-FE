import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";

const CardComponent = () => {
  return (
    //comments added in cardcomponents
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
        {/* Item 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description 1
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select</InputLabel>
                <Select>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Item 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description 2
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select</InputLabel>
                <Select>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description 2
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select</InputLabel>
                <Select>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description 2
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select</InputLabel>
                <Select>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more grid items as needed */}
      </Grid>
    </Container>
  );
};
export default CardComponent;
