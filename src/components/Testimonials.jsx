import React, {useState, useEffect} from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const [testimonialCard, setTestimonialCard] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        console.log(data)

        setTestimonialCard(data)
    }

    useEffect(() => {
      fetchData()
    }, [])

  return (
	<div className='flex justify-between gap-6'>
    {
      testimonialCard.map((item) => (<TestimonialCard key={item.id} item={item} />))
    }
    </div>
  )
}

export default Testimonials