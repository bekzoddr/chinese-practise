// Combined HSK Vocabulary Data
const hskVocabulary = {
  hsk1: [
    // People & Pronouns (人称代词)
    { hanzi: "我", pinyin: "wǒ", meaning: "I, me", category: "pronouns" },
    { hanzi: "我们", pinyin: "wǒmen", meaning: "we, us", category: "pronouns" },
    { hanzi: "你", pinyin: "nǐ", meaning: "you", category: "pronouns" },
    {
      hanzi: "你们",
      pinyin: "nǐmen",
      meaning: "you (plural)",
      category: "pronouns",
    },
    { hanzi: "他", pinyin: "tā", meaning: "he, him", category: "pronouns" },
    { hanzi: "她", pinyin: "tā", meaning: "she, her", category: "pronouns" },
    {
      hanzi: "他们",
      pinyin: "tāmen",
      meaning: "they (male/mixed)",
      category: "pronouns",
    },
    {
      hanzi: "她们",
      pinyin: "tāmen",
      meaning: "they (female)",
      category: "pronouns",
    },

    // Question Words (疑问词)
    { hanzi: "哪", pinyin: "nǎ", meaning: "which", category: "questions" },
    { hanzi: "哪儿", pinyin: "nǎr", meaning: "where", category: "questions" },
    { hanzi: "谁", pinyin: "shéi", meaning: "who", category: "questions" },
    { hanzi: "什么", pinyin: "shénme", meaning: "what", category: "questions" },
    { hanzi: "怎么", pinyin: "zěnme", meaning: "how", category: "questions" },
    {
      hanzi: "怎么样",
      pinyin: "zěnmeyàng",
      meaning: "how about / how is it",
      category: "questions",
    },
    {
      hanzi: "几",
      pinyin: "jǐ",
      meaning: "how many (small numbers)",
      category: "questions",
    },
    {
      hanzi: "多少",
      pinyin: "duōshao",
      meaning: "how many / how much",
      category: "questions",
    },

    // Numbers (数字)
    { hanzi: "一", pinyin: "yī", meaning: "1", category: "numbers" },
    { hanzi: "二", pinyin: "èr", meaning: "2", category: "numbers" },
    { hanzi: "三", pinyin: "sān", meaning: "3", category: "numbers" },
    { hanzi: "四", pinyin: "sì", meaning: "4", category: "numbers" },
    { hanzi: "五", pinyin: "wǔ", meaning: "5", category: "numbers" },
    { hanzi: "六", pinyin: "liù", meaning: "6", category: "numbers" },
    { hanzi: "七", pinyin: "qī", meaning: "7", category: "numbers" },
    { hanzi: "八", pinyin: "bā", meaning: "8", category: "numbers" },
    { hanzi: "九", pinyin: "jiǔ", meaning: "9", category: "numbers" },
    { hanzi: "十", pinyin: "shí", meaning: "10", category: "numbers" },

    // Measure Words (量词)
    {
      hanzi: "个",
      pinyin: "gè",
      meaning: "(general classifier)",
      category: "measure",
    },
    {
      hanzi: "本",
      pinyin: "běn",
      meaning: "classifier for books",
      category: "measure",
    },

    // Time Words (时间词)
    { hanzi: "今天", pinyin: "jīntiān", meaning: "today", category: "time" },
    {
      hanzi: "明天",
      pinyin: "míngtiān",
      meaning: "tomorrow",
      category: "time",
    },
    {
      hanzi: "昨天",
      pinyin: "zuótiān",
      meaning: "yesterday",
      category: "time",
    },
    { hanzi: "现在", pinyin: "xiànzài", meaning: "now", category: "time" },
    { hanzi: "上午", pinyin: "shàngwǔ", meaning: "morning", category: "time" },
    { hanzi: "中午", pinyin: "zhōngwǔ", meaning: "noon", category: "time" },
    { hanzi: "下午", pinyin: "xiàwǔ", meaning: "afternoon", category: "time" },
    { hanzi: "点", pinyin: "diǎn", meaning: "o'clock", category: "time" },
    { hanzi: "分钟", pinyin: "fēnzhōng", meaning: "minute", category: "time" },
    { hanzi: "岁", pinyin: "suì", meaning: "years old", category: "time" },
    { hanzi: "年", pinyin: "nián", meaning: "year", category: "time" },
    { hanzi: "月", pinyin: "yuè", meaning: "month", category: "time" },
    {
      hanzi: "号",
      pinyin: "hào",
      meaning: "day of month (date)",
      category: "time",
    },

    // Places (地点)
    {
      hanzi: "家",
      pinyin: "jiā",
      meaning: "home / family",
      category: "places",
    },
    { hanzi: "学校", pinyin: "xuéxiào", meaning: "school", category: "places" },
    {
      hanzi: "医院",
      pinyin: "yīyuàn",
      meaning: "hospital",
      category: "places",
    },
    { hanzi: "商店", pinyin: "shāngdiàn", meaning: "shop", category: "places" },
    {
      hanzi: "饭馆",
      pinyin: "fànguǎn",
      meaning: "restaurant",
      category: "places",
    },
    {
      hanzi: "北京",
      pinyin: "Běijīng",
      meaning: "Beijing",
      category: "places",
    },

    // Transportation (交通)
    {
      hanzi: "出租车",
      pinyin: "chūzūchē",
      meaning: "taxi",
      category: "transport",
    },
    {
      hanzi: "火车站",
      pinyin: "huǒchēzhàn",
      meaning: "train station",
      category: "transport",
    },
    {
      hanzi: "飞机",
      pinyin: "fēijī",
      meaning: "airplane",
      category: "transport",
    },

    // Food & Drinks (食物饮料)
    { hanzi: "水", pinyin: "shuǐ", meaning: "water", category: "food" },
    { hanzi: "茶", pinyin: "chá", meaning: "tea", category: "food" },
    { hanzi: "菜", pinyin: "cài", meaning: "dish / food", category: "food" },
    { hanzi: "米饭", pinyin: "mǐfàn", meaning: "rice", category: "food" },
    { hanzi: "苹果", pinyin: "píngguǒ", meaning: "apple", category: "food" },

    // Daily Objects (日常用品)
    { hanzi: "杯子", pinyin: "bēizi", meaning: "cup", category: "objects" },
    { hanzi: "钱", pinyin: "qián", meaning: "money", category: "objects" },
    {
      hanzi: "电脑",
      pinyin: "diànnǎo",
      meaning: "computer",
      category: "objects",
    },
    {
      hanzi: "电话",
      pinyin: "diànhuà",
      meaning: "telephone",
      category: "objects",
    },
    { hanzi: "电视", pinyin: "diànshì", meaning: "TV", category: "objects" },
    {
      hanzi: "电影",
      pinyin: "diànyǐng",
      meaning: "movie",
      category: "objects",
    },
    { hanzi: "桌子", pinyin: "zhuōzi", meaning: "table", category: "objects" },
    { hanzi: "椅子", pinyin: "yǐzi", meaning: "chair", category: "objects" },
    { hanzi: "衣服", pinyin: "yīfu", meaning: "clothes", category: "objects" },

    // Animals (动物)
    { hanzi: "猫", pinyin: "māo", meaning: "cat", category: "animals" },
    { hanzi: "狗", pinyin: "gǒu", meaning: "dog", category: "animals" },

    // Basic Verbs (动词)
    { hanzi: "是", pinyin: "shì", meaning: "to be", category: "verbs" },
    { hanzi: "有", pinyin: "yǒu", meaning: "to have", category: "verbs" },
    { hanzi: "在", pinyin: "zài", meaning: "at / in", category: "verbs" },
    { hanzi: "去", pinyin: "qù", meaning: "to go", category: "verbs" },
    { hanzi: "来", pinyin: "lái", meaning: "to come", category: "verbs" },
    { hanzi: "做", pinyin: "zuò", meaning: "to do", category: "verbs" },
    { hanzi: "吃", pinyin: "chī", meaning: "to eat", category: "verbs" },
    { hanzi: "喝", pinyin: "hē", meaning: "to drink", category: "verbs" },
    { hanzi: "看", pinyin: "kàn", meaning: "to look", category: "verbs" },
    { hanzi: "看见", pinyin: "kànjiàn", meaning: "to see", category: "verbs" },
    { hanzi: "听", pinyin: "tīng", meaning: "to listen", category: "verbs" },
    {
      hanzi: "说话",
      pinyin: "shuōhuà",
      meaning: "to speak",
      category: "verbs",
    },
    { hanzi: "读", pinyin: "dú", meaning: "to read", category: "verbs" },
    { hanzi: "写", pinyin: "xiě", meaning: "to write", category: "verbs" },
    { hanzi: "买", pinyin: "mǎi", meaning: "to buy", category: "verbs" },
    { hanzi: "坐", pinyin: "zuò", meaning: "to sit", category: "verbs" },
    {
      hanzi: "住",
      pinyin: "zhù",
      meaning: "to live / stay",
      category: "verbs",
    },
    {
      hanzi: "打电话",
      pinyin: "dǎ diànhuà",
      meaning: "to make a phone call",
      category: "verbs",
    },
    {
      hanzi: "开",
      pinyin: "kāi",
      meaning: "to open / to drive",
      category: "verbs",
    },
    { hanzi: "回", pinyin: "huí", meaning: "to return", category: "verbs" },
    { hanzi: "进", pinyin: "jìn", meaning: "to enter", category: "verbs" },
    { hanzi: "出", pinyin: "chū", meaning: "to exit", category: "verbs" },
    { hanzi: "到", pinyin: "dào", meaning: "to arrive", category: "verbs" },
    { hanzi: "走", pinyin: "zǒu", meaning: "to walk", category: "verbs" },
    { hanzi: "跑步", pinyin: "pǎobù", meaning: "to run", category: "verbs" },
    {
      hanzi: "想",
      pinyin: "xiǎng",
      meaning: "to want / think",
      category: "verbs",
    },
    {
      hanzi: "认识",
      pinyin: "rènshi",
      meaning: "to know (a person)",
      category: "verbs",
    },
    {
      hanzi: "知道",
      pinyin: "zhīdào",
      meaning: "to know (a fact)",
      category: "verbs",
    },
    {
      hanzi: "会",
      pinyin: "huì",
      meaning: "can (learned skill)",
      category: "verbs",
    },
    {
      hanzi: "能",
      pinyin: "néng",
      meaning: "can (ability)",
      category: "verbs",
    },
    { hanzi: "爱", pinyin: "ài", meaning: "to love", category: "verbs" },
    { hanzi: "喜欢", pinyin: "xǐhuan", meaning: "to like", category: "verbs" },
    {
      hanzi: "觉得",
      pinyin: "juéde",
      meaning: "to feel / think",
      category: "verbs",
    },
    {
      hanzi: "让",
      pinyin: "ràng",
      meaning: "to let / allow",
      category: "verbs",
    },

    // Adjectives (形容词)
    { hanzi: "大", pinyin: "dà", meaning: "big", category: "adjectives" },
    { hanzi: "小", pinyin: "xiǎo", meaning: "small", category: "adjectives" },
    { hanzi: "多", pinyin: "duō", meaning: "many", category: "adjectives" },
    { hanzi: "少", pinyin: "shǎo", meaning: "few", category: "adjectives" },
    { hanzi: "冷", pinyin: "lěng", meaning: "cold", category: "adjectives" },
    { hanzi: "热", pinyin: "rè", meaning: "hot", category: "adjectives" },
    { hanzi: "高", pinyin: "gāo", meaning: "tall", category: "adjectives" },
    {
      hanzi: "漂亮",
      pinyin: "piàoliang",
      meaning: "pretty",
      category: "adjectives",
    },
    { hanzi: "好", pinyin: "hǎo", meaning: "good", category: "adjectives" },
    { hanzi: "坏", pinyin: "huài", meaning: "bad", category: "adjectives" },
    { hanzi: "忙", pinyin: "máng", meaning: "busy", category: "adjectives" },
    {
      hanzi: "高兴",
      pinyin: "gāoxìng",
      meaning: "happy",
      category: "adjectives",
    },

    // Location Words (方位词)
    { hanzi: "里", pinyin: "lǐ", meaning: "inside", category: "locations" },
    {
      hanzi: "上",
      pinyin: "shàng",
      meaning: "on / above",
      category: "locations",
    },
    {
      hanzi: "下",
      pinyin: "xià",
      meaning: "below / under",
      category: "locations",
    },
    {
      hanzi: "前面",
      pinyin: "qiánmiàn",
      meaning: "in front",
      category: "locations",
    },
    {
      hanzi: "后面",
      pinyin: "hòumiàn",
      meaning: "behind",
      category: "locations",
    },

    // Time/Aspect Particles (语气词)
    {
      hanzi: "了",
      pinyin: "le",
      meaning: "completion particle",
      category: "particles",
    },
    {
      hanzi: "吗",
      pinyin: "ma",
      meaning: "question particle",
      category: "particles",
    },
    {
      hanzi: "呢",
      pinyin: "ne",
      meaning: "question particle",
      category: "particles",
    },
    {
      hanzi: "的",
      pinyin: "de",
      meaning: "possessive particle",
      category: "particles",
    },
    { hanzi: "和", pinyin: "hé", meaning: "and", category: "particles" },
    { hanzi: "很", pinyin: "hěn", meaning: "very", category: "particles" },
    { hanzi: "不", pinyin: "bù", meaning: "not", category: "particles" },
    {
      hanzi: "没",
      pinyin: "méi",
      meaning: "not (for 有 or past actions)",
      category: "particles",
    },

    // Other Useful Words (其他)
    { hanzi: "东西", pinyin: "dōngxi", meaning: "thing", category: "other" },
    { hanzi: "医生", pinyin: "yīshēng", meaning: "doctor", category: "other" },
    { hanzi: "朋友", pinyin: "péngyou", meaning: "friend", category: "other" },
    {
      hanzi: "学生",
      pinyin: "xuésheng",
      meaning: "student",
      category: "other",
    },
    { hanzi: "老师", pinyin: "lǎoshī", meaning: "teacher", category: "other" },
    {
      hanzi: "汉语",
      pinyin: "Hànyǔ",
      meaning: "Chinese language",
      category: "other",
    },
    { hanzi: "中国", pinyin: "Zhōngguó", meaning: "China", category: "other" },
    { hanzi: "事", pinyin: "shì", meaning: "matter/thing", category: "other" },
    { hanzi: "名字", pinyin: "míngzi", meaning: "name", category: "other" },
    { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "fruit", category: "other" },
    { hanzi: "天气", pinyin: "tiānqì", meaning: "weather", category: "other" },
    { hanzi: "星期", pinyin: "xīngqī", meaning: "week", category: "other" },
    { hanzi: "运动", pinyin: "yùndòng", meaning: "sports", category: "other" },
    { hanzi: "说", pinyin: "shuō", meaning: "to speak", category: "other" },
    {
      hanzi: "工作",
      pinyin: "gōngzuò",
      meaning: "work/job",
      category: "other",
    },
    { hanzi: "学习", pinyin: "xuéxí", meaning: "study", category: "other" },
    {
      hanzi: "饭店",
      pinyin: "fàndiàn",
      meaning: "restaurant",
      category: "other",
    },
    {
      hanzi: "时候",
      pinyin: "shíhou",
      meaning: "time/moment",
      category: "other",
    },
    { hanzi: "再见", pinyin: "zàijiàn", meaning: "goodbye", category: "other" },
    {
      hanzi: "请",
      pinyin: "qǐng",
      meaning: "please / invite",
      category: "other",
    },
  ],

  hsk2: [
    // People & Family
    { hanzi: "爸爸", pinyin: "bàba", meaning: "father", category: "family" },
    { hanzi: "妈妈", pinyin: "māma", meaning: "mother", category: "family" },
    { hanzi: "儿子", pinyin: "érzi", meaning: "son", category: "family" },
    { hanzi: "女儿", pinyin: "nǚ'ér", meaning: "daughter", category: "family" },
    {
      hanzi: "哥哥",
      pinyin: "gēge",
      meaning: "older brother",
      category: "family",
    },
    {
      hanzi: "弟弟",
      pinyin: "dìdi",
      meaning: "younger brother",
      category: "family",
    },
    {
      hanzi: "姐姐",
      pinyin: "jiějie",
      meaning: "older sister",
      category: "family",
    },
    {
      hanzi: "妹妹",
      pinyin: "mèimei",
      meaning: "younger sister",
      category: "family",
    },
    { hanzi: "男人", pinyin: "nánrén", meaning: "man", category: "people" },
    { hanzi: "女人", pinyin: "nǚrén", meaning: "woman", category: "people" },
    { hanzi: "孩子", pinyin: "háizi", meaning: "child", category: "people" },
    {
      hanzi: "先生",
      pinyin: "xiānsheng",
      meaning: "Mr., husband",
      category: "people",
    },
    {
      hanzi: "小姐",
      pinyin: "xiǎojiě",
      meaning: "Miss, young lady",
      category: "people",
    },

    // Time & Dates
    { hanzi: "小时", pinyin: "xiǎoshí", meaning: "hour", category: "time" },
    { hanzi: "时间", pinyin: "shíjiān", meaning: "time", category: "time" },
    { hanzi: "早上", pinyin: "zǎoshang", meaning: "morning", category: "time" },
    {
      hanzi: "晚上",
      pinyin: "wǎnshang",
      meaning: "evening, night",
      category: "time",
    },
    { hanzi: "去年", pinyin: "qùnián", meaning: "last year", category: "time" },
    {
      hanzi: "明年",
      pinyin: "míngnián",
      meaning: "next year",
      category: "time",
    },
    {
      hanzi: "后来",
      pinyin: "hòulái",
      meaning: "afterwards",
      category: "time",
    },
    {
      hanzi: "以前",
      pinyin: "yǐqián",
      meaning: "before, previously",
      category: "time",
    },
    {
      hanzi: "以后",
      pinyin: "yǐhòu",
      meaning: "after, later",
      category: "time",
    },

    // Places & Locations
    { hanzi: "公司", pinyin: "gōngsī", meaning: "company", category: "places" },
    { hanzi: "房间", pinyin: "fángjiān", meaning: "room", category: "places" },
    {
      hanzi: "门口",
      pinyin: "ménkǒu",
      meaning: "doorway, entrance",
      category: "places",
    },
    {
      hanzi: "旁边",
      pinyin: "pángbiān",
      meaning: "side, beside",
      category: "locations",
    },
    {
      hanzi: "左边",
      pinyin: "zuǒbian",
      meaning: "left side",
      category: "locations",
    },
    {
      hanzi: "右边",
      pinyin: "yòubian",
      meaning: "right side",
      category: "locations",
    },
    {
      hanzi: "外面",
      pinyin: "wàimiàn",
      meaning: "outside",
      category: "locations",
    },
    {
      hanzi: "里面",
      pinyin: "lǐmiàn",
      meaning: "inside",
      category: "locations",
    },

    // Food & Drink
    { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "fruit", category: "food" },
    { hanzi: "牛奶", pinyin: "niúnǎi", meaning: "milk", category: "food" },
    { hanzi: "面包", pinyin: "miànbāo", meaning: "bread", category: "food" },
    { hanzi: "鸡蛋", pinyin: "jīdàn", meaning: "egg", category: "food" },
    { hanzi: "肉", pinyin: "ròu", meaning: "meat", category: "food" },
    { hanzi: "鱼", pinyin: "yú", meaning: "fish", category: "food" },
    { hanzi: "糖", pinyin: "táng", meaning: "sugar, candy", category: "food" },
    { hanzi: "盐", pinyin: "yán", meaning: "salt", category: "food" },

    // Daily Objects
    { hanzi: "门", pinyin: "mén", meaning: "door", category: "objects" },
    { hanzi: "窗", pinyin: "chuāng", meaning: "window", category: "objects" },
    { hanzi: "床", pinyin: "chuáng", meaning: "bed", category: "objects" },
    {
      hanzi: "灯",
      pinyin: "dēng",
      meaning: "light, lamp",
      category: "objects",
    },
    { hanzi: "钥匙", pinyin: "yàoshi", meaning: "key", category: "objects" },
    { hanzi: "纸", pinyin: "zhǐ", meaning: "paper", category: "objects" },
    { hanzi: "笔", pinyin: "bǐ", meaning: "pen", category: "objects" },
    {
      hanzi: "包",
      pinyin: "bāo",
      meaning: "bag, package",
      category: "objects",
    },

    // Clothing
    { hanzi: "鞋", pinyin: "xié", meaning: "shoes", category: "clothing" },
    {
      hanzi: "帽子",
      pinyin: "màozi",
      meaning: "hat, cap",
      category: "clothing",
    },
    { hanzi: "裤子", pinyin: "kùzi", meaning: "pants", category: "clothing" },
    { hanzi: "裙子", pinyin: "qúnzi", meaning: "skirt", category: "clothing" },

    // Colors
    { hanzi: "红", pinyin: "hóng", meaning: "red", category: "colors" },
    { hanzi: "黄", pinyin: "huáng", meaning: "yellow", category: "colors" },
    { hanzi: "蓝", pinyin: "lán", meaning: "blue", category: "colors" },
    { hanzi: "白", pinyin: "bái", meaning: "white", category: "colors" },
    { hanzi: "黑", pinyin: "hēi", meaning: "black", category: "colors" },
    { hanzi: "绿", pinyin: "lǜ", meaning: "green", category: "colors" },

    // Numbers & Measure Words
    { hanzi: "百", pinyin: "bǎi", meaning: "hundred", category: "numbers" },
    { hanzi: "千", pinyin: "qiān", meaning: "thousand", category: "numbers" },
    { hanzi: "零", pinyin: "líng", meaning: "zero", category: "numbers" },
    {
      hanzi: "块",
      pinyin: "kuài",
      meaning: "yuan (money), piece",
      category: "measure",
    },
    {
      hanzi: "元",
      pinyin: "yuán",
      meaning: "yuan (formal)",
      category: "measure",
    },
    {
      hanzi: "件",
      pinyin: "jiàn",
      meaning: "item (for clothes, matters)",
      category: "measure",
    },
    {
      hanzi: "张",
      pinyin: "zhāng",
      meaning: "sheet (for paper, tickets)",
      category: "measure",
    },
    {
      hanzi: "只",
      pinyin: "zhī",
      meaning: "measure for animals, one of a pair",
      category: "measure",
    },

    // Verbs
    { hanzi: "帮助", pinyin: "bāngzhù", meaning: "to help", category: "verbs" },
    { hanzi: "告诉", pinyin: "gàosu", meaning: "to tell", category: "verbs" },
    { hanzi: "问", pinyin: "wèn", meaning: "to ask", category: "verbs" },
    { hanzi: "回答", pinyin: "huídá", meaning: "to answer", category: "verbs" },
    {
      hanzi: "说话",
      pinyin: "shuōhuà",
      meaning: "to speak",
      category: "verbs",
    },
    { hanzi: "等", pinyin: "děng", meaning: "to wait", category: "verbs" },
    {
      hanzi: "送",
      pinyin: "sòng",
      meaning: "to give, send",
      category: "verbs",
    },
    { hanzi: "给", pinyin: "gěi", meaning: "to give", category: "verbs" },
    { hanzi: "找", pinyin: "zhǎo", meaning: "to look for", category: "verbs" },
    { hanzi: "用", pinyin: "yòng", meaning: "to use", category: "verbs" },
    { hanzi: "玩", pinyin: "wán", meaning: "to play", category: "verbs" },
    { hanzi: "跳舞", pinyin: "tiàowǔ", meaning: "to dance", category: "verbs" },
    { hanzi: "唱歌", pinyin: "chànggē", meaning: "to sing", category: "verbs" },
    { hanzi: "游泳", pinyin: "yóuyǒng", meaning: "to swim", category: "verbs" },
    {
      hanzi: "运动",
      pinyin: "yùndòng",
      meaning: "to exercise",
      category: "verbs",
    },
    { hanzi: "休息", pinyin: "xiūxi", meaning: "to rest", category: "verbs" },
    {
      hanzi: "睡觉",
      pinyin: "shuìjiào",
      meaning: "to sleep",
      category: "verbs",
    },
    {
      hanzi: "起床",
      pinyin: "qǐchuáng",
      meaning: "to get up",
      category: "verbs",
    },
    {
      hanzi: "洗澡",
      pinyin: "xǐzǎo",
      meaning: "to bathe, shower",
      category: "verbs",
    },
    { hanzi: "结婚", pinyin: "jiéhūn", meaning: "to marry", category: "verbs" },
    { hanzi: "工作", pinyin: "gōngzuò", meaning: "to work", category: "verbs" },
    { hanzi: "学习", pinyin: "xuéxí", meaning: "to study", category: "verbs" },
    { hanzi: "教", pinyin: "jiāo", meaning: "to teach", category: "verbs" },
    { hanzi: "开始", pinyin: "kāishǐ", meaning: "to begin", category: "verbs" },
    { hanzi: "结束", pinyin: "jiéshù", meaning: "to end", category: "verbs" },
    { hanzi: "完", pinyin: "wán", meaning: "to finish", category: "verbs" },
    {
      hanzi: "懂",
      pinyin: "dǒng",
      meaning: "to understand",
      category: "verbs",
    },
    {
      hanzi: "觉得",
      pinyin: "juéde",
      meaning: "to feel, think",
      category: "verbs",
    },
    { hanzi: "希望", pinyin: "xīwàng", meaning: "to hope", category: "verbs" },
    { hanzi: "要", pinyin: "yào", meaning: "to want, need", category: "verbs" },
    { hanzi: "可以", pinyin: "kěyǐ", meaning: "can, may", category: "verbs" },
    { hanzi: "应该", pinyin: "yīnggāi", meaning: "should", category: "verbs" },
    {
      hanzi: "可能",
      pinyin: "kěnéng",
      meaning: "may, might",
      category: "verbs",
    },

    // Adjectives
    { hanzi: "快", pinyin: "kuài", meaning: "fast", category: "adjectives" },
    { hanzi: "慢", pinyin: "màn", meaning: "slow", category: "adjectives" },
    { hanzi: "新", pinyin: "xīn", meaning: "new", category: "adjectives" },
    { hanzi: "旧", pinyin: "jiù", meaning: "old", category: "adjectives" },
    { hanzi: "长", pinyin: "cháng", meaning: "long", category: "adjectives" },
    { hanzi: "短", pinyin: "duǎn", meaning: "short", category: "adjectives" },
    { hanzi: "远", pinyin: "yuǎn", meaning: "far", category: "adjectives" },
    { hanzi: "近", pinyin: "jìn", meaning: "near", category: "adjectives" },
    {
      hanzi: "贵",
      pinyin: "guì",
      meaning: "expensive",
      category: "adjectives",
    },
    {
      hanzi: "便宜",
      pinyin: "piányi",
      meaning: "cheap",
      category: "adjectives",
    },
    {
      hanzi: "难",
      pinyin: "nán",
      meaning: "difficult",
      category: "adjectives",
    },
    {
      hanzi: "容易",
      pinyin: "róngyì",
      meaning: "easy",
      category: "adjectives",
    },
    { hanzi: "累", pinyin: "lèi", meaning: "tired", category: "adjectives" },
    { hanzi: "饿", pinyin: "è", meaning: "hungry", category: "adjectives" },
    { hanzi: "渴", pinyin: "kě", meaning: "thirsty", category: "adjectives" },
    { hanzi: "困", pinyin: "kùn", meaning: "sleepy", category: "adjectives" },
    { hanzi: "忙", pinyin: "máng", meaning: "busy", category: "adjectives" },
    {
      hanzi: "安静",
      pinyin: "ānjìng",
      meaning: "quiet",
      category: "adjectives",
    },
    {
      hanzi: "干净",
      pinyin: "gānjìng",
      meaning: "clean",
      category: "adjectives",
    },
    { hanzi: "脏", pinyin: "zāng", meaning: "dirty", category: "adjectives" },
    { hanzi: "对", pinyin: "duì", meaning: "correct", category: "adjectives" },
    { hanzi: "错", pinyin: "cuò", meaning: "wrong", category: "adjectives" },
    {
      hanzi: "真",
      pinyin: "zhēn",
      meaning: "real, true",
      category: "adjectives",
    },
    { hanzi: "假", pinyin: "jiǎ", meaning: "fake", category: "adjectives" },
    {
      hanzi: "重要",
      pinyin: "zhòngyào",
      meaning: "important",
      category: "adjectives",
    },
    {
      hanzi: "特别",
      pinyin: "tèbié",
      meaning: "special",
      category: "adjectives",
    },
    {
      hanzi: "一样",
      pinyin: "yíyàng",
      meaning: "same",
      category: "adjectives",
    },
    {
      hanzi: "不同",
      pinyin: "bùtóng",
      meaning: "different",
      category: "adjectives",
    },

    // Adverbs & Connectives
    { hanzi: "很", pinyin: "hěn", meaning: "very", category: "adverbs" },
    { hanzi: "太", pinyin: "tài", meaning: "too", category: "adverbs" },
    { hanzi: "最", pinyin: "zuì", meaning: "most", category: "adverbs" },
    { hanzi: "更", pinyin: "gèng", meaning: "more", category: "adverbs" },
    { hanzi: "还", pinyin: "hái", meaning: "still, also", category: "adverbs" },
    { hanzi: "就", pinyin: "jiù", meaning: "just, then", category: "adverbs" },
    { hanzi: "才", pinyin: "cái", meaning: "only then", category: "adverbs" },
    { hanzi: "一起", pinyin: "yìqǐ", meaning: "together", category: "adverbs" },
    { hanzi: "也", pinyin: "yě", meaning: "also", category: "adverbs" },
    { hanzi: "都", pinyin: "dōu", meaning: "all, both", category: "adverbs" },
    { hanzi: "只", pinyin: "zhǐ", meaning: "only", category: "adverbs" },
    {
      hanzi: "已经",
      pinyin: "yǐjīng",
      meaning: "already",
      category: "adverbs",
    },
    {
      hanzi: "正在",
      pinyin: "zhèngzài",
      meaning: "in the process of",
      category: "adverbs",
    },
    {
      hanzi: "总是",
      pinyin: "zǒngshì",
      meaning: "always",
      category: "adverbs",
    },
    {
      hanzi: "有时候",
      pinyin: "yǒu shíhou",
      meaning: "sometimes",
      category: "adverbs",
    },
    {
      hanzi: "然后",
      pinyin: "ránhòu",
      meaning: "then, after that",
      category: "connectives",
    },
    {
      hanzi: "因为",
      pinyin: "yīnwèi",
      meaning: "because",
      category: "connectives",
    },
    {
      hanzi: "所以",
      pinyin: "suǒyǐ",
      meaning: "so, therefore",
      category: "connectives",
    },
    {
      hanzi: "但是",
      pinyin: "dànshì",
      meaning: "but",
      category: "connectives",
    },
    { hanzi: "如果", pinyin: "rúguǒ", meaning: "if", category: "connectives" },

    // Question Words
    {
      hanzi: "为什么",
      pinyin: "wèishénme",
      meaning: "why",
      category: "questions",
    },
    { hanzi: "怎么", pinyin: "zěnme", meaning: "how", category: "questions" },
    { hanzi: "哪", pinyin: "nǎ", meaning: "which", category: "questions" },
    {
      hanzi: "哪个",
      pinyin: "nǎge",
      meaning: "which one",
      category: "questions",
    },
    {
      hanzi: "哪些",
      pinyin: "nǎxiē",
      meaning: "which ones",
      category: "questions",
    },

    // Other Important Words
    { hanzi: "东西", pinyin: "dōngxi", meaning: "thing", category: "other" },
    {
      hanzi: "事情",
      pinyin: "shìqing",
      meaning: "matter, affair",
      category: "other",
    },
    {
      hanzi: "问题",
      pinyin: "wèntí",
      meaning: "question, problem",
      category: "other",
    },
    { hanzi: "意思", pinyin: "yìsi", meaning: "meaning", category: "other" },
    { hanzi: "名字", pinyin: "míngzi", meaning: "name", category: "other" },
    { hanzi: "钱", pinyin: "qián", meaning: "money", category: "other" },
    { hanzi: "号", pinyin: "hào", meaning: "number, date", category: "other" },
    {
      hanzi: "身体",
      pinyin: "shēntǐ",
      meaning: "body, health",
      category: "other",
    },
    {
      hanzi: "生活",
      pinyin: "shēnghuó",
      meaning: "life, living",
      category: "other",
    },
    {
      hanzi: "生日",
      pinyin: "shēngrì",
      meaning: "birthday",
      category: "other",
    },
    { hanzi: "礼物", pinyin: "lǐwù", meaning: "gift", category: "other" },
    { hanzi: "故事", pinyin: "gùshi", meaning: "story", category: "other" },
    { hanzi: "新闻", pinyin: "xīnwén", meaning: "news", category: "other" },
    { hanzi: "音乐", pinyin: "yīnyuè", meaning: "music", category: "other" },
    { hanzi: "电影", pinyin: "diànyǐng", meaning: "movie", category: "other" },
    { hanzi: "天气", pinyin: "tiānqì", meaning: "weather", category: "other" },
    { hanzi: "季节", pinyin: "jìjié", meaning: "season", category: "other" },
    {
      hanzi: "春天",
      pinyin: "chūntiān",
      meaning: "spring",
      category: "seasons",
    },
    {
      hanzi: "夏天",
      pinyin: "xiàtiān",
      meaning: "summer",
      category: "seasons",
    },
    {
      hanzi: "秋天",
      pinyin: "qiūtiān",
      meaning: "autumn",
      category: "seasons",
    },
    {
      hanzi: "冬天",
      pinyin: "dōngtiān",
      meaning: "winter",
      category: "seasons",
    },

    // Directions
    { hanzi: "东", pinyin: "dōng", meaning: "east", category: "directions" },
    { hanzi: "西", pinyin: "xī", meaning: "west", category: "directions" },
    { hanzi: "南", pinyin: "nán", meaning: "south", category: "directions" },
    { hanzi: "北", pinyin: "běi", meaning: "north", category: "directions" },

    // Transportation
    {
      hanzi: "汽车",
      pinyin: "qìchē",
      meaning: "car",
      category: "transportation",
    },
    {
      hanzi: "公共汽车",
      pinyin: "gōnggòng qìchē",
      meaning: "bus",
      category: "transportation",
    },
    {
      hanzi: "地铁",
      pinyin: "dìtiě",
      meaning: "subway",
      category: "transportation",
    },
    {
      hanzi: "自行车",
      pinyin: "zìxíngchē",
      meaning: "bicycle",
      category: "transportation",
    },

    // Countries & Languages
    {
      hanzi: "英国",
      pinyin: "Yīngguó",
      meaning: "England, UK",
      category: "countries",
    },
    {
      hanzi: "美国",
      pinyin: "Měiguó",
      meaning: "America, USA",
      category: "countries",
    },
    {
      hanzi: "法国",
      pinyin: "Fǎguó",
      meaning: "France",
      category: "countries",
    },
    {
      hanzi: "德国",
      pinyin: "Déguó",
      meaning: "Germany",
      category: "countries",
    },
    { hanzi: "日本", pinyin: "Rìběn", meaning: "Japan", category: "countries" },
    {
      hanzi: "韩国",
      pinyin: "Hánguó",
      meaning: "Korea",
      category: "countries",
    },
    {
      hanzi: "英语",
      pinyin: "Yīngyǔ",
      meaning: "English",
      category: "languages",
    },
    { hanzi: "法语", pinyin: "Fǎyǔ", meaning: "French", category: "languages" },
    {
      hanzi: "日语",
      pinyin: "Rìyǔ",
      meaning: "Japanese",
      category: "languages",
    },
    {
      hanzi: "韩语",
      pinyin: "Hányǔ",
      meaning: "Korean",
      category: "languages",
    },

    // School & Study
    {
      hanzi: "学校",
      pinyin: "xuéxiào",
      meaning: "school",
      category: "education",
    },
    {
      hanzi: "大学",
      pinyin: "dàxué",
      meaning: "university",
      category: "education",
    },
    {
      hanzi: "教室",
      pinyin: "jiàoshì",
      meaning: "classroom",
      category: "education",
    },
    { hanzi: "考试", pinyin: "kǎoshì", meaning: "exam", category: "education" },
    {
      hanzi: "成绩",
      pinyin: "chéngjì",
      meaning: "grade, score",
      category: "education",
    },

    // Shopping
    {
      hanzi: "商店",
      pinyin: "shāngdiàn",
      meaning: "shop, store",
      category: "shopping",
    },
    {
      hanzi: "超市",
      pinyin: "chāoshì",
      meaning: "supermarket",
      category: "shopping",
    },
    {
      hanzi: "市场",
      pinyin: "shìchǎng",
      meaning: "market",
      category: "shopping",
    },

    // Health
    {
      hanzi: "医院",
      pinyin: "yīyuàn",
      meaning: "hospital",
      category: "health",
    },
    { hanzi: "医生", pinyin: "yīshēng", meaning: "doctor", category: "health" },
    { hanzi: "药", pinyin: "yào", meaning: "medicine", category: "health" },
    {
      hanzi: "生病",
      pinyin: "shēngbìng",
      meaning: "to get sick",
      category: "health",
    },
    {
      hanzi: "健康",
      pinyin: "jiànkāng",
      meaning: "health, healthy",
      category: "health",
    },

    // Emotions
    {
      hanzi: "高兴",
      pinyin: "gāoxìng",
      meaning: "happy",
      category: "emotions",
    },
    {
      hanzi: "快乐",
      pinyin: "kuàilè",
      meaning: "happy, joyful",
      category: "emotions",
    },
    { hanzi: "难过", pinyin: "nánguò", meaning: "sad", category: "emotions" },
    {
      hanzi: "生气",
      pinyin: "shēngqì",
      meaning: "angry",
      category: "emotions",
    },
    { hanzi: "害怕", pinyin: "hàipà", meaning: "afraid", category: "emotions" },
    {
      hanzi: "紧张",
      pinyin: "jǐnzhāng",
      meaning: "nervous",
      category: "emotions",
    },
    {
      hanzi: "舒服",
      pinyin: "shūfu",
      meaning: "comfortable",
      category: "emotions",
    },
    {
      hanzi: "不好意思",
      pinyin: "bù hǎoyìsi",
      meaning: "embarrassed, sorry",
      category: "emotions",
    },
  ],
};

