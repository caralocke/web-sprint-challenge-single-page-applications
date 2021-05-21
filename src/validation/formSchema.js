import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, `name must be at least 2 characters`),
    size: yup.string()
        .oneOf(['small', 'medium', 'large'], 'Please pick a size'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    bbqchicken: yup.boolean(),
    sausage: yup.boolean(),
    special: yup.string(),     
})