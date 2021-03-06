export const required = (value) => {
    console.log(value);
    if(value){
        return undefined
    }
    return 'Field is required'
}
export const maxLength = (maxLength) => (value) => {
    if(value && value.length > maxLength){
        return `Max length is ${maxLength}`
    }
    return undefined
}