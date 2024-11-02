@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h2>Mitra</h2>
    </figcaption>
  </div>
  <div class="inner-content">
    <div class="wrapper  content-pages mitra-wrapper">
      <div class="mitra-slider">
        <div class="slider-item">
          <div class="slider-grid">
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
            <img src="{{ asset('assets/images/logo_home.png') }}" />
          </div>
        </div>
        <div class="slider-item">
          <div class="slider-grid">
            <img src="{{ asset('assets/images/gh.png') }}" />
            <img src="{{ asset('assets/images/gh.png') }}" />
            <img src="{{ asset('assets/images/gh.png') }}" />
            <img src="{{ asset('assets/images/gh.png') }}" />
          </div>
        </div>
        <div class="slider-item">
          <div class="slider-grid">
            <img src="{{ asset('assets/images/enpos.png') }}" />
            <img src="{{ asset('assets/images/enpos.png') }}" />
            <img src="{{ asset('assets/images/enpos.png') }}" />
            <img src="{{ asset('assets/images/enpos.png') }}" />
          </div>
        </div>
      </div>

      <div class="slider-dots">
        <div class="tab">Tab 1</div>
        <div class="tab">Tab 2</div>
        <div class="tab">Tab 3</div>
      </div>
    </div>


  </div>
</section>
@endsection