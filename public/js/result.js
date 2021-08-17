const totalUser = document.querySelector(".totalUser").dataset.total;
const totalUserArea = document.querySelector(".totalUser");
const resultNum = document.querySelector(".resultNum").dataset.total;
const resultNumArea = document.querySelector(".resultNum");

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getUser() {
  let tempTotalUser = numberWithCommas(parseInt(totalUser));
  totalUserArea.innerHTML = tempTotalUser;
  let tempResultNum = numberWithCommas(parseInt(resultNum));
  resultNumArea.innerHTML = tempResultNum;
}

window.onload = getUser();
