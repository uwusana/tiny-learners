document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("setupForm");
  const imageInput = document.getElementById("childImage");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("FORM SUBMITTED");

    const name = document.getElementById("childName").value.trim();
    const gender = document.getElementById("childGender").value;
    const imageFile = imageInput.files[0];

    localStorage.setItem("childName", name);
    localStorage.setItem("childGender", gender);
    localStorage.setItem("setupComplete", "true"); // ✅ ALWAYS set

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = () => {
        localStorage.setItem("childImage", reader.result);
        window.location.href = "home.html";
      };

      reader.readAsDataURL(imageFile);
    } else {
      localStorage.removeItem("childImage");
      window.location.href = "home.html";
    }
  });
});
