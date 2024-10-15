import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Row, Col, Container} from 'react-bootstrap';




const inicioSesion = () => {
    return (
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col md={6}>
              <h2 className="mb-4 text-center">Iniciar Sesión</h2>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                </Form.Group>
    
                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
    
                <Button variant="primary" type="submit" className="mt-4 w-100">
                  Iniciar Sesión
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    };
    
    export default InicioSesion;

    // src/components/Registro.jsx
    import React from 'react';
    import { Form, Button, Container, Row, Col } from 'react-bootstrap';
    import { Link } from 'react-router-dom';
    
    const Registro = () => {
      return (
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col md={6}>
              <h2 className="mb-4 text-center">Registro</h2>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                </Form.Group>
    
                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
    
                <Button variant="primary" type="submit" className="mt-4 w-100">
                  Registrarse
                </Button>
              </Form>
    
              <p className="text-center mt-3">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            </Col>
          </Row>
        </Container>
      );
    };

