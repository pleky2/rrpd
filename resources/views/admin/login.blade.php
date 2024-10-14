<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="About Us - PT Raja Teknik Aditama (RTA)">
  <meta property="og:type" content="website">
  <meta property="og:description" content="PT Raja Teknik Aditama specializes in custom-made parts, engineering products and spare&nbsp; parts. We offer high-tech precision machinery parts for specific application toimprove parts lifetime, machine efficiency and productivity. Our flexibilty allow us to provide the best services to our customer for new build or repair parts programme to set the most economical solutions. &nbsp;">
  <meta property="og:site_name" content="PT Raja Teknik Aditama (RTA)">
  <meta property="og:url" content="https://rtateknik.com/">
  <link rel="canonical" href="https://rtateknik.com/">
  <title>RTA | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="{{ asset("/dist/css/adminlte.min.css")}}">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition login-page">
@if(session()->has('alert'))
    <div class="alert alert-warning">
        {{ session()->get('alert') }}
    </div>
@endif
<div class="login-box">
  <div class="login-logo">
    <p><b>CMS </b>RTA</p>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>
    
      <form action="{{ url('/loginpost') }}" method="post">
        {{ csrf_field() }}
        <div class="input-group mb-3">
          <input type="email" name="email" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <input type="submit" class="btn btn-primary btn-block btn-flat" value="Sign In">
          </div>
        </div>
      </form>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
</body>
</html>
