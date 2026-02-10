async function setLanguage(lang){
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();

  document.querySelectorAll("[data-lang]").forEach(el=>{
    const key = el.getAttribute("data-lang");
    if(data[key]) el.textContent = data[key];
  });

  document.body.dir = (lang === "ar") ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}

window.onload = ()=>{
  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);
};