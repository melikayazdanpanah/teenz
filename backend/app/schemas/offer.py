from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

class PlatformEnum(str, Enum):
    PC = "PC"
    PS5 = "PS5"
    XBOX = "XBOX"
    SWITCH = "SWITCH"

class OfferFilter(BaseModel):
    product_name: Optional[str] = Field(None, description="Search by product name")
    platform: Optional[PlatformEnum] = Field(None, description="Filter by platform")
    region: Optional[str] = Field(None, description="Filter by region")
    max_price: Optional[float] = Field(None, gt=0, description="Maximum price filter")
    store_name: Optional[str] = Field(None, description="Filter by store name")
    page: int = Field(1, ge=1, description="Page number")
    limit: int = Field(10, ge=1, le=50, description="Items per page")

class OfferResponse(BaseModel):
    id: int
    store_name: str
    price: float
    currency: str
    region: str
    activation_type: str
    url: str
    last_updated: datetime
    is_mock: bool

    class Config:
        from_attributes = True

class ProductDetailsResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    platform: str
    product_type: str
    image_url: Optional[str]
    offers: List[OfferResponse] = []

    class Config:
        from_attributes = True

class CompareRequest(BaseModel):
    offer_ids: List[int] = Field(..., min_items=2, max_items=5)
