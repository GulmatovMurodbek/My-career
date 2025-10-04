import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Badge } from "@/components/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import SpecialtyCard from "../../components/careerCard";
import { API } from "../../lib/config";
const Careers = () => {
  let [careers, setCareers] = useState([]);
  let [classters, setClassters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCluster, setSelectedCluster] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); 
  const filteredCareers = useMemo(() => {
    return careers.filter((career) => {
      const matchesSearch =
        career.name.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCluster =
        selectedCluster === "all" || career.classterId === selectedCluster;

      return matchesSearch && matchesCluster;
    });
  }, [searchTerm, selectedCluster, careers]);

  const groupedCareers = useMemo(() => {
    const groups = {};
    filteredCareers.forEach((career) => {
      const cluster = classters.find((c) => c._id === career.classterId);
      const clusterName = cluster ? cluster.classterName : "Unknown";

      if (!groups[clusterName]) {
        groups[clusterName] = { cluster, careers: [] };
      }

      groups[clusterName].careers.push(career);
    });
    return groups;
  }, [filteredCareers, classters]);
  async function getCareers() {
    try {
      let { data } = await axios.get(`${API}/careers`);
      setCareers(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getClassters() {
    try {
      let { data } = await axios.get(`${API}/classters`);
      setClassters(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCareers();
    getClassters();
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-hero mt-[65px]">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#7a7aff]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-7xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Касбҳои Оянда
            </h1>
            <p className="text-xl text-[white] max-w-3xl mx-auto mb-8">
              Касбҳои ояндаро омӯзед, малакаҳои лозимӣ ва имкониятҳои шуғлро
              дарёфт кунед
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Ҷустуҷӯи касбҳо..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-card border-primary/20"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="glass-card"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="glass-card"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Cluster Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Button
                variant={selectedCluster === "all" ? "default" : "outline"}
                onClick={() => setSelectedCluster("all")}
                className="glass-card"
              >
                Ҳама
              </Button>
              {classters.map((cluster) => (
                <Button
                  key={cluster._id}
                  variant={
                    selectedCluster === cluster._id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCluster(cluster._id)}
                  className="glass-card flex items-center gap-2"
                >
                  <img
                    src={cluster.classterIcon}
                    alt={cluster.classterName}
                    className="w-4 h-4"
                  />
                  {cluster.classterName}
                </Button>
              ))}
            </div>
          </motion.div>
        </section>
        <section className="px-4 pb-20 mt-[40px]">
        <div className="max-w-7xl mx-auto">
          {Object.keys(groupedCareers).length > 0 ? (
            Object.entries(groupedCareers).map(([clusterName, { cluster, careers }]) => (
              <motion.div
                key={clusterName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                {/* Cluster Header */}
                <div className="flex items-center gap-4 mb-8">
                  {cluster && (
                    <div className="w-12 h-12 rounded-2xl bg-gradient-primary p-2 glass-card">
                      <img 
                        src={cluster.classterIcon} 
                        alt={cluster.classterName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-gradient-primary">{clusterName}</h2>
                    <p className="text-muted-foreground">{careers.length} касб дастрас аст</p>
                  </div>
                </div>

                {/* Careers Grid */}
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8' 
                  : 'space-y-6'
                }>
                  {careers.map((career, index) => (
                    <motion.div
                      key={career.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={viewMode === 'list' ? 'max-w-2xl mx-auto' : ''}
                    >
                      <SpecialtyCard
                        specialty={career}
                        gradient="from-primary to-secondary"
                        glowColor="shadow-primary/30"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="glass-card max-w-md mx-auto p-8">
                <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Касбе ёфт нашуд</h3>
                <p className="text-muted-foreground">
                  Лутфан критерияҳои ҷустуҷӯро тағйир диҳед
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      </div>
    </>
  );
};

export default Careers;
