<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from sunenergy.id/ by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 04 Aug 2024 13:03:05 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

  <title>Bhakti Terang Indonesia</title>


  <link rel="icon" type="image/png" href="{{ asset('assets/images/icon_bti.png') }}" sizes="32x32">
  <link rel="canonical" href="/" />


  <!--Style-->
  <link rel="stylesheet" href="{{ asset('assets/css/reset.css') }}" preload>
  <link rel="stylesheet" href="{{ asset('assets/css/milligram.css') }}" preload>
  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/about.css') }}" preload>
  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/project.css') }}" preload>
  <!--endbuild-->

  <!--js-->
  <script async type="text/javascript" src="{{ asset('assets/js/app.js') }}"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->

  <!--endbuild-->

  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <!-- Add the slick-theme.css if you want default styling -->
  <link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/home.css') }}" preload>
  <script async type="text/javascript" src="{{ asset('assets/js/home.js') }}"></script>
  <script async type="text/javascript" src="{{ asset('assets/js/about.js') }}"></script>
</head>

<body>
  <!-- header -->
  <header>

    <div class="wrapper">
      <nav>
        <a href="/" class="logo"><img src="{{ asset('assets/images/logo_home.png') }}" alt=""></a>
        <div class="right-header">
          <div class="top">
            <ul>
              <li class="language">
                <select name="" id="lang" onchange="redirectToUrl(this);">
                  <option {{ Session::get('locale') == 'id' ? 'selected' : '' }} value="{{ url('/locale/id') }}">ID
              </li>
              <option {{ Session::get('locale') == 'en' ? 'selected' : '' }} value="{{ url('/locale/en') }}">EN</li>
                </select> </li>
            </ul>
          </div>
          <ul class="menu">
            <li class="have-child">
              <a href="#">{{ __('content.tentang_kami') }}</a>
              <div class="child" style="">
                <div class="title">
                  <h4>{{ __('content.tentang_kami') }}</h4>
                </div>
                <div class="wrap-row">
                  <div class="col">
                    <ul>
                      <li class="parent" id="bti"><a>BTI</a></li>
                      <li class="parent" id="enpos"><a>Café Enpos</a></li>
                      <li class="parent" id="gh"><a>Growing Hope</a></li>
                      <li class="parent" id="nw"><a>Klinik Narwastu</a></li>

                    </ul>
                  </div>
                  <div class="col">
                    <div class="chd d-none" data-parent="bti">
                      <!-- <h4>PT Bhakti Terang Indonesia “BTI” asdd</h4>
                      <p>adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai dengan kebutuhan klien dan mitranya. BTI sendiri didirikan sejak tahun 2018</p>
                      <a href="#" class="link__img">Read More <img src="#" alt=""></a> -->
                      <ul>
                        <li><a href="/profile/bti">{{ __('content.info_perusahaan') }}</a></li>
                        <li><a href="/organization/bti">{{ __('content.organ') }}</a></li>
                        <li><a href="/management/bti">{{ __('content.manajemen') }}</a></li>
                        <li><a href="/superiority/bti">{{ __('content.keunggulan') }}</a></li>
                        <li><a href="/mitra/bti">{{ __('content.mitra') }}</a></li>
                        <li><a href="/procurement/bti">{{ __('content.proyek') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="enpos">
                      <!-- <h4>PT Bhakti Terang Indonesia “BTI” asdd</h4>
                      <p>adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai dengan kebutuhan klien dan mitranya. BTI sendiri didirikan sejak tahun 2018</p>
                      <a href="#" class="link__img">Read More <img src="#" alt=""></a> -->
                      <ul>
                        <li><a href="/profile/enpos">{{ __('content.info_perusahaan') }}</a></li>
                        <li><a href="/organization/enpos">{{ __('content.organ') }}</a></li>
                        <li><a href="/superiority/enpos">{{ __('content.keunggulan') }}</a></li>
                        <li><a href="/mitra/enpos">{{ __('content.mitra') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="gh">
                      <!-- <h4>PT Bhakti Terang Indonesia “BTI” asdd</h4>
                      <p>adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai dengan kebutuhan klien dan mitranya. BTI sendiri didirikan sejak tahun 2018</p>
                      <a href="#" class="link__img">Read More <img src="#" alt=""></a> -->
                      <ul>
                        <li><a href="/profile/gh">{{ __('content.info_perusahaan') }}</a></li>
                        <li><a href="/organization/gh">{{ __('content.organ') }}</a></li>
                        <li><a href="/superiority/gh">{{ __('content.keunggulan') }}</a></li>
                        <li><a href="/mitra/gh">{{ __('content.mitra') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="nw">
                      <!-- <h4>PT Bhakti Terang Indonesia “BTI” asdd</h4>
                      <p>adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai dengan kebutuhan klien dan mitranya. BTI sendiri didirikan sejak tahun 2018</p>
                      <a href="#" class="link__img">Read More <img src="#" alt=""></a> -->
                      <ul>
                        <li><a href="/profile/nw">{{ __('content.info_perusahaan') }}</a></li>
                        <li><a href="/organization/nw">{{ __('content.organ') }}</a></li>
                        <li><a href="/superiority/nw">{{ __('content.keunggulan') }}</a></li>
                        <li><a href="/mitra/nw">{{ __('content.mitra') }}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="have-child">
              <a href="#">{{ __('content.bisnis') }}</a>
              <div class="child" style="">
                <div class="title">
                  <h4>{{ __('content.bisnis') }}</h4>
                </div>

                <div class="wrap-row">
                  <div class="col">
                    <ul>
                      <li class="parent" id="bti"><a href="#">BTI</a></li>
                      <li class="parent" id="enpos"><a href="#">Café Enpos</a></li>
                      <li class="parent" id="gh"><a href="#">Growing Hope</a></li>
                      <li class="parent" id="nw"><a href="#">Klinik Narwastu</a></li>
                    </ul>
                  </div>
                  <div class="col">
                    <div class="chd d-none" data-parent="bti">
                      <ul>
                        <li><a href="/business/bti/pltu">PLTGU & PLTU</a></li>
                        <li><a href="/business/bti/plts">PLTS</a></li>
                        <li><a href="/business/bti/bio">{{ __('content.bio') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="enpos">
                      <ul>
                        <li><a href="/business/bti/pltu">Café</a></li>
                        <li><a href="/business/bti/plts">Layanan Konsultasi Psikolog</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="gh">
                      <ul>
                        <li><a href="/business/bti/pltu">{{ __('content.terapi_gh') }}</a></li>
                        <li><a href="/business/bti/plts">{{ __('content.pklk') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="nw">
                      <ul>
                        <li><a href="/business/bti/pltu">{{ __('content.psiko') }}</a></li>
                        <li><a href="/business/bti/plts">{{ __('content.konsul') }}</a></li>
                        <li><a href="/business/bti/plts">{{ __('content.seminar') }}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </li>
            <li class="have-child">
              <a href="#">{{ __('content.kerjasama') }}</a>
              <div class="child" style="">
                <div class="title">
                  <h4>{{ __('content.kerjasama') }}</h4>
                </div>

                <div class="wrap-row">
                  <div class="col">
                    <ul>
                      <li class="parent" id="bti"><a href="/collaboration/bti">BTI</a></li>
                      <li class="parent" id="enpos"><a href="/collaboration/enpos">Café Enpos</a></li>
                      <li class="parent" id="gh"><a href="/collaboration/gh">Growing Hope</a></li>
                      <li class="parent" id="nw"><a href="/collaboration/nw">Klinik Narwastu</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </li>
            <li class="have-child">
              <a href="#">{{ __('content.media') }}</a>
              <div class="child" style="">
                <div class="title">
                  <h4>{{ __('content.media') }}</h4>
                </div>

                <div class="wrap-row">
                  <div class="col">
                    <ul>
                      <li class="parent" id="bti"><a href="/media/bti">BTI</a></li>
                      <li class="parent" id="enpos"><a href="/media/enpos">Café Enpos</a></li>
                      <li class="parent" id="gh"><a href="/media/gh">Growing Hope</a></li>
                      <li class="parent" id="nw"><a href="/media/nw">Klinik Narwastu</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </li>
            <li class="have-child">
              <a href="#">{{ __('content.hub_kami') }}</a>
              <div class="child" style="">
                <div class="title">
                  <h4>{{ __('content.hub_kami') }}</h4>
                </div>

                <div class="wrap-row">
                  <div class="col">
                    <ul>
                      <li class="parent" id="bti"><a href="/contact-us/bti">BTI</a></li>
                      <li class="parent" id="enpos"><a href="/contact-us/enpos">Café Enpos</a></li>
                      <li class="parent" id="gh"><a href="/contact-us/gh">Growing Hope</a></li>
                      <li class="parent" id="nw"><a href="/contact-us/nw">Klinik Narwastu</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </li>

          </ul>
          <div class="menu-bar">
            <img src="{{ asset('assets/images/material/icon-menu-bar.svg') }}" alt="">
          </div>
        </div>
    </div>
    </nav>
    </div>
  </header>
  <!-- end of header -->