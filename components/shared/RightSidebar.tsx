import React from 'react'

export default function RightSidebar() {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
      <h3 className='text-heading4-medium text-light-1'>
          Suggested Communities
        </h3>
        <div className='mt-7 flex w-[350px] flex-col gap-9'>
          Suggested Communites to be mapped here
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-start'>
      <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
      <div className='mt-7 flex w-[350px] flex-col gap-10'>
        Similar Minds to be mapped here
      </div>
      </div>
    </section>
  )
}
