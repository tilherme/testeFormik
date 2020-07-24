import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './App.css';
import schema from './schema';


function App() {
  function onSubmit(values,actions){
    console.log('usuario', values)
  }


  
  return (
    <div className="App">
      <Formik 
      validationSchema={schema}
      onSubmit= {onSubmit}
      validateOnMount
      initialValues={{
        name: '',
        email: '',
      }}
      render={({ values,errors,touched,isvalid })=>(
   <Form>
        <div>
            <label>nome</label>
            <Field name="name" type=" text" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label>email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
        <button type="submit" disabled={!isvalid} >enviar</button>
      </Form>
        
      )}
      />
      </div>
  );
}

export default App;
