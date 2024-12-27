@extends('admin.index')

@section('content')
    <section class="content">
        <div class="row">
            <h2 class="mt-4 mb-4 ml-2">List Media</h2>
            <div class="col-md-12">
            <a href={{ url('/media/add') }} class="btn btn-success mb-3">Create</a>
                <table id="data-media" class="table table-bordered table-striped" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Code</th>
                            <th>Url</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </section>
@endsection
@push('scripts')
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>

        function deleteFunc(e) {
           swal({
               title: "Are you sure?",
               text: "Once deleted, you will not be able to recover this data!",
               icon: "warning",
               buttons: true,
               dangerMode: true,
           }).then((willDelete) => {
                if(willDelete) {
                    window.location.href = `${e.dataset.href}`
                }
           })
        }

        $(function() {
            $('#data-media').DataTable({
                processing: true,
                serverSide: true,
                ajax: "/media/all",
                columns: [
                    { data: 'title', name: 'title' },
                    { data: 'code', name: 'code' },
                    { data: 'url', name: 'url' },
                    { data: 'action', name: 'action'},
                ]
            });
        });
    </script>
@endpush