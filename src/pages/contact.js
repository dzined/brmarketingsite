import React,{useEffect,Component} from 'react'
import Wrapper from '@/components/Layouts/Wrapper'
import { Box } from '@mui/material'
import { Formik } from 'formik';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'                         import mapStyles from './mapStyles'


import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import GeneralWrapper from '@/components/Layouts/GeneralWrapper'
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string(),
  message: Yup.string().required('Required')
});
export default function Contact() {
  return (
   <GeneralWrapper>
    <Box sx={{ width: '100%',height:400 }}>
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: ''
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // submit form values
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          // other fields

          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>

    </Box>
      <div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </div>
   </GeneralWrapper>
  )
}
