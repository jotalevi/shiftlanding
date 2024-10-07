toggleFAQShow = (element) => {
  let elements = document.querySelectorAll('.faq-item');

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }

  element.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded',
    function(){
        document.querySelectorAll('.loading').forEach((element) => {
            element.classList.remove('loading');
        });
    }
)

document.isDarkMode = true;

document.addEventListener('DOMContentLoaded', function () {
  document.isDarkMode = localStorage.getItem('darkMode') === 'true';

  document.querySelector('body').classList.add('dark light');
  document.querySelector('body').classList.remove(document.isDarkMode ? 'light' : 'dark');
});

toggleDarkMode = () => {
  localStorage.setItem('darkMode', !document.isDarkMode);
  document.isDarkMode = !document.isDarkMode;

  document.querySelector('body').classList.remove(document.isDarkMode ? 'light' : 'dark');
  document.querySelector('body').classList.add(document.isDarkMode ? 'dark' : 'light');
}
