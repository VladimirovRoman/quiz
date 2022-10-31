import React from 'react'

function Game({ question, percent, onClickVariant }) {
	return (
		<>
			<div className='progress'>
				<div style={{ width: `${percent}%` }} className='progress__inner'></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((text, index) => (
					<li key={text} onClick={() => onClickVariant(index)}>
						{text}
					</li>
				))}
			</ul>
		</>
	)
}

export default Game
