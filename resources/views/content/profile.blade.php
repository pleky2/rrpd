@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('upload/images/logo/bg-bti.jpeg') }}" alt="">
    </figure>
    <figcaption>
      <h5>TENTANG KAMI</h5>
      <h2>Milestone</h2>
    </figcaption>
  </div>
  <div class="inner-content">
    <div class="wrapper-small content-pages">
      {!! $about->description !!}
    </div>

    <div class="visi-misi">
      <figure class="bg"><img src="https://sunenergy.id/images/content/bg-businessmodel.jpg" alt=""></figure>
      <div class="wrap-visimisi wrapper-small">
        <div class="wrap-visimisi__visi">
          <div class="wrap-img">
            <figure><img src="{{ asset('assets/images/cover_w66_h66_icon-vision.png') }}" alt=""></figure>
            <h3>Visi</h3>
          </div>
          {!! $about->visi !!}
        </div>

        <div class="wrap-visimisi__misi">
          <div class="wrap-img">
            <figure><img src="{{ asset('assets/images/cover_w66_h66_icon-mission.png') }}" alt=""></figure>
            <h3>Misi</h3>
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