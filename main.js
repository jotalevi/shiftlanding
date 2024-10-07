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