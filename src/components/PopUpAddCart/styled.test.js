import React from "react";
import renderer from "react-test-renderer";
import { MainPopUpDiv, SelectPickerStyled, WhiteContainer, Text, SpanButton } from './styled'
import { italic } from "ansi-colors";

describe("styleds",()=>{
    it("MainPopUpDiv",()=>{
        const tree = renderer.create(<MainPopUpDiv />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("SelectPickerStyled",()=>{
        const tree = renderer.create(<SelectPickerStyled />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("WhiteContainer",()=>{
        const tree = renderer.create(<WhiteContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("Text",()=>{
        const tree = renderer.create(<Text />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("SpanButton",()=>{
        const tree = renderer.create(<SpanButton />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})