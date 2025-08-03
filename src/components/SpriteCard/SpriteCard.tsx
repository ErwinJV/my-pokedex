"use client";
import { Box, Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface SpriteCardProps {
  name: string;
  url: string | null;
  fallback?: string | null;
}

export default function SpriteCard({ name, url, fallback }: SpriteCardProps) {
  const [imgSrc, setImgSrc] = useState(url || fallback || null);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (fallback && !error) {
      setImgSrc(fallback);
      setError(true);
    } else {
      setImgSrc(null);
    }
  };

  if (!imgSrc) return null;

  return (
    <Box
      className="rounded-lg p-4 text-center bg-gray-50 "
      component={Paper}
      elevation={9}
    >
      <h3 className="font-bold mb-2 text-sm md:text-base w-[95%] truncate">
        {name}
      </h3>
      <Image
        src={imgSrc}
        alt={`${name} sprite`}
        className="mx-auto w-16 h-16 object-contain"
        onError={handleError}
        width={320}
        height={240}
      />
    </Box>
  );
}
