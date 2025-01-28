// Timeline.tsx
import Layout from './Layout'; // Path to your Layout component

export const Timeline = () => {
  return (
    <Layout>
      <div className="flex min-h-screen">
        {/* Main content */}
        <div className="flex-grow p-6">
          <h2 className="text-3xl font-semibold text-gray-700">Welcome to the Dashboard</h2>
          <p className="mt-4 text-gray-600">This is where your main content will go.</p>
        </div>
      </div>
    </Layout>
  );
};
