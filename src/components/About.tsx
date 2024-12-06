import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Giuseppe Mascarella",
    role: "Co-founder",
    image: "/team/giuseppe.jpg",
    description: "Co-Founder, A pioneering expert in artificial intelligence, with a career that began at the IBM AI Lab in 1989 and continued at Microsoft. At Microsoft, he led the Unified Communications and Collaboration (UCC) efforts in Office365, recognizing the transformative potential of conversational commerce as s of 2006."
  },
  {
    name: "Enoc Silva",
    role: "CEO",
    image: "/team/white-background-designify-p-500.png",
    description: "Specialist in Cloud Services and sales optimization with AI, expert in developing conversational applications that improve customer experience and business processes. Focused on AI and Natural Language Processing technologies, it drives digital innovation and collaborates with leaders to maximize the impact of AI on global sustainability."
  },
  {
    name: "Jacek Laskowski",
    role: "Entrenador Maestro en Spark",
    image: "/team/jacek.jpg",
    description: "Desarrollador y entrenador en Apache Spark, Scala, Hadoop YARN, Apache Kafka, Apache Hive, Apache Mesos, Akka Actors/Stream/HTTP y Docker. Orador en el Spark Summit in NYC 2016."
  },
  {
    name: "Rob Grondi",
    role: "Científico de Datos/Manipulación de Datos",
    image: "/team/rob.jpg",
    description: "Experto en Big Data y Analítica: Hadoop y HBase, RevolutionR. Especializado en mundo NoSQL: MongoDB, OrientDB y NEO4J, Aplicaciones web y Inteligencia de Negocios."
  },
  {
    name: "Evan Oster",
    role: "Entrenador Maestro en R y SAS",
    image: "/team/evan.png",
    description: "Ejecutivo de clase mundial en Análisis de Clientes y Perspectivas del Consumidor, liderando la aplicación estratégica de la información para generar impactos que agregan valor al negocio, el Marketing, las marcas y las relaciones con los clientes."
  },
  {
    name: "Rick Iaccarino",
    role: "Científico de Datos Senior",
    image: "/team/rick.jpg",
    description: "Científico de Datos Profesional Certificado por Microsoft (MPP) Ingeniero Eléctrico con 10 años de experiencia en Análisis de CRM en IBM. Experto en R, T-SQL, MS Power BI, y Tableau."
  },
  {
    name: "David Smith",
    role: "Consultor Principal de TI",
    image: "/team/david.jpg",
    description: "Se enfoca en cómo acelerar el cambio en personas, lugares de trabajo, y capacidades técnicas y comerciales en grandes organizaciones. Especialista en transformación tecnológica y estrategia empresarial."
  },
  {
    name: "Dinesh Kumar",
    role: "Consultor Principal de TI",
    image: "/team/dinesh.jpg",
    description: "Ingeniero Creativo en Capacidades & Gestión de Negocios Tecnológicos + Estratega + Arquitecto de Negocios/Empresarial + Educador"
  }
].map(member => ({
  ...member,
  image: member.image || "/team/default-profile.jpg"
}));

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Team is delighted to support you
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Meet the experts behind SalesGenio
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 relative overflow-hidden group">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/team/default-profile.jpg";
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-secondary">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About; 