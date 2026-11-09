const root = $0.closest('.dropdown') || $0.parentElement;

const items = Array.from(root.querySelectorAll('.menu .item'))
  .map(el => el.textContent.replace(/\s+/g, ' ').trim())
  .filter(Boolean);

console.log(items.length + ' items');
copy(items.join('\n'));