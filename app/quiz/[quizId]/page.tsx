"use client"

import React, { useState } from 'react'
import quizzes from '@/data/quizzes'
import Link from 'next/link'

const QuizPlay = ({ params }) => {
  const quizId = params.quizId
  const quiz = quizzes.find((q) => q.id === quizId)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showSummary, setShowSummary] = useState(false)

  const handleAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [quiz.questions[currentQuestion].id]: answer }))
    if (currentQuestion === quiz.questions.length - 1) {
      setShowSummary(prev => !prev)
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  if (!quiz) {
    return <div>Quiz not found</div>
  }

  const question = quiz.questions[currentQuestion]

  return (
    <div>
      {
        showSummary ?
          <Link
            href={{
              pathname: '/summary',
              query: {
                quizId,
                answers: JSON.stringify(answers)
              }
            }}
          >
            <div>Show Summary</div>
          </Link>
          :
          <>
            <h2>{quiz.title}</h2>
            <p>{question.text}</p>
            {question.imageUrl && <img src={question.imageUrl} alt={question.text} />}
            <ul>
              {question.choices.map((choice) => (
                <li key={choice.id}>
                  <button onClick={() => handleAnswer(choice.id)}>{choice.text}</button>
                </li>
              ))}
            </ul>
          </>
      }
    </div>
  )
}

export default QuizPlay
