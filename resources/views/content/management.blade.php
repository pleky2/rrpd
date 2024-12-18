@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="banner-page center">
    <figure>
      <img class="header-title-menu" src="{{ asset('upload/images/logo/bg-' . Request::segment(1) . '-' . Request::segment(2) . '.png') }}" alt="">
    </figure>
    <figcaption>
      <h1 class="title-menu"><b>{{ __('content.manajemen') }}</b></h1>
    </figcaption>
  </div>
  <div class="inner-content">
    <div class="bg-top"><img src="{{ asset('assets/images/material/bg-top.svg') }}"></div>

    <div class="wrapper wrapper-small content-pages">
      <h3 style="text-align:center;"><b>{{ __('content.man_desc') }}</b></h3>
      <p style="text-align:center;">{!! __('content.man_desc_dua') !!}</p>
      <br>
      <br>
      <div class="center-text">
        <h3><b>{{ __('content.man_kami') }}</b></h3>
      </div>
      <br>
      <div class="grid-container" style="padding-bottom: 8px;">
        @if($manag)
          @foreach ($manag as $itemManag)
            <div class="grid-item">
              <div class="overlay-bg link">
                <h3>{{ $itemManag->name }}</h3>
                <p class="title">{{ $itemManag->title }}</p>
                <span>Lihat Profile</span>
              </div>
              <img src="{{ url('upload/images/'.$itemManag->img) }}" />
              <div class="title">
                <p><b>{{ $itemManag->name }}</b></p>
                <span>{{ $itemManag->title }}</span>
              </div>

              <div class="data-popup">
                <figure><img src="{{ url('upload/images/'.$itemManag->img) }}" alt=""></figure>
                <div class="text">
                  <h4><b>{{ $itemManag->name }}</b></h4>
                  <small>{{ $itemManag->title }}</small>
                  {!! $itemManag->history !!}
                </div>
              </div>
            </div>
          @endforeach
        @endif
      </div>
    </div>
</section>

<section class="popup" id="popup-bod">
  <div class="inner-popup overlay-text">
    <div class="close-popup"></div>
    <div class="content-popup content-pages">
    </div>
  </div>
</section>

@endsection