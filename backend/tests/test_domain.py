import pytest
from app.domain.offer_service import OfferDomainService
from app.schemas.offer import OfferFilter

class MockSession:
    def query(self, *args, **kwargs): return self
    def join(self, *args, **kwargs): return self
    def filter(self, *args, **kwargs): return self
    def offset(self, *args, **kwargs): return self
    def limit(self, *args, **kwargs): return self
    def all(self): return []
    def in_(self, *args, **kwargs): return self

def test_search_offers_pagination():
    db = MockSession()
    filters = OfferFilter(page=1, limit=5)
    result = OfferDomainService.search_offers(db, filters)
    assert isinstance(result, list)

def test_compare_offers_empty():
    db = MockSession()
    result = OfferDomainService.compare_offers(db, [1, 2])
    assert result == []
