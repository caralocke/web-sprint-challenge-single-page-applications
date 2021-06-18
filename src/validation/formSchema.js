//create a schema
import * as yup from 'yup' //import yup

export default yup.object().shape({
    name: yup.string() //validation for name
             .required('A name is required')
             .min(2, 'name must be at least 2 characters'),
    size: yup.string()
             .oneOf(['small', 'medium', 'large'], 'Please select a size'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    vegetable: yup.boolean(),
    special: yup.string()
})