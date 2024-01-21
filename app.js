function openNewTab(menuName) {
  sessionStorage.setItem("menuName", menuName);

  window.open("http://127.0.0.1:5500/checkout.html");
}
