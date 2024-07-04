

const useCheckErr = (message: { name: string, email: string, message: string}) => {
 
    const err: {name?: string, email?:string, message?:string} =  {};
    const emailCheck = /^\w+@\w{4,5}\.\w{2,3}$/
    if(!message.name) {
        err.name = 'Tell me your name'
    }

    if(!message.message){
        err.message = 'Please send me a message'
    }

    if(!emailCheck.test(message.email)){
        err.email = 'Invalid email address'
    }

    return err
}

export default useCheckErr