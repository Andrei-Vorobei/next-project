import { ProjectsContent } from "@/components/projocts-content";
import { Suspense } from "react";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className='min-h-screen bg-black' />}>
      <ProjectsContent />
    </Suspense>
  );
}
