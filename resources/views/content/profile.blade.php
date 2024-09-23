@extends('template.index')

@section('content')
<section class="middle">
    <div class="banner-page withvideo">
      <figure>
        <img src="{{ asset('assets/images/about/cover_w1440_h400_tw1366_th379_x10_y1270_headline-banner-about_1366x768px_.png') }}" alt="">
      </figure>
      <div class="wrap-banner">
        <div class="wrap-banner__left">
          <h5>COMPANY AT GLANCE</h5>
          <h2>SUN Energy is The Leading Solar Project Developer in Indonesia</h2>
          <a href="#" class="button popup-video"
            data-src="https://www.youtube.com/embed/fYyFtb7sZ7A?autoplay=1&rel=0">Company Profile</a>
        </div>
      </div>
    </div>
    <div class="inner-content">

      <div class="bg-top"><img src="{{ asset('assets/images/material/bg-top.svg') }}"></div>


      <div class="wrapper-small content-pages">
        <figure class="img-middle"><img src="{{ asset('assets/images/about/profile.jpg') }}" alt="">
        </figure>

        <p>PT Bhakti Terang Indonesia “BTI” adalah salah satu perusahaan nasional Indonesia yang berkomitmen dalam
          menyediakan solusi energi khususnya pada sektor industri dan pengembangan Energi Baru Terbarukan (EBT) sesuai
          dengan kebutuhan klien dan mitranya. BTI sendiri didirikan sejak tahun 2018.</p>
        <p>BTI memiliki cita-cita memberikan manfaat dan dampak positif bagi keseimbangan alam untuk kehidupan
          berkelanjutan di Indonesia dengan turut andil dalam mengakselerasi transisi ke sumber energi bersih dan ramah
          lingkungan. Demi mewujudkan hal tersebut, BTI hadir dalam memberikan solusi pengembangan energi surya dan
          penyedia bahan bakar biomassa.<br>&nbsp;</p>

        <div class="wrap-visimisi">
          <div class="wrap-visimisi__visi">
            <div class="wrap-img">
              <figure><img src="{{ asset('assets/images/cover_w66_h66_icon-vision.png') }}" alt=""></figure>
              <h3>Visi</h3>
            </div>
            <span>Indonesia berdaya energi listrik.<br>&nbsp;</span>
          </div>

          <div class="wrap-visimisi__misi">
            <div class="wrap-img">
              <figure><img src="{{ asset('assets/images/cover_w66_h66_icon-mission.png') }}" alt=""></figure>
              <h3>Misi</h3>
            </div>
            
            <ol>
              <li>Turut serta dalam pembangunan / konstruksi pembangkit listrik tenaga : Surya, Angin, Uap, Gas, dan Air sebagai Bisnis utama perusahaan </li>
              <li>Turut serta dalam pekerjaan yang berhubungan dengan transisi energi baru terbarukan (EBT)</li>
              <li>Turut serta dalam pekerjaan yang berhubungan dengan transisi energi baru terbarukan (EBT)</li>
              <li>Mengedepankan mutu dan komitmen dalam menjalankan bisnis perusahaan</li>
              <li>Meningkatkan kemampuan ilmu dan skill SDM perusahaan dalam bidang ketenagalistrikan secara berkesinambungan</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="business-model">
        <figure class="bg"><img src="{{ asset('assets/images/content/bg-businessmodel.jpg') }}" alt=""></figure>
        <div class="wrap-abs wrapper-small">
          <div class=" text-center">
            <h3>Our Competitive Advantages</h3>
          </div>
          <div class="row row-wrap listing-businessmodel">
            <div class="column column-50">
              <figure><img src="{{ asset('assets/images/content/business-1.png') }}" alt=""></figure>
              <div class="text">
                <h5>Innovative Financing</h5>
                <p>SUN Energy provides flexible financing schemes to meet the demands of customers, including a
                  zero-investment scheme and attractive loan interest rates.</p>
              </div>
            </div>
            <div class="column column-50">
              <figure><img src="{{ asset('assets/images/content/business-2.png') }}" alt=""></figure>
              <div class="text">
                <h5>Trustworthy</h5>
                <p>SUN Energy encourages customers to utilize renewable energy by providing a 25-year performance
                  warranty.</p>
              </div>
            </div>
            <div class="column column-50">
              <figure><img src="{{ asset('assets/images/content/business-3.png') }}" alt=""></figure>
              <div class="text">
                <h5>Capable &amp; Reliable</h5>
                <p>SUN Energy focuses to fulfill its clients&#039; demands by providing high-quality technology as well
                  as experienced and certified technical professionals who can enhance the productivity of solar energy
                  systems at an affordable price.</p>
              </div>
            </div>
            <div class="column column-50">
              <figure><img src="{{ asset('assets/images/content/business-4.png') }}" alt=""></figure>
              <div class="text">
                <h5>Sustainable</h5>
                <p>SUN Energy ensures that all marketed products are manufactured in a sustainable manner in order to
                  contribute to the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-map">
      <div class="text-center">
        <h3><b>Project Map</b></h3>
      </div>
      <div id="map_about"></div>
    </div>


    <div class="banner-bottom">
      <div class="wrapper">
        <figure>
          <img src="{{ asset('assets/images/content/banner-bottom-about.jpg') }}" alt="img">
        </figure>
        <div class="row row-wrap">
          <div class="column">
            <h4>Company Profile</h4>
            <p>Download our company profile to learn more about us, including our history, missions, values, and what
              distinguishes us from the competitors.</p>
          </div>
          <div class="column">
            <a class="button">Download</a>
          </div>
        </div>
      </div>
    </div>

  </section>
@endsection