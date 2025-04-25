document.addEventListener("DOMContentLoaded", () => {
  const shopNowBtn = document.querySelector(".btn-primary");
  const tryAppBtn = document.querySelector(".btn-outline");

  shopNowBtn.addEventListener("click", () => {
    alert("Redirecting you to the shop...");
    // Simulate redirect
    window.location.href = "#shop"; // replace with actual shop URL
  });

  tryAppBtn.addEventListener("click", () => {
    alert("Opening app store...");
    // Simulate app store link
    window.open("https://example.com/app", "_blank"); // replace with your app store link
  });
});