// Add HSK level to each word
Object.keys(hskVocabulary).forEach((level) => {
  hskVocabulary[level].forEach((word) => {
    word.level = level;
  });
});

// App state
let currentVocabulary = [...hskVocabulary.hsk1, ...hskVocabulary.hsk2];
let currentLevel = "all";
let userProgress = {};
let showPinyin = true;
let currentFlashcardIndex = 0;
let isDarkMode = false;
let sortBy = "default";

// DOM elements
const loadingScreen = document.getElementById("loadingScreen");
const appContent = document.getElementById("appContent");
const loadingBar = document.getElementById("loadingBar");
const vocabularyGrid = document.getElementById("vocabularyGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const categoryFilter = document.getElementById("categoryFilter");
const hskButtons = document.querySelectorAll(".hsk-btn");
const sortFilter = document.getElementById("sortFilter");
const shuffleBtn = document.getElementById("shuffleBtn");
const togglePinyinBtn = document.getElementById("togglePinyinBtn");
const totalWords = document.getElementById("totalWords");
const masteredWords = document.getElementById("masteredWords");
const reviewWords = document.getElementById("reviewWords");
const studiedWords = document.getElementById("studiedWords");
const currentLevelDisplay = document.getElementById("currentLevel");
const themeToggle = document.getElementById("themeToggle");

// Practice elements
const startPractice = document.getElementById("startPractice");
const flashcardsBtn = document.getElementById("flashcardsBtn");
const quizBtn = document.getElementById("quizBtn");

// Flashcard elements
const flashcardModal = document.getElementById("flashcardModal");
const closeFlashcard = document.getElementById("closeFlashcard");
const flashcard = document.getElementById("flashcard");
const flashcardHanzi = document.getElementById("flashcardHanzi");
const flashcardPinyin = document.getElementById("flashcardPinyin");
const flashcardMeaning = document.getElementById("flashcardMeaning");
const flashcardLevel = document.getElementById("flashcardLevel");
const flashcardCategory = document.getElementById("flashcardCategory");
const prevCard = document.getElementById("prevCard");
const flipCard = document.getElementById("flipCard");
const nextCard = document.getElementById("nextCard");
const markMastered = document.getElementById("markMastered");
const cardProgress = document.getElementById("cardProgress");

// Initialize
function init() {
  simulateLoading();
}

function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(completeLoading, 500);
    }
    loadingBar.style.width = `${progress}%`;
  }, 200);
}

