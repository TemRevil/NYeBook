// Loading Loader
window.addEventListener('load', function() {
  document.querySelector('.loading-back').style.display = 'none';
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

const paragraph = "تسعى لتحسين الظروف الاجتماعية والاقتصادية للأفراد في المجتمع. تقوم المؤسسة بتنفيذ مشاريع وبرامج خيرية متنوعة تستهدف الفئات الأكثر احتياجاً. تعمل المؤسسة بروح العطاء والتضامن لتحقيق التنمية المستدامة في المجتمع. تعتبر المؤسسة حجر الزاوية في بناء مجتمع أفضل وتحقيق العدالة والتنمية الشاملة. تعتبر المؤسسة محورًا للأمل والدعم للعديد من الأسر والأفراد في المدينة المنورة.";
displayAndDeleteSentences(paragraph);
// -------------------------------------------------
// OWL owlCarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});