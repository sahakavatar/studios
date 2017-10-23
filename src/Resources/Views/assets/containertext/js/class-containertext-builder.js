$(function(){
  var getstyletype = $('[data-pagetype]').val();
  var basicfilter = ''
  var modestduio = false;
  var activeclass = ''
  var filterclass = ''
  var basissubFilter = []
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
  
   var editorexport = ace.edit("editorexportcss");
  editorexport.setTheme("ace/theme/monokai");
  editorexport.getSession().setMode("ace/mode/css");
  
  var editorContainer = ace.edit("editorcsscontianer");
  editorContainer.setTheme("ace/theme/monokai");
  editorContainer.getSession().setMode("ace/mode/css");
  
   var editorTextContianer = ace.edit("editortextcontianer");
  editorTextContianer.setTheme("ace/theme/monokai");
  editorTextContianer.getSession().setMode("ace/mode/css");
  
  
	var classb = {
			sl:{
				cssview : $('[data-role="classview"]'),
				cssstyle : $('[data-role="savedcss"]'),
				exportjson : $('[data-export="json"]'),
				exportcss : $('[data-export="css"]'),
				save : $('[data-save="class"]')
			},
      selectorsss:{
            'css': 'Defult',
            "hover": 'Hover',
            "first-child": 'first-child',
            
      },
      setupstduio:{
              "all": {
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                filter:[],
                "core":["classes"]
              },
              text:{
                  "text":["textstyling", "textshadow"],
                  "core":["classes"],
                  "cssselector":['css:element'] 
              },
              container:{
                  "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                  "core":["classes"],
                  "cssselector":['css:element'] 
              },
              image:{
                   filter:[],
				  "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                  "core":["classes"],
                  "cssselector":['css:element'] 
              },
              lists:{
                   "liststyle":[],
                   "core":["classes"],
                  "cssselector":['css:element'] 
              },
              full_studio:{
                  "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                  "text":["textstyling", "textshadow"],
                  "liststyle":[],
                  filter:[],
                  "core":["classes"],
                  "cssselector":['css:element'] 
              },
              "p":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element'] 
              },
              text_styles:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              text_style_span:{
                 "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              plain_text:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              h1:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              button_style:{
                "button":["basic","element"],
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:form']
              },
              box_styles:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              link_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              image_style:{
                 "button":["basic","element"],
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              hr_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"]
              },
              icon_styles:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              table_styles:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              thead_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              tbody_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              th_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              tr_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              td_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              form_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']
              },
              label_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "elcollection":["elementcollection"],
                "cssselector":['css:element']     
              },
              text_input_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              radio_input_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              checkbox_input_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              select_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              textarea_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              ul_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              ol_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              li_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              navbar_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              menu_style:{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "h1":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']     
              },
              "h2":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "h3":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "h4":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "h5":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "h6":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "span":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "div":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "a":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']
              },
              "button":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element', 'css:form']      
              },
              "img":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "i":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "ul":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "ol":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "li":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "form":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "label":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "input":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              "textarea":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              "select":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:form']      
              },
              "table":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "thead":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "tbody":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "tr":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "th":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "td":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "hr":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "nav":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "html":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"]      
              },
              "body":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"]      
              },
              "header": {
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "footer":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "article":{
                "text":["textstyling", "textshadow", "animation"],
                "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                "core":["classes"],
                "cssselector":['css:element']      
              },
              "aside":{
                  "text":["textstyling", "textshadow", "animation"],
                  "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                  "core":["classes"],
                  "cssselector":['css:element']      
              },
              "section": {
                  "text":["textstyling", "textshadow", "animation"],
                  "container":["contianers","background",  "background", "borderradius", "boxsahadow", "marginpadding"],
                  "core":["classes"],
                  "cssselector":['css:element']     
              }
            },
      preview:{
          p:'<p data-preview="studio" data-role="classview"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
          text:'<p data-preview="studio" data-role="classview"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
          h1:'<h1 data-preview="studio" data-role="classview">Preview</h1>',
          h2:'<h2 data-preview="studio" data-role="classview">Preview</h2>',
          h3:'<h3 data-preview="studio" data-role="classview">Preview</h3>',
          h4:'<h4 data-preview="studio" data-role="classview">Preview</h4>',
          h5:'<h5 data-preview="studio" data-role="classview">Preview</h5>',
          h6:'<h6 data-preview="studio" data-role="classview">Preview</h6>',
          span:'<span data-preview="studio" data-role="classview"> Text Preview Here</span>',
          image:'<img data-preview="studio" data-role="classview" src="https://www.w3schools.com/css/img_fjords.jpg">',
          img:'<img data-preview="studio" data-role="classview" src="https://www.w3schools.com/css/img_fjords.jpg">',
          div:'<div data-preview="studio" data-role="classview">Preview</div>',
          container:'<div data-preview="studio" data-role="classview">Preview</div>',
          i:'<i class="fa fa-home" data-preview="studio" data-role="classview"></i>',
          button:'<button data-preview="studio" data-role="classview">Button</button>',
          nav:'<nav data-preview="studio" data-role="classview"><ul><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul></nav>',
          form:'<form data-preview="studio" data-role="classview"><label for="name">Username:</label><input type="text" id="name" name="user_name"><br><label for="email">Email:</label><input type="email" id="mail" name="user_mail"></form>',
          li:'<ul><li data-preview="studio" data-role="classview">Link-1</li><li data-preview="studio" data-role="classview">Link-2</li><li data-preview="studio" data-role="classview">Link-3</li><li data-preview="studio" data-role="classview">Link-4</li></ul>',
          ul:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
          lists:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
          ol:'<ol data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ol>',
          hr:'<hr data-preview="studio" data-role="classview">',
          a:'<a data-preview="studio" data-role="classview">Link here</a>',
          textarea:'<textarea data-preview="studio" data-role="classview"></textarea>',
          select:'<select data-preview="studio" data-role="classview"><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select>',
          table:'<table data-preview="studio" data-role="classview"><thead><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          thead:'<table><thead data-preview="studio" data-role="classview"><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          tbody:'<table><thead><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody data-preview="studio" data-role="classview"><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          th:'<table><thead><tr><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          tr:'<table><thead><tr data-preview="studio" data-role="classview"><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          td:'<table><thead><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td></tr><tr><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td></tr><tr><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td></tr><tr><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td><td data-preview="studio" data-role="classview">Table data</td> <td data-preview="studio" data-role="classview">Table data</td></tr></tbody></table>',
          input:'<input type="text" data-preview="studio" data-role="classview" value="My Input" name="">',
          html:'<div data-preview="studio" data-role="classview">Preview</div>',
          section:'<div data-preview="studio" data-role="classview">Preview</div>',
          footer:'<div data-preview="studio" data-role="classview">Preview</div>',
          header:'<div data-preview="studio" data-role="classview">Preview</div>',
          aside:'<div data-preview="studio" data-role="classview">Preview</div>',
          article:'<div data-preview="studio" data-role="classview">Preview</div>',
          body:'<div data-preview="studio" data-role="classview">Preview</div>',
          menu_style:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
          text_input_style:'<input type="text" data-preview="studio" data-role="classview" value="My Input" name="">',
          radio_input_style:'<input type="radio" data-preview="studio" data-role="classview" value="" name="">',
          checkbox_input_style:'<input type="checkbox" data-preview="studio" data-role="classview" value="" name="">',
          image_style:'<img data-preview="studio" data-role="classview" src="https://www.w3schools.com/css/img_fjords.jpg">',
          text_styles:'<p data-preview="studio" data-role="classview"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
          text_style_span:'<p data-preview="studio" data-role="classview"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
          plain_text:'<p data-preview="studio" data-role="classview"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
          box_styles:'<div data-preview="studio" data-role="classview">Preview</div>',
          icon_styles:'<i class="fa fa-home" data-preview="studio" data-role="classview"></i>',
          button_style:'<button data-preview="studio" data-role="classview">Button</button>',
          navbar_style:'<nav data-preview="studio" data-role="classview"><ul><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul></nav>',
          label_style:'<label data-preview="studio" data-role="classview"> Preview</label>',
          form_style:'<form data-preview="studio" data-role="classview"><label for="name">Username:</label><input type="text" id="name" name="user_name"><br><label for="email">Email:</label><input type="email" id="mail" name="user_mail"></form>',
          hr_style:'<hr data-preview="studio" data-role="classview">',
          link_style:'<a data-preview="studio" data-role="classview">Link here</a>',
          li_style:'<ul><li data-preview="studio" data-role="classview">Link-1</li><li data-preview="studio" data-role="classview">Link-2</li><li data-preview="studio" data-role="classview">Link-3</li><li data-preview="studio" data-role="classview">Link-4</li></ul>',
          ul_style:'<ul data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ul>',
          ol_style:'<ol data-preview="studio" data-role="classview"><li>Link-1</li><li>Link-2</li><li>Link-3</li><li>Link-4</li></ol>',
          textarea_style:'<textarea data-preview="studio" data-role="classview"></textarea>',
          select_style:'<select data-preview="studio" data-role="classview"><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select>',
          table_style:'<table data-preview="studio" data-role="classview"><thead><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          thead_style:'<table><thead data-preview="studio" data-role="classview"><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          tbody_style:'<table><thead><tr><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody data-preview="studio" data-role="classview"><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          th_style:'<table><thead><tr><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th><th data-preview="studio" data-role="classview">Table head</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>',
          tr_style:'<table><thead><tr data-preview="studio" data-role="classview"><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th><th>Table head</th></tr></thead><tbody><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr data-preview="studio" data-role="classview"><td>Table data</td><td>Table data</td><td>Table data</td><td>Table data</td> <td>Table data</td></tr></tbody></table>'
      },
       editclasstye:{
          box_styles:['div', 'css'],
          image_style:['img'],
          icon_styles:['i'],
          link_style:['a'],
          heading:['h1','h2','h3','h4', 'h5', 'h6' ],
          text_styles:['p','span'],
          h1:['h1'],
          h2:['h2'],
          h3:['h3'],
          h4:['h4'],
          h5:['h5'],
          h6:['h6'],
          button_style:['button'],
          ul_style:['ul', 'ol'],
          li_style:['li'],
          hr_style:['hr'],
          text_input_style:['input'],
          textarea_style:['textarea'],
          select_style:['select'],
          table_style:['table'],
          th_style:['th'],
          tr_style:['tr'],
          td_style:['td']
      },
      asset:{
       assest1: {
            "width":"50%",
            "display":"block",
            "float":"left"
        },
       assest2: {
            "width":"50%",
            "display":"block",
            "float":"none",
            "margin-left":"auto",
            "margin-right":"auto"
        },
        assest3: {
            "width":"50%",
            "display":"block",
            "float":"right"
        },
        assest4: {
            "width":"100%",
            "display":"block",
            "float":"none",
            "margin-left":"auto",
            "margin-right":"auto"
        }
      },
      dataload:'',
      less:"",
			generalSetting:{
				csssetting:{
          border:{},
          tabs:{}
         }
			},
			runcss:function(){
        var data = '';
        var classater = ''
        var labelselected = '';
        var jsonpreviewclasse = {}
        var activeclass =  $('[data-tabnav="button"] .active a').data('rolecss');
        var previecss = '';
            jsonpreviewclasse['css'] = ''
             jsonpreviewclasse['hover'] = ' '
             jsonpreviewclasse['selected'] = ' '
             
        if(classb.generalSetting.csssetting['csskey']){
            var cssdats =  classb.generalSetting.csssetting['csskey'];
              var classel = classb.generalSetting.csssetting.classname
                 $.each(cssdats, function(key, val){
                   if(activeclass==key){
                     var classlist =  '.'+activeclass+'{';
                      
                      previecss += classlist
                      $.each(val, function(io, iv){
                        if(io=='acecontent'  || io == 'acetext'){
                           previecss+= iv+' ';
                        }else{
                            previecss+= io +":"+iv+'; ';
                          }
                      });
                      
                      if(key == "before" || key == "after"){
                         previecss+= "content:'.'; ";
                      }
                    
                      previecss+='}';
                   }
                  if(classb.generalSetting.csssetting.tabs[key]){
                      var classlist =  classel+'{';
                      if(key !="css"){
                        
                         var classlist =  classel+':'+key+'{';
                      }
                     
                      data += classlist
                      $.each(val, function(io, iv){
                        if(io=='acecontent'  || io == 'acetext'){
                           data+= iv+' ';
                        }else{
                            data+= io +":"+iv+'; ';
                          }
                      });
                      
                      if(key == "before" || key == "after"){
                         data+= "content:'.'; ";
                      }
                    
                      data+='}';
                  }
              });
        } 
        
				classb.generalSetting.csssetting.savedcss = data;
				classb.sl.exportcss.val(classb.generalSetting.csssetting.savedcss)
        editorexport.setValue(classb.generalSetting.csssetting.savedcss)
        
       $('[data-export="csspreve"]').val(classb.generalSetting.csssetting.savedcss)
			 classb.sl.cssstyle.html(classb.generalSetting.csssetting.savedcss + previecss)
				if(modestduio){
          classb.compile();
          classater = classater.replace(/\./g, " ")
          var geac = $('[data-tabnav="button"] .active a[data-rolecss]').data('rolecss');
         
          if(jsonpreviewclasse[geac]){
            var gess = jsonpreviewclasse[geac];
            gess = gess.replace(/\./g, "")
            if(geac== 'hover'){
              gess = gess.replace(/-hover/g, "")
            }
            if(geac== 'selected'){
              gess = gess.replace(/-focus/g, "");
            }
           // classb.sl.cssview.attr('class', gess)
          }else{
           // classb.sl.cssview.attr('class', classater)
          }
          classb.sl.cssview.attr('class', classb.generalSetting.csssetting.class)
          classb.generalSetting.csssetting['collection'] = classater;
          
          $('[data-role="previewslclasses"]').html(labelselected)
         // alert(classater)
        }
        
			},
			updatecss:function(){
        classb.runcss()
        classb.downloadcss();
				classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
        var activeclass =  $('[data-tabnav="button"] .active a').data('rolecss');
       
        if(!modestduio){
				  classb.sl.cssview.attr('class', classb.generalSetting.csssetting.class+" "+activeclass)
        }
				
			},
      compile:function(){
       
        	less.render([classb.less.replace("{{{lesscss}}}", classb.generalSetting.csssetting.savedcss)].join("\n\n")).then(
                
              function (output) {
                //alert(output.css);
                classb.sl.cssstyle.html(output.css)
               
              }, function (error) {
                //bootstrap.response("Error", error);
                  if(classb.generalSetting.csssetting.class!=''){
                    alert(error);
                  }
              });
        
          
          
      },
			editReload:function(){
				var getjsonvale = classb.sl.exportjson.val()
				if(getjsonvale){
					classb.generalSetting.csssetting = JSON.parse(getjsonvale);
          
          if(classb.generalSetting.csssetting.class){
            $('[data-role="classname"]').val(classb.generalSetting.csssetting.class)
          }
          
          $('[data-tabactive]').prop('checked', false);
          if(classb.generalSetting.csssetting['tabs']){
              $.each(classb.generalSetting.csssetting['tabs'], function(k, v){
                $('[data-tabactive="'+k+'"]').prop('checked', v);
              })
          }
          if(!classb.generalSetting.csssetting['csskey']){
                      classb.generalSetting.csssetting['csskey'] = {}
           }
          
          if(classb.generalSetting.csssetting['css']){
                var getke = classb.generalSetting.csssetting['css']
                if(typeof getke == 'object'){
                    getke = JSON.stringify(getke);
                    classb.generalSetting.csssetting['csskey']['css'] = JSON.parse(getke);
                    delete classb.generalSetting.csssetting['css'];
                }
          }
         if(classb.generalSetting.csssetting['hover']){
                var getke = classb.generalSetting.csssetting['hover']
                if(typeof getke == 'object'){
                    getke = JSON.stringify(getke);
                    classb.generalSetting.csssetting['csskey']['hover'] = JSON.parse(getke);
                    delete classb.generalSetting.csssetting['hover'];
                }
          }
          if(classb.generalSetting.csssetting['selected']){
                var getke = classb.generalSetting.csssetting['selected']
                if(typeof getke == 'object'){
                    getke = JSON.stringify(getke);
                    classb.generalSetting.csssetting['csskey']['focus'] = JSON.parse(getke);
                    delete classb.generalSetting.csssetting['selected'];
                }
          }
          
          if(classb.generalSetting.csssetting['csskey']){
                $('[data-tabnav="button"] a').not('[data-rolecss="css"]').closest('li').remove();
                $.each(classb.generalSetting.csssetting['csskey'], function(k, v){
                    if(k !='css'){
                      var keys = ':'+k;
                      classb.editmodecssselector(keys)
                    } 
                })
          }
          $('[data-role="classname"]').keyup()
          classb.chekedcssfor('css');
          classb.updatecss()
         
				}
			},
      chekedcssfor:function(ccf){
        if(classb.generalSetting.csssetting['csskey']){
          var datapreview = classb.generalSetting.csssetting['csskey'];
        }else{
          var datapreview =  classb.generalSetting.csssetting;
        }
       if(datapreview[ccf]){
        
         var margindl = [];
         var paddingl = [];
         $('[type="checkbox"][data-cssexist]').prop('checked', false);
         $('[data-insettemp="textshadow"]').empty();
         $('[data-insettemp="boxShadow"]').empty();
         $('[data-sub_type][data-name]').removeClass('active')
        	$.each(datapreview[ccf], function(io, iv){
            var nameofclass = iv.replace(/\./,'').replace(/-hover/,'').replace(/-focus/,'');
            $('[data-sub_type="'+io+'"][data-name="'+nameofclass+'"]').addClass('active');
						iv = iv.replace('px','');
              if(io.match(/margin/g)){
                iv = iv.replace('%','').replace('em','');
                  margindl.push(iv)
              }
              if(io.match(/padding/g)){
                iv = iv.replace('%','').replace('em','');
                  paddingl.push(iv)
              }
						
              $('[data-css="'+io+'"][data-selector]').val(iv);
              $('[data-css="'+io+'"][data-html]').val(iv)
              $('[data-css="'+io+'"][data-role="editcss"]').val(iv)
              
              if($('[data-css="'+io+'"]').is('.settingSlider')){
                $('[data-css="'+io+'"].settingSlider').slider('value', iv);
              }
              
             if($('[data-actioncss="'+io+'"]').is('[data-val]')){
							   $('[data-actioncss="'+io+'"][data-val]').addClass('active');
						 }
            
              if($('[data-textcolor="'+io+'"]').is('[data-textcolor]')){
                $('[data-textcolor="'+io+'"] [data-css="'+io+'"]').val(iv);
                $('[data-textcolor="'+io+'"]').colorpicker('setValue', iv)
               
              }
              
              if($('[data-cssexist="'+io+'"]').is('[data-switch]')){
                  $('[type="checkbox"][data-cssexist="'+io+'"][data-switch]').prop('checked', true);
						  }
              
              if(io=="box-shadow"){
                $('[data-insettemp="boxShadow"]').empty();
                var textdata = iv.trim().replace(/, /g, ",").split(",");
                $.each(textdata, function(key, val){
                  if(val!=''){
                  var dataval =  val.trim().replace(/px/g, "");
                  dataval = dataval.split(" ")
                  
                  var gethtml =  $('[data-template="boxShadow"]').html()
                       $('[data-insettemp="boxShadow"]').append(gethtml)
                
                  var target = $('[data-insettemp="boxShadow"] [data-role="textGroup"]:eq('+key+')')
                  
                  if(dataval.length == 6){
                    target.find('[data-subcss="type"][data-multycss="boxShadow"]').val(dataval[0])    
                    dataval.shift();
                  }
                  target.find('[data-multycss="boxShadow"][data-html="x"]').val(dataval[0])
                  target.find('[data-multycss="boxShadow"][data-html="y"]').val(dataval[1])
                  target.find('[data-multycss="boxShadow"][data-html="blur"]').val(dataval[2])
                  target.find('[data-multycss="boxShadow"][data-html="spread"]').val(dataval[3])
                  target.find('[data-multycss="boxShadow"][data-html="color"]').val(dataval[4])
                  target.find('.color-picker').colorpicker().on('changeColor', function(e){
                       classb.csspropa['boxShadow']()
                       classb.updatecss()
                     })
                  }
                })
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
             
             
              if(io=="border-radius"){
                  var textdata = iv.trim().replace(/px/g, "").split(" ");
                  
                  if(textdata.length == 1){
                      $('[data-csstype="border-radius"][name="radiustype"][value="same"]').prop('checked', true);
                      $('[data-multycss="borderRadius"][data-html="top"]').val(textdata[0]);
                      $('[data-multycss="borderRadius"][data-html="right"]').val(textdata[0]);
                      $('[data-multycss="borderRadius"][data-html="bottom"]').val(textdata[0]);
                      $('[data-multycss="borderRadius"][data-html="left"]').val(textdata[0]);
                      $('[data-csstype="border-radius"][value="same"]').prop('checked', true)
                  }else {
                      $('[data-csstype="border-radius"][name="radiustype"][value="customize"]').prop('checked', true);
                      $('[data-multycss="borderRadius"][data-html="top"]').val(textdata[0]);
                      $('[data-multycss="borderRadius"][data-html="right"]').val(textdata[1]);
                      $('[data-multycss="borderRadius"][data-html="bottom"]').val(textdata[2]);
                      $('[data-multycss="borderRadius"][data-html="left"]').val(textdata[3]);
                      $('[data-csstype="border-radius"][value="customize"]').prop('checked', true)
                  }
              }
              
              if(io=="background"){
                  $('[data-subcss="color"][data-css="background"]').attr('data-val', iv).val(iv)
                  $('[data-editpopup="color"] i').attr('style', 'background:'+iv+';')
              }
					});	
          
          if(classb.generalSetting.csssetting.border){
            if(classb.generalSetting.csssetting.border[ccf]){
                  var borderlanth = classb.generalSetting.csssetting.border[ccf];
                  var i = 0
                  $.each(borderlanth, function(k, v){
                       var textdata = v.trim().replace(/px/g, "").split(" ");
                       if(textdata[0])
                        $('[data-css="border-style"][data-html="'+k+'"][data-multycss="border"]').val(textdata[0])
                       
                       if(textdata[1])
                        $('[data-css="border-width"][data-html="'+k+'"][data-multycss="border"]').val(textdata[1])
                       
                       if(textdata[2]){
                        $('[data-css="border-color"][data-html="'+k+'"][data-multycss="border"]').val(textdata[2])
                        setTimeout(function(){ 
                          $('.color-picker[data-html="'+k+'"][data-multycss="border"]').colorpicker('setValue', textdata[2])
                         }, 200);
                        }
                        
                      i++
                   })
                   if(i==1){
                      $('[data-csstype="border"][value="same"]').prop('checked', true)
                   }else{
                      $('[data-csstype="border"][value="customize"]').prop('checked', true)
                   }
                
             }
          }
          
         var mi = 0;
         var pi = 0;
         for (var i = 0; i < margindl.length; i++) {
              if (margindl[i] === margindl[0]) {
                  mi++
              }
          }
          
          for (var i = 0; i < paddingl.length; i++) {
              if (paddingl[i] === paddingl[0]) {
                  pi++
              }
          }
          
          if(mi===margindl.length && margindl.length != 0){
            $('[data-csstype="margin"][value="same"]').prop('checked', true)
          }else{
            $('[data-csstype="margin"][value="customize"]').prop('checked', true)
          }
          if(pi===paddingl.length && paddingl.length != 0){
            $('[data-csstype="padding"][value="same"]').prop('checked', true)
          }else{
            $('[data-csstype="padding"][value="customize"]').prop('checked', true)
          }
          
          
           switchas();	
           updateContainer('all')
            $('.customselect').selectpicker('refresh');
            $('.color-picker').colorpicker('update')
           
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
           
           classb.updatejson('text-shadow', sedows)
          
         },
          border:function(target){
            
             var activemode = $('[data-tabnav="button"] .active a').data('rolecss')
             var type = $('[data-csstype="border"][name="bordertype"]:checked').val();
             
             if(!classb.generalSetting.csssetting.border){
                      classb.generalSetting.csssetting.border = {}
             }
             if(!classb.generalSetting.csssetting.border[activemode]){
                    classb.generalSetting.csssetting.border[activemode] = {}
             }
             
             if(target){
                 var targetType = target.data('html')
                 if(type=='same'){
                    targetType = 'top'
                 }
                 
                 var style = $('[data-css="border-style"][data-html="'+targetType+'"][data-multycss="border"]').val()
                 var width = $('[data-css="border-width"][data-html="'+targetType+'"][data-multycss="border"]').val()
                 var color = $('[data-css="border-color"][data-html="'+targetType+'"][data-multycss="border"]').val()
                 
                  var border =  style+' '+width+'px '+color;
                  
                  
                  classb.generalSetting.csssetting.border[activemode][targetType] = border;
             }
              
              
              if(type == 'same'){
                    if(classb.generalSetting.csssetting.border[activemode]['top']){
                    var borderall = classb.generalSetting.csssetting.border[activemode]['top'];
                      classb.updatejson('border', borderall)
                    }
                   
                    var deletekey = 'border-top border-right border-bottom border-left'
                    classb.deleteJson(deletekey)
                    
                    
              }else{
                   classb.deleteJson('border')
                  if(classb.generalSetting.csssetting.border[activemode]['top']){
                    var bordertop = classb.generalSetting.csssetting.border[activemode]['top'];
                    classb.updatejson('border-top', bordertop)
                  }
                  
                  if(classb.generalSetting.csssetting.border[activemode]['right']){
                    var borderright = classb.generalSetting.csssetting.border[activemode]['right'];
                    classb.updatejson('border-right', borderright)
                  }
                  if(classb.generalSetting.csssetting.border[activemode]['bottom']){
                    var borderbottom = classb.generalSetting.csssetting.border[activemode]['bottom'];
                    classb.updatejson('border-bottom', borderbottom)
                  }
                  if(classb.generalSetting.csssetting.border[activemode]['left']){
                    var borderleft = classb.generalSetting.csssetting.border[activemode]['left'];
                    classb.updatejson('border-left', borderleft)
                    
                  }
              }
              
              
          },
          borderRadius:function(){
              var activemode = $('[data-tabnav="button"] .active a').data('rolecss');
              var type = $('[data-csstype="border-radius"][name="radiustype"]:checked').val()
              var borderredius = ''
              
              if(type == 'same'){
                 borderredius = $('[data-multycss="borderRadius"][data-html="top"]').val();
                var ppx = $('[data-multycss="borderRadius"][data-html="top"]').next('select').val()
                if(!ppx){
                      ppx = 'px'
                }
                 $('[data-multycss="borderRadius"][data-html="top"]').val(borderredius);
                 $('[data-multycss="borderRadius"][data-html="right"]').val(borderredius);
                 $('[data-multycss="borderRadius"][data-html="bottom"]').val(borderredius);
                 $('[data-multycss="borderRadius"][data-html="left"]').val(borderredius);
                 
                 borderredius = borderredius+ ppx;
                 
              }else{
                var tppx = $('[data-multycss="borderRadius"][data-html="top"]').next('select').val();
                var rppx = $('[data-multycss="borderRadius"][data-html="right"]').next('select').val();
                var bppx = $('[data-multycss="borderRadius"][data-html="bottom"]').next('select').val();
                var lppx = $('[data-multycss="borderRadius"][data-html="left"]').next('select').val();
                
                 var top = $('[data-multycss="borderRadius"][data-html="top"]').val() + tppx;
                  var right = $('[data-multycss="borderRadius"][data-html="right"]').val() + rppx;
                  var bottom = $('[data-multycss="borderRadius"][data-html="bottom"]').val() + bppx;
                  var left = $('[data-multycss="borderRadius"][data-html="left"]').val() + lppx;
                  borderredius = top+' '+right+' '+bottom+' '+left;
                  
              }
             
            classb.updatejson('border-radius', borderredius)
              
          },
          boxShadow:function(){
            var activemode = $('[data-tabnav="button"] .active a').data('rolecss')
           var sedows = ''
             $('[data-insettemp="boxShadow"] [data-role="textGroup"]').each(function(index, element) {
                if(index!=0){
                    sedows +=', '
                }
                var targets = $(this)
                var color = targets.find('[data-multycss="boxShadow"][data-html="color"]').val()
                var x = targets.find('[data-multycss="boxShadow"][data-html="x"]').val()
                var type = targets.find('[data-multycss="boxShadow"][data-subcss="type"]').val()
                var y = targets.find('[data-multycss="boxShadow"][data-html="y"]').val()
                var blurs = targets.find('[data-multycss="boxShadow"][data-html="blur"]').val()
                var spread = targets.find('[data-multycss="boxShadow"][data-html="spread"]').val()
                sedows += type+' '+x+'px '+y+'px '+blurs+'px '+spread+'px '+color
            });
            
            if(sedows!=''){
              classb.updatejson('box-shadow', sedows)
            }
            
          },
          filter:function(){
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
                 if(sepia!=0){
                    filter += ' sepia(' + sepia + '%)';
                 }
                
              });
              classb.updatejson('filter', filter)
          }
      },
      addpopup:function(target){
        var type = target.data('addpopup');
        if(!type){
          var type = target.data('editpopup');
        }
        var getcolor = target.find('i').attr('style')
        var html ='<iframe data-viewiframe="iframe" src="/bbeditor/classes/'+type+'"></iframe>'   
        bootbox.dialog({
          message: html,
          title: type+" Studio",
          className:"bigpopup"
        })
        
        $('[data-viewiframe="iframe"]').load(function(){
              $('[data-viewiframe="iframe"]').contents().find('[data-export="conected"]').attr('data-open', 'true').val(getcolor)
              $('[data-viewiframe="iframe"]').contents().find('[data-openpopup="savebutton"]').removeClass('hide').next('.open-login').addClass('hide')
              $('[data-viewiframe="iframe"]').contents().find('[data-openpopup="savebutton"]').click(function(){
                  var getcolor = $('[data-viewiframe="iframe"]').contents().find('[data-export="conected"]').val()
                  target.find('i').attr('style', getcolor);
                  $('[data-subcss="color"][data-css="background"]').val(getcolor);
                  $('[data-subcss="color"][data-css="background"]').attr('data-val', $('[data-viewiframe="iframe"]').contents().find('[data-export="conected"]').attr('data-val'))
                  var value = $('[data-viewiframe="iframe"]').contents().find('[data-export="conected"]').attr('data-val'); 
                  classb.updatejson('background',value)
                  bootbox.hideAll()
              })
              
        });
        
        
      },
      updatenav:function(){
        var active =  $('[data-tabnav="button"] .active a').data('rolecss');
        var type = $('[data-tabnav="button"] .active [data-tabactive]').is(':checked')
        
        if(active =='css'){
          classb.suporter.tabEditor = true;
        }else{
          if(type){
              classb.suporter.tabEditor = true;
          }else{
              classb.suporter.tabEditor = true;
          } 
        }
        if(!classb.suporter.tabEditor){
          $('[data-activetab="suporter"]').removeClass('hide')
        }else{
          $('[data-activetab="suporter"]').addClass('hide')
        }
        if(!classb.generalSetting.csssetting['tabs']){
            classb.generalSetting.csssetting['tabs'] = {}
        }
        classb.generalSetting.csssetting['tabs'][active] = classb.suporter.tabEditor;
        
        
      },
      suporter:{
          tabEditor: true
      },
      updatejson:function(key, value , mcss , target){
        classb.updatenav()
       
        if(classb.suporter.tabEditor){
            var updatetype =  $('[data-tabnav="button"] .active a').data('rolecss');
            if(updatetype=='results'){
              return false;
            }
            if(!classb.generalSetting.csssetting['csskey']){
              classb.generalSetting.csssetting['csskey'] = {}
            }
            if(!classb.generalSetting.csssetting['csskey'][updatetype]){
              classb.generalSetting.csssetting['csskey'][updatetype] = {};
            }
            if(mcss){
                classb.csspropa[mcss](target);
            }else if(key || value){
               classb.generalSetting.csssetting['csskey'][updatetype][key] = value;
               classb.updatecss()
            } 
           
        }
      },
      deleteJson:function(key){
         classb.updatenav()
         if(classb.suporter.tabEditor){
           var dkey = key.split(" ")
            var updatetype =  $('[data-tabnav="button"] .active a').data('rolecss');
            $.each(dkey, function(i, val){
                if(classb.generalSetting.csssetting['csskey']){
                    delete classb.generalSetting.csssetting['csskey'][updatetype][val]; 
                 }
             });
            
         }
         classb.updatecss()
          
      },
      downloadcss:function(){
          $('[data-download="css"]').attr('download', classb.generalSetting.csssetting.class+'.css')
          var data = "text/plain;charset=utf-8," + encodeURIComponent(classb.generalSetting.csssetting.savedcss);
          $('[data-download="css"]').attr('href', 'data:' + data)
      },
      getbasicitem:function(data){
          if(data.data){
                  $.each(data.data, function(key, val){
                     
                       $.each(val, function(inde, types){
                          var name = types.replace(/_/g, " ");
                              name = name.replace(/-/g, " ");  
                          var htmlsli = '<a href="#" class="list-group-item" data-buttonrole="editpopup" data-type="'+key+'" data-subtype="'+types+'">'+name+'</a>';
                          $('[data-typeclasses="basic"]').append(htmlsli)
                        })
                     
                       
                  })
               
                $('[data-typeclasses="basic"] a').first().click();
                 if(modestduio != 'collection'){
                   
                }
          }
          if(data.error){
            alert(data.message);
          }
          
      },
      getbasicitemsubs:function(data){
            if(data.subs){
                  $('[data-typelsit="lists"]').empty()
                    $.each(data.subs, function(key, val){
                        var optionname = key.replace(/_/g, " ");
                        optionname =  optionname.charAt(0).toUpperCase() + optionname.slice(1);
                        var optionshtm = '<option value="'+key+'">'+optionname+'</option>';
                        $('[data-typelsit="lists"]').append(optionshtm);
                         $.each(val, function(inde, types){
                            var name = types.replace(/_/g, " ");
                                name = name.replace(/-/g, " ");  
                            var htmlsli = '<a href="#" class="list-group-item" data-buttonrole="filterclasses" data-type="'+key+'" data-subtype="'+types+'">'+name+'</a>';
                            $('[data-typeclasses="basic"]').append(htmlsli)
                            $('[data-typeclasses="'+key+'"]').append(htmlsli)
                          });
                    })

                  
                   if(modestduio != 'collection'){
                     $('#selectexistingstyle').modal('show');
                   }
                  $('[data-typelsit="lists"]').trigger('change')
            }
            if(data.data){
              classb.getbasicclassessub(data)
            }
            if(basicfilter){
              $('[data-typelsit="lists"]').val(basicfilter);
              $('[data-typelsit="lists"]').trigger('change')
              $('[data-typelsit="lists"]').addClass('hide')
              
              
            }
              //$('[data-typeclasses="basic"] a:visible').first().click();
            if(data.error){
              alert(data.message);
            }

      },
       getbasicitemsubstosub:function(data){
              if(data.data){
                //$('[data-classeslsit]').empty();
                classb.getbasicclassessub(data)
              }
            $('#selectexistingstyle').modal('show');
              //$('[data-typeclasses="basic"] a').first().click();
              if(data.error){
                alert(data.message);
              }

        },
      getbasicclassessub:function(data){
              if(data.data){
               //var createrow = $('<div class="row"></div>');
                 $('[data-classeslsit="basic"]').empty()
                if(data.data != ''){
                 var tysss = ''
                  var prefix = data.prefix;
                 
                  
                   $.each(data.data, function(key, val){
                     if(modestduio != 'collection'){
                        var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>');
                     }else{
                        var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses"><span class="projecttitle">{name}</span></a></li>');
                     }
                      $.each(val, function(k, b){
                          var datakey = 'data-'+k;
                           gethtml.attr(datakey, b)
                           
                      });  //var gethtml = classb.getclassbox(val, prefix);
                       
                     tysss = val['type']
                     if(val['json_data']){
                            if(typeof val['json_data'] =='string'){
                              var data = JSON.parse(val['json_data']);
                              if(data['classname']){
                                  gethtml.find('.projecttitle').html(data['classname']);
                              }
                            }
                           
                        }
                        
                       $('[data-classeslsit="basic"]').append(gethtml);
                   }) 
                   
                   
                  // createrow.appendTo('[data-existmodal="listing"]');
                  //var gethtml = $('<div data-role="listitem" data-sub_type="nolcass"> Sorry  style is not have in this  tab,  please create </div>');
                  // $('[data-classeslsit="basic"]').append(gethtml)
                 }else{
                     $('[data-classeslsit="basic"]').append('Sorry  style is not have in Basic tab,  please create ')
                 }
                 $('.ajaxloding').remove()
                  if(modestduio != 'collection'){
                   
                  }
            } 
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
                
                 if(modestduio != 'collection'){
                 
                }
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
      opneeditpopyp:function(selector, target, sub){
            var type = ''
            $.each(classb.editclasstye, function(key, val){
                  for (var i = 0; i < val.length; i++) {
                        if (val[i] === selector) {
                            type = key;
                            return true;
                        }
                  } 
            })
            if(type==''){
              type = 'button_style'
            }
            
            $('[data-typeclasses="basic"]').empty()
           // sendajax('/admin/framework/get-basic-subs', {type:type}, classb.getbasicitem);
            var data = {}
           if(sub){
             data['type'] = target
             data['sub'] = sub
           }
              
             
            if(target=='basic'){
               sendajax('/admin/framework/get-basic-sub-types', data, classb.getbasicitemsubs);
            }else{
               sendajax('/admin/framework/get-basic-sub-types', data, classb.getbasicitemsubs);
            }
           
      },
      getcollections:function(data){
          if(data.data){
              $.each(data.data, function(key, val){
                      var gethtml = $('<li data-role="listitem"> <a href="#" data-buttonrole="gclasses"><span class="projecttitle">{name}</span></a></li>');
                      $.each(val, function(k, b){
                          var datakey = 'data-'+k;
                           gethtml.attr(datakey, b)
                           
                      });  //var gethtml = classb.getclassbox(val, prefix);
                        if(val['json_data']){
                            if(typeof val['json_data'] =='string'){
                              var data = JSON.parse(val['json_data']);
                              if(data['classname']){
                                  gethtml.find('.projecttitle').html(data['classname']);
                              }
                            }
                           
                        }
                        var targetmenu = val['sub_type'];
                       $('[data-classeslsit="'+targetmenu+'"]').append(gethtml)
                   }) 
          }
      },
      ajaxgetcollections:function(d){
         // var basecss = "<link href='/public/framework/base.min.css' rel='stylesheet' />";
         // $('body').append(basecss)
         // modestduio = 'collection';
          $('[data-tabnav="button"]').removeClass('hide')
          $('[data-role="selectedClasses"]').removeClass('hide')
          $.each(d, function(i, key){
                var typedata = false;
                 switch(key) {
                      case 'textcollection':
                        typedata = 'text'
                          break;
                      case 'containercollections':
                          typedata = 'container'
                          break;
                      case 'imagecollections':
                          typedata = 'image'
                          break;
                       case 'basicclasses':
                          typedata = 'basic';
                          break;
                      default:

                  }
               if(typedata){
                 if(typedata=='basic'){
                    sendajax('/admin/framework/get-basic-sub-types', {}, classb.getbasicitemsubs); 
                 }else{
                    sendajax('/admin/framework/get-global-classes', {type:typedata}, classb.getcollections);
                 }
               }
          })
          //sendajax('/admin/framework/get-global-classes', {}, classb.getcollections);
      },
      editmodecssselector:function(targetelement){
                var html = $('<li></li>');
                var nameofcss = targetelement.replace(/:/g, '')
                var htmlsstucher = '<a href="#" data-buttonrole="addcssselector"  data-rolecss="{name}" data-cssselector="{csstarget}" data-targetselector="{csstarget}"><input class="switch-input" type="checkbox" data-tabactive="{name}" /> {csstarget}</a>';
                var tagname = targetelement
                var cssselector = tagname.toLowerCase();
                htmlsstucher = htmlsstucher.replace(/{csstarget}/g, cssselector);
                htmlsstucher = htmlsstucher.replace(/{name}/g, nameofcss);
                html.append(htmlsstucher);
              
              /*  if(!$('[data-role="cssselectorttree"] > ol').is('ol')){
                    $('[data-role="cssselectorttree"]').append('<ol class="componetlisting"></ol>')
                }*/

                //$('[data-role="cssselectorttree"] > ol').append(html)
                $('[data-role="cssselectorttree"]').append(html)
              
      },
      action:{
        editpopup:function(target){
            var senddata = {}
            $('[data-classeslsit="basic"]').html('<span class="ajaxloding"></span>')
            senddata['tab'] = 'basic'
            senddata['type'] = target.data('type');
            senddata['sub'] = target.data('subtype');
            styletype  = senddata['sub'];
            loadclasstype =  senddata['sub'];
            sendajax('/admin/framework/get-class-with-tab-type-sub', senddata, classb.getbasicclasses)
        },
        filterclasses:function(target){
           var type = target.data('type');
           var typesub = target.data('subtype');
            typesub = typesub.toLowerCase();
            typesub = typesub.replace(/ /,'_');
          
           sendajax('/admin/framework/get-basic-sub-types', {type:type, sub:typesub}, classb.getbasicitemsubstosub);
          
          
        },
        getbasic:function(target){
            if(target.data('type')){
               basicfilter = target.data('type')
            }else{
              basicfilter = ''
            }
            if(target.data('subtype')){
              subtype = target.data('subtype')
              subtype = subtype.toLowerCase();
              subtype = subtype.replace(/ /,'_');
            }else{
               subtype = false;
            }
            basissubFilter = target.data('dataclass');
          
            $('[data-classeslsit="basic"]').html('<span class="ajaxloding"></span>');;
            classb.opneeditpopyp(getstyletype,  basicfilter, subtype);
        },
        getselectstyle:function(target){
            if(target.data('type')){
               basicfilter = target.data('type')
            }else{
              basicfilter = ''
            }
            $('[data-classeslsit="basic"]').html('<span class="ajaxloding"></span>');;
            classb.opneeditpopyp(getstyletype,  basicfilter);
        },
        getcss:function(target){
            var getjson = target.closest('[data-cssdata]').data('cssdata');
            var getjson_data = target.closest('[data-role][data-type]').data('json_data');
            if(getjson){
                if(getjson['normal']){
                    if(getjson['normal']['text-shadow']){
                      classb.generalSetting.csssetting.css['text-shadow'] = getjson['normal']['text-shadow']
                      classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting))
                      classb.editReload();
                      $('#selectexistingstyle').modal('hide');
                    }else{
                      var nromalcss = getjson['normal'];
                      $.each(nromalcss, function(key, val){
                         
                          classb.updatejson(key, val)
                        
                      })
                       //classb.editReload();
                       $('#selectexistingstyle').modal('hide');
                      
                    }
                  
                   $('[data-typeclasses="basic"]').empty()
                }
            }
            if(getjson_data){
              $('#selectexistingstyle').modal('hide');
                        
              if(typeof getjson_data=='object'){
                      if(getjson_data['css']){
                      $.each(getjson_data['css'], function(key, val){
                          classb.updatejson(key, val)   
                        //classb.generalSetting.csssetting.css[key] = val
                          //classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting));
                          if(target.closest('li').hasClass('active')){
                            classb.deleteJson(key);
                           
                          }else{
                             classb.updatejson(key, val)   
                          }
                      })
                      classb.editReload();
                       
                    }
                }
                    if(target.closest('li').hasClass('active')){
                            target.closest('li').removeClass('active');
                          }else{
                              target.closest('ul').find('li').removeClass('active')
                           target.closest('li').addClass('active');
                          }
               $('[data-typeclasses="basic"]').empty()
            }
            
        },
        gclasses:function(target){
              var getjson = target.closest('[data-cssdata]').data('cssdata');
              var getcssdata = target.closest('[data-css_data]').data('css_data');
              var getsubtype = 'collectios-' + target.closest('[data-css_data]').data('sub_type');
              var getjson_data = target.closest('[data-role="listitem"]').data('json_data');
              
              target.closest('ul').find('li').removeClass('active')
              target.closest('li').addClass('active');
              
              if(typeof getjson_data=='object'){
                          if(getjson_data['classname']){
                            var classnamess = getjson_data['classname']
                            var typecss = $('[data-tabnav="button"] .active [data-rolecss]').data('rolecss')
                            if(typecss =='hover'){
                              classnamess += '-hover';
                            }
                            if(typecss =='selected'){
                              classnamess += '-focus';
                            }
                            classb.updatejson(getsubtype, classnamess)
                          // classb.generalSetting.csssetting.css[getsubtype] = getjson_data['classname']
                          // classb.sl.exportjson.val(JSON.stringify(classb.generalSetting.csssetting));
                           //classb.editReload();
                         }
                    }
          },
          selectmaster:function(target){
                var targetelement = $('[data-selectmaster]').val();
                if($('[data-role="masterelementtree"]').find('[data-cssselector="'+targetelement+'"]').is('[data-cssselector]')){
                  alert('Allready have '+targetelement+' master');
                  return false;
                }
               classb.editmodeli(targetelement);
  
          },
          selectcssselector:function(target){
            var selector = $('[data-selectcssmaster="cssselector"]').val();
            var tag = $('[data-selectcssmaster="target"]').val();
            var getdatamode = $('[data-selectcssmaster="cssselector"] option:selected').data('mode');
            if(getdatamode){
             var getvals =  $('[data-cssseelctortype="'+getdatamode+'"]').val();
              selector = selector.replace('val', getvals);
            }
            var cssseletor = selector;
            if($('[data-role="cssselectorttree"]').find('[data-cssselector="'+cssseletor+'"]').is('[data-cssselector]')){
                  alert('Allready have '+cssseletor+' master');
                  return false;
                }
               classb.editmodecssselector(cssseletor);
                
          },
          addcssselector:function(target){
              var getname = target.data('cssselector')
              $('[data-role="cssselectorttree"] li').removeClass('active');
              target.closest('li').addClass('active')
              $('[data-actviestduio]').html(getname)
            
          },
          results:function(target){
            var activeclass =  $('[data-tabnav="button"] .active a').data('rolecss');
                classb.sl.cssview.removeClass(activeclass);
              $('[data-previewcolumn="option"]').addClass('hide')
              $('[data-tabnav="button"] li').removeClass('active')
          }
      },
      
      instalstudios:function(target){
          if(classb.setupstduio[target]){
            
               $.each(classb.setupstduio[target], function(key, val){
                  $('[data-opstudios="'+key+'"]').attr('data-opactives', 'true');
                  
                 if(key=="collection"){
                   if(val!=''){
                     classb.ajaxgetcollections(val);
                   }
                 }
                 if(key=="cssselector"){
                    $('[data-tabnav="button"]').removeClass('hide')
                 }
                  $.each(val, function(i, va){
                       
                        $('[data-opstudios="'+va+'"]').attr('data-opactives', 'true');
                  });
                 
               });
          }else{
            $('[data-opstudios]').attr('data-opactives', 'true');
          }
          $('[data-opstudios]').not('[data-opactives="true"]').remove();
          $('[data-studitabs="opstudios"] li').first().children('a').click();
      }
		}
		classb.generalSetting.csssetting.class = 'classname';
		classb.generalSetting.csssetting.savedcss = '';
		classb.generalSetting.csssetting.classname = '.'+classb.generalSetting.csssetting.class;
	
	  
    
    var timerimportjson = window.setInterval(inportjson, 200);
    function inportjson(){
          openjsonload = $('[data-export="importjson"]').attr('data-open');
          if(openjsonload){
            $('[data-export="importjson"]').keyup()
            clearInterval(timerimportjson);
          }
    }
    
    $('body').on('keyup', '[data-export="importjson"]', function(){
            var thisValue = $(this).val()
             $('[data-export="json"]').val(thisValue)
              classb.editReload();
    })
    
    $.get("/appdata/app/Modules/Studio/Resources/Views/classes/container/js/sampledata.json", function(data){
      classb.dataload = data;
    })
    
    $.get("/public/framework/base.min.css", function(data){
      	classb.less = data;
        classb.less += '{{{lesscss}}}';
        classb.editReload()
	 });
    
    
    if(classb.preview[getstyletype]){
      $('[data-preview="studio"]').replaceWith(classb.preview[getstyletype]);
    }
  
    if(classb.setupstduio[getstyletype]){
        classb.instalstudios(getstyletype)
    }
  
    
    classb.sl.cssview = $('[data-role="classview"]');
   var colorsStudios = $('.insetColorStodio').BBStudio({
                                  studio:'color', 
                                  selector:'.previewCol > .test', 
                                  type:"inline", 
                                  container: '.insetColorStodio',
                                  containerClass:"insetColorStodioc",
                                  callback:function(cass, jsondata){
                                    var json = JSON.parse(jsondata)
                                    var css = json.css
                                      $.each(css, function(k, v){
                                        $('[data-subcss="color"][data-css="background"]').val(v);
                                        $('[data-subcss="color"][data-css="background"]').attr('data-val', v)
                                         classb.updatejson(k, v)
                                      })
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
				var thiscssafte = $(this).attr('data-css-after');
        var multycss = $(this).data('multycss');
        var value = thisval+thiscssafte;
        $('[data-rolecolor="'+thiscsspro+'"]').val(thisval)
         if(multycss){
               classb.updatejson('','',multycss,$(this))
         }else{
               classb.updatejson(thiscsspro,value)
         } 
				      
                
			}
		});
	});
    
	$('.color-picker').colorpicker().on('changeColor', function(e){
		e.preventDefault();
		var color = e.color.toHex();
		var stype = $(this).data('textcolor');
    var multycss = $(this).data('multycss');
    if(multycss){
           classb.updatejson('','',multycss,$(this))
     }else{
           classb.updatejson(stype,color)
     }  
    
    
	});
  
	$('body').on('change','select[data-selector]',function(){
		var thiscsspro = $(this).attr('data-css');
		var thisval = $(this).val()
    var multycss = $(this).data('multycss');
    if(multycss){
         classb.updatejson('','',multycss,$(this))
    }else{
         classb.updatejson(thiscsspro,thisval)
    }
    updateContainer(thiscsspro)
	})	
  
  $('body').on('keyup','[data-html]',function(){
      var thiscsspro = $(this).attr('data-css');
      var multycss = $(this).data('multycss');
      var aftercss = $(this).data('after');
      var thisval = $(this).val()
      var  mim = $(this).data('min');
      if(mim || mim == 0){
           if(Number(mim) > Number(thisval)){
                 return false;
          }
       }
       if(thiscsspro=="border-radius"){
              var type = $('[data-csstype="border-radius"][name="radiustype"]:checked').val()
              if(type == 'same'){
                 borderredius = $('[data-multycss="borderRadius"][data-html="top"]').val(thisval);
              }
         }
     
      if(thiscsspro){
        if(aftercss){
            thisval = thisval+aftercss;
        }
        
        if(multycss){
           classb.updatejson('','',multycss,$(this))
         }else{
               classb.updatejson(thiscsspro,thisval)
         }
      }
	})
  
  
	$('body').on('keyup','[data-role="classname"]', function(){
			var getname = $(this).val();
			var classnames = getname.replace(/ /g, "-");
			classb.generalSetting.csssetting.class = classnames;
			classb.generalSetting.csssetting.classname = '.'+classnames;
     	classb.updatecss();
	})
	
 $('.spacing-type').change(function(){
    $(this).prev('[data-role="editcss"]').keyup()
 })
  
  $('[data-role="editcss"]').keyup(function(){
      var getcss = $(this).data('css')
      var getvalue = Number($(this).val());
      var datasame = $(this).data('same');
      var  pxtype = 'px';
                  if($(this).next().is('.spacing-type')){
                        pxtype = $(this).next('.spacing-type').val()
                  }
      if(datasame){
          var type = $('[data-csstype="'+datasame+'"][name="'+datasame+'type"]:checked').val()
          if('same'==type){
              $('[data-same="'+datasame+'"]').each(function(index, element) {
								  $(this).val(getvalue);
                  var getcssss = $(this).data('css');
                  var  pxtype = 'px';
                  if($(this).next().is('.spacing-type')){
                        pxtype = $(this).next('.spacing-type').val()
                  }
                  var value = getvalue+pxtype;
                   classb.updatejson(getcssss,value)
                  
							});
              
          }
      }
      var value = getvalue+pxtype;
      if(pxtype=="auto"){
        $(this).val('auto')
        classb.updatejson(getcss,'auto')
      }else{
        classb.updatejson(getcss,value)
      }
      
  })
  
 
  
  $('[data-switch]').change(function(){
      var itstrue = $(this).is(':checked')
      var getdataswitch = $(this).data('switch');
      var cssexist = $(this).data('cssexist');
      
      if(itstrue){
         
          $(this).closest('.studio-collapse-header').removeClass('disabled')
          $(this).closest('.studio-collapse-header').find('button').removeAttr('disabled')
          if(cssexist=='background'){
               var value = $('[data-subcss="color"][data-css="background"]').val();
               classb.updatejson('background',value)
               
           }
           if(cssexist=='box-shadow'){
              classb.updatejson('','','boxShadow')
           }
         
           if(cssexist=='border-radius'){
              classb.updatejson('','','borderRadius')
              classb.updatejson('','','border')
           }
      }else{
        
          if(cssexist=='border-radius'){
              cssexist = cssexist+' border';
          }
          if(cssexist=="height"){
               $('#'+getdataswitch).find('[data-css]').each(function(index, element) {
								    var gatcss = $(this).data('css')
                    var thisdefault = $(this).data('default')
                    if(thisdefault){
                        $(this).val(thisdefault)
                    }
                    if($(this).next().is('[data-default]')){
                        var getDefil = $(this).next('[data-default]').data('default')
                        $(this).next('[data-default]').val(getDefil);
                    }
                    
                    classb.deleteJson(gatcss)
							});
              $('.customselect').selectpicker('refresh');
          }
          classb.deleteJson(cssexist)
          
         $('#'+getdataswitch).collapse("hide")
         $(this).closest('.studio-collapse-header').addClass('disabled')
         $(this).closest('.studio-collapse-header').find('button').attr('disabled', 'disabled');
      }
      classb.updatecss()
  })

  
  $('[data-clickcss]').click(function(){
      var getcss = $(this).data('clickcss')
      var getuse = $(this).data('use')
      var currentvaleu  = Number($('[data-css="'+getcss+'"]').val()) 
      if(getuse=='+'){
            currentvaleu = currentvaleu + 1;
      }else{
            currentvaleu = currentvaleu - 1;
      }
      $('[data-css="'+getcss+'"]').val(currentvaleu)
      var value= currentvaleu+'px';
      classb.updatejson(getcss,value)
  })
  
  
  $('[data-csstype]').change(function(){
        var csstype = $(this).data('csstype')
        var getcontainer = $(this).data('getcontainer')
        var getvalue = $(this).val()
        
        if(getvalue=="same"){
             $('[data-role="'+csstype+'Group"]').not('[data-roletype="top"]').addClass('hide')
             $('[data-role="'+csstype+'Group"][data-roletype="top"]').find('[data-lable-title="top"]').html(csstype)
             if(csstype=="border"){
                 classb.updatejson('','','border')
             }
             if(csstype=="border-radius"){
                 classb.updatejson('','','borderRadius')
             }
             if(csstype=="height"){
               classb.deleteJson('min-height')
               classb.deleteJson('max-height')
             }
              if(csstype=="width"){
               classb.deleteJson('min-width')
               classb.deleteJson('max-width')
              }
             
        }else{
          
            $('[data-role="'+csstype+'Group"]').removeClass('hide')
            $('[data-role="'+csstype+'Group"][data-roletype="top"]').find('[data-lable-title="top"]').html('Top')
             if(csstype=="border"){
               classb.updatejson('','','border')
             }
             if(csstype=="border-radius"){
                 classb.updatejson('','','borderRadius')
             }
             if(csstype=="height"){
               classb.deleteJson('height')
             }
             if(csstype=="width"){
               classb.deleteJson('width')
              }
        }
        if(getvalue=="auto"){
              if(csstype=="height"){
               classb.deleteJson('min-height')
               classb.deleteJson('max-height')
              // classb.deleteJson('height')
			   classb.updatejson('height','auto')
              }
              if(csstype=="width"){
               classb.deleteJson('min-width')
               classb.deleteJson('max-width')
              // classb.deleteJson('width')
			   classb.updatejson('width','auto')
              }
        }
        
        if($(this).closest('[data-collapsegroup]').is('[data-collapsegroup]')){
            $(this).closest('[data-collapsegroup]').find('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
            $(this).closest('[data-collapsegroup]').find('[data-showcontainer="'+getcontainer+'"]').collapse('show');
        }else{
        
        $(this).closest('.formrow').find('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
        $(this).closest('.formrow').find('[data-showcontainer="'+getcontainer+'"]').collapse('show');
        }
        
        setTimeout(function(){  classb.updatecss() }, 300);
       
  })
  
  
  

  
    function switchas(){
      
      $('[data-csstype]').each(function() {
          var csstype = $(this).data('csstype')
          var getcontainer = $('[data-csstype="'+csstype+'"]:checked').data('getcontainer');
          var getvalue = $('[data-csstype="'+csstype+'"]:checked').val()
          
        if(getvalue=="same"){
             $('[data-role="'+csstype+'Group"]').not('[data-roletype="top"]').addClass('hide')
             $('[data-role="'+csstype+'Group"][data-roletype="top"]').find('[data-lable-title="top"]').html(csstype)
        }else{
            $('[data-role="'+csstype+'Group"]').removeClass('hide')
            $('[data-role="'+csstype+'Group"][data-roletype="top"]').find('[data-lable-title="top"]').html('Top')
        }
       
          if($(this).closest('[data-collapsegroup]').is('[data-collapsegroup]')){
            $(this).closest('[data-collapsegroup]').find('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
            $(this).closest('[data-collapsegroup]').find('[data-showcontainer="'+getcontainer+'"]').collapse('show');
        }else{
        
         $(this).closest('.formrow').find('[data-showcontainer]:visible').not('[data-showcontainer="'+getcontainer+'"]').collapse('hide');
         $(this).closest('.formrow').find('[data-showcontainer="'+getcontainer+'"]').collapse('show');
         
           }
        });
    
      
      
      $('[data-switch]').each(function(){
          var itstrue = $(this).is(':checked')
          var getdataswitch = $(this).data('switch');
          if(itstrue){
             
              $(this).closest('.studio-collapse-header').removeClass('disabled')
              $(this).closest('.studio-collapse-header').find('button').removeAttr('disabled');
              if(getdataswitch=="collapseBackground"){
                var value = $('[data-subcss="color"][data-css="background"]').val();
                colorsStudios.BBStudioUpdate({css:'background:'+value+';'})
              }
          }else{
             $('#'+getdataswitch).collapse("hide")
             $(this).closest('.studio-collapse-header').addClass('disabled')
             $(this).closest('.studio-collapse-header').find('button').attr('disabled', 'disabled');
          }
      })
  }
 
 function updateContainer(ttype){
   if(ttype=="position" || ttype=="all"){
      var position = $('[data-css="position"][data-selector="position"]').val()
      if(position=="absolute" || position=="fixed" || position=="relative" ){
          $('[data-showcontainer="positionsetting"]').collapse('show')
          $('[data-showcontainer="settingFloat"]').addClass('hide')
           classb.deleteJson('float')
      }else{
          $('[data-showcontainer="positionsetting"]').collapse('hide')
          $('[data-showcontainer="settingFloat"]').removeClass('hide')
          classb.deleteJson('left')
          classb.deleteJson('right')
          classb.deleteJson('top')
          classb.deleteJson('buttom')
      }
    }
    
 }
 
  
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
    var gettemplate =  $(this).data('roletemplate') 
    var getcss =  $(this).data('css') 
    var multycss =  $(this).data('multycss') 
    var truefor= $('[data-cssexist="'+getcss+'"][type="checkbox"]').is(':checked')
    if(truefor){
          var gethtml =  $('[data-template="'+gettemplate+'"]').html()
          $('[data-insettemp="'+gettemplate+'"]').append(gethtml)
          $('[data-insettemp="'+gettemplate+'"]').collapse("show")
          $('.customselect').selectpicker('refresh');
          $('.color-picker').colorpicker().on('changeColor', function(e){
              if(multycss){
                classb.updatejson('','',multycss)
              }
          })
          if(multycss){
              classb.updatejson('','',multycss)
           }
           
     }
 })
 

 
  
 $('body').on('click', '[data-role="removeTextShedow"]', function(){
      $(this).closest('[data-role="textGroup"]').remove()
      var mylticss = $(this).data('mylticss')
       classb.updatejson('','',mylticss)
  }).on('click', '[data-buttonrole]', function(){
        var gettype = $(this).data('buttonrole');
       
          if(classb.action[gettype]){
           
                   classb.action[gettype]($(this));
         }
  }).on('change', '[data-selectcssmaster="cssselector"]', function(){
        var gettargettype= $(this).find('option:selected').data('mode');
          $('[data-cssseelctortype]').addClass('hide')
        if(gettargettype){
           $('[data-cssseelctortype="'+gettargettype+'"]').removeClass('hide')
        }
  })

  
  $('[data-insettemp="boxShadow"]').sortable({
        update: function( event, ui ) {
          classb.updatejson('','','boxShadow')
        }
    });
  
    $('[data-insettemp="textshadow"]').sortable({
        update: function( event, ui ) {
            classb.csspropa.textshadow();
        }
    });
  
    $('[data-togglebutton="textshadow"]').click(function(){
      var getactive = $(this).hasClass('active');
      if(getactive){
          $(this).removeClass('active')
      }else{
         $(this).addClass('active')
      }
  })
  $('body').on('keyup','[data-textshadow]',function(){
      var mimin = $(this).data('min')
      classb.csspropa.textshadow($(this))
  })
 $('body').on('click', '.spinner .btn:first-of-type ', function() {
       var spacingtype = $(this).closest('.spinner').find('.spacing-type:first').val()
       if(spacingtype!='auto'){
         var isauto  = $(this).closest('.spinner').find('input:first').val();
         if(isauto=="auto"){
            $(this).closest('.spinner').find('input:first').val(1)
         }
          var  newval = parseInt( $(this).closest('.spinner').find('input:first').val(), 10) + 1
          var  tycss = $(this).closest('.spinner').find('input:first').attr('id');
          $(this).closest('.spinner').find('input:first').val(newval).keyup();
        }
      });
  $('body').on('click', '.spinner .btn:last-of-type', function() {
        var spacingtype = $(this).closest('.spinner').find('.spacing-type:first').val()
        if(spacingtype!='auto'){
          var isauto  = $(this).closest('.spinner').find('input:first').val();
           if(isauto=="auto"){
              $(this).closest('.spinner').find('input:first').val(1)
           }
           var newval = parseInt( $(this).closest('.spinner').find('input:first').val(), 10) - 1
           var  tycss = $(this).closest('.spinner').find('input:first').attr('id');
           var  mim = $(this).closest('.spinner').find('input:first').data('min');
           if(mim || mim == 0){
             if(Number(mim) > Number(newval)){
                   return false;
              }
            }
           $(this).closest('.spinner').find('input:first').val(newval).keyup();
         }
         
  });  
  $('body').on('click', '[data-tabnav="button"] a', function(){
      classb.updatenav();
      var getcyrntdata = $(this).data('rolecss');
      if(getcyrntdata=='results'){
        $('[data-previewcolumn="option"]').addClass('hide')
        classb.updatecss();
       }else{
         $('[data-previewcolumn="option"]').removeClass('hide')
       }
      classb.chekedcssfor(getcyrntdata); 
      
       classb.updatecss();
      
   })
   $('[data-tabactive]').change(function(){
       classb.updatenav();
       classb.updatecss();
   })
   
 $('[data-addpopup], [data-editpopup]').click(function(){
        classb.addpopup($(this))
  })
  
  $('[data-loadnew]').click(function(){
      var getdata = $(this).data('loadnew');
      setTimeout(function(){ 
        if(classb.dataload){
            if(classb.dataload[getdata]){
               $('[data-export="json"]').val(JSON.stringify(classb.dataload[getdata]))
               classb.editReload();
               
            }
        }
     }, 500);
    $('#gradient-datalist').collapse('hide')
  })
  
 $('[data-typelsit="lists"]').change(function(){
        var getval = $(this).val()
      $('[data-typeclasses="basic"]').find('[data-type]').addClass('hide');
    if(basissubFilter){
          var bsa =   basissubFilter.split(',')
          $.each(bsa, function(i, v){
              $('[data-typeclasses="basic"]').find('[data-type="'+getval+'"][data-subtype="'+v+'"]').removeClass('hide');
          })
    }else{
      $('[data-typeclasses="basic"]').find('[data-type="'+getval+'"]').removeClass('hide');
    }
      
 })
  
 /* Studio Switch*/  
$('body').on('change', '[data-switchStudio]', function(){
        var thisVal = $(this).val()
        var getdataswitch = $(this).attr('data-switchStudio');
        var thisparent = $(this).closest('[data-fieldactive]')
        
        thisparent.find('[data-targetStudioType]').not('[data-targetStudioType="'+thisVal+'"]').collapse("hide")
        thisparent.find('[data-targetStudioType="'+thisVal+'"]').collapse("show")
      
  })

function switchStudio(){
      $('[data-switchStudio]').each(function(){
        var thisVal = $(this).val()
        var getdataswitch = $(this).attr('data-switchStudio');
        var thisparent = $(this).closest('[data-fieldactive]')
        
        thisparent.find('[data-targetStudioType]').not('[data-targetStudioType="'+thisVal+'"]').collapse("hide")
        thisparent.find('[data-targetStudioType="'+thisVal+'"]').collapse("show")
      })
}
  switchStudio();  
  
	classb.editReload();
	
  $('[data-loadasset]').click(function(){
      var targetAsset = $(this).data('loadasset')
      if(classb.asset[targetAsset]){
          $.each(classb.asset[targetAsset], function(k, v){
            
                if(k=='width'){
                     v = v.replace("%", "");  
                     $('[data-css="width"]').next('.spacing-type').val('%')
                     $('[data-csstype="width"][data-getcontainer="widthFixed"]').click()
                } 
                if(k=='margin-left' || k=='margin-right'){
                  $('[data-css="'+k+'"]').next('.spacing-type').val('auto') 
                }
                
                if($('[data-css="'+k+'"]').is('input')){
                  $('input[data-css="'+k+'"]').val(v).keyup()
                }else  if($('[data-css="'+k+'"]').is('select')){
                  $('select[data-css="'+k+'"]').val(v).change()
                }
                $('.customselect').selectpicker('refresh');
                    
          })
       
      }
        
  })
	
	editorContainer.getSession().on('change', function () {
       var tContianercss   = editorContainer.getValue();
       classb.updatejson('acecontent', tContianercss);
  });
	
  editorTextContianer.getSession().on('change', function () {
       var tContianercss   = editorTextContianer.getValue();
       classb.updatejson('acetext', tContianercss);
  });
  
})
