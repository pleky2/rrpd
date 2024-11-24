@extends('template.index')

@section('content')
<section class="middle kerjasama">

  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h1><b>Kerjasama</b></h1>
    </figcaption>
  </div>

  <div class="wrapper kerjasama-wrapper">

    @foreach ($colab as $item)
        <div>
          <div class="card">
            <div class="img-wrapper">
              <img src="{{ url('upload/images/'.$item->img) }}" />
            </div>
          </div>
          <h4>{{ $item->title }}</h4>
          {!! $item->description !!}
        </div>
    @endforeach
    
  </div>
</section>
@endsection