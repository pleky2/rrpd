@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img class="header-title-menu" src="{{ asset('upload/images/logo/bg-' . Request::segment(1) . '-' . Request::segment(2) . '.jpeg') }}" alt="">
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