@extends('admin.index')

@section('content')
    <section class="content">
        <div class="row">
            <h2 class="mt-4 mb-4 ml-2">List Our Company</h2>
            <div class="col-md-12">
                <a href="{{ url('/our-company/add') }}" class="btn btn-success mb-3">Create</a>
                <table id="data_ourcompany" class="table table-bordered table-striped" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Company Name</th>
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
            $('#data_ourcompany').DataTable({
                processing: true,
                serverSide: true,
                ajax: "/our-company/all",
                columns: [
                    { data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false },
                    { data: 'company_name', name: 'company_name' },
                    { data: 'code', name: 'code' },
                    { data: 'lang', name: 'lang' },
                    { data: 'description', name: 'description' },
                    { data: 'action', name: 'action' },
                ]
            });
        });
    </script>
@endpush