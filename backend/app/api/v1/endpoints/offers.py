from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db
from app.domain.offer_service import OfferDomainService
from app.schemas.offer import OfferFilter, OfferResponse, ProductDetailsResponse, CompareRequest

router = APIRouter()

@router.get("/offers", response_model=List[OfferResponse])
def search_offers(
    product_name: Optional[str] = Query(None),
    platform: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    max_price: Optional[float] = Query(None),
    store_name: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=50),
    db: Session = Depends(get_db)
):
    filters = OfferFilter(
        product_name=product_name, platform=platform, region=region,
        max_price=max_price, store_name=store_name, page=page, limit=limit
    )
    return OfferDomainService.search_offers(db, filters)

@router.get("/products/{product_id}", response_model=ProductDetailsResponse)
def get_product_details(product_id: int, db: Session = Depends(get_db)):
    product = OfferDomainService.get_product_details(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.post("/compare", response_model=List[OfferResponse])
def compare_offers(request: CompareRequest, db: Session = Depends(get_db)):
    offers = OfferDomainService.compare_offers(db, request.offer_ids)
    if not offers:
        raise HTTPException(status_code=404, detail="No valid offers found")
    return offers
