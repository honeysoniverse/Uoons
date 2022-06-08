const addProductReducer = (state = {
    category: "",
    subCategory: "",
    title: "",
    salePrice: "",
    offerPrice: "",
    mrpPrice: "",
    description: "",
    returnPolicy: "",
    additionalInformationTitle: "",
    additionalInformationDescription: "",
    salientFeature: ""

}, action) => {
    switch (action.type) {

        case "setCategory":
            return state = { ...state, category: action.payload }
        case "setSubCategory":
            return state = { ...state, subCategory: action.payload }
        case "setTitle":
            return state = { ...state, title: action.payload }

        case "setSale":
            return state = { ...state, salePrice: action.payload }

        case "setOffer":
            return state = { ...state, offerPrice: action.payload }

        case "setMrp":
            return state = { ...state, mrpPrice: action.payload }

        case "setDescription":
            return state = { ...state, description: action.payload }

        case "setReturnPolicy":
            return state = { ...state, returnPolicy: action.payload }

        case "setAdditionalInfoTitle":
            return state = { ...state, additionalInformationTitle: action.payload }

        case "setAdditionalInfoDesc":
            return state = { ...state, additionalInformationDescription: action.payload }

        case "setSalientFeatures":
            return state = { ...state, salientFeature: action.payload }
        default:
            return state;
    }
};
export default addProductReducer;