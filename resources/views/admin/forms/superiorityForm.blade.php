@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Superiority</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Superiority</h3>
                        </div>
                        <form id="superiority_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" name="title" value="{{ $superiority->title ?? '' }}" placeholder="Enter Title">
                                </div>
                                <div class="form-group">
                                    <label for="code">Code</label>
                                    <input type="text" class="form-control" id="code" name="code" value="{{ $superiority->code ?? '' }}" placeholder="Enter Code (e.g. bti)">
                                </div>
                                <div class="form-group">
                                    <label for="lang">Language</label>
                                    <select class="form-control" id="lang" name="lang">
                                        <option value="id" {{ ($superiority->lang ?? 'id') == 'id' ? 'selected' : '' }}>Indonesian (id)</option>
                                        <option value="en" {{ ($superiority->lang ?? '') == 'en' ? 'selected' : '' }}>English (en)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="ckeditor form-control" id="description" name="description" rows="5">{{ $superiority->description ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image">Icon / Image</label>
                                    @if(isset($superiority) && $superiority->img)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 80px;" src="{{ url('images/superiority/' . $superiority->img) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the image</p>
                                    @endif
                                    <input type="file" class="form-control" id="image" name="image" accept="image/*">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/superiority') }}" class="btn btn-warning">Back</a>
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