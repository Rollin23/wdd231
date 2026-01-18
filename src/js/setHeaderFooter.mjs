
function setHeaderInfo(data) {

  if (data.fullName) {
    document.title = data.fullName;
  }

  const disclaimer = document.querySelector(".disclaimer > a");
  if (disclaimer) {
    disclaimer.href = data.url;
    disclaimer.textContent = data.fullName;
  }
}

export default function setHeaderFooter(data) {
  setHeaderInfo(data);
}
