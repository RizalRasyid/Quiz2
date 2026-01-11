// =================================================
// Head First OOAD - Movie Inventory
// Single File Implementation (Clean Code)
// =================================================



// =================================================
// Class MovieSpec
// =================================================
class MovieSpec {
  constructor(studio, title, genre, director, rating) {
    this.studio = studio;
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.rating = rating;
  }

  getStudio() { return this.studio; }
  getTitle() { return this.title; }
  getGenre() { return this.genre; }
  getDirector() { return this.director; }
  getRating() { return this.rating; }

  matches(otherSpec) {
    if (otherSpec.getStudio() && this.studio !== otherSpec.getStudio()) return false;
    if (otherSpec.getTitle() &&
        this.title.toLowerCase() !== otherSpec.getTitle().toLowerCase()) return false;
    if (otherSpec.getGenre() && this.genre !== otherSpec.getGenre()) return false;
    if (otherSpec.getDirector() && this.director !== otherSpec.getDirector()) return false;
    if (otherSpec.getRating() && this.rating !== otherSpec.getRating()) return false;
    return true;
  }
}



// =================================================
// Class Movie
// =================================================
class Movie {
  constructor(serialNumber, price, spec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = spec;
  }

  getSerialNumber() { return this.serialNumber; }
  getPrice() { return this.price; }
  setPrice(newPrice) { this.price = newPrice; }
  getSpec() { return this.spec; }
}



// =================================================
// Class Inventory
// =================================================
class Inventory {
  constructor() {
    this.movies = [];
  }

  addMovie(serialNumber, price, spec) {
    this.movies.push(new Movie(serialNumber, price, spec));
  }

  getMovie(serialNumber) {
    return this.movies.find(
      movie => movie.getSerialNumber() === serialNumber
    ) || null;
  }

  search(spec) {
    return this.movies.filter(
      movie => movie.getSpec().matches(spec)
    );
  }
}



// =================================================
// Main Program
// =================================================
const inventory = new Inventory();

// Data Movie
inventory.addMovie(
  "M001",
  15,
  new MovieSpec("Warner Bros", "The Dark Knight", "Action", "Christopher Nolan", "PG-13")
);

inventory.addMovie(
  "M002",
  18,
  new MovieSpec("Paramount", "Interstellar", "Sci-Fi", "Christopher Nolan", "PG-13")
);

inventory.addMovie(
  "M003",
  12,
  new MovieSpec("Universal", "Forrest Gump", "Drama", "Robert Zemeckis", "PG-13")
);

inventory.addMovie(
  "M004",
  16,
  new MovieSpec("Marvel Studios", "Avengers Endgame", "Action", "Russo Brothers", "PG-13")
);

inventory.addMovie(
  "M005",
  10,
  new MovieSpec("Pixar", "Toy Story", "Animation", "John Lasseter", "G")
);


// =================================================
// Search Examples
// =================================================
const actionSpec = new MovieSpec(null, null, "Action", null, null);
console.log("🎬 Semua film Action:");
console.log(inventory.search(actionSpec));

const nolanSpec = new MovieSpec(null, null, null, "Christopher Nolan", null);
console.log("\n🎥 Film Christopher Nolan:");
console.log(inventory.search(nolanSpec));

const interstellarSpec = new MovieSpec("Paramount", "Interstellar", null, null, null);
console.log("\n🚀 Interstellar ditemukan:");
console.log(inventory.search(interstellarSpec));
