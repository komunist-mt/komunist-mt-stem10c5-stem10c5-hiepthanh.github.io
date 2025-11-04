// ===== Quiz Data: STEM English Questions =====
const quizCategories = {
  smartFarming: "🌱 English Quiz: Smart Farming & Greenhouse Technology",
  environment: "🌍 English Vocabulary Quiz – Environment & Sustainability",
  riceCultivation: "🌾 English Quiz: Rice Cultivation Techniques in Vietnam",
  globalCrops: "🌾 English Quiz: Global Crop Cultivation and Agriculture",
  sustainableFarming: "🌱 Sustainable Farming & Technology",
  grammar: "🌱 Grammar Quiz: Green Living & Environment",
  stemInnovation: "🌿 STEM & Greenhouse Innovation Quiz"
};


const allQuestions = [
  // Smart Farming & Greenhouse (1-10)
  {
    q: "What is the main purpose of using a greenhouse in agriculture?",
    options: ["To grow plants only in winter", "To protect plants from unfavorable weather conditions", "To decorate the garden", "To reduce the need for soil"],
    a: 1,
    category: "smartFarming",
    weather: true
  },
  {
    q: "Which of the following sensors is most useful for monitoring soil moisture in a greenhouse?",
    options: ["Light sensor", "Temperature sensor", "Humidity sensor", "Soil moisture sensor"],
    a: 3,
    category: "smartFarming"
  },
  {
    q: "What does the abbreviation \"IoT\" stand for?",
    options: ["Internet of Tools", "Internet of Technology", "Internet of Things", "Interface of Transmission"],
    a: 2,
    category: "smartFarming"
  },
  {
    q: "In smart farming, which device can automatically water the plants based on sensor data?",
    options: ["Weather satellite", "Smart irrigation system", "Manual sprayer", "Fertilizer spreader"],
    a: 1,
    category: "smartFarming",
    weather: true
  },
  {
    q: "What is hydroponics?",
    options: ["Growing plants in soil", "Growing plants without soil using nutrient solutions", "Growing plants in sand", "Growing plants under water"],
    a: 1,
    category: "smartFarming"
  },
  {
    q: "Which of the following gases is essential for photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    a: 0,
    category: "smartFarming"
  },
  {
    q: "What is the main benefit of using LED lights in a greenhouse?",
    options: ["They are cheap but weak", "They provide specific light wavelengths for plant growth", "They increase room temperature quickly", "They consume a lot of electricity"],
    a: 1,
    category: "smartFarming"
  },
  {
    q: "What is the best description of \"precision agriculture\"?",
    options: ["Using drones to take pictures of farms", "Applying technology to optimize crop production and resource use", "Farming without any human labor", "Building greenhouses in urban areas"],
    a: 1,
    category: "smartFarming",
    weather: true
  },
  {
    q: "Which programming language is often used to control Arduino devices in greenhouse systems?",
    options: ["Python", "C++", "Java", "HTML"],
    a: 1,
    category: "smartFarming"
  },
  {
    q: "What does \"sustainable agriculture\" mean?",
    options: ["Farming with unlimited chemical fertilizers", "Farming that protects the environment and saves resources", "Farming only for export", "Farming with robots only"],
    a: 1,
    category: "smartFarming"
  },
 
  // Environment & Sustainability (11-30)
  {
    q: "What does \"renewable energy\" mean?",
    options: ["Energy that can be reused and naturally replenished", "Energy that cannot be replaced", "Energy from burning coal", "Energy used once only"],
    a: 0,
    category: "environment"
  },
  {
    q: "The process of cutting down trees in large areas is called ______.",
    options: ["pollution", "deforestation", "desertification", "cultivation"],
    a: 1,
    category: "environment",
    weather: true
  },
  {
    q: "What do we call the gradual increase in Earth's temperature?",
    options: ["Acid rain", "Global warming", "Erosion", "Climate shift"],
    a: 1,
    category: "environment",
    weather: true
  },
  {
    q: "The gas most responsible for the greenhouse effect is ______.",
    options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
    a: 1,
    category: "environment"
  },
  {
    q: "The term \"biodiversity\" refers to ______.",
    options: ["The variety of living organisms in an ecosystem", "The use of recycled materials", "The destruction of forests", "The study of planets"],
    a: 0,
    category: "environment"
  },
  {
    q: "The act of using something again instead of throwing it away is called ______.",
    options: ["Reuse", "Reduce", "Recycle", "Replace"],
    a: 0,
    category: "environment"
  },
  {
    q: "Which of the following is NOT a renewable energy source?",
    options: ["Wind power", "Solar energy", "Fossil fuels", "Hydroelectric power"],
    a: 2,
    category: "environment"
  },
  {
    q: "What is the main cause of \"air pollution\"?",
    options: ["Trees absorbing CO₂", "Factories and vehicles emitting smoke", "Rainwater", "Wind turbines"],
    a: 1,
    category: "environment",
    weather: true
  },
  {
    q: "The layer of gases that surrounds the Earth is called the ______.",
    options: ["Biosphere", "Atmosphere", "Lithosphere", "Hydrosphere"],
    a: 1,
    category: "environment"
  },
  {
    q: "What does \"sustainable development\" mean?",
    options: ["Development that meets present needs without harming future generations", "Development based only on technology", "Development with no environmental concern", "Development that uses more natural resources"],
    a: 0,
    category: "environment"
  },
  // Environment & Sustainability continued (21-30)
  {
    q: "The word \"waste management\" refers to ______.",
    options: ["Producing more garbage", "Controlling and disposing of waste properly", "Burning all waste in open areas", "Using waste to pollute rivers"],
    a: 1,
    category: "environment"
  },
  {
    q: "What is \"compost\"?",
    options: ["Chemical fertilizer", "Organic waste decomposed to enrich soil", "Plastic material", "Type of metal waste"],
    a: 1,
    category: "environment"
  },
  {
    q: "Which word describes materials that can break down naturally?",
    options: ["Recyclable", "Biodegradable", "Disposable", "Artificial"],
    a: 1,
    category: "environment"
  },
  {
    q: "What does \"climate change\" refer to?",
    options: ["Sudden weather on one day", "Long-term changes in temperature and weather patterns", "Movement of the Earth's crust", "Seasonal storms only"],
    a: 1,
    category: "environment",
    weather: true
  },
  {
    q: "\"Carbon footprint\" means ______.",
    options: ["The total amount of CO₂ produced by a person or organization", "The trace left by walking on soil", "The carbon inside plants", "The energy used by machines"],
    a: 0,
    category: "environment"
  },
  {
    q: "Which word means \"protecting nature and wildlife\"?",
    options: ["Preservation", "Expansion", "Destruction", "Exploitation"],
    a: 0,
    category: "environment"
  },
  {
    q: "What is the main source of \"noise pollution\"?",
    options: ["Trees and rivers", "Machines, traffic, and construction", "Rain and wind", "Birds singing"],
    a: 1,
    category: "environment"
  },
  {
    q: "The melting of polar ice caps is a result of ______.",
    options: ["Global warming", "Ocean waves", "Deforestation only", "Acid rain"],
    a: 0,
    category: "environment",
    weather: true
  },
  {
    q: "What is \"eco-friendly\" used to describe?",
    options: ["Harmful to the environment", "Friendly behavior between people", "Products or actions that are good for the environment", "Expensive green materials"],
    a: 2,
    category: "environment"
  },
  {
    q: "The word \"emission\" means ______.",
    options: ["A type of renewable energy", "The act of releasing gases or substances into the air", "A natural resource", "The destruction of forests"],
    a: 1,
    category: "environment",
    weather: true
  },


  // Rice Cultivation (31-60)
  {
    q: "What type of soil is most suitable for rice cultivation?",
    options: ["Sandy soil", "Clay or alluvial soil", "Rocky soil", "Saline soil"],
    a: 1,
    category: "riceCultivation"
  },
  {
    q: "The ideal pH for rice growth is:",
    options: ["3–4", "4–5", "5.5–6.5", "8–9"],
    a: 2,
    category: "riceCultivation"
  },
  {
    q: "What is the main purpose of puddling the soil before transplanting rice?",
    options: ["To kill insects", "To make the soil smooth and water-retentive", "To remove weeds", "To add fertilizer"],
    a: 1,
    category: "riceCultivation",
    weather: true
  },
  {
    q: "The common rice-growing seasons in Northern Vietnam are:",
    options: ["Only one season", "Two seasons (Spring and Summer-Autumn)", "Three seasons", "Four seasons"],
    a: 1,
    category: "riceCultivation"
  },
  {
    q: "Which of the following is a popular rice variety in the Mekong Delta?",
    options: ["IR50404", "Jasmine 85", "Bắc Thơm No.7", "Séng Cù"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "What is \"direct seeding\" in rice farming?",
    options: ["Sowing seeds directly into the field", "Transplanting seedlings", "Spraying fertilizer", "Harvesting"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "How old are rice seedlings usually when transplanted?",
    options: ["5–7 days", "10–15 days", "20–25 days", "30 days"],
    a: 2,
    category: "riceCultivation"
  },
  {
    q: "Why do farmers level the rice field before planting?",
    options: ["To make it look nice", "To ensure even water distribution", "To dry the soil", "To grow weeds"],
    a: 1,
    category: "riceCultivation"
  },
  {
    q: "Which element is essential for green leaf growth in rice?",
    options: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)", "Calcium (Ca)"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "The process of transferring young seedlings into the field is called:",
    options: ["Seeding", "Transplanting", "Fertilizing", "Watering"],
    a: 1,
    category: "riceCultivation"
  },
  {
    q: "What is the ideal water depth during the early growth stage of rice?",
    options: ["1–2 cm", "3–5 cm", "10–15 cm", "No water needed"],
    a: 1,
    category: "riceCultivation",
    weather: true
  },
  {
    q: "The purpose of applying fertilizer in splits is to:",
    options: ["Save money", "Reduce lodging and increase yield", "Avoid using machinery", "Delay plant growth"],
    a: 1,
    category: "riceCultivation"
  },
  {
    q: "Which of the following pests commonly attack rice plants?",
    options: ["Rice leaf roller", "Aphids", "Tomato worm", "Corn borer"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "The yellowing of rice leaves is mainly due to:",
    options: ["Nitrogen deficiency", "Excess sunlight", "Overwatering", "Phosphorus toxicity"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "The practice of draining the field temporarily helps:",
    options: ["Strengthen roots and control pests", "Reduce yield", "Dry the soil completely", "Kill the crop"],
    a: 0,
    category: "riceCultivation",
    weather: true
  },
  {
    q: "In smart rice farming, drones are used for:",
    options: ["Taking photos and spraying fertilizer", "Scaring birds", "Harvesting crops", "Cleaning the field"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "When is the best time to harvest rice?",
    options: ["When 50–85% of grains turn golden", "When all leaves are green", "When the field is flooded", "Immediately after flowering"],
    a: 0,
    category: "riceCultivation"
  },
  {
    q: "Post-harvest rice drying helps to:",
    options: ["Increase moisture content", "Prevent mold and maintain quality", "Reduce grain hardness", "Change color"],
    a: 1,
    category: "riceCultivation"
  },
  {
    q: "The average life cycle of most rice varieties is:",
    options: ["30 days", "60–90 days", "100–130 days", "200 days"],
    a: 2,
    category: "riceCultivation"
  },
  {
    q: "In Vietnam, the \"Three Reductions – Three Gains\" (3R3G) model focuses on:",
    options: ["Reducing seed, fertilizer, pesticide – gaining yield, quality, profit", "Reducing soil, water, air – gaining carbon", "Reducing cost only", "Reducing labor time only"],
    a: 0,
    category: "riceCultivation"
  },


  // Global Crops (61-69)
  {
    q: "Which country is the largest producer of rice in the world?",
    options: ["Vietnam", "India", "China", "Indonesia"],
    a: 2,
    category: "globalCrops"
  },
  {
    q: "The main crop grown in the Pampas region of Argentina is:",
    options: ["Coffee", "Wheat", "Cotton", "Tea"],
    a: 1,
    category: "globalCrops"
  },
  {
    q: "Which continent produces the most cocoa beans?",
    options: ["Asia", "Africa", "South America", "Europe"],
    a: 1,
    category: "globalCrops"
  },
  {
    q: "The world's top coffee-producing country is:",
    options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
    a: 2,
    category: "globalCrops"
  },
  {
    q: "What is the main agricultural product of Vietnam exported worldwide?",
    options: ["Corn", "Rice", "Tea", "Potatoes"],
    a: 1,
    category: "globalCrops"
  },
  {
    q: "In which country did wheat cultivation first begin thousands of years ago?",
    options: ["Egypt", "India", "China", "Mesopotamia"],
    a: 3,
    category: "globalCrops"
  },
  {
    q: "Which country is famous for producing high-quality olive oil?",
    options: ["Spain", "Canada", "Russia", "Thailand"],
    a: 0,
    category: "globalCrops"
  },
  {
    q: "The \"Green Revolution\" in agriculture mainly focused on:",
    options: ["Increasing crop yields using new technology", "Growing trees for forests", "Reducing soil use", "Producing more livestock"],
    a: 0,
    category: "globalCrops"
  },
  {
    q: "Which of the following crops is mainly grown in tropical climates?",
    options: ["Coffee", "Barley", "Wheat", "Potato"],
    a: 0,
    category: "globalCrops",
    weather: true
  },


  // Grammar Quiz (81-90)
  {
    q: "People usually ___ their rubbish into recycling bins.",
    options: ["puts", "put", "are putting", "putted"],
    a: 1,
    category: "grammar"
  },
  {
    q: "The students ___ trees in the school yard right now.",
    options: ["plant", "are planting", "planted", "will plant"],
    a: 1,
    category: "grammar"
  },
  {
    q: "Last year, our town ___ a big campaign to clean the beach.",
    options: ["launched", "is launching", "launches", "will launch"],
    a: 0,
    category: "grammar"
  },
  {
    q: "In the future, more cities ___ renewable energy to reduce pollution.",
    options: ["use", "used", "will use", "are using"],
    a: 2,
    category: "grammar"
  },
  {
    q: "Solar panels ___ on the roof of the new eco-school.",
    options: ["install", "were installed", "are installing", "was install"],
    a: 1,
    category: "grammar"
  },
  {
    q: "Plastic waste ___ to protect marine life.",
    options: ["should be reduced", "should reduce", "is reduce", "reduces"],
    a: 0,
    category: "grammar"
  },
  {
    q: "While I ___ home yesterday, I saw a group cleaning the park.",
    options: ["walk", "walked", "was walking", "am walking"],
    a: 2,
    category: "grammar"
  },
  {
    q: "Green energy projects ___ by young innovators every year.",
    options: ["develops", "developed", "are developed", "is developing"],
    a: 2,
    category: "grammar"
  },
  {
    q: "If everyone ___ less plastic, the planet will be cleaner.",
    options: ["use", "used", "will use", "uses"],
    a: 3,
    category: "grammar"
  },
  {
    q: "Our community ___ to organize a \"Green Sunday\" this weekend.",
    options: ["plans", "plan", "planned", "is planning"],
    a: 3,
    category: "grammar"
  },


  // STEM & Greenhouse Innovation (91-100)
  {
    q: "What does STEM stand for?",
    options: ["Science, Technology, Energy, Mathematics", "Science, Technology, Engineering, Mathematics", "System, Technology, Ecology, Mechanics", "Study, Teaching, Environment, Management"],
    a: 1,
    category: "stemInnovation"
  },
  {
    q: "The main goal of a STEM greenhouse project is to:",
    options: ["Decorate the classroom", "Combine scientific knowledge to solve real-world problems", "Grow flowers for sale only", "Practice speaking English"],
    a: 1,
    category: "stemInnovation"
  },
  {
    q: "In a greenhouse model, which STEM field helps design the structure and control systems?",
    options: ["Mathematics", "Engineering", "Literature", "History"],
    a: 1,
    category: "stemInnovation"
  },
  {
    q: "Which scientific concept explains how sunlight warms the air inside a greenhouse?",
    options: ["Reflection", "Evaporation", "Greenhouse effect", "Condensation"],
    a: 2,
    category: "stemInnovation"
  },
  {
    q: "The use of sensors to monitor temperature and humidity in a greenhouse relates mainly to:",
    options: ["Biology", "Technology", "Art", "Music"],
    a: 1,
    category: "stemInnovation"
  },
  {
    q: "Why is mathematics important in a STEM greenhouse project?",
    options: ["It helps calculate costs, dimensions, and efficiency.", "It only decorates the project report.", "It replaces engineering entirely.", "It is not used in agriculture."],
    a: 0,
    category: "stemInnovation"
  },
  {
    q: "A greenhouse STEM project encourages students to:",
    options: ["Memorize theories only", "Work together, experiment, and innovate", "Avoid technology use", "Compete individually without teamwork"],
    a: 1,
    category: "stemInnovation"
  },
  {
    q: "What environmental problem can greenhouses help reduce?",
    options: ["Soil erosion", "Overfishing", "Deforestation", "Space pollution"],
    a: 0,
    category: "stemInnovation"
  },
  {
    q: "A smart greenhouse model that uses solar power and automatic watering demonstrates:",
    options: ["Waste of resources", "The integration of sustainability and technology", "Lack of innovation", "Manual farming methods"],
    a: 1,
    category: "stemInnovation"
  },
  {
    q: "The biggest value of a STEM greenhouse project for students is:",
    options: ["Learning teamwork and applying science to real life", "Competing for prizes only", "Showing off decorations", "Avoiding experiments"],
    a: 0,
    category: "stemInnovation"
  }
];


// Add weather effects for environment-related questions
allQuestions.forEach(q => {
  if (q.category === "environment" || q.category === "sustainableFarming") {
    q.weather = q.weather || Math.random() < 0.4; // 40% chance of weather for these categories
  }
});


// State
let score = 0;
let attempts = 0;
const maxScore = 25;
const tree = document.getElementById('tree');

// Build the tree DOM (trunk + canopy) so tree and apples are generated by code
function buildTree() {
  if (!tree) return;
  // clear any existing
  tree.innerHTML = '';
  // trunk
  const trunk = document.createElement('div');
  trunk.className = 'trunk';
  tree.appendChild(trunk);
  // canopy container (holds leaves and apples)
  const canopy = document.createElement('div');
  canopy.className = 'canopy';
  tree.appendChild(canopy);
  // small static leaf markers (kept minimal to avoid excess animation)
  for (let i = 0; i < 4; i++) {
    const l = document.createElement('div');
    l.className = 'leaf';
    l.style.left = (20 + Math.random() * 60) + '%';
    l.style.top = (20 + Math.random() * 60) + '%';
    const size = 6 + Math.random() * 6;
    l.style.width = size + 'px';
    l.style.height = size + 'px';
    // show immediately without pop animation
    l.style.opacity = '1';
    l.style.transform = 'scale(1)';
    canopy.appendChild(l);
  }
}

// Build garden elements (soil, seed, sprout, sapling, mature tree, flowers, apples)
// Garden and stage visuals removed — UI only uses the tree and apples now.



const scoreNum = document.getElementById('score-num');
const attemptsNum = document.getElementById('attempts-num');
const goalNum = document.getElementById('goal');
const message = document.getElementById('message');


let currentQuestion = null;
let lastIndex = -1;


// Helpers
function pickRandomQuestionIndex() {
  if (!allQuestions.length) return -1;
  let idx = Math.floor(Math.random() * allQuestions.length);
  // avoid immediate repeat
  if (allQuestions.length > 1 && idx === lastIndex) idx = (idx + 1) % allQuestions.length;
  lastIndex = idx;
  return idx;
}


function showQuestionByIndex(idx) {
  currentQuestion = allQuestions[idx];
  document.getElementById('question').innerText = currentQuestion.q;
  currentQuestion.options.forEach((opt, i) => {
    const btn = document.getElementById('opt' + i);
    btn.innerText = opt;
    btn.disabled = false;
    btn.style.display = '';
  });
}


function nextQuestion() {
  if (score >= maxScore) return;
  const idx = pickRandomQuestionIndex();
  if (idx >= 0) showQuestionByIndex(idx);
}


function updateDisplays() {
  scoreNum.innerText = score;
  attemptsNum.innerText = attempts;
  goalNum.innerText = maxScore;
}

/* --- Tree growth helpers --- */
const TREE_INITIAL_SCALE = 0.16; // matches CSS initial
const TREE_FULL_SCALE = 1.0;
// Ensure apples are tracked separately (apples added from q21..q25)
function updateTreeScaleByScore() {
  // scale up linearly from 0 correct -> initial scale, to 20 correct -> full scale
  const s = Math.min(score, 20);
  const ratio = s / 20; // 0..1
  const scale = TREE_INITIAL_SCALE + ratio * (TREE_FULL_SCALE - TREE_INITIAL_SCALE);
  if (tree) tree.style.transform = `scale(${scale})`;
}

function addApple() {
  if (!tree) return;
  // append apples to canopy if available
  const canopy = tree.querySelector('.canopy') || tree;
  const apple = document.createElement('div');
  apple.className = 'fruit apple';
  // relative placement inside canopy
  apple.style.left = (15 + Math.random() * 70) + '%';
  apple.style.top = (10 + Math.random() * 65) + '%';
  const size = 10 + Math.floor(Math.random() * 12);
  apple.style.width = size + 'px';
  apple.style.height = size + 'px';
  apple.style.opacity = '0';
  apple.style.transform = 'scale(0)';
  canopy.appendChild(apple);
  // reveal with transition
  requestAnimationFrame(() => {
    apple.style.opacity = '1';
    apple.style.transform = 'scale(1)';
  });
}

function ensureApplesForScore() {
  const applesNeeded = Math.max(0, score - 20);
  const container = tree ? tree.parentElement : document.body;
  const existing = container ? Array.from(container.querySelectorAll('.fruit.apple')) : [];
  const toAdd = applesNeeded - existing.length;
  for (let i = 0; i < toAdd; i++) addApple();
}

function growTreeOnCorrect() {
  // called after score increments
  if (!tree) return;
  // simply update tree scale and ensure apples when score > 20
  updateTreeScaleByScore();
  ensureApplesForScore();
  if (score >= 25) finalGrow();
}


function finalGrow() {
  // trigger trunk grow and populate leaves/flowers
  tree.classList.remove('growing');
  void tree.offsetWidth; // reflow
  tree.classList.add('growing');
  // after animation, ensure grown state
  setTimeout(() => tree.classList.add('grown'), 1100);
  // gentle final message only — no extra leaves/flowers to keep visuals calm
  message.innerText = '🎉 Congratulations — you grew the tree!';
}


// removed the heavy final leaves/flowers generator to keep visuals calm


// Weather visuals removed to keep UI focused on tree + apples


// Events
document.querySelectorAll('.opt').forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (score >= maxScore) return;

    // prevent double-clicks
    document.querySelectorAll('.opt').forEach(b => b.disabled = true);
    attempts++;
    const correct = (idx === currentQuestion.a);
    if (correct) {
      score++;
      // grow the tree a bit or add apples depending on score
      growTreeOnCorrect();
    }
    updateDisplays();
    // small feedback message
    message.innerText = correct ? '✅ Correct!' : '❌ Wrong — try the next one.';

    if (score >= maxScore) {
      // finished
      setTimeout(() => {
        finalGrow();
        // show final question text
        document.getElementById('question').innerText = '🎉 All 25 correct answers reached!';
        document.querySelectorAll('.opt').forEach(b => b.style.display = 'none');
      }, 400);
    } else {
      // continue with next question
      setTimeout(() => {
        nextQuestion();
      }, 500);
    }
  });
});


// startup
// build tree elements and start
buildTree();
updateTreeScaleByScore();
updateDisplays();
nextQuestion();
