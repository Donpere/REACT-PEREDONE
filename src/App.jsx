import ScrollBlock from '../test-dev/scroll-move-react.jsx'; // Assurez-vous de fournir le bon chemin vers votre composant

function App() {
	const handleClick = (e, action) => {
	console.log(e);
	alert(`J'ai cliqué sur le bloc vert : ${action}`);
	};
	
	return <>
		<h1 style={{textAlign: "center", fontFamily: "arial"}}>TITRE</h1>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, similique rem accusantium ab cupiditate, neque fugit velit, dignissimos repellendus numquam facere! Accusantium ratione delectus ipsum repudiandae sit, laudantium voluptates, ad voluptas distinctio quae, laborum quam nulla deserunt officia amet. Repellat iste fuga sint esse voluptatum ipsa voluptate at. Dolorem optio expedita sed. Porro, aliquid asperiores expedita unde hic consectetur, optio harum similique officia minima quo aliquam vitae necessitatibus esse deserunt nihil nobis? Esse, sint. Doloribus minima ducimus, tempora doloremque nesciunt vel. Debitis laborum harum laboriosam pariatur. Repellat aspernatur et cum deleniti aliquid maxime cumque, tempore assumenda rem officiis ad labore pariatur in repudiandae, praesentium expedita quisquam, consectetur nobis nulla dignissimos mollitia cupiditate! Nobis suscipit reprehenderit autem doloremque tempore, magni ratione ipsum animi repudiandae repellat maiores? Nobis quasi iste error dolore vel dicta, sequi consequatur. Quisquam cupiditate tempore necessitatibus! Quaerat quod iure ipsum deserunt dolores nisi similique, laudantium soluta tempora atque consequuntur dolore molestias quidem quasi est. Totam, repellendus quo? Iusto, id aperiam? Nobis, nisi aliquam numquam excepturi vel qui inventore assumenda magni possimus? Nisi mollitia molestiae vero eligendi voluptates id. Unde minus nemo delectus qui quo assumenda possimus eius pariatur quas quis magni, error neque odio animi blanditiis mollitia praesentium iste illum. Veritatis labore fugit optio. Pariatur, vitae hic excepturi delectus natus ex obcaecati commodi labore quas mollitia perspiciatis sed molestias veritatis non fugiat sunt, possimus, nihil impedit at nulla enim omnis est? Placeat corrupti illo iure? Sequi sint aliquam nesciunt cupiditate. Beatae ad laborum blanditiis animi optio tempore maiores, molestias praesentium deserunt eum earum, debitis tenetur dolor, quibusdam magni quas rem. Ratione, officiis deserunt? Amet ab iure nemo sapiente quo fugiat laboriosam adipisci repudiandae eligendi tenetur? Maxime soluta illum repellat quaerat laboriosam corporis voluptate atque eligendi, consequuntur fuga perferendis est alias perspiciatis doloremque? Beatae officiis, quasi ex maiores dignissimos provident voluptate laborum, a laudantium id praesentium quas exercitationem totam dolorem doloribus? Ipsa, illum quae? Amet, iste voluptatibus quas quo dolore doloribus consequatur quaerat? Dignissimos, aliquid impedit. Soluta laboriosam reiciendis provident repudiandae! Fuga modi explicabo illo iste voluptatibus ut aut vitae aliquid quaerat quidem, repellendus eum, voluptate quasi officia minima, sunt laborum? Dignissimos architecto praesentium quis illum voluptas ipsam? Unde aliquam officiis vitae eligendi modi hic. Ipsum quas quibusdam molestiae deserunt culpa non itaque est quasi, saepe soluta dolor velit, nulla, corrupti maxime veritatis ea consequuntur omnis. Consectetur id quam temporibus modi excepturi iste libero dignissimos nam debitis laudantium inventore explicabo rem vitae, vero labore ullam tenetur, sint qui rerum reprehenderit magnam unde ratione vel assumenda. Ut est cumque id ea quia impedit quo architecto veritatis in odio? Architecto id quos, eius accusantium dicta sed eum dolor obcaecati numquam nulla ratione porro repudiandae, temporibus esse voluptatem ullam beatae sapiente alias autem quasi ipsa provident rerum! Et esse obcaecati itaque dignissimos cumque laborum, mollitia aliquam facere dolores nisi perspiciatis accusantium beatae labore ex, eaque adipisci sed totam sequi doloribus pariatur porro consequuntur quidem. Ducimus eum vitae dicta amet modi quam quasi tempora, placeat repellendus veniam ad asperiores minima! Iusto similique error blanditiis autem adipisci suscipit obcaecati quae! Quas qui deserunt obcaecati ipsa provident! Enim amet vero debitis dolore laboriosam unde iusto et, fugiat tempore distinctio similique, dolores ex sit sint praesentium? Doloremque laborum eaque repellat, consequuntur iste quasi omnis explicabo beatae dolorum error voluptatem consequatur tempora dolorem, perspiciatis mollitia! Neque, a.</p>

		<div
			className="green-blck"
			onClick={(e) => handleClick(e, 'Effectuer une action spécifique')}
		>

     {/* Utilisation de ScrollBlock comme une balise */}
      <ScrollBlock />

		</div>







		</>
	}
	
export default App
