
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import LoadingScreen from "@/components/LoadingScreen";
import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Education from "@/pages/Education";
import Projects from "@/pages/Projects";
import Achievements from "@/pages/Achievements";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create a sound directory
    console.log("Initializing application...");
    
    // For a real implementation, we'd have these audio files
    // This is just for demonstration purposes
    console.log("Sound effects would play if audio files were available");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <BrowserRouter>
            <PageLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageLayout>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
