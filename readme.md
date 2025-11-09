const dialogues = [
{
lesson: "Lesson 1: Greetings",
hanziA: "你好！",
hanziB: "你好！",
pinyinA: "Nǐ hǎo!",
pinyinB: "Nǐ hǎo!",
englishA: "Hello!",
englishB: "Hello!",
},
{
lesson: "Lesson 1: Polite Greetings",
hanziA: "您好！",
hanziB: "你们好！",
pinyinA: "Nín hǎo!",
pinyinB: "Nǐmen hǎo!",
englishA: "Hello (polite)!",
englishB: "Hello everyone!",
},
{
lesson: "Lesson 1: Apologies",
hanziA: "对不起！",
hanziB: "没关系！",
pinyinA: "Duìbuqǐ!",
pinyinB: "Méi guānxi!",
englishA: "Sorry!",
englishB: "No problem!",
},

        // Lesson 2
        {
          lesson: "Lesson 2: Thanks",
          hanziA: "谢谢！",
          hanziB: "不谢！",
          pinyinA: "Xièxie!",
          pinyinB: "Bù xiè!",
          englishA: "Thank you!",
          englishB: "Don't mention it!",
        },
        {
          lesson: "Lesson 2: Gratitude",
          hanziA: "谢谢你！",
          hanziB: "不客气！",
          pinyinA: "Xièxie nǐ!",
          pinyinB: "Bù kèqi!",
          englishA: "Thank you!",
          englishB: "You're welcome!",
        },
        {
          lesson: "Lesson 2: Farewell",
          hanziA: "再见！",
          hanziB: "再见！",
          pinyinA: "Zàijiàn!",
          pinyinB: "Zàijiàn!",
          englishA: "Goodbye!",
          englishB: "Goodbye!",
        },

        // Lesson 3
        {
          lesson: "Lesson 3: Names",
          hanziA: "你叫什么名字？",
          hanziB: "我叫李月。",
          pinyinA: "Nǐ jiào shénme míngzi?",
          pinyinB: "Wǒ jiào Lǐ Yuè.",
          englishA: "What's your name?",
          englishB: "My name is Li Yue.",
        },
        {
          lesson: "Lesson 3: Identity",
          hanziA: "你是老师吗？",
          hanziB: "我不是老师，我是学生。",
          pinyinA: "Nǐ shì lǎoshī ma?",
          pinyinB: "Wǒ bú shì lǎoshī, wǒ shì xuéshēng.",
          englishA: "Are you a teacher?",
          englishB: "I'm not a teacher, I'm a student.",
        },
        {
          lesson: "Lesson 3: Nationality",
          hanziA: "你是中国人吗？",
          hanziB: "我不是中国人，我是美国人。",
          pinyinA: "Nǐ shì Zhōngguó rén ma?",
          pinyinB: "Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.",
          englishA: "Are you Chinese?",
          englishB: "I'm not Chinese, I'm American.",
        },

        // Lesson 4
        {
          lesson: "Lesson 4: Introduction",
          hanziA: "她是我的汉语老师。",
          hanziB: "她是谁？",
          pinyinA: "Tā shì wǒ de Hànyǔ lǎoshī.",
          pinyinB: "Tā shì shéi?",
          englishA: "She is my Chinese teacher.",
          englishB: "Who is she?",
        },
        {
          lesson: "Lesson 4: Nationality Question",
          hanziA: "你是哪国人？",
          hanziB: "我是美国人。你呢？",
          pinyinA: "Nǐ shì nǎ guó rén?",
          pinyinB: "Wǒ shì Měiguó rén. Nǐ ne?",
          englishA: "Which country are you from?",
          englishB: "I'm American. And you?",
        },
        {
          lesson: "Lesson 4: Friends",
          hanziA: "他是谁？",
          hanziB: "他是我同学。她不是我同学，她是我朋友。",
          pinyinA: "Tā shì shéi?",
          pinyinB:
            "Tā shì wǒ tóngxué. Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.",
          englishA: "Who is he?",
          englishB:
            "He is my classmate. She is not my classmate, she is my friend.",
        },

        // Lesson 5
        {
          lesson: "Lesson 5: Family Size",
          hanziA: "你家有几口人？",
          hanziB: "我家有三口人。",
          pinyinA: "Nǐ jiā yǒu jǐ kǒu rén?",
          pinyinB: "Wǒ jiā yǒu sān kǒu rén.",
          englishA: "How many people in your family?",
          englishB: "There are three people in my family.",
        },
        {
          lesson: "Lesson 5: Children Ages",
          hanziA: "你女儿几岁了？",
          hanziB: "她今年四岁了。",
          pinyinA: "Nǐ nǚ'ér jǐ suì le?",
          pinyinB: "Tā jīnnián sì suì le.",
          englishA: "How old is your daughter?",
          englishB: "She is four years old this year.",
        },
        {
          lesson: "Lesson 5: Ages",
          hanziA: "李老师多大了？",
          hanziB: "她今年50岁了。她女儿今年20岁。",
          pinyinA: "Lǐ lǎoshī duō dà le?",
          pinyinB: "Tā jīnnián wǔshí suì le. Tā nǚ'ér jīnnián èrshí suì.",
          englishA: "How old is Teacher Li?",
          englishB:
            "She is 50 years old this year. Her daughter is 20 years old.",
        },

        // Lesson 6
        {
          lesson: "Lesson 6: Language Ability",
          hanziA: "你会说汉语吗？",
          hanziB: "我会说汉语。你妈妈会说汉语吗？她不会说。",
          pinyinA: "Nǐ huì shuō Hànyǔ ma?",
          pinyinB:
            "Wǒ huì shuō Hànyǔ. Nǐ māma huì shuō Hànyǔ ma? Tā bú huì shuō.",
          englishA: "Can you speak Chinese?",
          englishB:
            "I can speak Chinese. Can your mother speak Chinese? She cannot.",
        },
        {
          lesson: "Lesson 6: Food & Cooking",
          hanziA: "中国菜好吃吗？",
          hanziB: "中国菜很好吃。你会做中国菜吗？我不会做。",
          pinyinA: "Zhōngguó cài hǎo chī ma?",
          pinyinB:
            "Zhōngguó cài hěn hǎo chī. Nǐ huì zuò Zhōngguó cài ma? Wǒ bú huì zuò.",
          englishA: "Is Chinese food delicious?",
          englishB:
            "Chinese food is very delicious. Can you cook Chinese food? I cannot.",
        },
        {
          lesson: "Lesson 6: Writing Characters",
          hanziA: "你会写汉字吗？",
          hanziB: "我会写。这个字怎么写？对不起，这个字我会读，不会写。",
          pinyinA: "Nǐ huì xiě Hànzì ma?",
          pinyinB:
            "Wǒ huì xiě. Zhège zì zěnme xiě? Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.",
          englishA: "Can you write Chinese characters?",
          englishB:
            "I can write. How to write this character? Sorry, I can read this character but cannot write it.",
        },

        // Lesson 7
        {
          lesson: "Lesson 7: Dates",
          hanziA: "请问，今天几号？",
          hanziB: "今天9月1号。今天星期几？星期三。",
          pinyinA: "Qǐngwèn, jīntiān jǐ hào?",
          pinyinB: "Jīntiān jiǔ yuè yī hào. Jīntiān xīngqī jǐ? Xīngqīsān.",
          englishA: "Excuse me, what's the date today?",
          englishB: "Today is September 1st. What day is it today? Wednesday.",
        },
        {
          lesson: "Lesson 7: Calendar",
          hanziA: "昨天是几月几号？",
          hanziB: "昨天是8月31号，星期二。明天是9月2号，星期四。",
          pinyinA: "Zuótiān shì jǐ yuè jǐ hào?",
          pinyinB:
            "Zuótiān shì bā yuè sānshíyī hào, xīngqī'èr. Míngtiān shì jiǔ yuè èr hào, xīngqīsì.",
          englishA: "What was the date yesterday?",
          englishB:
            "Yesterday was August 31st, Tuesday. Tomorrow is September 2nd, Thursday.",
        },
        {
          lesson: "Lesson 7: Weekend Plans",
          hanziA: "明天星期六，你去学校吗？",
          hanziB: "我去学校。你去学校做什么？我去学校看书。",
          pinyinA: "Míngtiān xīngqīliù, nǐ qù xuéxiào ma?",
          pinyinB:
            "Wǒ qù xuéxiào. Nǐ qù xuéxiào zuò shénme? Wǒ qù xuéxiào kàn shū.",
          englishA: "Tomorrow is Saturday, are you going to school?",
          englishB:
            "I am going to school. What will you do at school? I will read books at school.",
        },

        // Lesson 8
        {
          lesson: "Lesson 8: Eating & Drinking",
          hanziA: "你想喝什么？",
          hanziB: "我想喝茶。你想吃什么？我想吃米饭。",
          pinyinA: "Nǐ xiǎng hē shénme?",
          pinyinB: "Wǒ xiǎng hē chá. Nǐ xiǎng chī shénme? Wǒ xiǎng chī mǐfàn.",
          englishA: "What do you want to drink?",
          englishB:
            "I want to drink tea. What do you want to eat? I want to eat rice.",
        },
        {
          lesson: "Lesson 8: Shopping Plans",
          hanziA: "下午你想做什么？",
          hanziB: "下午我想去商店。你想买什么？我想买一个杯子。",
          pinyinA: "Xiàwǔ nǐ xiǎng zuò shénme?",
          pinyinB:
            "Xiàwǔ wǒ xiǎng qù shāngdiàn. Nǐ xiǎng mǎi shénme? Wǒ xiǎng mǎi yí ge bēizi.",
          englishA: "What do you want to do this afternoon?",
          englishB:
            "I want to go to the store this afternoon. What do you want to buy? I want to buy a cup.",
        },
        {
          lesson: "Lesson 8: Prices",
          hanziA: "你好！这个杯子多少钱？",
          hanziB: "28块。那个杯子18块钱。",
          pinyinA: "Nǐ hǎo! Zhège bēizi duōshao qián?",
          pinyinB: "Èrshíbā kuài. Nàge bēizi shíbā kuài qián.",
          englishA: "Hello! How much is this cup?",
          englishB: "28 kuai. That cup is 18 kuai.",
        },

        // Lesson 9
        {
          lesson: "Lesson 9: Pets & Locations",
          hanziA: "小猫在哪儿？",
          hanziB: "小猫在那儿。小狗在椅子下面。",
          pinyinA: "Xiǎo māo zài nǎr?",
          pinyinB: "Xiǎo māo zài nàr. Xiǎo gǒu zài yǐzi xiàmiàn.",
          englishA: "Where is the kitten?",
          englishB: "The kitten is there. The puppy is under the chair.",
        },
        {
          lesson: "Lesson 9: Workplace",
          hanziA: "你在哪儿工作？",
          hanziB:
            "我在学校工作。你儿子在哪儿工作？我儿子在医院工作，他是医生。",
          pinyinA: "Nǐ zài nǎr gōngzuò?",
          pinyinB:
            "Wǒ zài xuéxiào gōngzuò. Nǐ érzi zài nǎr gōngzuò? Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.",
          englishA: "Where do you work?",
          englishB:
            "I work at a school. Where does your son work? My son works at a hospital, he is a doctor.",
        },
        {
          lesson: "Lesson 9: Phone Conversation",
          hanziA: "你爸爸在家吗？",
          hanziB: "不在家。他在哪儿呢？他在医院。",
          pinyinA: "Nǐ bàba zài jiā ma?",
          pinyinB: "Bú zài jiā. Tā zài nǎr ne? Tā zài yīyuàn.",
          englishA: "Is your father at home?",
          englishB: "He is not at home. Where is he? He is at the hospital.",
        },

        // Lesson 10
        {
          lesson: "Lesson 10: Office Items",
          hanziA: "桌子上有什么？",
          hanziB: "桌子上有一个电脑和一本书。杯子在哪儿？杯子在桌子里。",
          pinyinA: "Zhuōzi shang yǒu shénme?",
          pinyinB:
            "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū. Bēizi zài nǎr? Bēizi zài zhuōzi li.",
          englishA: "What is on the table?",
          englishB:
            "There is a computer and a book on the table. Where is the cup? The cup is in the table.",
        },
        {
          lesson: "Lesson 10: Names & Jobs",
          hanziA: "前面那个人叫什么名字？",
          hanziB: "她叫王方，在医院工作。后面那个人呢？他叫谢朋，在商店工作。",
          pinyinA: "Qiánmiàn nàge rén jiào shénme míngzi?",
          pinyinB:
            "Tā jiào Wáng Fāng, zài yīyuàn gōngzuò. Hòumiàn nàge rén ne? Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.",
          englishA: "What is the name of the person in front?",
          englishB:
            "Her name is Wang Fang, she works at a hospital. What about the person behind? His name is Xie Peng, he works at a store.",
        },
        {
          lesson: "Lesson 10: Library",
          hanziA: "这儿有人吗？",
          hanziB: "没有。我能坐这儿吗？请坐。",
          pinyinA: "Zhèr yǒu rén ma?",
          pinyinB: "Méiyǒu. Wǒ néng zuò zhèr ma? Qǐng zuò.",
          englishA: "Is there anyone here?",
          englishB: "No. Can I sit here? Please sit.",
        },

        // Lesson 11
        {
          lesson: "Lesson 11: Time Now",
          hanziA: "现在几点？",
          hanziB: "现在十点十分。中午几点吃饭？十二点吃饭。",
          pinyinA: "Xiànzài jǐ diǎn?",
          pinyinB:
            "Xiànzài shí diǎn shí fēn. Zhōngwǔ jǐ diǎn chī fàn? Shí'èr diǎn chī fàn.",
          englishA: "What time is it now?",
          englishB:
            "It's ten past ten. When do we eat lunch? We eat at twelve o'clock.",
        },
        {
          lesson: "Lesson 11: Return Times",
          hanziA: "爸爸什么时候回家？",
          hanziB: "下午五点。我们什么时候去看电影？六点三十分。",
          pinyinA: "Bàba shénme shíhou huí jiā?",
          pinyinB:
            "Xiàwǔ wǔ diǎn. Wǒmen shénme shíhou qù kàn diànyǐng? Liù diǎn sānshí fēn.",
          englishA: "When will father come home?",
          englishB:
            "At five in the afternoon. When will we go see a movie? At six thirty.",
        },
        {
          lesson: "Lesson 11: Trips",
          hanziA: "我星期一去北京。你想在北京住几天？",
          hanziB: "住三天。星期五前能回家吗？能。",
          pinyinA: "Wǒ xīngqī yī qù Běijīng. Nǐ xiǎng zài Běijīng zhù jǐ tiān?",
          pinyinB: "Zhù sān tiān. Xīngqī wǔ qián néng huí jiā ma? Néng.",
          englishA:
            "I will go to Beijing on Monday. How many days do you want to stay in Beijing?",
          englishB: "Stay three days. Can you return home before Friday? Yes.",
        },

        // Lesson 12
        {
          lesson: "Lesson 12: Weather Past/Future",
          hanziA: "昨天北京的天气怎么样？",
          hanziB: "太热了。明天天气很好，不冷不热。",
          pinyinA: "Zuótiān Běijīng de tiānqì zěnmeyàng?",
          pinyinB: "Tài rè le. Míngtiān tiānqì hěn hǎo, bù lěng bú rè.",
          englishA: "How was the weather in Beijing yesterday?",
          englishB:
            "It was too hot. Tomorrow the weather will be very good, not cold and not hot.",
        },
        {
          lesson: "Lesson 12: Rain & Coming",
          hanziA: "今天会下雨吗？",
          hanziB: "今天不会下雨。王小姐今天会来吗？不会来，天气太冷了。",
          pinyinA: "Jīntiān huì xià yǔ ma?",
          pinyinB:
            "Jīntiān bú huì xià yǔ. Wáng xiǎojiě jīntiān huì lái ma? Bú huì lái, tiānqì tài lěng le.",
          englishA: "Will it rain today?",
          englishB:
            "It will not rain today. Will Miss Wang come today? She will not come, the weather is too cold.",
        },
        {
          lesson: "Lesson 12: Health",
          hanziA: "你身体怎么样？",
          hanziB:
            "我身体不太好。天气太热了，不爱吃饭。你多吃些水果，多喝水。谢谢你，医生。",
          pinyinA: "Nǐ shēntǐ zěnmeyàng?",
          pinyinB:
            "Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn. Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ. Xièxie nǐ, yīshēng.",
          englishA: "How is your health?",
          englishB:
            "My health is not very good. The weather is too hot, I don't like to eat. You should eat more fruit and drink more water. Thank you, doctor.",
        },

        // Lesson 13
        {
          lesson: "Lesson 13: Current Activities",
          hanziA: "喂，你在做什么呢？",
          hanziB: "我在看书呢。大卫也在看书吗？他没看书，他在学做中国菜呢。",
          pinyinA: "Wèi, nǐ zài zuò shénme ne?",
          pinyinB:
            "Wǒ zài kàn shū ne. Dàwèi yě zài kàn shū ma? Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.",
          englishA: "Hello, what are you doing?",
          englishB:
            "I am reading. Is David also reading? He is not reading, he is learning to cook Chinese food.",
        },
        {
          lesson: "Lesson 13: Hobbies",
          hanziA: "昨天上午你在做什么呢？",
          hanziB:
            "我在睡觉呢。你呢？我在家看电视呢。你喜欢看电视吗？我不喜欢看电视，我喜欢看电影。",
          pinyinA: "Zuótiān shàngwǔ nǐ zài zuò shénme ne?",
          pinyinB:
            "Wǒ zài shuì jiào ne. Nǐ ne? Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma? Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.",
          englishA: "What were you doing yesterday morning?",
          englishB:
            "I was sleeping. And you? I was watching TV at home. Do you like watching TV? I don't like watching TV, I like watching movies.",
        },
        {
          lesson: "Lesson 13: Phone Numbers",
          hanziA: "82304155，这是李老师的电话吗？",
          hanziB:
            "不是。她的电话是82304156。好，我现在给她打电话。她在工作呢，你下午打吧。",
          pinyinA:
            "Bā èr sān líng sì yāo wǔ wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?",
          pinyinB:
            "Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù. Hǎo, wǒ xiànzài gěi tā dǎ diànhuà. Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.",
          englishA: "82304155, is this Teacher Li's phone number?",
          englishB:
            "No. Her phone number is 82304156. Okay, I will call her now. She is working, you should call in the afternoon.",
        },

        // Lesson 14
        {
          lesson: "Lesson 14: Shopping",
          hanziA: "昨天上午你去哪儿了？",
          hanziB: "我去商店买东西了。你买什么了？我买了一点儿苹果。",
          pinyinA: "Zuótiān shàngwǔ nǐ qù nǎr le?",
          pinyinB:
            "Wǒ qù shāngdiàn mǎi dōngxi le. Nǐ mǎi shénme le? Wǒ mǎile yìdiǎnr píngguǒ.",
          englishA: "Where did you go yesterday morning?",
          englishB:
            "I went to the store to buy things. What did you buy? I bought some apples.",
        },
        {
          lesson: "Lesson 14: Driving Lessons",
          hanziA: "你看见张先生了吗？",
          hanziB: "看见了，他去学开车了。他什么时候能回来？40分钟后回来。",
          pinyinA: "Nǐ kànjiàn Zhāng xiānsheng le ma?",
          pinyinB:
            "Kànjiàn le, tā qù xué kāi chē le. Tā shénme shíhou néng huílai? Sìshí fēnzhōng hòu huílai.",
          englishA: "Did you see Mr. Zhang?",
          englishB:
            "Yes, I saw him, he went to learn driving. When can he come back? He will come back in 40 minutes.",
        },
        {
          lesson: "Lesson 14: Clothes Shopping",
          hanziA: "王方的衣服太漂亮了！",
          hanziB: "是啊，她买了不少衣服。我没买，这些都是王方的东西。",
          pinyinA: "Wáng Fāng de yīfu tài piàoliang le!",
          pinyinB:
            "Shì a, tā mǎile bù shǎo yīfu. Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.",
          englishA: "Wang Fang's clothes are too beautiful!",
          englishB:
            "Yes, she bought quite a few clothes. I didn't buy anything, these are all Wang Fang's things.",
        },

        // Lesson 15
        {
          lesson: "Lesson 15: Meeting & Memory",
          hanziA: "你和李小姐是什么时候认识的？",
          hanziB: "我们是2011年9月认识的。我们是在学校认识的，她是我大学同学。",
          pinyinA: "Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshì de?",
          pinyinB:
            "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshì de. Wǒmen shì zài xuéxiào rènshì de, tā shì wǒ dàxué tóngxué.",
          englishA: "When did you meet Miss Li?",
          englishB:
            "We met in September 2011. We met at school, she is my university classmate.",
        },
        {
          lesson: "Lesson 15: Transport",
          hanziA: "你们是怎么来饭店的？",
          hanziB: "我们是坐出租车来的。他是和朋友一起开车来的。",
          pinyinA: "Nǐmen shì zěnme lái fàndiàn de?",
          pinyinB:
            "Wǒmen shì zuò chūzūchē lái de. Tā shì hé péngyou yīqǐ kāi chē lái de.",
          englishA: "How did you come to the hotel?",
          englishB: "We came by taxi. He came driving with friends.",
        },
        {
          lesson: "Lesson 15: Pleasantries",
          hanziA: "很高兴认识您！李小姐。",
          hanziB: "认识你我也很高兴！听张先生说，您是坐飞机来北京的？是的。",
          pinyinA: "Hěn gāoxìng rènshí nín! Lǐ xiǎojiě.",
          pinyinB:
            "Rènshí nǐ wǒ yě hěn gāoxìng! Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de? Shì de.",
          englishA: "Very pleased to meet you! Miss Li.",
          englishB:
            "I'm also very pleased to meet you! I heard from Mr. Zhang that you came to Beijing by plane? Yes.",
        },
      ];
