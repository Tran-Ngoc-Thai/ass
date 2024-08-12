// Hiệu ứng onmouseover và onmouseout cho navbar
function thayDoiMauNen(element) {
  element.style.backgroundColor = '#E6E6FA'; // Đổi màu nền khi di chuột vào
}

function khoiPhucMauNen(element) {
  element.style.backgroundColor = 'transparent'; // Khôi phục màu nền khi di chuột ra
}

// Slide show
let slideIndex = 1;
showSlides(slideIndex);

// Chuyển đến slide tiếp theo khi nhấn nút next
function plusSlides(n) {
  showSlides(slideIndex += n); // Tăng hoặc giảm slide index và hiển thị slide mới
}

// Chuyển đến slide được chọn khi nhấn vào các nút dot
function currentSlide(n) {
  showSlides(slideIndex = n); // Hiển thị slide được chọn dựa trên index
}

// Hiển thị slide hiện tại
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Kiểm tra nếu slide index vượt quá số lượng slide, quay lại slide đầu tiên
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Kiểm tra nếu slide index nhỏ hơn 1, quay lại slide cuối cùng
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Ẩn tất cả các slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Xóa lớp active cho tất cả các dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Hiển thị slide hiện tại và đánh dấu dot tương ứng là active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Gọi hàm chuyển slide mỗi 3 giây
setInterval(function() {
  plusSlides(1); // Chuyển sang slide tiếp theo mỗi 3 giây
}, 3000);

// Làm jQuery
$(document).ready(function() {
  // Lấy chiều rộng của phần tử marquee
  var marqueeWidth = $('.marquee').width();

  // Thiết lập chiều rộng của phần tử con span bằng tổng chiều rộng của phần tử marquee và một khoảng trống
  $('.marquee span').css('padding-right', marqueeWidth + 'px'); // Đặt khoảng trống để tạo hiệu ứng di chuyển
});

// Audio
function playMusic() {
  var audio = document.getElementById('myAudio');
  audio.play(); // Phát nhạc
}

// Đăng nhập
function login(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Kiểm tra thông tin đăng nhập và thực hiện xử lý phù hợp
  if (username === 'admin' && password === '123456') {
    // Lưu thông tin người dùng đã đăng nhập vào LocalStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);

    // Chuyển hướng đến trang sau khi đăng nhập thành công
    window.location.href = 'index.html';
  } else {
    alert('Đăng nhập không thành công. Vui lòng kiểm tra tên đăng nhập và mật khẩu.');
  }
}
