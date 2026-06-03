const goalsKey = "missionTrackerGoals";
const historyKey = "missionTrackerHistory";
const habitsKey = "missionTrackerHabits";
const habitHistoryKey = "missionTrackerHabitHistory";
const lastHabitDateKey = "missionTrackerLastHabitDate";
const nonNegotiablesKey = "disciplineDashboardNonNegotiables";
const goalCategoriesKey = "disciplineDashboardGoalCategories";
const aiWeeklyReviewsKey = "disciplineDashboardAiWeeklyReviews";
const activeWeekStartKey = "disciplineDashboardActiveWeekStart";
const journalKey = "missionTrackerJournal";
const planningGoalsKey = "disciplineDashboardPlanningGoals";
const financeKey = "disciplineDashboardFinance";
const transactionKey = "disciplineDashboardTransactions";
const financeBudgetKey = "disciplineDashboardFinanceBudget";
const savingsGoalKey = "disciplineDashboardSavingsGoal";
const bibleVerseKey = "disciplineDashboardDailyBibleVerse";
const motivationalQuoteKey = "disciplineDashboardDailyMotivationalQuote";
const motivationReflectionKey = "disciplineDashboardMotivationReflection";
const tabOrderKey = "disciplineDashboardTabOrder";
const weekCollapsedKey = "disciplineDashboardWeekCollapsed";
const settingsKey = "missionTrackerSettings";
const reviewKey = "missionTrackerReview";
const backupExportedKey = "disciplineDashboardBackupExported";

const defaultTabOrder = ["command", "goals", "motivation", "finance", "history", "journal"];
const tabLabels = {
  command: "Command Center",
  goals: "Goals",
  motivation: "Motivation",
  finance: "Finance",
  history: "History",
  journal: "Journal"
};
const defaultNonNegotiableTitles = ["Prayer", "Workout", "Reading", "Journal", "Bed Made"];
const defaultGoalCategoryNames = ["School", "Fitness", "Faith", "Money", "Personal"];
const weekDayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const spendingCategories = ["Food", "Gas", "Subscriptions", "Car", "School", "Shopping", "Entertainment", "Other"];
const spendingTags = ["Need", "Want"];
const dailyQuotes = [
  "Discipline is choosing what you want most over what you want now.",
  "Be strong and courageous. Do not be afraid; the Lord your God is with you wherever you go.",
  "Small obedience repeated daily becomes a life you can trust.",
  "Run in such a way as to get the prize.",
  "You do not need a perfect day. You need a faithful next action.",
  "Commit your work to the Lord, and your plans will be established.",
  "The pain of discipline is lighter than the weight of regret.",
  "Whatever you do, work at it with all your heart, as working for the Lord.",
  "Win the morning. Guard the evening. Repeat.",
  "Let steadfastness have its full effect."
];

