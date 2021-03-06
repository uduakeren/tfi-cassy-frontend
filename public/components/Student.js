"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import {connect} from "react-redux";


import * as actions from "../../actions/actions"

var StudentComponent =  React.createClass({

	getInitialState(){

		var userRole = JSON.parse(localStorage.getItem('user')).role.toLowerCase() == "administrator" ? "admin" : "";

		return {
			isEditing: false,
			id: this.props.student_id,
			studentId: this.props.student_id,
			firstName: this.props.first_name,
			lastName: this.props.last_name,
			ethnicity: this.props.ethnicity,
			gender: this.props.gender,
			grade: this.props.grade,
			school: this.props.school,
/*			lunchOption: this.props.lunchOption,
			presentingIssue: this.props.presentingIssue,
			referral: this.props.referral,*/
			userType: userRole
		};
	},

	getStudent(){
		var student = {
			id: this.state.id,
			student_id: this.state.studentId,
			firstname: this.state.firstName,
			lastname: this.state.lastName,
			ethnicity: this.state.ethnicity,
			gender: this.state.gender,
			grade: this.state.grade,
/*			lunchOption: this.state.lunchOption,
			presentingIssue: this.state.presentingIssue,
			referral: this.state.referral,*/
			school: this.state.school
		};

		return student;
	},

	cancelEdit(){
		this.props.onCancelEdit();
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	delete(e){
		e.preventDefault(e);
		this.props.onDelete(this.getStudent());
	},


	fetchDetails(){
		var {dispatch} = this.props;
		dispatch(actions.asyncFetchStudentById(this.state.id));
	},


	saveEdit(e){

		e.preventDefault(e);

		var firstName = this.refs.firstName.value;
		var lastName = this.refs.lastName.value;
		var validator = this.props.validateEdit(firstName, lastName);

		if (!validator.state) {
			if ((validator.field == "both")){
					this.refs.firstName.focus();
			}
			if (validator.field == "firstName"){
					this.refs.firstName.focus();
			}
			if ((validator.field == "lastName")){
					this.refs.lastName.focus();
			}
		}
		else {
			this.props.onEdit({
				id: this.state.id,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				ethnicity: this.state.ethnicity,
				gender: this.state.gender,
				grade: this.refs.grade.value,
				/*	gender: this.state.grade,
				lunchOption: this.state.lunchOption,
				presentingIssue: this.state.presentingIssue,
				referral: this.state.referral,*/
				school: this.refs.school.value
			});

			//change this to work only after async call succeeds
			this.setState({
				isEditing: !this.state.isEditing,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				grade: this.refs.grade.value,
				/*	gender: this.state.grade,
				lunchOption: this.state.lunchOption,
				presentingIssue: this.state.presentingIssue,
				referral: this.state.referral,*/
				school: this.refs.school.value
			});
		}
	},

	startEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	render(){

		var renderSchools = () => {
			return this.props.schools.map((school) => {
				var schoolName = school.school_name
				return (
					<option key={school.school_id}>{schoolName}</option>
				);
			});
		};

		var renderStudent = () =>{
			if (!this.state.isEditing){
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.firstName}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.lastName}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.gender}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.school}
							</div>
							<div class="col-sm-4 col-lg-4 col md-4">
								<Link to={`${this.state.userType}/students/${this.state.studentId}`}>
									<button type="button" onClick={this.fetchDetails} class="btn btn-sm btn-primary">
										<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
										&nbsp; Profile
									</button>
								</Link>
								&nbsp;

								<button type="button" onClick={this.startEdit} class="btn btn-sm btn-warning">
				                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
				                    &nbsp; Edit
				                </button>
								&nbsp;

								<button type="button" onClick={this.delete} class="btn btn-sm btn-danger">
				                    <span class="glyphicon glyphicon-trash" aria-hidden="true">  </span>
				                    &nbsp; Delete
				                </button>
							</div>
						</div>
					</div>
				);
			}
			else {
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								<input type="text" ref="firstName" class="form-control" placeholder="" defaultValue={this.state.firstName} />
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<input type="text" ref="lastName" class="form-control" placeholder="" defaultValue={this.state.lastName} />
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<select class="form-ctrl" ref="grade">
				                  	<option>1st</option>
				                  	<option>2nd</option>
				                  	<option>3rd</option>
				                  	<option>4th</option>
				                  	<option>5th</option>
				                  	<option>6th</option>
				                  	<option>7th</option>
				                  	<option>8th</option>
				                  	<option>9th</option>
				                  	<option>10th</option>
				                  	<option>11th</option>
				                  	<option>12th</option>
				                  	<option>Kindergarten</option>
				              </select>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
				                <select class="form-control" ref="school">
				                    {renderSchools()}
				                </select>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								<button type="button" onClick={this.saveEdit} class="btn btn-sm btn-success">
				                    <span class="glyphicon glyphicon-save" aria-hidden="true">  </span>
				                    &nbsp; Save
				                </button>
				                &emsp;
				                &emsp;

								<button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
				                    <span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
				                    &nbsp; Cancel
				                </button>
							</div>
						</div>
					</div>
				);
			}
		};
		return(
			<div>
				{renderStudent()}
			</div>
		);
	}
});
module.exports = connect(
	(store) => {
		return {
			selectedSchool: store.selectedSchool,
			schools: store.schools,
			addSchool: store.addSchoolState,
			editSchoolErr: store.editSchoolErrorState,
			editSchoolErrMsg: store.editSchoolErrorMessage
		};
	}
)(StudentComponent);
