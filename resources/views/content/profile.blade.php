@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img class="header-title-menu" src="{{ asset('upload/images/logo/bg-' . Request::segment(2) . '.png') }}" alt="">
    </figure>
    <figcaption>
      <h1 class="title-menu"><b>{{ __('content.tentang_kami') }}</b></h1>
    </figcaption>
  </div>
  <div class="inner-content">
    <div class="wrapper-small content-pages">
      {!! $about->description !!}
    </div>

    <div class="visi-misi">
      <figure class="bg"><img src="{{ asset('upload/images/logo/bg2-' . Request::segment(2) . '.jpeg') }}" alt="" style="object-fit: cover;"></figure>
      <div class="wrap-visimisi wrapper-small">
        <div class="wrap-visimisi__visi">
          <div class="wrap-img">
            <h3><b>Visi</b></h3>
          </div>
          {!! $about->visi !!}
        </div>

        <div class="wrap-visimisi__misi">
          <div class="wrap-img">
            <h3><b>Misi</b></h3>
          </div>

          {!! $about->misi !!}
        </div>
      </div>
    </div>


  </div>

  <div class="makna-logo">
    <div class="text-center">
      <h3><b>{{ __('content.makna_logo') }}</b></h3>
    </div>
    <div class="wrapper-small">
      <div class="row">
        <div class="column" style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 35px;
        ">
          <img src="{{ url('upload/images/logo/' . $about->logo) }}" alt="" style="
        width: 238px;
        margin-bottom: 20px;
        ">
          @if($about->logo_2)
        <img src="{{ url('upload/images/logo/' . $about->logo_2) }}" alt="">
      @endif
        </div>

      </div>

      {!! $about->desc_logo !!}
    </div>
  </div>


  <!-- <div class="wrap-map">
    <div class="text-center">
      <h3><b>Project Map</b></h3>
    </div>
    <div id="map_about"></div>
  </div> -->




</section>
@endsection