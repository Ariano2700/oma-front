function chooseAvatarImage() {
    const avatarInput = document.getElementById('avatar-input');
    avatarInput.click();

    avatarInput.addEventListener('change', function () {
        const avatarImage = document.getElementById('avatar-image');
        const selectedFile = avatarInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarImage.src = e.target.result;
            };

            reader.readAsDataURL(selectedFile);
        }
    });
}

function choosePortadaImage() {
    const portadaInput = document.getElementById('portada-input');
    portadaInput.click();

    portadaInput.addEventListener('change', function () {
        const portadaImage = document.getElementById('portada-image');
        const selectedFile = portadaInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                portadaImage.src = e.target.result;
            };

            reader.readAsDataURL(selectedFile);
        }
    });
}