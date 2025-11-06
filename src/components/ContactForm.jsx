import React, { useState, useEffect } from 'react'
import Headline from './Headline'
import FormField from './FormField'
import ButtonStandard from './ButtonStandard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

function ContactForm() {

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    comment: ''

  })

  const [userMessage, setUserMessage] = useState()
  const [showCard, setShowCard] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isShaking, setIsShaking] = useState(false)

  const renderCard = (message, card) => {
    setShowCard(card)
    setUserMessage(message);
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    validateField(name, value)
  }
  
  const handleOk = () => {
    setShowCard(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })}, 300);
    }
  
  const validateField = (name, value) => {
    let error = ''

    if (name === 'name' && !/^\p{L}[\p{L}\s\-]{2,}$/u.test(value)) {
      error = "Your name must be atleast 2 characters long, no numbers."
    }

    if (name === 'email' && !/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      error = "Please enter a valid email address."
    }

    if (name === 'subject') {
      if (value.trim().length < 3) {
        error = "Subject must be at least 3 characters long."
      } else if (value.trim().length > 100) {
        error = "Subject must be less than 100 characters."
      }
    }

    if (name === 'comment') {
      if (value.trim().length < 10) {
        error = "Comment must be at least 10 characters long."
      } else if (value.trim().length > 500) {
        error = "Comment must be less than 500 characters."
      }
    }

    setErrors(prevErrors => ({...prevErrors, [name]: error}))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!/^\p{L}[\p{L}\s\-]{2,}$/u.test(formData.name)){
      newErrors.name = "Your name must be atleast 2 characters long, no numbers."
    }
    
    if (!/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long."
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject must be less than 100 characters."
    }

    if (formData.comment.trim().length < 10) {
      newErrors.comment = "Comment must be at least 10 characters long."
    } else if (formData.comment.trim().length > 500) {
      newErrors.comment = "Comment must be less than 500 characters."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const fetchData = async (e) => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      if(res.ok){
        const data = await res.json()
        setTimeout(() => renderCard(data.message,true), 10);
        setSubmitted(true)
      } 
  }

  const handleSubmit = async (e) => {
      e.preventDefault()

      if (validateForm()) {
        console.log('Form valid')
        fetchData();
        
      } else {
        console.log('Form invalid!')
          setIsShaking(true)
          setTimeout(() => setIsShaking(false), 500)
      }
    }

    const okCard = () => {
      let headline = '';
      let paragraph = '';

      if (userMessage) {
        const parts = userMessage.split('.');
        headline = parts[0] + '.';
        paragraph = parts.slice(1).join('.').trim();
      }
      return (
        <>
          <div className={`absolute inset-0 backdrop-blur-xs rounded-md transition-opacity duration-500 ${showCard ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-145 h-70 z-10 transition-all duration-300 ${showCard ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className='sectionGreenLime h-full rounded-lg p-5 grid text-center place-items-center shadow-lg/20'>
              <div className='flex flex-col place-items-center gap-5'>
                <span className='text-5xl text-green'><FontAwesomeIcon icon={faEnvelopeCircleCheck} /></span>
                <Headline size='h5' color='text-green' titleMargin='mb-0'>
                  {headline}
                </Headline>
                <p>
                  {paragraph}
                </p>
                <ButtonStandard className='w-50' onClick={handleOk}>OK</ButtonStandard>
              </div>
            </div>
          </div>
        </>
      )
    }

    if (submitted)
    {
      return(
      <div className='mx-auto max-w-7xl py-20 relative'>
      
        <div className='flex flex-row gap-6'>
          <div className='w-1/2 flex flex-col'>
            <Headline title='Get in Touch' color='text-green' titleMargin='mb-2' size='h3'>Get Personalized Assistance – Contact Us</Headline>
            <p className='body-text-standard mb-5 h-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            <div className='imageCard h-full flex-1'></div>
          </div>

          <div className='w-1/2 h-full relative '>
          
            {okCard()}
            <div className='sectionYellowLight h-full w-full rounded-md p-5 '>
              <FormField label='Your Name' placeholder='Your Name' required/>

              <div className='flex gap-5'>
                <div className='w-1/2'>
                <FormField label='Email' placeholder='Email' required/>
                </div>

                <div className='w-1/2'>
                  <FormField label='Phone number' placeholder='Phone Number'/>
                </div>
              </div>

              <FormField label='Subject' required placeholder='How can we help you'/>
              <FormField inputType='textarea' label='Comments / Questions' placeholder='Comments' required/>

              <button className='bg-primary rounded-md btn-yellow transition duration-200 ease-in-out px-7 py-2 buttonHover'>Submit</button>
            </div>
          </div>

        </div>
      </div>
  )
    }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <div className='mx-auto max-w-7xl py-20'>
        <div className='flex flex-row gap-6'>

          <div className='w-1/2 flex flex-col'>
            <Headline title='Get in Touch' color='text-green' titleMargin='mb-2' size='h3'>Get Personalized Assistance – Contact Us</Headline>
            <p className='body-text-standard mb-5 h-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            <div className='imageCard h-full flex-1'></div>
          </div>

          <div className='w-1/2 h-full'>
            <div className=
              {`${isShaking ? 'animate-shake bg-red-50' : 'sectionYellowLight'} h-full rounded-md p-5 transition-all duration-100 ease-out`}
              >
              <FormField
                onChange={handleChange}
                name='name'
                label='Your Name'
                placeholder='Your Name'
                type='text'

                error={errors.name && errors.name}
                value={formData.name}


                required={true}
              />
              
              <div className='flex gap-5'>
                <div className='w-1/2'>
                  <FormField
                    onChange={handleChange}
                    name='email'
                    label='Email'
                    placeholder='Email'
                    type='email'

                    error={errors.email && errors.email}
                    value={formData.email}
                    
                    required={true}
                  />
                </div>

                <div className='w-1/2'>
                  <FormField
                    onChange={handleChange}
                    name='phoneNumber'
                    label='Phone number'
                    placeholder='Phone number'
                    type='text'

                    error={errors.phoneNumber && errors.phoneNumber}
                    value={formData.phoneNumber}

                    required={false}
                  />
                </div>
              </div>

              <FormField
                onChange={handleChange}
                name='subject'
                label='Subject'
                placeholder='How can we help you'
                type='text'

                error={errors.subject && errors.subject}
                value={formData.subject}

                required={true}
              />
              <FormField
                inputType='textarea'
                onChange={handleChange}
                name='comment'
                label='Comments / Questions'
                placeholder='Comments'
                type='text'

                error={errors.comment && errors.comment}
                value={formData.comment}

                required={true}
              />

              <button 
                type='submit' 
                className={`${isShaking ? 'animate-shake bg-red-500 text-red-50' : 'bg-primary transition duration-200 ease-in-out buttonHover btn-yellow'} rounded-md px-7 py-2`}
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}

export default ContactForm