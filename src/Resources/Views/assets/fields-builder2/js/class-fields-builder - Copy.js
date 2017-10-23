$(function(){
  $('[data-role="selectStudio"]').val('fields-builder').selectpicker('refresh');
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
      less:"",
			generalSetting:{
				csssetting:{
             htmloption:{
                 fieldType:"input" 
             }
          }
			},
			runcss:function(){
				classb.compile()
        classb.runhtml()

			},
      runhtml : function(){
        var htmloptiondata = classb.generalSetting.csssetting.htmloption;
              
             var button = '<div class="p-rightsection hide"> <a data-action="edit" class="blue"><i class="fa fa-pencil"></i></a> <a data-action="clone" class="yellow"><i class="fa fa-clone"></i></a> <a data-action="delete" class="red"><i class="fa fa-trash"></i></a> </div>';
             
             var fieldInnerhtml =  classb.createHTMl(htmloptiondata['layers']['mainContainer']['column'])
             var fieldHtmls= '<div class="form-group datafrom ge-canvas ge-editing " data-class="setting" data-type="'+htmloptiondata['fieldType']+'" data-size="col-sm-12" data-add="class">'+fieldInnerhtml+'</div>' 
             
             
             var exportHTml = $('<div></div>').append(fieldHtmls);
             var previewhtml = $('<div></div>').append(fieldHtmls);
             
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
             
             $('[data-role="posthtml"]').html(previewhtml.html() + button)
             
            $('[data-export="html"]').val(exportHTml.html())
            var gettargetscript = htmloptiondata['fieldType']
            $('[data-role="appendscriptt"]').html(classb.fields[gettargetscript]['script'])
            classb.columnResize()
            
           
            //$('.customselect').selectpicker('refresh');
      },
      createHTMl:function(data, child){
        var ihtml = '';
        if(!child){
          ihtml += '<div class="row" data-selector="row1">';
        }
         $.each(data, function(key, val){ 
              var html = val.text
              
              if(val.mainfield=="field"){
                     var filedss = val.datakey
                     if(val.children){
                       var haveinputgroup = val.children.length
                       html = '';
                        if(haveinputgroup != 1){
                           html = "<div class='input-group'>"
                        }
                        $.each(val.children, function(k, v){
                               
                                if(v.type=="input"){
                                    html += "<input type='"+v.ftype+"' class='form-control' placeholder='"+v.ftype+"' aria-describedby='basic-addon1' data-selector='"+v.rowid+"'>";
                                }
                                if(v.type=="textarea" ){
                                    html += "<textarea placeholder='textarea' name='textarea' class='form-control' data-selector='"+v.rowid+"'></textarea>";
                                }
                                if(v.type=="select" || v.type=="multiselect" ){
                                    html += "<select data-content='Please select an option' class='form-control' name='select'><option selected='selected' value='0' data-selector='"+v.rowid+"'>--- Select ---</option><option value='Option 1'>Option 1</option><option value='Option 2'>Option 2</option><option value='Option 3'>Option 3</option></select>";
                                }
                                if(v.type!="input" ){
                                     html += "<span class='input-group-addon' data-selector='"+v.rowid+"' ><i data-role='previewicon' class='"+v.class+"'></i></span>";
                                }
                                
                          })
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
              
              if(val.columnClass){
                  var columnclass = val.columnClass;
              }else{
                 var columnclass = 'col-sm-6';
              }
              
              if(val.children && val.type !="field"){
                  html += classb.createHTMl(val.children, 'childs')
              }
              
              if(!child){
               var extradata = ''
                if(val.studioclass){
                   columnclass +=columnclass+' '+ val.studioclass;
                }
                if(val.type=="field"){
                    extradata = 'data-fcontrol="input"';
                 }
                 if(val.type=="text"){
                    extradata = 'data-fcontrol="label"';
                 }
                ihtml +='<div class="'+columnclass+'  column" data-selector="'+val.rowid+'" '+extradata+'>'+html+'</div>';
              }else{
                ihtml += html 
              }
              
         })
         if(!child){
           ihtml += '</div>';
         }
        
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
			updatecss:function(){
				classb.runcss()
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
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
				if(getjsonvale){
          classb.generalSetting.csssetting = JSON.parse(getjsonvale);
          var saveddata = JSON.parse(getjsonvale);
          if(saveddata.css){
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
           }
          
          
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
      createRowli:function(rowID, type, text, classas){
            var htmls = $('[data-template="row"]').html();
            rowID = _.uniqueId('col_');
            htmls = htmls.replace(/{id}/g, rowID);
            htmls = htmls.replace(/{type}/g, type);
            htmls = htmls.replace(/{text}/g, text);
            htmls = htmls.replace(/{classas}/g, classas);
            return htmls;
        },
       createfieldli:function(rowID, type, text, classas, key, val){
            var htmls = $('[data-template="field"]').html();
            rowID = _.uniqueId('field_');
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
        settinglayerstab:function(data){
            var htmlsdata = $('<div/>')
            htmlsdata.append($('[data-template="selectedlayers"]').html())
            var tabllist = ['all', 'setting', 'container', 'text', 'button', 'field'];
            if(data!='all'){
              $.each(data, function(k,v){
                   var index = tabllist.indexOf(v);
                    tabllist.splice(index, 1);
              })
                
               $.each(tabllist, function(k,v){
                  htmlsdata.find('[data-fieldactive="'+v+'"]').remove()
               })
            
            }

            return htmlsdata
        }, 
        updatelayears:function(update){
          if(!classb.generalSetting.csssetting.htmloption['layers']){
              classb.generalSetting.csssetting.htmloption['layers'] = {}
          }
          if(!classb.generalSetting.csssetting.htmloption['layers']['mainContainer']){
              classb.generalSetting.csssetting.htmloption['layers']['mainContainer'] = {}
          }
          arraied =  $('[data-role="builderrow"] ol').nestedSortable('toHierarchy', {startDepthCount: 0});
          
          
          
          classb.generalSetting.csssetting.htmloption['layers']['mainContainer']['column'] = arraied;
          if(!update){
            classb.updatecss();
          }
        },
        columnResize:function(){
            $('.ge-canvas .column').resizable({
                   grid: [0, 0],
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
                connectWith: '.ge-canvas .row',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
                update: function( event, ui ) {
                     classb.updateSortable(event, ui.item)
                },
                receive: function(event, ui){
                     classb.receiveSortable(event, ui.item)
                }
            }).disableSelection();
              
              $('.ge-canvas .column .input-group-addon').resizable({
                   handles: 'e',       
              })
              
              
              $('.ge-canvas .column .input-group').sortable({
                items: '> .input-group-addon, > .form-control',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
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
        updatelable:function(targetid){
          var target =  $('[data-rowid="'+targetid+'"]');
          
          bootbox.prompt({
              title: "Enter Label Text",
              value: target.data("text"),
              callback: function(result) {
                if (result === null) {
                  
                } else {
                  target.data("text", result)
                  target.find('[data-role="previewText"]').first().html(result)
                   classb.updatelayears()
                }
              }
            });
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
                         var activehtmlRole = $('.active > [data-rolehtml]').data('rolehtml');
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
                    parentId = targets.parent().parent('[data-selector]').data('selector'); 
              }
             
              var target = $('[data-rowid="'+parentId+'"] > ol');
              targetHTml = target.clone().appendTo('<div />');
              target.empty()
              
              if($('[data-selector="'+parentId+'"]').children('.input-group').is('.input-group')){
                var eachselector = $('[data-selector="'+parentId+'"]').find('.input-group').children('[data-selector]');        
              }else{
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
                    parentId = targets.parent().parent('[data-selector]').data('selector'); 
              }
              var target = $('[data-rowid="'+parentId+'"] > ol');
              
              if(!target.is('ol')){
                    $('[data-rowid="'+parentId+'"]').append('<ol />')
                    target = $('[data-rowid="'+parentId+'"] > ol');
              }
              
              $('.infom').html(targetId+' '+parentId)
               
              $('[data-rowid="'+targetId+'"]').appendTo(target);
              $('[data-rowid="'+parentId+'"] > ol').find('[data-rowid="'+targetId+'"]').not($('[data-rowid="'+targetId+'"]').first()).remove();
              classb.updatelayears('noupdate') 
           }
      
		}
		classb.generalSetting.csssetting.fieldname = 'Field Name';

    
    $.get("/appdata/app/Modules/Studio/Resources/Views/public/css/generatedcss.less", function(data){
				classb.less = data;
        
        classb.editReload();
				
	});	
  
   var slected = $('[data-role="fieldsType"]').val();
  
  $.get("/appdata/app/Modules/Studio/Resources/Views/classes/fields-builder2/js/fieldjson.json", function(data){
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
  
  
	
  $('[data-role="builderrow"] ol').nestedSortable({
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
                  maxLevels: 2,
                  expandOnHover: 700,
                  startCollapsed: false,
                  cancel: ".removecomponent, [data-role='item']",
                  create: function( event, ui ) {
                      var resivenew;
                  },
                  isAllowed:function (placeholder, placeholderParent, currentItem) { 
                      if(placeholderParent){
                         if(currentItem.data('field') == 'input' && !currentItem.data('mainfield') &&  placeholderParent.data('type') !='field'){
                           $('.infor').html('first '+ currentItem.data('type') + placeholderParent.data('type'))
                            return false; 
                         }else if(placeholderParent.data('type') != 'field' && currentItem.data('field') && !currentItem.data('mainfield')){
                            $('.infor').html('field' +placeholderParent.data('type'))
                               return false; 
                        }else if(placeholderParent.data('mainfield') && currentItem.data('type') == 'text'){
                             $('.infor').html('3rd '+ currentItem.data('type') + placeholderParent.data('type'))
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
              
   
    var studioupdates = function(classname, targetbutton ){
         $.BBStudio({
                selector: '#boostrapGrid '+classname,
                studio: 'container',
                container: '.insetcontainerStodio',
                type: 'inline',
                callback:function(cass){
                   // alert(cass)
                   $(targetbutton).data('studioclass', cass);
               
                }
            }).open(); 
            
            $.BBStudio({
                selector: '#boostrapGrid '+classname,
                studio: 'text',
                container: '.insetTextStodio',
                type: 'inline',
                callback:function(cass){
                   // alert(cass)
                   $(targetbutton).data('studioclass', cass);
               
                }
            }).open(); 
            
            $.BBStudio({
                selector: '#boostrapGrid '+classname,
                studio: 'fields',
                container: '.insetFieldStodio',
                type: 'inline',
                callback:function(cass){
                   // alert(cass)
                   $(targetbutton).data('studioclass', cass);
               
                }
            }).open(); 
            
            $.BBStudio({
                selector: '#boostrapGrid '+classname,
                studio: 'button',
                container: '.insetbuttonStyle',
                type: 'inline',
                callback:function(cass){
                   // alert(cass)
                   $(targetbutton).data('studioclass', cass);
               
                }
            }).open(); 
            
            
            /*$.BBStudio({
                selector: '#boostrapGrid [data-selector="'+ctarget+'"]',
                studio: 'button',
                container: '.insetbuttonStyle',
                type: 'inline',
                button: $(this),
                callback:function(cass){
                   // alert(cass)
                   $('[data-rowid="'+ctarget+'"]').data('studioclass', cass);
               
                }
            }).open();*/ 
    }
       
   
	
  
  $('[data-additems]').click(function(){  
        var gettype = $(this).data('type')
        var gettext = $(this).data('text')
        var getclass = $(this).data('class')
        
        var htmls = $(classb.createRowli('1', gettype, gettext, getclass))
        if(gettype=='icon' || gettype=='required' || gettype=='tooltip'){
          htmls.addClass('mjs-nestedSortable-no-nesting')
        }
        
        $('[data-role="builderrow"] ol').first().append(htmls)
        classb.updatelayears()
  });
  

  
  $('body').on('click', '[data-ctarget]', function(e){
        var ctarget = $(this).data('ctarget');
				var type = $(this).data('type');
        var targetype = $(this).data('targetype');
        
        if(type=="Remove"){
          $('[data-rowid="'+ctarget+'"]').remove();
          classb.updatelayears();
        }
        
        if(type=="edit"){
          if(targetype=='icon' || targetype=='required' || targetype=='tooltip' ){
              var haveicon  = $('[data-rowid="'+ctarget+'"]').data('class')
              if(!haveicon){
                  haveicon = '';
               }
              $('.geticonseting').val(haveicon).data('id', ctarget)
              $('#icons').trigger('click')
          }
          if(targetype=='text'){
              classb.updatelable(ctarget);
            
          }
          if(targetype=='field'){
             $('[href="#functions"]').trigger('click')
          }
          if(targetype=='inputsetting'){
              $('[href="#selected_layer"]').trigger('click')
              $('[href="#inputSettingTab"]').trigger('click')
          }
          
        }
        
      
        if(type == 'openStudio'){
          if(targetype=='inputsetting' || targetype=='icon' || targetype=='required' || targetype=='tooltip'){
              $('[href="#selected_layer"]').trigger('click')
              $('[href="#containerStyletab"]').trigger('click')
             studioupdates('[data-selector="'+ctarget+'"]', '[data-rowid="'+ctarget+'"]')
            
            
          }else{
            $.BBStudio({
                selector: '#boostrapGrid [data-selector="'+ctarget+'"]',
                studio: 'container',
                container: 'body',
                button: $(this),
                callback:function(cass){
                   // alert(cass)
                   $('[data-rowid="'+ctarget+'"]').data('studioclass', cass);
               
                }
            }).open(); 
           }
        }
  })
  
     
        
  
  $('body').on('dblclick', '[data-selector], [data-rowid]', function(e, i){
          $('[href="#selected_layer"]').click()
     })
  
  
 
  
  
  $('body').on('change', '[data-role="fieldsType"]', function(){
      var thisval = $(this).val();
        if(classb.fields){
                         
                         if(classb.fields[thisval]){
                            var cereateField  =  $(classb.createfieldli('1', classb.fields[thisval].type, classb.fields[thisval].text, classb.fields[thisval].class, thisval, classb.fields[thisval]));
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
                              var htmlsd = $(classb.createfieldli('1', val.type, val.text, val.class, key, val))
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
                            $.get("/appdata/app/Modules/Studio/Resources/Views/classes/fields-builder2/optionfield/"+targetoptions, function(data){
                                $('[data-role="options"]').html(data)
                                $('.customselect').selectpicker('refresh');
                            });
                           
                            
                            classb.generalSetting.csssetting.htmloption['functions'] = null
                            
                        }
                        
                         if(classb.fields[thisval]['tabs']){
                           $('[data-role="insetSelectedLayer"]').html(classb.settinglayerstab(classb.fields[thisval]['tabs']));
                         }
                         studioupdates('Test', 'Tes')
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
        
        
        var activehtmlRole = $('.active > [data-rolehtml]').data('rolehtml');
       
       
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

 
  $('#icons').icon({iconval:'.geticonseting', iconView:'.iconView', 
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
  
 
   $('body').on('change', '[data-switch]', function(){
      var itstrue = $(this).is(':checked')
      var getdataswitch = $(this).data('switch');
      var html = $(this).data('html');
      var htmlkey = $(this).data('key');
      
      if(itstrue){
         // $('#'+getdataswitch).collapse("show")
          classb.updatejson('true', html , htmlkey);
         // $(this).closest('.studio-collapse-header').removeClass('disabled')
      }else{
          
           //classb.deleteJson(cssexist)
           classb.updatejson('false', html , htmlkey);
         //$('#'+getdataswitch).collapse("hide")
         //$(this).closest('.studio-collapse-header').addClass('disabled')
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
})
