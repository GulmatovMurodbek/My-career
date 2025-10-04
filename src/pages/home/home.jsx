import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  FileText,
  Globe,
  Heart,
  Monitor,
  Play,
  Quote,
  Search,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

import React, { useEffect, useState } from "react";
import ImageHero from "../../images/Flux_Dev_create_a_beautiful_image_of_Tajik_boys_and_girls_with_1.jpg";
import Interactive3DSection from "../../components/3dSection";
import axios from "axios";
import SpecialtyCard from "../../components/jobCard";
import { Shield, Map } from "lucide-react";
import { API } from "../../lib/config";
const Home = () => {
  let [topCareers, setTopCareers] = useState([]);
  const specialties = [
    {
      title: "Табиӣ ва техникӣ",
      icon: <Monitor className="w-10 h-10 text-blue-500" />,
      description:
        "Математика, физика, техника ва технологияҳо. Омӯзиши назария ва амал барои сохтмон, муҳандисӣ ва барномасозӣ.",
      tags: ["Математика", "Физика", "Инженерӣ", "IT"],
    },
    {
      title: "Иқтисод ва география",
      icon: <Globe className="w-10 h-10 text-green-500" />,
      description:
        "Иқтисод, менеҷмент, молия ва география. Омӯзиши бозори кор, таҳлили маълумот ва идоракунии ресурсҳо.",
      tags: ["Иқтисод", "Молия", "География", "Менеҷмент"],
    },
    {
      title: "Филология, педагогика ва санъат",
      icon: <BookOpen className="w-10 h-10 text-purple-500" />,
      description:
        "Забон, адабиёт, педагогика ва санъат. Омӯзиши муошират, эҷодкорӣ ва таълими касбӣ.",
      tags: ["Забон", "Адабиёт", "Санъат", "Педагогика"],
    },
    {
      title: "Ҷомеашиносӣ ва ҳуқуқ",
      icon: <Users className="w-10 h-10 text-red-500" />,
      description:
        "Сиёсат, ҳуқуқ, ҷамъиятшиносӣ ва соҳаҳои иҷтимоӣ. Омӯзиши қонун, таҳлили ҷомеа ва роҳҳои ҳалли мушкилот.",
      tags: ["Ҳуқуқ", "Сиёсат", "Ҷомеашиносӣ", "Иқтисоди иҷтимоӣ"],
    },
    {
      title: "Тиб, биология ва варзиш",
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      description:
        "Тиб, биология, саломатӣ ва варзиш. Омӯзиши ташхис, нигоҳубин ва рушди ҷисмонӣ.",
      tags: ["Тиб", "Биология", "Варзиш", "Саломатӣ"],
    },
  ];
  const demandData = [
    { name: "Тиб, биология ва варзиш", demand: 90, jobs: 380 },
    { name: "Барномасозӣ", demand: 95, jobs: 450 },
    { name: "Иқтисод", demand: 75, jobs: 280 },
    { name: "Ҳуқуқ", demand: 70, jobs: 240 },
    { name: "Филология, педагогика ва санъат", demand: 65, jobs: 180 },
  ];
  const salaryData = [
    { name: "Тиб, биология ва варзиш", value: 22, color: "#ef4444" },
    { name: "Барномасозӣ", value: 25, color: "#8b5cf6" },
    { name: "Иқтисод", value: 15, color: "#f59e0b" },
    { name: "Ҳуқуқ", value: 12, color: "#10b981" },
    { name: "Филология, педагогика ва санъат", value: 6, color: "#06b6d4" },
  ];
  const steps = [
    {
      icon: Search,
      title: "Ихтисосро интихоб кунед",
      description:
        "Аз рӯйхати пурраи ихтисосҳои касбӣ ҷустуҷӯ кунед ва онҳое, ки бо манфиатҳо ва ҳадафҳои шумо мувофиқанд, пайдо кунед.",
      step: "01",
    },
    {
      icon: FileText,
      title: "Маълумот гиред",
      description:
        "Ба маълумоти муфассал дар бораи ҳар касб дастрасӣ пайдо кунед, аз ҷумла тавсифи ҷойи кор, талабот ва дархости бозори меҳнат.",
      step: "02",
    },
    {
      icon: BookOpen,
      title: "Маҳорат омӯзед",
      description:
        "Пайдо кунед, ки барои роҳи касбии интихобкардаатон кадом маҳорати касбӣ ва таҳсилот лозим аст.",
      step: "03",
    },
    {
      icon: Target,
      title: "Барои касб омодагӣ бинед",
      description:
        "Роҳнамоии омӯзишӣ, имкониятҳои корӣ ва қадамҳои ба роҳ мондани касби муваффақро гиред.",
      step: "04",
    },
  ];
  const features = [
    {
      icon: Shield,
      title: "Маълумоти тасдиқшуда ва ҷойҳои рейтинги",
      description:
        "Ҳамаи маълумот дар бораи касбҳо тасдиқшудаанд ва мунтазам бо маълумоти навтарини бозор навсозӣ мешаванд",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Map,
      title: "Роҳнамоҳои касбӣ",
      description:
        "Роҳнамоии қадам ба қадам барои кӯмак ба шумо дар пешбурди муваффақонаи роҳи касбии интихобкардаатон",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Манбаъҳои ройгон",
      description:
        "Дастрасӣ ба мавод ва манбаъҳои пурра барои омӯзиш бо нархи ройгон",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Users,
      title: "Донишҷӯён эътимод доранд",
      description:
        "Ба ҳазорҳо донишҷӯе ҳамроҳ шавед, ки бо мо ба таври муваффақона роҳи касби худро нақш карданд",
      color: "from-orange-500 to-red-500",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const testimonials = [
    {
      id: 1,
      name: "Алина Сафарова",
      role: "Донишҷӯ дар Донишгоҳи Миллии Тоҷикистон",
      avatar: "AS",
      content:
        "Ин платформа ба ман кӯмак кард, то шавқи худро ба муҳандисии барномави кашф кунам. Маълумотҳо дар бораи касб хеле арзишманд буданд!",
      rating: 5,
      specialty: "Барномасоз",
    },
    {
      id: 2,
      name: "Давлат Абдуллоев",
      role: "Донишҷуи тиб",
      avatar: "DA",
      content:
        "Манбаи аҷиб барои фаҳмидани ихтисосҳои гуногуни тиббӣ. Он манро дар қабули қарор барои пайравӣ ба кардиология роҳнамоӣ кард.",
      rating: 5,
      specialty: "Табиб",
    },
    {
      id: 3,
      name: "Нигора Рахмонова",
      role: "Хатмкунанда",
      avatar: "NR",
      content:
        "Маълумот дар бораи маош ва талабот дар бозор ба ман кӯмак кард, ки роҳи дурусти касбиро интихоб кунам. Ба таври баланд тавсия дода мешавад!",
      rating: 5,
      specialty: "Иқтисодчи",
    },
    {
      id: 4,
      name: "Файзуло Камолов",
      role: "Донишҷуи Муҳандиси",
      avatar: "FK",
      content:
        "Платформаи аъло бо маълумоти ҳамаҷониба дар бораи касбҳои муҳандисӣ дар Тоҷикистон.",
      rating: 5,
      specialty: "Муҳандисии сохтмон.",
    },
  ];
  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  async function get() {
    try {
      let { data } = await axios.get(`${API}/careers`);
      setTopCareers(data);
      console.log(data);
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
    window.scrollTo(0,0)
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="home" className="relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance leading-tight">
                  Касби ояндаро интихоб кун ва роҳи худро муайян соз!
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Ҳамаи ихтисосҳои Тоҷикистон бо маълумоти мукаммал, рейтинг ва
                  роҳҳои касбӣ — дар як ҷо.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8">
                  Дидани ихтисосҳо
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Оғоз кардан
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Ихтисосҳо</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    100к+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ёри медиҳад ба донишҷуён
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">
                    Интихоби дуруст
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={ImageHero}
                  alt="Students exploring career paths"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="specialties" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ихтисосҳои гуногунро кашф намо
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Маълумоти пурра дар бораи касбҳои гуногун, малакаҳои зарурӣ ва
              талаботи бозори меҳнат дар Тоҷикистонро ёбед.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {specialties.map((spec, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl   transition-shadow duration-400  border border-gray-200 p-4 bg-white cursor-pointer "
              >
                <CardHeader
                  avatar={spec.icon}
                  title={<h3 className="text-xl font-bold">{spec.title}</h3>}
                />
                <CardContent>
                  <p className="text-gray-700 mb-3">{spec.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {spec.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        className="bg-gray-100 text-gray-800"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <Box
          component="section"
          py={{ xs: 8, md: 16 }}
          bgcolor="background.default"
        >
          <Box maxWidth="1200px" mx="auto" px={{ xs: 2, sm: 3 }}>
            {/* Header */}
            <Box textAlign="center" mb={{ xs: 6, md: 12 }}>
              <Typography
                variant="h3"
                component="h2"
                fontWeight={700}
                gutterBottom
                color="primary"
              >
                Рейтингҳо ва Фаҳмиши Касбҳо
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                maxWidth={600}
                mx="auto"
              >
                Маълумотҳои таҳлиливу рақамӣ дар бораи касбҳои бештар
                талабшаванда ва музди миёна дар бозори кории Тоҷикистон.
              </Typography>
            </Box>

            {/* Summary Cards */}
            <Grid container spacing={{ xs: 2, md: 4 }} mb={{ xs: 4, md: 8 }}>
              {[
                {
                  title: "Ҳамаги ҷойҳои корӣ",
                  value: "2,850",
                  change: "+12% нисбат ба соли гузашта",
                  icon: <Briefcase size={24} />,
                },
                {
                  title: "Таҳсилҷӯёни фаъол",
                  value: "12,450",
                  change: "+8% нисбат ба моҳи гузашта",
                  icon: <Users size={24} />,
                },
                {
                  title: "Нисбати муваффақият",
                  value: "94.5%",
                  change: "+2.1% нисбат ба моҳи гузашта",
                  icon: <TrendingUp size={24} />,
                },
              ].map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-5px)" },
                    }}
                  >
                    <CardHeader
                      title={card.title}
                      avatar={card.icon}
                      titleTypographyProps={{ fontWeight: 600 }}
                    />
                    <CardContent>
                      <Typography variant="h4" fontWeight={700}>
                        {card.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.change}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Charts Section */}
            <Grid container spacing={{ xs: 2, md: 4 }}>
              {/* Most In-Demand Careers */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardHeader
                    title="Касбҳои бештар талабшаванда"
                    subheader="Талабот ба бозори кор ва ҷойҳои корӣ бо назардошти ихтисос"
                  />
                  <CardContent>
                    <Box height={300}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={demandData}
                          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                        >
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            angle={-35}
                            textAnchor="end"
                            height={60}
                          />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Bar
                            dataKey="demand"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Salary Distribution */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardHeader
                    title="Тақсимоти музди меҳнат"
                    subheader="Музди миёна дар панҷ ихтисос"
                  />
                  <CardContent>
                    <Box height={300}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={salaryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={120}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {salaryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Чихел барономаи <span className="text-[blue]">Ихтисоси ман</span>{" "}
              кор мекунад
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Чор қадами оддӣ барои кашф ва омодагӣ ба роҳи касбии идеалии худ
              дар Тоҷикистон.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full border-border hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-border"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-current text-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm opacity-90">
                Эътимоди ҳазорҳо донишҷӯён дар Тоҷикистон
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Роҳи муваффақият ва касби орзуи худро кашф кунед
            </h2>

            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
              Ба ҳазорон донишҷӯе, ки бо{" "}
              <span className="text-[red]">Ихтисоси ман</span> роҳи касбии орзуи
              худро ёфтаанд, ҳамроҳ шавед. Имрӯз қадам гузоред!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Ҳозир оғоз кунед ва кашф кунед
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Моро пайгири кунед
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Ҳозир ройгон оғоз кунед</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Бе пардохт ва корт оғоз кунед</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Фавран дастрас кунед</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Interactive3DSection />
      <section className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Ихтисосҳои пешқадам</span>{" "}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Касбҳои талаботбаланд бо дурнамоҳои хуб дар Тоҷикистон
          </p>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {topCareers.slice(0, 4).map((e) => {
            return <SpecialtyCard key={e.name} specialty={e} />;
          })}
        </div>
      </section>
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-secondary">
                Чаро моро интихоб мекунед
              </span>{" "}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мо воситаҳо ва маълумотҳои заруриро пешниҳод мекунем, то шумо
              қарорҳои дуруст дар бораи касбиятон қабул кунед
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="glass-card hover-lift group-hover:glow-primary flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg flex-shrink-0`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient-primary transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-accent">Бовардоранд </span>{" "}
              <span className="text-foreground">10,000+ донишҷу</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Бубинед, корбарони мо дар бораи таҷрибаи худ дар барномаи{" "}
              <span className="text-[blue]">Ихтисоси ман</span> чӣ мегӯянд.
            </p>
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="glass-card text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 " />

              <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />

              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-foreground">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-[grey] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({
                      length: testimonials[currentIndex].rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Grid */}
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants2}
                className="group"
              >
                <div className="glass-card hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[grey] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.specialty}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
