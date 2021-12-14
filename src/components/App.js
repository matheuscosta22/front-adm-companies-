import '../styles/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { Link } from 'react-router-dom'
const axios = require('axios')

function App() {

  const handleClickLogin = (values) => {
    axios.post('http://localhost:8686/api/login', {
      email: values.email,
      password: values.password
    }).then(function (response) {
      window.alert("Login efetuado com sucesso")

      localStorage.setItem('token', response['data']['token'])
    }).catch(function (error) {
      window.alert("Email ou senha incorretos")
    });
  }


  const validationLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })

  return (
    <div className="container">
      <h1>login</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email"></Field>

            <ErrorMessage component="span" name="email" className="form-error" />
          </div>
          <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha"></Field>

            <ErrorMessage component="span" name="password" className="form-error" />
          </div>
          <div className="btn-login">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
      <div className="btn-redirect">
        <Link to="/register">
          <button className="button" type="submit">
            Cadastrar
          </button>
        </Link>
      </div>

    </div>
  );
}

export default App;
