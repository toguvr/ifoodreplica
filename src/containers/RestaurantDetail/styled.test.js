import React from 'react';
import renderer from 'react-test-renderer';
import {
  Wrapper,
  PrincipalDish,
  SideDish,
  CardDiv,
  CardImage,
  CardDatesContainers,
  CardTitle,
  CardDeliveryCategory,
  CardDeliveryPriceRight,
  CardDeliveryTimeLeft,
  CardDeliveryAdress,
  WrapperPrincipalDish,
  WrapperSideDish
} from './styled';

describe('styleds', () => {
  it('Wrapper', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('PrincipalDish', () => {
    const tree = renderer.create(<PrincipalDish />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SideDish', () => {
    const tree = renderer.create(<SideDish />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardDiv', () => {
    const tree = renderer.create(<CardDiv />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardImage', () => {
    const tree = renderer.create(<CardImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardDatesContainers', () => {
    const tree = renderer.create(<CardDatesContainers />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardTitle', () => {
    const tree = renderer.create(<CardTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardDeliveryCategory', () => {
    const tree = renderer.create(<CardDeliveryCategory />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardDeliveryPriceRight', () => {
    const tree = renderer.create(<CardDeliveryPriceRight />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardDeliveryTimeLeft', () => {
    const tree = renderer.create(<CardDeliveryTimeLeft />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CardDeliveryAdress', () => {
    const tree = renderer.create(<CardDeliveryAdress />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('WrapperPrincipalDish', () => {
    const tree = renderer.create(<WrapperPrincipalDish />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('WrapperSideDish', () => {
    const tree = renderer.create(<WrapperSideDish />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
