import React, {useState, useEffect} from 'react'
import Headline from './Headline'
import BlogCard from './BlogCard'

function BlogSection() {


  const [blogPostCard, setblogPostCard] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
        const data = await res.json()
        // console.log(data)

        setblogPostCard(data)
    }

    useEffect(() => {
      fetchData()
    }, [])



  return (
    <section>
        <div className='mx-auto max-w-7xl py-20'>
            <div className='flex gap-8 mx-auto mb-5'>

                <div className='w-1/2'>
                    <Headline title="Latest Blog and News" size="h3" color="text-green" titleMargin='mb-0'>Check Out Our Latest Blog and News Update</Headline>
                </div>

                <div className='flex w-1/2'>
                    <p className='mt-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>

            </div>
            <div className='flex justify-between gap-6'>
                {
                    blogPostCard.map((item) => (<BlogCard key={item.id} item={item} />))
                }
            </div>
        </div>
    </section>
  )
}

export default BlogSection