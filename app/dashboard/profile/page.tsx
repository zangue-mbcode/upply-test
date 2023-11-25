import { Metadata } from "next"
import { RegisterForm } from "./profile-form"

export const metadata: Metadata = {
  title: "Profile",
  description: "Upply test profile",
}

export default function AuthenticationPage() {
  return (
    <>
    <div className="h-full container flex items-center">
      <div className="bg-card border rounded-md border-border p-4 flex-1">
      <RegisterForm  />
      </div>
    </div>
     
    </>
  )
}