import axios from 'axios'

const BASE_API ='https://haveibeenpwned.com/api/v3'

axios.defaults.withCredentials = true
export const getBreachedData = (number) => {
  return axios
    .get(`${BASE_API}/breachedaccount/${number}?truncateResponse=false`, {
      headers: {
        "hibp-api-key" : 'e0c4c2b5c7304030912b2251e15d7dac',
        "Access-Control-Allow-Origin" : "*"
      },
    })
    .then((res) => {
      return res.data
    }).catch((err)=>{ console.log(err)})
}
