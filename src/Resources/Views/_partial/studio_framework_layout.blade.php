<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>Studio</title>
    <link media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/admin.css?v=0.392">
    <link media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/dashboard-css.css?v=0.2">


    <link id="stylecolor" media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/admin-theme.css?v2.91">
    <link href='/resources/assets/fonts/FontAwesome/font-awesome.css' rel='stylesheet' />
    <link href='/resources/assets/fonts/BBIcons/bb-icons.css' rel='stylesheet' />
    {!! HTML::style('/resources/assets/js/bootstrap-select/css/bootstrap-select.min.css') !!}
    {!! HTML::style('/resources/assets/js/jquery.mCustomScrollbar/css/jquery.mCustomScrollbar.css') !!}
    {!! HTML::style('/resources/assets/js/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css') !!}
    {!! HTML::style('/resources/assets/js/animate/css/animate.css') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/css/styles.css?v=50') !!}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {!! \App\Modules\Studios\Models\Studios::linkAllCss() !!}
    {!! \App\Modules\Studios\Models\Studios::linkAllCssByType($type) !!}
    {!! \App\Modules\Studios\Models\Studios::linkAllCssByStudio($type,$studio) !!}
    <script src="/resources/assets/js/jquery-2.1.4.min.js"></script>

    <script src="/resources/assets/js/jqueryui/js/jquery-ui.min.js"></script>

    @yield('CSS')
    @stack('css')
</head>
<body>
@include('studios::_partial.header')
@yield('content')

<input data-pagetype="" value="p" type="hidden">
<input data-section="pagesection" value="elements" type="hidden">
<input data-classtypes="" value="normal" type="hidden">

<input type="hidden" id="builderStudio" value="basic">


    <style id="savedcss" data-role="savedcss">

    </style>

@include('studios::_partial.footer')
<input type="hidden" data-call-back value="{!! $call_back or null !!}">
<script src="/resources/assets/js/bootstrap.min.js"></script>
<script src="/resources/assets/js/admin.js?v=6.0"></script>
<script src="/resources/assets/js/bootbox/js/bootbox.min.js"></script>
{!! HTML::script('/resources/assets/js/jquery.mCustomScrollbar/js/jquery.mCustomScrollbar.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootbox/js/bootbox.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootbox/js/bootbox.min.js') !!}
    {!! HTML::script('/resources/assets/js/media-lightbox.js') !!}
    {!! HTML::script('/resources/assets/js/less.js') !!}
{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/js/main.js?v=80') !!}
{!! \App\Modules\Studios\Models\Studios::linkAllJs() !!}
{!! \App\Modules\Studios\Models\Studios::linkAllJsByType($type) !!}
{!! \App\Modules\Studios\Models\Studios::linkAllJsByStudio($type,$studio) !!}
 {!! HTML::script('/resources/assets/js/bootstrap-select/js/bootstrap-select.min.js') !!}
    
@yield('JS')
@stack('javascript')
</body>

</html>