import { Grid, Typography, Box } from '@material-ui/core';
import Search from './Index';
import Image from 'next/image';

export default function CarsList() {
  return ( 
    <Grid container alignItems="flex-start" spacing={6}>
      <Grid item xs={12} sm={5} md={5} lg={5}>
        <Search makes={[]} models={[]} />
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={7}>  
        <Typography variant="h1" component="h1">
          <Box bgcolor={"rgba(20,120,200,.5)"}>
            <Box 
              padding={3}
              component="header"
              color={"#efefefef"} 
              zIndex={1} 
              fontWeight="fontWeightBold" 
              m={1}
            > 
              Own An Exotic Vehicle Today.
            </Box>
          </Box>
        </Typography>
        <Box zIndex="-1" position="absolute" clone>
        <Image
          src="/assets/photos/lambo-splash.jpg"
          alt="black car"
          layout="fill"
          objectFit="cover"
          quality={75}
        />
        </Box>
      </Grid>
    </Grid>
  )
}