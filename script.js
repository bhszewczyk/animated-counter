const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = '0';

	const updateCounter = () => {
		const target = parseInt(counter.getAttribute('data-target'));
		const number = parseInt(counter.innerText);

		// calculate how fast the target will be incremented
		const increment = target / 200;

		if (number < target) {
			counter.innerText = `${Math.ceil(number + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCounter();
});
