@extends('template.index')

@section('content')
<section class="middle gap-bottom gap-top">
  <div class="banner-page center">
    <figure>
      <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
    </figure>
    <figcaption>
      <h2>Keunggulan</h2>
    </figcaption>
  </div>
  <div class="superior">
    <div class="wrapper">
      <div class="row">
        <div class="column">
          <div class="img-wrapper">
            <img src="{{ asset('assets/images/logo_home.png') }}">
          </div>
          <h5>Berpengalaman</h5>
          <p>Kami memiliki pengalaman dan pengetahuan dalam bidang Energi Baru Terbarukan (EBT) dengan didukung tenaga
            ahli yang kompeten serta selalu menjaga kualitas layanan terbaik.</p>
        </div>
        <div class="column">
          <div class="img-wrapper">
            <img src="{{ asset('assets/images/logo_home.png') }}">
          </div>
          <h5>Fokus Pelanggan</h5>
          <p>Kami selalu fokus dalam menyesuaikan kebutuhan pelanggan sehingga kami bisa memberikan nilai tambah yang
            besar, sehingga kami dapat mitra jangka panjang yang terpercaya.</p>
        </div>
        <div class="column">
          <div class="img-wrapper">
            <img src="{{ asset('assets/images/logo_home.png') }}">
          </div>
          <h5>Fokus Pelanggan</h5>
          <p>Kami selalu fokus dalam menyesuaikan kebutuhan pelanggan sehingga kami bisa memberikan nilai tambah yang
            besar, sehingga kami dapat mitra jangka panjang yang terpercaya.</p>
        </div>
      </div>
    </div>
  </div>
</section>
@endsection