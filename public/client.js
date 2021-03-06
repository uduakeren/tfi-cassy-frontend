"use strict"

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, NotFoundRoute } from "react-router";
import {Provider} from "react-redux";

import actions from "../actions/actions"

import AdminLayout from "./components/AdminLayout"
import AppLayout from "./components/AppLayout"
import IndexLayout from "./components/IndexLayout"
import NavBar from "./components/NavBarIndex"

import AdminPage from "./pages/Admin"
import AddStudentPage from "./pages/AddStudent"
import EventPage from "./pages/Event"
import FormPage from "./pages/Form"
import HomePage from "./pages/Home"
import IndexPage from "./pages/Index"
import RecoverPasswordPage from "./pages/RecoverPassword"
import ReportPage from "./pages/Report"
import SchoolPage from "./pages/School"
import SchoolDetailsPage from "./pages/SchoolDetails"
import SetPasswordPage from "./pages/SetPassword"
import StaffPage from "./pages/Staff"
import StudentPage from "./pages/Student"
import StudentProfilePage from "./pages/StudentProfile"


var appStore = require("../store/configureStore").configure();

console.log("App store", appStore);
appStore.subscribe(() => {
	console.log("New state", appStore.getState());
});


const root = document.getElementById("root");

ReactDOM.render((
	<Provider store={appStore}>
		<Router history={hashHistory}>
			<Route path="/" component={IndexLayout}>
				<IndexRoute component={IndexPage}/>
				<Route path="/recover" component={RecoverPasswordPage}/>
				<Route path="/firstlogin" component={SetPasswordPage}/>
			</Route>

			<Route path="/home" component={AppLayout} name="Home">
				<IndexRoute component={HomePage}/>
				<Route path="/events" component={EventPage} name="Events"/>
				<Route path="/students" name="Students">
					<IndexRoute component={StudentPage} />
					<Route path="/students/:id" component={StudentProfilePage} name="Student"/>
				</Route>
				<Route path="/reports" component={ReportPage} name="Reports"/>
			</Route>

			<Route path="/admin" component={AdminLayout} name="AdminHome">
				<IndexRoute component={AdminPage}/>
				<Route path="/admin/events" component={EventPage} name="Events"/>
				<Route path="/admin/forms" component={FormPage} name="Forms"/>
				<Route path="/admin/reports" component={ReportPage} name="Reports"/>
				<Route path="/admin/schools" name="Schools">
					<IndexRoute component={SchoolPage} />
					<Route path="/admin/schools/:id" component={SchoolDetailsPage} name="School"/>
				</Route>
				<Route path="/admin/staff" component={StaffPage} name="Staff"/>
				<Route path="/admin/students" name="Students">
					<IndexRoute component={StudentPage} />
					<Route path="/admin/students/:id" component={StudentProfilePage} name="Student"/>
				</Route>
			</Route>

		</Router>
	</Provider>),
root);
