function addTab(title, url){
	if ($('#pagetab').tabs('exists', title)){
		$('#pagetab').tabs('select', title);
		var tab = $('#pagetab').tabs('getSelected');
		if(tab && tab.find('iframe').length > 0){  
		    var _refresh_ifram = tab.find('iframe')[0];  
		    var refresh_url = url?url:_refresh_ifram.src;   
		    _refresh_ifram.contentWindow.location.href=refresh_url;  
		 }  
        //$("#pagetab").tabs('update', {tab: tab,options:{href: url}}); 
	} else {
		var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
		$('#pagetab').tabs('add',{
			title:title,
			content:content,
			closable:true
		});
	}
}