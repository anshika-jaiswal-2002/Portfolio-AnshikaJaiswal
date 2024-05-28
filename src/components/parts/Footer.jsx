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
      <div className="bg-orange-500 border-t-2 border-purple-500 h-fit ">
        <div className='grid grid-cols-1 sm:grid-cols-2 text-center text-purple-950 items-center p-4'>
          <div className='flex flex-col text-lg sm:text-xl'>
            <div className='font-bold'>Thank you for visiting my Portfolio</div>
            <button 
              onClick={() => redirectToGmail(profileData.email_KIIT)}
              className='bg-purple-950 text-orange-500 w-fit mx-auto px-4 py-2 rounded-lg'
            >Gmail: {profileData.email_gmail}</button>
          </div>
          <div className='flex flex-col gap-2'>
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
      </div>
    </div>
  )
}

export default Footer;