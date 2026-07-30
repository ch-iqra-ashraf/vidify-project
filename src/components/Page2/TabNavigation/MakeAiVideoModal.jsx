import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";

const PRODUCT_IMAGES = [
  { id: 1, src: "/images/photo1.png" },
  { id: 2, src: "/images/Photo2.png" },
  { id: 3, src: "/images/Photo3.png" },
  { id: 4, src: "/images/Photo4.png" },
  { id: 5, src: "/images/Photo5.png" },
];

export default function MakeAiVideoModal({ onClose, onGenerate }) {
  const [selectedImageId, setSelectedImageId] = useState(1);
  const [startImage, setStartImage] = useState(PRODUCT_IMAGES[0]);
  const [endImage, setEndImage] = useState(null);
  const [prompt, setPrompt] = useState("");

  const toggleSelect = (img) => {
    setSelectedImageId(img.id === selectedImageId ? null : img.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-xl border-b border-gray-100 bg-gray-50 px-5 py-3.5">
          <h2 className="text-[15px] font-medium text-gray-900">Make AI video</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-5">
          {/* Product images */}
          <p className="mb-3 text-[13px] font-medium text-gray-700">Select product images</p>
          <div className="flex items-center gap-3">
            {PRODUCT_IMAGES.map((img) => {
              const isSelected = selectedImageId === img.id;
              return (
                <button
                  type="button"
                  key={img.id}
                  onClick={() => {
                    toggleSelect(img);
                    setStartImage(img);
                  }}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition ${
                    isSelected ? "border-gray-300 ring-1 ring-gray-300" : "border-gray-200"
                  }`}
                >
                  <img src={img.src} alt="" className="h-full w-full object-cover" />
                  <span
                    className={`absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded border ${
                      isSelected
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-white/80 bg-white/70"
                    }`}
                  >
                    {isSelected && <Check size={11} strokeWidth={3} />}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="mt-3 flex justify-end gap-1">
            <button
              type="button"
              disabled
              className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Start / End image selection */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="mb-2 text-[13px] font-medium text-gray-700">Select start image</p>
              <div className="aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                {startImage ? (
                  <img src="/images/Photo6.png" alt="" className="h-full w-full object-cover" />
                ) : (
                  <EmptyImageState />
                )}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[13px] font-medium text-gray-700">
                Select end image <span className="font-normal text-gray-400">(optional)</span>
              </p>
              <button
                type="button"
                onClick={() => setEndImage(endImage ?? PRODUCT_IMAGES[1])}
                className="aspect-square w-full overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-50/60"
              >
                {endImage ? (
                  <img src="/images/Photo7.png" alt="" className="h-full w-full object-cover" />
                ) : (
                  <EmptyImageState />
                )}
              </button>
            </div>
          </div>

          {/* Video prompt */}
          <div className="mt-6">
            <p className="mb-2 text-[13px] font-medium text-gray-700">
              Video prompt <span className="font-normal text-gray-400">(optional)</span>
            </p>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Share your vision in a few clear words"
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-5 py-3.5">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onGenerate?.({ startImage, endImage, prompt })}
            className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            <Sparkles size={15} />
            Generate AI video
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyImageState() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gray-300">
        <circle cx="8" cy="8" r="2" fill="currentColor" />
        <path
          d="M3 18l5-5 4 4 5-6 4 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
