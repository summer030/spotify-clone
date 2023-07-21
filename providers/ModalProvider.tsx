"use client";

import { useEffect, useState } from "react";
import AuthModal from "@/app/components/AuthModal";
import UploadModal from "@/app/components/UploadModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Avoid hydration errors in server-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
