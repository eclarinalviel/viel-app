import { usePage } from '@inertiajs/inertia-react'

export default function MainLayout({ children }) {
  const { flash } = usePage().props

  return (
    <main>
      <header></header>
      <div className="cont-messages">
        {flash.message && (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                <p className="font-bold">Success!</p>
                <p> {flash.message} </p>
            </div>
        )}
        {flash.message && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">Error!</p>
            <p> {flash.error} </p>
        </div>
        )}
        
      </div>
      <footer></footer>
    </main>
  )
}