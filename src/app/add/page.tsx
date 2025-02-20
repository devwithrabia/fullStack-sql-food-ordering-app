'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

type Inputs = {
  title: string
  desc: string
  price: number
  catSlug: string
  img: string
  options: { title: string; additionalPrice: number }[]
}

const AddPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [imageBase64, setImageBase64] = useState<string>('')

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      title: '',
      desc: '',
      price: 0,
      catSlug: '',
      img: '',
      options: []
    }
  })

  //for settiing options:

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options'
  })

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'unauthenticated' || !session?.user.isAdmin) router.push('/')

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        const base64String = reader.result as string
        setImageBase64(base64String)
        setValue('img', base64String) // Set form value
      }

      reader.onerror = error => console.error('Error reading file:', error)
    }
  }

  const onSubmit = async (data: Inputs) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL

      const res = await fetch(`${apiUrl}/api/products`, {
        method: 'POST',
        body: JSON.stringify(data)
      })

      const result = await res.json()

      router.push(`/singleProduct/${result.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col gap-8 items-center min-h-screen mt-9'>
      <h1 className='font-bold text-4xl text-red-500 text-center flex'>Add New Product</h1>

      <form className='shadow-lg w-[50vw]  flex flex-col  gap-4  items-center ' onSubmit={handleSubmit(onSubmit)}>
        {/* Image */}
        <div className=' flex flex-col gap-2 w-[80%]'>
          <label>Image</label>

          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='ring-1 ring-red-200 p-2 rounded-sm '
          />

          {imageBase64 && <img src={imageBase64} alt='Preview' className='w-32 h-32 mt-2' />}

          {errors.img && <span className='text-red-500'>{errors.img.message}</span>}
        </div>

        {/* Title */}
        <div className=' flex flex-col gap-2 w-[80%]'>
          <label>Title</label>

          <input
            className='ring-1 ring-red-200 p-2 rounded-sm '
            type='text'
            {...register('title', { required: 'title is required' })}
          />

          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>

        {/* Description */}
        <div className=' flex flex-col gap-2 w-[80%]'>
          <label>Desc</label>

          <textarea
            className='ring-1 ring-red-200 p-2 rounded-sm '
            {...register('desc', { required: 'description is required' })}
          />

          {errors.desc && <span className='text-red-500'>{errors.desc.message}</span>}
        </div>

        {/* Price */}
        <div className=' flex flex-col gap-2 w-[80%]'>
          <label>Price</label>

          <input
            className='ring-1 ring-red-200 p-2 rounded-sm '
            type='number'
            {...register('price', { valueAsNumber: true, required: 'price is required' })}
          />

          {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
        </div>

        {/* Category */}
        <div className=' flex flex-col gap-2 w-[80%]'>
          <label>Category</label>

          <input
            className='ring-1 ring-red-200 p-2 rounded-sm '
            type='text'
            {...register('catSlug', { required: 'category is required' })}
          />

          {errors.catSlug && <span className='text-red-500'>{errors.catSlug.message}</span>}
        </div>

        {/* Options */}
        <div className=' flex flex-col gap-6  items-center w-[100%]'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex justify-center gap-4 w-[100%]'>
              <input
                className='ring-1 ring-red-200 p-2 rounded-sm w-[30%] '
                type='text'
                placeholder='Title'
                {...register(`options.${index}.title`)}
              />

              <input
                className='ring-1 ring-red-200 p-2 rounded-sm w-[30%]'
                type='number'
                placeholder='Additional Price'
                {...register(`options.${index}.additionalPrice`, { valueAsNumber: true })}
              />

              <button type='button' className='text-red-500 ' onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))}

          <button
            type='button'
            className=' bg-red-500 text-white p-2 rounded-md'
            onClick={() => append({ title: '', additionalPrice: 0 })}
          >
            Add Option
          </button>
        </div>

        <button type='submit' className='p-2 w-full bg-red-500 text-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddPage
