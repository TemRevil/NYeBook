// Loading Loader
document.addEventListener("DOMContentLoaded", function () {
  var loadingElement = document.querySelector('.loading-back');
  var body = document.querySelector('body');
  function showOverflow() {
      body.style.overflow = 'auto';
  }
  function hideLoading() {
      loadingElement.style.display = 'none';
      showOverflow();
  }
  if (body.getAttribute('data-loaded') === 'true') {
      hideLoading();
  } else {
      window.addEventListener('load', function () {
          hideLoading();
          body.setAttribute('data-loaded', 'true');
      });
  }
});
// -------------------------------------------------
// Nav offsetHeight
const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav(){
  if(window.scrollY > nav.offsetHeight + 250){
    nav.classList.add('active');
  }else{
    nav.classList.remove('active');
  }
}
// -------------------------------------------------
// header typescript code
function displayAndDeleteSentences(sentences) {
  const sentencesArray = sentences.split(/[.!؟]/);
  const headerElement = document.getElementById('header-typescript');
  const originalContent = headerElement.textContent;
  const headerHeight = headerElement.offsetHeight;
  headerElement.style.height = headerHeight + 'px';
  let index = 0;

  function displaySentence(index, sentence) {
      let i = 0;
      const intervalId = setInterval(() => {
          if (i === sentence.length) {
              clearInterval(intervalId);
              setTimeout(deleteSentence, 2000, index, sentence);
              return;
          }
          headerElement.textContent += sentence.charAt(i);
          i++;
      }, 20);
  }
  function deleteSentence(index, sentence) {
      let i = sentence.length;
      const intervalId = setInterval(() => {
          if (i === 0) {
              clearInterval(intervalId);
              setTimeout(displayNextSentence, 1000);
              return;
          }
          headerElement.textContent = sentence.substring(0, i);
          i--;
      }, 20);
  }
  function displayNextSentence() {
      headerElement.textContent = originalContent;
      index++;
      if (index === sentencesArray.length) {
          index = 0;
      }
      displaySentence(index, sentencesArray[index]);
  }

  displaySentence(index, sentencesArray[index]);
}

const bookSentences = "الكتب هي مفتاح لعالم مليء بالمغامرات والمعرفة. تقدم الكتب لنا فرصة للتعلم والنمو الشخصي. من خلال القراءة، نستمتع برحلات إلى عوالم جديدة ونتعلم من تجارب الآخرين. الكتب تساعدنا على فهم العالم من حولنا وتوسيع آفاقنا الفكرية.";
displayAndDeleteSentences(bookSentences);
// -------------------------------------------------
// OWL owlCarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin : 15,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive : {
      320 : {
          items : 1
      },
      550 : {
          items : 2
      },
      1024 : {
          items : 4
      }
    }
  });
});
