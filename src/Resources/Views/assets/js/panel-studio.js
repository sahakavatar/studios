$(function(){
	var _tempPanel;
	var panel = {
		sl:{
			title:'.bootbox #title',
			classneme:'.bootbox  #classname',
			footer:'.bootbox  #footer',
			bodypanel:'.bootbox  #bodypanel',
			customselect:'.customselect',
			toolpreview:'[data-tool-preview="penal"]',
			newclassname:'.bootbox [data-tool-class="new"]',
			gnewclass: '',
			btnAddclass:'.bootbox [data-button="addingeneral"]',
			optionbtn: '.bootbox [data-tool-option]',
			gnewclasstext:'',
			makegradient:'[data-make-gradient]'
			
		},
		fileparth : function(){
			return '/public/ashok/tool/';
		},
		runjs:function(edit){
		 if(edit){
		 	successlabel = 'save';
			mtitle = 'Update panel'
		 }else{
		 	successlabel = 'Add';
			mtitle = 'Create New panel'
		 }	
		 //$(panel.sl.customselect).selectpicker('render');
		$('.color-picker').colorpicker().on('changeColor.colorpicker', function(event){
								 panel.compile(); 
							});
			
			if(edit){
				var getclass = edit.attr('class')
				$(panel.sl.title).val(edit.children('.panel-heading').text());
				$(panel.sl.bodypanel).val(edit.children('.panel-body').html());
				$(panel.sl.footer).val(edit.children('.panel-footer').html());
				$(panel.sl.classneme).selectpicker('val', getclass);
				
				if(edit.children('.panel-heading').find('a[data-click]').data('click')){
					edit.children('.panel-heading').find('a[data-click]').each(function(){
						getvalu = $(this).data('click')
						$('.bootbox [data-tool-option="'+getvalu+'"]').prop( "checked", true );
					})
				}
				
			}else{
				$(panel.sl.toolpreview).empty();
			}
			$(panel.sl.newclassname).val('')
			panel.panelPreview();
			panel.checkclass();
		},
		
		add:function(title, classname, foote,bodyvr, edit){
			if(!classname){classname='panel panel-default'}
			if(!title){title='panel Heading'}
			if(!bodyvr){bodyvr=''}
			if(footer){
			var footerdata = '<div class="panel-footer">'+footer+'</div>'
			}else{footerdata='';}
			
			checkbox  = '<div class="panel-heading-btn">';
			$(panel.sl.optionbtn).each(function() {
				if($(this).is(':checked')){
				 checkbox += $(this).closest('.checkbox').find('span').html();
				}
            });			
			checkbox  +='</div>'
			var paneldata = '<div class="'+classname+'">'+
							'<div class="panel-heading">'+title+checkbox+'</div>'+
							'<div class="panel-body">'+bodyvr+'</div>'+
							''+footerdata+''+
							'</div>';
			if(edit){
				edit.after(paneldata)
				edit.remove()
			}else{
				$('[data-tool="preview"]').append(paneldata)
			}
			panel.cssmaincssGenerate()
		},
		panelPreview:function(){
			var creatnewHTML = {};
			panel.html = [];
			 panel.makegradienta()
			 tinyMCE.triggerSave();
			 title = $(panel.sl.title).val()
			 classname = $(panel.sl.classneme).val();
			 var getClass = ''
			
				 if($(panel.sl.newclassname).val()!=''){
					classname = 'panel panel-'+ $(panel.sl.newclassname).val();
				 }
			
			 
			 footer = $(panel.sl.footer).val();
			 bodyvr = $(panel.sl.bodypanel).val();
			 
			 
			 
			 if($('[data-panel-content="footer"]').is(':checked')){
				var footerdata = '<div class="panel-footer">'+footer+'</div>'
				creatnewHTML.footer = 'Yes';
			 }else{footerdata='';
			 	creatnewHTML.footer = 'No';
			 }
			 
			 $('[data-tool-icon]').each(function(index, element) {
                getClass += 'badge-'+$(this).val()+" ";
				creatnewHTML[$(this).data('tool-icon')]= $(this).val();
             });
			
			checkbox  = '<div class="panel-heading-btn '+getClass+'">';
			$(panel.sl.optionbtn).each(function() {
				if($(this).is(':checked')){
				 checkbox += $(this).closest('.checkbox').find('span').html();
					 creatnewHTML[$(this).data('tool-option')]= 'Yes';
				}	else{
					creatnewHTML[$(this).data('tool-option')]= 'No';	
				}
            });			
			checkbox  +='</div>'
			
			if($('[data-panel-content="header"]').is(':checked')){
				var headerdata = '<div class="panel-heading">'+checkbox+title+'</div>'
				 creatnewHTML.header = 'Yes';
			 }else{
				 headerdata='';
				 creatnewHTML.header = 'No';
			}
			
			 var paneldata = '<div class="'+classname+'">'+
							''+headerdata+''+
							'<div class="panel-body">'+bodyvr+'</div>'+
							''+footerdata+''+
							'</div>';
			creatnewHTML.classname = classname;
			creatnewHTML.headercontent = title;
			creatnewHTML.bodycontent = bodyvr;
			creatnewHTML.footercontent = footer;
			creatnewHTML.panelname = $('#panelname').val();
			creatnewHTML.html = paneldata;
			
			panel.html.push(creatnewHTML);
		
			
			$(panel.sl.toolpreview).html(paneldata);			
		},
		compile:function(){
			var replacheval = "";
			$('.bootbox [data-bootstrap]').each(function() {
				replacheval += " "+$(this).data('bootstrap') +": "+$(this).val() +";\n";
            });
			classname  = $('.bootbox [data-tool-class="new"]').val();
			panel.sl.gnewclasstext = classname.replace(/ /g, "-");
			panel.sl.gnewclass = 'panel-' +classname.replace(/ /g, "-");
			
			if($('[data-make-gradient="Header Color"]').is(':checked')){
				csshbackgound = '.directional(@heading-bg-color; @panel-heading-bg-end; @panel-heading-bg-deg);';
			}else{
				csshbackgound = '.cssbackground(@heading-bg-color);';
			}
			
			if($('[data-make-gradient="Footer Color"]').is(':checked')){
				cssfbackgound = '.directional(@footer-bg-color; @panel-footer-bg-end; @panel-footer-bg-deg);';
			}else{
				cssfbackgound = '.cssbackground(@footer-bg-color);';
			}
			
			if(classname==' '){
			 return false;
			}
			
			panel.panelPreview();
		less.render([
			panel.less.replace("{{{classname}}}", panel.sl.gnewclass).replace("{{{button.less}}}", replacheval).replace(".cssbackground(@heading-bg-color);", csshbackgound).replace(".cssbackground(@footer-bg-color);", cssfbackgound)
		  ].join("\n\n")).then(
        
			function (output) {
				//alert(output.css);
				s =  $('#lesscss');
				s.html(output.css);
				$('[ data-css-view="css"]').html(output.css)
				
			}, function (error) {
			  //bootstrap.response("Error", error);
			    alert(error);
			}
     	 );
		},
		less:"",
		loadless:function(){
			
			$.get("/public/libs/data/panel.less", function(data){
				panel.less = data;
				
			});
			
			$.get("/public/libs/data/panel.json", function(data){
							sectionHTMl = "";
							$.each(data, function(key, val){
									sectionHTMl += '<div data-bootstrap-section="'+key+'" class="accordianData p-l-25 hide">';
									sectionHTMl +='<h4><em class="fa fa-play"></em> '+key+'</h4>	';
									sectionHTMl +='<div class="form-horizontal">';
									$.each(val, function(k, v){
										var regex = /^#([0-9a-f]{3}){1,2}$/i;
										var newv = k.split("=");
										var k = newv[0]
										var lable = newv[1]
										sectionHTMl +='<div class="form-inline">';
										sectionHTMl +='<div class="form-group p-l-40 m-b-0">';
										if(regex.test(v)){
											sectionHTMl +='<label for="'+k+'" class="width-100 text-left">'+lable+'</label>';
											sectionHTMl +='<div class="input-group color-picker input-color" data-colortype="'+k+'">';
											sectionHTMl +='<input type="text" class="form-control hide" id="'+k+'"  value="'+v+'" name="'+k+'" data-bootstrap="'+k+'" >';
											sectionHTMl +='<span class="input-group-addon"><i></i></span></div>';
										}else{
										 sectionHTMl +='<label for="'+k+'" class="sliderLabel width-100 text-left">'+lable+'</label>';
										 sectionHTMl +=' <div class="slider-range greenSlider" data-after="px" data-min="0" data-max="100"></div><input type="text" class="form-control hide" id="'+k+'"  value="'+v+'" name="'+k+'" data-bootstrap="'+k+'" >';
										}
										sectionHTMl +='</div>';
										if(lable=="color"){
											sectionHTMl +='<div class="form-group p-l-40 m-b-0">';
											sectionHTMl +='<div class="checkbox">';
											sectionHTMl +='<input type="checkbox" name="'+k+'-make" id="'+k+'-make" value="yes" data-make-gradient="'+key+'">';
											sectionHTMl +='<label for="'+k+'-make" class="control-label">Make Gradient</label>';
											sectionHTMl +='</div></div>';
										}
										sectionHTMl +='</div>';
										
										if(lable=="color"){
											sectionHTMl +='<div class="form-inline" data-makegradient="'+key+'"><div class="form-group p-l-40 m-b-0">';
											sectionHTMl +='<label for="'+k+'-end" class="width-100 text-left">Color 2</label>';
											sectionHTMl +='<div class="input-group color-picker input-color" data-colortype="'+k+'-end">';
											sectionHTMl +='<input type="text" value="#FFF" class="form-control hide" id="'+k+'-end" name="'+k+'-end" data-bootstrap="'+k+'-end" />';
											sectionHTMl +='<span class="input-group-addon"><i></i></span>';
											sectionHTMl +='</div>';
											sectionHTMl +='</div>';
											sectionHTMl +='</div>';
											sectionHTMl +='<div class="form-inline" data-makegradient="'+key+'">';
											sectionHTMl +='<div class="form-group p-l-40 m-b-0">';
											sectionHTMl +='<label for="'+k+'-deg"  class="sliderLabel text-left">Gradient Angels</label>';
											sectionHTMl +='<div class="slider-range greenSlider" data-after="deg" data-min="0" data-max="180"></div> <input type="text" class="form-control hide" id="'+k+'-deg"  value="0deg" name="'+k+'-deg" data-bootstrap="'+k+'-deg" >';
											sectionHTMl +='</div>';
											sectionHTMl +='</div>';
											sectionHTMl +='';
										}
									});
									sectionHTMl +='</div>';
									sectionHTMl +='</div>';
									
								});
								
							//$('#selectless').append(selctoption);
							
							$('.insertOptions').append(sectionHTMl);
							$('.color-picker').colorpicker().on('changeColor.colorpicker', function(event){
								 panel.compile(); 
							});
							if ( $(".slider-range").length > 0){
								$( ".slider-range" ).each(function() {
									var maxd = $(this).data('max');
									var mind = $(this).data('min');
									$(this ).slider({
										range: "min",
										max:maxd,
										min:mind,
										change: function( event, ui ) {
											getafter = $(this).data('after');
											$(this).next('input').val(ui.value+getafter);
											panel.compile(); 
										}	
									});
									
								    
                                });
								
							}
							
							
							tinymce.init({ selector:'[data-panel-show] textarea',
								menubar: "false",
								 allow_conditional_comments: false,
								setup: function(ed) {
										ed.on('keyup', function(e) {
											panel.panelPreview()
										});
									}
							 });
								 
								
							
				});	
		},
		checkclass:function(){
			$('[data-bootstrap-section]').removeClass('hide');
			classname  = $('[data-tool-class="new"]').val();
			panel.sl.gnewclasstext = classname.replace(/ /g, "-");
			panel.sl.gnewclass = 'panel-' +classname.replace(/ /g, "-"); 
			
			panel.existingcs();
			setTimeout(function(){
				panel.compile();
			}, 100);	
		},
		addClassGeneral:function(){
			
			var exists = false;
			
			$(panel.sl.classneme+' option').each(function(){
				if (this.value == 'panel '+panel.sl.gnewclass) {
					exists = true;
					return false;
				}
			});
			if(!exists){
				option = ' <option value="panel '+panel.sl.gnewclass+'">'+panel.sl.gnewclass+'</option>';
				newclass = ' <li><a href="#" data-val="'+panel.sl.gnewclasstext+'">'+panel.sl.gnewclass+'</a></li>';
				$('[data-class="exsiting"]').append(newclass);
				$('select'+panel.sl.customselect).append(option);
				$('select'+panel.sl.customselect).val('panel '+panel.sl.gnewclass);
				$(panel.sl.customselect).selectpicker('refresh');
				var creatnew = {}
				
				creatnew.class= 'panel '+panel.sl.gnewclass;
				creatnew.classname= panel.sl.gnewclasstext;
				creatnew.val= $('#lesscss').html()
				$('[data-bootstrap]').each(function(index, element) {
                    creatnew[$(this).data('bootstrap')]= $(this).val();
                });
				$('[data-make-gradient]').each(function(index, element) {
					if($(this).is(":checked")){
						creatnew[$(this).data('make-gradient')]= 'Yes';	
					}else{
						creatnew[$(this).data('make-gradient')]= 'No';	
					}
                    
                });
				panel.css = [];
				panel.css.push(creatnew);
				
				
				$('[href=".general"]').click();
				panel.cssmaincssGenerate()
			}else{
				 var r = confirm("This Class Already Exist, want you update this class? ");
					if (r == true) {
						
						var creatnew = {}
				
						creatnew.class= 'panel '+panel.sl.gnewclass;
						creatnew.classname= panel.sl.gnewclasstext;
						creatnew.val= $('#lesscss').html()
						$('[data-bootstrap]').each(function(index, element) {
							creatnew[$(this).data('bootstrap')]= $(this).val();
						});
						$('[data-make-gradient]').each(function(index, element) {
							if($(this).is(":checked")){
								creatnew[$(this).data('make-gradient')]= 'Yes';	
							}else{
								creatnew[$(this).data('make-gradient')]= 'No';	
							}
							
						});
								panel.css = [];
								panel.css.push(creatnew);
								$('select'+panel.sl.customselect).val('panel '+panel.sl.gnewclass);
								$(panel.sl.customselect).selectpicker('refresh');
								$('[href=".general"]').click();
								panel.cssmaincssGenerate();
						
							
						
						
					}
				
			}
			
			
		},
		css:[],
		html:[],
		cssmaincssGenerate: function(){
			cssmain = ''
			for (i = 0; i < panel.css.length; i++) { 
				cssmain += panel.css[i].val
			}
			$('#savedcss').html(cssmain);
			$('#lesscss').empty();
		},
		existingcs:function(){
			$('[data-button="deleteclass"]').addClass('hide');
					for (i = 0; i < panel.css.length; i++) {
						if(panel.css[i].class =='panel '+ panel.sl.gnewclass){
							$('.bootbox [data-colortype]').each(function(index, element) {
                                $(this).colorpicker('setValue', panel.css[i][$(this).data('colortype')]);
                            });
							
							$('.bootbox [data-bootstrap]').each(function(index, element) {
								var removepx = panel.css[i][$(this).data('bootstrap')];
								$(this).val(removepx);
								removepx = removepx.replace('px','').replace('deg','');
								$(this).prev('.slider-range').slider('value', removepx);
                            });
							
							$('[data-make-gradient]').each(function(index, element) {
									checkboxst = panel.css[i][$(this).data('make-gradient')];
									if(checkboxst=="Yes"){
										$(this).prop('checked', true);
									}else{
										$(this).prop('checked', false);
									}
									
								});
								
							
							
							$('.color-picker').colorpicker('update');
							$('[data-button="deleteclass"]').removeClass('hide');
						}
					}
					
			},
			existinghtml:function(){
				getpaneldata = $('[data-have-panel]').val();
				if(getpaneldata!=""){
					panel.html = JSON.parse(getpaneldata);
					
					$(panel.sl.classneme).val(panel.html[0]['classname']);
					
					
					$('[data-tool-icon]').each(function(index, element) {
               			$(this).val(panel.html[0][$(this).data('tool-icon')])
						
             		});
					
					$('[data-tool-option]').each(function(index, element) {
						checkboxcheked = panel.html[0][$(this).data('tool-option')]		
               			if(checkboxcheked=="Yes"){
							$(this).prop('checked', true);
						}else{
							$(this).prop('checked', false);	
						}
             		});
					
					$('[data-panel-content]').each(function(index, element) {
						checkboxcheked = panel.html[0][$(this).data('panel-content')]		
               			if(checkboxcheked=="Yes"){
							$(this).prop('checked', true);
						}else{
							$(this).prop('checked', false);	
						}
             		});
					
					$(panel.sl.title).val(panel.html[0]['headercontent']);
					$(panel.sl.bodypanel).val(panel.html[0]['bodycontent']);
					$(panel.sl.footer).val(panel.html[0]['footercontent']);
					
				}
				
				
			},
			rightclick:function(e, m){
				list = '<a href="#" class="btn btn-default"  data-right="delete">Delete</a>'+
						'<a href="#" class="btn btn-default" data-right="edit">Edit</a>';
				 var x = m.clientX;
            	 var y = m.clientY; 	
			    
				
				 if($('.rightlcikmenu').is(':visible')){
			     	 $('.rightlcikmenu').slideUp(00).remove();
				 }else{
					e.append('<div class="btn-group-vertical rightlcikmenu" style="left:'+x+'px; top:'+y+'px;">'+list+'</div>');	
					$('.rightlcikmenu').slideDown();
				 }
			  
			},
			makegradienta:function(){
				$(panel.sl.makegradient).each(function() {
					getdata = $(this).data('make-gradient');
					if($(this).is(':checked')){
						$('[data-makegradient="'+getdata+'"]').removeClass('hide');
						
					}else{
						$('[data-makegradient="'+getdata+'"]').addClass('hide');
					}
                    
                });
			},
			createimage:function(){
				
				html2canvas($('[data-tool-preview="penal"]')).then(function(canvas) {
          			 
					  var imagedata = canvas.toDataURL("image/png");
					  
					  $("#img-out").html(canvas);
					  panel.panelsaveajax(imagedata)
        			});
				
			
			},
			loading:function(){
				var html = '<div id="loaddata" ><div class="text-center"><img src="/public/img/ajax-loader6.gif"></div></div>';
				return html;
			},
			loadajex:function(loadclass){
				
				if(loadclass=='default' || loadclass=='primary' || loadclass=='success' || loadclass=='info' || loadclass=='warning' || loadclass=='danger' ){
					$(panel.sl.newclassname).val('');
					panel.panelPreview()
				}else{
					$('[data-tool-preview="penal"]').append(panel.loading());
				
					 
					  $.ajax({
						type: "post",
						url: "/admin/builders/class",
						cache: false,
						datatype: "json",
						data: {classname: loadclass},
						headers: {
							'X-CSRF-TOKEN': $("#token").val()
						},
						success: function (data,response) {
							if(response == 'success'){
								$(panel.sl.newclassname).val(loadclass);
								panel.css = JSON.parse(data);
								
								panel.checkclass();
								panel.panelPreview();
								$('#loaddata').remove();
								
							}
						}
					});
					
					
				}
			},
			panelsaveajax: function(img){
				var panel_id = $('#panelID').val();
				var panel_name = $('#panelname').val();
				var classname = $('#classname').val();
				classname = classname.replace("panel panel-", "");
				console.log(panel.html[0].html);
				
				$.ajax({
					type: "post",
					url: "/admin/builders/panel",
					cache: false,
					datatype: "json",
					data: {panel: JSON.stringify(panel.html),html: panel.html[0].html, id: panel_id,panel_name: panel_name, class: classname, image:img},
					headers: {
						'X-CSRF-TOKEN': $("#token").val()
					},
					success: function (data) {
						if(data.success){
							window.location.href = "/admin/builders/panel";
						}else{
							//please make to show messages
							var messages = data.messages;
							alert('validation error');
						}
					}
				});
			}
			
			
			
		
	
	};
	
	
	panel.loadless();
	panel.runjs();
	
	
	panel.existinghtml();
	
	getloadclass = $(panel.sl.classneme).val()
	if(getloadclass!=""){
		var getthisvals = getloadclass.replace("panel panel-", "");
		panel.loadajex(getthisvals);
	}
	
	
	$(panel.sl.customselect).selectpicker({
	  style: 'btn-default',
	  size: 4
	});
	$('.smallselect').selectpicker({
	  style: 'btn-default  btn-xs',
	  size: 4
	});
	 
	
	$('body').on('click', panel.sl.btnAddclass, function(){
		panel.addClassGeneral();
		
		if(panel.css[0].class != ""){
			$('[data-tool-preview="penal"]').append(panel.loading());
			
			$.ajax({
				type: "post",
				url: "/admin/builders/new-class",
				cache: false,
				datatype: "json",
				data: {css:JSON.stringify(panel.css), class: panel.css[0].class, classname: panel.css[0].classname},
				headers: {
					'X-CSRF-TOKEN': $("#token").val()
				},
				success: function (data) {
					console.log();
					$('#loaddata').remove();
				}
			});
		}
		
	});
	
	$('body').on('click','.bootbox [data-tool-tab="panel"]', function(){
		setTimeout(function(){ 
			if($('.bootbox a[href=".style"]').closest('li').hasClass('active') ){
				$('[data-bb-handler="success"]').addClass('hide');
				
			}else{
				$('[data-bb-handler="success"]').removeClass('hide');
			}	
		}, 100)
	})
	$('body').on('click','[data-class="exsiting"] a', function(){
		var val = $(this).data('val');
		$(panel.sl.newclassname).val(val);
		panel.checkclass()
	})
	
	$('body').on('click','[data-button="deleteclass"]', function(){
		getval = $(panel.sl.newclassname).val();
		index = panel.css.findIndex(x => x.classname==getval)
		//getoption = panel.css[index].class;
		//delete panel.css[index];
		//panel.checkclass();	
	})
	
	$('body').on('keyup click','.bootbox input, .bootbox textarea', function(){
		panel.panelPreview()
	});
	
	$('body').on('change',panel.sl.makegradient, function(){
		 
		panel.compile(); 
		
	});
	
	$('body').on('change','.bootbox [data-tool-icon]', function(){
		panel.panelPreview()
		
	});
	
	
	$('body').on('change','.bootbox select', function(){
		//panel.panelPreview()
		
	});
	$('body').on('change', panel.sl.classneme, function(){
		var getthisval = $(this).val();
		var getthisvals = getthisval.replace("panel panel-", "");
		panel.loadajex(getthisvals);
		
		
	});
	
	
	
	
	$('body').on('click','[data-right="delete"]', function(){
		$(this).closest('.panel').remove();
	});
	
	$('body').on('contextmenu', '[data-tool="preview"] .panel', function(e){
		 e.stopPropagation();
		panel.rightclick($(this), e);
    	return false;
	}); 
	
	

	
	$('html').click(function() {
		$('.rightlcikmenu:visible').slideUp(50).remove();
	});
	
	$('[data-tool-tab="btnpanel"] a').click(function(){
		$('[data-tool-tab="btnpanel"] a').removeClass('active');
		$(this).addClass('active')
	})

	$('[data-active="edit"]').click(function(){
		$('[data-tool-tab="btnpanel"] a[href=".style"]').click();
		$('.addNewClass').show();
		$('[data-button=addingeneral]').parent().show();
		panel.checkclass();
	});
	
	$('[data-save="panel"]').click(function(){
		panel.createimage();
		//alert(JSON.stringify(panel.html[0]))
	});
});

	