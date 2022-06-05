
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter_store.value)
    console.log(count)
    const dispatch = useDispatch()
    const [number,setValue]=useState(0)

let place="aaa"



    const Inc=()=>{
setValue(number+1)

      dispatch(increment({number,place}))
    }
    const Dec=()=>{
      setValue(number-1)
      dispatch(decrement({number,place}))
    }
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={Inc}
          >
            Increment
          </button>
          <span>{count.number}</span>
          <span>  </span>
          <span>{count.place}</span>
          <button
            aria-label="Decrement value"
            onClick={Dec}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }