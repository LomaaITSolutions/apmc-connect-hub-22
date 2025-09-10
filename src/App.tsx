import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Constitution from "./pages/Constitution";
import LatestUpdates from "./pages/LatestUpdates";
import MeetingsDecisions from "./pages/MeetingsDecisions";
import ActsRules from "./pages/ActsRules";
import Notifications from "./pages/Notifications";
import InAbsentiaRegistration from "./pages/InAbsentiaRegistration";
import InAbsentiaAffidavit from "./pages/InAbsentiaAffidavit";
import GoodStandingCertificate from "./pages/GoodStandingCertificate";
import TemporaryPermission from "./pages/TemporaryPermission";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/latest-updates" element={<LatestUpdates />} />
          <Route path="/meetings-decisions" element={<MeetingsDecisions />} />
          <Route path="/acts-rules" element={<ActsRules />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/in-absentia-registration" element={<InAbsentiaRegistration />} />
          <Route path="/in-absentia-affidavit" element={<InAbsentiaAffidavit />} />
          <Route path="/good-standing-certificate" element={<GoodStandingCertificate />} />
          <Route path="/temporary-permission" element={<TemporaryPermission />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
