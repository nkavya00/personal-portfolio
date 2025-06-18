import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Resume</h1>
          <Button
            onClick={() => window.open("/KavyaNarayanResume.pdf", "_blank")}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
        <iframe
          src="/KavyaNarayanResume.pdf"
          className="w-full h-[calc(100vh-200px)] border rounded-lg"
          title="Resume"
        />
      </div>
    </div>
  )
} 