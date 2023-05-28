Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') 
	{ 
		
		console-log("Babele Loaded");
		Babele.get().register
		({
			module: 'bitd-babele-pl',
			lang: 'pl-pl',
			dir: 'compendium'
		});
	} else {
		console.log("++++++++ Moduł Babele nie zostal aktywowany ++++++++");
			}
	}
});
