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
                <img data-preview="studio" data-role="classview" src="https://www.w3schools.com/css/img_fjords.jpg" style="height: 500px; width: 500px;">
                <textarea name="json_data" class="form-control" data-export="json" hidden="hidden"
                          style="margin-top:100px">
                    {!! $data_edit['jsonData'] or null !!}
                </textarea>
                          <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                <textarea name="less_data" class="form-control hide" data-export="css" hidden="hidden"></textarea>
            </div>
            <div class="col-xs-12 col-sm-6 formoptions textBuilderEditor ">
                <!-- Basic -->
                <!-- Animation -->
                <div class="row formrow form-horizontal">
                    <div class="col-xs-12 studio-collapse-header p-t-10 p-b-10">
                        <span class=" pull-left">
                            <a data-toggle="collapse" href="#animationcontainer" class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                            </a> Filter
                        </span>
                       <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                    </div>
                    <div class="col-xs-12 studio-collapse-toobar collapse in" id="animationcontainer">
                       <div class="row p-15" data-role="filterGroup">
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Blur</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="blur" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="px" data-slide-min="0" data-slide-max="10" data-slide-step="1" data-slide-val="0"> </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Sepia</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="sepia" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="%" data-slide-min="0" data-slide-max="100" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Grayscale</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="gr" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="%" data-slide-min="0"  data-slide-max="100" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>

                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Saturate</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="st" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="%" data-slide-min="0" data-slide-max="500" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Hue-rotate</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="hue" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="deg" data-slide-min="0" data-slide-max="360" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Invert</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="inv" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="%" data-slide-min="0" data-slide-max="100" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Brightness</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="br" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="%" data-slide-min="0" data-slide-max="200" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 p-b-10">
                              <div class="col-sm-3"><span class="iconform arrowicon"></span> Contrast</div>
                              <div class="col-sm-8 p-t-10">
                                <div id="cont" class="fullSliderw settingSlider greenSlider m-t-5" data-css="filter" data-css-after="%" data-slide-min="0" data-slide-max="200" data-slide-step="10" data-slide-val="0"> </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
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
{!! HTML::script('app/Modules/Studios/Resources/Views/assets/js/image-filter-studio.js') !!}
@endpush