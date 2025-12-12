export const module2Content = {
  title: "Dasar-Dasar Java",
  sections: [
    {
      id: "struktur",
      title: "Struktur Program Java",
      content: `
Setiap program Java memiliki struktur dasar yang harus diikuti. Mari kita pahami setiap bagiannya:
      `,
      code: {
        language: 'java',
        filename: 'ContohStruktur.java',
        code: `// 1. Package declaration (opsional)
package com.belajar.java;

// 2. Import statements (jika perlu library lain)
import java.util.Scanner;

// 3. Class declaration (WAJIB)
public class ContohStruktur {

    // 4. Main method (entry point program)
    public static void main(String[] args) {
        // 5. Statements/code Anda di sini
        System.out.println("Hello Java!");
    }
}`,
      },
      afterCode: `
**Penjelasan Struktur:**

1. **Package** - Organisasi code, seperti folder
   - Opsional untuk program kecil
   - Format: \`package nama.paket;\`

2. **Import** - Menggunakan class dari package lain
   - Contoh: \`import java.util.Scanner;\` untuk input user

3. **Class Declaration** - Kontainer untuk code
   - Nama class harus sama dengan nama file
   - \`public\` = bisa diakses dari mana saja
   - \`class\` = keyword untuk membuat class

4. **Main Method** - Titik mulai program
   - Signature harus persis: \`public static void main(String[] args)\`
   - Program dimulai dari sini

5. **Statements** - Instruksi/perintah program
   - Diakhiri dengan \`;\` (semicolon)
   - Dijalankan dari atas ke bawah

**Aturan Penting:**
- Huruf besar/kecil berbeda (case-sensitive): \`Hello\` ≠ \`hello\`
- Nama file harus sama dengan nama class
- Setiap statement diakhiri \`;\`
- Code di dalam \`{}\` (curly braces)
      `,
    },
    {
      id: "variabel",
      title: "Variabel dan Tipe Data",
      content: `
**Variabel** adalah tempat menyimpan data di memori. Bayangkan seperti kotak dengan label yang bisa diisi sesuatu.

**Tipe Data Dasar di Java:**

| Tipe Data | Untuk | Contoh | Ukuran |
|-----------|-------|--------|--------|
| \`int\` | Bilangan bulat | 42, -10, 0 | 4 bytes |
| \`double\` | Bilangan desimal | 3.14, -0.5 | 8 bytes |
| \`boolean\` | true/false | true, false | 1 bit |
| \`char\` | Karakter tunggal | 'A', '5', '@' | 2 bytes |
| \`String\` | Text/kalimat | "Hello" | Variable |

**Cara Deklarasi Variabel:**
      `,
      code: {
        language: 'java',
        filename: 'ContohVariabel.java',
        code: `public class ContohVariabel {
    public static void main(String[] args) {
        // Deklarasi + inisialisasi
        int umur = 20;
        double ipk = 3.75;
        boolean lulus = true;
        char grade = 'A';
        String nama = "Budi Santoso";

        // Print variabel
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur + " tahun");
        System.out.println("IPK: " + ipk);
        System.out.println("Grade: " + grade);
        System.out.println("Lulus: " + lulus);

        // Mengubah nilai variabel
        umur = 21;  // ulang tahun!
        System.out.println("Umur baru: " + umur);
    }
}`,
      },
      afterCode: `
**Output:**
\`\`\`
Nama: Budi Santoso
Umur: 20 tahun
IPK: 3.75
Grade: A
Lulus: true
Umur baru: 21
\`\`\`

**Aturan Penamaan Variabel:**
✅ DO:
- Mulai dengan huruf kecil: \`umur\`, \`namaMahasiswa\`
- CamelCase untuk multi-kata: \`ipkSemesterIni\`
- Deskriptif: \`jumlahMahasiswa\` > \`jm\`

❌ DON'T:
- Dimulai angka: \`1nama\` ❌
- Pakai spasi: \`nama mahasiswa\` ❌
- Pakai karakter khusus: \`nama@mahasiswa\` ❌
- Pakai keyword Java: \`int\`, \`class\`, dll ❌
      `,
    },
    {
      id: "input-output",
      title: "Input dan Output",
      content: `
**Output** sudah kita pelajari: \`System.out.println()\`

Sekarang mari belajar **Input** dari user menggunakan \`Scanner\`:
      `,
      code: {
        language: 'java',
        filename: 'ContohInput.java',
        code: `import java.util.Scanner;  // Jangan lupa import!

public class ContohInput {
    public static void main(String[] args) {
        // Buat Scanner object untuk input
        Scanner input = new Scanner(System.in);

        // Input String
        System.out.print("Masukkan nama Anda: ");
        String nama = input.nextLine();

        // Input int
        System.out.print("Masukkan umur Anda: ");
        int umur = input.nextInt();

        // Input double
        System.out.print("Masukkan IPK Anda: ");
        double ipk = input.nextDouble();

        // Tampilkan hasil
        System.out.println("\\n=== DATA MAHASISWA ===");
        System.out.println("Nama : " + nama);
        System.out.println("Umur : " + umur + " tahun");
        System.out.println("IPK  : " + ipk);

        // Tutup Scanner (good practice)
        input.close();
    }
}`,
      },
      afterCode: `
**Penjelasan:**
- \`Scanner input = new Scanner(System.in);\` - Buat Scanner object
- \`input.nextLine()\` - Baca String (satu baris)
- \`input.nextInt()\` - Baca integer
- \`input.nextDouble()\` - Baca double
- \`input.next()\` - Baca String (satu kata)
- \`input.close()\` - Tutup Scanner (hemat memory)

**Method Scanner Lainnya:**
- \`nextBoolean()\` - untuk boolean
- \`nextByte()\` - untuk byte
- \`nextLong()\` - untuk long

**Tips:**
- \`print()\` tidak pindah baris, \`println()\` pindah baris
- \`\\n\` = new line (enter)
- \`\\t\` = tab
      `,
    },
    {
      id: "operator",
      title: "Operator",
      content: `
Operator digunakan untuk melakukan operasi pada variabel dan nilai.

**1. Operator Aritmatika**
      `,
      code: {
        language: 'java',
        code: `int a = 10, b = 3;

System.out.println(a + b);  // 13 (penjumlahan)
System.out.println(a - b);  // 7  (pengurangan)
System.out.println(a * b);  // 30 (perkalian)
System.out.println(a / b);  // 3  (pembagian bulat)
System.out.println(a % b);  // 1  (modulus/sisa bagi)

double x = 10.0, y = 3.0;
System.out.println(x / y);  // 3.333... (pembagian desimal)`,
      },
      afterCode: `
**2. Operator Perbandingan** (hasil: boolean)
      `,
      code2: {
        language: 'java',
        code: `int nilai = 85;

System.out.println(nilai == 85);   // true  (sama dengan)
System.out.println(nilai != 70);   // true  (tidak sama)
System.out.println(nilai > 80);    // true  (lebih besar)
System.out.println(nilai < 90);    // true  (lebih kecil)
System.out.println(nilai >= 85);   // true  (lebih besar atau sama)
System.out.println(nilai <= 84);   // false (lebih kecil atau sama)`,
      },
      afterCode2: `
**3. Operator Logika** (untuk kondisi kompleks)
      `,
    },
    {
      id: "operator-lanjutan",
      title: "Operator Logika & Assignment",
      content: `
**Operator Logika:**
      `,
      code: {
        language: 'java',
        code: `int nilai = 85;
boolean hadir = true;

// AND (&&) - semua harus true
System.out.println(nilai >= 80 && hadir);  // true

// OR (||) - salah satu true
System.out.println(nilai >= 90 || hadir);  // true

// NOT (!) - kebalikan
System.out.println(!hadir);  // false`,
      },
      afterCode: `
**Operator Assignment:**
      `,
      code2: {
        language: 'java',
        code: `int x = 10;

x = x + 5;   // x sekarang 15
x += 5;      // sama dengan x = x + 5; (shorthand)

x -= 3;      // x = x - 3; (x sekarang 12)
x *= 2;      // x = x * 2; (x sekarang 24)
x /= 4;      // x = x / 4; (x sekarang 6)
x %= 4;      // x = x % 4; (x sekarang 2)

// Increment & Decrement
x++;         // x = x + 1; (x sekarang 3)
x--;         // x = x - 1; (x sekarang 2)`,
      },
    },
    {
      id: "kondisional",
      title: "Kondisional (if-else, switch)",
      content: `
**Kondisional** memungkinkan program membuat keputusan.

**1. If Statement**
      `,
      code: {
        language: 'java',
        filename: 'ContohIf.java',
        code: `import java.util.Scanner;

public class ContohIf {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan nilai: ");
        int nilai = input.nextInt();

        // If sederhana
        if (nilai >= 80) {
            System.out.println("Selamat! Anda lulus dengan nilai A!");
        }

        // If-else
        if (nilai >= 60) {
            System.out.println("Anda LULUS");
        } else {
            System.out.println("Anda TIDAK LULUS");
        }

        // If-else if-else (multi kondisi)
        if (nilai >= 80) {
            System.out.println("Grade: A (Excellent!)");
        } else if (nilai >= 70) {
            System.out.println("Grade: B (Good!)");
        } else if (nilai >= 60) {
            System.out.println("Grade: C (Pass)");
        } else {
            System.out.println("Grade: D (Fail)");
        }

        input.close();
    }
}`,
      },
      afterCode: `
**2. Switch Statement** (untuk multiple choice)
      `,
      code2: {
        language: 'java',
        filename: 'ContohSwitch.java',
        code: `import java.util.Scanner;

public class ContohSwitch {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("MENU MAKANAN:");
        System.out.println("1. Nasi Goreng - Rp 15.000");
        System.out.println("2. Mie Goreng  - Rp 12.000");
        System.out.println("3. Ayam Geprek - Rp 18.000");
        System.out.print("Pilih menu (1-3): ");

        int pilihan = input.nextInt();

        switch (pilihan) {
            case 1:
                System.out.println("Anda pesan Nasi Goreng");
                System.out.println("Total: Rp 15.000");
                break;  // Keluar dari switch
            case 2:
                System.out.println("Anda pesan Mie Goreng");
                System.out.println("Total: Rp 12.000");
                break;
            case 3:
                System.out.println("Anda pesan Ayam Geprek");
                System.out.println("Total: Rp 18.000");
                break;
            default:
                System.out.println("Menu tidak tersedia!");
        }

        input.close();
    }
}`,
      },
      afterCode2: `
**Kapan pakai if vs switch?**
- **if-else**: Kondisi kompleks, range nilai (\`nilai >= 80\`)
- **switch**: Nilai pasti/discrete (1, 2, 3 atau "A", "B", "C")
- **break**: Penting! Tanpa break, code terus ke case berikutnya
      `,
    },
    {
      id: "perulangan",
      title: "Perulangan (Loop)",
      content: `
**Loop** digunakan untuk mengulang code berkali-kali.

**1. For Loop** (tahu berapa kali ulang)
      `,
      code: {
        language: 'java',
        code: `// Cetak angka 1-5
for (int i = 1; i <= 5; i++) {
    System.out.println("Angka: " + i);
}

// Output:
// Angka: 1
// Angka: 2
// Angka: 3
// Angka: 4
// Angka: 5

// Hitung mundur
for (int i = 5; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("GO!");

// Loncat 2-2
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);  // 0, 2, 4, 6, 8, 10
}`,
      },
      afterCode: `
**Penjelasan For Loop:**
\`for (init; condition; update)\`
- **init**: \`int i = 1\` - Nilai awal
- **condition**: \`i <= 5\` - Kapan loop berhenti
- **update**: \`i++\` - Perubahan setiap iterasi

**2. While Loop** (ulang selama kondisi true)
      `,
      code2: {
        language: 'java',
        code: `int i = 1;
while (i <= 5) {
    System.out.println("Angka: " + i);
    i++;
}

// Contoh: Input sampai benar
Scanner input = new Scanner(System.in);
int password = 1234;
int coba;

System.out.println("Masukkan password:");
coba = input.nextInt();

while (coba != password) {
    System.out.println("Password salah! Coba lagi:");
    coba = input.nextInt();
}

System.out.println("Password benar! Akses diberikan.");`,
      },
    },
    {
      id: "perulangan-lanjutan",
      title: "Do-While & Nested Loop",
      content: `
**3. Do-While Loop** (eksekusi minimal 1 kali)
      `,
      code: {
        language: 'java',
        code: `Scanner input = new Scanner(System.in);
int pilihan;

do {
    System.out.println("\\n=== MENU ===");
    System.out.println("1. Lihat Data");
    System.out.println("2. Tambah Data");
    System.out.println("3. Keluar");
    System.out.print("Pilih menu: ");
    pilihan = input.nextInt();

    switch (pilihan) {
        case 1:
            System.out.println("Menampilkan data...");
            break;
        case 2:
            System.out.println("Menambah data...");
            break;
        case 3:
            System.out.println("Terima kasih!");
            break;
        default:
            System.out.println("Pilihan tidak valid!");
    }
} while (pilihan != 3);  // Ulang sampai user pilih 3`,
      },
      afterCode: `
**Perbedaan While vs Do-While:**
- **While**: Cek kondisi dulu, baru eksekusi
- **Do-While**: Eksekusi dulu, baru cek kondisi

**4. Nested Loop** (loop di dalam loop)
      `,
      code2: {
        language: 'java',
        code: `// Cetak pola bintang
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}

// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

// Tabel perkalian
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print((i * j) + "\\t");
    }
    System.out.println();
}`,
      },
      afterCode2: `
**Break & Continue:**
      `,
    },
    {
      id: "break-continue",
      title: "Break & Continue",
      content: `
**Break** - Keluar dari loop
**Continue** - Skip iterasi saat ini, lanjut ke iterasi berikutnya
      `,
      code: {
        language: 'java',
        code: `// BREAK - Berhenti saat ketemu angka 5
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Keluar dari loop
    }
    System.out.println(i);
}
// Output: 1 2 3 4

// CONTINUE - Skip angka 5
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;  // Skip, lanjut ke i=6
    }
    System.out.println(i);
}
// Output: 1 2 3 4 6 7 8 9 10

// Contoh praktis: Cari bilangan prima
int n = 29;
boolean prima = true;

for (int i = 2; i <= n/2; i++) {
    if (n % i == 0) {
        prima = false;
        break;  // Sudah ketemu pembagi, tidak perlu lanjut
    }
}

if (prima) {
    System.out.println(n + " adalah bilangan prima");
} else {
    System.out.println(n + " bukan bilangan prima");
}`,
      },
    },
    {
      id: "array",
      title: "Array dan ArrayList",
      content: `
**Array** adalah kumpulan variabel dengan tipe yang sama.

**1. Array Dasar**
      `,
      code: {
        language: 'java',
        code: `// Deklarasi array
int[] nilai = new int[5];  // Array 5 elemen

// Mengisi array
nilai[0] = 85;
nilai[1] = 90;
nilai[2] = 78;
nilai[3] = 92;
nilai[4] = 88;

// Akses array
System.out.println("Nilai 1: " + nilai[0]);
System.out.println("Nilai 3: " + nilai[2]);

// Deklarasi dengan inisialisasi
String[] nama = {"Budi", "Ani", "Citra", "Doni"};

// Loop array
System.out.println("Daftar nama:");
for (int i = 0; i < nama.length; i++) {
    System.out.println((i+1) + ". " + nama[i]);
}

// Enhanced for loop (for-each)
System.out.println("\\nDengan for-each:");
for (String n : nama) {
    System.out.println("- " + n);
}`,
      },
      afterCode: `
**2. ArrayList** (dynamic array, bisa grow/shrink)
      `,
      code2: {
        language: 'java',
        code: `import java.util.ArrayList;

public class ContohArrayList {
    public static void main(String[] args) {
        // Buat ArrayList
        ArrayList<String> mahasiswa = new ArrayList<>();

        // Tambah elemen
        mahasiswa.add("Budi");
        mahasiswa.add("Ani");
        mahasiswa.add("Citra");

        // Akses elemen
        System.out.println("Mahasiswa 1: " + mahasiswa.get(0));

        // Ukuran
        System.out.println("Total mahasiswa: " + mahasiswa.size());

        // Update elemen
        mahasiswa.set(1, "Andi");  // Ganti "Ani" jadi "Andi"

        // Hapus elemen
        mahasiswa.remove(2);  // Hapus index 2
        mahasiswa.remove("Budi");  // Hapus by value

        // Loop ArrayList
        for (String mhs : mahasiswa) {
            System.out.println("- " + mhs);
        }

        // Cek ada/tidak
        if (mahasiswa.contains("Andi")) {
            System.out.println("Andi ada di list");
        }

        // Clear semua
        mahasiswa.clear();
        System.out.println("List dikosongkan");
    }
}`,
      },
      afterCode2: `
**Array vs ArrayList:**

| Array | ArrayList |
|-------|-----------|
| Fixed size | Dynamic size |
| \`int[] arr = new int[5]\` | \`ArrayList<Integer> list = new ArrayList<>()\` |
| \`arr[0]\` | \`list.get(0)\` |
| \`arr.length\` | \`list.size()\` |
| Lebih cepat | Lebih fleksibel |
      `,
    },
    {
      id: "string",
      title: "String Manipulation",
      content: `
**String** adalah sequence of characters. String di Java adalah object, bukan primitive type.

**Method String yang Sering Digunakan:**
      `,
      code: {
        language: 'java',
        code: `String nama = "Budi Santoso";
String email = "budi@email.com";

// 1. Length
System.out.println(nama.length());  // 13

// 2. Uppercase & Lowercase
System.out.println(nama.toUpperCase());  // BUDI SANTOSO
System.out.println(nama.toLowerCase());  // budi santoso

// 3. Substring (potong string)
System.out.println(nama.substring(0, 4));  // Budi
System.out.println(nama.substring(5));     // Santoso

// 4. Replace
System.out.println(nama.replace("Budi", "Andi"));  // Andi Santoso

// 5. Split (pecah string jadi array)
String[] parts = nama.split(" ");
System.out.println(parts[0]);  // Budi
System.out.println(parts[1]);  // Santoso

// 6. Contains (cek substring)
if (email.contains("@")) {
    System.out.println("Email valid");
}

// 7. Equals (bandingkan string)
String password = "rahasia123";
String input = "rahasia123";

if (password.equals(input)) {
    System.out.println("Password benar");
}

// JANGAN pakai == untuk string!
// Pakai .equals() atau .equalsIgnoreCase()

// 8. Trim (hapus spasi depan/belakang)
String text = "  hello  ";
System.out.println(text.trim());  // "hello"

// 9. charAt (ambil karakter di index)
System.out.println(nama.charAt(0));  // B

// 10. indexOf (cari posisi substring)
System.out.println(email.indexOf("@"));  // 4`,
      },
      afterCode: `
**String Concatenation:**
      `,
      code2: {
        language: 'java',
        code: `String firstName = "Budi";
String lastName = "Santoso";

// Cara 1: dengan +
String fullName = firstName + " " + lastName;

// Cara 2: dengan concat()
String fullName2 = firstName.concat(" ").concat(lastName);

// Cara 3: dengan String.format()
String fullName3 = String.format("%s %s", firstName, lastName);

// Untuk banyak concatenation, pakai StringBuilder (lebih efisien)
StringBuilder sb = new StringBuilder();
sb.append("Nama: ");
sb.append(firstName);
sb.append(" ");
sb.append(lastName);
String result = sb.toString();`,
      },
    },
    {
      id: "latihan",
      title: "Latihan & Project Mini",
      content: `
Sekarang saatnya praktik! Coba buat program-program berikut:

**Latihan 1: Kalkulator Sederhana**
Buat program kalkulator yang bisa +, -, *, /
      `,
      code: {
        language: 'java',
        filename: 'Kalkulator.java',
        code: `import java.util.Scanner;

public class Kalkulator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan angka 1: ");
        double num1 = input.nextDouble();

        System.out.print("Masukkan operator (+, -, *, /): ");
        char operator = input.next().charAt(0);

        System.out.print("Masukkan angka 2: ");
        double num2 = input.nextDouble();

        double hasil = 0;

        switch (operator) {
            case '+':
                hasil = num1 + num2;
                break;
            case '-':
                hasil = num1 - num2;
                break;
            case '*':
                hasil = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    hasil = num1 / num2;
                } else {
                    System.out.println("Error: Tidak bisa bagi 0!");
                    return;
                }
                break;
            default:
                System.out.println("Operator tidak valid!");
                return;
        }

        System.out.println("Hasil: " + hasil);
        input.close();
    }
}`,
      },
      afterCode: `
**Latihan 2: Cek Bilangan Prima**
**Latihan 3: Tebak Angka**
**Latihan 4: Konversi Suhu**
**Latihan 5: Todo List dengan ArrayList**

Challenge: Coba buat sendiri tanpa lihat solusi dulu! 💪
      `,
    },
    {
      id: "summary",
      title: "Ringkasan Modul 2",
      content: `
Hebat! Anda sudah menyelesaikan Modul 2! 🎉

**Yang sudah dipelajari:**
✅ Struktur program Java
✅ Variabel dan tipe data (int, double, String, boolean, char)
✅ Input/Output dengan Scanner
✅ Operator (aritmatika, perbandingan, logika)
✅ Kondisional (if-else, switch)
✅ Perulangan (for, while, do-while)
✅ Break & Continue
✅ Array dan ArrayList
✅ String manipulation

**Konsep Penting yang Harus Dikuasai:**
- Tipe data yang tepat untuk kebutuhan
- Logic kondisional (if-else vs switch)
- Pilih loop yang tepat (for vs while vs do-while)
- Array untuk fixed size, ArrayList untuk dynamic
- String manipulation untuk text processing

**Next: Modul 3 - Method & Function**
Di modul berikutnya kita akan belajar:
- Membuat method sendiri
- Parameter dan return value
- Method overloading
- Static vs non-static
- Scope variabel

**Tips Belajar:**
- PRAKTEK! Buat program kecil setiap hari
- Debug sendiri error Anda (belajar dari error)
- Coba variasi dari contoh yang diberikan
- Jangan copy-paste, ketik ulang untuk muscle memory

Selamat belajar! Lanjut ke Modul 3? 🚀
      `,
    },
  ],
};
