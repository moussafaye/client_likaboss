import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';

import PageA from './components/PageA/PageA';
import PageB from './components/PageB/PageB';
import PageC from './components/PageC/PageC';
import PageD from './components/PageD/PageD';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Home from './components/Home/Home';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path='/posts' exact component={PageA} />
          <Route path='/posts/search' exact component={PageA} />
          <Route path='/pageb' exact component={PageB} />
          <Route path='/pageb/search' exact component={PageB} />
          <Route path='/pagec' exact component={PageC} />
          <Route path='/pagec/search' exact component={PageC} />
          <Route path='/paged' exact component={PageD} />
          <Route path='/paged/search' exact component={PageD} />
          <Route path='/posts/:id' exact component={PostDetails} />
          <Route path='/pageb/:id' exact component={PostDetails} />
          <Route path='/pagec/:id' exact component={PostDetails} />
          <Route path='/paged/:id' exact component={PostDetails} />
          <Route
            path={['/creators/:name', '/tags/:name']}
            component={CreatorOrTag}
          />
          <Route
            path='/auth'
            exact
            component={() => (!user ? <Auth /> : <Redirect  to='/posts' />)}
          />
          <Route path='/' exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
