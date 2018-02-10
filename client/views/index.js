import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-flexbox-grids';

// CSS
import '../css/index.scss';

// Auth
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import ResetPassword from './Auth/ResetPassword';
import ForgetPassword from './Auth/ForgetPassword';

// Posts
import NewPost from './Blog/NewPost';
import MyPosts from './Blog/MyPosts';
import EditPost from './Blog/EditPost';
import ViewPost from './Blog/ViewPost';
import ViewPosts from './Blog/ViewPosts';

// Route components
import NotFound from '../components/Auth/NotFound';
import AuthRoute from '../components/Auth/AuthRoute';
import UnauthRoute from '../components/Auth/UnauthRoute';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          {/* Switch used to be able to render only the 404 page if no route match */}
          {/* Auth Routes used to render routes that require to be authorized */}
          {/* Unauth Routes used to render routes that require to be user to not be authorized */}
          {/* Do not use react fragments inside Switch components it will mess up route matching */}
          <Switch>
            {/* Auth Routes */}
            <AuthRoute path="/logout" component={Logout} />
            <UnauthRoute path="/login" component={Login} />
            <UnauthRoute path="/register" component={Register} />
            <UnauthRoute path="/forget-password" component={ForgetPassword} />
            <UnauthRoute path="/reset-password/:token" component={ResetPassword} />

            {/* Post routes */}
            <Route path="/" component={ViewPosts} exact />
            <Route path="/posts" component={ViewPosts} exact />
            <AuthRoute path="/posts/new" component={NewPost} exact />
            <AuthRoute path="/posts/view" component={MyPosts} exact />
            <Route path="/posts/:postId" component={ViewPost} exact/>
            <AuthRoute path="/posts/edit/:postId" component={EditPost} />

            {/* 404 */}
            <NotFound to="/" />
          </Switch>
        </Container>
      </div>
    );
  };
}

export default App;
