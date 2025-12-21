import React from "react";

import { CheckSquare, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router";
const HomePage = () => {
  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Create, update, and organize your tasks efficiently",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "See changes instantly with optimistic UI updates",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is safe with industry-standard security",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your productivity with detailed analytics",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Manage Tasks Like a<span className="text-primary-600"> Pro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your workflow with our powerful task management system.
            Stay organized, boost productivity, and achieve your goals.
          </p>
          <div className="flex justify-center  gap-4">
            <Link to="/tasks" className="btn-primary text-lg px-8 py-3">
              Get Started
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TaskMaster?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Organized?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of users who have transformed their productivity
          </p>
          <Link
            to="/tasks"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Start Managing Tasks
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
