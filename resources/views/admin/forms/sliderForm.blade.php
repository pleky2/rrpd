@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Slider</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Slider</h3>
                        </div>
                        <form id="slider_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" name="title" value="{{ $slider->title ?? '' }}" placeholder="Enter Title">
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="ckeditor form-control" id="description" name="description" rows="5">{{ $slider->description ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image">Image</label>
                                    @if(isset($slider) && $slider->img)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 150px;" src="{{ url('upload/images/slider/' . $slider->img) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the image</p>
                                    @endif
                                    <input type="file" class="form-control" id="image" name="image" placeholder="Enter Image">
                                </div>
                                <div class="form-group">
                                    <label for="order">Order</label>
                                    <input type="number" class="form-control" id="order" name="order" value="{{ $slider->is_order ?? '' }}" placeholder="Enter Order">
                                </div>
                                                                <div class="form-group">
                                    <label for="type">Type</label>
                                    <select class="form-control" id="type" name="type">
                                        <option value="HOME_1" {{ ($slider->type ?? '') == 'HOME_1' ? 'selected' : '' }}>Homepage</option>
                                        <option value="bti" {{ ($slider->type ?? '') == 'bti' ? 'selected' : '' }}>BTI</option>
                                        <option value="enpos" {{ ($slider->type ?? '') == 'enpos' ? 'selected' : '' }}>Enpos</option>
                                        <option value="gh" {{ ($slider->type ?? '') == 'gh' ? 'selected' : '' }}>Growing Hope</option>
                                        <option value="nw" {{ ($slider->type ?? '') == 'nw' ? 'selected' : '' }}>Narwastu</option>
                                        <option value="HOME_MEBI" {{ ($slider->type ?? '') == 'HOME_MEBI' ? 'selected' : '' }}>Homepage MEBI</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="lang">Language</label>
                                    <select class="form-control" id="lang" name="lang">
                                        <option value="id" {{ ($slider->lang ?? 'id') == 'id' ? 'selected' : '' }}>Indonesian (id)</option>
                                        <option value="en" {{ ($slider->lang ?? '') == 'en' ? 'selected' : '' }}>English (en)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/slider') }}" class="btn btn-warning">Back</a>
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