import React, { useState, useEffect } from 'react'
import Headline from '../Headline'
import InputField from '../InputField'
import ButtonStandard from '../ButtonStandard'
import { Form } from 'react-router-dom'
import FormField from '../FormField'
import FormInput from './FormInput.old'

function BookNowForm() {

  const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
  const [userMessage, setUserMessage] = useState()

  const [showCard, setShowCard] = useState(false);

  const [submitted, setSubmitted] = useState(false)

  const [errors, setErrors] = useState({})


  const renderCard = (message, card) => {
    setShowCard(card)
    setUserMessage(message);
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if(value.trim() === ''){
      setErrors(prevErrors => ({...prevErrors, [name]: 'This field is required'}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }
  }

  const handleOk = () => {
    
    setShowCard(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', selectedUnit: '', purpose: '' })}, 300);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    Object.keys(formData).forEach(field =>{
      if(formData[field].trim() === ''){
        newErrors[field] = 'Required'
      }
    })

    if (Object.keys(newErrors).length > 0){
      setErrors(newErrors)
      return
    }

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
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
        setFormData()
      } 
      console.log(res)
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
            <Headline
              title='Booking Unit'
              color='text-green'
              titleMargin='mb-2'
              size='h3'
            >
              Book Your Storage Unit Now & Simplify Your Life!
            </Headline>
          
            <div className='imageCard h-full flex-1'></div>
          </div>

          <div className='w-1/2 h-full'>
          <p className='body-text-standard mb-5 h-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <div className='sectionYellowLight h-full rounded-md p-5'>

              <div className='flex gap-5'>
                <div className='w-1/2'>
                <FormField
                  onChange={handleChange}

                  name='name'
                  type='name'
                  label='Your Name'
                  placeholder='Your Name'

                  error={errors.name && errors.name}
                  value={formData.name}

                  required={true}
                />
                </div>

                <div className='w-1/2'>
                  <FormField
                    onChange={handleChange}

                    name='email'
                    type='email'
                    label='Email'
                    placeholder='Email'

                    error={errors.email && errors.email}
                    value={formData.email}
                    
                    required={true}
                  />
                </div>
              </div>
              <FormField
                onChange={handleChange}

                name='selectedUnit'
                type='text'
                label='Choose Unit'
                placeholder='Choose Unit'

                error={errors.selectedUnit && errors.selectedUnit}
                value={formData.selectedUnit}

                required={true}
              />

              <FormField
                inputType='textarea'
                onChange={handleChange}

                name='purpose'
                type='text'
                label='Storage purpose'
                placeholder='Describe your storage purpose so that we can match your request'

                error={errors.purpose && errors.purpose}
                value={formData.purpose}

                required={true}
              />

              <button className='bg-primary rounded-md btn-yellow transition duration-200 ease-in-out px-7 py-2 buttonHover'>Book Unit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BookNowForm