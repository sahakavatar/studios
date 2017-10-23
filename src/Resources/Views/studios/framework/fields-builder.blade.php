@extends('studios::_partial.studio_framework_layout')
@section('content')

<div class="menuBuilder fieldBuilderPreview">
    <section class="container-fluid" >
        <div class="row " id="builderContain">
            <div class="col-xs-12 col-sm-6 previewAray">
               
                <div class="classnamedetail">
                    <div class="row  savePage hide">
                        <div class="col-xs-12 col-sm-12  col-md-7  col-lg-7 p-l-0 p-r-0 m-t-10">
                            <input name="title" type="text" class="form-control form-controlblack " value="Classname_5025ed254" id="classname" data-role="classname" required>
                        </div>
                        <div class="col-xs-12 col-sm-12   col-md-5 col-lg-5  p-r-0 m-t-10"> <a href="#" class="btn css3-button"><i class="fa fa-css3" aria-hidden="true"></i> </a> </div>
                    </div>
                    <div class="row  savePage ">
                        <div class="form-group">
                            <label class=" col-xs-12 col-sm-12 col-md-4 col-lg-3 field-style-icon" for="fieldsType"> Field type</label>
                            <div class="col-xs-8 col-sm-8 col-md-5 col-lg-6 field_type">
                                {!! Form::select('fieldsType',\App\Modules\Framework\Models\InputTypes::$types,null,['data-role' => 'fieldsType', 'data-btnaction' => 'fieldsType','data-style' => 'class-style-menu','class' => 'form-control customselect']) !!}
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4">
                                <button type="button" class=" btn btn-block uploadButton ">My Fields</button>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div data-preview="container" class="previewcontainer ge-canvas" id="boostrapGrid" data-print="demehtml">
                        <div>
                            <div data-components="basic" class="grid-stack-item ui-sortable-handle" data-fromtype="singleline">
                                <div class="grid-stack-item-content row" data-role="posthtml">
                                    {!! isset($data['json_data']) ? $data['json_data'] : null !!}
                                    {{--<div class="form-group datafrom hide" data-class="setting" data-type="Singleline" data-size="col-sm-12" data-add="class">--}}
                                        {{--<div class="row">--}}
                                            {{--<label for="singleline" data-fcontrol="label" class="control-label col-sm-12">Single-line <i class=""></i></label>--}}
                                            {{--<div data-fcontrol="input" class="col-sm-12">--}}
                                                {{--<input type="text" name="singleline" class="form-control" id="singleline" placeholder="Single-line" data-error="default error message">--}}
                                            {{--</div>--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                    <div class="p-rightsection hide"> <a data-action="edit" class="blue"><i class="fa fa-pencil"></i></a> <a data-action="clone" class="yellow"><i class="fa fa-clone"></i></a> <a data-action="delete" class="red"><i class="fa fa-trash"></i></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div data-role="appendscriptt" class="hide"></div>
                <div data-previewblade="blade" class="hide">{!! isset($data['css_data']) ? $data['css_data'] : null !!}</div>
                 <textarea name="exportdata" class="form-control " data-export="jsondata" style="margin-top:140px;"></textarea>
                <textarea name="json_data" class="form-control hide" data-export="json">
				    {"htmloption":{"fieldType":"custom_input","layers":[{"id":1,"children":[{"id":3,"class":"fa fa-font ","text":"Text","type":"text","rowid":"col_3"},{"id":"1","mainfield":"field","target":"inputsetting","field":"input","class":"fa fa-minus","datakey":"custom_input","text":"Custom Input","type":"field","rowid":"field_1","children":[{"id":"2","ftype":"text","target":"inputsetting","field":"input","class":"","datakey":"input","text":"Custom Input","type":"input","rowid":"field_2"}]}],"class":"uniticon pageicon","text":"Main Row","type":"row","rowid":"col_1"}],"functions":null},"fieldname":"Field Name"}
				</textarea>
                <textarea name="html_data" class="form-control m-t-10" data-export="html">
				</textarea>
                <textarea name="less_data" class="form-control hide" data-export="css"></textarea>
             
                <div class="infor"></div>
                   <div class="p-t-20">
                            <div class="form-group ">
                                <label for="email" style="font-weight: bold!important;">HTML Code</label>
                                <div class="editcontianer">
                                    <div id="htmleditor" data-role="htmlcodeview">
										{!! isset($data['css_data']) ? $data['css_data'] : null !!}
									</div>
                                </div>
                            </div>
                        </div>
                         <div class="p-t-20">
                            <div class="form-group ">
                                <label for="email" style="font-weight: bold!important;">HTML Code</label>
                                <div class="editcontianer">
                                    <div id="bladeeditor" data-role="htmlcodeview">
                                        {{  isset($data['json_data']) ? $data['json_data'] : null }}
									</div>
                                </div>
                            </div>
                        </div>
            </div>
            
            <!-- Setting Col  -->
            <div class="col-xs-12 col-sm-6 formoptions fields-builder"> 
                
                <!-- Setting Tab  -->
                <ul class="stepNav list-unstyled nav-justified tabStepnav clearfix m-t-10 " data-inset="nav" >
                	<li><a href="#genraltab" title="genral tab "  aria-controls="genraltab" role="tab" data-toggle="tab"  data-rolecss="genraltab" data-rolehtml="genral">Genral </a></li>
                    <li><a href="#options" title="Select Layer"  aria-controls="options" role="tab" data-toggle="tab"  data-rolecss="options" data-rolehtml="options">options</a></li>
                    <li><a href="#validationtabs" title="Select Layer"  aria-controls="validationtabs" role="tab" data-toggle="tab"  data-rolecss="validationtabs" data-rolehtml="validationtabs">Validation</a></li>
                </ul>
                
                <!-- Setting tab content  --> 
                
                <div class="tab-content">
        
                 <div class="tab-pane active" id="genraltab">
              					 
              		<form data-role="generalsetting">	
              					 
              					 	
               					 <!-- Infor setting-->
                        <div class="row formrow form-horizontal m-l-0 m-r-0">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#inputSetting" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Input Settings </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="inputSetting" checked="checked" data-html="editable" data-key="info"  type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="inputSetting" data-role="options">
                                
                                
                             
                                
                            </div>
                        </div>
                        <!-- Tooltip Messages -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#tooltip_messages" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Tooltip Messages </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="tooltip_messages" checked="checked" data-html="editable" data-key="errormessage" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="tooltip_messages">
                               <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5 p-l-30">
                                       <label  for="iconlabel">Icon</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <button class="form-control " type="button">Icon</button>
                                    </div>
                                </div>
                                  
                                   
                                 <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5 p-l-30">
                                        <div class="customelement">
                                            <input type="checkbox" name="tooltipmessage" checked="checked" id="tooltipmessage" data-cssenable="editable" data-getcontainer="tooltipmessage" data-key="tooltipmessage" >
                                            <label  for="tooltipmessage">Messages 1</label>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <input type="text" class="form-control " placeholder="Message Here" name="tooltipmessage" id="tooltipmessage" data-html="message" data-key="tooltipmessage" >
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                        </div>
                        <!-- end Tooltip Messages -->
                        
                         <!-- icon Messages -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#iconlabel" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Icon </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="iconlabel" checked="checked" data-html="editable" data-key="errormessage" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="iconlabel">
                                <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5 p-l-30">
                                       <label  for="iconlabel">Icon</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <button class="form-control " type="button">Icon</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- end Tooltip Messages -->
                       </form>	 
                        
					</div>
                <div class="tab-pane" id="options">
               				<form data-role="unitsetting">
                				<div role="studioPanel" id="functions" data-rolehtml="functions" data-role="insetFunctions"> </div>
                			</form>
					</div>
               
               <div class="tab-pane" id="validationtabs">
                				validation Will come here
                		
					</div>
                
				</div>
            </div>
        </div>
    </section>
</div>

<!--  HTML For Preview Element   -->
<div data-role="previewElementView" class="hide"> 
    
    <!--  Input Preview Element   -->
    <div data-field="input">
        <div class="blade-inputsetting datafrom " data-class="setting"  data-type="Singleline" data-size="col-sm-12">
            <div class="row">
                <label for="singleline" data-fcontrol="label" class="col-sm-6"><i class="fa fa-star"></i> {label}</label>
                <div data-fcontrol="input" class="col-sm-6" > {!! Form::text('singleline',null,['id'=>'singleline','placeholder'=>'{placeholder}']) !!} <button type="button" data-toggle="tooltip" data-placement="top" title="{tooltipmessage}"><i class="fa fa-question"></i></button></div>
            </div>
        </div>
    </div>
    
    <!--  Select Preview Element   -->
    <div data-field="select">
        <div class="blade-inputsetting datafrom" data-class="setting" data-type="Select">
            <div class="row">
                <label for="Select" data-fcontrol="label" class="col-sm-12 control-label"><i class="fa fa-star"></i> Select</label>
                <div class="col-sm-12" data-fcontrol="input">
                    <select name="Select" class="form-control" data-content="Please select an option">
                        <option value="0" selected="selected">--- Select ---</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select> <button><i class="fa fa-question"></i></button>
                </div>
            </div>
        </div>
    </div>
    
    <!--  Radio Preview Element   -->
    <div data-field="radio">
        <div class="blade-radiosetting  datafrom" data-class="setting" data-type="rediobuttons">
            <div class="row">
                <label for="optionsRadios" data-fcontrol="label" class="col-sm-6 control-label"><i class="fa fa-star"></i> {label} <button type="button" data-toggle="tooltip" data-placement="top" title="{tooltipmessage}"><i class="fa fa-question"></i></button></label>
                <div  data-fcontrol="input" class="col-sm-6">
                    <div class="radio checkbox"> {!! Form::radio('optionsRadios','Redio 1',null,['name'=>'optionsRadios','id'=>'optionsRadios1']) !!}
                        <label for="optionsRadios1"> Redio 1</label>
                    </div>
                    <div class="radio checkbox"> {!! Form::radio('optionsRadios','Redio 2',null,['name'=>'optionsRadios','id'=>'optionsRadios2']) !!}
                        <label for="optionsRadios2"> Redio 2 </label>
                    </div>
                    <div class="radio checkbox"> {!! Form::radio('optionsRadios','Redio 3',null,['name'=>'optionsRadios','id'=>'optionsRadios3']) !!}
                        <label for="optionsRadios3"> Redio 3 </label>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    <!--  Checkbox Preview Element   -->
    <div data-field="checkbox">
        <div class="form-group datafrom"  data-class="setting" data-type="checkbuttons">
            <div class="row">
                <label for="optionsrecheck" data-fcontrol="label" class="col-sm-12 control-label">Check buttons</label>
                <div data-fcontrol="input" class="col-sm-12">
                    <div class="checkbox">
                        <input type="checkbox" value="checkbox 1" id="checkboxid">
                        <label for="checkboxid"> checkbox 1 </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" value="checkbox 2" id="checkboxid2" >
                        <label for="checkboxid2" > checkbox 1 </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--  Textarea Preview Element   -->
    <div data-field="textarea">
        <div class="form-group datafrom"  data-class="setting" data-type="Singleline" data-size="col-sm-12">
            <div class="row">
                <label for="" data-fcontrol="label" class="col-sm-12 control-label">Textarea</label>
                <div data-fcontrol="input" class="col-sm-12" >
                    <textarea class="form-control" placeholder="singleline"></textarea>
                </div>
            </div>
        </div>
    </div>
    <div data-field="spinner-input">
        <div class="form-group datafrom"  data-class="setting" data-type="Singleline" data-size="col-sm-12">
            <div class="row">
                <label for="" data-fcontrol="label" class="col-sm-12 control-label">Textarea</label>
                <div data-fcontrol="input" class="col-sm-12" >
                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-plus"></i></span>
                        <input type="text" class="form-control" placeholder="Username" >
                        <span class="input-group-addon"><i class="fa fa-minus"></i></span> </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade custom-modal" tabindex="-1" role="dialog" id="settingModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row toolbarNav">
                    <div class="col-md-8">
                        <div class="form-horizontal">
                            <div class="btn-group btn-group-justified" role="group" aria-label="..." data-tool-tab="btnpanel">
                                <div class="btn-group" role="group"> <a href=".general" aria-controls="General" role="tab" data-toggle="tab" class="btn btn-default btn-dblue active">General</a> </div>
                                <div class="btn-group" role="group"> <a href=".validation" aria-controls="validation" role="tab" data-toggle="tab" class="btn btn-default btn-dblue">Validation</a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-right"> <a  data-dismiss="modal" aria-label="Close" class="btn btn-default btn-default-gray" data-action="discard">Discard</a> <a href="#" class="btn btn-danger btn-danger-red" data-action="apply">Apply</a>
                        <input type="hidden" id="panelID" value="">
                    </div>
                </div>
                <div class='row row-eq-height'>
                    <div class='col-xs-6 left-side'>
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane general active p-10" id="general" data-formsetting="setting"> </div>
                            <div role="tabpanel" class="tab-pane validation p-10" id="validation">
                                <div class="form-inline col-md-12 p-0 m-b-10" data-have="required">
                                    <label for="exampleInputEmail1"> Required</label>
                                    <div class="checkbox radio ml-20">
                                        <input type="radio" name="required" id="required" value="Yes" data-field="required">
                                        <label for="required" class="control-label">Yes</label>
                                    </div>
                                    <div class="checkbox radio ml-20">
                                        <input type="radio" name="required" id="required-no" value="No" data-field="required">
                                        <label for="required-no" class="control-label">No</label>
                                    </div>
                                </div>
                                <div class="form-inline col-md-10  p-0 m-b-10" data-have="icon">
                                    <label for="exampleInputEmail1">Indicator</label>
                                    <select class="form-control customFormSelect ml-20" data-field="validateindicator" data-width="auto">
                                        <option value="">Browser Icon</option>
                                        <option data-icon="glyphicon-asterisk" value="glyphicon-asterisk">asterisk</option>
                                        <option data-icon="glyphicon-star" value="glyphicon-star">Star</option>
                                        <option data-icon="glyphicon-star-empty" value="glyphicon-star-empty">Star Empty</option>
                                    </select>
                                </div>
                                <div class="form-inline col-md-10 p-0 m-b-10"  data-have="validation">
                                    <label for="exampleInputEmail1"> Validate As</label>
                                    <select class="form-control customFormSelect ml-20"  data-field="validateas" data-width="auto">
                                        <option selected="selected" value="">Any Format</option>
                                        <option value="email">Email</option>
                                        <option value="url">URL</option>
                                        <option value="phone_number">Phone Number</option>
                                        <option value="numbers_only">Numbers Only</option>
                                        <option value="text_only">Text Only</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-10  p-0 m-b-10" data-have="errormessage">
                                    <label for="errorMessage">Error Message</label>
                                    <input type="text" class="form-control" id="errorMessage" placeholder="Please enter a value" data-field="errorMessage">
                                </div>
                                <div class="form-group col-md-10  p-0 m-b-10" data-have="tooltip">
                                    <label for="tooltip">Tooltip</label>
                                    <input type="text" class="form-control" id="tooltip" placeholder="Please enter a value" data-field="tooltip">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-xs-6 right-side popuppreview p-t-40'>
                        <div data-frompre='preview'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal-content --> 
</div>
<script type="template" data-template="row">
     <li class="clearfix" data-rowid="{id}" data-type="{type}" id="{id}" data-text="{text}" data-class="{classas}">
										        <div class="rowLine col_default {id} clearfix  p-t-3 p-b-3 {type}_row">
										            <div class="f-left  p-t-5 p-b-5 p-l-5">
										                <div class="dataId p-t-5">
										                    <i class="{classas}" data-name data-role="previewicon"></i>  <span data-role="previewText">{name}</span>
										                </div>
										                </div>
										            <div class="rowEditIcons rowIcons">
														<a href="#" class="iconform editicon" data-type="edit" data-targetype="{type}" data-ctarget="{id}"></a>
														<a href="#" class="uniticon fullscreen btn-success" data-type="openStudio" data-targetype="{type}" data-ctarget="{id}"></a>
														
										            </div>
										        </div>
										        <ol class="list-unstyled subRowData"></ol>
		</li>
</script> 
<script type="template" data-template="field">
     <li class="clearfix " data-rowid="{id}" data-type="{type}" id="{id}" data-text="{text}" data-datakey="{key}" data-class="{classas}" data-field="input" data-target="{target}">
										        <div class="rowLine col_default {id} clearfix  p-t-3 p-b-3 {type}_row">
										            <div class="f-left  p-t-5 p-b-5 p-l-5">
										                <div class="dataId p-t-5">
										                    <i class="{classas}" data-role="previewicon"></i>  {text}
										                </div>
										                </div>
										            <div class="rowEditIcons rowIcons">
														<a href="#" class="iconform editicon" data-type="edit" data-targetype="{target}" data-ctarget="{id}"></a>
														<a href="#" class="uniticon fullscreen btn-success" data-type="openStudio" data-targetype="{target}" data-ctarget="{id}"></a>
										            </div>
										        </div>
										        <ol class="list-unstyled subRowData mjs-nestedSortable-no-nesting"></ol>
		</li>
</script> 
<script type="template" data-template="options">
      <div data-fieldtype="input">
                            <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5 p-l-40">
                                         <label  for="{key}">{title}</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <input type="text" class="form-control " placeholder="{title}" value="{value}" name="{key}" id="{key}" data-html="{key}" data-key="{keytype}" {dataattr} >
                                    </div>
              </div>
      </div>
      <div data-fieldtype="select">
                 <div class="row b-b-1" >
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5 p-l-40">
                                         <label  for="{key}">{title}</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="{key}"  class="form-control customselect "  data-style="btn-black" data-html="{key}"  data-selector="{key}" data-key="{keytype}" {dataattr} title="{title}">
                                           {option}
                                          </select>
                                    </div>
                </div>
      </div>
      <div data-fieldtype="minmax">
                           <div class="row" {dataattr}>
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5">
                                        
                                    </div>
                                    <div class="col-xs-6 col-lg-2 p-t-10 p-b-10 m-t-5">
                                        <label> Min. Value</label>
                                    </div>
                                    <div class="col-xs-1 p-t-10 p-b-10">
                                         <input type="text" class="form-control" placeholder="01"  >
                                    </div>
                                    <div class="col-xs-6 col-lg-2 p-t-10 p-b-10 m-t-5">
                                        <label> Max. Value</label>
                                    </div>
                                    <div class="col-xs-1 p-t-10 p-b-10">
                                         <input type="text" class="form-control " placeholder="99"  >
                                    </div>
                                </div>
      </div>
      
      <div class="row hide" data-validationfielter="custom">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Validation 1</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="validation"  class="form-control customselect "  data-style="btn-black" data-html="option" data-key="validation" data-selector="validation" title="Select validation">
                                            <option value="numeric" >Numeric</option>
                                            <option value="email" >Email</option>
                                            <option value="url" >URL</option>
                                        </select>
                                    </div>
                                </div>
                                
</script> 
<script type="template" data-template="functions">
                        <!-- Editable -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0 hide">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a  href="#" class="iconstudio check_icon viewicon m-r-5" > <i class="fa fa-check" aria-hidden="true"></i> </a> Mark all classes Editable </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="allClassesEditable" checked="checked" data-html="alleditable"  type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                        </div>
                        <!-- end Editable --> 
                        
						 <!-- Sources -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0" data-role="sources" data-sourcestype="costom">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#sources_file" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Sources </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="sources_file" checked="checked" data-html="editable" data-key="list_source" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="sources_file">
                              
									<div class="row ">
										<div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
											<label  for="enableRequired"> List Sources</label>
										</div>
										<div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
											<select  class="form-control customselect" name="sources"  data-style="btn-black" data-html="source_type" data-key="info"  data-subkey="jsf" data-selector="list_source" >
												<option value="custom" >Manual</option>
												<option value="read_from_path" >URL</option>
												<option value="upload_source_file" >Upload Source file</option>
												<option value="get_by_shortcode" >Get By Shortcode</option>
											</select>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
											<label  for="enableRequired"> </label>
										</div>
										<div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10 source_files">

											<div class="input-group " data-list-source-option="custom">
												<textarea class="form-control text-left" placeholder="" name="sources_custom"   data-list-source-option-type="radio-custom" data-html="list_source_manual" data-key="info"  data-subkey="jsf" >1|Radio 1
						2|Radio 2
						3|Radio 3
												</textarea>
											</div>

											<div class="input-group hide" data-list-source-option="read_from_path">
												<input type="text" class="form-control "  name="sources_read_from_path" placeholder=""  data-list-source-option-type="radio-url" data-html="list_source_url" data-key="info"  data-subkey="jsf">
											</div>
											<div class="input-group hide" data-list-source-option="upload_source_file">
												<input type="text" class="form-control upload_file_ele" readonly data-list-source-option-type="radio-upload" data-html="list_source_upload" data-key="info" name="sources_upload_source_file"  data-subkey="jsf">
												<label class="input-group-btn"> <span class="btn btn-primary upload_file_ele_btn"> Upload
													<input type="file" style="display: none;" multiple>
													</span> </label>
											</div>

											<div class="input-group hide" data-list-source-option="get_by_shortcode">
												<input type="text" class="form-control " name="sources_get_by_shortcode" placeholder=""  data-list-source-option-type="radio-get_by_shortcode" data-html="list_source_get_by_shortcode" data-key="info"  data-subkey="jsf">
											</div>
										</div>
									</div>
                            </div>
                        </div>
                        <!-- end Sources --> 

						
						 
						
						
                     
                         
                        <!-- end Error Messages --> 
                        
                        <!-- Error Messages -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#error_messages" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Error Messages </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="error_messages" checked="checked" data-html="editable" data-key="errormessage" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="error_messages">
                                <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5 p-l-30">
                                        <div class="customelement">
                                            <input type="checkbox" name="errormessage" checked="checked" id="errormessage" data-cssenable="editable" data-getcontainer="errormessage" data-key="errormessage" >
                                            <label  for="errormessage">Messages 1</label>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <input type="text" class="form-control " placeholder="Message Here" name="errormessage" id="errormessage" data-html="message" data-key="errormessage" >
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- end Error Messages --> 
						
						 
                        
                        <!-- Validation -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0" data-role="validation">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#validationclp" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Validation </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="validationclp" checked="checked" data-html="editable" data-key="validation" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="validationclp">
                                <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Validation Type</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="validation"  class="form-control customselect"  data-style="btn-black" data-html="validationtype" data-key="validation" data-selector="type" data-show="customvalidation" title="Select validation">                 <option value="validation">Normal Validation</option>
                                            <option value="custom" >Custom</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="hide" data-role="customvcontainer" data-show-customvalidation="custom">
                                
                                </div>                                
                                <div class="row hide" data-show-customvalidation="custom">
                                     <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 pull-right">
                                        <button type="button" class=" btn btn-block uploadButton" data-actions="addvalidations">Add Validation</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Validation --> 
                        
                       

                        <!-- Sources Sippiner -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0" data-role="sources" data-sourcestype="sippiner">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> 
                                <span class=" pull-left"> 
                                    <a data-toggle="collapse" href="#sources_sippiner_file" class="iconstudio viewicon m-r-5" data-viewpopup="container"> 
                                        <i class="fa fa-angle-down" aria-hidden="true"></i> 
                                    </a> Sources 
                                </span>
                                <span class=" m-l-10 pull-right">
                                    <label class="switch switch-flat switch-button">
                                        <input class="switch-input" data-switch="sources_sippiner_file" checked="checked" data-html="editable" data-key="list_source" type="checkbox" />
                                        <span class="switch-label" data-on="On" data-off="Off"></span> 
                                        <span class="switch-handle "></span> 
                                    </label>
                                </span> 
                                <span class=" pull-right"> <a href="#" class="iconstudio btn_code iconnew add_item btn-color-blue"> </a></span> 
                                
                            </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="sources_sippiner_file">
                                <div class="row">
                                    <div class="col-xs-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label> Min. Value</label>
                                    </div>
                                    <div class="col-xs-2 p-t-10 p-b-10">
                                         <input type="text" class="form-control " placeholder="01"  >
                                    </div>
                                    <div class="col-xs-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label> Max. Value</label>
                                    </div>
                                    <div class="col-xs-2 p-t-10 p-b-10">
                                         <input type="text" class="form-control " placeholder="99"  >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label> Step</label>
                                    </div>
                                    <div class="col-xs-2 p-t-10 p-b-10">
                                         <input type="text" class="form-control " placeholder="01"  >
                                    </div>
                                    <div class="col-xs-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label> Decimal</label>
                                    </div>
                                    <div class="col-xs-2 p-t-10 p-b-10">
                                         <input type="text" class="form-control " placeholder="02"  >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Sources Sippiner --> 

                        <!-- Sources Date -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0" data-role="sources" data-sourcestype="date">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#sources_date_file" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Sources </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="sources_date_file" checked="checked" data-html="editable" data-key="list_source" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="sources_date_file">
                                <div class="row ">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Date Format</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="list_source_date"  class="form-control customselect"  data-style="btn-black" data-html="list_source_date" data-key="field" data-selector="list_source_date" title="Select Date">
                                            <option value="dd_mm_yy" >DD/MM/YY</option>
                                            <option value="dd_mm_yyyy" >DD/MM/YYYY</option>
                                            <option value="mm_dd_yy" >MM/DD/YY</option>
                                            <option value="mm_dd_yyyy" >MM/DD/YYYY</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Language</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="list_source_language"  class="form-control customselect"  data-style="btn-black" data-html="list_source_language" data-key="field" data-selector="list_source_language" title="Select Language">
                                            <option value="english" >English</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Sources Date--> 
                        
                        <!-- Target -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#target_clps" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Target </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="target_clps" checked="checked"  data-html="editable" data-key="target" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="target_clps">
                                <div class="row b-b-1">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Field Target</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="target" name="target_type" class="form-control customselect" data-style="btn-black" data-html="target" data-key="target" data-selector="target" title="Select Target">
                                            <option value="formtarget" >Target is same as the form target</option>
                                            <option value="specified">Specified Target</option>
											<option value="custom">Custom Target</option>
                                        </select>
                                    </div>
                                </div>
								<div class="row b-b-1 hide" data-target-option="specified">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Table</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="table_column"  name="target_table" class="form-control customselect" data-style="btn-black" data-html="specified_table" data-key="target" data-selector="specified_table"  title="Select Table">
                                            <option value="user_profile" >User Profile</option>
                                        </select>
                                    </div>
                                </div>
								<div class="row b-b-1 hide" data-target-option="specified">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Column</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <select id="traget_column"  class="form-control customselect" data-style="btn-black" data-html="specified_column" data-key="target" data-selector="specified_column"  name="target_column" title="Select Column">
                                            <option value="id" >id</option>
                                            <option value="first_name">first_name</option>
                                            <option value="last_name">last_name</option>
                                            <option value="avatar">avatar</option>
                                            <option value="cover">cover</option>
                                            <option value="meta_data">meta_data</option>
                                            <option value="created_at">created_at</option>
                                            <option value="updated_at">updated_at</option>
                                        </select>
                                    </div>
                                </div>
								<div class="row b-b-1 hide" data-target-option="custom">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Table</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <input type="text" class="form-control " placeholder="Custom Table" name="customtarget_table" id="custom_option" data-html="custom" data-key="target" >
                                    </div>
                                </div>
								
								<div class="row b-b-1 hide" data-target-option="custom">
                                    <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label  for="enableRequired"> Column</label>
                                    </div>
                                    <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                                        <input type="text" class="form-control " placeholder="Custom Column" name="customtarget_column" id="custom_optionColumn" data-html="customcolumn" data-key="target" >
                                    </div>
                                </div>
								
                            </div>
							
                        </div>
                        <!-- end Target --> 
                        
                        <!-- filtered Field -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a  href="#" class="iconstudio check_icon viewicon m-r-5" > <i class="fa fa-check" aria-hidden="true"></i> </a> This field data can be filtered </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="textShadowcontainer" checked="checked" name="filtered" data-html="filtered" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                        </div>
                        <!-- end filtered Field --> 
                        
                        <!-- Repeated Field -->
                        <div class="row formrow form-horizontal m-l-0 m-r-0 m-b-10" data-role="repeated">
                            <div class="col-xs-12 studio-collapse-header p-t-5  p-b-5"> <span class=" pull-left"> <a data-toggle="collapse" href="#repeated_clps" class="iconstudio viewicon m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Repeated Field </span> <span class=" m-l-10 pull-right">
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="repeated_clps" checked="checked" data-html="editable" data-key="repeat" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                </span> </div>
                            <div class="col-xs-12 studio-collapse-toobar collapse in" id="repeated_clps">
                                <div class="row b-b-1">
                                    <div class="col-xs-6 col-lg-3 p-t-10 p-b-10 m-t-5  p-l-40">
                                        <label> No. Of Repeat</label>
                                    </div>
                                    <div class="col-xs-2 p-t-10 p-b-10">
                                        <select id="repeat" class="form-control customselect" name="repeat" data-style="btn-black" data-html="no" data-key="repeat" data-selector="repeat">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-4 p-t-10 p-b-10 m-t-5 ">
                                        <label> Time</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Repeated Field --> 
</script> 
<a href="#" class="btn btn-default btn-sm hide" id="icons">Edit</a>
<input class="form-control hide geticonseting" >

<input class="form-control hide" id="ajaxblade" data-url="/admin/updatefield" >

<style>
  .fcontainer > .row{ width:100%; }
  .fcontainer .input-group .form-control{ float:none}
  .fcontainer .input-group .input-group-addon{  width:auto
	 
	  
</style>
<style>
        .editcontianer {
            position: relative;
            width: 100%;
            height: 300px;
        }

        #editorexportcss, #editorcsscontianer, #editortextcontianer, #htmleditor, .editorcss, #bladeeditor {
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

@section('CSS')

{!! HTML::style('/resources/assets/js/bootstrap-star-rating/css/star-rating.min.css') !!}
{!! HTML::style('/resources/assets/js/bootstrap-touchspin/css/jquery.bootstrap-touchspin.css') !!}
{!! HTML::style('/app/Modules/Studios/Resources/Views/assets/fields-builder2/css/field-builder.css?v=0.7') !!}

{!! HTML::style('/resources/assets/js/flatpickr-date-picker/flatpickr.min.css') !!} 
<!-- Telephone Field --> 
{!! HTML::style('/resources/assets/js/intl-tel-input/css/intlTelInput.css') !!} 
<!-- Tag Editor Field --> 
{!! HTML::style('/resources/assets/js/tag-editor/jquery.tag-editor.css') !!}
{!! HTML::style('/resources/assets/js/bootstrap-slider/css/bootstrap-slider.min.css') !!}

<style id="savedcss" data-role="savedcss">
</style>
<style>
	 .blade-inputsetting { border:solid 5px #383838; background: #383838; padding: 5px; color: #FFF;}
	 .blade-inputsetting input{ border-radius:5px; padding: 5px; border:solid 1px #FFF; color: #000;  width: 90%;}
	 .blade-inputsetting button {border-radius:5px; padding: 5px 0; border:solid 1px #5e5a5b; color: #000; background: #5e5a5b; width: 25px;}
	 .blade-radiosetting { border:solid 5px #212121; background: #383838; padding: 5px; color: #FFF;}
	 	
	.blade-radiosetting  input[type="radio"] {
  display: none;
}

.blade-radiosetting  input[type="radio"] + label {
  color: #FFF;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.blade-radiosetting  input[type="radio"] + label:before {
  display: inline-block;
  width: 19px;
  height: 19px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  -moz-border-radius: 50%;
  border-radius: 50%;
	content: ' '
}

.blade-radiosetting  input[type="radio"] + label:before {
  background-color: #000;
}

.blade-radiosetting  input[type="radio"]:checked + label:before{
  background-color: #CC3300;
}

.blade-radiosetting  input[type="radio"] + label:before,
.blade-radiosetting  input[type="radio"]:checked + label:before {
  -webkit-transition: background-color 0.4s linear;
  -o-transition: background-color 0.4s linear;
  -moz-transition: background-color 0.4s linear;
  transition: background-color 0.4s linear;
}
	
	 .blade-radiosetting button {border-radius:50%; padding: 0px 0; border:solid 1px #5e5a5b; color: #000; background: #5e5a5b; width: 20px;}
</style>
@stop

@section('JS')
  {!! HTML::script('/resources/assets/js/ace-editor/ace.js') !!}

{!! HTML::script('/resources/assets/js/bootstrap-star-rating/js/star-rating.min.js') !!}
{!! HTML::script('/resources/assets/js/bootstrap-touchspin/js/jquery.bootstrap-touchspin.js') !!} 
{!! HTML::script('/resources/assets/js/bootstrap-slider/js/bootstrap-slider.min.js') !!} 
{!! HTML::script('/resources/assets/js/nestedSortable/jquery.mjs.nestedSortable.js') !!}
{!! HTML::script('/resources/assets/js/underscore-min.js') !!} 

{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/js/studio-plugin-new.js') !!} 
{!! HTML::script('/resources/assets/js/icon-plugin.js?v=0.50') !!} 
{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/fields-builder2/js/class-field-blademaker.js?v=49') !!} 

<!-- Telephone Field --> 
{!! HTML::script('/resources/assets/js/intl-tel-input/js/intlTelInput.min.js') !!} 
<!-- Tag Editor Field --> 
{!! HTML::script('/resources/assets/js/tag-editor/jquery.caret.min.js') !!}
{!! HTML::script('/resources/assets/js/tag-editor/jquery.tag-editor.min.js') !!} 
<!-- date and time picker --> 
{!! HTML::script('/resources/assets/js/flatpickr-date-picker/flatpickr.min.js') !!}

@stop