/**
 * Frontwise grid editor plugin.
 */
(function( $ ){

$.fn.gridEditor = function( options ) {

    var self = this;
    var grideditor = self.data('grideditor');
    
    /** Methods **/
    
    if (arguments[0] == 'getHtml') {
        if (grideditor) {
            grideditor.deinit();
            var html = self.html();
            grideditor.init();
            return html;
        } else {
            return self.html();
        }
    } 
    
  
    /** Initialize plugin */

    self.each(function(baseIndex, baseElem) {
        baseElem = $(baseElem);
        
        // Wrap content if it is non-bootstrap
        if (baseElem.children().length && !baseElem.find('div.row').length) {
            var children = baseElem.children();
            var newRow = $('<div class="row"><div class="col-md-12"/></div>').appendTo(baseElem);
            newRow.find('.col-md-12').append(children);
        }

        var settings = $.extend({
            'new_row_layouts'   : [ // Column layouts for add row buttons
                                    [12],
                                    [6, 6],
                                    [4, 4, 4],
                                    [3, 3, 3, 3],
                                    [2, 2, 2, 2, 2, 2],
                                    [2, 8, 2],
                                    [4, 8],
                                    [8, 4]
                                ],
            'row_classes'       : [{ label: 'Example class', cssClass: 'example-class'}],
            'col_classes'       : [{ label: 'Example class', cssClass: 'example-class'}],
            'col_tools'         : [], /* Example:
                                        [ {
                                            title: 'Set background image',
                                            iconClass: 'glyphicon-picture',
                                            on: { click: function() {} }
                                        } ]
                                    */
            'row_tools'         : [],
            'custom_filter'     : '',
            'content_types'     : ['tinymce'],
            'valid_col_sizes'   : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            'source_textarea'   : ''
        }, options);

        // Elems
        var canvas,
            mainControls,
            addRowGroup,
            htmlTextArea
        ;
        var colClasses = ['col-md-', 'col-sm-', 'col-xs-'];
        var curColClassIndex = 0; // Index of the column class we are manipulating currently
        var MAX_COL_SIZE = 12;

        setup();
        init();
        
          $('#bootstrapGrid').after('<div class="infom"></div>')

        function setup() {
            /* Setup canvas */
            canvas = baseElem.addClass('ge-canvas');

            if (settings.source_textarea) {
                var sourceEl = $(settings.source_textarea);
                
                sourceEl.addClass('ge-html-output');
                    htmlTextArea = sourceEl;
                    
                if (sourceEl.val()) {
                    self.html(sourceEl.val());
                }
            }
            
            if (typeof htmlTextArea === 'undefined' || !htmlTextArea.length) {
                htmlTextArea = $('<textarea class="ge-html-output"/>').insertBefore(canvas);
            }

            /* Create main controls*/
            mainControls = $('<div class="ge-mainControls" />').insertBefore(htmlTextArea);
            var wrapper = $('<div class="ge-wrapper ge-top" />').appendTo(mainControls);

            // Add row
            addRowGroup = $('<div class="ge-addRowGroup btn-group" />').appendTo(wrapper);
            $.each(settings.new_row_layouts, function(j, layout) {
                var btn = $('<a class="btn btn-xs btn-primary" />')
                    .attr('title', 'Add row ' + layout.join('-'))
                    .on('click', function() {
                        var row = createRow().appendTo(canvas);
                        layout.forEach(function(i) {
                            createColumn(i).appendTo(row);
                        });
                        init();
                    })
                    .appendTo(addRowGroup)
                ;

                btn.append('<span class="glyphicon glyphicon-plus-sign"/>');

                var layoutName = layout.join(' - ');
                var icon = '<div class="row ge-row-icon">';
                layout.forEach(function(i) {
                    icon += '<div class="column col-xs-' + i + '"/>';
                });
                icon += '</div>';
                btn.append(icon);
            });

            // Buttons on right
            var layoutDropdown = $('<div class="dropdown pull-right ge-layout-mode">' +
                '<button type="button" class="btn btn-xs btn-primary dropdown-toggle" data-toggle="dropdown"><span>Desktop</span></button>' +
                '<ul class="dropdown-menu" role="menu">' +
                    '<li><a data-width="auto" title="Desktop"><span>Desktop</span></a></li>' +
                    '<li><a title="Tablet"><span>Tablet</span></li>' +
                    '<li><a title="Phone"><span>Phone</span></a></li>' +
                    '</ul>' +
                '</div>')
                .on('click', 'a', function() {
                    var a = $(this);
                    switchLayout(a.closest('li').index());
                    var btn = layoutDropdown.find('button');
                    btn.find('span').remove();
                    btn.append(a.find('span').clone());
                })
                .appendTo(wrapper)
            ;
            var btnGroup = $('<div class="btn-group pull-right"/>')
                .appendTo(wrapper)
            ;
            var htmlButton = $('<button title="Edit Source Code" type="button" class="btn btn-xs btn-primary gm-edit-mode"><span class="glyphicon glyphicon-chevron-left"></span><span class="glyphicon glyphicon-chevron-right"></span></button>')
                .on('click', function() {
                    if (htmlButton.hasClass('active')) {
                        canvas.empty().html(htmlTextArea.val()).show();
                        init();
                        htmlTextArea.hide();
                    } else {
                        deinit();
                        htmlTextArea
                            .height(0.8 * $(window).height())
                            .val(canvas.html())
                            .show()
                        ;
                        canvas.hide();
                    }

                    htmlButton.toggleClass('active btn-danger');
                })
                .appendTo(btnGroup)
            ;
            var previewButton = $('<button title="Preview" type="button" class="btn btn-xs btn-primary gm-preview"><span class="glyphicon glyphicon-eye-open"></span></button>')
                .on('mouseenter', function() {
                    canvas.removeClass('ge-editing');
                })
                .on('click', function() {
                    previewButton.toggleClass('active btn-danger').trigger('mouseleave');
                })
                .on('mouseleave', function() {
                    if (!previewButton.hasClass('active')) {
                        canvas.addClass('ge-editing');
                    }
                })
                .appendTo(btnGroup)
            ;

            // Make controls fixed on scroll
            var $window = $(window);
            $window.on('scroll', function(e) {
                if (
                    $window.scrollTop() > mainControls.offset().top &&
                    $window.scrollTop() < canvas.offset().top + canvas.height()
                ) {
                    if (wrapper.hasClass('ge-top')) {
                        wrapper
                            .css({
                                left: wrapper.offset().left,
                                width: wrapper.outerWidth(),
                            })
                            .removeClass('ge-top')
                            .addClass('ge-fixed')
                        ;
                    }
                } else {
                    if (wrapper.hasClass('ge-fixed')) {
                        wrapper
                            .css({ left: '', width: '' })
                            .removeClass('ge-fixed')
                            .addClass('ge-top')
                        ;
                    }
                }
            });

            /* Init RTE on click */
            canvas.on('click', '.ge-content', function(e) {
                var rte = getRTE($(this).data('ge-content-type'));
                if (rte) {
                   // rte.init(settings, $(this));
                }
            });
        }

        self.init = function(){
            init();
        };

        function reset() {
            deinit();
            init();
        }

        function init() {
            runFilter(true);
            canvas.addClass('ge-editing');
            addAllColClasses();
            wrapContent();
            createRowControls();
            createColControls();
            makeSortable();
            switchLayout(curColClassIndex);
        }

        function deinit() {
            canvas.removeClass('ge-editing');
            var contents = canvas.find('.ge-content').each(function() {
                var content = $(this);
                getRTE(content.data('ge-content-type')).deinit(settings, content);
            });
            canvas.find('.ge-tools-drawer').remove();
            removeSortable();
            runFilter();
        }

        function createRowControls() {
            canvas.find('.row').each(function() {
                var row = $(this);
                if (row.find('> .ge-tools-drawer').length) { return; }
                var parent = row.closest('[data-selector]').data('selector');
                
                var drawer = $('<div class="ge-tools-drawer" />').prependTo(row);
                
                
                
                createTool(drawer, 'Move', 'ge-move', 'glyphicon-move');
                createTool(drawer, 'Settings', '', 'glyphicon-cog', function() {
                    details.toggle();
                });
                settings.row_tools.forEach(function(t) {
                    createTool(drawer, t.title || '', t.className || '', t.iconClass || 'glyphicon-wrench', t.on);
                });
                createTool(drawer, 'Remove row', '', 'glyphicon-trash', function() {
                    row.slideUp(function() {
                        row.parent('[data-selector]').click();
                        row.remove();
                    });
                   
                   var getlanthe = $('[data-rowid="'+parent+'"]').closest('ol').children('li').length
                    if(getlanthe=='1'){
                          var target =  $('[data-rowid="'+parent+'"]').closest('ol').closest('li').data('rowid');
                          $('[data-ctarget="'+target+'"][data-type="Add Item"]').show();
                          $('[data-selector="'+target+'"]').find('.ge-content').first().append('<div class="component-area removecomponent"></div>');
                    }
                    
                    $('[data-rowid="'+parent+'"]').slideUp(function() {
                        $('[data-rowid="'+parent+'"]').remove();
                    });
                    
                });
                createTool(drawer, 'Add column', 'ge-add-column', 'glyphicon-plus-sign', function() {
                    var cclumns = createColumn(12);
                    row.append(cclumns);
                    if(!$('[data-rowid="'+parent+'"] > ol').is('ol')){
                       $('[data-rowid="'+parent+'"]').append('<ol data-accept="col">');
                    }
                    $('[data-rowid="'+parent+'"] > ol').append(createColumnli(cclumns.data('selector')))
                    $('[data-selector="'+cclumns.data('selector')+'"]').click()
                    init();
                });
                 createTool(drawer, 'Duplicate', '', 'glyphicon-duplicate', function() {
                     cloneData(parent)
                });
                var details = createDetails(row, settings.row_classes).appendTo(drawer);
            });
        }

        function createColControls() {
            canvas.find('.column').each(function() {
                var col = $(this);
                if (col.find('> .ge-tools-drawer').length) { return; }
                var parent = col.closest('[data-selector]').data('selector');
                var drawer = $('<div class="ge-tools-drawer" />').prependTo(col);
               
                
                createTool(drawer, 'Move', 'ge-move', 'glyphicon-move');

                createTool(drawer, 'Make column narrower\n(hold shift for min)', 'ge-decrease-col-width', 'glyphicon-minus', function(e) {
                    var colSizes = settings.valid_col_sizes;
                    var curColClass = colClasses[curColClassIndex];
                    var curColSizeIndex = colSizes.indexOf(getColSize(col, curColClass));
                    var newSize = colSizes[clamp(curColSizeIndex - 1, 0, colSizes.length - 1)];
                    if (e.shiftKey) {
                        newSize = colSizes[0];
                    }
                    setColSize(col, curColClass, Math.max(newSize, 1));
                });

                createTool(drawer, 'Make column wider\n(hold shift for max)', 'ge-increase-col-width', 'glyphicon-plus', function(e) {

                    var colSizes = settings.valid_col_sizes;
                    var curColClass = colClasses[curColClassIndex];
                    var curColSizeIndex = colSizes.indexOf(getColSize(col, curColClass));
                    var newColSizeIndex = clamp(curColSizeIndex + 1, 0, colSizes.length - 1);
                    var newSize = colSizes[newColSizeIndex];
                    if (e.shiftKey) {
                        newSize = colSizes[colSizes.length - 1];
                    }
                    setColSize(col, curColClass, Math.min(newSize, MAX_COL_SIZE));
                });

                createTool(drawer, 'Settings', '', 'glyphicon-cog', function() {
                    details.toggle();
                });

                settings.col_tools.forEach(function(t) {
                    createTool(drawer, t.title || '', t.className || '', t.iconClass || 'glyphicon-wrench', t.on);
                });

                createTool(drawer, 'Remove col', '', 'glyphicon-trash', function() {
                    col.animate({
                        opacity: 'hide',
                        width: 'hide',
                        height: 'hide'
                    }, 400, function() {
                      
                        col.parent('[data-selector]').click();
                        col.remove()
                        
                    });
                    $('[data-rowid="'+parent+'"]').animate({
                        opacity: 'hide',
                        width: 'hide',
                        height: 'hide'
                    }, 400, function() {
                         $('[data-rowid="'+parent+'"]').remove();
                    });
                });
                
                 createTool(drawer, 'Add row', 'ge-add-row', 'glyphicon-plus-sign', function() {
                    var row = createRow();
                    col.find('.ge-content').first().find('.component-area.removecomponent').remove();
                    col.append(row);
                    
                    var rowid = row.data('selector')
                    $('[data-ctarget="'+parent+'"][data-type="Add Item"]').hide()
                    if(!$('[data-rowid="'+parent+'"] > ol').is('ol')){
                       $('[data-rowid="'+parent+'"]').append('<ol data-accept="row">') 
                    }
                    $('[data-rowid="'+parent+'"]').find('ol').first().append(createRowli(rowid))
                    
                    var cclumns = createColumn(12);
                    row.append(cclumns);
                    
                    $('[data-rowid="'+rowid+'"] > ol').append(createColumnli(cclumns.data('selector')))
                    $('[data-selector="'+cclumns.data('selector')+'"]').click()
                    init();
                });
                
                 createTool(drawer, 'Add Item', '', 'glyphicon-th-list', function() {
                    var items = createItem();
                    col.find('.ge-content').first().find('.component-area.removecomponent').remove()
                    col.find('.ge-content').first().append(items)
                     
                     $('[data-ctarget="'+parent+'"][data-type="Add row"]').hide();
                     $('[data-ctarget="'+parent+'"][data-type="Add Item"]').hide(); 
                     if(!$('[data-rowid="'+parent+'"] > ol').is('ol')){
                       $('[data-rowid="'+parent+'"]').append('<ol data-accept="item">');
                    }
                     
                     $('[data-rowid="'+parent+'"] > ol').append(createItemli(items.data('selector')))
                     $('[data-selector="'+items.data('selector')+'"]').click()
                   
                 });
                 
                 createTool(drawer, 'Duplicate', '', 'glyphicon-duplicate', function() {
                     cloneData(parent)
                });
                
                var procent = ($(col).parent().innerWidth()) / 12;  
                var currentLeft = 0;
                col.resizable({
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
                       
                       setColSize(col, curColClass, Math.min(newSizes, MAX_COL_SIZE));
                  },
                  stop:function (event, ui) {
                       var thisCol = $(this);
                       var container = thisCol.parent();
                     
                       
                      // $('.infom').html(ui.size.width+' BNo '+ui.originalSize.width)
                       
                       
                         
                         
                      
                      $(this).removeAttr('style');
                  }
                    
              })
              

                var details = createDetails(col, settings.col_classes).appendTo(drawer);
            });
        }

        function createTool(drawer, title, className, iconClass, eventHandlers) {
            var tool = $('<a title="' + title + '" class="' + className + '"><span class="glyphicon ' + iconClass + '"></span></a>')
                .appendTo(drawer)
            ;
            if (typeof eventHandlers == 'function') {
                tool.on('click', eventHandlers);
            }
            if (typeof eventHandlers == 'object') {
                $.each(eventHandlers, function(name, func) {
                    tool.on(name, func);
                });
            }
        }

        function createDetails(container, cssClasses) {
            var detailsDiv = $('<div class="ge-details" />');

            $('<input class="ge-id" />')
                .attr('placeholder', 'id')
                .val(container.attr('id'))
                .attr('title', 'Set a unique identifier')
                .appendTo(detailsDiv)
            ;

            var classGroup = $('<div class="btn-group" />').appendTo(detailsDiv);
            cssClasses.forEach(function(rowClass) {
                var btn = $('<a class="btn btn-xs btn-default" />')
                    .html(rowClass.label)
                    .attr('title', rowClass.title ? rowClass.title : 'Toggle "' + rowClass.label + '" styling')
                    .toggleClass('active btn-primary', container.hasClass(rowClass.cssClass))
                    .on('click', function() {
                        btn.toggleClass('active btn-primary');
                        container.toggleClass(rowClass.cssClass, btn.hasClass('active'));
                    })
                    .appendTo(classGroup)
                ;
            });

            return detailsDiv;
        }

        function addAllColClasses() {
            canvas.find('.column, div[class*="col-"]').each(function() {
                var col = $(this);

                var size = 2;
                var sizes = getColSizes(col);
                if (sizes.length) {
                    size = sizes[0].size;
                }

                var elemClass = col.attr('class');
                colClasses.forEach(function(colClass) {
                    if (elemClass.indexOf(colClass) == -1) {
                        col.addClass(colClass + size);
                    }
                });

                col.addClass('column');
            });
        }

        /**
         * Return the column size for colClass, or a size from a different
         * class if it was not found.
         * Returns null if no size whatsoever was found.
         */
        function getColSize(col, colClass) {
            var sizes = getColSizes(col);
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].colClass == colClass) {
                    return sizes[i].size;
                }
            }
            if (sizes.length) {
                return sizes[0].size;
            }
            return null;
        }

        function getColSizes(col) {
            var result = [];
            colClasses.forEach(function(colClass) {
                var re = new RegExp(colClass + '(\\d+)', 'i');
                if (re.test(col.attr('class'))) {
                    result.push({
                        colClass: colClass,
                        size: parseInt(re.exec(col.attr('class'))[1])
                    });
                }
            });
            return result;
        }

        function setColSize(col, colClass, size) {
            var re = new RegExp('(' + colClass + '(\\d+))', 'i');
            var reResult = re.exec(col.attr('class'));
            if (reResult && parseInt(reResult[2]) !== size) {
                col.switchClass(reResult[1], colClass + size, 50);
            } else {
                col.addClass(colClass + size);
            }
        }
        
        function setOffset(col, colClass, size) {
            var re = new RegExp('(' + colClass + '(\\d+))', 'i');
            var reResult = re.exec(col.attr('class'));
            if (reResult && parseInt(reResult[2]) !== size) {
                col.switchClass(reResult[1], colClass + size, 0);
            } else {
                col.addClass(colClass + size);
            }
        }

        function makeSortable() {
            canvas.find('.row').sortable({
                items: '> .column',
                connectWith: '.ge-canvas .row',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
                update: function( event, ui ) {
                    updateSortable(event, ui.item)
                },
                receive: function(event, ui){
                    receiveSortable(event, ui.item)
                }
            }).disableSelection();
            canvas.add(canvas.find('.column')).sortable({
                items: '> .row, > .ge-content',
                connectsWith: '.ge-canvas, .ge-canvas .column',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
                update: function( event, ui ) {
                    updateSortable(event, ui.item);
                },
                receive: function(event, ui){
                    receiveSortable(event, ui.item)
                }

            }).disableSelection();
           
            $('[data-role="builderrow"]').nestedSortable({
                  forcePlaceholderSize: true,
                  handle: 'div',
                  helper:	'clone',
                  items: 'li',
                  opacity: .6,
                  placeholder: 'placeholder',
                  revert: 250,
                  tabSize: 25,
                  tolerance: 'pointer',
                  toleranceElement: '> div',
                  maxLevels: 100,
                  expandOnHover: 700,
                  startCollapsed: false,
                  cancel: ".removecomponent, [data-role='item']",
                  create: function( event, ui ) {
                      var resivenew;
                  },
                  change:function(event, ui){
                      
                       resivenew = ui.item.parent().parent('[data-rowid]').data('rowid')  
                  },
                  update: function(event, ui){
                      
                      updateRowlist(event, ui.item, ui, resivenew)
                  },
                  stop:function(event, ui){
                     
                  }
              })
            
            
            
           /*$('[data-role="builderrow"]').find('[data-type="row"] > ol').sortable({
                items: '> [data-type="col"]',
                connectWith: '[data-role="builderrow"] [data-type="row"] > ol',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
                update: function( event, ui ) {
                    updateSortabldive(event, ui.item);
                },
                receive: function(event, ui){
                    receiveSortableDiv(event, ui.item)
                }
            }).disableSelection();

            
            $('[data-role="builderrow"] [data-type="col"] > ol, [data-role="builderrow"]').sortable({
                items: '> [data-type="row"], > [data-type="item"]',
                connectsWith: '[data-role="builderrow"], [data-role="builderrow"] [data-type="col"] > ol',
               // handle: '> .ge-tools-drawer .ge-move',
                start: sortStart,
                helper: 'clone',
                cancel: ".removecomponent",
                update: function( event, ui ) {
                    updateSortabldive(event, ui.item);
                },
                receive: function(event, ui){
                    receiveSortableDiv(event, ui.item)
                }
            }).disableSelection();*/
            
         

            function sortStart(e, ui) {
                ui.placeholder.css({ height: ui.item.outerHeight()});
            }
        }
        
        function updateSortable(event, targets){
              var targetId = targets.data('selector');  
              var parentId = targets.parent('[data-selector]').data('selector'); 
              if(!parentId){
                    parentId = targets.parent().parent('[data-selector]').data('selector'); 
              }
              
              var target = $('[data-rowid="'+parentId+'"] > ol');
              targetHTml = target.clone().appendTo('<div />');
              target.empty()
              
              $('[data-selector="'+parentId+'"]').children('[data-selector]').each(function(index, element) {
                    var thistarget= $(this).data('selector');
								    targetHTml.find('[data-rowid="'+thistarget+'"]').clone().appendTo(target)
							});              
           }
        
         function updateSortabldive(event, targets){
              var targetId = targets.data('rowid');  
              var parentId = targets.parent('[data-rowid]').data('rowid'); 
              if(!parentId){
                    parentId = targets.parent().parent('[data-rowid]').data('rowid'); 
              }
              
              var target = $('[data-selector="'+parentId+'"] ');
              targetHTml = target.clone().appendTo('<div />');
              target.empty()
              
              $('[data-rowid="'+parentId+'"] > ol').children('[data-rowid]').each(function(index, element) {
                    var thistarget= $(this).data('rowid');
								    targetHTml.find('[data-selector="'+thistarget+'"]').clone().appendTo(target)
							});              
              init();
        }
        function updateRowlist(event, targets, ui, resived){
              var thistype = targets.data('type');
              var thisrowid = targets.data('rowid');
              var parentType = targets.parent().closest('[data-type]').data('type');
              var parentId = targets.parent('[data-rowid]').data('rowid'); 
              if(!parentId){
                    parentId = targets.parent().parent('[data-rowid]').data('rowid'); 
              }
              
              var target = $('[data-selector="'+parentId+'"] ');
             
             
              
              var sametype = null 
              if(thistype==parentType){
                  sametype =  parentType  
                  var createhtml = targets.clone();
                  var selectorHtml = $('[data-selector="'+thisrowid+'"]').clone();
              }
              
              if(thistype==="col"){
                if(sametype){
                    var row = createRow();
                    var rowid = row.data('selector')
                    targets.replaceWith(createRowli(rowid))
                    $('[data-selector="'+thisrowid+'"]').replaceWith(row)
                    thisrowid = rowid
                    $('[data-selector="'+rowid+'"]').append(selectorHtml)
                    $('[data-rowid="'+rowid+'"]').find('ol').first().append(createhtml)
                }
                
              
              }
              if(thistype==="row"){
                if(sametype){
                    var cclumns = createColumn(12);
                    var cclumnsid = cclumns.data('selector')
                    targets.replaceWith(createColumnli(cclumnsid))
                    $('[data-selector="'+thisrowid+'"]').replaceWith(cclumns)
                    thisrowid = cclumnsid
                    $('[data-selector="'+cclumnsid+'"]').append(selectorHtml)
                    $('[data-rowid="'+cclumnsid+'"]').find('ol').first().append(createhtml);
                } 
              
              }
              if(thistype==="item"){
                      
              }
              
              if(resivenew != parentId){
                 $('[data-selector="'+thisrowid+'"]').appendTo(target);
              }
              
               targetHTml = target.clone().appendTo('<div />');
               target.empty()
                
                $('[data-rowid="'+parentId+'"] > ol').children('[data-rowid]').each(function(index, element) {
                      var thistarget= $(this).data('rowid');
                      targetHTml.find('[data-selector="'+thistarget+'"]').clone().appendTo(target)
                }); 
              
              $('.infom').html('dragInfo: Type:'+thistype+', targetType:'+sametype+', CurrentParent:'+resived+', Newparent:'+parentId+', SelecteItem Or New r&c:'+thisrowid)
              init();
        }
        
       function receiveSortable(event, targets){
              var targetId = targets.data('selector');  
              var parentId = targets.parent('[data-selector]').data('selector'); 
              if(!parentId){
                    parentId = targets.parent().parent('[data-selector]').data('selector'); 
              }
              var target = $('[data-rowid="'+parentId+'"] > ol');
              $('[data-rowid="'+targetId+'"]').appendTo(target);
              $('[data-rowid="'+parentId+'"] > ol').find('[data-rowid="'+targetId+'"]').not($('[data-rowid="'+targetId+'"]').first()).remove();
       }
       function receiveSortableDiv(event, targets){
              var targetId = targets.data('rowid');  
              var parentId = targets.parent('ol').parent('[data-rowid]').data('rowid'); 
              if(!parentId){
                    parentId = targets.parent().parent('[data-rowid]').data('rowid'); 
              }
              var target = $('[data-selector="'+parentId+'"] ');
              $('[data-selector="'+targetId+'"]').appendTo(target);
              $('[data-selector="'+parentId+'"]').find('[data-selector="'+targetId+'"]').not($('[data-selector="'+targetId+'"]').first()).remove();
              init();
       }

        function removeSortable() {
            canvas.add(canvas.find('.column')).add(canvas.find('.row')).sortable('destroy');
        }

        function createRow() {
            var rowID = _.uniqueId('row_');
            return $('<div class="row" data-selector="'+rowID+'" /> ');
        }

        function createColumn(size) {
           var colID = _.uniqueId('col_');
            return $('<div data-selector="'+colID+'" />')
                .addClass(colClasses.map(function(c) { return c + size; }).join(' '))
                .append(createDefaultContentWrapper().html(
                    getRTE(settings.content_types[0]).initialContent)
                )
            ;
        }
        
        function createItem() {
            var itemID = _.uniqueId('item_');
            return $('<div class="component-area" data-selector="'+itemID+'" />').append('<span>Select Item</span>');
        }
        
        function createColumnli(colid){
            var htmls = $('[data-template="cols"]').html();
            htmls =  htmls.replace(/{id}/g, colid);
            return htmls;
        }
        
        function createRowli(rowID){
            var htmls = $('[data-template="row"]').html();
            htmls = htmls.replace(/{id}/g, rowID);
            return htmls;
        }
         function createItemli(rowID){
            var htmls = $('[data-template="item"]').html();
            htmls = htmls.replace(/{id}/g, rowID);
            return htmls;
        }
        function cloneData(tcolne){
             var newhtml = $('<div class="newhtmls" />')
             var newrowid = $('<div class="newrows" />')
             var clonehtml =  $('[data-selector="'+tcolne+'"]').clone().appendTo(newhtml);
             var cloneUi =  $('[data-rowid="'+tcolne+'"]').clone().appendTo(newrowid);
              newrowid.find('[data-rowid]').each(function(index, element) {
								       var thisunicId =  $(this).data('rowid');
                       var thistype =  $(this).data('type') +'_';
                       var itemID = _.uniqueId(thistype);
                       
                       newrowid.find('[data-rowid="'+thisunicId+'"]').attr('data-rowid', itemID)
                       newrowid.find('[data-ctarget="'+thisunicId+'"]').attr('data-ctarget', itemID)
                       
                       newhtml.find('[data-selector="'+thisunicId+'"]').attr('data-selector', itemID)
                       //alert(thisunicId)
                       
							});
              $('[data-rowid="'+tcolne+'"]').after(newrowid.html());
              $('[data-selector="'+tcolne+'"]').after(newhtml.html());
              init();
        }
        
        
        /**
         * Run custom content filter on init and deinit
         */
        function runFilter(isInit) {
            if (settings.custom_filter.length) {
                $.each(settings.custom_filter, function(key, func) {
                    if (typeof func == 'string') {
                        func = window[func];
                    }

                    func(canvas, isInit);
                });
            }
        }

        /**
         * Wrap column content in <div class="ge-content"> where neccesary
         */
        function wrapContent() {
            canvas.find('.column').each(function() {
                var col = $(this);
                var contents = $();
                col.children().each(function() {
                    var child = $(this);
                    if (child.is('.row, .ge-tools-drawer, .ge-content')) {
                        doWrap(contents);
                    } else {
                        contents = contents.add(child);
                    }
                });
                doWrap(contents);
            });
        }
        function doWrap(contents) {
            if (contents.length) {
                var container = createDefaultContentWrapper().insertAfter(contents.last());
                contents.appendTo(container);
                contents = $();
            }
        }

        function createDefaultContentWrapper() {
            return $('<div/>')
                .addClass('ge-content ge-content-type-' + settings.content_types[0])
                .attr('data-ge-content-type', settings.content_types[0])
            ;
        }

        function switchLayout(colClassIndex) {
            curColClassIndex = colClassIndex;

            var layoutClasses = ['ge-layout-desktop', 'ge-layout-tablet', 'ge-layout-phone'];
            layoutClasses.forEach(function(cssClass, i) {
                canvas.toggleClass(cssClass, i == colClassIndex);
            });
        }
        
        function getRTE(type) {
            return $.fn.gridEditor.RTEs[type];
        }
        
        function clamp(input, min, max) {
            return Math.min(max, Math.max(min, input));
        }

        baseElem.data('grideditor', {
            init: init,
            deinit: deinit,
        });
        
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
        $('[data-toolbar]').not('[data-toolbar="all"]').hide();
       
        $('body').on('click','[data-selector]', function(e){
                var etarget = $(e.target);
                var getid = etarget.data('selector');
                var gridclass = 'selecte';
                var removeclass = ['selecterow-r0', 'selecterow-r1', 'selecterow-r2', 'selecterow-r3', 'selectecol-c0', 'selectecol-c1', 'selectecol-c2', 'selectecol-c3', 'selecteitem-it1', 'selecteitem-it1'];
                var getlaveltarget = etarget;
                var type = 'Item'
                $('[data-selector]').removeClass('active');
                $('[data-role="selectGid"]').addClass('hide');
                $('[data-role="toolbarclass"]').removeClass('hide');
                
                if(!getid){
                     getid =  etarget.closest('[data-selector]').data('selector');
                     getlaveltarget = etarget.closest('[data-selector]');
                     getclassrow =  etarget.closest('[data-selector]').hasClass('row');
                     getclasscol =  etarget.closest('[data-selector]').hasClass('column');
                }else{
                  getclassrow =  etarget.hasClass('row');
                  getclasscol =  etarget.hasClass('column');
                }
                
                $('[data-toolbar]').hide();
                $('[data-toolbar="all"]').show();
                $('[data-toolbar]').data('ctarget', getid);
                
                if(getclassrow){
                    $('[data-toolbar="row"]').show()
                    type = "Row";
                    getlavel = getlaveltarget.parents('[data-selector].row').length;
                    if(getlavel>3){
                        getlavel = 3;  
                    }
                    if(getlavel==0){
                      $('[data-toolbar="all"][data-type="Duplicate"]').hide();
                      $('[data-toolbar="row"][data-type="Remove row"]').hide();
                    }
                    gridclass = gridclass+'row-r'+getlavel;
                }else if(getclasscol){
                     type = "Col";
                    $('[data-toolbar="col"]').show()
                    getlavel = getlaveltarget.parents('[data-selector].column').length;
                    if(getlavel>2){
                        getlavel = 2;  
                    }
                    gridclass = gridclass+'col-c'+getlavel;
                }else{
                    $('[data-toolbar="item"]').show();
                    $('[data-toolbar="all"][data-type="Duplicate"]').hide();
                    gridclass = gridclass+'item-it1'
                    
                }
                $('[data-role="toolbarid"]').html(type+'#'+getid)
                $.each(removeclass, function(key, val){
                      $('[data-role="toolbarclass"]').removeClass(val)
                })
                getlaveltarget.addClass('active')
                $('[data-role="toolbarclass"]').addClass(gridclass)
         });
         
          $('[data-role="switchmode"]').click( function(){
              var layoutv = $(this).data('viewids');
              switchLayout(layoutv)
         })
        
         
         
         

    });
    return self;

};

