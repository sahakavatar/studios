$(function(){
  var getstyletype = $('[data-pagetype]').val();
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
  
	var classb = {
			sl:{
				cssview : $('[data-role="classview"]'),
				cssstyle : $('[data-role="savedcss"]'),
				exportjson : $('[data-export="json"]'),
				exportcss : $('[data-export="css"]'),
				save : $('[ data-save="class"]')
			},
      preview:{
        p:'<p data-preview="studio" data-role="classview"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
        h1:'<h1 data-preview="studio" data-role="classview">Preview</h1>',
        h2:'<h2 data-preview="studio" data-role="classview">Preview</h2>',
        h3:'<h3 data-preview="studio" data-role="classview">Preview</h3>',
        h4:'<h4 data-preview="studio" data-role="classview">Preview</h4>',
        h5:'<h5 data-preview="studio" data-role="classview">Preview</h5>',
        h6:'<h6 data-preview="studio" data-role="classview">Preview</h6>',
        img:'<img data-preview="studio" data-role="classview" src="https://www.w3schools.com/css/img_fjords.jpg">',
        span:'<span data-preview="studio" data-role="classview"> Text Preview Here</span>',
        div:'<div data-preview="studio" data-role="classview">Preview</div>',
        i:'<i class="fa fa-home" data-preview="studio" data-role="classview"></i>',
        button:'<button data-preview="studio" data-role="classview">Button</button>',
        nav:'<nav data-preview="studio" data-role="classview"><ul style="list-style-type: none;color: #fff;"><li style="display: inline-block; margin:0 10px; ">Link-1</li><li style="display: inline-block;margin:0 10px;">Link-2</li><li style="display: inline-block;margin:0 10px;">Link-3</li><li style="display: inline-block;margin:0 10px;">Link-4</li></ul></nav>',
        form:'<form data-preview="studio" data-role="classview"><label for="name">Username:</label><input type="text" id="name" name="user_name"><br><label for="email">Email:</label><input type="email" id="mail" name="user_mail"></form>',
        li:'<ul><li data-preview="studio" data-role="classview">Link-1</li><li data-preview="studio" data-role="classview">Link-2</li><li data-preview="studio" data-role="classview">Link-3</li><li data-preview="studio" data-role="classview">Link-4</li></ul>',
        ul:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
        hr:'<hr data-preview="studio" data-role="classview">',
        a:'<a data-preview="studio" data-role="classview">Link here</a>',
        textarea:'<textarea data-preview="studio" data-role="classview"></textarea>',
        select:'<select data-preview="studio" data-role="classview"><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select>',
        table:'<table data-preview="studio" data-role="classview"><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td> <td>Jackson</td><td>94</td></tr></table>',
        th:'<table><tr><th data-preview="studio" data-role="classview">Firstname</th><th data-preview="studio" data-role="classview">Lastname</th><th data-preview="studio" data-role="classview">Age</th></tr><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td> <td>Jackson</td><td>94</td></tr></table>',
        tr:'<table><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr><tr data-preview="studio" data-role="classview"><td>Jill</td><td>Smith</td><td>50</td></tr><tr data-preview="studio" data-role="classview"><td>Eve</td> <td>Jackson</td><td>94</td></tr></table>',
        td:'<table><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr><tr><td data-preview="studio" data-role="classview">Jill</td><td data-preview="studio" data-role="classview">Smith</td><td data-preview="studio" data-role="classview">50</td></tr><tr><td data-preview="studio" data-role="classview">Eve</td><td data-preview="studio" data-role="classview">Jackson</td><td data-preview="studio" data-role="classview">94</td></tr></table>',
        
        menu_style:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
        
        text_input_style:'<input type="text" data-preview="studio" data-role="classview" value="My Input" name="">',
        radio_input_style:'<input type="radio" data-preview="studio" data-role="classview" value="" name="">',
        checkbox_input_style:'<input type="checkbox" data-preview="studio" data-role="classview" value="" name="">',
        image_style:'<img data-preview="studio" data-role="classview" src="https://www.w3schools.com/css/img_fjords.jpg">',
        menu_style:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
        
        
      },
      less:"",
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
       // classb.compile()

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
			updatecss:function(){
				classb.runcss()
        classb.downloadcss();
        classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
				classb.sl.cssview.attr('class', classb.generalSetting.csssetting.class)

			},
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
				if(getjsonvale){
					classb.generalSetting.csssetting = JSON.parse(getjsonvale);
          $('[type="checkbox"][data-cssexist]').prop('checked', false);
          $('[data-insettemp="textshadow"]').empty();
					$.each(classb.generalSetting.csssetting.css, function(io, iv){
						iv = iv.replace('px','');
						$('[data-css="'+io+'"][data-selector]').val(iv)
            $('[data-css="'+io+'"][data-html]').val(iv)
						if($('[data-css="'+io+'"]').is('.settingSlider')){
							$('[data-css="'+io+'"].settingSlider').slider('value', iv)
						}
            if($('[data-actioncss="'+io+'"]').is('[data-val]')){
							$('[data-actioncss="'+io+'"][data-val]').addClass('active');
						}
            if($('[data-cssexist="'+io+'"]').is('[data-switch]')){
              $('[type="checkbox"][data-cssexist="'+io+'"][data-switch]').prop('checked', true);
						}
            if($('[data-textcolor="'+io+'"]').is('[data-textcolor]')){
							$('[data-css="'+io+'"]').val(iv)
						}
            if(io=="text-shadow"){
                var textdata = iv.trim().replace(/, /g, ",").split(",");
                $.each(textdata, function(key, val){
                  var dataval =  val.trim().replace(/px/g, "");
                  dataval = dataval.split(" ")
                  
                      var gethtml =  $('[data-template="textshadow"]').html()
                       $('[data-insettemp="textshadow"]').append(gethtml)
                
                  var target = $('[data-role="textGroup"]:eq('+key+')')
                  target.find('[data-textshadow="x"]').val(dataval[0])
                  target.find('[data-textshadow="y"]').val(dataval[1])
                  target.find('[data-textshadow="blur"]').val(dataval[2])
                  target.find('[data-textshadow="color"]').val(dataval[3])
                  target.find('.color-picker').colorpicker().on('changeColor', function(e){
                       classb.csspropa.textshadow()
                  })
                })
            }
            
					});
           
           switchas();
           classb.updatecss()
				}
			},
      csspropa:{
         textshadow:function(target){
           var sedows = ''
           $('[data-role="textGroup"]').each(function(index, element) {
              if(index!=0){
                  sedows +=', '
              }
              var targets = $(this)
              var color = targets.find('[data-textshadow="color"]').val()
              var x = targets.find('[data-textshadow="x"]').val()
              var y = targets.find('[data-textshadow="y"]').val()
              var blurs = targets.find('[data-textshadow="blur"]').val()
              sedows += x+'px '+y+'px '+blurs+'px '+color
             
						    
					});
           
          
           classb.generalSetting.csssetting.css['text-shadow'] =  sedows
           classb.updatecss()  
         }
      },
      downloadcss:function(){
          $('[data-download="css"]').attr('download', classb.generalSetting.csssetting.class+'.css')
          var data = "text/plain;charset=utf-8," + encodeURIComponent(classb.generalSetting.csssetting.savedcss);
          $('[data-download="css"]').attr('href', 'data:' + data)
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
                
                 $('#selectexistingstyle').modal('show');
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
      action:{
          editpopup:function(target){
            var senddata = {}
            $('[data-classeslsit="basic"]').html('<span class="ajaxloding"></span>')
           senddata['tab'] = 'basic'
           senddata['type'] = 'text_parts';
           senddata['sub'] = 'text_shadow';
           styletype = 'bsc'+  senddata['sub'];
           styletype  = senddata['sub'];
           sendajax('/admin/framework/get-class-with-tab-type-sub', senddata, classb.getbasicclasses)
        },
        getcss:function(target){
            var getjson = target.closest('[data-cssdata]').data('cssdata');
            if(getjson){
                if(getjson['normal']){
                    if(getjson['normal']['text-shadow']){
                      classb.generalSetting.csssetting.css['text-shadow'] = getjson['normal']['text-shadow']
                      classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
                      classb.editReload();
                      $('#selectexistingstyle').modal('hide');
                    }
                }
            }
            
        }
      }
		}
		classb.generalSetting.csssetting.class = 'classname';
		classb.generalSetting.csssetting.savedcss = '';
		classb.generalSetting.csssetting.classname = '.'+classb.generalSetting.csssetting.class;
		classb.generalSetting.csssetting.css = {};
    
    var timerimportjson = window.setInterval(inportjson, 200);
    function inportjson(){
          openjsonload = $('[data-export="importjson"]').attr('data-open');
          if(openjsonload){
            $('[data-export="importjson"]').keyup()
            clearInterval(timerimportjson);
          }
    }
    if(classb.preview[getstyletype]){
      $('[data-preview="studio"]').replaceWith(classb.preview[getstyletype]);
    }
    
    $.get("/app/Modules/Studios/Resources/Views/assets/css/generatedcss.less", function(data){
            classb.less = data;
            
            classb.editReload();
            
      });	
      
     classb.sl.cssview = $('[data-role="classview"]');


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
				var thiscssafte = $(this).attr('data-css-after');
				classb.generalSetting.csssetting.css[thiscsspro] = thisval+thiscssafte;
				classb.updatecss()
			}
		});
	});

	$('.color-picker').colorpicker().on('changeColor', function(e){
		e.preventDefault();
		var color = e.color.toHex();
		var stype = $(this).data('textcolor');
    var shadowcolor = $(this).data('shadowcolor');
    if(shadowcolor){
      classb.csspropa.textshadow($(this))
    }else{
		  classb.generalSetting.csssetting.css[stype] = color;
		  classb.updatecss()
    }
	});
	
  $('select[data-selector]').change(function(){
		var thiscsspro = $(this).attr('data-css');
		var thisval = $(this).val()
		classb.generalSetting.csssetting.css[thiscsspro] = thisval;
		classb.updatecss()
	})
  
  $('[data-html]').keyup(function(){
		var thiscsspro = $(this).attr('data-css');
    var aftercss = $(this).data('after');
		var thisval = $(this).val()
    if(aftercss){
        thisval = thisval+aftercss;
    }
		classb.generalSetting.csssetting.css[thiscsspro] = thisval;
		classb.updatecss()
	})
  
  $('body').on('keyup','[data-textshadow]',function(){
      var mimin = $(this).data('min')
      classb.csspropa.textshadow($(this))
  })
  
  $('[data-switch]').change(function(){
      var itstrue = $(this).is(':checked')
      var getdataswitch = $(this).data('switch');
      var cssexist = $(this).data('cssexist');
      if(itstrue){
          $('#'+getdataswitch).collapse("show")
          $(this).closest('.studio-collapse-header').removeClass('disabled')
          if(cssexist=='text-shadow'){
            classb.csspropa.textshadow()
          }else{
            $('[data-selector="'+cssexist+'"]').change()
          }
      }else{
          if(classb.generalSetting.csssetting.css[cssexist]){
             delete classb.generalSetting.csssetting.css[cssexist];
             classb.updatecss()
          }
         $('#'+getdataswitch).collapse("hide")
         $(this).closest('.studio-collapse-header').addClass('disabled')
      }
  })
  $('[data-actioncss]').click(function(){
       var itstrue = $(this).is('.active')
       var thiscss = $(this).data('actioncss');
       var thisvalue = $(this).data('val');
        if(itstrue){
          if(classb.generalSetting.csssetting.css[thiscss]){
             delete classb.generalSetting.csssetting.css[thiscss];
          }
          $(this).removeClass('active');
        }else{
          classb.generalSetting.csssetting.css[thiscss] = thisvalue; 
          $(this).addClass('active');
        }
        
        classb.updatecss()
  })
  
  $('[data-roletemplate]').click(function(){
    var gettemplate =  $(this).data('textshadow') 
     var truefor= $('[data-cssexist="text-shadow"][type="checkbox"]').is(':checked')
     if(truefor){
          var gethtml =  $('[data-template="textshadow"]').html()
          $('[data-insettemp="textshadow"]').append(gethtml)
          $('#textShadowcontainer').collapse("show")
          $('.color-picker').colorpicker().on('changeColor', function(e){
              classb.csspropa.textshadow()
          })
           classb.csspropa.textshadow()
     }
 })
  
 $('body').on('click', '[data-role="removeTextShedow"]', function(e){
      e.preventDefault()
      $(this).closest('[data-role="textGroup"]').remove()
       classb.csspropa.textshadow();
  }).on('click', '[data-buttonrole]', function(){
        var gettype = $(this).data('buttonrole')
          if(classb.action[gettype]){
                   classb.action[gettype]($(this));
         }
  }) 

  
  function switchas(){
      $('[data-switch]').each(function(){
          var itstrue = $(this).is(':checked')
          var getdataswitch = $(this).data('switch');
          
          if(itstrue){
              $('#'+getdataswitch).collapse("show")
              $(this).closest('.studio-collapse-header').removeClass('disabled')
          }else{
             $('#'+getdataswitch).collapse("hide")
             $(this).closest('.studio-collapse-header').addClass('disabled')
          }
      })
  }
  
    $( '[data-insettemp="textshadow"]' ).sortable({
        update: function( event, ui ) {
            classb.csspropa.textshadow();
        }
    });
  
  
	$('[data-role="classname"]').keyup(function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.generalSetting.csssetting.class = classnames;
			classb.generalSetting.csssetting.classname = '.'+classnames;
			classb.updatecss()
	})
  
  $('[data-togglebutton="textshadow"]').click(function(){
      var getactive = $(this).hasClass('active');
      if(getactive){
          $(this).removeClass('active')
      }else{
         $(this).addClass('active')
      }
  })


  
     $('body').on('click', '.spinner .btn:first-of-type ', function() {
        var  newval = parseInt( $(this).closest('.spinner').find('input').val(), 10) + 1
        var  tycss = $(this).closest('.spinner').find('input').attr('id');
        $(this).closest('.spinner').find('input').val(newval).keyup();
      });
      $('body').on('click', '.spinner .btn:last-of-type', function() {
         var newval = parseInt( $(this).closest('.spinner').find('input').val(), 10) - 1
         var  tycss = $(this).closest('.spinner').find('input').attr('id');
         $(this).closest('.spinner').find('input').val(newval).keyup();
         
      });
  

 
              


})
