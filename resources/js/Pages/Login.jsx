import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Login() {

  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/loginPost', values)
  }

  return (
    <section className="flex h-screen">
        <div className="m-auto">
            <div
                className="relative w-full max-w-lg bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-12">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>

                            <div className="relative mt-6">
                                <input type="textfield" name="username" id="username" value={values.username} onChange={handleChange} placeholder="Username" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                                <label htmlFor="username" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Username</label>
                            </div>
                            <div className="relative mt-6">
                                <input type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            </div>
                            <div className="my-6">
                                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                <a href="/signup"
                                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"> Sign
                                    up
                                </a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}