@extends('template.index')

@section('content')
<section class="middle gap-bottom">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h1><b>{{ __('content.hub_kami') }}</b></h1>
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
                        alt=""></span> {!! $item->email !!}</p>
                  <p class="content"><span><img src="{{ asset('assets/images/material/ic-phone.svg') }}"
                        alt=""></span> {{ $item->phone }}</p>
                  <p class="content"><span><img src="{{ asset('assets/images/material/icon-instagram.svg') }}" alt=""></span> 
                        <a target="_blank" style="color: #191a1c;"
                        href="{{ $item->instagram }}">{{ $item->instagram_title }}</a>
                  </p>

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