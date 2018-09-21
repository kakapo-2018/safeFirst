import React from 'react'

function Footer (props) {
  const author = 'Welli | Matt | Marie | Rob | Cam | Winston | Richard | Zane | Kyoko | Nat'
  const copyright = 2018

  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
    <div>{author} </div>
    </div>
  )
}
export default Footer