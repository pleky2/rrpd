@extends('template.index')

@section('content')
<section class="middle">
    <div class="banner-page center">
      <figure>
        <img src="{{ asset('assets/images/about/cover_w1440_h400_headline-banner-about_1366x768px_.png') }}" alt="">
      </figure>
      <figcaption>
        <h5>TENTANG KAMI</h5>
        <h2>Sambutan CEO</h2>
      </figcaption>
    </div>
    <div class="inner-content">

      <div class="bg-mid"><img src="{{ asset('assets/images/material/bg-mid.svg') }}"></div>
      <div class="ceomessage">
        <div class="wrapper">
          <div class="ceomessage__left">
            <h3><b>From the CEO’s desk</b></h3>
            <p>At SUN Energy, we are committed to making a positive impact on the world by providing integrated solar
              solutions to support the Indonesian government in achieving its energy mix target in 2030. Our goal is to
              create a cleaner and more sustainable future for everyone.</p>
            <p>As a leading solar project developer in Indonesia, we are proud of our achievements and collaborations
              with notable customers from the region. We will continue to expand our operations in the Asia-Pacific
              region, delivering innovative and cost-effective solutions to meet the growing demand for renewable
              energy.</p>
            <p>We recognize that our responsibility extends beyond our stakeholders to every individual, community, and
              environment that we serve. That's why we are committed to promoting sustainable development, creating
              value for all, and fostering a culture of diversity and inclusion.</p>
            <p>We thank you for your support and look forward to a brighter and greener future together.</p>
            <p>Sincerely,<br><strong>Philip Lee, CEO of SUN Energy</strong></p>
            <p>&nbsp;</p>
          </div>
          <div class="ceomessage__right">
            <figure>
              <img src="{{ asset('assets/images/cover_w520_h550_tw473_th500_x18_y10_philip-lee.jpg') }}" alt="">
              <figcaption>
                <h4>Philip Lee</h4>
                <small>CEO of SUN Energy</small>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection