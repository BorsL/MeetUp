import React from 'react'

const Background = () => {
  return (
    <>
        {/* Stylized Background */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 opacity-30 rotate-6 rounded-lg blur-xl animate-floating"></div>
        <div className="absolute bottom-32 left-16 w-36 h-36 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 -rotate-12 rounded-xl blur-2xl animate-floating"></div>
        <div className="absolute top-1/4 right-1/3 w-14 h-14 bg-gradient-to-r from-lime-500 to-green-400 opacity-50 rotate-3 rounded-lg blur-lg animate-floating"></div>
    </>
  )
}

export default Background