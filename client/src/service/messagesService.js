import Axios from "axios";

const API_CALLS = {}
API_CALLS.create_message = async (data) => {
    const obj = {
        sender: data.formState[0].value,
        receiver: data.formState[1].value,
        message: data.formState[2].value,
        subject: data.formState[3].value
    }
    return await Axios.post('http://localhost:3005/api/messages', obj)
}

API_CALLS.get_all_messages = async (data) => {
    return await Axios.get('http://localhost:3005/api/messages')
}

export default API_CALLS
