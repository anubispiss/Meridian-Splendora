import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog"
import Image from "next/image"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
}

export function DonationModal({ isOpen, onClose, amount }: DonationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 text-black dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Donate ${amount}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Scan the QR code below to complete your donation
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4">
          <Image
            src="/qr.jpg"
            alt="Donation QR Code"
            width={300}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}