import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <h2 className="mt-4 text-xl font-medium text-white">
          Loading 3D Experience...
        </h2>
        <p className="mt-2 text-gray-400">
          Please wait while we prepare your portfolio experience
        </p>
      </div>
    </div>
  );
}
