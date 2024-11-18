@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h1><b>{{ __('content.keunggulan') }}</b></h1>
    </figcaption>
  </div>
  <div class="superior">
    <div class="wrapper">
      <div class="row">
        @foreach ($super as $itemSuper)
          <div class="column">
            @if($itemSuper->img)
              <div class="img-wrapper">
                <img src="{{ url('assets/images/'.$itemSuper->img) }}">
              </div>
            @endif
            <h5>{{ $itemSuper->title }}</h5>
            <p>{{ $itemSuper->description }}</p>
          </div>    
        @endforeach
      </div>
    </div>
  </div>
</section>
@endsection