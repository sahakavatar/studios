var getsondata = $('[data-export="jsonss"]').val();
var jsonda = ''
var savedclass = ''
var formread = {}
if(getsondata==''){
jsonda = JSON.parse(getsondata)
savedclass =  jsonda.class;
}



var formb = {
		path:{
		 jsonfile:function(){
				var getfile = '/'+ $('[data-path="module"]').val()+'/Builders/Resources/assets/data/';
				return getfile;
			}
		},
		sl:{
			data: $('[data-frompre="preview"] .datafrom'),
			controlLable:$('[data-frompre="preview"]').find('[data-fcontrol="label"]'),
			controlInput:$('[data-frompre="preview"]').find('[data-fcontrol="input"]'),
			alignLabel : $('.align-label button'),
			labelPosition : $('.label-Position button'),
			validateindicator : $('[data-field="validateindicator"]'),
			validateas : $('[data-field="validateas"]'),
			animationName:$('[data-field="animation-name"]'),
			animationDelay:$('[data-field="animation-delay"]'),
			animationDuration:$('[data-field="animation-duration"]'),
			generatedfiled:$('[data-role="generatedfield"]')
		},
		active:'',
		jsondata:{
			theme:{}	
		},
		openlight:function(html){
       
		   $('[data-frompre="preview"]').empty();
		   $('[data-frompre="preview"]').html(html);
		   formb.sl.data = $('[data-frompre="preview"] .datafrom');
		   formb.sl.controlLable = $('[data-frompre="preview"]').find('[data-fcontrol="label"]');
		   formb.sl.controlInput = $('[data-frompre="preview"]').find('[data-fcontrol="input"]');
		   
			
			var getselected = $('.editfiled');
			formtype = $('.editfiled').data('fromtype');
			$('[data-field="errorMessage"]').val('')
			$('[data-field="required"][value="No"]').prop('checked', true);
			
			getllabel = $('.editfiled').find('.control-label').text();
			getlDefultv = $('.editfiled').find('.form-control').val();
			getlSize = $('.editfiled').find('.form-control').parent().attr('class');
			$('[data-frompre="preview"]').removeAttr('style');
			
			var generalfrom = ''
			var datafrom = $('[data-frompre="preview"] .datafrom');
			var datafroms = $('.editfiled .datafrom');
			// alert(JSON.stringify(formread))
      
      
			if(formtype =="button"){
			
			}else{
        
        if(formread.title){
          var readonlu = ''
          
				  generalfrom += '<div class="form-group"><label for="EditFieldTitle"> Field Title</label><input type="text" class="form-control" id="EditFieldTitle" data-field="lable" placeholder="Text here" value="'+getllabel+'" '+readonlu+'></div>';
          }
			  }
			
      if(formread.class){
          var readonlu = ''
         
         
         generalfrom += '<div class="form-group"><label for="EditFieldClass"> Field Class</label><select name="class[value]" data-select="fieldClass" class="form-control" '+readonlu+'></select></div>';
         
      }
      
				
			if(formtype =="rediobuttons" || formtype =="checkbuttons" || formtype =="Select" || formtype =="multiSelect" || formtype =="button" || formtype =="file" || formtype =="uploadmedia"){}else{	
					var placeholder = formb.sl.controlInput.find('input, select, textarea').attr('placeholder');
					if(!placeholder){
						placeholder ="";
					}
          if(formread.placeholder){
            var readonlu = ''
            
					  generalfrom += '<div class="form-group"><label for="EditFieldplaceholder"> Field Placeholder</label><input type="text" class="form-control" id="EditFieldplaceholder" data-field="placeholder" placeholder="Text here" value="'+placeholder+'" '+readonlu+'></div>';
          }
			}
					
			
				
			
			 if(formtype =="Select" || formtype =="multiSelect" || formtype =="rediobuttons" || formtype =="checkbuttons" ){
			 	generalfrom += '<div class="form-group"><label for="EditFieldOption">Set Options</label><textarea class="form-control" name="EditFieldOption" id="EditFieldOption" data-field="selectoption"></textarea></div>'
			
			 }else if(formtype =="slider" || formtype =="spinner"){
				  generalfrom +='<div class="row">'
				 
		   		 generalfrom += '<div class="form-group col-xs-6"><label for="EditStartingv"> Starting  Value</label><input type="text" class="form-control" id="EditStartingv" data-field="value" placeholder="Default Text " value=""></div>';
				 generalfrom += '<div class="form-group col-xs-6"><label for="EditMinimumv"> Minimum  Value</label><input type="text" class="form-control" id="EditMinimumv" data-field="min" placeholder="Default Text " value=""></div>';
				 
				  generalfrom += '<div class="form-group col-xs-6"><label for="EditMaximumv"> Maximum   Value</label><input type="text" class="form-control" id="EditMaximumv" data-field="max" placeholder="Default Text " value=""></div>';
				 
				  generalfrom += '<div class="form-group col-xs-6"><label for="EditStepv"> Step  Value</label><input type="text" class="form-control" id="EditStepv" data-field="step" placeholder="Default Text " value=""></div>';
				  
				  if(formtype=="spinner"){
				  	generalfrom += '<div class="form-group col-xs-6"><label for="Editdecimals"> Decimals</label><input type="text" class="form-control" id="Editdecimals" data-field="decimals" placeholder="decimals " value="0"></div>';
				  }
				 
				 generalfrom +='</div>'	

		   	 }else if(formtype =="rating"){
				 	generalfrom += '<div class="form-group"><label for="Retingicon"> Reting Icon</label><select class="form-control customFormSelect" data-field="retingicon"><option value="glyphicon glyphicon-star" data-icon="glyphicon glyphicon-star-empty">Star</option> <option value="glyphicon glyphicon-heart" data-icon="glyphicon glyphicon-heart-empty">Heart</option>  <option value="fa fa-bell" data-icon="fa fa-bell-o">Bell</option> <option value="fa fa-circle" data-icon="fa fa-circle-o">Circle</option> <option value="fa fa-folder" data-icon="fa fa-folder-o">Folder</option> <option value="fa fa-folder-open" data-icon="fa fa-folder-open-o">Folder open</option> <option value="fa fa-hourglass" data-icon="fa fa-hourglass-o">Hourglass</option> </select></div>';
					
					generalfrom += '<div class="form-group"><label for="totalstar"> Stars</label><input type="text" class="form-control" id="totalstar" data-field="totalstar" placeholder="Star " value="5"></div>';
				 generalfrom += '<div class="form-group"><label for="Enablehalfstars"> Enable half stars</label><select class="form-control customFormSelect" data-field="Enablehalfstars"><option value="0.5">Yes</option> <option value="1">No</option></select></div>';
					
				 	
			}else if(formtype =="time"){
					 generalfrom += '<div class="form-group"><label for="timeformats"> Formats</label><select class="form-control customFormSelect" data-field="timeformats"><option value="LT">Time</option> <option value="LTS">Time with seconds</option></select></div>';
				
			}else if(formtype =="date"){
					 generalfrom += '<div class="form-group"><label for="dateformats">Date Formats</label><select class="form-control customFormSelect" data-field="dateformats"><option value="DD/MM/YYYY">DD/MM/YYYY</option> <option value="YYYY/MM/DD">YYYY/MM/DD</option> <option value="DD-MM-YYYY">DD-MM-YYYY</option> <option value="YYYY-MM-DD">YYYY-MM-DD</option></select></div>';
					 generalfrom += '<div class="form-group"><label for="viewmode">View Mode</label><select class="form-control customFormSelect" data-field="viewmode"><option value="days">days</option> <option value="months">months</option><option value="years">years</option>  <option value="decades">decades</option></select></div>';
				
			}else if(formtype =="autocomplete"){
					generalfrom += '<div class="form-group"><label for="Editsetsource">Set Source</label><textarea class="form-control" name="Editsetsource" id="Editsetsource" data-field="setsource"></textarea></div>';
			}else if(formtype =="button"){
				 generalfrom += '<div class="form-group"><label for="Editbuttontext"> Button Text</label><input type="text" class="form-control" id="Editbuttontext" data-field="buttontext" placeholder="Text here" value=""></div>';
				 
				  generalfrom += '<div class="form-group"><div class="row"><label for="Editbuttontype" class="col-xs-4 p-l-0"> Button Type</label><div class="col-xs-8 p-r-0""><select class="form-control customFormSelect" data-field="buttontype"><option value="button">button</option> <option value="submit">submit</option> <option value="reset">reset</option></select></div></div></div>';
				  
				   generalfrom += '<div class="form-group"><div class="row"><label for="Editbuttonposition" class="col-xs-4 p-l-0"> Button Position</label><div class="col-xs-8 p-r-0""> <div aria-label="" role="group" class="btn-group" data-field="buttonposition">'+
                            '<button class="btn btn-default left" data-class="text-left" type="button"><i class="fa fa-align-left"></i></button>'+
                            '<button class="btn btn-default center" data-class="text-center" type="button"><i class="fa fa-align-center"></i></button>'+
                            '<button class="btn btn-default right"  data-class="text-right" type="button"><i class="fa fa-align-right"></i></button>'+
                        '</div></div></div></div>';
						
				generalfrom += '<div class="form-group"><div class="row"><label for="Editbuttontextalignment" class="col-xs-4 p-l-0"> Text Alignment</label><div class="col-xs-8 p-r-0""> <div aria-label="" role="group" class="btn-group" data-field="buttontextalignment">'+
                            '<button class="btn btn-default left" data-class="text-left" type="button"><i class="fa fa-align-left"></i></button>'+
                            '<button class="btn btn-default center" data-class="text-center" type="button"><i class="fa fa-align-center"></i></button>'+
                            '<button class="btn btn-default right" data-class="text-right" type="button"><i class="fa fa-align-right"></i></button>'+
                        '</div></div></div></div>';
						
				
				generalfrom += '<div class="form-group"><div class="row"><label for="EditbuttonSize" class="col-xs-4 p-l-0"> Button Size</label><div class="col-xs-8 p-r-0""><select class="form-control customFormSelect" data-field="buttonsize"><option value="btn-xs">XSmall</option> <option value="btn-sm">Small</option> <option value="btn-md">Medium</option> <option value="btn-lg">Large</option></select></div></div></div>';
				
				generalfrom += '<div class="form-group"><div class="row"><label for="EditbuttonWidth" class="col-xs-4 p-l-0"> Button Width</label><div class="col-xs-8 p-r-0""><select class="form-control customFormSelect" data-field="buttonwidth"><option value="">default</option> <option value="btn-block">Full</option></select></div></div></div>';
					
			}else if(formtype =="multithumbselect" || formtype=="multithumb"){
				generalfrom += '<div class="form-group"><label for="Editthumboption">Set Options</label><textarea class="form-control" name="Editthumboption" id="Editthumboption" data-field="thumboption"></textarea></div>';
				var name = formb.sl.controlInput.find('input').attr('name');
				generalfrom += '<div class="form-group"><label for="Editthumbname"> Field name</label><input type="text" class="form-control" id="Editthumbname" data-field="thumbname" placeholder="Text here" value="'+name+'"></div>';
				
			}else{
				/* defult */
				//  generalfrom += '<div class="form-group"><label for="EditFieldInvale"> Default Text</label><input type="text" class="form-control" id="EditFieldInvale" data-field="input" placeholder="Default Text " value="'+getlDefultv+'"></div>';
			}	
			
			
			if(formtype =="Select" || formtype =="multiSelect" || formtype =="rediobuttons" || formtype =="checkbuttons"){
				var dbtable = $('[data-optionsfield="dbtable"]').html()
				generalfrom += '<div class="form-group"><label for="EditFieldOption">List of options</label><select data-field="dbtable" class="form-control customFormSelect">'+dbtable+'</select></div>'
				generalfrom +='<div data-hide="dbdata" class="row hide">';
				generalfrom += '<div class="form-group col-xs-6 p-l-0"><label for="EditFieldOption">Options</label><select data-field="dbtableoption" class="form-control customFormSelect"></select></div>';
				generalfrom += '<div class="form-group  col-xs-6 p-r-0"><label for="EditFieldOption">Value</label><select data-field="dbtablevalue" class="form-control customFormSelect"></select></div>';
				
				generalfrom +='</div>';
			}
			
			
			
			
			
			$('[data-formsetting="setting"]').html(generalfrom);
        if(formread){	
            $('[data-have]').addClass('hide')
        }
      $.each(formread,function(field, vale){
         
          if(vale){
            $('[data-have="'+field+'"]').removeClass('hide')
          }else{
            $('[data-have="'+field+'"]').addClass('hide')
          }
          
      })
      
      $('#settingModal').modal('show')
			
			
			
			
			
			
			
			$('.csscolor-picker').colorpicker().on('changeColor.colorpicker', function(event){
					var getatty = $(this).data('colortype');
					var color =  event.color.toHex();
					datafrom.attr('data-'+getatty, color)
					if(getatty=="input-background"){
						formb.sl.controlInput.find('.form-control').css({'background':color});
						formb.jsondata.theme[getatty] = color;
					}else if(getatty=="input-color"){
						formb.sl.controlInput.find('.form-control').css({'color':color});
						formb.jsondata.theme[getatty] = color;
					}else if(getatty=="input-border-color"){
						formb.sl.controlInput.find('.form-control').css({'border-color':color});
						formb.jsondata.theme[getatty] = color;
					}else{
						formb.cssrow(datafrom, getatty);											
					}
			});
			
			
			if(datafroms.data('error')){
				$('[data-field="errorMessage"]').val(datafroms.data('error'));
			}
			if(datafroms.data('required')){
				$('[data-field="required"][value="'+datafroms.data('required')+'"]').prop('checked', true);
			}
			/* Get valu for edit */
			if(formb.sl.data.data('align-label')){
				formb.sl.alignLabel.removeClass('active');
				formb.sl.alignLabel.filter('.'+formb.sl.data.data('align-label')).addClass('active');
			}
			if(formb.sl.data.data('label-position')){
				formb.sl.labelPosition.removeClass('active');
				formb.sl.labelPosition.filter('.'+formb.sl.data.data('label-position')).addClass('active');
			}
			if(formb.sl.data.data('animation-name')){
				formb.sl.animationName.val(formb.sl.data.data('animation-name'));
			}
			if(formb.sl.data.data('animation-delay')){
				formb.sl.animationDelay.val(formb.sl.data.data('animation-delay'));
			}
			if(formb.sl.data.data('animation-duration')){
				formb.sl.animationDuration.val(formb.sl.data.data('animation-duration'));
			}
			
			if(formb.sl.data.data('validateindicator')){
				formb.sl.validateindicator.val(formb.sl.data.data('validateindicator'));
			}else{
				formb.sl.validateindicator.val('');
			}
			if(formb.sl.data.data('validateas')){
				formb.sl.validateas.val(formb.sl.data.data('validateas'));
			}				
			
			if(formtype =="Select" || formtype =="multiSelect"){
				Getoption = $("[data-frompre='preview']").find('select option');
				var Getvalue ='';
				Getoption.each(function(index, element) {
					if($(this).text()!="--- Select ---"){
					if(Getvalue!=''){
				   		 Getvalue +='\n';
					}
                   	 Getvalue += $(this).text(); 
				   }
                });
				$('[data-field="selectoption"]').val(Getvalue)
			}
			
			if(formtype =="rediobuttons"){
				Getoption = $("[data-frompre='preview']").find('input[type="radio"]');
				var Getvalue ='';
				Getoption.each(function(index, element) {
					if(Getvalue!=''){
				   		 Getvalue +='\n';
					}
                   	Getvalue += $(this).val(); 	
				})
				$('[data-field="selectoption"]').val(Getvalue);	
			}
			if(formtype =="checkbuttons"){
				Getoption = $("[data-frompre='preview']").find('input[type="checkbox"]');
				var Getvalue ='';
				Getoption.each(function(index, element) {
					if(Getvalue!=''){
				   		 Getvalue +='\n';
					}
                   	Getvalue += $(this).val(); 	
				})
				$('[data-field="selectoption"]').val(Getvalue);
			}
			
			$('[data-field="size"]').val(getlSize)
			
			
			
			$('#settingModal [data-colortype]').each(function() {
                var thisdata = $(this).data('colortype');
				var getval =  datafrom.data(thisdata);
				if(getval){
					$('[data-field="'+thisdata+'"]').val(getval);
					$(this).colorpicker('setValue', getval);
				}
				
            });
			
			$('#settingModal [data-slidertype]').each(function() {
                var thisdata = $(this).data('slidertype');
				var getval =  datafrom.data(thisdata);
				if(getval){
					$('[data-field="'+thisdata+'"]').val(getval);
				}else{
					var getval = 0;
				}
				$(this).slider({
						value: getval,
						min: 0,
						max: 100,
						slide: function( event, ui ) {
							var thisval = ui.value;
							var getatty = $(this).data('slidertype');
							$(this).next().val(ui.value);
							datafrom.attr('data-'+getatty, thisval)
							formb.cssrow(datafrom, getatty);
						}
						
					})
				
            });
			
			
			
			if(formtype=="slider"){	
				var sv = Number($("[data-frompre='preview']").find('[type="range"]').val());	
				var smin = Number($("[data-frompre='preview']").find('[type="range"]').attr('min'));
				var smax = Number($("[data-frompre='preview']").find('[type="range"]').attr('max'));	
				var sstep = Number($("[data-frompre='preview']").find('[type="range"]').attr('step'));
				$('[data-field="value"]').val(sv)
				$('[data-field="min"]').val(smin)
				$('[data-field="max"]').val(smax)
				$('[data-field="step"]').val(sstep)
				$("[data-frompre='preview']").find('.slider').slider({
						max:smax,
						min:smin,
						step:sstep,
						value:sv
				});
			}
			
			/*spinner*/
			if(formtype=="spinner"){	
				var selector =  $("[data-frompre='preview']").find('[data-fcontrol="input"] input[type="text"]');
				var sv = Number(selector.attr('value'));	
				var smin = Number(selector.attr('data-min'));
				var smax = Number(selector.attr('data-max'));	
				var sstep = Number(selector.attr('data-step'));
				var sdecimals = Number(selector.attr('data-decimals'));
				$('[data-field="value"]').val(sv)
				$('[data-field="min"]').val(smin)
				$('[data-field="max"]').val(smax)
				$('[data-field="step"]').val(sstep)
				$('[data-field="decimals"]').val(sdecimals)
				formb.sl.controlInput.find('.bootstrap-touchspin span').remove();
				$("[data-frompre='preview']").find('.spinner').TouchSpin();
			}
			
			
			if(formtype=="rating"){
					var clonein = formb.sl.controlInput.find('input.rating').clone().removeClass('hide')
					formb.sl.controlInput.html(clonein);
					formb.sl.controlInput.find('input.rating').rating();
					
					
					if(formb.sl.data.data('retingicon')){
						
						$('[data-field="retingicon"]').val(formb.sl.data.data('retingicon'));
					}
					if(formb.sl.data.data('totalstar')){
						$('[data-field="totalstar"]').val(formb.sl.data.data('totalstar'));
					}
					
					if(formb.sl.data.data('halfstars')){
						$('[data-field="Enablehalfstars"]').val(formb.sl.data.data('halfstars'));
					}
			}
			if(formtype=="time"){
				if(formb.sl.data.data('timeformats')){
					$('[data-field="timeformats"]').val(formb.sl.data.data('timeformats'))
					
				}
						formb.sl.controlInput.find('.time').datetimepicker({
								format: $('[data-field="timeformats"]').val()
							});
			}
			if(formtype=="date"){
				if(formb.sl.data.data('dateformats')){
					$('[data-field="dateformats"]').val(formb.sl.data.data('dateformats'))
					
				}
				if(formb.sl.data.data('viewmode')){
					$('[data-field="viewmode"]').val(formb.sl.data.data('viewmode'))
					
				}
				
				
						formb.sl.controlInput.find('.datepicker').datetimepicker({
								format: $('[data-field="dateformats"]').val(),
								viewMode: $('[data-field="viewmode"]').val()
							});
			}
			
			if(formb.sl.data.data('setsource')){
				
				
				if(formb.sl.data.data('setsource')){
					var itemls = formb.sl.data.data('setsource').replace(/,/g, "\n");
					$('[data-field="setsource"]').val(itemls)					
				}
				
				var items = $('[data-field="setsource"]').val();
					items = items.split('\n');
				
				formb.sl.controlInput.find(".autocomplete").autocomplete({
							source: items
					});
			}
			
			/* button*/
			if(formb.sl.data.data('buttontext')){
				$('[data-field="buttontext"]').val(formb.sl.data.data('buttontext'));
			}
			
			if(formb.sl.data.data('buttontype')){
				$('[data-field="buttontype"]').val(formb.sl.data.data('buttontype'));
			}
			if(formb.sl.data.data('buttonsize')){
				$('[data-field="buttonsize"]').val(formb.sl.data.data('buttonsize'));
			}
			if(formb.sl.data.data('buttonwidth')){
				$('[data-field="buttonwidth"]').val(formb.sl.data.data('buttonwidth'));
			}
			
			if(formb.sl.data.data('buttonposition')){
				$('[data-field="buttonposition"] button').removeClass('active')
				$('[data-field="buttonposition"] button[data-class="'+formb.sl.data.data('buttonposition')+'"]').addClass('active');
			}
			if(formb.sl.data.data('buttontextalignment')){
				$('[data-field="buttontextalignment"] button').removeClass('active')
				$('[data-field="buttontextalignment"] button[data-class="'+formb.sl.data.data('buttontextalignment')+'"]').addClass('active');
			}
			
			
			/* thumb select*/
			if(formtype=="multithumbselect" || formtype=="multithumb"){
				var getthumb = formb.sl.controlInput.find('.img-thumbnail');
				var Getvalue ='';
				getthumb.each(function() {
					if(Getvalue!=''){
				   		 Getvalue +='\n';
					}
					Getvalue += $(this).find('input').val() + '==';
					Getvalue += $(this).find('.labelcontianer').html();
					
				})
				$('[data-field="thumboption"]').val(Getvalue);
				
			}
			
			
			$('.customFormSelect').selectpicker('refresh');
			
			
			/* save valu for save */			
			$('[data-field="lable"]').keyup(function(){
				if(formread['title'].adminedit){
          var corefield = formb.sl.data.data('fields')
          
          getthisval  = $(this).val();
          
          if(formb.sl.validateindicator.val() !=''){
            var newlabe = ' <i class="'+ formb.sl.controlLable.find("i").attr("class") + '"></i>';
            formb.sl.controlLable.html(getthisval+newlabe);
          }else{
            formb.sl.controlLable.text(getthisval);
          }
          
          datafrom.attr( 'data-label' , getthisval )
          if(corefield!="core"){
            var names = getthisval.replace(/ /g, '_')
            formb.sl.controlInput.find('.form-control, input').attr('name', names).attr('id', names);
            formb.sl.controlLable.attr('for', names)
          }
				}
				
			})
			
			$('[data-field="placeholder"]').keyup(function(){
        if(formread['placeholder'].adminedit){
				  getthisval  = $(this).val();
				  formb.sl.controlInput.find('.form-control, input').attr('placeholder', getthisval);
        }
			})
			
			
			$('[data-field="input"]').keyup(function(){
				getthisval  = $(this).val();
				$("[data-frompre='preview']").find('input').attr('value',getthisval)
				$("[data-frompre='preview']").find('textarea').html(getthisval)
				datafrom.attr( 'data-value' , getthisval )
				
			});
			
			
			$('[data-field="size"]').change(function(){
				getthisval  = $(this).val();
				$("[data-frompre='preview']").find('.form-control').parent().attr('class',getthisval);
				datafrom.attr( 'data-size' , getthisval )
				
			});
			
			$('[data-field="value"], [data-field="min"], [data-field="max"], [data-field="step"], [data-field="decimals"]').keyup(function(){
				getval = Number($('[data-field="value"]').val());
				getmin = Number($('[data-field="min"]').val());
				getmax = Number($('[data-field="max"]').val());
				getstep = Number($('[data-field="step"]').val());
				getdecimals = Number($('[data-field="decimals"]').val());
				
				if(formtype=="slider"){	
					$("[data-frompre='preview']").find('[type="range"]').attr('value', getval).attr('min', getmin).attr('max', getmax).attr('step', getstep);
					getselected.find('[type="range"]').val(getval).attr('min', getmin).attr('max', getmax).attr('step', getstep);
					datafrom.attr('data-option','[{min:'+getmin+'},{max:'+getmax+'},{step:'+getstep+'}, {value:'+getval+'}]');
				}
				
				if(formtype=="spinner"){
					formb.sl.controlInput.find('.spinner').attr('value', getval).attr('data-min', getmin).attr('data-max', getmax).attr('data-step', getstep).attr('data-decimals', getdecimals);
					datafrom.attr('data-option','[{min:'+getmin+'},{max:'+getmax+'},{step:'+getstep+'}, {value:'+getval+'}, {decimals:'+getdecimals+'}]');
					
					formb.sl.controlInput.find('.spinner').trigger("touchspin.updatesettings", {initval:parseInt(getval)});
					formb.sl.controlInput.find('.spinner').trigger("touchspin.updatesettings", {min:parseInt(getmin)});		
					formb.sl.controlInput.find('.spinner').trigger("touchspin.updatesettings", {max:parseInt(getmax)});
					formb.sl.controlInput.find('.spinner').trigger("touchspin.updatesettings", {step:parseFloat(getstep)});	
					formb.sl.controlInput.find('.spinner').trigger("touchspin.updatesettings", {decimals:parseInt(getdecimals)});		
					
				}
				
			})
			
			
			
			
			$('[data-field="selectoption"]').keyup(function(){
				getvalue = $('[data-field="selectoption"]').val();
				getvalue = getvalue.replace(/\n\r?/g, '\n').split("\n");
				
				
				if(formtype =="checkbuttons"){
				
					var optionhtml = '';
					
					for (i = 0; i < getvalue.length; i++) { 
								optionhtml += '<div class="checkbox"><input type="checkbox" value="'+getvalue[i]+'"><label>'+getvalue[i]+'</label></div>'
								
					}
					$("[data-frompre='preview']").find('.checkbox').remove()
					$("[data-frompre='preview']").find('.control-label').after(optionhtml);
				
				
				}else if(formtype =="rediobuttons"){
					var optionhtml = '';
					var getfiledname = $('[data-field="lable"]').val().replace(/ /g, "_");
					$("[data-frompre='preview']").find('.control-label').attr('for',getfiledname)
					getselected.data('filedname',getfiledname);
					
					
					for (i = 0; i < getvalue.length; i++) { 
								optionhtml += '<div class="radio"><label><input type="radio" value="'+getvalue[i]+'" id="'+getfiledname+i+'" name="'+getfiledname+'">'+getvalue[i]+'</label></div>'
								
					}
					$("[data-frompre='preview']").find('.radio').remove()
					$("[data-frompre='preview']").find('.control-label').after(optionhtml);
					
					
				
				}else{
				
					var optionhtml = '<option selected="selected" value="0">--- Select ---</option>';
					var arry = '{option:0}';
					for (i = 0; i < getvalue.length; i++) { 
							optionhtml += '<option value="'+getvalue[i]+'">'+getvalue[i]+'</option>'
							arry +=',{option'+[i]+':'+getvalue[i]+'}';
						}
					$("[data-frompre='preview']").find('select.form-control').html(optionhtml);
					datafrom.attr('data-option', '['+arry+']');
				}
				
			})
			
			
			
			
			$('[data-field="errorMessage"]').keyup(function(){
				getval = $(this).val()
				datafrom.find('.form-control').attr('data-error', getval);
				datafrom.attr('data-error', getval)
				if(!datafrom.find('.help-block').attr('class')){
					datafrom.append('<div class="help-block with-errors"></div>');
				}
			})
			$('[data-field="required"]').change(function(){
				var getval = $(this).val()
				if(getval=="Yes"){
					datafrom.attr('data-required', 'Yes');
					datafrom.find('.form-control').attr('required','required');
				}else{
					datafrom.attr('data-required', 'No');
					datafrom.find('.form-control').removeAttr('required');
				}
			})
			
      
		},
		makehtml:function(){
				/*bootbox.dialog({
				  message: "<div data-load='formPreview' class='p-20'>{!! Form::text('name','as',['class'=>'form-control','placeholder' => 's']) !!}</div>",
				  title: "Preview From",
				  className:"custom-modal",
				  size:"large",
				  buttons: {
					success: {
					  label: "Cancel",
					  className: "btn-success",
					  callback: function() {
						
					  }
					}
				  }
				});*/
				
				var fields = [];
				
				var gethtml =''
				var control = $('<div data-html="form"></div>');
				 $(' [data-drop="formfield"] .grid-stack-item').each(function(index, element) {
					 var gethtml  = $(this).find('.datafrom').clone();
					 var getcore = $(this).find('.datafrom').data('fields'); 
					 
					 if($(this).find('.datafrom').data('fields')!="core"){
							var getfiledname = $(this).find('[name]').attr('name');
							if(getfiledname){
							 	fields.push(getfiledname);
							 }
							
					 }					 
					 
					 gethtml.find('input, textarea, select').each(function(index, element) {
						var name ='', placeholder ='', fid ='', value = 'null', required ='', error ='', classes ="'class' => ''", type = $(this).attr("type"), tagname = $(this).prop("tagName").toLowerCase(), laravel='';
						
						
							if($(this).attr('name')){
								name = $(this).attr('name');
								if(getcore!="core"){
									var match = name.match(/extra/g)
									if(!match){
										name = 'extra['+name+']'; 	
									}
								}
							 }
							 if($(this).attr('class')){
								classes = "'class' => '"+$(this).attr('class')+"'"	
							 }
							 if($(this).attr('placeholder')){
								placeholder = ", 'placeholder' => '"+$(this).attr('placeholder')+"'"; 	
							 }
							 if($(this).attr('id')){
								 
							 	fid = ", 'id' => '"+$(this).attr('id')+"'"; 
							 }
							 
							 if($(this).attr('required')){
							 	required = ", 'required' => '"+$(this).attr('required')+"'"; 
							 }
							 
							 if($(this).attr('data-error')){
							 	error = ", 'data-error' => '"+$(this).attr('data-error')+"'"; 
							 }
							 
							 if($(this).attr('name')){
								
								if(getcore!="core"){
									value = "@$"+name;
								}
							 }
							 
							 var fieldAttr = classes + placeholder + fid + required + error;
							 
							 
							 
						 if(type=='text' || type=='email' || type=='file' ){
							 laravel = "{!! Form::"+type+"('"+name+"', "+value+" ,["+fieldAttr+"]) !!}";							
						  }
						  
						  if(type=='number'){
							  laravel ="{!! Form::input('number', '"+name+"', "+value+", ["+fieldAttr+"]) !!}";
						  }
						  
						  
						if(type=='password' || type=='file'){
							laravel ="{!! Form::"+type+"('"+name+"', ["+fieldAttr+"]) !!}";
						}
						
						
						if(type=='checkbox' || type=='radio'){
							if($(this).is(":checked")){
								var chekcedornot = 'true';
							}else{
								var chekcedornot = 'false';
							}
							
							laravel ="{!! Form::"+type+"('"+name+"', "+value+", "+chekcedornot+", ["+fieldAttr+"]) !!}"
							
						}
						
						if(tagname=='textarea'){
						    
						 	 if(getcore!="core"){
									value = '@$'+name;
							 }
						  laravel ="{!! Form::textarea('"+name+"', "+value+", ["+fieldAttr+"]) !!}"
							
						}
						
						if(tagname=='select'){
							var optionss = '';
							var multiple = ''
							$(this).find('option').each(function() {
									if(optionss!=""){
										optionss+=", "
									}
                                	var text = $(this).text();
									var val = $(this).val();
									optionss+="'"+val+"' => '"+text+"'";
									
                            });
							
							if($(this).attr('multiple')){
								multiple = ", 'multiple' => '"+$(this).attr('multiple')+"'";
							}
							
							
							
							laravel ="{!! Form::select('"+name+"', ["+optionss+"], null, ["+fieldAttr+multiple+"]) !!}"
							
						}
						
						
						if(laravel!=""){
							$(this).replaceWith(laravel);
						 }
						
						 
                    });
					
						
					
					
					 control.append(gethtml)
                });
				
				//$("[data-load='formPreview']").html(control)
				
				savehtml = control.html();

			
				//alert(savehtml)
			
		},
		onloadhtml:function(){
				$('[data-drop="formfield"] .datafrom').each(function(index, element) {
					var Fildtype = $(this).data('type');
					var Fildfields = $(this).data('fields');
					if(Fildfields!="core"){
					var formaction ='<div class="p-rightsection"> <a class="blue" data-action="edit" ><i class="fa fa-pencil"></i></a> <a class="yellow" data-action="clone"><i class="fa fa-clone"></i></a> <a class="red" data-action="delete"><i class="fa fa-trash"></i></a> </div>';
					}else{
						var formaction ='<div class="p-rightsection"> <a class="blue" data-action="edit" ><i class="fa fa-pencil"></i></a></div>';
					}
					
					var grid = $('<div class="grid-stack-item" data-components="basic"></div>');
					grid.attr('data-fromtype', Fildtype);
					var GridContainer = $('<div class="grid-stack-item-content row"></div>');
					GridContainer.append($(this).clone());
					GridContainer.append(formaction);
					grid.append(GridContainer)
					$(this).replaceWith(grid);
                });
				$('[data-role="browseMedia"]').each(function(index, element) {
                    $(this).media();
                });
		},
		iconf:{
			text : {
				icon:"fa fa-minus",
				color:"green"
			},
			textarea : {
				icon:"fa fa-bars",
				color:"darkpink"
			},
			select:{
				icon:"fa fa-arrow-down",
				color:"blue"
			},
			radio:{
				icon:"fa fa-dot-circle-o",
				color:"red"
			},
			checkbox:{
				icon:"fa fa-check-square-o",
				color:"red"
			},
			file:{
				icon:"fa fa-upload",
				color:"darkpink"
			},
			email:{
				icon:"fa fa-envelope-o",
				color:"yellow"
			},
			icons:{
				icon:"fa fa-arrow-down",
				color:"darkpink"
			}
		},
		generatehtml:{
			text:function(d){
				var html = '<input type="text" name="'+d.name+'" class="form-control" id="'+d.id+'" placeholder="'+d.ph+'">';
				
				return html;	
			},
			select:function(d){
				var html = '';
				var selectoptions = '';
					if(d.data){
						$.each(d.data, function(o,val){
							selectoptions +='<option value="'+val+'">'+o+'</option>';
						})
					}
					html += '<select name="'+d.name+'" class="form-control" id="'+d.id+'" data-content="Please select an option">'+selectoptions+' </select>';
				return html;	
			},
			textarea:function(d){
				var html = '<textarea name="'+d.name+'" id="'+d.id+'" class="form-control" placeholder="'+d.ph+'"></textarea>';
				return html;	
			},
			radio:function(d){
				var html ='';
					if(d.data){
						$.each(d.data, function(o,val){
							html += '<div class="checkbox radio">'+
										'<input type="radio" name="'+d.name+'"  value="'+val+'"><label>'+o+'</label>'+
									  '</div>';
						})
					}
				return html;	
			},
			checkbox:function(d){
				var html ='';
					if(d.data){
						$.each(d.data, function(o,val){
							html += '<div class="checkbox">'+
										'<input type="checkbox" name="'+d.name+'"  value="'+val+'"><label>'+o+'</label>'+
									  '</div>';
						})
					}
				return html;	
			},
			defult:function(d, db){
				var html = '<input type="'+db.input_type+'" name="'+d.name+'" class="form-control" id="'+d.id+'">';
				return html;	
			},
			nodefult:function(db){
				var html = '<input type="'+db.input_type+'" class="form-control" id="'+db.id+'">';
				return html;	
			}		
		},
		loadchoosefield:function(d){
			var listfild = "";
			var optionhtml = "";
			if(d.error){
				return false;	
			}
			$.each(d.types, function(i,v){
				var filedty = v.input_type;
				var fromtype = v.input_type+v.name;
				if(formb.iconf[filedty]){
					var formicon = formb.iconf[filedty]['icon']
					var formcolor= formb.iconf[filedty]['color']
				}else{
					var formicon = formb.iconf.icons
					var formcolor= formb.iconf.icons['color']
				}
				
				listfild +='<div class="list-group-item grid-stack-item '+formcolor+'" data-fromtype="'+fromtype+'" data-components="basic" data-gs-auto-position="true">'+
                              '<div class="grid-stack-item-content"><i class="'+formicon+'"></i> '+v.name+'</div>'+
                            '</div>';
							
					if(v.options){
						if(formb.generatehtml[filedty]){
							var formtag = formb.generatehtml[filedty](v.options);	
						}else{
							var formtag = formb.generatehtml.defult(v.options, v);	
						}
						
					 	optionhtml += '<div data-fromelement="'+fromtype+'">'+
										'<div class="form-group datafrom"  data-type="'+fromtype+'" data-size="col-sm-12">'+
												'<div class="row">'+
													'<label for="singleline" data-fcontrol="label" class="col-sm-12 control-label">'+v.name+'</label>'+
													 '<div data-fcontrol="input" class="col-sm-12" >'+formtag+
													  '</div>'+
											  '</div>'+
										'</div>'+
									'<div class="p-rightsection"> <a class="blue" data-action="edit" ><i class="fa fa-pencil"></i></a> <a class="yellow" data-action="clone"><i class="fa fa-clone"></i></a> <a class="red" data-action="delete"><i class="fa fa-trash"></i></a> </div>'+
								 ' </div>';	
					}else{
						var formtag = formb.generatehtml.nodefult(v);
						optionhtml += '<div data-fromelement="'+fromtype+'">'+
										'<div class="form-group datafrom"  data-type="'+fromtype+'" data-size="col-sm-12">'+
												'<div class="row">'+
													'<label for="singleline" data-fcontrol="label" class="col-sm-12 control-label">'+v.name+'</label>'+
													 '<div data-fcontrol="input" class="col-sm-12" >'+formtag+
													  '</div>'+
											  '</div>'+
										'</div>'+
									'<div class="p-rightsection"> <a class="blue" data-action="edit" ><i class="fa fa-pencil"></i></a> <a class="yellow" data-action="clone"><i class="fa fa-clone"></i></a> <a class="red" data-action="delete"><i class="fa fa-trash"></i></a> </div>'+
								 ' </div>';	
					}
							
			})
			formb.sl.generatedfiled.html(listfild)
			$('[data-formElement="all"]').html(optionhtml)
			dragnadropdata()
		}
		
		
		
	}
  
  $('[data-tool-tab="btnpanel"] a').click(function(){
		$(this).closest('[data-tool-tab="btnpanel"]').find('a').removeClass('active');
		$(this).addClass('active');
	})

 
	$('body').on('click','[data-action="edit"]',function(){
      $(this).closest('.grid-stack-item').addClass('editfiled');
			gethtml = $(this).closest('.grid-stack-item').find('.grid-stack-item-content').html()
			formb.openlight(gethtml);
	});
	
	
	$('body').on('click','[data-fcontrol="label"]',function(){
		$(this).closest('[data-tool-tab="btnpanel"]').find('a').removeClass('active');
		$(this).addClass('active');
	});
	
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
	
	$('body').on('change', '[data-selector="target"]', function() {
		$('[data-target-option]').addClass('hide');
		$('[data-target-option="'+$(this).val()+'"]').removeClass('hide');
	});
	
	
	
	$('body').on('blur', '[data-list-source-option-type] ', function() {
		
		
		
		
		//for radio button
		if($(this).data('list-source-option-type')=='radio-custom'){
					
			var previewOtion = '';
			$($(this).val().split("\n")).each(function (i,val){
				var getOptionStr = $.trim(val);
				var getOptionVal = getOptionStr.split("|");
				
				
				
				if(getOptionStr!=""){ 
					
					var getItemVal = $.trim(getOptionVal[0]);
					var getItemLabel = $.trim(getOptionVal[1]);
				
					if(getOptionVal[1]==undefined || getOptionVal[1]==""){
						getItemLabel = getItemVal;
					}
				
					    previewOtion += '<div class="radio checkbox">'; 
						previewOtion +='<input type="radio" value="'+slugify(getItemVal)+'" id="optionsRadios'+i+'" name="optionsRadios">';
						previewOtion +='<label for="optionsRadios'+i+'">'+getItemLabel+'</label>';
						previewOtion +='</div>';
								
					
				}	
			});
			 $('[data-type="radio"] .ui-resizable').html(previewOtion);
		}
			
		if($(this).data('list-source-option-type')=='radio-url'){
			
			if(isUrl($(this).val())==false){
				$('.url_validation').remove();
				$( '<p class="text-danger url_validation">Enter valid URL</p>' ).insertAfter( $(this) );
				return false;
			}
			if($(this).val()!=''){
				var pathFile = $(this).val();
				$.getJSON( pathFile, {
					format: "json"
				  })
					.done(function( data ) {
						var previewOtion = '';
						var textareaOption = '';
					  $.each( data, function( i, item ) {
						
						if(item!=""){
							var getItemVal = $.trim(i);
							var getItemLabel = $.trim(item);	
							    previewOtion += '<div class="radio checkbox">'; 
								previewOtion +='<input type="radio" value="'+slugify(getItemVal)+'" id="optionsRadios'+i+'" name="optionsRadios">';
								previewOtion +='<label for="optionsRadios'+i+'">'+getItemLabel+'</label>';
								previewOtion +='</div>';
								textareaOption +=getItemVal+'|'+getItemLabel+'\n';
							
						}
						
					  });
					  
					  $('[data-type="radio"] .ui-resizable').html(previewOtion);
					  $('[data-list-source-option-type]').text(textareaOption);
					});
			}	
				
		}	
		
		//for checkbox button
		if($(this).data('list-source-option-type')=='checkbox-custom'){
					
			var previewOtion = '';
			$($(this).val().split("\n")).each(function (i,val){
				var getOptionStr = $.trim(val);
				var getOptionVal = getOptionStr.split("|");
				
				
				
				if(getOptionStr!=""){ 
					
					var getItemVal = $.trim(getOptionVal[0]);
					var getItemLabel = $.trim(getOptionVal[1]);
				
					if(getOptionVal[1]==undefined || getOptionVal[1]==""){
						getItemLabel = getItemVal;
					}
				
					    previewOtion += '<div class="checkbox">'; 
						previewOtion +='<input type="checkbox" value="'+slugify(getItemVal)+'" id="checkboxid'+i+'" >';
						previewOtion +='<label for="checkboxid'+i+'">'+getItemLabel+'</label>';
						previewOtion +='</div>';
								
					
				}	
			});
			 $('[data-type="checkbox"] .ui-resizable').html(previewOtion);
		}
			
		if($(this).data('list-source-option-type')=='checkbox-url'){
			if(isUrl($(this).val())==false){
				$('.url_validation').remove();
				$( '<p class="text-danger url_validation">Enter valid URL</p>' ).insertAfter( $(this) );
				return false;
			}
			if($(this).val()!=''){
				var pathFile = $(this).val();
				$.getJSON( pathFile, {
					format: "json"
				  })
					.done(function( data ) {
						var previewOtion = '';
						var textareaOption = '';
					  $.each( data, function( i, item ) {
						
						if(item!=""){
							var getItemVal = $.trim(i);
							var getItemLabel = $.trim(item);	
							    previewOtion += '<div class="checkbox">'; 
								previewOtion +='<input type="checkbox" value="'+slugify(getItemVal)+'" id="checkboxid'+i+'" >';
								previewOtion +='<label for="checkboxid'+i+'">'+getItemLabel+'</label>';
								previewOtion +='</div>';
								textareaOption +=getItemVal+'|'+getItemLabel+'\n';
							
						}
						
					  });
					  
					  $('[data-type="checkbox"] .ui-resizable').html(previewOtion);
					  $('[data-list-source-option-type]').text(textareaOption);
					});
			}	
				
		}
		
		//for select box
		if($(this).data('list-source-option-type')=='select-custom'){
					
			var previewOtion = '';
			$($(this).val().split("\n")).each(function (i,val){
				var getOptionStr = $.trim(val);
				var getOptionVal = getOptionStr.split("|");
				
				
				
				if(getOptionStr!=""){ 
					
					var getItemVal = $.trim(getOptionVal[0]);
					var getItemLabel = $.trim(getOptionVal[1]);
				
					if(getOptionVal[1]==undefined || getOptionVal[1]==""){
						getItemLabel = getItemVal;
					}
				
					    previewOtion += '<option value="'+slugify(getItemVal)+'">'+getItemLabel+'</option>'; 
			
								
					
				}	
			});
			 $('[data-type="select"] .ui-resizable select').html(previewOtion);
		}
			
		if($(this).data('list-source-option-type')=='select-url'){
			if(isUrl($(this).val())==false){
				$('.url_validation').remove();
				$( '<p class="text-danger url_validation">Enter valid URL</p>' ).insertAfter( $(this) );
				return false;
			}
			if($(this).val()!=''){
				var pathFile = $(this).val();
				$.getJSON( pathFile, {
					format: "json"
				  })
					.done(function( data ) {
						var previewOtion = '';
						var textareaOption = '';
					  $.each( data, function( i, item ) {
						
						if(item!=""){
							var getItemVal = $.trim(i);
							var getItemLabel = $.trim(item);	
								previewOtion += '<option value="'+slugify(getItemVal)+'">'+getItemLabel+'</option>'; 
								textareaOption +=getItemVal+'|'+getItemLabel+'\n';
							
						}
						
					  });
					  $('[data-type="select"] .ui-resizable select').html(previewOtion);
					  $('[data-list-source-option-type]').text(textareaOption);
					});
			}	
				
		}
		
		//for select box
		if($(this).data('list-source-option-type')=='multiselect-custom'){
					
			var previewOtion = '';
			$($(this).val().split("\n")).each(function (i,val){
				var getOptionStr = $.trim(val);
				var getOptionVal = getOptionStr.split("|");
				
				
				
				if(getOptionStr!=""){ 
					
					var getItemVal = $.trim(getOptionVal[0]);
					var getItemLabel = $.trim(getOptionVal[1]);
				
					if(getOptionVal[1]==undefined || getOptionVal[1]==""){
						getItemLabel = getItemVal;
					}
				
					    previewOtion += '<option value="'+slugify(getItemVal)+'">'+getItemLabel+'</option>'; 
			
								
					
				}	
			});
			 $('[data-type="multiselect"] .ui-resizable select').html(previewOtion);
		}
			
		if($(this).data('list-source-option-type')=='multiselect-url'){
			if(isUrl($(this).val())==false){
				$('.url_validation').remove();
				$( '<p class="text-danger url_validation">Enter valid URL</p>' ).insertAfter( $(this) );
				return false;
			}
			if($(this).val()!=''){
				var pathFile = $(this).val();
				$.getJSON( pathFile, {
					format: "json"
				  })
					.done(function( data ) {
						var previewOtion = '';
						var textareaOption = '';
					  $.each( data, function( i, item ) {
						
						if(item!=""){
							var getItemVal = $.trim(i);
							var getItemLabel = $.trim(item);	
								previewOtion += '<option value="'+slugify(getItemVal)+'">'+getItemLabel+'</option>'; 
								textareaOption +=getItemVal+'|'+getItemLabel+'\n';
							
						}
						
					  });
					  $('[data-type="multiselect"] .ui-resizable select').html(previewOtion);
					  $('[data-list-source-option-type]').text(textareaOption);
					});
			}	
				
		}
		
	});
	
	function slugify(text){
	  return text.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '');            // Trim - from end of text
	}
	
	function isUrl(s) {
		var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		return regexp.test(s);
	}
	
	$('body').on('change', '[data-html="slider_type"] ', function() {
			$('[data-slider-option-value]').addClass('hide');
			$('[data-slider-option-value="'+$(this).val()+'"]').removeClass('hide');
			if($(this).val()=='ticks'){
				$('[data-slider-option-ticks="ticks"]').removeClass('hide');
				
			}else{
				$('[data-slider-option-ticks="ticks"]').addClass('hide');
			}
	});
	
	




	
	function ucfirst(str,force){
          str=force ? str.toLowerCase() : str;
          return str.replace(/(\b)([a-zA-Z])/,
                   function(firstLetter){
                      return   firstLetter.toUpperCase();
                   });
     }
		
	
	$('.color-picker').colorpicker().on('changeColor', function(e){
			
			
    
	});

	



	

  