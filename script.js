const ideas = [
  {
    title: "深呼吸を5回する",
    mood: "relax",
    time: "5",
    place: "anywhere",
    cost: 0,
  
  },
  {
    title: "窓の外を少し見る",
    mood: "relax",
    time: "5",
    place: "inside",
    cost: 0,
    
  },
  {
    title: "水を一杯飲む",
    mood: "energy",
    time: "5",
    place: "anywhere",
    cost: 0,
    
  },
  {
    title: "次にやることを一つだけ決める",
    mood: "focus",
    time: "5",
    place: "anywhere",
    cost: 0,
    
  },
  {
    title: "好きな香りを少し楽しむ",
    mood: "relax",
    time: "5",
    place: "inside",
    cost: 500,
   
  },
  {
    title: "小さなお菓子を一つ買う",
    mood: "energy",
    time: "5",
    place: "outside",
    cost: 500,
    
  },
  {
    title: "お気に入りの飲み物を買う",
    mood: "relax",
    time: "5",
    place: "outside",
    cost: 500,
    
  },
  {
    title: "新しいメモ帳を見る",
    mood: "focus",
    time: "5",
    place: "outside",
    cost: 500,
    
  },
  {
    title: "小さな花を一つ選ぶ",
    mood: "relax",
    time: "5",
    place: "outside",
    cost: 1000,
   
  },
  {
    title: "テイクアウトの飲み物を選ぶ",
    mood: "relax",
    time: "5",
    place: "outside",
    cost: 1000,
    
  },
  {
    title: "使いやすそうな文房具を選ぶ",
    mood: "focus",
    time: "5",
    place: "outside",
    cost: 1000,
    
  },
  {
    title: "好きなデザートを一つ選ぶ",
    mood: "energy",
    time: "5",
    place: "outside",
    cost: 1000,
    
  },

  {
    title: "好きな音楽を2曲聴く",
    mood: "relax",
    time: "10",
    place: "inside",
    cost: 0,
    
  },
  {
    title: "10分だけ外を歩く",
    mood: "energy",
    time: "10",
    place: "outside",
    cost: 0,
    
  },
  {
    title: "やることを3つだけ書き出す",
    mood: "focus",
    time: "10",
    place: "inside",
    cost: 0,
    
  },
  {
    title: "近くの景色を見ながら歩く",
    mood: "relax",
    time: "10",
    place: "outside",
    cost: 0,
    
  },
  {
    title: "温かい飲み物を飲みながら一息つく",
    mood: "relax",
    time: "10",
    place: "inside",
    cost: 500,
    
  },
  {
    title: "近くの自販機まで行く",
    mood: "relax",
    time: "10",
    place: "outside",
    cost: 500,
   
  },
  {
    title: "好きな飲み物をゆっくり飲む",
    mood: "energy",
    time: "10",
    place: "inside",
    cost: 500,
   
  },
  {
    title: "小さな文房具を一つ買う",
    mood: "focus",
    time: "10",
    place: "outside",
    cost: 500,
   
  },
  {
    title: "カフェの飲み物をテイクアウトする",
    mood: "relax",
    time: "10",
    place: "outside",
    cost: 1000,
   
  },
  {
    title: "気になる本を一冊探す",
    mood: "focus",
    time: "10",
    place: "outside",
    cost: 1000,
   
  },
  {
    title: "好きなお昼ごはんを選ぶ",
    mood: "energy",
    time: "10",
    place: "outside",
    cost: 1000,
    
  },
  {
    title: "雑貨を少し見て回る",
    mood: "relax",
    time: "10",
    place: "outside",
    cost: 1000,
  
  },

  {
    title: "30分だけゆっくり休む",
    mood: "relax",
    time: "30",
    place: "inside",
    cost: 0,

  },
  {
    title: "近くを30分散歩する",
    mood: "energy",
    time: "30",
    place: "outside",
    cost: 0,
 
  },
  {
    title: "場所を変えて作業する",
    mood: "focus",
    time: "30",
    place: "anywhere",
    cost: 0,
  
  },
  {
    title: "好きな動画を一本だけ見る",
    mood: "relax",
    time: "30",
    place: "inside",
    cost: 0,
    },
  {
    title: "好きなお菓子を買って休む",
    mood: "energy",
    time: "30",
    place: "outside",
    cost: 500,
   
  },
  {
    title: "少し遠い店まで歩いてみる",
    mood: "energy",
    time: "30",
    place: "outside",
    cost: 500,
    
  },
  {
    title: "気になることをノートに整理する",
    mood: "focus",
    time: "30",
    place: "inside",
    cost: 500,
    
  },
  {
    title: "好きな飲み物を持って休む",
    mood: "relax",
    time: "30",
    place: "inside",
    cost: 500,
   
  },
  {
    title: "カフェで30分休む",
    mood: "relax",
    time: "30",
    place: "outside",
    cost: 1000,
    
  },
  {
    title: "本屋で気になる本を見る",
    mood: "focus",
    time: "30",
    place: "outside",
    cost: 1000,
   
  },
  {
    title: "好きなランチを食べる",
    mood: "energy",
    time: "30",
    place: "outside",
    cost: 1000,

  },
  {
    title: "雑貨店をゆっくり見る",
    mood: "relax",
    time: "30",
    place: "outside",
    cost: 1000,
   
  }
];

