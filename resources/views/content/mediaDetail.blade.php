@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="wrapper-small">
    <h1>{{ $mediaDetail->title }}</h1>
    <div>{{ date('d F Y H:i', strtotime($mediaDetail->created_at)) }}</div>
    <div class="news-wrapper">
      <div class="news-image">
        <img src="{{ asset('assets/images/cover_w990_h480_hero-login.jpg') }}" alt="">
      </div>
      <p>{!! $mediaDetail->description !!}</p>
    </div>
  </div>
</section>
@endsection