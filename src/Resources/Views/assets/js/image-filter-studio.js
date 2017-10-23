$(function(){
   $('[data-role="selectStudio"]').val('animation').selectpicker('refresh');
	var classb = {
			sl:{
				cssview : $('[data-preview="studio"]'),
				cssstyle : $('[data-role="savedcss"]'),
				exportjson : $('[data-export="json"]'),
				exportcss : $('[data-output="studio"]'),
				save : $('[ data-save="class"]')
			},
			generalSetting:{
				csssetting:{},
         exportjson:{}
			},
			runcss:function(){
				var data = classb.generalSetting.csssetting.classname+', '+classb.generalSetting.csssetting.classname+'-hover:hover, '+classb.generalSetting.csssetting.classname+'-focus:focus{'
				$.each(classb.generalSetting.csssetting.css, function(io, iv){
					data+= io +":"+iv+'; ';

				});
				data+='}';
				classb.generalSetting.csssetting.savedcss = data;
				classb.sl.exportcss.val(classb.generalSetting.csssetting.savedcss)
				classb.sl.cssstyle.html(classb.generalSetting.csssetting.savedcss)
        
        

			},
			updatecss:function(){
				classb.runcss()
        classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
				classb.sl.cssview.attr('class', classb.generalSetting.csssetting.class)
        
        

			},
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
				if(getjsonvale){
					classb.generalSetting.csssetting = JSON.parse(getjsonvale);
					$.each(classb.generalSetting.csssetting.css, function(io, iv){
           
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
				boxshadow:function(){

				}
			}
		}
		classb.generalSetting.csssetting.class = $('[data-role="classname"]').val();
		classb.generalSetting.csssetting.savedcss = '';
		classb.generalSetting.csssetting.classname = '.'+classb.generalSetting.csssetting.class;
		classb.generalSetting.csssetting.css = {};


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

			slide: function(event, ui) {
				var filter = '';
				$('[data-role="filterGroup"]').each(function (index, element) {
					if (index != 0) {
						filter += ', '
					}
					var gr = $("#gr").slider("values", 0);  // grayscale
					var blur = $("#blur").slider("values", 1);    // blur
					var br = $("#br").slider("values", 2);      // brightness
					var ct = $("#cont").slider("values", 3);      // contrast
					var hue = $("#hue").slider("values", 4);  //hue-rotate
					var invert = $("#inv").slider("values", 5);  //invert
					var saturate = $("#st").slider("values", 6);//saturate
					var sepia = $("#sepia").slider("values", 7);//sepia

					if(gr != 0){
						filter += 'grayscale(' + gr + '%) ';
					}
					if(blur!=0){
						filter += ' blur(' + blur +'px) ';
					}
					if(br!=0){
						filter += 'brightness(' + br +'%) ';
					}
					if(ct!=0){
						filter += ' contrast(' + ct + '%) ';
					}
					if(hue!=0){
						filter += ' hue-rotate(' + hue +'deg) ';
					}
					if(invert!=0){
						filter += ' invert(' + invert +'%) ';
					}
					if(saturate!=0){
						filter += ' saturate(' + saturate +'%) ';
					}
					if(sepia!=0) {
						filter += ' sepia(' + sepia + '%)';
					}
				});
				classb.generalSetting.csssetting.css['filter'] = filter;
				classb.updatecss();
			}
		});
	});





	$('.color-picker').colorpicker().on('changeColor', function(e){
		e.preventDefault();
		var color = e.color.toHex();
		var stype = $(this).data('textcolor');
		classb.generalSetting.csssetting.css[stype] = color;
		classb.updatecss()
	});
	$('select[data-selector]').change(function(){
		var thiscsspro = $(this).attr('data-css');
		var thisval = $(this).val()
		classb.generalSetting.csssetting.css[thiscsspro] = thisval;
		classb.updatecss()
	})
	$('[data-role="classname"]').keyup(function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.generalSetting.csssetting.class = classnames;
			classb.generalSetting.csssetting.classname = '.'+classnames;
			classb.updatecss()
	})

	classb.editReload();

	


})
