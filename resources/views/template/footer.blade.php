  <!--Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="column column-40">
          <a href="#" class="img-logo">
            <img src="{{ asset('assets/images/logo-foot.jpg') }}" alt="">
          </a>
          <div class="contact">
            <h5>Kontak BTI</h5>
            <p>Email : {{ $profile->email }}</p>
            <p>No. Telepon 	: {{ $profile->phone }}</p>
          </div>

          <div>
            <h5>Sosial Media</h5>
            <div class="media">
              <a href="{{ $profile->instagram }}" target="_blank"><img src="{{ asset('assets/images/material/ic-ig-green.svg') }}" alt="icon"></a>
              <a href="{{ $profile->linkedin }}" target="_blank"><img src="{{ asset('assets/images/material/ic-lnk-green.svg') }}" alt="icon"></a>
              <a href="#" target="_blank"><img src="{{ asset('assets/images/material/ic-yt-green.svg') }}" alt="icon"></a>
            </div>
          </div>
        </div>
        <div class="column column-70">
          <h5>Alamat</h5>
          <div class="row">
            <div class="column">
              <h5>Headquarter</h5>
              <span>{{ $profile->address_ho }}</span>
            </div>
            <div class="column">
              <h5>Pabrik Woodchips </h5>
              <span>{{ $profile->address_branch }}</span>

              <div class="partner">
                <img src="{{ asset('assets/images/enpos.png') }}" alt="">
                <img src="{{ asset('assets/images/enpos.png') }}" alt="">
                <img src="{{ asset('assets/images/enpos.png') }}" alt="">
                <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <!-- <div class="foot-top">
        <div class="foot-top__box logo">
          <a href="#" class="img-logo">
            <img src="{{ asset('assets/images/logo_home.png') }}" alt="">
          </a>
          
          <div>
            <h5>Sosial Media</h5>
            <div class="media">
              <a href="#" target="_blank"><img src="{{ asset('assets/images/material/ic-ig-green.svg') }}" alt="icon"></a>
              <a href="#" target="_blank"><img src="{{ asset('assets/images/material/ic-yt-green.svg') }}" alt="icon"></a>
              <a href="#" target="_blank"><img src="{{ asset('assets/images/material/ic-lnk-green.svg') }}" alt="icon"></a>
              <a href="#" target="_blank"><img width="22" height="22" src="{{ asset('assets/images/material/fb-lnk.svg') }}" alt="icon"></a>
            </div>
          </div>
        </div>
        <div class="foot-top__box">
          <h5>Headquarter</h5>
          <a href="#" class="icon">
            <img width="24" height="24" src="{{ asset('assets/images/material/ic-loc.svg') }}" alt="">
            Srikaton, Kec. Tj. Bintang, Kabupaten Lampung Selatan, Lampung
          </a>
        </div>
        <div class="foot-top__box">
          <h5></h5>
          <h5>Pabrik Woodchips </h5>
          <a href="#" class="icon">
            <img width="24" height="24" src="{{ asset('assets/images/material/ic-loc.svg') }}" alt="">
            Srikaton, Kec. Tj. Bintang, Kabupaten Lampung Selatan, Lampung
          </a>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="column column-60">
          <div class="copyright">Copyright 2024 © Bhakti Terang Indonesia. All Rights Reserved.</div>
        </div>
        <div class="column column-40">
          <div class="foot-link">
            <a href="#">Terms &amp; Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div> -->
    </div>
  </footer>

  <script type="text/javascript" src="{{ asset('assets/js/common.js') }}"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> -->

</body>

</html>