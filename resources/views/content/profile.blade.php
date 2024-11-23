@extends('template.index')

@section('content')
<section class="middle">
  <div class="inner-content">
    <div class="wrapper-small content-pages">
      <figure class="img-middle"><img src="{{ asset('assets/images/about/profile.jpg') }}" alt="">
      </figure>

      {!! $about->description !!}

      <div class="wrap-visimisi">
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

  @if($about->code == 'bti')
    <section class="gesit">
    <div class="wrapper-small">
      <div class="box">
        <div>
          <h2>{{ __('content.nilai_inti') }}</h2>
          <ul>
            <li><strong>Green:</strong> {!! __('content.green') !!}</li>
            <li><strong>Smart: </strong> {!! __('content.smart') !!}</li>
            <li><strong>Inklusif: </strong>  {!! __('content.inklusif') !!}</li>
            <li><strong>Tangguh : </strong> {!! __('content.tangguh') !!}</li>
            <li><strong>Sustainable :</strong> {!! __('content.sustainable') !!}</li>
          </ul>
        </div>
      <figure>
        <img src="{{ asset('assets/images/homepage/gesit.jpg') }}" alt="">
      </figure>
      </div>
    </div>
    </section>
  @elseif($about->code == 'nw')
    <section class="gesit">
      <div class="wrapper-small">
        <div class="box">
          <div>
            <h2>{{ __('content.nilai_inti') }}</h2>
            <ul>
              <li>{{ __('content.inti_nw') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  @endif

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