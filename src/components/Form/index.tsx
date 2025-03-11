"use client";
import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import useContacts from "@/hooks/useContacts";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactForm: FC = () => {
  const { submitContactForm } = useContacts();

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await submitContactForm(values);
          alert("Form submitted successfully!");
          resetForm();
        } catch (error) {
          console.error("Submission error:", error);
          alert("Something went wrong. Please try again.");
        }
      }}
    >
      {({ isSubmitting }) => (
        <div className="max-w-lg mx-auto flex flex-col space-y-6 p-6">
          <h1 className="text-4xl font-medium text-gray-800">Let’s build something cool together</h1>
          <Form className="flex flex-col space-y-4">
            <FormField label="Name" name="name" />
            <FormField label="Email" name="email" type="email" />
            <FormField label="Subject" name="subject" />
            <FormField label="Message" name="message" as="textarea" />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-black text-white text-lg font-bold px-6 py-3 rounded-full w-fit mt-4 border border-black transition
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"}`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