function completeLoading() {
  loadingScreen.style.opacity = "0";
  setTimeout(() => {
    loadingScreen.style.display = "none";
    appContent.style.display = "block";
    setupApp();
  }, 500);
}

function setupApp() {
  loadUserProgress();
  loadThemePreference();
  populateCategoryFilter();
  renderVocabulary();
  updateStats();
  setupEventListeners();
  addActivity("📚", "Started vocabulary practice", "Just now");
}

function setupEventListeners() {
  searchInput.addEventListener("input", handleSearch);
  clearSearch.addEventListener("click", clearSearchHandler);
  categoryFilter.addEventListener("change", handleFilter);
  sortFilter.addEventListener("change", handleSort);
  hskButtons.forEach((btn) => {
    btn.addEventListener("click", () => setHSKLevel(btn.dataset.level));
  });
  shuffleBtn.addEventListener("click", shuffleVocabulary);
  togglePinyinBtn.addEventListener("click", togglePinyinDisplay);
  themeToggle.addEventListener("click", toggleTheme);

  // Practice events
  flashcardsBtn.addEventListener("click", openFlashcards);
  startPractice.addEventListener("click", startPracticeSession);
  quizBtn.addEventListener("click", startQuiz);

  // Flashcard events
  closeFlashcard.addEventListener("click", closeFlashcards);
  flashcard.addEventListener("click", flipFlashcard);
  prevCard.addEventListener("click", showPreviousCard);
  nextCard.addEventListener("click", showNextCard);
  flipCard.addEventListener("click", flipFlashcard);
  markMastered.addEventListener("click", toggleMasteredStatus);

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === flashcardModal) {
      closeFlashcards();
    }
  });
}

