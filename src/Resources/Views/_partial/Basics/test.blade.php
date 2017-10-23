
<div class="menuBuilder textBuilderPreview"> 
    <section class="container-fluid">
        <div class="row " id="builderContain">
            <div class="col-xs-12 col-sm-6 previewAray" class="text-center">
                <div class="classnamedetail">
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
                
                    <div class="" data-preview="studio" data-role="classview">Lorem ipsum dolor sit amet</div>
                
                <textarea name="json_data" class="form-control" data-export="json" hidden="hidden"
                          style="margin-top:100px">{!! $data_edit['jsonData'] or '{"css":{"font-size":"41px","text-shadow":"2px 2px 0px #ff0000, -2px 2px 0px #fc0000, 2px -2px 0px #ff0000, -2px -2px 0px #ff0000, 0px 0px 15px #000000","color":"#ffffff"},"textShadow":{},"class":"classname","savedcss":".classname{font-size:41px; text-shadow:2px 2px 0px #ff0000, -2px 2px 0px #fc0000, 2px -2px 0px #ff0000, -2px -2px 0px #ff0000, 0px 0px 15px #000000; color:#ffffff; }","classname":".classname"}' !!}</textarea>
                          <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                <textarea name="less_data" class="form-control hide" data-export="css" hidden="hidden"></textarea>
            </div>
            <div class="col-xs-12 col-sm-6 formoptions textBuilderEditor ">

                
                <!-- new style for text studio -->
                <!-- Basic -->
                <div class="row formrow form-horizontal">
                    <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5">
                            <span class="pull-left">
                                <a data-toggle="collapse" href="#collapseBasic"  class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a> Basic
                            </span>
                            <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                             <button type="button" class="basicsBtn pull-right m-r-10" data-toggle="modal" data-target="#selectexistingstyle">Use basic style</button>
                    </div>
                    
                    <div class="col-xs-12 studio-collapse-toobar collapse in" id="collapseBasic" >
                        <div class="row b-b-1">
							<div class="col-xs-12 col-md-6 col-lg-4 p-t-10 p-b-10 basic-font-color">
									<div class="pull-left col-xs-9 p-l-0 p-r-0  ">
											<select data-selector="fontfamily"  data-css="font-family" class="customselect form-control" data-style="class-style-menu">
													<option value="Georgia, serif">Georgia, serif</option>
													<option value="Times New Roman">Times New Roman</option>
													<option value="Arial, Helvetica, sans-serif">Arial</option>
													<option value="Helvetica, sans-serif">Helvetica</option>
													<option value="Tahoma, Geneva, sans-serif">Tahoma</option>
													<option value="Trebuchet MS, Helvetica, sans-serif">Trebuchet MS</option>
													<option value="Verdana, Geneva, sans-serif">Verdana</option>
											</select>
									</div>
									<div class="pull-right col-xs-3 p-l-10  p-r-0">
											<span class="input-group color-picker input-color input-color-inblock" data-textcolor="color">
											<input type="text" class="form-control hide" id="" value="#000" name="" data-css="color">
											<span class="input-group-addon"><i></i></span> </span>
									</div>
							</div>
							<div class="col-xs-12 col-md-6 col-lg-3  p-t-10 p-b-10 text-style-tool ">
									<div class="width100">
									<div class="spinner letter-spacing">
											<label for="font-size" class="sr-only">font-size</label>
											<input type="text" value="12" data-css="font-size" data-html="font-size" data-after="px" id="font-size" class="form-control">
											<div class="input-group-btn-vertical">
													<button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
													<button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
											</div>
									</div>
									</div>
							</div>
							<div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 basic-font-weight">
									<a href="#" class="btn btn-default bold-button" data-actioncss="font-weight" data-val="bold">B</a> <a href="#" class="btn btn-default italic-button" data-actioncss="font-style" data-val="italic">I</a>
							</div>
							<div class="col-xs-6 col-md-6 col-lg-2  p-t-10 p-b-10 text-decoration-style">
									<select class="form-control customselect" data-style="class-style-menu" data-css="text-decoration"
						data-selector="textdecoration">
											<option value="none">none</option>
											<option value="blink" selected="selected">blink</option>
											<option value="line-through">line-through</option>
											<option value="overline">overline</option>
											<option value="underline">underline</option>
									</select>
							</div>
					</div>        
                    
                        <div class="row">
                            <div class="col-xs-12 col-md-12 col-lg-6 p-t-10 p-b-10 text-style-tool basic-letter-spacing">
                                        
										
										<div class="spinner line-height col-xs-6">
                                                <label for="AngleInput" class="sr-only">line-height</label>
                                                <input type="text" value="12" data-css="line-height" data-html="line-height" data-after="px" id="line-height" class="form-control">
                                                <div class="input-group-btn-vertical">
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                </div>
                                        </div>
                                    

                                    
                                        <div class="spinner word-spacing col-xs-6">
                                                <label for="letter-spacing" class="sr-only">letter-spacing</label>
                                                <input type="text" value="0" data-css="letter-spacing" data-html="letter-spacing" data-after="px" id="letter-spacing" class="form-control">
                                                <div class="input-group-btn-vertical">
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                </div>
                                        </div>
                                    

                                    

                            </div>
                            <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10  text-style-tool basic-text-transform">
                               <div class="text-transform">
                                    <select class="form-control customselect"  data-css="text-transform"
                                        data-selector="texttransform"  data-style="class-style-menu">
                                        <option value="none">none</option>
                                        <option value="capitalize" selected="selected">capitalize</option>
                                        <option value="lowercase">lowercase</option>
                                        <option value="uppercase">uppercase</option>
                                    </select>
                                </div>    
                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-3 p-t-10 p-b-10 text-tool-align ">
                                <label for="textalign" class="sr-only">Text Align</label>
                                <select class="form-control customselect"  data-css="text-align"
                                    data-selector="textalign"  data-style="class-style-menu">
                                    <option data-icon="glyphicon-align-left" value="left"></option>
                                    <option data-icon="glyphicon-align-center" value="center"></option>
                                    <option data-icon="glyphicon-align-right" value="right"></option>
                                    <option data-icon="glyphicon-align-justify" value="justify"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                                
                </div>

                <!-- Shadow -->
                <div class="row formrow form-horizontal">
                    <div class="col-xs-12 studio-collapse-header p-t-5 ">
                            <span class="pull-left">
                                <a data-toggle="collapse" href="#textShadowcontainer" class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a> Shadow
                            </span>
                            <span class=" m-l-10 pull-left"> 
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="textShadowcontainer" data-cssexist="text-shadow" type="checkbox" />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> 
                                    <span class="switch-handle "></span> 
                                </label>
                            </span>
                            <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                            <a href="#" class="iconstudio viewicon m-r-5 pull-right" data-roletemplate="textshadow"><i class="fa fa-plus" aria-hidden="true"></i></a>
                            <button type="button" class="basicsBtn pull-right m-r-10" data-buttonrole="editpopup" >Use basic shadow</button>
                    </div>
                    <div class="col-xs-12 studio-collapse-toobar collapse in" data-insettemp="textshadow" id="textShadowcontainer">
                                
                    </div>
                </div>

                <!-- Animation -->
                <div class="row formrow form-horizontal">
                    <div class="col-xs-12 studio-collapse-header p-t-5 ">
                            <span class=" pull-left">
                                <a data-toggle="collapse" href="#animationcontainer" class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a> Animation
                            </span>
                            <span class=" m-l-10 pull-left"> 
                                <label class="switch switch-flat switch-button">
                                    <input class="switch-input" data-switch="animationcontainer" data-cssexist="animationclass" type="checkbox"  />
                                    <span class="switch-label" data-on="On" data-off="Off"></span> 
                                    <span class="switch-handle "></span> 
                                </label>
                            </span>
                            <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                            <button type="button" class="basicsBtn pull-right m-r-10"  data-toggle="modal" data-target="#selectexistingstyle">Use basic animation</button>
                    </div>
                    <div class="col-xs-12 studio-collapse-toobar collapse in" id="animationcontainer">
                        <div class="row">
                            <div class="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5">
                                  Animation Class
                            </div>
                            <div class="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                            <select id="Animationclass" class="form-control customselect" data-style="class-style-menu" data-selector="animationclass" data-css="animationclass">
                                <option value=".ani-swing">ani-swing</option>
                                <option value=".ani-shake">ani-shake</option>
                                <option value=".ani-rubberband">ani-rubberband</option>
                            </select>
                                  
                            </div>
                            <div class="col-xs-12 col-md-12 col-lg-3 p-t-10 p-b-10">
                                <a href="#" class="iconform editicon" data-editpopup="container"></a> 
                                <a href="#" class="iconform viewicon" data-viewpopup="container"></a> 
                                <a href="#" class="iconform addicon" data-addpopup="container"></a>
                            </div>
                        </div>        
                    </div>
                </div>
               <!-- end new style for text studio -->
            </div>
        </div>
    </section>
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


<script type="template" data-template="listingclasses">
     <li data-role="listitem" data-prefix="{prefix}" data-name="{name}" data-cssdata='{data}' data-classpath='{classpath}' data-realclass="{realClass}" data-stype="{styletype}" data-css="{type}" data-selectclass=".{name}">    <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
</script>
@push('css')
 {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/text/css/text-studio.css?v=3.20') !!}
@endpush

@push('javascript')
{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/text/js/class-text-builder.js?v=3.40') !!}

@endpush