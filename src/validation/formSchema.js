//create a schema
import * as yup from 'yup' //import yup

export default yup.object().shape({
    name: yup.string() //validation for name
             .min(2, 'name must be at least 2 characters')
})