// TypeError: querySelectorAll is not a function

console.log('bobbyhadz.com');

const blue = document.querySelectorAll('.box .blue');
console.log(blue); // 👉️ [div.blue]

// -------------------------------------------------------

// Check if the element exists before calling `querySelectorAll`

const box = null;

if (
  typeof box === 'object' &&
  box !== null &&
  'querySelectorAll' in box
) {
  console.log(box.querySelectorAll('.blue'));
}
