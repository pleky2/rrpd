@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Media</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Media</h3>
                        </div>
                        <form id="media_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" name="title" value="{{ $media->title ?? '' }}" placeholder="Enter Media Title">
                                </div>
                                <div class="form-group">
                                    <label for="code">Code</label>
                                    <input type="text" class="form-control" id="code" name="code" value="{{ $media->code ?? '' }}" placeholder="e.g. bti">
                                </div>
                                <div class="form-group">
                                    <label for="lang">Language</label>
                                    <select class="form-control" id="lang" name="lang">
                                        <option value="id" {{ ($media->lang ?? 'id') == 'id' ? 'selected' : '' }}>Indonesian (id)</option>
                                        <option value="en" {{ ($media->lang ?? '') == 'en' ? 'selected' : '' }}>English (en)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="menu">Menu</label>
                                    <input type="text" class="form-control" id="menu" name="menu" value="{{ $media->menu ?? '' }}" placeholder="e.g. kerjasama, karir">
                                </div>
                                <div class="form-group">
                                    <label for="url">URL</label>
                                    <input type="text" class="form-control" id="url" name="url" value="{{ $media->url ?? '' }}" placeholder="https://...">
                                </div>
                                <div class="form-group">
                                    <label for="image">Image</label>
                                    @if(isset($media) && $media->img)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 80px;" src="{{ url('upload/images/media/' . $media->img) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the image</p>
                                    @endif
                                    <input type="file" class="form-control" id="image" name="image" accept="image/*">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/media') }}" class="btn btn-warning">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection