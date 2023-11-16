function toggleMode () {
   const html = document.documentElement

   if(html.classList.contains('light')) {
    html.classList.remove('light')
   } else {
    html.classList.add('light')
   }

}

window.addEventListener('beforeunload', function() {
   localStorage.setItem('isReloading', 'true');
 });
 
 window.onload = function() {
   if (localStorage.getItem('isReloading') === 'true') {
     localStorage.removeItem('isReloading'); // Limpa a variável no localStorage
     scrollToTop();
   }
 };
 
 function scrollToTop() {
   const scrollDuration = 500; // Duração da animação em milissegundos
   const scrollStep = -window.scrollY / (scrollDuration / 15);
 
   const scrollInterval = setInterval(function() {
     if (window.scrollY !== 0) {
       window.scrollBy(0, scrollStep);
     } else {
       clearInterval(scrollInterval);
     }
   }, 15);
 }