import React, { useState } from 'react';
import {
  CartWrapper,
  DeliveryAdressContainer,
  DeliveryAdress,
  RestaurantDetailContainer,
  RestaurantAdress,
  WaitingTime,
  FreightPrice,
  FinalPriceContainer,
  PriceContainer,
  PaymentContainer,
  TotalText,
  ButtonDiv,
  HeaderDiv,
  EmptyCart
} from './styled';
import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FoodCard from '../../components/FoodCard';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton';
import { connect } from 'react-redux';
import { placeOrder } from '../../actions';

export const Cart = props => {
  const [checkBoxChecked, setCheckBoxChecked] = useState({
    cash: false,
    creditcard: false
  });

  const handleCheckBox = event => {
    setCheckBoxChecked({
      [event.target.name]: !checkBoxChecked[event.target.name]
    });
  };

  const mainButtonName = 'Confirmar';

  let previousPrice = 0;

  const filteredProductsByAmount = props.selectedProductList.filter(
    productHasAmount => {
      return productHasAmount.amount !== 0;
    }
  );

  props.selectedProductList.map(productsToPay => {
    let actualPriceProduct = productsToPay.amount * productsToPay.price;
    previousPrice = actualPriceProduct + previousPrice;
  });

  const totalShipping = props.selectRestaurant.shipping
    ? Number(props.selectRestaurant.shipping).toFixed(2)
    : '00.00';

  const subTotal = previousPrice + Number(totalShipping);

  const payOrder = () => {
    if (filteredProductsByAmount.length > 0) {
      let newFilteredList = [];
      for (let filteredProduct of filteredProductsByAmount) {
        const newObjProduct = {
          id: filteredProduct.id,
          quantity: filteredProduct.amount
        };
        newFilteredList.push(newObjProduct);
      }
      let paymentType;

      if (checkBoxChecked.cash) {
        paymentType = "money"
      } else if (checkBoxChecked.creditcard) {
        paymentType = "creditcard"
      } else {
        paymentType = "nao informado"
      }

      props.placeOrder(newFilteredList, paymentType, props.selectRestaurant.id);
    }
  };

  return (
    <CartWrapper>
      <HeaderDiv>
        <Header title="Meu Carrinho" isArrowBackVisible={false} />
      </HeaderDiv>
      <DeliveryAdressContainer>
        <DeliveryAdress>Endereço de entrega:</DeliveryAdress>
        <Typography component="p" variant="subtitle2" color="secondary">
          {props.actualProfile}
        </Typography>
      </DeliveryAdressContainer>
      {filteredProductsByAmount.length === 0 ? (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      ) : (
          <RestaurantDetailContainer>
            <Typography component="p" variant="subtitle2" color="primary">
              {props.selectRestaurant.name}
            </Typography>
            <RestaurantAdress>{props.selectRestaurant.address}</RestaurantAdress>
            <WaitingTime>{props.selectRestaurant.deliveryTime} min</WaitingTime>
          </RestaurantDetailContainer>
        )}
      {props.selectedProductList.map((productOnCart, index) => {
        if (productOnCart.amount !== 0) {
          return <FoodCard key={index} foodInfo={productOnCart} />;
        }
      })}
      <PriceContainer>
        <FreightPrice component="p" variant="subtitle2" color="secondary">
          Frete R$ {filteredProductsByAmount.length > 0 ? totalShipping : '0.00'}
        </FreightPrice>
        <FinalPriceContainer>
          <Typography
            component="p"
            variant="subtitle1"
            color="secondary"
            fontWeight="fontWeightBold"
          >
            SUBTOTAL
          </Typography>
          <TotalText>
            R$ {filteredProductsByAmount.length > 0 ? subTotal.toFixed(2) : '00.00'}
          </TotalText>
        </FinalPriceContainer>
      </PriceContainer>
      <PaymentContainer>
        <Typography component="p" variant="subtitle1" color="secondary">
          Forma de pagamento
        </Typography>
        <Divider color="secondary" />
        <FormControlLabel
          control={
            <Checkbox
              name="cash"
              onClick={handleCheckBox}
              checked={checkBoxChecked.cash}
            />
          }
          label="Dinheiro"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="creditcard"
              onClick={handleCheckBox}
              checked={checkBoxChecked.creditcard}
              value="creditcard"
            />
          }
          label="Cartão de crédito"
        />
      </PaymentContainer>
      <ButtonDiv>
        <MainButtonComponent onButtonClick={payOrder} title={mainButtonName} />
      </ButtonDiv>
      <NavBar />
    </CartWrapper>
  );
};
const mapStateToProps = state => ({
  selectedProductList: state.restaurants.selectedProductList,
  selectRestaurant: state.restaurants.selectRestaurant,
  actualProfile: state.requests.actualProfile.address
});
const mapDispatchToProps = dispatch => ({
  placeOrder: (products, paymentMethod, restaurantId) =>
    dispatch(placeOrder(products, paymentMethod, restaurantId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
