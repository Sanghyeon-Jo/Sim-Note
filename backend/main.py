from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app =  FastAPI()

# 1. CORS 설정 (이게 없으면 Next.js에서 에러)
origins = [
    "http://localhost:3001", # Next.js가 실행될 주소
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # GET, POST, PUT, DELETE 등 모든 방법 허용
    allow_headers=["*"],
)

# 2. 데이터 모델 정의 (요리 주문서 양식)
class LapLog(BaseModel):
    track: str  # 트랙 이름 (예: Suzuka)
    car: str    # 차량 이름 (예: GT3)
    time: str   # 랩 타임 (예: 1:58.23)

# 3. 임시 데이터베이스 (서버 메모리에 저장)
lap_logs = []

# --- API 라우터 (주문 받는 곳) ---

@app.get("/")
def read_root():
    return {"message": "Sim-Note 서버가 정상 작동 중입니다!"}

@app.get("/laps")
def get_laps():
    # 저장된 모든 랩타임을 보여줌
    return lap_logs

@app.post("/laps")
def add_lap(log: LapLog):
    # 새로운 랩타임을 리스트에 추가
    lap_logs.append(log)
    return {"message": "기록 저장 성공", "data": log}
