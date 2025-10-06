import axios from "axios";
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Code, GraduationCap, Lightbulb, LinkIcon, MapPin, Target, TrendingUp, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/card";
import { Badge } from "../../components/badge";
import SalaryVisualization3D from "../../components/salery3D";
import { API } from "../../lib/config";
const Info = () => {
  let { id } = useParams();
  let [careerData, setCareerData] = useState({});
  async function get() {
    try {
      let { data } = await axios.get(`${API}/careers/${id}`);
      setCareerData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>
  {
    get()
    window.scrollTo(0,0)
  },[])
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 mt-[65px]">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-12 shadow-lg">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-5xl font-bold"
            >
              {careerData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl"
            >
              {careerData.purpose}
            </motion.p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          Малакаҳо ва қобилиятҳо
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Малакаҳои техникӣ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {careerData.skills?.technical?.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Малакаҳои муоширатӣ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {careerData.skills?.soft?.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge variant="outline" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-primary" />
          Технологияҳо ва воситаҳо
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {careerData.technologies?.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          Роҳи таҳсил
        </h2>
        <div className="space-y-6">
          {careerData.roadmap?.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          Лоиҳаҳои мавҷудбуда
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {careerData.projectsExamples?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm">{project}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          Манбаъҳои таълимӣ
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Китобҳо</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {careerData.learningResources?.books?.map((book, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{book}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Курсҳо</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {careerData.learningResources?.courses?.map((course, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Блогҳо</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {careerData.learningResources?.blogs?.map((blog, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <LinkIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{blog}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          Имкониятҳои касбӣ
        </h2>
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerData.careerOpportunities?.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all border border-primary/10"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{opportunity}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          Музди меҳнат
        </h2>
        <SalaryVisualization3D salaryData={careerData.salaryAndMarket} />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold">Ихтисосҳои алоқаманд</h2>
        <div className="flex flex-wrap gap-3">
          {careerData.relatedSpecializations?.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge variant="outline" className="text-base py-2 px-6 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {spec}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-primary" />
          Маслиҳатҳо
        </h2>
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {careerData.advice?.map((advice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm">{advice}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <Award className="h-8 w-8 text-primary" />
          Сертификатҳо
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {careerData.certification?.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-sm font-medium">{cert}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 pb-20"
      >
        <h2 className="mb-8 text-3xl font-bold flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          Донишгоҳҳо
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {careerData.universities?.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{university.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{university.city}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{university.notes}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Info;
