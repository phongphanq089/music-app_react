
import { Grid, Stack, Box, Typography } from "@mui/material";
import React from "react";
import "./styles/app.css";
import { TextStyles, ColorStyles } from "../src/theme/Designs";
import { Headphones } from "feather-icons-react";
import video1 from "../src/accest/video/edm.mp4";

const App = () => {

  return (
    <div class="container">
      <Grid container spacing={ 0 } sx={ {
        mx: 'auto',
        maxWidth: ( theme ) => theme.breakpoints.values.lg
      } }>
        <Box width="100%" >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box>
              <Headphones size={ 70 } color={ ColorStyles.base.white } />
              <Typography fontSize={ TextStyles.displayMd.bold } color={ ColorStyles.base.white } >MUSIC PLAYER</Typography>
            </Box>
            <Stack width={ "100%" } direction="row" alignItems="center" justifyContent="space-around">
              <Typography fontSize={ TextStyles.textLg.medium } color={ ColorStyles.base.white } >Home</Typography>
              <Typography fontSize={ TextStyles.textLg.medium } color={ ColorStyles.base.white } >MUSIC</Typography>
              <Typography fontSize={ TextStyles.textLg.medium } color={ ColorStyles.base.white } >About</Typography>
              <Typography fontSize={ TextStyles.textLg.medium } color={ ColorStyles.base.white } >Atrist</Typography>
              <Typography fontSize={ TextStyles.textLg.medium } color={ ColorStyles.base.white } >Image</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box my={ 4 }>
          <Grid container >
            <Grid xs={ 12 } md={ 4 }>
              <Box>
                <Typography fontSize={ TextStyles.displayLg.bold } color={ ColorStyles.base.white }>
                  Enjoy Your Favorite Live Music Concert.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={ 12 } md={ 8 }>
              <video width="100%" height="600" controls>
                <source src={ video1 } type="video/webm" />
              </video>
            </Grid>
          </Grid>
        </Box>
        <Box>

        </Box>
      </Grid>
    </div>
  );
};

export default App;
