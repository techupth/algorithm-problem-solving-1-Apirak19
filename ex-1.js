// 	**Exercise 1:**

// เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm เพื่อหาว่าผลรวมที่กำหนดให้มาจากการบวกกัน
// ระหว่างสมาชิกสองตัวไหนใน Array

// เช่น ถ้า `numbers =  [2, 7, 11, 15]` ผลรวมเท่ากับ `9`
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น `[0, 1]` คือตำแหน่งของสมาชิกสองตัวใน Array
// ที่บวกกันแล้วได้ผลลัพธ์เท่ากับ`9`(จาก 2 + 7)

// ถ้า `numbers =  [2, 7, 11, 15]` ผลรวมเท่ากับ `23` ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น `[]`
// หรือ Empty Array เนื่องจากไม่มีสมาชิกตัวใดที่บวกกันแล้วได้ผลลัพธ์เท่ากับ`23`

function twoSum(numbers, target) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(numbers[i], numbers[j]);
        return result;
      }
    }
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 100));

// Time Complexity = n^2
