'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Workflow, Code, Layers, Puzzle } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <Card className="w-full min-h-screen bg-black relative overflow-hidden border-0">
          <Spotlight
            className="md:-top-40 md:left-60"
            size={800}
          />
          
          <div className="flex min-h-screen flex-col md:flex-row">
            {/* Left content */}
            <motion.div 
              className="flex-1 p-8 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 mr-3 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                </div>
                <h2 className="text-xl font-semibold tracking-tight">CogentX</h2>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Transform Your <br />Automation Workflow
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="mt-6 text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed"
              >
                A comprehensive AI automation platform that empowers both technical and non-technical users to build, manage, and optimize intelligent AI agents.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button variant="premium" size="lg" className="rounded-md px-8">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-md px-8">
                  Request Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Right content */}
            <motion.div 
              className="flex-1 relative min-h-[500px] md:min-h-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full absolute inset-0"
              />
            </motion.div>
          </div>
        </Card>
      </section>

      {/* What CogentX Does Section */}
      <section className="py-24 px-8 md:px-16 bg-black border-t border-white/5">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What CogentX Does
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Streamline the creation and execution of automation workflows by integrating advanced AI models and collaborative agent frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature cards */}
            <motion.div variants={fadeIn}>
              <Card glass hover className="bg-black/50 p-8">
                <Zap className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Simplify AI Development</h3>
                <p className="text-neutral-400">Automate code generation, debugging, and workflow management for AI agents.</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card glass hover className="bg-black/50 p-8">
                <Code className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">No-Code Environment</h3>
                <p className="text-neutral-400">Visual design tools for users with minimal coding experience to deploy powerful automation.</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card glass hover className="bg-black/50 p-8">
                <Workflow className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                <p className="text-neutral-400">Connect with popular apps like Gmail, Google Drive, and Notion to automate processes.</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card glass hover className="bg-black/50 p-8">
                <Layers className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Efficient Automation</h3>
                <p className="text-neutral-400">Design, execute, and monitor complex automation sequences with minimal intervention.</p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-24 px-8 md:px-16 bg-black border-t border-white/5">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Feature Highlights
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Discover the powerful capabilities that make CogentX the leading platform for AI automation.
            </p>
          </motion.div>

          {/* Feature cards with gradient borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn}>
              <div className="bg-white/5 rounded-md p-[1px]">
                <Card glass className="h-full p-8 bg-black">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center mr-3">
                      <Puzzle className="h-5 w-5 text-white" />
                    </div>
                    Tool Agent
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    Intelligent agents that can use tools, make decisions, and execute complex workflows autonomously based on your instructions.
                  </p>
                  <div className="aspect-video bg-white/5 rounded-md overflow-hidden">
                    {/* Placeholder for feature image/animation */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/50 text-sm uppercase tracking-widest">Tool Agent Visualization</span>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-white/5 rounded-md p-[1px]">
                <Card glass className="h-full p-8 bg-black">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center mr-3">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    Operator & Agent Model
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    A hierarchical framework that allows agents to collaborate, delegate tasks, and optimize workflows for maximum efficiency.
                  </p>
                  <div className="aspect-video bg-white/5 rounded-md overflow-hidden">
                    {/* Placeholder for feature image/animation */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/50 text-sm uppercase tracking-widest">Agent Model Diagram</span>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-8 md:px-16 bg-black border-t border-white/5">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How It Works</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              A simple process to get your AI automation up and running in minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div className="relative" variants={fadeIn}>
              <div className="absolute top-0 left-12 h-full w-px bg-white/10 md:hidden"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="h-24 w-24 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">Design Your Agent</h3>
                <p className="text-neutral-400">
                  Use our intuitive interface to design your AI agent with specific capabilities and integrations.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="relative" variants={fadeIn}>
              <div className="absolute top-0 left-12 h-full w-px bg-white/10 md:hidden"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="h-24 w-24 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">Configure Workflows</h3>
                <p className="text-neutral-400">
                  Set up automation sequences and connect to your existing tools and applications.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="relative" variants={fadeIn}>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="h-24 w-24 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">Deploy & Monitor</h3>
                <p className="text-neutral-400">
                  Launch your automation and monitor performance with real-time analytics and insights.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div className="mt-20 text-center" variants={fadeIn}>
            <Button variant="premium" size="lg" className="rounded-md px-8">
              See It In Action <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 md:px-16 bg-black border-t border-white/5">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What Our Users Say</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Join the growing community of businesses transforming their operations with CogentX.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div variants={fadeIn}>
              <Card glass hover className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Alex Thompson</h4>
                    <p className="text-sm text-neutral-400">CTO, TechInnovate</p>
                  </div>
                </div>
                <p className="text-neutral-400 italic">
                  "CogentX has revolutionized how we handle our internal processes. What used to take days now happens in minutes."
                </p>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeIn}>
              <Card glass hover className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-neutral-400">Product Manager, DataFlow</p>
                  </div>
                </div>
                <p className="text-neutral-400 italic">
                  "As someone with limited coding experience, I was amazed at how quickly I could build complex automation workflows with CogentX."
                </p>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={fadeIn}>
              <Card glass hover className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-neutral-400">CEO, AutomateNow</p>
                  </div>
                </div>
                <p className="text-neutral-400 italic">
                  "The ROI with CogentX has been incredible. We've reduced operational costs by 40% while improving our service quality."
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-md bg-white/10 border border-white/20 mr-3 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-md bg-white"></div>
                </div>
                <h2 className="text-xl font-semibold tracking-tight">CogentX</h2>
              </div>
              <p className="text-neutral-400 mb-6">
                Empowering the future of work through intelligent automation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Integrations</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">API Reference</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2023 CogentX. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}