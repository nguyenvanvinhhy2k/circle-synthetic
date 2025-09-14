import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send } from "lucide-react";
import dobbyMess from "./images/botchat-new.png"
import Home from "./Home"
import tw from "./images/x-new.jpg"
import dc from "./images/dc-new.jpg"
import inn from "./images/in.png"
import web from "./images/web.png"


const menuItems = [
  {
    label: "Platform",
    children: [
      { label: "Circle Payments Network", href: "https://www.circle.com/cpn" },
      { label: "View Partner Blockchains", href: "https://www.circle.com/multi-chain-usdc" },
      { label: "USDC", href: "https://www.circle.com/usdc" },
      { label: "EURC", href: "https://www.circle.com/eurc" },
      { label: "USYC", href: "https://www.circle.com/usyc" },
      { label: "Arc", href: "https://www.arc.network/" },
    ]
  },
  {
    label: "Use Cases",
    children: [
      { label: "Payments", href: "https://www.circle.com/use-case/payments" },
      { label: "Dollar Access", href: "https://www.circle.com/use-case/dollar-access" },
      { label: "Trading Services", href: "https://www.circle.com/use-case/trading-services" },
    ]
  },
  {
    label: "Partners",
    children: [
      { label: "Alliance Program", href: "https://www.circle.com/alliance-program" },
      { label: "Member Directory", href: "https://partners.circle.com/?_gl=1*1ion0bf*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NTU5NTAkajIyJGwwJGgw" },
    ]
  },
  {
    label: "Developer",
    children: [
      { label: "Circle for Developers", href: "https://www.circle.com/developer" },
      { label: "Documentation", href: "https://developers.circle.com/?_gl=1*zr42p4*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NTU5NTAkajIyJGwwJGgw" },

    ]
  },
  {
    label: "Company",
    children: [
      { label: "About Circle", href: "https://www.circle.com/about-circle" },
      { label: "Circle Impact", href: "https://www.circle.com/circle-impact" },
      { label: "Investor Relations", href: "https://investor.circle.com/overview/default.aspx?_gl=1*12lhpqa*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NTU5NTAkajIyJGwwJGgw" },
    ]
  },
  {
    label: "Transparency",
    href: "https://www.circle.com/transparency"
  },
];


