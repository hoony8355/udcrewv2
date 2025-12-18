import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#1a1a1a] border border-white/10 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#222]">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="text-white/50 hover:text-accent transition-colors text-3xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {children}
        </div>

        {/* Footer (Optional) */}
        {footer && (
          <div className="p-6 border-t border-white/10 bg-[#222]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;