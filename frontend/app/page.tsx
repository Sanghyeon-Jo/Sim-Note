"use client";

import { useState, useEffect } from "react";

// 데이터 타입 정의 (Python의 Pydantic 모델과 맞춤)
interface LapLog {
  track: string;
  car: string;
  time: string;
}

export default function Home() {
  const [track, setTrack] = useState("");
  const [car, setCar] = useState("");
  const [time, setTime] = useState("");
  const [laps, setLaps] = useState<LapLog[]>([]); // 기록 리스트

  // 1. 백엔드에서 데이터 가져오는 함수 (GET)
  const fetchLaps = async () => {
    try {
      // Python의 requests.get("http://...") 과 동일
      const res = await fetch("http://127.0.0.1:8000/laps");
      const data = await res.json(); // 응답을 JSON으로 변환
      setLaps(data); // 받아온 데이터를 화면 변수에 저장
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  // 2. 화면이 처음 켜질 때 실행되는 함수 (Python의 __init__ 느낌)
  useEffect(() => {
    fetchLaps(); // 켜지자마자 기존 기록들을 가져옴
  }, []);

  // 3. 데이터 저장 함수 (POST)
  const handleSubmit = async () => {
    try {
      // Python의 requests.post(...) 와 동일
      const res = await fetch("http://127.0.0.1:8000/laps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Python의 json.dumps() 와 동일 (딕셔너리를 문자로 변환)
        body: JSON.stringify({ track, car, time }),
      });

      if (res.ok) {
        alert("저장 성공!");
        setTrack(""); // 입력창 비우기
        setCar("");
        setTime("");
        fetchLaps(); // ★ 중요: 저장했으니 리스트를 다시 불러와서 갱신!
      }
    } catch (error) {
      console.error("저장 실패:", error);
    }
  };

return (
    // [Background] 메인 배경: 아주 깊은 블랙 (#0a0a0a)
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans selection:bg-indigo-500/30">
      
      {/* Container: 중앙 정렬 & 최대 너비 제한 */}
      <div className="max-w-7xl mx-auto">
        
        {/* [Header] 타이포그래피: 자간 좁게(Tight) & 넓게(Widest) 혼용 */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-indigo-500 tracking-[0.2em] uppercase mb-2 animate-pulse">
              Midnight Paddock System
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              GPX <span className="text-indigo-500">HUB</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                <span className="text-xs text-gray-400 font-mono">SYSTEM ONLINE</span>
             </div>
          </div>
        </header>

        {/* [Input Section] Glassmorphism & Thin Borders */}
        <section className="mb-16 relative group">
          {/* 네온 발광 효과 (배경에 은은하게 깔리는 빛) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-indigo-400">INPUT</span> telemetry data
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* 입력 1 */}
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold ml-1">Track Location</label>
                <input
                  type="text"
                  placeholder="MONZA"
                  className="w-full bg-neutral-950 text-white placeholder-neutral-700 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all font-mono text-sm"
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                />
              </div>

              {/* 입력 2 */}
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold ml-1">Vehicle Model</label>
                <input
                  type="text"
                  placeholder="FERRARI 296 GT3"
                  className="w-full bg-neutral-950 text-white placeholder-neutral-700 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all font-mono text-sm"
                  value={car}
                  onChange={(e) => setCar(e.target.value)}
                />
              </div>

              {/* 입력 3 */}
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold ml-1">Lap Time</label>
                <input
                  type="text"
                  placeholder="1:48.123"
                  className="w-full bg-neutral-950 text-white placeholder-neutral-700 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all font-mono text-sm"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              {/* 저장 버튼: Indigo Neon Glow */}
              <div className="flex items-end">
                <button
                  onClick={handleSubmit}
                  className="w-full h-[54px] bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all transform active:scale-95 uppercase tracking-widest text-sm"
                >
                  Record Lap
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* [List Section] Grid Layout & Hover Effects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">Session History</h2>
            <span className="text-emerald-500 text-sm font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Total Laps: {laps.length}
            </span>
          </div>

          {laps.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/30">
              <p className="text-gray-500">No telemetry data recorded yet.</p>
            </div>
          ) : (
            // Grid Layout: 모바일 1열, PC 3열
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laps.map((lap, index) => (
                <div
                  key={index}
                  // Card Style: 호버 시 위로 살짝 뜨면서 테두리 빛남
                  className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  {/* 순번 배지 */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-neutral-600 group-hover:text-indigo-400 transition-colors">
                    #{String(index + 1).padStart(3, '0')}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Circuit</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                        {lap.track}
                      </h3>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Machine</p>
                      <p className="text-sm text-gray-300 font-medium truncate">
                        {lap.car}
                      </p>
                    </div>

                    <div className="mt-2 pt-4 border-t border-neutral-800 flex justify-between items-center">
                      <span className="text-xs text-gray-500">TIME</span>
                      {/* 데이터(숫자)는 Emerald 색상 + Mono 폰트 */}
                      <span className="text-2xl font-mono font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
                        {lap.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}