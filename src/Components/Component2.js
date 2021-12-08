import "./Component2.css";
import { Button, Stack, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Yoga from "../Assets/image (3).png";
import Dance from "../Assets/image (1).png";
import Fitness from "../Assets/image.png";

const Component2 = () => {
  return (
    <Box
      className="main"
      minHeight="97vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Grid container display="flex" direction="row" marginX={10}>
          <Grid item>
            {" "}
            <Stack alignItems="center" spacing={-9}>
              <img
                style={{ height: "60vh", width: "100%" }}
                src={Yoga}
                alt="Yoga"
              />
              <Button
                className="btn"
                variant="contained"
                display="flex"
                alignItems="center"
              >
                Join
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Stack alignItems="center" spacing={-9}>
              <img
                style={{ height: "60vh", width: "100%" }}
                src={Dance}
                alt="dance"
              />
              <Button
                className="btn"
                variant="contained"
                display="flex"
                alignItems="center"
              >
                Join
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Stack alignItems="center" spacing={-9}>
              <img
                style={{ height: "60vh", width: "100%" }}
                src={Fitness}
                alt="Fitness"
              />
              <Button
                className="btn"
                variant="contained"
                display="flex"
                alignItems="center"
              >
                Join
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Component2;