function populateCategoryFilter() {
  const categories = new Set();
  currentVocabulary.forEach((word) => {
    categories.add(word.category);
  });

  const sortedCategories = Array.from(categories).sort();

  // Clear existing options except the first one
  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1);
  }

  sortedCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = getCategoryName(category);
    categoryFilter.appendChild(option);
  });
}

// HSK Level Functions
function setHSKLevel(level) {
  currentLevel = level;

  // Update active button
  hskButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.level === level);
  });

  // Filter vocabulary
  if (level === "all") {
    currentVocabulary = [...hskVocabulary.hsk1, ...hskVocabulary.hsk2];
  } else {
    currentVocabulary = [...hskVocabulary[`hsk${level}`]];
  }

  // Update current level display
  currentLevelDisplay.textContent =
    level === "all" ? "All HSK" : `HSK ${level}`;

  // Repopulate category filter based on current level
  populateCategoryFilter();

  // Apply current filters and sort
  filterVocabulary(searchInput.value.toLowerCase(), categoryFilter.value);
  applySort();
  updateStats();

  // Log activity
  const activityName = level === "all" ? "All HSK levels" : `HSK ${level}`;
  addActivity("🏮", `Switched to ${activityName}`, "Just now");
}

// Sorting Functions
function handleSort() {
  sortBy = sortFilter.value;
  applySort();
  renderVocabulary();
}

