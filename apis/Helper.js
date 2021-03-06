module.exports = {
	filter(array, searchText){

		console.log(array);
		var filteredArray = array;

		filteredArray = array.filter((element) => {
			var fieldOne = element.firstName.toLowerCase();
			var fieldTwo = element.lastName.toLowerCase();

			return searchText.length === 0 || fieldOne.indexOf(searchText) > -1 || fieldTwo.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.id < b.id){
				return 1;
			}
			else if (a.id > b.id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	filterEvents(array, searchText){
		var filteredArray;

		filteredArray = array.filter((event) => {
			var eventName = event.name.toLowerCase();
			return searchText.length === 0 || eventName.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.id < b.id){
				return 1;
			}
			else if (a.id > b.id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	filterFormFields(array, searchText){
		var filteredArray;

		filteredArray = array.filter((field) => {
			var fieldName = field.field_value.toLowerCase();
			return searchText.length === 0 || fieldName.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.field_id < b.field_id){
				return 1;
			}
			else if (a.field_id > b.field_id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	filterSchools(array, searchText){
		var filteredArray;
		
		filteredArray = array.filter((school) => {
			var schoolName = school.school_name.toLowerCase();9
			return searchText.length === 0 || schoolName.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.school_id < b.school_id){
				return 1;
			}
			else if (a.school_id > b.school_id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	filterStaff(array, searchText){

		console.log(array);
		var filteredArray = array;

		filteredArray = array.filter((element) => {
			var fieldOne = element.first_name.toLowerCase();
			var fieldTwo = element.last_name.toLowerCase();

			return searchText.length === 0 || fieldOne.indexOf(searchText) > -1 || fieldTwo.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.user_id < b.user_id){
				return 1;
			}
			else if (a.user_id > b.user_id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	filterStudents(array, searchText){

		console.log(array);
		var filteredArray = array;

		filteredArray = array.filter((element) => {
			var fieldOne = element.first_name.toLowerCase();
			var fieldTwo = element.last_name.toLowerCase();

			return searchText.length === 0 || fieldOne.indexOf(searchText) > -1 || fieldTwo.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.student_id < b.student_id){
				return 1;
			}
			else if (a.student_id > b.student_id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	genericSort(array){

		array.sort((a,b) => {

			if (a.id < b.id){
				return 1;
			}
			else if (a.id > b.id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return array;
	},

	validateUserInput(firstName, lastName){

		var regex = /\d/;
		var regexTwo = /^[a-zA-Z]+$/;

		if (((firstName.match(regex) != null) || (firstName.match(regexTwo) == null))  &&
			((lastName.match(regex) != null) || (lastName.match(regexTwo) == null))){
			return {
				state: false,
				errorMessage: "Invalid input for first name and last name",
				field: "both"
			};
		}
		else if ((firstName.match(regex) != null) || (firstName.match(regexTwo) == null)){
			return {
				state: false,
				errorMessage: "Invalid input for first name",
				field: "firstName"
			};
		}
		else if ((lastName.match(regex) != null) || (lastName.match(regexTwo) == null)){
			return {
				state: false,
				errorMessage: "Invalid input for last name",
				field: "lastName"
			};
		}
		return {
			state: true,
			errorMessage: ""
		};
	},

};
