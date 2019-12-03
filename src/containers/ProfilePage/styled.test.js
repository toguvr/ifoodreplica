import React from "react";
import renderer from "react-test-renderer";
import { ProfileContainer, AdressContainer, HistoryTitleContainer, HistoryContainer, ProfileFlexDiv, ProfileText, AddressText, HistoryText, AdressTitle} from './styled'

describe("styleds",()=>{
    it("ProfileContainer",()=>{
        const tree = renderer.create(<ProfileContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("AdressContainer",()=>{
        const tree = renderer.create(<AdressContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("HistoryTitleContainer",()=>{
        const tree = renderer.create(<HistoryTitleContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("HistoryContainer",()=>{
        const tree = renderer.create(<HistoryContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("ProfileFlexDiv",()=>{
        const tree = renderer.create(<ProfileFlexDiv />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("ProfileText",()=>{
        const tree = renderer.create(<ProfileText />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("AddressText",()=>{
        const tree = renderer.create(<AddressText />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("HistoryText",()=>{
        const tree = renderer.create(<HistoryText />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("AdressTitle",()=>{
        const tree = renderer.create(<AdressTitle />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})