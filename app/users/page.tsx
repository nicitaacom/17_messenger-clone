"use client";

import EmptyState from "../components/EmptyState";

export default function Page() {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
}
