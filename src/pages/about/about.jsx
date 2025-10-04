import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Code, Coffee, Eye, Globe, HandHeart, Heart, Rocket, Shield, Sparkles, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "../../components/card";
const About = () => {
  const stats = [
    { number: "15,000+", label: "Донишҷӯён", icon: Users },
    { number: "250+", label: "Ихтисосҳо", icon: Award },
    { number: "50+", label: "Донишгоҳҳо", icon: Globe },
    { number: "95%", label: "Қаноатмандӣ", icon: Star }
  ];
  const supporters = [
    {
      name: "Донишгоҳҳои байналмиллали сайёҳи ва соҳибкории Ҷумҳурии Тоҷикистон",
      type: "Ҳамкорони асосӣ",
      icon: Globe,
      contribution: "Ҳамкорӣ дар тартиб додани маълумот ва барномаҳои таҳсилӣ",
      color: "from-orange-500 to-red-500"
    }
  ];
  const values = [
    {
      icon: Heart,
      title: "Ҳамдардӣ",
      description: "Мо ба эҳтиёҷоти донишҷӯён ва ҷавонон диққат медиҳем",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Эътимоднокӣ",
      description: "Маълумоти тасдиқшуда ва боэътимод",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Инноватсия",
      description: "Технологияҳои муосир барои оянда",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Ҳамкорӣ",
      description: "Як ҷомеаи дӯстона ва дастгирикунанда",
      color: "from-purple-500 to-pink-500",
    },
  ];
  const creator = {
    name: "Гулматов Муродбек",
    role: "Таъсисгар ва барномасоз",
    image: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    bio: "Барномасози ҷавони Тоҷик бо ишқи технология ва маориф",
    achievements: [
      "Соҳиби чандин лоиҳаҳои муваффақ",
      "Иштироккунанда дар озмунҳои Ҷумҳури",
    ],
    quote: "Ҳар як ҷавон ҳуқуқи интихоби дуруст ва дастрасӣ ба маълумоти сифатӣ дорад"
  };
  useEffect(()=>
  {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="min-h-screen bg-background mt-[65px]">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[blue] via-secondary/20 to-accent/20">
        <div className="absolute inset-0 opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-[#4747fd]">
            Дар бораи мо
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-sans text-[blue] font-bold">
              Ихтисоси ман
            </span>{" "}
            платформаест барои кӯмак ба ҷавонони Тоҷикистон дар интихоби роҳи
            касбӣ ва сохтани ояндаи дурахшон
          </p>
        </motion.div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Мақсади мо</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мо мехоҳем, ки ҳар як ҷавони Тоҷикистон имкон дошта бошад, ки
                ихтисоси мувофиқро интихоб кунад, маҳоратҳои зарурӣ омӯзад ва
                барои бозори меҳнат омода шавад. Мақсади мо сохтани пул байни
                таҳсилот ва касбест.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-foreground/80">
                  "Оянда ба онҳое тааллуқ дорад, ки имрӯз барои он омода
                  мешаванд"
                </blockquote>
                <p className="mt-4 text-right text-muted-foiground">ДБССТ</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20 order-2 md:order-1">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Дастрасӣ ба маълумоти сифатӣ барои ҳама",
                    "Истифодаи AI барои маслиҳати шахсӣ",
                    "Ҳамкорӣ бо донишгоҳҳо ва корфармоён",
                    "Омӯзиши доимӣ ва инкишофи касбӣ",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[grey]" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-10 h-10 text-[grey]" />
                <h2 className="text-4xl font-bold">Мо чиро мебинем</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мо хоҳиши дорем, ки то соли 2027 платформаи пешбарандаи Осиёи
                Марказӣ дар соҳаи роҳбарии касбӣ шавем ва ба миллионҳо ҷавонон
                дар интихоби роҳи дурусти касбӣ кӯмак расонем.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Арзишҳои мо</h2>
            <p className="text-lg text-muted-foreground">
              Принсипҳое, ки моро роҳбарӣ мекунанд
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-4`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Достони мо</h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-lg leading-relaxed mb-6">
                Дар соли 2025, як гурӯҳ устодон ва донишҷуёни ҷавон аз ДБССТ бо
                хоҳиши кӯмак ба ҷавонон дар интихоби касбӣ якҷоя омаданд. Мо
                дидем, ки бисёр аз донишҷӯён бе маълумоти кофӣ ихтисосро интихоб
                мекунанд ва баъдан пушаймон мешаванд.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Мо тасмим гирифтем, ки платформаеро созем, ки на танҳо маълумот
                медиҳад, балки роҳнамоӣ ва маслиҳати шахсӣ низ пешниҳод мекунад.
                Бо истифода аз технологияҳои муосир ва таҷрибаи мутахассисон, мо
                "Ихтисоси ман"-ро таъсис додем.
              </p>
              <p className="text-lg leading-relaxed">
                Имрӯз мо ифтихор дорем, ки ба ҳазорҳо донишҷӯён кӯмак расондаем
                ва давом медиҳем ба беҳтар кардани хидматҳои худ барои оянда.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Таъсири мо</h2>
            <p className="text-lg text-muted-foreground">
              Рақамҳое, ки моро ифтихор медиҳанд
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-8">
                    <stat.icon className="w-12 h-12 text-[blue] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[blue] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Чӣ кор мекунем</h2>
            <p className="text-lg text-muted-foreground">Хидматҳои мо барои шумо</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Таҳлили бозор",
                description: "Маълумоти муосир дар бораи талаб ва музди меҳнат"
              },
              {
                icon: Rocket,
                title: "Роҳбарии касбӣ",
                description: "Маслиҳати шахсӣ барои интихоби ихтисос"
              },
              {
                icon: Globe,
                title: "Шабакасозӣ",
                description: "Пайваст бо мутахассисон ва донишгоҳҳо"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <service.icon className="w-16 h-16 text-[blue] mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Мақсадҳои оянда</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Васеъ кардани ба 50 шаҳри Тоҷикистон",
                "Илова кардани маслиҳати AI шахсӣ",
                "Ҳамкорӣ бо 100+ донишгоҳ",
                "Омодасозии курсҳои онлайн",
                "Системаи назорати пешрафт",
                "Шабакасозӣ бо корфармоён"
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="text-lg">{goal}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Касе, ки ин платформаро сохт</h2>
            <p className="text-lg text-muted-foreground">Ва касоне, ки барои сохтани он дастгирӣ карданд</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute top-8 right-8 z-20"
                    >
                      <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                        <Code className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Таъсисгар</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-2">{creator.name}</h3>
                      <p className="text-xl text-muted-foreground mb-4">{creator.role}</p>
                      <p className="text-foreground/80 mb-6 leading-relaxed">{creator.bio}</p>
                      
                      {/* Quote */}
                      <blockquote className="border-l-4 border-primary pl-4 py-2 mb-6 italic text-foreground/90">
                        "{creator.quote}"
                      </blockquote>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                          Дастовардҳо
                        </h4>
                        {creator.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Social/Contact Icons */}
                      <div className="flex gap-3 mt-8">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
                        >
                          <Coffee className="w-5 h-5 text-primary" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
                        >
                          <Code className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supporters Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Дастгирикунандагон ва ҳамкорон
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supporters.map((supporter, index) => {
                const IconComponent = supporter.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-primary/20">
                      <CardContent className="p-6">
                        {/* Icon */}
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${supporter.color} mb-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="mb-3">
                          <h4 className="text-lg font-semibold mb-1">{supporter.name}</h4>
                          <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {supporter.type}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {supporter.contribution}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Appreciation Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-3">Ташаккур барои дастгирӣ</h4>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Мо аз ҳамаи касоне, ки дар сохтан ва рушди ин платформа кӯмак расонданд, 
                  аз ҷони дил сипосгузорӣ мекунем. Бе дастгирии шумо, ин лоиҳа имконнопазир буд.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
