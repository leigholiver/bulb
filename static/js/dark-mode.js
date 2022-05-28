document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.dark-mode-checkbox');
  const toggle = document.querySelector('.dark-mode-toggle');
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localSetting = localStorage.getItem('darkMode');

  let isGoingDark = localSetting === null ? prefersDark : localSetting === 'true';
  setDarkMode(checkbox, toggle, isGoingDark);

  toggle.addEventListener("click", function (event) {
      const isGoingDark = !checkbox.checked
      checkbox.checked = isGoingDark;
      setDarkMode(checkbox, toggle, isGoingDark);
  });
});

function setDarkMode(checkbox, toggle, isGoingDark) {
  checkbox.checked = isGoingDark;
  localStorage.setItem('darkMode', isGoingDark);
  toggle.innerHTML = isGoingDark ? '🌞' : '🌚';
}
