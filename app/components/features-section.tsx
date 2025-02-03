import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Heart, Battery, Bell, Wifi, Waves, Smartphone } from "lucide-react"

const features = [
  {
    title: "Health Tracking",
    description: "Monitor heart rate, sleep, and activity levels",
    icon: Heart,
  },
  {
    title: "Long Battery Life",
    description: "Up to 7 days of battery life on a single charge",
    icon: Battery,
  },
  {
    title: "Smart Notifications",
    description: "Stay connected with message and call alerts",
    icon: Bell,
  },
  {
    title: "Wireless Connectivity",
    description: "Seamless Bluetooth and WiFi connectivity",
    icon: Wifi,
  },
  {
    title: "Water Resistant",
    description: "5 ATM water resistance for swimming",
    icon: Waves,
  },
  {
    title: "App Integration",
    description: "Compatible with iOS and Android devices",
    icon: Smartphone,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="flex justify-between py-20 bg-gray-50">
      <div className="container  mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

