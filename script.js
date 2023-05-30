let index = 0;

function changeColors() {
  const colors = [
    "red",
    "blue",
    "purple",
    "lightgray",
    "lightpink",
    "lightcoral",
  ];
  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) return (index = 0);
}
