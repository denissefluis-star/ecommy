var okButton = document.getElementById('okBtn');
var clearButton = document.getElementById('clearBtn');
var hasilDiv = document.getElementById('hasil');

function getSelectedRadioValue(radioName) {
	var radios = document.getElementsByName(radioName);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return radios[i].value;
		}
	}
	return "";
}

function getSelectedCheckboxValues(checkboxName) {
	var checkboxes = document.getElementsByName(checkboxName);
	var selectedValues = [];
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			selectedValues.push(checkboxes[i].value);
		}
	}
	return selectedValues;
}

function displayConclusion() {
	var nama = document.getElementById('name').value.trim();
	if (nama === "") {
		nama = "(nama must be filled)";
	}
	
	var kelas = document.getElementById('class').value.trim();
	if (kelas === "") {
		kelas = "(class must be filled)";
	}
	
	var ageValues = getSelectedCheckboxValues("age");
	var age = "";
	if (ageValues.length === 0) {
		age = "(age must be chosen)";
	} else if (ageValues.length === 1) {
		age = ageValues[0];
	} else {
		age = ageValues.join(" and ");
	}
	
	var gender = getSelectedRadioValue("gender");
	if (gender === "") {
		gender = "(gender must be chosen)";
	}
	
	var level = getSelectedRadioValue("level");
	if (level === "") {
		level = "(level must be chosen)";
	}
	
	var hasilText = "Name: " + nama + "\nClass: " + kelas + "\nAge: " + age + "\nGender: " + gender + "\nLevel: " + level;
	
	hasilDiv.innerText = hasilText;
}

function clearAllFields() {
	document.getElementById('name').value = "";
	document.getElementById('class').value = "";
	
	var allRadios = document.querySelectorAll('input[type="radio"]');
	for (var i = 0; i < allRadios.length; i++) {
		allRadios[i].checked = false;
	}
	
	var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	for (var i = 0; i < allCheckboxes.length; i++) {
		allCheckboxes[i].checked = false;
	}
	
	hasilDiv.innerText = "data akan muncul di sini";
}

okButton.onclick = function() {
	displayConclusion();
}

clearButton.onclick = function() {
	clearAllFields();
}
