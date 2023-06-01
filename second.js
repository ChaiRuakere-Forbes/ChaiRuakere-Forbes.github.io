document.addEventListener("DOMContentLoaded", function() {
  var referrer = document.referrer;

  // Check if the page was loaded from index.html
  if (referrer.includes("index.html") && !referrer.includes("tech.html")) {
    var body = document.querySelector("body");
    body.style.opacity = "1";
  }

  var submitButton = document.getElementById("submit-button");
  var submitStatus = document.getElementById("submit-status");
  var complaintInput = document.getElementById("complaint-input");

