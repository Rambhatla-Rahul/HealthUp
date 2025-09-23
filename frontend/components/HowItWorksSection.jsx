import { motion } from 'framer-motion';

import { MessageCircle, Smartphone, Heart, CheckCircle } from 'lucide-react';

import { Card, CardBody } from '@heroui/react';

const steps = [
  {
    step: "01",
    title: "Choose Your Platform",
    description: "Start a conversation on our web platform or directly through WhatsApp - whatever works best for you.",
    icon: MessageCircle,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    step: "02", 
    title: "Ask Health Questions",
    description: "Type your health concerns, symptoms, or questions about preventive care in natural language.",
    icon: Heart,
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    step: "03",
    title: "Get Instant Guidance",
    description: "Receive personalized health awareness information, resources, and recommendations instantly.",
    icon: CheckCircle,
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted/30 w-full bg-black">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting healthcare guidance has never been easier. Follow these simple steps to start your health awareness journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="healthcare-card h-full border-0 hover:shadow-medium transition-all duration-300">
                <CardBody className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <step.icon className={`${step.color} w-10 h-10`} />
                  </motion.div>
                  
                  <div className="text-sm font-bold text-primary mb-4 tracking-wider">
                    STEP {step.step}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardBody>
              </Card>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent origin-left bg-gray-600"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Platforms Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground text-center w-full">
              Available on Multiple Platforms
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center" >
              Access healthcare guidance wherever you are, however you prefer to communicate. 
              Our chatbot seamlessly works across web and mobile platforms.
            </p>
            
            <div className="space-y-4 flex flex-col">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 border border-primary/10"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Web Platform</h4>
                  <p className="text-muted-foreground text-sm">Full-featured chat interface with rich interactions</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp Bot</h4>
                  <p className="text-muted-foreground text-sm">Chat directly through your favorite messaging app</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 w-full items-center justify-center"
          >
            {/* <motion.div
              whileHover={{ y: -5 }}
              className="space-y-4"
            >
              <img 
                src={`/healthcare-awareness.jpg`} 
                alt="Healthcare Awareness Interface" 
                className="w-full rounded-2xl shadow-medium"
              />
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Web Interface</h4>
                <p className="text-sm text-muted-foreground">Rich chat experience</p>
              </div>
            </motion.div> */}
            
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-4 mt-8 h-full overflow-hidden rounded-2xl shadow-medium flex flex-col items-center justify-center bg-gray-400/30 md:bg-transparent backdrop-blur-md p-4"
            >
              <video src={`/WhatsApp-Twilio-Model-Compressed.mp4`} autoPlay loop muted className='size-[400px] rounded-2xl'/>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">WhatsApp Chat</h4>
                <p className="text-sm text-muted-foreground">Familiar messaging</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;