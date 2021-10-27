import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'


export default function form() {
  return( <div>
    <h1>Job Application Form Using Formik</h1>
    <Formik
      initialValues={{
        candidateName: '',
        emailId: '',
        gender: '',
        roleAppliedFor: '',
        terms: ''
      }}

      validate={values => {
        const errors = {};

        if (!values.candidateName) {
          errors.candidateName = 'Candidate Name is required';
        }

        if (!values.emailId) {
          errors.emailId = 'Email is required';
        }else if (!!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)) {
          errors.emailId = 'Email is invalid';
        }

        if (!values.gender) {
          errors.gender = 'Gender is required';
        }
        
        if(!values.roleAppliedFor){
          errors.roleAppliedFor = 'Role is required';
        }

        if(!values.terms){
          errors.terms = 'Terms check is required';
        }
        

        return errors;
      }}
      onSubmit={values => {
        console.log(values);
        console.log('Form Submitted');
      }}
    >
      {formik => {
        return (
          <Form>
           
            <label>Candidate Name : </label>
            <Field type="text" name="candidateName" />
            {" "}{" "}{" "}
            
            <ErrorMessage name="candidateName" />
            <br />
            <br />
            <label>Email Id : </label>
            <Field type="email" name="emailId" />
            {" "}
            {" "}
            {" "}
            
            <ErrorMessage name="emailId" />
            <br />
            <br />
            <label>Gender:</label>
            <label><Field type="radio" name="picked" value="male" />Male</label>
            <label><Field type="radio" name="picked" value="female" />Female</label>
            <label><Field type="radio" name="picked" value="others" />Others</label>
            {" "}
            {" "}
            {" "}
            
            <ErrorMessage name="gender"/>
            <br/>
            <br/>
            <label>Role Applied For: </label>
            <select>
            {/* <Field type="dropdown">  */}
              <option value="" label="Select a role"> Role {" "}</option>
              <option value="Fullstack Developer" label="Fullstack Developer"> {" "}Fullstack Developer </option>
              <option value="JS Developer" label="JS Developer"> {" "}JS Developer </option>
              <option value="Front End Developer" label="Front End Developer"> {" "}Front End Developer </option>
              <option value="Back End Developer" label="Back End Developer"> {" "}Back End Developer </option>
            </select>
              {/* </Field> */}
            {" "}
            {" "}
            {" "}
            
            <ErrorMessage name="roleAppliedFor"/>
            <br/>
            <br/>
            <label>Terms :</label>
            <label><Field type="Checkbox" name="checked" value="terms"/>Accept the terms and conditions</label>
            {" "}
            {" "}
            {" "}
            
            <ErrorMessage name="terms"/>
            <br/>
            <br/>
            <button type="submit">Submit</button>
            
          </Form>
        );
      }}
    </Formik>
  
  </div>
  
);
}




 
