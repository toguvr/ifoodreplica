import React, { useState, useEffect } from 'react';
import { HorizontalScroll, Button } from './styled';
import { connect } from 'react-redux';

const FilterByCategory = props => {
  const [color, setColor] = useState('black');

  useEffect(() => {
    props.isSelected ? setColor('red') : setColor('black');
  }, [props.isSelected]);

  const categories = [
    'Árabe',
    'Asiática',
    'Hamburguer',
    'Italiana',
    'Sorvetes',
    'Carnes',
    'Baiana',
    'Petiscos',
    'Mexicana',
    'Teste'
  ];

  return (
    <HorizontalScroll>
      {categories.map((category, index) => {
        return (
          <Button
            onClick={props.clicked}
            key={index}
            value={category}
            color={color}
          >
            {category}
          </Button>
        );
      })}
    </HorizontalScroll>
  );
};

const mapStateToProps = state => ({
  allRestaurants: state.restaurants.allRestaurants
});

export default connect(mapStateToProps)(FilterByCategory);
