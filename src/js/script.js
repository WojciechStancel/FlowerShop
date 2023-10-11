const burgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar__nav");
const footer = document.querySelector(".footer-year");
const flowerQuote = document.querySelector(".flower-quotation")
const quote = [
	'„Kwiat, który się otwiera, nie czyni przy tym hałasu”. Wilhelm Raabe',
	'„Ludzie są jak kwiaty: stworzeni do tego, aby się rozwijać”. André Liége',
	'„Bądźcie jak kwiat, zwróćcie swe twarze ku słońcu”. Kahil Gibran',
	'“Szczęście to trzymać kwiaty w obu rękach”. Przysłowie japońskie',
	'„Każdy kwiat to dusza kwitnąca w naturze”. Gerard de Nerval',
	'„Kwiat jest uśmiechem rośliny”. Peter Hille',
]

const randomQuote = () => {
	const number = Math.floor(Math.random() * (quote.length -1))
	flowerQuote.textContent = quote[number]
}

randomQuote()

const currentYear = () => {
	const year = new Date().getFullYear();
	footer.innerText = year;
};

currentYear();

burgerBtn.addEventListener("click", () => {
	burgerBtn.classList.toggle("is-active");
	nav.classList.toggle("nav-active");
});
