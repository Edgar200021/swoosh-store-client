import shield from '../assets/icons/shield.svg'
import stars from '../assets/icons/stars.svg'
import exclusive from '../assets/icons/exclusive-cart.svg'

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
      'Спортивный',
    ],
  },
  {
    label: 'Демисезон',
    values: ['Для бега', 'Повседневная', 'Треккинговая', 'Кожаные'],
  },
  {
    label: 'Зима',
    values: ['Утепленные', 'Повседневная', 'Кожаные'],
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
      'Nike Air Presto',
    ],
  },
]

export const BENEFITS = [
  {
    img: shield,
    title: 'Только оригинальные товары',
    text: 'Гарантированная подлинность Nike и высокое качество кроссовок.',
  },
  {
    img: stars,
    title: 'Профессиональный сервис',
    text: 'Команда экспертов, готовых помочь с выбором размера ответить на все вопросы.',
  },
  {
    img: exclusive,
    title: 'Эксклюзивный выбор',
    text: 'Богатый ассортимент оригинальных моделей Nike, включая редкие выпуски.',
  },
]
