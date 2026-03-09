"use client";

import { useState, useCallback } from "react";
import { Link2, Share2, Check } from "lucide-react";

interface ResultShareProps {
  /** Plain text summary of the calculation result */
  resultText: string;
}

export function ResultShare({ resultText }: ResultShareProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }, []);

  const handleCopyLink = useCallback(async () => {
    const ok = await copyToClipboard(window.location.href);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copyToClipboard]);

  const handleShare = useCallback(async () => {
    // Try Web Share API first (mobile browsers, some desktop)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: resultText.split("\n")[0],
          text: resultText,
          url: window.location.href,
        });
        return;
      } catch (e) {
        // User cancelled or API failed — fall through to clipboard
        if ((e as DOMException)?.name === "AbortError") return;
      }
    }

    // Fallback: copy full result text to clipboard
    const ok = await copyToClipboard(resultText);
    if (ok) {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  }, [resultText, copyToClipboard]);

  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        결과 공유하기
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleCopyLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              복사됨!
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              링크 복사
            </>
          )}
        </button>
        <button
          onClick={handleShare}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          {shared ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              복사됨!
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4" />
              카카오톡 공유
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        계산 결과는 서버에 저장되지 않습니다
      </p>
    </div>
  );
}
