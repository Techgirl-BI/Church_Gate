import React from 'react'

const NextSteps = () => {
  return (
    <div className='border pt-24'>
      <h2 className='font-bold text-3xl w-fit mx-auto'>WHAT’S NEXT FOR YOU</h2>
      <p className='text-xl w-3/6 mx-auto my-14'>
        We are here to support you in every hardship and every victory. We are a community that exists every day of the week, not just Sundays. Use these tools to stay connected & take your next steps.
      </p>
      <div className='flex border w-3/4 mx-auto'>
        <img
          src='https://faithma.org/wp-content/uploads/2020/05/volunteer.jpg'
          alt='Placeholder image'
          className='object-cover w-1/2'
        />
        <div className='flex flex-col justify-between px-4'> 
          <div className='flex space-x-4 mb-4'> 
            <div className=' bg-gray-200 rounded-lg object-cover'>
              <img
                src='https://faithma.org/wp-content/uploads/2020/05/volunteer.jpg'
                alt='Placeholder image'
                className='object-cover'
              />
            </div>
            <div className=' bg-gray-200 rounded-lg object-cover'>
              <img
                src='https://faithma.org/wp-content/uploads/2020/04/newsletter.jpg'
                alt='Placeholder image'
                className='object-cover'
              />
            </div>
          </div>
          <div className=' bg-gray-200 rounded-lg'> 
            <img
              src='https://faithma.org/wp-content/uploads/2020/04/newsletter.jpg'
              alt='Placeholder image'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextSteps
