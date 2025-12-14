export const module7Content = {
  title: "Database dengan Java - MySQL & JDBC",
  slug: "database-java",
  sections: [
    {
      id: "intro-database",
      title: "Pengenalan Database & MySQL",
      content: `
Selamat datang di modul Database! 🗄️

Sampai sejauh ini aplikasi kita masih **tidak menyimpan data secara permanen**. Ketika aplikasi ditutup, semua data hilang. Nah, di sini peran **Database** sangat penting!

**Apa itu Database?**

Database adalah sistem penyimpanan data yang terstruktur dan permanen. Data tersimpan di hard disk sehingga tidak hilang meskipun aplikasi ditutup atau komputer di-restart.

**Kenapa Perlu Database?**

✅ **Data Permanen** - Data tersimpan meskipun aplikasi ditutup
✅ **Terstruktur** - Data terorganisir dalam tabel (baris & kolom)
✅ **Cepat** - Query data dalam milidetik meski data jutaan
✅ **Multi-user** - Banyak user bisa akses bersamaan
✅ **Aman** - Ada sistem autentikasi dan hak akses

**MySQL - Database Pilihan Kita**

MySQL adalah database **relational** (tabel yang saling berhubungan) yang:
- **Gratis & Open Source**
- **Mudah dipelajari** - SQL syntax yang simple
- **Populer** - Banyak tutorial dan komunitas
- **Ringan** - Cocok untuk belajar dan production
- **Cross-platform** - Windows, Mac, Linux

**Konsep Dasar Database:**

\`\`\`
DATABASE (Java_Belajar)
  └── TABLE (mahasiswa)
       ├── COLUMN: id (int)
       ├── COLUMN: nama (varchar)
       ├── COLUMN: nim (varchar)
       ├── COLUMN: jurusan (varchar)
       └── ROWS: data mahasiswa
\`\`\`

**Contoh Data dalam Tabel:**

| id  | nama           | nim       | jurusan              |
|-----|----------------|-----------|----------------------|
| 1   | Budi Santoso   | 2024001   | Teknik Informatika   |
| 2   | Siti Rahma     | 2024002   | Sistem Informasi     |
| 3   | Andi Wijaya    | 2024003   | Teknik Informatika   |
      `
    },
    {
      id: "install-mysql",
      title: "Install & Setup MySQL",
      content: `
**Step 1: Download MySQL**

1. Buka https://dev.mysql.com/downloads/installer/
2. Download **MySQL Installer** untuk Windows
3. Pilih versi **mysql-installer-community** (gratis)

**Step 2: Install MySQL**

1. Jalankan installer
2. Pilih **Developer Default** (termasuk MySQL Server + Workbench)
3. Next sampai ke **MySQL Server Configuration**
4. Atur **root password** (INGAT password ini!)
   - Contoh password: \`root123\` (untuk belajar)
   - **JANGAN** gunakan password simpel di production!
5. Next sampai selesai

**Step 3: Verifikasi Instalasi**

Buka **MySQL Workbench** (sudah terinstall otomatis):
1. Klik **Local instance MySQL**
2. Masukkan password root
3. Kalau berhasil masuk, berarti instalasi sukses! ✅

**Step 4: Buat Database Pertama**

Di MySQL Workbench, ketik query ini:

\`\`\`sql
-- Buat database baru
CREATE DATABASE java_belajar;

-- Gunakan database ini
USE java_belajar;

-- Buat tabel mahasiswa
CREATE TABLE mahasiswa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    nim VARCHAR(20) NOT NULL UNIQUE,
    jurusan VARCHAR(50) NOT NULL,
    ipk DECIMAL(3,2)
);

-- Insert data sample
INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES
('Budi Santoso', '2024001', 'Teknik Informatika', 3.75),
('Siti Rahma', '2024002', 'Sistem Informasi', 3.82),
('Andi Wijaya', '2024003', 'Teknik Informatika', 3.45);

-- Lihat semua data
SELECT * FROM mahasiswa;
\`\`\`

Klik tombol **Execute** (petir ⚡) untuk menjalankan query.

**Penjelasan SQL:**
- \`CREATE DATABASE\` - Buat database baru
- \`CREATE TABLE\` - Buat tabel dengan kolom-kolomnya
- \`PRIMARY KEY\` - Kolom yang unik untuk identifikasi
- \`AUTO_INCREMENT\` - Otomatis bertambah (1, 2, 3, ...)
- \`NOT NULL\` - Kolom wajib diisi
- \`UNIQUE\` - Tidak boleh duplikat
- \`INSERT INTO\` - Tambah data
- \`SELECT\` - Ambil/tampilkan data

Kalau muncul data 3 mahasiswa, berarti berhasil! 🎉
      `
    },
    {
      id: "jdbc-intro",
      title: "JDBC - Jembatan Java ke Database",
      content: `
**Apa itu JDBC?**

**JDBC (Java Database Connectivity)** adalah API Java untuk berkomunikasi dengan database. Ibarat jembatan yang menghubungkan aplikasi Java kita dengan MySQL.

**Cara Kerja JDBC:**

\`\`\`
[Aplikasi Java]
    ↓ (JDBC)
[MySQL Connector/J]
    ↓ (Network)
[MySQL Database]
\`\`\`

**Download MySQL Connector/J (JDBC Driver)**

1. Buka https://dev.mysql.com/downloads/connector/j/
2. Download **Platform Independent** (ZIP)
3. Extract ZIP
4. Cari file **mysql-connector-java-X.X.XX.jar**

**Setup di NetBeans:**

1. Buka project di NetBeans
2. Klik kanan **Libraries** → **Add JAR/Folder**
3. Pilih file **mysql-connector-java-X.X.XX.jar**
4. Klik **Open**
5. Sekarang JDBC sudah siap dipakai! ✅

**5 Langkah Koneksi Database dengan JDBC:**

1. **Load Driver** - Daftarkan MySQL driver
2. **Buat Koneksi** - Connect ke MySQL
3. **Buat Statement** - Objek untuk execute query
4. **Execute Query** - Jalankan SQL (SELECT, INSERT, dll)
5. **Close Koneksi** - Tutup koneksi (PENTING!)

**Informasi Koneksi yang Dibutuhkan:**

\`\`\`java
String url = "jdbc:mysql://localhost:3306/java_belajar";
String user = "root";
String password = "root123"; // password MySQL Anda
\`\`\`

Penjelasan URL:
- \`jdbc:mysql://\` - Protocol JDBC untuk MySQL
- \`localhost\` - Server database (di komputer kita)
- \`3306\` - Port MySQL (default)
- \`java_belajar\` - Nama database
      `
    },
    {
      id: "koneksi-database",
      title: "Koneksi ke Database",
      content: `
Mari kita buat koneksi pertama ke MySQL!

**Cara 1: Koneksi Sederhana (untuk belajar konsep)**
      `,
      code: {
        language: "java",
        filename: "KoneksiPertama.java",
        code: `import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class KoneksiPertama {
    public static void main(String[] args) {
        // Informasi koneksi
        String url = "jdbc:mysql://localhost:3306/java_belajar";
        String user = "root";
        String password = "root123"; // Ganti dengan password Anda!

        Connection conn = null;

        try {
            // 1. Load MySQL Driver (optional di JDBC 4.0+)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Buat koneksi
            conn = DriverManager.getConnection(url, user, password);

            // 3. Koneksi berhasil!
            System.out.println("Koneksi ke database berhasil!");
            System.out.println("Database: " + conn.getCatalog());

        } catch (ClassNotFoundException e) {
            System.out.println("Driver MySQL tidak ditemukan!");
            System.out.println("Pastikan sudah add mysql-connector-java.jar");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Koneksi gagal!");
            System.out.println("Cek: URL, username, password, MySQL server");
            e.printStackTrace();
        } finally {
            // 4. SELALU tutup koneksi!
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                    System.out.println("Koneksi ditutup.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}`
      },
      afterCode: `
**Penjelasan:**
- \`Class.forName()\` - Load driver MySQL (opsional di versi baru)
- \`DriverManager.getConnection()\` - Buat koneksi ke database
- \`try-catch\` - Tangani error (driver tidak ada, password salah, dll)
- \`finally\` - Block yang **SELALU** dijalankan, untuk close koneksi
- \`conn.close()\` - WAJIB! Kalau tidak ditutup, koneksi menumpuk

**Jalankan program**, kalau muncul "Koneksi ke database berhasil!", berarti setup Anda sudah benar! 🎉

**Cara 2: Class Koneksi yang Reusable (Best Practice)**
      `,
      code2: {
        language: "java",
        filename: "DatabaseConnection.java",
        code: `import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    // Database credentials
    private static final String URL = "jdbc:mysql://localhost:3306/java_belajar";
    private static final String USER = "root";
    private static final String PASSWORD = "root123";

    // Method untuk mendapatkan koneksi
    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            throw new SQLException("Driver MySQL tidak ditemukan!", e);
        }
    }

    // Method untuk test koneksi
    public static void testConnection() {
        try (Connection conn = getConnection()) {
            if (conn != null) {
                System.out.println("✅ Koneksi berhasil!");
                System.out.println("Database: " + conn.getCatalog());
            }
        } catch (SQLException e) {
            System.out.println("❌ Koneksi gagal!");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        testConnection();
    }
}`
      },
      afterCode2: `
**Keunggulan Cara 2:**
✅ Konfigurasi database terpusat (di satu tempat)
✅ Mudah digunakan ulang di class lain
✅ Otomatis close dengan **try-with-resources**
✅ Lebih profesional dan clean code

Sekarang setiap kali butuh koneksi, tinggal:
\`\`\`java
Connection conn = DatabaseConnection.getConnection();
\`\`\`

**Try-with-resources** (Java 7+):
\`\`\`java
try (Connection conn = DatabaseConnection.getConnection()) {
    // Pakai koneksi
} // Otomatis close saat keluar try block!
\`\`\`

Lebih praktis dan aman!
      `
    },
    {
      id: "select-data",
      title: "SELECT - Mengambil Data",
      content: `
Sekarang kita belajar **membaca data** dari database dengan query **SELECT**.

**Konsep:**
\`\`\`
Java → SQL Query (SELECT) → MySQL → ResultSet → Java
\`\`\`

**ResultSet** adalah objek yang berisi hasil query, seperti tabel virtual yang bisa kita baca baris per baris.
      `,
      code: {
        language: "java",
        filename: "SelectData.java",
        code: `import java.sql.*;

public class SelectData {
    public static void main(String[] args) {
        String sql = "SELECT * FROM mahasiswa";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            System.out.println("=== DATA MAHASISWA ===");
            System.out.println("ID | Nama | NIM | Jurusan | IPK");
            System.out.println("-------------------------------------------");

            // Loop semua baris hasil query
            while (rs.next()) {
                int id = rs.getInt("id");
                String nama = rs.getString("nama");
                String nim = rs.getString("nim");
                String jurusan = rs.getString("jurusan");
                double ipk = rs.getDouble("ipk");

                System.out.printf("%d | %s | %s | %s | %.2f%n",
                    id, nama, nim, jurusan, ipk);
            }

        } catch (SQLException e) {
            System.out.println("Error saat mengambil data!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode: `
**Penjelasan:**
- \`Statement\` - Objek untuk execute SQL query
- \`executeQuery()\` - Execute SELECT query, return ResultSet
- \`ResultSet\` - Hasil query, seperti tabel
- \`rs.next()\` - Pindah ke baris berikutnya (return false kalau sudah habis)
- \`rs.getInt("id")\` - Ambil nilai kolom "id" sebagai integer
- \`rs.getString("nama")\` - Ambil nilai kolom "nama" sebagai string
- \`rs.getDouble("ipk")\` - Ambil nilai kolom "ipk" sebagai double

**SELECT dengan WHERE (Filter)**
      `,
      code2: {
        language: "java",
        filename: "SelectWithFilter.java",
        code: `import java.sql.*;

public class SelectWithFilter {
    public static void main(String[] args) {
        // Cari mahasiswa dengan IPK >= 3.5
        String sql = "SELECT * FROM mahasiswa WHERE ipk >= 3.5 ORDER BY ipk DESC";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            System.out.println("=== MAHASISWA DENGAN IPK >= 3.5 ===");

            while (rs.next()) {
                System.out.println("Nama  : " + rs.getString("nama"));
                System.out.println("NIM   : " + rs.getString("nim"));
                System.out.println("IPK   : " + rs.getDouble("ipk"));
                System.out.println("------------------------------");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

// Contoh query SQL lainnya:
// WHERE jurusan = 'Teknik Informatika'
// WHERE nama LIKE '%Budi%'  -- Cari nama yang mengandung 'Budi'
// ORDER BY ipk DESC         -- Urutkan IPK dari tinggi ke rendah
// LIMIT 10                  -- Ambil 10 data pertama`
      }
    },
    {
      id: "insert-data",
      title: "INSERT - Menambah Data",
      content: `
Sekarang kita belajar **menambah data baru** ke database dengan **INSERT**.

**Cara 1: Statement (Simple tapi TIDAK AMAN)**
      `,
      code: {
        language: "java",
        filename: "InsertData.java",
        code: `import java.sql.*;

public class InsertData {
    public static void main(String[] args) {
        String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) " +
                     "VALUES ('Dewi Lestari', '2024004', 'Manajemen Informatika', 3.90)";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement()) {

            // Execute INSERT query
            int rowsAffected = stmt.executeUpdate(sql);

            System.out.println("Data berhasil ditambahkan!");
            System.out.println("Jumlah baris: " + rowsAffected);

        } catch (SQLException e) {
            System.out.println("Gagal menambah data!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode: `
**Masalah Cara 1:**
❌ **SQL Injection vulnerability!** - Hacker bisa input SQL berbahaya
❌ Susah untuk data yang dinamis (dari user input)

**Cara 2: PreparedStatement (RECOMMENDED - Aman & Fleksibel)**
      `,
      code2: {
        language: "java",
        filename: "InsertDataPrepared.java",
        code: `import java.sql.*;
import java.util.Scanner;

public class InsertDataPrepared {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Input dari user
        System.out.print("Nama: ");
        String nama = input.nextLine();

        System.out.print("NIM: ");
        String nim = input.nextLine();

        System.out.print("Jurusan: ");
        String jurusan = input.nextLine();

        System.out.print("IPK: ");
        double ipk = input.nextDouble();

        // SQL dengan placeholder (?)
        String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            // Set nilai untuk setiap placeholder
            pstmt.setString(1, nama);      // Parameter 1
            pstmt.setString(2, nim);       // Parameter 2
            pstmt.setString(3, jurusan);   // Parameter 3
            pstmt.setDouble(4, ipk);       // Parameter 4

            // Execute
            int rowsAffected = pstmt.executeUpdate();

            System.out.println("✅ Data berhasil ditambahkan!");
            System.out.println("Baris terpengaruh: " + rowsAffected);

        } catch (SQLException e) {
            if (e.getMessage().contains("Duplicate entry")) {
                System.out.println("❌ NIM sudah terdaftar!");
            } else {
                System.out.println("❌ Gagal menambah data!");
                e.printStackTrace();
            }
        }

        input.close();
    }
}`
      },
      afterCode2: `
**Keunggulan PreparedStatement:**
✅ **Aman dari SQL Injection** - Input otomatis di-escape
✅ **Lebih cepat** - Query di-compile sekali, bisa dipakai berkali-kali
✅ **Mudah dibaca** - Placeholder (?) jelas
✅ **Otomatis handle tipe data** - setString, setInt, setDouble, dll

**Placeholder & Parameter:**
- \`?\` = Placeholder untuk nilai
- \`pstmt.setString(1, nilai)\` = Set parameter ke-1
- Parameter dimulai dari **1** (bukan 0!)

**Contoh dengan Return ID yang di-generate:**
      `,
      additionalCode: {
        language: "java",
        content: `// Insert dan dapatkan ID yang auto-generated
String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";

try (Connection conn = DatabaseConnection.getConnection();
     PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

    pstmt.setString(1, "Rudi Hartono");
    pstmt.setString(2, "2024005");
    pstmt.setString(3, "Sistem Informasi");
    pstmt.setDouble(4, 3.65);

    pstmt.executeUpdate();

    // Ambil ID yang baru saja di-generate
    ResultSet rs = pstmt.getGeneratedKeys();
    if (rs.next()) {
        int newId = rs.getInt(1);
        System.out.println("ID mahasiswa baru: " + newId);
    }
}`
      }
    },
    {
      id: "update-delete",
      title: "UPDATE & DELETE Data",
      content: `
**UPDATE - Mengubah Data yang Sudah Ada**
      `,
      code: {
        language: "java",
        filename: "UpdateData.java",
        code: `import java.sql.*;
import java.util.Scanner;

public class UpdateData {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("NIM mahasiswa yang akan diupdate: ");
        String nim = input.nextLine();

        System.out.print("IPK baru: ");
        double ipkBaru = input.nextDouble();

        // SQL UPDATE
        String sql = "UPDATE mahasiswa SET ipk = ? WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setDouble(1, ipkBaru);
            pstmt.setString(2, nim);

            int rowsAffected = pstmt.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("✅ IPK berhasil diupdate!");
            } else {
                System.out.println("❌ NIM tidak ditemukan!");
            }

        } catch (SQLException e) {
            System.out.println("❌ Gagal update data!");
            e.printStackTrace();
        }

        input.close();
    }
}`
      },
      afterCode: `
**DELETE - Menghapus Data**
      `,
      code2: {
        language: "java",
        filename: "DeleteData.java",
        code: `import java.sql.*;
import java.util.Scanner;

public class DeleteData {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("NIM mahasiswa yang akan dihapus: ");
        String nim = input.nextLine();

        // Konfirmasi dulu
        System.out.print("Yakin ingin menghapus? (y/n): ");
        String konfirmasi = input.nextLine();

        if (!konfirmasi.equalsIgnoreCase("y")) {
            System.out.println("Penghapusan dibatalkan.");
            input.close();
            return;
        }

        // SQL DELETE
        String sql = "DELETE FROM mahasiswa WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nim);

            int rowsAffected = pstmt.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("✅ Data berhasil dihapus!");
            } else {
                System.out.println("❌ NIM tidak ditemukan!");
            }

        } catch (SQLException e) {
            System.out.println("❌ Gagal menghapus data!");
            e.printStackTrace();
        }

        input.close();
    }
}`
      },
      afterCode2: `
**Tips Penting:**

⚠️ **UPDATE & DELETE HARUS PAKAI WHERE!**

Kalau tidak pakai WHERE, **semua data** akan berubah/terhapus:
\`\`\`sql
UPDATE mahasiswa SET ipk = 4.0;  -- ❌ Semua IPK jadi 4.0!
DELETE FROM mahasiswa;            -- ❌ Semua data terhapus!
\`\`\`

✅ **Selalu pakai WHERE:**
\`\`\`sql
UPDATE mahasiswa SET ipk = 4.0 WHERE nim = '2024001';  -- ✅ Hanya 1 data
DELETE FROM mahasiswa WHERE nim = '2024001';            -- ✅ Hanya 1 data
\`\`\`

**Cek rowsAffected:**
- Return 0 = Tidak ada data yang berubah (WHERE tidak cocok)
- Return > 0 = Ada data yang berubah

**Best Practice:**
1. Selalu konfirmasi sebelum DELETE
2. Gunakan PreparedStatement untuk keamanan
3. Cek rowsAffected untuk validasi
4. Tangani exception dengan baik
      `
    },
    {
      id: "crud-class",
      title: "Membuat Class CRUD Lengkap",
      content: `
Sekarang kita gabungkan semua operasi (Create, Read, Update, Delete) dalam satu class yang rapi!

**Class Model: Mahasiswa.java**
      `,
      code: {
        language: "java",
        filename: "Mahasiswa.java",
        code: `public class Mahasiswa {
    private int id;
    private String nama;
    private String nim;
    private String jurusan;
    private double ipk;

    // Constructor
    public Mahasiswa(int id, String nama, String nim, String jurusan, double ipk) {
        this.id = id;
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    // Constructor tanpa ID (untuk insert data baru)
    public Mahasiswa(String nama, String nim, String jurusan, double ipk) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    // Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public String getNim() { return nim; }
    public void setNim(String nim) { this.nim = nim; }

    public String getJurusan() { return jurusan; }
    public void setJurusan(String jurusan) { this.jurusan = jurusan; }

    public double getIpk() { return ipk; }
    public void setIpk(double ipk) { this.ipk = ipk; }

    @Override
    public String toString() {
        return String.format("ID: %d | %s (%s) | %s | IPK: %.2f",
            id, nama, nim, jurusan, ipk);
    }
}`
      },
      afterCode: `
**Class DAO (Data Access Object): MahasiswaDAO.java**

DAO adalah pattern untuk memisahkan logic database dari logic bisnis.
      `,
      code2: {
        language: "java",
        filename: "MahasiswaDAO.java",
        code: `import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MahasiswaDAO {

    // CREATE - Tambah mahasiswa baru
    public boolean insert(Mahasiswa mhs) {
        String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, mhs.getNama());
            pstmt.setString(2, mhs.getNim());
            pstmt.setString(3, mhs.getJurusan());
            pstmt.setDouble(4, mhs.getIpk());

            return pstmt.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // READ - Ambil semua mahasiswa
    public List<Mahasiswa> getAll() {
        List<Mahasiswa> list = new ArrayList<>();
        String sql = "SELECT * FROM mahasiswa ORDER BY nama";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Mahasiswa mhs = new Mahasiswa(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getString("nim"),
                    rs.getString("jurusan"),
                    rs.getDouble("ipk")
                );
                list.add(mhs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    // READ - Cari berdasarkan NIM
    public Mahasiswa getByNim(String nim) {
        String sql = "SELECT * FROM mahasiswa WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nim);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Mahasiswa(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getString("nim"),
                    rs.getString("jurusan"),
                    rs.getDouble("ipk")
                );
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null; // Tidak ditemukan
    }

    // UPDATE - Update data mahasiswa
    public boolean update(Mahasiswa mhs) {
        String sql = "UPDATE mahasiswa SET nama = ?, jurusan = ?, ipk = ? WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, mhs.getNama());
            pstmt.setString(2, mhs.getJurusan());
            pstmt.setDouble(3, mhs.getIpk());
            pstmt.setString(4, mhs.getNim());

            return pstmt.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // DELETE - Hapus mahasiswa
    public boolean delete(String nim) {
        String sql = "DELETE FROM mahasiswa WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nim);
            return pstmt.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // SEARCH - Cari berdasarkan nama
    public List<Mahasiswa> search(String keyword) {
        List<Mahasiswa> list = new ArrayList<>();
        String sql = "SELECT * FROM mahasiswa WHERE nama LIKE ? OR jurusan LIKE ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            String pattern = "%" + keyword + "%";
            pstmt.setString(1, pattern);
            pstmt.setString(2, pattern);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                Mahasiswa mhs = new Mahasiswa(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getString("nim"),
                    rs.getString("jurusan"),
                    rs.getDouble("ipk")
                );
                list.add(mhs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }
}`
      },
      afterCode2: `
**Cara Menggunakan DAO:**
      `,
      additionalCode: {
        language: "java",
        filename: "TestMahasiswaDAO.java",
        content: `public class TestMahasiswaDAO {
    public static void main(String[] args) {
        MahasiswaDAO dao = new MahasiswaDAO();

        // 1. INSERT
        Mahasiswa mhsBaru = new Mahasiswa("Ahmad Yani", "2024010", "Teknik Informatika", 3.55);
        if (dao.insert(mhsBaru)) {
            System.out.println("✅ Data berhasil ditambahkan!");
        }

        // 2. GET ALL
        System.out.println("\\n=== SEMUA MAHASISWA ===");
        List<Mahasiswa> semua = dao.getAll();
        for (Mahasiswa mhs : semua) {
            System.out.println(mhs);
        }

        // 3. GET BY NIM
        System.out.println("\\n=== CARI NIM 2024001 ===");
        Mahasiswa mhs = dao.getByNim("2024001");
        if (mhs != null) {
            System.out.println(mhs);
        }

        // 4. UPDATE
        if (mhs != null) {
            mhs.setIpk(3.85);
            if (dao.update(mhs)) {
                System.out.println("✅ IPK berhasil diupdate!");
            }
        }

        // 5. SEARCH
        System.out.println("\\n=== CARI 'Teknik' ===");
        List<Mahasiswa> hasil = dao.search("Teknik");
        for (Mahasiswa m : hasil) {
            System.out.println(m);
        }

        // 6. DELETE
        // dao.delete("2024010");
    }
}`
      },
      additionalContent: `
<div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <h4>✅ Keunggulan Pattern DAO:</h4>
  <ul>
    <li><strong>Separation of Concerns</strong> - Logic database terpisah dari UI</li>
    <li><strong>Reusable</strong> - Bisa dipakai di mana saja (console, GUI, web)</li>
    <li><strong>Mudah di-maintain</strong> - Kalau ganti database, ubah di DAO saja</li>
    <li><strong>Testable</strong> - Mudah untuk unit testing</li>
    <li><strong>Clean Code</strong> - Kode lebih rapi dan terstruktur</li>
  </ul>
</div>
      `
    },
    {
      id: "gui-database",
      title: "Integrasi GUI + Database",
      content: `
Sekarang kita gabungkan GUI (Swing) dengan Database! Ini adalah aplikasi CRUD lengkap yang profesional.

**Mini Project: Aplikasi Manajemen Mahasiswa**

Template aplikasi dengan GUI + Database:
      `,
      code: {
        language: "java",
        filename: "AplikasiMahasiswaGUI.java",
        code: `import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.List;

public class AplikasiMahasiswaGUI extends JFrame {
    private JTextField textNama, textNIM, textJurusan, textIPK, textSearch;
    private JTable table;
    private DefaultTableModel tableModel;
    private MahasiswaDAO dao;

    public AplikasiMahasiswaGUI() {
        dao = new MahasiswaDAO();

        setTitle("Aplikasi Manajemen Mahasiswa");
        setSize(900, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Panel Input (Kiri)
        JPanel panelInput = createInputPanel();
        add(panelInput, BorderLayout.WEST);

        // Panel Tabel (Tengah)
        JPanel panelTabel = createTablePanel();
        add(panelTabel, BorderLayout.CENTER);

        // Load data awal
        loadData();
    }

    private JPanel createInputPanel() {
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panel.setPreferredSize(new Dimension(300, 0));

        // Title
        JLabel lblTitle = new JLabel("Form Mahasiswa");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 18));
        lblTitle.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(lblTitle);
        panel.add(Box.createVerticalStrut(20));

        // Input fields
        panel.add(new JLabel("Nama:"));
        textNama = new JTextField();
        panel.add(textNama);
        panel.add(Box.createVerticalStrut(10));

        panel.add(new JLabel("NIM:"));
        textNIM = new JTextField();
        panel.add(textNIM);
        panel.add(Box.createVerticalStrut(10));

        panel.add(new JLabel("Jurusan:"));
        textJurusan = new JTextField();
        panel.add(textJurusan);
        panel.add(Box.createVerticalStrut(10));

        panel.add(new JLabel("IPK:"));
        textIPK = new JTextField();
        panel.add(textIPK);
        panel.add(Box.createVerticalStrut(20));

        // Buttons
        JButton btnTambah = new JButton("Tambah");
        btnTambah.addActionListener(e -> tambahData());
        panel.add(btnTambah);
        panel.add(Box.createVerticalStrut(10));

        JButton btnUpdate = new JButton("Update");
        btnUpdate.addActionListener(e -> updateData());
        panel.add(btnUpdate);
        panel.add(Box.createVerticalStrut(10));

        JButton btnHapus = new JButton("Hapus");
        btnHapus.addActionListener(e -> hapusData());
        panel.add(btnHapus);
        panel.add(Box.createVerticalStrut(10));

        JButton btnClear = new JButton("Clear");
        btnClear.addActionListener(e -> clearForm());
        panel.add(btnClear);

        return panel;
    }

    private JPanel createTablePanel() {
        JPanel panel = new JPanel(new BorderLayout(10, 10));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 20));

        // Search bar
        JPanel panelSearch = new JPanel(new FlowLayout(FlowLayout.LEFT));
        panelSearch.add(new JLabel("Search:"));
        textSearch = new JTextField(20);
        panelSearch.add(textSearch);
        JButton btnSearch = new JButton("Cari");
        btnSearch.addActionListener(e -> searchData());
        panelSearch.add(btnSearch);
        JButton btnRefresh = new JButton("Refresh");
        btnRefresh.addActionListener(e -> loadData());
        panelSearch.add(btnRefresh);

        panel.add(panelSearch, BorderLayout.NORTH);

        // Table
        String[] columnNames = {"ID", "Nama", "NIM", "Jurusan", "IPK"};
        tableModel = new DefaultTableModel(columnNames, 0) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false; // Tidak bisa edit langsung
            }
        };

        table = new JTable(tableModel);
        table.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        table.getSelectionModel().addListSelectionListener(e -> {
            if (!e.getValueIsAdjusting() && table.getSelectedRow() != -1) {
                fillFormFromTable();
            }
        });

        JScrollPane scrollPane = new JScrollPane(table);
        panel.add(scrollPane, BorderLayout.CENTER);

        return panel;
    }

    private void loadData() {
        tableModel.setRowCount(0); // Clear table
        List<Mahasiswa> list = dao.getAll();

        for (Mahasiswa mhs : list) {
            Object[] row = {
                mhs.getId(),
                mhs.getNama(),
                mhs.getNim(),
                mhs.getJurusan(),
                mhs.getIpk()
            };
            tableModel.addRow(row);
        }
    }

    private void tambahData() {
        if (!validateInput()) return;

        Mahasiswa mhs = new Mahasiswa(
            textNama.getText(),
            textNIM.getText(),
            textJurusan.getText(),
            Double.parseDouble(textIPK.getText())
        );

        if (dao.insert(mhs)) {
            JOptionPane.showMessageDialog(this, "Data berhasil ditambahkan!");
            loadData();
            clearForm();
        } else {
            JOptionPane.showMessageDialog(this, "Gagal menambah data!",
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void updateData() {
        if (table.getSelectedRow() == -1) {
            JOptionPane.showMessageDialog(this, "Pilih data yang akan diupdate!");
            return;
        }

        if (!validateInput()) return;

        Mahasiswa mhs = new Mahasiswa(
            textNama.getText(),
            textNIM.getText(),
            textJurusan.getText(),
            Double.parseDouble(textIPK.getText())
        );

        if (dao.update(mhs)) {
            JOptionPane.showMessageDialog(this, "Data berhasil diupdate!");
            loadData();
            clearForm();
        } else {
            JOptionPane.showMessageDialog(this, "Gagal update data!",
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void hapusData() {
        int row = table.getSelectedRow();
        if (row == -1) {
            JOptionPane.showMessageDialog(this, "Pilih data yang akan dihapus!");
            return;
        }

        int confirm = JOptionPane.showConfirmDialog(this,
            "Yakin ingin menghapus data ini?", "Konfirmasi",
            JOptionPane.YES_NO_OPTION);

        if (confirm == JOptionPane.YES_OPTION) {
            String nim = table.getValueAt(row, 2).toString();

            if (dao.delete(nim)) {
                JOptionPane.showMessageDialog(this, "Data berhasil dihapus!");
                loadData();
                clearForm();
            } else {
                JOptionPane.showMessageDialog(this, "Gagal menghapus data!",
                    "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void searchData() {
        String keyword = textSearch.getText().trim();
        if (keyword.isEmpty()) {
            loadData();
            return;
        }

        tableModel.setRowCount(0);
        List<Mahasiswa> list = dao.search(keyword);

        for (Mahasiswa mhs : list) {
            Object[] row = {
                mhs.getId(),
                mhs.getNama(),
                mhs.getNim(),
                mhs.getJurusan(),
                mhs.getIpk()
            };
            tableModel.addRow(row);
        }
    }

    private void fillFormFromTable() {
        int row = table.getSelectedRow();
        textNama.setText(table.getValueAt(row, 1).toString());
        textNIM.setText(table.getValueAt(row, 2).toString());
        textJurusan.setText(table.getValueAt(row, 3).toString());
        textIPK.setText(table.getValueAt(row, 4).toString());
    }

    private void clearForm() {
        textNama.setText("");
        textNIM.setText("");
        textJurusan.setText("");
        textIPK.setText("");
        textSearch.setText("");
        table.clearSelection();
    }

    private boolean validateInput() {
        if (textNama.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Nama harus diisi!");
            textNama.requestFocus();
            return false;
        }

        if (textNIM.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "NIM harus diisi!");
            textNIM.requestFocus();
            return false;
        }

        if (textJurusan.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Jurusan harus diisi!");
            textJurusan.requestFocus();
            return false;
        }

        try {
            double ipk = Double.parseDouble(textIPK.getText());
            if (ipk < 0 || ipk > 4.0) {
                JOptionPane.showMessageDialog(this, "IPK harus antara 0-4.0!");
                return false;
            }
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "IPK harus berupa angka!");
            textIPK.requestFocus();
            return false;
        }

        return true;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiMahasiswaGUI().setVisible(true);
        });
    }
}`
      },
      afterCode: `
**Fitur Aplikasi:**
✅ CREATE - Tambah mahasiswa baru
✅ READ - Tampilkan semua data di tabel
✅ UPDATE - Edit data yang ada
✅ DELETE - Hapus data dengan konfirmasi
✅ SEARCH - Cari berdasarkan nama/jurusan
✅ Form validation lengkap
✅ Click row untuk edit
✅ UI profesional dengan Swing

**Cara Menjalankan:**
1. Pastikan MySQL server running
2. Database \`java_belajar\` dan tabel \`mahasiswa\` sudah ada
3. File \`DatabaseConnection.java\`, \`Mahasiswa.java\`, dan \`MahasiswaDAO.java\` sudah ada
4. Jalankan \`AplikasiMahasiswaGUI.java\`

Selamat! Anda baru saja membuat **aplikasi desktop CRUD lengkap** dengan GUI + Database! 🎉
      `
    },
    {
      id: "best-practices",
      title: "Best Practices & Tips Database",
      content: `
**1. Selalu Gunakan PreparedStatement**

❌ **Jangan:**
\`\`\`java
String sql = "SELECT * FROM user WHERE username = '" + userInput + "'";
// Vulnerable to SQL Injection!
\`\`\`

✅ **Gunakan:**
\`\`\`java
String sql = "SELECT * FROM user WHERE username = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userInput);
// Safe from SQL Injection!
\`\`\`

**2. Selalu Close Koneksi**

✅ **Gunakan try-with-resources:**
\`\`\`java
try (Connection conn = getConnection();
     PreparedStatement pstmt = conn.prepareStatement(sql);
     ResultSet rs = pstmt.executeQuery()) {
    // Code
} // Otomatis close semua!
\`\`\`

**3. Handle Exception dengan Baik**

\`\`\`java
try {
    // Database operation
} catch (SQLException e) {
    // Log error
    logger.error("Database error", e);
    // Tampilkan pesan user-friendly
    JOptionPane.showMessageDialog(null,
        "Terjadi kesalahan saat menyimpan data. Coba lagi.");
}
\`\`\`

**4. Gunakan Connection Pooling (untuk aplikasi besar)**

\`\`\`java
// Alternatif: HikariCP (connection pooling)
// Lebih efisien untuk banyak koneksi
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/java_belajar");
config.setUsername("root");
config.setPassword("root123");
config.setMaximumPoolSize(10);

HikariDataSource dataSource = new HikariDataSource(config);
Connection conn = dataSource.getConnection();
\`\`\`

**5. Pisahkan Konfigurasi Database**

Simpan di file terpisah (config.properties):
\`\`\`properties
db.url=jdbc:mysql://localhost:3306/java_belajar
db.username=root
db.password=root123
\`\`\`

Load di Java:
\`\`\`java
Properties props = new Properties();
props.load(new FileInputStream("config.properties"));
String url = props.getProperty("db.url");
\`\`\`

**6. Gunakan Transaction untuk Multiple Operations**

\`\`\`java
Connection conn = null;
try {
    conn = getConnection();
    conn.setAutoCommit(false); // Start transaction

    // Multiple operations
    insertMahasiswa(conn, mhs1);
    updateJurusan(conn, jurusanId);
    deleteNilai(conn, nilaiId);

    conn.commit(); // Commit semua kalau sukses

} catch (SQLException e) {
    if (conn != null) {
        conn.rollback(); // Rollback kalau ada error
    }
    e.printStackTrace();
} finally {
    if (conn != null) {
        conn.setAutoCommit(true);
        conn.close();
    }
}
\`\`\`

**7. Indexing untuk Performa**

\`\`\`sql
-- Buat index untuk kolom yang sering dicari
CREATE INDEX idx_nim ON mahasiswa(nim);
CREATE INDEX idx_nama ON mahasiswa(nama);

-- Query jadi jauh lebih cepat!
\`\`\`

**8. Batasi Data dengan LIMIT**

\`\`\`sql
-- Jangan ambil semua data kalau tidak perlu
SELECT * FROM mahasiswa LIMIT 100;

-- Dengan pagination
SELECT * FROM mahasiswa LIMIT 20 OFFSET 40; -- Halaman 3
\`\`\`

**9. Gunakan Batch Processing untuk Insert Banyak Data**

\`\`\`java
String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);

for (Mahasiswa mhs : listMahasiswa) {
    pstmt.setString(1, mhs.getNama());
    pstmt.setString(2, mhs.getNim());
    pstmt.setString(3, mhs.getJurusan());
    pstmt.setDouble(4, mhs.getIpk());
    pstmt.addBatch(); // Tambah ke batch
}

pstmt.executeBatch(); // Execute semua sekaligus (lebih cepat!)
\`\`\`

**10. Backup Database Secara Berkala**

\`\`\`bash
# Backup MySQL database
mysqldump -u root -p java_belajar > backup_$(date +%Y%m%d).sql

# Restore dari backup
mysql -u root -p java_belajar < backup_20241213.sql
\`\`\`
      `
    },
    {
      id: "latihan-database",
      title: "Latihan & Project",
      content: `
**Latihan 1: Sistem Perpustakaan Sederhana**

Buat database dan aplikasi untuk perpustakaan dengan:

**Tabel \`buku\`:**
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- judul (VARCHAR)
- pengarang (VARCHAR)
- tahun_terbit (INT)
- stok (INT)

**Fitur:**
- CRUD buku
- Cari buku berdasarkan judul/pengarang
- Update stok buku
- Laporan: Total buku, buku dengan stok < 5

**Latihan 2: Sistem Penilaian Mahasiswa**

Buat 2 tabel yang berelasi:

**Tabel \`mahasiswa\`:** (sudah ada)

**Tabel \`nilai\`:**
- id (INT, PRIMARY KEY)
- mahasiswa_id (INT, FOREIGN KEY)
- mata_kuliah (VARCHAR)
- nilai (INT)
- semester (INT)

**Fitur:**
- CRUD nilai
- Lihat semua nilai mahasiswa (JOIN table)
- Hitung rata-rata nilai per mahasiswa
- Cari mahasiswa dengan nilai > 80

**Query JOIN:**
\`\`\`sql
SELECT m.nama, m.nim, n.mata_kuliah, n.nilai
FROM mahasiswa m
INNER JOIN nilai n ON m.id = n.mahasiswa_id
WHERE m.nim = '2024001';
\`\`\`

**Latihan 3: Mini Project - Aplikasi Kasir Sederhana**

**Tabel yang dibutuhkan:**

1. **produk** (id, nama, harga, stok)
2. **transaksi** (id, tanggal, total)
3. **detail_transaksi** (id, transaksi_id, produk_id, jumlah, subtotal)

**Fitur:**
- Kelola produk (CRUD)
- Input transaksi penjualan
- Kurangi stok otomatis saat transaksi
- Laporan penjualan harian
- Cari produk dengan stok habis

**Bonus Challenge:**
- Export data ke CSV
- Print struk transaksi
- Grafik penjualan (menggunakan library JFreeChart)
- User login dengan hak akses (admin, kasir)
      `
    },
    {
      id: "summary-database",
      title: "Rangkuman Modul Database",
      content: `
**🎯 Yang Sudah Dipelajari:**

**1. Konsep Database**
- Apa itu database dan kenapa penting
- MySQL sebagai RDBMS
- Tabel, kolom, baris, primary key

**2. SQL Dasar**
- CREATE DATABASE & TABLE
- INSERT - Tambah data
- SELECT - Ambil data (WHERE, ORDER BY, LIMIT)
- UPDATE - Ubah data
- DELETE - Hapus data

**3. JDBC - Java Database Connectivity**
- Setup MySQL Connector/J
- Koneksi ke database
- Statement vs PreparedStatement
- ResultSet untuk baca hasil query
- Try-with-resources untuk auto close

**4. CRUD Operations**
- Create - INSERT dengan PreparedStatement
- Read - SELECT dengan filter & search
- Update - UPDATE data yang ada
- Delete - DELETE dengan konfirmasi

**5. Design Pattern**
- Model class (Mahasiswa.java)
- DAO Pattern (Data Access Object)
- Separation of concerns

**6. GUI + Database Integration**
- JTable untuk display data
- Form input dengan validasi
- CRUD operations dari GUI
- Search & filter data
- Error handling yang baik

**7. Best Practices**
- Selalu gunakan PreparedStatement (SQL Injection protection)
- Close koneksi dengan try-with-resources
- Transaction untuk multiple operations
- Connection pooling untuk performa
- Indexing untuk query cepat
- Batch processing untuk insert banyak data

<div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <h4>✅ Checklist Kemampuan:</h4>
  <p>Setelah modul ini, Anda harus bisa:</p>
  <ul>
    <li>✅ Install & setup MySQL</li>
    <li>✅ Menulis query SQL dasar (CREATE, INSERT, SELECT, UPDATE, DELETE)</li>
    <li>✅ Koneksi Java ke MySQL menggunakan JDBC</li>
    <li>✅ Membuat aplikasi CRUD console</li>
    <li>✅ Membuat class DAO untuk akses database</li>
    <li>✅ Integrasi GUI Swing dengan database</li>
    <li>✅ Handle error dan validation</li>
    <li>✅ Membuat aplikasi desktop yang menyimpan data permanen</li>
  </ul>
</div>

**📚 Topik Lanjutan (Optional):**
- Stored Procedures & Functions
- Views
- Triggers
- Database Normalization
- ORM (Object-Relational Mapping) - Hibernate
- NoSQL databases (MongoDB)

<div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <h4>🚀 Langkah Selanjutnya:</h4>
  <p>Dengan menguasai Database, Anda sudah bisa membuat aplikasi yang REAL dan BERGUNA!</p>
  <ul>
    <li><strong>Modul 8:</strong> File Handling - Export/Import data, Read/Write file</li>
    <li><strong>Modul 9:</strong> Exception Handling - Handle error dengan profesional</li>
    <li><strong>Modul 10:</strong> Best Practices & Deployment - Packaging aplikasi</li>
    <li><strong>Modul 11:</strong> Project Akhir - Aplikasi CRUD lengkap production-ready</li>
  </ul>
</div>

**💡 Tips:**
Praktek adalah kunci! Coba buat minimal 2-3 aplikasi CRUD dengan domain berbeda (toko, sekolah, klinik, dll) untuk mengasah skill Anda.

**Selamat!** Anda sudah menyelesaikan salah satu modul paling penting dalam pemrograman desktop! 🎉
      `
    }
  ]
};
