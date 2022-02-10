import React from 'react'

const skeleton = () => {
  return (
    <>
      <div className="flex h-full w-96  animate-pulse justify-center space-x-2 rounded-xl border-2 p-6">
        <div className="mt-2 mb-2 flex flex-col space-y-2 ">
          <div className="h-6 w-80 rounded-md bg-gray-300 "></div>
          <div className="h-6 w-60 rounded-md bg-gray-300 "></div>
          <div className="h-6 w-36 rounded-md bg-gray-300 "></div>
        </div>
      </div>
    </>
  )
}

export default skeleton
