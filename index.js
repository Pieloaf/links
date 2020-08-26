var images = document.getElementsByClassName("image");
var openImage = function () {
  var source = this.getAttribute("src");
  source = source.replace("thumbs/", "/");
  var win = window.open(source, "_blank");
  win.focus();
};
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", openImage, false);
}
