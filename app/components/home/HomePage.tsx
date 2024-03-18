"use client"

import React, { useState } from 'react'
import Cookie from 'js-cookie'
import AppBar from './AppBar'
import QuizPage from './QuizPage'


const HomePage = () => {

    const [username, setUsername] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        Cookie.set('username', username, { expires: 1 })
        window.location.reload()
    }

    return (
        <div>
            <AppBar
                setUsername={setUsername}
            />
            {
                Cookie.get('username') ?
                    <QuizPage />
                    :
                    <form className="flex flex-col justify-center pt-10 items-center" onSubmit={handleLogin}>
                        <label className="input input-bordered flex items-center gap-2 w-80" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="Select username..."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <button type="submit" className="btn w-20 mt-5 bg-emerald-900">Go!</button>
                    </form>

            }
        </div>
    )
}

export default HomePage