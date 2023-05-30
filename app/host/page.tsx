import React from 'react'

const page = () => {
  return (
    <div>
      <div className="">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        {/* Hero content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Product</h1>
          <p className="text-lg mb-8">Unlock the power of our amazing features.</p>
          <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-2xl mb-4">
                <svg
                  className="w-8 h-8 text-blue-500 inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    d="M17.707 12l-4.823 4.823a.999.999 0 11-1.414-1.414L14.586 12l-3.116-3.409a.999.999 0 111.549-1.281l4.243 4.628a.999.999 0 010 1.282l-4.243 4.628a.996.996 0 01-.764.363.998.998 0 01-.648-.285.999.999 0 01.116-1.414L17.707 12z"
                  />
                </svg>
                Feature 1
              </div>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Repeat for other feature cards */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          {/* Testimonial carousel */}
          <div className="flex flex-wrap -mx-4">
            {/* Testimonial cards */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                <div className="flex items-center mt-4">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/profile-pic.jpg"
                    alt="Profile"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium">John Doe</h4>
                    <p className="text-gray-600 text-sm">CEO, Company Name</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for other testimonial cards */}
          </div>
          
    </div>
    </section>
    </div>
    </div>
  )
}

export default page
