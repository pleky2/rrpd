@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h2>Media</h2>
    </figcaption>
  </div>

  <div class="wrapper">
    <div class="media-wrapper">
      <div class="card-media">
        <div class="img-wrapper">
          <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
        </div>

      </div>
    </div>
  </div>
</section>
@endsection