function applySort() {
  switch (sortBy) {
    case "alphabetical":
      currentVocabulary.sort((a, b) => a.hanzi.localeCompare(b.hanzi));
      break;
    case "alphabetical-reverse":
      currentVocabulary.sort((a, b) => b.hanzi.localeCompare(a.hanzi));
      break;
    case "pinyin":
      currentVocabulary.sort((a, b) => a.pinyin.localeCompare(b.pinyin));
      break;
    case "pinyin-reverse":
      currentVocabulary.sort((a, b) => b.pinyin.localeCompare(a.pinyin));
      break;
    case "category":
      currentVocabulary.sort((a, b) => {
        const categoryA = getCategoryName(a.category);
        const categoryB = getCategoryName(b.category);
        if (categoryA === categoryB) {
          return a.hanzi.localeCompare(b.hanzi);
        }
        return categoryA.localeCompare(categoryB);
      });
      break;
    case "mastery":
      currentVocabulary.sort((a, b) => {
        const statusA = userProgress[a.hanzi]?.status || "unstudied";
        const statusB = userProgress[b.hanzi]?.status || "unstudied";

        const masteryOrder = {
          mastered: 0,
          studied: 1,
          "need-review": 2,
          unstudied: 3,
        };

        if (masteryOrder[statusA] !== masteryOrder[statusB]) {
          return masteryOrder[statusA] - masteryOrder[statusB];
        }
        // If same mastery level, sort by hanzi
        return a.hanzi.localeCompare(b.hanzi);
      });
      break;
    case "random":
      currentVocabulary = currentVocabulary.sort(() => Math.random() - 0.5);
      break;
    case "default":
      // Default sort: by HSK level, then by frequency within level
      currentVocabulary.sort((a, b) => {
        const levelA = parseInt(a.level.replace("hsk", ""));
        const levelB = parseInt(b.level.replace("hsk", ""));
        if (levelA !== levelB) {
          return levelA - levelB;
        }
        // Within same level, sort by hanzi
        return a.hanzi.localeCompare(b.hanzi);
      });
      break;
  }
}

