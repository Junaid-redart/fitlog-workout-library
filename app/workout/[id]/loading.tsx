import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoaderCircle
          size={42}
          className="animate-spin text-[#ccff00]"
        />

        <p className="text-sm tracking-widest text-gray-400">
          Loading workout...
        </p>
      </div>
    </div>
  );
};

export default Loading;
