// تمام داده‌های این فایل نمونه و DEMO/MOCK هستند.
// این اطلاعات قیمت زنده یا پیشنهاد واقعی فروشگاه‌ها نیستند.

export const products = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    platform: "Steam",
    type: "بازی دیجیتال",
    genre: "اکشن نقش‌آفرینی",
    description:
      "جهانی گسترده و باز برای کاوش؛ نسخه‌ی نمونه برای نمایش رابط مقایسه.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    badge: "پیشنهاد ویژه",
    offers: [
      { id: "offer-1", store: "Steam", price: 39.99, currency: "USD", tomanPrice: 2799000, region: "Global", activation: "فعال‌سازی مستقیم", updated: "۲۰ دقیقه پیش", discount: "-۲۰٪", compatible: true, url: "https://store.steampowered.com/" },
      { id: "offer-2", store: "فروشگاه نمونه", price: 34.5, currency: "USD", tomanPrice: 2580000, region: "ترکیه", activation: "کد فعال‌سازی", updated: "۱ ساعت پیش", discount: "-۱۵٪", compatible: false, url: "https://example.com/" },
      { id: "offer-3", store: "PlayStation Store", price: 59.99, currency: "USD", tomanPrice: 4180000, region: "آمریکا", activation: "نسخه دیجیتال", updated: "۴۵ دقیقه پیش", discount: null, compatible: true, url: "https://store.playstation.com/" }
    ]
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk 2077",
    platform: "Steam",
    type: "بازی دیجیتال",
    genre: "اکشن نقش‌آفرینی",
    description:
      "ماجراجویی جهان‌باز در نایت‌سیتی. داده‌های این صفحه صرفاً نمونه هستند.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80",
    badge: "محبوب هفته",
    offers: [
      { id: "offer-4", store: "Steam", price: 29.99, currency: "USD", tomanPrice: 2110000, region: "Global", activation: "فعال‌سازی مستقیم", updated: "۳۵ دقیقه پیش", discount: "-۳۰٪", compatible: true, url: "https://store.steampowered.com/" },
      { id: "offer-5", store: "فروشگاه نمونه", price: 25, currency: "USD", tomanPrice: 1980000, region: "نامشخص", activation: "کد فعال‌سازی", updated: "دیروز", discount: null, compatible: false, url: "https://example.com/" }
    ]
  },
  {
    id: "god-of-war",
    title: "God of War Ragnarök",
    platform: "PlayStation",
    type: "بازی دیجیتال",
    genre: "اکشن ماجراجویی",
    description: "داستانی حماسی برای نمایش حالت صفحه‌ی جزئیات محصول.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80",
    badge: "جدید",
    offers: [
      { id: "offer-6", store: "PlayStation Store", price: 49.99, currency: "USD", tomanPrice: 3490000, region: "آمریکا", activation: "نسخه دیجیتال", updated: "۲ ساعت پیش", discount: "-۱۰٪", compatible: true, url: "https://store.playstation.com/" }
    ]
  },
  {
    id: "spiderman-2",
    title: "Marvel's Spider-Man 2",
    platform: "PlayStation",
    type: "بازی دیجیتال",
    genre: "اکشن ماجراجویی",
    description: "مبارزه‌ی نهایی بین دو نماد تار عنکبوتی نیویورک.",
    image:
      "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?auto=format&fit=crop&w=900&q=80",
    offers: [
      { id: "offer-7", store: "PlayStation Store", price: 69.99, currency: "USD", tomanPrice: 4850000, region: "Global", activation: "نسخه دیجیتال", updated: "۱۰ دقیقه پیش", discount: null, compatible: true, url: "https://store.playstation.com/" }
    ]
  }
];

// پلتفرم‌ها
export const platforms = [
  { key: "steam",    name: "Steam",        sub: "PC · بازی دیجیتال",   color: "#1B2838", count: "۲٬۱۴۰ بازی" },
  { key: "playstation", name: "PlayStation", sub: "PS4 / PS5",            color: "#003791", count: "۱٬۸۶۰ بازی" },
  { key: "xbox",     name: "Xbox",          sub: "Xbox · PC Game Pass",  color: "#107C10", count: "۱٬۲۴۰ بازی" },
  { key: "nintendo", name: "Nintendo",      sub: "Switch · eShop",       color: "#E60012", count: "۹۸۰ بازی" },
  { key: "mobile",   name: "موبایل",        sub: "iOS · Android",        color: "#38BDF8", count: "۳٬۴۲۰ بازی" },
  { key: "gift",     name: "کارت هدیه",     sub: "Steam · PSN · Xbox",   color: "#A855F7", count: "متنوع" }
];

// ویژگی‌های محوری برای بخش «چرا TEENZ»
export const features = [
  { icon: "compare",   title: "مقایسه‌ی زنده",       text: "قیمت چند فروشگاه را در یک نگاه ببین، بدون نیاز به باز کردن تب‌های متعدد." },
  { icon: "shield",    title: "هشدار ریجن ناسازگار", text: "اگر ریجن پیشنهاد با اکانت شما سازگار نباشد، قبل از خرید بهت می‌گوییم." },
  { icon: "history",   title: "نمودار تاریخچه قیمت", text: "روند قیمت ۹۰ روز گذشته را ببین و بهترین زمان خرید را تشخیص بده." },
  { icon: "bell",      title: "اعلان تخفیف شخصی",    text: "وقتی بازی‌ای که دنبال می‌کنی تخفیف خورد، نوتیفیکیشن دریافت کن." },
  { icon: "wallet",    title: "تبدیل ارز خودکار",    text: "قیمت‌ها به تومان، دلار، یورو و لیر ترکیه، هم‌زمان نمایش داده می‌شوند." },
  { icon: "verified",  title: "فروشگاه‌های تأییدشده", text: "فقط فروشگاه‌هایی با سابقه‌ی پرداخت موفق در لیست مقایسه ظاهر می‌شوند." }
];

// داده‌ی نمونه برای ویجت «پیشنهاد شماره‌ی ۱»
export const heroFeatured = {
  product: "Elden Ring",
  platform: "Steam",
  bestPrice: 2799000,
  originalPrice: 3490000,
  stores: 12,
  updated: "۲۰ دقیقه پیش",
  history: [3200, 3050, 3100, 2900, 2950, 2880, 2799]
};

// آمار سایت (نمایشی)
export const stats = [
  { value: "۲٬۸۰۰+", label: "بازی قابل مقایسه" },
  { value: "۱۸۰+",  label: "فروشگاه بررسی‌شده" },
  { value: "۹۲٪",   label: "رضایت کاربران (نمایشی)" },
  { value: "۲۴/۷",  label: "به‌روزرسانی لحظه‌ای" }
];

export const formatToman = (amount) =>
  new Intl.NumberFormat("fa-IR").format(amount) + " تومان";

export const formatPrice = (amount, currency) =>
  `${new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)} ${currency}`;
