"use client"

import React from 'react'
import quizzes from '@/data/quizzes'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { useSearchParams } from 'next/navigation'

function SummaryPage() {
    const searchParams = useSearchParams()
    const quizId = searchParams.get('quizId')
    const answers = JSON.parse(searchParams.get('answers') as string)

    const quiz = quizId ? quizzes.find((q) => q.id === quizId) : null

    const countCorrectAnswers = () => {
        let correct = 0
        if (quiz && quiz.questions) {
            Object.keys(answers).forEach((questionId) => {
                const question = quiz.questions.find((q) => q.id === questionId)
                if (question && question.correctChoices.includes(answers[questionId])) {
                    correct += 1
                }
            })
        }
        return correct
    }
    const nb_correct = countCorrectAnswers()
    const nb_incorrect = Object.keys(answers).length - nb_correct

    const data = [
        { name: 'Correct', value: nb_correct },
        { name: 'Wrong', value: nb_incorrect }
    ]

    return (
        <div>
            <h2>Summary</h2>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
            {quiz && quiz.questions && (
                <ul>
                    {quiz.questions.map((question) => {
                        const userAnswer = Object.keys(answers).find((questionId) => questionId === question.id)
                        const isCorrect = question.correctChoices.includes(answers[userAnswer] || '')
                        return (
                            <li key={question.id} style={{ color: isCorrect ? 'green' : 'red' }}>
                                {question.text}
                                <ul>
                                    {question.choices.map((choice) => (
                                        <li
                                            key={choice.id}
                                            style={{
                                                fontWeight: question.correctChoices.includes(choice.id) ? 'bold' : 'normal',
                                                color: answers[userAnswer] === choice.id ? 'black' : 'gray',
                                            }}
                                        >
                                            {choice.text}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default SummaryPage