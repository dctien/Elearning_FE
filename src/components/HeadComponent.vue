<template>
  <div class="header">
      <nav class="colorlib-nav" role="navigation">
			<div class="upper-menu">
				<div class="container">
					<div class="row">
						<div class="col-xs-4">
							<p>Chào mừng đến với trang web của chúng tôi</p>
						</div>
						<div class="col-xs-6 col-md-push-2 text-right">
							<p>
								<ul class="colorlib-social-icons">
									<li>
										<a href="#">
											<i class="icon-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="icon-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="icon-dribbble"></i>
										</a>
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-md-2">
							<div id="colorlib-logo">
								<a href="/Home">e-learning</a>
							</div>
						</div>
						<div class="col-md-10 text-right menu-1">
							<ul>
								<li class="active">
									<a href="/Home">Trang chủ</a>
								</li>
								<li class="has-dropdown">
									<a style="cursor: default">Học tập</a>
									<ul class="dropdown">
										<li>
											<a href="#">Toán học</a> 
											<!-- subject.html -->
										</li>
										<li>
											<a href="#">Vật Lý</a>
										</li>
										<li>
											<a href="#">Hoá Học</a>
										</li>
										<li>
											<a href="#">Sinh Học</a>
										</li>
										<li>
											<a href="#">Anh Văn</a>
										</li>
										<li>
											<a href="#">Công Dân</a>
										</li>
									</ul>
								</li>
								<li class="has-dropdown">
									<a style="cursor: default">Thi thử</a>
									<ul class="dropdown">
										<li>
											<a href="exam.html">Toán học</a>
										</li>
										<li>
											<a href="exam.html">Vật Lý</a>
										</li>
										<li>
											<a href="exam.html">Hoá Học</a>
										</li>
										<li>
											<a href="exam.html">Sinh Học</a>
										</li>
										<li>
											<a href="exam.html">Anh Văn</a>
										</li>
										<li>
											<a href="exam.html">Công Dân</a>
										</li>
									</ul>
								</li>
								<li>
									<router-link to="/news">Bản tin</router-link>
								</li>
								<li>
									<router-link to="/abouts">Về chúng tôi</router-link>
								</li>
								<li><a href="contact.html">Liên hệ</a></li>
								<!-- <li class="btn-cta"> -->
									<li>
									<router-link to="/loginpage">Đăng nhập</router-link>
									
								</li>
								<li class="has-dropdown">
									<a style="cursor: default">
										<i class="fas fa-bars" style="font-size: 30px;"></i>
									</a>
									<ul class="dropdown">
										<li>
											<a href="exam.html">Admin</a>
										</li>
										<li>
											<a href="exam.html">Thông tin</a>
										</li>
										<li>
											<a href="exam.html">Đăng xuất</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
  </div>
</template>
 
<script src="src/assets/js/modernizr-2.6.2.min.js"></script>
<script>
export default {

}
</script>

<style>
	@import '../assets/css/animate.css';
	@import '../assets/css/icomoon.css';
	@import '../assets/css/bootstrap.css';
	@import '../assets/css/magnific-popup.css';
	@import '../assets/css/flexslider.css';
	@import '../assets/css/magnific-popup.css';
	@import '../assets/css/flexslider.css';
	/* @import '../assets/css/owl.carousel.min.css'; */
	@import '../assets/css/owl.theme.default.min.css';
	@import '../assets/css/style.css';
	/* @import '../assets/fonts/fontawesome-5.12.0'; */
	@import '../assets/fonts/flaticon/font/flaticon.css';

</style>