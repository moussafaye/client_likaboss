import React, { useState } from 'react';
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const PageD = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(
        `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
      );
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };



  return (
    <>
      <AppBar
        className={classes.appBar}
        position='static'
        color='inherit'
        align='center'
      >
        <Typography variant='h6' align='center'></Typography>
        <Typography variant='h6' align='center'></Typography>
        <Typography variant='h4' align='center'>
          Nos différents Profils
        </Typography>
        <Typography variant='h6' align='center'></Typography>
        <Typography variant='h6' align='center'></Typography>
      </AppBar>
      <AppBar
        className={classes.appBar}
        position='static'
        color='inherit'
        align='center'
      >
        <Button variant='h1' align='center'>
          Maths
        </Button>
        <Button variant='h1' align='center'>
          PC
        </Button>
        <Button variant='h1' align='center'>
          SVT
        </Button>
        <Button variant='h1' align='center'>
          HG
        </Button>
        <Button variant='h1' align='center'>
          Français
        </Button>
        <Button variant='h1' align='center'>
          Anglais
        </Button>
        <Button variant='h1' align='center'>
          Espagnol
        </Button>
      </AppBar>
      <Grow in>
        <Container maxWidth='xl'>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar
                className={classes.appBarSearch}
                position='static'
                color='inherit'
              >
                <TextField
                  onKeyDown={handleKeyPress}
                  name='search'
                  variant='outlined'
                  label='Chercher un profil'
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label='Search Tags'
                variant='outlined'
              /> */}
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  variant='contained'
                  color='primary'
                >
                  Recherche
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {!searchQuery && !tags.length && (
                <Paper className={classes.pagination} elevation={6}>
                  <Pagination page={page} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default PageD;
