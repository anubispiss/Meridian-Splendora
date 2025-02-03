import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Meridian Splendora was founded with a vision to create innovative smartwatches that seamlessly blend
              technology with everyday life. Our team of passionate engineers and designers work tirelessly to bring you
              the best in wearable technology.
            </p>
            <p className="text-gray-600">
              We believe in creating products that not only look beautiful but also enhance your daily life through
              smart features and intuitive design. Our commitment to quality and innovation drives everything we do.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

