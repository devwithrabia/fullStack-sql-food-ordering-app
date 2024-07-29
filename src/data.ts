type Product = {
  id: number
  title: string
  desc?: string
  img?: string
  price: number
  options?: { title: string; additionalPrice: number }[]
}

type Products = Product[]

export const featuredProducts: Products = [

    {
        id: 1,
        title: 'Pizza',
        desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
        img: '/featuredPizza.png',
        price: 28.9,
        options: [
          {
            title: 'Small',
            additionalPrice: 0
          },
    
          {
            title: 'Medium',
            additionalPrice: 4
          },
          {
            title:"Large",
            additionalPrice:6
        },
        ]
      },
 

  {
    id: 2,
    title: 'Burger',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/featuredBurger.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0
      },

      {
        title: 'Medium',
        additionalPrice: 4
      },
      {
        title:"Large",
        additionalPrice:6
    },
    ]
  },

  {
    id: 3,
    title: 'Arrabbiata',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/featuredArrabbiata.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0
      },

      {
        title: 'Medium',
        additionalPrice: 4
      },
      {
        title:"Large",
        additionalPrice:6
    },
    ]
  },

  {
    id: 4,
    title: 'Biryani',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/featuredBiryani.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0
      },

      {
        title: 'Medium',
        additionalPrice: 4
      },
      {
        title:"Large",
        additionalPrice:6
    },
    ]
  },

  {
    id: 5,
    title: 'Kadahi',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/featuredKadahi.webp',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0
      },

      {
        title: 'Medium',
        additionalPrice: 4
      },
      {
        title:"Large",
        additionalPrice:6
    },
    ]
  },

  {
    id: 6,
    title: 'Noodles',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/featuredNoodles.jpg',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0
      },

      {
        title: 'Medium',
        additionalPrice: 4
      },
      {
        title:"Large",
        additionalPrice:6
    },
    ]
  },

 

  {
    id: 7,
    title: 'Sicilian',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/featuredSicilian.jpg',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0
      },

      {
        title: 'Medium',
        additionalPrice: 4
      },
      {
        title:"Large",
        additionalPrice:6
    },
    ]
  },
]
