import { Card, CardContent } from "@/components/ui/card"
import { 
  Network, 
  Gauge, 
  Shield, 
  BarChart3, 
  Zap, 
  RefreshCw,
  Lock,
  Globe
} from "lucide-react"
import featuresImage from "@/assets/ai-gateway-features.webp"

const Features = () => {
  const features = [
    {
      icon: Network,
      title: "Smart Routing",
      description: "Intelligent request routing across multiple AI providers with automatic failover and load balancing."
    },
    {
      icon: Gauge,
      title: "Performance Monitoring",
      description: "Real-time performance metrics, latency tracking, and detailed analytics for all your AI integrations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced authentication, rate limiting, and request validation to protect your AI infrastructure."
    },
    {
      icon: RefreshCw,
      title: "Auto Scaling",
      description: "Dynamic scaling based on demand with intelligent resource allocation and cost optimization."
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Granular permissions and API key management with team-based access controls."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide edge locations for minimal latency and maximum availability across all regions."
    }
  ]

  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold hero-text mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage, monitor, and optimize your AI infrastructure 
            with enterprise-grade reliability and performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="card-elegant border-border/50 hover:border-border transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Gateway Architecture Visual */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold hero-text mb-4">
              How AI Gateway Works
            </h3>
            <p className="text-lg text-muted-foreground">
              Seamless integration between your applications and AI providers
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="card-elegant p-8 rounded-2xl">
              <img 
                src={featuresImage} 
                alt="AI Gateway Architecture showing request flow from applications through the gateway to various AI providers"
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Request Received</h4>
                  <p className="text-sm text-muted-foreground">Your application sends AI requests through our gateway</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Intelligent Routing</h4>
                  <p className="text-sm text-muted-foreground">Smart routing to optimal AI providers based on performance</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Response Delivered</h4>
                  <p className="text-sm text-muted-foreground">Optimized responses returned with full monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features