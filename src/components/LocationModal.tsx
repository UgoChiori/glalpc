import React from "react";
import { useNavigate } from "react-router-dom";

interface LocationModalProps {
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleBrazil = () => {
    onClose();
    navigate("/brazil");
  };

  const handleNigeria = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Where do you need legal services?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Would you like legal services in Nigeria or Brazil?
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleNigeria}
              className="w-full rounded-xl bg-gray-900 px-6 py-3.5 font-medium text-white transition hover:bg-gray-800"
            >
              Nigeria
            </button>

            <button
              type="button"
              onClick={handleBrazil}
              className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-medium text-gray-900 transition hover:bg-gray-100"
            >
              Brazil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;