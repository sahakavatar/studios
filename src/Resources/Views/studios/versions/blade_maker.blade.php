@extends('studios::_partial.studio_versions_layout')
@section('content')

    <div class="menuBuilder textBuilderPreview">
        <section class="container-fluid">
            <div class="row " id="builderContain">
                <div class="col-xs-12 col-sm-6 previewAray" class="text-center">
                    <div class="classnamedetail hide">
                        <div class="row   firstchild form-horizontal ">
                            <div class="col-xs-12 ">
                                <div class="form-group p-b-0 m-b-0 uplaod-style">
                                    <label class="col-lg-3 col-xs-12 m-t-5" for="fieldsType"><span
                                                class="class-style-icon"></span> Class Style</label>
                                    <div class="col-lg-5 col-xs-6">
                                        <select name="" id="class-style" class="customselect form-control"
                                                data-style="class-style-menu">
                                            <option>Default</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                            <option>option 3</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-xs-6">
                                        <button type="button" class=" btn uploadButton ">Upload Style</button>
                                        <a href="" type="button" class=" btn uploadButton" data-download="css"
                                           download="text.css"><i class="glyphicon glyphicon-save"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12">
                        <div class="flat-area" data-previewclass>
                           		@include('studios::_partial.bladetest')
                        </div>
                        <div class="hide" data-previewblade="origenl">@include('studios::_partial.bladetest')</div>
                        <div class="p-t-20">
                            <div class="form-group ">
                                <label for="email" style="font-weight: bold!important;">HTML Code</label>
                                <div class="editcontianer">
                                    <div id="htmleditor" data-role="htmlcodeview"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <textarea name="json_data" class="form-control" data-export="json"
                              style="margin-top:100px"></textarea>
                    <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                    <textarea name="less_data" class="form-control hide" data-export="css" hidden="hidden"></textarea>
                    <textarea name="collection" class="form-control hide" data-export="collectiondata"
                              hidden="hidden"></textarea>
                    <textarea name="exportjsn" class="form-control" data-export="newjsondata"></textarea>

                   
                </div>
                <div class="col-xs-12 col-sm-6 frameworkoptionbox formoptions textBuilderEditor ">
                <div data-tabpreview="setting" class="collapse in">
                    <ul class="nav nav-tabs nav-justified studiotabs hide" data-type-selector>
                        <li role="presentation" class="active" data-role="normal"><a href="#default" role="tab" data-toggle="tab">Default</a></li>
                        <li role="presentation" data-role="hover"><a href="#hover" role="tab" data-toggle="tab">Hover</a></li>
                        <li role="presentation" data-role="selected"><a href="#linked" role="tab" data-toggle="tab">Linked</a></li>
                    </ul>
                    
                    
                    <ul class="stepNav list-unstyled nav-justified tabStepnav clearfix">
                        <li role="presentation" class="active" ><a href="#studio_style" role="tab" data-toggle="tab">Style</a></li>
                        <li role="presentation"><a href="#studio_function" role="tab" data-toggle="tab">Functions</a></li>
                    </ul>
                    
                    
                    <div class="tab-content p-15">
                        <div class="tab-pane active" aria-expanded="true" role="tabpanel" id="studio_style">
                          
                            <div class="panel panel-default">
                                <div class="panel-heading">Add Master Classes</div>
                                <div class="panel-body">
                                    <div class="form-inline p-b-20 hide">  <div class="form-group">
                                            <select class="form-control" data-selectmaster="element">
                                                <option value="css">Main Container</option>
                                                <option value="div"> Div </option>
                                                <option value="h1"> H1 </option>
                                                <option value="h2"> H2 </option>
                                                <option value="h3"> H3 </option>
                                                <option value="h4"> H4 </option>
                                                <option value="h5"> H5 </option>
                                                <option value="h6"> H6 </option>
                                                <option value="p"> p </option>
                                                <option value="button"> button </option>
                                                <option value="a"> a </option>
                                                <option value="hr"> hr </option>
                                                <option value="img">img</option>
                                                <option value="span">span</option>
                                                <option value="input">input</option>
                                                <option value="ul">ul</option>
                                                <option value="ol">ul</option>
                                                <option value="li">li</option>
                                                <option value="b">b</option>
                                                <option value="table">table</option>
                                                <option value="tr">tr</option>
                                                <option value="td">td</option>
                                                <option value="th">th</option>
                                                <option value="label ">label</option>
                                                <option value="nav">nav</option>
                                            </select>
                                        </div>
                                        <button type="button" class="btn btn-default" data-buttonrole="selectmaster">Add HTML Tag</button>
                                    </div>
                                    <div class="form-inline p-b-20">
                                        <div class="form-group">
                                            <select class="form-control" data-selectcssmaster="target">
                                                <option value="div"> Div </option>
                                                <option value="h1"> H1 </option>
                                                <option value="h2"> H2 </option>
                                                <option value="h3"> H3 </option>
                                                <option value="h4"> H4 </option>
                                                <option value="h5"> H5 </option>
                                                <option value="h6"> H6 </option>
                                                <option value="p"> p </option>
                                                <option value="button"> button </option>
                                                <option value="a"> a </option>
                                                <option value="hr"> hr </option>
                                                <option value="img">img</option>
                                                <option value="span">span</option>
                                                <option value="input">input</option>
                                                <option value="ul">ul</option>
                                                <option value="ol">ul</option>
                                                <option value="li">li</option>
                                                <option value="b">b</option>
                                                <option value="table">table</option>
                                                <option value="tr">tr</option>
                                                <option value="td">td</option>
                                                <option value="th">th</option>
                                                <option value="label ">label</option>
                                                <option value="nav">nav</option>
                                            </select>
                                            <select class="form-control hide" data-selectcssmaster="cssselector">
                                                <option>Select Selector</option>
                                                <option value="el,val" data-mode="mel">element,element</option>
                                                <option value="el>val" data-mode="mel">element>element</option>
                                                <option value="el~val" data-mode="mel">element+element</option>
                                                <option value="el+val" data-mode="mel">element1~element2</option>
                                                <option value="::after">::after</option>
                                                <option value="::before">::before</option>
                                                <option value=":empty">:empty</option>
                                                <option value=":hover">:hover</option>
                                                <option value=":first-child">:first-child</option>
                                                <option value="::first-letter">::first-letter</option>
                                                <option value="::first-line">::first-line</option>
                                                <option value=":first-of-type">:first-of-type</option>
                                                <option value=":focus">:focus</option>
                                                <option value=":last-child">:last-child</option>
                                                <option value=":last-of-type">:last-of-type</option>
                                                <option value=":not(val)" data-mode="mel">:not(selector)	</option>
                                                <option value=":nth-child(val)" data-mode="number">:nth-child(1)</option>
                                                <option value=":nth-last-child(val)" data-mode="number">:nth-last-child(1)</option>
                                                <option value=":nth-last-of-type(val)" data-mode="number">:nth-last-of-type(1)</option>
                                                <option value=":nth-of-type(val)" data-mode="number">:nth-of-type(1)</option>
                                                <option value=":nth-child(odd)">:nth-child(odd)</option>
                                                <option value=":nth-child(even)" >:nth-child(even)</option>
                                                <option value=":nth-child(1n+0)">:nth-child(1n+0)</option>
                                                <option value=":nth-child(2n+0)">:nth-child(2n+0)</option>
                                                <option value=":nth-child(3n+0)">:nth-child(3n+0)</option>
                                                <option value=":nth-child(4n+0)">:nth-child(4n+0)</option>
                                                <option value=":only-of-type">:only-of-type</option>
                                                <option value=":only-child">:only-child</option>
                                                <option value=":checked">input:checked</option>
                                                <option value=":disabled">input:disabled</option>
                                                <option value=":enabled">input:enabled</option>
                                                <option value=":focus">input:focus</option>
                                                <option value=":invalid">input:invalid</option>
                                                <option value=":optional">input:optional</option>
                                                <option value=":read-only">input:read-only</option>
                                                <option value=":read-write">input:read-write</option>
                                                <option value=":required">input:required</option>
                                                <option value=":valid">input:valid</option>
                                            </select>
                                            <select class="form-control hide" data-cssseelctortype="mel" data-selectcssmaster="mel">
                                                <option value="div"> Div </option>
                                                <option value="h1"> H1 </option>
                                                <option value="h2"> H2 </option>
                                                <option value="h3"> H3 </option>
                                                <option value="h4"> H4 </option>
                                                <option value="h5"> H5 </option>
                                                <option value="h6"> H6 </option>
                                                <option value="p"> p </option>
                                                <option value="button"> button </option>
                                                <option value="a"> a </option>
                                                <option value="hr"> hr </option>
                                                <option value="img">img</option>
                                                <option value="span">span</option>
                                                <option value="input">input</option>
                                                <option value="ul">ul</option>
                                                <option value="ol">ul</option>
                                                <option value="li">li</option>
                                                <option value="b">b</option>
                                                <option value="table">table</option>

                                                <option value="tr">tr</option>
                                                <option value="td">td</option>
                                                <option value="th">th</option>
                                                <option value="label ">label</option>
                                                <option value="nav">nav</option>
                                            </select>
                                            <input class="form-control hide" type="text" data-cssseelctortype="number" value="" placeholder="1" />
                                        </div>
                                        <button type="button" class="btn btn-default" data-buttonrole="selectcssselector">Add HTML Tag</button>
                                    </div>
                                  <div data-role="elementtree" data-roles="cssselectorttree">

                                    </div>
                                      <!--<div data-role="elementtree">
                                      </div>-->
                                </div>
                            </div>

                            <div class="panel panel-default hide">
                                <div class="panel-heading">Add CSS Selector</div>
                                <div class="panel-body">

                                    
                                    <div >

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" aria-expanded="true" role="tabpanel" id="studio_function">
                            
                        </div>
                        <textarea name="less_data" class="form-control hide" data-export="css"></textarea>
                        <textarea name="json_data" class="form-control hide" data-export="json"></textarea>
                        <textarea name="componentsjson" class="form-control hide" data-export="componentsjson"></textarea>
                        <textarea name="componentsextra" class="form-control hide" data-export="componentsextra"></textarea>
                        <textarea name="tabclass" class="form-control hide" data-export="tabclass"></textarea>
                    </div>
                    
                    
                </div>
                <div class="component_setting collapse "  data-tabpreview="selectclass">
                    <div class="tab-content p-15">
                        	 <div class="row p-t-20" data-role="selectedClasses">
								<div class="col-xs-12" >
										Temporarily Classes : <span data-temporarilyclasses=""></span>
								 </div>
							 </div>	
                        
                        
                        		   <div class="row formrow form-horizontal" data-opstudios="cssselector">
                    <div class="col-xs-12">
                        Edit  <span data-actviestduio="">Defult</span> View
                     </div>
                  </div>
                 <div data-previewcolumn="option">
                
                 <ul class="stepNav list-unstyled nav-justified tabStepnav clearfix m-t-10 " role="tablist" data-studitabs="opstudios">
                                        <li data-opstudios="basicclasses"><a  href="#basicstyles" aria-controls="basic_classes" role="tab" data-toggle="tab">Basic classes </a></li>
                                        <li data-opstudios="textcollection"><a  href="#textcollectionstyles" aria-controls="collectionstyles" role="tab" data-toggle="tab" >Text classes </a></li>
                                        <li data-opstudios="containercollections"><a  href="#containercollectionstyles" aria-controls="collectionstyles" role="tab" data-toggle="tab" >Container classes </a></li>
                                         <li data-opstudios="elementcollection"><a  href="#collection" aria-controls="collection" role="tab" data-toggle="tab" >Collection </a></li>
                                         <li data-opstudios="componetclasses"><a  href="#componetclasses" aria-controls="componetclasses" role="tab" data-toggle="tab" >Componet </a></li>
                                       
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
                      
                      <div role="tabpanel" class="tab-pane" id="collection" data-opstudios="elementcollection">
                           <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="elementcollection">

                           </ul>
                      
                      </div>
                      
                        <div role="tabpanel" class="tab-pane" id="componetclasses" data-opstudios="componetclasses">
                           <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="componetclasses">

                           </ul>
                      
                      </div>
                     
                      
                      
                    


              </div>
                </div>
                        
                            <div class="row p-t-20" data-role="selectedClasses">
								<div class="col-xs-12">
									<div class="panel panel-default">
										<div class="panel-heading">Selected Classes</div>
										<div class="panel-body" data-role="previewslclasses">Example </div>
									</div>
								</div>
							</div>       
                          <div class="row buttons_bottom m-t-15">
                              <button class="save_class" data-buttonrole="save"><i class="fa fa-check" aria-hidden="true"></i>Save
                              </button>
                              <button class="decline_class" data-buttonrole="decline"><i class="fa fa-close" aria-hidden="true"></i>Decline
                              </button>
                          </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>

    <div class="modal fade" id="componentslisting" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel" data-modal="componenttitle">Modal title</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <ul class="list-unstyled menuTplList" data-modal="componenmenu">
                                sdsd
                            </ul>
                        </div>
                        <div class="col-sm-8 tab-content" data-modal="componenmenucontent">
                            <span class="ajaxloding"></span>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <input type="hidden" data-action="type" value="super_class">
    <input type="hidden" data-action="sub" value="">

    <script type="template" data-template="textshadow">
        <div class="row textGroupRow" data-role="textGroup">
            <a href="#" class="iconstudio addicon m-r-5 removetextRow" data-role="removeTextShedow"><i
                        class="fa fa-times" aria-hidden="true"></i></a>
            <div class="col-xs-6 col-md-6  col-lg-1 p-t-10 p-b-10 border-shadow-color ">
                                    <span class="input-group color-picker input-color input-color-inblock"
                                          data-shadowcolor="color">
                                        <input type="text" class="form-control hide" id="" value="#000" name=""
                                               data-textshadow="color">
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
                        <input type="text" value="0" data-textshadow="y" class="form-control">
                        <div class="input-group-btn-vertical">
                            <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                            <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-md-6  col-lg-2  p-t-10 p-b-10 border-shadow-blur">
                <label class="col-xs-6 p-l-0 m-t-5">Blur</label>
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
            <a href="#" class="iconstudio addicon m-r-5 removetextRow" data-mylticss="boxShadow"
               data-role="removeTextShedow"><i class="fa fa-times" aria-hidden="true"></i></a>
            <div class="colRow">
                <div class="col-xs-6 col-md-6  col-lg-1  p-t-10 p-b-10 border-shadow-color ">
                                            <span class="input-group color-picker input-color input-color-inblock"
                                                  data-multycss="boxShadow" data-shadowcolor="color">
                                                <input type="text" class="form-control hide" id="" value="#000" name=""
                                                       data-multycss="boxShadow" data-html="color">
                                                <span class="input-group-addon"><i></i></span>
                                            </span>

                </div>

                <div class="col-xs-6 col-md-6  col-lg-2   p-t-10 p-b-10 border-shadow-offset-x">
                    <select data-selector="fontweight" data-style="btn-black " data-multycss="boxShadow"
                            data-subcss="type" data-css="box-shadow" class="form-control customselect">
                        <option selected="" value="">Outer shadow</option>
                        <option value="inset"> Inner shadow</option>
                    </select>
                </div>

                <div class="col-xs-6 col-md-6  col-lg-2   p-t-10 p-b-10 border-shadow-offset-x">
                    <label class="col-xs-5 p-l-0 m-t-5"> X</label>
                    <div class="col-xs-6 p-l-0">
                        <div class="spinner">
                            <input type="text" value="0" data-multycss="boxShadow" data-html="x" data-css="x"
                                   class="form-control">
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
                            <input type="text" value="0" data-multycss="boxShadow" data-html="y" data-css="y"
                                   class="form-control">
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
                            <input type="text" value="0" data-multycss="boxShadow" data-html="spread" data-css="spread"
                                   class="form-control">
                            <div class="input-group-btn-vertical">
                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-md-6  col-lg-2  p-t-10 p-b-10 border-shadow-blur">
                    <label class="col-xs-6 p-l-0 m-t-5">Blur</label>
                    <div class="col-xs-6 p-l-0">
                        <div class="spinner">
                            <input type="text" value="0" data-multycss="boxShadow" data-html="blur" data-css="blur"
                                   data-min="0" class="form-control">
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
        <li data-role="listitem" data-prefix="{prefix}" data-name="{name}" data-cssdata='{data}'
            data-classpath='{classpath}' data-realclass="{realClass}" data-stype="{styletype}" data-css="{type}"
            data-selectclass=".{name}"><a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a>
        </li>
    </script>
    <script type="template" data-template="classlisting">
        <li data-role="listitem"><a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
    </script>


    <script type="template" data-template="listingrow">
        <div class="listinginfo" data-listing="row" data-rowid="{rowid}">
            <div class="lsitingbutton">
                
                    <button type="button" class="btn" data-cssselector="{csstarget}" data-id="{rowid}" data-caction="openeditor" ><i class="fa fa-code" aria-hidden="true"></i>
                    </button>
                <button type="button" class="btn" data-cssselector="{csstarget}" data-caction="edit" data-id="{rowid}">
                    <i class="fa fa-pencil"></i></button>
                <div class="listingonoff">
                    <input type="checkbox" data-cssselector="{csstarget}" data-listingoption="active"
                           id="checkbox{rowid}" checked="checked"/>
                    <label for="checkbox{rowid}"></label>
                </div>
            </div>
            <button class="btn btn-collapse" type="button" data-cssselector="{csstarget}" data-caction="collapse"
                    data-id="{rowid}"><i class="fa fa-plus" aria-hidden="true"></i></button>
            <span class="listingtitle">{name}</span>
        </div>
    </script>
    <script type="template" data-template="listingclasses">
        <li data-role="listitem" class="list col-xs-12 col-sm-12 col-md-6 col-lg-6" data-prefix="{prefix}"
            data-name="{name}" data-cssdata='{data}' data-classpath='{classpath}' data-realclass="{realClass}"
            data-stype="{styletype}" data-css="{type}" data-selectclass=".{name}">
            <div class="">
                <div class="main_div_1">
                    {{--<div class="top_part_1"></div>--}}
                    <div class="bottom_part_1">
                        <a href="#"><span>{name}</span></a>
                    </div>
                </div>
            </div>
        </li>
    </script>

    <script type="template" data-template="typecomponet">
        <div class="col-sm-4">
            <a href="#" class="thumbBox" data-buttonrole="itemedit">
                <img src="/app/Modules/Framework/Resources/Views/assets/framework/img/placeholder-img.jpg" alt="">
                <h4>{name}</h4></a>
        </div>
    </script>


	


@stop

@section('CSS')
    {!! HTML::style('app/Modules/Framework/Resources/Views/assets/framework/frameworkstudio.css') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/Classes/container/css/container-studio.css?v=80') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/text/css/text-studio.css?v=3.20') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/component/componetcss.css?v=0.1') !!}
    {!! HTML::style('/resources/assets/js/bootstrap-fileinput/css/fileinput.min.css') !!}
    <style>
        .editcontianer {
            position: relative;
            width: 100%;
            height: 300px;
        }

        #editorexportcss, #editorcsscontianer, #editortextcontianer, #htmleditor, .editorcss {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .previewAray {
            bottom: 0;
            left: 0;
            overflow: auto;
            position: absolute;
            top: 0;
        }
		.panel-default label{ color: #000;}
    </style>
@stop

@section('JS')
    {!! HTML::script('/resources/assets/js/bootstrap-fileinput/js/fileinput.min.js') !!}
    {!! HTML::script('/app/Modules/Studios/Resources/Views/assets/js/studio-plugin-new.js?=v0.7') !!}
    {!! HTML::script('/app/Modules/Studios/Resources/Views/assets/component/blademaker-builder.js?v=0.100') !!}
@stop