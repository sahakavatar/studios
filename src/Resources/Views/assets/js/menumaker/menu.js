$(function() {

  /* Nested Sortable Configuration */
  $('.sortable').nestedSortable({
    handle: 'div.drag-handle',
    items: 'li',
    toleranceElement: '> div',
    update: function(event, ui) {
      var item = $(ui.item[0]);
      itemData = item.data('details');
      currentItemId = itemData.id;
      currentItemParentId = 0;

      if (item.parent('ol').parent('li').length > 0) {
        currentItemParentId = item.parent('ol').parent('li').data('details').id;
      }
       exportjson()
    }
  });

  // Add new menu item
  $('[data-action=newItem]').click(function() {
    // Show panel
    $('#new-menu-item').removeClass('hide');
    // Reset form
    $('#new-item-form')[0].reset();
    $('.form-title').text('New Menu Item');

    // Mark state as add
    $('[name=save_state]').val('add');

    // Set parent id
    $('[name=parent_id]').val(0);
    // Clear selected item
    $('#menus-list li .drag-handle').addClass('not-selected');
    $('#menus-list li .drag-handle').removeClass('selected');
  });

  // Cancel Form
  $('[data-action=cancel]').click(function() {
    // Hide panel
    $('#new-menu-item').addClass('hide');
    // Reset form
    $('#new-item-form')[0].reset();
    // Clear selected item
    $('#menus-list li .drag-handle').addClass('not-selected');
    $('#menus-list li .drag-handle').removeClass('selected');
    // Mark state as add
    $('[name=save_state]').val('add');
  });

  // Change link type event
  var selectlinkChangeFn = function() {
    $('.selectpage').addClass('hide');
    var selectpage = $('#selectlink').val();
    if (selectpage) {
      $('[data-selectpage=' + selectpage + ']').removeClass('hide');
    }
  }
  $('#selectlink').change(selectlinkChangeFn);

  // Change user status
  var userstatusChangeFn = function() {
    $('.userrole').addClass('hide');
    if ($('[name=user_status]').val() == 'after-login') {
      $('.userrole').removeClass('hide');
    }
  }
  $('[name=user_status]').change(userstatusChangeFn);

  // Mark the selected item as active and show in quick view
  function itemSelectionHandle() {
    // Show action links on hover
    $('#menus-list li .drag-handle.not-selected').hover(function() {
      $(this).find('.item-actions').show();
    }, function() {
      $(this).find('.item-actions').hide();
    });

    // Highlight selected item
    $('#menus-list li .drag-handle').on('mousedown', function() {
      // Mark selected item
      $('#menus-list li .drag-handle').addClass('not-selected');
      $('#menus-list li .drag-handle').removeClass('selected');

      $(this).addClass('selected');
      $(this).removeClass('not-selected');

      // Mark state as edit
      $('[name=save_state]').val('edit');

      var itemDetails = JSON.parse($(this).parent('li').attr('data-details'));
      $('#new-item-form *').filter(':input').each(function(i, element) {
        var el = $(element);
        var name = el.attr('name');
        // Skip hidden fields
        if (el.attr('type') == 'hidden') return;
        // Check name
        if (typeof itemDetails[name] !== 'undefined') {
          //console.log(name, itemDetails[name]);
          $('[name=' + name + ']').val(itemDetails[name]);
        }
      });

      // Update Icon View
      if(itemDetails.icon !== ''){
        var iconData = itemDetails.icon.split(',');
        var iconClass = iconData[0].split(':');
        var iconSize = iconData[1].split(':');

        $('.iconView').html('<i class="fa '+iconClass[1]+' '+iconSize[1]+'"></i>');
      }

      userstatusChangeFn();
      selectlinkChangeFn();

      // Change panel title
      $('.form-title').text('Edit Menu Item: ' + itemDetails.title);

      $('#new-menu-item').removeClass('hide');

      $('[name=item_id]').val(itemDetails['id']);
      $('[name=parent_id]').val(itemDetails['parent_id']);
    });

    // Show add child form
    $('a[data-action=addChild]').click(function() {
      var itemDetails = $('.drag-handle.selected').parent('li').data('details');
      $('#new-menu-item').removeClass('hide');
      // Set parent id
      $('[name=parent_id]').val(itemDetails.id);
      $('[name=item_id]').val(0);

      // Mark state as add
      $('[name=save_state]').val('add');

      // Reset form
      $('#new-item-form')[0].reset();
      $('.form-title').text('New Child Menu Item');
    });

    // Delete item
    $('a[data-action=delete]').click(function() {
      // Reset form
      $('#new-item-form')[0].reset();
      $('#new-menu-item').addClass('hide');

      var itemContainer = $(this).closest('li');
      itemContainer.find('.drag-handle').addClass('deleting-item');
      itemContainer.fadeOut();
      itemContainer.remove();
    });
  }
  itemSelectionHandle();

  // Save taxonomy
  $('.save-item').click(function() {
    var newItem;
    var parentItem = $('.drag-handle.selected').parent('li');
    var toMainList = false;
    // If no parent inject to the main list
    if (!parentItem.length) {
      parentItem = $('#menus-list');
      toMainList = true;
    }

    // Hide messages
    $('.message').addClass('hide');

    // Get paretn item details
    var parentDetails = parentItem.data('details');
        
    var formdata = $('#new-item-form').serializeArray();
    var dataobj = {}
   
     $.each(formdata, function(name, value){
         var name = value.name
         var value = value.value
          if(name=="parent_id" || name=="item_id" || name=="menus_id" ){
          
          }else if(name=="corepage" || name=="custompage" || name=="custom-link"){
             dataobj[name]  = value
            if(dataobj['link_type'] == name ){
               dataobj['url']  = value
            }
            
            
          }else{
            dataobj[name] = value;
          }
      })
    
    var data = {"code":"200","menuitem":[dataobj]};
/* var data = {"code":"200","menuitem":[{"title":'',"id":3,"user_role":"all","link_type":"corepage"
,"new_link":"off","user_status":"both","icon":{"icon":"fa-bluetooth", "iconsize":"fa-fw", "iconRotate":"", "iconplas"
:"before"},"url":"http:\/\/edoavatarbugs.com\/login","class":"sd","children":[]}]};*/
    
    // Save form via ajax
     // On success
      if (data.code == 200) {
        var itemData = data.menuitem[0];

        // Get item template
        newItemTemplate = $('#item-template').html();
        newItemTemplate = newItemTemplate.replace('[serialized_data]', JSON.stringify(itemData));
        newItemTemplate = newItemTemplate.replace('[title]', itemData['title']);

        newItem = $(newItemTemplate);
        newItemWithContainer = $('<ol>' + newItemTemplate + '</ol>');

        // Check if add or update
        if ($('[name=save_state]').val() == 'add') {
          // Append new item to its parent
          if (toMainList) {
            parentItem.append(newItem);
          } else {
            if (parentItem.find('ol').length > 0) {
              parentItem.find('ol').first().append(newItem);
            } else {
              parentItem.append(newItemWithContainer);
            }
          }
        } else {
          parentItem.data('details', itemData);
          parentItem.html(newItem.find('.drag-handle'));
        }

        // Reset form
        $('#new-item-form')[0].reset();
        $('#new-menu-item').addClass('hide');
        // Recall methods to be enable for he newly created child item
        itemSelectionHandle();
      } else {
        // Handle error
        $('.message').html('<p>' + data.errors[0] + '</p>').removeClass('hide');
      }
      exportjson()
  });
  
  
  $('#uploadjson').on('change', function(event) {
    onChange(event)
  });
  
  function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }
    function onReaderLoad(event){
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        addjson = addnewdata(obj);
         $('.sortable').append(addjson)
        itemSelectionHandle();
        exportjson()
    }
    function addnewdata(obj, child){
      var addnewitem = ''
      $.each(obj, function(op, ov){
           var itemData = ov;
             newItemTemplate = $('#item-template').html();
            newItemTemplate = newItemTemplate.replace('[serialized_data]', JSON.stringify(itemData));
            newItemTemplate = newItemTemplate.replace('[title]', itemData['title']);
            
            newItem = $(newItemTemplate);
            newItemWithContainer = $('<ol>' + newItemTemplate + '</ol>');
            
            var newcontent = $('<div>')
            newcontent.append(newItemTemplate)
            
            if(itemData['children']){
              add =  addnewdata(itemData['children'], 'child')
              newcontent.find('ol').first().append(add)
              
            }
            addnewitem += newcontent.html();
        })
        return addnewitem;
    }
   
   function exportjson(){
     var getdata = retunjson ($("#menus-list > li"));
     
     var datas = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getdata));
      $('[data-download="json"]').attr('href', 'data:' + datas)
   }
   
   function retunjson (seleter){
     var data = []
     seleter.each(function(index, element) {
				    var getdetail = $(this).data('details')
            if($(this).children('ol').children('li').data('details')){
              getdetail['children'] = retunjson($(this).children('ol').children('li'))
             }
            if(getdetail){
              data.push(getdetail);
            }
			});
      
      return data;
     
   }

});
