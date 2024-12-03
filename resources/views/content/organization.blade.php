@extends('template.index')

@section('content')
<section class="middle gap-bottom">
    <div class="banner-page center">
      <figure>
        <img src="{{ asset('upload/images/logo/bg-bti.jpeg') }}" alt="" style="max-height: 400px;">
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