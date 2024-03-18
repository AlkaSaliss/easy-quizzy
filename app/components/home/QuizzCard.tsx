"use client"

import Link from 'next/link'
import React from 'react'

const QuizzCard = ({ quizData }) => {

    return (
        <div className="card w-96 bg-green-900 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={quizData.imageUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{quizData.title}</h2>
                <p>{quizData.description}</p>
                <Link href={`/quiz/${quizData.id}`}>
                    <div className="card-actions">
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default QuizzCard