$.fn.gridEditor.RTEs = {};

})( jQuery );
(function() {
    $.fn.gridEditor.RTEs.ckeditor = {

        init: function(settings, contentAreas) {

            if (!window.CKEDITOR) {
                console.error(
                    'CKEditor not available! Make sure you loaded the ckeditor and jquery adapter js files.'
                );
            }

            var self = this;
            contentAreas.each(function() {
                var contentArea = $(this);
                if (!contentArea.hasClass('active')) {
                    if (contentArea.html() == self.initialContent) {
                        // CKEditor kills this '&nbsp' creating a non usable box :/ 
                        contentArea.html('&nbsp;'); 
                    }
                    
                    // Add the .attr('contenteditable',''true') or CKEditor loads readonly
                    contentArea.addClass('active').attr('contenteditable', 'true');
                    
                    var configuration = $.extend(
                        (settings.ckeditor && settings.ckeditor.config ? settings.ckeditor.config : {}), 
                        {
                            // Focus editor on creation
                            on: {
                                instanceReady: function( evt ) {
                                    instance.focus();
                                }
                            }
                        }
                    );
                    var instance = CKEDITOR.inline(contentArea.get(0), configuration);
                }
            });
        },

        deinit: function(settings, contentAreas) {
            contentAreas.filter('.active').each(function() {
                var contentArea = $(this);
                
                // Destroy all CKEditor instances
                $.each(CKEDITOR.instances, function(_, instance) {
                    instance.destroy();
                });

                // Cleanup
                contentArea
                    .removeClass('active cke_focus')
                    .removeAttr('id')
                    .removeAttr('style')
                    .removeAttr('spellcheck')
                    .removeAttr('contenteditable')
                ;
            });
        },

        initialContent: '<p>Lorem initius... </p>',
    }
})();
(function() {

    $.fn.gridEditor.RTEs.summernote = {

        init: function(settings, contentAreas) {
            
            if (!jQuery().summernote) {
                console.error('Summernote not available! Make sure you loaded the Summernote js file.');
            }

            var self = this;
            contentAreas.each(function() {
                var contentArea = $(this);
                if (!contentArea.hasClass('active')) {
                    if (contentArea.html() == self.initialContent) {
                        contentArea.html('');
                    }
                    contentArea.addClass('active');

                    var configuration = $.extend(
                        (settings.summernote && settings.summernote.config ? settings.summernote.config : {}),
                        {
                            tabsize: 2,
                            airMode: true,
                            // Focus editor on creation
                            callbacks: {
                                onInit: function() {
                                    try {
                                        settings.summernote.config.callbacks.onInit.call(this);
                                    } catch(e) {}
                                    
                                    contentArea.summernote('focus');
                                }
                            }
                        }
                    );
                    contentArea.summernote(configuration);
                }
            });
        },

        deinit: function(settings, contentAreas) {
            contentAreas.filter('.active').each(function() {
                var contentArea = $(this);
                contentArea.summernote('destroy');
                contentArea
                    .removeClass('active')
                    .removeAttr('id')
                    .removeAttr('style')
                    .removeAttr('spellcheck')
                ;
            });
        },

        initialContent: '<div class="component-area removecomponent"></div>',
    };
})();

