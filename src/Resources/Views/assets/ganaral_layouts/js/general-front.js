$(function(){
	
	$('.menuleftSidebar').click(function(e){
    e.preventDefault()
		if($('.generalsidebar_left').hasClass('hidebar')){
			$('.generalsidebar_left').removeClass('hidebar')
			$('[data-layoutrole="middle"]').removeClass('marginlr0')
		}else{
			$('.generalsidebar_left').addClass('hidebar')
			$('[data-layoutrole="middle"]').addClass('marginlr0')
		}
	})
  
  $('[data-layoutrole="rightmenuBtn"]').click(function(e){
    e.preventDefault()
		if($('[data-layoutrole="slidebar2"]').hasClass('hidebar')){
			$('[data-layoutrole="slidebar2"]').removeClass('hidebar')
			$('[data-layoutrole="middlemain"]').removeClass('marginlr0')
		}else{
			$('[data-layoutrole="slidebar2"]').addClass('hidebar')
			$('[data-layoutrole="middlemain"]').addClass('marginlr0')
		}
    sidebarfix ()
	})
  
  
	
	$('[data-layoutrole="collapseSidebar"]').click(function(e){
    e.preventDefault()
		if($('[data-layoutrole="wrapper"]').hasClass('scollapsed')){
			$('[data-layoutrole="wrapper"]').removeClass('scollapsed');
		}else{
			$('[data-layoutrole="wrapper"]').addClass('scollapsed');
		}
    
	})
  
  $('[data-layoutrole="collapseSidebarmenu"]').click(function(e){
    e.preventDefault()
		if($('[data-layoutrole="wrapper"]').hasClass('scollapsedright')){
			$('[data-layoutrole="wrapper"]').removeClass('scollapsedright');
		}else{
			$('[data-layoutrole="wrapper"]').addClass('scollapsedright');
		}
     sidebarfix ()
	})
  
 
	
  
		$('[data-layoutrole="slidebar1"]').stickySidebar({
				sidebarTopMargin: 20,
				footerThreshold: 100
		});
    
    $('[data-layoutrole="slidebar2"]').stickySidebar({
				sidebarTopMargin: 20,
				footerThreshold: 100
		});
    
    function sidebarfix (){
          var getsiderbarfix = $('[data-layoutrole="slidebar2"]').css('position');
          if(getsiderbarfix=='fixed'){
             getmiddie = $('[data-layoutrole="middlemain"]').innerWidth();
             getmainwith = $('[data-layoutrole="middle"]').innerWidth();
             newwith = getmainwith - getmiddie            
             $('[data-layoutrole="slidebar2"]').css('max-width', newwith);
          }else{
             $('[data-layoutrole="slidebar2"]').css('max-width', 'inherit');
         }  
    }
    sidebarfix ()
    
    $(window).resize(sidebarfix)
    $(window).scroll(sidebarfix)
    
     function resizePreviewArea(){
			//$('#layoutViewSetting').height($('#builderContain').innerHeight()+'px');
      $('[data-layoutrole="middlemain"]').css('min-height','0')
      
			$('[data-layoutrole="middlemain"]').css('min-height',($('[data-layoutrole="wrapper"]').innerHeight() - 101)+'px')	;	
		}
      
		  resizePreviewArea();
    
		 $(window).resize(function(){
			resizePreviewArea();
		 });
		
    function resizePreviewArea(){
			//$('#layoutViewSetting').height($('#builderContain').innerHeight()+'px');
			$('[data-layoutrole="middlemain"]').css('min-height',($('[data-layoutrole="wrapper"]').innerHeight() - 101)+'px')	;	
		}
		
		 $(window).resize(function(){
			resizePreviewArea();
		 });
		 
    
})

