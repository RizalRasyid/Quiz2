/* ================== Guitar ================== */
class Guitar {
  constructor({ serialNumber, price, builder, model, type, backWood, topWood }) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
  }
}

/* ================== Inventory ================== */
class Inventory {
  constructor() {
    this.guitars = [];
  }

  addGuitar(guitarData) {
    this.guitars.push(new Guitar(guitarData));
  }

  search(spec) {
    return this.guitars.filter(g =>
      (!spec.builder || spec.builder.toLowerCase() === g.builder.toLowerCase()) &&
      (!spec.model || spec.model.toLowerCase() === g.model.toLowerCase()) &&
      (!spec.type || spec.type.toLowerCase() === g.type.toLowerCase()) &&
      (!spec.backWood || spec.backWood.toLowerCase() === g.backWood.toLowerCase()) &&
      (!spec.topWood || spec.topWood.toLowerCase() === g.topWood.toLowerCase())
    );
  }
}

/* ================== Main ================== */
const inventory = new Inventory();

// ===== DATA GITAR (BANYAK) =====
const guitarDataList = [
  {
    serialNumber: "SN001",
    price: 15000000,
    builder: "Fender",
    model: "Stratocaster",
    type: "Electric",
    backWood: "Alder",
    topWood: "Alder"
  },
  {
    serialNumber: "SN002",
    price: 17000000,
    builder: "Fender",
    model: "Telecaster",
    type: "Electric",
    backWood: "Ash",
    topWood: "Ash"
  },
  {
    serialNumber: "SN003",
    price: 18000000,
    builder: "Gibson",
    model: "Les Paul",
    type: "Electric",
    backWood: "Mahogany",
    topWood: "Maple"
  },
  {
    serialNumber: "SN004",
    price: 20000000,
    builder: "Gibson",
    model: "SG",
    type: "Electric",
    backWood: "Mahogany",
    topWood: "Mahogany"
  },
  {
    serialNumber: "SN005",
    price: 12000000,
    builder: "Ibanez",
    model: "RG",
    type: "Electric",
    backWood: "Basswood",
    topWood: "Maple"
  },
  {
    serialNumber: "SN006",
    price: 14000000,
    builder: "Ibanez",
    model: "S Series",
    type: "Electric",
    backWood: "Mahogany",
    topWood: "Maple"
  },
  {
    serialNumber: "SN007",
    price: 10000000,
    builder: "Yamaha",
    model: "Pacifica",
    type: "Electric",
    backWood: "Alder",
    topWood: "Alder"
  },
  {
    serialNumber: "SN008",
    price: 9000000,
    builder: "Cort",
    model: "X Series",
    type: "Electric",
    backWood: "Meranti",
    topWood: "Maple"
  },
  {
    serialNumber: "SN009",
    price: 13000000,
    builder: "Taylor",
    model: "214ce",
    type: "Acoustic",
    backWood: "Rosewood",
    topWood: "Spruce"
  },
  {
    serialNumber: "SN010",
    price: 11000000,
    builder: "Martin",
    model: "D-10E",
    type: "Acoustic",
    backWood: "Sapele",
    topWood: "Spruce"
  }
];

// Masukkan semua data ke inventory
guitarDataList.forEach(guitar => inventory.addGuitar(guitar));

// ===== PENCARIAN =====
const searchSpec = {
  builder: "Fender",
  type: "Electric"
};

const results = inventory.search(searchSpec);

// ===== OUTPUT =====
console.log("Hasil Pencarian:");
console.log("================");

if (!results.length) {
  console.log("Gitar tidak ditemukan.");
} else {
  results.forEach((g, i) => {
    console.log(
      `${i + 1}. ${g.builder} ${g.model} | ${g.type} | Rp${g.price}`
    );
  });
}
