

$(function(){
	
	$('.menuleftSidebar').click(function(){
		if($('.generalsidebar_left').hasClass('hidebar')){
			$('.generalsidebar_left').removeClass('hidebar')
			$('[data-layoutrole="middle"]').removeClass('marginlr0')
		}else{
			$('.generalsidebar_left').addClass('hidebar')
			$('[data-layoutrole="middle"]').addClass('marginlr0')
		}
	})
	
	$('[data-layoutrole="collapseSidebar"]').click(function(){
		if($('[data-layoutrole="wrapper"]').hasClass('scollapsed')){
			$('[data-layoutrole="wrapper"]').removeClass('scollapsed');
			
		}else{
			$('[data-layoutrole="wrapper"]').addClass('scollapsed');
		}
	})
	
	
		$('[data-layoutrole="slidebar1"]').stickySidebar({
				sidebarTopMargin: 20,
				footerThreshold: 100
		});
		
})

