function App() {
	const handleClick = (e, action) => {
	console.log(e);
	alert(`J'ai cliqué sur le bloc vert : ${action}`);
	};
	
	return <>
		<h1 style={{textAlign: "center", fontFamily: "arial"}}>TITRE</h1>

		<div
			className="green-blck"
			onClick={(e) => handleClick(e, 'Effectuer une action spécifique')}
		></div>
		</>
	}
	
export default App
