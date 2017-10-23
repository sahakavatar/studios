@extends('studios::Layouts.studio')
@section('content')


    @if(View::exists("studios::$studioView"))
        @include("studios::$studioView")
    @endif




    <input type="hidden" data-page="" value="{!! $type!!}">
    <input type="hidden" data-pagetype="" value="{!! $tag !!}">
    <input type="hidden" id="builderStudio" value="component">
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
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/css/styles.css?v=10') !!}

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


@stop