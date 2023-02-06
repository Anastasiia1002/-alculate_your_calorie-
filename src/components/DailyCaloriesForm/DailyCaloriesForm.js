import React from 'react';
import { Formik, Form, Field } from 'formik';
import { validationsSchema } from '../../utility/validationsSchema';
import s from './DailyCaloriesForm.module.css';

// const CustomInputComponent = (props) => (
//     <InputField type="number" {...props} />
//   );

export const DailyCaloriesForm = ({setResult}) => {
  const calculateCalories =({height,age,currentWeight,desiredWeight})=>{

const result= 10*currentWeight+6.25*height-5*age-161-10*(currentWeight-desiredWeight)
return result

  }

  return (
    <div className={s.container}>
      <h1 className={s.titleText}>
        Calculate your daily calorie intake right now
      </h1>
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        }}
        onSubmit={(values, { setSubmitting }) => {
          const calories =calculateCalories(values)
          setResult(calories)
       
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
          //   isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
           
            <div className={s.inputBlock}>
            <input
              className={s.inputForm}
              type="number"
              name="height"
              id="height"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Height *'}
              defaultValue={values.height}
            />
         {errors.height && touched.height && errors.height && (
              <div className={s.errorText}>{errors.height}</div>
            )}
        </div>
        <div className={s.inputBlock}>
            <input
              className={s.inputForm}
              type="number"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Age *'}
              defaultValue={values.age}
            />
            {errors.age && touched.age && errors.age && (
              <div className={s.errorText}>{errors.age}</div>
            )}
            </div>
            <div className={s.inputBlock}>
            <input
              className={s.inputForm}
              type="number"
              name="currentWeight"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Current weight *'}
              defaultValue={values.currentWeight}
            />
            {errors.currentWeight &&
              touched.currentWeight &&
              errors.currentWeight && (
                <div className={s.errorText}>{errors.currentWeight}</div>
              )}
              </div>
              <div className={s.inputBlock}>
            <input
              className={s.inputForm}
              type="number"
              name="desiredWeight"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Desired weight *'}
              defaultValue={values.desiredWeight}
            />
            {errors.desiredWeight &&
              touched.desiredWeight &&
              errors.desiredWeight && (
                <div className={s.errorText}>{errors.desiredWeight}</div>
              )}
              </div>
            <span className={s.bloodType}>Blood type *</span>
            <div className={s.groupRadio} role="group">

              <label className={s.inputRadio}>
                <Field
                  className={s.inputField}
                  type="radio"
                  name="bloodType"
                  value="1"
                  checked
                />
                <span className={s.checkmark}></span>
                <span className={s.textBlood}>1</span>
              </label>

              <label className={s.inputRadio}>
                <Field
                  className={s.inputField}
                  type="radio"
                  name="bloodType"
                  value="2"
                />
                <span className={s.checkmark}></span>
                <span className={s.textBlood}>2</span>
              </label>

              <label className={s.inputRadio}>
                <Field
                  className={s.inputField}
                  type="radio"
                  name="bloodType"
                  value="3"
                />
                <span className={s.checkmark}></span>
                <span className={s.textBlood}>3</span>
              </label>
              <label className={s.inputRadio}>
                <Field
                  className={s.inputField}
                  type="radio"
                  name="bloodType"
                  value="4"
                />
                <span className={s.checkmark}></span>
                <span className={s.textBlood}>4</span>
              </label>
            </div>
            <button
            className={s.button}
              type="submit"
                disabled={
                  !values.height ||
                  !values.age ||
                  !values.desiredWeight ||
                  !values.currentWeight
                }
            >
              Start losing weight
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
