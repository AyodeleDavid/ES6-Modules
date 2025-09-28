// Spread in arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const merged = [...nums1, ...nums2];
console.log(merged); // [1,2,3,4,5,6]

// Rest in functions
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
