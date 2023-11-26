import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 flex-grow pb-4">
      <div className="h-full container flex items-center">
      <div className="bg-card border rounded-md border-border p-4 flex-1">
      {children}
      </div>
    </div>
      
    </div>
  );
}