'use client'

import React, { useState, useEffect } from 'react'

const CountDown = () => {
  const targetDate = new Date('2025-10-10').getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (timeLeft <= 0) {
    return <span className='font-bold text-5xl text-yellow-300'>00:00:00:00</span>
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <span className='font-bold text-5xl text-yellow-300'>
      {days}:{hours}:{minutes}:{seconds}
    </span>
  )
}

export default CountDown
