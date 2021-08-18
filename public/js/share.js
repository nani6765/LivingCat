const url = "https://livingcat.herokuapp.com/";

function setShare() {
  var resultImg = document.querySelector("#resultImg");
  var resultAlt = resultImg.firstChild.alt;
  const shareTitle = "고양이로 태어난다면";
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + "img/image-" + resultAlt + ".png";
  const shareURL = url + "result/" + resultAlt;

  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "결과 확인하기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
