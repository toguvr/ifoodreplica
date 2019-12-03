import React, { useEffect } from 'react';
import Header from "../../components/Header";
import { ProfileContainer, ProfileText, ProfileFlexDiv, AdressContainer, AdressTitle, HistoryContainer, HistoryTitleContainer, HistoryText, AddressText } from './styled'
import Edit from '@material-ui/icons/Edit';
import NavBar from '../../components/NavBar';
import CartCard from "../../components/CartCard";
import { connect } from 'react-redux'
import { getProfile, getOrdersHistory, getFullAddress } from '../../actions'
import { routes } from "../Router";
import { push } from "connected-react-router";
import Splash from '../../components/SplashPage';

const ProfilePage = (props) => {

    useEffect(() => {
        props.getOrdersHistory()
        props.getProfile()
        props.getFullAddress()
    }, [])

    const { actualProfile, allOrders } = props



    if (!allOrders){
        return (
         <Splash/>
       ) 
        }else{

            const listOrders = allOrders.map((order, index) => {
                return <CartCard
                    key={index}
                    title={order.restaurantName}
                    date={order.createdAt}
                    price={order.totalPrice}
                />
            })

    return (
        <div>
            <Header isArrowBackVisible={false} isExitVisible={true} title="Meu Perfil" />
            <ProfileContainer>
                <ProfileFlexDiv>
                    <ProfileText>{actualProfile.name}</ProfileText>
                    <Edit onClick={()=>props.goToProfileEditPage()}/>
                </ProfileFlexDiv>
                <ProfileText>{actualProfile.email}</ProfileText>
                <ProfileText>{actualProfile.cpf}</ProfileText>
            </ProfileContainer>
            <AdressContainer>
                <ProfileFlexDiv>
                    <AdressTitle>Endereço Cadastrado</AdressTitle>
                    <Edit onClick={()=>props.goToAddressProfileEditPage()}/>
                </ProfileFlexDiv>
                <AddressText>{actualProfile.address}</AddressText>
            </AdressContainer>
            <HistoryTitleContainer>
                <ProfileText>Histórico de pedidos</ProfileText>
            </HistoryTitleContainer>
            <HistoryContainer>
                {listOrders.length > 0 ? listOrders : <HistoryText>Você não realizou nenhum pedido</HistoryText>}
            </HistoryContainer>
            <NavBar/>
        </div>
    )
        }
}

const mapStateToProps = state => ({
    allOrders: state.requests.allOrders,
    actualProfile: state.requests.actualProfile,
})

const mapDispatchToProps = dispatch => ({
    getOrdersHistory: () => dispatch(getOrdersHistory()),
    getProfile: () => dispatch(getProfile()),
    goToProfileEditPage: () => dispatch(push(routes.editSignUp)),
    goToAddressProfileEditPage: () => dispatch(push(routes.editAdress)),
    getFullAddress: () => dispatch(getFullAddress()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)


