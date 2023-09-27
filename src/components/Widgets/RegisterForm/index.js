import React,{useState} from 'react'
import { Formik ,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Stack } from '@mui/material';



export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validationSchema = Yup.object({
    your_name: Yup.string()
      .required('Name is required'),

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    company_name: Yup.string().required('Company Name is required'),

    // renewal_day: Yup.number()
    //   .min(1, 'Day must be between 1-31')
    //   .max(31, 'Day must be between 1-31')
    //   .required('Renewal day is required'),

    // renewal_month: Yup.number()
    //   .min(1, 'Month must be between 1-12')
    //   .max(12, 'Month must be between 1-12')
    //   .required('Renewal month is required'),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate form submission (you can replace this with your API call)
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    console.log(values)
      const html = `
      <table>

      <tr>
        <td>Name</td>
        <td>${values.your_name}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>${values.company_name}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>${values.email}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>${values.renewal_day} / ${values.renewal_month}</td>
      </tr>
      </table>
      `;

      const emailData = {
        From: 'digital@barerock.group',
        To: 'matt@dzined.com',
        Subject: 'Register Interest Form',
        HtmlBody: html,

      }

      try {
        fetch('/api/postmark', {
          method:'POST',
          body: JSON.stringify(emailData),
        }).then(res => res.json())
        .then(data => console.log(data))

        console.log('Email sent!');
      } catch (error) {
        console.error(error);
      }
      // submit form values


  };
  return (
    <Formik
    initialValues={{
      your_name: '',
      email: '',
      company_name: '',
      // renewal_date_day: '',
      // renewal_date_month: ''
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {formik => (
          <form onSubmit={formik.handleSubmit}>
      <Stack direction="column" spacing={2} justifyContent="space-between">
     <div>
      <Field

     type="text"
     style={{width:'100%'}}
          variant="standard"
          className={"borderField"}
          label="Company Name"
          name="company_name"
          placeholder="Enter your Company Name"
          value={formik.values.company_name}
          onChange={formik.handleChange}
          error={formik.touched.company_name && Boolean(formik.errors.company_name)}
          helperText={formik.touched.company_name && formik.errors.company_name}
        />
                      <ErrorMessage name="company_name" component="div" className="error" />
                      </div>
                      <div>
        <Field
        type="text"
        style={{width:'100%'}}
          variant="standard"
          className={"borderField"}
          label="Name"
          name="your_name"
          placeholder="Enter your Name"
          value={formik.values.your_name}
          onChange={formik.handleChange}
          error={formik.touched.your_name && Boolean(formik.errors.your_name)}
          helperText={formik.touched.your_name && formik.errors.your_name}
        />                      <ErrorMessage name="your_name" component="div" className="error" />

</div><div>
        <Field
        type="text"
        style={{width:'100%'}}
          variant="standard"
          className={"borderField"}
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
                              <ErrorMessage name="email" component="div" className="error" />

</div>
        {/* // other fields */}

        <Button className="gradientButton" variant="contained" type="submit"  disabled={isSubmitting}>Submit</Button>
        </Stack>
      </form>
    )}
  </Formik>
  )
}
