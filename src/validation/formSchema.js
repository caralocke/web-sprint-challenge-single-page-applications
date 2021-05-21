import yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min("name must be at least 2 characters"),
    size: yup.string()
        .oneOf(['cheese', 'pepperoni', 'bbqchicken', 'sausage'], 'Please pick a size'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    bbqchicken: yup.boolean(),
    sausage: yup.boolean(),     
})