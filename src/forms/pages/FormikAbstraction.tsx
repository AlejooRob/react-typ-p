import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput }  from '../components';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('This element is required'),
                        lastName: Yup.string()
                                    .max(12, 'Must be 12 characters or less')
                                    .required('This element is required'),
                        email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Email is required'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'You must accept the terms and conditions'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'This option is not allowed')
                                    .required('This element is required')
                    })
                }
            >
                {
                    (formik) => (
                        <Form >
                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder="First Name"
                            />
                            
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder="Last Name"
                            />
                            
                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeholder="Email"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType"  >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms & Conditions" name="terms" />
                            

                            <button type="submit" >Submit</button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    )
}
