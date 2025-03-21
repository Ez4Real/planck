import type { ApiError } from "./client"
import useCustomToast from "./hooks/useCustomToast"
import { UserCoordinates } from './client/types.gen'

export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
}

export const namePattern = {
  value: /^[A-Za-z\s\u00C0-\u017F]{1,30}$/,
  message: "Invalid name",
}

export const passwordRules = (isRequired = true) => {
  const rules: any = {
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
  }

  if (isRequired) {
    rules.required = "Password is required"
  }

  return rules
}

export const confirmPasswordRules = (
  getValues: () => any,
  isRequired = true,
) => {
  const rules: any = {
    validate: (value: string) => {
      const password = getValues().password || getValues().new_password
      return value === password ? true : "The passwords do not match"
    },
  }

  if (isRequired) {
    rules.required = "Password confirmation is required"
  }

  return rules
}

export const handleError = (err: ApiError) => {
  const { showErrorToast } = useCustomToast()
  const errDetail = (err.body as any)?.detail
  let errorMessage = errDetail || "Something went wrong."
  if (Array.isArray(errDetail) && errDetail.length > 0) {
    errorMessage = errDetail[0].msg
  }
  showErrorToast(errorMessage)
}

export const getUserCoordinates = (): Promise<UserCoordinates> => {
  const { showErrorToast } = useCustomToast()
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      const notSupportedMsg = "Geolocation is not supported by your browser."
      showErrorToast(notSupportedMsg)
      reject(new Error(notSupportedMsg))
      return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: UserCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
        resolve(coords)
      }
    )
  })
}


export const convertStringToDate = (dateStr: string): Date => {
  const [datePart, timePart] = dateStr.split(', ')
  const [day, month, year] = datePart.split('.')

  return new Date(`${year}-${month}-${day}T${timePart}`)
}


export const downloadFromBlob = async (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};