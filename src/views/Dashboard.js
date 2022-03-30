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
// react plugin used to create charts
import Chart from 'react-apexcharts'
import './Dashboard.css'
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap'
// core components

const data = require('../data/mainList.json')
const chartData = require('../data/chart.json')
const options = {
  chart: {
    type: 'candlestick',
    height: 350
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
}
function Dashboard () {
  return (
    <>
      <div className='content'>
        <Row>
          {data.map((item, index) => {
            return (
              <Col lg='12' md='12' sm='12' key={index}>
                <Card className='card-stats'>
                  <CardBody>
                    <Row>
                      <Col md='12' xs='12'>
                        <div className='numbers' style={{ textAlign: 'left' }}>
                          <p className='card-category'>{item.name}</p>
                          <CardTitle tag='p'>{item.price}</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col md='12'>
            <Chart options={options} series={chartData} type='candlestick' height={350} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard
