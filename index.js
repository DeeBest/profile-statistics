const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const counters = document.querySelectorAll('h3');

counters.forEach((counter) => {
  counter.textContent = 0;

  incrementCounter();

  function incrementCounter() {
    let currentCounter = counter.textContent;
    const dataCeil = counter.getAttribute('data-ceil');
    const increment = dataCeil / 15;

    currentCounter = Math.ceil(currentCounter + increment);

    counter.textContent = currentCounter;
  }
});
