import React from 'react'
import {Children, } from './Children'
const Parent = () => {
  return (
    <div>

      <Children color='#000' onClick={() => console.log(`clicked`)}  name='Javokhirbek' age={19}/>
      
    </div>
  )
}

export default Parent