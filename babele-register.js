Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'nazwa modułu',
			lang: 'pl',
			dir: 'compendium'
		}); 
	}
});
