<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:locale" content="id">
  <meta property="og:title" content="@yield('title', 'Bhakti Terang Indonesia - Contractor and Trading Company')">
  <meta property="og:type" content="website">
  <meta property="og:description" content="@yield('meta-description', 'Bhakti Terang Indonesia specializes in Contractor and Trading Company.')">
  <meta property="og:site_name" content="Bhakti Terang Indonesia">
  <meta property="og:url" content="https://btiofficial.co.id/">

  <title>Bhakti Terang Indonesia</title>

  <link rel="icon" type="image/png" href="{{ asset('assets/images/favicon/favicon-96x96.png') }}" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="{{ asset('assets/images/favicon/favicon.svg') }}" />
  <link rel="shortcut icon" href="{{ asset('assets/images/favicon/favicon.ico') }}" />
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/images/favicon/apple-touch-icon.png') }}" />
  <meta name="apple-mobile-web-app-title" content="Bhakti Terang Indonesia" />
  <link rel="manifest" href="{{ asset('assets/images/favicon/site.webmanifest') }}" />

  <link rel="canonical" href="https://btiofficial.co.id/">

  <link rel="stylesheet" href="{{ asset('assets/css/reset.css') }}" preload>
  <link rel="stylesheet" href="{{ asset('assets/css/milligram.css') }}" preload>
  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/about.css') }}" preload>
  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/project.css') }}" preload>

  <!-- <script async type="text/javascript" src="{{ asset('assets/js/app.js') }}"></script> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/home.css') }}" preload>
  <script async type="text/javascript" src="{{ asset('assets/js/home.js') }}"></script>
  <script async type="text/javascript" src="{{ asset('assets/js/about.js') }}"></script>
</head>

<body>
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
                      <ul>
                        <li><a href="/profile/enpos">{{ __('content.info_perusahaan') }}</a></li>
                        <li><a href="/organization/enpos">{{ __('content.organ') }}</a></li>
                        <li><a href="/superiority/enpos">{{ __('content.keunggulan') }}</a></li>
                        <li><a href="/mitra/enpos">{{ __('content.mitra') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="gh">
                      <ul>
                        <li><a href="/profile/gh">{{ __('content.info_perusahaan') }}</a></li>
                        <li><a href="/organization/gh">{{ __('content.organ') }}</a></li>
                        <li><a href="/superiority/gh">{{ __('content.keunggulan') }}</a></li>
                        <li><a href="/mitra/gh">{{ __('content.mitra') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="nw">
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
                        <li><a href="/business/enpos/cafe">Café</a></li>
                        <li><a href="/business/enpos/psikolog">Layanan Konsultasi Psikolog</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="gh">
                      <ul>
                        <li><a href="/business/gh/terapi">{{ __('content.terapi_gh') }}</a></li>
                        <li><a href="/business/gh/pklk">{{ __('content.pklk') }}</a></li>
                      </ul>
                    </div>
                    <div class="chd d-none" data-parent="nw">
                      <ul>
                        <li><a href="/business/nw/psikolog">{{ __('content.psiko') }}</a></li>
                        <li><a href="/business/nw/konsul">{{ __('content.konsul') }}</a></li>
                        <li><a href="/business/nw/seminar">{{ __('content.seminar') }}</a></li>
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