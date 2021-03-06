"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddValueToField = (fieldID, fieldValue) => {
	return (dispatch, getState) => {

		ApiRequester.addFieldValue(fieldID, fieldValue).then(function(res){
			dispatch(asyncFetchFormFieldValues(fieldID));
		}, function(err){
			alert("Error adding new field value");
			console.log(err);
		});

	};
}

export var asyncFetchFormFields = () => {
	return (dispatch, getState) => {

		ApiRequester.getFormFieldNames().then(function(res){
			dispatch(setFormFields(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchFormFieldValues = (fieldID) => {
	var field_id = fieldID;
	return (dispatch, getState) => {

		ApiRequester.getFormFieldValues(field_id).then(function(res){
			dispatch(setFormFieldValues(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchFormFieldValuesByName = (fieldName) => {
	var field_name = fieldName;
	return (dispatch, getState) => {

		ApiRequester.getFormFieldValuesByName(field_name).then(function(res){
			dispatch(setFormFieldValues(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchPresentingIssueFormValues = (fieldName) => {
	var field_name = fieldName;
	return (dispatch, getState) => {

		ApiRequester.getFormFieldValuesByName(field_name).then(function(res){
			dispatch(setPresentingIssueValues(res));
		}, function(err){
			console.log(err);
		});

	};
}


export var asyncFetchTreatmentConcernFormValues = (fieldName) => {
	var field_name = fieldName;
	return (dispatch, getState) => {

		ApiRequester.getFormFieldValuesByName(field_name).then(function(res){
			dispatch(setTreatmentConcernValues(res));
		}, function(err){
			console.log(err);
		});

	};
}


export var asyncDeleteFieldValue = (fieldValueID, fieldID) => {
	return (dispatch, getState) => {

		ApiRequester.deleteFieldValue(fieldValueID).then(function(res){
			dispatch(asyncFetchFormFieldValues(fieldID));

		}, function(err){
			alert("Error deleting field value");
		});

	};
}

export var asyncEditFieldValue = (fieldValueID, fieldID, fieldValue) => {
	return (dispatch, getState) => {

		ApiRequester.editFieldValue(fieldValueID, fieldID, fieldValue).then(function(res){
			alert("Changes saved successfully");
			dispatch(asyncFetchFormFieldValues(fieldID));

		}, function(err){
			alert("Error saving field value changes");
		});

	};
}



/** User Interface Actions **/

export var addNewValueToField = (fieldId, value) => {
	return {
		type: 'ADD_FIELD_VALUE',
		fieldId: fieldId,
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

export var setFormFields = (value) => {
	return {
		type: 'SET_FORMFIELDS_LIST',
		payload: value
	};
}

export var setFormFieldValues = (fieldValues) => {
	return {
		type: 'SET_FIELD_VALUES',
		payload: fieldValues
	};
}

export var setPresentingIssueValues = (fieldValues) => {
	return {
		type: 'SET_PROBLEM_VALUES',
		payload: fieldValues
	};
}

export var setTreatmentConcernValues = (fieldValues) => {
	return {
		type: 'SET_TREATMENT_VALUES',
		payload: fieldValues
	};
}

export var setSelectedField = (value) => {
	return {
		type: 'SET_FIELD',
		payload: value
	};
}

export var setSelectedFieldID = (value) => {
	return {
		type: 'SET_FIELD_ID',
		payload: value
	};
}

export var toggleAddFieldButton = (value) => {
	return {
		type: 'TOGGLE_ADD_FIELD_BTN',
		payload: value
	};
}
