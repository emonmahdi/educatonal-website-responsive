document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", function () {
    let answer = this.nextElementSibling;
    let icon = this.querySelector(".faq-icon");

    // Toggle display
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.classList.remove("rotate");
    } else {
      // Hide all other answers
      document
        .querySelectorAll(".faq-answer")
        .forEach((ans) => (ans.style.display = "none"));
      document
        .querySelectorAll(".faq-icon")
        .forEach((ic) => ic.classList.remove("rotate"));

      // Show current answer
      answer.style.display = "block";
      icon.classList.add("rotate");
    }
  });
});

// contact form

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form from submitting immediately

//     let confirmSubmission = confirm("Are you sure you want to submit this form?");
    
//     if (confirmSubmission) {
//         alert("Your message has been sent successfully!");
//         this.reset(); // Reset the form after submission
//     }
// });

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting immediately
    
    var modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show(); // Show the Bootstrap modal

    this.reset(); // Reset the form after showing the modal
});