import Slide from "./Slide"
import partner from "./images/partner.jpg"
import ct from "./images/ct.jpg"
import aaa from "./images/aaa.jpg"

export default function Home() {
    return (
      <main className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="p-1 flex justify-between items-center">
            <div>
            <h1 className="mb-2 text-[36px] font-bold">Make money movement your competitive edge</h1>
            <h3 className="text-md leading-relaxed text-black">
            Join the thousands of visionary companies building with Circle for near-instant, low-cost, global stablecoin transactions.
            </h3>
            </div>
            <a href="https://www.circle.com/contact/partner" target="_blank" className="bg-white px-[15px] py-[10px] hover:bg-slate-700 hover:text-white duration-300 rounded-md cursor-pointer font-bold">Partner with Circle</a>
          </div>
        </div>

      <section id="intro" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Slide />
      </section>

          
      <section id="intro" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-[20px]">Move money smarter</h1>
            <div className="flex justify-between gap-4">
            <section id="intro" className="overflow-hidden rounded-2xl mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Partner with Cricle</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                     Join the Circle network to unlock access to our global ecosystem of partners and products.
                    </p>
                    <a href="https://console.circle.com/signup?_gl=1*1yskoce*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NTc0NjgkajQ1JGwwJGgw" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Get started<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Build with Cricle</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                     Explore our Developer Console to see how you can integrate Circle solutions for your use case.
                    </p>
               <a href="https://console.circle.com/signup?_gl=1*1yskoce*_gcl_au*MTc5ODYxNzY1Ny4xNzU3ODQzMTQ3*_ga*MTk5NDQ5Njk3NC4xNzU3ODQzMTQ4*_ga_GJDVPCQNRV*czE3NTc4NTA3NjQkbzMkZzEkdDE3NTc4NTc0NjgkajQ1JGwwJGgw" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit ">Start building<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>
               </div>
          </div>

        </div>
      </section>

      
      <section id="intro" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
             <img src={partner.src} />
             <img src={ct.src} />
            </section>

      <section id="intro" className="overflow-hidden rounded-2xl border flex flex-col items-center border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
       <div className="flex p-4 items-center">
        <div className="w-[50%]"> <h3 className="font-bold text-[32px] leading-[42px]">Circle is building a new internet financial system, making money movement around the world as seamless as sending an email. </h3>
                    
                    <p className="text-sm text-[22px] leading-[32px] mt-[30px]">
                    Powered by USDC and EURC, and trusted by leading financial institutions since 2013, our platform connects traditional finance and digital assets to create a secure, always-on digital economy — unlocking opportunities for people and businesses globally.
                   </p></div>
        <div className="rounded-[15px] w-[50%] ">
       <img src="https://cdn.prod.website-files.com/67116d0daddc92483c812e88/6811ff237aae3e1d54c289a0_home-phone-sized.webp" className="rounded-lg" />
       </div>
       </div>
    
      </section>


      <section id="intro" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold text-center">Stay ahead of the curve with our comprehensive platform</h1>
            <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-center">
            Enterprise-grade infrastructure supporting the new internet financial system.
                    </p>
            <div className="flex justify-between gap-4 mt-[30px]">
            <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>USDC</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     STABLECOIN
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    The world’s largest regulated¹ digital dollar. Fully backed, fast, designed for stability, and built for global business.
                    </p>
                    <a href="https://www.circle.com/usdc" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>EURC</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     STABLECOIN
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    The world’s largest regulated¹ digital euro. Fully backed, fast, designed for stability, and built for global business.
                    </p>
                    <a href="https://www.circle.com/eurc" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>USYC</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Tokenized Funds
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    An institutional-grade tokenized money market fund with near-instant redeemability to USDC.
                    </p>
                    <a href="https://www.circle.com/usyc" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>
               </div>

               <div className="flex justify-between gap-4 mt-[10px]">
            <section id="intro" className="overflow-hidden rounded-2xl w-[50%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Circle Payments Network</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Payments
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    One integration for global stablecoin-powered payments.
                    </p>
                    <a href="https://www.circle.com/cpn" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[50%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Arc</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Blockchains
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    An open Layer-1 blockchain purpose-built for stablecoin finance. 
                    </p>
                    <a href="https://www.arc.network/" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               </div>

               <div className="flex justify-between gap-4 mt-[10px]">
            <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Mint</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Liquidity Services
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Mint, redeem, and manage USDC directly from Circle at global scale.
                    </p>
                    <a href="https://www.circle.com/circle-mint" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Wallets</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Developer Services
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Easily integrate digital asset storage, payments, and transactions into your apps. 
                    </p>
                    <a href="https://www.circle.com/wallets" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Contracts</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Developer Services
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    A curated library of customizable smart contract templates for tokenization and workflow automation.
                    </p>
                    <a href="https://www.circle.com/contracts" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>
               </div>

               <div className="flex justify-between gap-4 mt-[10px]">
            <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>CCTP</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Developer Services
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Transfer USDC natively between supported chains in seconds, more securely than traditional bridging.
                    </p>
                    <a href="https://www.circle.com/cross-chain-transfer-protocol" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Gateway</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Developer Services
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Enable a unified USDC balance for instant crosschain liquidity in 500 ms.
                    </p>
                    <a href="https://www.circle.com/gateway" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>

               <section id="intro" className="overflow-hidden rounded-2xl w-[33%] mb-[20px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 p-4">
                    <h3>Paymaster</h3>
                     <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-[12px] mt-[5px]">
                     Developer Services
                    </p>
                    <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Enable seamless transaction experiences by allowing users to pay gas fees in USDC.
                    </p>
                    <a href="https://www.circle.com/paymaster" target="_blank" className="rounded-full hover:scale-[1.01] duration-300 bg-emerald-100 px-3 py-2 cursor-pointer font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 flex items-center gap-2 w-fit">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 hover:scale-110 duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>

               </section>
               </div>
          </div>

        </div>
      </section>


      <section id="intro" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <h1 className="mb-4 text-[32px] leading-[24px] font-bold text-center mt-[30px]">Stay ahead of the curve with our comprehensive platform</h1>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-300 text-center mb-[20px]">Circle helps banks, businesses, developers, and consumers transact with confidence in an evolving digital economy. </p>
             <img src={aaa.src} />
         
            </section>
      


      


    </main>
    )
}