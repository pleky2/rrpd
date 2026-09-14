@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add / Edit Contact</h1>
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
                            <h3 class="card-title">{{ $act == 'edit' ? 'Edit' : 'Add' }} Contact</h3>
                        </div>
                        <form id="contact_form" method="{{ $method }}" action="{{ $url }}">
                            {{ csrf_field() }}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="company_name">Company Name</label>
                                    <input type="text" class="form-control" id="company_name" name="company_name" value="{{ $contact->company_name ?? '' }}" placeholder="Enter Company Name">
                                </div>
                                <div class="form-group">
                                    <label for="code">Code</label>
                                    <input type="text" class="form-control" id="code" name="code" value="{{ $contact->code ?? '' }}" placeholder="e.g. bti">
                                </div>
                                <div class="form-group">
                                    <label for="office">Office</label>
                                    <input type="text" class="form-control" id="office" name="office" value="{{ $contact->office ?? '' }}" placeholder="e.g. Head Office">
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="ckeditor form-control" id="description" name="description" rows="4">{{ $contact->description ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="address_ho">Address (Head Office)</label>
                                    <textarea class="form-control" id="address_ho" name="address_ho" rows="3">{{ $contact->address_ho ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="address_branch">Address (Branch)</label>
                                    <textarea class="form-control" id="address_branch" name="address_branch" rows="3">{{ $contact->address_branch ?? '' }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" class="form-control" id="phone" name="phone" value="{{ $contact->phone ?? '' }}">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" value="{{ $contact->email ?? '' }}">
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="instagram">Instagram URL</label>
                                        <input type="text" class="form-control" id="instagram" name="instagram" value="{{ $contact->instagram ?? '' }}">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label for="instagram_title">Instagram Title</label>
                                        <input type="text" class="form-control" id="instagram_title" name="instagram_title" value="{{ $contact->instagram_title ?? '' }}">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="youtube">YouTube URL</label>
                                        <input type="text" class="form-control" id="youtube" name="youtube" value="{{ $contact->youtube ?? '' }}">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label for="linkedin">LinkedIn URL</label>
                                        <input type="text" class="form-control" id="linkedin" name="linkedin" value="{{ $contact->linkedin ?? '' }}">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-info">Save</button>
                                <a href="{{ url('/contact') }}" class="btn btn-warning">Back</a>
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