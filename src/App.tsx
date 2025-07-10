
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

// Product Pages
import WaterTreatmentPlant from "./pages/products/WaterTreatmentPlant";
import EffluentTreatmentPlant from "./pages/products/EffluentTreatmentPlant";
import SewageTreatmentPlant from "./pages/products/SewageTreatmentPlant";
import AllSourcesOfWater from "./pages/products/AllSourcesOfWater";
import Filtration from "./pages/products/Filtration";
import ClarificationSystem from "./pages/products/ClarificationSystem";
import DemineralisationPlant from "./pages/products/DemineralisationPlant";
import UltraFiltrationSystem from "./pages/products/UltraFiltrationSystem";
import ReverseOsmosisSystem from "./pages/products/ReverseOsmosisSystem";
import NanoFiltrationSystem from "./pages/products/NanoFiltrationSystem";
import HighPurityGeneration from "./pages/products/HighPurityGeneration";
import ZeroLiquidDischarge from "./pages/products/zeroliquiddischarge";
import SwimmingPoolSystems from "./pages/products/SwimmingPoolSystems";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Product Routes */}
          <Route path="/products/water-treatment-plant" element={<WaterTreatmentPlant />} />
          <Route path="/products/effluent-treatment-plant" element={<EffluentTreatmentPlant />} />
          <Route path="/products/sewage-treatment-plant" element={<SewageTreatmentPlant />} />
          <Route path="/products/all-sources-of-water" element={<AllSourcesOfWater />} />
          <Route path="/products/filtration" element={<Filtration />} />
          <Route path="/products/clarification-system" element={<ClarificationSystem />} />
          <Route path="/products/demineralisation-plant" element={<DemineralisationPlant />} />
          <Route path="/products/ultra-filtration-system" element={<UltraFiltrationSystem />} />
          <Route path="/products/reverse-osmosis-system" element={<ReverseOsmosisSystem />} />
          <Route path="/products/nano-filtration-system" element={<NanoFiltrationSystem />} />
          <Route path="/products/high-purity-generation-distribution" element={<HighPurityGeneration />} />
          <Route path="/products/zero-liquid-discharge" element={<ZeroLiquidDischarge />} />
          <Route path="/products/swimming-pool-systems" element={<SwimmingPoolSystems />} />

          {/* Catch-all route for 404 Not Found */}
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
