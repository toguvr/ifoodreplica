import React from 'react';
import renderer from 'react-test-renderer';
import { MainCartCardDiv, CardTitle, CardDate, CardPrice } from './styled';

describe("MainCartCardDiv", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<MainCartCardDiv />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("CardTitle", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<CardTitle />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("CardDate", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<CardDate />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("CardPrice", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<CardPrice />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})