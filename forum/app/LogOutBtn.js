'use client'

import { signOut } from "next-auth/react"

export default function LogOutbtn() {
    return (
        <button onClick={() => {signOut()}} style={{background : 'rosybrown'}}>로그아웃</button>
    )
}