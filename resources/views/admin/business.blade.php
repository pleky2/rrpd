@extends('admin.index')

@section('content')
    <section class="content">
        <div class="row">
            <h2 class="mt-4 mb-4 ml-2">List Business</h2>
            <div class="col-md-12">
            <a href={{ url('/menu/add') }} class="btn btn-success mb-3">Create</a>
                <table id="data_menus" class="table table-bordered table-striped" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Menu</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Position</th>
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
                    console.log(e)
                    window.location.href = `${e.dataset.href}`
                }
           })
        }

        $(function() {
            $('#data_menus').DataTable({
                processing: true,
                serverSide: true,
                ajax: "/business/all",
                columns: [
                    {
                        data: 'name',
                        name: 'name'
                    },
                    {
                        data: 'code',
                        name: 'code'
                    },
                    {
                        data: 'menu',
                        name: 'menu'
                    },
                    {
                        data: 'description',
                        name: 'description'
                    },
                    {
                        data: 'background_img',
                        name: 'background_img'
                    },
                    {
                        data: 'position',
                        name: 'position'
                    },
                    {
                        data: 'action',
                        name: 'action'
                    },
                    
                ]
            });
        });
    </script>
@endpush