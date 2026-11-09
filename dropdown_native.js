const dropdown = document.querySelector('#i34-main');

if (dropdown) {
  const titles = Array.from(dropdown.options)
    .map(option => option.textContent.trim())
    .filter(title => title && title !== 'None');

  console.log(titles.join('\n'));
} else {
  console.error('Dropdown not found!');
}