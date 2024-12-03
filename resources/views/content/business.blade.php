@extends('template.index')

@section('content')
<section>
  @foreach ($buss as $item)
      <div class="bussiness-wrapper">
        <div class="bg-wrapper">
          @if($item->background_img)
            <img src="{{ url('upload/images/project/' . $item->background_img) }}" alt="" />
          @else
            <img src="{{ asset('assets/images/about/energy.jpeg') }}" alt="" />
          @endif
          <div class="business left">
            <h3>{{ $item->name }}</h3>
            <p>
              {{ $item->description }}
            </p>
          </div>
        </div>
      </div>
  @endforeach
</section>
@endsection