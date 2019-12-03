import React from 'react'
import renderer from 'react-test-renderer';
import { ContainerEditAddressPage, InputAddress, InputNumber, InputHouse, InputNeighborhood, InputCity, InputState } 
from './styled';

describe("ContainerEditAddressPage", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<ContainerEditAddressPage />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("InputAddress", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<InputAddress />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})


describe("InputNumber", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<InputNumber />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})


describe("InputHouse", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<InputHouse />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("InputNeighborhood", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<InputNeighborhood />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("InputCity", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<InputCity />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("InputState", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<InputState />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})