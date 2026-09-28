import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 shadow-xs",
    ai: "bg-purple-50 text-indigo-700 border border-purple-200 hover:bg-purple-100 focus:ring-purple-400 font-semibold",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900"
  };

  const sizes = {
    sm: "px-2.5 py-1.5 text-xs gap-1.5",
    md: "px-3.5 py-2 text-sm gap-2",
    lg: "px-4 py-2.5 text-base gap-2.5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
};

export const Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-lg" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className={`bg-white rounded-xl shadow-xl w-full ${maxWidth} overflow-hidden transform transition-all border border-gray-200`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 rounded-lg p-1 hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const Loader = ({ label = "Loading GlassBox AI analysis..." }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3"></div>
    <span className="text-sm font-medium text-gray-600">{label}</span>
  </div>
);

export const EmptyState = ({ title = "No data available", description = "Get started by uploading a dataset.", action }) => (
  <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-dashed border-gray-300 rounded-xl">
    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 text-xl font-bold">
      📊
    </div>
    <h4 className="text-base font-semibold text-gray-900 mb-1">{title}</h4>
    <p className="text-sm text-gray-500 max-w-sm mb-4">{description}</p>
    {action}
  </div>
);
