import shield from '../assets/icons/shield.svg'
import stars from '../assets/icons/stars.svg'
import exclusive from '../assets/icons/exclusive-cart.svg'

import img1 from '../assets/img/publications/img1.jpg'
import img2 from '../assets/img/publications/img2.jpg'
import img3 from '../assets/img/publications/img3.jpg'
import img4 from '../assets/img/publications/img4.jpg'
import img5 from '../assets/img/publications/img5.jpg'
import img6 from '../assets/img/publications/img6.jpg'
import img7 from '../assets/img/publications/img7.jpg'
import img8 from '../assets/img/publications/img8.jpg'
import img9 from '../assets/img/publications/img9.jpg'
import img10 from '../assets/img/publications/img10.jpg'

import sprites from '../assets/icons/sprite.svg'

export const LOCAL_STORAGE_ACCESS_KEY = 'accessToken'
export const LOCAL_STORAGE_FAVORITES_KEY = 'favorites'
export const CATALOG = [
  {
    label: 'лето',
    values: [
      'Для бега',
      'Повседневная',
      'Треккинговая',
      'Для футбола',
      'Для волейбола',
      'Для баскетбола',
      'Для тенниса',
      'Для водных видов спорта',
      'Спортивный'
    ]
  },
  {
    label: 'Демисезон',
    values: ['Для бега', 'Повседневная', 'Треккинговая', 'Кожаные']
  },
  {
    label: 'Зима',
    values: ['Утепленные', 'Повседневная', 'Кожаные']
  },
  {
    label: 'Модели',
    values: [
      'Nike Air Force 1',
      'Nike SB Dunk Low',
      'Nike Air Max 90',
      'NIke Shox',
      'Nike Blazer',
      'Nike M2K Tekno',
      'Nike Air Max Plus',
      'Nike Air Huarache',
      'Nike Air Zoom 2K',
      'Nike Air Presto'
    ]
  }
]
export const BENEFITS = [
  {
    img: shield,
    title: 'Только оригинальные товары',
    text: 'Гарантированная подлинность Nike и высокое качество кроссовок.'
  },
  {
    img: stars,
    title: 'Профессиональный сервис',
    text: 'Команда экспертов, готовых помочь с выбором размера ответить на все вопросы.'
  },
  {
    img: exclusive,
    title: 'Эксклюзивный выбор',
    text: 'Богатый ассортимент оригинальных моделей Nike, включая редкие выпуски.'
  }
]
export const PUBLICATIONS = [
  {
    category: 'советы',
    title: 'Десять советов по выбору кроссовок для спорта',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 7, 7),
    image: img1
  },
  {
    category: 'новости',
    title: 'Наш каталог пополнился новыми коллекциями',
    subTitle: 'С радостью сообщаем вам о расширении ассортимента.',
    date: new Date(2023, 7, 10),
    image: img2
  },
  {
    category: 'Обзоры',
    title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 7, 15),
    image: img3
  },
  {
    category: 'советы',
    title: 'Десять советов по выбору кроссовок для спорта',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 8, 29),
    image: img4
  },
  {
    category: 'советы',
    title: 'Наш каталог пополнился новыми коллекциями',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 5, 7),
    image: img5
  },
  {
    category: 'советы',
    title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 7, 21),
    image: img6
  },
  {
    category: 'советы',
    title: 'Десять советов по выбору кроссовок для спорта',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 9, 10),
    image: img7
  },
  {
    category: 'советы',
    title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 10, 20),
    image: img8
  },
  {
    category: 'советы',
    title: 'Наш каталог пополнился новыми коллекциями',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 11, 14),
    image: img9
  },
  {
    category: 'советы',
    title: 'Наш каталог пополнился новыми коллекциями',
    subTitle: 'Рассказываем все тонкости выбора правильной обуви.',
    date: new Date(2023, 7, 23),
    image: img10
  }
]
export const ACCOUNT_NAVBAR = [
  {to: '/personal-account', icon: `${sprites}#user-edit`, label: 'Редактировать профиль'},
  {to: '/personal-account/orders', icon: `${sprites}#my-orders`, label: 'Мои заказы'},
  {to: '/personal-account/addresses', icon: `${sprites}#address`, label: 'Мой адрес'},
  {to: '/personal-account/favorite-products', icon: `${sprites}#favorite-products`, label: 'Избранные товары'},
  {to: '/personal-account/change-password', icon: `${sprites}#change-password`, label: 'Сменить пароль'},
  {to: '/', icon: `${sprites}#logout`, label: 'Выйти из аккаунта'}
]
export const FILTER_LIMIT = [
  {name: "filter", value: 9},
  {name: "filter", value: 12},
  {name: "filter", value: 18},
  {name: "filter", value: 24},
]

export const SNEAKER_SORT = [
{label: 'Цена по убыванию', value: '-price'},
  {label: 'Цена по возрастанию', value: 'price'},
  {label: 'Рейтинг по убыванию', value: '-rating'},
  {label: 'Рейтинг по возрастанию', value: 'rating'},
]

