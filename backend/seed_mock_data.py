from app.core.database import SessionLocal, engine
from app.models.models import Base, Product, Offer, PlatformEnum, ProductTypeEnum, ActivationTypeEnum

def seed_data():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    if db.query(Product).first():
        print("Data already exists. Skipping seeding.")
        db.close()
        return

    p1 = Product(name="Cyberpunk 2077", platform=PlatformEnum.PC, product_type=ProductTypeEnum.GAME, description="Mock data for testing")
    p2 = Product(name="Elden Ring", platform=PlatformEnum.PS5, product_type=ProductTypeEnum.GAME, description="Mock data for testing")
    db.add_all([p1, p2])
    db.commit()

    offers = [
        Offer(product_id=p1.id, store_name="Steam", price=29.99, currency="USD", region="Global", activation_type=ActivationTypeEnum.STEAM_KEY, url="https://store.steampowered.com/app/1091500", is_mock=True),
        Offer(product_id=p1.id, store_name="GOG", price=19.99, currency="USD", region="Global", activation_type=ActivationTypeEnum.GOG_KEY, url="https://www.gog.com/game/cyberpunk_2077", is_mock=True),
        Offer(product_id=p2.id, store_name="PlayStation Store", price=59.99, currency="USD", region="US", activation_type=ActivationTypeEnum.ACCOUNT, url="https://store.playstation.com/en-us/product/UP0700-PPSA04610_00-ELDENRING0000000", is_mock=True),
    ]
    db.add_all(offers)
    db.commit()
    db.close()
    print("Mock data seeded successfully. All rows have is_mock=True.")

if __name__ == "__main__":
    seed_data()
