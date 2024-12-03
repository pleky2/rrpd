@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h1><b>{{ __('content.mitra') }}</b></h1>
    </figcaption>
  </div>
  <div class="inner-content">
    <div class="wrapper content-pages mitra-wrapper">
      <div class="mitra-slider">
      @foreach ($mitra['tab'] as $tab)
        <div class="slider-item">
          <div class="slider-grid">
            @foreach($tab['detail_mitra'] as $item)
              <img style="max-width: 150px;" src="{{ url('upload/images/mitra/' . $item->img) }}" />
            @endforeach
          </div>
        </div>  
      @endforeach
      </div>

      <div class="center mitra-tab">
        @foreach ($mitra['tab'] as $tab)
          <div class="mitra-tab-item">
            <span>{{ $tab->description }}</span>
          </div>    
        @endforeach
      </div>

    </div>


  </div>
</section>
@endsection