$(function(){
  $('[data-role="selectStudio"]').val('fields-builder').selectpicker('refresh');
	
var editor = ace.edit("htmleditor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/php")
  
	
	
  var activemainKey = 'layers';
	var classb = {
			sl:{
				cssview : $('[data-role="classview"]'),
				cssstyle : $('[data-role="savedcss"]'),
				exportjson : $('[data-export="json"]'),
				exportcss : $('[data-export="css"]'),
				save : $('[data-save="class"]'),
				controlLable:$('[data-print="demehtml"]').find('[data-fcontrol="label"]'),
				controlInput:$('[data-print="demehtml"]').find('[data-fcontrol="input"]')
        
			},
      settingUpdate:{
         "button":{
            name:"Button",
            tabjson:["button"]
          },
         "text":{
            name:"Text",
            tabjson:["textsetting", "text", "container"]
         },
         "icon":{
            name:"Icon",
            tabjson:["iconSetting", "text", "container"]
         },
         "required":{
            name:"Required",
            tabjson:["iconSetting", "text", "container"]
          },
         "tooltip":{
            name:"Tooltip",
            tabjson:["iconSetting", "text", "container"]
         },
         "inputsetting":{
            name:"Input Setting",
            tabjson:["text", "container", "setting"]
         },
         "row":{
            name:"Main Container",
            tabjson:["mainSetting", "container"]
         },
         "spacer":{
            name:"Spacer Container",
            tabjson:["container"]
         }
      },
      less:"",
			generalSetting:{
				csssetting:{
             htmloption:{
                 fieldType:"input" 
             }
          }
			},
			runcss:function(){
				//classb.compile()
				//classb.runhtml()

			},
      runhtml : function(){
		  
        var htmloptiondata = classb.generalSetting.csssetting.htmloption;
           if(htmloptiondata['layers']){
             var button = '<div class="p-rightsection hide"> <a data-action="edit" class="blue"><i class="fa fa-pencil"></i></a> <a data-action="clone" class="yellow"><i class="fa fa-clone"></i></a> <a data-action="delete" class="red"><i class="fa fa-trash"></i></a> </div>';
           
             
             var fieldInnerhtml =  classb.createHTMl(htmloptiondata['layers'])
             var fieldHtmls= '<div class="form-group datafrom ge-canvas ge-editing " data-class="setting" data-type="'+htmloptiondata['fieldType']+'" data-size="col-sm-12" data-add="class">'+fieldInnerhtml+'</div>' 
             
             
             var exportHTml = $('<div></div>').append(fieldHtmls);
             var previewhtml = $('<div></div>').append(fieldHtmls);
             var jfs = '';
             
             exportHTml.find('.form-group').removeClass('ge-canvas').removeClass('ge-editing').removeAttr('data-add')
             exportHTml.find('[data-selector]').each(function(index, element) {
							  $(this).removeAttr('data-selector');
						 });
             if(htmloptiondata['functions']){
               $.each(htmloptiondata['functions'], function(key, val){
                    if(key=='info'){
                         $.each(val, function(attr, v){
                            exportHTml.find('[data-fcontrol="input"] .form-control').attr(attr, v)
                            previewhtml.find('[data-fcontrol="input"] .form-control').attr(attr, v)
                         })
                     } 
                     if(key=='errormessage'){
                        if(val.message){
                            exportHTml.find('[data-fcontrol="input"] .form-control').attr('data-error', val.message)
                            previewhtml.find('[data-fcontrol="input"] .form-control').attr('data-error', val.message)
                        }
                     }                
               });
             }
             
             
             if(htmloptiondata['selected_layer']){
                if(htmloptiondata['selected_layer']['info']){
                    if(htmloptiondata['selected_layer']['info']['jsf']){
                      jfs +='{'
                      var i=0
                      $.each(htmloptiondata['selected_layer']['info']['jsf'], function(k, v){
                          if(i!=0){
                            jfs +=',';
                          }
                          if(isNaN(v)){
                              jfs +=k+': "'+v+'"'
                          }else{
                            jfs +=k+':'+v
                          }
                          
                          i++
                      })
                       jfs +='}'
                    }
                }
                if(htmloptiondata['selected_layer']['eqheight']){
                    if(htmloptiondata['selected_layer']['eqheight']['eq-height']){
                        previewhtml.find('.row').addClass('fieldrow-eq-height');
                       exportHTml.find('.row').addClass('fieldrow-eq-height');
                   }
                    
                }
             }
             $('[data-role="posthtml"]').html(previewhtml.html() + button)
             
            $('[data-export="html"]').val(exportHTml.html())
            var gettargetscript = htmloptiondata['fieldType']
            editor.setValue(exportHTml.html(), -1);
            if(jfs !=''){
              var getScript = classb.fields[gettargetscript]['scriptCode'];
              if(getScript){
               getScript = getScript.replace("{settings}", jfs);
               $('[data-role="appendscriptt"]').html('<script>'+getScript+'</script>')
              }
            }else{
              $('[data-role="appendscriptt"]').html(classb.fields[gettargetscript]['script'])
            }
            
            //classb.columnResize()
            
           }
           //$('.customselect').selectpicker('refresh');
			
			    //callColorPicker();
      },
      createHTMl:function(data, child){

        var ihtml = '';
        
         $.each(data, function(key, val){ 
             var studioClassApply = '';
                if(val.studioclass){
                     studioClassApply +=' '+ val.studioclass;
                  }
                  if(val.studioconclass){
                     studioClassApply +=' '+ val.studioconclass+' ';
                  }
                  if(val.studiotextclass){
                     studioClassApply +=' '+ val.studiotextclass+' ';
                  }
                  if(val.studiobuttonclass){
                     studioClassApply +=' '+ val.studiobuttonclass+' ';
                  }
                  if(val.studiofieldclass){
                     studioClassApply +=' '+ val.studiofieldclass+' ';
                  }
                  
                if(val.columnClass){
                    var columnclass = val.columnClass;
                }else{
                   var columnclass = 'col-sm-6 ';
                }
               
                 var extradata = ''
                  if(val.type=="field"){
                      extradata = 'data-fcontrol="input"';
                   }
                   if(val.type=="text"){
                      extradata = 'data-fcontrol="label"';
                   }   
                  
                var html =''
                if(val){
                   html = val.text
                if(val.type == "spacer" || val.type == "row"){
                     html = '';
                }
                
                if(val.mainfield=="field"){
                       var filedss = val.datakey
                       if(val.children){
                         var haveinputgroup = val.children.length
                           html = '';
                          if(haveinputgroup != 1){
                             html = "<div class='row row-input-group'>"
                          }
                            $.each(val.children, function (k, v) {
                              if(v.columnClass){
                                  var scolumnclass = v.columnClass;
                              }else{
                                 var scolumnclass = 'col-sm-6 ';
                              }      
                              
                              if (v.type == "input") {
                              /*	html += "<span class='input-group-addon icon_mouse' data-selector='" + v.rowid + "' ><i data-role='previewicon' class='fa fa-mouse-pointer'></i></span>";
                                html += "<span class='input-group-addon choose_your_option' data-selector='" + v.rowid + "' >Choose your option</span>";*/
                                html += "<div class='column "+scolumnclass+"'  data-selector='" + v.rowid + "'><input type='" + v.ftype + "' class='form-control "+studioClassApply+"' placeholder='" + v.ftype + "' aria-describedby='basic-addon1'></div>";
                              }
                              if (v.type == "textarea") {
                                html += "<div class='column "+scolumnclass+"'  data-selector='" + v.rowid + "'><textarea placeholder='textarea' name='textarea' class='form-control "+studioClassApply+"'></textarea></div>";
                              }
                              if (v.type == "select" || v.type == "multiselect") {
                                html += "<div class='column "+scolumnclass+"' data-selector='" + v.rowid + "'><select data-content='Please select an option' class='form-control "+studioClassApply+"' name='select'><option selected='selected' value='0' >--- Select ---</option><option value='Option 1'>Option 1</option><option value='Option 2'>Option 2</option><option value='Option 3'>Option 3</option></select></div>";
                              }
                              if (v.type != "input") {
                                var cwidth = ''
                                if(v.width){
                                    cwidth = 'width:'+ v.width+'%; ';
                                }
                                if (v.type == 'spacer') {
                                  html += "<div class='column "+scolumnclass+studioClassApply+"' data-selector='" + v.rowid + "' style='"+cwidth+"' ><i data-role='previewicon'></i></div>";
                                } else {
                                  html += "<div class='column "+scolumnclass+studioClassApply+"' data-selector='" + v.rowid + "' style='"+cwidth+"'><i data-role='previewicon' class='" + v.class + " '></i></div>";
                                }
                              }
                            });
                            
                            
                            if(haveinputgroup != 1){
                               html += "</div>";
                            }
                            
                            
                       }else{
                         
                         html = classb.fields[filedss]['html'];
                       }
                }
                
                if(val.type=="icon" || val.type=="required" ||  val.type=="tooltip"){
                      if(val.studioclass && child){
                         html = '<i class="'+val.class+' '+val.studioclass+'" data-selector="'+val.rowid+'"></i> ';
                      }else{
                         html = '<i class="'+val.class+'"></i> ';
                      }
                      
                }
                 if(val.type=="button" ){
                   if(child){
                        var buttonClass = '';
                         html = '<button class="btn" type="button">Button</button>';
                      }else{
                         html = '<button class="btn" type="button">Button</button>';
                      }
                   
                    
                   
                 }
                if(val.children){
                    if(!val.mainfield){
                      html += classb.createHTMl(val.children, 'childs')
                    }
                }
                
                if(val.studioConPadding){
                    columnclass = columnclass+' '+ val.studioConPadding+' ';
                 
                }
                
                if(val.type=="row"){
                    if(val.eqheight){
                      studioClassApply +=' fieldrow-eq-height '
                    }
                    ihtml +='<div class="row rowTest'+studioClassApply+'  " data-selector="'+val.rowid+'" '+extradata+'>'+html+'</div>'; 
                }else if(val.type=="field" && !val.mainfield){
                   ihtml += html
                }else{
                  ihtml +='<div class="'+columnclass+'  column" data-selector="'+val.rowid+'" '+extradata+'><div class="columnTest fcontainer '+studioClassApply+'">'+html+'</div></div>'; 
                }
              }
         })
         
        
         return ihtml;
      },
      compile:function(){
        	less.render([classb.less.replace("{{{lesscss}}}", '')].join("\n\n")).then(
                
              function (output) {
               // alert(output.css);
                console.log(output);
                
                classb.sl.cssstyle.html(output.css)
                
              }, function (error) {
                //bootstrap.response("Error", error);
                  alert(error);
              });
        
        
          
          
      },
			updatecss:function(notcss){
				
        if(!notcss){
          
				  classb.runcss();
        }
        //alert(JSON.stringify(classb.generalSetting.csssetting))
        
       var seen = [];
       var json = JSON.stringify(classb.generalSetting.csssetting, function(key, val) {
           if(key!='nestedSortable-item'){
            
             if (typeof val == "object") {
                  if (seen.indexOf(val) >= 0)
                      return
                  seen.push(val)
              }
              return val
            }
        })
        classb.sl.exportjson.val(json)

			},
      createLayers:function(data, child){
         var ihtml = '';
                    var layershtml = $('<div/>')
                   
                    $.each(data, function(i, val){ 
                    
                        if(val.field){
                          var htmls = $(classb.createfieldli(val.rowid, val.type, val.text, val.class, val.datakey, val));
                        }else{
                          var htmls = $(classb.createRowli(val.rowid, val.type, val.text, val.class))
                        }
                        if(val.type=='icon' || val.type=='required' || val.type=='tooltip' || val.type=='button'){
                            htmls.addClass('mjs-nestedSortable-no-nesting')
                        }
                        
                         $.each(val, function(d, dv){
                                if(d!="children" || d!="rowid" || d !='mainfield'){
                                  var datad = 'data-'+d
                                   htmls.attr(datad, dv)
                                }
                                if(d =='mainfield'){
                                   htmls.attr('data-mainfield', dv);
                                }
                        })  
                      
                       if(val.children){
                          var subchild = classb.createLayers(val.children)
                          htmls.find('ol').first().append(subchild)
                       }                   
                       
                       
                       layershtml.append(htmls)
                       
                    })
                     
                    ihtml += layershtml.html()
                  
         return ihtml;
      
      },
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
        
				if(getjsonvale){
          classb.generalSetting.csssetting = JSON.parse(getjsonvale);
          var saveddata = JSON.parse(getjsonvale);
          var layers = saveddata['htmloption']['layers']
         var fieldType = saveddata['htmloption']['fieldType']
          if(layers){
            $.each(layers, function(v, val){
                 $('[data-role="builderrow"]').html(classb.createLayers(layers))
            })
          }
         
          if(fieldType){
                 $('[data-role="fieldsType"]').val(fieldType)
                    var targetoptions = classb.fields[fieldType]['options'];
                            $.get("/app/Modules/Studios/Resources/Views/assets/fields-builder2/optionfield/"+targetoptions, function(data){
                            $('[data-role="options"]').html(data)
                            $('.customselect').selectpicker('refresh');
                    });
                    
                    
          }
          
          /*if(saveddata.css){
            $.each(saveddata.css, function(io, iv){
              iv = iv.replace('px','');
              $('[data-css="'+io+'"][data-selector]').not('[data-tagtype]').val(iv)
              if($('[data-css="'+io+'"]').is('.settingSlider')){
                $('[data-css="'+io+'"].settingSlider').not('[data-tagtype]').slider('value', iv);
              }
              if($('[data-textcolor="'+io+'"]').is('[data-textcolor]')){
                $('[data-css="'+io+'"]').not('[data-tagtype]').val(iv)
              }
            });
          }
          
          $('[type="checkbox"][data-cssenable]').prop("checked", false);
          
          if(saveddata.htmloption){
               var option = ''
            
            
              $.each(saveddata.htmloption, function(key, val){
                    $.each(val, function(k, v){
                       if(k=="class" || k=="field" ){
                         $.each(v, function(t, cs){
                           if(cs){
                             $('[role="tabpanel"]#'+key+' [data-htmlclass="'+k+'"][data-selector="'+t+'"]').val(cs)
                             $('[role="tabpanel"]#'+key+' select[data-html="'+t+'"]').val(cs)
                             $('[role="tabpanel"]#'+key+' [type="text"][data-html="'+t+'"]').val(cs)
                             $('[role="tabpanel"]#'+key+' [type="checkbox"][data-cssenable="'+t+'"]').prop("checked", true);
                             if(t=='icon'){
                                 $('[role="tabpanel"]#'+key+' [data-iconview="'+t+'"]').html('<i class="'+cs+'"></i>');
                                 $('[role="tabpanel"]#'+key+'  [data-html="'+t+'"][data-key="field"]').val(cs)
                             }
                            }
                         })
                       }else if(k=="editable"){
                          $.each(v, function(t, cs){
                              if(cs){
                                $('[role="tabpanel"]#'+key+' [type="radio"][data-csstype="'+t+'"][data-key="editable"][value="edit"]').prop("checked", true);
                               }
                          })
                        
                       }else{
                         if(saveddata.htmloption[key][k]){
                             $('[role="tabpanel"]#'+key+' [type="checkbox"][data-cssenable="'+k+'"]').prop("checked", true);
                          }
                        
                        if(!v['icon']){
                          $('[role="tabpanel"]#'+key+' [data-html="'+k+'"]').val(v);
                        }
                       } 
                    })
              })
              
              $('.customselect').selectpicker('refresh');
           }*/
          
          
          classb.updatecss()
          enablepanelSection ()
          $('.customselect').selectpicker('refresh');
				}
			},
			csspropa:{
				boxshadow:function(){

				}
			},
       addpopup:function(target){
        var type = target.data('addpopup');
        if(!type){
          var type = target.data('editpopup');
        }
        var html ='<iframe data-viewiframe="iframe" src="'+type+'-studio.html"></iframe>'   
        bootbox.dialog({
          message: html,
          title: type+" Studio",
          className:"bigpopup"
        })
        
        $('[data-viewiframe="iframe"]').load();
        
      },
      createRowli:function(rowID, type, text, classas, mdata){
            var htmls = $('[data-template="row"]').html();
            if(rowID==null || rowID ==''){
              rowID = _.uniqueId('col_');
            }
            htmls = htmls.replace(/{id}/g, rowID);
            htmls = htmls.replace(/{type}/g, type);
            htmls = htmls.replace(/{text}/g, text);
            htmls = htmls.replace(/{classas}/g, classas);
            
            var creahtmls = $('<div />').append(htmls)
            if(type=='button' || type=='spacer'){
                  creahtmls.find('[data-type="edit"]').remove()
            }
            
            creahtmls.remove()
            
            return creahtmls.html();
        },
       createfieldli:function(rowID, type, text, classas, key, val){
            var htmls = $('[data-template="field"]').html();
            if(rowID==null || rowID ==''){
               rowID = _.uniqueId('field_');
            }
            htmls = htmls.replace(/{key}/g, key);
            htmls = htmls.replace(/{id}/g, rowID);
            htmls = htmls.replace(/{type}/g, type);
            htmls = htmls.replace(/{text}/g, text);
            htmls = htmls.replace(/{classas}/g, classas);
            if(val){
              if(val.target){
                  htmls = htmls.replace(/{target}/g, val.target);
              }else{
                  htmls = htmls.replace(/{target}/g, type);
              }
            }else{
                 htmls = htmls.replace(/{target}/g, type);
            }
            var creahtmls = $('<div />').append(htmls)
            if(val){
              if(val.ftype){
                  creahtmls.find('li').attr('data-ftype', val.ftype)
              }
              
            }
            
            return creahtmls.html();
        },
        updateSettingtab:function(type, targetlayesr){
         
          var targetId = $('[data-rowid="'+targetlayesr+'"]');
          var data = classb.settingUpdate[type];
         
          if(type=='text'){
               classb.updatelable(targetlayesr, type);
          }
          
          if(type=='row'){
               classb.updatelable(targetlayesr, 'eqheight');
          }
          
          if(targetlayesr){
              $('[data-switchStudio]').data('targetLayers', targetlayesr);
              $('[data-studioreset]').data('resettarget', targetlayesr)
          }  
        
          
          if(data){
            var jsontab = data['tabjson']
            if(jsontab){
              $('[data-fieldactive]').addClass('hide disabled');
              $.each(jsontab, function(k, v){
               
                 $('[data-fieldactive="'+v+'"]').removeClass('hide').removeClass('disabled');
                 if(!targetlayesr){
                    t = 'tests'
                 }else{
                    t= targetlayesr
                 }
                 var studiocheked = $('[data-rowid="'+t+'"]').data('studio'+v)
                  if(studiocheked){
                     $('[data-studio="'+v+'"]').val(studiocheked).change()
                  }else{
                    $('[data-studio="'+v+'"]').val('no').change()
                  }
                  var studiojson = $('[data-rowid="'+t+'"]').data(v+'json')
                  if(studiojson){
                     $('[data-studioreset="'+v+'"]').data('resetjson', studiojson)
                  }
                 if(v=='iconSetting'){
                          var haveicon  = $('[data-rowid="'+t+'"]').data('class')
                          if(!haveicon){
                              haveicon = '';
                           }
                          $('.geticonseting').val(haveicon).data('id', t)
                          $('#icons').trigger('click')
                 }
                 
                 
              })
            }
            if(data['name']){
              $('[data-selectedLayers="name"]').html(data['name']);
              if(type=="inputsetting"){
                  $('li[data-fieldactive="setting"] a').text(data['name'])
              }
            }else{
              $('[data-selectedLayers="name"]').html('Layers Name Will Come here');
            }
          }else{
            $('[data-selectedLayers="name"]').html('Layers Name Will Come here')
          }
          
          
          
            
          
        },
        retunjson:function(selector){
           var data = []
           selector.each(function(index, element) {
                   var getdetail = $.extend({}, $(this).data());
                  if($(this).children('ol').is('ol')){
                    getdetail['children'] = classb.retunjson($(this).children('ol').children('li'))
                   }
                  if(getdetail){
                    data.push(getdetail);
                  }
            });
            return data;
            
        },
        updatelayears:function(update){
          if(!classb.generalSetting.csssetting.htmloption['layers']){
              classb.generalSetting.csssetting.htmloption['layers'] = {}
          }
          
          arraied =  $('[data-role="builderrow"]').nestedSortable('toHierarchy', {startDepthCount: 0});
          
         // var exportdata = classb.retunjson($('[data-role="builderrow"] > li ol > li')) 
          
          
          classb.generalSetting.csssetting.htmloption['layers'] = arraied;
          if(!update){
            classb.updatecss();
          }
        },
        columnResize:function(){
            $('.ge-canvas .column').resizable({
                   grid: [0, 0],
                   ghost: true,
                   helper: "ui-resizable-helper",
                   handles: 'e',
                    start: function (event, ui) {
                       ui.element.handleTarget = $(event.originalEvent.target);
                        currentLeft = $(ui.element).offset().left
                       
                    },
                   create: function(e, ui) {
                            var parentW = $(this).parent().width();
                            var newSizes = 0
                            
                        },
                  resize: function (event, ui) {
                       var thisCol = $(this);
                       var container = thisCol.parent();
                         var newWidth = ui.size.width + 12;
                       var cellPercentWidth = 100 * newWidth / container.innerWidth();
                      
                      // ui.originalElement.css('width', cellPercentWidth + '%');
                       newSizes = getClosest(gridSystem, cellPercentWidth);
                       var curColClass = colClasses[curColClassIndex];
                       
                       setColSize($(this), curColClass, Math.min(newSizes, MAX_COL_SIZE));
                  },
                  stop:function (event, ui) {
                       var thisCol = $(this);
                       var container = thisCol.parent();
                       classb.updatelayears('update')
                       
                      // $('.infom').html(ui.size.width+' BNo '+ui.originalSize.width)
                       
                       
                         
                         
                      
                      $(this).removeAttr('style');
                  }
                    
              })
             
             $('.ge-canvas .row').sortable({
                items: '> .column',
                //connectWith: '.ge-canvas > .row',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
                revert: true,
                update: function( event, ui ) {
                     classb.updateSortable(event, ui.item)
                },
                receive: function(event, ui){
                     classb.receiveSortable(event, ui.item)
                }
            }).disableSelection();
              
              $('.ge-canvas .column .input-group-addon').resizable({
                   handles: 'e, w',
                   stop: function(event, ui) {
                       var width = ui.size.width;
                       var height = ui.size.height;
                       var uiid = $(this).attr('data-selector')
                      
                       
                       var screenWidth = $(this).closest('.fcontainer').width();
                       var percentage = ( screenWidth - width ) / screenWidth ;
                       $('[data-rowid="'+uiid+'"]').data('width', percentage)
                       $(this).width(percentage+'%')
                       classb.updatelayears('noupdate') 
                      
                   }
              }).on('resize', function() {
                $(this).css({
                  left: 0
                });
              });
              
              
              $('.ge-canvas  .input-group').sortable({
                items: '> .input-group-addon, > .form-control',
                cancel: ".removecomponent",
                revert: true,
                update: function( event, ui ) {
                     classb.updateSortable(event, ui.item)
                },
                receive: function(event, ui){
                     classb.receiveSortable(event, ui.item)
                }
            }).disableSelection();
              
              function sortStart(e, ui) {
                ui.placeholder.css({ height: ui.item.outerHeight()});
            }
              
        },
        updatelable:function(targetid, type){
          var target =  $('[data-rowid="'+targetid+'"]');
          $('[data-layerkey="'+type+'"]').data('keytarget', targetid).val(target.data(type));
        },
        updatejson:function(val, html, key, mainkey, mainparentkey, subkey){
               // var mainparentkey = $(this).attr('data-mainparentkey');
                //var html = $(this).data('html'); 
                //var htmlkey = $(this).data('key'); 
                //var mainkey = $(this).data('mainkey'); 
                //var val = $(this).val()
                
                if(html){
                     if(mainkey){
                          var activehtmlRole = mainkey;    
                       }else{
                         //var activehtmlRole = $('.active > [data-rolehtml]').data('rolehtml');
                         var activehtmlRole = activemainKey;
                         $('.infor').html('s'+activehtmlRole)
                       }
                   
                    if(!classb.generalSetting.csssetting.htmloption[activehtmlRole]){
                        classb.generalSetting.csssetting.htmloption[activehtmlRole] = {}
                     }
                     
                     if(val==""){
                       val = false;
                     }
                     if(key){
                          if(!classb.generalSetting.csssetting.htmloption[activehtmlRole][key]){
                              classb.generalSetting.csssetting.htmloption[activehtmlRole][key] = {} 
                          }
                          if(subkey){
                               if(!classb.generalSetting.csssetting.htmloption[activehtmlRole][key][subkey]){
                                  classb.generalSetting.csssetting.htmloption[activehtmlRole][key][subkey]={}
                               } 
                               classb.generalSetting.csssetting.htmloption[activehtmlRole][key][subkey][html] = val
							   
							  
                           }else{
                          
                          classb.generalSetting.csssetting.htmloption[activehtmlRole][key][html] = val;
                          }
                     }else{
                       
                        classb.generalSetting.csssetting.htmloption[activehtmlRole][html] = val;
                     }
                  
                }else{
                  if(mainparentkey){
                    classb.generalSetting.csssetting[mainparentkey] = val;
                  }
                }
                classb.updatecss()
        },
        fucntionfield:function(key, val, keytype){
             var getoptionsHtml = $('<div/>').append($('[data-template="options"]').html())
                    var fieldhtml = getoptionsHtml.find('[data-fieldtype="'+val.type+'"]').html()
                                  fieldhtml = fieldhtml.replace(/{key}/g, key);
                                  fieldhtml = fieldhtml.replace(/{title}/g, val.title);
                                  fieldhtml = fieldhtml.replace(/{value}/g, val.value);
                                  fieldhtml = fieldhtml.replace(/{keytype}/g, keytype);
              if(val.option){
                  var option = ''
                  $.each(val.option, function(ov, ot){
                       option +='<option value="'+ov+'" >'+ot+'</option>';
                  })
                  fieldhtml = fieldhtml.replace(/{option}/g, option); 
              }
               if(val.dataattr){
                    fieldhtml = fieldhtml.replace(/{dataattr}/g, val.dataattr); 
               }else{
                   fieldhtml = fieldhtml.replace(/{dataattr}/g, ''); 
               }
                             
              return  fieldhtml
              
           
        },
        updateSortable : function (event, targets){
              var targetId = targets.data('selector');  
             
              var parentId = targets.parent('[data-selector]').data('selector'); 
              if(!parentId){
                    parentId = targets.parent().parent().closest('[data-selector]').data('selector'); 
              }
             
              var target = $('[data-rowid="'+parentId+'"] > ol');
              targetHTml = target.clone().appendTo('<div />');
              target.empty()
              
            
              if($('[data-selector="'+parentId+'"]').children('.fcontainer').is('.fcontainer')){
                var eachselector = $('[data-selector="'+parentId+'"] > .fcontainer').children('[data-selector]');
               
                if(!eachselector.attr('data-selector')){
                     eachselector = $('[data-selector="'+parentId+'"] > .fcontainer').find('.row-input-group').children('[data-selector]');  
                }
                
              }else if(targets.closest('.row-input-group').is('.row-input-group')){
                var eachselector = targets.closest('.row-input-group').children('[data-selector]');  
                
              }else {
                var eachselector = $('[data-selector="'+parentId+'"]').children('[data-selector]') 
               
              }
             
              
              eachselector.each(function(index, element) {
                   thistarget =  $(this).data('selector');
                   targetHTml.find('[data-rowid="'+thistarget+'"]').clone().appendTo(target)
							});   
              
               classb.updatelayears('noupdate')           
           },
           
           receiveSortable: function (event, targets){
              var targetId = targets.data('selector'); 
            
              var parentId = targets.parent('[data-selector]').data('selector'); 
              if(!parentId){
                    parentId = targets.parent().closest('[data-selector]').data('selector'); 
              }
              var target = $('[data-rowid="'+parentId+'"] > ol');
              
              if(!target.is('ol')){
                    $('[data-rowid="'+parentId+'"]').append('<ol />')
                    target = $('[data-rowid="'+parentId+'"] > ol');
              }
              
              $('.infom').html('Resive '+parentId)
               
              $('[data-rowid="'+targetId+'"]').appendTo(target);
              $('[data-rowid="'+parentId+'"] > ol').find('[data-rowid="'+targetId+'"]').not($('[data-rowid="'+targetId+'"]').first()).remove();
              classb.updatelayears('noupdate') 
           },
           updateCollapse:function(targetShow){
                  $('[role="studioPanel"]').not(targetShow).collapse('hide')
                  $(targetShow).collapse('show')
                  activemainKey = $(targetShow).data('rolehtml');
           }
           
      
		}
		classb.generalSetting.csssetting.fieldname = 'Field Name';

    
    $.get("/appdata/app/Modules/Studio/Resources/Views/public/css/generatedcss.less", function(data){
				classb.less = data;
				
	});	
  
   var slected = $('[data-role="fieldsType"]').val();
  
  $.get("/app/Modules/Studios/Resources/Views/assets/fields-builder2/js/fieldjson.json", function(data){
        classb.fields = data 
        var optionss = '';
        $.each(classb.fields, function(key, val){
          optionss += '<option value="'+key+'" data-icon="'+val.class+' iconselectButton">'+val.text+'</option>';
        })
        $('[data-role="fieldsType"]').html(optionss);
        $('[data-role="fieldsType"]').val(slected);
        $('.customselect').selectpicker('refresh');
         classb.editReload();
      
	});	
  
  
	
  $('ol[data-role="builderrow"]').nestedSortable({
                  forcePlaceholderSize: true,
                  handle: 'div',
                  helper:	'clone',
                  items: 'li:not(".nodrag")',
                  opacity: .6,
                  placeholder: 'placeholder',
                  revert: 250,
                  tabSize: 25,
                  tolerance: 'pointer',
                  toleranceElement: '> div',
                  maxLevels: 3,
                  expandOnHover: 700,
                  startCollapsed: false,
                  protectRoot:true,
                  cancel: ".removecomponent, [data-role='item']",
                  create: function( event, ui ) {
                      var resivenew;
                  },
                  isAllowed:function (placeholder, placeholderParent, currentItem) { 
                      
                      if(placeholderParent){
                         if(currentItem.data('field') == 'input' && !currentItem.data('mainfield') &&  placeholderParent.data('type') !='field'){
                           //$('.infor').html('first '+ currentItem.data('type') + placeholderParent.data('type'))
                            return false; 
                         }else if(placeholderParent.data('type') != 'field' && currentItem.data('field') && !currentItem.data('mainfield')){
                            //$('.infor').html('field' +placeholderParent.data('type'))
                               return false; 
                        }else{
                            return true; 
                        }
                      }else{
                         if(currentItem.data('field') == 'input' && currentItem.data('mainfield') != 'field'){
                              
                              return false; 
                              
                          }else{
                              return true; 
                       
                          } 
                      }
                      
                     
                  },
                  change:function(event, ui){
                      
                       //resivenew = ui.item.parent().parent('[data-rowid]').data('rowid')  
                  },
                  update: function(event, ui){
                     classb.updatelayears()
                  },
                  stop:function(event, ui){
                     
                  }
                  
              })
              
       
    

              
    var containerStudios = $('.insetcontainerStodio').BBStudio({selector:'#boostrapGrid .test', type:"inline", container: '.insetcontainerStodio'});          
    var textStudios = $('.insetTextStodio').BBStudio({selector:'#boostrapGrid .test', studio: 'text', type:"inline", container: '.insetTextStodio'}); 
    var fieldsStudios = $('.insetFieldStodio').BBStudio({selector:'#boostrapGrid .test', studio: 'fields', type:"inline", container: '.insetFieldStodio'});           
    var buttonStudios = $('.insetbuttonStyle').BBStudio({selector:'#boostrapGrid .test', studio: 'button', type:"inline", container: '.insetbuttonStyle'});           
   
   classb.updateSettingtab('row', 'row1');
   classb.updateCollapse('#layers')
       
   
	
  
  $('[data-additems]').click(function(){  
        var gettype = $(this).data('type')
        var gettext = $(this).data('text')
        var getclass = $(this).data('class')
        
        if(gettype=='layersoptions'){
          
          classb.updateCollapse('#selected_layer')
          return false;
        }
        
        
        var htmls = $(classb.createRowli(null, gettype, gettext, getclass))
        if(gettype=='icon' || gettype=='required' || gettype=='tooltip' || gettype=='button'){
            htmls.addClass('mjs-nestedSortable-no-nesting')
        }
        if(gettype=="row"){
          $('[data-role="builderrow"]').first().append(htmls)  
        }else{
          $('[data-role="builderrow"] ol').first().append(htmls)
        }
        classb.updatelayears()
  });
  

  
  $('body').on('click', '[data-ctarget]', function(e){
        var ctarget = $(this).data('ctarget');
				var type = $(this).data('type');
        var targetype = $(this).data('targetype');
        classb.updateSettingtab(targetype, ctarget);
        if(type=="Remove"){
          $('[data-rowid="'+ctarget+'"]').remove();
          classb.updatelayears();
        }
        
        if(type=="edit"){
          if(targetype=='icon' || targetype=='required' || targetype=='tooltip' ){
              classb.updateCollapse('#selected_layer')
              $('[href="#iconSettingTab"]').trigger('click')
              
          }
          if(targetype=='text'){
              classb.updateCollapse('#selected_layer')
              $('[href="#textsettingTab"]').trigger('click')
            
          }
          if(targetype=='field'){
             $('[href="#functions"]').trigger('click')
          }
          if(targetype=='inputsetting'){
              classb.updateCollapse('#selected_layer')
              $('[href="#inputSettingTab"]').trigger('click')
              
          }
          
        }
        
      
        if(type == 'openStudio'){
          if(targetype=='row' || targetype=='text' || targetype=='inputsetting' || targetype=='icon' || targetype=='required' || targetype=='tooltip' || targetype=="button"){
             
              classb.updateCollapse('#selected_layer')
              $('[href="#containerStyletab"]').trigger('click')
             
             //studioupdates('[data-selector="'+ctarget+'"]', '[data-rowid="'+ctarget+'"]')
             $('[data-inset="layerstab"] a').data('selectedlayes', ctarget)
            
            
            
            
          }else{
            
            $(this).BBStudio({
                selector: '#boostrapGrid [data-selector="'+ctarget+'"]',
                studio: 'container',
                container: 'body',
                containerClass:"bodypopup",
                button: $(this),
                callback:function(cass){
                   // alert(cass)
                   $('[data-rowid="'+ctarget+'"]').data('studioclass', cass);
               
                }
            })
           }
        }
  })
  
     
        
  
  $('body').on('dblclick', '[data-selector], [data-rowid] .rowLine', function(e){
              
              if($(e.target).is('[data-selector]')){
                var ctarget =  $(e.target).data('selector');
              }else if($(e.target).is('.rowLine')){
                var ctarget =  $(e.target).closest('[data-rowid]').data('rowid');
               
              }else{
                var  ctarget = $(e.target).closest('[data-selector]').data('selector')
              }
              if(!ctarget){
                  ctarget = $(e.target).closest('[data-rowid]').data('rowid')
              }
              
              if($('[data-rowid="'+ctarget+'"]').is('[data-mainfield]')){
                 var typename  = 'inputsetting';
                 
              }else if($('[data-rowid="'+ctarget+'"]').is('[data-ftype]')){
                var typename  = 'inputsetting';
              }else {
                var typename  = $('[data-rowid="'+ctarget+'"]').attr('data-type');
              }
              
             
             $('[data-inset="layerstab"] a').data('selectedlayes', ctarget)
             
             classb.updateSettingtab(typename, ctarget);
             classb.updateCollapse('#selected_layer')
             $('[data-inset="layerstab"]').find("li:not('.hide')").first().find('a:first').click()
     })
  
  
 $('body').on('click', '[data-selector]', function(e, i){
					var getselecte = $(e.target).closest('[data-selector]').data('selector');
					$('[data-selector]').removeClass('active');
				 $('[data-rowid] .rowLine').removeClass('active')
         if(getselecte){
							$(e.target).closest('[data-selector]').addClass('active')
							$('[data-rowid="'+getselecte+'"] > .rowLine').addClass('active')
				 }
		 }).on("mouseover", '[data-selector]', function(e, i){
					var getselecte = $(e.target).closest('[data-selector]').data('selector');
					$('[data-selector]').removeClass('hover')
					$('.component-area').removeClass('hover');
					 $('[data-rowid] .rowLine').removeClass('hover')
            
				 if(getselecte){
							$(e.target).closest('[data-selector]').addClass('hover')
							$('[data-rowid="'+getselecte+'"] > .rowLine').addClass('hover')
             
				 }
		 }).on("mouseout", '.ge-canvas, [data-role="builderrow"]', function(e, i){
					 $('[data-selector]').removeClass('hover')
					 $('.component-area').removeClass('hover');
					 $('[data-rowid] .rowLine').removeClass('hover')
		 }).on('mouseover','.rowData li .rowLine',function(){
				 var getselecte = $(this).closest('[data-rowid]').data('rowid')
					var ifitem =   $(this).closest('[data-rowid]').data('role');
         $('[data-selector="'+getselecte+'"]').mouseover()
         
		}).on('click','.rowData li .rowLine',function(){
				 var getselecte = $(this).closest('[data-rowid]').data('rowid')
					var ifitem =   $(this).closest('[data-rowid]').data('role');
         $('[data-selector="'+getselecte+'"]').click();
		})
 
 $('body').on('click', '[data-backBreadcrumb]', function(){
          var tragettab = $(this).attr('data-backBreadcrumb');
          classb.updateCollapse('#'+tragettab)
 
 });
  
  
  $('body').on('change', '[data-role="fieldsType"]', function(){
      var thisval = $(this).val();
        if(classb.fields){
                         
                         if(classb.fields[thisval]){
                            var cereateField  =  $(classb.createfieldli(null, classb.fields[thisval].type, classb.fields[thisval].text, classb.fields[thisval].class, thisval, classb.fields[thisval]));
                             cereateField.attr('data-mainfield', 'field');
                             if(!classb.fields[thisval].allowsub){
                              cereateField.addClass('mjs-nestedSortable-no-nesting')
                             }
                           if($('[data-role="builderrow"] [data-mainfield="field"]').is('[data-mainfield="field"]')){
                               $('[data-role="builderrow"] [data-mainfield="field"]').replaceWith(cereateField);
                           }else{
                              $('[data-role="builderrow"] ol').first().append(cereateField);
                            }
                             
                         };
                         
                         if(classb.fields[thisval]['sub']){
                           
                            $.each(classb.fields[thisval]['sub'], function(key, val){
                              var htmlsd = $(classb.createfieldli(null, val.type, val.text, val.class, key, val))
                              $('[data-role="builderrow"] [data-mainfield="field"] ol').first().append(htmlsd)   
                            })
                         }
                         
                        if(classb.fields[thisval]['function']){
                              var targetfunction = classb.fields[thisval]['function']
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
                             $('[data-role="insetFunctions"]').html(fucntionHTml.html())
                        }
                        
                        if(classb.fields[thisval]['options']){
                            var targetoptions = classb.fields[thisval]['options'];
                            $.get("/app/Modules/Studios/Resources/Views/assets/fields-builder2/optionfield/"+targetoptions, function(data){
                                $('[data-role="options"]').html(data)
                                $('.customselect').selectpicker('refresh');
                            });
                           
                            
                            classb.generalSetting.csssetting.htmloption['functions'] = null
                            classb.generalSetting.csssetting.htmloption['selected_layer'] = null
                            
                            
                        }
                        
                         if(classb.fields[thisval]['tabs']){
                           classb.settingUpdate.inputsetting.name = classb.fields[thisval].text
                           classb.settingUpdate.inputsetting.tabjson = classb.fields[thisval]['tabs'];
                           classb.updateSettingtab('inputsetting');
                         }
                         
                        $('.customselect').selectpicker('refresh'); 
                        
                         
                         
      }
      
      classb.generalSetting.csssetting.htmloption['fieldType'] = thisval;
      classb.updatelayears();
    
  })
  
  var colClasses = ['col-md-', 'col-sm-', 'col-xs-'];
  var curColClassIndex = 0; // Index of the column class we are manipulating currently
        var MAX_COL_SIZE = 12;
   // Bootstrap grid system array
        var gridSystem = [{
            grid: 8.33333333,
            col: 1
        }, {
            grid: 16.66666667,
            col: 2
        }, {
            grid: 25,
            col: 3
        }, {
            grid: 33.33333333,
            col: 4
        }, {
            grid: 41.66666667,
            col: 5
        }, {
            grid: 50,
            col: 6
        }, {
            grid: 58.33333333,
            col: 7
        }, {
            grid: 66.66666667,
            col: 8
        }, {
            grid: 75,
            col: 9
        }, {
            grid: 83.33333333,
            col: 10
        }, {
            grid: 91.66666667,
            col: 11
        }, {
            grid: 100,
            col: 12
        }, {
            grid: 10000,
            col: 10000
        }];
        
        // Bootstrap grid system array
        var gridSystemOffset = [{
            grid: 0.33333333,
            col: 0
        },{
            grid: 8.33333333,
            col: 1
        }, {
            grid: 16.66666667,
            col: 2
        }, {
            grid: 25,
            col: 3
        }, {
            grid: 33.33333333,
            col: 4
        }, {
            grid: 41.66666667,
            col: 5
        }, {
            grid: 50,
            col: 6
        }, {
            grid: 58.33333333,
            col: 7
        }, {
            grid: 66.66666667,
            col: 8
        }, {
            grid: 75,
            col: 9
        }, {
            grid: 83.33333333,
            col: 10
        }, {
            grid: 91.66666667,
            col: 11
        }, {
            grid: 100,
            col: 12
        }, {
            grid: 10000,
            col: 10000
        }];

        // find the closest number from Bootstrap grid
        function getClosest(arr, value) {
            var closest, mindiff = null;

            for (var i = 0; i < arr.length; ++i) {
                var diff = Math.abs(arr[i].grid - value);

                if (mindiff === null || diff < mindiff) {
                    closest = i;
                    mindiff = diff;
                } else {
                    return arr[closest]['col'];
                }
            }
            return null;
        }
  
  function setColSize(col, colClass, size) {
            
            var re = new RegExp('(' + colClass + '(\\d+))', 'i');
            var reResult = re.exec(col.attr('class'));
            if (reResult && parseInt(reResult[2]) !== size) {
                col.switchClass(reResult[1], colClass + size, 50);
            } else {
                col.addClass(colClass + size);
            }
            
            var getthisId = col.data('selector');
            if(getthisId){
            $('[data-rowid="'+getthisId+'"]').data('columnClass', colClass + size)
            }
            
            
        }
  

   
	$('body').on('change', 'select[data-selector]', function(){
    var thiscsspro = $(this).attr('data-css');
    var html = $(this).data('html'); 
    var htmlkey = $(this).data('key'); 
		var mainkey = $(this).data('mainkey');
    var subkey = $(this).data('subkey'); 
    var thisval = $(this).val()
    classb.updatejson(thisval, html, htmlkey, mainkey, thiscsspro, subkey);
	})
  
  $('body').on('keyup', '[data-html]', function(){	
      var thisval = $(this).val()
      var html = $(this).data('html');
      var htmlkey = $(this).data('key'); 
      var mainkey = $(this).data('mainkey');
      var subkey = $(this).data('subkey'); 
      classb.updatejson(thisval, html , htmlkey, mainkey,'',subkey);
  })
  
  
  $('body').on('keyup', '[data-role="classname"]', function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.updatejson(classnames, '' , '', '', 'fieldname');
	})
  
  $('body').on('click', '[data-addpopup], [data-editpopup]', function(){
        classb.addpopup($(this))
  })


 
 $('body').on('change', '[data-cssenable]', function(){	 
        var getistrue = $(this).is(':checked')
        var getenalbe = $(this).data('getcontainer');
        var cssenable = $(this).data('cssenable');
        var htmlkey = $(this).data('key');
        var ifIcon = $(this).data('htmltype');
        var cluset = $(this).closest('.row.formrow');
        
        
        var activehtmlRole = activemainKey;
       
       
         if(!classb.generalSetting.csssetting.htmloption[activehtmlRole]){
                  classb.generalSetting.csssetting.htmloption[activehtmlRole] = {}
          }
       
         
         if(htmlkey){
            if(!classb.generalSetting.csssetting.htmloption[activehtmlRole][htmlkey]){
                classb.generalSetting.csssetting.htmloption[activehtmlRole][htmlkey] = {} 
            }
         } 
          
        if(getistrue){
            $('[data-enable="'+getenalbe+'"]').removeClass('hide');
            var gettext = cluset.find('[data-html="'+cssenable+'"]').val();
            if(!gettext){
              gettext = true;
            }
            
            if(ifIcon){
              var getclass = cluset.find('[data-htmlclass="'+cssenable+'"]').val();
              gettext = {"icon":gettext,"class":getclass}
                
            }
            if(htmlkey){
              classb.generalSetting.csssetting.htmloption[activehtmlRole][htmlkey][cssenable] = gettext;
            }else{
              classb.generalSetting.csssetting.htmloption[activehtmlRole][cssenable] = gettext;
            }
            
        }else{
           $('[data-enable="'+getenalbe+'"]').addClass('hide');
           
           if(htmlkey){
              classb.generalSetting.csssetting.htmloption[activehtmlRole][htmlkey][cssenable] = false;
            }else{
              classb.generalSetting.csssetting.htmloption[activehtmlRole][cssenable] = false;
            }
       }
       classb.updatecss()
       
       
})



