
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.items');

wrapper.addEventListener('click', function(e) {
  const targetElem = e.target;
  if (!targetElem.classList.contains('item')) return;
  targetElem.classList.toggle('open');
  items.forEach(function(elem) {
    if (elem !== targetElem) elem.classList.remove('open');
  })
})

// items.forEach(function(item) {
//   items.addEventListener('click', function(e){
//     item.classList.toggle('open');
//     items.forEach(function(elem) {
//       if (elem !== itme) elem.classList.remove('open');
//     })
//   })
// });