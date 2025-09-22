import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

import { MessageCircle, Smartphone, ArrowRight, Heart } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-hero relative w-full h-full flex items-center justify-center mt-10 md:mt-4 md:p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 "/>
      <motion.div 
        className="absolute top-16 right-20 text-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Heart size={60} />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-16 text-white/10"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle size={45} />
      </motion.div>

      <div className="container mx-auto  relative z-10 backdrop-blur-md md:rounded-2xl p-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-transparent">
                Health Journey?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who are already taking control of their health with our AI-powered healthcare assistant. 
              Available 24/7 on web and WhatsApp.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg" 
                  className="flex border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-primary hover:bg-gray/30 shadow-large text-lg px-10 py-6 rounded-full font-semibold group"
                  onClickCapture={() => window.location.href = '/webchat'}
                >
                  <MessageCircle className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  Start Web Chat
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-10 py-6 rounded-full font-semibold group backdrop-blur-sm"
                >
                  <Smartphone className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  WhatsApp Chat
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70 mt-12"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <span className="font-medium">No App Download Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="font-medium">100% Free to Start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-light rounded-full animate-pulse" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-12 border-t border-white/20"
            >
              <p className="text-white/60 mb-4">
                Need help getting started? Our support team is here for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80">
                <a href="mailto:support@healthchatbot.com" className="hover:text-white transition-colors">
                  support@healthchatbot.com
                </a>
                <span className="hidden sm:block">•</span>
                <a href="tel:+1-800-HEALTH" className="hover:text-white transition-colors">
                  1-800-HEALTH
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;