const motivationalQuotes = [
  { text: "Discipline is choosing the future you want over the comfort you feel.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Win the next hour, and the day starts listening.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Courage is not loud. Sometimes it is just doing the right thing while afraid.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Your habits are voting for the person you are becoming.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "A focused day is built one clean decision at a time.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Faith keeps moving when feelings ask for proof first.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Resilience is recovery with direction.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Lead yourself before you try to lead the room.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success gets simpler when your standards stop negotiating.", author: "Discipline Dashboard", theme: "success" },
  { text: "Do the small thing with full attention. That is where strength is trained.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith does not remove the mountain; it gives you a reason to climb.", author: "Discipline Dashboard", theme: "faith" },
  { text: "The brave version of you is built in ordinary moments.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Focus is the art of saying no without making a speech.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Fall clean, stand fast, continue forward.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "A leader is someone who keeps the standard visible.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success is not magic. It is repeated alignment.", author: "Discipline Dashboard", theme: "success" },
  { text: "The work becomes lighter when the why becomes clear.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Discipline is freedom with structure.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Pray like you trust God. Work like you respect the gift.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Courage grows when you keep promises under pressure.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Do not chase motivation. Build a system it can visit.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Attention is a resource. Spend it like it matters.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is not pretending it did not hurt. It is refusing to stop there.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "The standard you tolerate becomes the culture you live in.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success loves preparation more than applause.", author: "Discipline Dashboard", theme: "success" },
  { text: "A calm mind can carry a heavy mission.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Faith turns obedience into momentum.", author: "Discipline Dashboard", theme: "faith" },
  { text: "The first task is a doorway. Walk through it.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Discipline is built when nobody is grading you.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Courage is action with your excuses still talking.", author: "Discipline Dashboard", theme: "courage" },
  { text: "You do not need a perfect plan. You need an honest next step.", author: "Discipline Dashboard", theme: "success" },
  { text: "Good leaders make the next right thing easier to see.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Your future is listening to your routine.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith is steady feet on unseen ground.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Focus is peace with a target.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience means the setback gets a vote, not the final word.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "The strongest people are often the most consistent, not the most dramatic.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Courage begins when comfort stops leading.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Success is a quiet stack of kept promises.", author: "Discipline Dashboard", theme: "success" },
  { text: "Leadership starts with owning your part without delay.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "If it matters, give it a time and a place.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Faith is not passive. It obeys.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Discipline turns intention into evidence.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "The hard thing gets easier after the first honest rep.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Lead with clarity, serve with strength, finish with humility.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success is less about intensity and more about returning.", author: "Discipline Dashboard", theme: "success" },
  { text: "A distracted mind makes easy things expensive.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Courage is the discipline of not obeying fear.", author: "Discipline Dashboard", theme: "courage" },
  { text: "A day with purpose can survive inconvenience.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith gives endurance a home.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Start before your mood catches up.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Focus makes your yes powerful because your no is real.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is trained in the space between tired and done.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Leaders do not wait for perfect conditions to bring order.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success follows the person who can repeat the boring basics.", author: "Discipline Dashboard", theme: "success" },
  { text: "Discipline is self-respect made visible.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith reminds you that your effort is not the whole story.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Courage is a muscle. Use it on purpose.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Your attention shapes your appetite.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is what happens when hope learns structure.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Leadership is responsibility before recognition.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success is built where excuses are interrupted.", author: "Discipline Dashboard", theme: "success" },
  { text: "Do not make peace with the habit that keeps costing you.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faithful steps still count when they are small.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Fear gets smaller when action gets specific.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Focus is deciding what gets your best energy.", author: "Discipline Dashboard", theme: "focus" },
  { text: "The comeback begins the moment you stop hiding.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "A leader brings calm to pressure and standards to chaos.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success requires fewer opinions and more execution.", author: "Discipline Dashboard", theme: "success" },
  { text: "Discipline does not ask how you feel; it asks what you chose.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith is trust translated into action.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Courage is keeping your values in charge.", author: "Discipline Dashboard", theme: "courage" },
  { text: "A focused hour can rescue a drifting day.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is refusing to waste the lesson.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Leadership means your private standard has public consequences.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success becomes predictable when preparation becomes normal.", author: "Discipline Dashboard", theme: "success" },
  { text: "The next right action is often smaller than your resistance says.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith strengthens the hand that keeps working.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Courage is not the absence of nerves; it is obedience under them.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Protect your focus like it is part of your character.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is a decision you may need to make more than once.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Leadership is doing the needed thing before it becomes urgent.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success is a byproduct of becoming reliable.", author: "Discipline Dashboard", theme: "success" },
  { text: "Discipline is the bridge between conviction and change.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith does not panic when progress is quiet.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Courage grows when you stop asking fear for permission.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Focus gives your effort a direction to become power.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is strength with memory and hope.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "A leader protects the mission from mood swings.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success rewards the person who can keep beginning.", author: "Discipline Dashboard", theme: "success" },
  { text: "Your routine is either training you or draining you.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith makes the unseen worth preparing for.", author: "Discipline Dashboard", theme: "faith" },
  { text: "Courage is choosing truth over comfort.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Focus is the discipline of returning.", author: "Discipline Dashboard", theme: "focus" },
  { text: "Resilience is not quitting just because the story got harder.", author: "Discipline Dashboard", theme: "resilience" },
  { text: "Leadership is stewardship of influence.", author: "Discipline Dashboard", theme: "leadership" },
  { text: "Success begins when your actions stop waiting for emotion.", author: "Discipline Dashboard", theme: "success" },
  { text: "Discipline is love for your future expressed today.", author: "Discipline Dashboard", theme: "discipline" },
  { text: "Faith makes obedience stronger than uncertainty.", author: "Discipline Dashboard", theme: "faith" },
  { text: "The courageous path is usually clear before it is comfortable.", author: "Discipline Dashboard", theme: "courage" },
  { text: "Focus is how you tell your time the truth.", author: "Discipline Dashboard", theme: "focus" }
];

const bibleVerses = [
  { reference: "Joshua 1:9", text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.", theme: "courage" },
  { reference: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me.", theme: "strength" },
  { reference: "Proverbs 3:5", text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.", theme: "faith" },
  { reference: "Proverbs 3:6", text: "In all thy ways acknowledge him, and he shall direct thy paths.", theme: "wisdom" },
  { reference: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want.", theme: "faith" },
  { reference: "Psalm 27:1", text: "The Lord is my light and my salvation; whom shall I fear?", theme: "courage" },
  { reference: "Psalm 34:4", text: "I sought the Lord, and he heard me, and delivered me from all my fears.", theme: "courage" },
  { reference: "Psalm 37:5", text: "Commit thy way unto the Lord; trust also in him; and he shall bring it to pass.", theme: "faith" },
  { reference: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble.", theme: "strength" },
  { reference: "Psalm 51:10", text: "Create in me a clean heart, O God; and renew a right spirit within me.", theme: "discipline" },
  { reference: "Psalm 55:22", text: "Cast thy burden upon the Lord, and he shall sustain thee.", theme: "faith" },
  { reference: "Psalm 56:3", text: "What time I am afraid, I will trust in thee.", theme: "faith" },
  { reference: "Psalm 119:9", text: "Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.", theme: "temptation" },
  { reference: "Psalm 119:11", text: "Thy word have I hid in mine heart, that I might not sin against thee.", theme: "temptation" },
  { reference: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path.", theme: "wisdom" },
  { reference: "Psalm 121:1-2", text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord.", theme: "strength" },
  { reference: "Psalm 139:23", text: "Search me, O God, and know my heart: try me, and know my thoughts.", theme: "discipline" },
  { reference: "Proverbs 1:7", text: "The fear of the Lord is the beginning of knowledge: but fools despise wisdom and instruction.", theme: "wisdom" },
  { reference: "Proverbs 4:23", text: "Keep thy heart with all diligence; for out of it are the issues of life.", theme: "discipline" },
  { reference: "Proverbs 10:4", text: "He becometh poor that dealeth with a slack hand: but the hand of the diligent maketh rich.", theme: "discipline" },
  { reference: "Proverbs 11:14", text: "Where no counsel is, the people fall: but in the multitude of counsellors there is safety.", theme: "wisdom" },
  { reference: "Proverbs 12:1", text: "Whoso loveth instruction loveth knowledge: but he that hateth reproof is brutish.", theme: "wisdom" },
  { reference: "Proverbs 13:4", text: "The soul of the diligent shall be made fat.", theme: "discipline" },
  { reference: "Proverbs 14:23", text: "In all labour there is profit: but the talk of the lips tendeth only to penury.", theme: "discipline" },
  { reference: "Proverbs 16:3", text: "Commit thy works unto the Lord, and thy thoughts shall be established.", theme: "faith" },
  { reference: "Proverbs 16:9", text: "A man's heart deviseth his way: but the Lord directeth his steps.", theme: "wisdom" },
  { reference: "Proverbs 18:10", text: "The name of the Lord is a strong tower: the righteous runneth into it, and is safe.", theme: "strength" },
  { reference: "Proverbs 21:5", text: "The thoughts of the diligent tend only to plenteousness.", theme: "discipline" },
  { reference: "Proverbs 24:16", text: "For a just man falleth seven times, and riseth up again.", theme: "strength" },
  { reference: "Isaiah 26:3", text: "Thou wilt keep him in perfect peace, whose mind is stayed on thee.", theme: "faith" },
  { reference: "Isaiah 40:29", text: "He giveth power to the faint; and to them that have no might he increaseth strength.", theme: "strength" },
  { reference: "Isaiah 40:31", text: "They that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.", theme: "strength" },
  { reference: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God.", theme: "courage" },
  { reference: "Isaiah 43:2", text: "When thou passest through the waters, I will be with thee.", theme: "faith" },
  { reference: "Isaiah 54:17", text: "No weapon that is formed against thee shall prosper.", theme: "courage" },
  { reference: "Jeremiah 17:7", text: "Blessed is the man that trusteth in the Lord, and whose hope the Lord is.", theme: "faith" },
  { reference: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil.", theme: "faith" },
  { reference: "Lamentations 3:22-23", text: "It is of the Lord's mercies that we are not consumed, because his compassions fail not. They are new every morning.", theme: "faith" },
  { reference: "Micah 6:8", text: "What doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", theme: "wisdom" },
  { reference: "Nahum 1:7", text: "The Lord is good, a strong hold in the day of trouble; and he knoweth them that trust in him.", theme: "strength" },
  { reference: "Matthew 4:4", text: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.", theme: "discipline" },
  { reference: "Matthew 5:6", text: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.", theme: "faith" },
  { reference: "Matthew 6:21", text: "For where your treasure is, there will your heart be also.", theme: "wisdom" },
  { reference: "Matthew 6:33", text: "Seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", theme: "discipline" },
  { reference: "Matthew 7:7", text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.", theme: "faith" },
  { reference: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", theme: "strength" },
  { reference: "Matthew 22:37", text: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.", theme: "faith" },
  { reference: "Mark 9:23", text: "If thou canst believe, all things are possible to him that believeth.", theme: "faith" },
  { reference: "Mark 10:27", text: "With men it is impossible, but not with God: for with God all things are possible.", theme: "faith" },
  { reference: "Luke 1:37", text: "For with God nothing shall be impossible.", theme: "faith" },
  { reference: "Luke 6:31", text: "As ye would that men should do to you, do ye also to them likewise.", theme: "wisdom" },
  { reference: "Luke 9:23", text: "If any man will come after me, let him deny himself, and take up his cross daily, and follow me.", theme: "discipline" },
  { reference: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son.", theme: "faith" },
  { reference: "John 8:12", text: "I am the light of the world: he that followeth me shall not walk in darkness.", theme: "faith" },
  { reference: "John 8:32", text: "And ye shall know the truth, and the truth shall make you free.", theme: "wisdom" },
  { reference: "John 14:6", text: "I am the way, the truth, and the life.", theme: "faith" },
  { reference: "John 14:27", text: "Peace I leave with you, my peace I give unto you.", theme: "faith" },
  { reference: "John 15:5", text: "Without me ye can do nothing.", theme: "faith" },
  { reference: "John 16:33", text: "In the world ye shall have tribulation: but be of good cheer; I have overcome the world.", theme: "courage" },
  { reference: "Romans 5:3-4", text: "Tribulation worketh patience; and patience, experience; and experience, hope.", theme: "strength" },
  { reference: "Romans 8:1", text: "There is therefore now no condemnation to them which are in Christ Jesus.", theme: "faith" },
  { reference: "Romans 8:28", text: "All things work together for good to them that love God.", theme: "faith" },
  { reference: "Romans 8:31", text: "If God be for us, who can be against us?", theme: "courage" },
  { reference: "Romans 12:2", text: "Be not conformed to this world: but be ye transformed by the renewing of your mind.", theme: "discipline" },
  { reference: "Romans 12:11", text: "Not slothful in business; fervent in spirit; serving the Lord.", theme: "discipline" },
  { reference: "Romans 12:21", text: "Be not overcome of evil, but overcome evil with good.", theme: "temptation" },
  { reference: "1 Corinthians 6:19", text: "Your body is the temple of the Holy Ghost which is in you.", theme: "discipline" },
  { reference: "1 Corinthians 9:24", text: "So run, that ye may obtain.", theme: "discipline" },
  { reference: "1 Corinthians 9:27", text: "I keep under my body, and bring it into subjection.", theme: "discipline" },
  { reference: "1 Corinthians 10:13", text: "God is faithful, who will not suffer you to be tempted above that ye are able.", theme: "temptation" },
  { reference: "1 Corinthians 15:58", text: "Be ye stedfast, unmoveable, always abounding in the work of the Lord.", theme: "discipline" },
  { reference: "2 Corinthians 5:7", text: "For we walk by faith, not by sight.", theme: "faith" },
  { reference: "2 Corinthians 10:5", text: "Bringing into captivity every thought to the obedience of Christ.", theme: "discipline" },
  { reference: "2 Corinthians 12:9", text: "My grace is sufficient for thee: for my strength is made perfect in weakness.", theme: "strength" },
  { reference: "Galatians 5:1", text: "Stand fast therefore in the liberty wherewith Christ hath made us free.", theme: "strength" },
  { reference: "Galatians 5:16", text: "Walk in the Spirit, and ye shall not fulfil the lust of the flesh.", theme: "temptation" },
  { reference: "Galatians 6:9", text: "Let us not be weary in well doing: for in due season we shall reap, if we faint not.", theme: "discipline" },
  { reference: "Ephesians 2:10", text: "For we are his workmanship, created in Christ Jesus unto good works.", theme: "faith" },
  { reference: "Ephesians 4:22-24", text: "Put off concerning the former conversation the old man... and put on the new man.", theme: "discipline" },
  { reference: "Ephesians 6:10", text: "Be strong in the Lord, and in the power of his might.", theme: "strength" },
  { reference: "Ephesians 6:11", text: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.", theme: "courage" },
  { reference: "Philippians 1:6", text: "He which hath begun a good work in you will perform it until the day of Jesus Christ.", theme: "faith" },
  { reference: "Philippians 2:13", text: "For it is God which worketh in you both to will and to do of his good pleasure.", theme: "faith" },
  { reference: "Philippians 3:14", text: "I press toward the mark for the prize of the high calling of God in Christ Jesus.", theme: "discipline" },
  { reference: "Philippians 4:6", text: "Be careful for nothing; but in every thing by prayer and supplication let your requests be made known unto God.", theme: "faith" },
  { reference: "Philippians 4:8", text: "Whatsoever things are true... honest... just... pure... think on these things.", theme: "wisdom" },
  { reference: "Colossians 3:2", text: "Set your affection on things above, not on things on the earth.", theme: "discipline" },
  { reference: "Colossians 3:23", text: "Whatsoever ye do, do it heartily, as to the Lord, and not unto men.", theme: "discipline" },
  { reference: "1 Thessalonians 5:16-18", text: "Rejoice evermore. Pray without ceasing. In every thing give thanks.", theme: "faith" },
  { reference: "2 Thessalonians 3:3", text: "The Lord is faithful, who shall stablish you, and keep you from evil.", theme: "strength" },
  { reference: "1 Timothy 4:8", text: "Godliness is profitable unto all things, having promise of the life that now is.", theme: "discipline" },
  { reference: "1 Timothy 6:12", text: "Fight the good fight of faith, lay hold on eternal life.", theme: "courage" },
  { reference: "2 Timothy 1:7", text: "God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", theme: "courage" },
  { reference: "2 Timothy 2:3", text: "Thou therefore endure hardness, as a good soldier of Jesus Christ.", theme: "strength" },
  { reference: "2 Timothy 2:15", text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed.", theme: "discipline" },
  { reference: "Hebrews 4:12", text: "For the word of God is quick, and powerful, and sharper than any twoedged sword.", theme: "wisdom" },
  { reference: "Hebrews 10:23", text: "Let us hold fast the profession of our faith without wavering; for he is faithful that promised.", theme: "faith" },
  { reference: "Hebrews 12:1", text: "Let us lay aside every weight, and the sin which doth so easily beset us.", theme: "discipline" },
  { reference: "Hebrews 12:11", text: "No chastening for the present seemeth to be joyous, but grievous... afterward it yieldeth the peaceable fruit of righteousness.", theme: "discipline" },
  { reference: "James 1:2-3", text: "Count it all joy when ye fall into divers temptations; knowing this, that the trying of your faith worketh patience.", theme: "strength" },
  { reference: "James 1:5", text: "If any of you lack wisdom, let him ask of God.", theme: "wisdom" },
  { reference: "James 1:12", text: "Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life.", theme: "temptation" },
  { reference: "James 1:22", text: "Be ye doers of the word, and not hearers only.", theme: "discipline" },
  { reference: "James 4:7", text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.", theme: "temptation" },
  { reference: "James 4:8", text: "Draw nigh to God, and he will draw nigh to you.", theme: "faith" },
  { reference: "1 Peter 5:7", text: "Casting all your care upon him; for he careth for you.", theme: "faith" },
  { reference: "1 Peter 5:8", text: "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about.", theme: "temptation" },
  { reference: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins.", theme: "faith" },
  { reference: "1 John 4:4", text: "Greater is he that is in you, than he that is in the world.", theme: "strength" },
  { reference: "1 John 5:4", text: "This is the victory that overcometh the world, even our faith.", theme: "faith" },
  { reference: "Revelation 3:11", text: "Hold that fast which thou hast, that no man take thy crown.", theme: "discipline" }
];

const rsvceBibleReadings = [
  { reference: "Joshua 1:9", text: "RSVCE reading: Joshua 1:9", theme: "courage" },
  { reference: "Philippians 4:13", text: "RSVCE reading: Philippians 4:13", theme: "strength" },
  { reference: "Proverbs 3:5-6", text: "RSVCE reading: Proverbs 3:5-6", theme: "faith" },
  { reference: "Psalm 23:1-3", text: "RSVCE reading: Psalm 23:1-3", theme: "faith" },
  { reference: "Psalm 27:1", text: "RSVCE reading: Psalm 27:1", theme: "courage" },
  { reference: "Psalm 34:4", text: "RSVCE reading: Psalm 34:4", theme: "courage" },
  { reference: "Psalm 37:5", text: "RSVCE reading: Psalm 37:5", theme: "faith" },
  { reference: "Psalm 46:1", text: "RSVCE reading: Psalm 46:1", theme: "strength" },
  { reference: "Psalm 51:10", text: "RSVCE reading: Psalm 51:10", theme: "discipline" },
  { reference: "Psalm 55:22", text: "RSVCE reading: Psalm 55:22", theme: "faith" },
  { reference: "Psalm 56:3", text: "RSVCE reading: Psalm 56:3", theme: "faith" },
  { reference: "Psalm 119:9", text: "RSVCE reading: Psalm 119:9", theme: "temptation" },
  { reference: "Psalm 119:11", text: "RSVCE reading: Psalm 119:11", theme: "temptation" },
  { reference: "Psalm 119:105", text: "RSVCE reading: Psalm 119:105", theme: "wisdom" },
  { reference: "Psalm 121:1-2", text: "RSVCE reading: Psalm 121:1-2", theme: "strength" },
  { reference: "Psalm 139:23-24", text: "RSVCE reading: Psalm 139:23-24", theme: "discipline" },
  { reference: "Proverbs 1:7", text: "RSVCE reading: Proverbs 1:7", theme: "wisdom" },
  { reference: "Proverbs 4:23", text: "RSVCE reading: Proverbs 4:23", theme: "discipline" },
  { reference: "Proverbs 10:4", text: "RSVCE reading: Proverbs 10:4", theme: "discipline" },
  { reference: "Proverbs 11:14", text: "RSVCE reading: Proverbs 11:14", theme: "leadership" },
  { reference: "Proverbs 12:1", text: "RSVCE reading: Proverbs 12:1", theme: "wisdom" },
  { reference: "Proverbs 13:4", text: "RSVCE reading: Proverbs 13:4", theme: "discipline" },
  { reference: "Proverbs 14:23", text: "RSVCE reading: Proverbs 14:23", theme: "discipline" },
  { reference: "Proverbs 16:3", text: "RSVCE reading: Proverbs 16:3", theme: "purpose" },
  { reference: "Proverbs 16:9", text: "RSVCE reading: Proverbs 16:9", theme: "wisdom" },
  { reference: "Proverbs 18:10", text: "RSVCE reading: Proverbs 18:10", theme: "strength" },
  { reference: "Proverbs 21:5", text: "RSVCE reading: Proverbs 21:5", theme: "discipline" },
  { reference: "Proverbs 24:16", text: "RSVCE reading: Proverbs 24:16", theme: "perseverance" },
  { reference: "Isaiah 26:3", text: "RSVCE reading: Isaiah 26:3", theme: "faith" },
  { reference: "Isaiah 40:29", text: "RSVCE reading: Isaiah 40:29", theme: "strength" },
  { reference: "Isaiah 40:31", text: "RSVCE reading: Isaiah 40:31", theme: "perseverance" },
  { reference: "Isaiah 41:10", text: "RSVCE reading: Isaiah 41:10", theme: "courage" },
  { reference: "Isaiah 43:2", text: "RSVCE reading: Isaiah 43:2", theme: "faith" },
  { reference: "Isaiah 54:17", text: "RSVCE reading: Isaiah 54:17", theme: "courage" },
  { reference: "Jeremiah 17:7-8", text: "RSVCE reading: Jeremiah 17:7-8", theme: "faith" },
  { reference: "Jeremiah 29:11", text: "RSVCE reading: Jeremiah 29:11", theme: "purpose" },
  { reference: "Lamentations 3:22-23", text: "RSVCE reading: Lamentations 3:22-23", theme: "faith" },
  { reference: "Micah 6:8", text: "RSVCE reading: Micah 6:8", theme: "wisdom" },
  { reference: "Nahum 1:7", text: "RSVCE reading: Nahum 1:7", theme: "strength" },
  { reference: "Matthew 4:4", text: "RSVCE reading: Matthew 4:4", theme: "discipline" },
  { reference: "Matthew 5:6", text: "RSVCE reading: Matthew 5:6", theme: "faith" },
  { reference: "Matthew 6:21", text: "RSVCE reading: Matthew 6:21", theme: "wisdom" },
  { reference: "Matthew 6:33", text: "RSVCE reading: Matthew 6:33", theme: "purpose" },
  { reference: "Matthew 7:7-8", text: "RSVCE reading: Matthew 7:7-8", theme: "prayer" },
  { reference: "Matthew 11:28-30", text: "RSVCE reading: Matthew 11:28-30", theme: "strength" },
  { reference: "Matthew 22:37", text: "RSVCE reading: Matthew 22:37", theme: "faith" },
  { reference: "Mark 9:23", text: "RSVCE reading: Mark 9:23", theme: "faith" },
  { reference: "Mark 10:27", text: "RSVCE reading: Mark 10:27", theme: "faith" },
  { reference: "Luke 1:37", text: "RSVCE reading: Luke 1:37", theme: "faith" },
  { reference: "Luke 6:31", text: "RSVCE reading: Luke 6:31", theme: "wisdom" },
  { reference: "Luke 9:23", text: "RSVCE reading: Luke 9:23", theme: "discipline" },
  { reference: "Luke 11:9-10", text: "RSVCE reading: Luke 11:9-10", theme: "prayer" },
  { reference: "John 3:16", text: "RSVCE reading: John 3:16", theme: "faith" },
  { reference: "John 8:12", text: "RSVCE reading: John 8:12", theme: "faith" },
  { reference: "John 8:32", text: "RSVCE reading: John 8:32", theme: "wisdom" },
  { reference: "John 14:6", text: "RSVCE reading: John 14:6", theme: "faith" },
  { reference: "John 14:27", text: "RSVCE reading: John 14:27", theme: "faith" },
  { reference: "John 15:5", text: "RSVCE reading: John 15:5", theme: "purpose" },
  { reference: "John 16:33", text: "RSVCE reading: John 16:33", theme: "courage" },
  { reference: "Romans 5:3-5", text: "RSVCE reading: Romans 5:3-5", theme: "perseverance" },
  { reference: "Romans 8:1", text: "RSVCE reading: Romans 8:1", theme: "faith" },
  { reference: "Romans 8:28", text: "RSVCE reading: Romans 8:28", theme: "purpose" },
  { reference: "Romans 8:31", text: "RSVCE reading: Romans 8:31", theme: "courage" },
  { reference: "Romans 12:2", text: "RSVCE reading: Romans 12:2", theme: "discipline" },
  { reference: "Romans 12:11", text: "RSVCE reading: Romans 12:11", theme: "discipline" },
  { reference: "Romans 12:21", text: "RSVCE reading: Romans 12:21", theme: "temptation" },
  { reference: "1 Corinthians 6:19-20", text: "RSVCE reading: 1 Corinthians 6:19-20", theme: "discipline" },
  { reference: "1 Corinthians 9:24-27", text: "RSVCE reading: 1 Corinthians 9:24-27", theme: "discipline" },
  { reference: "1 Corinthians 10:13", text: "RSVCE reading: 1 Corinthians 10:13", theme: "temptation" },
  { reference: "1 Corinthians 15:58", text: "RSVCE reading: 1 Corinthians 15:58", theme: "perseverance" },
  { reference: "2 Corinthians 5:7", text: "RSVCE reading: 2 Corinthians 5:7", theme: "faith" },
  { reference: "2 Corinthians 10:5", text: "RSVCE reading: 2 Corinthians 10:5", theme: "discipline" },
  { reference: "2 Corinthians 12:9", text: "RSVCE reading: 2 Corinthians 12:9", theme: "strength" },
  { reference: "Galatians 5:1", text: "RSVCE reading: Galatians 5:1", theme: "strength" },
  { reference: "Galatians 5:16", text: "RSVCE reading: Galatians 5:16", theme: "temptation" },
  { reference: "Galatians 6:9", text: "RSVCE reading: Galatians 6:9", theme: "perseverance" },
  { reference: "Ephesians 2:10", text: "RSVCE reading: Ephesians 2:10", theme: "purpose" },
  { reference: "Ephesians 4:22-24", text: "RSVCE reading: Ephesians 4:22-24", theme: "discipline" },
  { reference: "Ephesians 6:10", text: "RSVCE reading: Ephesians 6:10", theme: "strength" },
  { reference: "Ephesians 6:11", text: "RSVCE reading: Ephesians 6:11", theme: "courage" },
  { reference: "Philippians 1:6", text: "RSVCE reading: Philippians 1:6", theme: "perseverance" },
  { reference: "Philippians 2:13", text: "RSVCE reading: Philippians 2:13", theme: "purpose" },
  { reference: "Philippians 3:14", text: "RSVCE reading: Philippians 3:14", theme: "perseverance" },
  { reference: "Philippians 4:6-7", text: "RSVCE reading: Philippians 4:6-7", theme: "prayer" },
  { reference: "Philippians 4:8", text: "RSVCE reading: Philippians 4:8", theme: "wisdom" },
  { reference: "Colossians 3:2", text: "RSVCE reading: Colossians 3:2", theme: "discipline" },
  { reference: "Colossians 3:23", text: "RSVCE reading: Colossians 3:23", theme: "purpose" },
  { reference: "1 Thessalonians 5:16-18", text: "RSVCE reading: 1 Thessalonians 5:16-18", theme: "prayer" },
  { reference: "2 Thessalonians 3:3", text: "RSVCE reading: 2 Thessalonians 3:3", theme: "strength" },
  { reference: "1 Timothy 4:8", text: "RSVCE reading: 1 Timothy 4:8", theme: "discipline" },
  { reference: "1 Timothy 6:12", text: "RSVCE reading: 1 Timothy 6:12", theme: "courage" },
  { reference: "2 Timothy 1:7", text: "RSVCE reading: 2 Timothy 1:7", theme: "courage" },
  { reference: "2 Timothy 2:3", text: "RSVCE reading: 2 Timothy 2:3", theme: "perseverance" },
  { reference: "2 Timothy 2:15", text: "RSVCE reading: 2 Timothy 2:15", theme: "discipline" },
  { reference: "Hebrews 4:12", text: "RSVCE reading: Hebrews 4:12", theme: "wisdom" },
  { reference: "Hebrews 10:23", text: "RSVCE reading: Hebrews 10:23", theme: "faith" },
  { reference: "Hebrews 12:1-2", text: "RSVCE reading: Hebrews 12:1-2", theme: "perseverance" },
  { reference: "Hebrews 12:11", text: "RSVCE reading: Hebrews 12:11", theme: "discipline" },
  { reference: "James 1:2-4", text: "RSVCE reading: James 1:2-4", theme: "perseverance" },
  { reference: "James 1:5", text: "RSVCE reading: James 1:5", theme: "wisdom" },
  { reference: "James 1:12", text: "RSVCE reading: James 1:12", theme: "temptation" },
  { reference: "James 1:22", text: "RSVCE reading: James 1:22", theme: "discipline" },
  { reference: "James 4:7", text: "RSVCE reading: James 4:7", theme: "temptation" },
  { reference: "James 4:8", text: "RSVCE reading: James 4:8", theme: "prayer" },
  { reference: "1 Peter 5:7", text: "RSVCE reading: 1 Peter 5:7", theme: "prayer" },
  { reference: "1 Peter 5:8-9", text: "RSVCE reading: 1 Peter 5:8-9", theme: "temptation" },
  { reference: "1 John 1:9", text: "RSVCE reading: 1 John 1:9", theme: "faith" },
  { reference: "1 John 4:4", text: "RSVCE reading: 1 John 4:4", theme: "strength" },
  { reference: "1 John 5:4", text: "RSVCE reading: 1 John 5:4", theme: "faith" },
  { reference: "Revelation 3:11", text: "RSVCE reading: Revelation 3:11", theme: "perseverance" }
];

let savedGoals = readJson(goalsKey, null) || readJson("goals", []);
let goals = savedGoals.map(goal => ({
  text: goal.text || "",
  category: goal.category || "Personal",
  day: goal.day || "Monday",
  priority: goal.priority || false,
  done: goal.done || false
}));
let history = normalizeHistory(readJson(historyKey, []));
let nonNegotiables = normalizeNonNegotiables(readJson(nonNegotiablesKey, null));
let goalCategories = normalizeGoalCategories(readJson(goalCategoriesKey, null));
let habitState = loadHabits();
let habitHistory = readJson(habitHistoryKey, {});
let journalEntries = readJson(journalKey, {});
let planningGoals = normalizePlanningGoals(readJson(planningGoalsKey, {}));
let aiWeeklyReviews = readJson(aiWeeklyReviewsKey, {});
let financeEntries = normalizeFinanceEntries(readJson(financeKey, []));
let financeTransactions = normalizeTransactions(readJson(transactionKey, []));
let financeBudget = getMoney(readJson(financeBudgetKey, 0));
let savingsGoalPercent = getMoney(readJson(savingsGoalKey, 20));
let userSettings = readJson(settingsKey, {});
let progressChart = null;
let financeSimpleChart = null;
let spendingCategoryChart = null;
let editingIndex = null;
let isGoalSubmitLocked = false;
let editingPlanningGoal = null;
let editingFinanceIndex = null;
let isWeekCollapsed = readJson(weekCollapsedKey, null);
let showFullHistory = false;
let showAllFinanceEntries = false;
let selectedFinanceWeekIndex = null;
let selectedGoalsQuarterKey = getCurrentQuarterKey();
let selectedHistoryQuarterKey = getCurrentQuarterKey();

const goalForm = document.getElementById("goalForm");
const goalInput = document.getElementById("goalInput");
const categoryInput = document.getElementById("categoryInput");
const dayInput = document.getElementById("dayInput");
const priorityInput = document.getElementById("priorityInput");
const submitBtn = document.getElementById("submitBtn");
const goalList = document.getElementById("goalList");
const historyList = document.getElementById("historyList");
const goalsQuarterSelect = document.getElementById("goalsQuarterSelect");
const historyQuarterSelect = document.getElementById("historyQuarterSelect");
const habitList = document.getElementById("habitList");
const newWeekBtn = document.getElementById("newWeekBtn");
const importOldDataBtn = document.getElementById("importOldDataBtn");
const exportBackupBtn = document.getElementById("exportBackupBtn");
const emailBackupBtn = document.getElementById("emailBackupBtn");
const importBackupBtn = document.getElementById("importBackupBtn");
const oldDataInput = document.getElementById("oldDataInput");
const backupInput = document.getElementById("backupInput");
const financeImportInput = document.getElementById("financeImportInput");
const transactionImportInput = document.getElementById("transactionImportInput");
const dashboardTitle = document.getElementById("dashboardTitle");
const settingsBtn = document.getElementById("settingsBtn");
const backupDropdown = document.querySelector(".backup-dropdown");
const customizeTabsBtn = document.getElementById("customizeTabsBtn");
const setupModal = document.getElementById("setupModal");
const setupForm = document.getElementById("setupForm");
const closeSetupModalBtn = document.getElementById("closeSetupModalBtn");
const resetDashboardBtn = document.getElementById("resetDashboardBtn");
const profileNameInput = document.getElementById("profileNameInput");
const profileTitleInput = document.getElementById("profileTitleInput");
const themeSelect = document.getElementById("themeSelect");
const wentWellInput = document.getElementById("wentWellInput");
const failedInput = document.getElementById("failedInput");
const improveInput = document.getElementById("improveInput");
const dailyQuote = document.getElementById("dailyQuote");
const dailyQuoteAuthor = document.getElementById("dailyQuoteAuthor");
const dailyQuoteTheme = document.getElementById("dailyQuoteTheme");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const watchMotivationVideoBtn = document.getElementById("watchMotivationVideoBtn");
const motivationReflectionInput = document.getElementById("motivationReflectionInput");
const bibleVerseReference = document.getElementById("bibleVerseReference");
const bibleVerseText = document.getElementById("bibleVerseText");
const bibleVerseTheme = document.getElementById("bibleVerseTheme");
const newBibleVerseBtn = document.getElementById("newBibleVerseBtn");
const briefingMessage = document.getElementById("briefingMessage");
const todayMissionList = document.getElementById("todayMissionList");
const dailyCommandSummary = document.getElementById("dailyCommandSummary");
const dailyReadinessRow = document.getElementById("dailyReadinessRow");
const dailyTopActions = document.getElementById("dailyTopActions");
const dailyRedFlags = document.getElementById("dailyRedFlags");
const minimumDayCard = document.getElementById("minimumDayCard");
const minimumDayPlan = document.getElementById("minimumDayPlan");
const accountabilityList = document.getElementById("accountabilityList");
const overallDisciplineScore = document.getElementById("overallDisciplineScore");
const overallDisciplineNote = document.getElementById("overallDisciplineNote");
const disciplineScoreMessage = document.getElementById("disciplineScoreMessage");
const weeklyGoalScore = document.getElementById("weeklyGoalScore");
const weeklyGoalScoreNote = document.getElementById("weeklyGoalScoreNote");
const nonNegotiableScore = document.getElementById("nonNegotiableScore");
const nonNegotiableScoreNote = document.getElementById("nonNegotiableScoreNote");
const journalScore = document.getElementById("journalScore");
const journalScoreNote = document.getElementById("journalScoreNote");
const financeScore = document.getElementById("financeScore");
const financeScoreNote = document.getElementById("financeScoreNote");
const welcomePanel = document.getElementById("welcomePanel");
const setupChecklist = document.getElementById("setupChecklist");
const monthlyName = document.getElementById("monthlyName");
const monthlyScorecard = document.getElementById("monthlyScorecard");
const scrollWeekBtn = document.getElementById("scrollWeekBtn");
const currentWeekSection = document.getElementById("currentWeekSection");
const currentWeekLabel = document.getElementById("currentWeekLabel");
const nonNegotiablesSection = document.getElementById("nonNegotiablesSection");
const missionFormSection = document.getElementById("missionFormSection");
const toggleWeekBtn = document.getElementById("toggleWeekBtn");
const collapsedWeekPreview = document.getElementById("collapsedWeekPreview");
const nonNegotiableForm = document.getElementById("nonNegotiableForm");
const nonNegotiableInput = document.getElementById("nonNegotiableInput");
const nonNegotiableEditorList = document.getElementById("nonNegotiableEditorList");
const goalCategoryForm = document.getElementById("goalCategoryForm");
const goalCategoryInput = document.getElementById("goalCategoryInput");
const goalCategoryEditorList = document.getElementById("goalCategoryEditorList");
const journalDateLabel = document.getElementById("journalDateLabel");
const journalRantInput = document.getElementById("journalRantInput");
const journalWonInput = document.getElementById("journalWonInput");
const journalFailedInput = document.getElementById("journalFailedInput");
const journalAttackInput = document.getElementById("journalAttackInput");
const journalHistorySelect = document.getElementById("journalHistorySelect");
const pastJournalEntry = document.getElementById("pastJournalEntry");
const historyModal = document.getElementById("historyModal");
const historyModalTitle = document.getElementById("historyModalTitle");
const historyModalBody = document.getElementById("historyModalBody");
const closeHistoryModalBtn = document.getElementById("closeHistoryModalBtn");
const tabsModal = document.getElementById("tabsModal");
const closeTabsModalBtn = document.getElementById("closeTabsModalBtn");
const tabOrderList = document.getElementById("tabOrderList");
const resetTabsBtn = document.getElementById("resetTabsBtn");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const monthlyGoalForm = document.getElementById("monthlyGoalForm");
const monthlyGoalInput = document.getElementById("monthlyGoalInput");
const monthlyTargetInput = document.getElementById("monthlyTargetInput");
const monthlyCategoryInput = document.getElementById("monthlyCategoryInput");
const monthlyStatusInput = document.getElementById("monthlyStatusInput");
const monthlyCompletedInput = document.getElementById("monthlyCompletedInput");
const monthlyProgressInput = document.getElementById("monthlyProgressInput");
const monthlyNotesInput = document.getElementById("monthlyNotesInput");
const monthlyGoalSubmitBtn = document.getElementById("monthlyGoalSubmitBtn");
const monthlyGoalList = document.getElementById("monthlyGoalList");
const yearlyGoalForm = document.getElementById("yearlyGoalForm");
const yearlyGoalInput = document.getElementById("yearlyGoalInput");
const yearlyTargetInput = document.getElementById("yearlyTargetInput");
const yearlyCategoryInput = document.getElementById("yearlyCategoryInput");
const yearlyStatusInput = document.getElementById("yearlyStatusInput");
const yearlyProgressInput = document.getElementById("yearlyProgressInput");
const yearlyNotesInput = document.getElementById("yearlyNotesInput");
const yearlyGoalSubmitBtn = document.getElementById("yearlyGoalSubmitBtn");
const yearlyGoalList = document.getElementById("yearlyGoalList");
const longTermGoalForm = document.getElementById("longTermGoalForm");
const longTermGoalInput = document.getElementById("longTermGoalInput");
const longTermTimeframeInput = document.getElementById("longTermTimeframeInput");
const longTermCategoryInput = document.getElementById("longTermCategoryInput");
const longTermStatusInput = document.getElementById("longTermStatusInput");
const longTermProgressInput = document.getElementById("longTermProgressInput");
const longTermWhyInput = document.getElementById("longTermWhyInput");
const longTermNextActionInput = document.getElementById("longTermNextActionInput");
const longTermGoalSubmitBtn = document.getElementById("longTermGoalSubmitBtn");
const longTermGoalList = document.getElementById("longTermGoalList");
const monthlyGoalsCompleted = document.getElementById("monthlyGoalsCompleted");
const yearlyGoalsCompleted = document.getElementById("yearlyGoalsCompleted");
const longTermGoalsInProgress = document.getElementById("longTermGoalsInProgress");
const overallGoalProgress = document.getElementById("overallGoalProgress");
const financeForm = document.getElementById("financeForm");
const financeMonthInput = document.getElementById("financeMonthInput");
const financeDateInput = document.getElementById("financeDateInput");
const financeTypeInput = document.getElementById("financeTypeInput");
const financeCategoryInput = document.getElementById("financeCategoryInput");
const financeNeedWantInput = document.getElementById("financeNeedWantInput");
const financeAmountInput = document.getElementById("financeAmountInput");
const financeNoteInput = document.getElementById("financeNoteInput");
const financeSubmitBtn = document.getElementById("financeSubmitBtn");
const financeFilterInput = document.getElementById("financeFilterInput");
const financeSortInput = document.getElementById("financeSortInput");
const savingsGoalForm = document.getElementById("savingsGoalForm");
const savingsGoalInput = document.getElementById("savingsGoalInput");
const importTransactionsBtn = document.getElementById("importTransactionsBtn");
const clearTransactionsBtn = document.getElementById("clearTransactionsBtn");
const madeThisMonthValue = document.getElementById("madeThisMonthValue");
const spentThisMonthValue = document.getElementById("spentThisMonthValue");
const savedThisMonthValue = document.getElementById("savedThisMonthValue");
const transactionSummaryText = document.getElementById("transactionSummaryText");
const weeklySpendingSummary = document.getElementById("weeklySpendingSummary");
const previousFinanceWeekBtn = document.getElementById("previousFinanceWeekBtn");
const financeWeekSelect = document.getElementById("financeWeekSelect");
const nextFinanceWeekBtn = document.getElementById("nextFinanceWeekBtn");
const weeklySpendingCard = document.getElementById("weeklySpendingCard");
const summaryIncomeValue = document.getElementById("summaryIncomeValue");
const summarySpendingValue = document.getElementById("summarySpendingValue");
const summarySavingsValue = document.getElementById("summarySavingsValue");
const remainingMoneyValue = document.getElementById("remainingMoneyValue");
const savingsGoalValue = document.getElementById("savingsGoalValue");
const targetSavingsValue = document.getElementById("targetSavingsValue");
const actualSavingsValue = document.getElementById("actualSavingsValue");
const spendingBudgetValue = document.getElementById("spendingBudgetValue");
const planRemainingValue = document.getElementById("planRemainingValue");
const budgetPlanMessages = document.getElementById("budgetPlanMessages");
const mainMoneyStatusLabel = document.getElementById("mainMoneyStatusLabel");
const mainMoneyStatusValue = document.getElementById("mainMoneyStatusValue");
const mainMoneyStatusMessage = document.getElementById("mainMoneyStatusMessage");
const statusIncomeValue = document.getElementById("statusIncomeValue");
const statusSpentValue = document.getElementById("statusSpentValue");
const statusSavedValue = document.getElementById("statusSavedValue");
const needsSpendingValue = document.getElementById("needsSpendingValue");
const wantsSpendingValue = document.getElementById("wantsSpendingValue");
const wantsPercentValue = document.getElementById("wantsPercentValue");
const spendingCategoryList = document.getElementById("spendingCategoryList");
const spendingInsightMessages = document.getElementById("spendingInsightMessages");
const financeEntryList = document.getElementById("financeEntryList");
const toggleFinanceHistoryBtn = document.getElementById("toggleFinanceHistoryBtn");
const weeklyReviewSummary = document.getElementById("weeklyReviewSummary");
const generateAiReviewBtn = document.getElementById("generateAiReviewBtn");
const copyAiPromptBtn = document.getElementById("copyAiPromptBtn");
const copyAiReviewBtn = document.getElementById("copyAiReviewBtn");
const aiReviewStatus = document.getElementById("aiReviewStatus");
const aiReviewOutput = document.getElementById("aiReviewOutput");
const accountabilityReportPanel = document.getElementById("accountabilityReportPanel");
const previewReportBtn = document.getElementById("previewReportBtn");
const copyReportBtn = document.getElementById("copyReportBtn");
const downloadReportBtn = document.getElementById("downloadReportBtn");
const accountabilityReportStatus = document.getElementById("accountabilityReportStatus");
const accountabilityReportPreview = document.getElementById("accountabilityReportPreview");

function readJson(key, fallback) {
  const item = readStorage(key);

  if (!item) {
    return fallback;
  }

  try {
    return JSON.parse(item);
  } catch {
    return fallback;
  }
}

function readStorage(key, fallback = null) {
  try {
    const item = localStorage.getItem(key);
    return item === null ? fallback : item;
  } catch (error) {
    console.warn(`Unable to read localStorage key "${key}".`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Unable to save localStorage key "${key}".`, error);
    return false;
  }
}

function writeJson(key, value) {
  return writeStorage(key, JSON.stringify(value));
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`Unable to remove localStorage key "${key}".`, error);
    return false;
  }
}

function createIdFromText(text, prefix = "item") {
  const slug = String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

  return `${prefix}-${slug || Date.now()}`;
}

function dedupeId(id, usedIds) {
  let uniqueId = id;
  let count = 2;

  while (usedIds.has(uniqueId)) {
    uniqueId = `${id}-${count}`;
    count++;
  }

  usedIds.add(uniqueId);
  return uniqueId;
}

function normalizeNonNegotiables(savedItems) {
  const usedIds = new Set();
  const source = Array.isArray(savedItems) && savedItems.length > 0
    ? savedItems
    : defaultNonNegotiableTitles.map(title => ({ title }));

  return source
    .map(item => {
      const title = typeof item === "string" ? item : item.title;

      if (!String(title || "").trim()) {
        return null;
      }

      return {
        id: dedupeId(item.id || createIdFromText(title, "habit"), usedIds),
        title: String(title).trim(),
        active: item.active !== false,
        createdAt: item.createdAt || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function normalizeGoalCategories(savedItems) {
  const usedIds = new Set();
  const saved = Array.isArray(savedItems) && savedItems.length > 0
    ? savedItems
    : defaultGoalCategoryNames.map(name => ({ name }));
  const namesFromGoals = [
    ...goals.map(goal => goal.category),
    ...Object.values(normalizePlanningGoals(readJson(planningGoalsKey, {}))).flat().map(goal => goal.category)
  ].filter(Boolean);
  const byName = new Map();

  [...saved, ...namesFromGoals.map(name => ({ name }))].forEach(item => {
    const name = typeof item === "string" ? item : item.name;
    const cleanName = String(name || "").trim();

    if (!cleanName || byName.has(cleanName.toLowerCase())) {
      return;
    }

    byName.set(cleanName.toLowerCase(), {
      id: dedupeId(item.id || createIdFromText(cleanName, "category"), usedIds),
      name: cleanName,
      createdAt: item.createdAt || new Date().toISOString()
    });
  });

  return [...byName.values()];
}

// Keeps older saved history compatible with the current history shape.
function normalizeHistory(savedHistory) {
  if (!Array.isArray(savedHistory)) {
    return [];
  }

  return savedHistory.map((week, index) => ({
    week: week.week || week.label || `Week ${index + 1}`,
    percent: Number(week.percent) || 0,
    completed: Number(week.completed) || 0,
    total: Number(week.total) || 0,
    goals: Array.isArray(week.goals) ? week.goals : [],
    review: week.review || week.reflection || {},
    savedDate: week.savedDate || "Saved week",
    imported: week.imported || false
  }));
}

function normalizePlanningGoal(goal, type) {
  return {
    text: goal.text || goal.goal || "",
    target: goal.target || goal.targetMonth || goal.targetYear || goal.timeframe || "",
    category: goal.category || "Personal",
    status: goal.status || (goal.completed ? "Completed" : "Not Started"),
    completed: Boolean(goal.completed || goal.status === "Completed"),
    progress: Math.max(0, Math.min(100, Number(goal.progress) || 0)),
    notes: goal.notes || "",
    why: goal.why || "",
    nextAction: goal.nextAction || "",
    type: type
  };
}

function normalizePlanningGoals(savedGoals) {
  const saved = savedGoals || {};

  return {
    monthly: Array.isArray(saved.monthly) ? saved.monthly.map(goal => normalizePlanningGoal(goal, "monthly")) : [],
    yearly: Array.isArray(saved.yearly) ? saved.yearly.map(goal => normalizePlanningGoal(goal, "yearly")) : [],
    longTerm: Array.isArray(saved.longTerm) ? saved.longTerm.map(goal => normalizePlanningGoal(goal, "longTerm")) : []
  };
}

function normalizeFinanceEntries(savedEntries) {
  if (!Array.isArray(savedEntries)) {
    return [];
  }

  return savedEntries.flatMap(entry => {
    if (entry.type && entry.amount !== undefined) {
      return [buildFinanceEntry(entry)];
    }

    const convertedEntries = [];

    if (getMoney(entry.income) > 0) {
      convertedEntries.push(buildFinanceEntry({
        date: entry.date,
        type: "Income",
        amount: entry.income,
        note: "Converted old income snapshot"
      }));
    }

    if (getMoney(entry.expenses) > 0) {
      convertedEntries.push(buildFinanceEntry({
        date: entry.date,
        type: "Spending",
        amount: entry.expenses,
        note: "Converted old expense snapshot"
      }));
    }

    return convertedEntries;
  }).filter(entry => entry.date && entry.amount > 0);
}

function normalizeTransactions(savedTransactions) {
  if (!Array.isArray(savedTransactions)) {
    return [];
  }

  return savedTransactions.map(transaction => {
    const description = transaction.description || transaction.merchant || "Transaction";
    const rawAmount = parseMoneyText(transaction.amount);
    const category = transaction.category || categorizeTransaction(description);
    const looksLikeIncome = category === "Income" || /deposit|payroll|salary|credit/i.test(description);
    const savedType = String(transaction.type || "").toLowerCase();
    const type = savedType === "debit" || savedType === "credit"
      ? savedType
      : (rawAmount < 0 || !looksLikeIncome ? "debit" : "credit");
    const amount = Math.abs(rawAmount);
    const isRealIncome = type === "credit" && isRealIncomeDescription(description);
    const isIgnoredTransfer = type === "credit" && isIgnoredTransferDescription(description);

    return {
      date: transaction.date || getTodayString(),
      description: description,
      merchant: transaction.merchant || description,
      amount: amount,
      type: type,
      category: category,
      isRealIncome: transaction.isRealIncome !== undefined ? Boolean(transaction.isRealIncome) : isRealIncome,
      isIgnoredTransfer: transaction.isIgnoredTransfer !== undefined ? Boolean(transaction.isIgnoredTransfer) : isIgnoredTransfer
    };
  }).filter(transaction => transaction.date);
}

function copyGoalsForHistory(goalArray) {
  return goalArray.map(goal => ({
    text: goal.text,
    category: goal.category,
    day: goal.day,
    priority: goal.priority,
    done: goal.done
  }));
}

function convertOldGoal(goal) {
  return {
    text: goal.text || "Untitled goal",
    category: goal.category || "Personal",
    day: goal.day || "Monday",
    priority: goal.priority || false,
    done: goal.done || false
  };
}

function convertOldPythonData(data) {
  const oldHistory = Array.isArray(data.history) ? data.history : [];
  const oldCurrentGoals = data.current_week && Array.isArray(data.current_week.goals)
    ? data.current_week.goals
    : [];

  return {
    goals: oldCurrentGoals.map(convertOldGoal),
    history: oldHistory.map((week, index) => ({
      week: week.week || `Week ${index + 1}`,
      percent: Number(week.score) || Number(week.percent) || 0,
      completed: Number(week.completed) || 0,
      total: Number(week.total) || 0,
      goals: Array.isArray(week.goals) ? week.goals.map(convertOldGoal) : [],
      review: week.review || {},
      savedDate: week.end_date || week.savedDate || "Imported from goals.json",
      imported: false
    })),
    habits: {
      date: getTodayString(),
      checks: {}
    },
    habitHistory: {},
    journalEntries: {},
    financeEntries: [],
    financeTransactions: [],
    settings: {},
    review: {}
  };
}

function saveGoals() {
  writeJson(goalsKey, goals);
}

function saveHistory() {
  writeJson(historyKey, history);
}

function saveHabits() {
  writeJson(habitsKey, habitState);
  writeStorage(lastHabitDateKey, habitState.date);
}

function saveHabitHistory() {
  writeJson(habitHistoryKey, habitHistory);
}

function saveNonNegotiables() {
  writeJson(nonNegotiablesKey, nonNegotiables);
}

function saveGoalCategories() {
  writeJson(goalCategoriesKey, goalCategories);
}

function saveAiWeeklyReviews() {
  writeJson(aiWeeklyReviewsKey, aiWeeklyReviews);
}

function saveJournal() {
  journalEntries[getTodayString()] = getJournalText();
  writeJson(journalKey, journalEntries);
  renderWelcomeState();
  renderDailyCommandBriefing();
  renderDisciplineSystem();
  renderWeeklyReview();
}

function savePlanningGoals() {
  writeJson(planningGoalsKey, planningGoals);
}

function saveFinance() {
  writeJson(financeKey, financeEntries);
}

function saveTransactions() {
  writeJson(transactionKey, financeTransactions);
}

function saveFinanceBudget() {
  writeJson(financeBudgetKey, financeBudget);
}

function saveSavingsGoal() {
  writeJson(savingsGoalKey, savingsGoalPercent);
}

function saveSettings() {
  writeJson(settingsKey, userSettings);
}

function getProfile() {
  return userSettings.profile || {};
}

function getTheme() {
  return userSettings.theme || "dark-discipline";
}

function applyTheme(themeName = getTheme()) {
  const allowedThemes = ["dark-discipline", "light-focus", "midnight-blue", "forest-green", "high-contrast", "warm-minimal"];
  const theme = allowedThemes.includes(themeName) ? themeName : "dark-discipline";

  document.documentElement.dataset.theme = theme;

  if (themeSelect) {
    themeSelect.value = theme;
  }
}

function saveTheme() {
  userSettings.theme = themeSelect.value || "dark-discipline";
  saveSettings();
  applyTheme(userSettings.theme);
}

function hasJournalEntries() {
  return Object.values(journalEntries).some(entry =>
    entry && (entry.rant || entry.won || entry.failed || entry.attack)
  );
}

function hasPlanningGoalData() {
  return Object.values(planningGoals).some(list => Array.isArray(list) && list.length > 0);
}

function hasDashboardData() {
  return goals.length > 0
    || history.length > 0
    || financeEntries.length > 0
    || financeTransactions.length > 0
    || hasPlanningGoalData()
    || hasJournalEntries();
}

function renderWelcomeState() {
  if (!welcomePanel || !setupChecklist) {
    return;
  }

  const checklist = [
    {
      label: "Name the dashboard",
      detail: "Finish Settings so the command center feels personal.",
      done: Boolean(getProfile().firstName)
    },
    {
      label: "Add one weekly mission",
      detail: "Pick a real target for this week.",
      done: goals.length > 0
    },
    {
      label: "Check one non-negotiable",
      detail: "Mark the first daily habit you already handled.",
      done: getHabitCompletedCount(habitState.checks) > 0
    },
    {
      label: "Write today's journal",
      detail: "Capture one win, one lesson, and one next move.",
      done: hasJournalEntries()
    },
    {
      label: "Export a backup",
      detail: "Use Backup after your first real entries.",
      done: readJson(backupExportedKey, false) === true
    }
  ];
  const isChecklistComplete = checklist.every(item => item.done);

  if (isChecklistComplete && !userSettings.firstLaunchChecklistComplete) {
    userSettings.firstLaunchChecklistComplete = true;
    saveSettings();
  }

  setupChecklist.innerHTML = checklist.map(item => `
    <article class="checklist-item ${item.done ? "done" : ""}">
      <span class="check-dot">${item.done ? "Done" : ""}</span>
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </article>
  `).join("");
  setupChecklist.style.setProperty("--setup-progress", `${Math.round((checklist.filter(item => item.done).length / checklist.length) * 100)}%`);
  setupChecklist.setAttribute("aria-label", `${checklist.filter(item => item.done).length} of ${checklist.length} first-launch setup steps complete`);

  welcomePanel.classList.toggle("hidden", Boolean(userSettings.firstLaunchChecklistComplete));
}

function renderProfileTitle() {
  const profile = getProfile();
  const name = profile.firstName || "";
  const title = profile.dashboardTitle || "Discipline Dashboard";
  const fullTitle = name ? `${name}'s ${title}` : title;

  dashboardTitle.textContent = fullTitle;
  document.title = fullTitle;
}

function openSetupModal() {
  const profile = getProfile();

  profileNameInput.value = profile.firstName || "";
  profileTitleInput.value = profile.dashboardTitle || "Discipline Dashboard";
  applyTheme();
  renderCategorySelects();
  renderCustomizationEditors();
  setupModal.classList.remove("hidden");
  profileNameInput.focus();
}

function closeSetupModal() {
  setupModal.classList.add("hidden");
}

function closeBackupDropdown() {
  if (backupDropdown) {
    backupDropdown.removeAttribute("open");
  }
}

function saveProfile(event) {
  event.preventDefault();

  userSettings.profile = {
    firstName: profileNameInput.value.trim(),
    dashboardTitle: profileTitleInput.value
  };

  saveSettings();
  renderProfileTitle();
  renderWelcomeState();
  closeSetupModal();
}

function showSetupIfNeeded() {
  const profile = getProfile();
  renderProfileTitle();

  if (!profile.firstName || !profile.dashboardTitle) {
    openSetupModal();
  }
}

function resetDashboard() {
  const confirmed = confirm("Reset the whole dashboard? This clears goals, history, habits, journal, finance, settings, backups settings, and tab order from this browser.");

  if (!confirmed) {
    return;
  }

  [
    goalsKey,
    historyKey,
    habitsKey,
    habitHistoryKey,
    lastHabitDateKey,
    nonNegotiablesKey,
    goalCategoriesKey,
    aiWeeklyReviewsKey,
    journalKey,
    planningGoalsKey,
    financeKey,
    transactionKey,
    financeBudgetKey,
    savingsGoalKey,
    bibleVerseKey,
    motivationalQuoteKey,
    motivationReflectionKey,
    tabOrderKey,
    weekCollapsedKey,
    activeWeekStartKey,
    settingsKey,
    reviewKey,
    backupExportedKey
  ].forEach(key => removeStorage(key));

  window.location.reload();
}

function getSavedTabOrder() {
  const savedOrder = readJson(tabOrderKey, defaultTabOrder);
  const validTabs = savedOrder.filter(tab => defaultTabOrder.includes(tab));
  const missingTabs = defaultTabOrder.filter(tab => !validTabs.includes(tab));

  return [...validTabs, ...missingTabs];
}

function saveTabOrder(order) {
  writeJson(tabOrderKey, order);
}

function applyTabOrder(order = getSavedTabOrder()) {
  const nav = document.querySelector(".tab-nav");

  order.forEach(tab => {
    const button = document.querySelector(`.tab-button[data-tab="${tab}"]`);

    if (button) {
      nav.appendChild(button);
    }
  });
}

function renderTabOrderList() {
  const order = getSavedTabOrder();

  tabOrderList.innerHTML = order.map((tab, index) => `
    <article class="tab-order-item">
      <strong>${tabLabels[tab]}</strong>
      <div class="tab-order-controls">
        <button class="small-button secondary-button" type="button" data-tab-order-index="${index}" data-tab-order-direction="-1" ${index === 0 ? "disabled" : ""}>Up</button>
        <button class="small-button secondary-button" type="button" data-tab-order-index="${index}" data-tab-order-direction="1" ${index === order.length - 1 ? "disabled" : ""}>Down</button>
      </div>
    </article>
  `).join("");
}

function openTabsModal() {
  renderTabOrderList();
  tabsModal.classList.remove("hidden");
}

function openTabsFromSettings() {
  closeSetupModal();
  openTabsModal();
}

function closeTabsModal() {
  tabsModal.classList.add("hidden");
}

function moveTabOrderItem(index, direction) {
  const order = getSavedTabOrder();
  const newIndex = index + direction;

  if (newIndex < 0 || newIndex >= order.length) {
    return;
  }

  const [tab] = order.splice(index, 1);
  order.splice(newIndex, 0, tab);
  saveTabOrder(order);
  applyTabOrder(order);
  renderTabOrderList();
}

function resetTabOrder() {
  saveTabOrder(defaultTabOrder);
  applyTabOrder(defaultTabOrder);
  renderTabOrderList();
}

function saveReview() {
  writeJson(reviewKey, getReviewText());
  renderWeeklyReview();
}

function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTodayName() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

function getReadableDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function getLocalDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getMonthKey(dateString) {
  return String(dateString || "").slice(0, 7);
}

function getQuarterKey(date) {
  const localDate = date instanceof Date ? date : getLocalDate(date);
  const quarter = Math.floor(localDate.getMonth() / 3) + 1;

  return `${localDate.getFullYear()}-Q${quarter}`;
}

function getCurrentQuarterKey() {
  return getQuarterKey(new Date());
}

function getQuarterLabel(quarterKey) {
  const match = String(quarterKey || "").match(/^(\d{4})-Q([1-4])$/);

  if (!match) {
    return "Current Quarter";
  }

  return `Q${match[2]} ${match[1]}`;
}

function getQuarterRange(quarterKey) {
  const match = String(quarterKey || "").match(/^(\d{4})-Q([1-4])$/);
  const today = new Date();
  const year = match ? Number(match[1]) : today.getFullYear();
  const quarter = match ? Number(match[2]) : Math.floor(today.getMonth() / 3) + 1;
  const start = new Date(year, (quarter - 1) * 3, 1);
  const end = new Date(year, quarter * 3, 0);

  return { start, end };
}

function getQuarterOptions(dateValues) {
  const options = new Set([getCurrentQuarterKey()]);

  dateValues.forEach(value => {
    if (!value) {
      return;
    }

    options.add(getQuarterKey(value));
  });

  return Array.from(options).sort().reverse();
}

function renderQuarterSelect(select, options, selectedKey) {
  if (!select) {
    return;
  }

  if (!options.includes(selectedKey)) {
    options.unshift(selectedKey);
  }

  select.innerHTML = options.map(option => `
    <option value="${escapeHtml(option)}" ${option === selectedKey ? "selected" : ""}>${escapeHtml(getQuarterLabel(option))}</option>
  `).join("");
}

function getMoney(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  return parseMoneyText(value);
}

function formatMoney(value) {
  const amount = roundMoney(getMoney(value));
  const hasCents = !Number.isInteger(amount);

  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0
  });
}

function roundMoney(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function formatPercent(value) {
  return `${Math.round(Number(value) || 0)}%`;
}

function getActiveNonNegotiables() {
  return nonNegotiables.filter(item => item.active !== false);
}

function isHabitChecked(item, checks = habitState.checks) {
  return Boolean(checks && (checks[item.id] === true || checks[item.title] === true));
}

function getHabitCompletedCount(checks) {
  return getActiveNonNegotiables().filter(item => isHabitChecked(item, checks)).length;
}

function isHabitCheckedOnDate(item, dateKey) {
  if (dateKey === getTodayString()) {
    return isHabitChecked(item, habitState.checks);
  }

  const record = habitHistory[dateKey];
  return Boolean(record && record.checks && isHabitChecked(item, record.checks));
}

function getPreviousDateKey(dateKey) {
  const date = getLocalDate(dateKey);
  date.setDate(date.getDate() - 1);
  return getDateString(date);
}

function getNonNegotiableStreak(item) {
  let dateKey = getTodayString();
  let streak = 0;

  while (isHabitCheckedOnDate(item, dateKey)) {
    streak++;
    dateKey = getPreviousDateKey(dateKey);
  }

  return streak;
}

function getFinanceScoreData() {
  const snapshot = getCurrentWeekFinanceSnapshot();
  const hasFinanceData = financeEntries.length > 0 || financeTransactions.length > 0;

  if (!hasFinanceData) {
    return {
      score: null,
      label: "Needs data",
      note: "Add income or spending data to score money discipline."
    };
  }

  if (snapshot.spending === 0 && snapshot.income === 0) {
    return {
      score: 70,
      label: "70%",
      note: "Finance data exists, but this week has no income or spending yet."
    };
  }

  if (snapshot.spending <= snapshot.income) {
    return {
      score: 100,
      label: "100%",
      note: "Current-week spending is controlled relative to income."
    };
  }

  return {
    score: 35,
    label: "35%",
    note: "Current-week spending is above income. Review money today."
  };
}

function getDisciplineScoreData() {
  const activeNonNegotiables = getActiveNonNegotiables();
  const completedHabits = getHabitCompletedCount(habitState.checks);
  const weeklyScoreValue = goals.length > 0 ? getSuccessPercent(goals) : null;
  const nonNegotiableScoreValue = activeNonNegotiables.length > 0
    ? Math.round((completedHabits / activeNonNegotiables.length) * 100)
    : null;
  const journalScoreValue = hasJournalEntryToday() ? 100 : 0;
  const financeData = getFinanceScoreData();
  const weightedParts = [
    { score: nonNegotiableScoreValue, weight: 40 },
    { score: weeklyScoreValue, weight: 30 },
    { score: journalScoreValue, weight: 15 },
    { score: financeData.score, weight: 15 }
  ].filter(part => part.score !== null);
  const totalWeight = weightedParts.reduce((sum, part) => sum + part.weight, 0);
  const overall = totalWeight > 0
    ? Math.round(weightedParts.reduce((sum, part) => sum + (part.score * part.weight), 0) / totalWeight)
    : null;
  const missing = [];

  if (weeklyScoreValue === null) {
    missing.push("weekly goals");
  }

  if (nonNegotiableScoreValue === null) {
    missing.push("active non-negotiables");
  }

  if (financeData.score === null) {
    missing.push("finance data");
  }

  return {
    overall,
    missing,
    weekly: {
      score: weeklyScoreValue,
      label: weeklyScoreValue === null ? "Needs goals" : `${weeklyScoreValue}%`,
      note: goals.length === 0
        ? "Add weekly goals before trusting this part of the score."
        : `${getCompletedCount(goals)} of ${goals.length} weekly goals complete.`
    },
    nonNegotiables: {
      score: nonNegotiableScoreValue,
      label: nonNegotiableScoreValue === null ? "Needs basics" : `${nonNegotiableScoreValue}%`,
      note: activeNonNegotiables.length === 0
        ? "Add active non-negotiables to score daily basics."
        : `${completedHabits} of ${activeNonNegotiables.length} active non-negotiables complete today.`
    },
    journal: {
      score: journalScoreValue,
      label: `${journalScoreValue}%`,
      note: hasJournalEntryToday()
        ? "Today's journal entry is saved."
        : "No journal entry yet today."
    },
    finance: financeData
  };
}

function renderDisciplineScore() {
  if (!overallDisciplineScore || !disciplineScoreMessage) {
    return;
  }

  const scoreData = getDisciplineScoreData();
  const isPartial = scoreData.missing.length > 0;

  overallDisciplineScore.textContent = scoreData.overall === null
    ? "Needs data"
    : `${isPartial ? "Partial " : ""}${scoreData.overall}%`;
  overallDisciplineNote.textContent = isPartial
    ? `Missing ${scoreData.missing.join(", ")}. Score is useful, but not complete.`
    : "Weighted score: 40% basics, 30% goals, 15% journal, 15% finance.";
  disciplineScoreMessage.textContent = isPartial
    ? "Some score inputs are missing, so treat this as a partial read."
    : "Scores update from today's goals, basics, journal, and money data.";
  weeklyGoalScore.textContent = scoreData.weekly.label;
  weeklyGoalScoreNote.textContent = scoreData.weekly.note;
  nonNegotiableScore.textContent = scoreData.nonNegotiables.label;
  nonNegotiableScoreNote.textContent = scoreData.nonNegotiables.note;
  journalScore.textContent = scoreData.journal.label;
  journalScoreNote.textContent = scoreData.journal.note;
  financeScore.textContent = scoreData.finance.label;
  financeScoreNote.textContent = scoreData.finance.note;
}

function renderDisciplineSystem() {
  renderDisciplineScore();
}

// Loads today's habit state and archives yesterday if the date changed.
function loadHabits() {
  const saved = readJson(habitsKey, {});
  const savedDate = saved.date || readStorage(lastHabitDateKey);

  if (savedDate === getTodayString()) {
    return saved;
  }

  if (savedDate && saved.checks) {
    const savedHistory = readJson(habitHistoryKey, {});
    savedHistory[savedDate] = {
      date: savedDate,
      checks: saved.checks,
      completed: getHabitCompletedCount(saved.checks),
      total: getActiveNonNegotiables().length
    };
    writeJson(habitHistoryKey, savedHistory);
  }

  return {
    date: getTodayString(),
    checks: {}
  };
}

// Resets daily habits when the calendar day changes without touching weekly goals.
function checkDailyHabitReset() {
  if (habitState.date === getTodayString()) {
    return;
  }

  syncTodayHabitHistory();
  habitState = {
    date: getTodayString(),
    checks: {}
  };
  saveHabits();
}

function loadReview() {
  const saved = readJson(reviewKey, {});

  wentWellInput.value = saved.wentWell || "";
  failedInput.value = saved.failed || "";
  improveInput.value = saved.improve || "";
}

function getReviewText() {
  return {
    wentWell: wentWellInput.value.trim(),
    failed: failedInput.value.trim(),
    improve: improveInput.value.trim()
  };
}

function clearReview() {
  wentWellInput.value = "";
  failedInput.value = "";
  improveInput.value = "";
  saveReview();
}

function loadJournal() {
  const today = getTodayString();
  const entry = journalEntries[today] || {};

  journalDateLabel.textContent = getReadableDate(today);
  journalRantInput.value = entry.rant || "";
  journalWonInput.value = entry.won || "";
  journalFailedInput.value = entry.failed || "";
  journalAttackInput.value = entry.attack || "";
  renderJournalHistory();
}

function getJournalText() {
  return {
    rant: journalRantInput.value.trim(),
    won: journalWonInput.value.trim(),
    failed: journalFailedInput.value.trim(),
    attack: journalAttackInput.value.trim()
  };
}

function getCompletedCount(goalArray) {
  return goalArray.filter(goal => goal.done).length;
}

function getSuccessPercent(goalArray) {
  if (goalArray.length === 0) {
    return 0;
  }

  return Math.round((getCompletedCount(goalArray) / goalArray.length) * 100);
}

function getCurrentStreak() {
  let streak = 0;

  for (let index = history.length - 1; index >= 0; index--) {
    if (history[index].percent === 100) {
      streak++;
    } else {
      break;
    }
  }

  if (goals.length > 0 && getSuccessPercent(goals) === 100) {
    streak++;
  }

  return streak;
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toCssClassToken(value, fallback = "item") {
  return String(value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || fallback;
}

function highlightElement(element) {
  if (!element) {
    return;
  }

  element.classList.add("temporary-highlight");
  setTimeout(() => {
    element.classList.remove("temporary-highlight");
  }, 2000);
}

function scrollToElement(element) {
  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "center" });
  highlightElement(element);
}

function saveWeekCollapsedPreference() {
  writeJson(weekCollapsedKey, isWeekCollapsed);
}

function shouldCollapseWeekByDefault() {
  if (isWeekCollapsed === null) {
    return goals.length > 6;
  }

  return Boolean(isWeekCollapsed);
}

function getCollapsedPreviewGoals() {
  return goals
    .map((goal, index) => ({ ...goal, originalIndex: index }))
    .filter(goal => goal.priority || !goal.done)
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        return Number(b.priority) - Number(a.priority);
      }

      return Number(a.done) - Number(b.done);
    })
    .slice(0, 3);
}

function renderCurrentWeekVisibility() {
  const collapsed = goals.length > 0 && shouldCollapseWeekByDefault();
  const completed = getCompletedCount(goals);

  currentWeekSection.classList.toggle("week-collapsed", collapsed);
  goalList.classList.toggle("hidden", collapsed);
  collapsedWeekPreview.classList.toggle("hidden", !collapsed);
  toggleWeekBtn.textContent = collapsed ? "Expand" : "Collapse";
  toggleWeekBtn.setAttribute("aria-expanded", String(!collapsed));
  toggleWeekBtn.setAttribute("aria-controls", "goalList");

  if (!collapsed) {
    collapsedWeekPreview.innerHTML = "";
    return;
  }

  const previewGoals = getCollapsedPreviewGoals();
  collapsedWeekPreview.innerHTML = `
    <article class="compact-item week-summary-card">
      <div class="compact-main">
        <strong>${completed} of ${goals.length} complete</strong>
        <span class="compact-meta">Top priority or open missions</span>
      </div>
    </article>
    ${previewGoals.length === 0
      ? '<p class="empty-state">No priority or incomplete missions to preview.</p>'
      : previewGoals.map(goal => `
        <article class="compact-item clickable-item ${goal.done ? "done" : ""}" data-goal-jump-index="${goal.originalIndex}">
          <div class="compact-main">
            <strong>${escapeHtml(goal.text)}</strong>
            <span class="compact-meta">${escapeHtml(goal.day)} - ${escapeHtml(goal.category)}${goal.priority ? " - Priority" : ""}</span>
          </div>
          <span>${goal.done ? "Done" : "Open"}</span>
        </article>
      `).join("")}
  `;
}

function setCurrentWeekCollapsed(collapsed) {
  isWeekCollapsed = collapsed;
  saveWeekCollapsedPreference();
  renderCurrentWeekVisibility();
}

function toggleCurrentWeekCollapsed() {
  setCurrentWeekCollapsed(!shouldCollapseWeekByDefault());
}

function goToGoal(index) {
  switchTab("goals");

  if (shouldCollapseWeekByDefault()) {
    setCurrentWeekCollapsed(false);
  }

  setTimeout(() => {
    const goalCard = goalList.querySelector(`[data-goal-index="${index}"]`);
    scrollToElement(goalCard);
  }, 80);
}

function handleAccountabilityClick(action) {
  if (action === "priority-goal") {
    const priorityIndex = goals.findIndex(goal => goal.priority && !goal.done);
    if (priorityIndex >= 0) {
      goToGoal(priorityIndex);
      return;
    }
  }

  if (action === "first-incomplete") {
    const openIndex = goals.findIndex(goal => !goal.done);
    if (openIndex >= 0) {
      goToGoal(openIndex);
      return;
    }
  }

  if (action === "habits") {
    switchTab("command");
    scrollToElement(nonNegotiablesSection);
    return;
  }

  if (action === "mission-form") {
    switchTab("goals");
    setTimeout(() => {
      scrollToElement(missionFormSection);
      goalInput.focus();
    }, 80);
    return;
  }

  if (action === "journal") {
    switchTab("journal");
    setTimeout(() => scrollToElement(journalWonInput), 80);
    return;
  }

  if (action === "finance") {
    switchTab("finance");
    return;
  }

  switchTab("goals");

  if (shouldCollapseWeekByDefault()) {
    setCurrentWeekCollapsed(false);
  }

  setTimeout(() => scrollToElement(currentWeekSection), 80);
}

function resetForm(shouldFocus = true) {
  goalForm.reset();
  renderCategorySelects();
  editingIndex = null;
  submitBtn.textContent = "Add Goal";
  if (shouldFocus) {
    goalInput.focus();
  }
}

function getCategoryNames() {
  return goalCategories.map(category => category.name);
}

function renderCategoryOptions(select, selectedValue = "") {
  if (!select) {
    return;
  }

  const categoryNames = getCategoryNames();
  const valueToUse = categoryNames.includes(selectedValue)
    ? selectedValue
    : (selectedValue || categoryNames[0] || "Personal");

  select.innerHTML = categoryNames.map(name => `
    <option value="${escapeHtml(name)}">${escapeHtml(name)}</option>
  `).join("");

  if (!categoryNames.includes(valueToUse) && valueToUse) {
    const option = document.createElement("option");
    option.value = valueToUse;
    option.textContent = valueToUse;
    select.appendChild(option);
  }

  select.value = valueToUse;
}

function renderCategorySelects() {
  renderCategoryOptions(categoryInput, categoryInput.value);
  renderCategoryOptions(monthlyCategoryInput, monthlyCategoryInput.value);
  renderCategoryOptions(yearlyCategoryInput, yearlyCategoryInput.value);
  renderCategoryOptions(longTermCategoryInput, longTermCategoryInput.value);
}

function renderCustomizationEditors() {
  if (!nonNegotiableEditorList || !goalCategoryEditorList) {
    return;
  }

  nonNegotiableEditorList.innerHTML = nonNegotiables.length === 0
    ? '<p class="empty-state">No non-negotiables yet.</p>'
    : nonNegotiables.map(item => `
      <article class="editor-item">
        <input id="nonNegotiableTitle-${escapeHtml(item.id)}" type="text" value="${escapeHtml(item.title)}" aria-label="Rename ${escapeHtml(item.title)}">
        <div class="editor-actions">
          <button class="small-button secondary-button" type="button" data-non-negotiable-action="rename" data-non-negotiable-id="${escapeHtml(item.id)}">Save</button>
          <button class="small-button delete-button" type="button" data-non-negotiable-action="delete" data-non-negotiable-id="${escapeHtml(item.id)}">Delete</button>
        </div>
      </article>
    `).join("");

  goalCategoryEditorList.innerHTML = goalCategories.length === 0
    ? '<p class="empty-state">No goal categories yet.</p>'
    : goalCategories.map(category => `
      <article class="editor-item">
        <input id="goalCategoryName-${escapeHtml(category.id)}" type="text" value="${escapeHtml(category.name)}" aria-label="Rename ${escapeHtml(category.name)}">
        <div class="editor-actions">
          <button class="small-button secondary-button" type="button" data-goal-category-action="rename" data-goal-category-id="${escapeHtml(category.id)}">Save</button>
          <button class="small-button delete-button" type="button" data-goal-category-action="delete" data-goal-category-id="${escapeHtml(category.id)}">Delete</button>
        </div>
      </article>
    `).join("");
}

function addNonNegotiable(event) {
  event.preventDefault();
  const title = nonNegotiableInput.value.trim();

  if (!title) {
    return;
  }

  nonNegotiables.push({
    id: dedupeId(createIdFromText(title, "habit"), new Set(nonNegotiables.map(item => item.id))),
    title: title,
    active: true,
    createdAt: new Date().toISOString()
  });
  nonNegotiableInput.value = "";
  saveNonNegotiables();
  renderCustomizationEditors();
  renderHabits();
}

function renameNonNegotiable(id) {
  const item = nonNegotiables.find(nonNegotiable => nonNegotiable.id === id);
  const input = document.getElementById(`nonNegotiableTitle-${id}`);
  const newTitle = input ? input.value.trim() : "";

  if (!item || !newTitle) {
    return;
  }

  const oldTitle = item.title;
  item.title = newTitle;

  if (habitState.checks[oldTitle] !== undefined) {
    habitState.checks[item.id] = habitState.checks[oldTitle];
    delete habitState.checks[oldTitle];
    saveHabits();
  }

  saveNonNegotiables();
  renderCustomizationEditors();
  renderHabits();
}

function deleteNonNegotiable(id) {
  const item = nonNegotiables.find(nonNegotiable => nonNegotiable.id === id);

  if (!item || !confirm(`Delete "${item.title}" from your non-negotiables? Today's check status for it will be removed.`)) {
    return;
  }

  nonNegotiables = nonNegotiables.filter(nonNegotiable => nonNegotiable.id !== id);
  delete habitState.checks[item.id];
  delete habitState.checks[item.title];
  saveNonNegotiables();
  saveHabits();
  renderCustomizationEditors();
  renderHabits();
}

function addGoalCategory(event) {
  event.preventDefault();
  const name = goalCategoryInput.value.trim();

  if (!name || goalCategories.some(category => category.name.toLowerCase() === name.toLowerCase())) {
    return;
  }

  goalCategories.push({
    id: dedupeId(createIdFromText(name, "category"), new Set(goalCategories.map(category => category.id))),
    name: name,
    createdAt: new Date().toISOString()
  });
  goalCategoryInput.value = "";
  saveGoalCategories();
  renderCategorySelects();
  renderCustomizationEditors();
}

function updateGoalCategoryReferences(oldName, newName) {
  goals.forEach(goal => {
    if (goal.category === oldName) {
      goal.category = newName;
    }
  });

  Object.values(planningGoals).flat().forEach(goal => {
    if (goal.category === oldName) {
      goal.category = newName;
    }
  });

  saveGoals();
  savePlanningGoals();
}

function renameGoalCategory(id) {
  const category = goalCategories.find(item => item.id === id);
  const input = document.getElementById(`goalCategoryName-${id}`);
  const newName = input ? input.value.trim() : "";

  if (!category || !newName) {
    return;
  }

  const duplicate = goalCategories.some(item => item.id !== id && item.name.toLowerCase() === newName.toLowerCase());
  if (duplicate) {
    alert("That category already exists.");
    return;
  }

  const oldName = category.name;
  category.name = newName;
  updateGoalCategoryReferences(oldName, newName);
  saveGoalCategories();
  renderCategorySelects();
  renderCustomizationEditors();
  renderGoals();
  renderPlanningGoals();
}

function isCategoryInUse(name) {
  return goals.some(goal => goal.category === name)
    || Object.values(planningGoals).flat().some(goal => goal.category === name);
}

function deleteGoalCategory(id) {
  const category = goalCategories.find(item => item.id === id);

  if (!category) {
    return;
  }

  if (isCategoryInUse(category.name) && !confirm(`"${category.name}" has goals attached. Delete it and move those goals to Personal?`)) {
    return;
  }

  const fallback = goalCategories.find(item => item.id !== id)?.name || "Personal";
  updateGoalCategoryReferences(category.name, fallback);
  goalCategories = goalCategories.filter(item => item.id !== id);

  if (goalCategories.length === 0) {
    goalCategories.push({
      id: "category-personal",
      name: "Personal",
      createdAt: new Date().toISOString()
    });
  }

  saveGoalCategories();
  renderCategorySelects();
  renderCustomizationEditors();
  renderGoals();
  renderPlanningGoals();
}

function getGoalDaySortIndex(goal) {
  const dayIndex = weekDayOrder.indexOf(goal.day);
  return dayIndex >= 0 ? dayIndex : weekDayOrder.length;
}

function getWeeklyScheduleGoals() {
  return goals
    .map((goal, index) => ({ ...goal, originalIndex: index }))
    .sort((a, b) => {
      const dayDifference = getGoalDaySortIndex(a) - getGoalDaySortIndex(b);

      if (dayDifference !== 0) {
        return dayDifference;
      }

      if (a.priority !== b.priority) {
        return Number(b.priority) - Number(a.priority);
      }

      return a.originalIndex - b.originalIndex;
    });
}

// Draws the current weekly mission cards.
function renderGoals() {
  goalList.innerHTML = "";

  if (goals.length === 0) {
    goalList.innerHTML = '<p class="empty-state">No missions yet. Add one above to start the week strong.</p>';
    renderCurrentWeekVisibility();
    updateStats();
    renderWelcomeState();
    renderBriefing();
    renderAccountability();
    renderChart();
    return;
  }

  getWeeklyScheduleGoals().forEach(goal => {
    const card = document.createElement("article");
    card.className = `goal-card ${goal.done ? "completed" : ""}`;
    card.dataset.goalIndex = goal.originalIndex;

    const categoryClass = toCssClassToken(goal.category, "personal");
    const priorityBadge = goal.priority ? '<span class="badge priority-badge">Priority</span>' : "";

    card.innerHTML = `
      <div>
        <div class="goal-top">
          <span class="day-label">${escapeHtml(goal.day)}</span>
          <div class="badge-row">
            <span class="badge ${categoryClass}">${escapeHtml(goal.category)}</span>
            ${priorityBadge}
          </div>
        </div>
        <p class="goal-text">${escapeHtml(goal.text)}</p>
      </div>
      <div class="card-actions">
        <button class="small-button" type="button" data-goal-action="toggle" data-goal-index="${goal.originalIndex}">
          ${goal.done ? "Undo" : "Complete"}
        </button>
        <button class="small-button secondary-button" type="button" data-goal-action="edit" data-goal-index="${goal.originalIndex}">Edit</button>
        <button class="small-button delete-button" type="button" data-goal-action="delete" data-goal-index="${goal.originalIndex}">Delete</button>
      </div>
    `;

    goalList.appendChild(card);
  });

  renderCurrentWeekVisibility();
  updateStats();
  renderWelcomeState();
  renderBriefing();
  renderAccountability();
  renderChart();
}

// Draws non-negotiables and keeps today's habit history updated.
function renderHabits() {
  checkDailyHabitReset();
  syncTodayHabitHistory();
  habitList.innerHTML = "";

  getActiveNonNegotiables().forEach(item => {
    const label = document.createElement("label");
    const isDone = isHabitChecked(item);
    const streak = getNonNegotiableStreak(item);
    label.className = `habit-card streak-habit-card ${isDone ? "done" : ""}`;
    label.innerHTML = `
      <input type="checkbox" ${isDone ? "checked" : ""} data-habit-id="${escapeHtml(item.id)}">
      <span class="habit-card-main">
        <strong>${escapeHtml(item.title)}</strong>
        <small>${isDone ? "Done today" : "Open today"} - ${streak} ${streak === 1 ? "day" : "days"} streak</small>
      </span>
    `;
    habitList.appendChild(label);
  });

  const total = getActiveNonNegotiables().length;
  const completed = getHabitCompletedCount(habitState.checks);
  document.getElementById("habitSummary").textContent = total === 0
    ? "No active non-negotiables. Add one in Goals."
    : `${completed} of ${total} done today`;
  renderWelcomeState();
  renderBriefing();
  renderAccountability();
  renderWeeklyReview();
}

function syncTodayHabitHistory() {
  habitHistory[habitState.date] = {
    date: habitState.date,
    checks: habitState.checks,
    completed: getHabitCompletedCount(habitState.checks),
    total: getActiveNonNegotiables().length
  };
  saveHabitHistory();
}

function getDailyProgressPercent() {
  const todayGoals = goals.filter(goal => goal.day === getTodayName());
  const doneTodayGoals = getCompletedCount(todayGoals);
  const doneHabits = getHabitCompletedCount(habitState.checks);
  const totalItems = todayGoals.length + getActiveNonNegotiables().length;

  if (totalItems === 0) {
    return 0;
  }

  return Math.round(((doneTodayGoals + doneHabits) / totalItems) * 100);
}

function getProgressMessage(percent) {
  if (percent === 0) {
    return "Start the day. Win the first task.";
  }

  if (percent < 50) {
    return "Build momentum.";
  }

  if (percent < 100) {
    return "Finish strong.";
  }

  return "Day secured.";
}

function hasJournalEntryToday() {
  const entry = journalEntries[getTodayString()] || {};
  return Boolean(entry.rant || entry.won || entry.failed || entry.attack);
}

function getCurrentWeekFinanceSnapshot() {
  const range = getCurrentWeekRange();
  const inCurrentWeek = entry => {
    if (!entry.date) {
      return false;
    }

    const date = getLocalDate(entry.date);
    return date >= range.start && date <= range.end;
  };
  const snapshot = {
    income: 0,
    spending: 0,
    transactionsSpent: 0
  };

  financeEntries.filter(inCurrentWeek).forEach(entry => {
    if (entry.type === "Income") {
      snapshot.income = roundMoney(snapshot.income + entry.amount);
    }

    if (entry.type === "Spending") {
      snapshot.spending = roundMoney(snapshot.spending + entry.amount);
    }
  });

  financeTransactions.filter(inCurrentWeek).forEach(transaction => {
    if (transaction.type === "credit" && transaction.isRealIncome) {
      snapshot.income = roundMoney(snapshot.income + transaction.amount);
    }

    if (transaction.type === "debit") {
      snapshot.transactionsSpent = roundMoney(snapshot.transactionsSpent + transaction.amount);
    }
  });

  snapshot.spending = roundMoney(snapshot.spending + snapshot.transactionsSpent);
  snapshot.net = roundMoney(snapshot.income - snapshot.spending);

  return snapshot;
}

function getDailyCommandBriefing() {
  const totalGoals = goals.length;
  const completedGoals = getCompletedCount(goals);
  const incompleteGoals = goals
    .map((goal, index) => ({ ...goal, originalIndex: index }))
    .filter(goal => !goal.done);
  const incompletePriorityGoals = incompleteGoals.filter(goal => goal.priority);
  const activeNonNegotiables = getActiveNonNegotiables();
  const completedHabits = getHabitCompletedCount(habitState.checks);
  const firstMissedHabit = activeNonNegotiables.find(item => !isHabitChecked(item));
  const journalDone = hasJournalEntryToday();
  const weeklyPercent = getSuccessPercent(goals);
  const financeSnapshot = getCurrentWeekFinanceSnapshot();
  const hasFinanceData = financeEntries.length > 0 || financeTransactions.length > 0;
  const redFlags = [];

  if (totalGoals === 0) {
    redFlags.push({ text: "No weekly goals exist.", action: "mission-form" });
  }

  if (activeNonNegotiables.length > 0 && completedHabits === 0) {
    redFlags.push({ text: "No non-negotiables are completed today.", action: "habits" });
  }

  if (!journalDone) {
    redFlags.push({ text: "Journal has not been written today.", action: "journal" });
  }

  if (financeSnapshot.spending > financeSnapshot.income && financeSnapshot.spending > 0) {
    redFlags.push({ text: "Spending is greater than income for the current week.", action: "finance" });
  }

  if (totalGoals > 0 && incompleteGoals.length > totalGoals / 2) {
    redFlags.push({ text: "More than half of weekly goals are incomplete.", action: "first-incomplete" });
  }

  if (incompletePriorityGoals.length > 0) {
    redFlags.push({
      text: `${incompletePriorityGoals.length} priority goal${incompletePriorityGoals.length === 1 ? " is" : "s are"} incomplete.`,
      action: "priority-goal"
    });
  }

  let summary = "Hold the line today. Do the next faithful action and keep the basics clean.";

  if (totalGoals === 0) {
    summary = "Define the mission today. Add weekly goals before the day drifts.";
  } else if (weeklyPercent < 50) {
    summary = "The week is behind. Recover with one priority action and one completed basic.";
  } else if (activeNonNegotiables.length > 0 && completedHabits < Math.ceil(activeNonNegotiables.length / 2)) {
    summary = "The basics are slipping. Reset with prayer, movement, and one honest task.";
  } else if (!journalDone) {
    summary = "The day needs a record. Finish your work, then journal tonight.";
  } else if (financeSnapshot.net < 0 || financeSnapshot.spending > financeSnapshot.income && financeSnapshot.spending > 0) {
    summary = "Money needs attention today. Review spending before adding anything new.";
  } else if (totalGoals > 0 && completedGoals === totalGoals) {
    summary = "Weekly mission complete. Prepare tomorrow's next action and keep the basics steady.";
  } else if (weeklyPercent >= 80 && completedHabits >= Math.ceil(activeNonNegotiables.length / 2)) {
    summary = "You are in a solid position. Stay faithful to the plan and finish clean.";
  }

  const actions = [];
  const firstPriority = incompletePriorityGoals[0];
  const firstIncomplete = incompleteGoals[0];

  if (totalGoals === 0) {
    actions.push("Add weekly goals and choose one priority mission.");
  } else if (firstPriority) {
    actions.push(`Complete priority mission: ${firstPriority.text}`);
  } else if (firstIncomplete && completedGoals < totalGoals) {
    actions.push(`Complete one mission: ${firstIncomplete.text}`);
  } else {
    actions.push("Prepare tomorrow's next action while the week is clean.");
  }

  if (firstMissedHabit) {
    actions.push(`Check off ${firstMissedHabit.title}.`);
  } else if (!journalDone) {
    actions.push("Write a short journal entry tonight.");
  } else if (financeSnapshot.spending > financeSnapshot.income && financeSnapshot.spending > 0) {
    actions.push("Review current-week spending before the next purchase.");
  } else if (!hasFinanceData) {
    actions.push("Add one finance entry so money is visible.");
  } else {
    actions.push("Keep the streak alive with one quiet act of discipline.");
  }

  if (actions.length < 3) {
    if (!journalDone) {
      actions.push("Journal tonight before the day closes.");
    } else if (!hasFinanceData) {
      actions.push("Add one finance entry so money is visible.");
    } else {
      actions.push("Review progress and set up tomorrow.");
    }
  }

  if (actions.length < 3) {
    actions.push("Protect prayer, movement, and one clean decision.");
  }

  return {
    summary,
    actions: actions.slice(0, 3),
    redFlags,
    readiness: [
      {
        label: "Habits",
        value: activeNonNegotiables.length === 0
          ? "Needs setup"
          : completedHabits === activeNonNegotiables.length
            ? "Complete"
            : `${completedHabits}/${activeNonNegotiables.length}`
      },
      {
        label: "Goals",
        value: totalGoals === 0
          ? "Needs goals"
          : completedGoals === totalGoals
            ? "Complete"
            : `${completedGoals}/${totalGoals}`
      },
      { label: "Journal", value: journalDone ? "Done" : "Open" },
      {
        label: "Finance",
        value: !hasFinanceData
          ? "Needs data"
          : financeSnapshot.spending > financeSnapshot.income && financeSnapshot.spending > 0
            ? "Review"
            : "Visible"
      }
    ],
    minimumDayProminent: redFlags.length >= 2 || weeklyPercent < 50 || (activeNonNegotiables.length > 0 && completedHabits === 0)
  };
}

function renderDailyCommandBriefing() {
  if (!dailyCommandSummary || !dailyTopActions || !dailyRedFlags || !minimumDayCard || !minimumDayPlan) {
    return;
  }

  const briefing = getDailyCommandBriefing();
  const minimumPlan = [
    "Pray for 5 minutes",
    "Move your body for 10 minutes",
    "Read 1 page",
    "Write 1 sentence in the journal",
    "Make your bed or reset your space",
    "Complete one small mission"
  ];

  dailyCommandSummary.textContent = briefing.summary;
  if (dailyReadinessRow) {
    dailyReadinessRow.innerHTML = briefing.readiness.map(item => `
      <article class="readiness-pill">
        <span>${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(item.value)}</strong>
      </article>
    `).join("");
  }
  dailyTopActions.innerHTML = briefing.actions
    .map(action => `<li>${escapeHtml(action)}</li>`)
    .join("");
  dailyRedFlags.innerHTML = briefing.redFlags.length === 0
    ? '<article class="command-flag good">No major red flags. Keep watch and execute.</article>'
    : briefing.redFlags.map(flag => `<article class="command-flag clickable-item" data-accountability-action="${escapeHtml(flag.action)}">${escapeHtml(flag.text)}</article>`).join("");
  minimumDayPlan.innerHTML = minimumPlan
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join("");
  dailyRedFlags.closest(".daily-command-card").classList.toggle("compact-good-card", briefing.redFlags.length === 0);
  dailyRedFlags.closest(".daily-command-card").classList.toggle("has-red-flags", briefing.redFlags.length > 0);
  minimumDayCard.classList.toggle("prominent", briefing.minimumDayProminent);
  minimumDayCard.open = briefing.minimumDayProminent;
  renderDisciplineSystem();
}

function getAccountabilityReportAnalysis(data, options = {}) {
  const completedGoals = data.completedGoals || [];
  const missedGoals = data.missedGoals || [];
  const totalGoals = data.goals ? data.goals.length : completedGoals.length + missedGoals.length;
  const priorityGoals = (data.goals || []).filter(goal => goal.priority);
  const finance = data.finance || { income: 0, spending: 0, savings: 0, net: 0 };
  const journalDone = data.journalEntries && data.journalEntries.length > 0;
  const nonNegotiables = data.nonNegotiables || [];
  const completedNonNegotiables = data.completedNonNegotiables || nonNegotiables.filter(item => item.done);
  const redFlags = [];
  const actions = [];

  if (totalGoals === 0) {
    redFlags.push("No weekly goals exist.");
    actions.push("Add weekly goals and choose one priority mission.");
  }

  if (totalGoals > 0 && missedGoals.length > totalGoals / 2) {
    redFlags.push("More than half of weekly goals are incomplete.");
  }

  const incompletePriorityGoals = priorityGoals.filter(goal => !goal.done);
  if (incompletePriorityGoals.length > 0) {
    redFlags.push(`${incompletePriorityGoals.length} priority goal${incompletePriorityGoals.length === 1 ? " is" : "s are"} incomplete.`);
    actions.push(`Complete priority mission: ${incompletePriorityGoals[0].text}`);
  }

  if (nonNegotiables.length > 0 && completedNonNegotiables.length === 0) {
    redFlags.push("No non-negotiables were completed.");
  }

  if (!journalDone) {
    redFlags.push("No journal entry was saved for this week.");
  }

  if (finance.spending > finance.income && finance.spending > 0) {
    redFlags.push("Spending is greater than income for the week.");
    actions.push("Review spending before the next purchase.");
  }

  if (actions.length === 0 && missedGoals[0]) {
    actions.push(`Complete one mission: ${missedGoals[0].text}`);
  }

  if (actions.length < 3 && nonNegotiables.some(item => !item.done)) {
    actions.push("Recover one missed non-negotiable.");
  }

  if (actions.length < 3 && !journalDone) {
    actions.push("Write a short journal entry before the week closes.");
  }

  if (actions.length < 3 && (!finance.entries || finance.entries.length === 0)) {
    actions.push("Add one finance entry so money is visible.");
  }

  while (actions.length < 3) {
    actions.push(["Prepare the next faithful action.", "Review progress with someone you trust.", "Keep the streak alive with one quiet act of discipline."][actions.length]);
  }

  if (options.useCurrentBriefing) {
    const briefing = getDailyCommandBriefing();
    return {
      redFlags: briefing.redFlags.length > 0 ? briefing.redFlags.map(flag => flag.text) : redFlags,
      actions: briefing.actions.length > 0 ? briefing.actions : actions
    };
  }

  return {
    redFlags,
    actions: actions.slice(0, 3)
  };
}

function getAccountabilityScoreSummary(data, options = {}) {
  if (options.useCurrentScores) {
    const score = getDisciplineScoreData();
    return {
      overall: score.overall === null ? "Needs data" : `${score.overall}%`,
      goals: score.weekly.label,
      nonNegotiables: score.nonNegotiables.label,
      journal: score.journal.label,
      finance: score.finance.label
    };
  }

  const totalGoals = data.goals ? data.goals.length : 0;
  const completedGoals = data.completedGoals ? data.completedGoals.length : 0;
  const totalNonNegotiables = data.nonNegotiables ? data.nonNegotiables.length : 0;
  const completedNonNegotiables = data.completedNonNegotiables ? data.completedNonNegotiables.length : 0;
  const finance = data.finance || { income: 0, spending: 0, entries: [] };
  const financeHasData = finance.entries && finance.entries.length > 0;
  const financeScore = !financeHasData
    ? "Needs data"
    : finance.spending <= finance.income ? "100%" : "35%";

  return {
    overall: `${Number(data.score) || 0}%`,
    goals: totalGoals > 0 ? `${Math.round((completedGoals / totalGoals) * 100)}%` : "Needs goals",
    nonNegotiables: totalNonNegotiables > 0 ? `${Math.round((completedNonNegotiables / totalNonNegotiables) * 100)}%` : "Needs data",
    journal: data.journalEntries && data.journalEntries.length > 0 ? "100%" : "0%",
    finance: financeScore
  };
}

function buildAccountabilityReport(data = getWeeklyReviewData(), options = {}) {
  const score = getAccountabilityScoreSummary(data, options);
  const analysis = getAccountabilityReportAnalysis(data, options);
  const completedGoals = data.completedGoals || [];
  const missedGoals = data.missedGoals || [];
  const allGoals = data.goals || [];
  const priorityGoals = allGoals.filter(goal => goal.priority);
  const finance = data.finance || { income: 0, spending: 0, savings: 0, net: 0 };
  const savedReview = options.aiReview || null;
  const missedGoalLines = missedGoals.length === 0
    ? "- No missed or incomplete goals right now."
    : missedGoals.map(goal => `- ${goal.text}${goal.priority ? " (priority)" : ""}`).join("\n");
  const priorityStatus = priorityGoals.length === 0
    ? "- No priority goals marked."
    : priorityGoals.map(goal => `- ${goal.done ? "Done" : "Open"}: ${goal.text}`).join("\n");
  const nonNegotiables = data.nonNegotiables || [];
  const nonNegotiableLines = nonNegotiables.length === 0
    ? "- No non-negotiable history saved for this week."
    : nonNegotiables.map(item => `- ${item.title}: ${item.done ? "done" : "open"}${item.streak !== undefined ? `; ${item.streak} ${item.streak === 1 ? "day" : "days"} streak` : ""}`).join("\n");
  const journalStatus = data.journalEntries && data.journalEntries.length > 0
    ? `${data.journalEntries.length} journal entr${data.journalEntries.length === 1 ? "y" : "ies"} saved this week.`
    : "No journal entry saved for this week.";
  const redFlagLines = analysis.redFlags.length === 0
    ? "- No major red flags."
    : analysis.redFlags.map(flag => `- ${flag}`).join("\n");
  const actionLines = analysis.actions.map((action, index) => `${index + 1}. ${action}`).join("\n");
  const aiReviewSection = savedReview && savedReview.text
    ? `\nAI Weekly Review\n${savedReview.text}\n`
    : "\nAI Weekly Review\nNo AI weekly review saved.\n";

  return `Weekly Accountability Report

Week
${data.week.label}

Score Summary
- Overall Discipline Score: ${score.overall}
- Goal Score: ${score.goals}
- Non-Negotiable Score: ${score.nonNegotiables}
- Journal Score: ${score.journal}
- Finance Score: ${score.finance}

Weekly Goals
- Completed: ${completedGoals.length}/${allGoals.length}
- Missed or incomplete goals:
${missedGoalLines}
- Priority goal status:
${priorityStatus}

Non-Negotiables
${nonNegotiableLines}

Journal
- ${journalStatus}
- Private journal text is not included by default.

Finance
- Income: ${formatMoney(finance.income)}
- Spending: ${formatMoney(finance.spending)}
- Savings: ${formatMoney(finance.savings)}
- Net/remaining: ${formatMoney(finance.net)}

Red Flags
${redFlagLines}

Top 3 Priorities
${actionLines}
${aiReviewSection}
Closing Line
Do not chase a perfect week. Win the next faithful action.`;
}

function setAccountabilityReportStatus(message, status = "") {
  if (!accountabilityReportStatus) {
    return;
  }

  accountabilityReportStatus.textContent = message;
  accountabilityReportStatus.className = `ai-review-status ${status}`.trim();
}

function previewAccountabilityReport() {
  if (!accountabilityReportPreview) {
    return "";
  }

  const report = buildAccountabilityReport(getWeeklyReviewData(), {
    aiReview: aiWeeklyReviews[getCurrentWeekKey()],
    useCurrentScores: true,
    useCurrentBriefing: true
  });
  accountabilityReportPreview.value = report;
  accountabilityReportPanel.open = true;
  setAccountabilityReportStatus("Report preview generated.", "success");

  return report;
}

async function writeClipboardText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back to selecting a temporary textarea below.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
  } catch {
    // Some file:// test/browser contexts block programmatic copy after selection.
  }
  textArea.remove();
}

async function copyAccountabilityReport() {
  const report = accountabilityReportPreview && accountabilityReportPreview.value
    ? accountabilityReportPreview.value
    : previewAccountabilityReport();

  try {
    await writeClipboardText(report);
    setAccountabilityReportStatus("Accountability report copied.", "success");
  } catch {
    setAccountabilityReportStatus("Could not copy automatically. Select the preview text and copy it manually.", "error");
  }
}

function downloadAccountabilityReport() {
  const report = accountabilityReportPreview && accountabilityReportPreview.value
    ? accountabilityReportPreview.value
    : previewAccountabilityReport();
  const blob = new Blob([report], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `discipline-accountability-report-${getTodayString()}.txt`;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
  setAccountabilityReportStatus("Accountability report downloaded.", "success");
}

function getArchiveAccountabilityReport(index) {
  const week = history[index];

  if (!week) {
    return "";
  }

  return buildAccountabilityReport(getArchiveWeeklyReviewData(index), {
    aiReview: aiWeeklyReviews[getArchiveAiReviewKey(week, index)]
  });
}

function setArchiveReportStatus(message, status = "") {
  const statusElement = document.getElementById("archiveReportStatus");

  if (!statusElement) {
    return;
  }

  statusElement.textContent = message;
  statusElement.className = `ai-review-status ${status}`.trim();
}

function previewArchiveAccountabilityReport(index) {
  const preview = document.getElementById("archiveReportPreview");
  const panel = document.getElementById("archiveAccountabilityReportPanel");

  if (!preview) {
    return "";
  }

  const report = getArchiveAccountabilityReport(index);
  preview.value = report;

  if (panel) {
    panel.open = true;
  }

  setArchiveReportStatus("Archived accountability report preview generated.", "success");
  return report;
}

async function copyArchiveAccountabilityReport(index) {
  const preview = document.getElementById("archiveReportPreview");
  const report = preview && preview.value ? preview.value : previewArchiveAccountabilityReport(index);

  try {
    await writeClipboardText(report);
    setArchiveReportStatus("Archived accountability report copied.", "success");
  } catch {
    setArchiveReportStatus("Could not copy automatically. Select the preview text and copy it manually.", "error");
  }
}

function downloadArchiveAccountabilityReport(index) {
  const week = history[index];
  const preview = document.getElementById("archiveReportPreview");
  const report = preview && preview.value ? preview.value : previewArchiveAccountabilityReport(index);
  const range = week ? getArchiveWeekRange(week, index) : getCurrentWeekRange();
  const blob = new Blob([report], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `discipline-accountability-report-${range.endKey}.txt`;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
  setArchiveReportStatus("Archived accountability report downloaded.", "success");
}

// Builds the morning briefing from today's missions and habits.
function renderBriefing() {
  const todayName = getTodayName();
  const todayGoals = goals
    .map((goal, index) => ({ ...goal, originalIndex: index }))
    .filter(goal => goal.day === todayName)
    .sort((a, b) => Number(b.priority) - Number(a.priority));
  const dailyPercent = getDailyProgressPercent();
  const completedGoals = getCompletedCount(goals);
  const allGoalsComplete = goals.length > 0 && completedGoals === goals.length;

  briefingMessage.textContent = getProgressMessage(dailyPercent);
  const visibleTodayGoals = todayGoals.slice(0, 2);

  todayMissionList.innerHTML = todayGoals.length === 0
    ? goals.length > 0
      ? `<p class="empty-state compact-line clickable-item" data-accountability-action="current-week">${allGoalsComplete ? "Weekly mission complete. Prepare tomorrow's next action." : "No missions scheduled today. Review weekly goals or assign one to today."}</p>`
      : `<p class="empty-state compact-line clickable-item" data-accountability-action="mission-form">Add your first mission.</p>`
    : `${visibleTodayGoals.map(goal => `
        <article class="compact-item clickable-item ${goal.done ? "done" : ""}" data-goal-jump-index="${goal.originalIndex}">
          <div class="compact-main">
            <strong>${escapeHtml(goal.text)}</strong>
            <span class="compact-meta">${escapeHtml(goal.category)}${goal.priority ? " - Priority" : ""}</span>
          </div>
          <span>${goal.done ? "Done" : "Open"}</span>
        </article>
      `).join("")}${todayGoals.length > 2 ? `<p class="compact-meta mission-overflow-note">+${todayGoals.length - 2} more scheduled today.</p>` : ""}`;

  renderDailyCommandBriefing();
}

// Creates warning cards for the highest-risk gaps in the day/week.
function renderAccountability() {
  const alerts = [];
  const isFirstUse = !hasDashboardData();
  const weeklyPercent = getSuccessPercent(goals);
  const completed = getCompletedCount(goals);
  const incompletePriority = goals.filter(goal => goal.priority && !goal.done);
  const activeNonNegotiables = getActiveNonNegotiables();
  const habitPercent = activeNonNegotiables.length === 0
    ? 0
    : Math.round((getHabitCompletedCount(habitState.checks) / activeNonNegotiables.length) * 100);

  if (isFirstUse) {
    alerts.push({ text: "First mission not set yet. Add one clear target for this week.", action: "mission-form" });
    alerts.push({ text: "Daily baseline is waiting. Check one non-negotiable after you complete it.", action: "habits" });
    alerts.push({ text: "Your first review will turn this into a real weekly system.", action: "current-week" });
  }

  if (goals.length > 0 && completed === 0) {
    alerts.push({ text: "No missions are completed yet. Win the first one.", action: "first-incomplete" });
  }

  if (incompletePriority.length > 0) {
    alerts.push({
      text: `${incompletePriority.length} priority mission${incompletePriority.length === 1 ? " is" : "s are"} still incomplete.`,
      action: "priority-goal"
    });
  }

  if (goals.length > 0 && weeklyPercent < 50) {
    alerts.push({ text: "Weekly success is below 50%. Recover the week.", action: "current-week" });
  }

  if (!isFirstUse && habitPercent < 50) {
    alerts.push({ text: "Non-negotiables are below 50% for today.", action: "habits" });
  }

  const workoutHabit = activeNonNegotiables.find(item => item.title.toLowerCase() === "workout");
  const prayerHabit = activeNonNegotiables.find(item => item.title.toLowerCase() === "prayer");

  if (!isFirstUse && workoutHabit && !isHabitChecked(workoutHabit)) {
    alerts.push({ text: "Workout is not completed today.", action: "habits" });
  }

  if (!isFirstUse && prayerHabit && !isHabitChecked(prayerHabit)) {
    alerts.push({ text: "Prayer is not completed today.", action: "habits" });
  }

  accountabilityList.innerHTML = alerts.length === 0
    ? '<article class="alert-card good">No major issues. Stay locked in.</article>'
    : alerts.map(alert => `<article class="alert-card clickable-item" data-accountability-action="${escapeHtml(alert.action)}">${escapeHtml(alert.text)}</article>`).join("");
}

function getHistoryWeekEndDate(week) {
  const savedDate = week.savedDate && week.savedDate !== "Saved week" ? week.savedDate : "";
  const dateText = savedDate || String(week.week || "").replace(/^Week ending\s+/i, "");

  if (!dateText || dateText === "Imported old data") {
    return null;
  }

  const isoDateMatch = String(dateText).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoDateMatch) {
    return new Date(
      Number(isoDateMatch[1]),
      Number(isoDateMatch[2]) - 1,
      Number(isoDateMatch[3])
    );
  }

  const date = new Date(dateText);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatShortMonthDay(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}

function getHistoryWeekLabel(week, index) {
  const endDate = getHistoryWeekEndDate(week);

  if (!endDate) {
    return week.week || `Week ${index + 1}`;
  }

  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 6);

  return `Week of ${formatShortMonthDay(startDate)} \u2013 ${formatShortMonthDay(endDate)}`;
}

function getHistoryTrend(index) {
  if (index <= 0 || !history[index - 1]) {
    return {
      className: "flat",
      text: "New"
    };
  }

  const difference = Math.round((Number(history[index].percent) || 0) - (Number(history[index - 1].percent) || 0));

  if (difference > 0) {
    return {
      className: "up",
      text: `\u2191 +${difference}%`
    };
  }

  if (difference < 0) {
    return {
      className: "down",
      text: `\u2193 ${difference}%`
    };
  }

  return {
    className: "flat",
    text: "\u2192 0%"
  };
}

function toggleFullHistory() {
  showFullHistory = !showFullHistory;
  renderHistory();
}

function isGoldWeek(week) {
  return (Number(week.percent) || 0) >= 90;
}

function renderGoalQuarterControls() {
  const historyDates = history
    .map(getHistoryDate)
    .filter(Boolean);
  const options = getQuarterOptions(historyDates);

  renderQuarterSelect(goalsQuarterSelect, options, selectedGoalsQuarterKey);
  renderQuarterSelect(historyQuarterSelect, options, selectedHistoryQuarterKey);
}

function getHistoryForQuarter(quarterKey) {
  return history
    .map((week, index) => ({ ...week, originalIndex: index }))
    .filter(week => {
      const date = getHistoryDate(week);
      return date && getQuarterKey(date) === quarterKey;
    });
}

// Draws clickable weekly history cards.
function renderHistory() {
  historyList.innerHTML = "";
  renderGoalQuarterControls();

  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-state">No completed weeks saved yet.</p>';
    renderMonthlyScorecard();
    renderChart();
    return;
  }

  const visibleHistory = getHistoryForQuarter(selectedHistoryQuarterKey)
    .reverse();

  if (visibleHistory.length === 0) {
    historyList.innerHTML = `<p class="empty-state">No completed weeks saved for ${escapeHtml(getQuarterLabel(selectedHistoryQuarterKey))} yet.</p>`;
    showFullHistory = false;
    renderMonthlyScorecard();
    renderChart();
    return;
  }

  const recentHistory = showFullHistory ? visibleHistory : visibleHistory.slice(0, 5);

  recentHistory.forEach(week => {
    const originalIndex = week.originalIndex;
    const label = getHistoryWeekLabel(week, originalIndex);
    const trend = getHistoryTrend(originalIndex);
    const goldWeek = isGoldWeek(week);
    const review = week.review || {};
    const reviewHtml = review.wentWell || review.failed || review.improve
      ? `<p class="history-review">
          <strong>Review:</strong>
          ${escapeHtml(review.wentWell || "No win noted.")}
          / ${escapeHtml(review.failed || "No failure noted.")}
          / ${escapeHtml(review.improve || "No improvement noted.")}
        </p>`
      : "";

    const item = document.createElement("article");
    item.className = `history-item ${goldWeek ? "elite-week" : ""}`;
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.addEventListener("click", () => openHistoryWeek(originalIndex));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openHistoryWeek(originalIndex);
      }
    });
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(label)}</strong>
        <p class="history-meta">${week.completed}/${week.total} goals completed</p>
        ${reviewHtml}
      </div>
      <div class="history-score">
        <strong>${goldWeek ? `${week.percent}% \u2022 Gold Week` : `${week.percent}%`}</strong>
        <span class="history-trend ${trend.className}">${trend.text}</span>
      </div>
    `;

    historyList.appendChild(item);
  });

  if (visibleHistory.length > 5) {
    const button = document.createElement("button");
    button.className = "secondary-button action-button history-expand-button";
    button.type = "button";
    button.textContent = showFullHistory ? "Show Recent Weeks" : `View Older Weeks (${visibleHistory.length - 5})`;
    button.addEventListener("click", toggleFullHistory);
    historyList.appendChild(button);
  }

  renderMonthlyScorecard();
  renderChart();
}

function getHistoryDate(week) {
  return getHistoryWeekEndDate(week);
}

// Summarizes saved weekly results for the current month.
function renderMonthlyScorecard() {
  const now = new Date();
  const monthName = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const month = now.getMonth();
  const year = now.getFullYear();
  const monthWeeks = history.filter(week => {
    const date = getHistoryDate(week);
    return date && date.getMonth() === month && date.getFullYear() === year;
  });

  monthlyName.textContent = monthName;

  if (monthWeeks.length === 0) {
    monthlyScorecard.innerHTML = '<p class="empty-state">Not enough saved weekly history for this month yet.</p>';
    return;
  }

  const average = Math.round(monthWeeks.reduce((sum, week) => sum + week.percent, 0) / monthWeeks.length);
  const bestWeek = monthWeeks.reduce((best, week) => week.percent > best.percent ? week : best, monthWeeks[0]);
  const worstWeek = monthWeeks.reduce((worst, week) => week.percent < worst.percent ? week : worst, monthWeeks[0]);
  const goldWeekCount = monthWeeks.filter(isGoldWeek).length;

  monthlyScorecard.innerHTML = `
    <article class="scorecard-card">
      <span>Average Weekly Success</span>
      <strong>${average}%</strong>
    </article>
    <article class="scorecard-card">
      <span>Best Week</span>
      <strong>${escapeHtml(bestWeek.week)} (${bestWeek.percent}%)</strong>
    </article>
    <article class="scorecard-card">
      <span>Worst Week</span>
      <strong>${escapeHtml(worstWeek.week)} (${worstWeek.percent}%)</strong>
    </article>
    <article class="scorecard-card">
      <span>Weeks Tracked</span>
      <strong>${monthWeeks.length}</strong>
    </article>
    <article class="scorecard-card gold-week-summary">
      <span>Gold Weeks This Month</span>
      <strong>${goldWeekCount}</strong>
    </article>
  `;
}

function renderDailyQuote() {
  const quote = motivationalQuotes[getSavedMotivationalQuote()] || motivationalQuotes[getDefaultMotivationalQuoteIndex()];

  dailyQuote.textContent = quote.text;
  dailyQuoteAuthor.textContent = `- ${quote.author}`;
  dailyQuoteTheme.textContent = quote.theme;
}

function getDefaultMotivationalQuoteIndex() {
  const dateNumber = Number(getTodayString().replaceAll("-", ""));
  return dateNumber % motivationalQuotes.length;
}

function getSavedMotivationalQuote() {
  const savedQuote = readJson(motivationalQuoteKey, {});

  if (savedQuote.date === getTodayString() && Number.isInteger(savedQuote.index)) {
    return savedQuote.index;
  }

  return getDefaultMotivationalQuoteIndex();
}

function saveMotivationalQuoteIndex(index) {
  writeJson(motivationalQuoteKey, {
    date: getTodayString(),
    index: index
  });
}

function showNewDailyQuote() {
  const currentIndex = getSavedMotivationalQuote();
  let nextIndex = Math.floor(Math.random() * motivationalQuotes.length);

  if (motivationalQuotes.length > 1 && nextIndex === currentIndex) {
    nextIndex = (nextIndex + 1) % motivationalQuotes.length;
  }

  saveMotivationalQuoteIndex(nextIndex);
  renderDailyQuote();
}

function loadMotivationReflection() {
  const reflections = readJson(motivationReflectionKey, {});
  motivationReflectionInput.value = reflections[getTodayString()] || "";
}

function saveMotivationReflection() {
  const reflections = readJson(motivationReflectionKey, {});
  reflections[getTodayString()] = motivationReflectionInput.value.trim();
  writeJson(motivationReflectionKey, reflections);
}

function watchMotivationVideo() {
  window.open("https://www.youtube.com/results?search_query=short+motivational+video+discipline+focus", "_blank", "noopener");
}

function getDefaultBibleVerseIndex() {
  const dateNumber = Number(getTodayString().replaceAll("-", ""));
  return dateNumber % rsvceBibleReadings.length;
}

function getSavedBibleVerse() {
  const savedVerse = readJson(bibleVerseKey, {});

  if (savedVerse.date === getTodayString() && Number.isInteger(savedVerse.index)) {
    return savedVerse.index;
  }

  return getDefaultBibleVerseIndex();
}

function saveBibleVerseIndex(index) {
  writeJson(bibleVerseKey, {
    date: getTodayString(),
    index: index
  });
}

function renderBibleVerse(index = getSavedBibleVerse()) {
  const verse = rsvceBibleReadings[index] || rsvceBibleReadings[getDefaultBibleVerseIndex()];

  bibleVerseReference.textContent = `${verse.reference} (RSVCE)`;
  bibleVerseText.textContent = getBibleVerseText(verse);
  bibleVerseTheme.textContent = verse.theme || "faith";
}

function getBibleVerseText(verse) {
  const matchingExcerpt = bibleVerses.find(savedVerse => savedVerse.reference === verse.reference);

  if (matchingExcerpt && !/^RSVCE reading:/i.test(matchingExcerpt.text)) {
    return matchingExcerpt.text;
  }

  if (/^RSVCE reading:/i.test(verse.text || "")) {
    return `Today's Scripture: ${verse.reference}`;
  }

  return verse.text;
}

function showNewBibleVerse() {
  const currentIndex = getSavedBibleVerse();
  let nextIndex = Math.floor(Math.random() * rsvceBibleReadings.length);

  if (rsvceBibleReadings.length > 1 && nextIndex === currentIndex) {
    nextIndex = (nextIndex + 1) % rsvceBibleReadings.length;
  }

  saveBibleVerseIndex(nextIndex);
  renderBibleVerse(nextIndex);
}

function getPlanningGoalFormData(type) {
  if (type === "monthly") {
    return normalizePlanningGoal({
      text: monthlyGoalInput.value.trim(),
      target: monthlyTargetInput.value,
      category: monthlyCategoryInput.value,
      status: monthlyCompletedInput.checked ? "Completed" : monthlyStatusInput.value,
      completed: monthlyCompletedInput.checked,
      progress: monthlyCompletedInput.checked ? 100 : monthlyProgressInput.value,
      notes: monthlyNotesInput.value.trim()
    }, type);
  }

  if (type === "yearly") {
    return normalizePlanningGoal({
      text: yearlyGoalInput.value.trim(),
      target: yearlyTargetInput.value,
      category: yearlyCategoryInput.value,
      status: yearlyStatusInput.value,
      completed: yearlyStatusInput.value === "Completed",
      progress: yearlyStatusInput.value === "Completed" ? 100 : yearlyProgressInput.value,
      notes: yearlyNotesInput.value.trim()
    }, type);
  }

  return normalizePlanningGoal({
    text: longTermGoalInput.value.trim(),
    target: longTermTimeframeInput.value,
    category: longTermCategoryInput.value,
    status: longTermStatusInput.value,
    completed: longTermStatusInput.value === "Completed",
    progress: longTermStatusInput.value === "Completed" ? 100 : longTermProgressInput.value,
    why: longTermWhyInput.value.trim(),
    nextAction: longTermNextActionInput.value.trim()
  }, type);
}

function resetPlanningGoalForm(type) {
  if (type === "monthly") {
    monthlyGoalForm.reset();
    monthlyTargetInput.value = getCurrentMonthKey();
    monthlyGoalSubmitBtn.textContent = "Add Goal";
  } else if (type === "yearly") {
    yearlyGoalForm.reset();
    yearlyTargetInput.value = new Date().getFullYear();
    yearlyGoalSubmitBtn.textContent = "Add Goal";
  } else {
    longTermGoalForm.reset();
    longTermGoalSubmitBtn.textContent = "Add Goal";
  }

  editingPlanningGoal = null;
}

function addOrUpdatePlanningGoal(event, type) {
  event.preventDefault();
  const goal = getPlanningGoalFormData(type);

  if (!goal.text) {
    return;
  }

  if (editingPlanningGoal && editingPlanningGoal.type === type) {
    planningGoals[type][editingPlanningGoal.index] = goal;
  } else {
    planningGoals[type].push(goal);
  }

  savePlanningGoals();
  renderPlanningGoals();
  renderWelcomeState();
  resetPlanningGoalForm(type);
}

function getPlanningGoalStatusClass(status) {
  return toCssClassToken(status || "Not Started", "not-started");
}

function renderPlanningGoalCard(goal, type, index) {
  const isLongTerm = type === "longTerm";
  const targetLabel = type === "monthly" ? "Target Month" : type === "yearly" ? "Target Year" : "Timeframe";
  const completedText = goal.completed ? '<span class="finance-type-badge income">Completed</span>' : "";
  const notes = isLongTerm
    ? `
      <p><strong>Why:</strong> ${escapeHtml(goal.why || "Not added")}</p>
      <p><strong>Next action:</strong> ${escapeHtml(goal.nextAction || "Not added")}</p>
    `
    : `<p><strong>Notes:</strong> ${escapeHtml(goal.notes || "No notes")}</p>`;

  return `
    <article class="planning-goal-card">
      <div class="goal-top">
        <span class="day-label">${escapeHtml(targetLabel)}: ${escapeHtml(goal.target || "Not set")}</span>
        <span class="status-pill ${getPlanningGoalStatusClass(goal.status)}">${escapeHtml(goal.status)}</span>
      </div>
      <h3>${escapeHtml(goal.text)}</h3>
      <div class="badge-row">
        <span class="badge ${toCssClassToken(goal.category || "Personal", "personal")}">${escapeHtml(goal.category)}</span>
        ${completedText}
      </div>
      <div class="planning-progress">
        <div class="budget-line">
          <span>Progress</span>
          <strong>${goal.progress}%</strong>
        </div>
        <div class="budget-bar">
          <span style="width: ${goal.progress}%"></span>
        </div>
      </div>
      <div class="planning-notes">${notes}</div>
      <div class="card-actions">
        <button class="small-button secondary-button" type="button" data-planning-action="edit" data-planning-type="${escapeHtml(type)}" data-planning-index="${index}">Edit</button>
        <button class="small-button delete-button" type="button" data-planning-action="delete" data-planning-type="${escapeHtml(type)}" data-planning-index="${index}">Delete</button>
      </div>
    </article>
  `;
}

function renderPlanningGoalList(type, listElement) {
  const goalsForType = planningGoals[type];

  listElement.innerHTML = goalsForType.length === 0
    ? '<p class="empty-state">No goals added yet.</p>'
    : goalsForType.map((goal, index) => renderPlanningGoalCard(goal, type, index)).join("");
}

function renderPlanningDashboard() {
  const allGoals = [
    ...planningGoals.monthly,
    ...planningGoals.yearly,
    ...planningGoals.longTerm
  ];
  const totalProgress = allGoals.reduce((sum, goal) => sum + goal.progress, 0);

  monthlyGoalsCompleted.textContent = planningGoals.monthly.filter(goal => goal.completed || goal.status === "Completed").length;
  yearlyGoalsCompleted.textContent = planningGoals.yearly.filter(goal => goal.completed || goal.status === "Completed").length;
  longTermGoalsInProgress.textContent = planningGoals.longTerm.filter(goal => goal.status === "In Progress").length;
  overallGoalProgress.textContent = allGoals.length === 0 ? "0%" : `${Math.round(totalProgress / allGoals.length)}%`;
}

function renderPlanningGoals() {
  renderPlanningDashboard();
  renderPlanningGoalList("monthly", monthlyGoalList);
  renderPlanningGoalList("yearly", yearlyGoalList);
  renderPlanningGoalList("longTerm", longTermGoalList);
}

function editPlanningGoal(type, index) {
  const goal = planningGoals[type][index];

  if (!goal) {
    return;
  }

  editingPlanningGoal = { type: type, index: index };

  if (type === "monthly") {
    monthlyGoalInput.value = goal.text;
    monthlyTargetInput.value = goal.target;
    monthlyCategoryInput.value = goal.category;
    monthlyStatusInput.value = goal.status;
    monthlyCompletedInput.checked = goal.completed;
    monthlyProgressInput.value = goal.progress;
    monthlyNotesInput.value = goal.notes;
    monthlyGoalSubmitBtn.textContent = "Save Goal";
    monthlyGoalInput.focus();
  } else if (type === "yearly") {
    yearlyGoalInput.value = goal.text;
    yearlyTargetInput.value = goal.target;
    yearlyCategoryInput.value = goal.category;
    yearlyStatusInput.value = goal.status;
    yearlyProgressInput.value = goal.progress;
    yearlyNotesInput.value = goal.notes;
    yearlyGoalSubmitBtn.textContent = "Save Goal";
    yearlyGoalInput.focus();
  } else {
    longTermGoalInput.value = goal.text;
    longTermTimeframeInput.value = goal.target;
    longTermCategoryInput.value = goal.category;
    longTermStatusInput.value = goal.status;
    longTermProgressInput.value = goal.progress;
    longTermWhyInput.value = goal.why;
    longTermNextActionInput.value = goal.nextAction;
    longTermGoalSubmitBtn.textContent = "Save Goal";
    longTermGoalInput.focus();
  }

  switchTab("goals");
}

function deletePlanningGoal(type, index) {
  planningGoals[type].splice(index, 1);
  savePlanningGoals();
  renderPlanningGoals();

  if (editingPlanningGoal && editingPlanningGoal.type === type && editingPlanningGoal.index === index) {
    resetPlanningGoalForm(type);
  }
}

function renderJournalHistory() {
  const dates = Object.keys(journalEntries)
    .filter(date => date !== getTodayString())
    .sort()
    .reverse();

  journalHistorySelect.innerHTML = '<option value="">Select a past entry</option>';

  dates.forEach(date => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = getReadableDate(date);
    journalHistorySelect.appendChild(option);
  });

  renderSelectedJournalEntry();
}

function renderSelectedJournalEntry() {
  const date = journalHistorySelect.value;

  if (!date || !journalEntries[date]) {
    pastJournalEntry.textContent = "No past entry selected.";
    return;
  }

  const entry = journalEntries[date];
  pastJournalEntry.innerHTML = `
    <strong>${getReadableDate(date)}</strong><br>
    <strong>Rant:</strong> ${formatJournalAnswer(entry.rant || "Not answered")}<br>
    <strong>Won:</strong> ${formatJournalAnswer(entry.won || "Not answered")}<br>
    <strong>Failed:</strong> ${formatJournalAnswer(entry.failed || "Not answered")}<br>
    <strong>Tomorrow:</strong> ${formatJournalAnswer(entry.attack || "Not answered")}
  `;
}

function formatJournalAnswer(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function buildFinanceEntry(entry) {
  const allowedTypes = ["Income", "Spending", "Savings", "Transfer"];
  const matchedType = allowedTypes.find(typeName => typeName.toLowerCase() === String(entry.type || "").toLowerCase());
  const type = matchedType || "Spending";
  const note = entry.note || entry.description || entry.merchant || "";
  const category = type === "Spending" ? normalizeSpendingCategory(entry.category) : "";
  const needWant = type === "Spending" ? normalizeSpendingTag(entry.needWant || entry.tag || entry.needWantTag) : "";

  return {
    date: entry.date || getTodayString(),
    type: type,
    amount: roundMoney(Math.abs(getMoney(entry.amount))),
    note: note,
    category: category,
    needWant: needWant,
    imported: Boolean(entry.imported)
  };
}

function normalizeSpendingCategory(category) {
  const match = spendingCategories.find(item => item.toLowerCase() === String(category || "").toLowerCase());
  return match || "Other";
}

function normalizeSpendingTag(tag) {
  const match = spendingTags.find(item => item.toLowerCase() === String(tag || "").toLowerCase());
  return match || "Want";
}

function getSelectedFinanceMonth() {
  return financeMonthInput.value || getCurrentMonthKey();
}

function resetFinanceForm() {
  financeForm.reset();
  financeDateInput.value = getTodayString();
  financeTypeInput.value = "Income";
  financeCategoryInput.value = "Other";
  financeNeedWantInput.value = "Want";
  updateFinanceSpendingFields();
  financeSubmitBtn.textContent = "Save Entry";
  editingFinanceIndex = null;
}

function updateFinanceSpendingFields() {
  const isSpending = financeTypeInput.value === "Spending";
  financeCategoryInput.disabled = !isSpending;
  financeNeedWantInput.disabled = !isSpending;
}

function getCurrentMonthKey() {
  return getTodayString().slice(0, 7);
}

function getFinanceEntriesForMonth(monthKey) {
  return financeEntries
    .map((entry, index) => ({ ...entry, originalIndex: index }))
    .filter(entry => getMonthKey(entry.date) === monthKey)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
}

function getFinanceTotals(monthKey) {
  const totals = {
    Income: 0,
    Spending: 0,
    Savings: 0,
    Transfer: 0
  };

  getFinanceEntriesForMonth(monthKey).forEach(entry => {
    if (totals[entry.type] !== undefined) {
      totals[entry.type] = roundMoney(totals[entry.type] + entry.amount);
    }
  });

  return {
    income: roundMoney(totals.Income),
    spending: roundMoney(totals.Spending),
    savings: roundMoney(totals.Savings),
    transfers: roundMoney(totals.Transfer),
    remaining: roundMoney(totals.Income - totals.Spending - totals.Savings)
  };
}

function getSpendingBreakdown(monthKey) {
  const categoryTotals = Object.fromEntries(spendingCategories.map(category => [category, 0]));
  let needs = 0;
  let wants = 0;

  getFinanceEntriesForMonth(monthKey)
    .filter(entry => entry.type === "Spending")
    .forEach(entry => {
      const category = normalizeSpendingCategory(entry.category);
      const tag = normalizeSpendingTag(entry.needWant);

      categoryTotals[category] = roundMoney(categoryTotals[category] + entry.amount);

      if (tag === "Need") {
        needs = roundMoney(needs + entry.amount);
      } else {
        wants = roundMoney(wants + entry.amount);
      }
    });

  const total = roundMoney(needs + wants);

  return {
    categoryTotals: categoryTotals,
    needs: needs,
    wants: wants,
    total: total,
    wantsPercent: total > 0 ? Math.round((wants / total) * 100) : 0
  };
}

function getFinanceWeeks(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const monthStart = new Date(year, month - 1, 1);
  const monthEnd = new Date(year, month, 0);
  const firstWeekStart = new Date(monthStart);
  const firstWeekOffset = (firstWeekStart.getDay() + 6) % 7;
  firstWeekStart.setDate(firstWeekStart.getDate() - firstWeekOffset);

  const weeks = [];
  const cursor = new Date(firstWeekStart);

  while (cursor <= monthEnd) {
    const start = new Date(cursor);
    const end = new Date(cursor);
    end.setDate(end.getDate() + 6);

    weeks.push({
      start: start,
      end: end,
      startKey: getDateString(start),
      endKey: getDateString(end),
      label: `Week of ${formatShortMonthDay(start)} \u2013 ${formatShortMonthDay(end)}`
    });

    cursor.setDate(cursor.getDate() + 7);
  }

  const currentWeek = getCurrentFinanceWeek();
  const hasCurrentWeek = weeks.some(week => week.startKey === currentWeek.startKey);

  if (!hasCurrentWeek) {
    weeks.push(currentWeek);
    weeks.sort((a, b) => a.start - b.start);
  }

  return weeks;
}

function getCurrentFinanceWeek() {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startOffset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - startOffset);

  const end = new Date(start);
  end.setDate(end.getDate() + 6);

  return {
    start: start,
    end: end,
    startKey: getDateString(start),
    endKey: getDateString(end),
    label: `Week of ${formatShortMonthDay(start)} \u2013 ${formatShortMonthDay(end)}`
  };
}

function getDefaultFinanceWeekIndex(weeks) {
  const currentWeek = getCurrentFinanceWeek();
  const todayIndex = weeks.findIndex(week => week.startKey === currentWeek.startKey);

  return todayIndex >= 0 ? todayIndex : 0;
}

function getWeeklySpending(monthKey, totalSpending) {
  const weeklyBudget = roundMoney(totalSpending / 4.3);
  const weeks = getFinanceWeeks(monthKey).map(week => ({
    ...week,
    spent: 0,
    budget: weeklyBudget,
    purchases: []
  }));

  financeEntries
    .filter(entry => entry.type === "Spending")
    .forEach(entry => {
      const entryDate = getLocalDate(entry.date);
      const weekIndex = weeks.findIndex(week => entryDate >= week.start && entryDate <= week.end);

      if (weekIndex >= 0) {
        weeks[weekIndex].spent = roundMoney(weeks[weekIndex].spent + entry.amount);
        weeks[weekIndex].purchases.push(entry);
      }
    });

  return weeks.map(week => {
    const ratio = weeklyBudget > 0 ? week.spent / weeklyBudget : 0;
    const remaining = roundMoney(weeklyBudget - week.spent);
    const topPurchases = week.purchases
      .slice()
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);

    if (ratio > 1) {
      return {
        ...week,
        remaining: remaining,
        topPurchases: topPurchases,
        status: "over",
        statusLabel: "Over budget",
        message: "You are over your weekly budget"
      };
    }

    if (ratio >= 0.8) {
      return {
        ...week,
        remaining: remaining,
        topPurchases: topPurchases,
        status: "close",
        statusLabel: "Close",
        message: "You are close to your weekly limit"
      };
    }

    return {
      ...week,
      remaining: remaining,
      topPurchases: topPurchases,
      status: "under",
      statusLabel: "Under budget",
      message: "You are on track this week"
    };
  });
}

function renderFinance() {
  const monthKey = getSelectedFinanceMonth();
  const totals = getFinanceTotals(monthKey);
  const breakdown = getSpendingBreakdown(monthKey);
  const weeklySpending = getWeeklySpending(monthKey, totals.spending);

  if (selectedFinanceWeekIndex === null || selectedFinanceWeekIndex >= weeklySpending.length) {
    selectedFinanceWeekIndex = getDefaultFinanceWeekIndex(weeklySpending);
  }

  madeThisMonthValue.textContent = formatMoney(totals.income);
  spentThisMonthValue.textContent = formatMoney(totals.spending);
  savedThisMonthValue.textContent = formatMoney(totals.savings);
  summaryIncomeValue.textContent = formatMoney(totals.income);
  summarySpendingValue.textContent = formatMoney(totals.spending);
  summarySavingsValue.textContent = formatMoney(totals.savings);
  remainingMoneyValue.textContent = formatMoney(totals.remaining);
  transactionSummaryText.textContent = `Showing ${monthKey}. CSV imports separate income, spending, savings, and transfers.`;

  renderBudgetPlan(totals);
  renderMainMoneyStatus(totals);
  renderWeeklySpending(weeklySpending);
  renderSpendingBreakdown(breakdown, totals);
  renderFinanceEntryList(monthKey);
  renderFinanceSimpleChart(totals);
  renderSpendingCategoryChart(breakdown);
  renderWelcomeState();
  renderDailyCommandBriefing();
  renderDisciplineSystem();
  renderWeeklyReview();
}

function renderMainMoneyStatus(totals) {
  const targetSavings = roundMoney(totals.income * (savingsGoalPercent / 100));
  const spendingBudget = roundMoney(totals.income - targetSavings);
  const budgetLeft = roundMoney(spendingBudget - totals.spending);
  const primaryValue = totals.income > 0 ? budgetLeft : totals.remaining;
  const isOverPace = totals.income > 0 ? budgetLeft < 0 : totals.remaining < 0;

  mainMoneyStatusLabel.textContent = totals.income > 0 ? "Spending Budget Left" : "Remaining Money";
  mainMoneyStatusValue.textContent = formatMoney(Math.abs(primaryValue));
  mainMoneyStatusMessage.textContent = isOverPace
    ? "Slow down, you are over pace"
    : "You are within your monthly plan";
  mainMoneyStatusValue.classList.toggle("danger-text", isOverPace);
  mainMoneyStatusMessage.classList.toggle("danger-text", isOverPace);
  statusIncomeValue.textContent = formatMoney(totals.income);
  statusSpentValue.textContent = formatMoney(totals.spending);
  statusSavedValue.textContent = formatMoney(totals.savings);
}

function renderBudgetPlan(totals) {
  const targetSavings = roundMoney(totals.income * (savingsGoalPercent / 100));
  const spendingBudget = roundMoney(totals.income - targetSavings);

  savingsGoalInput.value = savingsGoalPercent > 0 ? savingsGoalPercent : "";
  savingsGoalValue.textContent = `${savingsGoalPercent}%`;
  targetSavingsValue.textContent = formatMoney(targetSavings);
  actualSavingsValue.textContent = formatMoney(totals.savings);
  spendingBudgetValue.textContent = formatMoney(spendingBudget);
  planRemainingValue.textContent = formatMoney(totals.remaining);

  const messages = [];

  if (totals.savings >= targetSavings && targetSavings > 0) {
    messages.push({ text: "Savings goal hit.", status: "good" });
  }

  if (totals.spending > spendingBudget && totals.income > 0) {
    messages.push({ text: "Over spending budget.", status: "warning" });
  }

  if (totals.remaining < 0) {
    messages.push({ text: "You used more than you made.", status: "danger" });
  } else {
    messages.push({ text: "You are within your monthly plan.", status: "good" });
  }

  budgetPlanMessages.innerHTML = messages.map(message => `
    <article class="plan-message ${toCssClassToken(message.status, "good")}">${escapeHtml(message.text)}</article>
  `).join("");
}

function renderWeeklySpending(weeks) {
  if (weeks.length === 0) {
    weeklySpendingCard.innerHTML = '<p class="empty-state">No weekly spending available.</p>';
    return;
  }

  const selectedWeek = weeks[selectedFinanceWeekIndex] || weeks[0];
  weeklySpendingSummary.textContent = selectedWeek.label;
  financeWeekSelect.innerHTML = weeks.map((week, index) => `
    <option value="${index}" ${index === selectedFinanceWeekIndex ? "selected" : ""}>${escapeHtml(week.label)}</option>
  `).join("");
  previousFinanceWeekBtn.disabled = selectedFinanceWeekIndex <= 0;
  nextFinanceWeekBtn.disabled = selectedFinanceWeekIndex >= weeks.length - 1;

  const remainingLabel = selectedWeek.remaining >= 0 ? "Remaining Budget" : "Amount Over Budget";
  const remainingAmount = Math.abs(selectedWeek.remaining);
  const today = new Date();
  const selectedWeekEndsTodayOrLater = selectedWeek.end >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const remainingDays = selectedWeekEndsTodayOrLater
    ? Math.max(1, Math.ceil((selectedWeek.end - today) / 86400000) + 1)
    : 0;
  const dailyAllowance = remainingDays > 0 && selectedWeek.remaining > 0
    ? roundMoney(selectedWeek.remaining / remainingDays)
    : 0;

  weeklySpendingCard.className = `weekly-spending-card ${toCssClassToken(selectedWeek.status, "under")}`;
  weeklySpendingCard.innerHTML = `
    <div class="weekly-spending-topline">
      <div>
        <strong>${escapeHtml(selectedWeek.label)}</strong>
        <p>${escapeHtml(selectedWeek.message)}</p>
      </div>
      <span>${escapeHtml(selectedWeek.statusLabel)}</span>
    </div>
    <div class="weekly-spending-money">
      <div>
        <span>Total Spent</span>
        <strong>${formatMoney(selectedWeek.spent)}</strong>
      </div>
      <div>
        <span>Weekly Budget</span>
        <strong>${formatMoney(selectedWeek.budget)}</strong>
      </div>
      <div>
        <span>${remainingLabel}</span>
        <strong>${formatMoney(remainingAmount)}</strong>
      </div>
    </div>
    <p class="weekly-allowance">${dailyAllowance > 0 ? `You can spend ${formatMoney(dailyAllowance)}/day for the rest of this week` : "No weekly allowance left"}</p>
  `;
}

function renderSpendingBreakdown(breakdown, totals) {
  needsSpendingValue.textContent = formatMoney(breakdown.needs);
  wantsSpendingValue.textContent = formatMoney(breakdown.wants);
  wantsPercentValue.textContent = `${breakdown.wantsPercent}%`;

  const categoryEntries = Object.entries(breakdown.categoryTotals)
    .sort((a, b) => b[1] - a[1]);

  spendingCategoryList.innerHTML = categoryEntries.map(([category, amount]) => `
    <article class="category-card">
      <span>${escapeHtml(category)}</span>
      <strong>${formatMoney(amount)}</strong>
    </article>
  `).join("");

  const biggestCategory = categoryEntries.find(([, amount]) => amount > 0);
  const targetSavings = roundMoney(totals.income * (savingsGoalPercent / 100));
  const spendingBudget = roundMoney(totals.income - targetSavings);
  const messages = [];

  if (breakdown.total > 0 && breakdown.wants > breakdown.needs) {
    messages.push({ text: "Most of your spending this month is Wants.", status: "warning" });
  }

  if (biggestCategory) {
    messages.push({ text: `${biggestCategory[0]} spending is your biggest category.`, status: "good" });
  }

  if (totals.income > 0 && totals.spending <= spendingBudget) {
    messages.push({ text: "You are still within your monthly savings plan.", status: "good" });
  }

  if (targetSavings > 0 && totals.savings >= targetSavings) {
    messages.push({ text: "Your savings goal is on track.", status: "good" });
  }

  if (messages.length === 0) {
    messages.push({ text: "Add spending entries to unlock smarter spending analysis.", status: "good" });
  }

  spendingInsightMessages.innerHTML = messages.slice(0, 1).map(message => `
    <article class="plan-message ${toCssClassToken(message.status, "good")}">${escapeHtml(message.text)}</article>
  `).join("");
}

function renderFinanceEntryList(monthKey) {
  const filter = financeFilterInput.value || "All";
  const sort = financeSortInput.value || "newest";
  const entries = getFinanceEntriesForMonth(monthKey)
    .filter(entry => filter === "All" || entry.type === filter)
    .sort((a, b) => {
      if (sort === "oldest") {
        return a.date.localeCompare(b.date) || a.originalIndex - b.originalIndex;
      }

      if (sort === "highest") {
        return b.amount - a.amount || b.date.localeCompare(a.date);
      }

      if (sort === "lowest") {
        return a.amount - b.amount || b.date.localeCompare(a.date);
      }

      return b.date.localeCompare(a.date) || b.originalIndex - a.originalIndex;
    });
  const visibleEntries = showAllFinanceEntries ? entries : entries.slice(0, 10);

  financeEntryList.innerHTML = visibleEntries.length === 0
    ? '<p class="empty-state">No finance entries for this month yet.</p>'
    : visibleEntries.map(entry => `
        <article class="compact-item finance-ledger-item ${toCssClassToken(entry.type, "spending")}">
          <div class="compact-main">
            <strong>${escapeHtml(entry.note || entry.type)}</strong>
            <span class="compact-meta">
              ${getReadableDate(entry.date)}
              <span class="finance-type-badge ${toCssClassToken(entry.type, "spending")}">${escapeHtml(entry.type)}</span>
              ${entry.type === "Spending" ? `<span class="finance-type-badge neutral">${escapeHtml(normalizeSpendingCategory(entry.category))}</span><span class="finance-type-badge neutral">${escapeHtml(normalizeSpendingTag(entry.needWant))}</span>` : ""}
              ${entry.imported ? "Imported" : ""}
            </span>
          </div>
          <div class="ledger-actions">
            <strong>${formatMoney(entry.amount)}</strong>
            <button class="small-button secondary-button" type="button" data-finance-action="edit" data-finance-index="${entry.originalIndex}">Edit</button>
            <button class="small-button delete-button" type="button" data-finance-action="delete" data-finance-index="${entry.originalIndex}">Delete</button>
          </div>
        </article>
      `).join("");

  toggleFinanceHistoryBtn.classList.toggle("hidden", entries.length <= 10);
  toggleFinanceHistoryBtn.textContent = showAllFinanceEntries ? "Show Less" : "Show More";
}

function renderFinanceSimpleChart(totals) {
  const canvas = document.getElementById("financeSimpleChart");

  if (typeof Chart === "undefined" || !canvas) {
    return;
  }

  const labels = ["Income", "Spending", "Savings"];
  const data = [totals.income, totals.spending, totals.savings];

  if (financeSimpleChart) {
    financeSimpleChart.data.datasets[0].data = data;
    financeSimpleChart.update();
    return;
  }

  financeSimpleChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Monthly Money",
        data: data,
        backgroundColor: ["rgba(66, 211, 146, 0.72)", "rgba(239, 71, 111, 0.72)", "rgba(88, 166, 255, 0.72)"],
        borderColor: ["#42d392", "#ef476f", "#58a6ff"],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#8f9caf",
            callback: value => formatMoney(value)
          },
          grid: {
            color: "rgba(143, 156, 175, 0.16)"
          }
        },
        x: {
          ticks: {
            color: "#8f9caf"
          },
          grid: {
            color: "rgba(143, 156, 175, 0.08)"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#eef4ff"
          }
        }
      }
    }
  });
}

function renderSpendingCategoryChart(breakdown) {
  const canvas = document.getElementById("spendingCategoryChart");

  if (typeof Chart === "undefined" || !canvas) {
    return;
  }

  const labels = spendingCategories;
  const data = labels.map(category => breakdown.categoryTotals[category] || 0);

  if (spendingCategoryChart) {
    spendingCategoryChart.data.datasets[0].data = data;
    spendingCategoryChart.update();
    return;
  }

  spendingCategoryChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Spending by Category",
        data: data,
        backgroundColor: "rgba(88, 166, 255, 0.68)",
        borderColor: "#58a6ff",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#8f9caf",
            callback: value => formatMoney(value)
          },
          grid: {
            color: "rgba(143, 156, 175, 0.16)"
          }
        },
        x: {
          ticks: {
            color: "#8f9caf"
          },
          grid: {
            color: "rgba(143, 156, 175, 0.08)"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#eef4ff"
          }
        }
      }
    }
  });
}

function renderChart() {
  const canvas = document.getElementById("progressChart");

  if (typeof Chart === "undefined" || !canvas) {
    return;
  }

  renderGoalQuarterControls();

  const chartWeeks = getHistoryForQuarter(selectedGoalsQuarterKey).map(week => ({
    label: getHistoryWeekLabel(week, week.originalIndex),
    percent: week.percent
  }));

  if (goals.length > 0 && selectedGoalsQuarterKey === getCurrentQuarterKey()) {
    chartWeeks.push({
      label: "Current Week",
      percent: getSuccessPercent(goals)
    });
  }

  const isDemoChart = chartWeeks.length === 0;
  const demoWeeks = [
    { label: "Demo Week 1", percent: 42 },
    { label: "Demo Week 2", percent: 58 },
    { label: "Demo Week 3", percent: 76 },
    { label: "Demo Week 4", percent: 88 }
  ];
  const activeWeeks = isDemoChart ? demoWeeks : chartWeeks;
  const activeLabels = activeWeeks.map(week => week.label);
  const activePercents = activeWeeks.map(week => week.percent);

  if (progressChart) {
    progressChart.data.labels = activeLabels;
    progressChart.data.datasets[0].data = activePercents;
    progressChart.data.datasets[0].label = isDemoChart ? "Demo path" : "Completion %";
    progressChart.data.datasets[0].borderDash = isDemoChart ? [6, 6] : [];
    progressChart.data.datasets[0].pointBackgroundColor = isDemoChart ? "#58a6ff" : "#ffd166";
    progressChart.update();
    return;
  }

  progressChart = new Chart(canvas, {
    type: "line",
    data: {
      labels: activeLabels,
      datasets: [{
        label: isDemoChart ? "Demo path" : "Completion %",
        data: activePercents,
        borderColor: "#42d392",
        backgroundColor: "rgba(66, 211, 146, 0.14)",
        borderDash: isDemoChart ? [6, 6] : [],
        fill: true,
        tension: 0.35,
        pointBackgroundColor: isDemoChart ? "#58a6ff" : "#ffd166",
        pointBorderColor: "#0d1117",
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: "#8f9caf",
            callback: value => `${value}%`
          },
          grid: {
            color: "rgba(143, 156, 175, 0.16)"
          }
        },
        x: {
          ticks: {
            color: "#8f9caf"
          },
          grid: {
            color: "rgba(143, 156, 175, 0.08)"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#eef4ff"
          }
        }
      }
    }
  });
}

function getCurrentWeekRange() {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const offset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - offset);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return {
    start,
    end,
    startKey: getDateString(start),
    endKey: getDateString(end),
    label: `Week of ${formatShortMonthDay(start)} to ${formatShortMonthDay(end)}`
  };
}

function getCurrentWeekKey() {
  return getCurrentWeekRange().startKey;
}

function isDateInCurrentWeek(dateString) {
  const range = getCurrentWeekRange();
  return isDateInRange(dateString, range);
}

function isDateInRange(dateString, range) {
  const date = getLocalDate(dateString);

  if (!range || !range.start || !range.end || !date || Number.isNaN(date.getTime())) {
    return false;
  }

  return date >= range.start && date <= range.end;
}

function getJournalEntriesForRange(range) {
  return Object.entries(journalEntries)
    .filter(([date, entry]) => isDateInRange(date, range) && entry && (entry.rant || entry.won || entry.failed || entry.attack))
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, entry]) => ({ date, ...entry }));
}

