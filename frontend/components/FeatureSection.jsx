"use client";
import { Card,CardBody} from '@heroui/react';
import { motion } from 'framer-motion';

import { 
  MessageSquare, 
  Shield, 
  Clock, 
  Smartphone, 
  Heart, 
  Users,
  Zap,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Intelligent Health Conversations",
    description: "Get personalized health advice and awareness information through natural conversations with our AI assistant.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant & Secure",
    description: "Your health data is protected with enterprise-grade security and full HIPAA compliance standards.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access health guidance anytime, anywhere. Our chatbot never sleeps, ensuring you get help when you need it.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Smartphone,
    title: "WhatsApp Integration",
    description: "Chat directly through WhatsApp - no app downloads required. Get health tips where you already communicate.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Heart,
    title: "Preventive Care Focus",
    description: "Proactive health awareness and early detection guidance to help you maintain optimal wellness.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Users,
    title: "Multilingual Support",
    description: "Available in multiple languages to serve diverse communities and break down healthcare language barriers.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Get immediate answers to your health questions without waiting for appointments or callbacks.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Globe,
    title: "Global Health Resources",
    description: "Access to worldwide health information, local resources, and region-specific health guidelines.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative p-4">
      
      {/* Background Pattern */}
        <div className='flex w-full bg-gray/30 rounded-2xl bg-gray/30 backdrop-blur-md p-4'>
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 heading text-center">
                  Powerful Features for
                  <span className="block text-primary">Better Healthcare</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our healthcare chatbot combines cutting-edge AI with medical expertise to provide 
                  comprehensive health awareness and support across multiple platforms.
              </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3}}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  >
                  <Card className="healthcare-card border-0 h-full transition-all duration-300 hover:shadow-medium bg-gray-800/30 rounded-md">
                      <CardBody className="p-8">
                      <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                      >
                          <feature.icon className={`${feature.color} w-8 h-8`} />
                      </motion.div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                          {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                      </p>
                      </CardBody>
                  </Card>
                  </motion.div>
              ))}
              </div>

              {/* Stats Section */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
              >
              {[
                  { number: "50K+", label: "Active Users" },
                  { number: "1M+", label: "Conversations" },
                  { number: "24/7", label: "Availability" },
                  { number: "15+", label: "Languages" }
              ].map((stat, index) => (
                  <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-6"
                  >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                      {stat.label}
                  </div>
                  </motion.div>
              ))}
              </motion.div>
          </div>
        </div>
    </section>
  );
};

export default FeaturesSection;

