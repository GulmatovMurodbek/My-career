import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  DollarSign,
  Users,
  MapPin,
  Award,
  Code,
  Target,
  Clock,
  Building,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import { Link } from "react-router";

export default function SpecialtyCard({
  specialty,
  gradient = "from-primary to-accent",
  glowColor = "shadow-primary/30",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Card
        className={`glass-card hover-lift group-hover:${glowColor} group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}
      >
        {/* Header */}
        <div
          className={`relative p-6 bg-gradient-to-br ${gradient} text-white`}
        >
          <div className="absolute inset-0 bg-[#5858e9]" />
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                Ихтисос
              </Badge>
            </div>
            <h2 className="text-2xl font-bold mb-2">{specialty.name}</h2>
            <p className="text-white/90 leading-relaxed">
              {specialty.description}
            </p>
          </div>
        </div>

        <CardContent className="p-0">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 rounded-none border-b">
              <TabsTrigger value="overview" className="text-xs">
                Шарҳ
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-xs">
                Маҳоратҳо
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="text-xs">
                Нақшаи роҳ
              </TabsTrigger>
              <TabsTrigger value="career" className="text-xs">
                Фаъолият
              </TabsTrigger>
              <TabsTrigger value="education" className="text-xs">
                Таҳсил
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Ҳадаф</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.purpose}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Технологияҳо
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specialty.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-accent/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Projects Examples */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building className="h-5 w-5 text-secondary" />
                  <h3 className="font-semibold text-foreground">
                    Намунаҳои лоиҳаҳо
                  </h3>
                </div>
                <div className="space-y-2">
                  {specialty.projectsExamples.map((project, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Маҳоратҳои техникӣ
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {specialty.skills.technical.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-primary/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Маҳоратҳои муоширатӣ
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {specialty.skills.soft.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-accent/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="roadmap" className="p-6">
              <div className="space-y-6">
                {specialty.roadmap.map((step, index) => (
                  <div key={step.step} className="relative">
                    {index !== specialty.roadmap.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {step.title}
                        </h4>
                        <div className="space-y-1">
                          {step.tasks.map((task, taskIndex) => (
                            <div
                              key={taskIndex}
                              className="flex items-start gap-2"
                            >
                              <Clock className="h-3 w-3 text-muted-foreground mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="career" className="p-6 space-y-6">
              {/* Salary Information */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold text-foreground">Ҳудуди маош</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="text-sm text-muted-foreground mb-1">
                      Навкор
                    </div>
                    <div className="font-semibold text-green-600">
                      {specialty.salaryAndMarket.junior}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="text-sm text-muted-foreground mb-1">
                      Таҷрибаи миёна
                    </div>
                    <div className="font-semibold text-yellow-600">
                      {specialty.salaryAndMarket.mid}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="text-sm text-muted-foreground mb-1">
                      Таҷрибадори калон
                    </div>
                    <div className="font-semibold text-red-600">
                      {specialty.salaryAndMarket.senior}
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Opportunities */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Имкониятҳои касбӣ
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specialty.careerOpportunities.map((career, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Диплом ва шаҳодатномаҳо
                  </h3>
                </div>
                <div className="space-y-2">
                  {specialty.certification.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-accent/5"
                    >
                      <Award className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="p-6 space-y-6">
              {/* Universities */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Донишгоҳҳо</h3>
                </div>
                <div className="space-y-4">
                  {specialty.universities.map((uni, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border bg-card"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground">
                          {uni.name}
                        </h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {uni.city}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {uni.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Resources */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ExternalLink className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Манбаъҳои омӯзишӣ
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Китобҳо
                    </h4>
                    <div className="space-y-1">
                      {specialty.learningResources.books.map((book, index) => (
                        <div
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          • {book}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Курсҳои онлайн
                    </h4>
                    <div className="space-y-1">
                      {specialty.learningResources.courses.map(
                        (course, index) => (
                          <div
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            • {course}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {specialty.relatedSpecializations.length} Ихтисоси вобаста
              </div>
              <Button variant="default" size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                <Link to={`/info/${specialty._id}`}>Маълумоти бештар</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
