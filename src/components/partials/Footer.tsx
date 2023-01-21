const Footer = () => {
  	return (<footer className={'w-full text-center'} style={{ zIndex: 1}}>
		<span className={'text-xs'}>
			Julien Viatgé - Some rights reserved - {new Date().getFullYear()}
		</span>
	</footer>)
}

export default Footer