"use client"

import React from 'react'
import quizzes from '../../../data/quizzes'
import QuizzCard from './QuizzCard'


const QuizPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5 text-center">Available Quizzes</h1>
            <div className="grid grid-cols-4 m-10">
                {quizzes.map((quiz) => (
                    <QuizzCard key={quiz.id} quizData={quiz} />
                ))}
            </div>
        </div>
    )
}

export default QuizPage
