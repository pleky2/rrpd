@extends('template.index')

@section('content')
<section class="middle">

  <div class="bg-light-green">
    <div class="wrapper">

      <div class="listing-project-full detail">
        <h4 class="center">{{ $proDetail->name }}</h4>
        <div class="detail-big">
          <div class="card">
            <figure>
              <img src="{{ url('upload/images/project/' . $proDetail->img_1) }}" height="500" width="100%" alt="">
              <span>Sumber Foto : PT Wijaya Karya (Persero)</span>
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ url('upload/images/project/' . $proDetail->img_2) }}" height="500" width="100%" alt="">
              <span>Sumber Foto : PT Wijaya Karya (Persero)</span>
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ url('upload/images/project/' . $proDetail->img_3) }}" height="500" width="100%" alt="">
              <span>Sumber Foto : PT Wijaya Karya (Persero)</span>
            </figure>
          </div>
        </div>


        <div class="detail-nav">
          <div class="card">
            <figure>
              <img src="{{ url('upload/images/project/' . $proDetail->img_1) }}" height="200" width="200" alt="">
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ url('upload/images/project/' . $proDetail->img_2) }}" height="200" width="200" alt="">
            </figure>
          </div>
          <div class="card">
            <figure>
              <img src="{{ url('upload/images/project/' . $proDetail->img_3) }}" height="200" width="200" alt="">
            </figure>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <div class="list-spek">
              {!! $proDetail->description !!}
            </div>
          </div>
          <div class="column">
            <p><strong>Lokasi:</strong> {{ $proDetail->address }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
@endsection