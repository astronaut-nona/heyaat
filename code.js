// انتخاب تمام عناصر با کلاس fade-in
const faders = document.querySelectorAll(".fade-in");

// ساخت یک Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target); // فقط یکبار انیمیشن انجام شود
    }
  });
}, {
  threshold: 0.1
});

// اتصال تمام عناصر به Observer
faders.forEach(el => observer.observe(el));
