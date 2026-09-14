@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Project</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Project</h3>
                        </div>
                        <form id="project_form" method="{{ $method }}" action="{{ $url }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" value="{{ $project->name ?? '' }}" placeholder="Enter Project Name">
                                </div>
                                <div class="form-group">
                                    <label for="slug">Slug</label>
                                    <input type="text" class="form-control" id="slug" name="slug" value="{{ $project->slug ?? '' }}" placeholder="auto-generated from name if left blank">
                                </div>
                                <div class="form-group">
                                    <label for="is_order">Order</label>
                                    <input type="number" class="form-control" id="is_order" name="is_order" value="{{ $project->is_order ?? 0 }}" placeholder="0">
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" class="form-control" id="address" name="address" value="{{ $project->address ?? '' }}" placeholder="Enter Address">
                                </div>
                                <div class="form-group">
                                    <label for="source">Source</label>
                                    <input type="text" class="form-control" id="source" name="source" value="{{ $project->source ?? '' }}" placeholder="Enter Source (e.g. client name)">
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="ckeditor form-control" id="description" name="description" rows="8">{{ $project->description ?? '' }}</textarea>
                                </div>
                                @foreach([1, 2, 3, 4] as $n)
                                    <div class="form-group">
                                        <label for="image_{{ $n }}">Image {{ $n }}</label>
                                        @if(isset($project) && $project->{'img_'.$n})
                                            <div class="mb-2">
                                                <img class="rounded img img-fluid" style="max-width: 80px;" src="{{ url('upload/images/project/' . $project->{'img_'.$n}) }}" alt="">
                                            </div>
                                            <p style="font-size: 11px;font-style: italic;">leave blank if you do not wish to change this image</p>
                                        @endif
                                        <input type="file" class="form-control" id="image_{{ $n }}" name="image_{{ $n }}" accept="image/*">
                                    </div>
                                @endforeach
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/project') }}" class="btn btn-warning">Back</a>
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