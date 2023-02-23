function toggle(context) {
	const current = parseInt(context.getAttribute('data-index'));
	const dataActive = parseInt(context.parentNode.getAttribute('data-active'));
	context.parentNode.setAttribute('data-active', current);
	context.parentNode.parentNode.children[1].children[dataActive].classList.remove('show');
	context.parentNode.parentNode.children[1].children[current].classList.add('show');
}