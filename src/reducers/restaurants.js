const initialState = {
  allRestaurants: [],
  selectRestaurant: {},
  selectedProductList:[],
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return { ...state, allRestaurants: action.payload.restaurants };
    case 'REMOVE_AMOUNT':
        const newProductsListAmountRemoved = [...state.selectedProductList]

        for(let productToChangeAmountZero of newProductsListAmountRemoved){

          if(productToChangeAmountZero.id === action.payload.idToRemove){
            productToChangeAmountZero.amount = 0
          }
        }
      return { ...state, selectedProductList: newProductsListAmountRemoved };
      case "SET_PRODUCT_AMOUNT":
          const newProductsListAmount = [...state.selectedProductList]
          
          for(let productToChangeAmount of newProductsListAmount){

            if(productToChangeAmount.id === action.payload.amount.itemId){
              productToChangeAmount.amount = action.payload.amount.amount
            }
          }
      return { ...state, selectedProductList: newProductsListAmount }
    case 'SELECTED_RESTAURANT':
      const newProducts = [...action.payload.data.products]
      let productsList = []
      for (let product of newProducts){
        const newProduct = {...product, amount: 0}
        productsList.push(newProduct)
      }
      return { ...state, selectRestaurant: action.payload.data, selectedProductList: productsList}
    default:
      return state;
  }
};

export default restaurants;
