Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bitd-babele-pl',
			lang: 'pl',
			dir: 'compendium'
		}); 
	}
});