function enablepanelSection (){
  $('[data-cssenable]').each(function(index, element) {
		    var getistrue = $(this).is(':checked')
        var getenalbe = $(this).data('getcontainer');
        var cluset = $(this).closest('.row.formrow');
        if(getistrue){
            $('[data-enable="'+getenalbe+'"]').removeClass('hide');
        }else{
            $('[data-enable="'+getenalbe+'"]').addClass('hide');
        }
	  });
}

  $('body').on('click', '[data-icon="iconbutton"]', function(e){
      e.preventDefault();
      $('[data-enable]').removeClass('selected');
      $(this).parent('[data-enable]').addClass('selected');
      $('#icons').click();
 })
 
  $('#icons').icon({iconval:'.geticonseting', iconView:'.iconView', type:"inline", container:".insetIconStodio",
         callback: function() {
           var selectoricon  =    $('.geticonseting');
           var iconvalue = selectoricon.val();
           var targetid = selectoricon.data('id');
           if(targetid){
            
              $('[data-rowid="'+targetid+'"]').data('class', iconvalue);
              $('[data-rowid="'+targetid+'"] > .rowLine').find('[data-role="previewicon"]').attr('class', iconvalue)
              setTimeout(function(){ 
                classb.updatelayears()
              }, 200);
           } 
         }
  });
  
 $('body').on('keyup', '[data-layerkey]', function(){
      var thisvalue = $(this).val()
      var thiskey = $(this).data('layerkey')  
      var thistarget = $(this).data('keytarget'); 
      
       var target =  $('[data-rowid="'+thistarget+'"]');
       target.data(thiskey, thisvalue)
       target.find('[data-role="previewText"]').first().html(thisvalue)
       classb.updatelayears()
  });
  
  $('body').on('change', '[data-layerkey]', function(){
      var ischeked = $(this).is(':checked')
      var thiskey = $(this).data('layerkey')  
      var thistarget = $(this).data('keytarget'); 
      var target =  $('[data-rowid="'+thistarget+'"]');
      
      if(ischeked){
         target.data(thiskey, 'true')
      }else{
          target.data(thiskey, 'false')  
      }
      
       classb.updatelayears()
  });
  
   $('body').on('change', '[data-switch]', function(){
        var itstrue = $(this).is(':checked')
        var getdataswitch = $(this).data('switch');
        var html = $(this).data('html');
        var htmlkey = $(this).data('key');
      
      if(itstrue){
          $('#'+getdataswitch).collapse("show")
          classb.updatejson('true', html , htmlkey);
          $(this).closest('.studio-collapse-header').removeClass('disabled')
      }else{
           //classb.deleteJson(cssexist)
           classb.updatejson('false', html , htmlkey);
         $('#'+getdataswitch).collapse("hide")
         $(this).closest('.studio-collapse-header').addClass('disabled')
      }
  })



