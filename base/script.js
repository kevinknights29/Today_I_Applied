/**
 * Toggles the visibility of a job form and changes the text and background color of a share button when clicked.
 *
 * @param {Event} e - The click event.
 */
const share_btn = document.querySelector("#share-btn");
const job_form_div = document.querySelector("#job-form-div");

share_btn.addEventListener("click", (e) => {
  if (job_form_div.classList.contains("hidden")) {
    job_form_div.classList.remove("hidden");
    share_btn.textContent = "Close";
    share_btn.style.backgroundColor = "#c0392b";
  } else {
    job_form_div.classList.add("hidden");
    share_btn.textContent = "Share Job";
    share_btn.style.backgroundColor = "#2ecc71";
  }
});
