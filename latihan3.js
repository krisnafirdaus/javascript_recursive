// Buatlah rekursive function yang dapat menghasilkan angka seperti ini

// f(1) = 3
// f(2) = 6
// f(3) = 12
// f(4) = 24
// f(5) = 48
// f(n) =  ...
function funcAngka(angka) {
  if (angka == 1) {
    alert 3;
  } else {
    alert(funcAngka(1) * 2 ** (angka - 1));
  }
}
