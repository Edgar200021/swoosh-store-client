import toast from 'react-hot-toast'

interface CustomError extends Error {
  data: {
    statusCode: number
    message: string
  }
}

const isCustomError = (error: unknown): error is CustomError => {
  return (error as CustomError).data.statusCode !== undefined
}

export const validateError = (error: unknown): void => {
  if (isCustomError(error)) {
    toast.error(error.data.message)
    return
  }

  if (error instanceof Error) {
    toast.error(error.message)
    return
  }

  console.log(error)
}
