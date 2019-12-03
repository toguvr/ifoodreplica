import React from "react";
import renderer from "react-test-renderer";
import {WrapperFixedComponents, BaseInput, ContainerSearch, IconSearch} from './styled'

describe('styleds', ()=>{
  it ('WrapperFixedComponents',()=>{
    const tree = renderer.create(<WrapperFixedComponents />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it ('BaseInput',()=>{
    const tree = renderer.create(<BaseInput />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it ('ContainerSearch',()=>{
    const tree = renderer.create(<ContainerSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it ('IconSearch',()=>{
    const tree = renderer.create(<IconSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  })
}) 