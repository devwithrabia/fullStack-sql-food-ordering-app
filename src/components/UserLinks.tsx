'use client'

import { Session } from 'inspector/promises'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export const UserLinks = () => {
  const { data, status } = useSession()

  return (
    <div>
      {status === 'authenticated' ? (
        <div>
          <Link href='/orders'>Orders</Link>

          {data.user.isAdmin && (
            <Link href='/add' className='ml-5'>
              Admin
            </Link>
          )}

          <span className='ml-4 cursor-pointer' onClick={() => signOut()}>
            LogOut
          </span>
        </div>
      ) : (
        <div>
          <Link href='/login'>Login</Link>
        </div>
      )}
    </div>
  )
}
