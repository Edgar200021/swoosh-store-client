export const getDayDifference = (date: Date): number => {
  const day = new Date().getTime() - new Date(date).getTime()

  return Math.ceil(day / (1000 * 60 * 60 * 24))
}

export const formatDate = (
  date: Date,
  locales: string | string[] = 'ru-RU',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
): string => {
  return Intl.DateTimeFormat(locales, options).format(date)
}
