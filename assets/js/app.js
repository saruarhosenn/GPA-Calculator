// Global Variables 
const searchField = document.getElementById("search-input");
const output = document.getElementById("output");
// Create Element & Set Element
const div = document.createElement("div");
output.appendChild(div);

document.getElementById("search-btn").onclick = () => {
	// Search Bar
	const getSearchValue = searchField.value;
	// Clear Previous Search Value 
	searchField.value = "";

	// Clear Previous Result Output Text 
	div.textContent = "";

	// Condition 
	if (getSearchValue > 100) {
		div.innerHTML = `
		<h4 class="text-danger">Please give a number equal to 100 or 100!</h4>
		`
	} else if (getSearchValue >= 90 && getSearchValue <= 100) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h5 class="mt-3 text-success">Your Grad: A+ And GPA: 4</h5>
		`
	} else if (getSearchValue >= 80 && getSearchValue <= 89) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h4 class="mt-3 text-success">Your Grad: A And GPA: 3.5</h4>
		`
	} else if (getSearchValue >= 70 && getSearchValue <= 79) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h4 class="mt-3 text-success">Your Grad: B+ And GPA: 3</h4>
		`
	} else if (getSearchValue >= 60 && getSearchValue <= 69) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h4 class="mt-3 text-success">Your Grad: B And GPA: 2.5</h4>
		`
	} else if (getSearchValue >= 50 && getSearchValue <= 59) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h4 class="mt-3 text-success">Your Grad: C+ And GPA: 2</h4>
		`
	} else if (getSearchValue >= 40 && getSearchValue <= 49) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h4 class="mt-3 text-success">Your Grad: C And GPA: 1.5</h4>
		`
	} else if (getSearchValue >= 33 && getSearchValue <= 39) {
		div.innerHTML = `
		<img src="assets/images/congratulations.gif" alt="congratulations" style="max-width: 200px">
		<h4 class="mt-3 text-success">Your Grad: D And GPA: 1</h4>
		`
	} else if (getSearchValue > 0 && getSearchValue < 33) {
		div.innerHTML = `
		<img src="assets/images/sad.gif" alt="sad" style="max-width: 200px">
		<h4 class="mt-3 text-danger">Sorry! you failer student.</h4>
		`
	};
};