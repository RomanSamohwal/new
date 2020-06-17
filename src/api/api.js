import axios from "axios";


const instance =axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
});


export const api = {
    sendPostRequest(success) {
        return instance.post('', {success: success})
    }
};

export const tryCatch = async (f)=>{
    debugger
    try {
        const response = await f();
        console.log('answer: ', response.data);
        return response.data.errorText;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
};