const form = document.querySelector("#refreshForm");
const randomOnlyButton = document.querySelector("#randomOnlyButton");

const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const resultTime = document.querySelector("#resultTime");
const resultPlace = document.querySelector("#resultPlace");
const resultCost = document.querySelector("#resultCost");

let lastTitle = "";

function placeText(place) {
  if (place === "inside") {
    return "室内";
  }

  if (place === "outside") {
    return "屋外";
  }

  return "どちらでも";
}

function costText(cost) {
  if (cost === 0) {
    return "0円";
  }

  if (cost === 500) {
    return "500円くらい";
  }

  if (cost === 1000) {
    return "1000円くらい";
  }

  return "どちらでも";
}

function getSelectedValue(name) {
  return new FormData(form).get(name);
}

function pickFromList(list) {
  if (list.length === 1) {
    return list[0];
  }

  let filteredList = list.filter(function (idea) {
    return idea.title !== lastTitle;
  });

  if (filteredList.length === 0) {
    filteredList = list;
  }

  const randomIndex = Math.floor(Math.random() * filteredList.length);
  return filteredList[randomIndex];
}

function pickIdeaByConditions() {
  const mood = getSelectedValue("mood");
  const time = getSelectedValue("time");
  const place = getSelectedValue("place");
  const cost = Number(getSelectedValue("cost"));

  let candidates = ideas.filter(function (idea) {
    const moodMatch = mood === "random" || idea.mood === mood;
    const timeMatch = idea.time === time;

    const placeMatch =
      place === "anywhere" ||
      idea.place === place ||
      idea.place === "anywhere";

    const costMatch = idea.cost === cost;

    return moodMatch && timeMatch && placeMatch && costMatch;
  });

  if (candidates.length < 3) {
    candidates = ideas.filter(function (idea) {
      const moodMatch = mood === "random" || idea.mood === mood;
      const timeMatch = idea.time === time;
      const costMatch = idea.cost === cost;

      return moodMatch && timeMatch && costMatch;
    });
  }

  if (candidates.length < 3) {
    candidates = ideas.filter(function (idea) {
      const timeMatch = idea.time === time;
      const costMatch = idea.cost === cost;

      return timeMatch && costMatch;
    });
  }

  if (candidates.length < 3) {
    candidates = ideas.filter(function (idea) {
      return idea.cost === cost;
    });
  }

  if (candidates.length === 0) {
    candidates = ideas;
  }

  return pickFromList(candidates);
}

function pickRandomIdea() {
  return pickFromList(ideas);
}

function saveIdea(idea) {
  localStorage.setItem("selectedIdea", JSON.stringify(idea));
}

function showIdea(idea) {
  if (!resultTitle || !resultText || !resultTime || !resultPlace || !resultCost) {
    return;
  }

  resultTitle.textContent = idea.title;
  resultText.textContent = idea.text;
  resultTime.textContent = idea.time + "分";
  resultPlace.textContent = placeText(idea.place);
  resultCost.textContent = costText(idea.cost);

  lastTitle = idea.title;
}

function loadSavedIdea() {
  const savedData = localStorage.getItem("selectedIdea");

  if (savedData) {
    const savedIdea = JSON.parse(savedData);
    showIdea(savedIdea);
  } else {
    showIdea(ideas[0]);
  }
}

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const idea = pickIdeaByConditions();
    saveIdea(idea);

    window.location.href = "result.html";
  });
}

if (randomOnlyButton) {
  const firstRandomIdea = pickRandomIdea();
  showIdea(firstRandomIdea);
  saveIdea(firstRandomIdea);

  randomOnlyButton.addEventListener("click", function () {
    const idea = pickRandomIdea();
    showIdea(idea);
    saveIdea(idea);
  });
}

if (!form && !randomOnlyButton && resultTitle) {
  loadSavedIdea();
}

const feedbackButtons = document.querySelectorAll(".feedback button");
const feedbackMessage = document.querySelector("#feedbackMessage");

feedbackButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    feedbackButtons.forEach(function (btn) {
      btn.classList.remove("is-active");
    });

    button.classList.add("is-active");

    if (feedbackMessage) {
      feedbackMessage.textContent =
        button.dataset.message || "記録しました。";
    }
  });
});
const pageLinks = document.querySelectorAll('a[href$=".html"]');

pageLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("page-leave");

    setTimeout(function () {
      window.location.href = href;
    }, 250);
  });
});