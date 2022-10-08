const profileButton = document.getElementById('prof');
const profileWindow = document.getElementById('win')

//Клик вне меню
document.addEventListener('click', (event) =>{
	const isBtn = event.composedPath().includes(profileButton)
	const isWin = event.composedPath().includes(profileWindow)
	if(!isBtn && !isWin){
		profileWindow.style.display = "none"
	}
})
//Клик по аа
function showWindow(win){
	win.preventDefault()
	profileWindow.style.display = "flex"
}
//Двойной клик по аа
function hideWindow(win){
	win.preventDefault()
	profileWindow.style.display = "none"
}
profileButton.addEventListener("click", showWindow)
profileButton.addEventListener("dblclick", hideWindow)

