Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
	Babele.get().register({
		module: 'bitd-pl',
		lang: 'pl-pl',
		dir: 'compendium'
		});
	}
});
