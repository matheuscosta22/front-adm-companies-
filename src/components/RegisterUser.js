import '../styles/RegisterUser.css';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
const axios = require('axios')

function RegisterUser() {
  
  var config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}
  
  const handleClickRegisterUser = (values) => {
    axios.post('http://localhost:8686/api/user', {
      name: values.name,
      email: values.email,
      zipcode: values.zipcode,
      number: values.number,
      password: values.password
    }, config).then(function (response) {
      window.alert("Cadastro efetuado com sucesso")
    }).catch(function (response) {
      window.alert(response)
    })

  }

  const validationRegister = yup.object().shape({
    name: yup.string().min(10).required(),
    email: yup.string().email().required(),
    zipcode: yup.number().min(7).required(),
    number: yup.number().min(1).required(),
    password: yup.string().min(8).required(),
  })

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>
      <Formik initialValues={{}} onSubmit={handleClickRegisterUser} validationSchema={validationRegister}>
        <Form className="register-form">
          <div className="login-form-group">
            <Field name="name" className="form-field" placeholder="Nome"></Field>

            <ErrorMessage component="span" name="name" className="form-error" />
          </div>
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email"></Field>

            <ErrorMessage component="span" name="email" className="form-error" />
          </div>
          <div className="login-form-group">
            <Field name="zipcode" type="number" className="form-field" placeholder="Cep" ></Field>

            <ErrorMessage component="span" name="zipcode" className="form-error" />
          </div>
          <div className="login-form-group">
            <Field name="number" className="form-field" placeholder="N°"></Field>

            <ErrorMessage component="span" name="number" className="form-error" />
          </div>
          <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha" type="password" ></Field>

            <ErrorMessage component="span" name="password" className="form-error" />
          </div>
          <div className="btn-login">
            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterUser;