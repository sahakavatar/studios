 (function($) {

        $.BBStudio = function( options ) {

            var self = this;
            var settings = $.extend({
                selector: '',
                studio: 'container',
                container: null,
                type:'popup',
                button: null,
                updateType: 'css',
                jsonUpdate: function (){},
                callback: function(classs, setting) {}
            }, options );

            var jsonDataString, jsonData, timer;
             if(settings.type=="popup"){
                  var popupclass = 'studio-popup-wrapper' 
             }else{
                 var popupclass = 'studio-inlinepopup-wrapper' 
             }
             
            var ifreamFream =  'studio-fream'+settings.studio;
            var ifreamSelector = $('#'+ifreamFream);
             
           
            self.open = function (){
                if(settings.container){
                    var popup = popupConstructor();
                   
                    $(settings.container).find('.popupStudioContianer').remove();
                    $(settings.container).append(popup);
                    
                    ifreamSelector = $('#'+ifreamFream);
                    
                    if(settings.button){
                        settings.button.find('i').addClass('fa-spin');
                    }
                    if(settings.type=="popup"){
                       $('.popupStudioContianer')
                              .prepend('<a href="#" id="close-studio"><i class="fa fa-close"></i></a>')
                              .animate({
                                  top: 0
                              });
                    }else{
                      
                      
                    }

                    ifreamSelector.load(function(){
                        if(settings.button){
                            settings.button.find('i').removeClass('fa-spin');
                        }
                        $('.popupStudioContianer .ajaxloding').hide();
                        $('.popupStudioContianer iframe').fadeIn(200)
                        
                        timer = window.setInterval(getJSON, 500);
                        
                        if(settings.type=="popup"){
                          $('.popupStudioContianer').draggable().resizable();
                        }else{
                          var cssnone = '<style>#builderContain, .menuBuilder, #wrapper, .formoptions{ position:inherit; overflow:inherit; left:auto; right:auto; top:auto; bottom:auto} body{ background:#3d3d3d;} .container-fluid{ padding:0;}</style>';
                          $(this).contents().find('body').append(cssnone)
                           setheight()
                           
                           ifreamSelector.resize(setheight);
                            
                        }
                        $('#close-studio').click(function (){
                            closePopup();
                        });

                    });

                }
            };
            
            
             
            
            function setheight(){
               
                              var getInnerheight = ifreamSelector.prop('scrollHeight')
                              var ofect = ifreamSelector.contents().find('.formoptions').innerHeight()
                              ifreamSelector.height(ofect)
                           
            }

            function closePopup(){
                $('.popupStudioContianer').animate({
                    top: - (ifreamSelector.height() + 200)
                }, 500, function() {
                      $('.popupStudioContianer').remove();
                  })

                stopTimer();
            };
              
              
            function getJSON(){
                var jsonDataStringNew = ifreamSelector.contents().find('[name=json_data]').val();

                if(jsonDataStringNew != jsonDataString){
                    jsonDataString = jsonDataStringNew;
                    jsonData = JSON.parse(jsonDataString);

                    if(settings.updateType == 'css'){
                        var classSelector = jsonData.class;
                        $(settings.selector).removeClass(classSelector).addClass(classSelector);
                        $('[data-selector-style=\''+settings.selector+'\']').remove();

                        var css = jsonData.savedcss.replace(new RegExp("\." + classSelector,"g"), settings.selector + '.'+classSelector);
                         settings.callback(classSelector)
                        $('body').append('<style data-selector-style=\''+settings.selector+'\'>' + css + '</style>');
                    }

                    settings.jsonUpdate(jsonData);
                }
            }

            function stopTimer(){
                clearInterval(timer);
            }

            function popupConstructor(){
                return $('<div/>')
                    .addClass(popupclass+' popupStudioContianer').append('<div class="studio-popupHeader">'+settings.studio+'</div><div class="ajaxloding"></div>')
                    .append(iframeConstructor())
            }

            function iframeConstructor(){
                return $('<iframe/>')
                    .attr('id', ifreamFream)
                    .attr('src', '/bbeditor/classes/' + settings.studio + '?iframe')
                    .css({
                        border: 0
                    }).hide();
            }
            
            if(settings.type!="popup"){
                self.open()
            }

            return self;
        };

    }(jQuery));