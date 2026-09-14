@extends('admin.index')

@section('content')
    <section class="content">
        <div class="row">
            <h2 class="mt-4 mb-4 ml-2">List Project</h2>
            <div class="col-md-12">
                <a href="{{ url('/project/add') }}" class="btn btn-success mb-3">Create</a>
                <table id="data_project" class="table table-bordered table-striped" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Order</th>
                            <th>Address</th>
                            <th>Source</th>
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
            $('#data_project').DataTable({
                processing: true,
                serverSide: true,
                ajax: "/project/all",
                columns: [
                    { data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false },
                    { data: 'img_1', name: 'img_1', orderable: false, searchable: false },
                    { data: 'name', name: 'name' },
                    { data: 'slug', name: 'slug' },
                    { data: 'is_order', name: 'is_order' },
                    { data: 'address', name: 'address' },
                    { data: 'source', name: 'source' },
                    { data: 'action', name: 'action', orderable: false, searchable: false },
                ]
            });
        });
    </script>
@endpush