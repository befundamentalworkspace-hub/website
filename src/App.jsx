import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout.jsx";
import RequestAudit from "./pages/RequestAudit.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Results from "./pages/Results.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import OurClients from "./pages/OurClients.jsx";
import NotFound from "./pages/NotFound.jsx";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing.jsx";
import SEOService from "./pages/services/SEOService.jsx";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment.jsx";
import PerformanceMarketing from "./pages/services/PerformanceMarketing.jsx";
import PipelineOptimization from "./pages/services/PipelineOptimization.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminUnauthorized from "./pages/AdminUnauthorized.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminAuditRequests from "./pages/AdminAuditRequests.jsx";

import AdminOnlyRoute from "./components/AdminOnlyRoute.jsx";
import CMSRoute from "./components/CMSRoute.jsx";

import AdminBlogPosts from "./pages/AdminBlogPosts.jsx";
import AdminBlogEditor from "./pages/AdminBlogEditor.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/request-audit" element={<RequestAudit />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/seo" element={<SEOService />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/pipeline-optimization" element={<PipelineOptimization />} />
        </Route>

        {/* Admin login */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/unauthorized" element={<AdminUnauthorized />} />

        {/* CMS routes: admin + seo_expert */}
        <Route element={<CMSRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="blog" element={<AdminBlogPosts />} />
            <Route path="blog/new" element={<AdminBlogEditor />} />
            <Route path="blog/edit/:id" element={<AdminBlogEditor />} />
          </Route>
        </Route>

        {/* Admin-only routes */}
        <Route element={<AdminOnlyRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="audit-requests" element={<AdminAuditRequests />} />
          </Route>
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

