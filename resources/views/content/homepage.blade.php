@extends('template.index')

@section('content')
      <!-- middle -->
  <div class="indicator">
    <div class="indicator__box">
      <a class="indicator__box-item active" content-target="banner">
        <div class="number"><span>01</span></div>
      </a>
      <a class="indicator__box-item" content-target="about-us">
        <div class="number"><span>02</span></div>
      </a>
      <a class="indicator__box-item" content-target="our-solution">
        <div class="number"><span>03</span></div>
      </a>
      <a class="indicator__box-item" content-target="solar-calculator">
        <div class="number"><span>04</span></div>
      </a>
      {{-- <a class="indicator__box-item" content-target="our-project">
        <div class="number"><span>05</span></div>
      </a>
      <a class="indicator__box-item" content-target="news-update">
        <div class="number"><span>06</span></div>
      </a> --}}
    </div>
  </div>
  <section class="wrap-parallax">
    <section class="scroller banner" data-section-name="banner" id="banner">
      <div class="banner__slider">
        <div class="banner__slider-item">
          <div class="video-slider">
            <video muted="muted" loop="loop" playsinline="" autoplay="autoplay" width="400" __idm_id__="737281">
              <source src="{{ asset('assets/video/sun-video-banner-v5.mp4') }}" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>

          <div class="wrapper">
            <div class="banner__slider-item--text">
              <h2>Empower Your Business with Indonesia&#039;s Largest Solar Developer Company</h2>
              <p>Expanding Solar Energy Implementation as Electricity Sources for Commercial &amp; Industrial Sectors
                through End-to-End Solar System</p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner__slider-arrow">
        <div class="wrapper">
          <div class="numbers">
            <span class="active">01</span> / <span class="total">02</span>
          </div>
          <div class="slick-arrows">
            <div class="arrow-prev">
              <img src="{{ asset('assets/images/material/icon-arrow-left.svg') }}" alt="">
            </div>
            <div class="arrow-next">
              <img src="{{ asset('assets/images/material/icon-arrow-right.svg') }}" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="scroller about-us animating-scroll" data-section-name="about-us" id="about-us"
      data-animate-trigger=".trigger-2">
      <div class="trigger trigger-2"></div>
      <div class="wrapper">
        <div class="about-us__box">
          <div class="about-us__box-text">
            <h1>TENTANG Bhakti Terang Indonesia</h1>
            <h2>Indonesia berdaya energi listrik</h2>
            <p>PT Bhakti Terang Indonesia “BTI” adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai dengan kebutuhan klien dan mitranya</p>
            <a href="#" class="button">Learn More</a>
          </div>
          <figure>
            <div class="animated-solar-panel">
              <img src="{{ asset('assets/images/homepage/light-bg.webp') }}" alt="" style="max-width: 60%;">
            </div>
          </figure>
        </div>
      </div>
      <div class="wrapper bg-white">
        <div class="poin">
          {{-- <div class="poin__item">
            <figure>
              <img src="{{ asset('assets/images/material/icon-contracted-projects.svg') }}" alt="icon">
            </figure>
            <div class="poin__item-text">
              <h4><span class="counting">300</span>MWp</h4>
              <span>Contracted Projects</span>
            </div>
          </div>
          <div class="poin__item">
            <figure>
              <img src="{{ asset('assets/images/material/icon-emission.png') }}" alt="icon">
            </figure>
            <div class="poin__item-text">
              <h4><span class="counting">929</span>Kilo Tons</h4>
              <span>Carbon Emission Reduction</span>
            </div>
          </div>
          <div class="poin__item">
            <figure>
              <img src="{{ asset('assets/images/material/icon-clean-energy.png') }}" alt="icon">
            </figure>
            <div class="poin__item-text">
              <h4><span class="counting">815</span>GWh</h4>
              <span>Clean Energy Production</span>
            </div>
          </div>
          <div class="poin__item">
            <figure>
              <img src="{{ asset('assets/images/material/icon-tree.png') }}" alt="icon">
            </figure>
            <div class="poin__item-text">
              <h4><span class="counting">13</span>Billions</h4>
              <span>Trees Planted</span>
            </div>
          </div> --}}
        </div>
      </div>
    </section>
    {{-- <section class="scroller our-solution animating-scroll" data-section-name="our-solution" id="our-solution"
      data-animate-trigger=".trigger-3">
      <div class="trigger trigger-3"></div>
      <div class="wrapper">
        <div class="our-solution__image">
          <div class="our-solution__image-item  active " data-id-img="tab-1">
            <figure>
              <img src="{{ asset('assets/images/homepage/ongrid-min.gif') }}" alt="icon">
            </figure>
          </div>
          <div class="our-solution__image-item " data-id-img="tab-2">
            <figure>
              <img src="{{ asset('assets/images/homepage/ofgrid-min.gif') }}" alt="icon">
            </figure>
          </div>
          <div class="our-solution__image-item " data-id-img="tab-3">
            <figure>
              <img src="{{ asset('assets/images/homepage/hybrids-min.gif') }}" alt="icon">
            </figure>
          </div>
        </div>
        <div class="our-solution__box">
          <div class="title-section">
            <div class="title-section__text">
              <span>OUR SOLUTION</span>
              <h2>Smart Solar System</h2>
            </div>
          </div>
          <div class="our-solution__box-thumb">
            <ul class="nav-tab">
              <li class="active" data-id="tab-1"><span>On Grid</span></li>
              <li data-id="tab-2"><span>Off Grid</span></li>
              <li data-id="tab-3"><span>Hybrid</span></li>
            </ul>
            <div class="nav-content">
              <div class="nav-content__item  active " id="tab-1">
                <div class="nav-content__item-box">
                  <figure>
                    <img src="{{ asset('assets/images/material/icon-ongrid.svg') }}" alt="">
                  </figure>
                  <div class="nav-content__item-box--text">
                    <span><b>On Grid</b></span>
                    <span>Maximize the power produced by the sun during the daytime and utilize electricity provided by
                      the national grid at night.</span>
                  </div>
                </div>
              </div>
              <div class="nav-content__item " id="tab-2">
                <div class="nav-content__item-box">
                  <figure>
                    <img src="{{ asset('assets/images/material/icon-offgrid.svg') }}" alt="">
                  </figure>
                  <div class="nav-content__item-box--text">
                    <span><b>Off Grid</b></span>
                    <span>Get independent solar-powered electricity, with or without batteries.</span>
                  </div>
                </div>
              </div>
              <div class="nav-content__item " id="tab-3">
                <div class="nav-content__item-box">
                  <figure>
                    <img src="{{ asset('assets/images/material/icon-hybrid.svg') }}" alt="">
                  </figure>
                  <div class="nav-content__item-box--text">
                    <span><b>Hybrid</b></span>
                    <span>When a solar energy system is combined with another energy source, such as diesel gen-sets,
                      gas, wind, and others.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> --}}
    <section class="scroller solar-calculator animating-scroll" data-section-name="solar-calculator"
      id="solar-calculator" data-animate-trigger=".trigger-4">
      <div class="trigger trigger-4"></div>
      <div class="wrapper">
        <div class="title-section text-center">
          <div class="title-section__text">
            <span>SOLAR CALCULATOR</span>
            <h2>Explore how Bhakti Terang Indonesia can reduce your electricity tariff</h2>
            <p>Solar Calculator, our feature to estimate your solar energy needs Building type:</p>
          </div>
        </div>
        <div class="solar-calculator__box">
          <h4 class="text-center">Your property is used for:</h4>
          <a class="solar-calculator__box-item" href="#">
            <div class="solar-calculator__box-item--text">
              <h4>Commercial &amp; Industrial</h4>
              <span>Bhakti Terang Indonesia is specialized and pioneer in providing tailor-made solar energy solutions
                for commercial
                &amp; industrial sectors with no upfront cost.</span>
            </div>
            <figure><img src="{{ asset('assets/images/material/icon-business-2.png') }}" alt="icon"></figure>
          </a>

          <a class="solar-calculator__box-item" href="#" target="_blank">
            <div class="solar-calculator__box-item--text">
              <h4>Residential</h4>
              <span>SUN Terra is a tech-based solar energy developer specializing in residential, small medium
                enterprises &amp; business, and retail sectors.</span>
            </div>
            <figure><img src="{{ asset('assets/images/material/icon-residence-2.png') }}" alt="icon"></figure>
          </a>
        </div>
      </div>
    </section>
    <section class="scroller our-project animating-scroll" data-section-name="our-project" id="our-project"
      data-animate-trigger=".trigger-5">
      <div class="trigger trigger-5"></div>
      <div class="slider-project">
        <div class="slider-project__item">
          <figure>
            <img src="{{ asset('assets/images/thumbs/cover_w1000_h562_padma-ubud-web.jpg') }}" alt="">
          </figure>
          <div class="wrapper">
            <div class="title-section text-white">
              <div class="title-section__text">
                <span>Notable Projects</span>
                <h2>Key Portfolios &amp; Highlights</h2>
              </div>
            </div>
            <div class="slider-project__item-text">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              <h3>Padma Hotels</h3>
              <div class="wrap-sub-tag">
                <span>Commercial</span>
              </div>
              <p>Padma Hotels in Java &amp; Bali have implemented a range of green initiatives to minimize their
                environmental impact and have made a commitment to sustainable management policies that are part of
                their environmental management system.</p>
              <div class="foot">
                <div class="wrap-btn">
                  <a href="#" class="link__img outline">View Detail <img
                      src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
                  <a href="#" class="link__img outline">Get a Quote <img
                      src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
                </div>
                <div class="count">1<small>/12</small></div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-project__item">
          <figure>
            <img src="{{ asset('assets/images/thumbs/cover_w1000_h562_padma-ubud-web.jpg') }}" alt="">
          </figure>
          <div class="wrapper">
            <div class="title-section text-white">
              <div class="title-section__text">
                <span>Notable Projects</span>
                <h2>Key Portfolios &amp; Highlights</h2>
              </div>
            </div>
            <div class="slider-project__item-text">
              <img src="{{ asset('assets/images/yys.png') }}" alt="">
              <h3>Bluebird</h3>
              <div class="wrap-sub-tag">
                <span>Commercial Building</span>
              </div>
              <p>Bluebird is now powered by solar energy, representing Bhakti Terang Indonesia&#039;s initial venture
                into
                sustainable transportation. The solar energy system has a capacity of 215.6 kWp.</p>
              <div class="foot">
                <div class="wrap-btn">
                  <a href="#" class="link__img outline">View Detail <img
                      src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
                  <a href="#" class="link__img outline">Get a Quote <img
                      src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
                </div>
                <div class="count">2<small>/12</small></div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-project__item">
          <figure>
            <img src="{{ asset('assets/images/thumbs/cover_w1000_h562_padma-ubud-web.jpg') }}" alt="">
          </figure>
          <div class="wrapper">
            <div class="title-section text-white">
              <div class="title-section__text">
                <span>Notable Projects</span>
                <h2>Key Portfolios &amp; Highlights</h2>
              </div>
            </div>
            <div class="slider-project__item-text">
              <img src="{{ asset('assets/images/gh.png') }}" alt="">
              <h3>Gelora Djaja (Wismilak Group)</h3>
              <div class="wrap-sub-tag">
                <span>Manufacturing</span>
              </div>
              <p>Tjiwi Kimia, a global paper manufacturer, prioritizes sustainability with its 9.8 MWp solar system, the
                largest in the industrial sector, featuring 17,854 panels integrated into 11 buildings for optimal space
                use.</p>
              <div class="foot">
                <div class="wrap-btn">
                  <a href="#" class="link__img outline">View Detail <img
                      src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
                  <a href="#" class="link__img outline">Get a Quote <img
                      src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
                </div>
                <div class="count">3<small>/3</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-project-thumb">
        <div class="wrapper">
          <div class="slider-project-thumb__box">
            <div class="slider-project-thumb__box-item"><span>Padma Hotels</span></div>
            <div class="slider-project-thumb__box-item"><span>Bluebird</span></div>
            <div class="slider-project-thumb__box-item"><span>Gelora Djaja (Wismilak Group)</span></div>
          </div>
        </div>
      </div>
    </section>


    <section class="scroller news-update animating-scroll" data-section-name="news-update" id="news-update"
      data-animate-trigger=".trigger-6">
      <div class="trigger trigger-6"></div>
      <div class="wrapper">
        <div class="title-section">
          <div class="title-section__text">
            <span>NEWS &amp; BLOG</span>
            <h2>Latest update</h2>
          </div>
          <div class="title-section__link">
            <a href="#" class="link__img">
              View All
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.7275L1.75469 1L8 7L1.75469 13L1 12.2763L6.48698 7L1 1.7275Z" fill="#818890"
                  stroke="#818890" />
              </svg>
            </a>
          </div>
        </div>
        <div class="news-update__list">
          <a class="news-update__list-item" href="#">
            <figure>
              <img
                src="{{ asset('assets/images/thumbs/cover_w310_h220_tw2029_th1441_x1272_y10_dokumentasi-plts-atap-pt-idec-awi---kaltara-2.jpg') }}"
                alt="">
              <figcaption>
                <span>News</span>
                <h5>Bhakti Terang Indonesia Operasikan PLTS Atap Sektor Industri Pertama di Kalimantan Utara</h5>
                <!-- <span class="date">April 1, 2021</span> -->
              </figcaption>
            </figure>
          </a>
          <a class="news-update__list-item" href="#">
            <figure>
              <img src="{{ asset('assets/images/thumbs/cover_w310_h220_tw6382_th4534_x10_y16_suprama-drone-61.jpg') }}" alt="">
              <figcaption>
                <span>News</span>
                <h5>Produksi Mi Burung Dara dan Mi BEST WOK Kini Pakai Energi Surya</h5>
                <!-- <span class="date">April 1, 2021</span> -->
              </figcaption>
            </figure>
          </a>
          <a class="news-update__list-item--highlight" href="#">
            <figure>
              <img src="{{ asset('assets/images/thumbs/cover_w310_h220_tw6381_th4530_x140_y16_dji_20240227104620_0536_d.jpg') }}" alt="">
              <figcaption>
                <span>News</span>
                <h5>Wujudkan Praktik Bisnis Ramah Lingkungan, PT Namasindo Plas Gunakan Energi Surya d...</h5>
                <!-- <span class="date">April 1, 2021</span> -->
              </figcaption>
            </figure>
          </a>

          <a class="news-update__list-item" href="#">
            <figure>
              <img src="{{ asset('assets/images/thumbs/cover_w310_h220_tw6381_th4530_x140_y16_dji_20240227104620_0536_d.jpg') }}"
                alt="Bagaimana PLTS Membuat Bisnis Anda Menghemat Biaya Listrik">
              <figcaption>
                <span>BLOG</span>
                <h5>Bagaimana PLTS Membuat Bisnis Anda Menghemat Biaya Listrik</h5>
                <!-- <span class="date">April 1, 2021</span> -->
              </figcaption>
            </figure>
          </a>
          <a class="news-update__list-item" href="#">
            <figure>
              <img src="{{ asset('assets/images/thumbs/cover_w310_h220_tw6381_th4530_x140_y16_dji_20240227104620_0536_d.jpg') }}"
                alt="Daftar Perusahaan FMCG Yang Sudah Pasang PLTS">
              <figcaption>
                <span>BLOG</span>
                <h5>Daftar Perusahaan FMCG Yang Sudah Pasang PLTS</h5>
                <!-- <span class="date">April 1, 2021</span> -->
              </figcaption>
            </figure>
          </a>

        </div>
      </div>
    </section>
    <section class="scroller social-media animating-scroll" data-section-name="social-media" id="social-media"
      data-animate-trigger=".trigger-7">
      <div class="trigger trigger-7"></div>
      <div class="wrapper">
        <div class="title-section text-center">
          <div class="title-section__text">
            <h4>Follow Our Social Media</h4>
          </div>
        </div>
        <a class="title" href="#" target="_blank"><img src="{{ asset('assets/images/material/icon-youtube.svg') }}" alt=""> Bhakti Terang
          Indonesia</a>
        <div class="overflow">
          <div class="social-media__list list-three you">
            <a class="social-media__list-item popup-video" data-iframe="3mEvyaH8ECc?si=WMkxtXzdudVlvDMR?rel=0">
              <figure>
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
                <div class="play"><img src="{{ asset('assets/images/material/icon-play.svg') }}" alt=""></div>
              </figure>
            </a>
            <a class="social-media__list-item popup-video" data-iframe="86Z3tTRrakc?si=0AkrBlQ2fyIS52Bk?rel=0">
              <figure>
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
                <div class="play"><img src="{{ asset('assets/images/material/icon-play.svg') }}" alt=""></div>
              </figure>
            </a>
            <a class="social-media__list-item popup-video" data-iframe="LXwIDU1cz0E?si=_YhFuLIwBKYrZA6x?rel=0">
              <figure>
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
                <div class="play"><img src="{{ asset('assets/images/material/icon-play.svg') }}" alt=""></div>
              </figure>
            </a>
          </div>
        </div>
        <a class="title" href="#" target="_blank"><img src="{{ asset('assets/images/material/icon-instagram.svg') }}" alt=""> Bhakti Terang
          Indonesia</a>
        <div class="overflow">
          <div class="social-media__list four-item">
            <a class="social-media__list-item" href="#" target="_blank">
              <figure class="square">
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
              </figure>
            </a>
            <a class="social-media__list-item" href="#" target="_blank">
              <figure class="square">
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
              </figure>
            </a>
            <a class="social-media__list-item" href="#" target="_blank">
              <figure class="square">
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
              </figure>
            </a>
            <a class="social-media__list-item" href="#" target="_blank">
              <figure class="square">
                <img src="{{ asset('assets/images/homepage/cover_w1280_h720_sun-energy-company-profile.jpg') }}" alt="">
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>

  <!-- end of middle -->
@endsection