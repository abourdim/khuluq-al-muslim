/* خلق المسلم — THE MUSLIM'S CHARACTER — app.js v1.0 */
/* Based on "Khuluq al-Muslim" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'خلق المسلم',
    splashSub: 'أخلاق إسلامية للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة القلم ٦٨: ٤',
    tabHome: 'الرئيسية', tabTraits: 'الأخلاق', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'أخلاق المسلم',
    traitsDesc: '٢٠ خُلقاً إسلامياً من كتاب الشيخ محمد الغزالي — كل خُلق بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن أخلاق المسلم — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الأخلاقية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الأخلاق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية حسن الخلق',
    dailyLabel: '✨ خُلق اليوم',
    searchPlaceholder: 'ابحث في الأخلاق...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ خُلقاً إسلامياً من كتاب خلق المسلم',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: "The Muslim's Character",
    splashSub: 'Islamic ethics for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Qalam 68:4',
    tabHome: 'Home', tabTraits: 'Traits', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Muslim Character Traits',
    traitsDesc: '20 Islamic character traits from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic character — 4 choices per question',
    progressTitle: 'My Character Journey',
    progressDesc: 'Your progress and achievements in the character journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Good Character',
    dailyLabel: "✨ Today's Trait",
    searchPlaceholder: 'Search traits...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      "20 Islamic traits from The Muslim's Character",
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Le Caractère du Musulman',
    splashSub: "L'éthique islamique pour les jeunes",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Qalam 68:4',
    tabHome: 'Accueil', tabTraits: 'Vertus', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    traitsTitle: 'Vertus du Musulman',
    traitsDesc: "20 vertus islamiques du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur le caractère islamique — 4 choix par question',
    progressTitle: 'Mon Parcours Moral',
    progressDesc: 'Vos progrès et réalisations dans le parcours des vertus',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour le Bon Caractère',
    dailyLabel: '✨ Vertu du Jour',
    searchPlaceholder: 'Rechercher les vertus...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 vertus islamiques du livre Le Caractère du Musulman',
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 CHARACTER TRAITS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🤝',
    ar:{title:'الصدق',desc:'الصدق أساس الأخلاق كلها. المسلم صادق في قوله وفعله ونيته. الكذب يهدم الثقة بين الناس ويفسد المجتمع.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ',verseRef:'التوبة ١١٩',hadith:'عليكم بالصدق فإن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة — متفق عليه',action:'قل الحق اليوم حتى لو كان صعباً — واحفظ لسانك من الكذب ولو مازحاً',young:'كن صادقاً دائماً! الصدق مثل النور — يجعل الجميع يثقون بك 🌟'},
    en:{title:'Honesty',desc:'Honesty is the foundation of all morals. A Muslim is truthful in speech, action, and intention. Lying destroys trust among people and corrupts society.',verse:'O you who believe, fear Allah and be with the truthful',verseRef:'At-Tawbah 119',hadith:'Be truthful, for truthfulness leads to righteousness, and righteousness leads to Paradise — Agreed upon',action:'Speak the truth today even if it is difficult — guard your tongue from lying even in jest',young:'Always be honest! Honesty is like a light — it makes everyone trust you 🌟'},
    fr:{title:"L'Honnêteté",desc:"L'honnêteté est le fondement de toutes les vertus. Le musulman est véridique dans ses paroles, ses actes et ses intentions. Le mensonge détruit la confiance et corrompt la société.",verse:'Ô vous qui croyez, craignez Allah et soyez avec les véridiques',verseRef:'At-Tawbah 119',hadith:"Soyez véridiques, car la véracité mène à la droiture, et la droiture mène au Paradis — Unanimement reconnu",action:"Dites la vérité aujourd'hui même si c'est difficile — gardez votre langue du mensonge",young:"Sois toujours honnête ! L'honnêteté est comme la lumière — elle fait que tout le monde te fait confiance 🌟"}
  },
  {
    id:2, emoji:'🕊️',
    ar:{title:'الصبر',desc:'الصبر قوة لا ضعف. هو أن تتحمل المشاق دون شكوى، وتثبت على الحق مهما كانت العوائق. المسلم يصبر على البلاء وعلى الطاعة وعن المعصية.',verse:'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ',verseRef:'الزمر ١٠',hadith:'ما أُعطي أحد عطاءً خيراً وأوسع من الصبر — متفق عليه',action:'عندما تغضب اليوم، توقف وعدّ إلى عشرة قبل أن تتكلم',young:'الصبر قوة خارقة! عندما تشعر بالغضب، خذ نفساً عميقاً وعدّ إلى ١٠ 🦸'},
    en:{title:'Patience',desc:'Patience is strength, not weakness. It means enduring hardships without complaint and standing firm on truth despite obstacles. A Muslim is patient in trials, in obedience, and in avoiding sin.',verse:'The patient will be given their reward without measure',verseRef:'Az-Zumar 10',hadith:'No one has been given a gift better and more comprehensive than patience — Agreed upon',action:'When you feel angry today, stop and count to ten before you speak',young:'Patience is a superpower! When you feel angry, take a deep breath and count to 10 🦸'},
    fr:{title:'La Patience',desc:"La patience est une force, pas une faiblesse. C'est endurer les épreuves sans se plaindre et rester ferme sur la vérité malgré les obstacles. Le musulman est patient face aux épreuves et dans l'obéissance.",verse:'Les patients recevront leur récompense sans mesure',verseRef:'Az-Zumar 10',hadith:"Personne n'a reçu un don meilleur et plus vaste que la patience — Unanimement reconnu",action:"Quand vous vous sentez en colère aujourd'hui, arrêtez-vous et comptez jusqu'à dix",young:"La patience est un super-pouvoir ! Quand tu es en colère, respire profondément et compte jusqu'à 10 🦸"}
  },
  {
    id:3, emoji:'🎁',
    ar:{title:'الكرم',desc:'الكرم ليس فقط بالمال بل بالوقت والعلم والكلمة الطيبة. المسلم الكريم يعطي دون أن ينتظر مقابلاً. البخل يحبس صاحبه في سجن الأنانية.',verse:'وَمَا أَنْفَقْتُمْ مِنْ شَيْءٍ فَهُوَ يُخْلِفُهُ',verseRef:'سبأ ٣٩',hadith:'ما نقصت صدقة من مال — رواه مسلم',action:'تصدق اليوم بشيء: مال أو ابتسامة أو كلمة طيبة أو وقت تقضيه مع محتاج',young:'كن كريماً! شارك ألعابك وابتسامتك وكلماتك الطيبة مع الآخرين 🎁'},
    en:{title:'Generosity',desc:'Generosity is not just about money — it includes time, knowledge, and kind words. A generous Muslim gives without expecting anything in return. Miserliness traps its owner in the prison of selfishness.',verse:'And whatever you spend, He will replace it',verseRef:'Saba 39',hadith:'Charity does not decrease wealth — Muslim',action:'Give something today: money, a smile, a kind word, or time spent with someone in need',young:'Be generous! Share your toys, your smiles, and kind words with others 🎁'},
    fr:{title:'La Générosité',desc:"La générosité ne se limite pas à l'argent — elle inclut le temps, le savoir et les bonnes paroles. Le musulman généreux donne sans rien attendre en retour. L'avarice emprisonne dans l'égoïsme.",verse:'Et tout ce que vous dépensez, Il le remplacera',verseRef:'Saba 39',hadith:"La charité ne diminue pas la richesse — Muslim",action:"Donnez quelque chose aujourd'hui : de l'argent, un sourire, un bon mot, ou du temps",young:"Sois généreux ! Partage tes jouets, tes sourires et tes bonnes paroles avec les autres 🎁"}
  },
  {
    id:4, emoji:'🙇',
    ar:{title:'التواضع',desc:'التواضع تاج الأخلاق. المتكبر يظلم نفسه والناس. المسلم يتواضع لله وللخلق، ولا يحتقر أحداً مهما كان.',verse:'وَعِبَادُ الرَّحْمَنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا',verseRef:'الفرقان ٦٣',hadith:'ما تواضع أحد لله إلا رفعه الله — رواه مسلم',action:'تعامل اليوم مع كل شخص باحترام — من عامل النظافة إلى المدير',young:'كن متواضعاً! لا تتكبر على أحد — الله يحب المتواضعين 🌸'},
    en:{title:'Humility',desc:'Humility is the crown of all character. The arrogant person wrongs themselves and others. A Muslim is humble before God and all people, never looking down on anyone.',verse:'The servants of the Most Merciful are those who walk upon the earth in humility',verseRef:'Al-Furqan 63',hadith:'No one humbles themselves for the sake of Allah except that Allah raises them — Muslim',action:'Treat everyone with respect today — from the janitor to the director',young:'Be humble! Never look down on anyone — Allah loves the humble 🌸'},
    fr:{title:"L'Humilité",desc:"L'humilité est la couronne du caractère. L'orgueilleux se fait du tort et nuit aux autres. Le musulman est humble devant Dieu et devant les gens, ne méprisant jamais personne.",verse:'Les serviteurs du Tout Miséricordieux marchent sur terre avec humilité',verseRef:'Al-Furqan 63',hadith:"Quiconque s'humilie pour Allah, Allah l'élève — Muslim",action:"Traitez tout le monde avec respect aujourd'hui — du concierge au directeur",young:"Sois humble ! Ne regarde jamais personne de haut — Allah aime les humbles 🌸"}
  },
  {
    id:5, emoji:'⚖️',
    ar:{title:'العدل',desc:'العدل فريضة على كل مسلم في كل أحواله. يعدل مع صديقه وعدوه، مع المسلم وغير المسلم. الظلم ظلمات يوم القيامة.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠',hadith:'اتقوا الظلم فإن الظلم ظلمات يوم القيامة — رواه مسلم',action:'كن عادلاً اليوم: لا تحكم على أحد قبل أن تسمع الطرفين',young:'كن عادلاً مع الجميع! لا تظلم أحداً حتى لو كان ليس صديقك ⚖️'},
    en:{title:'Justice',desc:'Justice is an obligation upon every Muslim in all circumstances. Being just with friend and foe, Muslim and non-Muslim alike. Injustice will be darkness on the Day of Judgment.',verse:'Indeed, Allah commands justice and excellence',verseRef:'An-Nahl 90',hadith:'Beware of injustice, for it will be darkness on the Day of Judgment — Muslim',action:'Be just today: do not judge anyone before hearing both sides',young:'Be fair with everyone! Never be unfair to anyone, even if they are not your friend ⚖️'},
    fr:{title:'La Justice',desc:"La justice est une obligation pour chaque musulman en toute circonstance. Être juste avec l'ami et l'ennemi, le musulman et le non-musulman. L'injustice sera des ténèbres au Jour du Jugement.",verse:'Allah ordonne la justice et la bienfaisance',verseRef:'An-Nahl 90',hadith:"Gardez-vous de l'injustice, car elle sera des ténèbres au Jour du Jugement — Muslim",action:"Soyez juste aujourd'hui : ne jugez personne avant d'avoir entendu les deux parties",young:"Sois juste avec tout le monde ! Ne sois jamais injuste, même si ce n'est pas ton ami ⚖️"}
  },
  {
    id:6, emoji:'💝',
    ar:{title:'الرحمة',desc:'الرحمة شعار المسلم. يرحم الصغير والكبير، والإنسان والحيوان. من لا يرحم لا يُرحم. الرحمة ليست ضعفاً بل هي من أعظم القوة.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'الراحمون يرحمهم الرحمن — رواه الترمذي',action:'ارحم من حولك اليوم: ابتسم لمن يبكي، وساعد من يحتاج، ولا تقسُ على أحد',young:'كن رحيماً! ساعد من يبكي وكن لطيفاً مع الحيوانات أيضاً 💝'},
    en:{title:'Mercy',desc:'Mercy is the badge of the Muslim. Showing mercy to young and old, to humans and animals alike. Those who show no mercy will receive none. Mercy is not weakness — it is one of the greatest strengths.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'The merciful are shown mercy by the Most Merciful — Tirmidhi',action:'Show mercy today: smile at someone who is sad, help someone in need, and be gentle with all',young:'Be merciful! Help someone who is crying and be kind to animals too 💝'},
    fr:{title:'La Miséricorde',desc:"La miséricorde est l'emblème du musulman. Être miséricordieux envers les petits et les grands, les humains et les animaux. Celui qui ne fait pas miséricorde ne recevra pas de miséricorde.",verse:"Et Nous ne t'avons envoyé qu'en miséricorde pour les mondes",verseRef:'Al-Anbiya 107',hadith:'Les miséricordieux recevront la miséricorde du Tout Miséricordieux — Tirmidhi',action:"Montrez de la miséricorde aujourd'hui : souriez à quelqu'un de triste, aidez quelqu'un dans le besoin",young:"Sois miséricordieux ! Aide quelqu'un qui pleure et sois gentil avec les animaux aussi 💝"}
  },
  {
    id:7, emoji:'🦁',
    ar:{title:'الشجاعة',desc:'الشجاعة أن تقول الحق ولو على نفسك، وأن تدافع عن المظلوم، وأن تواجه الباطل بلا خوف. ليست الشجاعة غياب الخوف بل التصرف رغمه.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ',verseRef:'آل عمران ١٣٩',hadith:'أفضل الجهاد كلمة حق عند سلطان جائر — رواه أبو داود',action:'قل الحق اليوم في موقف صعب — دافع عن شخص مظلوم ولو بكلمة',young:'كن شجاعاً! قل الحق دائماً ودافع عن من يُظلم 🦁'},
    en:{title:'Courage',desc:'Courage means speaking the truth even against yourself, defending the oppressed, and confronting falsehood without fear. Courage is not the absence of fear but acting despite it.',verse:'Do not weaken or grieve, for you are the superior ones',verseRef:'Al Imran 139',hadith:'The best jihad is a word of truth before a tyrannical ruler — Abu Dawud',action:'Speak the truth today in a difficult situation — defend someone who is being wronged, even with a word',young:'Be brave! Always speak the truth and stand up for someone who is being treated unfairly 🦁'},
    fr:{title:'Le Courage',desc:"Le courage c'est dire la vérité même contre soi-même, défendre l'opprimé et affronter le mensonge sans peur. Le courage n'est pas l'absence de peur mais agir malgré elle.",verse:'Ne faiblissez pas et ne vous affligez pas, car vous êtes les plus élevés',verseRef:'Al Imran 139',hadith:'Le meilleur jihad est une parole de vérité devant un dirigeant tyrannique — Abu Dawud',action:"Dites la vérité aujourd'hui dans une situation difficile — défendez quelqu'un qui est opprimé",young:"Sois courageux ! Dis toujours la vérité et défends celui qu'on traite injustement 🦁"}
  },
  {
    id:8, emoji:'📚',
    ar:{title:'طلب العلم',desc:'طلب العلم فريضة على كل مسلم ومسلمة. العلم نور يهدي صاحبه ويرفع قدره. الجاهل عدو نفسه قبل أن يكون عدو غيره.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم: اقرأ صفحة من كتاب أو شاهد درساً مفيداً',young:'تعلم شيئاً جديداً كل يوم! اقرأ كتاباً أو اسأل سؤالاً ذكياً 📚'},
    en:{title:'Seeking Knowledge',desc:'Seeking knowledge is an obligation upon every Muslim, male and female. Knowledge is a light that guides its seeker and elevates their status. The ignorant person is their own enemy before being anyone else\'s.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today: read a page from a book or watch a useful lesson',young:'Learn something new every day! Read a book or ask a smart question 📚'},
    fr:{title:'La Quête du Savoir',desc:"La quête du savoir est une obligation pour chaque musulman et musulmane. Le savoir est une lumière qui guide et élève. L'ignorant est son propre ennemi avant d'être celui des autres.",verse:'Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:"Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim",action:"Apprenez quelque chose de nouveau aujourd'hui : lisez une page ou regardez un cours utile",young:"Apprends quelque chose de nouveau chaque jour ! Lis un livre ou pose une question intelligente 📚"}
  },
  {
    id:9, emoji:'🤲',
    ar:{title:'الأخوة',desc:'المسلمون أخوة يتحابون ويتعاونون ويتناصحون. لا فرق بين عربي وأعجمي إلا بالتقوى. الأخوة في الله أقوى رابطة.',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',verseRef:'الحجرات ١٠',hadith:'المؤمن للمؤمن كالبنيان يشد بعضه بعضاً — متفق عليه',action:'تواصل اليوم مع أخ أو أخت في الله لم تتحدث معهم منذ فترة',young:'كن صديقاً جيداً! ساعد أصدقاءك وكن لطيفاً مع الجميع 🤲'},
    en:{title:'Brotherhood',desc:'Muslims are brothers and sisters who love, cooperate, and advise each other. There is no difference between Arab and non-Arab except in piety. Brotherhood in faith is the strongest bond.',verse:'The believers are but brothers',verseRef:'Al-Hujurat 10',hadith:'A believer to another believer is like a building whose parts support each other — Agreed upon',action:'Reach out today to a brother or sister in faith you have not spoken to in a while',young:'Be a good friend! Help your friends and be kind to everyone 🤲'},
    fr:{title:'La Fraternité',desc:"Les musulmans sont des frères et soeurs qui s'aiment, coopèrent et se conseillent. Il n'y a pas de différence entre Arabe et non-Arabe sauf par la piété. La fraternité en Dieu est le lien le plus fort.",verse:'Les croyants ne sont que des frères',verseRef:'Al-Hujurat 10',hadith:"Le croyant pour le croyant est comme un édifice dont les parties se soutiennent — Unanimement reconnu",action:"Contactez aujourd'hui un frère ou une soeur en foi que vous n'avez pas vu depuis longtemps",young:"Sois un bon ami ! Aide tes amis et sois gentil avec tout le monde 🤲"}
  },
  {
    id:10, emoji:'🧘',
    ar:{title:'ضبط النفس',desc:'ضبط النفس أن تملك زمام نفسك عند الغضب والشهوة. القوي ليس من يصرع الناس بل من يملك نفسه عند الغضب.',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',verseRef:'آل عمران ١٣٤',hadith:'ليس الشديد بالصُّرَعة إنما الشديد الذي يملك نفسه عند الغضب — متفق عليه',action:'تدرب اليوم على ضبط النفس: عندما تغضب، تنفس بعمق واذكر الله',young:'تحكم في نفسك! عندما تغضب، خذ نفساً عميقاً وقل: أعوذ بالله 🧘'},
    en:{title:'Self-Discipline',desc:'Self-discipline means controlling yourself during anger and desire. The truly strong person is not the one who wrestles others down, but the one who controls themselves in anger.',verse:'Those who restrain anger and pardon people',verseRef:'Al Imran 134',hadith:'The strong person is not one who wrestles others, but the one who controls themselves in anger — Agreed upon',action:'Practice self-discipline today: when you feel angry, breathe deeply and remember God',young:'Control yourself! When you get angry, take a deep breath and say: I seek refuge in Allah 🧘'},
    fr:{title:'La Maîtrise de Soi',desc:"La maîtrise de soi c'est se contrôler dans la colère et le désir. Le vrai fort n'est pas celui qui terrasse les autres, mais celui qui se contrôle dans la colère.",verse:'Ceux qui dominent leur colère et pardonnent aux gens',verseRef:'Al Imran 134',hadith:"Le fort n'est pas celui qui terrasse les autres, mais celui qui se maîtrise dans la colère — Unanimement reconnu",action:"Pratiquez la maîtrise de soi aujourd'hui : quand vous êtes en colère, respirez profondément",young:"Contrôle-toi ! Quand tu es en colère, respire profondément et dis : Je cherche refuge auprès d'Allah 🧘"}
  },
  {
    id:11, emoji:'🌻',
    ar:{title:'الشكر',desc:'الشكر أن تعترف بفضل الله عليك وتستعمل نعمه في طاعته. من شكر زاده الله ومن كفر فقد ظلم نفسه.',verse:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'إبراهيم ٧',hadith:'انظروا إلى من هو أسفل منكم ولا تنظروا إلى من هو فوقكم — متفق عليه',action:'اكتب ٥ نعم تشكر الله عليها الآن — وقل الحمد لله بقلبك',young:'قل الحمد لله كل يوم! اكتب ٣ أشياء جميلة في حياتك 🌻'},
    en:{title:'Gratitude',desc:'Gratitude means acknowledging God\'s blessings upon you and using them in His obedience. Whoever is grateful, God increases them; whoever is ungrateful has wronged themselves.',verse:'If you are grateful, I will surely increase you',verseRef:'Ibrahim 7',hadith:'Look at those below you and do not look at those above you — Agreed upon',action:'Write 5 blessings you are grateful for right now — and say Alhamdulillah from your heart',young:'Say Alhamdulillah every day! Write 3 beautiful things in your life 🌻'},
    fr:{title:'La Gratitude',desc:"La gratitude c'est reconnaître les bienfaits de Dieu et les utiliser dans Son obéissance. Celui qui est reconnaissant, Dieu l'augmente ; celui qui est ingrat se fait du tort.",verse:'Si vous êtes reconnaissants, Je vous augmenterai certainement',verseRef:'Ibrahim 7',hadith:"Regardez ceux qui sont en dessous de vous et non ceux qui sont au-dessus — Unanimement reconnu",action:'Écrivez 5 bienfaits dont vous êtes reconnaissants maintenant — et dites Alhamdulillah',young:"Dis Alhamdulillah chaque jour ! Écris 3 belles choses dans ta vie 🌻"}
  },
  {
    id:12, emoji:'🕊️',
    ar:{title:'العفو',desc:'العفو عن المسيء مع القدرة على الانتقام من أعظم الأخلاق. من عفا وأصلح فأجره على الله.',verse:'وَلْيَعْفُوا وَلْيَصْفَحُوا أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ',verseRef:'النور ٢٢',hadith:'من كظم غيظاً وهو قادر على أن ينفذه دعاه الله على رؤوس الخلائق يوم القيامة — رواه الترمذي',action:'سامح شخصاً أساء إليك اليوم — حرر قلبك من الحقد',young:'سامح من أخطأ في حقك! قلبك الكبير أجمل من الانتقام 🕊️'},
    en:{title:'Forgiveness',desc:'Forgiving someone who wronged you while you have the power to retaliate is one of the greatest virtues. Whoever forgives and reconciles, their reward is with God.',verse:'Let them pardon and overlook — would you not like that Allah should forgive you?',verseRef:'An-Nur 22',hadith:'Whoever suppresses their anger while being able to act upon it, Allah will call them before all creation on the Day of Judgment — Tirmidhi',action:'Forgive someone who wronged you today — free your heart from resentment',young:'Forgive those who hurt you! Your big heart is more beautiful than revenge 🕊️'},
    fr:{title:'Le Pardon',desc:"Pardonner à celui qui vous a fait du tort alors que vous pouvez vous venger est une des plus grandes vertus. Celui qui pardonne et réconcilie, sa récompense est auprès de Dieu.",verse:"Qu'ils pardonnent et passent l'éponge — N'aimeriez-vous pas qu'Allah vous pardonne ?",verseRef:'An-Nur 22',hadith:"Quiconque retient sa colère alors qu'il peut agir, Allah l'appellera devant toute la création — Tirmidhi",action:"Pardonnez à quelqu'un qui vous a fait du tort aujourd'hui — libérez votre coeur de la rancune",young:"Pardonne à ceux qui t'ont blessé ! Ton grand coeur est plus beau que la vengeance 🕊️"}
  },
  {
    id:13, emoji:'🙏',
    ar:{title:'التوكل على الله',desc:'التوكل أن تبذل السبب ثم تفوض الأمر لله. ليس معناه الكسل بل هو اعتماد القلب على الله مع العمل بالأسباب.',verse:'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',verseRef:'الطلاق ٣',hadith:'لو أنكم كنتم توكلون على الله حق توكله لرزقكم كما يرزق الطير — رواه الترمذي',action:'ادرس أو اعمل بجد اليوم ثم قل: توكلت على الله — ولا تقلق من النتيجة',young:'اعمل بجد ثم توكل على الله! ادرس جيداً وقل: حسبي الله 🙏'},
    en:{title:'Trust in God',desc:'Trust in God means taking all necessary measures then entrusting the outcome to Allah. It does not mean laziness — it means the heart relies on God while the body takes action.',verse:'And whoever puts their trust in Allah, He will be sufficient for them',verseRef:'At-Talaq 3',hadith:'If you truly put your trust in Allah, He would provide for you as He provides for the birds — Tirmidhi',action:'Work hard or study diligently today, then say: I trust in Allah — and do not worry about the result',young:'Work hard then trust in Allah! Study well and say: Allah is sufficient for me 🙏'},
    fr:{title:'La Confiance en Dieu',desc:"La confiance en Dieu c'est prendre les mesures nécessaires puis confier le résultat à Allah. Ce n'est pas de la paresse — c'est le coeur qui s'appuie sur Dieu pendant que le corps agit.",verse:'Et quiconque met sa confiance en Allah, Il lui suffit',verseRef:'At-Talaq 3',hadith:'Si vous mettiez véritablement votre confiance en Allah, Il vous nourrirait comme Il nourrit les oiseaux — Tirmidhi',action:"Travaillez dur aujourd'hui puis dites : Je m'en remets à Allah — ne vous inquiétez pas du résultat",young:"Travaille dur puis fais confiance à Allah ! Étudie bien et dis : Allah me suffit 🙏"}
  },
  {
    id:14, emoji:'🌸',
    ar:{title:'الحياء',desc:'الحياء خُلق يمنع صاحبه من فعل القبيح. الحياء لا يأتي إلا بخير. هو حياء من الله أولاً ثم من الناس.',verse:'إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا',verseRef:'البقرة ٢٦',hadith:'الحياء لا يأتي إلا بخير — متفق عليه',action:'استحِ من الله: لا تفعل في السر ما تستحي أن يراه الناس',young:'كن حيياً! لا تفعل شيئاً سيئاً حتى لو لم يرك أحد — الله يراك 🌸'},
    en:{title:'Modesty',desc:'Modesty is a character trait that prevents a person from doing shameful things. Modesty only brings good. It is modesty before God first, then before people.',verse:'Indeed, Allah is not shy to give any example',verseRef:'Al-Baqarah 26',hadith:'Modesty brings nothing but good — Agreed upon',action:'Be modest before God: do not do in secret what you would be ashamed for people to see',young:'Be modest! Never do something bad even if no one sees you — Allah sees you 🌸'},
    fr:{title:'La Pudeur',desc:"La pudeur est un trait de caractère qui empêche de faire des choses honteuses. La pudeur n'apporte que du bien. C'est la pudeur devant Dieu d'abord, puis devant les gens.",verse:"Allah n'a pas honte de donner n'importe quel exemple",verseRef:'Al-Baqarah 26',hadith:"La pudeur n'apporte que du bien — Unanimement reconnu",action:"Ayez de la pudeur devant Dieu : ne faites pas en secret ce qui vous ferait honte en public",young:"Sois pudique ! Ne fais jamais quelque chose de mal même si personne ne te voit — Allah te voit 🌸"}
  },
  {
    id:15, emoji:'❤️',
    ar:{title:'الشفقة',desc:'الشفقة أن يتألم قلبك لألم الآخرين وأن تسعى لتخفيف معاناتهم. المسلم يشعر بالآخرين كأنه يعيش مكانهم.',verse:'ثُمَّ كَانَ مِنَ الَّذِينَ آمَنُوا وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِ',verseRef:'البلد ١٧',hadith:'مثل المؤمنين في توادهم كمثل الجسد الواحد — متفق عليه',action:'اسأل شخصاً اليوم: كيف حالك حقاً؟ واستمع بقلبك لا بأذنيك فقط',young:'اهتم بمشاعر الآخرين! إذا رأيت أحداً حزيناً، اسأله: كيف حالك؟ ❤️'},
    en:{title:'Compassion',desc:'Compassion means your heart aches for the pain of others and you strive to ease their suffering. A Muslim feels for others as if living in their place.',verse:'Then he was among those who believed and advised one another to patience and mercy',verseRef:'Al-Balad 17',hadith:'The example of believers in their mutual love is like one body — Agreed upon',action:'Ask someone today: how are you really? And listen with your heart, not just your ears',young:'Care about others\' feelings! If you see someone sad, ask them: how are you? ❤️'},
    fr:{title:'La Compassion',desc:"La compassion c'est quand votre coeur souffre pour la douleur des autres et que vous cherchez à soulager leur souffrance. Le musulman ressent pour les autres comme s'il vivait à leur place.",verse:'Puis il était parmi ceux qui croyaient et se recommandaient la patience et la miséricorde',verseRef:'Al-Balad 17',hadith:'Les croyants dans leur amour mutuel sont comme un seul corps — Unanimement reconnu',action:"Demandez à quelqu'un aujourd'hui : comment vas-tu vraiment ? Écoutez avec votre coeur",young:"Soucie-toi des sentiments des autres ! Si tu vois quelqu'un de triste, demande-lui : comment vas-tu ? ❤️"}
  },
  {
    id:16, emoji:'💎',
    ar:{title:'الإخلاص',desc:'الإخلاص أن يكون عملك لله وحده لا رياءً ولا سمعة. العمل بلا إخلاص كالجسد بلا روح.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',verseRef:'البينة ٥',hadith:'إنما الأعمال بالنيات — متفق عليه',action:'جدد نيتك اليوم في كل عمل: ادرس لله، اعمل لله، ساعد لله',young:'افعل الخير لأجل الله! لا تفعل الأشياء الجيدة فقط ليراك الناس 💎'},
    en:{title:'Sincerity',desc:'Sincerity means all your deeds are for God alone, not for show or reputation. A deed without sincerity is like a body without a soul.',verse:'They were only commanded to worship Allah with sincerity in religion',verseRef:'Al-Bayyinah 5',hadith:'Actions are but by intentions — Agreed upon',action:'Renew your intention today in every deed: study for God, work for God, help for God',young:'Do good for the sake of Allah! Do not do good things just so people will see you 💎'},
    fr:{title:'La Sincérité',desc:"La sincérité c'est que toutes vos actions soient pour Dieu seul, pas pour la parade ou la réputation. Une action sans sincérité est comme un corps sans âme.",verse:"Ils n'ont été commandés que d'adorer Allah en Lui vouant un culte sincère",verseRef:'Al-Bayyinah 5',hadith:'Les actes ne valent que par les intentions — Unanimement reconnu',action:"Renouvelez votre intention aujourd'hui dans chaque acte : étudiez pour Dieu, travaillez pour Dieu",young:"Fais le bien pour Allah ! Ne fais pas de bonnes choses juste pour que les gens te voient 💎"}
  },
  {
    id:17, emoji:'🏗️',
    ar:{title:'المسؤولية',desc:'كل مسلم مسؤول عن عمله وأهله ومجتمعه. المسؤولية أمانة ثقيلة لكنها شرف عظيم. من تهرب منها خان الأمانة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ وَتَخُونُوا أَمَانَاتِكُمْ',verseRef:'الأنفال ٢٧',hadith:'كلكم راع وكلكم مسؤول عن رعيته — متفق عليه',action:'تحمل مسؤولياتك اليوم: أنجز واجبك المدرسي أو عملك دون تأجيل',young:'كن مسؤولاً! أنجز واجبك ورتب غرفتك وساعد أهلك 🏗️'},
    en:{title:'Responsibility',desc:'Every Muslim is responsible for their deeds, their family, and their community. Responsibility is a heavy trust but a great honor. Whoever avoids it betrays the trust.',verse:'O you who believe, do not betray Allah and the Messenger or betray your trusts',verseRef:'Al-Anfal 27',hadith:'Each of you is a shepherd and each of you is responsible for their flock — Agreed upon',action:'Fulfill your responsibilities today: complete your schoolwork or job tasks without delay',young:'Be responsible! Do your homework, tidy your room, and help your family 🏗️'},
    fr:{title:'La Responsabilité',desc:"Chaque musulman est responsable de ses actes, de sa famille et de sa communauté. La responsabilité est une lourde confiance mais un grand honneur. Celui qui s'y dérobe trahit la confiance.",verse:'Ô vous qui croyez, ne trahissez pas Allah et le Messager, et ne trahissez pas vos dépôts',verseRef:'Al-Anfal 27',hadith:'Chacun de vous est un berger et chacun est responsable de son troupeau — Unanimement reconnu',action:"Assumez vos responsabilités aujourd'hui : terminez vos devoirs ou votre travail sans retard",young:"Sois responsable ! Fais tes devoirs, range ta chambre et aide ta famille 🏗️"}
  },
  {
    id:18, emoji:'🏔️',
    ar:{title:'المثابرة',desc:'المثابرة أن تستمر في العمل الصالح دون يأس. الطريق طويل لكن كل خطوة تقربك من الهدف. المسلم لا ييأس أبداً من رحمة الله.',verse:'وَلَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ',verseRef:'يوسف ٨٧',hadith:'أحب الأعمال إلى الله أدومها وإن قل — متفق عليه',action:'أكمل مهمة بدأتها ولم تنتهِ منها — لا تستسلم في منتصف الطريق',young:'لا تستسلم أبداً! حتى لو كان الأمر صعباً، استمر في المحاولة 🏔️'},
    en:{title:'Perseverance',desc:'Perseverance means continuing in good deeds without despair. The road is long but every step brings you closer to the goal. A Muslim never despairs of God\'s mercy.',verse:'Do not despair of God\'s mercy',verseRef:'Yusuf 87',hadith:'The deeds most beloved to Allah are those done consistently, even if small — Agreed upon',action:'Complete a task you started but did not finish — do not give up halfway',young:'Never give up! Even if it is hard, keep trying 🏔️'},
    fr:{title:'La Persévérance',desc:"La persévérance c'est continuer dans les bonnes actions sans désespoir. Le chemin est long mais chaque pas vous rapproche du but. Le musulman ne désespère jamais de la miséricorde de Dieu.",verse:'Ne désespérez pas de la miséricorde de Dieu',verseRef:'Yusuf 87',hadith:"Les actes les plus aimés d'Allah sont les plus constants, même s'ils sont petits — Unanimement reconnu",action:"Terminez une tâche que vous avez commencée mais pas finie — n'abandonnez pas à mi-chemin",young:"N'abandonne jamais ! Même si c'est difficile, continue d'essayer 🏔️"}
  },
  {
    id:19, emoji:'🦉',
    ar:{title:'الحكمة',desc:'الحكمة أن تضع الشيء في موضعه. هي فهم عميق للحياة والناس ومعرفة متى تتكلم ومتى تسكت، ومتى تشتد ومتى تلين.',verse:'يُؤْتِي الْحِكْمَةَ مَنْ يَشَاءُ وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',verseRef:'البقرة ٢٦٩',hadith:'لا حسد إلا في اثنتين: رجل آتاه الله الحكمة فهو يقضي بها ويعلمها — متفق عليه',action:'فكر قبل أن تتكلم اليوم — اسأل نفسك: هل كلامي ضروري ومفيد وطيب؟',young:'فكر قبل أن تتكلم! اسأل نفسك: هل كلامي لطيف وصادق ومفيد؟ 🦉'},
    en:{title:'Wisdom',desc:'Wisdom is putting things in their proper place. It is a deep understanding of life and people, knowing when to speak and when to stay silent, when to be firm and when to be gentle.',verse:'He gives wisdom to whom He wills, and whoever has been given wisdom has been given much good',verseRef:'Al-Baqarah 269',hadith:'There is no envy except in two: a person whom Allah has given wisdom and they judge and teach with it — Agreed upon',action:'Think before you speak today — ask yourself: is what I am about to say necessary, beneficial, and kind?',young:'Think before you speak! Ask yourself: is what I am saying kind, truthful, and helpful? 🦉'},
    fr:{title:'La Sagesse',desc:"La sagesse c'est mettre les choses à leur juste place. C'est une compréhension profonde de la vie et des gens, savoir quand parler et quand se taire, quand être ferme et quand être doux.",verse:"Il donne la sagesse à qui Il veut, et quiconque reçoit la sagesse a reçu un bien abondant",verseRef:'Al-Baqarah 269',hadith:"Il n'y a d'envie que dans deux cas : une personne à qui Allah a donné la sagesse et qui juge et enseigne avec — Unanimement reconnu",action:"Réfléchissez avant de parler aujourd'hui — demandez-vous : ce que je dis est-il nécessaire, utile et bon ?",young:"Réfléchis avant de parler ! Demande-toi : ce que je dis est-il gentil, vrai et utile ? 🦉"}
  },
  {
    id:20, emoji:'🌅',
    ar:{title:'الأمل',desc:'الأمل في رحمة الله محرك المسلم. مهما اشتدت الأزمات، فإن فرج الله قريب. اليأس من صفات الكافرين.',verse:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',verseRef:'الشرح ٥',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'ابدأ يومك بالأمل: قل "إن شاء الله سيكون يوماً جميلاً" واعمل لتحقيق ذلك',young:'كن متفائلاً دائماً! كل يوم هو فرصة جديدة وجميلة من الله 🌅'},
    en:{title:'Hope',desc:'Hope in God\'s mercy is the Muslim\'s driving force. No matter how severe the crisis, God\'s relief is near. Despair is a trait of the disbelievers.',verse:'Indeed, with hardship comes ease',verseRef:'Ash-Sharh 5',hadith:'How wonderful is the affair of the believer, for all of it is good — Muslim',action:'Start your day with hope: say "InshaAllah it will be a beautiful day" and work to make it so',young:'Always be optimistic! Every day is a new and beautiful opportunity from Allah 🌅'},
    fr:{title:"L'Espoir",desc:"L'espoir en la miséricorde de Dieu est le moteur du musulman. Peu importe la gravité de la crise, le soulagement de Dieu est proche. Le désespoir est un trait des mécréants.",verse:"Certes, avec la difficulté vient la facilité",verseRef:'Ash-Sharh 5',hadith:"Comme l'affaire du croyant est merveilleuse, car tout est bon pour lui — Muslim",action:"Commencez votre journée avec espoir : dites « InshaAllah ce sera une belle journée » et agissez pour cela",young:"Sois toujours optimiste ! Chaque jour est une nouvelle et belle opportunité d'Allah 🌅"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الخُلق الذي قال عنه النبي ﷺ: "ما أُعطي أحد عطاءً خيراً وأوسع من..."؟',opts:['الكرم','الصبر','الشجاعة','العلم'],correct:1,hint:'هذا الخلق يحتاج عند الغضب والبلاء',quran:'الزمر ١٠'},
    en:{q:'Which trait did the Prophet (PBUH) say: "No one has been given a gift better and more comprehensive than..."?',opts:['Generosity','Patience','Courage','Knowledge'],correct:1,hint:'This trait is needed during anger and trials',quran:'Az-Zumar 10'},
    fr:{q:'Quelle vertu le Prophète (PSL) a-t-il dit : « Personne n\'a reçu un don meilleur que... » ?',opts:['La Générosité','La Patience','Le Courage','Le Savoir'],correct:1,hint:'Cette vertu est nécessaire lors de la colère et des épreuves',quran:'Az-Zumar 10'}
  },
  {
    ar:{q:'أكمل الآية: "وَإِنَّكَ لَعَلَى خُلُقٍ ..."',opts:['كريم','حسن','عظيم','جميل'],correct:2,hint:'هذه الآية في وصف النبي ﷺ',quran:'القلم ٤'},
    en:{q:'Complete the verse: "And indeed, you are of a ... moral character"',opts:['Noble','Good','Great','Beautiful'],correct:2,hint:'This verse describes the Prophet (PBUH)',quran:'Al-Qalam 4'},
    fr:{q:'Complétez le verset : « Et tu es certes d\'un caractère ... »',opts:['Noble','Bon','Immense','Beau'],correct:2,hint:'Ce verset décrit le Prophète (PSL)',quran:'Al-Qalam 4'}
  },
  {
    ar:{q:'من قال: "ليس الشديد بالصُّرَعة إنما الشديد الذي يملك نفسه عند الغضب"؟',opts:['عمر بن الخطاب','أبو بكر الصديق','النبي ﷺ','علي بن أبي طالب'],correct:2,hint:'هذا حديث نبوي شريف',quran:'آل عمران ١٣٤'},
    en:{q:'Who said: "The strong person is not the wrestler, but the one who controls themselves in anger"?',opts:['Umar ibn al-Khattab','Abu Bakr','The Prophet (PBUH)','Ali ibn Abi Talib'],correct:2,hint:'This is a prophetic hadith',quran:'Al Imran 134'},
    fr:{q:'Qui a dit : « Le fort n\'est pas le lutteur, mais celui qui se maîtrise dans la colère » ?',opts:['Umar ibn al-Khattab','Abu Bakr','Le Prophète (PSL)','Ali ibn Abi Talib'],correct:2,hint:'C\'est un hadith prophétique',quran:'Al Imran 134'}
  },
  {
    ar:{q:'ما الخُلق الذي قال عنه النبي ﷺ: "لا يأتي إلا بخير"؟',opts:['الشكر','الصدق','الحياء','الصبر'],correct:2,hint:'هذا الخلق يمنع صاحبه من فعل القبيح',quran:'البقرة ٢٦'},
    en:{q:'Which trait did the Prophet (PBUH) say "brings nothing but good"?',opts:['Gratitude','Honesty','Modesty','Patience'],correct:2,hint:'This trait prevents a person from doing shameful things',quran:'Al-Baqarah 26'},
    fr:{q:'Quelle vertu le Prophète (PSL) a-t-il dit « n\'apporte que du bien » ?',opts:['La Gratitude','L\'Honnêteté','La Pudeur','La Patience'],correct:2,hint:'Cette vertu empêche de faire des choses honteuses',quran:'Al-Baqarah 26'}
  },
  {
    ar:{q:'أكمل الحديث: "إنما الأعمال ب..."',opts:['الصبر','النتائج','النيات','الأقوال'],correct:2,hint:'هذا أول حديث في كتاب البخاري',quran:'البينة ٥'},
    en:{q:'Complete the hadith: "Actions are but by..."',opts:['Patience','Results','Intentions','Words'],correct:2,hint:'This is the first hadith in Bukhari',quran:'Al-Bayyinah 5'},
    fr:{q:'Complétez le hadith : « Les actes ne valent que par les... »',opts:['La patience','Les résultats','Les intentions','Les paroles'],correct:2,hint:'C\'est le premier hadith dans Bukhari',quran:'Al-Bayyinah 5'}
  },
  {
    ar:{q:'في أي سورة وردت آية "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ"؟',opts:['البقرة','إبراهيم','الرحمن','لقمان'],correct:1,hint:'هذه السورة سميت باسم نبي بنى الكعبة',quran:'إبراهيم ٧'},
    en:{q:'In which surah does the verse "If you are grateful, I will increase you" appear?',opts:['Al-Baqarah','Ibrahim','Ar-Rahman','Luqman'],correct:1,hint:'This surah is named after the prophet who built the Kaaba',quran:'Ibrahim 7'},
    fr:{q:'Dans quelle sourate apparaît le verset « Si vous êtes reconnaissants, Je vous augmenterai » ?',opts:['Al-Baqarah','Ibrahim','Ar-Rahman','Luqman'],correct:1,hint:'Cette sourate porte le nom du prophète qui a construit la Kaaba',quran:'Ibrahim 7'}
  },
  {
    ar:{q:'ما معنى "كلكم راع وكلكم مسؤول عن رعيته"؟',opts:['الصدق في العمل','المسؤولية تجاه من حولك','طلب العلم','التوكل على الله'],correct:1,hint:'هذا الحديث يتحدث عن واجب كل فرد',quran:'الأنفال ٢٧'},
    en:{q:'What does "Each of you is a shepherd and responsible for their flock" mean?',opts:['Honesty at work','Responsibility toward those around you','Seeking knowledge','Trusting in God'],correct:1,hint:'This hadith talks about the duty of every individual',quran:'Al-Anfal 27'},
    fr:{q:'Que signifie « Chacun de vous est un berger et responsable de son troupeau » ?',opts:['L\'honnêteté au travail','La responsabilité envers ceux qui vous entourent','La quête du savoir','La confiance en Dieu'],correct:1,hint:'Ce hadith parle du devoir de chaque individu',quran:'Al-Anfal 27'}
  },
  {
    ar:{q:'أكمل الآية: "وَمَا أَرْسَلْنَاكَ إِلَّا ..." للعالمين',opts:['هادياً','بشيراً','رحمةً','نذيراً'],correct:2,hint:'هذه الآية تصف رسالة النبي ﷺ للعالم كله',quran:'الأنبياء ١٠٧'},
    en:{q:'Complete the verse: "And We have not sent you except as a ... to the worlds"',opts:['Guide','Bearer of glad tidings','Mercy','Warner'],correct:2,hint:'This verse describes the Prophet\'s mission to the whole world',quran:'Al-Anbiya 107'},
    fr:{q:'Complétez le verset : « Et Nous ne t\'avons envoyé qu\'en ... pour les mondes »',opts:['Guide','Annonciateur','Miséricorde','Avertisseur'],correct:2,hint:'Ce verset décrit la mission du Prophète pour le monde entier',quran:'Al-Anbiya 107'}
  },
  {
    ar:{q:'ما الخُلق الذي وصفه القرآن بأنه "خير كثير"؟',opts:['الشجاعة','الحكمة','الصبر','الكرم'],correct:1,hint:'وردت في سورة البقرة',quran:'البقرة ٢٦٩'},
    en:{q:'Which trait did the Quran describe as "much good"?',opts:['Courage','Wisdom','Patience','Generosity'],correct:1,hint:'Mentioned in Surah Al-Baqarah',quran:'Al-Baqarah 269'},
    fr:{q:'Quelle vertu le Coran a-t-il décrite comme « un bien abondant » ?',opts:['Le Courage','La Sagesse','La Patience','La Générosité'],correct:1,hint:'Mentionnée dans la Sourate Al-Baqarah',quran:'Al-Baqarah 269'}
  },
  {
    ar:{q:'ما أول ما يوضع في ميزان العبد يوم القيامة؟',opts:['الصلاة','الصيام','حسن الخلق','الصدقة'],correct:2,hint:'الشيخ الغزالي يؤكد أن هذا الخُلق هو ثقل الميزان',quran:'القلم ٤'},
    en:{q:'What is the first thing placed on the scale of the servant on Judgment Day?',opts:['Prayer','Fasting','Good character','Charity'],correct:2,hint:'Sheikh al-Ghazali emphasizes this is what weighs the scale',quran:'Al-Qalam 4'},
    fr:{q:'Quelle est la première chose placée sur la balance du serviteur le Jour du Jugement ?',opts:['La Prière','Le Jeûne','Le Bon Caractère','La Charité'],correct:2,hint:'Sheikh al-Ghazali souligne que c\'est ce qui pèse la balance',quran:'Al-Qalam 4'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ وَاصْرِفْ عَنِّي سَيِّئَهَا لا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ',tr:'رواه مسلم'},
    en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character, none can guide to the best of it except You — Muslim'},
    fr:{label:'Dua pour le Bon Caractère',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'Ô Allah, guide-moi vers le meilleur caractère, nul ne peut y guider sauf Toi — Muslim'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'سورة التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him and He is Lord of the Great Throne'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets à Lui et Il est le Seigneur du Trône immense'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, déverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء العفو',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'},
    en:{label:'Dua for Forgiveness',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving and love forgiveness, so forgive me — Tirmidhi'},
    fr:{label:'Dua pour le Pardon',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur et Tu aimes le pardon, alors pardonne-moi — Tirmidhi'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You have bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'khuluq-xp';
const BADGES_KEY = 'khuluq-badges';
const READ_KEY = 'khuluq-read';
const STREAK_KEY = 'khuluq-streak';
const MODE_KEY = 'khuluq-mode';
const QUIZ_BEST_KEY = 'khuluq-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme];
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'خُلق مقروء':lang==='fr'?'Vertus lues':'Traits Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«خلق المسلم» كتاب يتناول الأخلاق الإسلامية بأسلوب عملي. يبيّن الشيخ الغزالي كيف أن الأخلاق ليست مجرد آداب اجتماعية بل هي جوهر الإسلام وأساس الحضارة. يغطي الكتاب عشرين خُلقاً أساسياً مع شواهد من القرآن والسنة وسير الصحابة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "خلق المسلم" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"The Muslim\'s Character" is a book that addresses Islamic ethics in a practical manner. Sheikh al-Ghazali shows how morals are not merely social etiquette but the very essence of Islam and the foundation of civilization. The book covers twenty essential character traits with evidence from the Quran, Sunnah, and the lives of the Companions.',
      sourcesTitle: 'Sources',
      sources: ['"The Muslim\'s Character" (Khuluq al-Muslim) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme \"Le Litteraire de la Predication\". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '\"Le Caractere du Musulman\" est un livre qui aborde l\'ethique islamique de maniere pratique. Le Sheikh al-Ghazali montre comment les vertus ne sont pas de simples manieres sociales mais l\'essence meme de l\'Islam et le fondement de la civilisation. Le livre couvre vingt vertus essentielles avec des preuves du Coran et de la Sunnah.',
      sourcesTitle: 'Sources',
      sources: ['"Le Caractere du Musulman" (Khuluq al-Muslim) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "خلق المسلم" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ خُلق، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/khuluq-al-muslim'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Muslim\'s Character" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 traits, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/khuluq-al-muslim'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Le Caractere du Musulman" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 vertus, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/khuluq-al-muslim'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ خُلقاً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بحسن الخلق','⭐ أكمل ٢٠ خُلقاً لتصبح خبيراً'],
    en: ['📖 Read a new trait every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for good character','⭐ Complete all 20 traits to become an Expert'],
    fr: ['📖 Lisez une nouvelle vertu chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour le bon caractere','⭐ Completez les 20 vertus pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
