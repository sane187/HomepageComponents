import { Typography, Stack, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import "./Component.css";
import React from "react";

function Component() {
  return (
    <Box
      className="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="97vh"
    >
      <Box>
        <Typography className="heading" variant="h2" component="h2" mb={5}>
          How Does This Work?
        </Typography>
        <Grid container marginX={10} spacing={8} minWidht="100vw">
          <Grid item>
            {" "}
            <Stack direction="column" spacing={4} className="item">
              <Typography variant="h5" component="h5" lineHeight="1.1">
                Physical <br />
                Profiling
              </Typography>
              <Typography
                sx={{
                  width: 170,
                  fontSize: 18,
                  lineHeight: 1.1
                }}
              >
                At the start, every user is diagnosed on various physical
                parameters <br />
                to create a physical profile to get a training plan.
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              className="item"
              padding={5}
            >
              <Typography variant="h5" component="h5" lineHeight="1.1">
                Personalized <br />
                Training <br /> Sessions
              </Typography>
              <Typography
                sx={{
                  width: 170,
                  fontSize: 18,
                  lineHeight: 1.1
                }}
              >
                Based on the physical profiles generated at the start of
                training we create <br /> personalized training programs.
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            {" "}
            <Stack
              className="item"
              direction="column"
              spacing={4}
              alignItems="center"
              padding={5}
            >
              <Typography variant="h5" component="h5" lineHeight="1.1">
                Measurable <br />
                Result
              </Typography>
              <Typography
                sx={{
                  width: 170,
                  fontSize: 18,
                  lineHeight: 1.1
                }}
              >
                There are definite parameters which are regularly monitored to
                measure the growth of each athlete.
              </Typography>
            </Stack>{" "}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Component;
