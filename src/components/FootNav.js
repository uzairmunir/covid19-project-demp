import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../App.css'

const useStyles = makeStyles({
  root: {
    position:'absolute',
    right:'0',
    left:'0',
    bottom:'0'
    
  },
});

export default function FootNav({configScreen}) {
  const classes = useStyles();
  console.log(configScreen)
  

  return (
    <BottomNavigation className="bottom_nav"
      value={configScreen[0]}
      onChange={(event, newValue) => {
          console.log(newValue);
          configScreen[1](newValue);
        
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Data" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country Data" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}