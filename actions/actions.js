/** Error Actions **/

export var setAdminError = (error) => {
	return {
		type: 'SET_ADMIN_ERROR',
		payload: error
	};
}

export var setLoginError = (errorMessage) => {
	return {
		type: 'SET_LOGIN_ERROR',
		payload: errorMessage
	};
}

export var setUserError = (errorMessage) => {
	return {
		type: 'SET_USER_ERROR',
		payload: errorMessage
	};
}





/** Event Actions **/

export var addEvent = (event) => {
	return {
		type: 'ADD_EVENT',
		payload: event
	};
}

export var deleteEvent = (victimEvent) => {
	return {
		type: 'DELETE_EVENT',
		payload: victimEvent
	};
}

export var disableEditButton = (value) => {
	return {
		type: 'DISABLE_EDIT_BTN',
		payload: value
	};
}

export var exitEditEvent = (notEditedEvent) => {
	return {
		type: 'EXIT_EDIT_EVENT',
		payload: notEditedEvent
	};
}

export var saveEditedEvent = (editedEvent) => {
	return {
		type: 'EDIT_EVENT',
		payload: editedEvent
	};
}

export var enableAddEvent = (value) => {
	return {
		type: 'ENABLE_ADD_EVENT',
		payload: value
	};
}

export var enableEditEvent = (value) => {
	return {
		type: 'ENABLE_EDIT_EVENT',
		payload: value
	};
}



/** Form Actions **/

export var addNewValueToField = (field, value) => {
	return {
		type: 'ADD_FIELD_VALUE',
		field: field,
		value: value
	};
}

export var deleteValueFromField = (field, value) => {
	return {
		type: 'DELETE_FIELD_VALUE',
		field: field,
		value: value
	};
}

export var toggleAddFieldButton = (value) => {
	return {
		type: 'TOGGLE_ADD_FIELD_BTN',
		payload: value
	};
}

export var setSelectedField = (value) => {
	return {
		type: 'SET_FIELD',
		payload: value
	};
}

export var setFieldValues = (field) => {
	return {
		type: 'SET_FIELD_VALUES',
		payload: field
	};
}


/** School Actions **/

export var addSchool = (newSchool) => {
	return {
		type: 'ADD_SCHOOL',
		payload: newSchool
	};
}

export var deleteSchool = (victimSchool) => {
	return {
		type: 'DELETE_SCHOOL',
		payload: victimSchool
	};
}

export var editSchool = (school) => {
	return {
		type: 'EDIT_SCHOOL',
		payload: school
	};
}

export var enableAddSchool = (value) => {
	return {
		type: 'ENABLE_ADD_SCHOOL',
		payload: value
	};
}




/** Staff Actions **/

export var addStaff = (newStaff) => {
	return {
		type: 'ADD_STAFF',
		payload: newStaff
	};
}

export var deleteStaff = (victimStaff) => {
	return {
		type: 'DELETE_STAFF',
		payload: victimStaff
	};
}

export var editStaff = (staff) => {
	return {
		type: 'EDIT_STAFF',
		payload: staff
	};
}

export var enableAddStaff = (value) => {
	return {
		type: 'ENABLE_ADD_STAFF',
		payload: value
	};
}




/** TimeLine Actions **/

export var addToTimeLine = (timelineObject) => {
	return {
		type: 'ADD_TO_TIMELINE',
		payload: timelineObject
	};
}
