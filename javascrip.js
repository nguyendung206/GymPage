// Nút mobilemenu
var menuIcon = document.getElementById('menuIcon');
var navbarList = document.querySelector('.navbar__list');
// Thêm sự kiện click cho nút bấm menuIcon
menuIcon.addEventListener('click', function() {
    // Kiểm tra lớp 'active' để xem trạng thái hiển thị
    var isActive = navbarList.classList.contains('active');
    // Nếu đang hiển thị, ẩn thẻ ul và loại bỏ lớp 'active'
    if (isActive) {
        navbarList.style.display = 'none';
        navbarList.classList.remove('active');
    } else { // Nếu không hiển thị, hiển thị thẻ ul và thêm lớp 'active'
        navbarList.style.display = 'block';
        navbarList.classList.add('active');
    }
});

// Tự động đóng menu khi chọn menu
var menuItems = document.querySelectorAll('.navbar__nav li a[href*="#"]');
for (var i=0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.addEventListener('click', function() {
        var isActive = navbarList.classList.contains('active');
        if (isActive) {
            navbarList.style.display = 'none';
            navbarList.classList.remove('active');
        }
    })
}

function adjustNavbarDisplay() {
    if (window.innerWidth > 992) {
      navbarList.style.display = "block";
    } else {
      navbarList.style.display = "none";
    }
  }
  
// Gọi hàm một lần khi trang web tải lên và sau mỗi lần thay đổi kích thước cửa sổ
window.addEventListener("load", adjustNavbarDisplay);
window.addEventListener("resize", adjustNavbarDisplay);

// // Hiển thị thông báo đăng kí thành công
var registerForm = document.getElementById('register-form'); // Select the form element
var registerInputs = document.querySelectorAll('.register-input'); // Select all input fields
var registerSubmitButton = document.querySelector('.register-submit');
var registerSuccess = document.querySelector('.register-success');

// Thêm sự kiện submit cho form
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var allInputsFilled = true;

    // Duyệt qua tất cả các trường input và kiểm tra nếu có trường nào không được điền
    for (var i = 0; i < registerInputs.length; i++) {
        if (registerInputs[i].value.trim() === '') {
            allInputsFilled = false;
            break; // Thoát khỏi vòng lặp nếu có trường chưa điền
        }
    }

    if (!allInputsFilled) {
        event.preventDefault(); // Ngăn chặn gửi form nếu có trường chưa điền
        alert('Please fill in all required fields.'); // Hiển thị thông báo
    } else {
        // Ẩn form và hiển thị register-success nếu tất cả trường đã điền đầy đủ
        registerForm.style.display = 'none';
        registerSuccess.style.display = 'block';
    }
});



// Bật tắt modal buy ticket
var buyBtns = document.querySelectorAll('.js-buy-ticket')
var modal = document.querySelector('.modal')
var modalClose = document.querySelector('.modal-close')
var modalContainer = document.querySelector('.modal-container')
// Hàm mở modal buy ticket
function showBuytickets() {
    modal.classList.add('open')
}
// Hàm đóng modal buy ticket
function hideBuytickets() {
    modal.classList.remove('open')
}
for (var buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuytickets)
}
modalClose.addEventListener('click', hideBuytickets)
modal.addEventListener('click', hideBuytickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})