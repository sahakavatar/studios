$(function(){
    $('[data-buttontype="type"]').change(function(){
         var gettype = $(this).val()
         var button = ''
         if(gettype == 'a'){
           button = '<a href="#" class=""> A tag</a>'
         }else if(gettype == 'input'){ 
           
           button = '<input type="button" value="Input Button" />'
            
         }else if(gettype == 'button'){ 
           
           button = '<button type="button">Button</button>'
            
         } 
         
        
        
        $('[data-preview="container"]').html(button)
    })
})
