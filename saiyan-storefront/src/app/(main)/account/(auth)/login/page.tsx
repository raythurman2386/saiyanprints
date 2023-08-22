import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in | Saiyan Prints",
  description: "Sign in to your Saiyan Prints account.",
}

export default function Login() {
  return <LoginTemplate />
}
