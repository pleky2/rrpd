@extends('template.index')

@section('content')
<section class="middle gap-bottom">
    <div class="banner-page center">
      <figure>
        <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
      </figure>
      <figcaption>
        <h5>TENTANG KAMI</h5>
        <h2>Milestone</h2>
      </figcaption>
    </div>
    <div class="inner-content">
      <div class="bg-top"><img src="{{ asset('assets/images/material/bg-top.svg') }}"></div>

      <div class="wrapper wrapper-small content-pages">
        <h3><b>Sejarah Kita</b></h3>
        <p>PT Bhakti Terang Indonesia “BTI” adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai dengan kebutuhan klien dan mitranya. BTI sendiri didirikan sejak tahun 2018.
        </p>

        <figure class="img-middle">
          <img src="{{ asset('assets/images/cover_w990_h480_hero-login.jpg') }}" alt="">
        </figure>

        <p>BTI memiliki cita-cita memberikan manfaat dan dampak positif bagi keseimbangan alam untuk kehidupan berkelanjutan di Indonesia dengan turut andil dalam mengakselerasi transisi ke sumber energi bersih dan ramah lingkungan. Demi mewujudkan hal tersebut, BTI hadir dalam memberikan solusi pengembangan energi surya dan penyedia bahan bakar biomassa.</p>
      </div>
      <div class="our-milestone">
        <div class="wrapper wrapper-small">
          <h3><b>&nbsp;</b></h3>
          <div class="slider-dots">

            <div class="list">
              <span class="year">2018</span>
              <span class="bullet"></span>
            </div>
            <div class="list">
              <span class="year">2020</span>
              <span class="bullet"></span>
            </div>
            <div class="list">
              <span class="year">2023</span>
              <span class="bullet"></span>
            </div>
            <div class="list">
              <span class="year">2024</span>
              <span class="bullet"></span>
            </div>
          </div>
          <div class="slider-container">
            <span class="arrow prev"></span>
            <span class="arrow next"></span>
            <div class="slider-center-content">

              <div class="list">
                <div class="slider-milestone">
                  <div class="slider">
                    <div class="inner">
                      <figure><img src="{{ asset('assets/images/cover_w273_h274_offgrid-kat-birang.jpg') }}" alt="">
                      </figure>
                      <div class="text">
                        <p>BTI didirikan pada tanggal 27 Agustus 2018 di Jakarta. Bisnis utama BTI adalah sebagai
                          penyedia jasa konstruksi pembangunan Pembangkit Listrik Tenaga Uap (PLTU) dan Pembangkit
                          Listrik Tenaga Gas Uap (PLTGU)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list">
                <div class="slider-milestone">
                  <div class="slider">
                    <div class="inner">
                      <figure><img src="{{ asset('assets/images/cover_w273_h274_offgrid-kat-birang.jpg') }}" alt="">
                      </figure>
                      <div class="text">
                        <p>BTI melakukan relokasi head office ke Bandar Lampung. BTI juga mengembangkan bisnisnya ke
                          bidang Energi Baru Terbarukan (EBT) khususnya pada pembangunan Pembangkit Listrik Tenaga Surya
                          (PLTS)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list">
                <div class="slider-milestone">
                  <div class="slider">
                    <div class="inner">
                      <figure><img src="{{ asset('assets/images/cover_w273_h274_offgrid-kat-birang.jpg') }}" alt="">
                      </figure>
                      <div class="text">
                        <p>BTI terus berupaya mendukung penggunaan energi hijau dengan penambahan lini bisnis sebagai
                          penyedia bahan bakar biomassa. Hal tersebut dibuktikan dengan pembangunan Pabrik Biomassa
                          (Woodchips) di Tanjung Bintang, Lampung Selatan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list">
                <div class="slider-milestone">
                  <div class="slider">
                    <div class="inner">
                      <figure><img src="{{ asset('assets/images/cover_w273_h274_offgrid-kat-birang.jpg') }}" alt="">
                      </figure>
                      <div class="text">
                        <h4>Hutan Tanaman Energi (HTE)
                        </h4>
                        <p>Sinergi merupakan kunci strategis BTI dalam melebarkan sayap di kancah Nasional. Pada bulan Agustus BTI dan ITERA menandatangani kesepakatan Bersama dalam riset pengembangan tanaman Kaliandra Merah sebagai alternatif bahan bakar biomassa masa depan. Selain itu, BTI bergabung ke dalam organisasi nasional yang peduli terhadap penggunaan energi bersih yaitu Masyarakat Energi Biomassa Indonesia (MEBI). Dimana, Direktur Utama BTI menjadi ketua MEBI Wilayah Lampung.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  @endsection