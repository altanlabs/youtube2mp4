"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleConvert = () => {
    // Placeholder for conversion logic
    console.log("Converting URL:", url);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">YouTube to MP4 Converter</h1>
        <p className="text-xl text-gray-400 mb-8">Enter a YouTube link to convert it to MP4</p>
        <div className="flex flex-col items-center">
          <Input
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mb-4"
          />
          <Button
            onClick={handleConvert}
            className="bg-white text-black hover:bg-gray-200"
          >
            Convert to MP4
          </Button>
        </div>
      </div>
    </div>
  );
}
