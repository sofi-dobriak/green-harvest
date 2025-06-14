import * as Yup from 'yup';
import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import { loadFromLS, saveToLS } from '../../utils/localStorage';
import { FORM_LS_KEY } from '../../constants/constants';
import useModalFormStore from '../../zustand/modalOrderForm';
import { useInfoMessageStore } from '../../zustand/infoMessage';

const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const feedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Required'),
  email: Yup.string().matches(regExp, 'Example of email: test@example.com').required('Required'),
  comment: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
});

interface InitialValues {
  username: string;
  email: string;
  comment: string;
}

export interface FormValues {
  username: string;
  email: string;
  comment: string;
}

const initialValues: InitialValues = loadFromLS(FORM_LS_KEY) || {
  username: '',
  email: '',
  comment: '',
};

const OrderForm = () => {
  const { closeModalForm } = useModalFormStore();
  const { openMessage } = useInfoMessageStore();

  const handleSubmit = (values: FormValues, action: FormikHelpers<FormValues>) => {
    console.log('Form submitted:', values);

    localStorage.removeItem(FORM_LS_KEY);
    action.resetForm();

    closeModalForm();
    openMessage();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={feedbackSchema}>
      {({ errors, touched, values, setFieldValue, dirty }) => {
        const handleFieldChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          const { name, value } = e.target;
          setFieldValue(name, value);

          const updateValues = { ...values, [name]: value };
          saveToLS(FORM_LS_KEY, updateValues);
        };

        return (
          <Form>
            <div className='relative'>
              <Field
                name='username'
                onChange={handleFieldChange}
                placeholder='Full Name'
                className={clsx(
                  'border rounded-[30px] py-3.5 px-4 mb-6 w-full outline-none duration-150 hover:border-[var(--hover-border-color)] focus:border-[var(--hover-border-color)]',
                  {
                    'border-[var(--form-invalid-border)]': touched.username && errors.username,
                    'border-[var(--form-valid-border)]': touched.username && !errors.username,
                    'border-[var(--form-base-border)]': !touched.username,
                  }
                )}
              />
              <ErrorMessage
                name='username'
                component='span'
                className='absolute bottom-[6px] left-[10px] text-[var(--error-text-color)] text-sm'
              />
            </div>

            <div className='relative'>
              <Field
                onChange={handleFieldChange}
                name='email'
                placeholder='Email'
                className={clsx(
                  'border rounded-[30px] py-3.5 px-4 mb-6 w-full outline-none duration-150 hover:border-[var(--hover-border-color)] focus:border-[var(--hover-border-color)]',
                  {
                    'border-[var(--form-invalid-border)]': touched.email && errors.email,
                    'border-[var(--form-valid-border)]': touched.email && !errors.email,
                    'border-[var(--form-base-border)]': !touched.email,
                  }
                )}
              />
              <ErrorMessage
                name='email'
                component='span'
                className='absolute bottom-[6px] left-[10px] text-[var(--error-text-color)] text-sm'
              />
            </div>

            <div className='relative'>
              <Field
                onChange={handleFieldChange}
                name='comment'
                as='textarea'
                placeholder='Comment'
                className={clsx(
                  'border rounded-[15px] py-3.5 px-4 mb-8 w-full resize-none outline-none hover:border-[var(--hover-border-color)] focus:border-[var(--hover-border-color)]',
                  {
                    'border-[var(--form-invalid-border)]': touched.comment && errors.comment,
                    'border-[var(--form-valid-border)]': touched.comment && !errors.comment,
                    'border-[var(--form-base-border)]': !touched.comment,
                  }
                )}
              />
              <ErrorMessage
                name='comment'
                component='span'
                className='absolute bottom-[16px] left-[10px] text-[var(--error-text-color)] text-sm'
              />
            </div>

            <button
              disabled={!dirty}
              type='submit'
              aria-label='Button for submitting the order form'
              className={clsx(
                'flex items-center justify-center rounded-[30px] border w-full h-[52px] font-semibold text-[18px] leading-[1.1] uppercase text-[var(--light-text-color)]   duration-150 ease-in-out',
                dirty
                  ? ' cursor-pointer bg-[var(--secondary-bg-section)] hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-button-bg)] focus:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)] focus:border-[var(--hover-border-color)]'
                  : 'cursor-not-allowed border-none bg-[var(--form-base-border)] text-[var(--light-text-color)]'
              )}
            >
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OrderForm;
