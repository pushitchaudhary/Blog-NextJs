import React from 'react'

function collgeDetails({params}:{params : {collegeName : string}}) {
    const collegeName = params.collegeName
  return (
    <div> {collegeName} collgeDetails</div>
  )
}

export default collgeDetails