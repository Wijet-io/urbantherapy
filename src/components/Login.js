import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [code, setCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'une authentification
    setTimeout(() => {
      if (code === '123Urban*') {
        onLogin(true);
      } else {
        alert('Code incorrect.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="relative z-10 w-full max-w-md">
        <div className="card-modern p-10">
          {/* Logo et titre */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/assets/img/urbantherapy.svg" 
                alt="Logo Urban Therapy" 
                className="h-16 w-auto mx-auto" 
              />
            </div>
            <h1 className="text-display text-2xl text-text-primary mb-2">
              Accès Privé
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-caption font-semibold text-text-primary mb-3">
                Code d'Accès Confidentiel
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-text-secondary" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-border-light rounded-xl text-text-primary bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
                  placeholder="Saisir le code..."
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-text-secondary hover:text-text-primary transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-text-secondary hover:text-text-primary transition-colors" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="text-white">Accéder à la Proposition</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login; 