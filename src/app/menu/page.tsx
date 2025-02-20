import { MenuType } from '@/types/types'
import Link from 'next/link'

const getData = async () => {
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/categories`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('failed')
  }

  return res.json()
}

const MenuPage = async () => {
  const menu: MenuType = await getData()
  console.log(menu)
  return (
    // <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>

    <div className='p-4 flex flex-wrap justify-center items-center mt-[40px] mb-[40px] gap-6'>
      {menu.map(category => {
        return (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className='w-[500px] h-[500px] p-8 flex flex-col justify-center'
            style={{ backgroundImage: `url(${category.img})`, color: `${category.color}` }}
          >
            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default MenuPage
