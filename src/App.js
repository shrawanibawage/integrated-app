import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './pages/nmass';
//import Image from './image';
import Home from './pages/home';
import About from './pages/about';
import Register from './pages/register';
//import Project from './pages/signin';
import Login from "./pages/login";
import WelcomeProjectPage from './pages/WelcomeProjectPage';
import CreateProject from './pages/CreateProject';
import JoinProject from './pages/JoinProject';
import ResourceCheckout from './pages/HardwareTest'
//import Register from "./components/harwareManagement";

function App() {
return (
	
	<Router>
	<Navbar/>
	<Routes>
		<Route path='/home' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/register' element={<Register/>} />
		<Route path='/login' element={<Login/>} />
		<Route path='/WelcomeProjectPage' element={<WelcomeProjectPage/>} />
		<Route path='/CreateProject' element={<CreateProject/>} />
		<Route path='/JoinProject' element={<JoinProject/>} />
		<Route path='/HardwareTest' element={<ResourceCheckout/>} />
	</Routes>
	</Router>
	
);
}

export default App;
