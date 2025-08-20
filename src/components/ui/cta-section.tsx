import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const CTASection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-accent/10 to-background rounded-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-glow" />
        
        <div className="relative">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-white mr-3" />
              <span className="text-lg text-muted-foreground font-medium">Ready to get started?</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold hero-text mb-6 leading-tight">
              Start Building Today
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who trust our AI Gateway to power their applications. 
              Get started in minutes with our comprehensive documentation and support.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="button-glow bg-white text-black hover:bg-gray-100 text-lg px-12 py-6 rounded-xl group"
            >
              Get Started Free
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-accent text-lg px-12 py-6 rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">&lt;10ms</div>
              <div className="text-muted-foreground">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection