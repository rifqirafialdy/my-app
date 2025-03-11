import { FC } from "react";
import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  as?: string;
}

const FormField: FC<FormFieldProps> = ({ label, name, type = "text", as }) => (
  <div className="flex flex-col space-y-1 mb-4">
    <label htmlFor={name} className="text-lg font-medium text-gray-700">
      {label}
    </label>
    <Field
      type={type}
      name={name}
      as={as}
      placeholder={label}
      className="w-full border-b border-black bg-transparent outline-none text-lg p-2 focus:border-blue-500 transition-all duration-200"
    />
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

export default FormField;
