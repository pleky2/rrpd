@extends('template.index')

@section('content')
<section class="middle">

  <div class="bg-light-green">
    <div class="wrapper-small">
      <div class="wrap-tab ">
        <!-- <div class="sortby">
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
          </div> -->
        <div class="listing-project-full">
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_offgrid-kat-birang.jpg') }}" height="370" width="100%"
                alt="">
              <div class="logo">
                <img src="{{ asset('assets/images/logo_home.png') }}" alt="">
              </div>
            </figure>
            <figcaption>
              <div class="left-c">
                <h4>(PLTU) Tarahan </h4>
                <p>Supply Woodchips ke Pembangkit Listrik Tenaga Uap (PLTU) Tarahan</p>
                <p>Lokasi : Tarahan, Lampung Selatan</p>
              </div>
              <a href="bti/detail" class="link__img">View Detail<img
                  src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
            </figcaption>
          </div>
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_offgrid-kat-birang.jpg') }}" height="370" width="100%"
                alt="">
              <div class="logo">
                <img src="{{ asset('assets/images/logo_home.png') }}" alt="">
              </div>
            </figure>
            <figcaption>
              <div class="left-c">
                <h4>(PLTU) Tarahan </h4>
                <p>Supply Woodchips ke Pembangkit Listrik Tenaga Uap (PLTU) Tarahan</p>
                <p>Lokasi : Tarahan, Lampung Selatan</p>
              </div>
              <a href="/detail" class="link__img">View Detail<img
                  src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
            </figcaption>
          </div>
          <div class="card">
            <figure>
              <img src="{{ asset('assets/images/cover_w990_h420_offgrid-kat-birang.jpg') }}" height="370" width="100%"
                alt="">
              <div class="logo">
                <img src="{{ asset('assets/images/logo_home.png') }}" alt="">
              </div>
            </figure>
            <figcaption>
              <div class="left-c">
                <h4>(PLTU) Tarahan </h4>
                <p>Supply Woodchips ke Pembangkit Listrik Tenaga Uap (PLTU) Tarahan</p>
                <p>Lokasi : Tarahan, Lampung Selatan</p>
              </div>
              <a href="/detail" class="link__img">View Detail<img
                  src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
            </figcaption>
          </div>

          


        </div>
      </div>

    </div>
  </div>

</section>
@endsection