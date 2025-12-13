export const module4Content = {
  title: "Pemrograman Berorientasi Objek (OOP)",
  sections: [
    {
      id: "intro-oop",
      title: "Apa itu OOP?",
      content: `
**OOP (Object-Oriented Programming)** adalah paradigma pemrograman yang mengorganisir code berdasarkan **objek** - kombinasi data dan fungsi.

**Kenapa OOP?**
- 🎯 **Modular** - Code terorganisir rapi
- 🔄 **Reusable** - Code bisa dipakai ulang
- 🛡️ **Maintainable** - Mudah update dan debug
- 🌍 **Real-world modeling** - Mirip dunia nyata

**Analogi Dunia Nyata:**

Bayangkan Anda ingin buat program untuk **Mobil**:

**❌ Tanpa OOP (Prosedural):**
\`\`\`
String merk1 = "Toyota";
String warna1 = "Merah";
int kecepatan1 = 0;

String merk2 = "Honda";
String warna2 = "Hitam";
int kecepatan2 = 0;

// Banyak variabel terpisah, susah manage!
\`\`\`

**✅ Dengan OOP:**
\`\`\`
Mobil mobil1 = new Mobil("Toyota", "Merah");
Mobil mobil2 = new Mobil("Honda", "Hitam");

mobil1.gas();
mobil2.rem();
// Terorganisir, mudah dipahami!
\`\`\`

**4 Pilar OOP:**
1. **Encapsulation** - Pembungkusan data
2. **Inheritance** - Pewarisan sifat
3. **Polymorphism** - Banyak bentuk
4. **Abstraction** - Penyembunyian detail

Mari kita pelajari satu per satu! 🚀
      `,
    },
    {
      id: "class-object",
      title: "Class dan Object",
      content: `
**Class** = Blueprint/cetakan
**Object** = Hasil dari blueprint

**Analogi:**
- **Class** = Denah rumah
- **Object** = Rumah fisiknya

**Membuat Class:**
      `,
      code: {
        language: 'java',
        filename: 'Mobil.java',
        code: `public class Mobil {
    // Attribute (data/properties)
    String merk;
    String warna;
    int kecepatan;

    // Method (behavior/fungsi)
    public void gas() {
        kecepatan += 10;
        System.out.println(merk + " mempercepat! Kecepatan: " + kecepatan + " km/jam");
    }

    public void rem() {
        kecepatan -= 5;
        if (kecepatan < 0) kecepatan = 0;
        System.out.println(merk + " mengerem! Kecepatan: " + kecepatan + " km/jam");
    }

    public void info() {
        System.out.println("Mobil " + merk + " warna " + warna);
        System.out.println("Kecepatan saat ini: " + kecepatan + " km/jam");
    }
}`,
      },
      afterCode: `
**Menggunakan Class (Membuat Object):**
      `,
      code2: {
        language: 'java',
        filename: 'Main.java',
        code: `public class Main {
    public static void main(String[] args) {
        // Membuat object dari class Mobil
        Mobil mobil1 = new Mobil();

        // Set attribute
        mobil1.merk = "Toyota Avanza";
        mobil1.warna = "Merah";
        mobil1.kecepatan = 0;

        // Panggil method
        mobil1.info();
        mobil1.gas();
        mobil1.gas();
        mobil1.rem();
        mobil1.info();

        System.out.println("\\n---\\n");

        // Buat object kedua
        Mobil mobil2 = new Mobil();
        mobil2.merk = "Honda Jazz";
        mobil2.warna = "Hitam";
        mobil2.kecepatan = 0;

        mobil2.gas();
        mobil2.info();
    }
}`,
      },
      afterCode2: `
**Output:**
\`\`\`
Mobil Toyota Avanza warna Merah
Kecepatan saat ini: 0 km/jam
Toyota Avanza mempercepat! Kecepatan: 10 km/jam
Toyota Avanza mempercepat! Kecepatan: 20 km/jam
Toyota Avanza mengerem! Kecepatan: 15 km/jam
Mobil Toyota Avanza warna Merah
Kecepatan saat ini: 15 km/jam

---

Honda Jazz mempercepat! Kecepatan: 10 km/jam
Mobil Honda Jazz warna Hitam
Kecepatan saat ini: 10 km/jam
\`\`\`

**Poin Penting:**
- Satu class bisa buat **banyak object**
- Setiap object punya data sendiri (independen)
- Method dipanggil dengan: \`namaObject.namaMethod()\`
      `,
    },
    {
      id: "constructor",
      title: "Constructor dan This",
      content: `
**Constructor** adalah method khusus yang dipanggil saat object dibuat.

**Karakteristik Constructor:**
- Nama **HARUS SAMA** dengan nama class
- **TIDAK** punya return type
- Dipanggil otomatis saat \`new ClassName()\`

**Tanpa Constructor (manual set):**
      `,
      code: {
        language: 'java',
        code: `Mobil mobil = new Mobil();
mobil.merk = "Toyota";    // Ribet!
mobil.warna = "Merah";
mobil.kecepatan = 0;`,
      },
      afterCode: `
**Dengan Constructor (clean):**
      `,
      code2: {
        language: 'java',
        filename: 'Mobil.java',
        code: `public class Mobil {
    String merk;
    String warna;
    int kecepatan;

    // Constructor tanpa parameter (default)
    public Mobil() {
        merk = "Unknown";
        warna = "White";
        kecepatan = 0;
        System.out.println("Mobil dibuat!");
    }

    // Constructor dengan parameter
    public Mobil(String merk, String warna) {
        this.merk = merk;     // 'this' = object saat ini
        this.warna = warna;
        this.kecepatan = 0;
        System.out.println("Mobil " + merk + " dibuat!");
    }

    // Constructor overloading
    public Mobil(String merk, String warna, int kecepatan) {
        this.merk = merk;
        this.warna = warna;
        this.kecepatan = kecepatan;
    }

    public void info() {
        System.out.println(merk + " (" + warna + ") - " + kecepatan + " km/jam");
    }
}`,
      },
      afterCode2: `
**Penggunaan:**
      `,
    },
    {
      id: "constructor-usage",
      title: "Menggunakan Constructor",
      content: `
**Contoh Lengkap:**
      `,
      code: {
        language: 'java',
        filename: 'Main.java',
        code: `public class Main {
    public static void main(String[] args) {
        // Pakai constructor default
        Mobil mobil1 = new Mobil();
        mobil1.info();  // Unknown (White) - 0 km/jam

        // Pakai constructor dengan 2 parameter
        Mobil mobil2 = new Mobil("Toyota", "Merah");
        mobil2.info();  // Toyota (Merah) - 0 km/jam

        // Pakai constructor dengan 3 parameter
        Mobil mobil3 = new Mobil("Honda", "Hitam", 50);
        mobil3.info();  // Honda (Hitam) - 50 km/jam
    }
}`,
      },
      afterCode: `
**Keyword \`this\`:**

\`this\` merujuk ke **object saat ini**.

**Kapan pakai \`this\`?**
Saat nama parameter sama dengan nama attribute:
      `,
      code2: {
        language: 'java',
        code: `public Mobil(String merk, String warna) {
    // TANPA this - SALAH!
    merk = merk;      // Parameter = parameter (tidak set attribute!)
    warna = warna;

    // DENGAN this - BENAR!
    this.merk = merk;      // this.merk (attribute) = merk (parameter)
    this.warna = warna;
}`,
      },
      afterCode2: `
**Best Practice:**
Selalu pakai \`this\` untuk clarity, walaupun nama beda.
      `,
    },
    {
      id: "encapsulation",
      title: "Encapsulation",
      content: `
**Encapsulation** = Pembungkusan data agar tidak bisa diakses langsung dari luar.

**Kenapa?**
- 🔒 **Data Protection** - Cegah perubahan sembarangan
- ✅ **Validation** - Kontrol input
- 🎯 **Flexibility** - Mudah ubah implementasi

**Access Modifier:**
- \`private\` - Hanya bisa diakses di class sendiri
- \`public\` - Bisa diakses dari mana saja
- \`protected\` - Bisa diakses di class sendiri & subclass
- *(default)* - Bisa diakses di package yang sama

**❌ Tanpa Encapsulation:**
      `,
      code: {
        language: 'java',
        code: `public class BankAccount {
    public double saldo;  // BAHAYA! Bisa diubah sembarangan
}

// Di main:
BankAccount akun = new BankAccount();
akun.saldo = -1000000;  // WOW! Saldo negatif! 😱`,
      },
      afterCode: `
**✅ Dengan Encapsulation:**
      `,
      code2: {
        language: 'java',
        filename: 'BankAccount.java',
        code: `public class BankAccount {
    // Attribute private - tidak bisa diakses langsung
    private String nomorRekening;
    private String pemilik;
    private double saldo;

    // Constructor
    public BankAccount(String nomor, String pemilik, double saldoAwal) {
        this.nomorRekening = nomor;
        this.pemilik = pemilik;
        this.saldo = saldoAwal;
    }

    // Getter - untuk baca data
    public String getPemilik() {
        return pemilik;
    }

    public double getSaldo() {
        return saldo;
    }

    // Setter dengan validasi
    public void setor(double jumlah) {
        if (jumlah > 0) {
            saldo += jumlah;
            System.out.println("Setor berhasil: Rp " + jumlah);
        } else {
            System.out.println("Jumlah harus positif!");
        }
    }

    public void tarik(double jumlah) {
        if (jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah;
            System.out.println("Tarik berhasil: Rp " + jumlah);
        } else if (jumlah > saldo) {
            System.out.println("Saldo tidak cukup!");
        } else {
            System.out.println("Jumlah harus positif!");
        }
    }

    public void infoRekening() {
        System.out.println("=== INFO REKENING ===");
        System.out.println("Nomor: " + nomorRekening);
        System.out.println("Pemilik: " + pemilik);
        System.out.println("Saldo: Rp " + saldo);
    }
}`,
      },
    },
    {
      id: "inheritance",
      title: "Inheritance (Pewarisan)",
      content: `
**Inheritance** = Class anak mewarisi sifat dari class parent.

**Kenapa?**
- ♻️ **Code Reuse** - Tidak perlu tulis ulang
- 🎯 **Hierarchy** - Organisasi yang jelas
- 🔧 **Maintainability** - Update di satu tempat

**Keyword: \`extends\`**

**Contoh Hirarki:**
\`\`\`
        Kendaraan (Parent/Superclass)
           /    \\
       Mobil   Motor  (Child/Subclass)
\`\`\`
      `,
      code: {
        language: 'java',
        filename: 'Kendaraan.java',
        code: `// Parent class
public class Kendaraan {
    protected String merk;
    protected int kecepatan;

    public Kendaraan(String merk) {
        this.merk = merk;
        this.kecepatan = 0;
    }

    public void gas() {
        kecepatan += 10;
        System.out.println(merk + " mempercepat! Kecepatan: " + kecepatan);
    }

    public void rem() {
        kecepatan -= 5;
        if (kecepatan < 0) kecepatan = 0;
        System.out.println(merk + " mengerem! Kecepatan: " + kecepatan);
    }

    public void info() {
        System.out.println("Kendaraan: " + merk);
        System.out.println("Kecepatan: " + kecepatan + " km/jam");
    }
}`,
      },
      afterCode: `
**Child class - Mobil:**
      `,
      code2: {
        language: 'java',
        filename: 'Mobil.java',
        code: `// Child class yang inherit dari Kendaraan
public class Mobil extends Kendaraan {
    private int jumlahPintu;

    public Mobil(String merk, int jumlahPintu) {
        super(merk);  // Panggil constructor parent
        this.jumlahPintu = jumlahPintu;
    }

    // Method tambahan khusus Mobil
    public void bukaPintu() {
        System.out.println("Membuka " + jumlahPintu + " pintu mobil");
    }

    // Override method parent
    @Override
    public void info() {
        super.info();  // Panggil method parent
        System.out.println("Jumlah pintu: " + jumlahPintu);
    }
}`,
      },
    },
    {
      id: "inheritance-example",
      title: "Contoh Lengkap Inheritance",
      content: `
Mari kita lihat contoh lengkap dengan Motor juga:
      `,
      code: {
        language: 'java',
        filename: 'Motor.java',
        code: `public class Motor extends Kendaraan {
    private String jenisMotor; // sport, bebek, matic

    public Motor(String merk, String jenis) {
        super(merk);
        this.jenisMotor = jenis;
    }

    public void wheelie() {
        if (kecepatan > 30) {
            System.out.println(merk + " melakukan wheelie! 🏍️");
        } else {
            System.out.println("Kecepatan kurang untuk wheelie!");
        }
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Jenis: " + jenisMotor);
    }
}`,
      },
      afterCode: `
**Penggunaan:**
      `,
      code2: {
        language: 'java',
        filename: 'Main.java',
        code: `public class Main {
    public static void main(String[] args) {
        // Mobil inherit semua dari Kendaraan
        Mobil mobil = new Mobil("Toyota", 4);
        mobil.gas();        // Method dari parent
        mobil.gas();
        mobil.bukaPintu();  // Method sendiri
        mobil.info();       // Override method parent

        System.out.println("\\n---\\n");

        // Motor juga inherit dari Kendaraan
        Motor motor = new Motor("Honda CBR", "Sport");
        motor.gas();
        motor.gas();
        motor.gas();
        motor.gas();
        motor.wheelie();    // Method sendiri
        motor.info();
    }
}`,
      },
      afterCode2: `
**Keyword Penting:**
- \`extends\` - Untuk inherit class
- \`super\` - Akses constructor/method parent
- \`@Override\` - Menandakan method override (best practice)
- \`protected\` - Bisa diakses child class
      `,
    },
    {
      id: "polymorphism",
      title: "Polymorphism (Polimorfisme)",
      content: `
**Polymorphism** = Satu interface, banyak bentuk.

**2 Jenis:**
1. **Compile-time** - Method overloading (sudah dipelajari)
2. **Runtime** - Method overriding (inheritance)

**Contoh Runtime Polymorphism:**
      `,
      code: {
        language: 'java',
        filename: 'Hewan.java',
        code: `// Parent class
public class Hewan {
    public void bersuara() {
        System.out.println("Hewan bersuara");
    }
}

// Child classes
public class Kucing extends Hewan {
    @Override
    public void bersuara() {
        System.out.println("Meow meow! 🐱");
    }
}

public class Anjing extends Hewan {
    @Override
    public void bersuara() {
        System.out.println("Woof woof! 🐶");
    }
}

public class Sapi extends Hewan {
    @Override
    public void bersuara() {
        System.out.println("Moo moo! 🐮");
    }
}`,
      },
      afterCode: `
**Magic of Polymorphism:**
      `,
      code2: {
        language: 'java',
        filename: 'Main.java',
        code: `public class Main {
    public static void main(String[] args) {
        // Polymorphism - parent reference, child object
        Hewan hewan1 = new Kucing();
        Hewan hewan2 = new Anjing();
        Hewan hewan3 = new Sapi();

        // Panggil method yang sama, hasil berbeda!
        hewan1.bersuara();  // Meow meow!
        hewan2.bersuara();  // Woof woof!
        hewan3.bersuara();  // Moo moo!

        System.out.println("\\n--- Array Polymorphism ---");

        // Array of parent type
        Hewan[] kandang = {
            new Kucing(),
            new Anjing(),
            new Sapi(),
            new Kucing()
        };

        // Loop - otomatis panggil method yang sesuai!
        for (Hewan h : kandang) {
            h.bersuara();
        }
    }
}`,
      },
      afterCode2: `
**Output:**
\`\`\`
Meow meow! 🐱
Woof woof! 🐶
Moo moo! 🐮

--- Array Polymorphism ---
Meow meow! 🐱
Woof woof! 🐶
Moo moo! 🐮
Meow meow! 🐱
\`\`\`

**Manfaat:**
- Flexible code
- Easy to extend (tambah class baru tanpa ubah code lama)
- Clean & maintainable
      `,
    },
    {
      id: "abstract",
      title: "Abstract Class & Interface",
      content: `
**Abstract Class** = Class yang tidak bisa di-instantiate (buat object), hanya untuk diwariskan.

**Kapan pakai Abstract?**
Saat Anda punya base class yang tidak masuk akal dibuat objectnya.

Contoh: Class \`Hewan\` - tidak ada "hewan" generic di dunia nyata, yang ada kucing, anjing, dll.
      `,
      code: {
        language: 'java',
        filename: 'BentukGeometri.java',
        code: `// Abstract class
public abstract class BentukGeometri {
    protected String nama;

    public BentukGeometri(String nama) {
        this.nama = nama;
    }

    // Abstract method - harus diimplementasi di child
    public abstract double hitungLuas();
    public abstract double hitungKeliling();

    // Concrete method - bisa langsung dipakai
    public void info() {
        System.out.println("Bentuk: " + nama);
        System.out.println("Luas: " + hitungLuas());
        System.out.println("Keliling: " + hitungKeliling());
    }
}

// Child class - HARUS implement abstract methods
public class Persegi extends BentukGeometri {
    private double sisi;

    public Persegi(double sisi) {
        super("Persegi");
        this.sisi = sisi;
    }

    @Override
    public double hitungLuas() {
        return sisi * sisi;
    }

    @Override
    public double hitungKeliling() {
        return 4 * sisi;
    }
}

public class Lingkaran extends BentukGeometri {
    private double radius;

    public Lingkaran(double radius) {
        super("Lingkaran");
        this.radius = radius;
    }

    @Override
    public double hitungLuas() {
        return 3.14 * radius * radius;
    }

    @Override
    public double hitungKeliling() {
        return 2 * 3.14 * radius;
    }
}`,
      },
      afterCode: `
**Interface** = Kontrak yang harus diikuti oleh class.

**Perbedaan Abstract Class vs Interface:**

| Abstract Class | Interface |
|----------------|-----------|
| Bisa punya concrete method | Semua method abstract (Java < 8) |
| Bisa punya attribute | Hanya konstanta |
| Single inheritance | Multiple implementation |
| Keyword: \`extends\` | Keyword: \`implements\` |
      `,
      code2: {
        language: 'java',
        code: `// Interface
public interface Terbang {
    void terbang();
    void mendarat();
}

public interface Berenang {
    void berenang();
}

// Class bisa implement multiple interfaces
public class Bebek implements Terbang, Berenang {
    @Override
    public void terbang() {
        System.out.println("Bebek terbang rendah");
    }

    @Override
    public void mendarat() {
        System.out.println("Bebek mendarat di air");
    }

    @Override
    public void berenang() {
        System.out.println("Bebek berenang di kolam");
    }
}`,
      },
    },
    {
      id: "summary",
      title: "Ringkasan Modul 4",
      content: `
WOW! Anda sudah menguasai OOP - konsep paling penting di Java! 🎉🎉🎉

**Yang Sudah Dipelajari:**
✅ Konsep OOP dan manfaatnya
✅ Class dan Object
✅ Constructor dan keyword \`this\`
✅ Encapsulation (private, public, getter/setter)
✅ Inheritance (\`extends\`, \`super\`)
✅ Polymorphism (method overriding)
✅ Abstract class dan Interface

**4 Pilar OOP:**
1. **Encapsulation** ✅ - Lindungi data dengan private + getter/setter
2. **Inheritance** ✅ - Wariskan sifat dengan \`extends\`
3. **Polymorphism** ✅ - Satu method, banyak bentuk
4. **Abstraction** ✅ - Abstract class & Interface

**Konsep Penting:**
- Class = blueprint, Object = instance
- Constructor dipanggil saat \`new\`
- \`this\` = object saat ini, \`super\` = parent class
- Encapsulation = data hiding untuk protection
- Inheritance = code reuse dan hierarchy
- Polymorphism = flexibility
- Abstract = tidak bisa instantiate
- Interface = kontrak/aturan

**Next: Modul 5 - GUI dengan NetBeans**
Sekarang kita akan mulai bagian SERU - membuat aplikasi dengan GUI!
- Drag & drop komponen
- Button, TextField, Table
- Event handling
- Layout Manager

Anda sudah punya fondasi OOP yang kuat. GUI akan jadi mudah! 🎨

**Tips:**
- Praktik buat class untuk objek di sekitar Anda
- Pikirkan hirarki: apa parent, apa child
- Gunakan encapsulation SELALU untuk data sensitif
- Interface untuk contract, Abstract untuk shared code

Lanjut ke GUI? Ini akan SANGAT FUN! 🚀
      `,
    },
  ],
};
