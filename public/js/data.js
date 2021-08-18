const qnaList = [
  {
    q: "새로운 환경에서<br>일하게 되었을 때!",
    a: [
      {
        answer: "새로운 환경에 금세 적응한다.",
        type: [4, 8, 11, 14, 5, 7, 9, 3],
      },
      {
        answer: "누군가 말을 걸어주길 바란다.",
        type: [2, 1, 15, 6, 0, 10, 12, 13],
      },
    ],
  },
  {
    q: "누군간 이 적막을 깨야 한다!",
    a: [
      {
        answer: "아무도 말 안 하니 내가 해야겠다. 🤔",
        type: [1, 5, 4, 3, 9, 7, 8, 14, 11],
      },
      { answer: "누군간 말하겠지...", type: [13, 10, 6, 2, 15, 12, 0] },
    ],
  },
  {
    q: "제주도로 여행을 간다구?",
    a: [
      {
        answer: "도착해선 이거하고<br>나가선 이거하고 그다음엔...",
        type: [4, 11, 5, 9, 2, 15, 0, 12],
      },
      { answer: "가서 생각해보지 뭐!", type: [8, 14, 7, 3, 1, 6, 10, 13] },
    ],
  },
  {
    q: "원하던 곳으로<br>떠날 기회가 왔다!",
    a: [
      {
        answer: "두고 가야 할 사람들이 많은걸...",
        type: [2, 0, 15, 7, 9, 11, 12, 4, 5, 0, 6],
      },
      { answer: "말해 뭐해, 가자!", type: [8, 1, 7, 3, 13, 14] },
    ],
  },
  {
    q: "나를 화나게 하는 친구!<br>더는 못 참아. 😡",
    a: [
      {
        answer: "이번이 마지막 기회야 (500번째)",
        type: [12, 9, 5, 1, 8, 2, 4, 0, 10, 6],
      },
      { answer: "빠른 손절", type: [11, 15, 14, 13, 7, 3] },
    ],
  },

  {
    q: '"대박!"에 대한 나의 생각은?',
    a: [
      { answer: "진짜 대박이라고 생각!!!", type: [4, 8, 11, 14, 5, 7, 9, 3] },
      { answer: "버릇처럼 나오는 말", type: [2, 1, 15, 6, 0, 10, 12, 13] },
    ],
  },
  {
    q: "길 가다 갖고 싶던 물건 발견!",
    a: [
      { answer: "운명이다, 사버려!", type: [14, 8, 3, 7, 6, 1, 13, 10] },
      { answer: "쓱 보고 지나감", type: [11, 12, 0, 9, 15, 2, 4, 5] },
    ],
  },
  {
    q: "생각한 것만큼<br>성과가 나오지 않았다.",
    a: [
      {
        answer: "괜찮아, 그래도 열심히 했잖아!",
        type: [4, 8, 5, 7, 2, 1, 0, 10],
      },
      {
        answer: "성과를 거두지 못한 사실에 화가 남",
        type: [11, 14, 9, 3, 15, 6, 12, 13],
      },
    ],
  },
  {
    q: '"취업 준비 중인데<br>힘들어...😥"',
    a: [
      { answer: "어디 어디 넣었는데?", type: [11, 14, 9, 3, 15, 6, 12, 13] },
      { answer: "많이 힘들지 🥲", type: [4, 8, 5, 7, 2, 1, 0, 10] },
    ],
  },
  {
    q: "오랜만에 만난 동창들!",
    a: [
      {
        answer: "글쎄 요새 무슨 일이 있었냐면...",
        type: [4, 8, 11, 14, 5, 7, 9, 3],
      },
      {
        answer: "(끄덕끄덕) 이야기 듣는 중",
        type: [2, 1, 15, 6, 0, 10, 12, 13],
      },
    ],
  },
  {
    q: "도전하고 싶은 일이 생겼다!",
    a: [
      {
        answer: "한 번도 해보지 않은 일인데<br>내가 할 수 있을까...",
        type: [5, 7, 9, 3, 0, 10, 12, 13],
      },
      { answer: "화이팅 하자구!!! 🤩̑", type: [4, 8, 11, 14, 2, 1, 15, 6] },
    ],
  },
  {
    q: "다음 주가 중요한 시험일 때",
    a: [
      {
        answer: "오늘은 이 공부하고<br>내일은 이 공부해야겠다!",
        type: [4, 11, 5, 9, 2, 15, 0, 12],
      },
      {
        answer: "아직 일주일이나 남았잖아? 🥳",
        type: [8, 14, 7, 3, 1, 6, 10, 13],
      },
    ],
  },
];

const infoList = [
  {
    name: "러시안 블루",
    desc: " ",
  },
  {
    name: "샴",
    desc: " ",
  },
  {
    name: "페르시안",
    desc: " ",
  },
  {
    name: "뱅갈 터키시",
    desc: " ",
  },
  {
    name: "터키시 앙고라",
    desc: " ",
  },
  {
    name: "아비시니안",
    desc: " ",
  },
  {
    name: "노르웨이 숲",
    desc: " ",
  },
  {
    name: "아메리칸 숏헤어",
    desc: " ",
  },
  {
    name: "코리안 숏헤어",
    desc: " ",
  },
  {
    name: "엑죠틱",
    desc: " ",
  },
  {
    name: "스코티시 폴드",
    desc: " ",
  },
  {
    name: "먼치킨",
    desc: " ",
  },
  {
    name: "렉돌",
    desc: " ",
  },
  {
    name: "브리티시 숏헤어",
    desc: " ",
  },
  {
    name: "스핑크스",
    desc: " ",
  },
  {
    name: "메인쿤",
    desc: " ",
  },
];
