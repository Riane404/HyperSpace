// Layout.tsx
import { SideBar } from './SideBar'; // Path to your SideBar component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <div className="ml-64 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}
