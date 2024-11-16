@extends('template.index')

@section('content')
<section class="middle">

  <div class="bg-light-green">
    <div class="wrapper">

      <div class="listing-project-full detail">
        <h4 class="center">PLTU Tarahan</h4>
        <div class="detail-big">
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_offgrid-kat-birang.jpg') }}" height="500" width="100%"
                alt="">
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_dji_0050.jpg') }}" height="500" width="100%" alt="">
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h480_hero-login.jpg') }}" height="500" width="100%" alt="">
            </figure>
          </div>
        </div>


        <div class="detail-nav">
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_offgrid-kat-birang.jpg') }}" height="200" width="200"
                alt="">
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_dji_0050.jpg') }}" height="200" width="200" alt="">
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h480_hero-login.jpg') }}" height="200" width="200" alt="">
            </figure>
          </div>
        </div>


        <div>
          <p>With a total capacity of 1.2 MWp, SUN Energy’s solar power system projects with PT DJARUM are estimated to
            produce 1,401 Megawatts of energy per year. This is equivalent to reducing 1,095 tons of CO2 emissions. PT
            Djarum has gained immediate benefits from the solar power system installation and expanded its cooperation
            with SUN Energy to install solar panels to power offices, warehouses, factories, and athletes' guest house.
          </p>

          <h6>Spesifikasi</h6>
          <p>Lokasi : Tarahan, Lampung Selatan</p>
        </div>


      </div>

    </div>
  </div>
</section>
@endsection