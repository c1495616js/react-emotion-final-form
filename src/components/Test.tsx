import React from 'react';
import { Form, Field } from 'react-final-form';

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
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* name */}
            <Field name="name">
              {({ input }) => (
                <div>
                  <label htmlFor="">Name:</label>
                  <input {...input} />
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
