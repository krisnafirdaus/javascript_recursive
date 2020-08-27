// Buatlah rekursive function yang dapat menampilkan deret angka genap sampai N input.

// Contoh:
// Jika diberi argumen angka 5, maka hasilnya adalah 0 2 4
function deretAngka(x) {
  if (x % 2 == 0) {
    if (x < 0) {
      return "undefined";
    }
    if (x == 0) {
      console.log(0);
    } else {
      if (x == x) {
        console.log(x);
        deretAngka(x - 2);
      } else {
        console.log(x - 2);
      }
    }
  }
  if (x % 2 == 1) {
    if (x == 1) {
      console.log(0);
    } else {
      console.log(x - 1);
      deretAngka(x - 2);
    }
  }
}

console.log(deretAngka(6));
