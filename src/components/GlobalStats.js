import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from './img/image.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'20px 30px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color: '#de2323',
  }
}));

export default function GlobalStats() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      let response = await fetch("https://disease.sh/v3/covid-19/all")
      let data = await response.json();
      delete data.criticalPerOneMillion;
      delete data.recoveredPerOneMillion;
      delete data.oneCasePerPeople;
      delete data.oneDeathPerPeople;
      delete data.oneTestPerPeople;
      delete data.population;
      delete data.casesPerOneMillion;
      delete data.activePerOneMillion;
      delete data.updated;
      delete data.deathsPerOneMillion;
      delete data.testsPerOneMillion;
      delete data.deathsPerOneMillion;
      delete data.active;

      setGlobalData(data);
      console.log(data)
    }
    getData();
  }, [])

  return (
    <div className={classes.root}>
       <div className="img">
         <img src={Image} />
          </div>
      <Grid container spacing={4} className="grid">
        {
          Object.keys(globalData).map((key, index) => {
            return (

              <Grid item xs={12} sm={4} key={index}>
                <Paper className={classes.paper}>
            <h2 className={classes.title}>{key.replace(/_/g," ").toUpperCase()}</h2>
            <h3>{globalData[key]}</h3>
                  </Paper>
              </Grid>
            )
          }
          )
        }
      </Grid>
    </div>
  );
}