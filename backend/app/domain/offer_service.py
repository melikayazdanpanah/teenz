from typing import List, Optional
from sqlalchemy.orm import Session
from app.models.models import Offer, Product
from app.schemas.offer import OfferFilter

class OfferDomainService:
    @staticmethod
    def search_offers(db: Session, filters: OfferFilter) -> List[Offer]:
        query = db.query(Offer).join(Product)
        if filters.product_name:
            query = query.filter(Product.name.ilike(f"%{filters.product_name}%"))
        if filters.platform:
            query = query.filter(Product.platform == filters.platform)
        if filters.region:
            query = query.filter(Offer.region == filters.region)
        if filters.max_price:
            query = query.filter(Offer.price <= filters.max_price)
        if filters.store_name:
            query = query.filter(Offer.store_name == filters.store_name)
        return query.offset((filters.page - 1) * filters.limit).limit(filters.limit).all()

    @staticmethod
    def compare_offers(db: Session, offer_ids: List[int]) -> List[Offer]:
        offers = db.query(Offer).filter(Offer.id.in_(offer_ids)).all()
        if not offers:
            return []
        product_map = {}
        for offer in offers:
            if offer.product_id not in product_map:
                product_map[offer.product_id] = []
            product_map[offer.product_id].append(offer)
        best_offers = []
        for product_id, product_offers in product_map.items():
            sorted_offers = sorted(product_offers, key=lambda x: (x.price, -x.last_updated.timestamp()))
            best_offers.append(sorted_offers[0])
        return best_offers

    @staticmethod
    def get_product_details(db: Session, product_id: int) -> Optional[Product]:
        return db.query(Product).filter(Product.id == product_id).first()
