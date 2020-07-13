import Axios from "axios";
const port = process.env.PORT || 5000
const API_CALLS = {}
API_CALLS.create_message = async (data) => {
    const obj = {
        sender: data.formState[0].value,
        receiver: data.formState[1].value,
        message: data.formState[2].value,
        subject: data.formState[3].value
    }
    return await Axios.post('http://localhost:'+port+'/api/messages', obj)
}

API_CALLS.get_all_messages = async (data) => {
    return await Axios.get('http://localhost:'+port+'/api/messages')
}

export default API_CALLS
