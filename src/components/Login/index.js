import { Formik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { login } from '../../services/sessions';
import Button from '../Button';
import Error from '../Error';
import Input from '../Input';
import { ButtonWrapper, FormWrapper, Title, Wrapper } from './styles';

function Login() {
  const [invalid, setInvalid] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>Login</Title>
      <Formik
        initialValues={{ email_username: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email_username)
            errors.email_username = 'Email or username required';
          if (values.email_username.includes('@')) {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                values.email_username
              )
            )
              errors.email_username = 'Invalid email address';
          } else if (values.email_username.length < 6)
            errors.email_username =
              'Invalid username. Should be at least 6 characters';
          if (!values.password) errors.password = 'Password required';
          else if (values.password.length < 6)
            errors.password = 'Password should be at least 6 characters';
          return errors;
        }}
        onSubmit={(e) => {
          let credentials = {};
          if (e.email_username.includes('@')) {
            credentials = {
              email: e.email_username,
              password: e.password,
            };
          } else {
            credentials = {
              username: e.email_username,
              password: e.password,
            };
          }
          login(credentials)
            .then((data) => {
              setUser(data);
              navigate('/monthly-goals');
            })
            .catch(() => {
              setInvalid('Invalid credentials');
              setTimeout(() => setInvalid(false), 2000);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <FormWrapper onSubmit={handleSubmit}>
            {errors.email_username && touched.email_username && (
              <Error error={errors.email_username} />
            )}
            {invalid && <Error error={invalid} />}
            <Input
              label='Email or username'
              name='email_username'
              placeholder='Rolo95 or rodrigo.lopez.160795@hotmail.com'
              value={values.email_username}
              onChange={handleChange}
              onBlur={handleBlur}
              icon={true}
              iconType='user'
            />
            {errors.password && touched.password && (
              <Error error={errors.password} />
            )}
            <Input
              label='Password'
              name='password'
              type='password'
              placeholder='******'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              icon={true}
              iconType='password'
            />
            <ButtonWrapper>
              <Button type='submit' text='Send' btnType='secondary' size='l' />
            </ButtonWrapper>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Login;
