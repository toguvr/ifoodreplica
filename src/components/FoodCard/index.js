import React from "react";
import {
    StyledCard, CardContent, StyledCardMedia, TypographyTitle, 
    TypographyDescription, TypographyValue, RequestQuantityWrapper, 
    AddRequestButton, FlexDiv, TypographyButtonText
} from "./styled";
import { Typography } from "@material-ui/core";
import { removeAmount } from '../../actions'
import { connect } from 'react-redux'

export const FoodCard = (props) => {

    const onClickAddRequestButton = () => {
        if (props.foodInfo.amount === 0) {
            props.showPopUpAddCart(props.foodInfo.id)
        } else {
            props.removeAmount(props.foodInfo.id)
        }
    }

    const showRequestQuantity = props.foodInfo.amount > 0 ? (
        <RequestQuantityWrapper>
            <Typography
                color="primary"
                component="p"
                variant="caption"
                align="center"
            >
                {props.foodInfo.amount}
            </Typography >
        </RequestQuantityWrapper>
    ) : (<div></div>)

    return (
        <StyledCard>
            <StyledCardMedia
                image={props.foodInfo.photoUrl}

            />
            <CardContent>
                <FlexDiv>
                    <TypographyTitle
                        component="h3"
                        variant="subtitle1"
                        color="primary"
                    >
                        {props.foodInfo.name}
                    </TypographyTitle >
                    {showRequestQuantity}
                </FlexDiv>
                <TypographyDescription
                    component="p"
                    variant="caption"
                    color="initial"
                >
                    {props.foodInfo.description}
                </TypographyDescription>
                <FlexDiv>
                    <TypographyValue
                        component="p"
                        variant="subtitle2"
                        color="secondary"
                    >
                        R$ {props.foodInfo.price.toFixed(2)}
                    </TypographyValue >
                    <AddRequestButton
                        onClick={onClickAddRequestButton}
                        borderColor={props.foodInfo.amount === 0 ? "black" : "#e8222e"}
                    >
                        <TypographyButtonText
                            borderColor={props.foodInfo.amount === 0 ? "black" : "#e8222e"}
                        >
                            {props.foodInfo.amount === 0 ? "adicionar" : "remover"}
                        </TypographyButtonText >
                    </AddRequestButton>
                </FlexDiv>
            </CardContent>
        </StyledCard>
    )
}

const mapDispatchToProps = dispatch =>({
    removeAmount: (amountToRemove) => dispatch(removeAmount(amountToRemove))
})

export default connect(null, mapDispatchToProps)(FoodCard)