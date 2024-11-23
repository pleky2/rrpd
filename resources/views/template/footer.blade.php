<!--Footer -->
<footer>
  <div class="container">
    <div class="row">
      <div class="column column-40">
        <a href="#" class="img-logo">
          <img src="{{ asset('assets/images/logo_home.png') }}" alt="">
        </a>
        <p class="img-title">Contractor and Trading Company</p>

        <div class="contact">
          <h5>{{ __('footer.kontak') }}</h5>
          <p>{{ __('footer.email') }} : {{ $profile->email }}</p>
          <p>{{ __('footer.telepon') }} : {{ $profile->phone }}</p>
        </div>

        <div>
          <h5>{{ __('footer.sosmed') }}</h5>
          <div class="media">
            <a href="{{ $profile->instagram }}" target="_blank"><img
                src="{{ asset('assets/images/material/ic-ig-green.svg') }}" alt="icon"></a>
            <a href="{{ $profile->linkedin }}" target="_blank"><img
                src="{{ asset('assets/images/material/ic-lnk-green.svg') }}" alt="icon"></a>
            <a href="#" target="_blank"><img src="{{ asset('assets/images/material/ic-yt-green.svg') }}" alt="icon"></a>
          </div>
        </div>
      </div>
      <div class="column column-70">
        <h5>{{ __('footer.alamat') }}</h5>
        <div class="row">
          <div class="column">
            <h5>{{ __('footer.pusat') }}</h5>
            <span>{{ $profile->address_ho }}</span>
          </div>
          <div class="column">
            <h5>{{ __('footer.pabrik') }}</h5>
            <span>{{ $profile->address_branch }}</span>

            <div class="partner">
              <img src="{{ asset('assets/images/enpos.png') }}" alt="">
              <img src="{{ asset('assets/images/gh.png') }}" alt="">
              <img src="{{ asset('assets/images/yys.png') }}" alt="">
              <img src="{{ asset('assets/images/mebi.jpeg') }}" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
<script type="text/javascript" src="{{ asset('assets/js/common.js') }}"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> -->

<script>
    function redirectToUrl(selectElement) {
        const selectedValue = selectElement.value;
        
        // Check if the value is not empty
        if (selectedValue) {
            window.location.href = selectedValue;  // Redirect to the selected URL
        }
    }
</script>

</body>

</html>