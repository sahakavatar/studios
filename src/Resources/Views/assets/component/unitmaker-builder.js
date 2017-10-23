$(function(){
  var getstyletype = $('[data-pagetype]').val();
  var basicfilter = ''
  var fisttimeload = '';
  var modestduio = false;
  var activeclass = ''
  var filterclass = ''
  var basissubFilter = []
   var loadclasstype = ''
   var groupclasstyle = 'box_styles'
   var styletype = 'stylescontianer'
   var activeseletor = "css";
   var collectiontype =""
   var modeofmodal = 'new';
   var oldclass = ''
   var newmodaljson = '';
	var insde = 0;
	var getnewhtmls = false;
	var basicselected = false;
   
  $('[data-role="selectStudio"]').val('text').selectpicker('refresh');
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
  
  
var editor = ace.edit("htmleditor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/php")
  
  
  
	var classb = {
			sl:{
				cssview : $('[data-role="classview"]'),
				cssstyle : $('[data-role="savedcss"]'),
				exportjson : $('[data-export="json"]'),
				exportcss : $('[data-export="css"]'),
				save : $('[data-save="class"]'),
				htmlcodeview: $('[data-role="htmlcodeview"]')
			},
			 setupstduio:{
				  "all": {
					"collection":["basicclasses","textcollection", "containercollections", "elementcollection", "componetclasses"]
				  },
			 },
      activejson: {},
      selectorsss:{
            'css': 'Defult',
            "hover": 'Hover',
            "first-child": 'first-child',
            
      },
       editclasstye:{
          box_styles:['div', 'css'],
          image_style:['img'],
          icon_styles:['i'],
          link_style:['a'],
          heading:['h1','h2','h3','h4', 'h5', 'h6' ],
          text_styles:['p','span'],
          h1:['h1'],
          h2:['h2'],
          h3:['h3'],
          h4:['h4'],
          h5:['h5'],
          h6:['h6'],
          button_style:['button'],
          ul_style:['ul', 'ol'],
          li_style:['li'],
          hr_style:['hr'],
          text_input_style:['input'],
          textarea_style:['textarea'],
          select_style:['select'],
          table_style:['table'],
          th_style:['th'],
          tr_style:['tr'],
          td_style:['td']
      },
      dataload:'',
      less:"",
			generalSetting:{
				csssetting:{
          border:{},
          tabs:{}
         },
        exportjson:{},
        component:{
          
        },
        activetab:{
          
        },
        extra:{},
        extraparth:{}
			},
			
			updatecss:function(){
				classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
					var activeclass =  activeseletor;
				if(!modestduio){
							  classb.sl.cssview.attr('class', classb.generalSetting.csssetting.class);
							$('#sendajaxdata').data('name', classb.generalSetting.csssetting.class);
					}
				var htmlcomponet = $('[data-previewblade]').html();
        		classb.htmlcodeviews(htmlcomponet);
				
				if(getnewhtmls){
					
					classb.makepreview(htmlcomponet);
				}
			},
			editTimeReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
				if(getjsonvale){
				 		classb.generalSetting.csssetting = JSON.parse(getjsonvale);
						 if(classb.generalSetting.csssetting.class){
							$('[data-role="classname"]').val(classb.generalSetting.csssetting.class)
							$('[data-role="classname"]').keyup();
						  }
					//classb.editmode(getjsonvale)
					classb.chekedcssfor('css');

				}
			},
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
				if(getjsonvale){
					classb.generalSetting.csssetting = JSON.parse(getjsonvale);

				  if(classb.generalSetting.csssetting.class){
					$('[data-role="classname"]').val(classb.generalSetting.csssetting.class)
				  }
				  $('[data-tabactive]').prop('checked', false);
				  if(classb.generalSetting.csssetting['tabs']){
					  $.each(classb.generalSetting.csssetting['tabs'], function(k, v){
						$('[data-tabactive="'+k+'"]').prop('checked', v);
					  })
				  }
				  if(!classb.generalSetting.csssetting['csskey']){
							  classb.generalSetting.csssetting['csskey'] = {}
				   }

				  if(classb.generalSetting.csssetting['css']){
						var getke = classb.generalSetting.csssetting['css']
						if(typeof getke == 'object'){
							getke = JSON.stringify(getke);
							classb.generalSetting.csssetting['csskey']['css'] = JSON.parse(getke);
							delete classb.generalSetting.csssetting['css'];
						}
				  }
				 if(classb.generalSetting.csssetting['hover']){
						var getke = classb.generalSetting.csssetting['hover']
						if(typeof getke == 'object'){
							getke = JSON.stringify(getke);
							classb.generalSetting.csssetting['csskey']['hover'] = JSON.parse(getke);
							delete classb.generalSetting.csssetting['hover'];
						}
				  }
				  if(classb.generalSetting.csssetting['selected']){
						var getke = classb.generalSetting.csssetting['selected']
						if(typeof getke == 'object'){
							getke = JSON.stringify(getke);
							classb.generalSetting.csssetting['csskey']['focus'] = JSON.parse(getke);
							delete classb.generalSetting.csssetting['selected'];
						}
				  }

				  if(classb.generalSetting.csssetting['csskey']){
						$('[data-tabnav="button"] a').not('[data-rolecss="css"]').closest('li').remove();
						$.each(classb.generalSetting.csssetting['csskey'], function(k, v){
							if(k !='css'){
							  var keys = ':'+k;
							  //classb.editmodecssselector(keys)
							} 
						})
				  }

				  classb.chekedcssfor('css');
				  classb.updatecss();
         
				}
			},
      chekedcssfor:function(ccf){
        if(classb.generalSetting.csssetting['csskey']){
          var datapreview = classb.generalSetting.csssetting['csskey'];
        }else{
          var datapreview =  classb.generalSetting.csssetting;
        }
       if(datapreview[ccf]){
				 var margindl = [];
				 var paddingl = [];
				 $('[type="checkbox"][data-cssexist]').prop('checked', false);
				 $('[data-insettemp="textshadow"]').empty();
				 $('[data-insettemp="boxShadow"]').empty();
				 $('[data-sub_type][data-name]').removeClass('active')
					$.each(datapreview[ccf], function(io, iv){
					var nameofclass = iv.replace(/\./,'').replace(/-hover/,'').replace(/-focus/,'');
					$('[data-sub_type="'+io+'"][data-name="'+nameofclass+'"]').addClass('active');
								iv = iv.replace('px','');
					  if(io.match(/margin/g)){
						iv = iv.replace('%','').replace('em','');
						  margindl.push(iv)
					  }
					  if(io.match(/padding/g)){
						iv = iv.replace('%','').replace('em','');
						  paddingl.push(iv)
					  }

					  $('[data-css="'+io+'"][data-selector]').val(iv);
					 
					  

					

					 

					  if($('[data-textcolor="'+io+'"]').is('[data-textcolor]')){
						$('[data-textcolor="'+io+'"] [data-css="'+io+'"]').val(iv);
						$('[data-textcolor="'+io+'"]').colorpicker('setValue', iv)

					  }

					  

					});	

				   
				  
					$('.customselect').selectpicker('refresh');
					

				}
			},
   
      updatenav:function(){
        var active =  activeseletor;
        var type = $('[data-tabnav="button"] .active [data-tabactive]').is(':checked')
        
        if(active =='css'){
          classb.suporter.tabEditor = true;
        }else{
          if(type){
              classb.suporter.tabEditor = true;
          }else{
              classb.suporter.tabEditor = true;
          } 
        }
        if(!classb.suporter.tabEditor){
          $('[data-activetab="suporter"]').removeClass('hide')
        }else{
          $('[data-activetab="suporter"]').addClass('hide')
        }
        if(!classb.generalSetting.csssetting['tabs']){
            classb.generalSetting.csssetting['tabs'] = {}
        }
        classb.generalSetting.csssetting['tabs'][active] = classb.suporter.tabEditor;
        
        
      },
      suporter:{
          tabEditor: true
      },
      updatejson:function(key, value , mcss , target){
        classb.updatenav()
       
        if(classb.suporter.tabEditor){
            var updatetype =  activeseletor;
            if(updatetype=='results'){
              return false;
            }
			
			classb.runhtmlelement(key,value);
            if(!classb.generalSetting.csssetting['csskey']){
              classb.generalSetting.csssetting['csskey'] = {}
            }
            if(!classb.generalSetting.csssetting['csskey'][updatetype]){
              classb.generalSetting.csssetting['csskey'][updatetype] = {};
            }
            if(mcss){
                
            }else if(key || value){
               classb.generalSetting.csssetting['csskey'][updatetype][key] = value;
               classb.updatecss()
            } 
            if(updatetype){
               // classb.generalSetting.csssetting['csskey'][updatetype]['selector'] = updatetype;
             }
           
        }
      },
      deleteJson:function(key){
         classb.updatenav()
         if(classb.suporter.tabEditor){
           var dkey = key.split(" ")
            var updatetype =  activeseletor;
            $.each(dkey, function(i, val){
                if(classb.generalSetting.csssetting['csskey']){
					if(classb.generalSetting.csssetting['csskey'][updatetype]){
						delete classb.generalSetting.csssetting['csskey'][updatetype][val]; 
					}
                 }
             });
			
             classb.runDeletehtmlelement(key);
         }
         classb.updatecss()
          
      },

		runhtmlelement:function(type, classes, target){
        if(!target){
             target =  $('.componetlisting [data-listing].active').data('rowid');
        }
		
             typestduio =  $('[data-studitabs="opstudios"] li.active').data('opstudios');

        var classname = classes;
        classes = classname.replace(".", "");
        var targertelement  = $('[data-previewblade] [data-selection="'+target+'"]');
		if(type){
			if(typestduio != 'basicclasses'){
				exstinclass = targertelement.data(type);
				if(exstinclass){
				  targertelement.removeClass(exstinclass);
				}


				targertelement.data(type, classes);
			}	
        }
		targertelement.addClass(classes);		
        classb.readclasses(target)
        $('[data-listing]').removeClass('selectedactivelist')
        $('[data-previewclass] [data-selection], [data-previewblade] [data-selection]').removeClass('ahtmlindicate');
    
        $('[data-listing][data-rowid="'+target+'"]').addClass('selectedactivelist')
        targertelement.addClass('ahtmlindicate');
        getnewhtmls = true;
        
        
        
        var classkey = classb.generalSetting.csssetting.class;
        classb.generalSetting.exportjson = {}
        if(classkey){
            classb.generalSetting.exportjson[classkey] = {}
            classb.generalSetting.exportjson[classkey] = classb.generalSetting.component;
            
        }
        
      },
      runDeletehtmlelement:function(type, target, classs){
        if(!target){
             target =  $('.componetlisting [data-listing].active').data('rowid');
        }
       
        var targertelement  = $('[data-previewblade] [data-selection="'+target+'"]');
		 if(type){
			exstinclass = targertelement.data(type);
			if(exstinclass){
			  targertelement.removeClass(exstinclass);
			}
		   targertelement.data(type, '');
		 }
		 if(classs){
			 targertelement.removeClass(classs);
		 }
		 getnewhtmls = true;
         classb.readclasses(target)
      },
	  runremoveclass:function(classs, key){
		  if(key){
			  classb.deleteJson(key);
		  }
		 
		  classb.runDeletehtmlelement('','', classs);
		  classb.updatecss();
	  },
	  runAddclass:function(classs, key){
		  if(key){
			  classb.updatejson(key, classs);
		  }else{
			  classb.runhtmlelement('', classs,'');
			  classb.updatecss();
		  }
			  
	  },		
	  makepreview:function(dthm){
		  	outputhtml = $('<textarea />').html(dthm).text();
			var settingdata = $('[data-role="unitsetting"]').serializeArray();
		  	var settingd = {};
		  	$.each(settingdata, function(i, obj){
					 settingd[obj.name] = obj.value;
			})
			
		    var ssettingd = JSON.stringify(settingd)
			var data = {}
				data['html'] = outputhtml
				data['setting'] = ssettingd 
		 
		    sendajax('/admin/framework/unit-editor/generate-html', data, classb.amakepreview);
	  },
		amakepreview:function(d){
				if(d.error){
					alert(JSON.stringify(d))
					$('[data-previewclass]').html(JSON.stringify(d));
				}else{
					if(d.html){
						$('[data-previewclass]').html(d.html);
					}else{
						$('[data-previewclass]').html('sorry no have hml');
					}
				}
		},
      readElement:function(){
            var gethtml = $('<div data-html="html"></div>')
             gethtml = gethtml.append($('[data-previewclass]').html());
            var getlsit =   classb.readdataelement($('[data-previewblade]').children()) 
            
            $('.componetlisting').remove();
            $('[data-role="elementtree"]').html('<ol class="componetlisting"></ol>');
            $('[data-role="elementtree"] > ol').append(getlsit);
           
            $('[data-listingoption="active"]').each(function(){
                  activedeactive($(this));
            })
            var json  = classb.creatjson($('[data-previewblade]').children())
            $('[data-export="newjsondata"]').val(JSON.stringify(json));
		  	classb.updatecss();
      },
      readdataelement:function(target){
            var htmlsdata = $('<div></div>');
            target.each(function(){
            var html = $('<li></li>');
				
            var htmlsstucher = $('[data-template="listingrow"]').html();
                var tagname = $(this).prop('tagName')
                var rowid = _.uniqueId('row');
                var cssselector = rowid+'_'+tagname.toLowerCase();
				
                 $(this).attr('data-selection', rowid);
                classb.generalSetting.component[cssselector] = {}
                classb.generalSetting.extraparth[cssselector] = {}
                htmlsstucher = htmlsstucher.replace(/{name}/g, tagname)
                htmlsstucher = htmlsstucher.replace(/{rowid}/g, rowid)
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
	 creatjson:function(target){
        var json = []
        target.each(function(){
            var data = $(this).data();
            if($(this).children('*').prop('tagName')){
              data['childer']  = classb.creatjson($(this).children());
            }
            
            json.push(data)
        })
        return json
      },
      readElementmaster:function(){
            var gethtml = $('<div data-html="html"></div>')
            if(!$('[data-role="masterelementtree"]').find('[data-cssselector="css"]').is('[data-cssselector]')){
                      classb.editmodeli('css')
                }
              gethtml = gethtml.append($('[data-role="classview"]').html());
              classb.createmasterlement(gethtml.children()) 
              
              
              
              $('[data-role="classname"]').keyup();
      },
		readclasses:function(target, temp){
			if(target){
				$('[data-role="previewslclasses"]').empty();
				var getclsss = $('[data-previewblade] [data-selection="'+target+'"]').attr('class');
				if(getclsss){
						var classes = getclsss.trim();
						classes = classes.split(' ')
						
						$.each(classes, function(i, iv){
							if(iv != 'ahtmlindicate'){
								var label = ' <span class="label label-primary p-5 p-r-0">'+iv+' <button type="button" data-buttonrole="deletecollection" data-class="'+iv+'" data-collection="'+target+'" class="btn btn-danger btn-xs"><i class="glyphicon glyphicon-remove"></i></button></span>';
								$('[data-role="previewslclasses"]').append(label)
								if(temp){
										var labels = ' <span class="label label-primary p-5 p-r-0">'+iv+' <button type="button" data-buttonrole="addtempclass" data-class="'+iv+'" data-collection="'+target+'" class="btn btn-danger btn-xs"><i class="fa fa-plus" aria-hidden="true"></i></button></span>';
										$('[data-temporarilyclasses]').append(labels)
								}
							}
								
						});
				}
			}
		},
      createmasterlement:function(target){
           target.each(function(){
                var tagname = $(this).prop('tagName')
                var cssselector = tagname.toLowerCase();
                if(!$('[data-role="masterelementtree"]').find('[data-cssselector="'+cssselector+'"]').is('[data-cssselector]')){
                  classb.editmodeli(cssselector, 'sub');
                }
                 if($(this).children('*').prop('tagName')){
						 classb.createmasterlement($(this).children())
				 }
           });
      },
      editmode:function(data){
       
       $('[data-role="masterelementtree"]').empty()
          if(!$('[data-role="masterelementtree"]').find('[data-cssselector="css"]').is('[data-cssselector]')){
                      classb.editmodeli('css')
                }
        if(typeof data == 'string'){
            data = JSON.parse(data);  
        }
        var cssdata = {}
        oldclass = data.classname;
       
        $.each(data.css, function(kay, val){
            if(kay=="self"){
                kay = 'css';
            }
            if(val.normal){
              cssdata[kay] = val.normal;
            }
            if(val.selector){
              cssdata[kay]['selector'] = val.selector;
            }
            if(kay!='css'){
              classb.editmodeli(kay);
            } 
        })
        classb.generalSetting.component = cssdata;
        if(data.extra){
            if(data.extra.classparth){
              classb.generalSetting.extraparth = data.extra.classparth;
            }else{
              classb.generalSetting.extraparth = {}
            }
         }else{
            classb.generalSetting.extraparth = {};
         }
        classb.modalehtml();
        classb.generalSetting.csssetting.classname = data.classname 
        $('[data-role="classname"]').val(data.classname).keyup();
        
      },
      newMode:function(){
           $('[data-role="masterelementtree"]').empty()
           classb.generalSetting = JSON.parse(newmodaljson);
           classb.modalehtml();
                if(!$('[data-role="masterelementtree"]').find('[data-cssselector="css"]').is('[data-cssselector]')){
                      classb.editmodeli('css')
                }
          
                $('[data-role="classname"]').val('default').keyup();
                $('[data-toolaction="selected"]').removeClass('active');
                if (classb.activejson['json']) {
                    delete classb.activejson['json']
                }
          
      },
      editmodeli:function(targetelement){
                var html = $('<li></li>');
                var htmlsstucher = $('[data-template="listingrow"]').html();
                var tagname = targetelement
                var cssselector = tagname.toLowerCase();
                var rowid = _.uniqueId('row_');
               
                htmlsstucher = htmlsstucher.replace(/{rowid}/g, rowid)
                htmlsstucher = htmlsstucher.replace(/{csstarget}/g, cssselector);
                if(targetelement!="css"){
                    htmlsstucher = htmlsstucher.replace(/{name}/g, tagname)
                   // htmlsstucher = htmlsstucher.replace('<i class="fa fa-plus" aria-hidden="true"></i>', '<i class="fa fa-trash-o" aria-hidden="true"></i>');
					htmlsstucher = htmlsstucher.replace('<i class="fa fa-plus" aria-hidden="true"></i>', ' ');
                    htmlsstucher = htmlsstucher.replace('data-caction="collapse"', 'data-caction="deleteselector"');
                }else{
                     htmlsstucher = htmlsstucher.replace(/{name}/g, 'Main class')
                }
                html.append(htmlsstucher);
              
              if(targetelement=="css"){
                if(!$('[data-role="masterelementtree"] > ol').is('ol')){
                    $('[data-role="masterelementtree"]').append('<ol class="componetlisting"></ol>')
                }

                $('[data-role="masterelementtree"] > ol').append(html)
              }else{
                  if(!$('[data-role="masterelementtree"] > ol >li:first-child > ol').is('ol')){
                    $('[data-role="masterelementtree"] > ol >li:first-child').append('<ol class="componetlisting"></ol>')
                  }

                $('[data-role="masterelementtree"] > ol >li:first-child > ol').append(html)
              }
              $('[data-listingoption="active"]').each(function(){
                     activedeactive($(this));
              })
              
      },
      modalehtml:function(){
        if(classb.activejson['original']){
                $('[data-previewclass]').html(classb.activejson['original']['html'])
                classb.htmlcodeviews(classb.activejson['original']['html'])
                $('[data-previewclass] > *').attr('data-role','classview')
                classb.sl.cssview = $('[data-role="classview"]');
                var term= classb.activejson['original']['data']['term'];
                $('[data-prefixcomponet]').data('prefixcomponet', term).prev('span').html(term);
                $('[data-role="modalactive"]').removeAttr('disabled')
                classb.readElementmaster();
        }
      },
      htmlcodeviews:function(html){
		  	html = $('<textarea />').html(html).text();
          classb.sl.htmlcodeview.val(html);
          editor.setValue(html, -1);
      },
      getbasicitem:function(data){
          if(data.data){
                  $.each(data.data, function(key, val){
                     
                       $.each(val, function(inde, types){
                          var name = types.replace(/_/g, " ");
                              name = name.replace(/-/g, " ");  
                          var htmlsli = '<a href="#" class="list-group-item" data-buttonrole="editpopup" data-type="'+key+'" data-subtype="'+types+'">'+name+'</a>';
                          $('[data-typeclasses="basic"]').append(htmlsli)
                        })
                     
                       
                  })
               
                $('[data-typeclasses="basic"] a').first().click();
                 if(modestduio != 'collection'){
                   
                }
          }
          if(data.error){
            alert(data.message);
          }
          
      },
      getbasicitemsubs:function(data){
		  if(!basicselected){
			if(data.main_types){
				$('[data-typelsit="lists"]').empty()
					$.each(data.main_types, function(key, val){
                        var optionname = val.replace(/_/g, " ");
                        optionname =  optionname.charAt(0).toUpperCase() + optionname.slice(1);
                        var optionshtm = '<option value="'+key+'">'+optionname+'</option>';
						$('[data-typelsit="lists"]').append(optionshtm);
						
                    })
			}
		}
		
		    if(data.types){
				var btyep = false;
				if(data.class){
						if(data.class.type){
							var btyep=data.class.type
						}
				}else{
					if(basicselected){
						var btyep=basicselected
					}else{
						var btyep = 'background_color';
					}
					
				}
                $('[data-typeclasses="basic"]').empty();
                    $.each(data.types, function(key, val){
                        var optionname = val.replace(/_/g, " ");
                        optionname =  optionname.charAt(0).toUpperCase() + optionname.slice(1);
                        var optionshtm = '<option value="'+key+'">'+optionname+'</option>';
						
						 var htmlsli = '<a href="#" class="list-group-item" data-buttonrole="filterclasses" data-type="'+btyep+'" data-id="'+key+'">'+optionname+'</a>';
                        //$('[data-typelsit="lists"]').append(optionshtm);
						
						$('[data-typeclasses="basic"]').append(htmlsli)
                        /* $.each(val, function(inde, types){
                            var name = types.replace(/_/g, " ");
                                name = name.replace(/-/g, " ");  
                            var htmlsli = '<a href="#" class="list-group-item" data-buttonrole="filterclasses" data-type="'+key+'" data-subtype="'+types+'">'+name+'</a>';
                            $('[data-typeclasses="basic"]').append(htmlsli)
                            $('[data-typeclasses="'+key+'"]').append(htmlsli)
                          });*/
                    })

                  
                   if(modestduio != 'collection'){
                     $('#selectexistingstyle').modal('show');
                   }
                  //$('[data-typelsit="lists"]').trigger('change')
            }
            if(data.items){
              classb.getbasicclassessub(data)
            }
            if(basicfilter){
              //$('[data-typelsit="lists"]').val(basicfilter);
              //$('[data-typelsit="lists"]').trigger('change')
             // $('[data-typelsit="lists"]').addClass('hide')
              
              
            }
              //$('[data-typeclasses="basic"] a:visible').first().click();
            if(data.error){
              alert(data.message);
            }

      },
       getbasicitemsubstosub:function(data){
		  
              if(data.data){
                //$('[data-classeslsit]').empty();
                classb.getbasicclassessub(data)
              }
		   if(data.items){
                //$('[data-classeslsit]').empty();
                classb.getbasicclassessub(data)
              }
            $('#selectexistingstyle').modal('show');
              //$('[data-typeclasses="basic"] a').first().click();
              if(data.error){
                alert(data.message);
              }

        },
      getbasicclassessub:function(data){
		  	var pdata= 'false';
		  	if(data.data){
		  		pdata = data.data 
			}
			if(data.items){
		  		pdata = data.items 
			}
		  	
		  	
		  
              if(pdata){
				  //alert(JSON.stringify(data))
               //var createrow = $('<div class="row"></div>');
                 $('[data-classeslsit="basic"]').empty()
				 
				var btyep = false;
				if(data.class){
						if(data.class.type){
							var btyep= data.class.type
						}
				}else{
					if(basicselected){
						var btyep=basicselected
					}else{
						var btyep = 'background_color';
					}
					
				}
				 
				 
				 
                if(pdata != ''){
                 var tysss = ''
                  var prefix = data.prefix;
                 
                 
                   $.each(pdata, function(key, val){
                     if(modestduio != 'collection'){
                        var gethtml = $('<li data-role="listitem" data-sub_type="bg"> <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>');
                     }else{
                        var gethtml = $('<li data-role="listitem" data-sub_type="bg"> <a href="#" data-buttonrole="gclasses" ><span class="projecttitle">{name}</span></a></li>');
                     }
                      $.each(val, function(k, b){
                          var datakey = 'data-'+k;
						   gethtml.attr(datakey, b)
                           
                      }); 
					   
					   if(val.default_class){
						    gethtml.attr('data-classname', val.default_class);
							gethtml.find('.projecttitle').html(val.default_class);
					   }else{
						   gethtml.attr('data-classname', val.class);
							gethtml.find('.projecttitle').html(val.class);
					   }
					   //var gethtml = classb.getclassbox(val, prefix);
                       if(btyep){
						   gethtml.attr('data-sub_type', btyep)
					   }
                     tysss = val['type']
                     if(val['json_data']){
                            if(typeof val['json_data'] =='string'){
                              var data = JSON.parse(val['json_data']);
                              if(data['classname']){
                                  //gethtml.find('.projecttitle').html(data['classname']);
								  
                              }
                            }
                           
                        }
                        
                       $('[data-classeslsit="basic"]').append(gethtml);
                   }) 
                   
                   
                  // createrow.appendTo('[data-existmodal="listing"]');
                  //var gethtml = $('<div data-role="listitem" data-sub_type="nolcass"> Sorry  style is not have in this  tab,  please create </div>');
                  // $('[data-classeslsit="basic"]').append(gethtml)
                 }else{
                     $('[data-classeslsit="basic"]').append('Sorry  style is not have in Basic tab,  please create ')
                 }
                 $('.ajaxloding').remove()
                  if(modestduio != 'collection'){
                   
                  }
            } 
      },
      getbasicclasses:function(data){
              if(data.data){
               //var createrow = $('<div class="row"></div>');
                
                if(data.data != ''){
                
                  var prefix = data.prefix;
                  
                   $.each(data.data, function(key, val){
                     
                      var gethtml = classb.getclassbox(val, prefix);
                      $('[data-classeslsit="basic"]').append(gethtml)

                   })  
                  // createrow.appendTo('[data-existmodal="listing"]');
                  
                 }else{
                     $('[data-classeslsit="basic"]').append('Sorry '+loadclasstype+' style is not have in Basic tab,  please create <a href="#">'+loadclasstype+'</a> style')
                 }
                 $('.ajaxloding').remove()
                
                 if(modestduio != 'collection'){
                 
                }
            } 
      },
      getclassbox:function(css, prefix){
          var htmls = $('[data-template="listingclasses"]').html()
          var cssdata = JSON.stringify(css.css)
          htmls = htmls.replace(/{data}/g, cssdata);
         // htmls = htmls.replace(/{type}/g, loadclasstype);
          htmls = htmls.replace(/{classpath}/g, css.classpath);
          htmls = htmls.replace(/{name}/g, css.classname)
          htmls = htmls.replace(/{realClass}/g, css.realClass);
          htmls = htmls.replace(/{styletype}/g, prefix);
          htmls = htmls.replace(/{prefix}/g, prefix);
          
          return htmls;
      },
      dragdata:{
        
      },
      getcssdata:{
        
      },
      opneeditpopyp:function(selector, tag){
            var type = ''
			
            if($('[data-action="sub"]').val() !="general"){
                selector = $('[data-action="sub"]').val();
            }
            
            
            $.each(classb.editclasstye, function(key, val){
                  for (var i = 0; i < val.length; i++) {
                        if (val[i] === selector) {
                            type = key;
                            return true;
                        }
                  }
            })
            if(type==''){
              type = 'button_style'
            }
            collectiontype = type
           // $('[data-typeclasses="basic"]').empty()
            $('[data-typeclasses="collections"]').empty()
            //$('[data-classeslsit]').empty()
             $('#sortable').empty();
		 	if(tag){
				$('[data-opstudios="elementcollection"]').removeClass('hide')
				$('[data-classeslsit="elementcollection"] li').addClass('hide');
				$('[data-classeslsit="elementcollection"] li[data-sub_type="'+tag+'"]').removeClass('hide');
		   		//sendajax('/admin/framework-versions/version/all-collections', {type:tag}, classb.getEcollections);
          	}else{
				$('[data-opstudios="elementcollection"]').addClass('hide')
			}
		  //sendajax('/admin/framework/get-basic-subs', {type:type}, classb.getbasicitem)
            //sendajax('/admin/framework/get-class-with-tab-type-sub', {"tab":'collections', type:type}, classb.getcollectionitem);
            classb.chekedcssfor(activeseletor)
            classb.updatecss()
      },
		openSelectclasses:function(selector, target, sub){
            var type = ''
            $.each(classb.editclasstye, function(key, val){
                  for (var i = 0; i < val.length; i++) {
                        if (val[i] === selector) {
                            type = key;
                            return true;
                        }
                  } 
            })
            if(type==''){
              type = 'button_style'
            }
            
            $('[data-typeclasses="basic"]').empty()
           // sendajax('/admin/framework/get-basic-subs', {type:type}, classb.getbasicitem);
            var data = {}
           if(sub){
             data['type'] = target
             data['sub'] = sub
           }
              
             
            if(target=='basic'){
               sendajax('/admin/framework/get-basic-sub-types', data, classb.getbasicitemsubs);
            }else{
               sendajax('/admin/framework/get-basic-sub-types', data, classb.getbasicitemsubs);
            }
           
      },
       getcollections:function(data){
          if(data.data){
              $.each(data.data, function(key, val){
				
                      var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses"><span class="projecttitle">{name}</span></a></li>');
                      $.each(val, function(k, b){
                          var datakey = 'data-'+k;
                           gethtml.attr(datakey, b);
						  if(k=='name'){
							  	 var datakesy = 'data-classname';
							  	var vs = '.'+b;
							  	 gethtml.attr(datakesy, vs);
						  }
                           
                      });  //var gethtml = classb.getclassbox(val, prefix);
				   		 gethtml.find('.projecttitle').html(val['name']);
				  		
                        if(val['json_data']){
							if(val['json_data'] != ' '){
								if(typeof val['json_data'] =='string'){
								  var data = JSON.parse(val['json_data']);
								  if(data['classname']){
									  gethtml.find('.projecttitle').html(data['classname']);
								  }
								}
                           }
                        }
				  	   
                       var targetmenu = val['sub_type'];
				  		
                       $('[data-classeslsit="'+targetmenu+'"]').append(gethtml)
                   }) 
          }
      },
		getEcollections:function(data){
			$('[data-classeslsit="elementcollection"]').empty();
          if(data.items){
			  $.each(data.items, function(key, val){
				     // var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses"><span class="projecttitle">{name}</span></a></li>');
				  	if(val['css_data']){
					   var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses" data-role="elcollection"><span class="projecttitle"></span></a></li>');
						$.each(val, function(k, b){
								var datakey = 'data-'+k;
								gethtml.attr(datakey, b);
						});
						 gethtml.find('.projecttitle').html(val['name']);

						 $('[data-classeslsit="elementcollection"]').append(gethtml)
					  }
                   }) 
			 
          }
      },
		getComponetClasses:function(data){
			$('[data-classeslsit="componetclasses"]').empty();
          if(data.items){
			  $.each(data.items, function(key, val){
				     // var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses"><span class="projecttitle">{name}</span></a></li>');
				  	if(val['css_data']){
					   var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses" data-role="componet"><span class="projecttitle"></span></a></li>');
						$.each(val, function(k, b){
								var datakey = 'data-'+k;
								gethtml.attr(datakey, b);
						});
						if(val['name']){
						 gethtml.find('.projecttitle').html(val['name']);
							gethtml.attr('data-classname', val['name']);
						 }	

						 $('[data-classeslsit="componetclasses"]').append(gethtml)
					  }
                   }) 
			 
          }
      },
      ajaxgetcollections:function(d){
          modestduio = 'collection';
          $('[data-tabnav="button"]').removeClass('hide')
          $('[data-role="selectedClasses"]').removeClass('hide')
		 
          $.each(d, function(i, key){
                var typedata = false;
			 
                 switch(key) {
                      case 'textcollection':
                        typedata = 'text'
                          break;
                      case 'containercollections':
                          typedata = 'container'
                          break;
                      case 'imagecollections':
                          typedata = 'image'
                          break;
                       case 'basicclasses':
                          typedata = 'basic';
                          break;
						case 'elementcollection':
                          typedata = 'elementcollection';
                          break;
						 case 'componetclasses':
                          typedata = 'componetclasses';
                          break;
                      default:

                  }
			   if(typedata){
                 if(typedata=='basic'){
					//sendajax('/admin/framework-versions/version/get-basic-classes', {}, classb.getbasicitemsubs); 
					 sendajax('/admin/framework-versions/version/get-basic-configurators', {}, classb.getbasicitemsubs); 
                 }else if(typedata == 'elementcollection'){
					 sendajax('/admin/framework-versions/version/all-collections', {}, classb.getEcollections);
				 }else if(typedata == 'componetclasses'){
					 sendajax('/admin/framework-versions/version/get-component-classes', {}, classb.getComponetClasses);
				 }else{
                    sendajax('/admin/framework-versions/version/get-global-classes', {type:typedata}, classb.getcollections);
                 }
               }
          })
          //sendajax('/admin/framework/get-global-classes', {}, classb.getcollections);
      },
        editmodecssselector:function(targetelement){
                var html = $('<li></li>');
                var htmlsstucher = $('[data-template="listingrow"]').html();
                var tagname = targetelement
                var cssselector = tagname.toLowerCase();
                var rowid = _.uniqueId('row_');
               
                htmlsstucher = htmlsstucher.replace(/{rowid}/g, rowid)
                htmlsstucher = htmlsstucher.replace(/{csstarget}/g, cssselector);
                if(targetelement!="css"){
                    htmlsstucher = htmlsstucher.replace(/{name}/g, tagname)
                    htmlsstucher = htmlsstucher.replace('<i class="fa fa-plus" aria-hidden="true"></i>', '<i class="fa fa-trash-o" aria-hidden="true"></i>');
                    htmlsstucher = htmlsstucher.replace('data-caction="collapse"', 'data-caction="deleteselector"');
                }else{
                     htmlsstucher = htmlsstucher.replace(/{name}/g, 'Main class')
                }
                html.append(htmlsstucher);
              
                if(!$('[data-roles="cssselectorttree"] > ol > li > ol ').is('ol')){
                    $('[data-roles="cssselectorttree"] > ol > li ').append('<ol class="componetlisting"></ol>')
                }

                $('[data-roles="cssselectorttree"] > ol > li ol').append(html)
                
              $('[data-listingoption="active"]').each(function(){
                     activedeactive($(this));
              })
              
      },
      action:{
        edit:function(target){
            $('[data-tabpreview="setting"]').collapse('hide');
            $('[data-tabpreview="selectclass"]').collapse('show');
            var gettarget = target.closest('li').parent('ol');
			$('.componetlisting [data-listing]').removeClass('active')
            target.closest('[data-listing]').addClass('active')
            if(gettarget.is('.componetlisting')){
              if(gettarget.closest('[data-role="masterelementtree"]').data('role') ){
                activeseletor = target.data('cssselector');
              }else{
                if(gettarget.closest('[data-roles="cssselectorttree"]').data('role') =='cssselectorttree'){
                  activeseletor = target.data('cssselector');
                }else{
                  activeseletor = 'css';
                }
              }
            }else{
              activeseletor  = target.data('cssselector'); 
            }
			var gettags = activeseletor.split('_');
			
			$('[data-temporarilyclasses]').empty();
			classb.readclasses(target.data('id'), 'yes')
			fisttimeload = activeseletor;
			if(gettags[1]){
				classb.opneeditpopyp(target.data('cssselector'), gettags[1]);	
			}else{
				classb.opneeditpopyp(target.data('cssselector'));
			}
            
        },
        deleteselector:function(target){
              var gettarget = target.closest('li').parent('ol')
              if(gettarget.is('.componetlisting')){
                  if(gettarget.closest('[data-role="masterelementtree"]').data('role')){
                    gettargetkey = target.data('cssselector');
                  }else{
                    if(gettarget.closest('[data-roles="cssselectorttree"]').data('role') =='cssselectorttree'){
                        gettargetkey = target.data('cssselector');
                      }else{
                        gettargetkey = 'css';
                      }
                  }
                }else{
                  gettargetkey  = target.data('cssselector'); 
                }  
          
              // classb.deletecomponet('','',gettargetkey)
              // classb.deleteExtracomponet('','',gettargetkey)
            target.closest('[data-listing]').remove();
            //classb.updatecss();
           
        },
        save:function(target){
            $('[data-tabpreview="setting"]').collapse('show')
            $('[data-tabpreview="selectclass"]').collapse('hide');
        },
        decline:function(target){
            $('[data-tabpreview="setting"]').collapse('show');
            $('[data-tabpreview="selectclass"]').collapse('hide');
        },
        editpopup:function(target){
          var senddata = {}
           var getclassestype = $('[data-models="classes"] li.active').data('role');
          $('[data-classeslsit="'+getclassestype+'"]').html('<span class="ajaxloding"></span>')
           senddata['tab'] = getclassestype
           senddata['type'] = target.data('type');
           senddata['sub'] = target.data('subtype');
           styletype = 'bsc'+  senddata['sub'];
           styletype  = senddata['sub'];
           classb.getcssdata = {}
           classb.getcssdata = senddata; 
           target.closest('ul').find('li').removeClass('active_class')
           target.closest('li').addClass('active_class')  
           //sendajax('/admin/framework/get-class-with-tab-type-sub', senddata, classb.getbasicclasses)
        },
        collapse:function(target){
            if(target.is('.active')){
                target.removeClass('active')
                target.parent('[data-rowid]').next('ol').slideDown();
                target.find('.fa').removeClass('fa-minus');   
            }else{
               target.addClass('active')
               target.parent('[data-rowid]').next('ol').slideUp()
               target.find('.fa').addClass('fa-minus');
            }
        },
        filterclasses:function(target){
           var type = target.data('type');
           var typeid = target.data('id');
			
          
           sendajax('/admin/framework-versions/version/get-basic-configurators', {type:type, p:typeid}, classb.getbasicitemsubstosub);
          
          
        },
        getbasic:function(target){
            if(target.data('type')){
               basicfilter = target.data('type')
            }else{
              basicfilter = ''
            }
            if(target.data('subtype')){
              subtype = target.data('subtype')
              subtype = subtype.toLowerCase();
              subtype = subtype.replace(/ /,'_');
            }else{
               subtype = false;
            }
            basissubFilter = target.data('dataclass');
          
            $('[data-classeslsit="basic"]').html('<span class="ajaxloding"></span>');;
            classb.openSelectclasses(getstyletype,  basicfilter, subtype);
        },
        getselectstyle:function(target){
            if(target.data('type')){
               basicfilter = target.data('type')
            }else{
              basicfilter = ''
            }
            $('[data-classeslsit="basic"]').html('<span class="ajaxloding"></span>');;
            classb.openSelectclasses(getstyletype,  basicfilter);
        },
        getcss:function(target){
            var getjson = target.closest('[data-cssdata]').data('cssdata');
            var getjson_data = target.closest('[data-role][data-type]').data('json_data');
            if(getjson){
                if(getjson['normal']){
                    if(getjson['normal']['text-shadow']){
                      classb.generalSetting.csssetting.css['text-shadow'] = getjson['normal']['text-shadow']
                      classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
                      classb.editReload();
                      $('#selectexistingstyle').modal('hide');
                    }else{
                      var nromalcss = getjson['normal'];
                      $.each(nromalcss, function(key, val){
                         
                          classb.updatejson(key, val)
                        
                      })
                       //classb.editReload();
                       $('#selectexistingstyle').modal('hide');
                      
                    }
                  
                   //$('[data-typeclasses="basic"]').empty()
                }
            }
            if(getjson_data){
              $('#selectexistingstyle').modal('hide');
                        
              if(typeof getjson_data=='object'){
                      if(getjson_data['css']){
                      $.each(getjson_data['css'], function(key, val){
                          classb.updatejson(key, val)   
                        //classb.generalSetting.csssetting.css[key] = val
                          //classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting));
                          if(target.closest('li').hasClass('active')){
                            classb.deleteJson(key);
                           
                          }else{
                             classb.updatejson(key, val)   
                          }
                      })
                      classb.editReload();
                       
                    }
                }
                    if(target.closest('li').hasClass('active')){
                            target.closest('li').removeClass('active');
                          }else{
                              target.closest('ul').find('li').removeClass('active')
                           target.closest('li').addClass('active');
                          }
               //$('[data-typeclasses="basic"]').empty()
            }
            
        },
        gclasses:function(target){
              var getjson = target.closest('[data-role="listitem"]').data('cssdata');
              var getcssdata = target.closest('[data-role="listitem"]').data('css_data');
              var getsubtype = target.closest('[data-role="listitem"]').data('sub_type');
              var getjson_data = target.closest('[data-role="listitem"]').data('json_data');
			  var getclassname = target.closest('[data-role="listitem"]').data('classname');
			  var typeel =   target.data('role');
			
		      if(target.closest('li').hasClass('active')){
				  if(typeel=="componet"){
					  classb.deleteJson('componet');
				  }else{
                	classb.deleteJson(getsubtype);
				  }
                target.closest('li').removeClass('active');
              }else{
                  target.closest('ul').find('li').removeClass('active')
                  target.closest('li').addClass('active');
				  if(typeel=="elcollection"){
					 if(getcssdata){
						 	var datas = getcssdata.split(':')
							if(datas[1]){
								classb.updatejson(getsubtype, datas[1]);
							}
					 }
				  }else  if(typeel=="componet"){
					classb.updatejson('componet', getclassname);
				  }else{
				  
					  if(getclassname){
							classb.updatejson(getsubtype, getclassname)
					  }else if(typeof getjson_data=='object'){
								  if(getjson_data['classname']){
									var classnamess = getjson_data['classname']
									var typecss = $('[data-tabnav="button"] .active [data-rolecss]').data('rolecss')
									if(typecss =='hover'){
									  classnamess += '-hover';
									}
									if(typecss =='selected'){
									  classnamess += '-focus';
									}

									classb.updatejson(getsubtype, classnamess)
								  // classb.generalSetting.csssetting.css[getsubtype] = getjson_data['classname']
								  // classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting));
								   //classb.editReload();
							 }
						}
					}
              }
          },
          deletecollection:function(target){
            var targetremove = target.data('id');
			var targetrclass = target.data('class');
			classb.runremoveclass(targetrclass);
			 
          },
		  addtempclass:function(target){
			  var targetremove = target.data('id');
		      var targetrclass = target.data('class');
			  classb.runAddclass(targetrclass);
			  
		  },
        selectmaster:function(target){
               
                var targetelement = $('[data-selectmaster]').val();
              
                if($('[data-role="masterelementtree"]').find('[data-cssselector="'+targetelement+'"]').is('[data-cssselector]')){
                  alert('Allready have '+targetelement+' master');
                  return false;
                }
               classb.editmodeli(targetelement);
  
        },
        selectcssselector:function(target){
            var selector = $('[data-selectcssmaster="cssselector"]').val();
            var tag = $('[data-selectcssmaster="target"]').val();
            var getdatamode = $('[data-selectcssmaster="cssselector"] option:selected').data('mode');
            if(getdatamode){
             var getvals =  $('[data-cssseelctortype="'+getdatamode+'"]').val();
              selector = selector.replace('val', getvals);
            }
            var cssseletor = tag + selector;
            if($('[data-roles="cssselectorttree"]').find('[data-cssselector="'+cssseletor+'"]').is('[data-cssselector]')){
                  alert('Allready have '+cssseletor+' master');
                  return false;
                }
               classb.editmodecssselector(cssseletor);
                
        },
          addcssselector:function(target){
              var getname = target.data('cssselector')
              $('[data-roles="cssselectorttree"] li').removeClass('active');
              target.closest('li').addClass('active')
              $('[data-actviestduio]').html(getname)
            
          },
          results:function(target){
            var activeclass =  activeseletor;
                classb.sl.cssview.removeClass(activeclass);
              $('[data-previewcolumn="option"]').addClass('hide')
              $('[data-tabnav="button"] li').removeClass('active')
          }
      },
		
      instalstudios:function(target){
          if(classb.setupstduio[target]){
            
               $.each(classb.setupstduio[target], function(key, val){
                  $('[data-opstudios="'+key+'"]').attr('data-opactives', 'true');
                  
                 if(key=="collection"){
                   if(val!=''){
                     classb.ajaxgetcollections(val);
                   }
                 }
                  $.each(val, function(i, va){
                       
                        $('[data-opstudios="'+va+'"]').attr('data-opactives', 'true');
                  });
                 
               });
          }else{
            $('[data-opstudios]').attr('data-opactives', 'true');
          }
          $('[data-opstudios]').not('[data-opactives="true"]').remove();
          $('[data-studitabs="opstudios"] li').first().children('a').click();
      }
	}
	     
   classb.generalSetting.csssetting.class = $('[data-role="classname"]').val();
   classb.generalSetting.csssetting.classname = '.'+classb.generalSetting.csssetting.class;
    
   newmodaljson = JSON.stringify(classb.generalSetting);
   
   
    
  $('[data-previewclass] > *').attr('data-role','classview')
  classb.sl.cssview = $('[data-role="classview"]');
  $('.componetlisting').remove();
	classb.readElement();
	//classb.readElementmaster();
  //classb.newMode()
  classb.instalstudios('all')
    
  
	$('body').on('change','select[data-selector]',function(){
		var thiscsspro = $(this).attr('data-css');
		var thisval = $(this).val()
    var multycss = $(this).data('multycss');
    if(multycss){
         classb.updatejson('','',multycss,$(this))
    }else{
         classb.updatejson(thiscsspro,thisval)
    }
   
	})	
  

  
  
	$('[data-role="classname"]').keyup(function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.generalSetting.csssetting.class = classnames;
			classb.generalSetting.csssetting.classname = '.'+classnames;
			classb.updatecss();
	})
 
 

 
  
 $('body').on('click', '[data-role="removeTextShedow"]', function(){
      $(this).closest('[data-role="textGroup"]').remove()
      var mylticss = $(this).data('mylticss')
       classb.updatejson('','',mylticss)
  }).on('click', '[data-buttonrole]', function(){
        var gettype = $(this).data('buttonrole');
       
          if(classb.action[gettype]){
           
                   classb.action[gettype]($(this));
         }
  }).on('change', '[data-selectcssmaster="cssselector"]', function(){
        var gettargettype= $(this).find('option:selected').data('mode');
          $('[data-cssseelctortype]').addClass('hide')
        if(gettargettype){
           $('[data-cssseelctortype="'+gettargettype+'"]').removeClass('hide')
        }
  })

  
  $('[data-insettemp="boxShadow"]').sortable({
        update: function( event, ui ) {
          classb.updatejson('','','boxShadow')
        }
    });
  
  
  
    $('[data-togglebutton="textshadow"]').click(function(){
      var getactive = $(this).hasClass('active');
      if(getactive){
          $(this).removeClass('active')
      }else{
         $(this).addClass('active')
      }
  })
  
  $('body').on('click', '[data-tabnav="button"] a', function(){
      classb.updatenav();
      var getcyrntdata = $(this).data('rolecss');
      if(getcyrntdata=='results'){
        $('[data-previewcolumn="option"]').addClass('hide')
        classb.updatecss();
       }else{
         $('[data-previewcolumn="option"]').removeClass('hide')
       }
      classb.chekedcssfor(getcyrntdata); 
      
       classb.updatecss();
      
   })
   $('[data-tabactive]').change(function(){
       classb.updatenav();
       classb.updatecss();
   })
     
  $('[data-loadnew]').click(function(){
      var getdata = $(this).data('loadnew');
      setTimeout(function(){ 
        if(classb.dataload){
            if(classb.dataload[getdata]){
               $('[data-export="json"]').val(JSON.stringify(classb.dataload[getdata]))
               classb.editReload();
               
            }
        }
     }, 500);
    $('#gradient-datalist').collapse('hide')
  })
  
 $('[data-typelsit="lists"]').change(function(){
      var getval = $(this).val()
	  basicselected = getval
      //$('[data-typeclasses="basic"]').find('[data-type]').addClass('hide');
    sendajax('/admin/framework-versions/version/get-basic-configurators', {type:getval}, classb.getbasicitemsubs);
      
 })
   $('body').on('click', '[data-caction]', function(){
               var gettype = $(this).data('caction')
               if(classb.action[gettype]){
                    classb.action[gettype]($(this));
               }
               
   })
 /* Studio Switch*/  
$('body').on('mouseover', '[data-previewclass] [data-selection]', function(e){
      var etargetr = $(e.target);
      $('[data-previewclass] [data-selection]').removeClass('htmlindicate');
      var targetid  = etargetr.data('selection') 
      etargetr.addClass('htmlindicate');
      $('[data-listing]').removeClass('activelist')
      $('[data-listing][data-rowid="'+targetid+'"]').addClass('activelist')
  }).on('mouseover', '[data-listing]', function(e){
      var etargetr = $(e.target);
      var targetid  = etargetr.data('rowid') 
      $('[data-listing]').removeClass('activelist')
      $('[data-previewclass] [data-selection]').removeClass('htmlindicate');
      etargetr.addClass('activelist');
      $('[data-previewclass] [data-selection="'+targetid+'"]').addClass('htmlindicate');
  }).on('click', '[data-listing], [data-previewclass] [data-selection]', function(e){
      var etargetr = $(e.target);
      var targetid  = etargetr.closest('[data-rowid]').data('rowid') 
      if(!targetid){
        targetid = etargetr.closest('[data-selection]').data('selection')
      }
      $('[data-listing]').removeClass('selectedactivelist')
      $('[data-previewclass] [data-selection]').removeClass('ahtmlindicate');
    
      $('[data-listing][data-rowid="'+targetid+'"]').addClass('selectedactivelist')
      $('[data-previewclass] [data-selection="'+targetid+'"]').addClass('ahtmlindicate');
  })

$('[data-role="unitsetting"] ').on('change', 'select, [type="checkbox"], [type="radio"]', function(){
	getnewhtmls = true
	classb.updatecss();
}).on('keyup', 'input', function(){
	getnewhtmls = true
	classb.updatecss();
})


  
  
  classb.editTimeReload();
  
  $('[data-listingoption="active"]').each(function(){
       activedeactive($(this));
  })
  
  function activedeactive(target){
      var istru = target.is(':checked')
        var targetrow = target.closest('[data-listing="row"]')
        if(istru){
            targetrow.removeClass('disabledlist')
           targetrow.find('button[type="button"]').removeAttr('disabled')
        }else{
            targetrow.find('button[type="button"]').attr('disabled', 'disabled')
            targetrow.addClass('disabledlist')
        }
  }
	

	
  
})
