type Product = {
  id: number
  title: string
  desc?: string
  img?: string
  price: number
  options?: { title: string; additionalPrice: number }[]
}

type Products = Product[]

export const featuredProducts: Products= [
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
        title: 'Large',
        additionalPrice: 6
      }
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
        title: 'Large',
        additionalPrice: 6
      }
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
        title: 'Large',
        additionalPrice: 6
      }
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
        title: 'Large',
        additionalPrice: 6
      }
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
        title: 'Large',
        additionalPrice: 6
      }
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
        title: 'Large',
        additionalPrice: 6
      }
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  }
]

export const pizzas: Products = [
  {
    id: 1,
    title: 'Pizza1',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza1.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 2,
    title: 'pizza2',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza2.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 3,
    title: 'pizza3',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza3.jpeg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 4,
    title: 'pizza4',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza4.jpeg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 5,
    title: 'pizza5',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza5.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 6,
    title: 'pizza6',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza6.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 7,
    title: 'pizza7',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza7.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 8,
    title: 'pizza8',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza8.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  },

  {
    id: 9,
    title: 'pizza9',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza9.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  }
]

export const singleProduct: Product = 
  {
    id: 1,
    title: 'Pizza1',
    desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!A garlic lovers delight, featuring linguine smothered in a creamy Parmesan!',
    img: '/pizza1.jpg',
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
        title: 'Large',
        additionalPrice: 6
      }
    ]
  }




type Menu = {
  id: number
  slug: string
  title: string
  img?: string
  desc?: string
  color: string
}[]

export const menu: Menu = [
  {
    id: 1,
    slug: 'pastas',
    title: 'Italian Pastas ',
    img: '/menuNoodles.avif',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: 'white'
  },

  {
    id: 2,
    slug: 'pizzas',
    title: 'Cheezy Pizzas',
    img: '/menuPizza.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: 'black'
  },

  {
    id: 3,
    slug: 'burgers',
    title: 'Juicy Burgers ',
    img: '/menuBurger.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: 'white'
  }
]
