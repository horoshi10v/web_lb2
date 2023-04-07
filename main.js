let selectedImage = null;

function selectImage(img) {
    if (selectedImage !== null) {
        selectedImage.classList.remove('selected');
    }
    img.classList.add('selected');
    selectedImage = img;
}

function moveUp() {
    if (selectedImage !== null && selectedImage.previousElementSibling !== null) {
        selectedImage.parentNode.insertBefore(selectedImage, selectedImage.previousElementSibling);
    }
}

function moveDown() {
    if (selectedImage !== null && selectedImage.nextElementSibling !== null) {
        selectedImage.parentNode.insertBefore(selectedImage.nextElementSibling, selectedImage);
    }
}

function updateImage() {
    if (selectedImage!==null) {
        selectedImage.setAttribute("width", document.getElementById("widthInput").value);
        selectedImage.setAttribute("height", document.getElementById("heightInput").value);
        selectedImage.style.borderWidth = document.getElementById("borderInput").value + "px";
        selectedImage.setAttribute("alt", document.getElementById("altInput").value);
    }
}


let images = document.querySelectorAll('#gallery img');
images.forEach(function(img) {
    img.addEventListener('click', function() {
        selectImage(this);
    });
});