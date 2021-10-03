
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');


// items.forEach(function (item) {
//   items.addEventListener('click', function (e) {
//     item.classList.toggle('open');
//     items.forEach(function (elem) {
//       if (elem !== itme) elem.classList.remove('open');
//     })
//   })
// });

// EventListener 최소화 하는것이 좋다.

// wrapper.addEventListener('click', function(e) {
//   const targetElem = e.target;
//   e.stopPropagation();
//   if (!targetElem.classList.contains('item')) return;
//   targetElem.classList.toggle('open');
//   items.forEach(function(elem) {
//     if (elem !== targetElem) elem.classList.remove('open');
//   })
// });

// 외부를 클릭
// document.body.addEventListener('click', function(e) {
//   if(e.target.classList.contains('context')) return;
//   items.forEach(function(elem) {
//     items.forEach()
//   })
// });

document.body.addEventListener('click', function (e) {
  const targetClassList = e.target.classList;
  if (targetClassList.contains('context')) return;

  if (targetClassList.contains('item')) {
    targetClassList.toggle('open');
    items.forEach(function (elem) {
      if (elem !== e.target) elem.classList.remove('open');
    });
    return;
  }
  items.forEach(function (elem) {
    elem.classList.remove('open');
  });
});
