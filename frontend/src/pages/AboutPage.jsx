import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About TaskMaster
        </h1>
        <p className="text-xl text-gray-600">
          A modern task management solution built with cutting-edge technologies
        </p>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Frontend
            </h3>
            <ul className="space-y-2">
              {['React 18', 'React Router', 'TanStack Query', 'React Hook Form', 'Tailwind CSS', 'Lucide Icons'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Backend
            </h3>
            <ul className="space-y-2">
              {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Zod Validation', 'REST API'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Key Features
        </h2>
        <ul className="space-y-3">
          {[
            'Optimistic UI updates for instant feedback',
            'Form validation with React Hook Form',
            'Kanban board and list views',
            'Real-time search and filtering',
            'Responsive design for all devices',
            'Loading and error states',
            'Toast notifications',
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}