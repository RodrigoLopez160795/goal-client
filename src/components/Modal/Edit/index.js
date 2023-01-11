import { Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { RefreshDataContext } from '../../../context/RefreshDataContext';
import { showGoal, updateGoal } from '../../../services/goals';
import Button from '../../Button';
import Error from '../../Error';
import Input from '../../Input';
import { ButtonsWrapper, ModalForm } from '../styles';

function Edit() {
  const { modal, setModal } = useContext(ModalContext);
  const { refresh, setRefresh } = useContext(RefreshDataContext);
  const [goal, setGoal] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    showGoal(modal.id)
      .then((data) => {
        setGoal(...data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {!loading && (
        <Formik
          initialValues={{ name: goal.name, description: goal.description }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = 'Name should exist';
            if (!values.description)
              errors.description = 'Description should exist';
            return errors;
          }}
          onSubmit={(e) => {
            updateGoal(modal.id, e)
              .then(() => {
                setModal({ isOpen: false, type: null, id: null });
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
                  btnType='cancel'
                  text='Cancel'
                />
              </ButtonsWrapper>
            </ModalForm>
          )}
        </Formik>
      )}
    </div>
  );
}

export default Edit;
