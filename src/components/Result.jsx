import React from 'react'

function Result({ correct, questions }) {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
			<h2>
				Вы отгадали {correct} {correct <= 1 ? 'ответа' : 'ответов'} из{' '}
				{questions.length}
			</h2>
			<button onClick={() => window.location.reload()}>
				Попробовать снова
			</button>
		</div>
	)
}
export default Result
