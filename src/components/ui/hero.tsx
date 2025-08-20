import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-glow" />
      
      <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
        {/* Main Headlines */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="hero-text">BUILD</span>
            <br />
            <span className="hero-accent">your AI Gateway</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intelligent API management that routes, monitors, and optimizes your AI integrations. 
            Connect multiple providers with zero downtime and maximum performance.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button 
            size="lg" 
            className="button-glow bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-xl group"
          >
            Start Building
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-accent text-lg px-8 py-4 rounded-xl"
          >
            View Documentation
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center animate-slide-up">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Sub-millisecond routing with intelligent caching</p>
          </div>
          
          <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
            <p className="text-muted-foreground">Advanced authentication and request validation</p>
          </div>
          
          <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">Complete visibility into your AI operations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero