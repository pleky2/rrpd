@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Mitra</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card card-secondary">
                        <div class="card-header">
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Mitra</h3>
                        </div>
                        <form id="mitra_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" value="{{ $mitra->name ?? '' }}" placeholder="Enter Name">
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="ckeditor form-control" id="description" name="description">{{ $mitra->description ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="type">Type</label>
                                    <select class="form-control" id="type" name="type">
                                        <option value="M" {{ !isset($mitra) || $mitra->type == 'M' ? 'selected' : '' }}>Main</option>
                                        <option value="P" {{ isset($mitra) && $mitra->type == 'P' ? 'selected' : '' }}>Partner</option>
                                        <option value="C" {{ isset($mitra) && $mitra->type == 'C' ? 'selected' : '' }}>Client</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="image">Image</label>
                                    @if(isset($mitra) && $mitra->img)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 120px;" src="{{ url('images/mitra/' . $mitra->img) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the image</p>
                                    @endif
                                    <input type="file" class="form-control" id="image" name="image" placeholder="Enter Image">
                                </div>
                                <div class="form-group">
                                    <label for="order">Order</label>
                                    <input type="number" class="form-control" id="order" name="order" value="{{ $mitra->is_order ?? '' }}" placeholder="Enter Order">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/mitra') }}" class="btn btn-warning">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts')
<script src="https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js"></script>
<script type="text/javascript">
    document.querySelectorAll('textarea.ckeditor').forEach(function (el) {
        if (window.CKEDITOR && el.id) {
            CKEDITOR.replace(el.id);
        }
    });
</script>
@endpush