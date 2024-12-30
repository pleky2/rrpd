@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img class="header-title-menu" src="{{ asset('upload/images/logo/bg-' . Request::segment(1) . '-' . Request::segment(2) . '.png') }}" alt="">
    </figure>
    <figcaption>
      <h1 class="title-menu"><b>Media</b></h1>
    </figcaption>
  </div>

  <div class="wrapper media">
    <h4>Berita Terkait</h4>
    <div class="media-wrapper">
      @foreach ($media as $item)
        <a href="{{ $item->url }}" target="_blank">
          <div class="card-media">
            <div class="img-wrapper">
              <img src="{{ url('upload/images/media/'.$item->img) }}" alt="">
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