import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-white text-black">
      {/* Enhanced Grey Sidebar - Responsive */}
      <div className="lg:w-1/4 w-full p-4 md:p-6 lg:p-8 flex flex-col justify-between bg-gray-200 text-gray-800 lg:rounded-r-2xl lg:m-2 shadow-xl relative overflow-hidden">
        {/* Circular background highlights - Desktop only */}
        <div className="hidden lg:block absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 z-0"></div>
        <div className="hidden lg:block absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-20 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-white">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold">RemoteEngine</h1>
          </div>
          <p className="text-xs md:text-sm text-gray-600">Hire vetted devs & AI Engineers</p>
        </div>

        <div className="relative z-10 mt-6 md:mt-10 lg:mt-auto bg-white bg-opacity-70 p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-300 shadow-sm">
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Need help to hire the right talent?</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Schedule a call with our experts</p>
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 md:py-3 px-3 md:px-4 rounded-md md:rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm md:text-base shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Schedule Call
          </button>
        </div>
      </div>

      {/* Main Content - Responsive */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-white">
        <div className="w-full max-w-xl text-center space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Thank you for submitting your requirement!</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600">
            Our representative will get back to you with the best talents for you.
          </p>

          <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-black">RemoteEngine</h1>
            <p className="text-xs sm:text-sm text-gray-600">Hire vetted devs & AI Engineers</p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span>EOR Service</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <span>Flexible Hiring</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <span>AI Interviewer</span>
              </div>
            </div>

            <p className="text-sm sm:text-md text-black font-medium">
              Sign up now to hire & manage your remote talents easier
            </p>

            <button className="w-full bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base">
              Sign up now for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;