@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h2>Hubungi Kami</h2>
    </figcaption>
  </div>


  <div class="top-contact">
    <div class="wrapper">
      @foreach ($contactUs as $item)
        <div class="row" style="margin-bottom: 50px;">
          <div class="column">
            <div class="contact-wrapper">
              <div class="contact-us">
                <h5>{{ $item->office ?? $item->company_name }}</h5>
                <div class="item">
                  <p class="content">
                    <span><img src="{{ asset('assets/images/material/icon-location.svg') }}" alt=""></span>
                    {{ $item->address_ho }}
                  </p>
                  <p class="content"><span><img src="{{ asset('assets/images/material/mail-s.svg') }}"
                        alt=""></span> info@btiofficial.co.id</p>
                  <p class="content"><span><img src="{{ asset('assets/images/material/ic-phone.svg') }}"
                        alt=""></span> 081385389774</p>
                  <p class="content"><span><img src="{{ asset('assets/images/material/icon-instagram.svg') }}"
                        alt=""></span> btioffial</p>

                </div>

              </div>
            </div>
          </div>
        </div>
      @endforeach
    </div>
  </div>




</section>
@endsection