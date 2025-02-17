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
    <div>
      <form className='shadow-lg flex flex-wrap gap-4' onSubmit={handleSubmit(onSubmit)}>
        <h1>Add New Product</h1>

        {/* Image */}
        <div className='w-full flex flex-col gap-2'>
          <label>Image</label>

          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='ring-1 ring-red-200 p-2 rounded-sm'
          />

          {imageBase64 && <img src={imageBase64} alt='Preview' className='w-32 h-32 mt-2' />}

          {errors.img && <span className='text-red-500'>{errors.img.message}</span>}
        </div>

        {/* Title */}
        <div className='w-full flex flex-col gap-2'>
          <label>Title</label>

          <input
            className='ring-1 ring-red-200 p-2 rounded-sm'
            type='text'
            {...register('title', { required: 'title is required' })}
          />

          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>

        {/* Description */}
        <div className='w-full flex flex-col gap-2'>
          <label>Desc</label>

          <textarea
            className='ring-1 ring-red-200 p-2 rounded-sm'
            {...register('desc', { required: 'description is required' })}
          />

          {errors.desc && <span className='text-red-500'>{errors.desc.message}</span>}
        </div>

        {/* Price */}
        <div className='w-full flex flex-col gap-2'>
          <label>Price</label>

          <input
            className='ring-1 ring-red-200 p-2 rounded-sm'
            type='number'
            {...register('price', { valueAsNumber: true, required: 'price is required' })}
          />

          {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
        </div>

        {/* Category */}
        <div className='w-full flex flex-col gap-2'>
          <label>Category</label>

          <input
            className='ring-1 ring-red-200 p-2 rounded-sm'
            type='text'
            {...register('catSlug', { required: 'category is required' })}
          />

          {errors.catSlug && <span className='text-red-500'>{errors.catSlug.message}</span>}
        </div>

        {/* Options */}
        <div className='w-full flex flex-col gap-2'>
          <label>Options</label>

          {fields.map((field, index) => (
            <div key={field.id} className='flex gap-2'>
              <input
                className='ring-1 ring-red-200 p-2 rounded-sm'
                type='text'
                placeholder='Title'
                {...register(`options.${index}.title`)}
              />
              <input
                className='ring-1 ring-red-200 p-2 rounded-sm'
                type='number'
                placeholder='Additional Price'
                {...register(`options.${index}.additionalPrice`, { valueAsNumber: true })}
              />

              <button type='button' className='text-red-500' onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))}

          <button
            type='button'
            className='w-52 bg-red-500 text-white p-2'
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
