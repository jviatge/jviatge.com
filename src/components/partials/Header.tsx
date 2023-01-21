import Logo from "./Logo";
import {Link} from "react-router-dom";

const Header = ({path}:{path:string}) => {

	return( <header className="flex justify-between items-center py-8 pr-4 pl-8" style={{ zIndex: 1}}>

		<Logo text={'JV'} />

		<nav className="underLine">
			<ul>
				<li><Link to={'/projects'} className={path === '/projects' ? 'underLine-fixed' : ''}>Projects</Link></li>
				<li><Link to={"/portfolio"} className={path === '/portfolio' ? 'underLine-fixed' : ''}>Portfolio</Link></li>
				<li><Link to={"/playlist"} className={path === '/playlist' ? 'underLine-fixed' : ''}>Playlist</Link></li>
				<li><Link to={'/contact'} className={path === '/contact' ? 'underLine-fixed' : ''}>Contact</Link></li>
			</ul>
		</nav>
	</header>)
}


export default Header