function getCurrentWeekJournalEntries() {
  return getJournalEntriesForRange(getCurrentWeekRange());
}

function getFinanceSummaryForRange(range) {
  const weeklyEntries = financeEntries.filter(entry => isDateInRange(entry.date, range));
  const income = weeklyEntries
    .filter(entry => entry.type === "Income")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const spending = weeklyEntries
    .filter(entry => entry.type === "Spending")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const savings = weeklyEntries
    .filter(entry => entry.type === "Savings")
    .reduce((sum, entry) => sum + entry.amount, 0);

  return {
    income: roundMoney(income),
    spending: roundMoney(spending),
    savings: roundMoney(savings),
    net: roundMoney(income - spending - savings),
    entries: weeklyEntries
  };
}

function getCurrentWeekFinanceSummary() {
  return getFinanceSummaryForRange(getCurrentWeekRange());
}

function getWeeklyReviewData() {
  const completedGoals = goals.filter(goal => goal.done);
  const missedGoals = goals.filter(goal => !goal.done);
  const activeNonNegotiables = getActiveNonNegotiables();
  const completedNonNegotiables = activeNonNegotiables.filter(item => isHabitChecked(item));
  const missedNonNegotiables = activeNonNegotiables.filter(item => !isHabitChecked(item));

  return {
    week: getCurrentWeekRange(),
    score: getSuccessPercent(goals),
    goals: goals.map(goal => ({ ...goal })),
    completedGoals,
    missedGoals,
    nonNegotiables: activeNonNegotiables.map(item => ({
      id: item.id,
      title: item.title,
      done: isHabitChecked(item),
      streak: getNonNegotiableStreak(item)
    })),
    completedNonNegotiables,
    missedNonNegotiables,
    finance: getCurrentWeekFinanceSummary(),
    journalEntries: getCurrentWeekJournalEntries(),
    manualReview: getReviewText()
  };
}

