@extends('studios::_partial.studio_versions_layout')
@section('content')
    

    <div class="menuBuilder textBuilderPreview"> 
    <section class="container-fluid">
        <div class="row " id="builderContain">
            <div class="col-xs-12 col-sm-6 previewAray" class="text-center">
                <div class="classnamedetail m-b-0 hide">
                <div class="row   firstchild form-horizontal">
                    <div class="col-xs-12 ">
                        <div class="form-group p-b-0 m-b-0 uplaod-style">
                                <label class="col-lg-3 col-xs-12 m-t-5" for="fieldsType"><span class="class-style-icon"></span> Class Style</label>
                                <div class="col-lg-5 col-xs-6">
                                        <select name="" id="class-style" class="customselect form-control" data-style="class-style-menu">
                                                <option>Default</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                        </select>  
                                       
                                </div>
                                <div class="col-lg-4 col-xs-6">
                                        <button type="button" class=" btn uploadButton ">Upload Style</button>
                                        <a href="" type="button" class=" btn uploadButton" data-download="css" download="text.css"><i class="glyphicon glyphicon-save"></i></a>
                                </div>
                                
                        </div>
                    </div>
                    
                </div>
              
                </div>
                 <div class="row p-b-10 hide">
                    <div class="col-xs-12 p-0">
                            <ul class="stepNav list-unstyled nav-justified tabStepnav previewtabs clearfix  hide" data-tabnav="button">
                                        <li class="active" ><a href="#" title="Step1" data-rolecss="css">Default</a></li>
                                        <li> <a href="#" title="Step1" data-rolecss="hover" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Hover</span> <span class="col-xs-6 text-left">
                                                        <label class="switch switch-flat switch-button m-b-0">
                                                                <input class="switch-input" type="checkbox" data-tabactive="hover" />
                                                                <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                                                        </span> </a> </li>
                                        <li > <a href="#" title="Step1" data-rolecss="selected" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Selected</span> <span class="col-xs-6 text-left">
                                                        <label class="switch switch-flat switch-button m-b-0">
                                                                <input class="switch-input" type="checkbox" data-tabactive="selected"/>
                                                                <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                                                        </span> </a> </li>
                                       <li><a  href="#tabpreview" data-rolecss="results" aria-controls="home" role="tab" data-toggle="tab" >Results</a></li>
                                </ul>
                        

                        </div>
                    </div>
                     
                          
                            <div class="" data-preview="studio" data-role="classview">Text Preview Here</div>
                         
                       
                     
                
              			  <textarea name="json_data" class="form-control" data-export="json" style="margin-top:100px">{!! $json_data or null !!}</textarea>
                          <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                	      <textarea name="less_data" class="form-control hide" data-export="css" hidden="hidden"></textarea>
                	      <textarea name="collection" class="form-control hide" data-export="collectiondata" hidden="hidden"></textarea>
                 <div class="row p-t-20 hide" data-role="selectedClasses">
                    <div class="col-xs-12">
                        <div class="panel panel-default">
                          <div class="panel-heading">Selected Classes</div>
                          <div class="panel-body" data-role="previewslclasses">Example <span class="label label-default"></span></div>
                        </div>
                   </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 formoptions textBuilderEditor p-0 ">
              
                    <!-- button CLasses -->
                <div class="row formrow form-horizontal m-r-0 m-l-0">
                    <div class="col-xs-12 p-t-10 p-b-5">
                           
                            <button type="button" class="basicsBtn m-r-10 pull-right"  data-toggle="modal" data-target="#previewcssmodal"  >css</button>
                            
                    </div>
                </div>
                
                 <div data-previewcolumn="option">
                
                 <ul class="stepNav list-unstyled nav-justified tabStepnav clearfix m-t-10 " role="tablist" data-studitabs="opstudios">
                                        <li data-opstudios="basicclasses"><a  href="#basicstyles" aria-controls="basic_classes" role="tab" data-toggle="tab">Basic classes </a></li>
                                        <li data-opstudios="textcollection"><a  href="#textcollectionstyles" aria-controls="collectionstyles" role="tab" data-toggle="tab" >Text classes </a></li>
                                        <li data-opstudios="containercollections"><a  href="#containercollectionstyles" aria-controls="collectionstyles" role="tab" data-toggle="tab" >Container classes </a></li>
                                       
                                </ul>
                
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane" id="basicstyles" data-opstudios="basicclasses">
                        <div class="row m-r-0 m-l-0" style="background-color: #dbdbdb;">
                             <div class="col-md-4 p-t-10 comp-list">
                                     <div class="form-group p-l-20 p-t-10 p-r-20">
                                         <select class="form-control" data-typelsit="lists" style="background-color: white;    border: 1px solid #ccc;    color: #555;">

                                         </select>
                                     </div>
                                     <div class="list-group p-l-20 p-r-20" data-role="componentslist" data-typeclasses="basic">
                                     </div>
                                

                              </div>

                             <div class="col-md-8">
                                  <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="basic">

                                   </ul>
                               </div>
                           </div>
                    </div>
                     <div role="tabpanel" class="tab-pane" id="textcollectionstyles" data-opstudios="textcollection">
                           <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="text">

                           </ul>
                      </div>
                      
                      <div role="tabpanel" class="tab-pane" id="containercollectionstyles" data-opstudios="containercollections">
                           <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="container">

                           </ul>
                      
                      </div>
                      
                      <div role="tabpanel" class="tab-pane" id="imagecollectionsstyle" data-opstudios="imagecollections">
                           <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="image">

                           </ul>
                      
                      </div>
                     
                      
                      
                    


              </div>
                </div>
                
                
            </div>
        </div>
    </section>
