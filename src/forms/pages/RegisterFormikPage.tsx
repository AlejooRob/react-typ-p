import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ values => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                 .min(2, 'El nombre debe tener al menos 3 carateres')
                                 .max(15, 'El nombre no debe tener mas de 15 carateres')
                                 .required('Este campo es requerido'),
                        email: Yup.string()
                                  .email('Este no es un email valido')
                                  .required('Este campo es requerido'),
                        password1: Yup.string()
                                      .min(6, 'El password debe tener al menos 6 caracteres')
                                      .required('Este campo es requerido'),
                        password2: Yup.string()
                                      .oneOf([Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                      .required('Este campo es requerido')
                    })
                }
            >
                { ({ handleReset }) => (
                    <Form>
                        <MyTextInput label="Nombre" name="name" placeholder="Nombre" />
                        
                        <MyTextInput label="Email" name="email" type="email" placeholder="correo@correo.com" />
                        
                        <MyTextInput label="Password" name="password1" placeholder="******" type="password" />
                        
                        <MyTextInput label="Password" name="password2" placeholder="Repeat password" type="password" />

                        <button type="submit">Create</button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )}
            </Formik>            

                
        </div>
    )
}

export default RegisterFormikPage
