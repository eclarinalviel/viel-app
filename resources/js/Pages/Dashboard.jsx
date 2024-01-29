import { usePage } from '@inertiajs/inertia-react'
import CompanyQuote from './CompanyQuote'
import CompanyProfile from './CompanyProfile'
import SearchCompany from './SearchCompany'

export default function Dashboard({ profile, quote }) {
    const { auth } = usePage().props

    return (
        <div>
            <div className="flex flex-col h-screen bg-gray-100">
                <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:flex items-center">
                            <img src="https://png.pngtree.com/element_our/png/20180918/simple-v-logo-design-png_100141.jpg" alt="Logo" className="w-20 h-15 mr-2" />
                            <h2 className="font-bold text-xl  text-gray-500">Finance & Stock Market</h2>
                        </div>
                    </div>

                    <div className="space-x-5">

                        <div className="relative inline-block text-left">
                            <i className="fas fa-user text-gray-500 text-lg"></i>
                            <span className="text-gray-500 text-sm mr-3"> Welcome, <b>{auth.user.username}!</b></span>

                            <a href="/logout" className="text-gray-500 px-4 py-2 text-sm" role="menuitem" tabIndex="-1">
                                <i className="fas fa-sign-out text-cyan-500 text-lg"></i> Sign out
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex">
                    <div className="p-2 bg-white w-60  flex-col  md:flex" id="sideNav">
                        <nav>
                            <a className="block py-2.5 px-4 my-4 rounded transition duration-200 bg-gradient-to-r from-cyan-400 hover:to-cyan-300 text-white active" href="/dashboard">
                                <i className="fas fa-home mr-2"></i>Dashboard
                            </a>

                        </nav>

                    </div>

                    <div className="flex-1 p-4">
                        <SearchCompany></SearchCompany>

                        {(() => {
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2 p-2">
                                    <CompanyProfile profile={profile}></CompanyProfile>
                                    <CompanyQuote quote={quote}></CompanyQuote>
                                </div>
                            );
                        })()}

                    </div>
                </div>
            </div>
        </div>
    )
}