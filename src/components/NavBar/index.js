import React, { useState } from "react";
import { MainNavDiv, IconImg } from './styled'
import { routes } from '../../containers/Router'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

export const NavBar = props => {

    const [page, setPage] = React.useState('');

    const { goToFeedPage, goToCartPage, goToProfilePage, actualPage } = props

    const imgIcon = {
        home: require('../../assets/homepage.svg'),
        cart: require('../../assets/cart.svg'),
        profile: require('../../assets/avatar.svg'),
        homeSelected: require('../../assets/homepageSelected.svg'),
        cartSelected: require('../../assets/shopping-cart.svg'),
        profileSelected: require('../../assets/avatarSelected.svg'),
    }

    return (
        <MainNavDiv>
            <IconImg onClick={goToFeedPage} src={actualPage === "/feed" ? imgIcon.homeSelected : imgIcon.home} alt="home icon" />
            <IconImg onClick={goToCartPage} src={actualPage === "/cart" ? imgIcon.cartSelected : imgIcon.cart} alt="cart icon" />
            <IconImg onClick={goToProfilePage} src={actualPage === "/profile" ? imgIcon.profileSelected : imgIcon.profile} alt="profile icon" />
        </MainNavDiv>
    )
}

const mapStateToProps = state => ({
    actualPage: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.feed)),
    goToCartPage: () => dispatch(push(routes.cart)),
    goToProfilePage: () => dispatch(push(routes.profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)


