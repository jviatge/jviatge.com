import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import PLaylist from "./pages/PLaylist";
import React from "react";

const Routes = [
	{path:'/',element:<Home/>},
	{path:"/projects", element:<Projects/>},
	{path:"/portfolio", element:<Portfolio/>},
	{path:"/playlist", element:<PLaylist/>},
]

export {Routes}