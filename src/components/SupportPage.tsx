import { useState } from 'react';
import { Send, CheckCircle, Instagram, Facebook, Twitter } from 'lucide-react';

interface SupportPageProps {
  onClose: () => void;
  onNavigateToWhy: () => void;
}

export default function SupportPage({ onClose, onNavigateToWhy }: SupportPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-[#0E0E10] z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0057FF] to-[#00A3FF] rounded-lg flex items-center justify-center font-bold text-xl">
                D
              </div>
              <span className="text-xl font-bold">Dailymotion Sport</span>
            </div>
            <button
              onClick={onClose}
              className="text-[#CCCCCC] hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Support et Assistance
            </h1>
            <p className="text-lg text-[#CCCCCC] max-w-2xl mx-auto">
              Une question ? Un problème technique ?<br />
              Laissez-nous vos coordonnées, et notre équipe vous recontactera rapidement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-8 md:p-12 rounded-xl border-2 border-gray-800 mb-12">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message envoyé !</h2>
                <p className="text-lg text-[#CCCCCC]">
                  Merci pour votre message. Notre équipe vous répondra sous 24 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors text-white"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Adresse e-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors text-white"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors text-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="payment">Problème de paiement</option>
                    <option value="technical">Problème technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors text-white resize-none"
                    placeholder="Décrivez votre problème ou votre question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0057FF] hover:bg-[#0046CC] text-white py-4 rounded-lg font-semibold transition-all blue-glow text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>

                <p className="text-center text-sm text-[#CCCCCC]">
                  Notre équipe répond généralement sous 24 heures.
                </p>
              </form>
            )}
          </div>

          <footer className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-6 text-sm">
                <button
                  onClick={onNavigateToWhy}
                  className="text-[#CCCCCC] hover:text-[#0057FF] transition-colors"
                >
                  Qui sommes-nous
                </button>
                <span className="text-[#CCCCCC]">Support</span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0057FF] rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0057FF] rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0057FF] rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center mt-8 text-sm text-[#CCCCCC]">
              © 2025 Dailymotion Sport – Tous droits réservés.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
