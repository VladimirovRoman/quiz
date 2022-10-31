import React from 'react'
import './index.scss'
import Result from './components/Result'
import Game from './components/Game'
import {questions} from './components/questions'


function App() {
	const [step, setStep] = React.useState(0)
	const [correct, setCorrect] = React.useState(0)

	const question = questions[step]

	const onClickVariant = (index) => {
		setStep(step + 1)
		
		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	const percent = Math.round((step / questions.length) * 100)

	return (
		<div className='App'>
			{step !== questions.length ? (
				<Game
					question={question}
					percent={percent}
					onClickVariant={onClickVariant}
				/>
			) : (
				<Result
					questions={questions}
					correct={correct}
					onClickVariant={onClickVariant}
				/>
			)}
		</div>
	)
}

export default App
