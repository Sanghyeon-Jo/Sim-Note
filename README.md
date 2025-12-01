# 🏎️ Sim-Note (심노트)

> **FastAPI와 Next.js로 구축한 심레이싱 텔레메트리 기록 플랫폼** > "Data-driven Sim Racing Logbook"

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.95+-009688?style=flat&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=flat&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## 📌 Project Overview
**Sim-Note**는 심레이싱(Sim Racing) 주행 기록을 체계적으로 저장하고 관리하기 위한 웹 애플리케이션입니다.  
데이터 분석가를 목표로 하는 개발자가 **백엔드(FastAPI)와 프론트엔드(Next.js)의 완전한 통합 과정**을 학습하기 위해 제작한 토이 프로젝트입니다.

### 📸 Screenshot
<img src="C:\Users\josan\Sim-Note\image.png" alt="Sim-Note Main Screen" width="100%">

---

## 🛠️ Tech Stack

### Backend (Server)
* **FastAPI (Python):** 고성능 비동기 API 서버 구축
* **Pydantic:** 데이터 유효성 검사 및 모델링
* **CORS Middleware:** 프론트엔드와의 통신 보안 설정

### Frontend (Client)
* **Next.js (TypeScript):** React 기반의 모던 웹 프레임워크
* **Tailwind CSS:** 유틸리티 퍼스트 CSS 스타일링
* **Fetch API:** 비동기 데이터 통신

---

## 🎨 Design System: "Midnight Paddock"
본 프로젝트는 **AI(Cursor/Gemini)와의 협업**을 통해 전문적인 대시보드 디자인을 구현했습니다.

* **Concept:** 한밤중의 F1 서킷 패독(Paddock)을 연상시키는 Dark & Neon 테마
* **Color Palette:** Deep Black (`#0a0a0a`), Neon Indigo (`#6366f1`), Signal Emerald (`#10b981`)
* **UI Features:**
    * **Glassmorphism:** 반투명한 유리 질감의 카드 UI
    * **Neon Glow:** 상호작용 시 빛나는 네온 효과
    * **Monospace Typography:** 데이터 가독성을 높이는 고정폭 글꼴 사용

---

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate / Mac: source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📝 Development Log (Velog)
이 프로젝트의 기획부터 개발, 트러블 슈팅까지의 전 과정은 기술 블로그에 기록되어 있습니다.

* [#1 기획 및 백엔드 세팅](https://velog.io/@1stquarter/...)
* [#2 FastAPI 코드 해부하기](https://velog.io/@1stquarter/...)
* [#3 프론트엔드 연동과 CORS 해결](https://velog.io/@1stquarter/...)

---

Created by **[본인이름/닉네임]**