</div>

<div class="modal fade" id="previewcssmodal" tabindex="-1" role="dialog" aria-labelledby="previewcssmodal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Css</h4>
      </div>
      <div class="modal-body">
       <textarea name="prevewcss" class="form-control" data-export="csspreve"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script type="template" data-template="textshadow">
  <div class="row textGroupRow" data-role="textGroup">
  <a href="#" class="iconstudio addicon m-r-5 removetextRow" data-role="removeTextShedow"><i class="fa fa-times" aria-hidden="true"></i></a>
                            <div class="col-xs-6 col-md-6  col-lg-1 p-t-10 p-b-10 border-shadow-color ">
                                    <span class="input-group color-picker input-color input-color-inblock" data-shadowcolor="color">
                                        <input type="text" class="form-control hide" id="" value="#000" name="" data-textshadow="color">
                                        <span class="input-group-addon"><i></i></span>
                                    </span>
                                   
                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-4  p-t-10 p-b-10 border-shadow-offset-x">
                                <label class="col-xs-6 p-l-0 m-t-5">offset X</label>
                                <div class="col-xs-6 p-l-0">
                                        <div class="spinner">
                                                <input type="text" value="0" data-textshadow="x" class="form-control">
                                                <div class="input-group-btn-vertical">
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-4 p-t-10 p-b-10 border-shadow-offset-y">
                                <label class="col-xs-6 p-l-0 m-t-5">offset Y</label>
                                <div class="col-xs-6 p-l-0">
                                    <div class="spinner">
                                            <input type="text" value="0" data-textshadow="y"  class="form-control">
                                            <div class="input-group-btn-vertical">
                                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                            </div>
                                    </div>
                                 </div>   
                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-2  p-t-10 p-b-10 border-shadow-blur">
                                <label class="col-xs-6 p-l-0 m-t-5" >Blur</label>
                                <div class="col-xs-6 p-l-0">
                                    <div class="spinner">
                                                <input type="text" value="0" data-textshadow="blur" data-min="0" class="form-control">
                                                <div class="input-group-btn-vertical">
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                </div>
                                        </div>
                                     </div> 
                            </div>
                        </div>
