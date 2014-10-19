var tabIds;

chrome.tabs.query({},function(tabarray){
	tabIds = tabarray.map(function(tab){
		return tab.id;
	});
	//for (var i = 0; i < tabarray.length; i++) {
	//	tabIds[tabIds.length] = tabarray[i].id;
	//}
});


document.write(tabIds.toString() + "HI");

