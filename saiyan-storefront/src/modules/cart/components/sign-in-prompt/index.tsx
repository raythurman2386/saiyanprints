import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-slate-900 text-slate-300 p-3 flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">Already have an account?</h2>
        <p className="mt-2 text-slate-400">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="primary" className="mt-2">Sign in</Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
