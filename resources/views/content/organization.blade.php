@extends('template.index')

@section('content')
<section class="middle gap-bottom">
    <div class="banner-page center">
      <figure>
        <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
      </figure>
      <figcaption>
        <h2>Struktur Organisasi</h2>
      </figcaption>
    </div>
    <div class="inner-content">
      <div class="bg-top"><img src="{{ asset('assets/images/material/bg-top.svg') }}"></div>

      <div class="wrapper wrapper-small content-pages">
        <figure class="org-img">
          <img src="{{ asset('assets/images/organization/org.png') }}" alt="">
        </figure>
      </div>
      
      
    </div>
  </section>
  @endsection