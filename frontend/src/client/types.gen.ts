// This file is auto-generated by @hey-api/openapi-ts

export type Body_login_login_access_token = {
  grant_type?: string | null
  username: string
  password: string
  scope?: string
  client_id?: string | null
  client_secret?: string | null
}

export type Body_products_upload_images = {
  images: Array<Blob | File>
}

export type HTTPValidationError = {
  detail?: Array<ValidationError>
}

export type Message = {
  message: string
}

export type NewPassword = {
  token: string
  new_password: string
}

export type PrivateUserCreate = {
  email: string
  password: string
  full_name: string
  is_verified?: boolean
}

export type ProductCreate = {
  title: string
  description?: string | null
}

export type ProductPublic = {
  title: string
  description?: string | null
  id: string
  owner_id: string
}

export type ProductsPublic = {
  data: Array<ProductPublic>
  count: number
}

export type ProductUpdate = {
  title?: string | null
  description?: string | null
}

export type SubscriberCreate = {
  email: string
  coordinates: UserCoordinates
}

export type SubscriberPublic = {
  email: string
  created_at?: string
  location: string | null
  id: string
}

export type SubscribersExport = {
  date_from: string
  date_to: string
}

export type SubscribersPublic = {
  data: Array<SubscriberPublic>
  count: number
}

export type Token = {
  access_token: string
  token_type?: string
}

export type UpdatePassword = {
  current_password: string
  new_password: string
}

export type UserCoordinates = {
  latitude: number
  longitude: number
}

export type UserCreate = {
  email: string
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  password: string
}

export type UserPublic = {
  email: string
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  id: string
}

export type UserRegister = {
  email: string
  password: string
  full_name?: string | null
}

export type UsersPublic = {
  data: Array<UserPublic>
  count: number
}

export type UserUpdate = {
  email?: string | null
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  password?: string | null
}

export type UserUpdateMe = {
  full_name?: string | null
  email?: string | null
}

export type ValidationError = {
  loc: Array<string | number>
  msg: string
  type: string
}

export type LoginLoginAccessTokenData = {
  formData: Body_login_login_access_token
}

export type LoginLoginAccessTokenResponse = Token

export type LoginTestTokenResponse = UserPublic

export type LoginRecoverPasswordData = {
  email: string
}

export type LoginRecoverPasswordResponse = Message

export type LoginResetPasswordData = {
  requestBody: NewPassword
}

export type LoginResetPasswordResponse = Message

export type LoginRecoverPasswordHtmlContentData = {
  email: string
}

export type LoginRecoverPasswordHtmlContentResponse = string

export type PrivateCreateUserData = {
  requestBody: PrivateUserCreate
}

export type PrivateCreateUserResponse = UserPublic

export type ProductsReadProductsData = {
  limit?: number
  skip?: number
}

export type ProductsReadProductsResponse = ProductsPublic

export type ProductsCreateProductData = {
  requestBody: ProductCreate
}

export type ProductsCreateProductResponse = ProductPublic

export type ProductsReadProductData = {
  id: string
}

export type ProductsReadProductResponse = ProductPublic

export type ProductsUpdateProductData = {
  id: string
  requestBody: ProductUpdate
}

export type ProductsUpdateProductResponse = ProductPublic

export type ProductsDeleteProductData = {
  id: string
}

export type ProductsDeleteProductResponse = Message

export type ProductsUploadImagesData = {
  formData: Body_products_upload_images
}

export type ProductsUploadImagesResponse = {
  [key: string]: unknown
}

export type SubscribersReadSubscribersData = {
  limit?: number
  skip?: number
}

export type SubscribersReadSubscribersResponse = SubscribersPublic

export type SubscribersCreateSubscriberData = {
  requestBody: SubscriberCreate
}

export type SubscribersCreateSubscriberResponse = SubscriberPublic

export type SubscribersReadSubscriberData = {
  id: string
}

export type SubscribersReadSubscriberResponse = SubscriberPublic

export type SubscribersDeleteSubscriberData = {
  id: string
}

export type SubscribersDeleteSubscriberResponse = Message

export type SubscribersExportSubscribersData = {
  requestBody: SubscribersExport
}

export type SubscribersExportSubscribersResponse = unknown

export type UsersReadUsersData = {
  limit?: number
  skip?: number
}

export type UsersReadUsersResponse = UsersPublic

export type UsersCreateUserData = {
  requestBody: UserCreate
}

export type UsersCreateUserResponse = UserPublic

export type UsersReadUserMeResponse = UserPublic

export type UsersDeleteUserMeResponse = Message

export type UsersUpdateUserMeData = {
  requestBody: UserUpdateMe
}

export type UsersUpdateUserMeResponse = UserPublic

export type UsersUpdatePasswordMeData = {
  requestBody: UpdatePassword
}

export type UsersUpdatePasswordMeResponse = Message

export type UsersRegisterUserData = {
  requestBody: UserRegister
}

export type UsersRegisterUserResponse = UserPublic

export type UsersReadUserByIdData = {
  userId: string
}

export type UsersReadUserByIdResponse = UserPublic

export type UsersUpdateUserData = {
  requestBody: UserUpdate
  userId: string
}

export type UsersUpdateUserResponse = UserPublic

export type UsersDeleteUserData = {
  userId: string
}

export type UsersDeleteUserResponse = Message

export type UtilsTestEmailData = {
  emailTo: string
}

export type UtilsTestEmailResponse = Message

export type UtilsHealthCheckResponse = boolean
