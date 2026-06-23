
let productName: string = "Keyboard"; 
let pricePerUnit: number = 1200; 
let quantity: number = 2; 
let isMember: boolean = true;

let totalPrice: number = pricePerUnit * quantity; 


let hasDiscount: boolean = (totalPrice > 1000 || isMember); 


let netPrice: number = hasDiscount ? totalPrice * 0.9 : totalPrice;


console.log(`ชื่อสินค้า: ${productName} จำนวน: ${quantity} ชิ้น
ราคารวมทั้งหมด: ${totalPrice} บาท
ได้รับส่วนลดหรือไม่: ${hasDiscount}
ราคาที่ต้องจ่ายจริง: ${netPrice} บาท`);