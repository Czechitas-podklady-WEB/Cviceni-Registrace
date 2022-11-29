const users = [
	'petr',
	'jana-34',
	'husky16',
	'66beruska',
	'thegodofU',
	'rene_gade',
	'tommy',
	'luciluci',
	'tanko',
	'poltergeist',
	'hlava-havla',
	'telo-ramba',
]

document.querySelector('.reg-form').addEventListener('submit', (event) => {
	event.preventDefault()
	const username = document.querySelector('#username')
	const pass1 = document.querySelector('#pass1')
	const error = document.querySelector('.reg-form__error')

	if (users.includes(username.value)) {
		error.textContent = `Zadané jméno „${username.value}“ je již zabráno.`
		return
	}
	if (
		pass1.value.length < 10 ||
		(pass1.value.includes('-') === false &&
			pass1.value.includes('_') === false &&
			pass1.value.includes(':') === false)
	) {
		error.textContent = 'Zadané heslo není dostatečně bezpečné.'
		return
	}
	error.textContent = ''
	alert('Uživatel úspěšně zaregistrovaný.')
})
