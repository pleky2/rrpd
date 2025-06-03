@extends('template.index')

@section('content')
<section class="middle kerjasama">

  <div class="banner-page center">
    <figure>
      <img class="header-title-menu" src="{{ asset('upload/images/logo/bg-' . Request::segment(1) . '-' . Request::segment(2) . '.png') }}" alt="">
    </figure>
    <figcaption>
      <h1 class="title-menu"><b>{{ __('content.kerjasama') }}</b></h1>
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