export default function bookstoreApp() {
  return {
    activeSidebar: null,
    activeCategory: null,
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
  };
}
