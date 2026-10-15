from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from app.core.database import Base

class PlatformEnum(str, enum.Enum):
    PC = "PC"
    PS5 = "PS5"
    XBOX = "XBOX"
    SWITCH = "SWITCH"

class ProductTypeEnum(str, enum.Enum):
    GAME = "GAME"
    DLC = "DLC"
    SUBSCRIPTION = "SUBSCRIPTION"

class ActivationTypeEnum(str, enum.Enum):
    STEAM_KEY = "STEAM_KEY"
    EPIC_KEY = "EPIC_KEY"
    GOG_KEY = "GOG_KEY"
    ACCOUNT = "ACCOUNT"

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True, nullable=False)
    description = Column(Text, nullable=True)
    platform = Column(Enum(PlatformEnum), nullable=False)
    product_type = Column(Enum(ProductTypeEnum), nullable=False, default=ProductTypeEnum.GAME)
    image_url = Column(String(500), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    offers = relationship("Offer", back_populates="product")

class Offer(Base):
    __tablename__ = "offers"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    store_name = Column(String(100), nullable=False)
    price = Column(Float, nullable=False)
    currency = Column(String(3), nullable=False, default="USD")
    region = Column(String(50), nullable=False, default="Global")
    activation_type = Column(Enum(ActivationTypeEnum), nullable=False)
    url = Column(String(500), nullable=False)
    last_updated = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    is_mock = Column(Boolean, default=False)

    product = relationship("Product", back_populates="offers")
