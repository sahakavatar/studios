
$(function(){
		 $('[data-role="selectStudio"]').val('fields-builder').selectpicker('refresh');
	
		var editor = ace.edit("htmleditor");
		editor.setTheme("ace/theme/twilight");
		editor.getSession().setMode("ace/mode/php")
		
			var editorblade = ace.edit("bladeeditor");
		editorblade.setTheme("ace/theme/twilight");
		editorblade.getSession().setMode("ace/mode/php")
		
		   function sendajax(url, data, success){
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
		
			var classb = {
				sl:{
					cssview : $('[data-role="classview"]'),
					cssstyle : $('[data-role="savedcss"]'),
					exportjson : $('[data-export="json"]'),
					exportcss : $('[data-export="css"]'),
					save : $('[data-save="class"]'),
					htmlcodeview: $('[data-export="html"]'),
					targetpeview:$('[data-role="posthtml"]')
				},
				generalSetting:{
					csssetting:{
						 htmloption:{
							 fieldType:"input" 
						 },
						 exportdata:{
							  "name": "email",
							  "table_name": "users",
							  "column_name": "email",
							  "type": "text",
							  "data": {
								
							  }
						 }
					  }
				},
				runhtml:function(){
							var htmloptiondata = classb.generalSetting.csssetting.htmloption;
							var fieldtyep = htmloptiondata.fieldType;
							if(htmloptiondata){
								  var fieldInnerhtml =  classb.createHTMl(htmloptiondata)
           						  var fieldHtmls= '<div class="form-group datafrom ge-canvas ge-editing " data-class="setting" data-type="'+htmloptiondata['fieldType']+'" data-size="col-sm-12" data-add="class">'+fieldInnerhtml+'</div>'; 
								//classb.sl.targetpeview.html(fieldHtmls)
							}
							if(htmloptiondata['option']){
								var optiondata = htmloptiondata['option']
								if(optiondata['sources']){
									if(classb.budilfrom.sources[fieldtyep]){
										var data = optiondata;
										var tyepesources = 'sources_'+data.sources
										 var datatype = data[tyepesources];
										
										 getvalue = datatype.replace(/\n\r?/g, '\n').replace(/\t?/g, '').replace(/\r?/g, '').split("\n");
										
										var optionjson = {};
										$.each(getvalue, function(i, vas){
											if(vas !=''){
												var getdata = vas.split('|');
												var key = getdata[0] 
												var val = getdata[1] 
												optionjson[key] = val;
												
											}
										})
										
										classb.updatekey('options', optionjson, 'data')
										classb.sl.targetpeview.find('[data-fcontrol="input"]').html(classb.budilfrom.sources[fieldtyep](getvalue, 'radio'))
									}
								}
							}
					
							$('[data-toggle="tooltip"]').tooltip(); 
				},
				budilfrom:{
					sources:{
						radio:function(data, name){
							var optionhtml = '';
							getfiledname = name
							var getvalue = data;
							
							for (i = 0; i < getvalue.length; i++) { 
										optionhtml += '<div class="radio checkbox"> <input name="'+getfiledname+'" id="'+getfiledname+i+'" value="'+getvalue[i]+'" type="radio">'+
											'<label for="'+getfiledname+i+'"> '+getvalue[i]+'</label>'+
										'</div>';

							}
							return optionhtml
							
						}	
					}
				},
				createHTMl:function(data){
					var ihtml = $('[data-role="previewElementView"] [data-field="'+data['fieldType']+'"]').html()
						if(data['general']){
								$.each(data['general'], function(ke, va){
										var keyreapale = '{'+ke+'}'
										ihtml = ihtml.replace(keyreapale, va)
								})
							
						}
					
					return ihtml;
				},
				updatejson:function(){
							var settingdata = $('[data-role="generalsetting"]').serializeArray();
							var settingd = {};
							var exprotdata = {}
							$.each(settingdata, function(i, obj){
									
									 settingd[obj.name] = obj.value;
									exprotdata[obj.name]= obj.value;
								if(obj.name=='name'){
									classb.updatekey('name', obj.value)
								}
							})
							classb.generalSetting.csssetting.htmloption['general'] = settingd;
							var optionsdata = $('[data-role="unitsetting"]').serializeArray();
							var optionssjosn = {};
							$.each(optionsdata, function(i, obj){
									optionssjosn[obj.name] = obj.value;
									exprotdata[obj.name]= obj.value;
								if(obj.name=='name'){
									classb.updatekey('name', obj.value)
								}
							})
							if(optionssjosn['target_type']){
								classb.updatekey('target_type', optionssjosn['target_type']);
								if(optionssjosn['target_type']=='custom'){
									classb.updatekey('table_name', optionssjosn['customtarget_table'])
									classb.updatekey('column_name', optionssjosn['customtarget_column'])
								}else{
									classb.updatekey('table_name', optionssjosn['target_table'])
									classb.updatekey('column_name', optionssjosn['target_column'])
								}
							}
							
							//alert(JSON.stringify(exprotdata))
							classb.generalSetting.csssetting.exportdata.data = exprotdata;
							
							classb.generalSetting.csssetting.htmloption['option'] = optionssjosn;
				},
				updatekey:function(key, val, sub){
						if(sub){
							if(!classb.generalSetting.csssetting.exportdata[sub]){
								classb.generalSetting.csssetting.exportdata[sub] = {}
							}
							classb.generalSetting.csssetting.exportdata[sub][key] = val;
						}else{
							classb.generalSetting.csssetting.exportdata[key] = val;
						}
					
				},
				updatedhtmls:function(){
					classb.updatejson();
					classb.runhtml();
					$('[ data-export="json"]').val(JSON.stringify(classb.generalSetting.csssetting))
					$('[data-export="jsondata"]').val(JSON.stringify(classb.generalSetting.csssetting.exportdata))
					var htmlcomponet = $('[data-previewblade]').html();
        			classb.htmlcodeviews(htmlcomponet);
					classb.makepreview(htmlcomponet);
				},
				htmlcodeviews:function(html){
						html = $('<textarea />').html(html).text();
					  	classb.sl.htmlcodeview.val(html);
					 	//classb.sl.targetpeview.html(html)
					  	editor.setValue(html, -1);
				  },
				makepreview:function(dthm){
							outputhtml = $('<textarea />').html(dthm).text();
							var settingdata = $('[data-role="unitsetting"]').serializeArray();
							var settingd = {};
							$.each(settingdata, function(i, obj){
									 settingd[obj.name] = obj.value;
							});
					
							

							var ssettingd = JSON.stringify(settingd)
							var bladedata = $('#ajaxblade').data()
							var ajaxsend = false;
							if(bladedata){
								var data = bladedata
								ajaxsend = data['url']
								delete data['url']
							}else{
								var data = {}
							}
								data['html'] = outputhtml
								data['setting'] = ssettingd 
							if(ajaxsend){
								//sendajax(ajaxsend, data, classb.amakepreview);	
							}
							
					  },
					amakepreview:function(d){
								if(d.error){
									alert(JSON.stringify(d))
									classb.sl.targetpeview.html(JSON.stringify(d));
								}else{
									if(d.html){
										classb.sl.targetpeview.html(d.html);
									}else{
										classb.sl.targetpeview.html('sorry no have hml');
									}
								}
				},
				readfunction:function(data){
							var targetfunction = data
                              var fucntionHTml = $('<div />').append($('[data-template="functions"]').html())
                              var stype = " ";
                              var vtype = " ";
                              
                              
                              if(targetfunction['sourcesType']){
                                 stype = targetfunction['sourcesType'];
                              }
                              if(!targetfunction['repeated']){
                                fucntionHTml.find('[data-role="repeated"]').remove()
                              }
                              if(!targetfunction['validation']){
                                fucntionHTml.find('[data-role="validation"]').remove()
                              }
                             
                             fucntionHTml.find('[data-role="sources"]').not('[data-sourcestype="'+stype+'"]').remove()
                             $('[data-role="insetFunctions"]').html(fucntionHTml.html());
				},
				readoption:function(data){
							var targetoptions = data;
						
                            $.get("/app/Modules/Studios/Resources/Views/assets/fields-builder2/optionfield/"+targetoptions, function(data){
							
                                $('[data-role="options"]').html(data)
                                $('.customselect').selectpicker('refresh');
								classb.updatedhtmls()
                            });
				},
				readElement:function(){
						var gethtml = $('<div data-html="html"></div>')
							gethtml = gethtml.append($('[data-previewclass]').html());
						var getlsit =   classb.readdataelement($('[data-previewblade]').children(), 'edit'); 

						$('.componetlisting').remove();
						//$('[data-role="elementtree"]').html('<ol class="componetlisting"></ol>');
						$('[data-role="builderrow"]').append(getlsit);
						classb.updatedhtmls()
						
				  },
				  readdataelement:function(target, edit){
						var htmlsdata = $('<div></div>');
						target.each(function(){
						var html = $('<li></li>');

							var htmlsstucher = $('[data-template="row"]').html();
							
							if(!edit){
								htmlsstucher = htmlsstucher.replace('<a href="#" class="iconform editicon" data-type="edit" data-targetype="{type}" data-ctarget="{id}"></a>', '')
								htmlsstucher = htmlsstucher.replace('<a href="#" class="uniticon fullscreen btn-success" data-type="openStudio" data-targetype="{type}" data-ctarget="{id}"></a>', '')
							}
							
							var tagname = $(this).prop('tagName')
							var rowid = _.uniqueId('row');
							var cssselector = rowid+'_'+tagname.toLowerCase();

							 $(this).attr('data-selection', rowid);
							htmlsstucher = htmlsstucher.replace(/{name}/g, tagname)
							htmlsstucher = htmlsstucher.replace(/{text}/g, tagname)
							htmlsstucher = htmlsstucher.replace(/{rowid}/g, rowid)
							htmlsstucher = htmlsstucher.replace(/{id}/g, rowid)
							htmlsstucher = htmlsstucher.replace(/{csstarget}/g, cssselector);
							if(!$(this).children('*').prop('tagName')){
							  htmlsstucher = htmlsstucher.replace('<i class="fa fa-plus" aria-hidden="true"></i>', '<i class="fa" aria-hidden="true"></i>');
							  htmlsstucher = htmlsstucher.replace('data-caction="collapse"', 'data-caction="nocollapse"');
							}
							
							html.append(htmlsstucher);
							var createol = $('<ol></ol');
							if($(this).children('*').prop('tagName')){
							  var htmls =  classb.readdataelement($(this).children())  
							  createol.append(htmls);
							  html.append(createol)
							}
							htmlsdata.append(html)
						 })
						return htmlsdata.html()
				  },
				action:{
					edit:function(target){
						
					},
					fieldsType:function(target){
							 var thisval = target.val();
							 if(classb.fields){
								 if(classb.fields[thisval]){
								 	if(classb.fields[thisval]['function']){
									 	var getdaata = classb.fields[thisval]['function'];
									 	classb.readfunction(getdaata)

									 }
									  if(classb.fields[thisval]['options']){
								 			var data =classb.fields[thisval]['options'];
										  	classb.readoption(data)
									  	}
								 }
								 
								 if(classb.fields[thisval]){
									 if(classb.fields[thisval].types){
										 classb.updatekey('type', classb.fields[thisval].types)
									 }
								 }
							 }	
						
						classb.generalSetting.csssetting.htmloption['fieldType'] = thisval;
						classb.updatedhtmls();
					}
				}
			}
			
			
			 $.get("/app/Modules/Studios/Resources/Views/assets/fields-builder2/js/fieldjson.json", function(data){
					classb.fields = data 
					var optionss = '';
					$.each(classb.fields, function(key, val){
							optionss += '<option value="'+key+'" data-icon="'+val.class+' iconselectButton">'+val.text+'</option>';
					})
				$('[data-role="fieldsType"]').html(optionss);
				$('[data-role="fieldsType"]').change();
				$('.customselect').selectpicker('refresh');
				 
			});	

			  $('body').on('change', '[data-btnaction]', function(){
					var targetevent = $(this).data('btnaction')  
					if(classb.action[targetevent]){
						classb.action[targetevent]($(this));
					}
			  })
			  
			  
			  $('body').on('change', '[data-selector="target"]', function() {
					$('[data-target-option]').addClass('hide');
					$('[data-target-option="'+$(this).val()+'"]').removeClass('hide');
			  })
			  
			   $('body').on('change', '[data-selector="list_source"]', function(){
					var getval = $(this).val()
					$('[data-list-source-option]').addClass('hide');
					$('[data-list-source-option="'+getval+'"]').removeClass('hide');
				})
			  
			  $('[data-role="unitsetting"], [data-role="generalsetting"]  ').on('change', 'select,   [type="checkbox"], [type="radio"]', function(){
					getnewhtmls = true
					classb.updatedhtmls();
				}).on('keyup', 'input, textarea', function(){
					getnewhtmls = true
					classb.updatedhtmls();
				})
			  
			 
			
	
})