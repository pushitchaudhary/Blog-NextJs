import React from 'react'

function collegeName({params}:{params:{collegeName:string}}) {
    const collegeName = params.collegeName
  return (
    <div>{collegeName} collegeName</div>
  )
}

export default collegeName