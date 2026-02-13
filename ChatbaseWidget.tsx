'use client';

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

/* ===== Types ===== */
type ChatbaseQueueItem = unknown[];

interface ChatbaseFunction {
  (...args: ChatbaseQueueItem): void;
  q?: ChatbaseQueueItem[];
}

declare global {
  interface Window {
    chatbase?: ChatbaseFunction;
  }
}

export default function ChatbaseWidget() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn) return;

    // منع تحميل السكربت أكثر من مرة
    if (document.getElementById("chatbase-script")) return;

    // إنشاء chatbase بدون any
    if (!window.chatbase) {
      const chatbaseFn: ChatbaseFunction = (...args) => {
        chatbaseFn.q ??= [];
        chatbaseFn.q.push(args);
      };

      window.chatbase = chatbaseFn;
    }

    // تحميل السكربت الرسمي
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "gudgmoM-YwwZWQLadJ5UK"; // ⚠️ ID البوت
    script.async = true;
    script.setAttribute("domain", "www.chatbase.co");

    document.body.appendChild(script);

    // تعريف المستخدم
    setTimeout(() => {
      window.chatbase?.("identify", {
        userId: user?.id,
        email: user?.primaryEmailAddress?.emailAddress,
        name: user?.fullName,
      });
    }, 1500);

  }, [isSignedIn, user]);

  return null;
}
