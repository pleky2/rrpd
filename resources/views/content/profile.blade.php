@extends('template.index')

@section('content')
<section class="middle">
  <div class="banner-page withvideo">
    <figure>
      <img src="{{ asset('assets/images/about/energy.jpeg') }}" alt="" height="600" style="object-fit: cover;">
    </figure>
    <div class="wrap-banner">
      <div class="wrap-banner__left">
        <h5>Tentang Kami</h5>
        <p>Sejak tahun 2018, BTI telah aktif dalam pembangunan tenaga listrik di Indonesia. Hingga saat ini telah
          berpartisipasi dalam pembangunan PLTU serta PLTGU dengan total kapasitas 700MW dan pembangunan PLTS dengan
          total kapasitas 11,181MWp. Tahun 2023, BTI memulai bisnis baru dalam penyediaan bahan bakar biomassa dan sudah
          bisa mensupply lebih dari 10.000 Ton untuk pembangkit dan industry.</p>

      </div>
    </div>
  </div>
  <div class="inner-content">

    <div class="bg-top"><img src="{{ asset('assets/images/material/bg-top.svg') }}"></div>


    <div class="wrapper-small content-pages">
      <figure class="img-middle"><img src="{{ asset('assets/images/about/profile.jpg') }}" alt="">
      </figure>

      <p>Bhakti Terang Indonesia (BTI) merupakan salah satu perusahaan professional di Indonesia yang fokus dalam
        memberikan solusi Energi Baru Terbarukan (EBT). Layanan bisnis BTI adalah sebagai Engineering, Procurement, and
        Construction (EPC) pembangkit listrik terutama pemanfaatan energi surya. Selain itu, BTI juga menyediakan bahan
        bakar biomassa untuk kebutuhan industry dan komersial.</p>
      <p>BTI terus berkembang melalui dukungan dari mitra untuk berperan memberikan dampak positif bagi keseimbangan
        alam dan kehidupan berkelanjutan di Indonesia, dengan turut andil dalam mengakselerasi transisi energi bersih
        dan ramah lingkungan. <br>&nbsp;</p>

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
            <li>Turut serta dalam pembangunan / konstruksi pembangkit listrik tenaga : Surya, Angin, Uap, Gas, dan Air
              sebagai Bisnis utama perusahaan </li>
            <li>Turut serta dalam pekerjaan yang berhubungan dengan transisi energi baru terbarukan (EBT)</li>
            <li>Turut serta dalam pekerjaan yang berhubungan dengan transisi energi baru terbarukan (EBT)</li>
            <li>Mengedepankan mutu dan komitmen dalam menjalankan bisnis perusahaan</li>
            <li>Meningkatkan kemampuan ilmu dan skill SDM perusahaan dalam bidang ketenagalistrikan secara
              berkesinambungan</li>
          </ol>
        </div>
      </div>
    </div>



  </div>


  <section class="gesit">
    <div class="wrapper-small">
      <div class="box">
        <div>
          <h2>Nilai Inti Perusahaan</h2>
          <ul>
            <li><strong>Green:</strong> Memelihara serta mampu bekerjasama dengan alam (eco green)</li>
            <li><strong>Smart: </strong> Berfikir dan bekerja secara cermat, cerdas, dan tepat untuk meningkatkan value
            </li>
            <li><strong>Inklusif: </strong> Melibatkan orang dan kelompok dengan berkolaborasi (don'be be exclusive)
            </li>
            <li><strong>Tangguh : </strong> Memiliki sifat pantang menyerah, karena memiliki ilmu dan pengetahuan</li>
            <li><strong>Sustainable :</strong> Memiliki karakter berkelanjutan dan berkembang (step by step)</li>
          </ul>
        </div>
        <figure>
          <img src="{{ asset('assets/images/homepage/gesit.jpg') }}" alt="">
        </figure>
      </div>
    </div>
  </section>

  <div class="makna-logo">
    <div class="text-center">
      <h3><b>Makna Logo</b></h3>
    </div>
    <div class="wrapper-small">
      <div class="row">
        <div class="column" style="
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
">
          <img src="{{ asset('assets/images/logo_home.png') }}" alt="" style="
    width: 238px;
    margin-bottom: 20px;
">
          <img src="{{ asset('assets/images/about/makna-logo.png') }}" alt="">
        </div>
       
      </div>

      <h3>Keterangan :</h3>
      <ol>
        <li>1. Simbol Listrik menggambarkan elemen yang digunakan untuk menyampaikan makna bahwa BTI mendukung energi
          listrik dapat tersalurkan sampai ke seluruh pelosok negeri.</li>
        <li>2. Simbol solar panel sebagai elemen teknologi yang dapat menghasilkan listrik yang ramah lingkungan.</li>
        <li>3. Simbol daun memiliki makna alam dan salah satu energi terbarukan yang berkelanjutan.</li>
      </ol>
    </div>
  </div>


  <!-- <div class="wrap-map">
    <div class="text-center">
      <h3><b>Project Map</b></h3>
    </div>
    <div id="map_about"></div>
  </div> -->




</section>
@endsection