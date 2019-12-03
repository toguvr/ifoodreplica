import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../style/constants";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import Feed from '../Feed';
import RestaurantDetail from '../RestaurantDetail';
import ProfilePage from "../ProfilePage";
import Cart from "../Cart";
import SearchPage from "../SearchPage";
import AddressPage from "../AddressPage";
import ProfileEditPage from "../ProfileEditPage";
import EditAddressPage from "../EditAddress";

export const routes = {
  login: '/',
  signUp: '/signup',
  address: '/signup/address',
  feed: '/feed',
  search: '/search',  
  detail: '/detail/restaurant',
  cart: '/cart',
  profile: '/profile',
  editSignUp: '/edit/signup',
  editAdress: '/edit/adress'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <PrivateRoute path={routes.editAdress} component={EditAddressPage} />
        <PrivateRoute path={routes.editSignUp} component={ProfileEditPage} />
        <PrivateRoute path={routes.profile} component={ProfilePage} />
        <PrivateRoute path={routes.search} component={SearchPage} />
        <PrivateRoute path={routes.detail} component={RestaurantDetail} />
        <PrivateRoute path={routes.cart} component={Cart} />
        <PrivateRoute path={routes.feed} component={Feed} />
        <PrivateRoute path={routes.address} component={AddressPage}/>
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
