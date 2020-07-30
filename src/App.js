import React from 'react';
import { Formik, Field, Form, } from 'formik';
import {Btn,FormStyled,  Container, Card,Bar, Title} from './styles';
import schema from './schema';


function App() {
  function onSubmit(values, actions) {
    console.log('usuario', values)
  }
  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;
    const cep = value.replace(/[^0-9]/, '')
    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('uf', data.uf)
      });
  }


  return (
    <div className="App">
      <Container>

        <Card >
          <Title>Dados pessoas</Title>
          <Bar></Bar>
        </Card>
        <Card>
          <Title> Endereço</Title>
        </Card>
      </Container>
  
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}

        initialValues={{
          name: '',
          email: '',
        }}
        render={({ isvalid, setFieldValue }) => (
      <FormStyled>
          <Form>
            <div className="form-control-group">
              <label>Cep</label>
              <Field name="cep" type=" text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
            </div>
            <div className="form-control-group">
              <label>Logradouro</label>
              <Field name="logradouro" type=" text" />
            </div>
            <div className="form-control-group">
              <label>Número</label>
              <Field name="numero" type=" text" />
            </div>
            <div className="form-control-group">
              <label>Bairro</label>
              <Field name="bairro" type=" text" />
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field name="cidade" type=" text" />
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <Field name="uf" type=" text" />
            </div>
            <Btn type="submit" >enviar</Btn>
          </Form>
          </FormStyled>

         )}
      />
    
    </div>
  );
}

export default App;