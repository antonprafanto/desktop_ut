export const module3Content = {
  title: "Method & Function",
  sections: [
    {
      id: "intro-method",
      title: "Apa itu Method?",
      content: `
**Method** (atau function) adalah blok kode yang dapat dipanggil berulang kali untuk melakukan tugas tertentu.

**Kenapa pakai Method?**
1. **DRY (Don't Repeat Yourself)** - Tidak perlu tulis code yang sama berkali-kali
2. **Modular** - Code lebih terorganisir dan mudah dipahami
3. **Reusable** - Bisa dipakai berkali-kali
4. **Maintainable** - Mudah update dan debug

**Analogi:**
Bayangkan method seperti resep masakan. Sekali bikin resep, bisa dipakai berkali-kali.

**Contoh tanpa method (repetitive):**
      `,
      code: {
        language: 'java',
        code: `System.out.println("=== BIODATA ===");
System.out.println("Nama: Budi");
System.out.println("Umur: 20");
System.out.println("===============");

System.out.println("=== BIODATA ===");
System.out.println("Nama: Ani");
System.out.println("Umur: 21");
System.out.println("===============");

// Bayangkan ada 100 data? 😱`,
      },
      afterCode: `
**Dengan method (clean & reusable):**
      `,
      code2: {
        language: 'java',
        code: `public static void tampilkanBiodata(String nama, int umur) {
    System.out.println("=== BIODATA ===");
    System.out.println("Nama: " + nama);
    System.out.println("Umur: " + umur);
    System.out.println("===============");
}

// Panggil berkali-kali
tampilkanBiodata("Budi", 20);
tampilkanBiodata("Ani", 21);
// 100x juga gampang! 😎`,
      },
    },
    {
      id: "membuat-method",
      title: "Membuat Method",
      content: `
**Sintaks Method:**

\`\`\`
accessModifier returnType namaMethod(parameter) {
    // code di sini
    return value; // jika ada return type
}
\`\`\`

**Penjelasan:**
- **accessModifier**: \`public\`, \`private\`, dll (kita pakai \`public\` dulu)
- **returnType**: Tipe data yang dikembalikan (\`void\` jika tidak return)
- **namaMethod**: Nama method (camelCase)
- **parameter**: Input untuk method (opsional)

**Contoh Method Sederhana:**
      `,
      code: {
        language: 'java',
        filename: 'ContohMethod.java',
        code: `public class ContohMethod {

    // Method tanpa parameter dan return (void)
    public static void sapaPengguna() {
        System.out.println("Halo! Selamat datang!");
        System.out.println("Semoga hari Anda menyenangkan!");
    }

    // Method dengan parameter, tanpa return
    public static void sapaNama(String nama) {
        System.out.println("Halo " + nama + "!");
        System.out.println("Selamat belajar Java!");
    }

    // Method tanpa parameter, dengan return
    public static String getDayName() {
        return "Senin";
    }

    // Method dengan parameter dan return
    public static int tambah(int a, int b) {
        int hasil = a + b;
        return hasil;
    }

    public static void main(String[] args) {
        // Panggil method
        sapaPengguna();

        sapaNama("Budi");
        sapaNama("Ani");

        String hari = getDayName();
        System.out.println("Hari ini: " + hari);

        int jumlah = tambah(5, 3);
        System.out.println("5 + 3 = " + jumlah);

        // Bisa langsung print
        System.out.println("10 + 20 = " + tambah(10, 20));
    }
}`,
      },
      afterCode: `
**Output:**
\`\`\`
Halo! Selamat datang!
Semoga hari Anda menyenangkan!
Halo Budi!
Selamat belajar Java!
Halo Ani!
Selamat belajar Java!
Hari ini: Senin
5 + 3 = 8
10 + 20 = 30
\`\`\`
      `,
    },
    {
      id: "parameter-return",
      title: "Parameter dan Return Value",
      content: `
**Parameter** adalah input yang diberikan ke method.
**Return value** adalah output yang dikembalikan oleh method.

**Jenis-jenis Method:**
      `,
      code: {
        language: 'java',
        code: `// 1. Tanpa parameter, tanpa return
public static void greet() {
    System.out.println("Hello!");
}

// 2. Dengan parameter, tanpa return
public static void greetName(String name) {
    System.out.println("Hello " + name + "!");
}

// 3. Tanpa parameter, dengan return
public static int getRandomNumber() {
    return 42;
}

// 4. Dengan parameter, dengan return
public static double hitungLuasLingkaran(double radius) {
    double luas = 3.14 * radius * radius;
    return luas;
}

// 5. Multiple parameters
public static int hitungVolume(int panjang, int lebar, int tinggi) {
    return panjang * lebar * tinggi;
}`,
      },
      afterCode: `
**Contoh Penggunaan Real:**
      `,
      code2: {
        language: 'java',
        filename: 'KalkulatorSederhana.java',
        code: `import java.util.Scanner;

public class KalkulatorSederhana {

    public static double tambah(double a, double b) {
        return a + b;
    }

    public static double kurang(double a, double b) {
        return a - b;
    }

    public static double kali(double a, double b) {
        return a * b;
    }

    public static double bagi(double a, double b) {
        if (b == 0) {
            System.out.println("Error: Tidak bisa bagi 0!");
            return 0;
        }
        return a / b;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan angka 1: ");
        double num1 = input.nextDouble();

        System.out.print("Masukkan angka 2: ");
        double num2 = input.nextDouble();

        System.out.println("\\nHasil:");
        System.out.println(num1 + " + " + num2 + " = " + tambah(num1, num2));
        System.out.println(num1 + " - " + num2 + " = " + kurang(num1, num2));
        System.out.println(num1 + " × " + num2 + " = " + kali(num1, num2));
        System.out.println(num1 + " ÷ " + num2 + " = " + bagi(num1, num2));

        input.close();
    }
}`,
      },
    },
    {
      id: "method-overloading",
      title: "Method Overloading",
      content: `
**Method Overloading** adalah membuat beberapa method dengan nama sama tapi **parameter berbeda**.

**Kenapa perlu?**
Untuk fleksibilitas - method bisa handle berbagai jenis input.

**Aturan Overloading:**
1. Nama method **HARUS SAMA**
2. Parameter **HARUS BERBEDA** (jumlah atau tipe)
3. Return type **BOLEH BERBEDA**
      `,
      code: {
        language: 'java',
        filename: 'ContohOverloading.java',
        code: `public class ContohOverloading {

    // Method 1: Tambah 2 angka integer
    public static int tambah(int a, int b) {
        System.out.println("Memanggil tambah(int, int)");
        return a + b;
    }

    // Method 2: Tambah 3 angka integer
    public static int tambah(int a, int b, int c) {
        System.out.println("Memanggil tambah(int, int, int)");
        return a + b + c;
    }

    // Method 3: Tambah 2 angka double
    public static double tambah(double a, double b) {
        System.out.println("Memanggil tambah(double, double)");
        return a + b;
    }

    // Method 4: Gabung 2 string
    public static String tambah(String a, String b) {
        System.out.println("Memanggil tambah(String, String)");
        return a + b;
    }

    public static void main(String[] args) {
        // Java otomatis pilih method yang sesuai
        System.out.println(tambah(5, 3));              // int
        System.out.println(tambah(5, 3, 2));           // int (3 param)
        System.out.println(tambah(5.5, 3.2));          // double
        System.out.println(tambah("Hello ", "World")); // String
    }
}`,
      },
      afterCode: `
**Output:**
\`\`\`
Memanggil tambah(int, int)
8
Memanggil tambah(int, int, int)
10
Memanggil tambah(double, double)
8.7
Memanggil tambah(String, String)
Hello World
\`\`\`

**Use Case Real - Volume:**
      `,
      code2: {
        language: 'java',
        code: `public class HitungVolume {

    // Volume kubus (1 parameter)
    public static double volume(double sisi) {
        return sisi * sisi * sisi;
    }

    // Volume balok (3 parameter)
    public static double volume(double panjang, double lebar, double tinggi) {
        return panjang * lebar * tinggi;
    }

    // Volume silinder (2 parameter)
    public static double volume(double radius, double tinggi) {
        return 3.14 * radius * radius * tinggi;
    }

    public static void main(String[] args) {
        System.out.println("Volume kubus (sisi 5): " + volume(5.0));
        System.out.println("Volume balok (4x3x2): " + volume(4.0, 3.0, 2.0));
        System.out.println("Volume silinder (r=3, t=5): " + volume(3.0, 5.0));
    }
}`,
      },
    },
    {
      id: "static-vs-nonstatic",
      title: "Static vs Non-Static",
      content: `
Sampai sekarang kita selalu pakai \`static\`. Apa bedanya dengan non-static?

**Static Method:**
- Bisa dipanggil **tanpa** membuat object
- Dipanggil dengan: \`NamaClass.namaMethod()\`
- Tidak bisa akses instance variable

**Non-Static Method (Instance Method):**
- **HARUS** membuat object dulu
- Dipanggil dengan: \`namaObject.namaMethod()\`
- Bisa akses instance variable
      `,
      code: {
        language: 'java',
        filename: 'StaticVsNonStatic.java',
        code: `public class StaticVsNonStatic {

    // Static variable (milik class)
    static int jumlahMobil = 0;

    // Instance variable (milik object)
    String merk;
    String warna;

    // Constructor
    public StaticVsNonStatic(String merk, String warna) {
        this.merk = merk;
        this.warna = warna;
        jumlahMobil++; // Tambah counter
    }

    // Static method - bisa dipanggil tanpa object
    public static void infoJumlahMobil() {
        System.out.println("Total mobil: " + jumlahMobil);
    }

    // Non-static method - perlu object
    public void infoMobil() {
        System.out.println("Mobil: " + merk + " warna " + warna);
    }

    public static void main(String[] args) {
        // Static method - langsung panggil
        StaticVsNonStatic.infoJumlahMobil(); // Total: 0

        // Non-static - harus buat object dulu
        StaticVsNonStatic mobil1 = new StaticVsNonStatic("Toyota", "Merah");
        StaticVsNonStatic mobil2 = new StaticVsNonStatic("Honda", "Hitam");

        mobil1.infoMobil(); // Mobil: Toyota warna Merah
        mobil2.infoMobil(); // Mobil: Honda warna Hitam

        StaticVsNonStatic.infoJumlahMobil(); // Total: 2
    }
}`,
      },
      afterCode: `
**Kapan pakai Static?**
- ✅ Utility function (Math.sqrt, Math.pow)
- ✅ Konstanta (Math.PI)
- ✅ Main method
- ✅ Counter shared

**Kapan pakai Non-Static?**
- ✅ Method yang butuh data object
- ✅ Method yang berbeda per object
- ✅ Kebanyakan method di OOP
      `,
    },
    {
      id: "scope",
      title: "Scope Variabel",
      content: `
**Scope** adalah "area hidup" sebuah variabel.

**Jenis-jenis Scope:**
1. **Local Variable** - Di dalam method/block
2. **Parameter** - Di signature method
3. **Instance Variable** - Di dalam class (non-static)
4. **Static Variable** - Di dalam class (static)
      `,
      code: {
        language: 'java',
        filename: 'ContohScope.java',
        code: `public class ContohScope {

    // Static variable - bisa diakses di semua static method
    static int globalCounter = 0;

    // Instance variable - bisa diakses di semua non-static method
    String nama;

    public static void metodeSatu() {
        // Local variable - hanya ada di method ini
        int localVar = 10;
        System.out.println("localVar: " + localVar);
        System.out.println("globalCounter: " + globalCounter);

        // System.out.println(nama); // ERROR! static method tidak bisa akses instance var
    }

    public static void metodeDua() {
        // System.out.println(localVar); // ERROR! localVar hanya ada di metodeSatu
        System.out.println("globalCounter: " + globalCounter); // OK!

        // Local variable dengan nama sama OK, karena beda scope
        int localVar = 20;
        System.out.println("localVar di metodeDua: " + localVar);
    }

    public void metodeInstance() {
        // Non-static method bisa akses semua
        System.out.println("nama: " + nama);
        System.out.println("globalCounter: " + globalCounter);

        int localVar = 30;
        System.out.println("localVar: " + localVar);
    }

    public static void contohParameter(int angka) {
        // 'angka' adalah parameter - scope nya di method ini
        System.out.println("Parameter angka: " + angka);
        angka = 100; // Ubah nilai - tidak effect variable di luar
    }

    public static void main(String[] args) {
        metodeSatu();
        metodeDua();

        ContohScope obj = new ContohScope();
        obj.nama = "Budi";
        obj.metodeInstance();

        int nilai = 50;
        contohParameter(nilai);
        System.out.println("nilai tetap: " + nilai); // Masih 50
    }
}`,
      },
      afterCode: `
**Aturan Penting:**
1. Variable local hanya hidup di block \`{}\` nya
2. Parameter seperti local variable
3. Hindari nama variable yang sama di scope berbeda (confusing)
4. Static method tidak bisa akses instance variable
5. Non-static method bisa akses semua
      `,
    },
    {
      id: "best-practices",
      title: "Best Practices Method",
      content: `
**Tips Membuat Method yang Baik:**

**1. Single Responsibility**
Method harus punya **satu tugas** saja.

❌ **Bad:**
      `,
      code: {
        language: 'java',
        code: `public static void prosesData() {
    // Input
    Scanner input = new Scanner(System.in);
    int angka = input.nextInt();

    // Validasi
    if (angka < 0) return;

    // Hitung
    int hasil = angka * 2;

    // Save ke file
    // ...

    // Print
    System.out.println(hasil);
}`,
      },
      afterCode: `
✅ **Good:**
      `,
      code2: {
        language: 'java',
        code: `public static int inputAngka() {
    Scanner input = new Scanner(System.in);
    return input.nextInt();
}

public static boolean isValid(int angka) {
    return angka >= 0;
}

public static int hitungDouble(int angka) {
    return angka * 2;
}

public static void tampilkanHasil(int hasil) {
    System.out.println("Hasil: " + hasil);
}

// Di main:
int angka = inputAngka();
if (isValid(angka)) {
    int hasil = hitungDouble(angka);
    tampilkanHasil(hasil);
}`,
      },
    },
    {
      id: "latihan",
      title: "Latihan & Challenge",
      content: `
Sekarang giliran Anda praktik! Coba buat program berikut:

**Latihan 1: Konversi Suhu**
Buat method untuk konversi suhu:
- \`celsiusToFahrenheit(double celsius)\`
- \`fahrenheitToCelsius(double fahrenheit)\`
- \`celsiusToKelvin(double celsius)\`

**Latihan 2: Validasi**
Buat method untuk validasi:
- \`isEven(int number)\` - cek genap
- \`isPrime(int number)\` - cek bilangan prima
- \`isValidEmail(String email)\` - cek email valid (ada @)

**Latihan 3: String Manipulation**
Buat method overloading untuk:
- \`format(String text)\` - uppercase
- \`format(String text, boolean uppercase)\` - upper/lower sesuai parameter
- \`format(String text, String prefix, String suffix)\` - tambah prefix & suffix

**Latihan 4: Kalkulator Advanced**
Buat kalkulator dengan method:
- \`hitung(char operator, double a, double b)\`
- Support: +, -, *, /, %, ^ (pangkat)
- Validasi input (division by zero, dll)

**Challenge: ATM Sederhana**
Buat program ATM dengan method:
- \`cekSaldo()\` - lihat saldo
- \`setor(double jumlah)\` - setor uang
- \`tarik(double jumlah)\` - tarik uang (validasi saldo cukup)
- \`transfer(double jumlah, String tujuan)\` - transfer
- Loop menu sampai user pilih keluar

**Tips:**
- Gunakan \`static\` variable untuk saldo
- Validasi semua input
- Beri pesan yang jelas

Coba kerjakan sendiri dulu sebelum lihat solusi! 💪
      `,
    },
    {
      id: "summary",
      title: "Ringkasan Modul 3",
      content: `
Selamat! Anda sudah menguasai Method & Function! 🎉

**Yang Sudah Dipelajari:**
✅ Konsep method dan manfaatnya
✅ Membuat method (dengan/tanpa parameter & return)
✅ Parameter dan return value
✅ Method overloading
✅ Static vs non-static method
✅ Scope variabel (local, parameter, instance, static)
✅ Best practices method

**Konsep Penting:**
- Method membuat code DRY, modular, reusable
- Overloading = nama sama, parameter beda
- Static = langsung panggil, non-static = butuh object
- Variable local hanya hidup di scope nya
- One method, one responsibility

**Next: Modul 4 - OOP**
Di modul berikutnya kita akan belajar:
- Class dan Object
- Constructor
- Encapsulation
- Inheritance
- Polymorphism

Method adalah fondasi OOP! Anda sudah siap untuk level berikutnya! 🚀

**Tips Lanjutan:**
- Praktik buat method untuk tugas sehari-hari
- Refactor code lama: pisahkan jadi method-method kecil
- Naming yang jelas: \`hitungTotal()\` > \`calc()\`
- Jangan takut buat method baru jika diperlukan

Happy Coding! 💻
      `,
    },
  ],
};
