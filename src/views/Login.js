import React, { useState } from 'react'
// reactstrap components

import { useAlert } from 'react-alert'
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
const { postData } = require('../API/network.js')

function Login () {
  const alert = useAlert()
  const [secretPhaseDisplay, setSecretPhaseDisplay] = useState('none')
  const [emailFilled, setEmailFilled] = useState(true)
  const [firstNameFilled, setFirstNameFilled] = useState(true)
  const [lastNameFilled, setLastNameFilled] = useState(true)
  const [phoneFilled, setPhoneFilled] = useState(true)
  const [passwordFilled, setPasswordFilled] = useState(true)
  const [repeatPasswordFilled, setRepeatPasswordFilled] = useState(true)
  const [payLoad, setPayLoad] = useState({})
  const onEmailChange = (e) => {
    setEmailFilled(true)
    setPayLoad(Object.assign(payLoad, { email: e.target.value }))
  }
  const onPasswordChange = (e) => {
    setPasswordFilled(true)
    setPayLoad(Object.assign(payLoad, { password: e.target.value }))
  }
  const onRepeatPasswordChange = (e) => {
    setRepeatPasswordFilled(true)
    setPayLoad(Object.assign(payLoad, { repeatPassword: e.target.value }))
  }
  const onPhoneChange = (e) => {
    setPhoneFilled(true)
    setPayLoad(Object.assign(payLoad, { phone: e.target.value }))
  }
  const onfirstNameChange = (e) => {
    setFirstNameFilled(true)
    setPayLoad(Object.assign(payLoad, { firstName: e.target.value }))
  }
  const onLastnameChange = (e) => {
    setLastNameFilled(true)
    setPayLoad(Object.assign(payLoad, { lastName: e.target.value }))
  }
  const onCompanyChange = (e) => {
    setPayLoad(Object.assign(payLoad, { companyName: e.target.value }))
  }
  const signUp = async () => {
    if (payLoad.email === undefined || payLoad.email?.trim() === '') { setEmailFilled(false) }
    if (payLoad.password === undefined || payLoad.password?.trim() === '') { setPasswordFilled(false) }
    if (payLoad.repeatPassword === undefined || payLoad.repeatPassword?.trim() === '') { setRepeatPasswordFilled(false) }
    if (payLoad.firstName === undefined || payLoad.firstName?.trim() === '') { setFirstNameFilled(false) }
    if (payLoad.lastName === undefined || payLoad.lastName?.trim() === '') { setLastNameFilled(false) }
    if (payLoad.phone === undefined || payLoad.phone?.trim() === '') { setPhoneFilled(false) }
    const request = { endPoint: 'accounts/register', data: payLoad }
    const response = await postData(request)
    console.log(5, response)
    if (response.success) {
      setSecretPhaseDisplay('block')
      console.log(secretPhaseDisplay)
      alert.show('success')
    } else {
      alert('failed')
    }
  }
  const customStyle = { marginLeft: '30px', width: 'calc(100% - 60px)', minWidth: '200px' }
  const customAlertStyle = { marginLeft: '30px', width: 'calc(100% - 60px)', minWidth: '200px', borderColor: 'blue', color: 'blue' }
  const customErrorStyle = { marginLeft: '30px', width: 'calc(100% - 60px)', minWidth: '200px', borderColor: 'red' }
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
                          style={emailFilled ? customStyle : customErrorStyle}
                          placeholder={emailFilled ? 'E mail' : 'Enter some value'}
                          type='email'
                          onChange={(e) => { onEmailChange(e) }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Phone</label>
                        <Input
                          style={phoneFilled ? customStyle : customErrorStyle}
                          defaultValue='9061955456'
                          placeholder='Phone'
                          type='text'
                          onChange={(e) => { onPhoneChange(e) }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>First name</label>
                        <Input
                          style={firstNameFilled ? customStyle : customErrorStyle}
                          defaultValue='Krishnan'
                          placeholder='name'
                          type='text'
                          onChange={(e) => { onfirstNameChange(e) }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Last Name</label>
                        <Input
                          style={lastNameFilled ? customStyle : customErrorStyle}
                          defaultValue='Rakesh'
                          placeholder='name'
                          type='text'
                          onChange={(e) => { onLastnameChange(e) }}
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
                          onChange={(e) => { onCompanyChange(e) }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Password</label>
                        <Input
                          style={passwordFilled ? customStyle : customErrorStyle}
                          defaultValue='*******'
                          placeholder='name'
                          type='password'
                          onChange={(e) => { onPasswordChange(e) }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup>
                        <label style={customStyle}>Repeat Password</label>
                        <Input
                          style={repeatPasswordFilled ? customStyle : customErrorStyle}
                          defaultValue='*******'
                          placeholder='name'
                          type='password'
                          onChange={(e) => { onRepeatPasswordChange(e) }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className='px-1' lg='6' md='6' sm='12'>
                      <FormGroup style={{ display: secretPhaseDisplay }}>
                        <label style={customAlertStyle}>Enter One Time Password sent to your mobile here</label>
                        <Input
                          style={customAlertStyle}
                          defaultValue='*******'
                          placeholder='name'
                          type='password'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='px-1' lg='12' md='12' sm='12'>
                      <FormGroup style={{ textAlign: 'center' }}>
                        <Button onClick={() => { signUp() }}> Create Account </Button>
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