function getArchiveWeekRange(week, index) {
  const end = getHistoryWeekEndDate(week);

  if (!end) {
    return {
      start: null,
      end: null,
      startKey: `archive-${index + 1}`,
      endKey: `archive-${index + 1}`,
      label: getHistoryWeekLabel(week, index)
    };
  }

  const start = new Date(end);
  start.setDate(end.getDate() - 6);

  return {
    start,
    end,
    startKey: getDateString(start),
    endKey: getDateString(end),
    label: getHistoryWeekLabel(week, index)
  };
}

function getArchiveAiReviewKey(week, index) {
  const range = getArchiveWeekRange(week, index);
  return `archive:${range.startKey}:${range.endKey}`;
}

function getArchiveNonNegotiableSummary(range) {
  if (!range || !range.start || !range.end) {
    return [];
  }

  return Object.entries(habitHistory)
    .filter(([date]) => isDateInRange(date, range))
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, record]) => {
      const completed = Number(record.completed) || getHabitCompletedCount(record.checks || {});
      const total = Number(record.total) || getActiveNonNegotiables().length;

      return {
        title: `${date}: ${completed}/${total} completed`,
        done: total > 0 && completed === total
      };
    });
}

function getArchiveWeeklyReviewData(index) {
  const week = history[index];
  const range = getArchiveWeekRange(week, index);
  const archivedGoals = Array.isArray(week.goals) ? week.goals.map(goal => ({
    text: goal.text || "Untitled goal",
    category: goal.category || "Personal",
    day: goal.day || "No day",
    priority: Boolean(goal.priority),
    done: Boolean(goal.done)
  })) : [];
  const completedGoals = archivedGoals.filter(goal => goal.done);
  const missedGoals = archivedGoals.filter(goal => !goal.done);
  const nonNegotiables = getArchiveNonNegotiableSummary(range);

  return {
    week: range,
    score: Number(week.percent) || getSuccessPercent(archivedGoals),
    goals: archivedGoals,
    completedGoals,
    missedGoals,
    nonNegotiables,
    completedNonNegotiables: nonNegotiables.filter(item => item.done),
    missedNonNegotiables: nonNegotiables.filter(item => !item.done),
    finance: getFinanceSummaryForRange(range),
    journalEntries: getJournalEntriesForRange(range),
    manualReview: week.review || {}
  };
}