</script>
<script type="template" data-template="boxShadow">
  <div class="row textGroupRow" data-role="textGroup">
  <a href="#" class="iconstudio addicon m-r-5 removetextRow" data-mylticss="boxShadow" data-role="removeTextShedow"><i class="fa fa-times" aria-hidden="true"></i></a>
                            <div class="colRow">
                                    <div class="col-xs-6 col-md-6  col-lg-1  p-t-10 p-b-10 border-shadow-color ">
                                            <span class="input-group color-picker input-color input-color-inblock" data-multycss="boxShadow" data-shadowcolor="color">
                                                <input type="text" class="form-control hide" id="" value="#000" name="" data-multycss="boxShadow" data-html="color">
                                                <span class="input-group-addon"><i></i></span>
                                            </span>
                                           
                                    </div>
                                    
                                     <div class="col-xs-6 col-md-6  col-lg-2   p-t-10 p-b-10 border-shadow-offset-x">
                                                              <select data-selector="fontweight" data-style="btn-black " data-multycss="boxShadow" data-subcss="type" data-css="box-shadow" class="form-control customselect" >
                                            <option selected="" value="">Outer shadow</option>
                                            <option value="inset"> Inner shadow</option>
                                        </select>
                                    </div>
                                    
                                    <div class="col-xs-6 col-md-6  col-lg-2   p-t-10 p-b-10 border-shadow-offset-x">
                                        <label class="col-xs-5 p-l-0 m-t-5"> X</label>
                                        <div class="col-xs-6 p-l-0">
                                                <div class="spinner">
                                                        <input type="text" value="0" data-multycss="boxShadow" data-html="x" data-css="x" class="form-control">
                                                        <div class="input-group-btn-vertical">
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                        </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-md-6  col-lg-2 p-t-10 p-b-10 border-shadow-offset-y">
                                        <label class="col-xs-5 p-l-0 m-t-5">Y</label>
                                        <div class="col-xs-6 p-l-0">
                                            <div class="spinner">
                                                    <input type="text" value="0" data-multycss="boxShadow" data-html="y" data-css="y"   class="form-control">
                                                    <div class="input-group-btn-vertical">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                    </div>
                                            </div>
                                         </div>   
                                    </div>
                            </div>
                            <div class="colRow">
                                     <div class="col-xs-6 col-md-6  col-lg-2 p-t-10 p-b-10 border-shadow-offset-y">
                                        <label class="col-xs-5 p-l-0 m-t-5">spread</label>
                                        <div class="col-xs-6 p-l-0">
                                            <div class="spinner">
                                                    <input type="text" value="0" data-multycss="boxShadow" data-html="spread" data-css="spread"   class="form-control">
                                                    <div class="input-group-btn-vertical">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                    </div>
                                            </div>
                                         </div>   
                                    </div>
                                    <div class="col-xs-6 col-md-6  col-lg-2  p-t-10 p-b-10 border-shadow-blur">
                                        <label class="col-xs-6 p-l-0 m-t-5" >Blur</label>
                                        <div class="col-xs-6 p-l-0">
                                            <div class="spinner">
                                                        <input type="text" value="0"data-multycss="boxShadow" data-html="blur" data-css="blur"   data-min="0" class="form-control">
                                                        <div class="input-group-btn-vertical">
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                        </div>
                                                </div>
                                             </div> 
                                    </div>
                            </div>                                    
                        </div>
</script>

<script type="template" data-template="listingclasses">
     <li data-role="listitem" data-prefix="{prefix}" data-name="{name}" data-cssdata='{data}' data-classpath='{classpath}' data-realclass="{realClass}" data-stype="{styletype}" data-css="{type}" data-selectclass=".{name}">    <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
</script>
<script type="template" data-template="classlisting">
     <li data-role="listitem"> <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
</script>  




    


    
    
    
    
    
   

@stop

@section('JS')
  {!! HTML::script('/app/Modules/FrameworkVersions/Resources/Views/assets/element-class/class-collection-builder.js?v=0.80') !!}
@stop