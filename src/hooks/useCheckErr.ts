

const useCheckErr = (message: { name: string, email: string, message: string}) => {
    const err: {name?: string, email?:string, message?:string} =  {};
    const emailCheck = /^\w+@\w{4,5}\.\w{2,3}$/
    if(!message.name) {
        err.name = 'Please provide your name'
    }

    if(!message.message){
        err.message = 'Please fill this field'
    }

    if(!emailCheck.test(message.email)){
        err.email = 'Wrong email'
    }

    return err
}

export default useCheckErr