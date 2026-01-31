const form = document.getElementById("setupForm");
    const imageInput = document.getElementById("childImage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("childName").value;
      const gender = document.getElementById("childGender").value;
      const imageFile = imageInput.files[0];

      localStorage.setItem("childName", name);
      localStorage.setItem("childGender", gender);

      if (imageFile) {
        const reader = new FileReader();
        reader.onload = function () {
          localStorage.setItem("childImage", reader.result);
          window.location.href = "home.html";
        };
        reader.readAsDataURL(imageFile);
      } else {
        localStorage.removeItem("childImage");
        window.location.href = "home.html";
      }
    });