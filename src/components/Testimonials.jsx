import React, {useState, useEffect} from 'react'
import TestimonialCard from './TestimonialCard'
import Headline from './Headline'

const Testimonials = () => {
  const [testimonialCard, setTestimonialCard] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        // console.log(data)

        setTestimonialCard(data)
    }

    useEffect(() => {
      fetchData()
    }, [])

  return (
        <section id="testimonials" className='testimonialsWrapper'>
      <div className="testimonialsContainer">
        <div className="testimonialsContent text-center mx-auto max-w-7xl py-20">
          <Headline title="Testimonials" size="h2" color="text-white">See What Our Client Have to Say</Headline>
          <p className='mb-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

	<div className='flex justify-between gap-6'>
    {
      testimonialCard.map((item) => (<TestimonialCard key={item.id} item={item} />))
    }
    </div>
      </div>
      </div>
    </section>
  )
}

export default Testimonials