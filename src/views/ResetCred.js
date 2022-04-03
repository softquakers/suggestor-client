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

function ResetCred () {
  return (
    <>
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card className='card-user'>
              <CardHeader>
                <CardTitle tag='h5'>Sign In</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          defaultValue='*****'
                          placeholder='Password'
                          type='password'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label>Retype Password</label>
                        <Input
                          defaultValue='*****'
                          placeholder='Retype Password'
                          type='password'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label>Secret Key</label>
                        <Input
                          defaultValue='*****'
                          placeholder='Secret Key'
                          type='password'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup style={{ textAlign: 'center' }}>
                        <Button style={{ marginTop: '24px' }}> Reset Password </Button>
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

export default ResetCred
