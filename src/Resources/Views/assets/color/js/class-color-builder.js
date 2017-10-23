
$(function(){

    $('[data-role="selectStudio"]').val('color').selectpicker('refresh');
  var colorkeuphex = true;
  var colorkeuprgb = true;
  var colorkeuphsv = true;
	var classb = {
			sl:{
				cssview : $('[data-role="classview"]'),
				cssstyle : $('[data-role="savedcss"]'),
				exportjson : $('[data-export="json"]'),
				exportcss : $('[data-export="css"]'),
				save : $('[ data-save="class"]'),
				controlLable:$('[data-role="classview"]').find('[data-fcontrol="label"]'),
				controlInput:$('[data-role="classview"]').find('[data-fcontrol="input"]'),
				labelPosition : $('.label-Position button'),
				selectedfield: $('[data-role="fieldsType"]').val()
			},
      less:"",
      reloaddata:'',
			generalSetting:{
				csssetting:{
					css:{},
          backgound:{
            type:"linear-gradient",
            angle:"180_deg",
            points:[]
          }
          
				}
			},
			runcss:function(){
				var data = classb.generalSetting.csssetting.classname+', '+classb.generalSetting.csssetting.classname+'-hover:hover, '+classb.generalSetting.csssetting.classname+'-focus:focus{'
				$.each(classb.generalSetting.csssetting.css, function(io, iv){
					if(io=='containerclass' || io== 'animationclass' || io== 'textclass' || io== 'iconclass'){
            data+= iv+'; ';
          }else{
					  data+= io +":"+iv+'; ';
          }

				});
        data+='}';
        
				classb.generalSetting.csssetting.savedcss = data;
				classb.sl.exportcss.val(classb.generalSetting.csssetting.savedcss)
				classb.sl.cssstyle.html(classb.generalSetting.csssetting.savedcss)
       
        

			},
       runhtml : function(){
              var htmloptiondata = classb.generalSetting.csssetting.htmlclass;
        
       },
      compile:function(){
        	less.render([classb.less.replace("{{{lesscss}}}", classb.generalSetting.csssetting.savedcss)].join("\n\n")).then(
              function (output) {
               // alert(output.css);
                console.log(output);
                
                classb.sl.cssstyle.html(output.css)
                
              }, function (error) {
                //bootstrap.response("Error", error);
                  alert(error);
              });
        
          
          
      },
			updatecss:function(cp, cv){
			
				
				classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
				classb.runcss()
				classb.sl.cssview.attr('class', classb.generalSetting.csssetting.class)
				
			},
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
        
				if(getjsonvale){
					classb.generalSetting.csssetting = JSON.parse(getjsonvale);
          editcss = classb.reloaddata.css;
          editBackgound = classb.reloaddata.backgound;
          
					$.each(editcss, function(io, iv){
						iv = iv.replace('px','')
						$('[data-css="'+io+'"][data-selector]').val(iv)
						if($('[data-css="'+io+'"]').is('.settingSlider')){
							iv = iv.replace('s','')
							$('[data-css="'+io+'"].settingSlider').slider('value', iv)
						}
						if($('[data-textcolor="'+io+'"]').is('[data-textcolor]')){
							$('[data-css="'+io+'"]').val(iv)
						}
					});
          
          actionevent.runEditbackgound(editBackgound)
          
					
				}
        
        
        getcontainer = $('select[data-subcss="type"][data-multycss="background"] option:selected').data('getcontainer');
        if(getcontainer){
             $('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
             $('[data-showcontainer="'+getcontainer+'"]').collapse('show');
        }
        
        classb.updatecss();
        $('.customselect').selectpicker('refresh');
				
			},
			chekedcssfor:function(ccf){
				if(classb.generalSetting.csssetting[ccf]){
					$.each(classb.generalSetting.csssetting[ccf], function(io, iv){
							iv = iv.replace('px','')
							$('[data-css="'+io+'"][data-selector]').val(iv).change();
							if($('[data-css="'+io+'"]').is('.settingSlider')){
								iv = iv.replace('s','')
								$('[data-css="'+io+'"].settingSlider').slider('value', iv).change();
							}
							if($('[data-textcolor="'+io+'"]').is('[data-textcolor]')){
								$('[data-css="'+io+'"]').val(iv).change();
							}
						});
				}
			},
			csspropa:{
				background:function(){
            var point = []
            var clore = '';
            var gettype = $('[data-subcss="type"][data-multycss="background"]').val()
            var angel = $("#angleIcon").anglepicker("value");
            if(gettype=="linear-gradient" || gettype=="repeating-linear-gradient" ){
              adeg = angel+"deg";
              classb.generalSetting.csssetting.backgound.angle = angel+"_deg"
            }else{
              var size1 = $('[data-subcss="size"][data-multycss="background"]').val()
              var size2 = $('[data-subcss="size2"][data-multycss="background"]').val()
              var positionx = $('[data-subcss="positionx"][data-multycss="background"]').slider( "value" )
              var positiony = $('[data-subcss="positiony"][data-multycss="background"]').slider( "value" )
              
              classb.generalSetting.csssetting.backgound.size = size1
              classb.generalSetting.csssetting.backgound.size2 = size2
              classb.generalSetting.csssetting.backgound.positionx = positionx
              classb.generalSetting.csssetting.backgound.positiony = positiony
              
              adeg = size1+' '+size2+' at '+positionx+'% '+positiony+'%';
            }
            
            $('[data-bgrole="addpointer"] a').each(function(index, element) {
							    var pointobge = {}
                      var lefts = $(this).data('left')
                      pointobge['left'] = lefts
                      lefts = lefts.replace("_", "");
                      pointobge['sotast'] = lefts.replace('%','')
                      pointobge['backgound'] = $(this).data('backgound');
                      point.push(pointobge)
						});
            
            point.sort(function(a, b) {
                return a.sotast - b.sotast;
            });
            
            $.each(point, function(key, value){
              if(value.backgound != '*/'){
                  if(key != '0'){
                     clore += ', ';
                  }
                  clore += value.backgound
                  
                  if(value.sotast == 'undefined'){
                     clore += '';
                  }else{
                     clore += ' '+value.sotast+'%';
                  }
                }
            })        
             
            classb.generalSetting.csssetting.backgound.type = gettype;
            classb.generalSetting.csssetting.backgound.points = point;
            csspreview = gettype+"("+adeg+", "+ clore+" )";
            cssdata = "linear-gradient(90deg, "+ clore+" )";
            
            $('[data-bgrole="makergrid"]').css('background', cssdata)
            var openload = $('[data-export="conected"]').attr('data-open');
              if(openload){
                 $('[data-export="conected"]').attr('data-val', csspreview).val('background:'+csspreview+';')
              }
            classb.generalSetting.csssetting.css['background'] = csspreview;
           
				},
        backgroundcolor:function(){
             var csspreview = $('[data-colortype="backgroundcolor"]').colorpicker('getValue') 
            classb.generalSetting.csssetting.css['background'] = csspreview;
        },
        backgroundimage:function(){
            var getimg = $('[data-imageurl]').attr('src');
            var getrepeat = $('[data-subcss="repeat"][data-multycss="backgroundimage"]').val();
            var getposition = $('[data-subcss="position"][data-multycss="backgroundimage"]').val();
            var getposition2 = $('[data-subcss="position2"][data-multycss="backgroundimage"]').val();
            var getsize = $('[data-subcss="size"][data-multycss="backgroundimage"]').val();
            
            var applycss = 'url('+getimg+') '+ getrepeat +' '+ getposition +' '+ getposition2;
            classb.generalSetting.csssetting.css['background'] = applycss;
            classb.generalSetting.csssetting.css['background-size'] = getsize;
        }
        
			}
		}
		classb.generalSetting.csssetting.class = 'classname';
		classb.generalSetting.csssetting.savedcss = '';
		classb.generalSetting.csssetting.classname = '.'+classb.generalSetting.csssetting.class;
     var openload = $('[data-export="conected"]').attr('data-open');
     setTimeout(function(){ 
               openload = $('[data-export="conected"]').attr('data-open');
              if(openload){
                openload = $('[data-export="conected"]').val()
                
                $('[data-bgrole="importcss"]').val(openload)
                $('[data-action="importcss"]').click();
              }
             }, 1000);
      
		
     $.get("/app/Modules/Studios/Resources/Views/assets/css/generatedcss.less", function(data){
            classb.less = data;
            classb.reloaddata = JSON.parse(classb.sl.exportjson.val())
            if(!openload){
              classb.editReload();
              
            }
            
            
      });	
      
    var actionevent = {
       inot : function(d, ap, imports){
            d.on('mouseenter', function(){
                $('.addmaker').removeClass('hide')
            }).on('mousemove', function(e){
              var getleft = e.pageX - d.offset().left
              var ds = d.width()
              if(getleft > -1 && getleft < ds){
                    $('.addmaker').css("left", getleft+"px");
               }
              
            }).on('mouseleave', function(){
               $('.addmaker').addClass('hide')
            }).on('click', function(e){
              var getleft = e.pageX - d.offset().left;
              var ds = d.width()
              var percentage = (parseFloat(getleft / ds) * 100).toFixed(2);
              color = $('.color-picker').colorpicker('getValue');
              actionevent.addNewpoint(percentage, color, true)
              
            })
            
            ap.on("mousedown", '.iconBorder', function(){
                 $('.iconBorder').removeClass('activemaker')
                  $(this).addClass('activemaker')
                  var getcolor = $(this).data('backgound')
                  $('.color-picker').colorpicker('setValue', getcolor)
                  
            }).on("mouseup", '.iconBorder', function(){
                 
            })
            
            ap.on('click', '[data-bgrole="removepoint"]' , function(){
                 
                 var lenthd =  classb.generalSetting.csssetting.backgound.points.length
                  if(lenthd<3){
                    alert("You sould have at least 2 point")
                    return false;
                  }
                  $(this).parent().remove();
                  classb.csspropa['background']();
                  classb.updatecss()
            })
            
            $('[data-bgrole="AddNepoint"]').click(function(){
              var getleft = Math.floor((Math.random() * 100) + 1);
              var ds = d.width()
              var percentage = getleft;
              color = $('.color-picker').colorpicker('getValue');
              actionevent.addNewpoint(percentage, color, true)
            })
            
            $('[data-bgrole="Refresh"]').click(function(){
                $('[data-bgrole="addpointer"] a').remove();
               classb.sl.exportjson.val(JSON.stringify(classb.reloaddata))
               classb.editReload();
            })
            
            
            $('[data-action="importcss"]').click(function(){
                  var importcss =  imports.val()
                  var sintextError = false;
                  if (importcss == '') {
                      alert(actionevent.errorm.empty);
                      return;
                  }else  if (importcss.indexOf('gradient') == -1) {
                   var answer =  importcss.match(/background\s*:\s*([^;]+)/);
                  if(answer){
                     if(answer[1]){
                        $('[href="#color"]').click()
                        $('[data-colortype="backgroundcolor"]').colorpicker('setValue', answer[1]);
                     }else{
                       alert(actionevent.errorm.syntax);
                     }
                   }else{
                     alert(actionevent.errorm.syntax);
                   
                   }
                   
                    //  
                      return;
                  }else if (importcss.indexOf('{') != -1) {
                      alert(actionevent.errorm.syntax);
                      return;
                  }else if (importcss.indexOf('/*') != -1 || importcss.indexOf('*/') != -1) {
                      alert(actionevent.errorm.syntax);
                      return;
                  }else{
                   importcss = importcss.replace('-ms-', '')
                   importcss = importcss.replace('-moz-', '')
                   importcss = importcss.replace('-o-', '')
                   importcss = importcss.replace('-webkit-', '')
                  }
                  
                  var importcss = importcss.trim()
                  var loadbackground = {}
                  if(importcss.indexOf('repeating-linear-gradient') != -1){
                    loadbackground.type = 'repeating-linear-gradient';
                  }else if(importcss.indexOf('linear-gradient') != -1){
                    loadbackground.type = 'linear-gradient';
                  }else if(importcss.indexOf('repeating-radial-gradient') != -1){
                    loadbackground.type = 'repeating-radial-gradient';
                  }else if(importcss.indexOf('radial-gradient') != -1){
                    loadbackground.type = 'radial-gradient';
                  }else{
                     alert(actionevent.errorm.syntax);
                     return;
                  }
                 
                  importcss = importcss.replace("background-image:", "");
                  importcss = importcss.replace("background:", "");
                  importcss = importcss.replace("repeating-linear-gradient(", "");
                  importcss = importcss.replace("linear-gradient(", "");
                  importcss = importcss.replace("repeating-radial-gradient(", "");
                  importcss = importcss.replace("radial-gradient(", "");
                  importcss = importcss.replace(");", "");
                  importcss = importcss.replace(/,#/g, ", #");
                  importcss = importcss.replace(/,rgb/g, ", rgb");
                  importcss = importcss.trim();
                  importcss = importcss.split(', ');
               
                  var points = []
                  $.each(importcss, function(k, val){
                    
                      if(k == 0){
                         if(loadbackground.type=="linear-gradient" || loadbackground.type=="repeating-linear-gradient"){
                           var vangle = val
                               vangle = vangle.replace("to top right", "34deg");
                               vangle = vangle.replace("to top left", "326deg");
                               vangle = vangle.replace("to bottom right", "150deg");
                               vangle = vangle.replace("to bottom left", "213deg");
                               
                               vangle = vangle.replace("to bottom", "180deg");
                               vangle = vangle.replace("to top", "0deg");
                               vangle = vangle.replace("to right", "90deg");
                               vangle = vangle.replace("top left", "146deg");
                               vangle = vangle.replace("top right", "213deg");
                               vangle = vangle.replace("bottom left", "34deg");
                               vangle = vangle.replace("bottom right", "326deg");
                               vangle = vangle.replace("top", "180deg");
                               vangle = vangle.replace("left", "90deg");
                               vangle = vangle.replace("right", "270deg");
                               vangle = vangle.replace("bottom", "0deg");                             
                           
                           vangle = vangle.replace("deg", "_deg");
                           loadbackground.angle = vangle;
                         }else{
                           
                           var arrye = val.split(' ');
                          
                           if(Array.isArray(arrye)){
                             var number = 0;
                             loadbackground['positiony'] = 50;
                             loadbackground['positionx'] = 50;
                                $.each(arrye, function(rk, rp){
                                  
                                    if($('[data-multycss="background"] option').is('[value="'+rp+'"]')){
                                          var opgect = $('[data-multycss="background"] option[value="'+rp+'"]').closest('select').data('subcss');
                                          loadbackground[opgect] = rp;
                                          
                                    }else{
                                       if(rp.match('%')){
                                         number = number+1
                                         if(number == 1){
                                            loadbackground['positionx'] = rp.replace("%", "");
                                         }
                                         if(number == 2){
                                            loadbackground['positiony'] = rp.replace("%", "");
                                         }
                                       }else{
                                         
                                        if(arrye.length != 1){
                                             if(rp=="left"){
                                                loadbackground['positionx'] = 0;
                                             }
                                             if(rp=="right"){
                                                loadbackground['positionx'] = 100;
                                             }
                                             if(rp=="bottom"){
                                                loadbackground['positiony'] = 100;
                                             }
                                             if(rp=="top"){
                                                loadbackground['positiony'] = 0;
                                             }
                                             
                                         }
                                       }
                                    }
                                })
                           } 
                         }
                     }else{
                      
                      var arrye = val.split(' ');
                     
                       if(Array.isArray(arrye)){
                         var colorpoinr = {}
                         var addPush = false;
                         $.each(arrye, function(pk, pv){
                           if($('[data-multycss="background"] option').is('[value="'+pv+'"]')){
                              var opgect = $('[data-multycss="background"] option[value="'+pv+'"]').closest('select').data('subcss');
                              loadbackground[opgect] = pv;
                             
                              
                           }else if(pv=='cover'){
                              var opgect = $('[data-multycss="background"] option[value="farthest-corner"]').closest('select').data('subcss');
                              loadbackground[opgect] = 'farthest-corner';
                           }else{
                             addPush = true;
                              if(pv.match('%')){
                                 pv = pv.replace("%", "_%").replace(")", "");
                                 colorpoinr['left'] = pv 
                                 colorpoinr['sotast'] = pv.replace("_%", "").replace(")", ""); 
                              }else{
                                colorpoinr['backgound'] = pv;
                              }
                            }
                          })
                          if(addPush){
                            if(!colorpoinr['left']){
                              sintextError = true
                            }
                            if(!colorpoinr['backgound']){
                              sintextError = true
                            }
                            points.push(colorpoinr);
                          }
                       }
                     }
                  })
                  
                  if(sintextError){
                         alert(actionevent.errorm.syntax);
                         return false;
                   } 
                   
                  loadbackground.points = points;
                  actionevent.runEditbackgound(loadbackground)
                  
                  classb.updatecss();
                  $('.customselect').selectpicker('refresh');
                  //$('.inofo').html(JSON.stringify(loadbackground)); 
                  $('#import-background-markup').collapse("hide")
                  
             })
            
            
       },
       dragmark:function(e, getleft, d){
                var ds = d.width()
                if(getleft > -1 && getleft < ds){
                    var percentage = (parseFloat(getleft / ds) * 100).toFixed(2);
                    $('.activemaker').data('left', percentage+"_%");
                     classb.csspropa['background']();
                     classb.updatecss()
                }
       },
       addNewpoint:function(pleft, pbackgound, update){
                   $('.iconBorder').removeClass('activemaker')
                   var newpoint = $('<a/>', {"class":"iconBorder colorPointer", "style": "left:"+pleft+"%;"}).appendTo('[data-bgrole="addpointer"]');
                   newpoint.data('left', pleft+"_%").data('backgound', pbackgound );
                   newpoint.append('<span class="closeColorIcon" data-bgrole="removepoint"></span>');
                   newpoint.append('<span class="pointfilecolor" style="background:'+pbackgound+'"></span>');
                   newpoint.draggable({ 
                           axis: "x", 
                           containment: "parent", 
                           drag:function( event, ui ) {
                               actionevent.dragmark(event, ui.position.left, $('[data-bgrole="makergrid"]'))
                           }
                     })
               if(update){
                 newpoint.addClass('activemaker')
                 classb.csspropa['background']();
                 classb.updatecss()
               }
        },
        runEditbackgound:function(datajson){
            if(datajson){
                     $('[data-bgrole="addpointer"] a').remove();
                    var edditangel = false;
                      $.each(datajson, function(io, iv){
                        if(Array.isArray(iv)){
                          if(io=="points"){
                              $.each(iv, function(key, val){
                                  var percentage = val.sotast;
                                    color = val.backgound;
                                    actionevent.addNewpoint(percentage, color, false)
                              })
                          }
                          
                        }else{
                            iv = iv.toString()
                            iv = iv.replace('px','').replace('_deg','')
                            $('[data-subcss="'+io+'"][data-multycss="background"]').val(iv)
                            if($('[data-subcss="'+io+'"][data-multycss="background"]').is('.settingSlider')){
                              iv = iv.replace('s','')
                              $('[data-subcss="'+io+'"][data-multycss="background"].settingSlider').slider('value', iv)
                            }else if($('[data-subcss="'+io+'"]').is('.uiangel')){
                              edditangel = iv;
                              
                            }else if($('[data-subcss="'+io+'"]').is('[data-multycss]')){
                              $('[data-subcss="'+io+'"][data-multycss="background"]').val(iv);
                            }
                        }
                    });
                    if(edditangel){
                        $('[data-subcss="angle"].uiangel').anglepicker("value", edditangel)
                    }
                    
                    classb.csspropa['background']();
                    
                  }
                  
                  getcontainer = $('select[data-subcss="type"][data-multycss="background"] option:selected').data('getcontainer');
                  if(getcontainer){
                       $('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
                       $('[data-showcontainer="'+getcontainer+'"]').collapse('show');
                  }
        },
        isValidis:function(xb){
          props = xb.split(/\s+/);
          if (props.length != 2) {
		          return false;
	          }	
        },
        errorm:{
          empty: "Please enter background gradient css",
          syntax:"Syntax Error. Example:  background:linear-gradient(120deg, #FF0000 3.72%, #000000 99.94% );"
        }
    }  
    $('.addmaker').addClass('hide')
    actionevent.inot($('[data-bgrole="makergrid"]'), $('[data-bgrole="addpointer"]'), $('[data-bgrole="importcss"]'))
     


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
				var thiscsspro = $(this).attr('data-css');
        var rolecolor = $(this).data('rolecolor');
				var thiscssafte = $(this).attr('data-css-after');
        var multycss = $(this).data('multycss')
        var value = thisval+thiscssafte;
        
          if(multycss){
            classb.csspropa[multycss]();
            classb.updatecss()
          }else if(rolecolor){
             colorkeuprgb = false;
                var typecolor = $(this).closest('[data-typecolor]').data('typecolor');
             var rgbcolor = 'rgba('+$('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="r"]').val()+','+$('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="g"]').val()+','+$('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="b"]').val()+','+thisval+')'; 
             $('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="a"]').val(thisval)
             $('[data-colortype="'+typecolor+'"]').colorpicker('setValue', rgbcolor);
          
          }else{
           classb.updatecss(thiscsspro,thisval)
          }
				
				//classb.updatecss(thiscsspro,value)
			}
		});
	});

	$('.color-picker, .color-picker2').colorpicker({
       container: true,
       inline: true,
       format: 'rgba',
        customClass: 'colorpicker-2x',
                  sliders: {
                      saturation: {
                          maxLeft: 194,
                          maxTop: 194
                      },
                      hue: {
                          maxTop: 194
                      },
                      alpha: {
                          maxTop: 194
                      }
                  }
       
  }).on('changeColor', function(e){
		e.preventDefault();
		var color = e.color.toHex();
		var stype = $(this).data('colortype');
    var rgba = e.color.toRGB();
    var hsl = rgb2hsv(rgba.r, rgba.g, rgba.b)
    var rgbcolor = 'rgba('+rgba.r+','+rgba.g+','+rgba.b+','+rgba.a+')';
    
    
    $('.activemaker').data('backgound', rgbcolor);
    $('.activemaker .pointfilecolor').css('background', rgbcolor)
   if(stype){
      if(colorkeuphex){
          var colorhex = color.replace("#", "");
           $('[data-typecolor="'+stype+'"] [data-rolecolor="hex"]').val(colorhex)
      }
      if(colorkeuprgb){
         $('[data-typecolor="'+stype+'"] [data-rolecolor="rgba"][data-scolor="r"]').val(rgba.r)
         $('[data-typecolor="'+stype+'"] [data-rolecolor="rgba"][data-scolor="g"]').val(rgba.g)
         $('[data-typecolor="'+stype+'"] [data-rolecolor="rgba"][data-scolor="b"]').val(rgba.b)
         $('[data-typecolor="'+stype+'"] [data-rolecolor="rgba"][data-scolor="a"]').val(rgba.a)
         $('[data-typecolor="'+stype+'"] [data-rolecolor="rgba"][data-scolor="a"].settingSlider').slider('value', rgba.a)
         
      }
       if(colorkeuphsv){
         $('[data-typecolor="'+stype+'"] [data-rolecolor="hsb"][data-scolor="h"]').val(hsl.h)
         $('[data-typecolor="'+stype+'"] [data-rolecolor="hsb"][data-scolor="s"]').val(hsl.s)
         $('[data-typecolor="'+stype+'"] [data-rolecolor="hsb"][data-scolor="b"]').val(hsl.v)
       }
      colorkeuphex = true;
      colorkeuprgb = true;
      colorkeuphsv = true;
      
      classb.csspropa[stype]();
    }
    classb.updatecss()
	});
  
  
  
  
	$('select[data-selector]').change(function(){
		var thiscsspro = $(this).attr('data-css');
		var thisval = $(this).val()
    var multycss = $(this).data('multycss')
    var getcontainer = $(this).find('option:selected').data('getcontainer');
    if(getcontainer){
     $('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
     $('[data-showcontainer="'+getcontainer+'"]').collapse('show');
     }
    if(multycss){
      classb.csspropa[multycss]();
      classb.updatecss()
    }else{
		 classb.updatecss(thiscsspro,thisval)
    }
	})
  
  $('[data-role="browseMedia"]').each(function(index, element) {
                    $(this).media();
                });
  
	$('[data-role="classname"]').keyup(function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.generalSetting.csssetting.class = classnames;
			classb.generalSetting.csssetting.classname = '.'+classnames;
			
			classb.updatecss()
	})
	
	
  
  
  $("#angleIcon").anglepicker({
     change: function(e, ui) {
       classb.csspropa['background']();
       classb.updatecss()
       $('#AngleInput').val(ui.value)
    },
   value: 90
  });





    
    
    
      $('.spinner .btn:first-of-type').on('click', function() {
        var  newval = parseInt( $(this).closest('.spinner').find('input').val(), 10) + 1
        var  tycss = $(this).closest('.spinner').find('input').attr('id');
        $(this).closest('.spinner').find('input').val(newval).keyup();
      });
      $('.spinner .btn:last-of-type').on('click', function() {
         var newval = parseInt( $(this).closest('.spinner').find('input').val(), 10) - 1
         var  tycss = $(this).closest('.spinner').find('input').attr('id');
         $(this).closest('.spinner').find('input').val(newval).keyup();
         
      });
    
      $('[data-rolecolor]').keyup(function(){
          var datarol = $(this).data('rolecolor');
          var typecolor = $(this).closest('[data-typecolor]').data('typecolor');
          var thisvalue = $(this).val();
          if(datarol=='hex'){
             colorkeuphex = false;
            var picar = '#'+ thisvalue
            $('[data-colortype="'+typecolor+'"]').colorpicker('setValue', picar);
            
          }else if(datarol== 'rgba'){
            colorkeuprgb = false;
               var rgbcolor = 'rgba('+$('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="r"]').val()+','+$('[data-typecolor="'+typecolor+'"]  [data-rolecolor="rgba"][data-scolor="g"]').val()+','+$('[data-typecolor="'+typecolor+'"]  [data-rolecolor="rgba"][data-scolor="b"]').val()+','+$('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="a"]').slider( "value" )+')'; 
            $('[data-colortype="'+typecolor+'"]').colorpicker('setValue', rgbcolor);  
          }else if(datarol== 'angle'){
               $("#angleIcon").anglepicker("value", thisvalue);
          }else if(datarol== 'hsb'){
             colorkeuphsv = false; 
            var getrgb = HSVtoRGB($('[data-typecolor="'+typecolor+'"] [data-rolecolor="hsb"][data-scolor="h"]').val(), $('[data-typecolor="'+typecolor+'"] [data-rolecolor="hsb"][data-scolor="s"]').val(), $('[data-typecolor="'+typecolor+'"] [data-rolecolor="hsb"][data-scolor="b"]').val(),$('[data-typecolor="'+typecolor+'"] [data-rolecolor="rgba"][data-scolor="a"]').slider( "value" ) )
            
           // $('.inofo').html(JSON.stringify(getrgb))
            
           }
      })

})

function rgb2hsv () {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}

function HSVtoRGB(h, s, b, a){
      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = b * s;
      X = C * (1 - Math.abs(h % 2 - 1));
      R = G = B = b - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];
      return {
        r: Math.round(R * 255),
        g: Math.round(G * 255),
        b: Math.round(B * 255),
        a: a 
      };
 }


