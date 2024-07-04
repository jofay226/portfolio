import styles from './ContactForm.module.scss'
import { ChangeEvent, ElementType, useEffect, useRef, useState } from 'react';

// mui icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// hooks
import useCheckErr from '../../hooks/useCheckErr';

// liabery 
import emailjs from '@emailjs/browser';
import Modal from '../Modal/Modal';
import Overlay from '../Overlay/Overlay';
import { useTranslation } from 'react-i18next';


const socials: {icon:ElementType, path: string}[] = [{icon:InstagramIcon, path: 'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}, {icon:LinkedInIcon, path:'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}, {icon:FacebookIcon, path: 'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}, {icon:XIcon, path: 'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}]

const ContactForm = () => {
    const {t} = useTranslation(["contactPage"])
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const formRef = useRef<any>()
    const [message, setMessage] = useState({
      name: '',
      email: '',
      message: ''
    })
    const [messageErr, setMessageErr] = useState<{name?: string, email?: string, message?: string}>({})
    const [submitted, setSubmitted] = useState(false)
  
    const inputHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setMessage(prev => ({...prev, [name]: value}))
    }
  
    const submitHandler = async () => {
      setSubmitted(true)
      setMessageErr(useCheckErr(message))
    }
    

    
    const sendEmail = async () => {
        try{
            setLoading(true)
            await  emailjs.sendForm( import.meta.env.VITE_SERIVCE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef?.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY
            })

        } catch(e) {
            console.log(e);
            
        } finally{
            setLoading(false)
            setShowModal(true)
        }
    }
  
    useEffect(() => {
      if(submitted && Object.keys(messageErr).length <= 0 ) {
        sendEmail()
      }
    },[messageErr])

    // useEffect(() => {
    //     if(showModal) document.documentElement.style.overflowY = 'hidden';
    //     if(!showModal) document.documentElement.style.overflowY = "auto"
        
    // }, [setShowModal])

    const showModalHandler = () => {
        setShowModal(false)
        setMessage({
            name: '',
            email: '',
            message: ''
        })
    }

  return (
    <>
        <form ref={formRef} className={styles.contactform}>
            <div className={styles.contactform__inputcont}>
                <input value={message.name} className={messageErr.name? styles.nameerr : ''} onChange={inputHandler} name='name' type="text" placeholder={t("name")} />
                {messageErr.name && <span>{messageErr.name}</span>}
            </div>
            <div className={styles.contactform__inputcont}>
                <input value={message.email}  className={messageErr.email? styles.emailerr : ''} onChange={inputHandler} name='email' type="text" placeholder={t("email")} />
                {messageErr.email && <span>{messageErr.email}</span>}
            </div>
            <div className={styles.contactform__inputcont}>
                <textarea value={message.message} className={messageErr.message? styles.messageerr : ''} onChange={inputHandler} name="message" id="" placeholder={t("textarea")}></textarea>
                {messageErr.message && <span>{messageErr.message}</span>}
            </div>
            <div className={styles.contactform__socialcont} >
            
                {loading ? <Box sx={{ display: 'flex' }}><CircularProgress /></Box> : <button type='button' onClick={submitHandler}>{t("sendbtn")}</button> }
                <div >
                    {
                        socials.map((Social, i) => (
                        <a href={Social.path} key={i} target='_blank'>
                            <Social.icon/>
                        </a>
                        ))
                    }
                </div>
            </div>
        </form>
        {showModal && <Modal showModalHandler={showModalHandler}/> }
        {showModal && <Overlay/> }
    </>
  )
}

export default ContactForm