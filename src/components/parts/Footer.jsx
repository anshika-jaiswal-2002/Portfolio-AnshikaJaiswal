import React from 'react';

import profileData from '../../data/profileData.json';

const Footer = () => {
  const redirectToGmail = (mail) => {
    const subject = "[Redirected from Anshika's-portfolio]";
    const body = 'Greetings of the day Anshika,\n';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="relative z-20">
      <div className="bg-orange-500 border-t-2 border-purple-500 h-fit">
        <div className='grid grid-cols-1 gap-2 sm:gap-1 sm:grid-cols-2 text-center text-purple-950 items-center py-4 px-1 sm:px-4 lg:w-[1014px] mx-auto'>

          {/* Part 1 */}
          <div className='flex flex-col gap-1 text-lg sm:text-xl'>

            {/* Thank you note */}
            <div className='font-bold'>Thank you for visiting my Portfolio</div>

            {/* Gmail button */}
            <div className='bg-purple-950 text-orange-500 w-fit mx-auto px-4 py-2 rounded-lg flex flex-col'>
              <p onClick={() => redirectToGmail(profileData.email_gmail)}
                className='hover:underline underline-offset-2 cursor-pointer'
              >{profileData.email_gmail}</p>
              <p onClick={() => redirectToGmail(profileData.email_gmail2)}
                className='hover:underline underline-offset-2 cursor-pointer'
              >{profileData.email_gmail2}</p>
              <p onClick={() => redirectToGmail(profileData.email_KIIT)}
                className='hover:underline underline-offset-2 cursor-pointer'
              >{profileData.email_KIIT}</p>
            </div>

          </div>

          {/* Part 2 */}
          <div className='flex flex-col gap-2'>

            {/* Section heading */}
            <p className='text-lg sm:text-xl'>Connect me over my socials</p>

            {/* Contact Icons */}
            <div className="flex flex-row flex-wrap gap-2 mx-auto">

              {/* Linkedin button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_linkedin}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-900 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg
                    className=' rounded-full'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fillRule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                      <path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                      ></path></g></g></svg>
                </div>
              </button>

              {/* Github button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_github}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-900 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg className='rounded-full text-purple-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" fill='currentColor'>
                    <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                  </svg>
                </div>
              </button>

              {/* Hackerrank button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_hackerrank}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-900 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg className='rounded-full text-purple-100' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="hackerrank">
                    <path fill="#2FC363" d="M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6c1.37,0,9.8-4.823,10.487-6c0.687-1.176,0.687-10.83,0-12C21.799,4.83,13.371,0,11.999,0L11.999,0z M14.84,19.415v0.002c-0.188,0-1.938-1.677-1.8-1.814c0.041-0.041,0.296-0.069,0.832-0.086c0-1.23,0.027-3.215,0.044-4.046c0.002-0.095-0.021-0.161-0.021-0.273h-3.787c0,0.333-0.022,1.697,0.064,3.416c0.012,0.213-0.074,0.279-0.271,0.278c-0.48-0.001-0.96-0.005-1.441-0.004c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941h3.803c0-0.214,0.019-1.629-0.057-3.922c-0.005-0.159,0.046-0.242,0.199-0.244c0.524-0.004,1.049-0.006,1.574-0.003c0.164,0.001,0.217,0.08,0.214,0.252c-0.173,8.967-0.032,8.341-0.032,9.86c0.42,0.016,0.796,0.045,0.838,0.086C16.757,17.737,15.027,19.415,14.84,19.415L14.84,19.415z"></path><path fill="#DEDEDE" d="M9.187,4.583C9,4.583,7.225,6.26,7.364,6.397c0.041,0.041,0.36,0.07,0.817,0.086v0.149c0.149,6.031,0.051,8.402,0.008,9.969c-0.007,0.214,0.077,0.286,0.271,0.286c0.067,0,0.134,0,0.201,0c0.413,0,0.826,0.003,1.24,0.004c0.001,0,0.003,0,0.004,0c0.194,0,0.279-0.067,0.268-0.278c-0.087-1.719-0.064-3.083-0.064-3.416H12v-1.626h-1.919c0.028-1.209,0.011-3.734,0.124-4.941V6.483C10.626,6.468,10.959,6.438,11,6.397C11.138,6.26,9.374,4.583,9.187,4.583L9.187,4.583z"></path><path fill="#29AA56" d="M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6l0,0H12V13.198h-1.892c0,0.333-0.022,1.697,0.064,3.416c0.012,0.211-0.073,0.278-0.268,0.278c-0.001,0-0.002,0-0.004,0c-0.413-0.001-0.826-0.004-1.24-0.004c-0.067,0-0.134,0-0.201,0c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941H12L11.999,0L11.999,0L11.999,0z"></path>
                  </svg>
                </div>
              </button>

              {/* Instagram Button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_instagram}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-900 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                  </svg>
                </div>
              </button>


            </div>
          </div>
        </div>
        <div className='text-[11px] text-yellow-900 sm:text-sm text-center   w-hit'>
          <button
            className='hover:bg-orange-400 cursor-default flex gap-1 mx-auto'
          >
            <span>Website development taken help from</span>
            <span className='cursor-pointer hover:bg-black' onClick={() => { window.open(`https://bodhisatta1999.netlify.app/`, '_blank') }}>🐱</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer;