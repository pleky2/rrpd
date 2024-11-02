@extends('template.index')

@section('content')
<section class="middle">
    <div class="banner-page">
      <figure>
        <img src="images/cover_w1440_h400_headline-banner_engineer_1366x380px_appl_.png" alt="">
      </figure>
      <div class="wrap-banner">
        <div class="wrap-banner__left">
          <h1>Woodchips</h1>
          <h2>Pengurangan Limbah dan Polusi yang Terkecil</h2>
        </div>
        <div class="wrap-banner__right slider">
          <div class="slider__card">
            <figure><img src="images/cover_w360_h200_sidomuncul-5.jpg" alt=""></figure>
            <div class="slider__card--text">
              <h5>Sidomuncul</h5>
              <a href="sido-muncul.html" class="link__img">Lihat<img src="images/material/icon-angle-right-green.svg"
                  alt=""></a>
            </div>
          </div>
          <div class="slider__card">
            <figure><img src="images/cover_w360_h200_dji_0037.jpg" alt=""></figure>
            <div class="slider__card--text">
              <h5>Djarum</h5>
              <a href="djarum.html" class="link__img">Lihat<img src="images/material/icon-angle-right-green.svg"
                  alt=""></a>
            </div>
          </div>
          <div class="slider__card">
            <figure><img src="images/cover_w360_h200_kia1.jpg" alt=""></figure>
            <div class="slider__card--text">
              <h5>KIA Keramik</h5>
              <a href="kia-keramik.html" class="link__img">Lihat<img src="images/material/icon-angle-right-green.svg"
                  alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inner-content">
      <div class="bg-top"><img src="images/material/bg-top.svg"></div>

      <div class="wrapper-small content-pages">
        <div class="wrap">
          <div class="wrap__text">
            <h3>Pembangkit Listrik Tenaga Surya (PLTS)</h3>
            <p>PLTS adalah sebuah sistem yang digunakan untuk mengubah energi sinar matahari menjadi energi listrik yang
              dapat dipakai guna memenuhi kebutuhan listrik dalam berbagai skala, baik kecil maupun besar. PLTS
              merupakan sumber energi yang ramah lingkungan karena sumber energi utamanya berupa sinar matahari.</p>
          </div>
          <div class="wrap__img">
            <figure><img src="images/cover_w520_h340_project-1.jpg" alt=""></figure>
          </div>
        </div>


      </div>
      <div class="bg-light-green">
        <div class="wrapper-small">
          <div class="wrap-tab ">
            <div class="sortby">
              <label for="">Sort by</label>
              <form method="GET" id="filterForm">
                <select name="location" onchange='document.getElementById("filterForm").submit();'>
                  <option value="all">All Location</option>
                  <option value="7">Bali</option>
                  <option value="14">East Kalimantan</option>
                  <option value="15">West Sulawesi</option>
                  <option value="5">Riau Island</option>
                </select>
              </form>
            </div>



            <div class="listing-project-full">
              <div class="card">
                <figure>
                  <img src="images/wc-tarahan-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/pln.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>(PLTU) Tarahan </h4>
                    <p>Supply Woodchips ke Pembangkit Listrik Tenaga Uap (PLTU) Tarahan</p>
                    <p>Lokasi : Tarahan, Lampung Selatan</p>
                  </div>
                  <a href="pt-itdc-nusantara-utilitas.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>

              <div class="card">
                <figure>
                  <img src="images/wc-sebalang-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/pln.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>(PLTU) Sebalang </h4>
                    <p>Supply Woodchips ke Pembangkit Listrik Tenaga Uap (PLTU) Sebalang</p>
                    <p>Lokasi : Sebalang, Lampung Selatan</p>
                  </div>
                  <a href="kat-birang.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>

              <div class="card">
                <figure>
                  <img src="images/cj-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/cj.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>PT. CJ Feed & Care Indonesia</h4>
                    <p>Supply Woodchips ke PT. CJ Feed & Care Indonesia</p>
                    <p>Lokasi : Tanjung Bintang, Lampung Selatan</p>
                  </div>
                  <a href="kat-birang.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>

              <div class="card">
                <figure>
                  <img src="images/peffeti-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/peffeti.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>PT. Perfetti Van Melle Indonesia</h4>
                    <p>Supply Woodchips ke PT. Perfetti Van Melle Indonesia</p>
                    <p>Lokasi   : Bogor, Jawa Barat</p>
                  </div>
                  <a href="kat-birang.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>

              <div class="card">
                <figure>
                  <img src="images/nestle-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/nestle.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>PT. Nestle Indonesia</h4>
                    <p>Supply Woodchips ke PT. Nestle Indonesia Karawang Factory</p>
                    <p>Lokasi : Karawang, Jawa Barat</p>
                  </div>
                  <a href="kat-birang.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>

              <div class="card">
                <figure>
                  <img src="images/utp-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/utp.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>PLTS Universitas Tanjung Pura</h4>
                    <p>Universitas Tanjung Pura</p>
                    <p>Lokasi : Pontianak, Kalimantan Barat</p>
                    <p>Kapasitas : 1.51MWp</p>
                    <p>Luas Lahan : 11.075m2</p>
                  </div>
                  <a href="kat-birang.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>

              <div class="card">
                <figure>
                  <img src="images/sampoerna-bg.png" height="370" width="100%" alt="">
                  <div class="logo">
                    <img src="images/sampoerna.png" alt="">
                  </div>
                </figure>
                <figcaption>
                  <div class="left-c">
                    <h4>PLTS SAMPOERNA</h4>
                    <p>HM Sampoerna</p>
                    <p>Lokasi : Pasuruan, Jawa Timur</p>
                    <p>Kapasitas : 7 MWp</p>
                    <p>Luas Lahan : 70.000m2</p>
                  </div>
                  <a href="kat-birang.html" class="link__img">View Detail<img
                      src="images/material/icon-angle-right-white.svg" alt=""></a>
                </figcaption>
              </div>



            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  @endsection