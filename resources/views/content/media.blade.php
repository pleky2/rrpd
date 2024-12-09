@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('upload/images/logo/bg-' . Request::segment(2) . '.jpeg') }}" alt="" style="max-height: 400px;object-fit: cover;">
    </figure>
    <figcaption>
      <h1><b>Media</b></h1>
    </figcaption>
  </div>

  <div class="wrapper media">
    <h4>Berita Terkait</h4>
    <div class="media-wrapper">
      @foreach ($media as $item)
        <a href="{{ url('media-detail/' .  Request::segment(2) . '/' . $item->slug) }}">
          <div class="card-media">
            <div class="img-wrapper">
              <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
            </div>

            <div class="content">
              <span>{{ date('d F Y', strtotime($item->created_at)) }} | {{ date('H:i', strtotime($item->created_at)) }} WIB</span>
              <p>{{ $item->title }}
              </p>
            </div>
          </div>
        </a>
      @endforeach
    </div>
  </div>
</section>
@endsection