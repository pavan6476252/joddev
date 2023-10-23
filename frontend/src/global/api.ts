import axios from 'axios'
import secure from './secure'

export default axios.create({ baseURL: 'http://localhost:3000/api' })

// headers: { 'Authorization': 'Bearer ' + secure.getItem('token') }