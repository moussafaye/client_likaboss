import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './Styles.css';

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import { getPosts } from '../actions/posts';
import useStyles from '../styles';
import memories from './memories.png';

const PageB = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='fixed' color='inherit'>
        <Typography
          className={classes.heading}
          variant='h2'
          align='left'
        ></Typography>
        <Typography className={classes.heading} variant='h6' align='center'>
          Profils les plus recherchés
        </Typography>
        <Typography
          className={classes.heading}
          variant='h2'
          align='right'
        ></Typography>
        <img className={classes.image} src={memories} alt='icon' height='60' />
      </AppBar>
      <AppBar className={classes.appBar} position='fixed' color='inherit'>
        <Typography
          className={classes.heading}
          variant='h2'
          align='left'
        ></Typography>
        <Typography className={classes.heading} variant='h6' align='center'>
          Maths | PC | SVT | Français | Anglais | Espagnol | HG |
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>

      {/*Whatssapp button */}
      <Link
        to='https://api.whatsapp.com/send?phone=+221772988078&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.'
        class='float'
        target='_blank'
      >
        <i class='fab fa-whatsapp my-float'></i>
      </Link>
    </Container>
  );
};

export default PageB;