/* Studio Switch*/  
$('body').on('change', '[data-switchStudio]', function(){
        var thisVal = $(this).val()
        var getdataswitch = $(this).attr('data-switchStudio');
        var html = $(this).data('html');
        var htmlkey = $(this).data('key');
        var targetLayers = $(this).data('targetLayers');
        var studio = $(this).data('studio');
        var dataattr = 'studio'+studio+'';
        var thisparent = $(this).closest('[data-fieldactive]')
        
        thisparent.find('[data-targetStudioType]').not('[data-targetStudioType="'+thisVal+'"]').collapse("hide")
        thisparent.find('[data-targetStudioType="'+thisVal+'"]').collapse("show")
        
         if(thisVal=="no"){
             if(studio=='text'){
                $('[data-rowid="'+t+'"]').data('studiotextclass', ' ');
               $('[data-rowid="'+t+'"]').data('textjson', '');
             }
             if(studio=='container'){
                $('[data-rowid="'+t+'"]').data('studioconclass', ' ');
               $('[data-rowid="'+t+'"]').data('containerjson', '');
             }
             if(studio=='field'){
                $('[data-rowid="'+t+'"]').data('studiofieldclass', ' ');
               $('[data-rowid="'+t+'"]').data('fieldjson', '');
             }
             if(studio=='button'){
                $('[data-rowid="'+t+'"]').data('studiobuttonclass', ' ');
               $('[data-rowid="'+t+'"]').data('buttonjson', '');
             }
          }
        
          if(targetLayers){
             $('[data-rowid="'+targetLayers+'"]').data(dataattr, thisVal);
          }
          classb.updatelayears()
        $(this).closest('.studio-collapse-header').removeClass('disabled')
        
       
        
         if(thisVal=="create"){
           var targetClassselector = '[data-selector="'+t+'"]'
           if($('[data-selector="'+t+'"]').is('.column')){
                targetClassselector = '[data-selector="'+t+'"] > .fcontainer'
           }
             v = studio;
             t = targetLayers;
               if(v=='text'){
                    
                    var updatejson = $('[data-rowid="'+t+'"]').data('textjson');
                    if(!updatejson){
                      updatejson = null;
                    }
                    
                     textStudios.BBStudioUpdate({selector:targetClassselector, classname:"textClassname", json:updatejson, callback:function(cass, json){
                           $('[data-rowid="'+t+'"]').data('studiotextclass', cass);
                            $('[data-rowid="'+t+'"]').data('textjson', json);
                            classb.updatelayears('noupdate')
                            classb.updatecss('notupdate')
                           }
                      })
                      
                 }
                 if(v=='container'){
                   var updatejson = $('[data-rowid="'+t+'"]').data('containerjson');
                    if(!updatejson){
                      updatejson = '';
                    }
                   
                    containerStudios.BBStudioUpdate({selector:targetClassselector, classname:"containerClassname", json:updatejson, callback:function(cass, json, styletag){
                           $('[data-rowid="'+t+'"]').data('studioconclass', cass);
                           $('[data-rowid="'+t+'"]').data('containerjson', json);
                                                       
                           $('[data-selector="'+t+'"]').removeClass('studioConPading');
                           $('[data-selector-columnstyle=\''+styletag+'\']').remove();
                           if(json){
                                var cssjson = JSON.parse(json)
                                   cssjson = cssjson['css'] 
                                 if($('[data-selector="'+t+'"]').is('.column')){
                                    if(cssjson){
                                        var marginColumn = '';
                                        if(cssjson['margin-top']){
                                            marginColumn += "margin-top:"+cssjson['margin-top']+";";
                                        }
                                        
                                        if(cssjson['margin-bottom']){
                                            marginColumn += "margin-bottom:"+cssjson['margin-bottom']+";";
                                        }
                                        
                                        if(marginColumn!=''){
                                             marginColumn = '[data-selector="'+t+'"].studioConPading {'+marginColumn+'}';
                                            $('[data-rowid="'+t+'"]').data('studioConPadding', 'studioConPading');
                                            $('[data-selector="'+t+'"]').addClass('studioConPading');
                                            $('body').append('<style data-selector-columnstyle=\''+styletag+'\'>' + marginColumn + '</style>');
                                           
                                        }
                                        
                                    }
                                 }
                            }
                            
                            classb.updatelayears('noupdate')
                            classb.updatecss('notupdate')
               
                           }
                       })
                       
                 }
                 if(v=='field'){
                   var updatejson = $('[data-rowid="'+t+'"]').data('fieldjson');
                    if(!updatejson){
                      updatejson = '';
                    }
                      fieldsStudios.BBStudioUpdate({selector:targetClassselector,  classname:"fieldClassname", json:updatejson, callback:function(cass, json){
                           $('[data-rowid="'+t+'"]').data('studiofieldclass', cass);
                           $('[data-rowid="'+t+'"]').data('fieldjson', json);
                            classb.updatelayears('noupdate')
                            classb.updatecss('notupdate')
               
                           }
                      }) 
                      
                 }
                 if(v=='button'){
                   var updatejson = $('[data-rowid="'+t+'"]').data('buttonjson');
                    if(!updatejson){
                      updatejson = '';
                    }
                    buttonStudios.BBStudioUpdate({selector:targetClassselector, classname:"studiobuttonclass", json:updatejson, callback:function(cass, json){
                           $('[data-rowid="'+t+'"]').data('studiobuttonclass', cass);
                           $('[data-rowid="'+t+'"]').data('buttonjson', json);
                            classb.updatelayears('noupdate')
                            classb.updatecss('notupdate')
               
                           }
                       })
                    
                 }
             
        }
      
      
  })
  
  $('body').on('click', '[data-applyclass]', function(){
    
          var thisclassname = $(this).data('applyclass');
          var studio = $(this).attr('data-targetStudio');
          var t = $('.rowLine.active').closest('[data-rowid]').data('rowid')
          $('.infor').html(thisclassname +' '+studio+' '+t)
          if(studio=='text'){
                $('[data-rowid="'+t+'"]').data('studiotextclass', thisclassname);
               $('[data-rowid="'+t+'"]').data('textjson', '');
             }
             if(studio=='container'){
               if(t=="row1"){
                 $('[data-rowid="'+t+'"]').data('studioclass', thisclassname);
                }else{
                $('[data-rowid="'+t+'"]').data('studioconclass', thisclassname);
                $('[data-rowid="'+t+'"]').data('textjson', '');
               }
             }
             if(studio=='field'){
                $('[data-rowid="'+t+'"]').data('studiofieldclass', thisclassname);
               $('[data-rowid="'+t+'"]').data('textjson', '');
             }
             if(studio=='button'){
                $('[data-rowid="'+t+'"]').data('studiobuttonclass', thisclassname);
               $('[data-rowid="'+t+'"]').data('textjson', '');
             }
           classb.updatelayears()
           classb.updatecss('notupdate')
          
  })

  
  $('body').on('click', '[data-studioreset]',function(){
          var studio = $(this).data('studioreset');
          var lastjson = $(this).data('resetjson');
          if($('[data-studio="'+studio+'"]').is(':checked')){
              v = studio;
              if(lastjson){
               if(v=='text'){
                   textStudios.BBStudioUpdate({json:lastjson})
               }
                if(v=='container'){
                   containerStudios.BBStudioUpdate({json:lastjson}) 
                }
                if(v=='field'){
                  fieldsStudios.BBStudioUpdate({json:lastjson})    
                }
                if(v=='button'){
                        buttonStudios.BBStudioUpdate({json:lastjson})  
                }
              }
         }
          
   })
 
	
  $('body').on('change', '[data-show]', function(){
      var getshowType = $(this).data('show')
			var getval = $(this).val()
     
      var targetcontainer = 'data-show-'+getshowType;
      $('['+targetcontainer+']').addClass('hide');
			$('['+targetcontainer+'="'+getval+'"]').removeClass('hide');
      
		})
  
  $('body').on('click', '[data-actions="addvalidations"]' ,function(){
       var validationlength = $('[data-role="customvcontainer"] > [data-validation]').length + 1
       var title = 'Validation '+ validationlength;
       var key = 'validation'+ validationlength;
       var dataattr= "data-show='"+key+"'";
       var dataattr2= "data-show-"+key+"='numeric'";
       var val = {
                  "type":"select",
                  "title":title,
                  "value":"email",
                  "option":{
                      "numeric":"Numeric",
                      "email":"Email",
                      "url":"url"
                  },
                  "dataattr":dataattr
         }
         var minimax = {
                  "type":"minmax",
                  "title":title,
                  "value":"email",
                  "option":{
                      "numeric":"Numeric",
                      "email":"Email",
                      "url":"url"
                  },
                  "dataattr":dataattr2
         }
         
       var rowContainer = $('<div class="b-b-1" data-validation="custom'+validationlength+'" />').append(classb.fucntionfield(key, val, 'validation'))
           rowContainer.find('.row').removeClass('b-b-1');
           rowContainer.append(classb.fucntionfield(key, minimax, 'validation'))
       
       $('[data-role="customvcontainer"]').append(rowContainer)
       $('.customselect').selectpicker('refresh'); 
   })
  
   
   $('body').on('change', '[data-selector="list_source"]', function(){
			var getval = $(this).val()
			$('[data-list-source-option]').addClass('hide');
			$('[data-list-source-option="'+getval+'"]').removeClass('hide');
		})
   
    $('[data-subaction="save"]').click(function(){
        var html =  $('[data-export="html"]').val()
        var json =  $('[data-export="json"]').val()
        console.log({'html_data':html, "json_data":json});
    })
    
    $('body').on('click', '[data-inset="layerstab"] a', function(){
        var getthisid = $(this).attr('href');
        setTimeout(function(){  
          var GetHeight =  $(getthisid).find('iframe').contents().find('.formoptions').innerHeight()
          $(getthisid).find('iframe').height(GetHeight)
         // alert(GetHeight)
         }, 100);
    })
	
	function callColorPicker(){
		$('.colorpicker-component').colorpicker(); 
		
	}
})
