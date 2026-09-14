@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Management</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Management</h3>
                        </div>
                        <form id="management_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" value="{{ $management->name ?? '' }}" placeholder="Enter Name">
                                </div>
                                <div class="form-group">
                                    <label for="title">Title / Position</label>
                                    <input type="text" class="form-control" id="title" name="title" value="{{ $management->title ?? '' }}" placeholder="Enter Title / Position">
                                </div>
                                <div class="form-group">
                                    <label for="code">Code</label>
                                    <input type="text" class="form-control" id="code" name="code" value="{{ $management->code ?? '' }}" placeholder="Enter Code (optional)">
                                </div>
                                <div class="form-group">
                                    <label for="history">History</label>
                                    <textarea class="ckeditor form-control" id="history" name="history" rows="5">{{ $management->history ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="image">Photo</label>
                                    @if(isset($management) && $management->img)
                                        <div class="mb-2">
                                            <img class="rounded img img-fluid" style="max-width: 150px;" src="{{ url('upload/images/' . $management->img) }}" alt="">
                                        </div>
                                        <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change the photo</p>
                                    @endif
                                    <input type="file" class="form-control" id="image" name="image" accept="image/*">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/management') }}" class="btn btn-warning">Back</a>
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