// Vocabulary rendering
function renderVocabulary() {
  vocabularyGrid.innerHTML = "";

  if (currentVocabulary.length === 0) {
    vocabularyGrid.innerHTML = `
      <div class="no-results">
        <h3>No vocabulary found</h3>
        <p>Try changing your filters or search term</p>
      </div>
    `;
    return;
  }

  currentVocabulary.forEach((word, index) => {
    const card = createVocabularyCard(word, index);
    vocabularyGrid.appendChild(card);
  });
}

function createVocabularyCard(word, index) {
  const card = document.createElement("div");
  const status = userProgress[word.hanzi]?.status || "";
  card.className = `vocab-card ${status}`;

  const statusClass = status ? `vocab-status ${status}` : "vocab-status";
  const levelClass = `vocab-level ${word.level}`;

  card.innerHTML = `
    <div class="${statusClass}"></div>
    <div class="${levelClass}">${word.level.toUpperCase()}</div>
    <div class="vocab-hanzi">${word.hanzi}</div>
    ${showPinyin ? `<div class="vocab-pinyin">${word.pinyin}</div>` : ""}
    <div class="vocab-meaning">${word.meaning}</div>
    <div class="vocab-category">${getCategoryName(word.category)}</div>
  `;

  card.addEventListener("click", () => {
    speakWord(word.hanzi);
    markAsStudied(word.hanzi);
  });

  return card;
}

