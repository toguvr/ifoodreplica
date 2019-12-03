import React from 'react'
import renderer from 'react-test-renderer';
import { StyledCard, FlexDiv, StyledCardMedia, CardContent, 
    TypographyTitle,  TypographyDescription, TypographyValue, 
    TypographyButtonText, AddRequestButton } 
from './styled';

describe("AddRequestButton", () => {
    it("Should match Snapshot", () => { 
        const tree = renderer
        .create(<AddRequestButton />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("StyledCard", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<StyledCard />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("StyledCardMedia", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<StyledCardMedia />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("CardContent", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<CardContent />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("FlexDiv", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<FlexDiv />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("TypographyTitle", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<TypographyTitle />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("TypographyDescription", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<TypographyDescription />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("TypographyValue", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<TypographyValue />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("TypographyButtonText", () => {
    it("Should match Snapshot", () => {
        const tree = renderer
        .create(<TypographyButtonText />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})