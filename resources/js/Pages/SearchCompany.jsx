
import { useState } from 'react'
import { usePage, useForm } from '@inertiajs/inertia-react'

export default function SearchCompany() {
    const { symbol } = usePage().props
    const {data, setData, post, processing, errors } = useForm({
        symbol: "",
        remember: true
      })

    function handleSubmit(e) {
        e.preventDefault()
        post('/dashboard', data)
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="relative mb-6 inline-block min-w-80">
                <input type="search" value={data.symbol} onChange={e => setData('symbol', e.target.value)} id="symbol" name="symbol" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search by Ticker Symbol.." required/>
                <button type="submit" disabled={processing} className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-cyan-700 rounded-e-lg border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:cyan:bg-blue-700 dark:cyan:ring-blue-800">
                    <i className="fas fa-filter text-white-500 text-lg"></i> Filter
                </button>
            </div>
            <h1 className="text-blue-400 text-lg font-semibold pb-4"><i className="fas fa-arrow-trend-up text-blue-400 text-lg"></i> Ticker: {symbol}</h1>
        </form>
    </>
  )
}