import { useState, useCallback, useEffect, useRef } from "react";
import { Upload, Image as ImageIcon, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const UploadBox = ({ onAnalyze }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const { toast } = useToast();
  const videoRef = useRef(null);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload an image file",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleFileInput = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const clearPreview = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview(null);
  };

  const handleRemove = () => {
    clearPreview();
  };

  const handleAnalyze = () => {
    if (file) {
      onAnalyze(file);
    }
  };

  const stopCameraStream = useCallback(() => {
    cameraStream?.getTracks().forEach((track) => track.stop());
    setCameraStream(null);
  }, [cameraStream]);

  useEffect(() => {
    return () => {
      stopCameraStream();
      clearPreview();
    };
  }, [stopCameraStream]);

  useEffect(() => {
    if (isCameraOpen && videoRef.current && cameraStream) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current
        .play()
        .catch(() => {
          toast({
            title: "Camera error",
            description: "Could not start the camera preview.",
            variant: "destructive",
          });
        });
    }
  }, [isCameraOpen, cameraStream, toast]);

  const openCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      toast({
        title: "Camera unavailable",
        description: "Your device does not support camera access in this browser.",
        variant: "destructive",
      });
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setCameraStream(stream);
      setIsCameraOpen(true);
    } catch (error) {
      toast({
        title: "Camera permission denied",
        description: "We could not access the camera. Please allow permission and try again.",
        variant: "destructive",
      });
    }
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
    stopCameraStream();
  };

  const handleCapture = () => {
    const videoEl = videoRef.current;
    if (!videoEl) {
      toast({
        title: "Capture failed",
        description: "Camera preview is not available.",
        variant: "destructive",
      });
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = videoEl.videoWidth || 1280;
    canvas.height = videoEl.videoHeight || 720;
    const context = canvas.getContext("2d");
    context.drawImage(videoEl, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          toast({
            title: "Capture failed",
            description: "Unable to capture photo. Please try again.",
            variant: "destructive",
          });
          return;
        }
        const capturedFile = new File([blob], `floodwatch-capture-${Date.now()}.png`, {
          type: "image/png",
        });
        clearPreview();
        setFile(capturedFile);
        setPreview(URL.createObjectURL(capturedFile));
        closeCamera();
      },
      "image/png",
      0.92,
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        {!preview ? (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer bg-muted/30 ${
              isDragging
                ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              Upload & Analyze
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Supports: JPG, PNG, WEBP (Max 10MB)
            </p>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-white shadow-md">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-auto"
              />
              <button
                onClick={handleRemove}
                className="absolute top-3 right-3 p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleAnalyze} className="flex-1" size="lg">
                <ImageIcon className="w-5 h-5 mr-2" />
                Analyze Flood Risk
              </Button>
              <Button onClick={handleRemove} variant="outline" size="lg">
                Upload New
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={openCamera}
              >
                <Camera className="w-5 h-5 mr-2" />
                Retake with Camera
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {!preview && (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={openCamera}
            >
              <Camera className="w-5 h-5 mr-2" />
              Take Photo With Camera
            </Button>
          )}
        </div>
      </div>

      {isCameraOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-background rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Capture New Image
                </p>
                <h3 className="text-xl font-semibold">Live Camera Preview</h3>
              </div>
              <button
                onClick={closeCamera}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close camera"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  onClick={handleCapture}
                  className="flex-1"
                  size="lg"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Capture Photo
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={closeCamera}
                >
                  Cancel
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Make sure there&apos;s adequate lighting for accurate flood analysis.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadBox;

