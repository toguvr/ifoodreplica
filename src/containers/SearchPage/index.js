import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import {
  fecthRestaurants,
  setSelectedRestaurantDetails
} from '../../actions/fetchRestaurants';
import RestaurantCard from '../../components/RestaurantCard';
import {
  ContainerSearch,
  ContainerSearchPage,
  IconSearch,
  BaseInput,
  TextSearchPage
} from './styled';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredRestaurants: [],
      inputValue: '',
      textSearchPage: 'Busque por nome de restaurante',
      loading: true
    };
  }

  componentDidMount = () => {
    this.props.getAllRestaurants();
  };

  handleInput = event => {
    this.setState(
      {
        ...this.state,
        inputValue: event.target.value
      },
      () => this.filterRestaurants()
    );
  };

  filterRestaurants = function() {
    const filtered = this.props.allRestaurants.filter(restaurant => {
      return restaurant.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });
    if (filtered.length === 0) {
      this.setState({
        ...this.state,
        filteredRestaurants: [],
        textSearchPage: 'Não encontramos :('
      });
    } else {
      this.setState({
        ...this.state,
        filteredRestaurants: filtered,
        textSearchPage: ''
      });
    }
  };

  renderFilteredRestaurants = () => {
    return this.state.filteredRestaurants.map(restaurant => {
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
    });
  };
  render() {
    return (
      <div>
        <Header title={'Busca'} isArrowBackVisible={true} />
        <ContainerSearchPage>
          <ContainerSearch>
            <IconSearch />

            <BaseInput
              placeholder="Restaurante"
              onChange={this.handleInput}
              value={this.state.inputValue}
              autoFocus={true}
            />
          </ContainerSearch>
          <TextSearchPage>{this.state.textSearchPage}</TextSearchPage>
        </ContainerSearchPage>
        <div>
          {this.state.inputValue === ''
            ? null
            : this.renderFilteredRestaurants()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allRestaurants: state.restaurants.allRestaurants
  };
};

const mapDispatchToProps = dispatch => ({
  getAllRestaurants: () => dispatch(fecthRestaurants()),
  getRestaurantDetail: restaurantId =>
    dispatch(setSelectedRestaurantDetails(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
