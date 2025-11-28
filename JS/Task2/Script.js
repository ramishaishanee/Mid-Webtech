// Array of image URLs 
const images = [
  "https://images.trvl-media.com/place/6046393/42aba7bb-33fc-48c4-abde-165cf311ea84.jpg?impolicy=fcrop&w=450&h=280&q=medium",
  "https://static.toiimg.com/photo/54539234.cms",
  "https://wanderingwagars.com/wp-content/uploads/2023/03/Things-to-do-in-Phuket-Thailand-Feature.jpg",
  "https://simbaseatrips.com/wp-content/uploads/2024/10/1487-1.jpg"
];

const bannerImage = document.getElementById("bannerImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage(index) {
  bannerImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

setInterval(nextImage, 3000);