function formatGoalLine(goal) {
  return `- [${goal.done ? "done" : "missed"}] ${goal.text} (${goal.day}, ${goal.category}${goal.priority ? ", priority" : ""})`;
}

function formatJournalForPrompt(entry) {
  return [
    `Date: ${entry.date}`,
    entry.won ? `Won: ${entry.won}` : "",
    entry.failed ? `Failed: ${entry.failed}` : "",
    entry.attack ? `Tomorrow: ${entry.attack}` : "",
    entry.rant ? `Rant: ${entry.rant}` : ""
  ].filter(Boolean).join("\n");
}

function buildAiWeeklyPrompt(data = getWeeklyReviewData()) {
  const goalsText = data.goals.length > 0
    ? data.goals.map(formatGoalLine).join("\n")
    : "No weekly goals were added.";
  const nonNegotiablesText = data.nonNegotiables.length > 0
    ? data.nonNegotiables.map(item => `- [${item.done ? "done" : "missed"}] ${item.title}`).join("\n")
    : "No active non-negotiables.";
  const journalText = data.journalEntries.length > 0
    ? data.journalEntries.map(formatJournalForPrompt).join("\n\n")
    : "No journal entries this week.";

  return `Act as my disciplined but faith-centered coach. Review my weekly dashboard data. Be honest, direct, and practical. Tell me:
1. What I did well
2. Where I fell short
3. What pattern you notice
4. What I should change next week
5. My top 3 priorities for next week

Here is my weekly data:
Week: ${data.week.label}
Score: ${data.score}%
Completed goals: ${data.completedGoals.length}
Missed goals: ${data.missedGoals.length}

Weekly goals:
${goalsText}

Non-negotiables:
${nonNegotiablesText}

Finance summary:
- Income: ${formatMoney(data.finance.income)}
- Spending: ${formatMoney(data.finance.spending)}
- Savings: ${formatMoney(data.finance.savings)}
- Net: ${formatMoney(data.finance.net)}

Journal entries:
${journalText}`;
}

