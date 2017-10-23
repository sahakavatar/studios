$(function(){
  $('[data-role="selectStudio"]').val('theme-studio').selectpicker('refresh');
  var cssdata = {
      title:"Layoutname_50",
			mediacss:{},
			viewclass:{},
			viewFilter:{
				sidebar1:['0', '4', '7', '8', '9'],
        sidebar2:['0', '4', '7', '8', '9']
			},
      		css:{},
			saved:{
				slidebar1:{
            desktop:{
						'sidePosition':'slidebar1-left',
						'fixed':'none',
						'collapsible':'none',
						'floating':'none'
					},
          tablet:{
              'sidePosition':'slidebar1-left',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
            },
          tabletportrait:{
              'sidePosition':'slidebar1-top',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
            },
          mobile:{
              'sidePosition':'slidebar1-top',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
            },
          mobileportrait:{
              'sidePosition':'slidebar1-top',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
          }	
        }	,
        slidebar2:{
            desktop:{
						'sidePosition':'slidebar2-right',
						'fixed':'none',
						'collapsible':'none',
						'floating':'none'
					},
          tablet:{
              'sidePosition':'slidebar2-right',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
            },
          tabletportrait:{
              'sidePosition':'slidebar2-top',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
            },
          mobile:{
              'sidePosition':'slidebar2-top',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
            },
          mobileportrait:{
              'sidePosition':'slidebar2-top',
              'fixed':'none',
              'collapsible':'none',
              'floating':'none'
          }	
        }	,
        header:{
            "fixed":"",
            "fixedafter":"0"
        },
        footer:{
            "fixed":"",
            "fixedafter":"0"
        }
			},
      body : 
          {
            'main-body': { }
          },
      cssclass:"",
      cssStyle:"",
      layoutView:{
             "header":true,
              "footer":true,
              "sidebar1":true,
              "sidebar2":true
        }
       
      
		}
		
		cssdata.desktop = 'left'
		cssdata.tablet = 'left'
		cssdata.tabletportrait = 'top'
		cssdata.mobile = 'top'
		cssdata.mobileportrait = 'top'
		
		cssdata.viewclass.lg = ''
		cssdata.viewclass.tl = ''
		cssdata.viewclass.tp = ''
		cssdata.viewclass.ml = ''
		cssdata.viewclass.mp = '';
    
    
    if($('[data-export="json"]').val() != ''){
        cssdata = JSON.parse($('[data-export="json"]').val())
        if(!cssdata.css){
            cssdata.css = {}
        }
    }
    
    
    
		$('[data-layout-role]').change(function(){
      	var thisRole = $(this).data('layout-role');
        
        if(thisRole=='leftbar'){
          thisRole =  'sidebar1'
        }
        if(thisRole=='rightbar'){
          thisRole =  'sidebar2'
        }
        
        if($(this).is(':checked')){
          cssdata.layoutView[thisRole] = true;
        }else{
          cssdata.layoutView[thisRole] = false;
        }
       
			  paylayout()
		})
		
		
		var paylayout = function(){
			var middle = 12 ;
			$('[data-layout="middle"]').removeClass('col-xs-6').removeClass('col-xs-9').removeClass('col-xs-12');
			if($('[data-layout-role="rightbar"]').is(':checked')){
				middle = middle - 3;
				
			}
			if($('[data-layout-role="leftbar"]').is(':checked')){
				middle = middle - 3;
			}
			
			$('[data-layout="middle"]').addClass('col-xs-'+middle);
			
			$('[data-layout-role]').each(function() {
				var thisRole = $(this).data('layout-role')
        
				if($(this).is(':checked')){
					$('[data-tabcontainer="'+thisRole+'"]').removeClass('hide');
          
					if(thisRole=="header"){
						$('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHideHeader')
					}else if(thisRole=="footer"){
						$('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHideFooter')
					}else if(thisRole=="extratop"){
              $('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHideextratop')
           }else if(thisRole=="extrabottom"){
              $('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHideextrabottom')
           }
					
					if(thisRole=="leftbar"){
						$('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHideleftbar')
					}else if(thisRole=="rightbar"){
            
						$('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHiderightbar')
					}
					
				}else{
					$('[data-tabcontainer="'+thisRole+'"]').addClass('hide');
					
					
					if(thisRole=="header"){
						$('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHideHeader')
					}else if(thisRole=="footer"){
						$('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHideFooter')
					}else if(thisRole=="extratop"){
              $('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHideextratop')
           }else if(thisRole=="extrabottom"){
              $('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHideextrabottom')
           }
					if(thisRole=="leftbar"){
						$('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHideleftbar')
					}else if(thisRole=="rightbar"){
						$('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHiderightbar')
					}
				}
				
       });
       
        intapi.downloadjson();
			
		}
		
   
		
		$('[data-slidebar-role]').click(function(){
				openslider()
			})
		
		var openslider = function(){
			$('[data-slidebar-role]').each(function(i, v){
      
				var thisdata = $(this).data('slidebar-role');
				if($(this).is(':checked')){
					$('[data-sub-container="'+thisdata+'"]').show()
					if(thisdata=="leftbar"){
						$('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHideleftbar')
					}else if(thisdata=="rightbar"){
						$('#layoutViewSetting').contents().find('.generalWrapper').removeClass('generalHiderightbar')
					}
				}else{
					$('[data-sub-container="'+thisdata+'"]').hide()
					if(thisdata=="leftbar"){
						$('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHideleftbar')
					}else if(thisdata=="rightbar"){
            
						$('#layoutViewSetting').contents().find('.generalWrapper').addClass('generalHiderightbar')
					}
				}
			})
		}
		openslider()
    
    
    var intapi = {
        generatcss:function(){
          var csssstyle = '';
            if(cssdata.css){
                $.each(cssdata.css, function(key, val){
                  if(key == "slidebar1" || key == "slidebar2"){
                    var width = cssdata.css[key]['width']
                    if(width){
                      re = width.replace("%", "");
                      middlew = 100  - re
                      middlew = middlew +"%";
                      var gettemplate = $('[data-tempcss="'+key+'"]').html()
                      gettemplate = gettemplate.replace(/sidebarwidth/g, width);
                      gettemplate = gettemplate.replace(/middlewidth/g, middlew);
                      csssstyle += gettemplate;
                    } 
                  }
                  if(key=='extra'){
                    csssstyle += val;
                  }
                      
                })
              
            }
            /* End if cssdata.css */
            
            $('#layoutViewSetting').contents().find('[data-generatedcss="csss"]').html(csssstyle)
            $('[data-export="frontcss"]').val(csssstyle)
             csssstyle =  csssstyle.trim()             
            cssdata.cssStyle = csssstyle;
            intapi.downloadjson();
             
        },
        updatecss:function(){
          intapi.generatcss()
          runcss ()
        },
        downloadjson:function(){
              var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cssdata));
              $('[download="page-layout.json"]').attr('href', 'data:' + data)
        }
         
         
    }
     $('#layoutViewSetting').load(function(){
       paylayout()
       intapi.generatcss()
       loadIfr()
    })
    
		
	   $('.settingSlider').each(function() {
        var smin= $(this).data('slide-min');
        var smax=$(this).data('slide-max');
        var sval= $(this).data('slide-val');
        var step= $(this).data('slide-step');
        var effet = $(this).data('adjust');
        $( this ).empty().slider({
          range: "min",
          value: sval,
          min:smin,
          max:smax,
          step: step,
          animate: true,
          slide: function( event, ui ) {
               var thisval = ui.value;
               var cssmultipale = $(this).data('multipale'); 
               var thiscsspro = $(this).attr('data-css')
               var aftercss = $(this).attr('data-css-after');
               if(cssmultipale){
                 if(cssdata.css[cssmultipale]){
                    cssdata.css[cssmultipale][thiscsspro] = ui.value+aftercss;
                 }else{
                    cssdata.css[cssmultipale] = {}
                    cssdata.css[cssmultipale][thiscsspro] = ui.value+aftercss;
                 }
               }
               $(this).next('[data-slider-val]').html(ui.value+aftercss);
               $('[data-sliderwidth="'+cssmultipale+'"]').val(ui.value);
               intapi.updatecss()
          }
        });
	  });
  
  
		function changelayout(){
			$('#layoutViewSetting').contents().find('.generalsidebar_left').removeAttr('style')
          var getmode = $('[data-view].active').data('mode');
          var getmodeclass = $('[data-view].active').data('modeclass');
     $('[data-sidePosition]').each(function(index, element) {
            var getlaout = $(this).val();
            var sidemode = $(this).data('siderole');
            var generatedcss = '';
            var newl = sidemode+'-'+getlaout;
            if(getlaout=='left' || getlaout=='right'){
              $('[data-optioncss][data-role="'+sidemode+'"]').parents('.sidebaroptionGroup').removeClass('hide');
            }else if(getlaout=='top'){
              $('[data-optioncss][data-role="'+sidemode+'"]').parents('.sidebaroptionGroup').removeClass('hide');	
              $('[data-optioncss="fixed"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
               $('select[data-optioncss="fixed"][data-role="'+sidemode+'"]').val('none').parents('.sidebaroptionGroup').addClass('hide');
              $('[data-optioncss="floating"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
            }else if(getlaout=='bottom'){
              $('[data-optioncss][data-role="'+sidemode+'"]').parents('.checkbox').removeClass('hide')	
              $('[data-optioncss="fixed"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
               $('select[data-optioncss="fixed"][data-role="'+sidemode+'"]').val('none').parents('.sidebaroptionGroup').addClass('hide');
              $('[data-optioncss="floating"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
            }else{
              $('[data-optioncss="fixed"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
               $('select[data-optioncss="fixed"][data-role="'+sidemode+'"]').val('none').parents('.sidebaroptionGroup').addClass('hide');
              $('[data-optioncss="floating"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
              $('[data-optioncss="collapsible"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
            }
            
            if(getmodeclass == 'tp' || getmodeclass == 'ml' || getmodeclass == 'mp' ){
              $('[data-optioncss="fixed"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
              $('select[data-optioncss="fixed"][data-role="'+sidemode+'"]').val('none').parents('.sidebaroptionGroup').addClass('hide');
              $('[data-optioncss="floating"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');
              $('[data-optioncss="collapsible"][data-role="'+sidemode+'"]').prop('checked', false).parents('.sidebaroptionGroup').addClass('hide');	
            }
			
			
			  cssdata.saved[sidemode][getmode]['sidePosition'] = newl 
			
		  	cssdata[getmode] = getlaout;
			  cssdata.viewclass[getmodeclass] = sidemode+'-'+getmodeclass+'-'+getlaout;
			  cssdata.mediacss[getmode]= generatedcss;
			
       	viewcss(getmode, getlaout)
			
		});
		
			
		}
		
		function runcss (){
			var classs = ''
			$.each(cssdata.viewclass, function(i,v){
				classs +=v+' ';
			})
			
			$('[data-export="css"]').val(classs)
      cssdata.cssclass = classs;
      $('[data-export="json"]').val(JSON.stringify(cssdata))
			 intapi.downloadjson();
      
			//$('#layoutViewSetting').contents().find('body').removeAttr('class')
		  //$('#layoutViewSetting').contents().find('body').addClass(classs)
		}
		
		
		function viewcss(m){
      var newcss = ''
			var outcss = '';
      var getmodeclass = $('[data-view].active').data('modeclass');
     
      $.each(cssdata.saved, function(key, val){
        if(key=="header" || key=="footer"){
             if(val['fixed'] !== 'none'){
              outcss += val['fixed']+' ';
             }
        }
        var getsaved = cssdata.saved[key][m];
			  if(getsaved){
         $.each(getsaved, function(c, v){
            if(v != 'none'){
              newcss +=v+' ';
              var replase = '-'+getmodeclass+'-'
              var values = v.replace("-", replase);
              outcss += values+' ';
              
            }
          })
		  	}
          
            
      })
      
			$('#layoutViewSetting').contents().find('body').removeAttr('class')
		  $('#layoutViewSetting').contents().find('body').addClass(newcss)
				
			cssdata.viewclass[getmodeclass] = outcss;
			
			runcss ()
		}
		
		$('[data-view]').click(function(){
			$('[data-view]').removeClass('active').parent().removeClass('active')
			$(this).addClass('active').parent().addClass('active')
			var getsize = $(this).data('view')
			var getmode = $(this).data('mode')
			var getmodeclass = $(this).data('modeclass')
			
			reloadview(getmode)
			
		})
		
		$('[data-sidePosition]').change(function(){
			//var getthisval = 'slidebar1-'+$(this).val()
			changelayout()
			sliderbaroption()
		})
		
		$('[data-optioncss]').click(function(){
      
			sliderbaroption()
		})
    
    $('[data-optioncss]').change(function(){
			sliderbaroption()
		})
    
    $('[data-editTex]').keyup(function(){
          datakey = $(this).data('key')
          if(datakey){
              cssdata[datakey] = $(this).val();
           }
          intapi.downloadjson();
		})
		
		function reloadview(m){
      
			var getmodeclass = $('[data-view].active').data('modeclass')
			if(!m){
				m = $('[data-view].active').data('mode')
			}
			
      if(getmodeclass == "lg" || getmodeclass=="tl"){
				viewss = 'lg'
			}else{
				viewss = 'small'
			}
     
			
      
			
      $.each(cssdata.saved, function(key, val){
        
         var currentkay =  key;
          if(cssdata.saved[key][m]){
			      $.each(cssdata.saved[key][m], function(ob, va){
            var selectSelector = $('[data-siderole="'+currentkay+'"][data-'+ob+']');
            var checkboxselect = $('[data-role="'+currentkay+'"][data-optioncss="'+ob+'"]');
            
            if(selectSelector.is('select')){
             
                  selectva = va.replace(currentkay+'-','')
                  selectSelector.val(selectva);
                  selectSelector.find('option').attr('disabled', 'disabled');
                  selectSelector.find('option[data-soption="'+viewss+'"]').removeAttr('disabled');
			            selectSelector.find('option[data-soption="all"]').removeAttr('disabled');
                 
            }
           
            if(checkboxselect.is('input:checkbox')){
              if(va!='none'){
                checkboxselect.prop('checked', true)
                
              }else{
                checkboxselect.prop('checked', false)
              }	
            }
          });
          }
      })
			changelayout()
			sliderbaroption();
       $('.customselect').selectpicker('refresh');
      
		}
		
    
    
    
		//reloadview();
		
		function sliderbaroption(){
     
			var getmode = $('[data-view].active').data('mode')
			
			$('[data-optioncss]').each(function(index, element) {
                var thisVale = $(this).val()
               
				var thisRole = $(this).data('role')
				var createclass = thisRole+'-'+thisVale; 
				
				var getmodeclass = $('[data-view].active').data('modeclass')
				if($(this).is('select')){
         var dataoptions = $(this).data('optioncss');
           if(dataoptions == 'fixed'){
              if(thisVale=='none'){
                cssdata.saved[thisRole][getmode]['none'] = 'none'
                cssdata.saved[thisRole][getmode]['sticky'] = 'none';
                cssdata.saved[thisRole][getmode]['floating'] = 'none'
              }
              if(thisVale=='sticky'){
                cssdata.saved[thisRole][getmode]['none'] = 'none'
                cssdata.saved[thisRole][getmode]['sticky'] = createclass;
                cssdata.saved[thisRole][getmode]['floating'] = 'none'
              }
              if(thisVale=='floating'){
                cssdata.saved[thisRole][getmode]['none'] = 'none'
                cssdata.saved[thisRole][getmode]['sticky'] = 'none';
                cssdata.saved[thisRole][getmode]['floating'] = createclass;
              }
           }
              
        }else if($(this).is('[type="radio"]')){
           var dataoptions = $(this).data('optioncss');
           if(thisRole =='header' || thisRole =='footer'){
              var value =  $('[type="radio"][data-role="'+thisRole+'"][data-optioncss="'+dataoptions+'"]:checked').val()
              createclass = thisRole+'-'+value; 
              if(!cssdata.saved[thisRole]){
                  cssdata.saved[thisRole] = {};
              }
              cssdata.saved[thisRole][dataoptions] = createclass;
              
           }
        }else{
          if($(this).is(':checked')){
              
              cssdata.saved[thisRole][getmode][thisVale] = createclass
          }else{
              
              cssdata.saved[thisRole][getmode][thisVale] = 'none'
          }
        }
			});
			viewcss(getmode)
      $('.customselect').selectpicker('refresh');
      
		}
    
    	function loadIfr (){
		
			//for header's option
			$('#layoutViewSetting').contents().find('[data-layoutrole="header"]').click(function(){
				hidePageLayoutOptions($('#header-options'));
			});

      //for footer's option
      $('#layoutViewSetting').contents().find('[data-layoutrole="footer"]').click(function(){
        hidePageLayoutOptions($('#footer-options'));
      });
			
			//for left sidebar's option
			
			$('#layoutViewSetting').contents().find('[data-layoutrole="slidebar1"]').click(function(){
				hidePageLayoutOptions($('#leftbar-options'));
				$('#responsive-toolbar-icon').show();
			});
			
			//for right sidebar's option
			 
			$('#layoutViewSetting').contents().find('[data-layoutrole="slidebar2"]').click(function(){
				hidePageLayoutOptions($('#rightbar-options'));
				$('#responsive-toolbar-icon').show();
			});
			
			$('#layoutViewSetting').contents().find('[data-layoutrole="middlemain"]').click(function(){
				hidePageLayoutOptions($('#body-options'));
			});
			
			resizePreviewArea();
			
   	}
    
    $('[data-role="topnav"][data-tabnav="button"] a').click(function(){
      var gettarget = $('#'+$(this).data('rolecss')+'-options');
      hidePageLayoutOptions(gettarget)
      if($(this).data('rolecss')=='rightbar' || $(this).data('rolecss')=='leftbar' ){
          $('#responsive-toolbar-icon').show();
      }
          
    })
		
		function hidePageLayoutOptions(obj){
      $('[data-tabcontainer]').hide();
			$('#responsive-toolbar-icon').hide();
			obj.show();
		}
		
		$('#add-body-exrta-area').click(function(){
			var OptionName = 'Extra 1';
			var OptionObjName = 'extra1';
      var extralanth = 0; 
     
      $.each(cssdata.body, function(key, val){
          extralanth++
          if(cssdata.body[OptionObjName]){
                OptionObjName = 'extra'+extralanth;
                OptionName = 'Extra '+extralanth;
          }
      })
     
           
     if(extralanth>6){
       
              $('#extraOptionModal').modal('hide');
                return false
      }
      
			
			var strOptionData = '';
			strOptionData += '<div class="row body-inner ui-state-default" id="'+OptionObjName+'" data-extratarget="'+OptionObjName+'">';
          	
            strOptionData += '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 p-5 extra-block"><a href="#" class="iconstudio addicon m-r-10 purplebg" data-addpopup="container">';
			strOptionData += ' <i class="fa fa-arrows-v" aria-hidden="true"></i> </a>'+ OptionName +'</div>';
          
          	strOptionData += '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 p-5 exrta-block-margin">';
            strOptionData += '<label class="p-r-5" for="offsetX">Margin Top</label>';
            strOptionData += '<div class="spinner">';
            strOptionData += '    <label for="extra-'+OptionObjName+'" class="sr-only">Angle</label>';
            strOptionData += '    <input type="text" value="0" data-extraMargin="'+OptionObjName+'" data-css="margin-top" id="extra-'+OptionObjName+'" class="form-control">';
            strOptionData += '    <div class="input-group-btn-vertical">';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>';
            strOptionData += '    </div>';
            strOptionData += '  </div>';
			    strOptionData += '</div>';
      
            strOptionData += '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-2 p-5">';
            strOptionData += '<label class="p-r-5" for="offsetX">Bottom</label>';
            strOptionData += '  <div class="spinner ">';
            strOptionData += '    <label for="word-spacing" class="sr-only">word-spacing</label>';
            strOptionData += '    <input type="text" value="0" data-extraMargin="'+OptionObjName+'" data-css="margin-bottom" id="extra-bottom-'+OptionObjName+'" class="form-control">';
            strOptionData += '    <div class="input-group-btn-vertical">';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>';
            strOptionData += '    </div>';
            strOptionData += '  </div>';
            strOptionData += '</div>';
          
          strOptionData += '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-2 p-5">';
            strOptionData += '<label class="p-r-5" for="offsetX">Left</label>';
            strOptionData += '  <div class="spinner ">';
            strOptionData += '    <label for="word-spacing" class="sr-only">word-spacing</label>';
            strOptionData += '    <input type="text" value="0" data-extraMargin="'+OptionObjName+'" data-css="margin-left" id="extra-left-'+OptionObjName+'" class="form-control">';
            strOptionData += '    <div class="input-group-btn-vertical">';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>';
            strOptionData += '    </div>';
            strOptionData += '  </div>';
            strOptionData += '</div>';
            
            strOptionData += '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-2 p-5">';
            strOptionData += '<label class="p-r-5" for="offsetX">Right</label>';
            strOptionData += '  <div class="spinner ">';
            strOptionData += '    <label for="word-spacing" class="sr-only">word-spacing</label>';
            strOptionData += '    <input type="text" value="0" data-extraMargin="'+OptionObjName+'" data-css="margin-right" id="extra-left-'+OptionObjName+'" class="form-control">';
            strOptionData += '    <div class="input-group-btn-vertical">';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>';
            strOptionData += '      <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>';
            strOptionData += '    </div>';
            strOptionData += '  </div>';
            strOptionData += '</div>';
          
          
            strOptionData += ' <a href="#" data-key="'+OptionObjName+'" data-parentid="'+OptionObjName+'" data-extraArea="remove"  class="iconstudio addicon btnCloserow" data-addpopup="container"> <i class="fa fa-remove" aria-hidden="true"></i> </a> ';
            strOptionData += '</div>';
			$('#body-inner-options').append(strOptionData);
			$('#option-name').val('');
			$('#extraOptionModal').modal('hide');
			var extraBlock = '<div class="gextratop '+OptionObjName+'" data-layoutrole="'+OptionObjName+'">'+OptionName+'</div>';
			$('#layoutViewSetting, #iframepreview').contents().find('[data-layoutrole="middlemain"]').find('.middelCol').append(extraBlock);
        
        
      
        if(!cssdata.body[OptionObjName]){
            cssdata.body[OptionObjName] = {} ;
            
        }
        cssdata.body[OptionObjName]['title'] = OptionName
     
     
		});
		
		var slug = function(str) {
			var $slug = '';
			var trimmed = $.trim(str);
			$slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
			replace(/-+/g, '-').
			replace(/^-|-$/g, '');
			return $slug.toLowerCase();
		}
		
		$(document).on('click','[data-extraArea="remove"]',function(){
		 var getclassname = $(this).data('key');
      $('#'+$(this).data('parentid')).remove();
       delete cssdata.body[getclassname];
      $('#layoutViewSetting').contents().find('[data-layoutrole="middlemain"]').find('.middelCol').find('.'+$(this).data('parentid')).remove();
			
		
		});
		
		function resizePreviewArea(){
			$('#layoutViewSetting').height($('#builderContain').innerHeight()+'px');
		}
		 $(window).resize(function(){
			resizePreviewArea();
		 });
		 
		 
		/* $('#body-inner-options').on('sortupdate',function() {
			 console.log($(this).attr('id'));
		 });*/

			
		$("#body-inner-options").sortable({
      update: function(event, ui) { 
             var targetHtml =  $('#layoutViewSetting, #iframepreview').contents().find('[data-layoutrole="middlemain"]').find('.middelCol');        
             var divContent = $('#layoutViewSetting').contents().find('[data-layoutrole="middlemain"]').find('.middelCol').clone().appendTo('<div></div>')
             targetHtml.find('[data-layoutrole]').remove()
             var updatedata = cssdata.body;
             cssdata.body = {};
             
             $('[data-extratarget]').each(function(index, element) {
                  var addkey = $(this).data('extratarget')
                  divContent.find('[data-layoutrole="'+addkey+'"]').clone().appendTo(targetHtml);
                  cssdata.body[addkey] = updatedata[addkey];
             }); 				
            
			}
		}).disableSelection();
		
		
		$('body').on('click', '.spinner .btn:first-of-type ', function() {
     
			var  newval = parseInt( $(this).closest('.spinner').find('input').val(), 10) + 1
			var  tycss = $(this).closest('.spinner').find('input').attr('id');
     var  mim = $(this).closest('.spinner').find('input:first').data('min');
      var  maxm = $(this).closest('.spinner').find('input:first').data('max');
         
      if(maxm || maxm == 0){
           if(Number(maxm) < Number(newval)){
                 return false;
            }
          }
      
      
			$(this).closest('.spinner').find('input').val(newval).keyup();
		});
		$('body').on('click', '.spinner .btn:last-of-type', function() {
       if($(this).closest('.spinner').find('input').val()<=0){ return false;}
			var newval = parseInt( $(this).closest('.spinner').find('input').val(), 10) - 1
			var  tycss = $(this).closest('.spinner').find('input').attr('id');
      var  mim = $(this).closest('.spinner').find('input:first').data('min');
      var  maxm = $(this).closest('.spinner').find('input:first').data('max');
         if(mim || mim == 0){
           if(Number(mim) > Number(newval)){
                 return false;
            }
          }
      
			$(this).closest('.spinner').find('input').val(newval).keyup();
		
		});
		
		$('body').on('keyup','[data-extramargin]',function(){
          var getclassname = $(this).data('extramargin');
          var getstyle = $(this).data('css');
          var magrinTop = '';
          var magrinBottom = '';
            magrinTop = $('[data-extramargin="'+getclassname+'"][data-css="margin-top"]').val();
            magrinBottom = $('[data-extramargin="'+getclassname+'"][data-css="margin-bottom"]').val();
            magrinleft = $('[data-extramargin="'+getclassname+'"][data-css="margin-left"]').val();
            magrinRight = $('[data-extramargin="'+getclassname+'"][data-css="margin-right"]').val();
            
         cssdata.body[getclassname]['class'] = '.'+getclassname +'{margin-top:'+magrinTop+'px; margin-bottom:'+magrinBottom+'px; margin-left:'+magrinleft+'px; margin-right:'+magrinRight+'px}';
           
         console.log(cssdata.body);

           var css= ''
            $.each(cssdata.body, function (key, val){
                if(val['class']!=undefined){
                  css += val['class'];
                }
            })
        cssdata.css['extra'] = css;
            
        /*$('#layoutViewSetting').contents().find('[data-generatedcss="extra"]').html(css);
        $('#iframepreview').contents().find('[data-generatedcss="extra"]').html(css);*/
        intapi.updatecss()
        
		});

    //for sidebar 
    $('body').on('keyup','[data-multipale]',function(){
          var getclassname = $(this).data('multipale');
          console.log(getclassname);
               var thisval = $(this).val();
               var cssmultipale = $(this).data('multipale'); 
               var thiscsspro = $(this).attr('data-css')
               var aftercss = $(this).attr('data-css-after');
               var  mim = $(this).data('min');
               
               var  maxm = $(this).data('max');
                   if(mim || mim == 0){
                     if(Number(mim) > Number(thisval)){
                           return false;
                      }
                    }
                
                if(maxm || maxm == 0){
                     if(Number(maxm) < Number(thisval)){
                           return false;
                      }
                }
               
               
               
               if(cssmultipale){
                 if(cssdata.css[cssmultipale]){
                    cssdata.css[cssmultipale][thiscsspro] = thisval+aftercss;
                 }else{
                    cssdata.css[cssmultipale] = {}
                    cssdata.css[cssmultipale][thiscsspro] = thisval+aftercss;
                 }
               }
         intapi.updatecss()
   });
	
  $('[data-responsive="view"]').click(function(){
    $('#iframepreview').contents().find('body').removeAttr('class')
    $('#iframepreview').contents().find('body').addClass($('[data-export="css"]').val())
    $('#iframepreview').contents().find('[data-generatedcss="csss"]').html($('[data-export="frontcss"]').val())
  })
  
  $('[data-responsiveview]').click(function(){
    $('[data-responsiveview]').removeClass('activebtn')
    $(this).addClass('activebtn')
    var getsize = $(this).data('responsiveview')
    var getmode = $(this).data('mode')
    $('#iframepreview').width(getsize)
  })
    
	$('[data-headertype]').click(function(){
		if($(this).data('headertype')=='sticky'){
			
			$('[data-sticky="'+$(this).data('parent')+'"]').removeClass('hide');
		}else{
			
			$('[data-sticky="'+$(this).data('parent')+'"]').addClass('hide');
		}
	});	

	$('[data-headertype="sticky"]').each(function(){
		if($(this).is(':checked')){
			$('[data-sticky="'+$(this).data('parent')+'"]').removeClass('hide');
		}
	});

   
   $('[data-dropaction="save"]').click(function(){
        alertsavedata = JSON.stringify(cssdata)
        alert(alertsavedata)
   });
   
   $('[data-dropaction="exportaszip"]').click(function(){
        alertsavedata = JSON.stringify(cssdata)
        alert(alertsavedata)
   });



	})
