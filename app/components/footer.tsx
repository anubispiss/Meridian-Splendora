import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Meridian Splendora</h3>
            <p className="text-gray-600 mb-4">
              Creating innovative smartwatches that enhance your daily life through seamless technology integration.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-600 hover:text-black">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#donations" className="text-gray-600 hover:text-black">
                  Donations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>info.meridiansplendora@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+91 628 983 7765</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>

          {/* Dev & Design */}
          <div>
            <h3 className="font-bold text-xl mb-4">Dev & Design</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Prithweesh Banerjee</li>
              <li>Ayush Gupta</li>
              <li>Devdeep Modak</li>
              <li>Archishman Mitra</li>
              <li>Tanveer Hossain</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600">© 2024 Meridian Splendora. All rights reserved.</p>
          <Link href="/privacy" className="text-gray-600 hover:text-black mt-4 sm:mt-0">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

