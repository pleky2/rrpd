@extends('template.index')

@section('content')
  <section class="wrap-parallax">
    <section class="scroller banner" data-section-name="banner" id="banner">
      <div class="banner__slider">
        <div class="banner__slider-item">
          <div class="video-slider">
            <img src="{{ asset('assets/images/cover_w990_h420_offgrid-kat-birang.jpg') }}" alt="" />
          </div>

          <div class="wrapper">
            <div class="banner__slider-item--text">
              <h2>Empower Your Business with Indonesia&#039;s Largest Solar Developer Company</h2>
              <p>Expanding Solar Energy Implementation as Electricity Sources for Commercial &amp; Industrial Sectors
                through End-to-End Solar System</p>
            </div>
          </div>
        </div>

        <div class="banner__slider-item">
          <div class="video-slider">
            <img src="{{ asset('assets/images/cover_w990_h420_dji_0050.jpg') }}" alt="" />
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
    <!-- <section class="scroller about-us animating-scroll" data-section-name="about-us" id="about-us"
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
    </section> -->

    <section class="our-company">
      <div class="wrapper">
        <h2>Our Company</h2>
        <div class="multiple-items">

        <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('assets/images/logo_home.png') }}" alt="">
              </div>
              <div class="text">
                <h3>Sun Terra</h3>
                <p>SUN Terra is Indonesia's leading residential, social, and commercial solar developer. Our mission is to promote solar energy as an eco-friendly alternative for all, with a focus on installing solar energy systems in small-scale buildings and leveraging application-based technology.</p>
                <p class="rm">Read More</p>
              </div>
            </div>
          </div>

          
        <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              </div>
              <div class="text">
                <h3>Sun Terra</h3>
                <p>SUN Terra is Indonesia's leading residential, social, and commercial solar developer. Our mission is to promote solar energy as an eco-friendly alternative for all, with a focus on installing solar energy systems in small-scale buildings and leveraging application-based technology.</p>
                <p class="rm">Read More</p>
              </div>
            </div>
          </div>

          <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('assets/images/gh.png') }}" alt="">
              </div>
              <div class="text">
                <h3>Sun Terra</h3>
                <p>SUN Terra is Indonesia's leading residential, social, and commercial solar developer. Our mission is to promote solar energy as an eco-friendly alternative for all, with a focus on installing solar energy systems in small-scale buildings and leveraging application-based technology.</p>
                <p class="rm">Read More</p>
              </div>
            </div>
          </div>

          <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('assets/images/yys.png') }}" alt="">
              </div>
              <div class="text">
                <h3>Sun Terra</h3>
                <p>SUN Terra is Indonesia's leading residential, social, and commercial solar developer. Our mission is to promote solar energy as an eco-friendly alternative for all, with a focus on installing solar energy systems in small-scale buildings and leveraging application-based technology.</p>
                <p class="rm">Read More</p>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
   
    
    <section class="mpek">
      <h3>Client & Partners</h3>
      <div class="client test">
          <div class="item-wrapper">
            <div class="card"><img src="{{ asset('assets/images/enpos.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/enpos.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/enpos.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/enpos.png') }}" alt=""></div>
          
          </div>
          <div class="item-wrapper">
            <div class="card"><img src="{{ asset('assets/images/itera.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/itera.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/itera.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/itera.png') }}" alt=""></div>
            <div class="card"><img src="{{ asset('assets/images/itera.png') }}" alt=""></div>
          </div>
      </div>

      <div class="tab zz">
          <div class="tab-item prev">
            <p>Padma</p>
          </div>
          <div class="tab-item next">
            <p>Ajinomoto</p>
          </div>
      </div>
    </section>
			
    <!-- <section class="scroller our-project animating-scroll" data-section-name="our-project" id="our-project"
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
            <div class="slider-project__item-text r-2">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="slider-project-thumb">
        <div class="wrapper">
          <div class="slider-project-thumb__box">
            <div class="slider-project-thumb__box-item"><span>Padma Hotels</span></div>
          </div>
        </div>
      </div>
    </section> -->


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
  </section>



  <!-- end of middle -->
@endsection