function renderWeeklyReview() {
  if (!weeklyReviewSummary) {
    return;
  }

  const data = getWeeklyReviewData();
  const savedReview = aiWeeklyReviews[getCurrentWeekKey()];
  const completedGoalItems = data.completedGoals.length > 0
    ? data.completedGoals.map(goal => `<li>${escapeHtml(goal.text)}</li>`).join("")
    : "<li>No completed goals yet.</li>";
  const missedGoalItems = data.missedGoals.length > 0
    ? data.missedGoals.map(goal => `<li>${escapeHtml(goal.text)}</li>`).join("")
    : "<li>No missed goals right now.</li>";
  const journalItems = data.journalEntries.length > 0
    ? data.journalEntries.slice(-4).map(entry => `<li><strong>${escapeHtml(entry.date)}:</strong> ${escapeHtml(entry.won || entry.failed || entry.attack || entry.rant)}</li>`).join("")
    : "<li>No journal entries this week.</li>";

  weeklyReviewSummary.innerHTML = `
    <div class="review-summary-grid">
      <article class="review-summary-card"><span>Week Score</span><strong>${data.score}%</strong></article>
      <article class="review-summary-card"><span>Completed Goals</span><strong>${data.completedGoals.length}</strong></article>
      <article class="review-summary-card"><span>Missed Goals</span><strong>${data.missedGoals.length}</strong></article>
      <article class="review-summary-card"><span>Non-Negotiables</span><strong>${data.completedNonNegotiables.length}/${data.nonNegotiables.length}</strong></article>
    </div>
    <div class="review-detail-grid">
      <article class="review-detail-card">
        <h3>Goals Completed</h3>
        <ul>${completedGoalItems}</ul>
      </article>
      <article class="review-detail-card">
        <h3>Goals Missed</h3>
        <ul>${missedGoalItems}</ul>
      </article>
      <article class="review-detail-card">
        <h3>Finance</h3>
        <ul>
          <li>Income: ${formatMoney(data.finance.income)}</li>
          <li>Spending: ${formatMoney(data.finance.spending)}</li>
          <li>Savings: ${formatMoney(data.finance.savings)}</li>
          <li>Net: ${formatMoney(data.finance.net)}</li>
        </ul>
      </article>
      <article class="review-detail-card">
        <h3>Recent Journal</h3>
        <ul>${journalItems}</ul>
      </article>
    </div>
  `;

  if (aiReviewOutput) {
    aiReviewOutput.textContent = savedReview && savedReview.text
      ? savedReview.text
      : "No AI review generated for this week yet.";
    aiReviewOutput.classList.toggle("empty-state", !(savedReview && savedReview.text));
  }
}

