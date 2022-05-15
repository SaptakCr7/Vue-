const app = Vue.createApp({
  // template: "<h2>This is Template</h2>",

  data() {
    return {
      showBooks: true,
      title: "The final empire",
      //outputting list/ list renddering

      books: [
        {
          title: "name of the wind",
          author: "Brayan addams",
          img: "https://picsum.photos/120/120",
          isFav: true,
        },
        {
          title: "The way of king",
          author: "Chetan Bhagat",
          img: "https://picsum.photos/120/120",
          isFav: false,
        },
        {
          title: "the Final empire",
          author: "Amish dutta",
          img: "https://picsum.photos/120/120",
          isFav: true,
        },
      ],
      Age: 40,
      x: 0,
      y: 0,
    };
  },
  //Event handler
  methods: {
    //   changeTitle() {
    //     this.title = "Heart Of a Wise man";
    //   },
    // },
    //Conditional rendering
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    togglefav(book) {
      book.isFav = !book.isFav;
    },
    handelEvent(e) {
      console.log(e, e.type);
    },
    handelmousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
