/**
 * Naan's Daily Flow — ADHD & Mobile-Optimized Engine
 * Welcome Splash, Dual Voice Picker (Male/Female), Dynamic Cheers, Timestamps & Live Sharing
 */

(function () {
  'use strict';

  // --- Task Catalog ---
  const TASKS_DATA = [
    {
      id: "1",
      num: "1",
      theme: "coral",
      tag: "Self Care",
      tagType: "coral",
      title: "Hair Oil & Shower 🚿",
      desc: "Nourish hair with oil, start a laundry load, and hop into a refreshing shower.",
      time: "45 mins",
      isBg: true,
      bgNote: "Washing machine is running",
      nextId: "2",
      cheerDone: "Look at you starting the day fresh! Awesome first win 🚿✨",
      cheerSkip: "Shower saved for later! Moving forward smoothly 🍃"
    },
    {
      id: "2",
      num: "2",
      theme: "sage",
      tag: "Home",
      tagType: "sage",
      title: "Hang Clothes to Dry 🧺",
      desc: "Move freshly washed clothes out to dry in the breeze.",
      time: "10 mins",
      isBg: true,
      bgNote: "Air drying clothes",
      nextId: "3",
      cheerDone: "Clothes are out drying! Nature does the rest ☀️🧺",
      cheerSkip: "No rush on the laundry! Moving on peacefully 🌿"
    },
    {
      id: "3",
      num: "3",
      theme: "yellow",
      tag: "Breakfast",
      tagType: "yellow",
      title: "Comforting Breakfast 🥞",
      desc: "Make yourself a cozy breakfast and enjoy with nature or screentime.",
      time: "25 mins",
      isBg: false,
      nextId: "4",
      cheerDone: "Nourished and fueled! Great job eating well 🥞💛",
      cheerSkip: "Snack or meal whenever you feel ready! 🌸"
    },
    {
      id: "4",
      num: "4",
      theme: "coral",
      tag: "Lunch Prep",
      tagType: "coral",
      title: "Soya Biryani Recipe 🍲",
      desc: "Find the soya biryani recipe — the hardest part of lunch is done!",
      time: "15 mins",
      isBg: true,
      bgNote: "Flavors building up",
      linkUrl: "https://www.youtube.com/results?search_query=Craving+Biryani+Try+This+Soya+Biryani+Recipe+Full+of+Flavor+Soya+Biryani+in+30+Minutes",
      linkText: "📺 Soya Biryani 30-Min Video",
      nextId: "5",
      cheerDone: "Recipe locked in! Soya biryani is gonna be so delicious 🍲😋",
      cheerSkip: "Recipe ready whenever lunch cravings hit! 🍃"
    },
    {
      id: "5",
      num: "5",
      theme: "yellow",
      tag: "Kitchen Fun",
      tagType: "yellow",
      title: "Peanut Butter & Spicy Thecha 🥜",
      desc: "Roast peanuts, blend fresh peanut butter, and mix up spicy thecha.",
      time: "25-30 mins",
      isBg: false,
      nextId: "6",
      cheerDone: "Chef mode unlocked! Fresh homemade thecha & peanut butter 🥜🌶️",
      cheerSkip: "Kitchen crafting saved for another cozy time 🌿"
    },
    {
      id: "6",
      num: "6",
      theme: "sage",
      tag: "Quick Win",
      tagType: "sage",
      title: "Soak Chickpeas & Marinate Soya 🫘",
      desc: "2-minute win: drop chickpeas in water for Sunday, and marinate soya for lunch.",
      time: "10 mins",
      isBg: true,
      bgNote: "Chickpeas soaking & soya marinating",
      nextId: "7",
      cheerDone: "2-minute prep victory! Future meals are already set 🫘✨",
      cheerSkip: "Easy quick prep anytime you like! 🌸"
    },
    {
      id: "7",
      num: "7",
      theme: "lavender",
      tag: "Pause & Rest",
      tagType: "lavender",
      title: "Appreciation Pause 💖",
      desc: "Look at what's accomplished so far! Take a guilt-free break, hydrate, and relax.",
      time: "As long as needed",
      isBg: false,
      isBreak: true,
      cheerDone: "Guilt-free pause taken! You earned this gentle breather 🌸",
      cheerSkip: "Full energy mode! Moving right ahead ⚡",
      branches: [
        {
          label: "Take cozy break, then Cook Lunch ✨",
          targetId: "8",
          type: "primary"
        },
        {
          label: "Skip break, what's next? ⚡",
          targetId: "7A",
          type: "alternate"
        }
      ]
    },
    {
      id: "7A",
      num: "7A",
      theme: "yellow",
      tag: "Mini Bonus",
      tagType: "yellow",
      title: "Wardrobe Shelf Mini-Tidy 👗",
      desc: "Pick just 1 small shelf to tidy up. (Even 10 mins is a huge win!)",
      time: "15-20 mins",
      isBg: false,
      cheerDone: "Bonus shelf victory! Look at that tidy space 👗✨",
      cheerSkip: "Skipped without guilt! Wardrobe is fine as is 🌸",
      branches: [
        {
          label: "Done! Let's cook lunch ✨",
          targetId: "8",
          type: "primary"
        },
        {
          label: "Want to rest instead 🌸",
          targetId: "7",
          type: "backToBreak"
        }
      ]
    },
    {
      id: "8",
      num: "8",
      theme: "coral",
      tag: "Lunch",
      tagType: "coral",
      title: "Cook Soya Biryani & Lunch 🍛",
      desc: "Cook the marinated soya biryani, sit down, and enjoy a warm meal.",
      time: "45 mins",
      isBg: false,
      nextId: "9",
      cheerDone: "Warm, fragrant biryani enjoyed! Bon appétit 🍛✨",
      cheerSkip: "Lunch enjoyed your way! 💛"
    },
    {
      id: "9",
      num: "9",
      theme: "sage",
      tag: "Midday Rest",
      tagType: "sage",
      title: "🌿 Midday Rest & Digest",
      desc: "Step completely away from tasks, digest food, and let your mind wander.",
      time: "As long as needed",
      isBg: false,
      isBreak: true,
      cheerDone: "Peaceful rest complete! Recharged and ready ☁️✨",
      cheerSkip: "Feeling energetic! Straight to afternoon fun 🚀",
      branches: [
        {
          label: "Rest done! On to afternoon ✨",
          targetId: "10",
          type: "primary"
        },
        {
          label: "Skip break, what's next? ⚡",
          targetId: "9A",
          type: "alternate"
        }
      ]
    },
    {
      id: "9A",
      num: "9A",
      theme: "coral",
      tag: "Recipe",
      tagType: "coral",
      title: "Look up Sarvapindi Recipe 📱",
      desc: "Find the Sarvapindi recipe and send the link to WhatsApp for tonight.",
      time: "10 mins",
      isBg: false,
      whatsappRecipeBtn: true,
      cheerDone: "Dinner recipe found and shared! 🥘📱",
      cheerSkip: "We'll check the recipe when dinner time comes 🌿",
      branches: [
        {
          label: "Recipe saved! To kitchen craft ✨",
          targetId: "10",
          type: "primary"
        },
        {
          label: "Take a break instead ☕",
          targetId: "9",
          type: "backToBreak"
        }
      ]
    },
    {
      id: "10",
      num: "10",
      theme: "yellow",
      tag: "Kitchen Craft",
      tagType: "yellow",
      title: "Soak Cashews 🥣",
      desc: "Drop cashews in water for creamy cashew mayo later.",
      time: "5 mins",
      isBg: true,
      bgNote: "Cashews soaking on their own",
      nextId: "10A",
      cheerDone: "Cashews in water! Background magic is working for you 🥣✨",
      cheerSkip: "Cashews ready whenever you want mayo! 🍃"
    },
    {
      id: "10A",
      num: "10A",
      theme: "coral",
      tag: "Flavor Prep",
      tagType: "coral",
      title: "Karivepaku Podi 🌿",
      desc: "Make fragrant curry leaf podi and store in a jar.",
      time: "25 mins",
      isBg: false,
      nextId: "10B",
      cheerDone: "Aromatic curry leaf podi in the jar! Delicious flavor win 🌿",
      cheerSkip: "Podi saved for another fun cooking day! 🌸"
    },
    {
      id: "10B",
      num: "10B",
      theme: "yellow",
      tag: "Kitchen Fun",
      tagType: "yellow",
      title: "Cashew Mayonnaise 🥑",
      desc: "Blend soaked cashews into silky, creamy homemade mayo.",
      time: "25-30 mins",
      isBg: false,
      nextId: "11",
      cheerDone: "Silky, creamy homemade mayo ready! So wholesome 🥑✨",
      cheerSkip: "Easy delicious mayo anytime! 🍃"
    },
    {
      id: "11",
      num: "11",
      theme: "sage",
      tag: "Cozy Reset",
      tagType: "sage",
      title: "Fold Clean Laundry 👕",
      desc: "Take dry clothes off the line and do a quick, gentle fold.",
      time: "15-20 mins",
      isBg: false,
      nextId: "12",
      cheerDone: "Clothes folded and put away! Cozy home sanctuary unlocked 🏡👕",
      cheerSkip: "Clean clothes are ready whenever you want to fold! 🌸"
    },
    {
      id: "12",
      num: "12",
      theme: "yellow",
      tag: "Dinner Vibes",
      tagType: "yellow",
      title: "Cook Sarvapindi 🥘",
      desc: "Start making crispy, savory Sarvapindi for a cozy dinner.",
      time: "40 mins",
      isBg: false,
      nextId: "13",
      cheerDone: "Crispy, savory Sarvapindi is sizzling! Cozy dinner vibes 🥘✨",
      cheerSkip: "Cozy dinner enjoyed your way! 💛"
    },
    {
      id: "13",
      num: "13",
      theme: "coral",
      tag: "Sweet Treat",
      tagType: "coral",
      title: "Protein Cake & Gulab Jamun 🍰",
      desc: "Whip up a sweet protein cake & gulab jamun as a reward!",
      time: "35 mins",
      isBg: false,
      nextId: "14",
      cheerDone: "Sweet reward time! You earned every sweet bite 🍰💖",
      cheerSkip: "Sweet treats ready whenever cravings strike! 🌸"
    },
    {
      id: "14",
      num: "14",
      theme: "lavender",
      tag: "Victory",
      tagType: "lavender",
      isCelebration: true,
      title: "🎉 End of Day Victory!",
      desc: "You showed up for yourself today! Even if some things were skipped, you navigated a big day wonderfully. Sleep well, Naan!",
      time: "Rest & Sleep 🌙",
      isBg: false,
      cheerDone: "Champion day completed! Sleep softly and feel proud 💖🌙",
      cheerSkip: "Rest well! 💖"
    }
  ];

  // Dynamic Cheering Headlines
  const DONE_HEADLINES = [
    "Boom! Win checked off! 🚀",
    "Look at you go! ✨",
    "Crushed it with grace! 💖",
    "Another gentle victory! 🌟",
    "Awesome momentum! 🌸",
    "Proud of your pace! 💛"
  ];

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // --- State Variables ---
  const STORAGE_KEY = 'naan_kind_flow_v4';
  let appState = {
    currentTaskId: "1",
    taskStatuses: {},
    soundEnabled: true,
    voiceChoice: 'male',    // Permanent Default: Male (Microsoft Mohan) voice
    voicePersona: 'romantic', // Default to Romantic Sexting tone
    voicePresets: {
      male: { voiceURI: '', rate: 1.10, pitch: 0.91 }
    },
    activeView: 'focus'
  };

  function getActivePreset() {
    if (!appState.voicePresets) {
      appState.voicePresets = {
        male: { voiceURI: '', rate: 1.10, pitch: 0.91 }
      };
    }
    if (!appState.voicePresets.male) {
      appState.voicePresets.male = { voiceURI: '', rate: 1.10, pitch: 0.91 };
    }
    return appState.voicePresets.male;
  }

  const PERSONA_CONFIG = {
    loving: {
      name: "Loving 🥰",
      emoji: "🥰",
      pitch: 1.12,
      rate: 0.90,
      chime: 'loving',
      announceTitle: "Loving Tone 🥰",
      announceMsg: "Soft, sweet, and deeply affectionate",
      sampleSpeech: "Loving mode active! I'm so proud of you, my darling Naan!"
    },
    motivational: {
      name: "Motivational 💪",
      emoji: "💪",
      pitch: 1.02,
      rate: 1.08,
      chime: 'motivational',
      announceTitle: "Motivational Tone 💪",
      announceMsg: "Energetic, powerful, and empowering cheer",
      sampleSpeech: "Motivational mode active! Let's crush today with unstoppable energy!"
    },
    inspiring: {
      name: "Inspiring ✨",
      emoji: "✨",
      pitch: 1.08,
      rate: 0.94,
      chime: 'inspiring',
      announceTitle: "Inspiring Tone ✨",
      announceMsg: "Uplifting, peaceful, and poetic guidance",
      sampleSpeech: "Inspiring mode active! Every small step transforms your day."
    },
    appreciating: {
      name: "Appreciating 💖",
      emoji: "💖",
      pitch: 1.04,
      rate: 0.91,
      chime: 'appreciating',
      announceTitle: "Appreciating Tone 💖",
      announceMsg: "Gentle, grateful, and deeply validating tone",
      sampleSpeech: "Appreciating mode active! Thank you for taking such good care of yourself."
    },
    strict: {
      name: "Strict Coach 🎯",
      emoji: "🎯",
      pitch: 0.92,
      rate: 1.00,
      chime: 'strict',
      announceTitle: "Strict Coach Tone 🎯",
      announceMsg: "Direct, focused, no-nonsense discipline",
      sampleSpeech: "Strict coach active. Focus on your objectives and execute cleanly."
    },
    cheesy: {
      name: "Cheesy Cute 🧀",
      emoji: "🤭",
      pitch: 1.06,
      rate: 0.93,
      chime: 'loving',
      announceTitle: "Cheesy Cute 🧀",
      announceMsg: "Playful, cute, and cheesy lines to make you giggle",
      sampleSpeech: "Are you made of copper and tellurium? Because you are Cu-Te, Naan!"
    },
    romantic: {
      name: "Romantic 💋",
      emoji: "💋",
      pitch: 1.06,
      rate: 0.93,
      chime: 'loving',
      announceTitle: "Romantic Tone 💋",
      announceMsg: "Seductive, spicy, and alluring text-style flirting",
      sampleSpeech: "Can't stop thinking about the way you look right now... pure temptation, Naan."
    }
  };

  function getPersonaText(task, action) {
    const persona = appState.voicePersona || 'romantic';
    const taskTitle = task ? task.title : 'this task';

    if (action === 'done') {
      switch (persona) {
        case 'motivational':
          return `BOOM! ${taskTitle} conquered! Unstoppable momentum 💪⚡`;
        case 'inspiring':
          return `A beautiful milestone on your path. ${taskTitle} shines bright ✨`;
        case 'appreciating':
          return `Thank you for taking care of ${taskTitle}. Every small effort is deeply valued 💖`;
        case 'strict':
          return `Task ${task ? task.num : ''} complete. Good discipline. Onward to next objective 🎯`;
        case 'cheesy':
          return getUniqueCheesyDone(taskTitle);
        case 'romantic':
          return getUniqueRomanticDone(taskTitle);
        case 'loving':
        default:
          return `Look at you taking such sweet care of yourself! Beautiful win on ${taskTitle} 🥰💖`;
      }
    } else if (action === 'skip') {
      return getUniqueSkipCompliment();
    }
    return task ? task.cheerDone : "Great job!";
  }

  // --- Non-Repeating Romantic Sexting Lines Pools ---
  const ROMANTIC_DONE_LINES = [
    "The way you just conquered ${taskTitle}... it's driving my mind to dirty, beautiful places, Naan... 🔥😏",
    "Look at you taking charge of ${taskTitle}... authority on you is such an absolute turn-on... 💋🔥",
    "You finished ${taskTitle} so smooth and confident... I'm biting my lip just thinking about you... 😏🔥",
    "Finished ${taskTitle}? Good... now my mind is completely occupied with what comes next, gorgeous... 💋✨",
    "That slow, sexy satisfaction after finishing ${taskTitle}... you know exactly how to drive me crazy... 🔥😏",
    "One step done on ${taskTitle}, and the heat in my chest just spiked through the roof... 💋🔥",
    "You completed ${taskTitle} so effortlessly... leaving me breathless is becoming your habit... 😏🔥",
    "The rhythm you brought to ${taskTitle}... pure, sultry tension in motion, Naan... 💋✨",
    "Wrapped up ${taskTitle} already? You look far too delicious when you're in your zone... 🔥😏",
    "That slick finish on ${taskTitle}... you really know how to build up the heavy anticipation, don't you? 💋🔥",
    "Watching you crush ${taskTitle}... it's making it impossible to keep my thoughts innocent... 😏🔥",
    "You wrapped up ${taskTitle} so clean... consider yourself warned, you're looking dangerously irresistible... 💋✨",
    "That subtle pulse of pride after ${taskTitle}... absolute perfection, Naan... 🔥😏",
    "You conquered ${taskTitle} like a queen... and I'm completely addicted to your energy right now... 💋🔥",
    "Done with ${taskTitle}? The way you move carries a temptation I can't resist... 😏🔥",
    "The quiet intensity you had during ${taskTitle}... it sent a shiver straight down my spine... 💋✨",
    "Such smooth execution on ${taskTitle}... you make staying composed completely impossible, cutie... 🔥😏",
    "Task ${taskTitle} is locked down... but the electric tension between us is just getting started... 💋🔥",
    "The confidence you brought to ${taskTitle}... it makes me want to send you a message you'll never forget... 😏🔥",
    "You crushed ${taskTitle} so effortlessly... you're playing a very dangerous game with my heart... 💋✨",
    "Finished ${taskTitle} with that sultry look... you know exactly what you're doing to me, Naan... 🔥😏",
    "That satisfying wrap up of ${taskTitle}... you just turned up the heat in the entire room... 💋🔥",
    "Another win with ${taskTitle}... you're purely irresistible when you're focused like this... 😏🔥",
    "That quick, effortless win on ${taskTitle}... you have no idea how sexy you look right now... 💋✨",
    "Finished ${taskTitle} like a boss... now let me whisper how amazing you really are... 🔥😏"
  ];

  let usedRomanticDoneLines = [];

  function getUniqueRomanticDone(taskTitle) {
    let available = ROMANTIC_DONE_LINES.map((c, i) => ({ text: c, idx: i })).filter(item => !usedRomanticDoneLines.includes(item.idx));
    if (available.length === 0) {
      usedRomanticDoneLines = [];
      available = ROMANTIC_DONE_LINES.map((c, i) => ({ text: c, idx: i }));
    }
    const chosen = getRandomItem(available);
    usedRomanticDoneLines.push(chosen.idx);
    return {
      text: chosen.text.replace('${taskTitle}', taskTitle),
      audioFile: `audio/romantic_done_${chosen.idx}.mp3`
    };
  }

  const ROMANTIC_MOTIVATIONS = [
    "Can't stop thinking about the way you look right now... pure temptation wrapped in grace, Naan... 💋🔥",
    "Late night energy in the middle of the day... you have this intoxicating effect on my pulse... 😏🔥",
    "There's a subtle friction in the air today, and I know it's coming straight from you, beautiful... 💋✨",
    "You shouldn't be allowed to look this tantalizing while just casually getting things done... 🔥😏",
    "Is it just me, or is the electric tension between us getting way too warm to handle? 💋🔥",
    "The quiet, smoldering confidence in your eyes is doing wicked things to my self-control, Naan... 😏🔥",
    "You're radiating a vibe that's far too tempting for a disciplined morning... 💋✨",
    "I love how effortlessly you turn up the heat in here without even trying... 🔥😏",
    "If you keep giving me that slow, knowing look, we're never making it through this list, darling... 💋🔥",
    "You have a natural rhythm that's addicting to watch... smooth, deep, and irresistible... 😏🔥",
    "There's something deliciously wicked in the way you smile when you know you've got my full attention... 💋✨",
    "You're playing a dangerous game looking this magnetic today, Naan... 🔥😏",
    "Some feelings are better experienced than explained... and your energy right now is purely magnetic... 💋🔥",
    "You carry a quiet, sultry sensuality that makes everything around you feel electrified... 😏🔥",
    "Don't tease me with that subtle bite of your lip unless you mean it, cutie... 💋✨",
    "You're pure, unfiltered temptation wrapped in effortless elegance, Naan... 🔥😏",
    "The air gets noticeably thicker every time you walk into my space, beautiful... 💋🔥",
    "You know exactly the kind of thoughts you're putting into my head right now, don't you? 😏🔥",
    "A single glance from you can undo hours of my best self-control... 💋✨",
    "You wear confidence like silk, Naan... and it makes me want to draw you in even closer... 🔥😏",
    "Your presence has this rich, heavy sweetness... like honey melting over high heat... 💋🔥",
    "You don't even need to try... just existing near me is an invitation I can hardly resist... 😏🔥",
    "I'm completely lost in the way you carry yourself today... bold, graceful, and tantalizing... 💋✨",
    "You're giving off a vibe that makes it impossible to think about anything but you, darling... 🔥😏",
    "If tempting was a crime, you'd be serving a lifetime sentence right now, Naan... 💋🔥"
  ];

  let usedRomanticMotivations = [];

  function getUniqueRomanticMotivation() {
    let available = ROMANTIC_MOTIVATIONS.map((c, i) => ({ text: c, idx: i })).filter(item => !usedRomanticMotivations.includes(item.idx));
    if (available.length === 0) {
      usedRomanticMotivations = [];
      available = ROMANTIC_MOTIVATIONS.map((c, i) => ({ text: c, idx: i }));
    }
    const chosen = getRandomItem(available);
    usedRomanticMotivations.push(chosen.idx);
    return {
      text: chosen.text,
      audioFile: `audio/romantic_motivation_${chosen.idx}.mp3`
    };
  }

  // --- Non-Repeating Cheesy Lines Pools (Giggle & Smile Inducing) ---
  const CHEESY_DONE_LINES = [
    "Are you made of copper and tellurium? Because you finished ${taskTitle} looking so Cu-Te, Naan! 🧪💖",
    "Is it bright in here or did you just complete ${taskTitle} with your infectious cute smile? 🥰✨",
    "I'm pretty sure you're a magician, Naan... whenever you finish ${taskTitle}, all my worries disappear! 🎩💖",
    "Do you have a map? Because I just got totally lost in how adorable you look finishing ${taskTitle}! 🗺️🥰",
    "If being ridiculously cute while doing ${taskTitle} was a crime, you'd be serving a lifetime sentence, Naan! 👮‍♀️💖",
    "Are you a 45-degree angle? Because you finished ${taskTitle} looking acute-y! 📐🥰",
    "My heart skipped a beat when you finished ${taskTitle}... or maybe I just need another cup of tea! ☕💖",
    "Are you a wifi signal? Because I'm feeling a 100% romantic connection with how you crushed ${taskTitle}! 📶🥰",
    "Is your name Google? Because ${taskTitle} was everything I was searching for today, cutie! 🔍✨",
    "You finished ${taskTitle} so fast, did you steal my breath or did you just run a marathon, Naan? 🏃‍♀️💖",
    "Are you a camera? Because every time you complete ${taskTitle}, I can't help but smile! 📸🥰",
    "Are you a parking ticket? Because you've got 'FINE' written all over you after ${taskTitle}, Naan! 🎫💖",
    "Do you believe in love at first sight, or should I replay you finishing ${taskTitle} again? 😉✨",
    "Is there an airport nearby or was that just my heart taking off when you wrapped up ${taskTitle}? ✈️💖",
    "Are you a light bulb? Because you just brightened up my whole day by completing ${taskTitle}! 💡🥰",
    "You must be exhausted, Naan... because you've been running through my mind all through ${taskTitle}! 🧠💖",
    "Are you a star? Because your glow after finishing ${taskTitle} is out of this world! 🌟🥰",
    "If stars fell every time you finished ${taskTitle} looking this cute, the sky would be empty, Naan! 🌌💖",
    "Are you made of sugar? Because finishing ${taskTitle} was the sweetest thing I've seen all day! 🍬🥰",
    "You finished ${taskTitle} so smoothly... are you secretly a superhero disguised in maximum cuteness? 🦸‍♀️💖",
    "Is it warm today or is it just the extra sunshine you bring whenever you finish ${taskTitle}? ☀️🥰",
    "If I had a coin for every time you looked cute completing ${taskTitle}, I'd be a billionaire, Naan! 🪙💖",
    "Are you a time traveler? Because I see a very happy, giggly future every time you finish ${taskTitle}! ⏰✨",
    "You wrapped up ${taskTitle} like a total boss... a super cute, adorable boss, that is! 👑🥰",
    "Warning: finishing ${taskTitle} with that adorable smile has been proven to cause excessive giggling! 🤭💖"
  ];

  let usedCheesyDoneLines = [];

  function getUniqueCheesyDone(taskTitle) {
    let available = CHEESY_DONE_LINES.map((c, i) => ({ text: c, idx: i })).filter(item => !usedCheesyDoneLines.includes(item.idx));
    if (available.length === 0) {
      usedCheesyDoneLines = [];
      available = CHEESY_DONE_LINES.map((c, i) => ({ text: c, idx: i }));
    }
    const chosen = getRandomItem(available);
    usedCheesyDoneLines.push(chosen.idx);
    return {
      text: chosen.text.replace('${taskTitle}', taskTitle),
      audioFile: `audio/cheesy_done_${chosen.idx}.mp3`
    };
  }

  const CHEESY_MOTIVATIONS = [
    "Are you a bank loan? Because you've got my full interest all day long, Naan! 🏦💖",
    "If you were a vegetable, you'd be a cute-cumber, beautiful! 🥒🥰",
    "Are you a campfire? Because you're super warm and I want s'more of your energy today! ⛺💖",
    "Do you have a band-aid? Because I just scraped my knee falling for your smile today, Naan! 🩹🤭",
    "Is your dad a boxer? Because you're a total knockout today, cutie! 🥊💖",
    "Are you a cat? Because you're purr-fectly adorable today, Naan! 🐾🥰",
    "If you were a fruit, you'd be a fine-apple! 🍍💖",
    "Are you a keyboard? Because you're definitely my type, Naan! ⌨️🤭",
    "I must be a snowflake, because I've completely fallen for your smile today! ❄️💖",
    "Are you a magnet? Because you're naturally pulling all the good vibes toward you, cutie! 🧲🥰",
    "Is your name Chapstick? Because you're da balm, Naan! 💄💖",
    "Are you a thief? Because you just stole the entire spotlight today! 🕵️‍♀️✨",
    "If being sweet was a full-time job, you'd be CEO by now, cutie! 💼💖",
    "Are you a charger? Because being near your energy instantly recharges me to 100%! 🔋🥰",
    "Do you like raisins? How about a date with your own cute goals today, Naan? 🍇💖",
    "Are you a diamond? Because you're shining super bright under zero pressure today! 💎✨",
    "If smiles were sunshine, you'd be an entire tropical summer, Naan! 🌴💖",
    "Are you a rainbow? Because you add all the best colors to a normal day! 🌈🥰",
    "Do you have a license for being this adorable while getting things done? 📜💖",
    "Are you a warm cup of cocoa? Because you make everything feel cozy and sweet! ☕🥰",
    "Is there a sparkle in your eye or are you just secretly a fairy godmother, Naan? 🧚‍♀️✨",
    "If adorable was a benchmark, you just broke the world record today! 🏆💖",
    "Are you a song? Because your energy has been stuck in my head all morning in the best way! 🎵🥰",
    "You must be made of magic, because just thinking of your smile makes me grin like a kid! 🪄💖",
    "Caution: your cute smile is currently causing heart meltings across the room! 🫠💖"
  ];

  let usedCheesyMotivations = [];

  function getUniqueCheesyMotivation() {
    let available = CHEESY_MOTIVATIONS.map((c, i) => ({ text: c, idx: i })).filter(item => !usedCheesyMotivations.includes(item.idx));
    if (available.length === 0) {
      usedCheesyMotivations = [];
      available = CHEESY_MOTIVATIONS.map((c, i) => ({ text: c, idx: i }));
    }
    const chosen = getRandomItem(available);
    usedCheesyMotivations.push(chosen.idx);
    return {
      text: chosen.text,
      audioFile: `audio/cheesy_motivation_${chosen.idx}.mp3`
    };
  }

  // --- Non-Repeating Skip Compliments Pool (Motivating & Rest Reminders) ---
  const SKIP_COMPLIMENTS = [
    "Smart move, Naan! Keeping your momentum strong ⚡ But remember, you can take a cozy rest whenever you want, darling 🌸",
    "Look at you making empowered choices! Cutie, rest is always here whenever you feel like pausing 💖",
    "Saving your energy for what feels right! You're in total control, but rest anytime your heart desires ☁️✨",
    "Your comfort and rhythm come first, Naan! Unstoppable, but take rest whenever you want cutie 😉🌸",
    "Skipping smoothly like a pro! Keep crushing it, but remember rest is always your superpower 💛✨",
    "Aha! Smart choice, darling! You're making great progress, and rest is ready whenever you need a pause 🥰🌿",
    "Honoring your boundary like a boss! Stay glowing, and remember to rest whenever you want 💖✨",
    "Your mood & pace are what matter most, Naan! High energy, but take a cozy break whenever you like 😉🌸",
    "No pressure at all, sweetie! Moving forward smoothly, but rest is yours whenever you want it ☁️💛",
    "Strategic choice, cutie! Empowered, beautiful, and free to rest whenever you feel like it 💖⚡",
    "Your comfort is 100% priority! Crushing your day at your own rhythm — rest anytime darling 😉✨",
    "Gentle power in action! Keep shining Naan, and feel free to relax whenever you want 🌸💛",
    "Your smile & pace are top-class! Stay energized, but take a peaceful rest whenever you desire 🥰🌿",
    "Skipping with style & grace! Remember gorgeous, your peace matters — rest whenever you want 💖✨",
    "Flexibility is true strength! Proud of you, and remember rest is always waiting for you ☁️🌸",
    "Look how cleverly you manage your energy, darling! Stay motivated and rest whenever you feel like it 😉🔥",
    "Energy saved like a genius! You're unstoppable, but take a cozy rest whenever you want 💖🍃"
  ];

  let usedSkipCompliments = [];

  function getUniqueSkipCompliment() {
    let available = SKIP_COMPLIMENTS.map((c, i) => ({ text: c, idx: i })).filter(item => !usedSkipCompliments.includes(item.idx));
    if (available.length === 0) {
      usedSkipCompliments = [];
      available = SKIP_COMPLIMENTS.map((c, i) => ({ text: c, idx: i }));
    }
    const chosen = getRandomItem(available);
    usedSkipCompliments.push(chosen.idx);
    return {
      text: chosen.text,
      audioFile: `audio/skip_${chosen.idx}.mp3`
    };
  }

  // --- Tone-Dependent Random Motivation Engine ---
  const MOTIVATION_SPARKS = {
    loving: [
      "You are so deeply loved, Naan. Take a deep breath and know you're doing amazing 🥰💖",
      "No matter how much you get done today, you are already complete and wonderful 🥰✨",
      "Sending you the warmest hug right now. You are capable of anything, sweetie 💖🌸",
      "Be gentle with your beautiful heart today. You are my favorite person 🥰💛",
      "Look in the mirror and smile! You are doing great, sweetheart 🌸💖"
    ],
    motivational: [
      "BOOM! You've got fire in your soul! Challenge accepted and crushed today! 💪⚡",
      "Champions don't wait for motivation, they build momentum one step at a time! 🚀🏆",
      "You are stronger than any obstacle. Let me see you conquer today! 💪🔥",
      "Focus on the current win. You are building an unstoppable streak! ⚡🏆",
      "Unstoppable energy activated! Let's make today legendary! 🚀🔥"
    ],
    inspiring: [
      "Every sunrise is a fresh canvas. Your smallest effort paints a masterpiece ✨🌌",
      "You don't have to see the whole staircase, just take the first gentle step ✨",
      "Like a flower blooming in its own time, your pace is absolute perfection 🌻✨",
      "Great things are not done by impulse, but by a series of small steps brought together 🌟",
      "Trust your path. Peaceful rivers carve deep and beautiful canyons 🍃✨"
    ],
    appreciating: [
      "Thank you for being you, Naan. The effort you put into showing up today is deeply appreciated 💛",
      "Every breath and every gentle step you take matters. Thank you for caring for yourself 🌸",
      "I appreciate your dedication to yourself today. You are worth every moment 💖",
      "Thank you for bringing your warm light into this world today 💛✨",
      "Your presence alone brightens up the room. Thank you for showing up 🌿💖"
    ],
    strict: [
      "Eyes on the prize! Cut through the noise, lock onto your current task, and execute 🎯",
      "Discipline is choosing between what you want now and what you want most. Focus! ⏱️",
      "Zero excuses, total clarity. Complete the step in front of you clean and crisp 🎯",
      "Momentum builds from action. Stop overthinking and hit your target 📊",
      "Stay focused. Execute objective number one and move forward smoothly 🎯"
    ]
  };

  function sparkRandomMotivation() {
    initAudio();
    const persona = appState.voicePersona || 'romantic';
    let msg;
    if (persona === 'romantic') {
      msg = getUniqueRomanticMotivation();
    } else if (persona === 'cheesy') {
      msg = getUniqueCheesyMotivation();
    } else {
      const list = MOTIVATION_SPARKS[persona] || MOTIVATION_SPARKS.loving;
      msg = getRandomItem(list);
    }

    const cfg = PERSONA_CONFIG[persona] || PERSONA_CONFIG.loving;
    playSound(cfg.chime || 'done');
    if (typeof confetti === 'function') {
      confetti({ particleCount: 20, spread: 45, origin: { y: 0.6 } });
    }

    showAnnouncement(`${cfg.name} Spark ✨`, msg, cfg.emoji);
    speakCheer(msg);
  }

  // --- Text-to-Speech Engine ---
  let femaleVoice = null;
  let maleVoice = null;

  function loadTTSVoices() {
    if (!('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      // 1. Male Telugu Voice Preference — Microsoft Mohan Online (Natural) - Telugu (India) (te-IN)
      let foundTelugu = voices.find(v => 
        v.name.includes('మోహన్') || 
        v.name.toLowerCase().includes('mohan') ||
        v.name.toLowerCase().includes('microsoft mohan') ||
        v.name.toLowerCase().includes('telugu') ||
        v.name.includes('తెలుగు') ||
        v.lang.toLowerCase().includes('te-in') ||
        v.lang.toLowerCase().includes('te_in')
      );

      if (!foundTelugu) {
        foundTelugu = voices.find(v => v.lang.toLowerCase().startsWith('te') || v.name.toLowerCase().includes('telugu'));
      }

      // 2. Indian Male Voice Fallback
      if (!foundTelugu) {
        foundTelugu = voices.find(v => 
          (v.lang.toLowerCase().includes('en-in') || v.lang.toLowerCase().includes('hi-in') || v.name.toLowerCase().includes('india')) &&
          (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('mohan') || v.name.toLowerCase().includes('ravi') || v.name.toLowerCase().includes('prabhat') || v.name.toLowerCase().includes('sagar'))
        );
      }

      if (!foundTelugu) {
        foundTelugu = voices.find(v => 
          !v.name.toLowerCase().includes('zira') &&
          !v.name.toLowerCase().includes('samantha') &&
          !v.name.toLowerCase().includes('hazel') &&
          !v.name.toLowerCase().includes('susan') &&
          !v.name.toLowerCase().includes('victoria') &&
          !v.name.toLowerCase().includes('karen') &&
          !v.name.toLowerCase().includes('female') &&
          (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('george') || v.name.toLowerCase().includes('mark') || v.name.toLowerCase().includes('ravi') || v.name.toLowerCase().includes('mohan') || v.name.toLowerCase().includes('prabhat') || v.name.toLowerCase().includes('sagar'))
        );
      }

      if (!foundTelugu) {
        foundTelugu = voices.find(v => 
          !v.name.toLowerCase().includes('zira') &&
          !v.name.toLowerCase().includes('samantha') &&
          !v.name.toLowerCase().includes('hazel') &&
          !v.name.toLowerCase().includes('susan') &&
          !v.name.toLowerCase().includes('victoria') &&
          !v.name.toLowerCase().includes('karen') &&
          !v.name.toLowerCase().includes('female')
        );
      }

      if (!foundTelugu) {
        foundTelugu = voices[0];
      }

      maleVoice = foundTelugu;

      const preset = getActivePreset();
      if (foundTelugu && !preset.voiceURI) {
        preset.voiceURI = foundTelugu.voiceURI || foundTelugu.name;
      }

      populateVoiceDropdown();
    } catch (e) {
      console.warn("Error loading voices:", e);
    }
  }

  function populateVoiceDropdown() {
    const select = document.getElementById('systemVoiceSelect');
    if (!select || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    const preset = getActivePreset();
    const activeVoiceURI = preset.voiceURI || (maleVoice ? (maleVoice.voiceURI || maleVoice.name) : '');

    select.innerHTML = voices.map(v => {
      const isSelected = (v.voiceURI === activeVoiceURI) || (v.name === activeVoiceURI);
      return `<option value="${v.voiceURI || v.name}" ${isSelected ? 'selected' : ''}>
        ${v.name} (${v.lang})
      </option>`;
    }).join('');
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadTTSVoices;
    loadTTSVoices();
  }

  let visualizerTimer = null;

  function showAudioVisualizer(personaKey, text) {
    const overlay = document.getElementById('audioVisualizerOverlay');
    const tag = document.getElementById('visualizerPersonaTag');
    const burst = document.getElementById('visualizerEmojiBurst');
    if (!overlay) return;

    const cfg = PERSONA_CONFIG[personaKey] || PERSONA_CONFIG.loving;

    overlay.className = `audio-visualizer-overlay active ${personaKey}`;
    if (tag) tag.textContent = `${cfg.emoji} ${cfg.name} speaking...`;

    if (burst) {
      burst.innerHTML = '';
      const emojiSet = {
        loving: ["🥰", "💖", "💕", "✨"],
        motivational: ["💪", "⚡", "🔥", "🚀"],
        inspiring: ["✨", "⭐", "🌟", "🌌"],
        appreciating: ["💖", "🌸", "🌻", "🍃"],
        strict: ["🎯", "⏱️", "⚡", "📊"],
        cheesy: ["🧀", "😉", "😘", "🔥"]
      }[personaKey] || ["✨", "💖", "🌸"];

      for (let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        span.className = 'floating-visual-emoji';
        span.textContent = emojiSet[i % emojiSet.length];
        span.style.left = `${15 + Math.random() * 70}%`;
        span.style.animationDelay = `${Math.random() * 0.8}s`;
        burst.appendChild(span);
      }
    }

    if (visualizerTimer) clearTimeout(visualizerTimer);
    visualizerTimer = setTimeout(hideAudioVisualizer, 4500);
  }

  function hideAudioVisualizer() {
    const overlay = document.getElementById('audioVisualizerOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  let activeAudioObj = null;

  function speakCheer(input, onEndCb) {
    if (!appState.soundEnabled) {
      if (onEndCb) onEndCb();
      return;
    }

    let text = typeof input === 'object' ? input.text : input;
    let audioFile = typeof input === 'object' ? input.audioFile : null;

    let cleaned = (text || '')
      .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '')
      .replace(/[*_#~]/g, '')
      .trim();

    if (!cleaned) {
      if (onEndCb) onEndCb();
      return;
    }

    showAudioVisualizer(appState.voicePersona || 'romantic', cleaned);

    if (activeAudioObj) {
      try {
        activeAudioObj.pause();
        activeAudioObj.currentTime = 0;
      } catch (e) {}
    }

    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }

    if (audioFile) {
      try {
        activeAudioObj = new Audio(audioFile);
        let triggered = false;
        const doneHandler = () => {
          if (!triggered) {
            triggered = true;
            hideAudioVisualizer();
            if (onEndCb) onEndCb();
          }
        };
        activeAudioObj.onended = doneHandler;
        activeAudioObj.onerror = () => {
          hideAudioVisualizer();
          if (onEndCb && !triggered) { triggered = true; onEndCb(); }
        };
        activeAudioObj.play().then(() => {}).catch((err) => {
          console.warn("Audio play deferred or interrupted:", err);
          hideAudioVisualizer();
          if (onEndCb && !triggered) { triggered = true; onEndCb(); }
        });
        return;
      } catch (err) {
        console.warn("Audio file playback notice:", err);
      }
    }

    speakCheerTTS(cleaned, onEndCb);
  }

  function getMaleTTSVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length === 0) return null;

    let v = voices.find(voice => {
      const name = voice.name.toLowerCase();
      const lang = voice.lang.toLowerCase();
      return name.includes('మోహన్') || name.includes('mohan') || name.includes('microsoft mohan') || name.includes('telugu') || lang.includes('te-in') || lang.includes('te_in');
    });
    if (v) return v;

    const maleKeywords = ['male', 'david', 'george', 'mark', 'ravi', 'prabhat', 'sagar', 'james', 'richard', 'alex', 'guy', 'brian', 'stephen', 'daniel'];
    const femaleKeywords = ['zira', 'samantha', 'hazel', 'susan', 'victoria', 'karen', 'female', 'catherine', 'linda', 'eva', 'aria', 'jenny', 'microsoft zira', 'microsoft hazel', 'microsoft susan', 'google us english'];

    v = voices.find(voice => {
      const name = voice.name.toLowerCase();
      const isFemale = femaleKeywords.some(fk => name.includes(fk));
      const isMale = maleKeywords.some(mk => name.includes(mk));
      return !isFemale && isMale;
    });
    if (v) return v;

    v = voices.find(voice => {
      const name = voice.name.toLowerCase();
      return !femaleKeywords.some(fk => name.includes(fk));
    });
    if (v) return v;

    return voices[0];
  }

  function speakCheerTTS(cleanedText, onEndCb) {
    if (!('speechSynthesis' in window)) {
      hideAudioVisualizer();
      if (onEndCb) onEndCb();
      return;
    }
    try {
      const utterance = new SpeechSynthesisUtterance(cleanedText);
      const targetVoice = getMaleTTSVoice();

      if (targetVoice) {
        utterance.voice = targetVoice;
        const vName = targetVoice.name.toLowerCase();
        const isExplicitMale = vName.includes('mohan') || vName.includes('male') || vName.includes('david') || vName.includes('george') || vName.includes('ravi');
        utterance.pitch = isExplicitMale ? 0.91 : 0.65;
      } else {
        utterance.pitch = 0.65;
      }

      utterance.rate = 1.05;
      utterance.volume = 1.0;

      let cbTriggered = false;
      const finishSpeech = () => {
        hideAudioVisualizer();
        if (onEndCb && !cbTriggered) {
          cbTriggered = true;
          onEndCb();
        }
      };

      utterance.onend = finishSpeech;
      utterance.onerror = finishSpeech;

      setTimeout(() => {
        try {
          window.speechSynthesis.speak(utterance);
        } catch (err) {
          finishSpeech();
        }
      }, 50);
    } catch (e) {
      hideAudioVisualizer();
      if (onEndCb) onEndCb();
    }
  }

  // --- Web Audio Synth (Chimes) ---
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!appState.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      if (type === 'done') {
        const notes = [659.25, 830.61, 987.77];
        notes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.001, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.07 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.5);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.55);
        });
      } else if (type === 'skip') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(392.00, now);
        osc.frequency.exponentialRampToValueAtTime(523.25, now + 0.12);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'victory') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(0.001, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.09 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.09 + 0.7);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.75);
        });
      } else if (type === 'baby') {
        // Synthesized Baby Giggle Sound (rapid pitch sweeps: tee-hee-hee!)
        const times = [0, 0.08, 0.16, 0.25, 0.35];
        times.forEach((delay, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          const baseFreq = 850 + (idx % 2) * 140;
          osc.frequency.setValueAtTime(baseFreq, now + delay);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + delay + 0.035);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, now + delay + 0.075);
          gain.gain.setValueAtTime(0.001, now + delay);
          gain.gain.linearRampToValueAtTime(0.2, now + delay + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + delay);
          osc.stop(now + delay + 0.085);
        });
      } else if (type === 'kid') {
        // Synthesized Kid Pop / Whistle Chime (boing-yay!)
        const notes = [880.00, 1174.66, 1479.98]; // A5, D6, F#6
        notes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.05);
          osc.frequency.exponentialRampToValueAtTime(freq * 1.08, now + idx * 0.05 + 0.025);
          gain.gain.setValueAtTime(0.001, now + idx * 0.05);
          gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.05 + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.16);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.05);
          osc.stop(now + idx * 0.05 + 0.18);
        });
      }
    } catch (e) {}
  }

  function getFriendlyTimestamp() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  }

  function getRoomId() {
    const params = new URLSearchParams(window.location.search);
    let flowId = params.get('flow');
    if (!flowId) {
      flowId = 'naan';
      const newUrl = window.location.pathname + '?flow=' + flowId + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }
    return flowId;
  }

  function loadState() {
    const flowId = getRoomId();
    const rawLocal = localStorage.getItem(`${STORAGE_KEY}_${flowId}`) || localStorage.getItem(STORAGE_KEY);
    if (rawLocal) {
      try {
        const parsed = JSON.parse(rawLocal);
        appState = { ...appState, ...parsed };
      } catch (e) {}
    }

    if (!rawLocal && window.location.hash && window.location.hash.startsWith('#s=')) {
      try {
        const hashEncoded = window.location.hash.replace('#s=', '');
        const decoded = JSON.parse(decodeURIComponent(escape(atob(hashEncoded))));
        if (decoded && decoded.taskStatuses) {
          appState.taskStatuses = { ...appState.taskStatuses, ...decoded.taskStatuses };
          if (decoded.currentTaskId) appState.currentTaskId = decoded.currentTaskId;
        }
      } catch (e) {}
    }

    updateVoiceButtonUI();
  }

  function saveState() {
    const flowId = getRoomId();
    localStorage.setItem(`${STORAGE_KEY}_${flowId}`, JSON.stringify(appState));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

    try {
      const payload = {
        currentTaskId: appState.currentTaskId,
        taskStatuses: appState.taskStatuses,
        voiceChoice: appState.voiceChoice
      };
      const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
      const newUrl = `${window.location.origin}${window.location.pathname}?flow=${flowId}#s=${encoded}`;
      window.history.replaceState(null, '', newUrl);
      
      const shareUrlInput = document.getElementById('shareUrlInput');
      if (shareUrlInput) shareUrlInput.value = newUrl;
    } catch (e) {}
  }

  function updateVoiceButtonUI() {
    const femaleBtn = document.getElementById('voiceFemaleBtn');
    const maleBtn = document.getElementById('voiceMaleBtn');
    if (femaleBtn) femaleBtn.classList.toggle('active', appState.voiceChoice === 'female');
    if (maleBtn) maleBtn.classList.toggle('active', appState.voiceChoice === 'male');

    const personas = ['loving', 'motivational', 'inspiring', 'appreciating', 'strict', 'cheesy'];
    personas.forEach(p => {
      const cap = p.charAt(0).toUpperCase() + p.slice(1);
      const btn = document.getElementById(`persona${cap}Btn`);
      if (btn) btn.classList.toggle('active', appState.voicePersona === p);
    });

    // Load active preset values for Male or Female into Sliders and Dropdown
    const preset = getActivePreset();

    const rateSlider = document.getElementById('voiceRateSlider');
    const rateVal = document.getElementById('voiceRateVal');
    if (rateSlider) rateSlider.value = preset.rate || 1.0;
    if (rateVal) rateVal.textContent = `${(preset.rate || 1.0).toFixed(2)}x`;

    const pitchSlider = document.getElementById('voicePitchSlider');
    const pitchVal = document.getElementById('voicePitchVal');
    if (pitchSlider) pitchSlider.value = preset.pitch || 1.0;
    if (pitchVal) pitchVal.textContent = (preset.pitch || 1.0).toFixed(2);

    populateVoiceDropdown();
  }

  function triggerCelebration(isVictory = false) {
    if (typeof confetti !== 'function') return;
    confetti({
      particleCount: isVictory ? 60 : 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#F43F5E', '#10B981', '#FDE047']
    });
  }

  function showAnnouncement(title, message, emoji = '✨') {
    let cleanMsg = typeof message === 'object' ? (message.text || '') : message;
    if (typeof cleanMsg !== 'string') cleanMsg = String(cleanMsg || '');
    cleanMsg = cleanMsg.replace('[object Object]', '').trim();

    const banner = document.getElementById('cheerLiveBanner');
    const bannerText = document.getElementById('cheerLiveText');
    const bannerIcon = document.getElementById('cheerLiveIcon');
    if (banner && bannerText) {
      bannerText.textContent = `${title} ${cleanMsg}`.trim();
      if (bannerIcon) bannerIcon.textContent = emoji;
      banner.classList.add('just-updated');
      setTimeout(() => banner.classList.remove('just-updated'), 1000);
    }
  }

  // --- Rendering UI ---
  function renderApp() {
    renderProgress();
    renderBackgroundMagic();
    renderFocusView();
    renderMenuView();
    renderFlowPills();
    updateVoiceButtonUI();
    if (window.lucide) window.lucide.createIcons();
  }

  function renderProgress() {
    const total = TASKS_DATA.length;
    const completedCount = Object.values(appState.taskStatuses).filter(s => s.status === 'done').length;
    const skippedCount = Object.values(appState.taskStatuses).filter(s => s.status === 'skip').length;
    const totalInteracted = completedCount + skippedCount;
    const percent = Math.min(100, Math.round((totalInteracted / total) * 100));

    const counter = document.getElementById('progressCounter');
    const fill = document.getElementById('progressFill');
    if (counter) counter.textContent = `${completedCount}/${total} done ✨`;
    if (fill) fill.style.width = `${percent}%`;
  }

  function renderBackgroundMagic() {
    const tray = document.getElementById('bgMagicTray');
    const list = document.getElementById('bgMagicList');
    if (!tray || !list) return;

    const activeBgTasks = TASKS_DATA.filter(t => {
      if (!t.isBg) return false;
      const statusObj = appState.taskStatuses[t.id];
      return statusObj && statusObj.status === 'done';
    });

    if (activeBgTasks.length === 0) {
      tray.style.display = 'none';
      return;
    }

    tray.style.display = 'block';
    list.innerHTML = activeBgTasks.map(t => `
      <span class="bg-magic-tag">✨ ${t.bgNote}</span>
    `).join('');
  }

  function renderFocusView() {
    const wrapper = document.getElementById('focusCardWrapper');
    if (!wrapper) return;

    const task = TASKS_DATA.find(t => t.id === appState.currentTaskId) || TASKS_DATA[0];
    const statusObj = appState.taskStatuses[task.id];
    const isDone = statusObj && statusObj.status === 'done';
    const isSkip = statusObj && statusObj.status === 'skip';

    if (task.isCelebration) {
      wrapper.innerHTML = `
        <div class="victory-card">
          <div class="victory-badge">🎉 🌸 🌟</div>
          <h2 class="victory-title">Day Complete!</h2>
          <p class="victory-msg">${task.desc}</p>
          <div class="status-pill-box" style="margin-bottom: 16px;">
            <span>Completed at: <strong>${statusObj ? statusObj.timestamp : getFriendlyTimestamp()}</strong></span>
            ${statusObj ? `<button class="btn-undo-mini" onclick="window.kindFlow.undoTask('${task.id}')">Reset</button>` : ''}
          </div>
          <button class="btn-done-primary" style="margin: 0 auto 16px; width: 100%;" onclick="window.kindFlow.cheerVictory()">
            <i data-lucide="sparkles"></i>
            <span>Celebrate! 🎊</span>
          </button>
          <div class="focus-nav-bar">
            <button class="nav-arrow-btn" onclick="window.kindFlow.jumpToTask('13')">
              <i data-lucide="chevron-left"></i> Back
            </button>
            <button class="nav-arrow-btn" onclick="window.kindFlow.openShareModal()">
              <i data-lucide="share-2"></i> Share Wins
            </button>
          </div>
        </div>
      `;
      return;
    }

    let statusMarkup = '';
    if (isDone) {
      statusMarkup = `
        <div class="status-pill-box">
          <span>✨ Done at <strong>${statusObj.timestamp}</strong></span>
          <button class="btn-undo-mini" onclick="window.kindFlow.undoTask('${task.id}')">Undo</button>
        </div>
      `;
    } else if (isSkip) {
      statusMarkup = `
        <div class="status-pill-box skipped">
          <span>🍃 Skipped at <strong>${statusObj.timestamp}</strong></span>
          <button class="btn-undo-mini" onclick="window.kindFlow.undoTask('${task.id}')">Undo</button>
        </div>
      `;
    }

    let recipeMarkup = '';
    if (task.linkUrl) {
      recipeMarkup = `
        <a href="${task.linkUrl}" target="_blank" rel="noopener noreferrer" class="recipe-link-btn">
          <span>${task.linkText}</span>
          <i data-lucide="external-link"></i>
        </a>
      `;
    }

    if (task.whatsappRecipeBtn) {
      const msg = encodeURIComponent("Here is the Sarvapindi recipe for tonight! 🥘 Cozy dinner vibes ✨");
      const url = `https://api.whatsapp.com/send?text=${msg}`;
      recipeMarkup = `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="margin-bottom: 14px; text-decoration: none;">
          <i data-lucide="send"></i>
          <span>Send Recipe to WhatsApp</span>
        </a>
      `;
    }

    let branchMarkup = '';
    if (task.branches && task.branches.length > 0) {
      branchMarkup = `
        <div class="branch-box">
          ${task.branches.map(b => `
            <button class="btn-branch-choice ${b.type === 'backToBreak' ? 'rest-choice' : ''}" onclick="window.kindFlow.handleBranch('${task.id}', '${b.targetId}', '${b.type}')">
              <span>${b.label}</span>
              <i data-lucide="arrow-right"></i>
            </button>
          `).join('')}
        </div>
      `;
    }

    const currentIndex = TASKS_DATA.findIndex(t => t.id === task.id);
    const prevTask = currentIndex > 0 ? TASKS_DATA[currentIndex - 1] : null;
    const nextTask = task.nextId ? TASKS_DATA.find(t => t.id === task.nextId) : (currentIndex < TASKS_DATA.length - 1 ? TASKS_DATA[currentIndex + 1] : null);

    wrapper.innerHTML = `
      <div class="focus-card theme-${task.theme}">
        <div class="card-top-row">
          <span class="step-pill">Step ${task.num} of 14</span>
          <span class="tag-badge ${task.tagType}">${task.tag}</span>
        </div>

        <h2 class="focus-title">${task.title}</h2>
        <p class="focus-desc">${task.desc}</p>

        <div class="card-quick-meta">
          <span class="meta-item">⏳ ${task.time}</span>
          ${task.isBg ? `<span class="meta-item bg-win">✨ ${task.bgNote}</span>` : ''}
        </div>

        ${recipeMarkup}
        ${statusMarkup}

        ${!task.branches ? `
          <div class="action-grid">
            <button class="btn-done-primary" onclick="window.kindFlow.markDone('${task.id}')">
              <i data-lucide="check-circle-2"></i>
              <span>${isDone ? 'Done ✨' : 'Done ✨'}</span>
            </button>
            <button class="btn-skip-primary" onclick="window.kindFlow.markSkip('${task.id}')">
              <i data-lucide="skip-forward"></i>
              <span>${isSkip ? 'Skipped 🍃' : 'Skip 🍃'}</span>
            </button>
          </div>
        ` : branchMarkup}

        <div class="focus-nav-bar">
          <button class="nav-arrow-btn" ${!prevTask ? 'disabled' : ''} onclick="${prevTask ? `window.kindFlow.jumpToTask('${prevTask.id}')` : ''}">
            <i data-lucide="chevron-left"></i> Prev
          </button>
          <span style="font-size: 0.76rem; color: var(--text-light);">Move at your own pace</span>
          <button class="nav-arrow-btn" ${!nextTask ? 'disabled' : ''} onclick="${nextTask ? `window.kindFlow.jumpToTask('${nextTask.id}')` : ''}">
            Next <i data-lucide="chevron-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  function renderMenuView() {
    const list = document.getElementById('tasksMenuList');
    if (!list) return;

    list.innerHTML = TASKS_DATA.map(t => {
      const statusObj = appState.taskStatuses[t.id];
      const isDone = statusObj && statusObj.status === 'done';
      const isSkip = statusObj && statusObj.status === 'skip';

      let cardClass = 'menu-card';
      if (isDone) cardClass += ' done-card';
      if (isSkip) cardClass += ' skip-card';

      return `
        <div class="${cardClass}">
          <div class="menu-card-header">
            <div class="menu-num-title">
              <span class="menu-num-badge">${t.num}</span>
              <span class="menu-task-title">${t.title}</span>
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${t.time}</span>
          </div>
          <p class="menu-card-desc">${t.desc}</p>
          <div class="menu-card-footer">
            <div>
              ${isDone ? `<span style="color:var(--sage-deep); font-weight:700;">✓ Done (${statusObj.timestamp})</span>` : ''}
              ${isSkip ? `<span style="color:#C2410C; font-weight:700;">🍃 Skipped (${statusObj.timestamp})</span>` : ''}
            </div>
            <div style="display:flex; gap:6px;">
              <button class="btn-mini-action btn-mini-done" onclick="window.kindFlow.markDone('${t.id}')">Done</button>
              <button class="btn-mini-action btn-mini-skip" onclick="window.kindFlow.markSkip('${t.id}')">Skip</button>
              <button class="btn-mini-action btn-mini-skip" onclick="window.kindFlow.focusTaskAndSwitch('${t.id}')">Focus</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderFlowPills() {
    const row = document.getElementById('flowPillsRow');
    if (!row) return;

    row.innerHTML = TASKS_DATA.map(t => {
      const statusObj = appState.taskStatuses[t.id];
      const isDone = statusObj && statusObj.status === 'done';
      const isSkip = statusObj && statusObj.status === 'skip';

      let pillClass = 'pill-step';
      if (isDone) pillClass += ' done';
      if (isSkip) pillClass += ' skip';

      return `
        <button class="${pillClass}" onclick="window.kindFlow.focusTaskAndSwitch('${t.id}')">
          ${isDone ? '✓ ' : (isSkip ? '🍃 ' : '')}${t.num}
        </button>
      `;
    }).join('');
  }

  // --- Public Handlers ---
  window.kindFlow = {
    sparkMotivation: sparkRandomMotivation,

    setPersona: function (personaKey) {
      initAudio();
      appState.voicePersona = personaKey;
      saveState();
      updateVoiceButtonUI();
      const cfg = PERSONA_CONFIG[personaKey] || PERSONA_CONFIG.loving;
      playSound(cfg.chime || 'done');
      showAnnouncement(cfg.announceTitle, cfg.announceMsg, cfg.emoji);
      speakCheer(cfg.sampleSpeech);
    },

    setVoice: function (choice) {
      initAudio();
      appState.voiceChoice = choice;
      saveState();
      updateVoiceButtonUI();
      if (choice === 'male') {
        showAnnouncement("Male Voice 👦", "Switched to male voice.", "✨");
        speakCheer("Male voice selected!");
      } else {
        showAnnouncement("Female Voice 🌸", "Switched to female voice.", "✨");
        speakCheer("Female voice selected!");
      }
    },

    markDone: function (taskId) {
      initAudio();
      const task = TASKS_DATA.find(t => t.id === taskId);
      const timestamp = getFriendlyTimestamp();

      appState.taskStatuses[taskId] = {
        status: 'done',
        timestamp: timestamp,
        epoch: Date.now()
      };

      playSound(taskId === '14' ? 'victory' : 'done');
      triggerCelebration(taskId === '14');

      const headline = getRandomItem(DONE_HEADLINES);
      const cheerRes = getPersonaText(task, 'done');
      const textVal = typeof cheerRes === 'object' ? cheerRes.text : cheerRes;
      const audioFile = typeof cheerRes === 'object' ? cheerRes.audioFile : null;
      const cfg = PERSONA_CONFIG[appState.voicePersona || 'loving'];
      showAnnouncement(headline, textVal, cfg ? cfg.emoji : "✨");

      speakCheer({ text: `${headline}. ${textVal}`, audioFile: audioFile });

      if (appState.activeView === 'focus' && task && task.nextId) {
        appState.currentTaskId = task.nextId;
      }

      saveState();
      renderApp();
    },

    markSkip: function (taskId) {
      initAudio();
      const task = TASKS_DATA.find(t => t.id === taskId);
      const timestamp = getFriendlyTimestamp();

      appState.taskStatuses[taskId] = {
        status: 'skip',
        timestamp: timestamp,
        epoch: Date.now()
      };

      playSound('skip');

      const cheerRes = getPersonaText(task, 'skip');
      const textVal = typeof cheerRes === 'object' ? cheerRes.text : cheerRes;
      const audioFile = typeof cheerRes === 'object' ? cheerRes.audioFile : null;
      const cfg = PERSONA_CONFIG[appState.voicePersona || 'loving'];
      showAnnouncement("Energy Saved! 🍃", textVal, cfg ? cfg.emoji : "🌸");

      speakCheer({ text: `Energy saved! ${textVal}`, audioFile: audioFile });

      if (appState.activeView === 'focus' && task && task.nextId) {
        appState.currentTaskId = task.nextId;
      }

      saveState();
      renderApp();
    },

    undoTask: function (taskId) {
      delete appState.taskStatuses[taskId];
      saveState();
      renderApp();
      showAnnouncement("Reset 🔄", "Task is fresh and ready.", "🌿");
      speakCheer("Task reset and ready.");
    },

    resetAllFlow: function () {
      initAudio();
      appState.taskStatuses = {};
      appState.currentTaskId = "1";
      
      const flowId = getRoomId();
      localStorage.removeItem(`${STORAGE_KEY}_${flowId}`);
      localStorage.removeItem(STORAGE_KEY);
      
      // Clear splash storage session keys
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith('naan_splash_done_')) {
          sessionStorage.removeItem(key);
        }
      });

      const cleanUrl = `${window.location.origin}${window.location.pathname}?flow=${flowId}`;
      window.history.replaceState(null, '', cleanUrl);

      const shareUrlInput = document.getElementById('shareUrlInput');
      if (shareUrlInput) shareUrlInput.value = cleanUrl;

      window.kindFlow.closeShareModal();
      renderApp();

      // Immediately return user to Welcome Splash Screen!
      showWelcomeSplash();
      showAnnouncement("Fresh Start 🌸", "Good morning! Ready for a fresh start?", "✨");
      speakCheer("Shubodayam Naan! Ready for making your beautiful day?");
    },

    handleBranch: function (currentId, targetId, branchType) {
      initAudio();
      const timestamp = getFriendlyTimestamp();

      if (branchType === 'primary') {
        appState.taskStatuses[currentId] = {
          status: 'done',
          timestamp: timestamp,
          epoch: Date.now()
        };
        playSound('done');
        triggerCelebration(false);
        showAnnouncement("Let's go! 🚀", "Onward to the next step ✨", "✨");
        speakCheer("Let's go! Onward to the next step.");
      } else if (branchType === 'alternate') {
        appState.taskStatuses[currentId] = {
          status: 'skip',
          timestamp: timestamp,
          epoch: Date.now()
        };
        playSound('skip');
        showAnnouncement("Skipped break ⚡", "Straight to what's next!", "🚀");
        speakCheer("Moving straight to what's next!");
      } else if (branchType === 'backToBreak') {
        playSound('skip');
        showAnnouncement("Rest mode ☁️", "Take as long as you need.", "🌸");
        speakCheer("Rest mode! Take as long as you need.");
      }

      appState.currentTaskId = targetId;
      saveState();
      renderApp();
    },

    jumpToTask: function (taskId) {
      appState.currentTaskId = taskId;
      saveState();
      renderFocusView();
      if (window.lucide) window.lucide.createIcons();
    },

    focusTaskAndSwitch: function (taskId) {
      appState.currentTaskId = taskId;
      switchView('focus');
      saveState();
      renderApp();
    },

    cheerVictory: function () {
      initAudio();
      playSound('victory');
      triggerCelebration(true);
      showAnnouncement("Champion! 🏆", "You did amazing today!", "🎉");
      speakCheer("Champion! You did amazing today. You should feel so proud!");
    },

    toggleTuningPanel: function () {
      const card = document.getElementById('voiceTuningCard');
      if (card) {
        const isHidden = card.style.display === 'none';
        card.style.display = isHidden ? 'block' : 'none';
        if (isHidden) populateVoiceDropdown();
      }
    },

    openShareModal: function () {
      const modal = document.getElementById('shareModal');
      const shareUrlInput = document.getElementById('shareUrlInput');
      if (modal && shareUrlInput) {
        const flowId = getRoomId();
        const payload = {
          currentTaskId: appState.currentTaskId,
          taskStatuses: appState.taskStatuses,
          voiceChoice: appState.voiceChoice
        };
        const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
        const liveUrl = `${window.location.origin}${window.location.pathname}?flow=${flowId}#s=${encoded}`;
        shareUrlInput.value = liveUrl;
        modal.style.display = 'flex';
      }
    },

    closeShareModal: function () {
      const modal = document.getElementById('shareModal');
      if (modal) modal.style.display = 'none';
    }
  };

  function switchView(viewName) {
    appState.activeView = viewName;
    const focusBtn = document.getElementById('focusViewBtn');
    const menuBtn = document.getElementById('menuViewBtn');
    const focusSec = document.getElementById('focusViewSection');
    const menuSec = document.getElementById('menuViewSection');

    if (viewName === 'focus') {
      focusBtn.classList.add('active');
      menuBtn.classList.remove('active');
      focusSec.classList.add('active');
      menuSec.classList.remove('active');
    } else {
      menuBtn.classList.add('active');
      focusBtn.classList.remove('active');
      menuSec.classList.add('active');
      focusSec.classList.remove('active');
    }
  }

  function setupEvents() {
    const focusBtn = document.getElementById('focusViewBtn');
    const menuBtn = document.getElementById('menuViewBtn');
    if (focusBtn) focusBtn.addEventListener('click', () => switchView('focus'));
    if (menuBtn) menuBtn.addEventListener('click', () => switchView('menu'));

    const randomMotivationBtn = document.getElementById('randomMotivationBtn');
    if (randomMotivationBtn) {
      randomMotivationBtn.addEventListener('click', window.kindFlow.sparkMotivation);
    }

    // Tone Persona Buttons
    const personaLovingBtn = document.getElementById('personaLovingBtn');
    const personaMotivationalBtn = document.getElementById('personaMotivationalBtn');
    const personaInspiringBtn = document.getElementById('personaInspiringBtn');
    const personaAppreciatingBtn = document.getElementById('personaAppreciatingBtn');
    const personaStrictBtn = document.getElementById('personaStrictBtn');
    const personaCheesyBtn = document.getElementById('personaCheesyBtn');
    const personaRomanticBtn = document.getElementById('personaRomanticBtn');

    if (personaLovingBtn) personaLovingBtn.addEventListener('click', () => window.kindFlow.setPersona('loving'));
    if (personaMotivationalBtn) personaMotivationalBtn.addEventListener('click', () => window.kindFlow.setPersona('motivational'));
    if (personaInspiringBtn) personaInspiringBtn.addEventListener('click', () => window.kindFlow.setPersona('inspiring'));
    if (personaAppreciatingBtn) personaAppreciatingBtn.addEventListener('click', () => window.kindFlow.setPersona('appreciating'));
    if (personaStrictBtn) personaStrictBtn.addEventListener('click', () => window.kindFlow.setPersona('strict'));
    if (personaCheesyBtn) personaCheesyBtn.addEventListener('click', () => window.kindFlow.setPersona('cheesy'));
    if (personaRomanticBtn) personaRomanticBtn.addEventListener('click', () => window.kindFlow.setPersona('romantic'));

    // Gender Voice Buttons
    const voiceFemaleBtn = document.getElementById('voiceFemaleBtn');
    const voiceMaleBtn = document.getElementById('voiceMaleBtn');
    if (voiceFemaleBtn) voiceFemaleBtn.addEventListener('click', () => window.kindFlow.setVoice('female'));
    if (voiceMaleBtn) voiceMaleBtn.addEventListener('click', () => window.kindFlow.setVoice('male'));

    // Voice Tuning Card Controls
    const toggleTuningCardBtn = document.getElementById('toggleTuningCardBtn');
    const closeTuningCardBtn = document.getElementById('closeTuningCardBtn');
    if (toggleTuningCardBtn) toggleTuningCardBtn.addEventListener('click', window.kindFlow.toggleTuningPanel);
    if (closeTuningCardBtn) closeTuningCardBtn.addEventListener('click', window.kindFlow.toggleTuningPanel);

    const voiceRateSlider = document.getElementById('voiceRateSlider');
    if (voiceRateSlider) {
      voiceRateSlider.addEventListener('input', (e) => {
        const preset = getActivePreset();
        preset.rate = parseFloat(e.target.value);
        const rateVal = document.getElementById('voiceRateVal');
        if (rateVal) rateVal.textContent = `${preset.rate.toFixed(2)}x`;
        saveState();
      });
    }

    const voicePitchSlider = document.getElementById('voicePitchSlider');
    if (voicePitchSlider) {
      voicePitchSlider.addEventListener('input', (e) => {
        const preset = getActivePreset();
        preset.pitch = parseFloat(e.target.value);
        const pitchVal = document.getElementById('voicePitchVal');
        if (pitchVal) pitchVal.textContent = preset.pitch.toFixed(2);
        saveState();
      });
    }

    const systemVoiceSelect = document.getElementById('systemVoiceSelect');
    if (systemVoiceSelect) {
      systemVoiceSelect.addEventListener('change', (e) => {
        const preset = getActivePreset();
        preset.voiceURI = e.target.value;
        saveState();
        showAnnouncement("Voice Changed 🎙️", `Custom voice saved for ${appState.voiceChoice.toUpperCase()}`, "✨");
        speakCheer("Custom voice engine updated!");
      });
    }

    const testVoiceBtn = document.getElementById('testVoiceBtn');
    if (testVoiceBtn) {
      testVoiceBtn.addEventListener('click', () => {
        initAudio();
        speakCheer("Hello Naan! This is your custom voice speed and tone.");
      });
    }

    const saveVoiceTuningBtn = document.getElementById('saveVoiceTuningBtn');
    if (saveVoiceTuningBtn) {
      saveVoiceTuningBtn.addEventListener('click', () => {
        saveState();
        showAnnouncement("Preset Saved 💾", `Voice settings locked for ${appState.voiceChoice.toUpperCase()}`, "✨");
        speakCheer("Voice settings saved successfully!");
      });
    }

    const resetVoiceTuningBtn = document.getElementById('resetVoiceTuningBtn');
    if (resetVoiceTuningBtn) {
      resetVoiceTuningBtn.addEventListener('click', () => {
        const preset = getActivePreset();
        preset.rate = 1.10;
        preset.pitch = 0.91;
        preset.voiceURI = maleVoice ? (maleVoice.voiceURI || maleVoice.name) : '';
        saveState();
        updateVoiceButtonUI();
        showAnnouncement("Voice Reset 🔄", "Defaults restored (1.10x speed, 0.91 pitch)", "✨");
        speakCheer("Voice speed and tone reset to defaults.");
      });
    }

    // Sound Toggle
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        appState.soundEnabled = !appState.soundEnabled;
        soundToggleBtn.innerHTML = appState.soundEnabled ? '<i data-lucide="volume-2"></i>' : '<i data-lucide="volume-x"></i>';
        if (window.lucide) window.lucide.createIcons();
        if (!appState.soundEnabled && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        showAnnouncement(
          appState.soundEnabled ? "Voice & Sound On 🔔" : "Voice Muted 🔕",
          appState.soundEnabled ? "Spoken voice & gentle chimes enabled" : "Peaceful silence mode",
          appState.soundEnabled ? "🎵" : "🤫"
        );
        if (appState.soundEnabled) {
          speakCheer("Voice announcements enabled!");
        }
      });
    }

    const shareFlowBtn = document.getElementById('shareFlowBtn');
    if (shareFlowBtn) shareFlowBtn.addEventListener('click', window.kindFlow.openShareModal);

    const closeShareModalBtn = document.getElementById('closeShareModalBtn');
    if (closeShareModalBtn) closeShareModalBtn.addEventListener('click', window.kindFlow.closeShareModal);

    const copyShareUrlBtn = document.getElementById('copyShareUrlBtn');
    if (copyShareUrlBtn) {
      copyShareUrlBtn.addEventListener('click', () => {
        const input = document.getElementById('shareUrlInput');
        if (input) {
          input.select();
          navigator.clipboard.writeText(input.value).then(() => {
            showAnnouncement("Link Copied! 📋", "Send it to your phone or Naan!", "✨");
            speakCheer("Link copied!");
          });
        }
      });
    }

    const whatsappShareBtn = document.getElementById('whatsappShareBtn');
    if (whatsappShareBtn) {
      whatsappShareBtn.addEventListener('click', () => {
        const input = document.getElementById('shareUrlInput');
        const urlToShare = input ? input.value : window.location.href;
        const msg = encodeURIComponent(`Here is Naan's daily flow for today! 🌸\n\nTrack along here:\n${urlToShare}`);
        window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
      });
    }

    const resetFlowBtn = document.getElementById('resetFlowBtn');
    if (resetFlowBtn) {
      resetFlowBtn.addEventListener('click', window.kindFlow.resetAllFlow);
    }

    const clearDataBtn = document.getElementById('clearDataBtn');
    if (clearDataBtn) {
      clearDataBtn.addEventListener('click', window.kindFlow.resetAllFlow);
    }
  }

  // --- Welcome Splash Screen Logic ---
  const SPLASH_CHEERS = {
    yes: [
      "That energy is beautiful! Let's channel it into your day ✨",
      "Sunshine energy activated! Today is going to be wonderful 🌻",
      "You woke up and chose joy! The world is lucky to have you 💛"
    ],
    slow: [
      "The bravest thing is just showing up. You're already winning 💛",
      "Gentle mornings make the best days. You're doing amazing 🌸",
      "No rush at all — your pace is perfect. Let's ease into it ☁️"
    ]
  };

  function showWelcomeSplash() {
    const splash = document.getElementById('welcomeSplash');
    const appContainer = document.getElementById('appContainer');
    const cheer = document.getElementById('splashCheer');
    if (splash && appContainer) {
      splash.classList.remove('fade-out');
      splash.style.display = 'flex';
      splash.style.opacity = '1';
      if (cheer) {
        cheer.classList.remove('show');
        cheer.style.opacity = '';
      }
      appContainer.style.display = 'none';
    }
  }

  function initSplash() {
    const splash = document.getElementById('welcomeSplash');
    const appContainer = document.getElementById('appContainer');
    const cheer = document.getElementById('splashCheer');
    const cheerText = document.getElementById('splashCheerText');
    const btnYes = document.getElementById('splashBtnYes');
    const btnSlow = document.getElementById('splashBtnSlow');

    if (!splash || !appContainer) return;

    // Check if splash was already dismissed this session
    const splashKey = 'naan_splash_done_' + new Date().toDateString();
    if (sessionStorage.getItem(splashKey)) {
      splash.style.display = 'none';
      appContainer.style.display = '';
      return;
    }

    // --- Start Audio Automatically from Splash Screen by Default ---
    let splashAudioPlayed = false;

    function revealSplashChoices() {
      const choices = document.querySelector('.splash-choices');
      if (choices) {
        choices.classList.add('show-options');
      }
    }

    function playSplashDefaultAudio() {
      if (splashAudioPlayed) return;
      initAudio();
      const splashGreeting = "Shubodayam Nana! Simply showing up for yourself today is already a beautiful victory.";

      if (activeAudioObj) {
        try { activeAudioObj.pause(); } catch (e) {}
      }

      activeAudioObj = new Audio('audio/welcome_greeting.mp3');
      showAudioVisualizer('romantic', splashGreeting);

      activeAudioObj.onended = () => {
        splashAudioPlayed = true;
        hideAudioVisualizer();
        revealSplashChoices();
      };
      activeAudioObj.onerror = () => {
        revealSplashChoices();
      };

      activeAudioObj.play().then(() => {
        splashAudioPlayed = true;
      }).catch((err) => {
        console.warn("Splash autoplay deferred until user gesture:", err);
        hideAudioVisualizer();
      });

      setTimeout(revealSplashChoices, 3500);
    }

    // Trigger immediate audio attempt on splash screen load
    setTimeout(() => {
      playSplashDefaultAudio();
    }, 200);

    const splashHint = document.getElementById('splashAudioHint');
    if (splashHint) {
      splashHint.addEventListener('click', (e) => {
        e.stopPropagation();
        playSplashDefaultAudio();
      });
    }

    // Unblock browser autoplay on first user touch/click/key if deferred by browser policy
    const unblockAutoplay = () => {
      playSplashDefaultAudio();
      window.removeEventListener('pointerdown', unblockAutoplay);
      window.removeEventListener('click', unblockAutoplay);
      window.removeEventListener('keydown', unblockAutoplay);
      window.removeEventListener('touchstart', unblockAutoplay);
    };

    window.addEventListener('pointerdown', unblockAutoplay);
    window.addEventListener('touchstart', unblockAutoplay);
    window.addEventListener('click', unblockAutoplay);
    window.addEventListener('keydown', unblockAutoplay);

    function dismissSplash(type) {
      initAudio();
      const cheers = type === 'yes' ? SPLASH_CHEERS.yes : SPLASH_CHEERS.slow;
      const idx = Math.floor(Math.random() * cheers.length);
      const msg = cheers[idx];
      const audioFile = `audio/splash_${type}_${idx}.mp3`;

      // Show cheer overlay
      if (cheer && cheerText) {
        cheerText.textContent = msg;
        cheer.classList.add('show');
        speakCheer({ text: msg, audioFile: audioFile });
        playSound('done');
      }

      // After cheer, transition to main app
      setTimeout(() => {
        splash.classList.add('fade-out');
        if (cheer) cheer.style.opacity = '0';
        setTimeout(() => {
          splash.style.display = 'none';
          appContainer.style.display = '';
          sessionStorage.setItem(splashKey, '1');
          renderApp();
          if (typeof confetti === 'function') {
            confetti({ particleCount: 25, spread: 50, origin: { y: 0.6 }, colors: ['#F59E0B', '#F43F5E', '#10B981'] });
          }
        }, 600);
      }, 2200);
    }

    if (btnYes) btnYes.addEventListener('click', () => dismissSplash('yes'));
    if (btnSlow) btnSlow.addEventListener('click', () => dismissSplash('slow'));
  }

  // --- Dynamic Rotating Footer Captions (Crafted with Love & Space) ---
  const FOOTER_CAPTIONS = [
    "Crafted with love, light & infinite space 💖🌌",
    "Created with gentle love & room to breathe 🌿✨",
    "Woven with love, quiet space & sweet warmth 🌸💫",
    "Built with love, space & good energy 💛🍃",
    "Crafted with love & space for your own rhythm ✨💖",
    "Made with love, warm light & gentle space 🌻✨",
    "Designed with love, peace & endless space 🌙💕",
    "Crafted with love, soft breezes & cozy space 🍃💛",
    "Filled with love, space & zero pressure 💖☁️",
    "Handcrafted with love & wide open space 🌌🌸"
  ];

  let currentFooterIdx = 0;

  function rotateFooterCaption() {
    const el = document.getElementById('footerQuoteText');
    if (!el) return;

    el.classList.add('fade-swap');
    setTimeout(() => {
      let nextIdx;
      do {
        nextIdx = Math.floor(Math.random() * FOOTER_CAPTIONS.length);
      } while (nextIdx === currentFooterIdx && FOOTER_CAPTIONS.length > 1);

      currentFooterIdx = nextIdx;
      el.textContent = FOOTER_CAPTIONS[currentFooterIdx];
      el.classList.remove('fade-swap');
    }, 400);
  }

  function initFooterRotation() {
    const el = document.getElementById('footerQuoteText');
    if (el) {
      el.addEventListener('click', () => {
        rotateFooterCaption();
        if (typeof confetti === 'function') {
          confetti({ particleCount: 12, spread: 35, origin: { y: 0.9 } });
        }
      });
    }
    // Rotate caption automatically every 6.5 seconds
    setInterval(rotateFooterCaption, 6500);
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupEvents();
    initSplash();
    initFooterRotation();
    // Render app only if splash is already dismissed (otherwise initSplash handles it)
    const splashKey = 'naan_splash_done_' + new Date().toDateString();
    if (sessionStorage.getItem(splashKey)) {
      renderApp();
    }
  });

})();
