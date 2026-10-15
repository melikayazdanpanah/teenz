from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Gaming Shopping Agent API"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:5173"]
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"

settings = Settings()
