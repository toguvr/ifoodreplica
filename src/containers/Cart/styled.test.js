import React from 'react'
import renderer from 'react-test-renderer';
import { 
    CartWrapper, DeliveryAdressContainer, DeliveryAdress,
    RestaurantDetailContainer, RestaurantAdress, WaitingTime,
    FreightPrice, FinalPriceContainer, PriceContainer, 
    PaymentContainer, TotalText, ButtonDiv, HeaderDiv
} 
from './styled';

describe("CartWrapper", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<CartWrapper />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("DeliveryAdressContainer", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<DeliveryAdressContainer />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("DeliveryAdress", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<DeliveryAdress />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("RestaurantDetailContainer", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<RestaurantDetailContainer />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("RestaurantAdress", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<RestaurantAdress />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("WaitingTime", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<WaitingTime />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("FreightPrice", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<FreightPrice />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("FinalPriceContainer", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<FinalPriceContainer />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("PriceContainer", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<PriceContainer />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("PaymentContainer", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<PaymentContainer />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("TotalText", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<TotalText />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("ButtonDiv", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<ButtonDiv />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("HeaderDiv", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<HeaderDiv />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})