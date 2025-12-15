export const module9Content = {
  sections: [
    {
      id: 'what-are-exceptions',
      title: 'Apa itu Exception?',
      content: `Exception adalah kejadian abnormal atau error yang terjadi saat program berjalan. Exception mengganggu alur normal program dan jika tidak ditangani dengan baik, dapat menyebabkan program crash.

Bayangkan Anda membuat aplikasi kasir. Jika user memasukkan huruf saat diminta input angka, program bisa crash. Exception handling membantu kita menangani situasi seperti ini dengan elegan.

**Mengapa Exception Handling Penting?**

1. **Mencegah Program Crash** - Program tetap berjalan meski ada error
2. **User Experience Lebih Baik** - Menampilkan pesan error yang informatif
3. **Debugging Lebih Mudah** - Kita tahu persis di mana dan kenapa error terjadi
4. **Aplikasi Lebih Robust** - Siap menghadapi situasi yang tidak terduga

**Hirarki Exception di Java:**

- Throwable (parent dari semua exception)
  - Error (serious problems, biasanya tidak kita handle)
  - Exception
    - RuntimeException (unchecked exceptions)
      - NullPointerException
      - NumberFormatException
      - ArrayIndexOutOfBoundsException
    - IOException (checked exceptions)
    - SQLException
    - FileNotFoundException`,
      code: {
        language: 'java',
        filename: 'ExceptionExample.java',
        content: `// Contoh program TANPA exception handling - BAHAYA!
public class TanpaExceptionHandling {
    public static void main(String[] args) {
        String input = "abc"; // Seharusnya angka

        // Program akan CRASH di baris ini!
        int angka = Integer.parseInt(input);

        // Baris ini tidak akan pernah dieksekusi
        System.out.println("Angka: " + angka);
    }
}

// Output:
// Exception in thread "main" java.lang.NumberFormatException: For input string: "abc"
//     at java.lang.Integer.parseInt(Integer.java:...)
// Program BERHENTI!`
      }
    },
    {
      id: 'try-catch-basic',
      title: 'Try-Catch: Menangkap Exception',
      content: `Try-catch adalah mekanisme dasar untuk menangani exception. Kita "mencoba" (try) menjalankan kode yang berpotensi error, dan "menangkap" (catch) exception jika terjadi.

**Sintaks Dasar:**

try {
    // Kode yang berpotensi error
} catch (TipeException e) {
    // Kode yang dijalankan jika exception terjadi
}

Dengan try-catch, program tidak akan crash. Exception akan ditangkap dan program bisa melanjutkan eksekusi.`,
      code: {
        language: 'java',
        filename: 'TryCatchExample.java',
        content: `public class TryCatchExample {
    public static void main(String[] args) {
        String input = "abc"; // Input yang salah

        try {
            // Kode yang berpotensi error
            int angka = Integer.parseInt(input);
            System.out.println("Angka: " + angka);

        } catch (NumberFormatException e) {
            // Kode ini dijalankan jika terjadi NumberFormatException
            System.out.println("Error: Input bukan angka yang valid!");
            System.out.println("Silakan masukkan angka.");
        }

        // Program TETAP BERJALAN sampai sini
        System.out.println("Program selesai dengan baik.");
    }
}

// Output:
// Error: Input bukan angka yang valid!
// Silakan masukkan angka.
// Program selesai dengan baik.`
      },
      afterCode: `<p><strong>Penjelasan:</strong></p>
<ul>
<li>Program mencoba parse "abc" menjadi integer</li>
<li>Karena "abc" bukan angka, terjadi NumberFormatException</li>
<li>Exception ditangkap oleh catch block</li>
<li>Pesan error ditampilkan ke user</li>
<li>Program melanjutkan eksekusi (tidak crash!)</li>
</ul>`
    },
    {
      id: 'multiple-catch',
      title: 'Multiple Catch Blocks',
      content: `Satu try block bisa memiliki beberapa catch block untuk menangani berbagai tipe exception yang berbeda. Ini sangat berguna karena kode yang sama bisa menghasilkan berbagai jenis exception.

**Aturan Multiple Catch:**

1. Catch yang lebih spesifik harus di atas
2. Catch yang lebih general harus di bawah
3. Hanya satu catch block yang akan dieksekusi`,
      code: {
        language: 'java',
        filename: 'MultipleCatchExample.java',
        content: `import javax.swing.*;

public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            // Minta input dari user
            String input = JOptionPane.showInputDialog("Masukkan angka:");

            // Bisa terjadi NumberFormatException
            int angka = Integer.parseInt(input);

            // Bisa terjadi ArithmeticException (pembagian dengan 0)
            int hasil = 100 / angka;

            System.out.println("Hasil: " + hasil);

        } catch (NumberFormatException e) {
            // Menangani input yang bukan angka
            JOptionPane.showMessageDialog(null,
                "Input harus berupa angka!",
                "Error",
                JOptionPane.ERROR_MESSAGE);

        } catch (ArithmeticException e) {
            // Menangani pembagian dengan 0
            JOptionPane.showMessageDialog(null,
                "Tidak bisa membagi dengan 0!",
                "Error",
                JOptionPane.ERROR_MESSAGE);

        } catch (NullPointerException e) {
            // User menekan Cancel
            System.out.println("Input dibatalkan oleh user");

        } catch (Exception e) {
            // Menangani semua exception lainnya (safety net)
            JOptionPane.showMessageDialog(null,
                "Terjadi error: " + e.getMessage(),
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }

        System.out.println("Program selesai.");
    }
}`
      },
      afterCode: `<p><strong>Test Cases:</strong></p>
<ul>
<li><strong>Input "50"</strong> → Output: "Hasil: 2" ✅</li>
<li><strong>Input "abc"</strong> → Error: "Input harus berupa angka!" ⚠️</li>
<li><strong>Input "0"</strong> → Error: "Tidak bisa membagi dengan 0!" ⚠️</li>
<li><strong>Tekan Cancel</strong> → Output: "Input dibatalkan oleh user" ℹ️</li>
</ul>`
    },
    {
      id: 'finally-block',
      title: 'Finally Block: Kode yang Selalu Dijalankan',
      content: `Finally block adalah blok kode yang SELALU dijalankan, baik exception terjadi atau tidak. Ini sangat berguna untuk cleanup operations seperti menutup file, database connection, atau resource lainnya.

**Karakteristik Finally:**

1. Selalu dieksekusi, exception terjadi atau tidak
2. Dieksekusi bahkan jika ada return di try/catch
3. Ideal untuk cleanup dan release resources
4. Optional (boleh ada, boleh tidak)`,
      code: {
        language: 'java',
        filename: 'FinallyExample.java',
        content: `import java.sql.*;

public class FinallyExample {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
            // Koneksi ke database
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/toko_db",
                "root",
                ""
            );

            stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM produk");

            while (rs.next()) {
                System.out.println(rs.getString("nama_produk"));
            }

        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());

        } finally {
            // SELALU dijalankan untuk cleanup
            try {
                if (stmt != null) {
                    stmt.close();
                    System.out.println("Statement ditutup");
                }
                if (conn != null) {
                    conn.close();
                    System.out.println("Koneksi database ditutup");
                }
            } catch (SQLException e) {
                System.out.println("Error saat menutup koneksi: " + e.getMessage());
            }
        }

        System.out.println("Program selesai");
    }
}

// Output (jika berhasil):
// Laptop Asus
// Mouse Logitech
// Keyboard Mechanical
// Statement ditutup
// Koneksi database ditutup
// Program selesai

// Output (jika error):
// Database error: Connection refused
// Statement ditutup  (tetap dijalankan!)
// Koneksi database ditutup  (tetap dijalankan!)
// Program selesai`
      },
      afterCode: `<p><strong>Mengapa Finally Penting?</strong></p>
<ul>
<li><strong>Memory Leaks Prevention</strong> - Resource yang tidak ditutup akan makan memori</li>
<li><strong>Database Connection Limit</strong> - Koneksi yang tidak ditutup bisa habiskan slot koneksi</li>
<li><strong>File Locks</strong> - File yang tidak ditutup bisa terkunci dan tidak bisa diakses aplikasi lain</li>
</ul>

<p><strong>Try-with-resources (Java 7+):</strong><br>
Cara modern untuk auto-close resources tanpa perlu finally block manual.</p>`
    },
    {
      id: 'common-exceptions',
      title: 'Exception-Exception yang Sering Terjadi',
      content: `Berikut adalah exception yang paling sering ditemui saat membuat aplikasi Java Desktop, beserta penyebab dan cara mengatasinya.`,
      code: {
        language: 'java',
        filename: 'CommonExceptions.java',
        content: `import javax.swing.*;
import java.io.*;
import java.sql.*;

public class CommonExceptions {

    // 1. NullPointerException - Exception paling umum!
    public static void contohNullPointer() {
        String nama = null;

        try {
            // CRASH! Tidak bisa panggil method pada object null
            int panjang = nama.length();

        } catch (NullPointerException e) {
            System.out.println("Error: Object adalah null!");
            // Solusi: selalu cek null sebelum akses
            if (nama != null) {
                System.out.println("Panjang: " + nama.length());
            }
        }
    }

    // 2. NumberFormatException - Saat parsing String ke angka
    public static void contohNumberFormat() {
        JTextField txtHarga = new JTextField();
        txtHarga.setText("12.500"); // Format Indonesia

        try {
            // Error! Titik bukan separator yang valid
            int harga = Integer.parseInt(txtHarga.getText());

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null,
                "Format harga salah! Gunakan angka tanpa titik/koma.",
                "Error Input",
                JOptionPane.ERROR_MESSAGE);

            // Solusi: clean input dulu
            String cleanInput = txtHarga.getText().replace(".", "");
            int harga = Integer.parseInt(cleanInput);
            System.out.println("Harga: " + harga);
        }
    }

    // 3. ArrayIndexOutOfBoundsException
    public static void contohArrayIndex() {
        String[] produk = {"Laptop", "Mouse", "Keyboard"};

        try {
            // Index 5 tidak ada! Array hanya punya index 0-2
            System.out.println(produk[5]);

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index array melebihi batas!");
            System.out.println("Array hanya punya " + produk.length + " elemen");
        }
    }

    // 4. SQLException - Saat operasi database
    public static void contohSQL() {
        try {
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/database_salah", // Database tidak ada
                "root",
                ""
            );

        } catch (SQLException e) {
            System.out.println("Database Error:");
            System.out.println("Kode Error: " + e.getErrorCode());
            System.out.println("Pesan: " + e.getMessage());

            // Solusi: cek koneksi database
            JOptionPane.showMessageDialog(null,
                "Tidak dapat terhubung ke database!\n" +
                "Pastikan MySQL sudah berjalan dan database sudah dibuat.",
                "Database Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    // 5. FileNotFoundException - File tidak ditemukan
    public static void contohFileNotFound() {
        try {
            // File tidak ada
            FileReader file = new FileReader("data_tidak_ada.txt");

        } catch (FileNotFoundException e) {
            System.out.println("File tidak ditemukan!");

            // Solusi: buat file baru atau gunakan JFileChooser
            JFileChooser chooser = new JFileChooser();
            int result = chooser.showOpenDialog(null);

            if (result == JFileChooser.APPROVE_OPTION) {
                File selectedFile = chooser.getSelectedFile();
                System.out.println("File dipilih: " + selectedFile.getName());
            }
        }
    }

    // 6. ClassCastException - Casting yang salah
    public static void contohClassCast() {
        Object obj = "Ini String";

        try {
            // Error! String tidak bisa di-cast ke Integer
            Integer angka = (Integer) obj;

        } catch (ClassCastException e) {
            System.out.println("Error: Tipe data tidak compatible untuk casting!");

            // Solusi: gunakan instanceof untuk cek tipe
            if (obj instanceof Integer) {
                Integer angka = (Integer) obj;
            } else {
                System.out.println("Object bukan Integer, tapi " + obj.getClass().getSimpleName());
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Testing Common Exceptions ===\n");

        contohNullPointer();
        System.out.println();

        contohNumberFormat();
        System.out.println();

        contohArrayIndex();
        System.out.println();

        contohSQL();
        System.out.println();

        contohFileNotFound();
        System.out.println();

        contohClassCast();
    }
}`
      },
      afterCode: `<p><strong>Tips Mencegah Exception:</strong></p>
<ul>
<li><strong>NullPointerException</strong>: Selalu cek null sebelum akses object</li>
<li><strong>NumberFormatException</strong>: Validasi input sebelum parsing</li>
<li><strong>ArrayIndexOutOfBoundsException</strong>: Cek panjang array sebelum akses</li>
<li><strong>SQLException</strong>: Test koneksi database di awal aplikasi</li>
<li><strong>FileNotFoundException</strong>: Cek file exists sebelum buka</li>
</ul>`
    },
    {
      id: 'custom-exceptions',
      title: 'Membuat Custom Exception',
      content: `Kadang exception bawaan Java tidak cukup spesifik untuk kebutuhan aplikasi kita. Kita bisa membuat custom exception untuk membuat kode lebih readable dan maintainable.

**Kapan Membuat Custom Exception?**

1. Business logic yang spesifik (contoh: SaldoTidakCukupException)
2. Validasi yang kompleks (contoh: EmailTidakValidException)
3. Domain-specific errors (contoh: ProdukHabisException)

Custom exception membuat kode lebih self-documenting dan mudah dipahami.`,
      code: {
        language: 'java',
        filename: 'CustomExceptionExample.java',
        content: `// 1. Buat Custom Exception Class
class SaldoTidakCukupException extends Exception {
    private double saldoSekarang;
    private double jumlahPenarikan;

    public SaldoTidakCukupException(double saldoSekarang, double jumlahPenarikan) {
        super("Saldo tidak cukup! Saldo: " + saldoSekarang + ", Penarikan: " + jumlahPenarikan);
        this.saldoSekarang = saldoSekarang;
        this.jumlahPenarikan = jumlahPenarikan;
    }

    public double getKekurangan() {
        return jumlahPenarikan - saldoSekarang;
    }
}

class ProdukHabisException extends Exception {
    private String namaProduk;

    public ProdukHabisException(String namaProduk) {
        super("Produk '" + namaProduk + "' sudah habis!");
        this.namaProduk = namaProduk;
    }

    public String getNamaProduk() {
        return namaProduk;
    }
}

// 2. Gunakan Custom Exception
class RekeningBank {
    private String noRekening;
    private double saldo;

    public RekeningBank(String noRekening, double saldoAwal) {
        this.noRekening = noRekening;
        this.saldo = saldoAwal;
    }

    public void tarikTunai(double jumlah) throws SaldoTidakCukupException {
        if (jumlah > saldo) {
            // Throw custom exception
            throw new SaldoTidakCukupException(saldo, jumlah);
        }

        saldo -= jumlah;
        System.out.println("Penarikan berhasil!");
        System.out.println("Saldo sekarang: Rp " + saldo);
    }

    public double getSaldo() {
        return saldo;
    }
}

class Toko {
    public void jualProduk(String namaProduk, int stok) throws ProdukHabisException {
        if (stok <= 0) {
            throw new ProdukHabisException(namaProduk);
        }

        System.out.println("Produk " + namaProduk + " berhasil dijual!");
    }
}

// 3. Main Class - Test Custom Exception
public class CustomExceptionExample {
    public static void main(String[] args) {
        // Test 1: Saldo Tidak Cukup
        RekeningBank rekening = new RekeningBank("001234", 500000);

        try {
            System.out.println("Saldo awal: Rp " + rekening.getSaldo());
            rekening.tarikTunai(750000); // Lebih dari saldo!

        } catch (SaldoTidakCukupException e) {
            System.out.println("ERROR: " + e.getMessage());
            System.out.println("Kekurangan: Rp " + e.getKekurangan());
            System.out.println("Silakan isi saldo terlebih dahulu.");
        }

        System.out.println("\n" + "=".repeat(50) + "\n");

        // Test 2: Produk Habis
        Toko toko = new Toko();

        try {
            toko.jualProduk("Laptop Gaming", 0); // Stok habis!

        } catch (ProdukHabisException e) {
            System.out.println("ERROR: " + e.getMessage());
            System.out.println("Produk: " + e.getNamaProduk());
            System.out.println("Silakan restok produk.");
        }
    }
}

// Output:
// Saldo awal: Rp 500000.0
// ERROR: Saldo tidak cukup! Saldo: 500000.0, Penarikan: 750000.0
// Kekurangan: Rp 250000.0
// Silakan isi saldo terlebih dahulu.
//
// ==================================================
//
// ERROR: Produk 'Laptop Gaming' sudah habis!
// Produk: Laptop Gaming
// Silakan restok produk.`
      },
      afterCode: `<p><strong>Keuntungan Custom Exception:</strong></p>
<ul>
<li><strong>Lebih Spesifik</strong>: Error message lebih jelas dan kontekstual</li>
<li><strong>Data Tambahan</strong>: Bisa menyimpan informasi tambahan (saldo, kekurangan, dll)</li>
<li><strong>Type Safety</strong>: Bisa catch exception yang spesifik</li>
<li><strong>Self-Documenting</strong>: Nama exception sudah menjelaskan masalahnya</li>
</ul>

<p><strong>Best Practice:</strong></p>
<ul>
<li>Extend <code>Exception</code> untuk checked exception (harus di-handle)</li>
<li>Extend <code>RuntimeException</code> untuk unchecked exception (optional handle)</li>
<li>Berikan constructor yang informatif</li>
<li>Tambahkan getter untuk data tambahan yang relevan</li>
</ul>`
    },
    {
      id: 'debugging-netbeans',
      title: 'Debugging dengan NetBeans',
      content: `Debugging adalah proses mencari dan memperbaiki bug dalam program. NetBeans memiliki tools debugging yang sangat powerful untuk membantu kita menemukan masalah dengan cepat.

**Tools Debugging di NetBeans:**

1. **Breakpoints** - Titik stop untuk examine program state
2. **Step Over (F8)** - Jalankan satu baris kode
3. **Step Into (F7)** - Masuk ke dalam method
4. **Step Out (Ctrl+F7)** - Keluar dari method
5. **Continue (F5)** - Lanjut ke breakpoint berikutnya
6. **Variables Window** - Lihat nilai semua variabel
7. **Call Stack** - Lihat urutan method yang dipanggil

**Cara Menggunakan Debugger:**

1. Klik di sebelah kiri nomor baris untuk set breakpoint (muncul tanda merah)
2. Klik tombol "Debug Project" (Ctrl+F5) atau Debug > Debug Main Project
3. Program akan berhenti di breakpoint
4. Gunakan F8 untuk step over, F7 untuk step into
5. Lihat Variables window untuk melihat nilai variabel
6. Gunakan F5 untuk melanjutkan eksekusi`,
      code: {
        language: 'java',
        filename: 'DebuggingExample.java',
        content: `public class DebuggingExample {

    public static int hitungTotal(int[] angka) {
        int total = 0;

        // Set BREAKPOINT di baris ini (klik di sebelah kiri nomor baris)
        for (int i = 0; i < angka.length; i++) {
            total += angka[i];
            // Saat debug, lihat nilai total di Variables window
            System.out.println("Iterasi " + i + ", total sekarang: " + total);
        }

        return total;
    }

    public static double hitungRataRata(int[] angka) {
        // Set BREAKPOINT di sini
        int total = hitungTotal(angka);

        // POTENTIAL BUG: Pembagian dengan 0!
        // Saat debug, cek nilai angka.length
        double rataRata = (double) total / angka.length;

        return rataRata;
    }

    public static void main(String[] args) {
        int[] nilaiUjian = {80, 75, 90, 85, 70};

        // Set BREAKPOINT di baris ini
        System.out.println("=== Debugging Example ===");

        // Step Into (F7) untuk masuk ke method hitungRataRata
        double rata = hitungRataRata(nilaiUjian);

        System.out.println("Rata-rata: " + rata);

        // Test dengan array kosong - akan error!
        int[] arrayKosong = {};

        try {
            // Set BREAKPOINT di sini untuk debug error
            double rataKosong = hitungRataRata(arrayKosong);
            System.out.println("Rata-rata array kosong: " + rataKosong);

        } catch (ArithmeticException e) {
            System.out.println("Error: Tidak bisa hitung rata-rata array kosong!");
        }
    }
}

/* LANGKAH-LANGKAH DEBUGGING:

1. Set breakpoint di baris 10 (for loop)
2. Klik Debug Project (Ctrl+F5)
3. Program akan stop di breakpoint
4. Lihat Variables window:
   - angka = {80, 75, 90, 85, 70}
   - total = 0
   - i = 0

5. Tekan F8 (Step Over) untuk jalankan satu baris
   - total sekarang = 80
   - i sekarang = 1

6. Tekan F8 lagi untuk iterasi berikutnya
   - Amati bagaimana total bertambah

7. Tekan F5 (Continue) untuk lanjut sampai breakpoint berikutnya

8. Di method hitungRataRata, cek nilai:
   - total = 400
   - angka.length = 5
   - rataRata akan = 80.0

9. Untuk debug error array kosong:
   - Set breakpoint di baris 39
   - Lihat angka.length = 0
   - Step Into ke hitungRataRata
   - Lihat pembagian dengan 0!
*/`
      },
      afterCode: `<p><strong>Tips Debugging Efektif:</strong></p>
<ol>
<li><strong>Gunakan Conditional Breakpoints</strong>: Klik kanan breakpoint → Properties → masukkan kondisi (contoh: i > 100)</li>
<li><strong>Watch Variables</strong>: Debug → New Watch → masukkan expression untuk monitor nilai spesifik</li>
<li><strong>Evaluate Expression</strong>: Saat debug, klik kanan → Evaluate Expression untuk test kode</li>
<li><strong>Step Over vs Step Into</strong>: Step Over (F8) untuk skip method detail, Step Into (F7) untuk masuk ke method</li>
<li><strong>Call Stack</strong>: Lihat window Call Stack untuk tahu urutan method yang dipanggil sampai titik sekarang</li>
</ol>

<p><strong>Shortcut Penting:</strong></p>
<ul>
<li><strong>Ctrl+F8</strong>: Toggle breakpoint</li>
<li><strong>Ctrl+F5</strong>: Debug project</li>
<li><strong>F7</strong>: Step into</li>
<li><strong>F8</strong>: Step over</li>
<li><strong>Ctrl+F7</strong>: Step out</li>
<li><strong>F5</strong>: Continue</li>
<li><strong>Shift+F5</strong>: Stop debugging</li>
</ul>`
    },
    {
      id: 'logging',
      title: 'Logging untuk Production',
      content: `Logging adalah proses mencatat aktivitas dan error dalam aplikasi. Berbeda dengan System.out.println() yang hanya untuk development, logging didesain untuk production dan memiliki level severity.

**Mengapa Perlu Logging?**

1. **Debugging Production Issues** - Bisa track error di aplikasi yang sudah di-deploy
2. **Audit Trail** - Rekam siapa melakukan apa dan kapan
3. **Performance Monitoring** - Track berapa lama operasi tertentu
4. **Security** - Detect aktivitas mencurigakan

**Log Levels (dari rendah ke tinggi):**

- **FINEST/TRACE**: Informasi sangat detail (jarang dipakai)
- **FINE/DEBUG**: Informasi untuk debugging
- **INFO**: Informasi umum (aplikasi started, user login, dll)
- **WARNING**: Situasi yang tidak normal tapi tidak fatal
- **SEVERE/ERROR**: Error yang perlu perhatian segera`,
      code: {
        language: 'java',
        filename: 'LoggingExample.java',
        content: `import java.util.logging.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LoggingExample {

    // Create Logger
    private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());

    // Setup Logger di awal aplikasi
    public static void setupLogger() {
        try {
            // Buat folder logs jika belum ada
            File logDir = new File("logs");
            if (!logDir.exists()) {
                logDir.mkdir();
            }

            // File handler - simpan log ke file
            String timestamp = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
            FileHandler fileHandler = new FileHandler("logs/app_" + timestamp + ".log", true);

            // Format log yang bagus
            fileHandler.setFormatter(new SimpleFormatter() {
                @Override
                public String format(LogRecord record) {
                    return String.format(
                        "[%s] [%s] %s - %s%n",
                        new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(record.getMillis())),
                        record.getLevel(),
                        record.getSourceClassName(),
                        record.getMessage()
                    );
                }
            });

            // Add handler ke logger
            logger.addHandler(fileHandler);

            // Set level minimum yang di-log
            logger.setLevel(Level.ALL);

            // Disable output ke console (optional)
            logger.setUseParentHandlers(false);

            logger.info("Logger initialized successfully");

        } catch (IOException e) {
            System.err.println("Error setup logger: " + e.getMessage());
        }
    }

    // Contoh penggunaan di method login
    public static boolean login(String username, String password) {
        logger.info("Login attempt for user: " + username);

        try {
            // Simulasi validasi
            if (username == null || username.isEmpty()) {
                logger.warning("Login failed: Username is empty");
                return false;
            }

            if (password == null || password.length() < 6) {
                logger.warning("Login failed: Password too short for user " + username);
                return false;
            }

            // Simulasi login berhasil
            if (username.equals("admin") && password.equals("admin123")) {
                logger.info("Login successful for user: " + username);
                return true;
            }

            logger.warning("Login failed: Invalid credentials for user " + username);
            return false;

        } catch (Exception e) {
            logger.severe("Login error: " + e.getMessage());
            return false;
        }
    }

    // Contoh penggunaan di method CRUD
    public static void tambahProduk(String nama, double harga) {
        logger.info("Adding new product: " + nama + ", price: " + harga);

        try {
            // Validasi
            if (harga < 0) {
                logger.warning("Invalid price for product " + nama + ": " + harga);
                throw new IllegalArgumentException("Harga tidak boleh negatif");
            }

            // Simulasi insert ke database
            Thread.sleep(100); // Simulasi delay

            logger.info("Product added successfully: " + nama);

        } catch (IllegalArgumentException e) {
            logger.severe("Validation error: " + e.getMessage());
            throw e;

        } catch (Exception e) {
            logger.severe("Error adding product: " + e.getMessage());
            logger.severe("Stack trace: " + getStackTrace(e));
        }
    }

    // Helper method untuk get stack trace sebagai string
    private static String getStackTrace(Exception e) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        return sw.toString();
    }

    public static void main(String[] args) {
        // Setup logger di awal aplikasi
        setupLogger();

        logger.info("=== Application Started ===");

        // Test logging di berbagai scenario
        login("admin", "admin123");
        login("user", "123"); // Password terlalu pendek
        login("", "password"); // Username kosong

        System.out.println();

        tambahProduk("Laptop", 5000000);

        try {
            tambahProduk("Mouse", -50000); // Harga negatif
        } catch (IllegalArgumentException e) {
            // Error sudah di-log
        }

        logger.info("=== Application Finished ===");

        System.out.println("\nCek file logs/app_" +
            new SimpleDateFormat("yyyy-MM-dd").format(new Date()) +
            ".log untuk melihat semua log!");
    }
}

/* ISI FILE LOG (logs/app_2025-01-15.log):

[2025-01-15 10:30:15] [INFO] LoggingExample - Logger initialized successfully
[2025-01-15 10:30:15] [INFO] LoggingExample - === Application Started ===
[2025-01-15 10:30:15] [INFO] LoggingExample - Login attempt for user: admin
[2025-01-15 10:30:15] [INFO] LoggingExample - Login successful for user: admin
[2025-01-15 10:30:15] [INFO] LoggingExample - Login attempt for user: user
[2025-01-15 10:30:15] [WARNING] LoggingExample - Login failed: Password too short for user user
[2025-01-15 10:30:15] [INFO] LoggingExample - Login attempt for user:
[2025-01-15 10:30:15] [WARNING] LoggingExample - Login failed: Username is empty
[2025-01-15 10:30:15] [INFO] LoggingExample - Adding new product: Laptop, price: 5000000.0
[2025-01-15 10:30:15] [INFO] LoggingExample - Product added successfully: Laptop
[2025-01-15 10:30:15] [INFO] LoggingExample - Adding new product: Mouse, price: -50000.0
[2025-01-15 10:30:15] [WARNING] LoggingExample - Invalid price for product Mouse: -50000.0
[2025-01-15 10:30:15] [SEVERE] LoggingExample - Validation error: Harga tidak boleh negatif
[2025-01-15 10:30:15] [INFO] LoggingExample - === Application Finished ===

*/`
      },
      afterCode: `<p><strong>Best Practices Logging:</strong></p>
<ul>
<li><strong>Jangan Log Sensitive Data</strong>: Password, credit card, data pribadi JANGAN di-log!</li>
<li><strong>Gunakan Level yang Tepat</strong>: INFO untuk normal flow, WARNING untuk anomali, SEVERE untuk error</li>
<li><strong>Log dengan Context</strong>: Sertakan informasi yang membantu debug (username, product ID, dll)</li>
<li><strong>Rotate Log Files</strong>: Gunakan RotatingFileHandler agar file log tidak membesar tanpa batas</li>
<li><strong>Performance</strong>: Jangan log di loop yang ketat, bisa slow down aplikasi</li>
</ul>

<p><strong>Alternatif Logging Framework:</strong></p>
<ul>
<li><strong>Log4j 2</strong>: Lebih powerful dan configurable</li>
<li><strong>SLF4J + Logback</strong>: Modern, fast, dan flexible</li>
<li><strong>java.util.logging</strong>: Built-in, simple, good untuk project kecil</li>
</ul>`
    },
    {
      id: 'exception-best-practices',
      title: 'Best Practices Exception Handling',
      content: `Berikut adalah best practices untuk exception handling yang akan membuat aplikasi Anda lebih robust, maintainable, dan professional.`,
      code: {
        language: 'java',
        filename: 'BestPractices.java',
        content: `import javax.swing.*;
import java.sql.*;
import java.util.logging.*;

public class BestPractices {

    private static final Logger logger = Logger.getLogger(BestPractices.class.getName());

    // ❌ BAD: Catch exception tapi tidak berbuat apa-apa (Silent Failure)
    public static void badExample1() {
        try {
            int hasil = 10 / 0;
        } catch (ArithmeticException e) {
            // Kosong! Bug akan tersembunyi!
        }
    }

    // ✅ GOOD: Always handle or log exception
    public static void goodExample1() {
        try {
            int hasil = 10 / 0;
        } catch (ArithmeticException e) {
            logger.severe("Division by zero error: " + e.getMessage());
            JOptionPane.showMessageDialog(null,
                "Terjadi kesalahan perhitungan!",
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    // ❌ BAD: Catch Exception yang terlalu general
    public static void badExample2(String input) {
        try {
            int angka = Integer.parseInt(input);
            int hasil = 100 / angka;
            System.out.println("Hasil: " + hasil);
        } catch (Exception e) {
            // Terlalu general! Tidak tahu error apa yang terjadi
            System.out.println("Error!");
        }
    }

    // ✅ GOOD: Catch exception yang spesifik
    public static void goodExample2(String input) {
        try {
            int angka = Integer.parseInt(input);
            int hasil = 100 / angka;
            System.out.println("Hasil: " + hasil);

        } catch (NumberFormatException e) {
            logger.warning("Invalid input format: " + input);
            JOptionPane.showMessageDialog(null, "Input harus berupa angka!");

        } catch (ArithmeticException e) {
            logger.warning("Division by zero attempted");
            JOptionPane.showMessageDialog(null, "Tidak bisa membagi dengan 0!");
        }
    }

    // ❌ BAD: Throw Exception di dalam catch
    public static void badExample3() {
        try {
            // Some operation
        } catch (Exception e) {
            throw new RuntimeException(); // Informasi error hilang!
        }
    }

    // ✅ GOOD: Re-throw dengan cause
    public static void goodExample3() {
        try {
            // Some operation
        } catch (SQLException e) {
            // Preserve original exception sebagai cause
            throw new RuntimeException("Database operation failed", e);
        }
    }

    // ❌ BAD: Return di finally (berbahaya!)
    public static int badExample4() {
        try {
            return 10;
        } finally {
            return 20; // Ini yang akan di-return, sangat membingungkan!
        }
    }

    // ✅ GOOD: Jangan return di finally
    public static int goodExample4() {
        int result = 0;
        try {
            result = 10;
        } finally {
            // Cleanup saja, jangan return
            System.out.println("Cleanup done");
        }
        return result;
    }

    // ❌ BAD: Nested try-catch yang kompleks
    public static void badExample5() {
        try {
            try {
                try {
                    // Code
                } catch (Exception e1) {
                    // Handle
                }
            } catch (Exception e2) {
                // Handle
            }
        } catch (Exception e3) {
            // Handle
        }
        // Sangat susah dibaca!
    }

    // ✅ GOOD: Extract ke method terpisah
    public static void goodExample5() {
        try {
            step1();
            step2();
            step3();
        } catch (Exception e) {
            handleError(e);
        }
    }

    private static void step1() throws Exception {
        // Implementation
    }

    private static void step2() throws Exception {
        // Implementation
    }

    private static void step3() throws Exception {
        // Implementation
    }

    private static void handleError(Exception e) {
        logger.severe("Operation failed: " + e.getMessage());
        // Show user-friendly message
    }

    // ✅ BEST: Use try-with-resources (Java 7+)
    public static void tryWithResourcesExample() {
        // Auto-close resources, tidak perlu finally!
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db", "root", "");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM produk")) {

            while (rs.next()) {
                System.out.println(rs.getString("nama"));
            }

        } catch (SQLException e) {
            logger.severe("Database error: " + e.getMessage());
        }
        // Connection, Statement, ResultSet auto-closed!
    }

    // ✅ GOOD: Validasi input sebelum processing (Fail Fast)
    public static void simpanProduk(String nama, double harga, int stok) {
        // Validasi di awal
        if (nama == null || nama.trim().isEmpty()) {
            throw new IllegalArgumentException("Nama produk tidak boleh kosong");
        }

        if (harga < 0) {
            throw new IllegalArgumentException("Harga tidak boleh negatif");
        }

        if (stok < 0) {
            throw new IllegalArgumentException("Stok tidak boleh negatif");
        }

        // Jika sampai sini, input pasti valid
        try {
            // Save to database
            logger.info("Product saved: " + nama);
        } catch (Exception e) {
            logger.severe("Error saving product: " + e.getMessage());
            throw new RuntimeException("Gagal menyimpan produk", e);
        }
    }

    // ✅ GOOD: User-friendly error messages
    public static void showUserFriendlyError(Exception e) {
        String userMessage;

        if (e instanceof SQLException) {
            userMessage = "Terjadi kesalahan koneksi database.\nSilakan coba lagi atau hubungi administrator.";
        } else if (e instanceof FileNotFoundException) {
            userMessage = "File yang Anda cari tidak ditemukan.\nPastikan file ada dan path sudah benar.";
        } else if (e instanceof NumberFormatException) {
            userMessage = "Format input tidak valid.\nHarap masukkan angka yang benar.";
        } else {
            userMessage = "Terjadi kesalahan tidak terduga.\nSilakan hubungi support.";
        }

        // Log untuk developer
        logger.severe("Error: " + e.getClass().getName() + " - " + e.getMessage());

        // Show untuk user
        JOptionPane.showMessageDialog(null,
            userMessage,
            "Error",
            JOptionPane.ERROR_MESSAGE);
    }
}

/* RINGKASAN BEST PRACTICES:

1. ✅ ALWAYS handle atau log exception, jangan silent failure
2. ✅ Catch exception yang SPESIFIK, bukan Exception general
3. ✅ Preserve exception chain dengan cause
4. ✅ JANGAN return di finally block
5. ✅ Gunakan try-with-resources untuk auto-close
6. ✅ Validasi input di awal (fail fast)
7. ✅ Log untuk developer, user-friendly message untuk user
8. ✅ Extract complex try-catch ke method terpisah
9. ✅ Jangan expose technical details ke user
10. ✅ Dokumentasikan exception yang mungkin di-throw

*/`
      },
      afterCode: `<p><strong>Checklist Exception Handling yang Baik:</strong></p>
<ul>
<li>☑️ Semua exception di-handle atau di-log (no silent failures)</li>
<li>☑️ Error messages user-friendly untuk user, technical untuk log</li>
<li>☑️ Resources (database, file) selalu di-close (gunakan try-with-resources)</li>
<li>☑️ Input validation di awal method (fail fast principle)</li>
<li>☑️ Exception yang di-throw sudah didokumentasikan dengan @throws</li>
<li>☑️ Tidak ada nested try-catch yang kompleks</li>
<li>☑️ Custom exception untuk business logic yang spesifik</li>
<li>☑️ Logging dengan level yang tepat (INFO/WARNING/SEVERE)</li>
</ul>

<p><strong>Remember:</strong> Exception handling bukan hanya untuk mencegah crash, tapi juga untuk memberikan user experience yang baik dan memudahkan debugging saat ada masalah!</p>`
    }
  ]
};
