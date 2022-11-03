import React from 'react'

function Result({ correct, questions }) {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
			<h2>
				Вы отгадали{' '}
				{correct === 0 || correct > 5
					? `${correct} ответов` // работает
					: correct === 1 // работает
					? `${correct} ответ`
					: correct === 2 || correct === 3 || correct === 4
					? `${correct} ответа `
					: null}{' '}
				из {''}
				{questions.length}
			</h2>
			<button onClick={() => window.location.reload()}>
				Попробовать снова
			</button>
		</div>
	)
}
export default Result
