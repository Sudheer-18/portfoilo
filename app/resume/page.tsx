"use client";

import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure the file is inside the `public` folder
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <div className="w-full max-w-4xl h-[600px] border shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="/resume.pdf"
          width="100%"
          height="100%"
          className="border-none"
        ></iframe>
      </div>
      <Button onClick={handleDownload} className="mt-4">
        Download Resume
      </Button>
    </div>
  );
}
