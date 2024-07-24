import React from 'react'
import { ReactTyped } from "react-typed";
import jatin from '../../public/jatin.png'

function Home() {
    return (
        <>
            <div name = "Home" className='mt-24 mx-10 px-9 pt-10 pb-20 flex justify-between glass rounded-md'>

                <div className=' w-1/2'>

                    <h1 className='text-blue-300 text-lg font-serif '>Welcome to My Feed...</h1>

                    <div className='flex text-3xl font-serif pt-2 font-semibold'>
                        <h1 className='pr-2 text-blue-400'>Hello, I'm a </h1>
                        <ReactTyped
                        className='text-red-600 font-bold'
                            strings={["Developer" , "Programmer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop ={true}
                        />
                    </div>


                    <p className='text-base pt-3 text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aliquam repudiandae! Sint unde laborum porro veniam expedita quis ex aliquid tenetur voluptatem eveniet, quos ratione exercitationem et dignissimos repellat quod sapiente nulla nemo aliquam. Aspernatur facilis cupiditate atque non aperiam ducimus beatae deserunt vero repudiandae, ipsum earum alias omnis sequi officia minima pariatur! Dolorum, beatae dignissimos.</p>
                    <br />

                    <div className='flex items-center justify-between'>

                        <div>
                            <h1 className='text-red-500 font-serif text-xl'>Available on...</h1>

                            {/* linkedin */}
                            <button className='pr-4 pt-2 hover:scale-125'><a href="https://www.linkedin.com/in/jatingupta1234/" target = '_blank' className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a></button>

                            {/* insta */}

                            <button className='pr-4 pt-2 hover:scale-125'><a href="https://www.instagram.com/jatin___gupta/" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a></button>

                            {/* mail */}

                            <button className='pr-2 pt-2 hover:scale-125'><a href="mailto:jatingup2005@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </a></button>

                        </div>

                        <div>
                            <h1 className='text-red-500  font-serif text-xl'>Currently working on...</h1>

                            {/* mongo */}
                            <button className='pr-2 pt-2 hover:scale-125'><a href="https://en.wikipedia.org/wiki/MongoDB" target='_blank'>
                                <svg fill="" width="22" height="22" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <title>mongodb</title>
                                    <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
                                </svg>
                            </a></button>

                            {/* express */}
                            <button className='pr-2 pt-2 hover:scale-125'><a href="https://en.wikipedia.org/wiki/Express.js" target='_blank'>
                                <svg width="22" height="22" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" /></svg>
                            </a></button>

                            {/* react */}
                            <button className='pr-2 pt-2 hover:scale-125'><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target='_blank'>
                                <svg width="22" height="22" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31537 1.83658C4.91591 1.72069 4.6196 1.75177 4.40406 1.86852C4.18851 1.98528 4.00061 2.21648 3.87946 2.61438C3.75743 3.01517 3.71578 3.55024 3.77508 4.1963C3.78469 4.30099 3.79689 4.40794 3.81168 4.51697C4.33487 4.38401 4.89711 4.279 5.48788 4.20569C5.89742 3.63189 6.327 3.11445 6.76281 2.66575C6.74097 2.64805 6.71917 2.63058 6.69739 2.61335C6.18865 2.21073 5.71773 1.95332 5.31537 1.83658ZM7.49994 1.9775C7.43924 1.92661 7.37857 1.87716 7.31796 1.8292C6.746 1.37655 6.16025 1.04047 5.59401 0.876189C5.02487 0.711062 4.44065 0.711415 3.92776 0.989234C3.41488 1.26705 3.09543 1.7562 2.92282 2.32312C2.75109 2.88714 2.71259 3.56136 2.77927 4.28771C2.7949 4.45796 2.81643 4.63245 2.84379 4.81065C2.67409 4.87146 2.51042 4.93563 2.35329 5.00297C1.68286 5.2903 1.10837 5.64527 0.694221 6.06491C0.277951 6.4867 0 7.00057 0 7.58387C0 8.16716 0.27795 8.68103 0.694221 9.10282C1.10837 9.52246 1.68286 9.87743 2.35329 10.1648C2.51042 10.2321 2.67408 10.2963 2.84378 10.3571C2.81642 10.5353 2.79488 10.7098 2.77925 10.8801C2.71257 11.6064 2.75107 12.2806 2.9228 12.8447C3.09541 13.4116 3.41486 13.9007 3.92774 14.1785C4.44063 14.4564 5.02485 14.4567 5.59399 14.2916C6.16023 14.1273 6.74598 13.7912 7.31794 13.3386C7.37856 13.2906 7.43923 13.2412 7.49994 13.1903C7.56065 13.2412 7.62132 13.2906 7.68193 13.3386C8.2539 13.7912 8.83965 14.1273 9.40589 14.2916C9.97503 14.4567 10.5592 14.4564 11.0721 14.1785C11.585 13.9007 11.9045 13.4116 12.0771 12.8447C12.2488 12.2806 12.2873 11.6064 12.2206 10.8801C12.205 10.7098 12.1835 10.5353 12.1561 10.3571C12.3258 10.2963 12.4895 10.2321 12.6467 10.1648C13.3171 9.87743 13.8916 9.52246 14.3058 9.10282C14.722 8.68103 15 8.16716 15 7.58387C15 7.00057 14.722 6.4867 14.3058 6.06491C13.8916 5.64527 13.3171 5.2903 12.6467 5.00297C12.4895 4.93562 12.3258 4.87144 12.1561 4.81061C12.1834 4.63242 12.205 4.45795 12.2206 4.28771C12.2873 3.56136 12.2488 2.88714 12.0771 2.32312C11.9045 1.7562 11.585 1.26705 11.0721 0.989234C10.5592 0.711415 9.97501 0.711062 9.40587 0.876189C8.83963 1.04047 8.25388 1.37655 7.68191 1.8292C7.62131 1.87716 7.56064 1.92661 7.49994 1.9775ZM7.49994 3.34216C7.27514 3.57233 7.05016 3.82461 6.82771 4.09712C7.04936 4.08834 7.27361 4.08387 7.5 4.08387C7.72635 4.08387 7.95056 4.08834 8.17216 4.09712C7.94972 3.82461 7.72474 3.57233 7.49994 3.34216ZM9.51199 4.20567C9.10245 3.63188 8.67287 3.11444 8.23707 2.66575C8.25891 2.64805 8.28071 2.63058 8.30249 2.61335C8.81123 2.21073 9.28215 1.95332 9.68451 1.83658C10.084 1.72069 10.3803 1.75177 10.5958 1.86852C10.8114 1.98528 10.9993 2.21648 11.1204 2.61438C11.2424 3.01517 11.2841 3.55024 11.2248 4.1963C11.2152 4.30098 11.203 4.40792 11.1882 4.51694C10.665 4.38399 10.1028 4.27898 9.51199 4.20567ZM8.94935 5.15034C8.484 5.10693 7.9991 5.08387 7.5 5.08387C7.00085 5.08387 6.51591 5.10693 6.05052 5.15035C5.79069 5.53887 5.53944 5.95428 5.30171 6.39316C5.08522 6.79282 4.89116 7.19123 4.71966 7.58387C4.89117 7.97652 5.08524 8.37494 5.30173 8.77462C5.53945 9.21348 5.7907 9.62888 6.05051 10.0174C6.5159 10.0608 7.00085 10.0839 7.5 10.0839C7.99911 10.0839 8.48401 10.0608 8.94936 10.0174C9.20918 9.62889 9.46042 9.21349 9.69815 8.77462C9.91464 8.37494 10.1087 7.97652 10.2802 7.58387C10.1087 7.19124 9.91465 6.79282 9.69817 6.39316C9.46043 5.95427 9.20918 5.53886 8.94935 5.15034ZM10.7728 6.28838C10.7096 6.16452 10.6445 6.04064 10.5775 5.91687C10.4696 5.71781 10.3589 5.52276 10.2456 5.33206C10.5062 5.38167 10.7573 5.43803 10.9978 5.5005C10.9346 5.75638 10.8596 6.01957 10.7728 6.28838ZM10.7728 8.87936C10.7096 9.00323 10.6445 9.12712 10.5774 9.25091C10.4696 9.44995 10.3589 9.64498 10.2456 9.83568C10.5062 9.78606 10.7573 9.72969 10.9978 9.66722C10.9346 9.41135 10.8596 9.14816 10.7728 8.87936ZM11.9533 9.36619C11.8083 8.7925 11.6114 8.19354 11.3649 7.58386C11.6114 6.97419 11.8083 6.37523 11.9533 5.80154C12.0563 5.84048 12.1561 5.8807 12.2528 5.92212C12.8491 6.17768 13.2997 6.46916 13.594 6.76735C13.8862 7.06339 14 7.33873 14 7.58387C14 7.829 13.8862 8.10434 13.594 8.40038C13.2997 8.69857 12.8491 8.99005 12.2528 9.24561C12.1561 9.28703 12.0563 9.32725 11.9533 9.36619ZM11.1882 10.6508C10.665 10.7837 10.1028 10.8888 9.51201 10.9621C9.10247 11.5359 8.67288 12.0533 8.23707 12.502C8.25891 12.5197 8.28072 12.5372 8.30251 12.5544C8.81125 12.957 9.28217 13.2145 9.68453 13.3312C10.084 13.4471 10.3803 13.416 10.5958 13.2993C10.8114 13.1825 10.9993 12.9513 11.1204 12.5534C11.2425 12.1526 11.2841 11.6175 11.2248 10.9715C11.2152 10.8668 11.203 10.7598 11.1882 10.6508ZM7.49994 11.8256C7.72475 11.5954 7.94973 11.3431 8.17218 11.0706C7.95057 11.0794 7.72635 11.0839 7.5 11.0839C7.27361 11.0839 7.04935 11.0794 6.82769 11.0706C7.05015 11.3431 7.27513 11.5954 7.49994 11.8256ZM4.75426 9.83565C4.64098 9.64497 4.53025 9.44994 4.42244 9.25091C4.35539 9.12712 4.29025 9.00323 4.22704 8.87936C4.14031 9.14815 4.06531 9.41133 4.00208 9.66719C4.24253 9.72967 4.49368 9.78603 4.75426 9.83565ZM3.81167 10.6508C4.33485 10.7837 4.8971 10.8887 5.48786 10.962C5.8974 11.5358 6.327 12.0533 6.76282 12.502C6.74097 12.5197 6.71915 12.5372 6.69737 12.5544C6.18863 12.957 5.71771 13.2145 5.31535 13.3312C4.91589 13.4471 4.61958 13.416 4.40404 13.2993C4.18849 13.1825 4.00059 12.9513 3.87944 12.5534C3.75741 12.1526 3.71576 11.6175 3.77506 10.9715C3.78468 10.8668 3.79688 10.7598 3.81167 10.6508ZM3.04656 9.36615C3.19156 8.79247 3.38844 8.19352 3.63494 7.58387C3.38844 6.97421 3.19157 6.37526 3.04656 5.80158C2.94366 5.84051 2.84383 5.88071 2.74721 5.92212C2.15089 6.17768 1.70026 6.46916 1.40597 6.76735C1.1138 7.06339 1 7.33873 1 7.58387C1 7.829 1.1138 8.10434 1.40597 8.40038C1.70026 8.69857 2.15089 8.99005 2.74721 9.24561C2.84383 9.28702 2.94366 9.32722 3.04656 9.36615ZM4.00208 5.50053C4.06531 5.7564 4.14031 6.01958 4.22704 6.28837C4.29024 6.16452 4.35538 6.04065 4.42242 5.91687C4.53024 5.71782 4.64098 5.52278 4.75427 5.33208C4.49369 5.3817 4.24254 5.43806 4.00208 5.50053ZM6 7.58387C6 6.75544 6.67157 6.08387 7.5 6.08387C8.32843 6.08387 9 6.75544 9 7.58387C9 8.41229 8.32843 9.08387 7.5 9.08387C6.67157 9.08387 6 8.41229 6 7.58387ZM7.5 7.08387C7.22386 7.08387 7 7.30772 7 7.58387C7 7.86001 7.22386 8.08387 7.5 8.08387C7.77614 8.08387 8 7.86001 8 7.58387C8 7.30772 7.77614 7.08387 7.5 7.08387Z" fill="#000000" />
                                </svg>
                            </a></button>

                            {/* node js */}
                            <button className='pr-2 pt-2 hover:scale-125'><a href="https://en.wikipedia.org/wiki/Node.js" target='_blank'>
                                <svg width="22" height="22" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L2.00634 11.3742L4.06264 10.5422C4.62921 10.313 5.00004 9.7629 5.00004 9.15171V4H6.00004V9.15171C6.00004 10.1704 5.382 11.0871 4.43772 11.4692L3.09826 12.0112L7.5 14.5788L14 10.7872V4.21281ZM7 6C7 4.89543 7.89543 4 9 4H10.1667C11.1792 4 12 4.82081 12 5.83333V6H11V5.83333C11 5.3731 10.6269 5 10.1667 5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H10C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11H9C7.89543 11 7 10.1046 7 9H8C8 9.55228 8.44772 10 9 10H10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8H9C7.89543 8 7 7.10457 7 6Z" fill="#000000" />
                                </svg>
                            </a></button>

                            {/* java */}
                            <button className='pr-2 pt-2 hover:scale-125'><a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target='_blank'>
                                <svg width="22" height="22" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path fill="" d="M12.557 23.22c0 0-0.982 0.571 0.699 0.765 2.037 0.232 3.079 0.199 5.324-0.226 0 0 0.59 0.37 1.415 0.691-5.033 2.157-11.39-0.125-7.437-1.23zM11.942 20.405c0 0-1.102 0.816 0.581 0.99 2.176 0.224 3.895 0.243 6.869-0.33 0 0 0.411 0.417 1.058 0.645-6.085 1.779-12.863 0.14-8.508-1.305zM17.127 15.63c1.24 1.428-0.326 2.713-0.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zM23.783 25.302c0 0 0.727 0.599-0.801 1.062-2.905 0.88-12.091 1.146-14.643 0.035-0.917-0.399 0.803-0.953 1.344-1.069 0.564-0.122 0.887-0.1 0.887-0.1-1.020-0.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-0.749 16.044-1.95zM13.029 17.489c0 0-4.673 1.11-1.655 1.513 1.274 0.171 3.814 0.132 6.181-0.066 1.934-0.163 3.876-0.51 3.876-0.51s-0.682 0.292-1.175 0.629c-4.745 1.248-13.911 0.667-11.272-0.609 2.232-1.079 4.046-0.956 4.046-0.956zM21.412 22.174c4.824-2.506 2.593-4.915 1.037-4.591-0.382 0.079-0.552 0.148-0.552 0.148s0.142-0.222 0.412-0.318c3.079-1.083 5.448 3.193-0.994 4.887-0 0 0.075-0.067 0.097-0.126zM18.503 3.337c0 0 2.671 2.672-2.534 6.781-4.174 3.296-0.952 5.176-0.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zM13.503 28.966c4.63 0.296 11.74-0.164 11.908-2.355 0 0-0.324 0.831-3.826 1.49-3.952 0.744-8.826 0.657-11.716 0.18 0 0 0.592 0.49 3.635 0.685z"></path>
                                </svg>
                            </a></button>

                            {/* dsa */}
                            <button className='pr-2 pt-2 hover:scale-125'><a href="https://www.geeksforgeeks.org/what-is-dsa-dsa-full-form/" target='_blank'>
                                <svg width="22" height="22" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>DS Automobiles icon</title><path d="M2.201 0v15.865l9.473-7.377c.102-.077.259-.222.315-.412.049.16.164.277.204.315.686.648 3.802 3.612 4.639 6.148.169.51.264 1.024.264 1.528 0 .434-.095.877-.264 1.317-.38.994-1.226 2.055-2.086 2.96-.367.386-1.955 1.976-2.479 2.5a.903.903 0 0 0-.232.44 2.218 2.218 0 0 0-.041.419L11.99 24l9.47-7.378c.13-.095.339-.294.339-.555 0-.23-.175-.41-.226-.457-.686-.648-3.802-3.612-4.639-6.148a4.886 4.886 0 0 1-.264-1.529c0-.434.095-.876.264-1.316.381-.995 1.227-2.057 2.088-2.962.368-.387 1.955-1.975 2.479-2.499a.89.89 0 0 0 .232-.439c.03-.158.042-.307.042-.419l.004-.297-9.474 7.377c-.104.077-.26.221-.316.41-.057-.189-.214-.334-.315-.41zm.222.757c.53.36 1.117.755 1.858 1.35.7.563 1.469 1.228 2.217 1.997C7.667 5.305 8.56 6.625 8.56 7.92s-.894 2.615-2.063 3.817a24.382 24.382 0 0 1-2.217 1.996c-.741.596-1.305.99-1.835 1.35.606-.474 4.289-3.322 5.255-5.747.188-.473.298-.949.298-1.416 0-.467-.11-.943-.298-1.416C6.735 4.079 3.029 1.23 2.423.757zM21.535.99l-.008.011c-.73.586-4.298 3.766-5.063 5.621-.18.437-.298.876-.298 1.307 0 .474.08.956.247 1.435.858 2.458 4.077 5.355 4.616 5.836-.47-.365-.913-.776-1.571-1.38-.622-.57-1.24-1.243-1.904-2.023-1.038-1.217-1.95-2.555-1.95-3.868 0-1.196.855-2.414 1.973-3.524.69-.685 3.32-2.958 3.958-3.415zm-8.828 7.774c.468.37.962.812 1.62 1.416.62.57 1.24 1.244 1.903 2.023 1.038 1.218 1.95 2.555 1.95 3.868 0 1.196-.855 2.414-1.973 3.524-.689.684-3.334 2.97-3.975 3.43l.007-.012c.736-.59 4.317-3.782 5.081-5.635.18-.437.298-.876.298-1.307 0-.473-.08-.955-.247-1.435-.857-2.458-4.126-5.39-4.664-5.872Z" /></svg>
                            </a></button>

                        </div>


                    </div>

                </div>

                <div className=' w-1/2 '>
                    <img className='w-[60%] h-auto ml-36' src={jatin} alt="Profile picture" />
                </div>

            </div>
        </>
    )
}

export default Home
