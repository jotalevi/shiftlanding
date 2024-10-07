toggleFAQShow = (element) => {
  let elements = document.querySelectorAll('.faq-item');

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }

  element.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded',
  function () {
    document.querySelectorAll('.loading').forEach((element) => {
      element.classList.remove('loading');
    });
  }
)

toggleDarkMode = () => {
  localStorage.setItem('darkMode', !document.isDarkMode);
  document.isDarkMode = !document.isDarkMode;

  document.querySelector('body').classList.remove(document.isDarkMode ? 'light' : 'dark');
  document.querySelector('body').classList.add(document.isDarkMode ? 'dark' : 'light');   
}

sendContactMail = () => {
  var data = JSON.stringify({
    firstName: document.getElementById('firstNameInputContact').value,
    lastName: document.getElementById('lastNameInputContact').value,
    email: document.getElementById('businessMailInputContact').value,
    companyName: document.getElementById('companyNameInputContact').value,
    jobTitle: document.getElementById('jobTitleInputContact').value,
    message: document.getElementById('messageInputContact').value
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://g48yfip4aa.execute-api.us-east-2.amazonaws.com/default/contact_handle");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  console.log(opts);
}

sendScheduleCall = () => {
  var data = JSON.stringify({
    firstName: document.getElementById('firstNameInputCall').value,
    lastName: document.getElementById('lastNameInputCall').value,
    email: document.getElementById('businessMailInputCall').value,
    phone: document.getElementById('phoneNumberInputCall').value,
    companyName: document.getElementById('companyNameInputCall').value,
    jobTitle: document.getElementById('jobTitleInputCall').value,
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://g48yfip4aa.execute-api.us-east-2.amazonaws.com/default/contact_handle");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  console.log(opts);
}