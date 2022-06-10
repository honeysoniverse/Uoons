const addProductReducer = (state = {
    category: "",
    subCategory: "",
    title: "",
    salePrice: "",
    offerPrice: "",
    mrpPrice: "",
    description: "",
    returnPolicy: "",
    additionalInformation: [{
        additionalInfoDescTitle: "",
        additionalInfoDescData: "",
    }],
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
            return state = { ...state, 
                additionalInformation: [
                ...state.additionalInformation, 
                {
                    additionalInfoDescTitle: state.additionalInfoDescTitle,
                    action: action.payload

                }
            ]} 

        // case "setAdditionalInfoDesc":
        //     return state = { ...state, additionalInformation: [
        //         ...state.additionalInformation, {
        //             additionalInfoDescTitle: additionalInfoDescTitle,
        //             additionalInfoDescData: action.payload

        //         }
        //     ]} 

        case "setSalientFeatures":
            return state = { ...state, salientFeature: action.payload }
        default:
            return state;
    }
};
export default addProductReducer;