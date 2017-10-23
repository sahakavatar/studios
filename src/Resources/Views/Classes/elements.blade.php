@extends('studios::Layouts.studio')
@section('content')


@if(View::exists("studios::$studioView"))
    @include("studios::$studioView")
    @endif
<input type="hidden" data-pagetype="" value="{!! $tag !!}">
<input type="hidden" data-section="pagesection" value="{!! $section !!}">
<input type="hidden" data-classtypes="" value="normal">
<input type="hidden" id="builderStudio" value="elements">
@if(isset($data_edit['id']))
    <input type="hidden" data-class-id value="{!! $data_edit['id'] or null!!}">
    <input type="hidden" data-studioedit="true" value="true">
@endif
@stop

@section('CSS')
    {!! HTML::style('/resources/assets/js/bootstrap-select/css/bootstrap-select.min.css') !!}
    {!! HTML::style('/resources/assets/js/jquery.mCustomScrollbar/css/jquery.mCustomScrollbar.css') !!}
    {!! HTML::style('/resources/assets/js/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css') !!}
    {!! HTML::style('/resources/assets/js/animate/css/animate.css') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/css/styles.css?v=50') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/text/css/text-studio.css?v=3.50') !!}
    <style id="savedcss" data-role="savedcss">

    </style>
@stop
@section('JS')
    {!! HTML::script('/resources/assets/js/bootstrap-select/js/bootstrap-select.min.js') !!}
    {!! HTML::script('/resources/assets/js/jquery.mCustomScrollbar/js/jquery.mCustomScrollbar.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootbox/js/bootbox.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootbox/js/bootbox.min.js') !!}
    {!! HTML::script('/resources/assets/js/media-lightbox.js') !!}
    {!! HTML::script('/resources/assets/js/less.js') !!}
    
    
    <script>
        $(document).ready(function () {
            $("body").on('change', '#builderStudio', function () {
                var value = $(this).val();
                window.location.href = window.location.pathname + "?tag=" + value;
            });
        })
    </script>
@stop