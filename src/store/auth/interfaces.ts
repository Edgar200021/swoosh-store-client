import {User} from '../user/interfaces'

export interface AuthResponse {
  user: User
  accessToken: string
}

export interface SignUpRequest {
  email: string
  password: string
  passwordConfirm: string
}

export interface SignInRequest {
  email: string
  password: string
}

export interface ResetPasswordRequest extends SignUpRequest {
  passwordResetToken: string
}

export interface ChangePasswordRequest extends Pick<SignUpRequest, 'password' | 'passwordConfirm'> {
  oldPassword: string
}