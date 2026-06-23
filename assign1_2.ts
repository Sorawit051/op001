
let bookTitle: string = "Programming";
let isbn: string = "112233";
let price: number = 600;

let bookSummary: [string, number] = [bookTitle, price];

let isAvailable: boolean = true;

let discountedPrice: number = bookSummary[1] * 0.85;

let isPremium: boolean = bookSummary[1] > 500;

let canDisplay: boolean = (isPremium && isAvailable);

console.log(`ชื่อหนังสือ: ${bookSummary[0]}
รหัส ISBN: ${isbn}
ราคาปกติ: ${bookSummary[1]} บาท
ราคาโปรโมชัน: ${discountedPrice} บาท
หนังสือ Premium หรือไม่: ${isPremium}
สถานะการจัดแสดง: ${canDisplay ? "สามารถจัดแสดงที่หน้าตู้โชว์ได้" : "เก็บไว้ในสต็อก"}`);