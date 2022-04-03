/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from 'reactstrap'

function Login () {
  const customStyle = { marginLeft: '30px', width: 'calc(100% - 60px)', minWidth: '200px' }
  const titleStyle = { marginLeft: '20px', width: 'calc(100% - 60px)', minWidth: '200px' }
  return (
    <>
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card className='card-user'>
              <CardHeader>
                <CardTitle tag='h5' style={titleStyle}>Sign In</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>E mail or Username</label>
                        <Input
                          style={customStyle}
                          defaultValue='michael23'
                          placeholder='Username'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Password</label>
                        <Input
                          style={customStyle}
                          defaultValue='*****'
                          placeholder='Password'
                          type='password'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='px-1' lg='12' md='12' sm='12'>
                      <FormGroup style={{ textAlign: 'center' }}>
                        <Button> Sign In </Button>
                        <br />
                        <a href='./forgot-credentials'>Forgot Email or password</a>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <Card className='card-user'>
              <CardHeader>
                <CardTitle tag='h5' style={titleStyle}> Create Account </CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>E mail </label>
                        <Input
                          style={customStyle}
                          defaultValue='michael23'
                          placeholder='Username'
                          type='email'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Phone</label>
                        <Input
                          style={customStyle}
                          defaultValue='9061955456'
                          placeholder='Phone'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>First name</label>
                        <Input
                          style={customStyle}
                          defaultValue='Krishnan'
                          placeholder='name'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Last Name</label>
                        <Input
                          style={customStyle}
                          defaultValue='Rakesh'
                          placeholder='name'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Company name</label>
                        <Input
                          style={customStyle}
                          defaultValue='Looking good'
                          placeholder='name'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup style={{ display: 'none' }}>
                        <label style={customStyle}>Secret phrase</label>
                        <Input
                          style={customStyle}
                          defaultValue='*******'
                          placeholder='name'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='px-1' lg='12' md='12' sm='12'>
                      <FormGroup style={{ textAlign: 'center' }}>
                        <Button> Create Account </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login
