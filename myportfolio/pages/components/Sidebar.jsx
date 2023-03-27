import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='fixed'>
            <nav className="flex flex-col bg-zinc-900 w-20 h-screen px-1 tex-gray-900 border border-gray-700 md:w-48 md:px-4 lg:w-64 lg:px-4">  {/* w-64 */}
                <div className="flex flex-wrap mt-8 justify-center">
                    <div className="flex justify-center w-full mb-4 ">
                        <span className="font-semibold text-xs md:text-base lg:text-xl text-white ">Matias Soto</span>
                    </div>
                    <div className="w-50">
                        <img
                            src="Mati.png"
                            alt="ProfilePic"
                            className="mx-auto w-30 h-30 rounded-full border-4 md:border-8 lg:border-8 border-white-400"
                        />
                    </div>
                </div>
                <div className="mt-5 mb-4 md:mt-8 lg:mt-10">
                    <ul className="md:ml-2 lg:ml-4">
                        <Link href="/">
                            <li className="mb-2 py-4 text-gray-100 flex flex-row justify-center md:justify-start lg:justify-start  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg md:px-4 lg:px-4">
                                <span>
                                    <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                        <path
                                            d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm hidden md:block lg:block lg:text-base">Matias</span>
                            </li>
                        </Link>
                        <Link href="/Aboutme">
                            <li className="mb-2 py-4 text-gray-100 flex flex-row justify-center md:justify-start lg:justify-start border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg md:px-4 lg:px-4">
                                <span>
                                    <svg
                                        className="fill-current h-5 w-5 "
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>

                                <span className="ml-2 text-sm lg:text-base hidden md:block lg:block">About Me</span>
                            </li>
                        </Link>
                        <Link href="/Proyects">
                            <li className="mb-2 py-4 text-gray-100 flex flex-row justify-center md:justify-start lg:justify-start  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg md:px-4 lg:px-4">
                                <span>
                                    <svg className="fill-current h-5 w-5 " viewBox="0 0 20 18">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V13C17 14.1046 16.1046 15 15 15H12.7808L12.903 15.4887L13.7071 16.2929C13.9931 16.5789 14.0787 17.009 13.9239 17.3827C13.7691 17.7563 13.4045 18 13 18H7.00003C6.59557 18 6.23093 17.7563 6.07615 17.3827C5.92137 17.009 6.00692 16.5789 6.29292 16.2929L7.09706 15.4887L7.21925 15H5C3.89543 15 3 14.1046 3 13V5ZM8.7713 12C8.75657 11.9997 8.74189 11.9997 8.72725 12H5V5H15V12H11.2728C11.2582 11.9997 11.2435 11.9997 11.2288 12H8.7713Z"
                                        ></path>
                                    </svg>
                                </span>

                                <span className="ml-2 text-sm lg:text-base hidden md:block lg:block">Proyects</span>
                            </li>
                        </Link>
                        <Link href="/Education">
                            <li className="mb-2 py-4 text-gray-100 flex flex-row justify-center md:justify-start lg:justify-start border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg md:px-4 lg:px-4">
                                <span>
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 16 16">
                                        <path
                                            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm lg:text-base hidden md:block lg:block">Education</span>
                            </li>
                        </Link>
                        <Link href="/Skills">
                            <li className="py-4 text-gray-100 flex flex-row justify-center md:justify-start lg:justify-start border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg md:px-4 lg:px-4 lg:mb-2">
                                <span>
                                    <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                        <path
                                            d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                        4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                        9v2h-4v-2h4m2-2h-8v6h8v-6z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm lg:text-base hidden md:block lg:block">Skills</span>
                            </li>
                        </Link>
                        <Link href="/Contact">
                            <li className="py-4 text-gray-100 flex flex-row justify-center md:justify-start lg:justify-start border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg md:px-4 lg:px-4 lg:mb-2">
                                <span>
                                    <svg
                                        className="fill-current h-5 w-5 "
                                        viewBox="0 0 8 4"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm lg:text-base hidden md:block lg:block">Contact</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar