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
          @foreach ($project as $item)
        <div class="card">
        <figure>
          <img src="{{ url('upload/images/project/' . $item->img_1) }}" height="370" width="100%" alt="">
        </figure>
        <figcaption>
          <div class="left-c">
          <h4>{{ $item->name }}</h4>
          <p>Lokasi : {{ $item->address }}</p>
          </div>
          <a href="{{ url('/procurement-detail/' . $item->slug) }}" class="link__img">View Detail<img
            src="{{ asset('assets/images/material/icon-angle-right-white.svg') }}" alt=""></a>
        </figcaption>
        </div>
      @endforeach
        </div>
      </div>

    </div>
  </div>

  <nav>
    <ul class="pagination">
      <li>
        <a class="disabled-link">Previous</a>
      </li>
      <li>
        <a class="page-link" href="#!">1</a>
      </li>
      <li aria-current="page">
        <a class="current-page" href="#!">
          2
        </a>
      </li>
      <li>
        <a class="page-link" href="#!">3</a>
      </li>
      <li>
        <a class="page-link" href="#!">Next</a>
      </li>
    </ul>
  </nav>

</section>
@endsection