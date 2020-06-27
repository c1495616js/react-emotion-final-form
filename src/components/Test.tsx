import React from 'react';
import { Form, Field } from 'react-final-form';
import { formValidation } from '@/utils/validation/form-validation';

export const Test: React.FC = () => {
  return (
    <div>
      <h1>React Final Form and Fonk</h1>
      <h2>Wire transfer form</h2>
      <Form
        onSubmit={(values) => {
          console.log({ values });
        }}
        initialValues={{ name: '' }}
        validate={(values) => formValidation.validateForm(values)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* name */}
            <Field name="name">
              {({ input, meta }) => (
                <div>
                  <label htmlFor="">Name:</label>
                  <input {...input} />
                  {meta.error && meta.touched && (
                    <div>{JSON.stringify(meta)}</div>
                  )}
                </div>
              )}
            </Field>

            {/* submit btn */}
            <div className="buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      />
    </div>
  );
};
