let allData = [];
let data = document.querySelectorAll('td').forEach(data => {
  allData.push(data.textContent);
});

console.log(allData[1]);