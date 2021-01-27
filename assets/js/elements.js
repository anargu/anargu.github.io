
// card-b
window.addEventListener('load', () => {
	document.querySelectorAll('.card-b').forEach((card) => {
		let caption = card.querySelector('.caption')
		card.addEventListener('mouseout', () => {
			caption.classList.add('hover-out')
			caption.classList.remove('hover-in')
		})
		card.addEventListener('mouseover', () => {
			caption.classList.add('hover-in')
			caption.classList.remove('hover-out')
		})
	})
})
