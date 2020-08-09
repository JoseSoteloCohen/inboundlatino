import React from "react"

const Score = ({ ui, integrations, company, features }) => (
  <div className="mt-10 sm:pb-6">
    <div className="relative">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="rounded-lg bg-gray-800 shadow-lg sm:grid sm:grid-cols-4">
            <div className="flex flex-col border-b border-gray-700 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 lg:text-lg text-lg text-lg leading-6 font-medium text-gray-500 md:text-xs" id="item-1">
                UI
              </dt>
              <dd className="order-1 lg:text-5xl text-5xl leading-none font-extrabold text-blue-600 md:text-4xl"
                  aria-describedby="item-1">
                { ui }/5
              </dd>
            </div>
            <div
              className="flex flex-col p-6 text-center border-t border-b border-gray-700 sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg lg:text-lg leading-6 font-medium text-gray-500 md:text-xs">
                Funcionalidad
              </dt>
              <dd className="order-1 lg:text-5xl text-5xl leading-none font-extrabold text-blue-600 md:text-4xl">
                { features }/5
              </dd>
            </div>
            <div
              className="flex flex-col  p-6 text-center">
              <dt className="order-2 mt-2 text-lg lg:text-lg leading-6 font-medium text-gray-500 md:text-xs">
                Compañía
              </dt>
              <dd className="order-1 text-lg lg:text-5xl text-5xl leading-none font-extrabold text-blue-600 md:text-4xl">
                { company }/5
              </dd>
            </div>
            <div className="flex flex-col border-t border-gray-700 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg lg:text-lg leading-6 font-medium text-gray-500 md:text-xs">
                Integraciones
              </dt>
              <dd className="order-1 lg:text-5xl text-5xl leading-none font-extrabold text-blue-600 md:text-4xl">
                { integrations }/5
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
)

export default Score
