function App() {
	const handleClick = () => {
	alert("j'ai cliqué sur le titre")
	}
	
	return <>
		<h1 onClick={handleClick} style={{textAlign: "center", fontFamily: "arial"}}>TITRE</h1>

		<div style={{height: "50vh",backgroundColor: "green", zIndex: "0"}}></div>
		</>
	}
	
export default App
