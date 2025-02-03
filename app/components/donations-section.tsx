"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { DonationModal } from "./donations-modal"

const donations = [
  { amount: 2.99, description: "Basic Support" },
  { amount: 5.99, description: "Premium Support" },
  { amount: 10.99, description: "Pro Support" },
  { amount: null, description: "Custom Amount" },
]

export function DonationsSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(0)

  const handleDonateClick = (amount: number | null) => {
    setSelectedAmount(amount || 0)
    setModalOpen(true)
  }

  return (
    <>
      <section id="donations" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Support Our Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donations.map((donation) => (
              <Card key={donation.description}>
                <CardHeader>
                  <CardTitle className="text-center">{donation.amount ? `$${donation.amount}` : "Custom"}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{donation.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-black text-white" onClick={() => handleDonateClick(donation.amount)}>
                    Donate Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DonationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} amount={selectedAmount} />
    </>
  )
}

