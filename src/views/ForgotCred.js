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

function ForgotCred () {
  return (
    <>
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card className='card-user' style={{ height: '240px' }}>
              <CardHeader>
                <CardTitle tag='h5' style={{ marginLeft: '20px' }}>Forgot credentials</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={{ marginLeft: '30px' }}>E mail or Phone</label>
                        <Input
                          style={{ marginLeft: '30px' }}
                          defaultValue='michael23'
                          placeholder='Email'
                          type='email'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup style={{ textAlign: 'center' }}>
                        <Button style={{ marginTop: '20px' }}> Reset </Button>
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

export default ForgotCred
