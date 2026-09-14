@extends('admin.index')

@section('content')
    <section class="content">
        <div class="row">
            <h2 class="mt-4 mb-4 ml-2">List Superiority (Keunggulan)</h2>
            <div class="col-md-12">
                <a href="{{ url('/superiority/add') }}" class="btn btn-success mb-3">Create</a>
                <table id="data_superiority" class="table table-bordered table-striped" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Icon</th>
                            <th>Title</th>
                            <th>Code</th>
                            <th>Language</th>
                            <th>Description</th>
                            <th>Action</th>
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
            $('#data_superiority').DataTable({
                processing: true,
                serverSide: true,
                ajax: "/superiority/all",
                columns: [
                    { data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false },
                    { data: 'img', name: 'img', orderable: false, searchable: false },
                    { data: 'title', name: 'title' },
                    { data: 'code', name: 'code' },
                    { data: 'lang', name: 'lang' },
                    { data: 'description', name: 'description' },
                    { data: 'action', name: 'action', orderable: false, searchable: false },
                ]
            });
        });
    </script>
@endpush