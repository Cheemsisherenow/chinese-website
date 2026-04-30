import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);
  const containerRef = useRef(null);
  const section2Ref = useRef(null); 
  const section3Ref = useRef(null); 
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const bgRef = useRef(null);
  const scannerRef = useRef(null);
  
  const yyRef = useRef(null);
  const whiteSvgRef = useRef(null);
  const blackSvgRef = useRef(null);
  
  const whiteClipRef = useRef(null);
  const blackClipRef = useRef(null);
  
  const whiteImgRef = useRef(null);
  const blackImgRef = useRef(null);

  const whiteTrackerRef = useRef(null);
  const blackTrackerRef = useRef(null);
  const chinaTextRef = useRef(null);
  const americaTextRef = useRef(null);
  const vsTextRef = useRef(null);

  const yinYangPath = "M130,10 A120,120 0 0,1 130,250 A60,60 0 0,1 130,130 A60,60 0 0,0 130,10 Z M 130 170 A 20 20 0 1 0 130 210 A 20 20 0 1 0 130 170 Z M 130 50 A 20 20 0 1 0 130 90 A 20 20 0 1 0 130 50 Z";

  useGSAP(() => {
    const updateTextPositions = () => {
      if (!whiteTrackerRef.current || !blackTrackerRef.current) return;

      const wRect = whiteTrackerRef.current.getBoundingClientRect();
      const bRect = blackTrackerRef.current.getBoundingClientRect();

      gsap.set(chinaTextRef.current, {
        x: wRect.right + 40, 
        y: wRect.top + wRect.height / 2, 
        yPercent: -50,
        xPercent: 0 
      });

      gsap.set(americaTextRef.current, {
        x: bRect.left - 40, 
        y: bRect.top + bRect.height / 2, 
        yPercent: -50,
        xPercent: -100 
      });
    };

    const ctx = gsap.context(() => {
      updateTextPositions();

      // ==========================================
      // SECTION 1: THE YIN YANG SPLIT
      // ==========================================
      const tl = gsap.timeline({
        onUpdate: updateTextPositions,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%", 
          scrub: true,
          pin: true,
          onLeave: () => {
            gsap.to(mainRef.current, { backgroundColor: "#fcf9f2", duration: 1, overwrite: "auto" });
            gsap.to(bgRef.current, { opacity: 0, duration: .5, overwrite: "auto" });
            gsap.to(vsTextRef.current, { color: "#111111", duration: 1, overwrite: "auto" });
          },
          onEnterBack: () => {
            gsap.to(mainRef.current, { backgroundColor: "#000000", duration: 1, overwrite: "auto" });
            gsap.to(bgRef.current, { opacity: 1, duration: .5, overwrite: "auto" });
            gsap.to(vsTextRef.current, { color: "#ffffff", duration: 1, overwrite: "auto" });
          }
        },
      });

      tl.to(yyRef.current, { rotation: 480, transformOrigin: "50% 50%", ease: "none", duration: 4 }, 0);
      tl.to([whiteClipRef.current, whiteTrackerRef.current], { rotation: 480, svgOrigin: "130 130", ease: "none", duration: 4 }, 0);
      tl.to([blackClipRef.current, blackTrackerRef.current], { rotation: "+=480", svgOrigin: "130 130", ease: "none", duration: 4 }, 0);
      tl.to([whiteImgRef.current, blackImgRef.current], { x: "+=0.001", ease: "none", duration: 4 }, 0);
      
      tl.to([whiteImgRef.current, blackImgRef.current], { opacity: 1, duration: 2, delay: 1, ease: "power2.inOut" }, "<");
      tl.to([yyRef.current, whiteSvgRef.current, blackSvgRef.current], { scale: 7, duration: 3, ease: "power2.in" }, "<");
      tl.to(yyRef.current, { opacity: 0, duration: 0.1 });

      tl.to(whiteSvgRef.current, { x: "-50vw", duration: 3, ease: "power2.inOut" }, "<");
      tl.to(blackSvgRef.current, { x: "50vw", duration: 3, ease: "power2.inOut" }, "<");
      
      tl.to([chinaTextRef.current, americaTextRef.current], { opacity: 1, duration: 1.5, ease: "power1.inOut" }, "<");
      tl.to(vsTextRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.5)" }, "<");
      
      tl.to(bgRef.current, { opacity: 1, duration: 2, ease: "power2.inOut" }, ">-0.5"); 

      // ==========================================
      // SECTION 2: THE POP-UP CARDS
      // ==========================================
      // ==========================================
      // SECTION 2: THE POP-UP CARDS
      // ==========================================
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 60%", 
          toggleActions: "play none none reverse", 
        }
      });

      tl2.from(".sec2-heading", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      })
      // CHANGE THIS LINE: from ".info-card" to ".sec2-card"
      .from(".sec2-card", {
        opacity: 0,
        y: 80,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.2, 
        ease: "back.out(1.5)"
      }, "-=0.4");
      // ==========================================
      // SECTION 3: THE CONCLUSION
      // ==========================================
      // ==========================================
      // SECTION 3: THE CHINESE APPROACH
      // ==========================================
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 60%", 
          toggleActions: "play none none reverse",
        }
      });

      tl3.from(".sec3-heading", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".sec3-card", {
        opacity: 0,
        y: 80,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.2, 
        ease: "back.out(1.5)"
      }, "-=0.4");
      // ==========================================
      // SECTION 4: THE CONCLUSION / AI BRIDGE (NEW)
      // ==========================================
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top 60%", 
          toggleActions: "play none none reverse",
        }
      });

      // Animate the image block from the left
      tl4.from(".sec4-img-container", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      // Pop in the little gradient badge
      // Stagger the text in from the right
      .from(".sec4-text", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4");

      // Infinite "AI Scanner" animation over the image
      gsap.to(scannerRef.current, {
        top: "100%",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      // ==========================================
      // SECTION 5: SOURCES & REFERENCES
      // ==========================================
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top 80%", 
          toggleActions: "play none none reverse",
        }
      });

      tl5.from(".sec5-heading", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
      })
      .from(".sec5-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.4");

    }, mainRef); 

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main ref={mainRef} className="bg-black">
      {/* SECTION 1 */}
      {/* UPDATED LINE HERE */}
      <div ref={containerRef} className="relative h-[120vh]">
        
        <div 
          ref={bgRef} 
          className="fixed inset-0 z-0 pointer-events-none opacity-0 bg-gradient-to-r from-red-950 via-transparent to-blue-950" 
        />

        <div className="h-screen relative flex items-center justify-center overflow-hidden z-10">
          <div 
            ref={chinaTextRef} 
            className="fixed top-0 left-0 text-transparent text-3xl md:text-7xl font-black bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 tracking-widest z-50 pointer-events-none drop-shadow-2xl opacity-0 whitespace-nowrap"
          >
            Chinese Medicine
          </div>
          <div 
            ref={americaTextRef} 
            className="fixed top-0 left-0 text-transparent text-3xl md:text-7xl font-black bg-clip-text bg-gradient-to-r from-blue-600 via-white to-red-600 tracking-widest z-50 pointer-events-none drop-shadow-2xl opacity-0 whitespace-nowrap"
          >
            Western Medicine
          </div>
          <div 
            ref={vsTextRef} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl md:text-8xl font-black italic z-40 pointer-events-none drop-shadow-2xl opacity-0 scale-50"
          >
            VS
          </div>

          <svg ref={yyRef} viewBox="0 0 260 260" className="absolute w-[260px] h-[260px] z-10" style={{ willChange: "transform" }}>
            <circle cx="130" cy="130" r="120" fill="#111" />
            <path d="M130,10 A120,120 0 0,1 130,250 A60,60 0 0,1 130,130 A60,60 0 0,0 130,10 Z" fill="#f0f0f0" />
            <circle cx="130" cy="70" r="20" fill="#f0f0f0" />
            <circle cx="130" cy="190" r="20" fill="#111" />
          </svg>

          <svg ref={whiteSvgRef} viewBox="0 0 260 260" className="absolute w-[260px] h-[260px] z-20 overflow-visible" style={{ willChange: "transform" }}>
            <defs>
              <clipPath id="whiteClip"><path ref={whiteClipRef} clipRule="evenodd" d={yinYangPath} /></clipPath>
            </defs>
            <image ref={whiteImgRef} href="/chinese-website/china.webp" x="10" y="10" width="240" height="240" clipPath="url(#whiteClip)" preserveAspectRatio="xMinYMin slice" style={{ opacity: 0 }} />
            <g ref={whiteTrackerRef}><circle cx="130" cy="70" r="20" fill="transparent" /></g>
          </svg>

          <svg ref={blackSvgRef} viewBox="0 0 260 260" className="absolute w-[260px] h-[260px] z-20 overflow-visible" style={{ willChange: "transform" }}>
            <defs>
              <clipPath id="blackClip"><path ref={blackClipRef} clipRule="evenodd" d={yinYangPath} transform="rotate(180, 130, 130)" /></clipPath>
            </defs>
            <image ref={blackImgRef} href="/chinese-website/america.webp" x="10" y="10" width="250" height="250" clipPath="url(#blackClip)" preserveAspectRatio="xMinYMin slice" style={{ opacity: 0 }} />
            <g ref={blackTrackerRef} transform="rotate(180, 130, 130)"><circle cx="130" cy="70" r="20" fill="transparent" /></g>
          </svg>
        </div>
      </div>

      {/* SECTION 2 */}
      <div 
        ref={section2Ref} 
        className="min-h-screen bg-transparent py-32 px-8 z-20 relative flex flex-col items-center"
      >
        <h2 className="sec2-heading text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-black via-red-600 to-black text-[#111111] mb-20 text-center tracking-widest">
          CHRONIC PAIN
        </h2>
        <h2 className="sec2-heading text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 text-[#111111] mb-20 text-center tracking-widest">
          THE WESTERN APPROACH
        </h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-7xl">
          
          {/* Card 1 */}
          <div className="sec2-card flex flex-col bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm border border-gray-100 h-[650px]">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden shrink-0">
              <img src="/chinese-website/chronic.jpg" alt="Holistic Philosophy" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-5xl font-bold mb-3 text-gray-900 shrink-0">哲学思想 (Philosophy)</h3>
            
            {/* Scrollable Text Container */}
            <div className="flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <p className="text-gray-600 leading-relaxed mb-4 text-4xl">
                <span className="font-bold text-gray-900">中文:</span> 西医将疼痛视为一种生理信号，通常与炎症、组织损伤或神经系统的功能障碍有关。其目标是定位具体的病灶并进行干预。
              </p>
              <p className="text-gray-600 leading-relaxed text-4xl">
                <span className="font-bold text-gray-900">English:</span> Western medicine views pain as a physiological signal, usually linked to Inflammation, tissue damage, or dysfunction of the Nervous System. The goal is to locate the specific lesion and intervene.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sec2-card flex flex-col bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm border border-gray-100 h-[650px]">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden shrink-0">
              <img src="/chinese-website/MRI.webp" alt="Pattern Recognition" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-5xl font-bold mb-3 text-gray-900 shrink-0">诊断方法 (Diagnostic) </h3>
            
            {/* Scrollable Text Container */}
            <div className="flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <p className="text-gray-600 leading-relaxed mb-4 text-4xl">
                <span className="font-bold text-gray-900">中文:</span> 通过影像学(MRI、CT)观察结构损伤，或通过神经传导检查来评估神经系统的受损程度。
              </p>
              <p className="text-gray-600 leading-relaxed text-4xl">
                <span className="font-bold text-gray-900">English:</span> Focuses on Quantitative Analysis. It uses imaging (MRI, CT) to observe structural damage or nerve conduction studies to evaluate the degree of impairment in the Nervous System.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sec2-card flex flex-col bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm border border-gray-100 h-[650px]">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden shrink-0">
              <img src="/chinese-website/med.jpg" alt="Natural Therapies" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-5xl font-bold mb-3 text-gray-900 shrink-0"> 西医治疗 (Western Treatments) </h3>
            
            {/* Scrollable Text Container */}
            <div className="flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <p className="text-gray-600 leading-relaxed mb-4 text-4xl">
                <span className="font-bold text-gray-900">中文:</span><br/>
                <strong>药物:</strong> 使用非甾体抗炎药 (e.g. NSAIDs) 减少炎症，或使用神经阻滞剂。<br/>
                <strong>手术:</strong> 修复物理损伤。<br/>
                <strong>物理治疗:</strong> 侧重于肌肉强化和功能恢复。
              </p>
              <p className="text-gray-600 leading-relaxed text-4xl">
                <span className="font-bold text-gray-900">English:</span><br/>
                <strong>Medication:</strong> Uses medicine like NSAIDs to reduce Inflammation or nerve blockers to interrupt pain signals.<br/>
                <strong>Surgery:</strong> To repair physical or structural damage.<br/>
                <strong>Physical Therapy:</strong> Focuses on muscle strengthening and functional recovery.
              </p>
            </div>
          </div>
          </div>

        </div>
      <div 
        ref={section3Ref}
        className="min-h-screen bg-transparent py-32 px-8 z-20 relative flex flex-col items-center"
      >
        <h2 className="sec3-heading text-4xl md:text-6xl font-black bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 text-transparent mb-20 text-center tracking-widest">
          THE CHINESE APPROACH
        </h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-7xl">
          
          {/* Card 1 */}
          <div className="sec3-card flex flex-col bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm border border-gray-100 h-[650px]">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden shrink-0">
              <img src="/chinese-website/yinyan.jpg" alt="Holistic Philosophy" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-5xl font-bold mb-3 text-gray-900 shrink-0">哲学思想 (Philosophy) </h3>
            
            {/* Scrollable Text Container */}
            <div className="flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <p className="text-gray-600 leading-relaxed mb-4 text-4xl">
                <span className="font-bold text-gray-900">中文:</span> 中医认为疼痛是身体内部阴阳失衡 (Yin-Yang Imbalance) 的表现。核心理论认为“不通则痛”，即身体的能量平衡被打破，导致了病理状态。
              </p>
              <p className="text-gray-600 leading-relaxed text-4xl">
                <span className="font-bold text-gray-900">English:</span> TCM views pain as a manifestation of Yin-Yang Imbalance within the body. A core theory is "where there is blockage, there is pain," meaning that when the body's energy balance is disrupted, a pathological state occurs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sec3-card flex flex-col bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm border border-gray-100 h-[650px]">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden shrink-0">
              <img src="/chinese-website/pulse.webp" alt="Pattern Recognition" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-5xl font-bold mb-3 text-gray-900 shrink-0">诊断方法 (Diagnostic) </h3>
            
            {/* Scrollable Text Container */}
            <div className="flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <p className="text-gray-600 leading-relaxed mb-4 text-4xl">
                <span className="font-bold text-gray-900">中文:</span> 侧重于辨证论治。医生会观察舌象和脉象，判断疼痛的性质。例如，如果疼痛固定且像针刺一样，通常被诊断为气滞血瘀——即气 (Qi) 的运行不畅导致血液停滞，从而引发慢性疼痛。
              </p>
              <p className="text-gray-600 leading-relaxed text-4xl">
                <span className="font-bold text-gray-900">English:</span> Practitioners observe the tongue and pulse to determine the nature of the pain. For example, sharp, fixed pain is often diagnosed as Qi Stagnation and Blood Stasis—where the flow of Qi is obstructed, leading to blood stagnation and chronic pain.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sec3-card flex flex-col bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm border border-gray-100 h-[650px]">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden shrink-0">
              <img src="/chinese-website/TCM.jpg" alt="Natural Therapies" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-5xl font-bold mb-3 text-gray-900 shrink-0"> 中医治疗 (TCM Treatments) </h3>
            
            {/* Scrollable Text Container */}
            <div className="flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <p className="text-gray-600 leading-relaxed mb-4 text-4xl">
                <span className="font-bold text-gray-900">中文:</span><br/>
                <strong>针灸:</strong> 通过在特定穴位施针，调理气的流动，激发人体自愈能力。现代研究认为针灸可以刺激神经系统释放内啡肽（天然镇痛剂）。<br/>
                <strong>中药:</strong> 使用活血化瘀的草药来解决气滞血瘀的问题。<br/>
                <strong>推拿与拔罐:</strong> 旨在疏通经络，缓解因阴阳失衡导致的长期酸痛。
              </p>
              <p className="text-gray-600 leading-relaxed text-4xl">
                <span className="font-bold text-gray-900">English:</span><br/>
                <strong>Acupuncture:</strong> By inserting needles into specific acupoints, it regulates the flow of Qi and stimulates the body's self-healing. Modern research suggests acupuncture triggers the Nervous System to release endorphins (natural painkillers).<br/>
                <strong>Herbal Medicine:</strong> Uses formulas that "invigorate blood" to resolve Qi Stagnation and Blood Stasis.<br/>
                <strong>Tuina & Cupping:</strong> Aims to clear the meridians and relieve long-term aches caused by Yin-Yang Imbalance.
              </p>
            </div>
          </div>

        </div>
        </div>
        {/* SECTION 4: THE FUTURE OF INTEGRATION (NEW & COOL) */}
      <div 
        ref={section4Ref}
        className="min-h-screen bg-transparent py-32 px-8 z-20 relative flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT SIDE: Tech Image with AI Scanner Animation */}
          <div className="sec4-img-container relative w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200 bg-white">
            {/* Replace with an image of sensors, biometric data, or medical AI */}
            <video autoPlay loop muted playsInline src="/chinese-website/chron.mp4" alt="Biometric Sensor Tech" className="object-cover w-full h-full opacity-90" />
            
            {/* Dark/Blue Overlay for a tech vibe */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            
            {/* The GSAP Scanning Line */}
            <div 
              ref={scannerRef}
              className="absolute left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.6)] z-10 top-0"
            ></div>
            
            {/* Cool UI Overlay Elements (Decorative) */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-mono tracking-widest border border-white/20">
              SYS.ANALYSIS // ACTIVE
            </div>
            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-cyan-400 px-4 py-2 rounded-full text-xs font-mono tracking-widest border border-cyan-400/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              PULSE ANALYSIS
            </div>
          </div>

          {/* RIGHT SIDE: Animated Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <h2 className="sec4-text text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] mb-8 tracking-tight leading-tight">
              Digitizing the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Traditional Wisdom</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="sec4-text">
                Traditional Chinese Medicine relies heavily on pulse and tongue diagnosis, making it highly skill-dependent. To bridge the gap, we can use modern technology with <strong className="text-gray-900">advanced sensors and deep learning</strong> to digitize and standardize these diagnostic methods.
              </p>
              
              <div className="sec4-text pl-6 border-l-4 border-red-500">
                <p className="italic text-gray-700">
                Western technology only measures the diastolic and systolic pressure which ignores over 600 points between unlike TCM which measures all 12 of the Meridian. <strong className="text-gray-900"> - Dr. Kuo Yu-cheng, pracitioner of TCM for 30+ years </strong>
                </p>
              </div>
              
              <p className="sec4-text">
                By translating qualitative wisdom into quantifiable metrics, we can pave the way for a unified healthcare system by leveraging the insights of the Chinese traditional medicine alongside the science and technology of the West, making TCM accessible in non-Chinese regions worldwide.
              </p>
            </div>

          </div>
        </div>
      </div>
      {/* SECTION 5: SOURCES */}
      <div 
        ref={section5Ref} 
        className="min-h-[50vh] bg-[#0a0a0a] py-24 px-8 z-20 relative flex flex-col items-center border-t border-gray-800/50 mt-12"
      >
        <div className="max-w-4xl w-full">
          <h2 className="sec5-heading text-2xl md:text-3xl font-bold text-white mb-12 tracking-widest uppercase border-b border-gray-800 pb-6">
            Sources & References
          </h2>
          
          <div className="space-y-6">
            
            {/* Source Item 1 */}
            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">01</p>
              <div>
                <a href="https://nykangdatcmcenter.com/%E6%85%A2%E6%80%A7%E7%96%BC%E7%97%9B%E6%B2%BB%E7%96%97%EF%BC%9A%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%81%A5%E5%BA%B7%E6%8C%87%E5%8D%97/" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                慢性疼痛治疗：一个简单的健康指南
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                  New York Kangda TCM Clinic. (2025). <span className="italic">慢性疼痛治疗：一个简单的健康指南</span>. https://nykangdatcmcenter.com/%E6%85%A2%E6%80%A7%E7%96%BC%E7%97%9B%E6%B2%BB%E7%96%97%EF%BC%9A%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%81%A5%E5%BA%B7%E6%8C%87%E5%8D%97/
                </p>
              </div>
            </div>

            {/* Source Item 2 */}
            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">02</p>
              <div>
                <a href="https://doi.org/10.3760/cma.j.cn112137-20230529-00876" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                Chinese guidelines for the treatment of chronic pain disorders with non-opioid analgesics.
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                Expert Group on Pain Disease Diagnosis and Treatment Special Ability Training Project of National Health Commission Capacity Building and Continuing Education Center. (2023). Chinese guidelines for the treatment of chronic pain disorders with non-opioid analgesics. Zhonghua Yi Xue Za Zhi, 103(39), 3088–3102. https://doi.org/10.3760/cma.j.cn112137-20230529-00876
                </p>
              </div>
            </div>

            {/* Source Item 3 */}
            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">03</p>
              <div>
                <a href="https://doi.org/10.1016/j.wjam.2022.10.001" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                Acupuncture for the relief of chronic pain: Regulating negative emotions and reward/motivation circuits based on the theory of “spirit-regulation with acupuncture”☆ 针灸改善慢性疼痛的新视角:“针灸治神”调控负性情绪及奖赏/动机环路.
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                WEI, X., TIAN, J., JIA, S., & SHU, Q. (2023). Acupuncture for the relief of chronic pain: Regulating negative emotions and reward/motivation circuits based on the theory of “spirit-regulation with acupuncture”☆ 针灸改善慢性疼痛的新视角:“针灸治神”调控负性情绪及奖赏/动机环路. World Journal of Acupuncture - Moxibustion, 33(1), 28–33. https://doi.org/10.1016/j.wjam.2022.10.001
                </p>
              </div>
            </div>

            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">04</p>
              <div>
                <a href="https://doi.org/10.1155/2013/153148" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                The Relationship between Traditional Chinese Medicine and Modern Medicine. Evidence-Based Complementary and Alternative Medicine
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                Dong, J. (2013). The Relationship between Traditional Chinese Medicine and Modern Medicine. Evidence-Based Complementary and Alternative Medicine, 2013(23983772), 1–10. https://doi.org/10.1155/2013/153148
                </p>
              </div>
            </div>
            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">05</p>
              <div>
                <a href="https://doi.org/10.14336/ad.2021.0512" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                Traditional Chinese Medicine and Western Medicine Share Similar Philosophical Approaches to Fight COVID-19.
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                Zhao, F., Yang, Z., Wang, N., Jin, K., & Luo, Y. (2021). Traditional Chinese Medicine and Western Medicine Share Similar Philosophical Approaches to Fight COVID-19. Aging and Disease, 12(5), 1162. https://doi.org/10.14336/ad.2021.0512
                </p>
              </div>
            </div>
            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">06</p>
              <div>
                <a href="https://doi.org/10.3389/fphar.2022.851508" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                Analgesic Alkaloids Derived From Traditional Chinese Medicine in Pain Management.
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                Jiang, W., Tang, M., Yang, L., Zhao, X., Gao, J., Jiao, Y., Li, T., Tie, C., Gao, T., Han, Y., & Jiang, J.-D. (2022). Analgesic Alkaloids Derived From Traditional Chinese Medicine in Pain Management. Frontiers in Pharmacology, 13. https://doi.org/10.3389/fphar.2022.851508
                </p>
              </div>
            </div>
            <div className="sec5-item group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-gray-800/50 pb-4">
              <p className="text-cyan-500 font-mono text-sm shrink-0">07</p>
              <div>
                <a href="https://personalizedhealth.duke.edu/blog/traditional-chinese-medicine-and-its-clinical-potential-fight-chronic-pain" target="_blank" rel="noreferrer" className="text-gray-300 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                Traditional Chinese Medicine and Its Clinical Potential to Fight Chronic Pain.
                </a>
                <p className="text-gray-400 text-sm pl-8 -indent-8 break-all leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                Traditional Chinese Medicine and Its Clinical Potential to Fight Chronic Pain. (2018, July 10). Duke Center for Personalized Health Care. https://personalizedhealth.duke.edu/blog/traditional-chinese-medicine-and-its-clinical-potential-fight-chronic-pain
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </main>
  );
}