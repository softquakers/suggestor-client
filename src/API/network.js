const axios = require('axios')
const constants = require('../utils/constants')
const postData = async (request) => {
  console.log('1')
  console.log(request)
  const config = {
    method: 'post',
    url: makeUrl(request),
    headers: {
      'Content-Type': 'application/json'
    },
    data: request.data
  }
  try {
    const response = await axios(config)
    console.log('2')
    console.log(response.data)
    if (response.data?.success) {
      return response.data
    }
  } catch (e) {
    console.log('3')
    console.log(e.message)
    return {
      success: false,
      message: e.message
    }
  }
}

const makeUrl = (request) => {
  return constants.URL + '/' + request.endPoint
}

export { postData }
