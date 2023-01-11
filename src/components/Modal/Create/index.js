import { Formik } from 'formik';
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { RefreshDataContext } from '../../../context/RefreshDataContext';
import { UserContext } from '../../../context/UserContext';
import { createGoal } from '../../../services/goals';
import Button from '../../Button';
import Error from '../../Error';
import Input from '../../Input';
import { ButtonsWrapper, ModalForm } from '../styles';

function Create() {
  const { user } = useContext(UserContext);
  const { refresh, setRefresh } = useContext(RefreshDataContext);
  const { modal, setModal } = useContext(ModalContext);
  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = 'Name should exist';
        if (!values.description)
          errors.description = 'Description should exist';
        return errors;
      }}
      onSubmit={(e) => {
        const goal = {
          name: e.name,
          description: e.description,
          post_by: user.username,
        };
        createGoal(goal)
          .then(() => {
            setModal({
              ...modal,
              isOpen: false,
            });
            setRefresh(!refresh);
          })
          .catch(console.log);
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
        <ModalForm onSubmit={handleSubmit}>
          {errors.name && touched.name && <Error error={errors.name} />}
          <Input
            label='Put a name to your goal'
            name='name'
            placeholder='My goal'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description && (
            <Error error={errors.description} />
          )}
          <Input
            label='Description'
            name='description'
            placeholder='Describe your goal'
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ButtonsWrapper>
            <Button type='submit' text='Done' />
            <Button
              handler={() =>
                setModal({
                  ...modal,
                  isOpen: false,
                })
              }
              text='Cancel'
              btnType='cancel'
            />
          </ButtonsWrapper>
        </ModalForm>
      )}
    </Formik>
  );
}

export default Create;
