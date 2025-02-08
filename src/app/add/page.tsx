'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'

type Inputs = {
  title: string
  desc: string
  price: number
  catSlug: string
  img: string
}

type Option = {
  title: string
  additionalPrice: number
}

const AddPage = () => {
  const { data: session, status } = useSession()

  const [inputs, setInputs] = useState<Inputs>({
    title: '',
    desc: '',
    price: 0,
    catSlug: '',
    img: ''
  })

  const [option, setOption] = useState<Option>({
    title: '',
    additionalPrice: 0
  })

  const [options, setOptions] = useState<Option[]>([])

  //for images first target your document files ,put in state here we use File state,then
  //this file needs uploader so, make uploader for image through cloudinary,then post
  //this file and uploader on url,this url will be made from upload api reference ,then this url will be put in img property of product model:

  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    router.push('/')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const changeOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOption(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // const url = await upload()
      const apiUrl = process.env.NEXT_PUBLIC_API_URL

      const res = await fetch(`${apiUrl}/api/products`, {
        method: 'POST',
        body: JSON.stringify({
          ...inputs,
          options
        })
      })

      const data = await res.json()

      router.push(`/singleProduct/${data.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className='shadow-lg flex flex-wrap gap-4' onSubmit={submitHandler}>
        <h1>Add New Product</h1>

        <div className='w-full flex flex-col gap-2'>
          <label>Image</label>

          <input className='ring-1 ring-red-200 p-2 rounded-sm' type='text' onChange={handleChange} name='img' />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Title</label>

          <input onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' type='text' name='title' />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Desc</label>

          <textarea onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' name='desc' />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Price</label>

          <input onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' type='text' name='price' />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Category</label>

          <input onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' type='text' name='catSlug' />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Options</label>

          <div>
            <input
              onChange={changeOption}
              className='ring-1 ring-red-200 p-2 rounded-sm'
              type='text'
              placeholder='Title'
              name='title'
            />

            <input
              onChange={changeOption}
              className='ring-1 ring-red-200 p-2 rounded-sm'
              type='number'
              placeholder='Additional Price'
              name='additionalPrice'
            />
          </div>

          <div className='w-52 bg-red-500 text-white p-2' onClick={() => setOptions(prev => [...prev, option])}>
            Add Option
          </div>
        </div>

        <div>
          {options.map(item => {
            return (
              <div className='ring-1 p-2 ring-red-500 rounded-md cursor-pointer' key={item.title}>
                <span>{item.title}</span>

                <span>{item.additionalPrice}</span>
              </div>
            )
          })}
        </div>

        <button type='submit' className='p-2 w-full bg-red-500 text-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddPage
