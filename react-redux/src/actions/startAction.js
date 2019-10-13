export const ageUpAsync = (val) => {
    return {
        type: "AGE_UP",
        payload: val
    }
};
export const ageUp = val => {
    return dispach => {
        // dispach(loading());
        setTimeout( () => {
            dispach(ageUpAsync(val))
        },5000)
    }
}

export const ageDown = (val) => {
    return {
        type: "AGE_DOWN",
        payload: val
    }
};
export const loading = () => {
    return {
        type:'LOADING'
    }
}