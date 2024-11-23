@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h1><b>{{ __('content.mitra') }}</b></h1>
    </figcaption>
  </div>
  <div class="inner-content">
    <div class="wrapper content-pages mitra-wrapper">
      <div class="mitra-slider">
        <div class="slider-item">
          <h4 class="title">PLTGU dan PLTU</h4>
          <div class="slider-grid">
            <img src="{{ url('upload/images/mitra/Logo-WIKA.png') }}" />
          </div>
        </div>
        <div class="slider-item">
          <h4 class="title">PLTS</h4>
          <div class="slider-grid">
            <img src="{{ url('upload/images/mitra/Logo Winner.jpeg') }}" />
            <img src="{{ url('upload/images/mitra/Logo SUN.jpeg') }}" />
            <img src="{{ url('upload/images/mitra/Logo Syntek.jpeg') }}" />
            <img src="{{ url('upload/images/mitra/Logo HM Sampoerna.jpeg') }}" />
            <img src="{{ url('upload/images/mitra/Logo Emits.jpeg') }}" />
            <img src="{{ url('upload/images/mitra/Logo UNIMA.jpeg') }}" />
          </div>
        </div>
        <div class="slider-item">
          <h4 class="title">BIOMASSA</h4>
          <div class="slider-grid">
            <img src="{{ url('upload/images/mitra/Logo Nestle.jpeg') }}" />
          </div>
        </div>
      </div>

      <div class="center mitra-tab">
        <div class="mitra-tab-item">
          <span>PLTGU & PLTU</span>
        </div>
        <div class="mitra-tab-item">
          <span>PLTS</span>
        </div>
        <div class="mitra-tab-item">
          <span>BIOMASSA</span>
        </div>
      </div>

    </div>


  </div>
</section>
@endsection