import * as Yup from 'yup';
import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import { loadFromLS, saveToLS } from '../../utils/localStorage';
import { FORM_LS_KEY } from '../../constants/constants';

const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const feedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Required'),
  email: Yup.string().matches(regExp, 'Example of email: test@example.com').required('Required'),
  comment: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
});

interface InitialValues {
  name: string;
  email: string;
  comment: string;
}

export interface FormValues {
  name: string;
  email: string;
  comment: string;
}

const initialValues: InitialValues = loadFromLS(FORM_LS_KEY) || {
  name: '',
  email: '',
  comment: '',
};

const OrderForm = () => {
  const handleSubmit = (values: FormValues, action: FormikHelpers<FormValues>) => {
    console.log('Form submitted:', values);

    localStorage.removeItem(FORM_LS_KEY);
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={feedbackSchema}
      >
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
                  onChange={handleFieldChange}
                  name='name'
                  placeholder='Full Name'
                  className={clsx('border rounded-[30px] py-3.5 px-4 mb-6 w-full outline-none', {
                    'border-[#e74a3b]': errors.name && touched.name,
                    'border-[#3cbc81]': !errors.name && touched.name,
                    'border-[#858585]': !touched.name,
                  })}
                />
                <ErrorMessage
                  name='name'
                  component='span'
                  className='absolute bottom-[6px] left-[10px] text-[#e74a3b] text-sm'
                />
              </div>

              <div className='relative'>
                <Field
                  onChange={handleFieldChange}
                  name='email'
                  placeholder='Email'
                  className={clsx('border rounded-[30px] py-3.5 px-4 mb-6 w-full outline-none', {
                    'border-[#e74a3b]': errors.name && touched.name,
                    'border-[#3cbc81]': !errors.name && touched.name,
                    'border-[#858585]': !touched.name,
                  })}
                />
                <ErrorMessage
                  name='email'
                  component='span'
                  className='absolute bottom-[6px] left-[10px] text-[#e74a3b] text-sm'
                />
              </div>

              <div className='relative'>
                <Field
                  onChange={handleFieldChange}
                  name='comment'
                  as='textarea'
                  placeholder='Comment'
                  className={clsx(
                    'border border-[#858585] rounded-[15px] py-3.5 px-4  mb-8 w-full resize-none outline-none',
                    {
                      'border-[#e74a3b]': errors.name && touched.name,
                      'border-[#3cbc81]': !errors.name && touched.name,
                      'border-[#858585]': !touched.name,
                    }
                  )}
                />
                <ErrorMessage
                  name='comment'
                  component='span'
                  className='absolute bottom-[16px] left-[10px] text-[#e74a3b] text-sm'
                />
              </div>

              <button
                disabled={!dirty}
                type='submit'
                className={clsx(
                  'flex items-center justify-center rounded-[30px] border w-full h-[52px] font-semibold text-[18px] leading-[1.1] uppercase text-[#fbfbfb]   duration-300 ease-in-out',
                  dirty
                    ? ' cursor-pointer bg-[#7a3145] hover:text-[#7a3145] hover:bg-[#d4bfc4] focus:bg-[#fbfbfb] focus:text-[#7a3145] focus:border-[#7a3145]'
                    : 'cursor-not-allowed border-none bg-gray-500 text-[#fbfbfb] '
                )}
              >
                Send
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default OrderForm;
