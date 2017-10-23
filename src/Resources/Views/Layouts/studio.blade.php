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
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="/resources/assets/js/jquery-2.1.4.min.js"></script>

    <script src="/resources/assets/js/jqueryui/js/jquery-ui.min.js"></script>

    @yield('CSS')
    @stack('css')
</head>
<body>
@include('studios::_partial.header')
@yield('content')

@include('studios::_partial.footer')
<input type="hidden" data-call-back value="{!! $call_back or null !!}">
<script src="/resources/assets/js/bootstrap.min.js"></script>
<script src="/resources/assets/js/admin.js?v=6.0"></script>
<script src="/resources/assets/js/bootbox/js/bootbox.min.js"></script>
{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/js/main.js?v=80') !!}
@yield('JS')
@stack('javascript')
</body>

</html>