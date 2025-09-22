"use client";
import { motion } from 'framer-motion';
import { MessageCircle, Smartphone, Heart, MessageSquare } from 'lucide-react';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();
  const handleWebChat = async()=>{
    router.push('/webchat')
  }
  return (
    <section className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center overflow-hidden md:p-4 w-full">
      {/* Background Elements */}
      <div className='flex w-full h-full md:min-h-[95vh] md:rounded-2xl bg-gray/30 backdrop-blur-md p-4 items-center'>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
            >
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-4"
                >
                <h1 className="text-5xl text-center md:text-start lg:text-7xl font-bold text-white leading-tight font-sans">
                    Your Personal
                    <span className="block bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-white font-sans">
                    Health Assistant
                    </span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-xl text-center md:text-start">
                    Get instant healthcare guidance, awareness tips, and support through our AI-powered chatbot. 
                    Available 24/7 on web and WhatsApp.
                </p>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
                >
                <Button 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-3xl shadow-large text-lg px-8 py-6 rounded-full font-semibold flex hover:cursor-pointer"
                    onClick={handleWebChat}
                >
                    <MessageCircle className="mr-2 text-blue-600" size={20} />
                    Start Chat Now
                </Button>
                
                <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold flex hover:cursor-pointer"
                >
                    <MessageSquare className="mr-2 animate-pulse text-green-600" size={20}/>
                    WhatsApp Chat
                </Button>
                </motion.div>

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center space-x-6 text-white/70"
                >
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Available 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-light rounded-full" />
                    <span>Multi-platform</span>
                </div>
                </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="relative"
            >
                <div className="relative">
                <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <img 
                    src={'/hero-image.webp'} 
                    alt="Healthcare Chatbot Interface" 
                    className="w-[80%] mx-auto rounded-3xl shadow-large hidden md:block"
                    />
                </motion.div>
                
                {/* Floating Elements */}
                {/* <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-8 -right-8 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                    <Heart className="text-secondary" size={24} />
                </motion.div>
                
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                    <MessageCircle className="text-accent" size={20} />
                </motion.div> */}

                </div>
            </motion.div>
            </div>
        </div>

        {/* Bottom Wave */}
        
      </div>
    </section>
  );
};

export default HeroSection;