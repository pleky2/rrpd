@extends('template.index')

@section('content')
<section class="middle gap-bottom">
    <div class="banner-page center">
      <figure>
        <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
      </figure>
      <figcaption>
        <h1><b>{{ __('content.organ') }}</b></h1>
      </figcaption>
    </div>
    <div class="inner-content">
      <div class="wrapper wrapper-small content-pages">
        <figure class="org-img" style="justify-self: center;">
          <img src="{{ url('assets/images/organization/'.$organ->img) }}" alt="{{ $organ->title }}">
        </figure>
      </div>
      
      
    </div>
  </section>
  @endsection