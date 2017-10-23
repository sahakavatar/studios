
$(function(){

    $('[data-role="selectStudio"]').val('color-picker').selectpicker('refresh');
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
					css:{}
          
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
            if('background'==io){
                  $('.color-picker2').colorpicker('setValue', io)
            }
					});
          
					
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
        backgroundcolor:function(){
             var csspreview = $('[data-colortype="backgroundcolor"]').colorpicker('getValue') 
            classb.generalSetting.csssetting.css['background'] = csspreview;
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
      
		
     $.get("/appdata/app/Modules/Studio/Resources/Views/public/css/generatedcss.less", function(data){
            classb.less = data;
            classb.reloaddata = JSON.parse(classb.sl.exportjson.val())
            if(!openload){
            classb.editReload();
            }
            
            
      });	
      

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
  
  
	$('[data-role="classname"]').keyup(function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.generalSetting.csssetting.class = classnames;
			classb.generalSetting.csssetting.classname = '.'+classnames;
			
			classb.updatecss()
	})
	
	

    
    
    
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


