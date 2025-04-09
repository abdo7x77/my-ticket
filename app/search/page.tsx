"use client";

import { Suspense } from "react";
import Spinner from "@/component/Spinner";
import SearchPageContent from "./SearchPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><Spinner /></div>}>
      <SearchPageContent />
    </Suspense>
  );
}
