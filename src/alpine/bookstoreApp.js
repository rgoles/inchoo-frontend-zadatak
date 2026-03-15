export default function bookstoreApp() {
  return {
    activeSidebar: null,
    activeCategory: null,
    isDesktopMenuOpen: false,

    siteTitle: "The Dev Bookstore",

    navigation: [
      {
        key: "programming",
        label: "Programming",
        type: "category",
      },
      {
        key: "computersAndTechnology",
        label: "Computers & Technology",
        type: "category",
      },
      {
        key: "designBasics",
        label: "Design Basics",
        type: "category",
      },
      {
        label: "About Us",
        type: "link",
        href: "/about-us",
      },
      {
        label: "Contact",
        type: "link",
        href: "/contact",
      },
    ],

    categories: {
      programming: {
        title: "Programming",
        viewAllLabel: "View All in Programming",
        items: [
          "APIs & Operating Environments",
          "Algorithms",
          "Apple Programming",
          "Cross-platform Development",
          "Functional",
          "Game Programming",
          "Graphics & Multimedia",
          "Introductory & Beginning",
          "Language & Tools",
          "Microsoft Programming",
          "Mobile Apps",
          "Parallel Programming",
          "Software Design, Testing & Engineering",
          "Web Programming",
        ],
      },
      computersAndTechnology: {
        title: "Computers & Technology",
        viewAllLabel: "View All in Computers & Technology",
        items: [
          "Artificial Intelligence",
          "Computer Science",
          "Cybersecurity",
          "Databases",
          "Hardware",
          "Networking",
          "Operating Systems",
          "Programming Languages",
          "Software Development",
          "Systems Architecture",
          "Virtualization & Cloud",
        ],
      },
      designBasics: {
        title: "Design Basics",
        viewAllLabel: "View All in Design Basics",
        items: [
          "Color Theory",
          "Composition",
          "Digital Illustration",
          "Graphic Design",
          "Typography",
          "User Experience",
          "User Interface",
          "Visual Communication",
        ],
      },
    },

    product: {
      id: "book-001",
      publisher: {
        name: "O’REILLY",
        href: "/publishers/oreilly",
      },
      title:
        "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
      rating: 5,
      ratingValue: "5.0",
      reviewCount: 22,
      reviewLink: "#reviews",
      writeReviewLink: "#write-review",
      price: {
        base: 55.99,
        sale: 39.99,
      },

      details: [
        {
          label: "By",
          value: "Luca Mezzalira",
          href: "/authors/luca-mezzalira",
        },
        {
          label: "Released",
          value: "November 2021",
        },
        {
          label: "Publisher(s)",
          value: "O’Reilly Media, Inc.",
        },
        {
          label: "ISBN",
          value: "9781492082996",
        },
      ],

      description: [
        "What's the answer to today's increasingly complex web applications? Micro-frontends. Inspired by the microservices model, this approach lets you break interfaces into separate features managed by different teams of developers. With this practical guide, Luca Mezzalira shows software architects, tech leads, and software developers how to build and deliver artifacts atomically rather than use a big bang deployment.",
        "You'll learn how micro-frontends enable your team to choose any library or framework. This gives your organization technical flexibility and allows you to hire and retain a broad spectrum of talent. Micro-frontends also support distributed or colocated teams more efficiently. Pick up this book and learn how to get started with this technological breakthrough right away.",
      ],

      images: {
        mobile: "/imageFrontMobile.png",
        tablet: "/imageFrontTablet.png",
        desktop: "/imageFrontDesktop.png",
        alt: "Cover of the book Building Micro-Frontends",
      },
    },

    cart: [],

    addToCart(product) {
      const existingCartItem = this.cart.find(
        ({ productId }) => productId === product.id,
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
        return;
      }
      this.cart.push({
        productId: product.id,
        title: product.title,
        price: this.currentPrice(),
        quantity: 1,
      });
    },
    removeFromCart(item) {
      this.cart = this.cart.filter(({ productId }) => {
        return productId !== item.productId;
      });
    },
    increaseQuantity(item) {
      item.quantity += 1;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.removeFromCart(item);
      }
    },
    cartCount() {
      let total = 0;

      this.cart.forEach((item) => {
        total += item.quantity;
      });

      return total;
    },
    cartSubtotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.price * item.quantity;
      });

      return total;
    },

    hasDiscount() {
      return (
        this.product.price.sale !== null &&
        this.product.price.sale < this.product.price.base
      );
    },

    currentPrice() {
      return this.hasDiscount()
        ? this.product.price.sale
        : this.product.price.base;
    },

    discountPercent() {
      if (!this.hasDiscount()) return 0;

      return Math.round(
        ((this.product.price.base - this.product.price.sale) /
          this.product.price.base) *
          100,
      );
    },

    formatPrice(value) {
      return new Intl.NumberFormat("hr-HR", {
        style: "currency",
        currency: "EUR",
      }).format(value);
    },

    openSidebar(name) {
      this.activeSidebar = name;
    },

    closeSidebar() {
      this.activeSidebar = null;
      this.activeCategory = null;
    },

    openCategory(categoryKey) {
      this.activeCategory = categoryKey;
    },

    backToLevelOne() {
      this.activeCategory = null;
    },

    openDesktopMenu(categoryKey) {
      this.activeCategory = categoryKey;
      this.isDesktopMenuOpen = true;
    },

    closeDesktopMenu() {
      this.isDesktopMenuOpen = false;
    },
  };
}
