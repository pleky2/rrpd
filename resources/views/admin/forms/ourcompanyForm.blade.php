@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Our Company</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Our Company</h3>
                        </div>
                        <form id="ourcompany_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="company_name">Company Name</label>
                                    <input type="text" class="form-control" id="company_name" name="company_name" value="{{ $profile->company_name ?? '' }}" placeholder="Enter Company Name">
                                </div>
                                <div class="form-group">
                                    <label for="code">Code</label>
                                    <input type="text" class="form-control" id="code" name="code" value="{{ $profile->code ?? '' }}" placeholder="Enter Code (e.g. homep)">
                                </div>
                                <div class="form-group">
                                    <label for="lang">Language</label>
                                    <select class="form-control" id="lang" name="lang">
                                        <option value="id" {{ ($profile->lang ?? 'id') == 'id' ? 'selected' : '' }}>Indonesian (id)</option>
                                        <option value="en" {{ ($profile->lang ?? '') == 'en' ? 'selected' : '' }}>English (en)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="img_title">Image Title</label>
                                    <input type="text" class="form-control" id="img_title" name="img_title" value="{{ $profile->img_title ?? '' }}" placeholder="Enter Image Title">
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="ckeditor form-control" id="description" name="description" rows="5">{{ $profile->description ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="visi">Visi</label>
                                    <textarea class="ckeditor form-control" id="visi" name="visi" rows="3">{{ $profile->visi ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="misi">Misi</label>
                                    <textarea class="ckeditor form-control" id="misi" name="misi" rows="3">{{ $profile->misi ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image">Logo</label>
                                    @if(isset($profile) && $profile->logo)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 150px;" src="{{ url('images/profile/' . $profile->logo) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the logo</p>
                                    @endif
                                    <input type="file" class="form-control" id="image" name="image">
                                </div>
                                <div class="form-group">
                                    <label for="image_2">Logo 2</label>
                                    @if(isset($profile) && $profile->logo_2)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 150px;" src="{{ url('images/profile/' . $profile->logo_2) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the logo</p>
                                    @endif
                                    <input type="file" class="form-control" id="image_2" name="image_2">
                                </div>
                                <div class="form-group">
                                    <label for="desc_logo">Logo Description</label>
                                    <textarea class="ckeditor form-control" id="desc_logo" name="desc_logo" rows="2">{{ $profile->desc_logo ?? '' }}</textarea>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/our-company') }}" class="btn btn-warning">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts')
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js"></script>
<script type="text/javascript">
    document.querySelectorAll('textarea.ckeditor').forEach(function (el) {
        if (window.CKEDITOR && el.id) {
            CKEDITOR.replace(el.id);
        }
    });
</script>
@endpush