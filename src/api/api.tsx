import axios from "axios";

type sendPostRequest = {
    errorText: string
}

const instance =axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
});


export const api = {
    sendPostRequest(success: boolean) {
        return instance.post<sendPostRequest>('', {success: success})
    }
};



export const tryCatch = async (f: any)=>{
    try {
        const response = await f();
        console.log('answer: ', response.data);
        return response.data.errorText;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
};