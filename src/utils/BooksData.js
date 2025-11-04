const booksData = {
  "categories": [
    { "id": 1, "name": "Fiction", "img": "https://picsum.photos/seed/category_fiction/600/300" },
    { "id": 2, "name": "Non-fiction", "img": "https://picsum.photos/seed/category_nonfiction/600/300" },
    { "id": 3, "name": "Science", "img": "https://picsum.photos/seed/category_science/600/300" },
    { "id": 4, "name": "Technology", "img": "https://picsum.photos/seed/category_technology/600/300" },
    { "id": 5, "name": "History", "img": "https://picsum.photos/seed/category_history/600/300" },
    { "id": 6, "name": "Children", "img": "https://picsum.photos/seed/category_children/600/300" },
    { "id": 7, "name": "Business", "img": "https://picsum.photos/seed/category_business/600/300" },
    { "id": 8, "name": "Self-Help", "img": "https://picsum.photos/seed/category_selfhelp/600/300" }
  ],
  "books": [
    {
      "id": 101,
      "title": "The Quiet Orchard",
      "author": "Maya Rivers",
      "categoryId": 1,
      "img": "https://picsum.photos/seed/quietorchard/200/300",
      "description": "A gentle literary novel about family, secrets and late-summer reckonings.",
      "price": 9.99,
      "isbn": "978-1-23456-101-0",
      "rating": 4.3
    },
    {
      "id": 102,
      "title": "Code in the Dark",
      "author": "Alex J. Moreno",
      "categoryId": 4,
      "img": "https://picsum.photos/seed/codeinthedark/200/300",
      "description": "Practical patterns and modern approaches to building resilient web apps.",
      "price": 24.50,
      "isbn": "978-1-23456-102-7",
      "rating": 4.6
    },
    {
      "id": 103,
      "title": "A Little Cosmos",
      "author": "Dr. Neel Patel",
      "categoryId": 3,
      "img": "https://picsum.photos/seed/littlecosmos/200/300",
      "description": "An accessible introduction to astrophysics for curious readers.",
      "price": 14.00,
      "isbn": "978-1-23456-103-4",
      "rating": 4.5
    },
    {
      "id": 104,
      "title": "Markets & Momentum",
      "author": "Sophie Bernard",
      "categoryId": 7,
      "img": "https://picsum.photos/seed/marketsmomentum/200/300",
      "description": "Strategies and real-world case studies from modern markets.",
      "price": 19.95,
      "isbn": "978-1-23456-104-1",
      "rating": 4.1
    },
    {
      "id": 105,
      "title": "The Atlas of Forgotten Cities",
      "author": "Jonah K. Hale",
      "categoryId": 5,
      "img": "https://picsum.photos/seed/forgottencities/200/300",
      "description": "A richly illustrated tour of abandoned and little-known historical cities.",
      "price": 27.00,
      "isbn": "978-1-23456-105-8",
      "rating": 4.7
    },
    {
      "id": 106,
      "title": "Habit Craft",
      "author": "Lina O'Connor",
      "categoryId": 8,
      "img": "https://picsum.photos/seed/habitcraft/200/300",
      "description": "A step-by-step guide to forming better daily habits with small experiments.",
      "price": 12.50,
      "isbn": "978-1-23456-106-5",
      "rating": 4.2
    },
    {
      "id": 107,
      "title": "Tiny Engineers",
      "author": "Ravi & Priya Sharma",
      "categoryId": 6,
      "img": "https://picsum.photos/seed/tinyengineers/200/300",
      "description": "Fun STEM activities and stories to spark engineering interest in kids.",
      "price": 8.75,
      "isbn": "978-1-23456-107-2",
      "rating": 4.4
    },
    {
      "id": 108,
      "title": "The Long Interview",
      "author": "Carmen Lugo",
      "categoryId": 2,
      "img": "https://picsum.photos/seed/longinterview/200/300",
      "description": "Narrative nonfiction following a decade-long conversation with a changing city.",
      "price": 16.00,
      "isbn": "978-1-23456-108-9",
      "rating": 4.0
    },
    {
      "id": 109,
      "title": "Practical Algorithms",
      "author": "Chang Li",
      "categoryId": 4,
      "img": "https://picsum.photos/seed/practicalalgorithms/200/300",
      "description": "Hands-on algorithms for engineers — code examples, complexity and tips.",
      "price": 29.99,
      "isbn": "978-1-23456-109-6",
      "rating": 4.8
    },
    {
      "id": 110,
      "title": "River of Paper",
      "author": "Hannah Price",
      "categoryId": 1,
      "img": "https://picsum.photos/seed/riverofpaper/200/300",
      "description": "A fast-paced novel about memory, identity, and letters left behind.",
      "price": 10.99,
      "isbn": "978-1-23456-110-2",
      "rating": 4.1
    },
    {
      "id": 111,
      "title": "Microbiomes & You",
      "author": "Dr. Amina Farouk",
      "categoryId": 3,
      "img": "https://picsum.photos/seed/microbiomesyou/200/300",
      "description": "How microbes affect health, mood and digestion — actionable insights.",
      "price": 18.00,
      "isbn": "978-1-23456-111-9",
      "rating": 4.4
    },
    {
      "id": 112,
      "title": "The Bootstrap CEO",
      "author": "Harish Menon",
      "categoryId": 7,
      "img": "https://picsum.photos/seed/bootstrapceo/200/300",
      "description": "Founder's guide to scaling without large VC rounds.",
      "price": 21.00,
      "isbn": "978-1-23456-112-6",
      "rating": 4.0
    },
    {
      "id": 113,
      "title": "Letters from Khajuraho",
      "author": "Meera Das",
      "categoryId": 5,
      "img": "https://picsum.photos/seed/khajuraholetters/200/300",
      "description": "A historical-fiction mosaic set across three generations in India.",
      "price": 13.50,
      "isbn": "978-1-23456-113-3",
      "rating": 4.2
    },
    {
      "id": 114,
      "title": "Design Patterns for Startups",
      "author": "Esteban Roy",
      "categoryId": 7,
      "img": "https://picsum.photos/seed/designpatterns/200/300",
      "description": "Reusable business patterns to accelerate product-market fit.",
      "price": 17.00,
      "isbn": "978-1-23456-114-0",
      "rating": 3.9
    },
    {
      "id": 115,
      "title": "Green Circuits",
      "author": "Ava K. Thompson",
      "categoryId": 4,
      "img": "https://picsum.photos/seed/greencircuits/200/300",
      "description": "Sustainable electronics design and energy-efficient engineering practices.",
      "price": 26.00,
      "isbn": "978-1-23456-115-7",
      "rating": 4.6
    },
    {
      "id": 116,
      "title": "The Last Lantern",
      "author": "Omar Ruiz",
      "categoryId": 1,
      "img": "https://picsum.photos/seed/lastlantern/200/300",
      "description": "A gripping thriller about secrets buried under an island town.",
      "price": 11.99,
      "isbn": "978-1-23456-116-4",
      "rating": 4.0
    },
    {
      "id": 117,
      "title": "Mindful Minutes",
      "author": "Priya Kaur",
      "categoryId": 8,
      "img": "https://picsum.photos/seed/mindfulminutes/200/300",
      "description": "Short daily practices for calm, focus and better sleep.",
      "price": 9.50,
      "isbn": "978-1-23456-117-1",
      "rating": 4.3
    },
    {
      "id": 118,
      "title": "Data for Humans",
      "author": "Marco Silva",
      "categoryId": 4,
      "img": "https://picsum.photos/seed/dataforhumans/200/300",
      "description": "Practical ways to use data responsibly in product decisions.",
      "price": 22.00,
      "isbn": "978-1-23456-118-8",
      "rating": 4.5
    },
    {
      "id": 119,
      "title": "The Little Librarian",
      "author": "Ellen Brooks",
      "categoryId": 6,
      "img": "https://picsum.photos/seed/littlelibrarian/200/300",
      "description": "A picture-book story celebrating curiosity and sharing books.",
      "price": 7.25,
      "isbn": "978-1-23456-119-5",
      "rating": 4.8
    },
    {
      "id": 120,
      "title": "How Empires Rise",
      "author": "Prof. Daniel Ko",
      "categoryId": 5,
      "img": "https://picsum.photos/seed/howempiresrise/200/300",
      "description": "Comparative history of political and economic institutions across empires.",
      "price": 25.00,
      "isbn": "978-1-23456-120-1",
      "rating": 4.6
    }
  ]
}

export default booksData;
