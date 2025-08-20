import { Card, CardContent } from "@/components/ui/card"
import FlowDiagram from "@/components/ui/flow-diagram"
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

        {/* Interactive Flow Diagram */}
        <FlowDiagram />
      </div>
    </section>
  )
}

export default Features