export default function SentientWiki() {

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: "init-msg", role: "bot", text: "Hello 👋 I am a Virtual Assistant supporter. How can I help you?" }
  ]);

  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMsg = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsSending(true);
    setLoading(true)

    const botId = crypto.randomUUID();
    setMessages((m) => [...m, { id: botId, role: "bot", text: "" }]);

    try {
      const res = await fetch(
        "https://api.fireworks.ai/inference/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FIREWORKS_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "accounts/sentientfoundation/models/dobby-unhinged-llama-3-3-70b-new",
            max_tokens: 1024,
            temperature: 0.5,
            top_p: 0.95,
            messages: [
              {
                role: "system",
                content:
                  "You are a Virtual Assistant, Can answer everything",
              },
              {
                role: "user",
                content: trimmed,
              },
            ],
          }),
        }
      );

      const data = await res.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botId ? { ...msg, text: data?.choices[0]?.message?.content } : msg
        )
      );
    } catch (err) {
      console.error(err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botId ? { ...msg, text: "Error occurred while fetching response" } : msg
        )
      );
    } finally {
      setLoading(false);
      setIsSending(false)
    }
  };

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }


  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, messages]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "0px";
    const next = Math.min(144, el.scrollHeight);
    el.style.height = next + "px";
  }, [input, open]);

  const brand = useMemo(
    () => ({
      ring: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      primary: "bg-indigo-600 hover:bg-indigo-700",
      subtle: "text-neutral-500",
      surface: "bg-white dark:bg-neutral-900",
      border: "border border-neutral-200 dark:border-neutral-800",
      text: "text-neutral-900 dark:text-neutral-100",
      bubbleUser: "bg-indigo-600 text-white",
      bubbleBot: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    }),
    []
  );

  return (

    <div className="min-h-dvh  text-zinc-900 ">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-[#fff9] backdrop-blur ">
        <div className="mx-auto flex max-w-[70rem] justify-between items-center gap-3 px-4 py-3">

          <div className=" w-[12%] gap-2">
            <img src="https://cdn.prod.website-files.com/67116d0daddc92483c812e88/67116d0daddc92483c812f72_Circle%20Logo.avif" className="h-[30px] w-full rounded-full" />
            {/* <span className=" text-lg sm:block hidden font-bold">Sentient Synthetic</span> */}
          </div>

          <nav className=" text-black">
            <ul className="flex space-x-6 px-6">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group cursor-pointer">
                  {/* Link cha */}
                  <a
                    href={item.href} target="_blank"
                    className="hover:text-yellow-400 inline-block px-2 py-1"
                  >
                    {item.label}
                  </a>

                  {/* Submenu */}
                  {item.children && (
                    <ul
                      className="absolute left-0 top-[30px] mt-1 hidden max-h-60 w-56 flex-col overflow-y-auto rounded-md bg-white text-black shadow-lg group-hover:flex z-50"
                    >
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>

      <div className="mx-auto grid max-w-[70rem] grid-cols-1 gap-6 px-4 py-4 ">
        <Home />
      </div>

      <footer className="border-t border-zinc-200 bg-[#ffff] py-8 text-sm ">
        <div className="mx-auto max-w-[85rem] px-4">
          <div className="grid grid-cols-2 gap-6  sm:grid-cols-4 md:grid-cols-5">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Platform</div>
              <ul className="space-y-1">
                <li><a href="https://www.circle.com/usdc" target="_blank" className="hover:underline">USDC</a></li>
                <li><a href="https://www.circle.com/eurc" target="_blank" className="hover:underline">EURC</a></li>
                <li><a href="https://www.circle.com/usyc" target="_blank" className="hover:underline">USYC</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Use Cases</div>
              <ul className="space-y-1">
                <li><a href="https://www.circle.com/use-case/payments" target="_blank" className="hover:underline">Payments</a></li>
                <li><a href="https://www.circle.com/use-case/dollar-access" target="_blank" className="hover:underline">Dollar Access</a></li>
                <li><a href="https://www.circle.com/use-case/trading-services" target="_blank" className="hover:underline">Trading Services</a></li>
                <li><a href="https://www.circle.com/case-studies" target="_blank" className="hover:underline">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Developer</div>
              <ul className="space-y-1">
                <li><a href="https://www.circle.com/developer" target="_blank" className="hover:underline">Developer Hub</a></li>
                <li><a href="https://developers.circle.com/?_gl=1*1imunyw*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NjE2OTgkajYwJGwwJGgw" target="_blank" className="hover:underline">Documentation</a></li>
                <li><a href="https://learn.circle.com/api-reference?_gl=1*1imunyw*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NjE2OTgkajYwJGwwJGgw" target="_blank" className="hover:underline">API Reference</a></li>
                <li><a href="https://learn.circle.com/sample-projects?_gl=1*1imunyw*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NjE2OTgkajYwJGwwJGgw" target="_blank" className="hover:underline">Sample Projects</a></li>
                <li><a href="https://faucet.circle.com/?_gl=1*19ntrpe*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NjE2OTgkajYwJGwwJGgw" target="_blank" className="hover:underline">Testnet Faucet</a></li>
                <li><a href="https://www.circle.com/topic/developer" target="_blank" className="hover:underline">Developer Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Company</div>
              <ul className="space-y-1">
                <li><a href="https://www.circle.com/about-circle" target="_blank" className="hover:underline">About Circle</a></li>
                <li><a href="https://www.circle.com/alliance-program" target="_blank" className="hover:underline">Alliance Program</a></li>
              </ul>
            </div>

            <div>
              <ul className="mb-2 text-xs font-semibold uppercase justify-center items-center tracking-wide flex 1">
                <li><a href="https://twitter.com/circle" target="_blank" className="hover:scale-[1.04]"><img src={tw.src} className="w-8 h-8 " /></a></li>
                <li><a href="https://discord.com/invite/buildoncircle" target="_blank" className="hover:scale-[1.01]"><img src={dc.src} className="w-8 h-8" /></a></li>
                <li><a href="https://www.linkedin.com/company/circle-internet-financial/" target="_blank" className="hover:scale-[1.01]"><img src={inn.src} className="w-6 h-6 mx-2" /></a></li>
                <li><a href="https://www.circle.com/" target="_blank" className="hover:scale-[1.01]"><img src={web.src} className="w-6 h-6" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


      <button
        type="button"
        aria-label="Mở trò chuyện"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-10 animate-bounce right-10 z-40 animation-subtle-scale h-[150px] w-[150px]"
      >
        {!open ? <img src={dobbyMess.src} className="h-full w-full hover:scale-105 duration-300" /> : ""}
      </button>
      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className={`fixed bottom-10 right-6 z-40 w-[92vw] max-w-md rounded-2xl shadow-2xl ${brand.surface} ${brand.border}`}
            role="dialog"
            aria-modal="true"
            aria-label="Hộp thoại trò chuyện"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 ">
              <div className="flex items-center gap-2">
                <img src={dobbyMess.src} className="h-11 w-11 rounded-full" />
                <div className="leading-tight">
                  <p className={`text-sm font-semibold ${brand.text}`}>Virtual Assistant</p>
                  <div className="text-xs text-neutral-500 flex gap-1 items-center">Online <div className="bg-lime-500 w-2 h-2 rounded-full mt-[2px]"></div></div>
                </div>
              </div>
              <button
                aria-label="Đóng"
                onClick={() => setOpen(false)}
                className={`p-2 rounded-xl bg-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-300 ${brand.ring}`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="px-3 sm:px-4 py-3 h-[50vh] overflow-y-auto space-y-3">
              {messages.map((m, i) => {
                const isLast = i === messages.length - 1; // kiểm tra tin nhắn cuối cùng
                return (
                  <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm ${m.role === "user" ? brand.bubbleUser : brand.bubbleBot}`}>
                      {m.role === "user" ? (
                        m.text
                      ) : loading && isLast ? ( // chỉ áp dụng cho bot + message cuối cùng
                        <div className="flex items-center space-x-1 text-whitep-3 rounded-xl">
                          <span className="w-2 h-2 rounded-full bg-white animate-dot1"></span>
                          <span className="w-2 h-2 rounded-full bg-white animate-dot2"></span>
                          <span className="w-2 h-2 rounded-full bg-white animate-dot3"></span>
                        </div>
                      ) : (
                        m.text
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Enter message..."
                  className={`flex-1 resize-none rounded-xl px-3 py-2 overflow-hidden text-sm ${brand.surface} ${brand.text} ${brand.border} ${brand.ring}`}
                  rows={1}
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim() || isSending}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium ${brand.primary} text-white disabled:opacity-50 ${brand.ring}`}
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
              <p className="mt-2 text-[11px] text-neutral-500">Press Enter to send • Shift+Enter to go to new line</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


