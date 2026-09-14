@extends('admin.index')

@section('content')
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Change Password</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-secondary">
                        <div class="card-header">
                            <h3 class="card-title">Ganti Password</h3>
                        </div>
                        <form id="pass_form" method="POST" action="{{ url('/change-password') }}">
                            {{ csrf_field() }}

                            <div class="card-body">
                                <div class="form-group">
                                    <label for="current_password">Password Lama</label>
                                    <input type="password" class="form-control" id="current_password" name="current_password" placeholder="Masukkan password lama" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password Baru</label>
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Minimal 6 karakter" required minlength="6">
                                </div>
                                <div class="form-group">
                                    <label for="password_confirmation">Konfirmasi Password Baru</label>
                                    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Ulangi password baru" required>
                                </div>
                            </div>

                            <div class="card-footer">
                                <a onclick="onSave()" type="submit" class="btn btn-info text-white" style="cursor: pointer;">Update</a>
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
<script type="text/javascript">
    function onSave(){
        swal({
            title: 'Ganti password?',
            icon: 'info',
            buttons: true
        }).then(res => {
            if(res) {
                $('#pass_form').submit()
            }
        })
    }
</script>
@endpush
