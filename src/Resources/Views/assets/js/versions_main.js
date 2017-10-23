$(function () {
  
  function sendajaxmain(url, data, success){
	 
        $.ajax({
                type: "post",
                datatype: "json",
                url: url,
                data: data,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if(success){
                     success(data);
                    }
                     return data;
                }
            });
  }
  
        if( jQuery('.selectpicker').length > 0){
             $('.selectpicker').selectpicker();
             if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $('.selectpicker').selectpicker('mobile');
            }
        } 
        if( jQuery('.customselect').length > 0){
             $('.customselect').selectpicker();
             if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $('.customselect').selectpicker('mobile');
            }
        }   
        function setheader (){
          if($('.menuBuilderHeader').attr('class')){
               var topHeigsubh = $('.menuBuilderHeader').innerHeight();
               $('#builderContain').find('.formoptions').css('top', topHeigsubh);
               
          }
          
          var topHeigh = $('#menuBuilderHeader').innerHeight();
          $('#builderContain').css('top', topHeigh);
          
          
        }
        setheader()
        
        $(window).resize(setheader);
        
        if( $('.formoptions').length > 0){

          $(window).load(function(){
             // $(".formoptions").mCustomScrollbar();
          });
        
        }
        
        
       
            
       
       
        
        $('[data-tabnav] a').click(function(){
         
          $(this).closest('[data-tabnav]').children('li').removeClass('active')
          $(this).closest('li').addClass('active')
        })
        
        $('body').on('click', '[data-save="class"]',function(){
			
			
            var exportjson = $('[data-export="json"]').val();
			var sendata = $('#sendajaxdata').data();
			var callbasc = $('[data-callback="save"]').val();
			var collections = $('[data-export="collectiondata"]').val();
			var jsonexp = {}
			
           if(typeof exportjson === "object"){
             jsonexp = exportjson
             exportjson =  JSON.stringify(exportjson);
           }else{
             if(exportjson!=''){
                  jsonexp = JSON.parse(exportjson)
              }
           }
		
				
			
			if(sendata){
				var data = sendata;
				data['json_data'] = exportjson;
				data['css_data'] = collections;
				
			}else{
				var data={
				  "json_data":exportjson,
				  "css_data": collections,
				  "name":$('[data-role="classname"]').val(),
				  "section":$('[data-section="save"]').val()
				}
				  var subtype = $('[data-pagetype]').val();
				  var ids = $('[data-pageid="save"]').val();

				  if(subtype){
					  data['sub_type'] = subtype
				  }


				if(ids){
					data['id'] = ids; 
				}
			}
            var url = $('#classes_links').val();
            var afterajax = function(result){
				
                 if (result.result) {
                     $("#studio-success .studio-no-btn").attr('href',result.user_sub);
                     $("#studio-success").modal();
                    //window.location.href = '/admin/themes/classes/variation-class/'+result.id;
                  }else{
                    var message='';
					 if(result.message){
						$.each(result.message,function(k,v){
						  message+=v;
						});
						alert(message);
						 }
                  }
            }
			
		
            if(callbasc){
				sendajaxmain(callbasc, data, afterajax);
			}
            
          })
        
        
        
          $('body').on('click', '[data-openmenu]', function(e){
               e.preventDefault();
               var targetpopup = $(this).data('openmenu')
               var targetpopupsub = $(this).data('openmenusub')
               if($('[data-menucontainer="mainmenu"]').hasClass('active')){
                       if(!$(this).hasClass('active')){
                              $('[data-submenucontainer]').removeClass('active');
                              $('[data-submenucontainer="'+targetpopupsub+'"]').addClass('active') 
                              $('[data-menucontainer="'+targetpopup+'"]').addClass('active bounceInLeft').removeClass('bounceOutLeft');   
                              $('[data-openmenu]').removeClass('active') 
                              $(this).addClass('active') 
                       }else{
                          $('[data-menucontainer="'+targetpopup+'"]').addClass('bounceOutLeft');
                          setTimeout(function(){ 
                               $('[data-menucontainer="'+targetpopup+'"]').removeClass('active bounceInLeft');
                           }, 1000);
                          
                         $('[data-sitecontainer]:visible').addClass('hide')
                         $('[data-sitecontainer]:visible').removeClass('active flipInY')
                          $('[data-openmenu]').removeClass('active') 
                      }
                }else{
                      $('[data-submenucontainer]').removeClass('active');
                      $('[data-submenucontainer="'+targetpopupsub+'"]').addClass('active') 
                      $('[data-menucontainer="'+targetpopup+'"]').addClass('active bounceInLeft').removeClass('bounceOutLeft');   
                      $(this).addClass('active')    
                }
        });
        
        $('body').on('click', '[data-opensubmenu]', function(e){
               e.preventDefault();
               var $thistarget = $(this);
               var targetpopup =  $thistarget.data('opensubmenu')
                $('[data-submenucontainer]').removeClass('active');
                $('[data-opensubmenu]').removeClass('active') 
               setTimeout(function(){ 
                  $('[data-submenucontainer="'+targetpopup+'"]').addClass('active') 
                  $thistarget.addClass('active') 
                }, 250);   
               
               
        });
       
        $('body').click(function(e) {
            if (!$(e.target).is('[data-openmenu], [data-openmenu] *, [data-menucontainer], [data-menucontainer] *, .templateSize, .templateSize *')){
              if($('[data-menucontainer]').hasClass('active')){
                  $('[data-menucontainer]').addClass('bounceOutLeft')
                   $('[data-openmenu]').removeClass('active')
                    $('[data-sitecontainer]:visible').addClass('hide')
                    $('[data-sitecontainer]:visible').removeClass('active flipInY')
                   setTimeout(function(){ 
                              $('[data-menucontainer]').removeClass('active bounceInLeft');
                             $('[data-sitecontainer]:visible').removeClass('active flipInY')
                             
                             
                   }, 1000);
               }  
            }
        });
        
        $('body').on('click', '[data-viewtoolbar]', function(){
            var viewtarget = $(this).data('viewtoolbar');
            $('[data-targetviewtool="'+viewtarget+'"]').removeClass('animate-delay2');
            if($(this).hasClass('active')){
              $('[data-targetviewtool="'+viewtarget+'"]').addClass('hide');
              $(this).removeClass('active')

              $(this).children('i').removeClass('iconViewEyeNa').addClass('iconViewEyeWhite')
            }else{
              
              $('[data-targetviewtool="'+viewtarget+'"]').removeClass('hide');
              $(this).children('i').removeClass('iconViewEyeWhite').addClass('iconViewEyeNa')              
              $(this).addClass('active')
            }
        })
        
        function openTemplate(target, thistarget){
             var visibalnew = $('[data-sitecontainer]').not('[data-sitecontainer="'+target+'"]');
            var loadtime = 0;
            $('[data-openproject]').removeClass('active')
            if(visibalnew.is(':visible')){
              visibalnew.addClass('hide').removeClass('active flipInY')
             
            }
            setTimeout(function(){
              visibalnew.addClass('hide')
              thistarget.addClass('active')
              $('[data-sitecontainer="'+target+'"]').removeClass('flipOutY').addClass('active flipInY').removeClass('hide')
             },loadtime);  
        }
        
          $('body').on('click','[data-openproject]', function(){
              var targetbval = $(this).data('openproject')
              if(targetbval){
              openTemplate(targetbval, $(this));
              }
        });
        
        var myproject = $('[data-mytemplate="saved"]').val()
        if(myproject){
            if(typeof myproject != "object"){
              myproject =  JSON.parse(myproject);
              var projecthtml =''
              $.each(myproject, function(k, v){
                
                  projecthtml += '<li><a href="#" data-getitem="'+v+'"><span class="projecttitle">'+v+'</span><img src="/appdata/app/Modules/Studio/Resources/Views/classes/site-builder/img/template-img.jpg" alt=""></a></li>';
              });
              
              $('[data-myprojectlist="myproject"]').html(projecthtml)
            }
            
            var selecttypr = $('[data-role="selectStudio"]').val()
            if(selecttypr!='site-builder'){      
                  $('[data-myprojectlist="tab"]').hide()
            }
            
        }
        
         $('body').on('click', '[data-getitem]', function(){
               var type = $('[data-role="selectStudio"]').val()
               var name = $(this).data('getitem');
               var data ={
                  "type":type,
                  "name":name
               }
               var afterajax = function(d){
                  if(d.error == false){
                      jsondata = d.json
                      if(jsondata ==="object"){
                          jsondata = JSON.stringify(jsondata);
                          
                      }
                     $('[data-export="json"]').val(jsondata)

                      setTimeout(function(){ location.reload(); }, 100);
                      

                     $('[data-menucontainer]').addClass('bounceOutLeft')
                     $('[data-openmenu]').removeClass('active')
                     $('[data-sitecontainer]:visible').addClass('hide')
                     $('[data-sitecontainer]:visible').removeClass('active flipInY')
                  }
               }
               
               postAjax('/get-studio-saved', data, afterajax);
            
        });
        
        $('[data-tabsclasses]').click(function(){
            var gettarget = $(this).data('tabsclasses');
          $('[data-tabsclasses]').removeClass('active')  
          $(this).addClass('active')
            $('[data-tabcontainercl]').addClass('hide')
            $('[data-tabcontainercl="'+gettarget+'"]').removeClass('hide')
        })
        
        
        function updatepopup(){
          var getpsge = $('[data-page]').val()
          var studitype = $('[data-pagetype]').val();
          if(!studitype){
              $('[data-openmenu="mainmenu"][data-openmenusub="mainmenu"]').click()
              $('[data-openproject="opentemplate"]').click();
            
          }
          if(getpsge){
            $('[data-tabsclasses="'+getpsge+'"]').click();
          }
        }
        updatepopup()
        
        
});    
