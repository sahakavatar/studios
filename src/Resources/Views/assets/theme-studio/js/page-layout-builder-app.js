angular.module('pagebulder',[
	'pagebulder.controller',
	'ui.sortable'
],
function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
angular.module('pagebulder.controller',[])
.controller('pagebuilders', ["$scope", function($scope){
	
		$scope.activemode = "desktop"
		$scope.horizontalsidebar = [],
		$scope.varticalsidebar = [],
		$scope.review = ['desktop', 'tablet', 'tabletportrait', 'mobile', 'mobileportrait'];
		$scope.sizepricix = { desktop:'lg', tablet:'md', tabletportrait:'sm', mobile:'xs', mobileportrait:'xs' }
		$scope.sizesize = { desktop:'1200', tablet:'992', tabletportrait:'768', mobile:'460', mobileportrait:'10' }
		
		$scope.configjosn = {
			  "title": "Page layout by stduio",
			  "author": "Ashok",
			  "self_type": "page_sections",
			  "type": "general",
			  "version": 1,
			  "descrition": "Page layout by stduio",
			  "layout": "main",
			   "example": "demo",	
			  "css": [
				"style.css"
			  ],
			  "js": [
				"js.js"
			  ],
			  "settings": {
				"file": "settings",
				"css": [
				  "style.css"
				],
				"js": [
				  "js.js"
				]
			  },
			  "active": false,
			  "slug": "59087a218d1eb",
			  "created_at": 1493727777,
			  "is_core": 0,
			  "place": "frontend"
			}

			
	
		$scope.layoutjson = {
				varticalsidebar:{
					desktop:[
						{
							name:'Sidebar 2',
							type:'sidebar',
							setting:true,
							fixed:'none',
							grid:3,
							collapsible:false,
							classname:'bbvsidebarone'
						},
						{
							name:'Main Content',
							type:'middle',
							deletes:false,
							setting:false
						}
					],
					tablet:[
						{
							name:'Sidebar 2',
							type:'sidebar',
							setting:true,
							fixed:'none',
							grid:3,
							collapsible:false,
							classname:'bbvsidebarone'
						},
						{	
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
							
						}
						
					],
					tabletportrait:[
						{
							name:'Sidebar 2',
							type:'sidebar',
							setting:true,
							fixed:'none',
							classname:'bbvsidebarone',
							grid:3,
							collapsible:false,
						},
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					],
					mobile:[
						{
							name:'Sidebar 2',
							type:'sidebar',
							setting:true,
							fixed:'none',
							grid:12,
							collapsible:false,	
							classname:'bbvsidebarone'
						},
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					],
					mobileportrait:[
						{
							name:'Sidebar 2',
							type:'sidebar',
							setting:true,
							fixed:'none',
							grid:12,
							collapsible:false,
							classname:'bbvsidebarone'
						},
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					]
			},
			horizontalsidebar:{
					desktop:[
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					],
					tablet:[
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					],
					tabletportrait:[
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					],
					mobile:[
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					],
					mobileportrait:[
						{
							name:'Main Content',
							type:'middle',
							deletes:'false',
							setting:false
						}
					]
			},
			cssdata:{
				mobileportrait:"",
				mobile:"",
				tabletportrait:"",
				tablet:"",
				desktop:"",
			}
		}
		
		
		
		
		var updatedpagelayout = function(){
			var cssdata = ''
			$('#layoutViewSetting, #iframepreview').contents().find('[data-layoutrole="bbmiddle"] .bb-holizontalSidebar').remove();
			$('#layoutViewSetting, #iframepreview').contents().find('[data-layoutrole="middle"] .bb-varticalSidebar').remove();
			angular.forEach($scope.varticalsidebar, function(cp, csskey) {
				
					var classname = cp.classname;
					if(cp.type=='sidebar'){
						cssdata += '.'+classname+'{ order:'+csskey+'}';
						var classcolapsable = '';
						if(cp.collapsible){
							classcolapsable = ' bbcollapsible ';
						}
							var keybbname = 'sidebar_place_holder_left'+classname;
							var bbrenderfunction = "{!!isset($settings['"+keybbname+"'])?BBRenderSections($settings['"+keybbname+"']): '"+cp.name+"' !!}";
							var hsidebartemplaete = '<div class="bb-varticalSidebar '+cp.fixed+classcolapsable+' col-xs-'+cp.grid+' '+classname+'" data-bbsidebarvrole="'+classname+'" data-action="sections" data-key="'+keybbname+'" data-type="vertical" data-bbfutarget="'+keybbname+'">'+
												'<a href="#" class="collapseButton" data-layoutrole="collapseSidebar"><i class="fa fa-arrow-left" aria-hidden="true"></i> <i class="fa fa-arrow-up gsarrorTop" aria-hidden="true"></i> <i class="fa fa-arrow-down gsarrorButtom" aria-hidden="true"></i></a>'+
    											'<div> ['+cp.name+'] <span class="hide" data-bbrender="code">'+bbrenderfunction+'</span></div> '+
    										'</div>';
							$('#layoutViewSetting, #iframepreview').contents().find('[data-layoutrole="middle"]').append(hsidebartemplaete);
						
						
					}else{
						cssdata += '.pagelayoutContainer  > .pagelayoutmiddle { order:'+csskey+'}';
						
					}	
						
			})
			
			angular.forEach($scope.horizontalsidebar, function(cp, csskey) {
					var classname = cp.classname;
					if(cp.type=='sidebar'){
						cssdata += '.'+classname+'{ order:'+csskey+'}';
							var keybbname = 'sidebar_place_holder_hor_'+classname;
							var bbrenderfunction = "{!!isset($settings['"+keybbname+"'])?BBRenderSections($settings['"+keybbname+"']): '"+cp.name+"' !!}";
							var hsidebartemplaete = '<div class="bb-holizontalSidebar '+classname+'"  data-bbsidebarhrole="'+classname+'" data-action="sections" data-key="'+keybbname+'" data-type="holizontal" data-bbfutarget="'+keybbname+'">'+
    											'<div>['+cp.name+']<span class="hide" data-bbrender="code">'+bbrenderfunction+'</span></div> '+
    										'</div>';
							$('#layoutViewSetting, #iframepreview').contents().find('[data-layoutrole="bbmiddle"]').append(hsidebartemplaete);
						
					}else{
						cssdata += '.pagegeneralMiddle  > .pagelayoutContainer { order:'+csskey+'}';
						
					}	
						
			})
			
			$('#layoutViewSetting').contents().find('[data-generatedcss="csss"]').html(cssdata)
			$scope.layoutjson.cssdata[$scope.activemode] = cssdata;
			exporthtml();
			
			var targetifream = $('#layoutViewSetting').contents();
			targetifream.find('[data-bbsidebarvrole]').click(function(){
				
				$('#contentcomponet').modal('show')
			})
		}
		
		var exporthtml = function(){
				$('#iframepreview').contents().find('[data-bbsidebarvrole]').attr('class', 'bb-varticalSidebar BBdivs')
				$('#iframepreview').contents().find('[data-bbsidebarhrole]').attr('class', 'bb-holizontalSidebar BBdivs')
				
				angular.forEach($scope.layoutjson.varticalsidebar, function(da, index) {
								angular.forEach(da, function(val, key){
									if(val.type=='sidebar'){
											if(val.grid){
												var classe = ' col-'+$scope.sizepricix[index]+'-'+val.grid+' '
												$('#iframepreview').contents().find('[data-bbsidebarvrole="'+val.classname+'"]').addClass(val.classname)
												$('#iframepreview').contents().find('[data-bbsidebarvrole="'+val.classname+'"]').addClass(classe)
												//gridclass += ' col-'+$scope.sizepricix[index]+'-'+val.grid+' '			
											}
									}
								})
							
					
				})
				
				
				
				var cssdata = ''
				angular.forEach($scope.layoutjson.cssdata, function(cp, index) {
					
					if($scope.sizesize[index]){
						cssdata += '@media (min-width: '+$scope.sizesize[index]+'px) {'+cp+'}'
					}
				})
				
				$('#iframepreview').contents().find('[data-generatedcss="csss"]').html(cssdata)
				
		}
		
		
		$('#layoutViewSetting').load(function(){
			updatedpagelayout();
			
		})
		
		$scope.aresponsiveview = function(targetview){
			$scope.activemode = targetview
			$scope.horizontalsidebar = $scope.layoutjson.horizontalsidebar[$scope.activemode]
			$scope.varticalsidebar = $scope.layoutjson.varticalsidebar[$scope.activemode]
		}
		
		$scope.horizontalsidebar = $scope.layoutjson.horizontalsidebar[$scope.activemode]
		$scope.varticalsidebar = $scope.layoutjson.varticalsidebar[$scope.activemode]
		
		$scope.sortableOptions = {
		  update: function(e, ui) {
			 $scope.$apply();
		  }
		};
		
		$scope.$watch('varticalsidebar', updatedpagelayout, true)
		$scope.$watch('horizontalsidebar', updatedpagelayout, true)
		$scope.$watch('layoutjson', updatedpagelayout, true)
		
		$scope.$watch(function() {
			$('.customselect').selectpicker('refresh');
			$('.customselect').next('.btn-group').next('.btn-group').remove();
		
			
		});
		
	
		$scope.addSidebarv = function(){
			
			bootbox.prompt("Enter sidebar name", function(result){ 
				if(result){
					var sidbearclassusnic = _.uniqueId('bbvsidebar');
					
					var sidebardata = {
						'name':result,
						'sidePosition':'left',
						type:'sidebar',	
						fixed:'none',
						grid:3,
						classname:sidbearclassusnic,
						collapsible:false,
						deletes:'true',
						setting:true
					}
					
					angular.forEach($scope.review, function(key,i){
						var newdata = JSON.stringify(sidebardata);
						$scope.layoutjson.varticalsidebar[key].push(JSON.parse(newdata))
					});	
					$scope.$apply();
				}
			});
			
				
		}
		$scope.addSidebarh = function(){
			bootbox.prompt("Enter sidebar name", function(result){ 
				
				if(result){
					var sidbearclassusnic = _.uniqueId('bbhsidebar');
					var sidebardata = {
						name:result,
						type:'sidebar',	
						deletes:true,
						setting:true,
						classname:sidbearclassusnic,
					}
				//$scope.horizontalsidebar.push(sidebardata)	
					angular.forEach($scope.review, function(key,i){
						var newdata = JSON.stringify(sidebardata);	
						$scope.layoutjson.horizontalsidebar[key].push(JSON.parse(newdata))
					});	
					$scope.$apply();
				}
			});
				
		}
		
		

		$scope.deletesidebar = function(index, target){
			 angular.forEach($scope.layoutjson[target], function(key,i){
					angular.forEach(key, function(keys, o){
						if(index === keys.name){
							$scope.layoutjson[target][i].splice(o, 1)
						}
					});
				});	
		}
		
		$scope.downloadzip = function(){
				var htmls =$('<div></div>');
					htmls.html($('#iframepreview').contents().find('body').html());
					
					htmls.find('[data-bbrender="code"]').each(function(){
						var gethtm = $(this).html()
						$(this).closest('div').html(gethtm);
					})
					
					//var exporthtml = htmls.html() + "{!! HTML::style($_this->path.'/css/style.css') !!}"
					
					
				var csss = '<style> ' + $('[data-tempcss="cssforpagelayout"]').html() +' '+ $('#iframepreview').contents().find('[data-generatedcss="csss"]').html() +'</style>';
				var stylecss = $('[data-tempcss="cssforpagelayout"]').html() +' '+ $('#iframepreview').contents().find('[data-generatedcss="csss"]').html() ;
				var exporthtml = htmls.html() + csss;
			
				var json = JSON.stringify($scope.configjosn)
				var zip = new JSZip();
				
				zip.file("main.blade.php", exporthtml);
			//	zip.file("demo.blade.php", exporthtml);
			//	zip.file("config.json", json );
				var csss = zip.folder("css");
				var jsf = zip.folder("js");
				var images = zip.folder("images");
				csss.file("style.css", stylecss);

				zip.generateAsync({type:"blob"}).then(function(content) {
					// see FileSaver.js
					//alert(content)
					saveAs(content, "pagelayout.zip");
				});

		}
	
}]);