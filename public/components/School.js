"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import {connect} from "react-redux";

import * as actions from "../../actions/actions"


var Schoool = React.createClass({

	getInitialState(){
		return {
			isEditing: false,
			id: this.props.school_id,
			schoolId: this.props.school_id,
			react_id: this.props.react_id,
			name: this.props.school_name,
			address: this.props.address,
			principal: this.props.principal,
			contact: this.props.primary_contact,
			contactEmail: this.props.primary_contact_email,
			district: this.props.school_district,
			siteCoordinator: "Not Set",
			error: false
		};
	},

	getSchool(){
		var school = {
			id: this.state.id,
			school_id: this.state.schoolId,
			react_id: this.state.react_id,
			name: this.state.name,
			address: this.state.address,
			principal: this.state.principal,
			contact: this.state.contact,
			contactEmail: this.state.contactEmail,
			district: this.state.district,
			siteCoordinator: this.state.siteCoordinator
		};

		return school;
	},

	cancelEdit(){
		this.props.onCancelEdit();
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	delete(e){
		e.preventDefault();
		this.props.onDelete(this.getSchool());
	},


	saveEdit(e){
		e.preventDefault();

		if (!this.props.validateEdit(this.refs.name.value)) {
			this.refs.name.focus();
		}
		else {
			this.props.onEdit({
				id: this.state.id,
				school_id: this.state.schoolId,
				school_name: this.refs.name.value,
				address: this.state.address,
				principal: this.state.principal,
				primary_contact: this.state.contact,
				primary_contact_email: this.refs.contactEmail.value,
				district: this.refs.district.value,
				siteCoordinator: this.refs.siteCoordinator.value
			});

			//change this to work only after async call succeeds
			this.setState({
				isEditing: !this.state.isEditing,
				name: this.refs.name.value,
				address: this.state.address,
				principal: this.state.principal,
				primary_contact: this.state.contact,
				primary_contact_email: this.refs.contactEmail.value,
				district: this.refs.district.value,
				siteCoordinator: this.refs.siteCoordinator.value
			});
		}
	},

	startEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	render(){
		var renderSchool = () =>{
			if (!this.state.isEditing){
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col-md-2">
								{this.state.name}
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								{this.state.contactEmail}
							</div>
							<div class="col-sm-1 col-lg-1 col-md-1">
								{this.state.district}
							</div>
							<div class="col-sm-2 col-lg-2 col-md-2">
								{this.state.siteCoordinator}
							</div>
							<div class="col-sm-4 col-lg-4 col-md-4">
								<Link to={`admin/schools/${this.state.schoolId}`}>
									<button type="button" class="btn btn-sm btn-primary">
										<span class="glyphicon glyphicon-home" aria-hidden="true"></span>
										&nbsp; View
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
					<form onSubmit={this.saveEdit}>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col-md-2">
								<input type="text" ref="name" class="form-control" placeholder="" defaultValue={this.state.name} />
							</div>
							<div class="col-sm-2 col-lg-2 col-md-2">
								<input type="email" ref="contactEmail" class="form-control" placeholder="" defaultValue={this.state.contactEmail} required/>
							</div>
							<div class="col-sm-2 col-lg-2 col-md-2">
								<select class="form-ctrl" ref="district">
				                  	<option>Milpitas</option>
				                  	<option>Palo Alto</option>
				                  	<option>Cupertino</option>
				                  	<option>San Diego</option>
				              	</select>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
				                <select class="form-control" ref="siteCoordinator">
				                    <option>Eve Jackson</option>
				                    <option>John Doe</option>
				                    <option>Jill Smith</option>
				                </select>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								<button type="submit"  class="btn btn-sm btn-success">
				                    <span class="glyphicon glyphicon-save" aria-hidden="true">  </span>
				                    &nbsp; Save
				                </button>
				                &emsp;

								<button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
				                    <span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
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
				{renderSchool()}
			</div>
		);
	}

});
module.exports = connect(
	(store) => {
		return {
	      formFields: store.formFields,
	      selectedField: store.selectedField,
	      formFieldValues: store.formFieldValues
		};
	}
)(Schoool);
