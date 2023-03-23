import React,{useContext, useState} from "react"

const AppContext =  React.createContext()

export const AppProvider = ({children}) => {
	const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
	const [service, setService] = useState("");
	
	window.addEventListener("scroll", reveal);
	function reveal(){
		var reveals = document.querySelectorAll(".reveal");

		for (var i = 0; i < reveals.length; i++)
		{
			var windowHeight = window.innerHeight;
			var revealTop = reveals[i].getBoundingClientRect().top;
			var revealPoint = 0;

			if (revealTop < windowHeight - revealPoint)
				reveals[i].classList.add("active");
			// else
			// 	reveals[i].classList.remove("active");
		}
	}

	const openSideBar = () => {
		SetIsSidebarOpen(true);

	}
	
	const closeSideBar = () => {
		SetIsSidebarOpen(false);
	}

	return (
		<AppContext.Provider
		value = {{
			openSideBar,
			closeSideBar,
			isSidebarOpen,
			SetIsSidebarOpen,
			service,
			setService,
		}}
		>
		{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}