 (function($) {
    
    var BBBStudio = {
        init : function(options, elm) {
          var self = this;
          self.$elm = $(elm);
          
          self.$elm.empty();
          self.settings = $.extend({}, $.fn.BBStudio.options, options);
    
          self.$elm.data("BBStudioData", self.settings);
          self.createBBStudio()
    
        },
        createBBStudio:function(){
            var self = this;
           
             var jsonDataString, jsonData, timer;
             if(self.settings.type=="popup"){
                  var popupclass = 'studio-popup-wrapper' 
             }else{
                 var popupclass = 'studio-inlinepopup-wrapper' 
             }
             
           if(self.settings.containerClass){
            var popupClassContainer = 'popupStudioContianer'+self.settings.studio+self.settings.containerClass;
            var ifreamFream =  'studio-fream'+self.settings.studio+self.settings.containerClass;
            }else{
             var popupClassContainer = 'popupStudioContianer'+self.settings.studio;
             var ifreamFream =  'studio-fream'+self.settings.studio;
            }  
             
            
            var ifreamSelector = $('#'+ifreamFream);
            
            
            var spopupContainer = '.'+popupClassContainer;
           
            
             if(self.settings.container){
                   
                    var popup = popupConstructor();
                    $(self.settings.container).find(spopupContainer).remove();
                    var cssinfor = "info";
                    $(self.settings.container).append(popup);
                    
                    ifreamSelector = $('#'+ifreamFream);
                    
                    if(self.settings.button){
                        self.settings.button.find('i').addClass('fa-spin');
                    }
                    if(self.settings.type=="popup"){
                       $(spopupContainer)
                              .prepend('<a href="#" class="close-studiopopup" data-button="close-studio"><i class="fa fa-close"></i></a>')
                              .animate({
                                  top: 0
                              });
                    }
                    
                    

                    ifreamSelector.load(function(){
                        if(self.settings.button){
                            self.settings.button.find('i').removeClass('fa-spin');
                        }
                        $(spopupContainer+' .ajaxloding').hide();
                        $(spopupContainer+' iframe').fadeIn(200)
                        if(self.settings.css){
                          
                                $(this).contents().find('[data-export="conected"]').attr('data-open', 'true').val(self.settings.css)
                                $(this).contents().find('[data-openpopup="savebutton"]').removeClass('hide').next('.open-login').addClass('hide')   
                           
                        }
                        if(self.settings.json){
                            $(this).contents().find('[data-export="importjson"]').attr('data-open', 'true').val(self.settings.json)  
                        }
                        
                        timer = window.setInterval(getJSON, 100);
                        
                        if(self.settings.type=="popup"){
                          $(spopupContainer).draggable().resizable();
                        }else{
                          var cssnone = '<style>#builderContain, .menuBuilder, #wrapper, .formoptions{ position:inherit; overflow:inherit; left:auto; right:auto; top:auto; bottom:auto} body{ background:#3d3d3d;} .container-fluid{ padding:0;}</style>';
                          $(this).contents().find('body').append(cssnone)
                           setheight()
                           
                           ifreamSelector.resize(setheight);
                            
                        }
                        $(spopupContainer).find('[data-button="close-studio"]').click(function (){
                            closePopup();
                        });

                    });

                }
            
            
             function setheight(){
               
                              var getInnerheight = ifreamSelector.prop('scrollHeight')
                              var ofect = ifreamSelector.contents().find('.formoptions').innerHeight()
                              ifreamSelector.height(ofect)
                           
            }

            function closePopup(){
                $(spopupContainer).animate({
                    top: - (ifreamSelector.height() + 200)
                }, 500, function() {
                      $(spopupContainer).remove();
                  })

                stopTimer();
            };
              
              
            function getJSON(){
                  
                var jsonDataStringNew = ifreamSelector.contents().find('[data-export="json"]').val();
                 if(self.settings.type!="popup"){
                    setheight() 
                 }
              
                if(jsonDataStringNew != jsonDataString){
                 
                    jsonDataString = jsonDataStringNew;
                    jsonData = JSON.parse(jsonDataString);

                    if(self.settings.updateType == 'css'){
                        var classSelector = jsonData.class;
                        
                        $(self.settings.selector).removeClass(self.settings.classname).addClass(self.settings.classname);
                        $('[data-selector-style=\''+self.settings.selector+self.settings.studio+'\']').remove();


                        var css = jsonData.savedcss.replace(new RegExp("\." + classSelector,"g"), self.settings.selector + '.'+self.settings.classname);
                        //var css = self.settings.selector+'.'+self.settings.classname+' {'+jsonData.css+'}'
                        var styletag = self.settings.selector+self.settings.studio;
                         self.settings.callback(self.settings.classname, jsonDataString, styletag)
                        if(self.settings.edit){
                          $('body').append('<style data-selector-style=\''+styletag+'\'>' + css + '</style>');
                        }
                    }
                   
                    self.settings.jsonUpdate(jsonData);
                }
            }

            function stopTimer(){
                clearInterval(timer);
            }

            function popupConstructor(){
                var popupHeading = $('<div/>')
                  popupHeading.addClass(popupclass+' '+popupClassContainer)
                  if(self.settings.type=="popup"){
                    popupHeading.append('<div class="studio-popupHeader">'+self.settings.studio+'</div>');
                  }
                 
                  popupHeading.append('<div class="ajaxloding"></div>')
                  popupHeading.append(iframeConstructor())
                return popupHeading
                    
            }

            function iframeConstructor(){
                return $('<iframe/>')
                    .attr('id', ifreamFream)
                    .attr('src', '/admin/studios/create/classes/basic?tag=' + self.settings.studio)
                    .css({
                        border: 0
                    }).hide();
            }
            
            
            
            
        }
        
        
    }
    
   
   	$.fn.BBStudio = function(options) {
      return this.each(function() {
        var BBStudio = Object.create(BBBStudio);
         BBStudio.init(options, this);
      });
    };
    
     $.fn.BBStudioUpdate = function(options) {
          var BBStudioData = this.data("BBStudioData");
          var newOptions = {};
          if (BBStudioData) {
            newOptions = $.extend({}, BBStudioData, options);
          }
          return this.BBStudio(newOptions);
      };
    
    $.fn.BBStudio.options = {
	              selector: '',
                studio: 'container',
                container: null,
                type:'popup',
                button: null,
                containerClass: null,
                updateType: 'css',
                classname:'classname',
                jsonUpdate: function (){},
                json:null,
                css:null,
                edit:true,
                callback: function(classs, setting) {}
  	};
    
 
    
    
})(jQuery);
        