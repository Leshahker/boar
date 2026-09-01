document.querySelectorAll("[data-menu]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nav = document.querySelector("nav.primary");
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
});

document.querySelectorAll("[data-filters]").forEach((root) => {
  const buttons = [...root.querySelectorAll(".filter")];
  const rows = [...document.querySelectorAll("[data-type]")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-on"));
      button.classList.add("is-on");
      const type = button.dataset.filter;
      rows.forEach((row) => {
        row.hidden = type !== "all" && row.dataset.type !== type;
      });
    });
  });
});

const form = document.querySelector("[data-join-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const done = document.querySelector("[data-join-done]");
    form.hidden = true;
    if (done) done.hidden = false;
  });
}