function getCategoryName(category) {
  const categories = {
    pronouns: "People & Pronouns",
    questions: "Question Words",
    numbers: "Numbers",
    measure: "Measure Words",
    time: "Time Words",
    places: "Places",
    transport: "Transportation",
    food: "Food & Drinks",
    objects: "Daily Objects",
    animals: "Animals",
    verbs: "Verbs",
    adjectives: "Adjectives",
    locations: "Location Words",
    particles: "Particles",
    other: "Other Words",
    family: "Family",
    people: "People",
    clothing: "Clothing",
    colors: "Colors",
    adverbs: "Adverbs",
    connectives: "Connectives",
    education: "Education",
    shopping: "Shopping",
    health: "Health",
    emotions: "Emotions",
    seasons: "Seasons",
    directions: "Directions",
    transportation: "Transportation",
    countries: "Countries",
    languages: "Languages",
  };
  return (
    categories[category] || category.charAt(0).toUpperCase() + category.slice(1)
  );
}

// Search and filter functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  filterVocabulary(searchTerm, categoryFilter.value);
}

function handleFilter() {
  filterVocabulary(searchInput.value.toLowerCase(), categoryFilter.value);
}

function filterVocabulary(searchTerm, category) {
  let filtered =
    currentLevel === "all"
      ? [...hskVocabulary.hsk1, ...hskVocabulary.hsk2]
      : [...hskVocabulary[`hsk${currentLevel}`]];

  filtered = filtered.filter((word) => {
    const matchesSearch =
      !searchTerm ||
      word.hanzi.toLowerCase().includes(searchTerm) ||
      word.pinyin.toLowerCase().includes(searchTerm) ||
      word.meaning.toLowerCase().includes(searchTerm);

    const matchesCategory = category === "all" || word.category === category;

    return matchesSearch && matchesCategory;
  });

  currentVocabulary = filtered;
  applySort();
  renderVocabulary();
}

