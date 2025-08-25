import { Card, CardContent } from "@/components/ui/card"
import { 
  Globe, 
  Cpu, 
  Shield, 
  BarChart3, 
  Zap, 
  Database,
  ArrowRight,
  Brain
} from "lucide-react"

const FlowDiagram = () => {
  return (
    <div className="relative max-w-6xl mx-auto py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold hero-text mb-4">
          AI Gateway Architecture
        </h3>
        <p className="text-lg text-muted-foreground">
          Intelligent request flow with real-time monitoring and optimization
        </p>
      </div>

      {/* Flow Diagram */}
      <div className="relative">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 400">
          {/* Horizontal lines */}
          <defs>
            <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(270 100% 50%)" />
              <stop offset="50%" stopColor="hsl(240 100% 60%)" />
              <stop offset="100%" stopColor="hsl(270 100% 50%)" />
            </linearGradient>
          </defs>
          
          {/* Application to Gateway */}
          <line x1="150" y1="100" x2="300" y2="100" stroke="url(#wireGradient)" strokeWidth="3" className="animate-pulse" />
          <line x1="150" y1="200" x2="300" y2="150" stroke="url(#wireGradient)" strokeWidth="2" opacity="0.7" />
          <line x1="150" y1="300" x2="300" y2="200" stroke="url(#wireGradient)" strokeWidth="2" opacity="0.7" />
          
          {/* Gateway to AI Providers */}
          <line x1="500" y1="100" x2="650" y2="80" stroke="url(#wireGradient)" strokeWidth="3" className="animate-pulse" />
          <line x1="500" y1="150" x2="650" y2="150" stroke="url(#wireGradient)" strokeWidth="3" className="animate-pulse" />
          <line x1="500" y1="200" x2="650" y2="220" stroke="url(#wireGradient)" strokeWidth="3" className="animate-pulse" />
          
          {/* Monitoring Lines */}
          <line x1="400" y1="250" x2="400" y2="320" stroke="url(#wireGradient)" strokeWidth="2" opacity="0.8" />
        </svg>

        {/* Components */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          
          {/* Applications Column */}
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="font-semibold text-foreground">Your Applications</h4>
            </div>
            
            <Card className="card-elegant hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-sm text-foreground">Web App</div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Cpu className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-sm text-foreground">API Service</div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Database className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-sm text-foreground">Backend</div>
              </CardContent>
            </Card>
          </div>

          {/* AI Gateway Core */}
          <div className="col-span-2">
            <div className="text-center mb-6">
              <h4 className="font-semibold text-foreground mb-2">AI Gateway Core</h4>
              <div className="w-24 h-1 bg-gradient-wire mx-auto rounded-full animate-glow"></div>
            </div>
            
            <div className="relative">
              {/* Main Gateway Card */}
              <Card className="card-elegant border-2 border-purple-500/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-foreground">Intelligent Router</h5>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-accent/30 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-foreground">Security</div>
                    </div>
                    <div className="text-center p-3 bg-accent/30 rounded-lg">
                      <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-xs text-foreground">Speed</div>
                    </div>
                    <div className="text-center p-3 bg-accent/30 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-green-400 mx-auto mb-2" />
                      <div className="text-xs text-foreground">Analytics</div>
                    </div>
                    <div className="text-center p-3 bg-accent/30 rounded-lg">
                      <ArrowRight className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-xs text-foreground">Routing</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Pulse Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl animate-glow"></div>
            </div>
          </div>

          {/* AI Providers Column */}
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="font-semibold text-foreground">AI Providers</h4>
            </div>
            
            <Card className="card-elegant hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-8 h-8 bg-green-500 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GPT</span>
                </div>
                <div className="text-sm text-foreground">OpenAI</div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-8 h-8 bg-blue-500 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">CL</span>
                </div>
                <div className="text-sm text-foreground">Claude</div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GE</span>
                </div>
                <div className="text-sm text-foreground">Gemini</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Monitoring Dashboard */}
        <div className="mt-12">
          <Card className="card-elegant border border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-purple-400 mr-2" />
                <h5 className="font-semibold text-foreground">Real-time Monitoring</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="p-3 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">8ms</div>
                  <div className="text-xs text-muted-foreground">Latency</div>
                </div>
                <div className="p-3 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">1.2M</div>
                  <div className="text-xs text-muted-foreground">Requests</div>
                </div>
                <div className="p-3 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">$0.01</div>
                  <div className="text-xs text-muted-foreground">Per Request</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FlowDiagram