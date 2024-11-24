@extends('template.index')

@section('content')
  <section class="wrap-parallax">
    <section class="scroller banner" data-section-name="banner" id="banner">
      <div class="banner__slider">
          <div class="banner__slider-item">
            <div class="video-slider">
              <video muted="muted" loop="loop" playsinline="" autoplay="autoplay" width="400">
              <source src="{{ url('upload/images/slider/video-plts.mp4') }}" type="video/mp4">
              Your browser does not support HTML video.
              </video>
            </div>
          </div>
          <div class="banner__slider-item">
            <div class="video-slider">
              <video muted="muted" loop="loop" playsinline="" autoplay="autoplay" width="400">
              <source src="{{ url('upload/images/slider/video-biomassa.MOV') }}" type="video/mp4">
              Your browser does not support HTML video.
              </video>
            </div>
          </div>
        @foreach ($slider as $slide)
          <div class="banner__slider-item">
            <div class="video-slider">
              <img src="{{ url('upload/images/slider/'.$slide->img) }}" alt="{{ $slide->title }}" />
            </div>

            <div class="wrapper">
              <div class="banner__slider-item--text">
                <h2>{{ $slide->description }}</h2>
              </div>
            </div>
          </div>
        @endforeach
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
            <h1>{{ __('content.tentang') }} Bhakti Terang Indonesia</h1>
            <h2>{{ __('content.indo_berdaya') }}</h2>
            <p>{!! __('content.desc_satu') !!}</p>
            <p>{!! __('content.desc_dua') !!}</p>
            <a href="{{ url('/profile/bti') }}" class="button">{{ __('content.learn') }}</a>
          </div>
          <figure>
            <div class="animated-solar-panel">
              <img src="{{ asset('assets/images/homepage/lamp.png') }}" alt="" style="margin-top: 8rem;">
            </div>
          </figure>
        </div>
      </div>
    </section>

    <section class="gesit">
      <div class="wrapper">
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
        <img src="{{ asset('assets/images/homepage/gesit.jpg') }}" alt="" >
          </figure>
        </div>
      </div>
    </section>

    <section class="our-company">
      <div class="wrapper">
        <h2>{{ __('content.perusahaan_kami') }}</h2>
        <div class="multiple-items">

        <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              </div>
              <div class="text">
                <h3>Café Enpos</h3>
                <p>Cafe Enpos merupakan sebuah industri <i>food & beverage</i> (F&B) yang memiliki konsep <i>green café</i> dengan menyajikan berbagai hidangan yang sehat di konsumsi. Café ikonik ini merupakan salah satu pelopor industri F&B yang memiliki ruang baca (perpustakaan) dan ruang terbuka hijau yang luas di Bandar Lampung.</p>
                <a href="{{ url('/profile/enpos') }}" class="button">{{ __('content.learn') }}</a>
              </div>
            </div>
          </div>

          
        <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('assets/images/gh.png') }}" alt="">
              </div>
              <div class="text">
                <h3>Growing Hope</h3>
                <p>Growing Hope School berkecimpung sebagai wadah Pendidikan dan Pemberdayaan dengan fokus pada Anak Berkebutuhan Khusus (ABK) yang terletak di Bandar Lampung. Saat ini terdapat banyak kurikulum dan fasilitas yang disediakan untuk menunjang kegiatan sekolah.</p>
                <a href="{{ url('/profile/gh') }}" class="button">{{ __('content.learn') }}</a>
              </div>
            </div>
          </div>

          <div class="slide-item">
            <div class="content">
              <div class="card-img">
                <img src="{{ asset('upload/images/logo/narwastu.png') }}" alt="" style="max-width: 70%;">
              </div>
              <div class="text">
                <h3>Klinik Narwastu</h3>
                <p>Klinik Narwastu menyediakan layanan <i>Psychological Service</i> untuk umum maupun Anak Berkebutuhan Khusus. Saat ini terdapat beberapa layanan antara lain adalah pemeriksaan psikologis, konsultasi dan seminar.</p>
                <a href="{{ url('/profile/nw') }}" class="button">{{ __('content.learn') }}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="mpek">
      <h2>{{ __('content.mitra') }}</h2>
      <div class="client test">
          <!-- <div class="item-wrapper"> -->
          @foreach ($mitra as $item)
            <div class="card"><img src="{{ url('upload/images/mitra/'.$item->img) }}" alt=""></div>  
          @endforeach
          <!-- </div> -->
      </div>
    </section>

    <section class="mebi">
      <div class="mebi-slider">
        @foreach ($slider_mebi as $mebi)
          <div class="slide">
            <div class="slide__img">
              <img src="{{ url('upload/images/slider/'.$mebi->img) }}" />
            </div>
            <div class="slide__content">
              <h2>{{ $mebi->description }}</h2>
            </div>
          </div>    
        @endforeach
      </div>

      <div class="btn-wrap">
        <button class="prev-btn">Previous</button>
        <button class="next-btn">Next</button>
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

  </section>



  <!-- end of middle -->
@endsection


