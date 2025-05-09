document.addEventListener("DOMContentLoaded", () => {
  const glow = document.getElementById("glow");
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
});
