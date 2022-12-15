import { Formik } from 'formik';
import Button from '../Button';
import Error from '../Error';
import Input from '../Input';
import { FormWrapper, Title, Wrapper } from './styles';

function Login() {
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
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <FormWrapper>
            {errors.email_username && touched.email_username && (
              <Error error={errors.email_username} />
            )}
            <Input
              label='Email or username'
              name='email_username'
              placeholder='Rolo95 or rodrigo.lopez.160795@hotmail.com'
              value={values.email_username}
              onChange={handleChange}
              onBlur={handleBlur}
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
            />
            <Button type='submit' text='Send' btnType='secondary' size='l' />
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Login;