function clearSearchHandler() {
  searchInput.value = "";
  categoryFilter.value = "all";
  filterVocabulary("", "all");
}

function shuffleVocabulary() {
  currentVocabulary = [...hskVocabulary.hsk1, ...hskVocabulary.hsk2]
    .filter((word) => {
      if (currentLevel === "all") return true;
      return word.level === `hsk${currentLevel}`;
    })
    .sort(() => Math.random() - 0.5);

  sortFilter.value = "random";
  sortBy = "random";
  renderVocabulary();
  addActivity("🔀", "Shuffled vocabulary", "Just now");
}

function togglePinyinDisplay() {
  showPinyin = !showPinyin;
  togglePinyinBtn.textContent = showPinyin ? "Hide Pinyin" : "Show Pinyin";
  renderVocabulary();
}

// Progress tracking
function loadUserProgress() {
  const saved = localStorage.getItem("hskVocabularyProgress");
  if (saved) {
    userProgress = JSON.parse(saved);
  }
}

function saveUserProgress() {
  localStorage.setItem("hskVocabularyProgress", JSON.stringify(userProgress));
}

function markAsStudied(hanzi) {
  if (!userProgress[hanzi]) {
    userProgress[hanzi] = {
      status: "studied",
      studiedAt: new Date().toISOString(),
    };
  } else if (userProgress[hanzi].status === "need-review") {
    userProgress[hanzi].status = "studied";
  }
  saveUserProgress();
  updateStats();
  renderVocabulary();

  // Update study time
  const currentTime = parseInt(localStorage.getItem("totalStudyTime") || "0");
  localStorage.setItem("totalStudyTime", (currentTime + 1).toString());
}

function toggleMasteredStatus() {
  const currentWord = currentVocabulary[currentFlashcardIndex];
  if (userProgress[currentWord.hanzi]?.status === "mastered") {
    userProgress[currentWord.hanzi].status = "studied";
    addActivity("📝", `Unmarked ${currentWord.hanzi} as mastered`, "Just now");
  } else {
    userProgress[currentWord.hanzi] = {
      status: "mastered",
      masteredAt: new Date().toISOString(),
    };
    addActivity("⭐", `Mastered ${currentWord.hanzi}`, "Just now");
  }
  saveUserProgress();
  updateStats();
  updateFlashcardDisplay();
  renderVocabulary();
}

function updateStats() {
  let total = 0;
  let mastered = 0;
  let studied = 0;
  let needReview = 0;

  // Calculate stats for current level
  const wordsInLevel =
    currentLevel === "all"
      ? [...hskVocabulary.hsk1, ...hskVocabulary.hsk2]
      : hskVocabulary[`hsk${currentLevel}`];

  wordsInLevel.forEach((word) => {
    total++;
    const progress = userProgress[word.hanzi];
    if (progress) {
      switch (progress.status) {
        case "mastered":
          mastered++;
          break;
        case "studied":
          studied++;
          break;
        case "need-review":
          needReview++;
          break;
      }
    }
  });

  totalWords.textContent = total;
  masteredWords.textContent = mastered;
  studiedWords.textContent = studied;
  reviewWords.textContent = needReview;
}

// Text-to-speech
function speakWord(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
}

// Flashcard functionality
function openFlashcards() {
  if (currentVocabulary.length === 0) {
    alert("No vocabulary to display! Please adjust your filters.");
    return;
  }

  currentFlashcardIndex = 0;
  flashcardModal.classList.add("active");
  updateFlashcardDisplay();
  addActivity("🃏", "Started flashcards", "Just now");
}

function closeFlashcards() {
  flashcardModal.classList.remove("active");
  resetFlashcardFlip();
}

function resetFlashcardFlip() {
  flashcard.classList.remove("flipped");
}

function updateFlashcardDisplay() {
  if (currentVocabulary.length === 0) {
    flashcardHanzi.textContent = "No words";
    flashcardPinyin.textContent = "";
    flashcardMeaning.textContent = "No vocabulary to display";
    flashcardLevel.textContent = "";
    flashcardCategory.textContent = "";
    cardProgress.textContent = "0/0";
    return;
  }

  const word = currentVocabulary[currentFlashcardIndex];
  flashcardHanzi.textContent = word.hanzi;
  flashcardPinyin.textContent = word.pinyin;
  flashcardMeaning.textContent = word.meaning;
  flashcardLevel.textContent = word.level.toUpperCase();
  flashcardCategory.textContent = getCategoryName(word.category);

  // Add level-specific styling
  flashcardLevel.className = `flashcard-level ${word.level}`;

  cardProgress.textContent = `${currentFlashcardIndex + 1}/${
    currentVocabulary.length
  }`;

  // Update mastered button
  const isMastered = userProgress[word.hanzi]?.status === "mastered";
  markMastered.textContent = isMastered ? "Unmark Mastered" : "Mark Mastered";
  markMastered.className = isMastered ? "btn ghost" : "btn";

  // Reset flip state
  resetFlashcardFlip();
}

function flipFlashcard() {
  flashcard.classList.toggle("flipped");
}

function showPreviousCard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    updateFlashcardDisplay();
  }
}

function showNextCard() {
  if (currentFlashcardIndex < currentVocabulary.length - 1) {
    currentFlashcardIndex++;
    updateFlashcardDisplay();
  }
}

// Practice session functions
function startPracticeSession() {
  addActivity("📖", "Started vocabulary practice session", "Just now");
  alert("Practice Session: Review 20 random words with audio pronunciation");
}

function startQuiz() {
  addActivity("🧠", "Started vocabulary quiz", "Just now");
  alert("Vocabulary Quiz: Test your knowledge with 20 random questions");
}

// Activity tracking
function addActivity(icon, description, time) {
  const activities = JSON.parse(
    localStorage.getItem("recentActivities") || "[]"
  );
  activities.unshift({ icon, description, time });

  // Keep only last 5 activities
  if (activities.length > 5) {
    activities.pop();
  }

  localStorage.setItem("recentActivities", JSON.stringify(activities));
}

// Theme functionality
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDarkMode);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("darkMode");
  if (savedTheme !== null) {
    isDarkMode = JSON.parse(savedTheme);
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);
