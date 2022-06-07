
export const setEmailValue=(emailValue)=>{
    return(dispatch)=>dispatch({
        type:"setEmail", 
        payload:emailValue})}

export const setPasswordValue=(passwordValue)=>{
    return (dispatch)=>dispatch({
        type:"setPassword",
         payload:passwordValue})}

export const setCategoryValue=(categoryValue)=>{
    return (dispatch) => dispatch({
        type:"setCategory",
        payload:categoryValue
    })
}

export const setSubCategoryValue=(subCategoryValue)=>{
    return (dispatch) => dispatch({
        type:"setSubCategory",
        payload:subCategoryValue
    })
}


export const setTitleValue=(titleValue)=>{
    return (dispatch) => dispatch({
        type:"setTitle",
        payload:titleValue
    })}

    
export const setSalePrice=(salePriceValue)=>{
    return (dispatch) => dispatch({
        type:"setSale",
        payload:salePriceValue
    })}

    
export const setOfferPrice=(offerPriceValue)=>{
    return (dispatch) => dispatch({
        type:"setOffer",
        payload:offerPriceValue
    })}

    
export const setMrpPrice=(mrpPriceValue)=>{
    return (dispatch) => dispatch({
        type:"setMrp",
        payload:mrpPriceValue
    })}

    export const setDescriptionValue=(descriptionValue)=>{
        return (dispatch) => dispatch({
            type:"setDescription",
            payload:descriptionValue
    })}

        export const setReturnPolicyValue=(returnPolicyValue)=>{
            return (dispatch) => dispatch({
                type:"setReturnPolicy",
                payload:returnPolicyValue
    })}

    export const setAdditionalInfoTitle=(addtionalTitleValue)=>{
        return (dispatch) => dispatch({
            type:"setAdditionalInfoTitle",
            payload:addtionalTitleValue
})}

export const setAdditionalInfoDesc=(addtionalDescValue)=>{
    return (dispatch) => dispatch({
        type:"setAdditionalInfoDesc",
        payload:addtionalDescValue
})}

export const setSalientFeatures=(salientFeaturesValue)=>{
    return (dispatch) => dispatch({
        type:"setSalientFeatures",
        payload:salientFeaturesValue
})}
