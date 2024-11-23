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

  <div class="wrapper media">
    <h4>Berita Terkait</h4>
    <div class="media-wrapper">
      <a href="bti/detail">
        <div class="card-media">
          <div class="img-wrapper">
            <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
          </div>
          <div class="chip">
            <span>Terbaru</span>
          </div>

          <div class="content">
            <span>17 Sep 2024 | 10:30</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit ipsum odit distinctio qui.
            </p>
          </div>
        </div>
      </a>
      <div class="card-media">
        <div class="img-wrapper">
          <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
        </div>
        <div class="chip">
          <span>Terbaru</span>
        </div>

        <div class="content">
          <span>17 Sep 2024 | 10:30</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit ipsum odit distinctio qui.</p>
        </div>
      </div>
      <div class="card-media">
        <div class="img-wrapper">
          <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
        </div>
        <div class="chip">
          <span>Terbaru</span>
        </div>

        <div class="content">
          <span>17 Sep 2024 | 10:30</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit ipsum odit distinctio qui.</p>
        </div>
      </div>
      <div class="card-media">
        <div class="img-wrapper">
          <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
        </div>
        <div class="chip">
          <span>Terbaru</span>
        </div>

        <div class="content">
          <span>17 Sep 2024 | 10:30</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit ipsum odit distinctio qui.</p>
        </div>
      </div>
    </div>
  </div>
</section>
@endsection