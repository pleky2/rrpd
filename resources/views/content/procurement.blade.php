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

  <div>
  </div>
  @if ($project->hasPages()) 
    <nav> 
      <ul class="pagination"> 
        @if ($project->onFirstPage()) 
          <li> 
              <a class="disabled-link" href="#" tabindex="-1">Previous</a> 
          </li> 
        @else 
          <li class="page-item">
            <a href="{{ $project->previousPageUrl() }}"> Previous</a> 
          </li> 
        @endif 

        @for ($page=1; $page <= 4; $page++)
          @if ($page == $project->currentPage()) 
              <li class="page-item active"> 
                  <a class="current-page">{{ $page }}</a> 
              </li> 
            @else 
              <li class="page-item"> 
                  <a class="page-link" href="{{ $project->url($page) }}">{{ $page }}</a> 
              </li> 
            @endif 
        @endfor
  
        @if ($project->hasMorePages()) 
          <li class="page-item"> 
              <a class="page-link" href="{{ $project->nextPageUrl() }}" rel="next">Next</a> 
          </li> 
        @else 
          <li> 
              <a class="disabled-link" href="#">Next</a> 
          </li> 
        @endif 
      </ul> 
    </nav> 
  @endif 

</section>
@endsection