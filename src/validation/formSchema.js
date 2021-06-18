//create a schema
import * as yup from 'yup' //import yup

export default yup.object().shape({
    name: yup.string() //validation for name
             .required('A name is required')
             .min(2, 'name must be at least 2 characters'),
    size: yup.string()
             .required('Please select a size')
             .oneOf(['small', 'medium', 'large'], 'Please select a size'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    vegetable: yup.boolean(),
    special: yup.string(),
    crust: yup.string()
              .oneOf(['regular', 'gluten-free', 'stuffed', 'hand-tossed'], 'Please select a crust type')
})