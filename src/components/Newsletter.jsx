import classNames from "classnames"
import React, { useState } from "react"

const Newsletter = ({ title, subtitle, buttonCTA, list }) => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Enviando...")

    const config = {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        lists: list
      })
    }

    const response = fetch('/.netlify/functions/post-sendfox', config)
      .then(r => {
        return r;
      })
      .catch(err => {
        console.log("====================================")
        console.log(err)
        console.log("====================================")
      })

    if (response.status !== 200) {
      setMessage("Some error occured while subscribing you to the list.")
      setDisabled(false)
    } else {
      setMessage(
        "Thanks! Please check your e-mail and click the confirmation link."
      )
    }
  }

  return (
    <div className="container py-12 lg:py-16">

      <div
        className="px-6 py-6 bg-azul-variante rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center shadow">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
            {title}
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200" id="newsletter-headline">
            {subtitle}
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form className="sm:flex" aria-labelledby="newsletter-headline" onSubmit={handleSubmit}>
            <input
              aria-label="Email address"
              className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
              onChange={event => setEmail(event.target.value)}
              placeholder="jose@tuemail.com"
              required
              type="email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                disabled={disabled}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-azul-variante bg-white hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                {buttonCTA}
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-indigo-200">
            0 spam, te lo prometo
          </p>
        </div>
      </div>
      <div
        className={classNames("w-full pt-4 text-sm", { "opacity-0": !message })}
      >
        {message}
      </div>

    </div>
  )
}

export default Newsletter
