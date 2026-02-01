document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("setupForm");
  const imageInput = document.getElementById("childImage");

  if (!form) return; // safety check

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("childName").value.trim();
    const gender = document.getElementById("childGender").value;
    const imageFile = imageInput.files[0];

    // save basic info
    localStorage.setItem("childName", name);
    localStorage.setItem("childGender", gender);

    // if image exists, read & save it
    if (imageFile) {
      const reader = new FileReader();

      reader.onload = () => {
        localStorage.setItem("childImage", reader.result);
        window.location.href = "home.html";
      };

      reader.readAsDataURL(imageFile);
    } else {
      // no image uploaded
      localStorage.removeItem("childImage");
      window.location.href = "home.html";
    }
  });
});
