import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Registration Successful!
        </h1>
        
        <div className="space-y-4">
          <p className="text-gray-700 font-semibold">
            Join our WhatsApp community to stay connected with us
          </p>
          
          <Button
            asChild
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <a
              href="https://chat.whatsapp.com/CwcPd7pWj1SH8gekj2roPq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Group
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