(function() {
    $.fn.gridEditor.RTEs.tinymce = {
        init: function(settings, contentAreas) {
            if (!window.tinymce) {
                console.error('tinyMCE not available! Make sure you loaded the tinyMCE js file.');
            }
            if (!contentAreas.tinymce) {
                console.error('tinyMCE jquery integration not available! Make sure you loaded the jquery integration plugin.');
            }
            var self = this;
            contentAreas.each(function() {
                var contentArea = $(this);
                if (!contentArea.hasClass('active')) {
                    if (contentArea.html() == self.initialContent) {
                        contentArea.html('');
                    }
                    contentArea.addClass('active');
                    var configuration = $.extend(
                        {},
                        (settings.tinymce && settings.tinymce.config ? settings.tinymce.config : {}),
                        {
                            inline: true,
                            oninit: function(editor) {
                                // Bring focus to text field
                                $('#' + editor.settings.id).focus();
                                
                                // Call original oninit function, if one was passed in the config
                                if (settings.tinymce.config.oninit && typeof settings.tinymce.config.oninit == 'function') {
                                    settings.tinymce.config.oninit(editor);
                                }
                            }
                        }
                    );
                    var tiny = contentArea.tinymce(configuration);
                }
            });
        },

        deinit: function(settings, contentAreas) {
            contentAreas.filter('.active').each(function() {
                var contentArea = $(this);
                var tiny = contentArea.tinymce();
                if (tiny) {
                    tiny.remove();
                }
                contentArea
                    .removeClass('active')
                    .removeAttr('id')
                    .removeAttr('style')
                    .removeAttr('spellcheck')
                ;
            });
        },

        initialContent: '<div class="component-area removecomponent"></div>',
    };
})();
