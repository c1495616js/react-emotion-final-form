import { createFinalFormValidation } from '@lemoncode/fonk-final-form';
import { Validators } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    name: [Validators.required.validator],
  },
};

export const formValidation = createFinalFormValidation(validationSchema);
