import React, { Fragment } from 'react';
import Header from '../../components/Header';
import FilterByCategory from '../../components/FilterByCategory/index';
import NavBar from '../../components/NavBar';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import OrderInProgress from '../../components/OrderInProgress';
import { getActiveOrder, getProfile } from '../../actions';
import {
  WrapperFixedComponents,
  IconSearch,
  BaseInput,
  ContainerSearch
} from './styled';
import RestaurantCard from '../../components/RestaurantCard';
import {
  fecthRestaurants,
  setSelectedRestaurantDetails
} from '../../actions/fetchRestaurants';
import Splash from '../../components/SplashPage';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterIsSelected: false,
      selectedFilter: 'All'
    };
  }

  componentDidMount = () => {
    this.props.getAllRestaurants();
    this.props.getActiveOrder();
    this.props.getProfile();
  };

  renderFilteredRestaurants = event => {
    if (this.state.selectedFilter === event.target.value) {
      this.setState({
        filterIsSelected: false,
        selectedFilter: 'All'
      });
    } else {
      this.setState({
        filterIsSelected: true,
        selectedFilter: event.target.value
      });
    }
  };

  render() {
    const { allRestaurants } = this.props;

    if (allRestaurants.length === 0){
     return (
      <Splash/>
    ) 
     }else{
     return (
      <Fragment>
        <WrapperFixedComponents>
          <Header title={'Ifuture'} isArrowBackVisible={false} />
          <ContainerSearch onClick={this.props.goToSearchPage}>
            <IconSearch />
            <BaseInput placeholder="Restaurante" />
          </ContainerSearch>
          <FilterByCategory
            clicked={this.renderFilteredRestaurants}
            isSelected={this.state.filterIsSelected}
          />
        </WrapperFixedComponents>
        <div>
          {this.state.filterIsSelected &&
            allRestaurants.map(restaurant => {
              if (restaurant.category === this.state.selectedFilter) {
                return (
                  <RestaurantCard
                    onClick={() => {
                      this.props.getRestaurantDetail(restaurant.id);
                    }}
                    key={restaurant.id}
                    logoUrl={restaurant.logoUrl}
                    name={restaurant.name}
                    deliveryTime={restaurant.deliveryTime}
                    shipping={restaurant.shipping}
                  />
                );
              } else {
                return null;
              }
            })}
          {!this.state.filterIsSelected &&
            allRestaurants.map(restaurant => {
              return (
                <RestaurantCard
                  onClick={() => {
                    this.props.getRestaurantDetail(restaurant.id);
                  }}
                  key={restaurant.id}
                  logoUrl={restaurant.logoUrl}
                  name={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                />
              );
            })}
        </div>
        {this.props.actualOrder ? (
          <OrderInProgress order={this.props.actualOrder} />
        ) : null}
        <NavBar />
      </Fragment>
    );
  }}

}

const mapStateToProps = state => {
  return {
    allRestaurants: state.restaurants.allRestaurants,
    actualOrder: state.requests.actualOrder,
    actualProfile: state.requests.actualProfile,
  };
};

const mapDispatchToProps = dispatch => ({
  goToSearchPage: () => dispatch(push(routes.search)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToAddressPage: () => dispatch(push(routes.address)),
  getAllRestaurants: () => dispatch(fecthRestaurants()),
  getActiveOrder: () => dispatch(getActiveOrder()),
  getRestaurantDetail: restaurantId =>
  dispatch(setSelectedRestaurantDetails(restaurantId)),
  getProfile: () => dispatch(getProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
