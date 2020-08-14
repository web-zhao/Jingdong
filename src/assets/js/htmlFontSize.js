const MAX_FONT_SIZE = 42;

// 不同的屏幕之下对应的rem值
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html');
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
  html.style.fontSize = fontSize + 'px';
});
