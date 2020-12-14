
let one, two, summary, multiplication;

let calculator = {
	read() {
		one = prompt('Введите первое число');
		two = prompt('Введите второе число');
	},
	sum() {
		summary = +one + +two;
		alert('Сумма равна: ' + summary);
	},
	mul() {
		multiplication = +one * +two;
		alert('Произведение равно: ' + multiplication);
	}
}

calculator.read();
calculator.sum();
calculator.mul();