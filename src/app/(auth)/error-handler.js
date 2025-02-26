import { AuthErrorCodes } from "firebase/auth";

// More error codes can be found at https://firebase.google.com/docs/reference/admin/java/reference/com/google/firebase/auth/AuthErrorCode

export function LoginErrorHandler(error) {
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    return `Wrong password. Try again.`;
  } else {
    return `Error: ${error.message}`;
  }
}

export function RegisterErrorHandler(error) {
  return `Error: ${error.message}`;
}