function setAiReviewStatus(message, status = "") {
  if (!aiReviewStatus) {
    return;
  }

  aiReviewStatus.textContent = message;
  aiReviewStatus.className = `ai-review-status ${status}`.trim();
}

function setArchiveAiReviewStatus(message, status = "") {
  const statusElement = document.getElementById("archiveAiReviewStatus");

  if (!statusElement) {
    return;
  }

  statusElement.textContent = message;
  statusElement.className = `ai-review-status ${status}`.trim();
}

function getAiReviewErrorMessage(error, response) {
  const details = error && error.message ? error.message : "";

  if (response && response.status === 401) {
    return "AI review is not authorized. Check OPENAI_API_KEY in Netlify, redeploy, or use Copy AI Prompt.";
  }

  if (response && response.status === 429) {
    return "AI review is temporarily rate limited. Try again in a minute or use Copy AI Prompt.";
  }

  if (response && response.status >= 500) {
    return "AI review service is unavailable right now. Use Copy AI Prompt as a fallback.";
  }

  if (details) {
    return `${details} Use Copy AI Prompt as a fallback.`;
  }

  return "AI review could not be generated. Check your connection or Netlify function logs, then try again.";
}

function setAiOutputLoading(outputElement, isLoading, message) {
  if (!outputElement) {
    return;
  }

  outputElement.setAttribute("aria-busy", String(isLoading));

  if (isLoading) {
    outputElement.textContent = message;
    outputElement.classList.add("empty-state");
  }
}

async function copyTextToClipboard(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  setAiReviewStatus(successMessage, "success");
}

async function copyAiPrompt() {
  await copyTextToClipboard(buildAiWeeklyPrompt(), "AI prompt copied.");
}

async function copyAiReview() {
  const savedReview = aiWeeklyReviews[getCurrentWeekKey()];
  const text = savedReview && savedReview.text ? savedReview.text : aiReviewOutput && aiReviewOutput.textContent;

  if (!text || text.includes("No AI review generated")) {
    setAiReviewStatus("No AI review to copy yet. Use Copy AI Prompt or generate a review first.", "error");
    return;
  }

  await copyTextToClipboard(text, "AI review copied.");
}

async function generateAiWeeklyReview() {
  if (!generateAiReviewBtn || !aiReviewOutput) {
    return;
  }

  const data = getWeeklyReviewData();
  const prompt = buildAiWeeklyPrompt(data);
  let response = null;

  generateAiReviewBtn.disabled = true;
  generateAiReviewBtn.textContent = "Generating...";
  setAiOutputLoading(aiReviewOutput, true, "Generating AI weekly review...");
  setAiReviewStatus("Generating weekly review. This can take a few seconds.", "");

  try {
    response = await fetch("/.netlify/functions/ai-weekly-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weeklyData: data, prompt })
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.review) {
      throw new Error(result.error || "AI review failed. Use Copy AI Prompt as a fallback.");
    }

    aiWeeklyReviews[getCurrentWeekKey()] = {
      weekStart: data.week.startKey,
      weekEnd: data.week.endKey,
      text: result.review,
      createdAt: new Date().toISOString()
    };
    saveAiWeeklyReviews();
    renderWeeklyReview();
    setAiReviewStatus("AI weekly review generated and saved for this week.", "success");
  } catch (error) {
    const savedReview = aiWeeklyReviews[getCurrentWeekKey()];
    aiReviewOutput.textContent = savedReview && savedReview.text
      ? savedReview.text
      : "AI review was not generated. Copy AI Prompt is ready as a manual fallback.";
    aiReviewOutput.classList.toggle("empty-state", !(savedReview && savedReview.text));
    setAiReviewStatus(getAiReviewErrorMessage(error, response), "error");
  } finally {
    generateAiReviewBtn.disabled = false;
    generateAiReviewBtn.textContent = "AI Review This Week";
    aiReviewOutput.setAttribute("aria-busy", "false");
  }
}

async function generateArchiveAiWeeklyReview(index) {
  const week = history[index];

  if (!week) {
    return;
  }

  const button = document.getElementById("generateArchiveAiReviewBtn");
  const output = document.getElementById("archiveAiReviewOutput");
  const data = getArchiveWeeklyReviewData(index);
  const prompt = buildAiWeeklyPrompt(data);
  let response = null;

  if (button) {
    button.disabled = true;
    button.textContent = "Generating...";
  }

  setAiOutputLoading(output, true, "Generating archived AI weekly review...");
  setArchiveAiReviewStatus("Generating archived weekly review. This can take a few seconds.", "");

  try {
    response = await fetch("/.netlify/functions/ai-weekly-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weeklyData: data, prompt })
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.review) {
      throw new Error(result.error || "AI review failed. Use Copy AI Prompt as a fallback.");
    }

    aiWeeklyReviews[getArchiveAiReviewKey(week, index)] = {
      weekStart: data.week.startKey,
      weekEnd: data.week.endKey,
      historyIndex: index,
      text: result.review,
      createdAt: new Date().toISOString()
    };
    saveAiWeeklyReviews();
    openHistoryWeek(index);
    setArchiveAiReviewStatus("AI review generated and saved for this archived week.", "success");
  } catch (error) {
    const savedReview = aiWeeklyReviews[getArchiveAiReviewKey(week, index)];
    const currentOutput = document.getElementById("archiveAiReviewOutput");

    if (currentOutput) {
      currentOutput.textContent = savedReview && savedReview.text
        ? savedReview.text
        : "AI review was not generated. Copy AI Prompt is ready as a manual fallback.";
      currentOutput.classList.toggle("empty-state", !(savedReview && savedReview.text));
      currentOutput.setAttribute("aria-busy", "false");
    }

    setArchiveAiReviewStatus(getAiReviewErrorMessage(error, response), "error");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "AI Review This Week";
    }

    if (output) {
      output.setAttribute("aria-busy", "false");
    }
  }
}

async function copyArchiveAiPrompt(index) {
  const week = history[index];

  if (!week) {
    return;
  }

  await copyTextToClipboard(buildAiWeeklyPrompt(getArchiveWeeklyReviewData(index)), "Archived week AI prompt copied.");
  setArchiveAiReviewStatus("Archived week AI prompt copied.", "success");
}

async function copyArchiveAiReview(index) {
  const week = history[index];
  const savedReview = week ? aiWeeklyReviews[getArchiveAiReviewKey(week, index)] : null;

  if (!savedReview || !savedReview.text) {
    setArchiveAiReviewStatus("No AI review to copy for this archived week yet.", "error");
    return;
  }

  await copyTextToClipboard(savedReview.text, "Archived week AI review copied.");
  setArchiveAiReviewStatus("Archived week AI review copied.", "success");
}

function updateStats() {
  const completed = getCompletedCount(goals);
  const total = goals.length;
  const percent = getSuccessPercent(goals);
  const streak = getCurrentStreak();
  const range = getCurrentWeekRange();

  if (currentWeekLabel) {
    currentWeekLabel.textContent = `${range.label} (${range.startKey} to ${range.endKey})`;
  }
  document.getElementById("successPercent").textContent = `${percent}%`;
  document.getElementById("completedCount").textContent = completed;
  document.getElementById("totalCount").textContent = total;
  document.getElementById("streakCount").textContent = `${streak} ${streak === 1 ? "week" : "weeks"}`;
  document.getElementById("weekSummary").textContent = total === 0
    ? "No missions yet."
    : `${completed} of ${total} missions completed`;
  renderWeeklyReview();
}

function switchTab(tabName) {
  tabButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  tabPanels.forEach(panel => {
    panel.classList.toggle("active", panel.id === `${tabName}Tab`);
  });

  if (tabName === "finance") {
    renderFinance();
  }

  if (tabName === "goals") {
    renderCategorySelects();
    renderCustomizationEditors();
    renderGoals();
    renderPlanningGoals();
  }

  if (tabName === "command") {
    renderBriefing();
    renderAccountability();
    renderHabits();
    renderChart();
  }

  if (tabName === "history") {
    renderChart();
  }
}

function addOrUpdateGoal(event) {
  event.preventDefault();

  if (isGoalSubmitLocked) {
    return;
  }

  isGoalSubmitLocked = true;
  setTimeout(() => {
    isGoalSubmitLocked = false;
  }, 0);

  const text = goalInput.value.trim();

  if (text === "") {
    return;
  }

  const goal = {
    text: text,
    category: categoryInput.value,
    day: dayInput.value,
    priority: priorityInput.checked,
    done: editingIndex === null ? false : goals[editingIndex].done
  };

  if (editingIndex === null) {
    goals.push(goal);
  } else {
    goals[editingIndex] = goal;
  }

  saveGoals();
  renderGoals();
  resetForm();
}

function addOrUpdateFinanceEntry(event) {
  event.preventDefault();
  const amount = getMoney(financeAmountInput.value);

  if (amount <= 0) {
    return;
  }

  const entry = buildFinanceEntry({
    date: financeDateInput.value || getTodayString(),
    type: financeTypeInput.value,
    amount: amount,
    note: financeNoteInput.value.trim(),
    category: financeCategoryInput.value,
    needWant: financeNeedWantInput.value
  });

  if (editingFinanceIndex === null) {
    financeEntries.push(entry);
  } else {
    financeEntries[editingFinanceIndex] = entry;
  }

  saveFinance();
  renderFinance();
  resetFinanceForm();
}

function editFinanceEntry(index) {
  const entry = financeEntries[index];

  if (!entry) {
    return;
  }

  editingFinanceIndex = index;
  financeDateInput.value = entry.date;
  financeTypeInput.value = entry.type;
  financeCategoryInput.value = entry.category || "Other";
  financeNeedWantInput.value = entry.needWant || "Want";
  financeAmountInput.value = entry.amount;
  financeNoteInput.value = entry.note;
  updateFinanceSpendingFields();
  financeSubmitBtn.textContent = "Save Changes";
  switchTab("finance");
  financeDateInput.focus();
}

function deleteFinanceEntry(index) {
  financeEntries.splice(index, 1);
  saveFinance();
  renderFinance();

  if (editingFinanceIndex === index) {
    resetFinanceForm();
  }
}

function saveSavingsGoalPercent(event) {
  event.preventDefault();
  savingsGoalPercent = Math.max(0, Math.min(100, getMoney(savingsGoalInput.value)));
  saveSavingsGoal();
  renderFinance();
}

function clearImportedTransactions() {
  const importedCount = financeEntries.filter(entry => entry.imported).length;

  if (importedCount === 0) {
    alert("There are no imported spending entries to delete.");
    return;
  }

  if (!confirm("Delete all imported spending entries? Manual finance entries will stay.")) {
    return;
  }

  financeEntries = financeEntries.filter(entry => !entry.imported);
  financeTransactions = [];
  saveFinance();
  saveTransactions();
  renderFinance();
}

function parseCsvLine(line) {
  const values = [];
  let currentValue = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index++) {
    const character = line[index];

    if (character === '"') {
      insideQuotes = !insideQuotes;
    } else if (character === "," && !insideQuotes) {
      values.push(currentValue.trim());
      currentValue = "";
    } else {
      currentValue += character;
    }
  }

  values.push(currentValue.trim());
  return values;
}

function parseMoneyText(value) {
  const text = String(value || "")
    .replaceAll("$", "")
    .replaceAll(",", "")
    .replace(/\s/g, "")
    .trim();

  if (text === "") {
    return 0;
  }

  if (/^\(.+\)$/.test(text)) {
    return -Math.abs(Number(text.slice(1, -1)) || 0);
  }

  return Number(text) || 0;
}

function parseDateText(value) {
  const text = String(value || "").trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text;
  }

  const date = new Date(text);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function categorizeTransaction(description) {
  const text = String(description || "").toLowerCase();

  if (/payroll|deposit|salary|income|venmo|zelle transfer in/.test(text)) return "Income";
  if (/transfer|payment|navy federal|nfcu/.test(text)) return "Transfer";

  return inferSpendingCategory(description);
}

function inferSpendingCategory(description) {
  const text = String(description || "").toLowerCase();

  if (/starbucks|chick|mcdonald|wendy|taco|restaurant|cafe|coffee|doordash|uber eats|food|pizza|chipotle|subway|dining|grocery|groceries|kroger|safeway/.test(text)) return "Food";
  if (/shell|exxon|bp|chevron|sheetz|wawa|gas|fuel/.test(text)) return "Gas";
  if (/netflix|spotify|hulu|disney|apple music|subscription|patreon|prime video|youtube premium/.test(text)) return "Subscriptions";
  if (/auto|car|mechanic|repair|oil change|tires|parking|dmv|registration|rental car/.test(text)) return "Car";
  if (/tuition|school|textbook|bookstore|course|college|university|canvas|student/.test(text)) return "School";
  if (/walmart|target|amazon|costco|sam'?s|store|market|best buy|ebay|shop|clothing|nike|adidas/.test(text)) return "Shopping";
  if (/movie|cinema|game|xbox|playstation|ticket|concert|entertainment|bowling|amusement/.test(text)) return "Entertainment";

  return "Other";
}

function isIgnoredTransferDescription(description) {
  const text = String(description || "").toLowerCase();

  return /transfer from checking|transfer to checking|transfer to savings|credit card payment received|internal transfer|account transfer|account transfers|transfer from|transfer to|account-to-account|account to account|card payment received/.test(text);
}

function isSavingsTransferDescription(description) {
  const text = String(description || "").toLowerCase();

  return /transfer to savings|savings transfer|transfer to investment|transfer to brokerage|roth|ira|investment account/.test(text);
}

function isRealIncomeDescription(description) {
  const text = String(description || "").toLowerCase();

  if (isIgnoredTransferDescription(text)) {
    return false;
  }

  return /mobile deposit|payroll|direct deposit|paycheck|refund|dividend|\bdeposit\b/.test(text);
}

function getFinanceTypeFromTransaction(transaction) {
  const description = transaction.description || transaction.merchant || "";

  if (isSavingsTransferDescription(description)) {
    return "Savings";
  }

  if (isIgnoredTransferDescription(description) || transaction.category === "Transfer") {
    return "Transfer";
  }

  if (transaction.type === "credit" && isRealIncomeDescription(description)) {
    return "Income";
  }

  if (transaction.type === "debit") {
    return "Spending";
  }

  return "Transfer";
}

function getSpendingCategoryFromTransaction(transaction) {
  const categoryText = String(transaction.category || "");
  const description = transaction.description || transaction.merchant || "";
  const combinedText = `${categoryText} ${description}`;

  if (/restaurant|dining|food|grocery|groceries/i.test(categoryText)) {
    return "Food";
  }

  if (/fuel|gas/i.test(categoryText)) {
    return "Gas";
  }

  if (/subscription|recurring/i.test(categoryText)) {
    return "Subscriptions";
  }

  if (/auto|car|parking/i.test(categoryText)) {
    return "Car";
  }

  if (/school|education|tuition/i.test(categoryText)) {
    return "School";
  }

  if (/shopping|merchandise|retail/i.test(categoryText)) {
    return "Shopping";
  }

  if (/entertainment|recreation/i.test(categoryText)) {
    return "Entertainment";
  }

  return inferSpendingCategory(combinedText);
}

function getRowValue(row, names) {
  const match = names.find(name => row[name] !== undefined && String(row[name]).trim() !== "");
  return match ? row[match] : "";
}

function inferTransactionType(amount, description, row) {
  const typeText = String(
    row.type ||
    row["transaction type"] ||
    row["credit debit indicator"] ||
    row["debit/credit"] ||
    row["dr/cr"] ||
    row["credit/debit"] ||
    ""
  ).toLowerCase();
  const text = `${typeText} ${description}`.toLowerCase();

  if (/\bcr\b|^credit$|credit/.test(typeText)) {
    return "credit";
  }

  if (/\bdr\b|^debit$|debit/.test(typeText)) {
    return "debit";
  }

  if (/purchase|withdrawal|withdraw|\bpos\b|card|ach debit|payment to/.test(text)) {
    return "debit";
  }

  if (/\bcr\b|credit|deposit|payroll|salary|refund|interest|payment from|ach credit/.test(text)) {
    return "credit";
  }

  if (amount < 0) {
    return "debit";
  }

  if (/payroll|deposit|salary|refund|interest|transfer in|zelle from|venmo from/.test(String(description).toLowerCase())) {
    return "credit";
  }

  return "debit";
}

function getTransactionAmount(row) {
  const amount = getRowValue(row, ["amount", "transaction amount", "amount ($)", "transaction"]);
  const debit = getRowValue(row, ["debit", "withdrawal", "withdrawal amount", "outflow", "withdrawals", "charges"]);
  const credit = getRowValue(row, ["credit", "deposit", "deposit amount", "inflow", "deposits", "payments"]);
  const description = row.description || row.memo || row.payee || row.name || row.merchant || row["transaction description"] || "";

  if (debit) {
    return {
      amount: Math.abs(parseMoneyText(debit)),
      type: "debit"
    };
  }

  if (credit) {
    return {
      amount: Math.abs(parseMoneyText(credit)),
      type: "credit"
    };
  }

  if (amount) {
    const parsedAmount = parseMoneyText(amount);

    return {
      amount: Math.abs(parsedAmount),
      type: inferTransactionType(parsedAmount, description, row)
    };
  }

  return {
    amount: 0,
    type: "credit"
  };
}

function parseTransactionCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line !== "");

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map(header => header.toLowerCase().trim());

  return lines.slice(1).map(line => {
    const values = parseCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });

    const description = row.description || row.memo || row.payee || row.name || row.merchant || row["transaction description"] || "Transaction";
    const parsedTransaction = getTransactionAmount(row);
    const category = row.category || categorizeTransaction(description);
    const isRealIncome = parsedTransaction.type === "credit" && isRealIncomeDescription(description);
    const isIgnoredTransfer = parsedTransaction.type === "credit" && isIgnoredTransferDescription(description);

    return {
      date: parseDateText(row.date || row["posting date"] || row["transaction date"] || row["effective date"]),
      description: description,
      merchant: row.merchant || row.payee || row.name || description,
      amount: parsedTransaction.amount,
      type: parsedTransaction.type,
      category: category,
      isRealIncome: isRealIncome,
      isIgnoredTransfer: isIgnoredTransfer
    };
  }).filter(transaction => transaction.date && transaction.amount > 0);
}

function parseMonthlyIncomeLog(text) {
  const entries = [];
  const blocks = text.split(/-{5,}/);

  blocks.forEach(block => {
    const dateMatch = block.match(/\b\d{4}-\d{2}-\d{2}\b/);
    const incomeMatch = block.match(/Income:\s*\$?([0-9,]+(?:\.\d+)?)/i);
    const expensesMatch = block.match(/Expenses:\s*\$?([0-9,]+(?:\.\d+)?)/i);

    if (!dateMatch || !incomeMatch || !expensesMatch) {
      return;
    }

    entries.push(buildFinanceEntry({
      date: dateMatch[0],
      type: "Income",
      amount: parseMoneyText(incomeMatch[1]),
      note: "Imported income log"
    }));

    entries.push(buildFinanceEntry({
      date: dateMatch[0],
      type: "Spending",
      amount: parseMoneyText(expensesMatch[1]),
      note: "Imported expense log"
    }));
  });

  return entries;
}

function parseFinanceCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line !== "");

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map(header => header.toLowerCase());

  return lines.slice(1).map(line => {
    const values = parseCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });

    const description = row.note || row.description || row.memo || row.payee || row.merchant || "Imported finance entry";
    const requestedType = row.type || row.category || "";
    const transferAmount = row.transfer || row.transfers;
    const expenseAmount = row.expenses || row.expense || row.spending || row.debit || row.withdrawal;
    const incomeAmount = row.income || row["monthly income"] || row.credit || row.deposit;
    const amount = row.amount || transferAmount || expenseAmount || incomeAmount;
    let type = requestedType;

    if (!type) {
      if (transferAmount || categorizeTransaction(description) === "Transfer") {
        type = "Transfer";
      } else if (expenseAmount) {
        type = "Spending";
      } else if (incomeAmount) {
        type = "Income";
      }
    }

    return buildFinanceEntry({
      date: row.date || row.month || row.day,
      type: type || "Income",
      amount: parseMoneyText(amount),
      note: description
    });
  }).filter(entry => entry.date);
}

function importFinanceCsv(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {
    const text = reader.result;
    const importedEntries = text.includes("Income:") && text.includes("Expenses:")
      ? parseMonthlyIncomeLog(text)
      : parseFinanceCsv(text);

    if (importedEntries.length === 0) {
      alert("No finance entries found. Use monthlyincome_log.txt or a CSV with date,income,expenses.");
      financeImportInput.value = "";
      return;
    }

    let importedCount = 0;

    importedEntries.forEach(entry => {
      const existingIndex = financeEntries.findIndex(savedEntry => savedEntry.date === entry.date);

      if (existingIndex >= 0) {
        financeEntries[existingIndex] = entry;
      } else {
        financeEntries.push(entry);
      }

      importedCount++;
    });

    saveFinance();
    renderFinance();
    alert(`Imported ${importedCount} finance entr${importedCount === 1 ? "y" : "ies"}.`);
    financeImportInput.value = "";
  };

  reader.readAsText(file);
}

function importTransactionsCsv(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {
    const importedTransactions = parseTransactionCsv(reader.result);
    const importedEntries = importedTransactions
      .map(transaction => buildFinanceEntry({
        date: transaction.date,
        type: getFinanceTypeFromTransaction(transaction),
        amount: transaction.amount,
        note: transaction.description || transaction.merchant || "Imported finance entry",
        category: getSpendingCategoryFromTransaction(transaction),
        needWant: "Want",
        imported: true
      }));

    if (importedEntries.length === 0) {
      alert("No transactions found. Try a CSV with date, description, and amount/debit/credit columns.");
      transactionImportInput.value = "";
      return;
    }

    let importedCount = 0;
    const importedTypeCounts = {
      Income: 0,
      Spending: 0,
      Savings: 0,
      Transfer: 0
    };

    importedEntries.forEach(entry => {
      const alreadyExists = financeEntries.some(savedEntry =>
        savedEntry.date === entry.date &&
        savedEntry.type === entry.type &&
        savedEntry.amount === entry.amount &&
        savedEntry.note === entry.note
      );

      if (!alreadyExists) {
        financeEntries.push(entry);
        importedCount++;
        importedTypeCounts[entry.type]++;
      }
    });

    financeTransactions = importedTransactions;
    saveFinance();
    saveTransactions();
    renderFinance();
    console.log("Finance CSV import complete", {
      totalRowsRead: importedTransactions.length,
      entriesAdded: importedCount,
      typeCounts: importedTypeCounts
    });
    alert(`Imported ${importedCount} finance entr${importedCount === 1 ? "y" : "ies"}.`);
    transactionImportInput.value = "";
  };

  reader.readAsText(file);
}

