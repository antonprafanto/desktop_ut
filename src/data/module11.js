export const module11Content = {
  sections: [
    {
      id: 'project-overview',
      title: 'Overview Project Akhir',
      content: `Selamat! Anda sudah sampai di modul terakhir. Sekarang saatnya membuat project nyata untuk mengaplikasikan semua yang sudah dipelajari dari Modul 1 sampai 10.

**Project: Aplikasi Kasir Toko (Point of Sale)**

Kita akan membuat aplikasi kasir lengkap dengan fitur-fitur professional yang siap digunakan di toko nyata.

**Fitur-Fitur Aplikasi:**

1. **Login System** - Multi-user dengan role (Admin & Kasir)
2. **Dashboard** - Ringkasan penjualan hari ini
3. **Master Data Produk** - CRUD produk dengan kategori
4. **Transaksi Penjualan** - Kasir untuk proses jual beli
5. **Laporan** - Laporan penjualan harian/bulanan
6. **Manajemen User** - CRUD user (khusus admin)

**Teknologi yang Digunakan:**

- Java Swing untuk GUI
- MySQL untuk database
- JDBC untuk koneksi database
- Pattern: DAO (Data Access Object)
- MVC-like architecture

**Estimasi Waktu:** 8-12 jam untuk implementasi lengkap

**Struktur Database:**

- Table: user, kategori, produk, transaksi, transaksi_detail

Mari kita mulai step by step!`,
      code: {
        language: 'sql',
        filename: 'database_kasir.sql',
        content: `-- =============================================
-- DATABASE SCHEMA: Aplikasi Kasir Toko
-- =============================================

CREATE DATABASE IF NOT EXISTS kasir_toko;
USE kasir_toko;

-- 1. Table User (untuk login)
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(100) NOT NULL,
    level ENUM('admin', 'kasir') DEFAULT 'kasir',
    aktif BOOLEAN DEFAULT TRUE,
    tanggal_dibuat DATETIME DEFAULT CURRENT_TIMESTAMP,
    terakhir_login DATETIME NULL
);

-- 2. Table Kategori
CREATE TABLE kategori (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50) UNIQUE NOT NULL,
    deskripsi TEXT,
    aktif BOOLEAN DEFAULT TRUE
);

-- 3. Table Produk
CREATE TABLE produk (
    id INT PRIMARY KEY AUTO_INCREMENT,
    kode VARCHAR(20) UNIQUE NOT NULL,
    nama VARCHAR(100) NOT NULL,
    kategori_id INT,
    harga DOUBLE NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    stok_minimum INT DEFAULT 5,
    aktif BOOLEAN DEFAULT TRUE,
    tanggal_ditambahkan DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id)
);

-- 4. Table Transaksi (header)
CREATE TABLE transaksi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomor_transaksi VARCHAR(20) UNIQUE NOT NULL,
    tanggal DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    subtotal DOUBLE NOT NULL,
    diskon DOUBLE DEFAULT 0,
    pajak DOUBLE DEFAULT 0,
    total DOUBLE NOT NULL,
    bayar DOUBLE NOT NULL,
    kembalian DOUBLE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 5. Table Transaksi Detail (items)
CREATE TABLE transaksi_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    transaksi_id INT NOT NULL,
    produk_id INT NOT NULL,
    nama_produk VARCHAR(100) NOT NULL,
    harga DOUBLE NOT NULL,
    jumlah INT NOT NULL,
    subtotal DOUBLE NOT NULL,
    FOREIGN KEY (transaksi_id) REFERENCES transaksi(id) ON DELETE CASCADE,
    FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- =============================================
-- INDEXES untuk Performance
-- =============================================

CREATE INDEX idx_produk_kode ON produk(kode);
CREATE INDEX idx_produk_nama ON produk(nama);
CREATE INDEX idx_transaksi_tanggal ON transaksi(tanggal);
CREATE INDEX idx_transaksi_nomor ON transaksi(nomor_transaksi);

-- =============================================
-- SAMPLE DATA
-- =============================================

-- Users (password: 123456 untuk semua)
INSERT INTO user (username, password, nama_lengkap, level) VALUES
('admin', 'e10adc3949ba59abbe56e057f20f883e', 'Administrator', 'admin'),
('kasir1', 'e10adc3949ba59abbe56e057f20f883e', 'Kasir Satu', 'kasir'),
('kasir2', 'e10adc3949ba59abbe56e057f20f883e', 'Kasir Dua', 'kasir');

-- Kategori
INSERT INTO kategori (nama, deskripsi) VALUES
('Elektronik', 'Produk elektronik dan gadget'),
('Fashion', 'Pakaian dan aksesoris'),
('Makanan', 'Makanan dan minuman'),
('Alat Tulis', 'Perlengkapan kantor dan sekolah'),
('Kesehatan', 'Produk kesehatan dan kecantikan');

-- Produk Sample
INSERT INTO produk (kode, nama, kategori_id, harga, stok, stok_minimum) VALUES
('ELK001', 'Mouse Wireless Logitech', 1, 125000, 50, 10),
('ELK002', 'Keyboard Mechanical', 1, 450000, 25, 5),
('ELK003', 'Headset Gaming', 1, 350000, 30, 10),
('ELK004', 'USB Flashdisk 32GB', 1, 85000, 100, 20),
('ELK005', 'Webcam HD 720p', 1, 275000, 15, 5),

('FSH001', 'Kaos Polos Hitam', 2, 45000, 100, 20),
('FSH002', 'Celana Jeans', 2, 185000, 50, 10),
('FSH003', 'Jaket Hoodie', 2, 225000, 40, 10),
('FSH004', 'Sepatu Sneakers', 2, 350000, 30, 5),
('FSH005', 'Tas Ransel', 2, 175000, 45, 10),

('MKN001', 'Kopi Arabica 100g', 3, 35000, 200, 50),
('MKN002', 'Teh Hijau Premium', 3, 25000, 150, 30),
('MKN003', 'Coklat Batangan', 3, 15000, 300, 50),
('MKN004', 'Biskuit Kaleng', 3, 45000, 100, 20),
('MKN005', 'Mie Instan Premium', 3, 8000, 500, 100),

('ATK001', 'Pulpen Gel 0.5mm', 4, 5000, 500, 100),
('ATK002', 'Buku Tulis 58 Lembar', 4, 7500, 300, 50),
('ATK003', 'Pensil 2B', 4, 3000, 400, 80),
('ATK004', 'Penghapus Putih', 4, 2500, 600, 100),
('ATK005', 'Spidol Permanent', 4, 12000, 200, 40),

('KSH001', 'Masker Wajah 50pcs', 5, 65000, 100, 20),
('KSH002', 'Hand Sanitizer 500ml', 5, 35000, 150, 30),
('KSH003', 'Vitamin C 1000mg', 5, 85000, 80, 15),
('KSH004', 'Sabun Mandi Cair', 5, 25000, 120, 25),
('KSH005', 'Shampoo Anti Ketombe', 5, 42000, 90, 20);

-- =============================================
-- VIEWS untuk Reporting
-- =============================================

-- View: Produk dengan Kategori
CREATE VIEW v_produk_lengkap AS
SELECT
    p.id,
    p.kode,
    p.nama,
    k.nama as kategori,
    p.harga,
    p.stok,
    p.stok_minimum,
    CASE
        WHEN p.stok <= p.stok_minimum THEN 'Stok Menipis'
        WHEN p.stok = 0 THEN 'Habis'
        ELSE 'Aman'
    END as status_stok,
    p.aktif
FROM produk p
LEFT JOIN kategori k ON p.kategori_id = k.id;

-- View: Transaksi Hari Ini
CREATE VIEW v_transaksi_hari_ini AS
SELECT
    t.id,
    t.nomor_transaksi,
    t.tanggal,
    u.nama_lengkap as kasir,
    t.total,
    COUNT(td.id) as jumlah_item
FROM transaksi t
JOIN user u ON t.user_id = u.id
LEFT JOIN transaksi_detail td ON t.id = td.transaksi_id
WHERE DATE(t.tanggal) = CURDATE()
GROUP BY t.id;

-- View: Laporan Penjualan per Produk
CREATE VIEW v_laporan_produk AS
SELECT
    p.kode,
    p.nama,
    k.nama as kategori,
    SUM(td.jumlah) as total_terjual,
    SUM(td.subtotal) as total_pendapatan
FROM transaksi_detail td
JOIN produk p ON td.produk_id = p.id
LEFT JOIN kategori k ON p.kategori_id = k.id
GROUP BY p.id;

-- =============================================
-- STORED PROCEDURES
-- =============================================

DELIMITER $$

-- Procedure: Generate Nomor Transaksi
CREATE PROCEDURE generate_nomor_transaksi(OUT nomor VARCHAR(20))
BEGIN
    DECLARE last_number INT;
    DECLARE today_prefix VARCHAR(10);

    SET today_prefix = DATE_FORMAT(NOW(), 'TRX%Y%m%d');

    SELECT IFNULL(MAX(CAST(SUBSTRING(nomor_transaksi, 12) AS UNSIGNED)), 0) + 1
    INTO last_number
    FROM transaksi
    WHERE nomor_transaksi LIKE CONCAT(today_prefix, '%');

    SET nomor = CONCAT(today_prefix, LPAD(last_number, 4, '0'));
END$$

-- Procedure: Get Dashboard Stats
CREATE PROCEDURE get_dashboard_stats(
    OUT total_penjualan_hari_ini DOUBLE,
    OUT jumlah_transaksi_hari_ini INT,
    OUT produk_terlaris VARCHAR(100),
    OUT stok_menipis INT
)
BEGIN
    -- Total penjualan hari ini
    SELECT IFNULL(SUM(total), 0) INTO total_penjualan_hari_ini
    FROM transaksi
    WHERE DATE(tanggal) = CURDATE();

    -- Jumlah transaksi hari ini
    SELECT COUNT(*) INTO jumlah_transaksi_hari_ini
    FROM transaksi
    WHERE DATE(tanggal) = CURDATE();

    -- Produk terlaris hari ini
    SELECT p.nama INTO produk_terlaris
    FROM transaksi_detail td
    JOIN transaksi t ON td.transaksi_id = t.id
    JOIN produk p ON td.produk_id = p.id
    WHERE DATE(t.tanggal) = CURDATE()
    GROUP BY td.produk_id
    ORDER BY SUM(td.jumlah) DESC
    LIMIT 1;

    -- Jumlah produk dengan stok menipis
    SELECT COUNT(*) INTO stok_menipis
    FROM produk
    WHERE stok <= stok_minimum AND aktif = TRUE;
END$$

DELIMITER ;

-- =============================================
-- TRIGGERS
-- =============================================

DELIMITER $$

-- Trigger: Update stok setelah transaksi
CREATE TRIGGER after_transaksi_detail_insert
AFTER INSERT ON transaksi_detail
FOR EACH ROW
BEGIN
    UPDATE produk
    SET stok = stok - NEW.jumlah
    WHERE id = NEW.produk_id;
END$$

-- Trigger: Validasi stok sebelum transaksi
CREATE TRIGGER before_transaksi_detail_insert
BEFORE INSERT ON transaksi_detail
FOR EACH ROW
BEGIN
    DECLARE stok_tersedia INT;

    SELECT stok INTO stok_tersedia
    FROM produk
    WHERE id = NEW.produk_id;

    IF stok_tersedia < NEW.jumlah THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stok tidak mencukupi!';
    END IF;
END$$

DELIMITER ;

-- =============================================
-- DONE! Database siap digunakan
-- =============================================

SELECT 'Database kasir_toko berhasil dibuat!' as status;`
      }
    },
    {
      id: 'project-structure',
      title: 'Struktur Project',
      content: `Sebelum mulai coding, kita perlu setup struktur project yang rapi dan terorganisir dengan baik.

**Package Structure:**

com.kasirtoko.
├── model/              → Entity classes (User, Produk, Transaksi, dll)
├── dao/                → Data Access Object (interface & implementation)
├── service/            → Business logic layer
├── view/               → GUI Forms (JFrame, JDialog)
├── util/               → Helper classes (DatabaseUtil, FormatUtil, dll)
├── config/             → Configuration (AppConfig)
└── Main.java           → Entry point

**Design Pattern yang Digunakan:**

1. **DAO Pattern** - Separation antara business logic dan data access
2. **Singleton Pattern** - Untuk database connection
3. **MVC-like** - Model, View, Controller separation
4. **Factory Pattern** - Untuk create DAO objects`,
      code: {
        language: 'java',
        filename: 'ProjectStructure.java',
        content: `// ===== 1. UTIL PACKAGE =====
package com.kasirtoko.util;

import java.sql.*;

/**
 * Database connection utility dengan Singleton pattern
 */
public class DatabaseUtil {
    private static final String URL = "jdbc:mysql://localhost:3306/kasir_toko";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    private static Connection connection;

    // Private constructor untuk Singleton
    private DatabaseUtil() {}

    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(URL, USER, PASSWORD);
            } catch (ClassNotFoundException e) {
                throw new SQLException("Driver MySQL tidak ditemukan!", e);
            }
        }
        return connection;
    }

    public static void closeConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Test connection
    public static boolean testConnection() {
        try {
            Connection conn = getConnection();
            return conn != null && !conn.isClosed();
        } catch (SQLException e) {
            return false;
        }
    }
}

package com.kasirtoko.util;

import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Format utility untuk currency, date, dll
 */
public class FormatUtil {
    private static final NumberFormat rupiahFormat =
        NumberFormat.getCurrencyInstance(new Locale("id", "ID"));

    private static final SimpleDateFormat dateFormat =
        new SimpleDateFormat("dd/MM/yyyy");

    private static final SimpleDateFormat dateTimeFormat =
        new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    public static String formatRupiah(double amount) {
        return rupiahFormat.format(amount);
    }

    public static String formatAngka(int number) {
        return NumberFormat.getInstance(new Locale("id", "ID")).format(number);
    }

    public static String formatTanggal(Date date) {
        return dateFormat.format(date);
    }

    public static String formatTanggalWaktu(Date date) {
        return dateTimeFormat.format(date);
    }
}

package com.kasirtoko.util;

import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

/**
 * Security utility untuk hash password, dll
 */
public class SecurityUtil {

    // Hash password menggunakan MD5 (untuk kesederhanaan)
    // Note: Untuk production, gunakan BCrypt atau Argon2
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

            return hexString.toString();

        } catch (Exception e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }

    // Validasi password
    public static boolean validatePassword(String input, String hashed) {
        return hashPassword(input).equals(hashed);
    }
}

package com.kasirtoko.util;

import javax.swing.table.DefaultTableModel;

/**
 * Table utility untuk Swing JTable
 */
public class TableUtil {

    // Create non-editable table model
    public static DefaultTableModel createNonEditableModel(String[] columns) {
        return new DefaultTableModel(columns, 0) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false; // Semua cell tidak bisa diedit
            }
        };
    }

    // Clear table
    public static void clearTable(DefaultTableModel model) {
        model.setRowCount(0);
    }

    // Get selected row ID
    public static Integer getSelectedId(javax.swing.JTable table, int idColumn) {
        int selectedRow = table.getSelectedRow();
        if (selectedRow == -1) {
            return null;
        }
        return (Integer) table.getValueAt(selectedRow, idColumn);
    }
}

// ===== 2. MODEL PACKAGE =====
package com.kasirtoko.model;

import java.util.Date;

public class User {
    private int id;
    private String username;
    private String password;
    private String namaLengkap;
    private String level; // "admin" atau "kasir"
    private boolean aktif;
    private Date tanggalDibuat;
    private Date terakhirLogin;

    // Constructors
    public User() {}

    public User(int id, String username, String namaLengkap, String level) {
        this.id = id;
        this.username = username;
        this.namaLengkap = namaLengkap;
        this.level = level;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getNamaLengkap() { return namaLengkap; }
    public void setNamaLengkap(String namaLengkap) { this.namaLengkap = namaLengkap; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public boolean isAktif() { return aktif; }
    public void setAktif(boolean aktif) { this.aktif = aktif; }

    public Date getTanggalDibuat() { return tanggalDibuat; }
    public void setTanggalDibuat(Date tanggalDibuat) { this.tanggalDibuat = tanggalDibuat; }

    public Date getTerakhirLogin() { return terakhirLogin; }
    public void setTerakhirLogin(Date terakhirLogin) { this.terakhirLogin = terakhirLogin; }

    // Helper method
    public boolean isAdmin() {
        return "admin".equals(this.level);
    }
}

package com.kasirtoko.model;

public class Kategori {
    private int id;
    private String nama;
    private String deskripsi;
    private boolean aktif;

    public Kategori() {}

    public Kategori(int id, String nama) {
        this.id = id;
        this.nama = nama;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public String getDeskripsi() { return deskripsi; }
    public void setDeskripsi(String deskripsi) { this.deskripsi = deskripsi; }

    public boolean isAktif() { return aktif; }
    public void setAktif(boolean aktif) { this.aktif = aktif; }

    @Override
    public String toString() {
        return nama; // Untuk ditampilkan di JComboBox
    }
}

package com.kasirtoko.model;

import java.util.Date;

public class Produk {
    private int id;
    private String kode;
    private String nama;
    private int kategoriId;
    private String kategoriNama; // Untuk join
    private double harga;
    private int stok;
    private int stokMinimum;
    private boolean aktif;
    private Date tanggalDitambahkan;

    public Produk() {}

    public Produk(int id, String kode, String nama, double harga, int stok) {
        this.id = id;
        this.kode = kode;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getKode() { return kode; }
    public void setKode(String kode) { this.kode = kode; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public int getKategoriId() { return kategoriId; }
    public void setKategoriId(int kategoriId) { this.kategoriId = kategoriId; }

    public String getKategoriNama() { return kategoriNama; }
    public void setKategoriNama(String kategoriNama) { this.kategoriNama = kategoriNama; }

    public double getHarga() { return harga; }
    public void setHarga(double harga) { this.harga = harga; }

    public int getStok() { return stok; }
    public void setStok(int stok) { this.stok = stok; }

    public int getStokMinimum() { return stokMinimum; }
    public void setStokMinimum(int stokMinimum) { this.stokMinimum = stokMinimum; }

    public boolean isAktif() { return aktif; }
    public void setAktif(boolean aktif) { this.aktif = aktif; }

    public Date getTanggalDitambahkan() { return tanggalDitambahkan; }
    public void setTanggalDitambahkan(Date tanggalDitambahkan) {
        this.tanggalDitambahkan = tanggalDitambahkan;
    }

    // Helper methods
    public boolean isStokMenipis() {
        return stok <= stokMinimum;
    }

    public String getStatusStok() {
        if (stok == 0) return "Habis";
        if (isStokMenipis()) return "Menipis";
        return "Aman";
    }
}

package com.kasirtoko.model;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

public class Transaksi {
    private int id;
    private String nomorTransaksi;
    private Date tanggal;
    private int userId;
    private String namaKasir; // Untuk join
    private double subtotal;
    private double diskon;
    private double pajak;
    private double total;
    private double bayar;
    private double kembalian;

    private List<TransaksiDetail> items = new ArrayList<>();

    public Transaksi() {}

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNomorTransaksi() { return nomorTransaksi; }
    public void setNomorTransaksi(String nomorTransaksi) {
        this.nomorTransaksi = nomorTransaksi;
    }

    public Date getTanggal() { return tanggal; }
    public void setTanggal(Date tanggal) { this.tanggal = tanggal; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getNamaKasir() { return namaKasir; }
    public void setNamaKasir(String namaKasir) { this.namaKasir = namaKasir; }

    public double getSubtotal() { return subtotal; }
    public void setSubtotal(double subtotal) { this.subtotal = subtotal; }

    public double getDiskon() { return diskon; }
    public void setDiskon(double diskon) { this.diskon = diskon; }

    public double getPajak() { return pajak; }
    public void setPajak(double pajak) { this.pajak = pajak; }

    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }

    public double getBayar() { return bayar; }
    public void setBayar(double bayar) { this.bayar = bayar; }

    public double getKembalian() { return kembalian; }
    public void setKembalian(double kembalian) { this.kembalian = kembalian; }

    public List<TransaksiDetail> getItems() { return items; }
    public void setItems(List<TransaksiDetail> items) { this.items = items; }

    public void addItem(TransaksiDetail item) {
        this.items.add(item);
    }
}

package com.kasirtoko.model;

public class TransaksiDetail {
    private int id;
    private int transaksiId;
    private int produkId;
    private String namaProduk;
    private double harga;
    private int jumlah;
    private double subtotal;

    public TransaksiDetail() {}

    public TransaksiDetail(int produkId, String namaProduk, double harga, int jumlah) {
        this.produkId = produkId;
        this.namaProduk = namaProduk;
        this.harga = harga;
        this.jumlah = jumlah;
        this.subtotal = harga * jumlah;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getTransaksiId() { return transaksiId; }
    public void setTransaksiId(int transaksiId) { this.transaksiId = transaksiId; }

    public int getProdukId() { return produkId; }
    public void setProdukId(int produkId) { this.produkId = produkId; }

    public String getNamaProduk() { return namaProduk; }
    public void setNamaProduk(String namaProduk) { this.namaProduk = namaProduk; }

    public double getHarga() { return harga; }
    public void setHarga(double harga) { this.harga = harga; }

    public int getJumlah() { return jumlah; }
    public void setJumlah(int jumlah) { this.jumlah = jumlah; }

    public double getSubtotal() { return subtotal; }
    public void setSubtotal(double subtotal) { this.subtotal = subtotal; }
}`
      },
      afterCode: `<p><strong>File Structure di NetBeans:</strong></p>
<pre>
KasirToko/
├── src/
│   └── com/
│       └── kasirtoko/
│           ├── model/
│           │   ├── User.java
│           │   ├── Kategori.java
│           │   ├── Produk.java
│           │   ├── Transaksi.java
│           │   └── TransaksiDetail.java
│           ├── util/
│           │   ├── DatabaseUtil.java
│           │   ├── FormatUtil.java
│           │   ├── SecurityUtil.java
│           │   └── TableUtil.java
│           ├── dao/           (akan dibuat di section berikutnya)
│           ├── service/       (akan dibuat di section berikutnya)
│           ├── view/          (akan dibuat di section berikutnya)
│           └── Main.java
├── lib/
│   └── mysql-connector-java-8.0.30.jar
└── database_kasir.sql
</pre>

<p><strong>Next Step:</strong> Kita akan membuat DAO layer untuk handle semua operasi database.</p>`
    },
    {
      id: 'dao-layer',
      title: 'DAO Layer - Data Access Object',
      content: `DAO (Data Access Object) adalah pattern untuk memisahkan business logic dari database access logic. Dengan DAO, kita bisa ganti database dengan mudah tanpa ubah business logic.

**Keuntungan DAO Pattern:**

1. **Separation of Concerns** - Database logic terpisah dari business logic
2. **Reusability** - DAO bisa dipakai di berbagai service
3. **Testability** - Mudah di-mock untuk testing
4. **Maintainability** - Perubahan database query tidak affect business logic

**DAO Interface + Implementation:**

Kita buat interface dulu, kemudian implementation. Ini memudahkan jika nanti mau ganti dari MySQL ke PostgreSQL misalnya.`,
      code: {
        language: 'java',
        filename: 'DAOLayer.java',
        content: `// ===== DAO INTERFACES =====
package com.kasirtoko.dao;

import com.kasirtoko.model.User;
import java.sql.SQLException;
import java.util.List;

public interface UserDAO {
    User login(String username, String password) throws SQLException;
    void updateLastLogin(int userId) throws SQLException;
    List<User> getAll() throws SQLException;
    User getById(int id) throws SQLException;
    void insert(User user) throws SQLException;
    void update(User user) throws SQLException;
    void delete(int id) throws SQLException;
}

package com.kasirtoko.dao;

import com.kasirtoko.model.Produk;
import java.sql.SQLException;
import java.util.List;

public interface ProdukDAO {
    List<Produk> getAll() throws SQLException;
    List<Produk> getAllAktif() throws SQLException;
    Produk getById(int id) throws SQLException;
    Produk getByKode(String kode) throws SQLException;
    List<Produk> searchByNama(String keyword) throws SQLException;
    void insert(Produk produk) throws SQLException;
    void update(Produk produk) throws SQLException;
    void delete(int id) throws SQLException;
    void updateStok(int produkId, int jumlah) throws SQLException;
}

// ===== DAO IMPLEMENTATIONS =====
package com.kasirtoko.dao.impl;

import com.kasirtoko.dao.UserDAO;
import com.kasirtoko.model.User;
import com.kasirtoko.util.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAOImpl implements UserDAO {
    private Connection conn;

    public UserDAOImpl() throws SQLException {
        this.conn = DatabaseUtil.getConnection();
    }

    @Override
    public User login(String username, String password) throws SQLException {
        String sql = "SELECT * FROM user WHERE username = ? AND password = ? AND aktif = TRUE";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, username);
            ps.setString(2, SecurityUtil.hashPassword(password));

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToUser(rs);
            }

            return null; // Login gagal
        }
    }

    @Override
    public void updateLastLogin(int userId) throws SQLException {
        String sql = "UPDATE user SET terakhir_login = NOW() WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.executeUpdate();
        }
    }

    @Override
    public List<User> getAll() throws SQLException {
        List<User> list = new ArrayList<>();
        String sql = "SELECT * FROM user ORDER BY id DESC";

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                list.add(mapResultSetToUser(rs));
            }
        }

        return list;
    }

    @Override
    public User getById(int id) throws SQLException {
        String sql = "SELECT * FROM user WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToUser(rs);
            }
        }

        return null;
    }

    @Override
    public void insert(User user) throws SQLException {
        String sql = "INSERT INTO user (username, password, nama_lengkap, level, aktif) " +
                     "VALUES (?, ?, ?, ?, ?)";

        try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, user.getUsername());
            ps.setString(2, SecurityUtil.hashPassword(user.getPassword()));
            ps.setString(3, user.getNamaLengkap());
            ps.setString(4, user.getLevel());
            ps.setBoolean(5, user.isAktif());

            ps.executeUpdate();

            // Get generated ID
            ResultSet rs = ps.getGeneratedKeys();
            if (rs.next()) {
                user.setId(rs.getInt(1));
            }
        }
    }

    @Override
    public void update(User user) throws SQLException {
        String sql;

        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            // Update dengan password baru
            sql = "UPDATE user SET username = ?, password = ?, nama_lengkap = ?, " +
                  "level = ?, aktif = ? WHERE id = ?";
        } else {
            // Update tanpa ubah password
            sql = "UPDATE user SET username = ?, nama_lengkap = ?, " +
                  "level = ?, aktif = ? WHERE id = ?";
        }

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int paramIndex = 1;

            ps.setString(paramIndex++, user.getUsername());

            if (user.getPassword() != null && !user.getPassword().isEmpty()) {
                ps.setString(paramIndex++, SecurityUtil.hashPassword(user.getPassword()));
            }

            ps.setString(paramIndex++, user.getNamaLengkap());
            ps.setString(paramIndex++, user.getLevel());
            ps.setBoolean(paramIndex++, user.isAktif());
            ps.setInt(paramIndex, user.getId());

            ps.executeUpdate();
        }
    }

    @Override
    public void delete(int id) throws SQLException {
        String sql = "DELETE FROM user WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.executeUpdate();
        }
    }

    // Helper method untuk mapping ResultSet ke User object
    private User mapResultSetToUser(ResultSet rs) throws SQLException {
        User user = new User();
        user.setId(rs.getInt("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setNamaLengkap(rs.getString("nama_lengkap"));
        user.setLevel(rs.getString("level"));
        user.setAktif(rs.getBoolean("aktif"));
        user.setTanggalDibuat(rs.getTimestamp("tanggal_dibuat"));

        Timestamp lastLogin = rs.getTimestamp("terakhir_login");
        if (lastLogin != null) {
            user.setTerakhirLogin(lastLogin);
        }

        return user;
    }
}

package com.kasirtoko.dao.impl;

import com.kasirtoko.dao.ProdukDAO;
import com.kasirtoko.model.Produk;
import com.kasirtoko.util.DatabaseUtil;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProdukDAOImpl implements ProdukDAO {
    private Connection conn;

    public ProdukDAOImpl() throws SQLException {
        this.conn = DatabaseUtil.getConnection();
    }

    @Override
    public List<Produk> getAll() throws SQLException {
        List<Produk> list = new ArrayList<>();

        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            ORDER BY p.id DESC
        """;

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                list.add(mapResultSetToProduk(rs));
            }
        }

        return list;
    }

    @Override
    public List<Produk> getAllAktif() throws SQLException {
        List<Produk> list = new ArrayList<>();

        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.aktif = TRUE
            ORDER BY p.nama
        """;

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                list.add(mapResultSetToProduk(rs));
            }
        }

        return list;
    }

    @Override
    public Produk getById(int id) throws SQLException {
        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.id = ?
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToProduk(rs);
            }
        }

        return null;
    }

    @Override
    public Produk getByKode(String kode) throws SQLException {
        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.kode = ?
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, kode);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToProduk(rs);
            }
        }

        return null;
    }

    @Override
    public List<Produk> searchByNama(String keyword) throws SQLException {
        List<Produk> list = new ArrayList<>();

        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.nama LIKE ? AND p.aktif = TRUE
            ORDER BY p.nama
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, "%" + keyword + "%");
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                list.add(mapResultSetToProduk(rs));
            }
        }

        return list;
    }

    @Override
    public void insert(Produk produk) throws SQLException {
        String sql = """
            INSERT INTO produk (kode, nama, kategori_id, harga, stok, stok_minimum, aktif)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, produk.getKode());
            ps.setString(2, produk.getNama());
            ps.setInt(3, produk.getKategoriId());
            ps.setDouble(4, produk.getHarga());
            ps.setInt(5, produk.getStok());
            ps.setInt(6, produk.getStokMinimum());
            ps.setBoolean(7, produk.isAktif());

            ps.executeUpdate();

            ResultSet rs = ps.getGeneratedKeys();
            if (rs.next()) {
                produk.setId(rs.getInt(1));
            }
        }
    }

    @Override
    public void update(Produk produk) throws SQLException {
        String sql = """
            UPDATE produk SET
                kode = ?,
                nama = ?,
                kategori_id = ?,
                harga = ?,
                stok = ?,
                stok_minimum = ?,
                aktif = ?
            WHERE id = ?
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, produk.getKode());
            ps.setString(2, produk.getNama());
            ps.setInt(3, produk.getKategoriId());
            ps.setDouble(4, produk.getHarga());
            ps.setInt(5, produk.getStok());
            ps.setInt(6, produk.getStokMinimum());
            ps.setBoolean(7, produk.isAktif());
            ps.setInt(8, produk.getId());

            ps.executeUpdate();
        }
    }

    @Override
    public void delete(int id) throws SQLException {
        String sql = "DELETE FROM produk WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.executeUpdate();
        }
    }

    @Override
    public void updateStok(int produkId, int jumlah) throws SQLException {
        String sql = "UPDATE produk SET stok = stok - ? WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, jumlah);
            ps.setInt(2, produkId);
            ps.executeUpdate();
        }
    }

    private Produk mapResultSetToProduk(ResultSet rs) throws SQLException {
        Produk produk = new Produk();
        produk.setId(rs.getInt("id"));
        produk.setKode(rs.getString("kode"));
        produk.setNama(rs.getString("nama"));
        produk.setKategoriId(rs.getInt("kategori_id"));
        produk.setKategoriNama(rs.getString("kategori_nama"));
        produk.setHarga(rs.getDouble("harga"));
        produk.setStok(rs.getInt("stok"));
        produk.setStokMinimum(rs.getInt("stok_minimum"));
        produk.setAktif(rs.getBoolean("aktif"));
        produk.setTanggalDitambahkan(rs.getTimestamp("tanggal_ditambahkan"));

        return produk;
    }
}`
      },
      afterCode: `<p><strong>Kenapa Pakai Interface?</strong></p>
<ul>
<li><strong>Flexibility</strong>: Bisa ganti implementation tanpa ubah code yang pakai DAO</li>
<li><strong>Testing</strong>: Mudah create mock object untuk unit testing</li>
<li><strong>Contract</strong>: Interface jadi contract yang harus diikuti implementation</li>
<li><strong>Decoupling</strong>: Business logic tidak depend pada implementation spesifik</li>
</ul>

<p><strong>DAO Pattern Best Practices:</strong></p>
<ul>
<li>✅ Satu DAO untuk satu entity (UserDAO untuk User, ProdukDAO untuk Produk)</li>
<li>✅ Method name descriptive (getAll, getById, insert, update, delete)</li>
<li>✅ Throw SQLException, let caller handle exception</li>
<li>✅ Use PreparedStatement untuk prevent SQL injection</li>
<li>✅ Helper method untuk map ResultSet ke Object (DRY principle)</li>
</ul>`
    },
    {
      id: 'login-form',
      title: 'Form Login',
      content: `Sekarang kita akan membuat Form Login sebagai entry point aplikasi. Form login ini akan validate username dan password, kemudian redirect ke dashboard jika berhasil.

**Fitur Form Login:**

1. Input username dan password
2. Validasi input
3. Authentication dengan database
4. Update last login timestamp
5. Simpan session user yang login
6. Error handling yang user-friendly`,
      code: {
        language: 'java',
        filename: 'FormLogin.java',
        content: `package com.kasirtoko.view;

import com.kasirtoko.dao.UserDAO;
import com.kasirtoko.dao.impl.UserDAOImpl;
import com.kasirtoko.model.User;
import com.kasirtoko.util.DatabaseUtil;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.SQLException;

public class FormLogin extends JFrame {

    private JTextField txtUsername;
    private JPasswordField txtPassword;
    private JButton btnLogin;
    private JCheckBox chkShowPassword;
    private JLabel lblStatus;

    private UserDAO userDAO;

    public FormLogin() {
        try {
            userDAO = new UserDAOImpl();
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this,
                "Tidak dapat terhubung ke database!\n" + e.getMessage(),
                "Error Database",
                JOptionPane.ERROR_MESSAGE);
            System.exit(1);
        }

        initComponents();
    }

    private void initComponents() {
        setTitle("Login - Kasir Toko");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);

        // Main Panel dengan padding
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout(20, 20));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(30, 40, 30, 40));
        mainPanel.setBackground(new Color(240, 240, 240));

        // Header Panel
        JPanel headerPanel = new JPanel();
        headerPanel.setLayout(new BoxLayout(headerPanel, BoxLayout.Y_AXIS));
        headerPanel.setBackground(new Color(240, 240, 240));

        JLabel lblTitle = new JLabel("KASIR TOKO");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 24));
        lblTitle.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel lblSubtitle = new JLabel("Point of Sale System");
        lblSubtitle.setFont(new Font("Arial", Font.PLAIN, 12));
        lblSubtitle.setForeground(Color.GRAY);
        lblSubtitle.setAlignmentX(Component.CENTER_ALIGNMENT);

        headerPanel.add(lblTitle);
        headerPanel.add(Box.createVerticalStrut(5));
        headerPanel.add(lblSubtitle);

        // Form Panel
        JPanel formPanel = new JPanel(new GridBagLayout());
        formPanel.setBackground(Color.WHITE);
        formPanel.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(200, 200, 200)),
            BorderFactory.createEmptyBorder(20, 20, 20, 20)
        ));

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.insets = new Insets(5, 5, 5, 5);

        // Username
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        JLabel lblUsername = new JLabel("Username:");
        lblUsername.setFont(new Font("Arial", Font.PLAIN, 12));
        formPanel.add(lblUsername, gbc);

        gbc.gridy = 1;
        txtUsername = new JTextField(20);
        txtUsername.setPreferredSize(new Dimension(250, 30));
        txtUsername.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(txtUsername, gbc);

        // Password
        gbc.gridy = 2;
        JLabel lblPassword = new JLabel("Password:");
        lblPassword.setFont(new Font("Arial", Font.PLAIN, 12));
        formPanel.add(lblPassword, gbc);

        gbc.gridy = 3;
        txtPassword = new JPasswordField(20);
        txtPassword.setPreferredSize(new Dimension(250, 30));
        txtPassword.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(txtPassword, gbc);

        // Show Password Checkbox
        gbc.gridy = 4;
        chkShowPassword = new JCheckBox("Show Password");
        chkShowPassword.setBackground(Color.WHITE);
        chkShowPassword.setFont(new Font("Arial", Font.PLAIN, 11));
        chkShowPassword.addActionListener(e -> togglePasswordVisibility());
        formPanel.add(chkShowPassword, gbc);

        // Login Button
        gbc.gridy = 5;
        gbc.insets = new Insets(15, 5, 5, 5);
        btnLogin = new JButton("LOGIN");
        btnLogin.setPreferredSize(new Dimension(250, 35));
        btnLogin.setFont(new Font("Arial", Font.BOLD, 13));
        btnLogin.setBackground(new Color(41, 128, 185));
        btnLogin.setForeground(Color.WHITE);
        btnLogin.setFocusPainted(false);
        btnLogin.setBorderPainted(false);
        btnLogin.setCursor(new Cursor(Cursor.HAND_CURSOR));
        btnLogin.addActionListener(e -> login());
        formPanel.add(btnLogin, gbc);

        // Status Label
        gbc.gridy = 6;
        gbc.insets = new Insets(10, 5, 5, 5);
        lblStatus = new JLabel(" ");
        lblStatus.setFont(new Font("Arial", Font.ITALIC, 11));
        lblStatus.setForeground(Color.RED);
        lblStatus.setHorizontalAlignment(SwingConstants.CENTER);
        formPanel.add(lblStatus, gbc);

        // Footer Panel
        JPanel footerPanel = new JPanel();
        footerPanel.setBackground(new Color(240, 240, 240));
        JLabel lblFooter = new JLabel("Default: admin/123456 atau kasir1/123456");
        lblFooter.setFont(new Font("Arial", Font.PLAIN, 10));
        lblFooter.setForeground(Color.GRAY);
        footerPanel.add(lblFooter);

        // Add panels to main panel
        mainPanel.add(headerPanel, BorderLayout.NORTH);
        mainPanel.add(formPanel, BorderLayout.CENTER);
        mainPanel.add(footerPanel, BorderLayout.SOUTH);

        add(mainPanel);

        // Enter key listener
        txtPassword.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                if (e.getKeyCode() == KeyEvent.VK_ENTER) {
                    login();
                }
            }
        });

        // Focus username saat form muncul
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowOpened(WindowEvent e) {
                txtUsername.requestFocus();
            }
        });
    }

    private void togglePasswordVisibility() {
        if (chkShowPassword.isSelected()) {
            txtPassword.setEchoChar((char) 0);
        } else {
            txtPassword.setEchoChar('•');
        }
    }

    private void login() {
        // Clear status
        lblStatus.setText(" ");

        // Validasi input
        String username = txtUsername.getText().trim();
        String password = new String(txtPassword.getPassword());

        if (username.isEmpty()) {
            lblStatus.setText("Username harus diisi!");
            txtUsername.requestFocus();
            return;
        }

        if (password.isEmpty()) {
            lblStatus.setText("Password harus diisi!");
            txtPassword.requestFocus();
            return;
        }

        // Disable button saat proses login
        btnLogin.setEnabled(false);
        btnLogin.setText("Logging in...");
        lblStatus.setText("Memverifikasi...");
        lblStatus.setForeground(Color.BLUE);

        // Gunakan SwingWorker untuk tidak block UI
        SwingWorker<User, Void> worker = new SwingWorker<>() {
            @Override
            protected User doInBackground() throws Exception {
                // Authenticate
                User user = userDAO.login(username, password);

                if (user != null) {
                    // Update last login
                    userDAO.updateLastLogin(user.getId());
                }

                return user;
            }

            @Override
            protected void done() {
                try {
                    User user = get();

                    if (user != null) {
                        // Login berhasil
                        lblStatus.setText("Login berhasil!");
                        lblStatus.setForeground(new Color(46, 204, 113));

                        // Simpan session
                        SessionManager.setCurrentUser(user);

                        // Tunggu sebentar untuk user lihat status
                        Timer timer = new Timer(500, e -> {
                            // Open dashboard
                            FormDashboard dashboard = new FormDashboard();
                            dashboard.setVisible(true);

                            // Close login form
                            dispose();
                        });
                        timer.setRepeats(false);
                        timer.start();

                    } else {
                        // Login gagal
                        lblStatus.setText("Username atau password salah!");
                        lblStatus.setForeground(Color.RED);
                        btnLogin.setEnabled(true);
                        btnLogin.setText("LOGIN");
                        txtPassword.setText("");
                        txtPassword.requestFocus();
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                    lblStatus.setText("Error: " + e.getMessage());
                    lblStatus.setForeground(Color.RED);
                    btnLogin.setEnabled(true);
                    btnLogin.setText("LOGIN");
                }
            }
        };

        worker.execute();
    }

    public static void main(String[] args) {
        // Set Look and Feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Test database connection
        if (!DatabaseUtil.testConnection()) {
            JOptionPane.showMessageDialog(null,
                "Tidak dapat terhubung ke database!\n\n" +
                "Pastikan:\n" +
                "1. MySQL Server sudah berjalan\n" +
                "2. Database 'kasir_toko' sudah dibuat\n" +
                "3. Import file database_kasir.sql\n" +
                "4. Username dan password di DatabaseUtil sudah benar",
                "Error Koneksi Database",
                JOptionPane.ERROR_MESSAGE);
            System.exit(1);
        }

        SwingUtilities.invokeLater(() -> {
            FormLogin login = new FormLogin();
            login.setVisible(true);
        });
    }
}

// ===== SESSION MANAGER =====
package com.kasirtoko.util;

import com.kasirtoko.model.User;

/**
 * Singleton class untuk manage user session
 */
public class SessionManager {
    private static User currentUser;

    private SessionManager() {}

    public static void setCurrentUser(User user) {
        currentUser = user;
    }

    public static User getCurrentUser() {
        return currentUser;
    }

    public static void clearSession() {
        currentUser = null;
    }

    public static boolean isLoggedIn() {
        return currentUser != null;
    }

    public static boolean isAdmin() {
        return currentUser != null && currentUser.isAdmin();
    }
}`
      },
      afterCode: `<p><strong>Fitur Form Login:</strong></p>
<ul>
<li>✅ UI modern dengan warna yang nyaman</li>
<li>✅ Show/Hide password</li>
<li>✅ Input validation</li>
<li>✅ SwingWorker untuk async login (UI tidak freeze)</li>
<li>✅ Session management untuk track user yang login</li>
<li>✅ Enter key support</li>
<li>✅ Auto focus ke username</li>
<li>✅ Database connection test di awal</li>
<li>✅ User-friendly error messages</li>
</ul>

<p><strong>Test Login:</strong></p>
<ul>
<li><strong>Admin</strong>: username = <code>admin</code>, password = <code>123456</code></li>
<li><strong>Kasir</strong>: username = <code>kasir1</code>, password = <code>123456</code></li>
</ul>`
    },
    {
      id: 'complete-application',
      title: 'Aplikasi Lengkap - Dashboard & Master Data',
      content: `Sekarang kita akan melengkapi aplikasi dengan Dashboard dan Form Master Data Produk. Karena kode lengkap sangat panjang, di sini saya berikan struktur dan komponen utama yang perlu dibuat.

**Form yang Perlu Dibuat:**

1. **FormDashboard** - Main menu dan statistik penjualan
2. **FormProduk** - CRUD Master Data Produk
3. **FormKategori** - CRUD Master Data Kategori
4. **FormTransaksi** - Form kasir untuk transaksi
5. **FormLaporan** - Laporan penjualan

**Struktur Aplikasi Final:**

Login → Dashboard → Menu (Produk/Kategori/Transaksi/Laporan/Logout)

Karena keterbatasan space, berikut adalah template dan panduan untuk complete implementation.`,
      code: {
        language: 'java',
        filename: 'CompleteApp.java',
        content: `// ===== FORM DASHBOARD (Template) =====
package com.kasirtoko.view;

import com.kasirtoko.util.SessionManager;
import javax.swing.*;
import java.awt.*;

public class FormDashboard extends JFrame {

    private JLabel lblWelcome;
    private JButton btnProduk, btnKategori, btnTransaksi, btnLaporan, btnUser, btnLogout;

    // Dashboard Stats
    private JLabel lblTotalPenjualanHariIni;
    private JLabel lblJumlahTransaksi;
    private JLabel lblProdukTerlaris;
    private JLabel lblStokMenipis;

    public FormDashboard() {
        initComponents();
        loadDashboardStats();
    }

    private void initComponents() {
        setTitle("Dashboard - Kasir Toko");
        setSize(1000, 700);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Main Layout: BorderLayout
        setLayout(new BorderLayout(10, 10));

        // Top Panel: Header
        JPanel headerPanel = createHeaderPanel();
        add(headerPanel, BorderLayout.NORTH);

        // Center Panel: Dashboard Stats
        JPanel centerPanel = createDashboardPanel();
        add(centerPanel, BorderLayout.CENTER);

        // Left Panel: Menu
        JPanel menuPanel = createMenuPanel();
        add(menuPanel, BorderLayout.WEST);
    }

    private JPanel createHeaderPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(52, 73, 94));
        panel.setBorder(BorderFactory.createEmptyBorder(15, 20, 15, 20));

        var user = SessionManager.getCurrentUser();

        JLabel lblTitle = new JLabel("KASIR TOKO - Point of Sale");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 20));
        lblTitle.setForeground(Color.WHITE);

        lblWelcome = new JLabel("Welcome, " + user.getNamaLengkap() + " (" + user.getLevel() + ")");
        lblWelcome.setFont(new Font("Arial", Font.PLAIN, 13));
        lblWelcome.setForeground(Color.WHITE);

        panel.add(lblTitle, BorderLayout.WEST);
        panel.add(lblWelcome, BorderLayout.EAST);

        return panel;
    }

    private JPanel createMenuPanel() {
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBackground(new Color(236, 240, 241));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 15, 20, 15));
        panel.setPreferredSize(new Dimension(200, 0));

        JLabel lblMenu = new JLabel("MENU");
        lblMenu.setFont(new Font("Arial", Font.BOLD, 14));
        lblMenu.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(lblMenu);
        panel.add(Box.createVerticalStrut(20));

        // Menu Buttons
        btnTransaksi = createMenuButton("💳 Transaksi");
        btnTransaksi.addActionListener(e -> openFormTransaksi());

        btnProduk = createMenuButton("📦 Master Produk");
        btnProduk.addActionListener(e -> openFormProduk());

        btnKategori = createMenuButton("📁 Master Kategori");
        btnKategori.addActionListener(e -> openFormKategori());

        btnLaporan = createMenuButton("📊 Laporan");
        btnLaporan.addActionListener(e -> openFormLaporan());

        btnUser = createMenuButton("👥 Manajemen User");
        btnUser.addActionListener(e -> openFormUser());
        btnUser.setEnabled(SessionManager.isAdmin()); // Hanya admin

        panel.add(btnTransaksi);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnProduk);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnKategori);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnLaporan);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnUser);
        panel.add(Box.createVerticalGlue());

        btnLogout = createMenuButton("🚪 Logout");
        btnLogout.setBackground(new Color(231, 76, 60));
        btnLogout.addActionListener(e -> logout());
        panel.add(btnLogout);

        return panel;
    }

    private JButton createMenuButton(String text) {
        JButton btn = new JButton(text);
        btn.setAlignmentX(Component.CENTER_ALIGNMENT);
        btn.setMaximumSize(new Dimension(170, 40));
        btn.setFont(new Font("Arial", Font.PLAIN, 13));
        btn.setBackground(new Color(41, 128, 185));
        btn.setForeground(Color.WHITE);
        btn.setFocusPainted(false);
        btn.setBorderPainted(false);
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        return btn;
    }

    private JPanel createDashboardPanel() {
        JPanel panel = new JPanel(new GridLayout(2, 2, 20, 20));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panel.setBackground(Color.WHITE);

        // Card 1: Total Penjualan Hari Ini
        JPanel card1 = createStatsCard(
            "Total Penjualan Hari Ini",
            "Rp 0",
            new Color(46, 204, 113)
        );
        lblTotalPenjualanHariIni = (JLabel) card1.getComponent(1);

        // Card 2: Jumlah Transaksi
        JPanel card2 = createStatsCard(
            "Jumlah Transaksi",
            "0",
            new Color(52, 152, 219)
        );
        lblJumlahTransaksi = (JLabel) card2.getComponent(1);

        // Card 3: Produk Terlaris
        JPanel card3 = createStatsCard(
            "Produk Terlaris Hari Ini",
            "-",
            new Color(241, 196, 15)
        );
        lblProdukTerlaris = (JLabel) card3.getComponent(1);

        // Card 4: Stok Menipis
        JPanel card4 = createStatsCard(
            "Produk Stok Menipis",
            "0",
            new Color(231, 76, 60)
        );
        lblStokMenipis = (JLabel) card4.getComponent(1);

        panel.add(card1);
        panel.add(card2);
        panel.add(card3);
        panel.add(card4);

        return panel;
    }

    private JPanel createStatsCard(String title, String value, Color color) {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(color);
        card.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel lblTitle = new JLabel(title);
        lblTitle.setFont(new Font("Arial", Font.PLAIN, 14));
        lblTitle.setForeground(Color.WHITE);
        lblTitle.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel lblValue = new JLabel(value);
        lblValue.setFont(new Font("Arial", Font.BOLD, 28));
        lblValue.setForeground(Color.WHITE);
        lblValue.setAlignmentX(Component.CENTER_ALIGNMENT);

        card.add(lblTitle);
        card.add(Box.createVerticalStrut(15));
        card.add(lblValue);

        return card;
    }

    private void loadDashboardStats() {
        // TODO: Load dari database menggunakan stored procedure
        // CALL get_dashboard_stats(@total, @jumlah, @terlaris, @stok);

        // Dummy data untuk contoh
        lblTotalPenjualanHariIni.setText("Rp 5.750.000");
        lblJumlahTransaksi.setText("23");
        lblProdukTerlaris.setText("Mouse Wireless");
        lblStokMenipis.setText("5");
    }

    private void openFormTransaksi() {
        // TODO: Open FormTransaksi
        JOptionPane.showMessageDialog(this, "Form Transaksi belum dibuat");
    }

    private void openFormProduk() {
        FormProduk form = new FormProduk();
        form.setVisible(true);
    }

    private void openFormKategori() {
        // TODO: Open FormKategori
        JOptionPane.showMessageDialog(this, "Form Kategori belum dibuat");
    }

    private void openFormLaporan() {
        // TODO: Open FormLaporan
        JOptionPane.showMessageDialog(this, "Form Laporan belum dibuat");
    }

    private void openFormUser() {
        // TODO: Open FormUser (hanya admin)
        JOptionPane.showMessageDialog(this, "Form User belum dibuat");
    }

    private void logout() {
        int confirm = JOptionPane.showConfirmDialog(
            this,
            "Apakah Anda yakin ingin logout?",
            "Konfirmasi Logout",
            JOptionPane.YES_NO_OPTION
        );

        if (confirm == JOptionPane.YES_OPTION) {
            SessionManager.clearSession();

            FormLogin login = new FormLogin();
            login.setVisible(true);

            dispose();
        }
    }
}

/* ===== CHECKLIST IMPLEMENTASI LENGKAP =====

✅ Database Schema (database_kasir.sql)
✅ Model Classes (User, Produk, Kategori, Transaksi, TransaksiDetail)
✅ Util Classes (DatabaseUtil, FormatUtil, SecurityUtil, TableUtil, SessionManager)
✅ DAO Layer (UserDAO, ProdukDAO, KategoriDAO, TransaksiDAO)
✅ Form Login dengan authentication
✅ Form Dashboard dengan menu dan stats

🔲 Form Master Produk (CRUD lengkap dengan search, filter)
🔲 Form Master Kategori (Simple CRUD)
🔲 Form Transaksi (Kasir dengan keranjang belanja)
🔲 Form Laporan (Filter by date, export PDF/Excel)
🔲 Form Manajemen User (CRUD user, change password)

===== LANGKAH SELANJUTNYA =====

1. Buat FormProduk dengan fitur:
   - Table untuk display semua produk
   - Form input/edit produk
   - Search by nama/kode
   - Filter by kategori
   - Validasi (kode unique, harga > 0, dll)
   - Delete dengan confirmation

2. Buat FormTransaksi dengan fitur:
   - Search produk by kode/nama
   - Tambah item ke keranjang
   - Edit quantity
   - Hapus item dari keranjang
   - Calculate subtotal, diskon, pajak, total
   - Input pembayaran dan hitung kembalian
   - Generate nomor transaksi
   - Print struk (optional)

3. Buat FormLaporan dengan fitur:
   - Filter by date range
   - Summary penjualan
   - Detail per transaksi
   - Export ke PDF/Excel
   - Chart penjualan (optional)

===== RESOURCES =====

Untuk implementasi lengkap semua form:
1. Gunakan pattern yang sama dengan FormLogin
2. Gunakan SwingWorker untuk database operations
3. Validasi semua input sebelum save
4. User-friendly error messages
5. Confirmation untuk delete operations
6. Auto-refresh table setelah CRUD
7. Keyboard shortcuts (F5 refresh, Esc close, dll)

===== TIPS PENGEMBANGAN =====

✨ Start dengan satu form, test sampai benar, baru lanjut form berikutnya
✨ Gunakan Git untuk version control
✨ Commit setelah selesai satu fitur
✨ Test dengan data real (banyak records)
✨ Handle edge cases (stok habis, harga 0, dll)
✨ Add logging untuk debugging
✨ Create user manual documentation

SELAMAT MENGEMBANGKAN! 🎉

*/`
      },
      afterCode: `<p><strong>Project Final Structure:</strong></p>
<pre>
KasirToko/
├── src/
│   └── com/kasirtoko/
│       ├── model/          (5 files) ✅
│       ├── dao/            (6 files) ✅
│       ├── util/           (5 files) ✅
│       ├── view/
│       │   ├── FormLogin.java        ✅
│       │   ├── FormDashboard.java    ✅
│       │   ├── FormProduk.java       🔲
│       │   ├── FormKategori.java     🔲
│       │   ├── FormTransaksi.java    🔲
│       │   ├── FormLaporan.java      🔲
│       │   └── FormUser.java         🔲
│       └── Main.java                 ✅
├── lib/
│   └── mysql-connector-java.jar
└── database_kasir.sql                ✅
</pre>

<p><strong>Estimasi Waktu Pengembangan:</strong></p>
<ul>
<li>FormProduk (CRUD): 2-3 jam</li>
<li>FormKategori (CRUD): 1-2 jam</li>
<li>FormTransaksi (Kasir): 3-4 jam</li>
<li>FormLaporan: 2-3 jam</li>
<li>FormUser: 1-2 jam</li>
<li>Testing & Bug Fixing: 2-3 jam</li>
<li><strong>Total: 11-17 jam</strong></li>
</ul>

<p><strong>Next Steps untuk Anda:</strong></p>
<ol>
<li>✅ Setup database dengan run database_kasir.sql</li>
<li>✅ Test login dengan user default (admin/123456)</li>
<li>✅ Explore dashboard dan menu</li>
<li>🎯 Implementasi FormProduk mengikuti pattern FormLogin</li>
<li>🎯 Implementasi form-form lainnya satu per satu</li>
<li>🎯 Testing menyeluruh dengan berbagai scenario</li>
<li>🎯 Deploy dan dokumentasi</li>
</ol>

<p><strong>🎓 SELAMAT!</strong> Anda sudah menyelesaikan 11 modul pembelajaran Java Desktop! Sekarang saatnya practice dengan mengimplementasikan project ini secara lengkap. Jangan ragu untuk eksperimen dan tambahkan fitur-fitur kreatif Anda sendiri!</p>`
    }
  ]
};
