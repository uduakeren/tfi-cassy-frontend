"use strict";

import React from "react";
import ReactDOM from "react-dom";



export default React.createClass({

	getInitialState(){
		return {
			isEditing: false,
			id: this.props.user_id,
			staffId: this.props.user_id,
			react_id: this.props.react_id,
			firstName: this.props.first_name,
			lastName: this.props.last_name,
			role: this.props.role,
			email: this.props.username,
		};
	},

	getStaff(){
		var staff = {
			id: this.state.id,
			user_id: this.state.staffId,
			react_id: this.state.react_id,
			firstname: this.state.firstName,
			lastname: this.state.lastName,
			role: this.state.role,
			username: this.state.email
		};

		return staff;
	},


	cancelEdit(){
		this.props.onCancelEdit();
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	delete(e){

		e.preventDefault(e);
		this.props.onDelete(this.getStaff());
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
		else{
			this.props.onEdit({
				id: this.state.id,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				role: this.refs.role.value,
				email: this.refs.email.value
			});

			//change this to work only after async call succeeds
			this.setState({
				isEditing: !this.state.isEditing,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				role: this.refs.role.value,
				email: this.refs.email.value
			});
		}
	},

	startEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	render(){
		var renderStaff = () =>{
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
								{this.state.role}
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								{this.state.email}
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">

							<button type="button" onClick={this.startEdit} class="btn btn-sm btn-warning">
			                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
			                    &nbsp; Edit
			                </button>
			                &emsp;
			                &emsp;

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
						<form onSubmit={this.saveEdit}>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								<input type="text" ref="firstName" class="form-control" placeholder="" defaultValue={this.state.firstName} />
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<input type="text" ref="lastName" class="form-control" placeholder="" defaultValue={this.state.lastName} />
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<select class="form-control" ref="role">
				                    <option>Administrator</option>
				                    <option>Program Manager</option>
				                    <option>Site Coordinator</option>
				                    <option>Therapist</option>
				                </select>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								<input type="email" ref="email" class="form-control" placeholder="" defaultValue={this.state.email} required/>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								<button type="submit" class="btn btn-sm btn-success">
				                    <span class="glyphicon glyphicon-save" aria-hidden="true"></span>
				                    &nbsp; Save
				                </button>
				                &emsp;
				                &emsp;

								<button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
				                  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
				                  &nbsp; Cancel
				              </button>
							</div>
						</div>
						</form>
					</div>
				);
			}
		};

		return(
			<div>
				{renderStaff()}
			</div>
		);
	}

});