function toggleGoal(index) {
  goals[index].done = !goals[index].done;
  saveGoals();
  renderGoals();
}

function editGoal(index) {
  const goal = goals[index];

  editingIndex = index;
  goalInput.value = goal.text;
  renderCategorySelects();
  categoryInput.value = goal.category;
  dayInput.value = goal.day;
  priorityInput.checked = goal.priority;
  submitBtn.textContent = "Save Goal";
  goalInput.focus();
}

function deleteGoal(index) {
  goals.splice(index, 1);
  saveGoals();
  renderGoals();

  if (editingIndex === index) {
    resetForm();
  } else if (editingIndex !== null && index < editingIndex) {
    editingIndex--;
  }
}

function toggleHabit(habitId) {
  const item = nonNegotiables.find(nonNegotiable => nonNegotiable.id === habitId || nonNegotiable.title === habitId);

  if (!item) {
    return;
  }

  habitState.checks[item.id] = !isHabitChecked(item);
  delete habitState.checks[item.title];
  saveHabits();
  renderHabits();
}

function renderArchiveGoals(week) {
  if (!week.goals || week.goals.length === 0) {
    const message = week.imported
      ? "Goal details were not saved for this imported week."
      : "No goals were saved for this week.";

    return `<p class="empty-state">${escapeHtml(message)}</p>`;
  }

  return `
    <div class="archive-goal-list">
      ${week.goals.map(goal => {
        const categoryClass = toCssClassToken(goal.category || "Personal", "personal");
        const priorityBadge = goal.priority ? '<span class="badge priority-badge">Priority</span>' : "";
        const statusClass = goal.done ? "done" : "missed";
        const statusText = goal.done ? "&#10003;" : "X";

        return `
          <article class="archive-goal">
            <span class="archive-status ${statusClass}">${statusText}</span>
            <div>
              <div class="goal-top">
                <span class="day-label">${escapeHtml(goal.day || "No day")}</span>
                <div class="badge-row">
                  <span class="badge ${categoryClass}">${escapeHtml(goal.category || "Personal")}</span>
                  ${priorityBadge}
                </div>
              </div>
              <p>${escapeHtml(goal.text || "Untitled goal")}</p>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderArchiveReview(week) {
  const review = week.review || {};

  if (!review.wentWell && !review.failed && !review.improve) {
    return "";
  }

  return `
    <section class="archive-reflection">
      <h3>Reflection Notes</h3>
      <p><strong>What went well:</strong> ${escapeHtml(review.wentWell || "Not answered")}</p>
      <p><strong>What failed:</strong> ${escapeHtml(review.failed || "Not answered")}</p>
      <p><strong>What improves next week:</strong> ${escapeHtml(review.improve || "Not answered")}</p>
    </section>
  `;
}

function renderArchiveAiReview(week, index) {
  const savedReview = aiWeeklyReviews[getArchiveAiReviewKey(week, index)];
  const reviewText = savedReview && savedReview.text
    ? savedReview.text
    : "No AI review generated for this archived week yet.";

  return `
    <section class="archive-ai-review">
      <div class="archive-ai-heading">
        <div>
          <h3>AI Weekly Review</h3>
          <p>Generate a review for this saved week using its archived goals, reflection, and matching journal/finance entries when dates are available.</p>
        </div>
      </div>
      <div class="section-actions review-actions">
        <button id="generateArchiveAiReviewBtn" class="primary-button action-button" type="button" data-archive-ai-action="generate" data-history-index="${index}">AI Review This Week</button>
        <button class="secondary-button action-button" type="button" data-archive-ai-action="copy-prompt" data-history-index="${index}">Copy AI Prompt</button>
        <button class="secondary-button action-button" type="button" data-archive-ai-action="copy-review" data-history-index="${index}">Copy Review</button>
      </div>
      <p id="archiveAiReviewStatus" class="ai-review-status"></p>
      <article id="archiveAiReviewOutput" class="ai-review-output ${savedReview && savedReview.text ? "" : "empty-state"}">${escapeHtml(reviewText)}</article>
    </section>
  `;
}

function renderArchiveAccountabilityReport(index) {
  return `
    <details id="archiveAccountabilityReportPanel" class="archive-accountability-report accountability-report-panel">
      <summary>
        <span>
          <strong>Accountability Report</strong>
          <small>View, copy, or download this saved week's shareable report</small>
        </span>
      </summary>
      <div class="report-actions">
        <button class="primary-button action-button" type="button" data-report-action="preview" data-history-index="${index}">View Report</button>
        <button class="secondary-button action-button" type="button" data-report-action="copy" data-history-index="${index}">Copy Report</button>
        <button class="secondary-button action-button" type="button" data-report-action="download" data-history-index="${index}">Download Report</button>
      </div>
      <p class="helper-text report-helper">This report is designed to share. Private journal text is not included by default.</p>
      <p id="archiveReportStatus" class="ai-review-status"></p>
      <textarea id="archiveReportPreview" class="report-preview" rows="12" readonly placeholder="Preview this archived accountability report here."></textarea>
    </details>
  `;
}

function openHistoryWeek(index) {
  const week = history[index];

  if (!week) {
    return;
  }

  historyModalTitle.textContent = getHistoryWeekLabel(week, index);
  historyModalBody.innerHTML = `
    <div class="modal-stats">
      <div class="mini-stat">
        <span>Completed</span>
        <strong>${week.completed}/${week.total}</strong>
      </div>
      <div class="mini-stat">
        <span>Weekly Success</span>
        <strong>${week.percent}%</strong>
      </div>
      <div class="mini-stat">
        <span>Saved</span>
        <strong>${escapeHtml(week.savedDate || "Archive")}</strong>
      </div>
    </div>
    ${renderArchiveGoals(week)}
    ${renderArchiveReview(week)}
    ${renderArchiveAccountabilityReport(index)}
    ${renderArchiveAiReview(week, index)}
  `;

  historyModal.classList.remove("hidden");
}

function closeHistoryModal() {
  historyModal.classList.add("hidden");
}

function getWeekRangeFromStartKey(startKey) {
  const start = getLocalDate(startKey);

  if (!start || Number.isNaN(start.getTime())) {
    return getCurrentWeekRange();
  }

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return {
    start,
    end,
    startKey: getDateString(start),
    endKey: getDateString(end),
    label: `Week of ${formatShortMonthDay(start)} to ${formatShortMonthDay(end)}`
  };
}

function hasActiveWeekData(review = getReviewText()) {
  return goals.length > 0 || Boolean(review.wentWell || review.failed || review.improve);
}

function archiveCurrentWeek(weekRange = getCurrentWeekRange(), options = {}) {
  const review = getReviewText();

  if (hasActiveWeekData(review)) {
    const completed = getCompletedCount(goals);

    history.push({
      week: `Week ending ${weekRange.endKey}`,
      savedDate: weekRange.endKey,
      completed: completed,
      total: goals.length,
      percent: getSuccessPercent(goals),
      goals: copyGoalsForHistory(goals),
      review: {
        ...review,
        autoArchived: Boolean(options.automatic)
      }
    });

    saveHistory();
  }

  goals = [];
  habitState = {
    date: getTodayString(),
    checks: {}
  };

  saveGoals();
  saveHabits();
  clearReview();
  resetForm();
  renderGoals();
  renderHabits();
  renderHistory();
  renderWeeklyReview();
}

// Archives the full current week before clearing missions for a new week.
function startNewWeek() {
  archiveCurrentWeek(getCurrentWeekRange(), { automatic: false });
  writeStorage(activeWeekStartKey, getCurrentWeekKey());
}

function ensureActiveWeekStart() {
  const currentWeekKey = getCurrentWeekKey();
  const activeWeekKey = readStorage(activeWeekStartKey);

  if (!activeWeekKey) {
    writeStorage(activeWeekStartKey, currentWeekKey);
    return;
  }

  if (activeWeekKey !== currentWeekKey) {
    archiveCurrentWeek(getWeekRangeFromStartKey(activeWeekKey), { automatic: true });
    writeStorage(activeWeekStartKey, currentWeekKey);
  }
}

function parseOldLog(text) {
  const importedWeeks = [];
  const lines = text.split(/\r?\n/);
  const weekPattern = /Week of\s+(.+?)\s*\|\s*(\d+)%\s*\((\d+)\/(\d+)\)/i;

  lines.forEach(line => {
    const match = line.match(weekPattern);

    if (match) {
      importedWeeks.push({
        week: `Week of ${match[1].trim().replace(/\s+/g, " ")}`,
        savedDate: "Imported old data",
        percent: Number(match[2]),
        completed: Number(match[3]),
        total: Number(match[4]),
        goals: [],
        review: {},
        imported: true
      });
    }
  });

  return importedWeeks;
}

// Imports simple text-log history that only contains weekly percentages.
function importOldData(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {
    const importedWeeks = parseOldLog(reader.result);
    let addedCount = 0;

    importedWeeks.forEach(week => {
      const alreadyExists = history.some(savedWeek =>
        savedWeek.week === week.week &&
        savedWeek.percent === week.percent &&
        savedWeek.completed === week.completed &&
        savedWeek.total === week.total
      );

      if (!alreadyExists) {
        history.push(week);
        addedCount++;
      }
    });

    saveHistory();
    renderHistory();
    updateStats();
    alert(`Imported ${addedCount} week${addedCount === 1 ? "" : "s"} from old data.`);
    oldDataInput.value = "";
  };

  reader.readAsText(file);
}

// Saves every localStorage data bucket into one portable JSON file.
function exportBackup() {
  saveReview();
  saveJournal();

  const exportedAt = new Date();
  const timestamp = exportedAt
    .toISOString()
    .replace("T", "-")
    .replaceAll(":", "")
    .slice(0, 17);
  const backup = {
    app: "Discipline Dashboard",
    version: 3,
    financeMode: "simple-monthly-ledger",
    exportedAt: exportedAt.toISOString(),
    goals: readJson(goalsKey, goals),
    history: normalizeHistory(readJson(historyKey, history)),
    nonNegotiables: readJson(nonNegotiablesKey, nonNegotiables),
    goalCategories: readJson(goalCategoriesKey, goalCategories),
    habits: readJson(habitsKey, habitState),
    habitHistory: readJson(habitHistoryKey, habitHistory),
    journal: readJson(journalKey, journalEntries),
    journalEntries: readJson(journalKey, journalEntries),
    planningGoals: normalizePlanningGoals(readJson(planningGoalsKey, planningGoals)),
    finance: normalizeFinanceEntries(readJson(financeKey, financeEntries)),
    financeEntries: normalizeFinanceEntries(readJson(financeKey, financeEntries)),
    financeTransactions: normalizeTransactions(readJson(transactionKey, financeTransactions)),
    financeBudget: getMoney(readJson(financeBudgetKey, financeBudget)),
    savingsGoalPercent: getMoney(readJson(savingsGoalKey, savingsGoalPercent)),
    dailyMotivationalQuote: readJson(motivationalQuoteKey, {}),
    motivationReflections: readJson(motivationReflectionKey, {}),
    dailyBibleVerse: readJson(bibleVerseKey, {}),
    tabOrder: getSavedTabOrder(),
    activeWeekStart: readStorage(activeWeekStartKey, getCurrentWeekKey()),
    settings: readJson(settingsKey, userSettings),
    review: getReviewText(),
    aiWeeklyReviews: readJson(aiWeeklyReviewsKey, aiWeeklyReviews)
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `discipline-dashboard-backup-${timestamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  writeJson(backupExportedKey, true);
  renderWelcomeState();

  return link.download;
}

function emailBackup() {
  const filename = exportBackup();
  let backupEmail = userSettings.backupEmail || "";

  if (!backupEmail) {
    backupEmail = prompt("What email should backup reminders be addressed to?") || "";
    backupEmail = backupEmail.trim();

    if (!backupEmail) {
      return;
    }

    userSettings.backupEmail = backupEmail;
    saveSettings();
  }

  const subject = encodeURIComponent("Discipline Dashboard Backup");
  const body = encodeURIComponent(`Attach the backup file that was just downloaded.\n\nFile to attach: ${filename}\n\nThe app cannot attach files automatically, so add this JSON file from your Downloads folder before sending.`);

  alert(`Backup downloaded as ${filename}.\n\nYour email draft will open next. Attach this JSON file manually from your Downloads folder before sending.`);
  window.location.href = `mailto:${encodeURIComponent(backupEmail)}?subject=${subject}&body=${body}`;
}

// Restores a full backup, including the older goals.json tracker format.
function importBackup(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {
    let backup;

    try {
      backup = JSON.parse(reader.result);
    } catch {
      alert("That backup file is not valid JSON.");
      backupInput.value = "";
      return;
    }

    if (backup.current_week && Array.isArray(backup.history)) {
      backup = convertOldPythonData(backup);
    }

    if (!Array.isArray(backup.goals) || !Array.isArray(backup.history)) {
      alert("That backup file does not look like a Mission Tracker backup.");
      backupInput.value = "";
      return;
    }

    if (!confirm("Importing this backup will replace your current Mission Tracker data.")) {
      backupInput.value = "";
      return;
    }

    goals = backup.goals;
    history = normalizeHistory(backup.history);
    nonNegotiables = normalizeNonNegotiables(backup.nonNegotiables || backup.habitsList || null);
    habitHistory = backup.habitHistory || {};
    journalEntries = backup.journalEntries || backup.journal || {};
    planningGoals = normalizePlanningGoals(backup.planningGoals || {});
    goalCategories = normalizeGoalCategories(backup.goalCategories || null);
    aiWeeklyReviews = backup.aiWeeklyReviews || {};
    financeEntries = normalizeFinanceEntries(backup.financeEntries || backup.finance || []);
    financeTransactions = normalizeTransactions(backup.financeTransactions || backup.transactions || []);
    financeBudget = getMoney(backup.financeBudget);
    savingsGoalPercent = getMoney(backup.savingsGoalPercent || backup.savingsGoal || savingsGoalPercent);
    userSettings = backup.settings || {};
    saveTabOrder(Array.isArray(backup.tabOrder) ? backup.tabOrder : getSavedTabOrder());
    writeStorage(activeWeekStartKey, backup.activeWeekStart || getCurrentWeekKey());
    writeJson(motivationalQuoteKey, backup.dailyMotivationalQuote || {});
    writeJson(motivationReflectionKey, backup.motivationReflections || {});
    writeJson(bibleVerseKey, backup.dailyBibleVerse || {});
    if (backup.habits && backup.habits.date === getTodayString()) {
      habitState = backup.habits;
    } else {
      habitState = {
        date: getTodayString(),
        checks: {}
      };
    }

    writeJson(reviewKey, backup.review || {});
    saveGoals();
    saveHistory();
    saveNonNegotiables();
    saveGoalCategories();
    saveAiWeeklyReviews();
    saveHabits();
    saveHabitHistory();
    writeJson(journalKey, journalEntries);
    savePlanningGoals();
    saveFinance();
    saveTransactions();
    saveFinanceBudget();
    saveSavingsGoal();
    saveSettings();
    renderProfileTitle();
    applyTabOrder();
    loadReview();
    loadJournal();
    loadMotivationReflection();
    applyTheme();
    renderCategorySelects();
    renderCustomizationEditors();
    renderGoals();
    renderPlanningGoals();
    renderHabits();
    renderHistory();
    renderFinance();
    renderWeeklyReview();
    closeSetupModal();
    backupInput.value = "";
  };

  reader.readAsText(file);
}

function getNumericDatasetValue(element, name) {
  const value = Number(element.dataset[name]);
  return Number.isInteger(value) ? value : null;
}

function bindDelegatedClick(container, selector, handler) {
  if (!container) {
    return;
  }

  container.addEventListener("click", event => {
    const target = event.target.closest(selector);

    if (target && container.contains(target)) {
      handler(target, event);
    }
  });
}

bindDelegatedClick(tabOrderList, "[data-tab-order-index]", target => {
  const index = getNumericDatasetValue(target, "tabOrderIndex");
  const direction = getNumericDatasetValue(target, "tabOrderDirection");

  if (index !== null && direction !== null) {
    moveTabOrderItem(index, direction);
  }
});

bindDelegatedClick(goalList, "[data-goal-action]", target => {
  const index = getNumericDatasetValue(target, "goalIndex");

  if (index === null) {
    return;
  }

  if (target.dataset.goalAction === "toggle") {
    toggleGoal(index);
  } else if (target.dataset.goalAction === "edit") {
    editGoal(index);
  } else if (target.dataset.goalAction === "delete") {
    deleteGoal(index);
  }
});

[collapsedWeekPreview, todayMissionList].forEach(container => {
  bindDelegatedClick(container, "[data-goal-jump-index]", target => {
    const index = getNumericDatasetValue(target, "goalJumpIndex");

    if (index !== null) {
      goToGoal(index);
    }
  });
});

habitList.addEventListener("change", event => {
  const target = event.target;

  if (target.matches("[data-habit-id]")) {
    toggleHabit(target.dataset.habitId);
  }
});

bindDelegatedClick(accountabilityList, "[data-accountability-action]", target => {
  handleAccountabilityClick(target.dataset.accountabilityAction);
});

bindDelegatedClick(dailyRedFlags, "[data-accountability-action]", target => {
  handleAccountabilityClick(target.dataset.accountabilityAction);
});

bindDelegatedClick(todayMissionList, "[data-accountability-action]", target => {
  handleAccountabilityClick(target.dataset.accountabilityAction);
});

bindDelegatedClick(nonNegotiableEditorList, "[data-non-negotiable-action]", target => {
  const id = target.dataset.nonNegotiableId;

  if (target.dataset.nonNegotiableAction === "rename") {
    renameNonNegotiable(id);
  } else if (target.dataset.nonNegotiableAction === "delete") {
    deleteNonNegotiable(id);
  }
});

bindDelegatedClick(goalCategoryEditorList, "[data-goal-category-action]", target => {
  const id = target.dataset.goalCategoryId;

  if (target.dataset.goalCategoryAction === "rename") {
    renameGoalCategory(id);
  } else if (target.dataset.goalCategoryAction === "delete") {
    deleteGoalCategory(id);
  }
});

[monthlyGoalList, yearlyGoalList, longTermGoalList].forEach(container => {
  bindDelegatedClick(container, "[data-planning-action]", target => {
    const type = target.dataset.planningType;
    const index = getNumericDatasetValue(target, "planningIndex");

    if (!type || index === null) {
      return;
    }

    if (target.dataset.planningAction === "edit") {
      editPlanningGoal(type, index);
    } else if (target.dataset.planningAction === "delete") {
      deletePlanningGoal(type, index);
    }
  });
});

bindDelegatedClick(financeEntryList, "[data-finance-action]", target => {
  const index = getNumericDatasetValue(target, "financeIndex");

  if (index === null) {
    return;
  }

  if (target.dataset.financeAction === "edit") {
    editFinanceEntry(index);
  } else if (target.dataset.financeAction === "delete") {
    deleteFinanceEntry(index);
  }
});

bindDelegatedClick(historyModalBody, "[data-archive-ai-action]", target => {
  const index = getNumericDatasetValue(target, "historyIndex");

  if (index === null) {
    return;
  }

  if (target.dataset.archiveAiAction === "generate") {
    generateArchiveAiWeeklyReview(index);
  } else if (target.dataset.archiveAiAction === "copy-prompt") {
    copyArchiveAiPrompt(index);
  } else if (target.dataset.archiveAiAction === "copy-review") {
    copyArchiveAiReview(index);
  }
});

bindDelegatedClick(historyModalBody, "[data-report-action]", target => {
  const index = getNumericDatasetValue(target, "historyIndex");

  if (index === null) {
    return;
  }

  if (target.dataset.reportAction === "preview") {
    previewArchiveAccountabilityReport(index);
  } else if (target.dataset.reportAction === "copy") {
    copyArchiveAccountabilityReport(index);
  } else if (target.dataset.reportAction === "download") {
    downloadArchiveAccountabilityReport(index);
  }
});

goalForm.addEventListener("submit", addOrUpdateGoal);
nonNegotiableForm.addEventListener("submit", addNonNegotiable);
goalCategoryForm.addEventListener("submit", addGoalCategory);
monthlyGoalForm.addEventListener("submit", event => addOrUpdatePlanningGoal(event, "monthly"));
yearlyGoalForm.addEventListener("submit", event => addOrUpdatePlanningGoal(event, "yearly"));
longTermGoalForm.addEventListener("submit", event => addOrUpdatePlanningGoal(event, "longTerm"));
financeForm.addEventListener("submit", addOrUpdateFinanceEntry);
savingsGoalForm.addEventListener("submit", saveSavingsGoalPercent);
financeTypeInput.addEventListener("change", updateFinanceSpendingFields);
setupForm.addEventListener("submit", saveProfile);
themeSelect.addEventListener("change", saveTheme);
settingsBtn.addEventListener("click", openSetupModal);
customizeTabsBtn.addEventListener("click", openTabsFromSettings);
closeSetupModalBtn.addEventListener("click", closeSetupModal);
resetDashboardBtn.addEventListener("click", resetDashboard);
closeTabsModalBtn.addEventListener("click", closeTabsModal);
resetTabsBtn.addEventListener("click", resetTabOrder);
newQuoteBtn.addEventListener("click", showNewDailyQuote);
watchMotivationVideoBtn.addEventListener("click", watchMotivationVideo);
newBibleVerseBtn.addEventListener("click", showNewBibleVerse);
newWeekBtn.addEventListener("click", startNewWeek);
toggleWeekBtn.addEventListener("click", toggleCurrentWeekCollapsed);
if (generateAiReviewBtn) {
  generateAiReviewBtn.addEventListener("click", generateAiWeeklyReview);
}

if (copyAiPromptBtn) {
  copyAiPromptBtn.addEventListener("click", copyAiPrompt);
}

if (copyAiReviewBtn) {
  copyAiReviewBtn.addEventListener("click", copyAiReview);
}
previewReportBtn.addEventListener("click", previewAccountabilityReport);
copyReportBtn.addEventListener("click", copyAccountabilityReport);
downloadReportBtn.addEventListener("click", downloadAccountabilityReport);
tabButtons.forEach(button => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});
importOldDataBtn.addEventListener("click", () => {
  closeBackupDropdown();
  oldDataInput.click();
});
exportBackupBtn.addEventListener("click", () => {
  closeBackupDropdown();
  exportBackup();
});
emailBackupBtn.addEventListener("click", () => {
  closeBackupDropdown();
  emailBackup();
});
importBackupBtn.addEventListener("click", () => {
  closeBackupDropdown();
  backupInput.click();
});
importTransactionsBtn.addEventListener("click", () => transactionImportInput.click());
clearTransactionsBtn.addEventListener("click", clearImportedTransactions);
financeMonthInput.addEventListener("change", () => {
  showAllFinanceEntries = false;
  selectedFinanceWeekIndex = null;
  renderFinance();
});
financeFilterInput.addEventListener("change", () => {
  showAllFinanceEntries = false;
  renderFinanceEntryList(getSelectedFinanceMonth());
});
financeSortInput.addEventListener("change", () => {
  showAllFinanceEntries = false;
  renderFinanceEntryList(getSelectedFinanceMonth());
});
toggleFinanceHistoryBtn.addEventListener("click", () => {
  showAllFinanceEntries = !showAllFinanceEntries;
  renderFinanceEntryList(getSelectedFinanceMonth());
});
previousFinanceWeekBtn.addEventListener("click", () => {
  selectedFinanceWeekIndex = Math.max(0, (selectedFinanceWeekIndex || 0) - 1);
  renderFinance();
});
nextFinanceWeekBtn.addEventListener("click", () => {
  selectedFinanceWeekIndex = (selectedFinanceWeekIndex || 0) + 1;
  renderFinance();
});
financeWeekSelect.addEventListener("change", () => {
  selectedFinanceWeekIndex = Number(financeWeekSelect.value) || 0;
  renderFinance();
});
scrollWeekBtn.addEventListener("click", () => {
  switchTab("goals");

  if (shouldCollapseWeekByDefault()) {
    setCurrentWeekCollapsed(false);
  }

  setTimeout(() => scrollToElement(currentWeekSection), 80);
});
oldDataInput.addEventListener("change", importOldData);
backupInput.addEventListener("change", importBackup);
financeImportInput.addEventListener("change", importFinanceCsv);
transactionImportInput.addEventListener("change", importTransactionsCsv);
closeHistoryModalBtn.addEventListener("click", closeHistoryModal);
historyModal.addEventListener("click", event => {
  if (event.target === historyModal) {
    closeHistoryModal();
  }
});
tabsModal.addEventListener("click", event => {
  if (event.target === tabsModal) {
    closeTabsModal();
  }
});
setupModal.addEventListener("click", event => {
  if (event.target === setupModal) {
    closeSetupModal();
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeHistoryModal();
    closeTabsModal();
    closeSetupModal();
  }
});
wentWellInput.addEventListener("input", saveReview);
failedInput.addEventListener("input", saveReview);
improveInput.addEventListener("input", saveReview);
motivationReflectionInput.addEventListener("input", saveMotivationReflection);
journalRantInput.addEventListener("input", saveJournal);
journalWonInput.addEventListener("input", saveJournal);
journalFailedInput.addEventListener("input", saveJournal);
journalAttackInput.addEventListener("input", saveJournal);
journalHistorySelect.addEventListener("change", renderSelectedJournalEntry);
goalsQuarterSelect.addEventListener("change", () => {
  selectedGoalsQuarterKey = goalsQuarterSelect.value;
  renderChart();
});
historyQuarterSelect.addEventListener("change", () => {
  selectedHistoryQuarterKey = historyQuarterSelect.value;
  showFullHistory = false;
  renderHistory();
});
setInterval(() => {
  ensureActiveWeekStart();
  checkDailyHabitReset();
  renderHabits();
  loadJournal();
}, 60000);

loadReview();
ensureActiveWeekStart();
applyTheme();
loadJournal();
loadMotivationReflection();
applyTabOrder();
financeMonthInput.value = getCurrentMonthKey();
saveNonNegotiables();
saveGoalCategories();
renderCategorySelects();
renderCustomizationEditors();
resetPlanningGoalForm("monthly");
resetPlanningGoalForm("yearly");
resetPlanningGoalForm("longTerm");
resetFinanceForm();
showSetupIfNeeded();
saveHabits();
renderDailyQuote();
renderBibleVerse();
renderGoals();
renderPlanningGoals();
renderHabits();
renderHistory();
renderFinance();
renderWeeklyReview();
