"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";

import ApiRequester from "../../apis/ApiRequester.js"
import * as actions from "../../actions/actions"


export default React.createClass({

	recoverPassword(e){
		e.preventDefault();
		var username = this.refs.username.value;

		ApiRequester.resetPassword(username).then(function(res){
			alert("Password reset successfully. Kindly check your email for new password.");

			window.location.replace(
			  window.location.pathname + window.location.search + '#/'
			);
		}, function(err){
			console.log(err);
		});
	},

	render(){
		return(
			<div>
				<div class="jumbotron">
			        <div class="container">
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-12 col-lg-12 col md-12">
			                </div>
			            </div>
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
			                    <p ></p>
			                </div>
			                <div class="col-xs-12 col-sm-5 col-lg-4 col-md-5">
			                    <form id="resetForm" class="form-horizontal" role="form" onSubmit={this.recoverPassword}>
						            <div class="form-group has-feedback">
						                <label htmlFor="username" class="control-label">Enter your registered email address</label>
						                <input type="text" name="username" ref="username" class="form-control" placeholder="abc@def.gh" required/>
						                <i class="glyphicon glyphicon-user form-control-feedback"></i>
						            </div>
						            <div class="form-group">
						                <button class="btn btn-right btn-md btn-warning" type="submit">Reset Password</button>
						            </div>
						        </form>
						        <p class="line-breaker" />
						        <p class="line-breaker" />
						        <p class="line-breaker" />
			                </div>
		                </div>
			        </div>
			    </div>
			</div>
		);
	}
});
