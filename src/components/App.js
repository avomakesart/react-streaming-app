import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { StreamDelete } from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import { StreamShow } from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';

import history from '../history';

export default function App() {
  return (
    <>
      <Router history={history}>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </>
  );
}
