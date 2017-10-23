<div class="menuBuilder containerBuilderPreview">
    <section class="container-fluid" >
        <div class="row " id="builderContain">
            <div class="col-xs-12 col-sm-6 previewAray" class="text-center">
                <div class="classnamedetail">
                                <input type="text" name="title" class="form-control form-controlblack" value="classname" id="classname" data-role="classname" required>
                            </div>
                <div data-preview="container" data-print="demehtml">
                    <!--  Apply css class  -->
                    <div class="previewCol previewcsscontianer">
                        <div class="" data-role="classview">Container</div>
                    </div>
                </div>
                <textarea name="json_data" class="form-control" data-export="json" style="margin-top:140px;">{!! $data_edit['jsonData'] or null !!}</textarea>
                <textarea name="less_data" class="form-control" data-export="css"></textarea>
            </div>
            <div class="col-xs-12 col-sm-6 formoptions ">



                <div class="row formrow form-horizontal">
                    <div class="col-xs-12 studio-collapse-header p-t-10 p-b-10">
                            <span class=" pull-left">
                                <a data-toggle="collapse" href="#animationcontainer" class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a> Animation
                            </span>
                        <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                    </div>
                    <div class="col-xs-12 studio-collapse-toobar collapse in" id="animationcontainer">
                        <div class="row formrow form-horizontal">
                            <div class="form-group">
                                <div class="col-sm-3" for="animationname"><span class="iconform arrowicon"></span> Animation Name</div>
                                <div class="col-sm-6">
                                    <select  data-style="btn-black " data-css="animation-name" data-selector="animationname" class="form-control customselect">
                                        <option value="none">No Animation</option>
                                        <option value="bounce">bounce</option>
                                        <option value="flash">flash</option>
                                        <option value="pulse">pulse</option>
                                        <option value="rubberBand">rubberBand</option>
                                        <option value="shake">shake</option>
                                        <option value="headShake">headShake</option>
                                        <option value="swing">swing</option>
                                        <option value="tada">tada</option>
                                        <option value="wobble">wobble</option>
                                        <option value="jello">jello</option>
                                        <option value="bounceIn">bounceIn</option>
                                        <option value="bounceInDown">bounceInDown</option>
                                        <option value="bounceInLeft">bounceInLeft</option>
                                        <option value="bounceInRight">bounceInRight</option>
                                        <option value="bounceInUp">bounceInUp</option>
                                        <option value="bounceOut">bounceOut</option>
                                        <option value="bounceOutDown">bounceOutDown</option>
                                        <option value="bounceOutLeft">bounceOutLeft</option>
                                        <option value="bounceOutRight">bounceOutRight</option>
                                        <option value="bounceOutUp">bounceOutUp</option>
                                        <option value="fadeIn">fadeIn</option>
                                        <option value="fadeInDown">fadeInDown</option>
                                        <option value="fadeInDownBig">fadeInDownBig</option>
                                        <option value="fadeInLeft">fadeInLeft</option>
                                        <option value="fadeInLeftBig">fadeInLeftBig</option>
                                        <option value="fadeInRight">fadeInRight</option>
                                        <option value="fadeInRightBig">fadeInRightBig</option>
                                        <option value="fadeInUp">fadeInUp</option>
                                        <option value="fadeInUpBig">fadeInUpBig</option>
                                        <option value="fadeOut">fadeOut</option>
                                        <option value="fadeOutDown">fadeOutDown</option>
                                        <option value="fadeOutDownBig">fadeOutDownBig</option>
                                        <option value="fadeOutLeft">fadeOutLeft</option>
                                        <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                                        <option value="fadeOutRight">fadeOutRight</option>
                                        <option value="fadeOutRightBig">fadeOutRightBig</option>
                                        <option value="fadeOutUp">fadeOutUp</option>
                                        <option value="fadeOutUpBig">fadeOutUpBig</option>
                                        <option value="flip">flip</option>
                                        <option value="flipInX">flipInX</option>
                                        <option value="flipInY">flipInY</option>
                                        <option value="flipOutX">flipOutX</option>
                                        <option value="flipOutY">flipOutY</option>
                                        <option value="lightSpeedIn">lightSpeedIn</option>
                                        <option value="lightSpeedOut">lightSpeedOut</option>
                                        <option value="rotateIn">rotateIn</option>
                                        <option value="rotateInDownLeft">rotateInDownLeft</option>
                                        <option value="rotateInDownRight">rotateInDownRight</option>
                                        <option value="rotateInUpLeft">rotateInUpLeft</option>
                                        <option value="rotateInUpRight">rotateInUpRight</option>
                                        <option value="rotateOut">rotateOut</option>
                                        <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                                        <option value="rotateOutDownRight">rotateOutDownRight</option>
                                        <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                                        <option value="rotateOutUpRight">rotateOutUpRight</option>
                                        <option value="hinge">hinge</option>
                                        <option value="rollIn">rollIn</option>
                                        <option value="rollOut">rollOut</option>
                                        <option value="zoomIn">zoomIn</option>
                                        <option value="zoomInDown">zoomInDown</option>
                                        <option value="zoomInLeft">zoomInLeft</option>
                                        <option value="zoomInRight">zoomInRight</option>
                                        <option value="zoomInUp">zoomInUp</option>
                                        <option value="zoomOut">zoomOut</option>
                                        <option value="zoomOutDown">zoomOutDown</option>
                                        <option value="zoomOutLeft">zoomOutLeft</option>
                                        <option value="zoomOutRight">zoomOutRight</option>
                                        <option value="zoomOutUp">zoomOutUp</option>
                                        <option value="slideInDown">slideInDown</option>
                                        <option value="slideInLeft">slideInLeft</option>
                                        <option value="slideInRight">slideInRight</option>
                                        <option value="slideInUp">slideInUp</option>
                                        <option value="slideOutDown">slideOutDown</option>
                                        <option value="slideOutLeft">slideOutLeft</option>
                                        <option value="slideOutRight">slideOutRight</option>
                                        <option value="slideOutUp">slideOutUp</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row formrow form-horizontal">
                            <div class="form-group">
                                <div for="animationduration" class="col-sm-3"><span class="iconform arrowicon"></span> Animation Duration</div>
                                <div class="col-sm-8">
                                    <div class="fullSliderw settingSlider greenSlider m-t-5" data-css="animation-duration" data-css-after="s" data-slide-min="0" data-slide-max="10" data-slide-step="0.1" data-slide-val="1"> </div>
                                </div>
                            </div>
                        </div>
                        <div class="row formrow form-horizontal">
                            <div class="form-group">
                                <div for="animationdelay" class="col-sm-3"><span class="iconform arrowicon"></span> Animation Delay</div>
                                <div class="col-sm-8">
                                    <div class="fullSliderw settingSlider greenSlider m-t-5" data-css="animation-delay" data-css-after="s" data-slide-min="0" data-slide-max="10" data-slide-step="0.1" data-slide-val="0"> </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style id="savedcss" data-role="savedcss">
</style>
{!! HTML::style('/app/Modules/Studios/Resources/Views/Classes/container/css/container-studio.css?v=0.57') !!}
@push('javascript')
    <script src="/app/Modules/Studios/Resources/Views/assets/animation/js/class-animation-builder.js?v=6" type="text/javascript"></script>
@endpush

@push('styles')

@endpush