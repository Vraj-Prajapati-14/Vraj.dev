"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Target, TrendingUp, Code, BarChart3, Zap, Download } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const researchProject = portfolioData.research.find(p => p.title === "Research (Drug Sentiment Analysis)");

  const features = [
    {
      icon: Brain,
      title: "Deep Learning Models",
      description: "Implemented BI-LSTM, CNN, GRU, and Transformer-based models for comprehensive sentiment analysis."
    },
    {
      icon: Target,
      title: "93% Accuracy",
      description: "Achieved remarkable 93% accuracy with BI-LSTM, surpassing previous results by 9%."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Optimized model performance through hyperparameter tuning and advanced preprocessing techniques."
    },
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "Utilized TensorFlow, Keras, and Hugging Face Transformers for state-of-the-art implementations."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analysis",
      description: "Performed detailed algorithmic comparisons and statistical analysis of results."
    },
    {
      icon: Zap,
      title: "Real-world Application",
      description: "Applied to drug sentiment analysis for pharmaceutical industry insights."
    }
  ]

  return (
    <section id="research" className="py-20 bg-muted/30 relative section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Research & Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of artificial intelligence and real-world applications through cutting-edge research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Overview */}
          {researchProject ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                {researchProject.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {researchProject.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {researchProject.highlights && researchProject.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {researchProject.tech && researchProject.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="glass p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Key Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">93%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">9%</div>
                    <div className="text-sm text-muted-foreground">Improvement</div>
                  </div>
                </div>
              </div>

              {/* Paper Button Group */}
              <div className="flex justify-center items-center mb-16 ">
                <a
                  href="/research-paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-purple-600 text-white font-bold shadow-md hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 transition-all text-base mr-2"
                  style={{ minWidth: 140, justifyContent: 'center' }}
                >
                  See Paper
                </a>
                <a
                  href="/research-paper.pdf"
                  download
                  className="flex items-center gap-3 px-6 py-2 rounded-full border-2 border-purple-400 text-purple-700 font-bold bg-transparent hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 transition-all text-base"
                  style={{ minWidth: 170, justifyContent: 'center' }}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-400 text-white mr-2">
                    <Download size={22} />
                  </span>
                  Download Paper
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="text-red-500 font-bold">Research project not found.</div>
          )}

          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass p-8 rounded-lg">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold mb-2 text-foreground">Model Performance Comparison</h4>
                <p className="text-muted-foreground">Accuracy comparison across different algorithms</p>
              </div>
              
              {/* Performance Chart */}
              <div className="space-y-4">
                {[
                  { name: 'BI-LSTM', accuracy: 93, color: 'from-green-500 to-green-600' },
                  { name: 'CNN', accuracy: 89, color: 'from-blue-500 to-blue-600' },
                  { name: 'GRU', accuracy: 87, color: 'from-purple-500 to-purple-600' },
                  { name: 'Logistic Regression', accuracy: 82, color: 'from-orange-500 to-orange-600' },
                  { name: 'Random Forest', accuracy: 79, color: 'from-red-500 to-red-600' }
                ].map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-24 text-sm font-medium text-foreground">
                      {model.name}
                    </div>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${model.accuracy}%` } : {}}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${model.color} rounded-full`}
                      />
                    </div>
                    <div className="w-12 text-sm font-semibold text-foreground">
                      {model.accuracy}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 