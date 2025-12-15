export const module10Content = {
  sections: [
    {
      id: 'code-organization',
      title: 'Organisasi Kode yang Baik',
      content: `Organisasi kode yang baik membuat aplikasi mudah di-maintain, mudah dipahami orang lain, dan mudah dikembangkan. Ini adalah fondasi dari software engineering yang professional.

**Prinsip Dasar Organisasi Kode:**

1. **Single Responsibility Principle (SRP)** - Satu class satu tanggung jawab
2. **Package Structure** - Kelompokkan class berdasarkan fungsi
3. **Naming Conventions** - Nama yang jelas dan konsisten
4. **Code Documentation** - Komentar yang bermakna
5. **Don't Repeat Yourself (DRY)** - Hindari duplikasi kode

**Struktur Package yang Recommended:**

com.namaaplikasi.
├── model/          → Class entity/POJO (Produk, User, dll)
├── dao/            → Data Access Object (database operations)
├── service/        → Business logic
├── view/           → GUI forms
├── controller/     → Controller untuk connect view dan model
├── util/           → Helper classes (Validator, Formatter, dll)
└── config/         → Configuration (DatabaseConfig, dll)`,
      code: {
        language: 'java',
        filename: 'PackageStructureExample.java',
        content: `// ===== 1. MODEL PACKAGE =====
package com.tokoapp.model;

public class Produk {
    private int id;
    private String nama;
    private double harga;
    private int stok;

    // Constructor
    public Produk(int id, String nama, double harga, int stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public double getHarga() { return harga; }
    public void setHarga(double harga) { this.harga = harga; }

    public int getStok() { return stok; }
    public void setStok(int stok) { this.stok = stok; }
}

// ===== 2. DAO PACKAGE =====
package com.tokoapp.dao;

import com.tokoapp.model.Produk;
import java.sql.*;
import java.util.*;

// Interface untuk flexibility
public interface ProdukDAO {
    void tambah(Produk produk) throws SQLException;
    void update(Produk produk) throws SQLException;
    void hapus(int id) throws SQLException;
    Produk getById(int id) throws SQLException;
    List<Produk> getAll() throws SQLException;
}

// Implementation
public class ProdukDAOImpl implements ProdukDAO {
    private Connection conn;

    public ProdukDAOImpl(Connection conn) {
        this.conn = conn;
    }

    @Override
    public void tambah(Produk produk) throws SQLException {
        String sql = "INSERT INTO produk (nama, harga, stok) VALUES (?, ?, ?)";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, produk.getNama());
            ps.setDouble(2, produk.getHarga());
            ps.setInt(3, produk.getStok());
            ps.executeUpdate();
        }
    }

    @Override
    public List<Produk> getAll() throws SQLException {
        List<Produk> list = new ArrayList<>();
        String sql = "SELECT * FROM produk";

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Produk p = new Produk(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getDouble("harga"),
                    rs.getInt("stok")
                );
                list.add(p);
            }
        }

        return list;
    }

    // ... implement methods lainnya
}

// ===== 3. SERVICE PACKAGE =====
package com.tokoapp.service;

import com.tokoapp.model.Produk;
import com.tokoapp.dao.ProdukDAO;
import java.sql.SQLException;
import java.util.List;

// Business logic di sini
public class ProdukService {
    private ProdukDAO produkDAO;

    public ProdukService(ProdukDAO produkDAO) {
        this.produkDAO = produkDAO;
    }

    // Validasi sebelum tambah
    public void tambahProduk(Produk produk) throws IllegalArgumentException {
        // Business validation
        if (produk.getNama() == null || produk.getNama().trim().isEmpty()) {
            throw new IllegalArgumentException("Nama produk tidak boleh kosong");
        }

        if (produk.getHarga() < 0) {
            throw new IllegalArgumentException("Harga tidak boleh negatif");
        }

        if (produk.getStok() < 0) {
            throw new IllegalArgumentException("Stok tidak boleh negatif");
        }

        // Jika valid, simpan
        try {
            produkDAO.tambah(produk);
        } catch (SQLException e) {
            throw new RuntimeException("Gagal menyimpan produk: " + e.getMessage());
        }
    }

    public List<Produk> semuaProduk() {
        try {
            return produkDAO.getAll();
        } catch (SQLException e) {
            throw new RuntimeException("Gagal mengambil data produk: " + e.getMessage());
        }
    }

    // Business logic: cek stok tersedia
    public boolean stokTersedia(int produkId, int jumlah) {
        try {
            Produk produk = produkDAO.getById(produkId);
            return produk != null && produk.getStok() >= jumlah;
        } catch (SQLException e) {
            return false;
        }
    }
}

// ===== 4. UTIL PACKAGE =====
package com.tokoapp.util;

import java.text.NumberFormat;
import java.util.Locale;

public class FormatUtil {
    private static final NumberFormat rupiahFormat =
        NumberFormat.getCurrencyInstance(new Locale("id", "ID"));

    // Format harga ke Rupiah
    public static String formatRupiah(double harga) {
        return rupiahFormat.format(harga);
    }

    // Format angka dengan thousand separator
    public static String formatAngka(int angka) {
        return NumberFormat.getInstance(new Locale("id", "ID")).format(angka);
    }
}

public class Validator {
    // Validasi email
    public static boolean isEmailValid(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    // Validasi nomor HP Indonesia
    public static boolean isPhoneValid(String phone) {
        return phone != null && phone.matches("^(\\+62|62|0)[0-9]{9,12}$");
    }

    // Validasi string tidak kosong
    public static boolean isNotEmpty(String text) {
        return text != null && !text.trim().isEmpty();
    }
}

// ===== 5. CONFIG PACKAGE =====
package com.tokoapp.config;

import java.sql.*;

public class DatabaseConfig {
    private static final String URL = "jdbc:mysql://localhost:3306/toko_db";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    private static Connection connection;

    // Singleton pattern
    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
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
}

// ===== 6. VIEW PACKAGE - GOOD EXAMPLE =====
package com.tokoapp.view;

import com.tokoapp.model.Produk;
import com.tokoapp.service.ProdukService;
import com.tokoapp.util.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class FormProduk extends JFrame {
    // ✅ GOOD: Semua components sebagai instance variables
    private JTextField txtNama;
    private JTextField txtHarga;
    private JTextField txtStok;
    private JButton btnSimpan;
    private JTable tableProduk;

    private ProdukService produkService;

    public FormProduk(ProdukService produkService) {
        this.produkService = produkService;
        initComponents();
        loadData();
    }

    // ✅ GOOD: Pisahkan UI initialization
    private void initComponents() {
        setTitle("Data Produk");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Panel Input
        JPanel panelInput = createInputPanel();

        // Panel Table
        JPanel panelTable = createTablePanel();

        // Layout
        setLayout(new BorderLayout(10, 10));
        add(panelInput, BorderLayout.NORTH);
        add(panelTable, BorderLayout.CENTER);
    }

    // ✅ GOOD: Extract method untuk clarity
    private JPanel createInputPanel() {
        JPanel panel = new JPanel(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(5, 5, 5, 5);

        // Nama
        gbc.gridx = 0; gbc.gridy = 0;
        panel.add(new JLabel("Nama:"), gbc);

        gbc.gridx = 1;
        txtNama = new JTextField(20);
        panel.add(txtNama, gbc);

        // Harga
        gbc.gridx = 0; gbc.gridy = 1;
        panel.add(new JLabel("Harga:"), gbc);

        gbc.gridx = 1;
        txtHarga = new JTextField(20);
        panel.add(txtHarga, gbc);

        // Stok
        gbc.gridx = 0; gbc.gridy = 2;
        panel.add(new JLabel("Stok:"), gbc);

        gbc.gridx = 1;
        txtStok = new JTextField(20);
        panel.add(txtStok, gbc);

        // Button
        gbc.gridx = 1; gbc.gridy = 3;
        btnSimpan = new JButton("Simpan");
        btnSimpan.addActionListener(e -> simpanProduk());
        panel.add(btnSimpan, gbc);

        return panel;
    }

    private JPanel createTablePanel() {
        JPanel panel = new JPanel(new BorderLayout());

        String[] columns = {"ID", "Nama", "Harga", "Stok"};
        DefaultTableModel model = new DefaultTableModel(columns, 0);
        tableProduk = new JTable(model);

        JScrollPane scroll = new JScrollPane(tableProduk);
        panel.add(scroll, BorderLayout.CENTER);

        return panel;
    }

    // ✅ GOOD: Separate business logic dari UI
    private void simpanProduk() {
        try {
            // Validasi input
            if (!Validator.isNotEmpty(txtNama.getText())) {
                throw new IllegalArgumentException("Nama produk harus diisi!");
            }

            // Parse input
            String nama = txtNama.getText().trim();
            double harga = Double.parseDouble(txtHarga.getText());
            int stok = Integer.parseInt(txtStok.getText());

            // Buat object
            Produk produk = new Produk(0, nama, harga, stok);

            // Save via service
            produkService.tambahProduk(produk);

            // Success feedback
            JOptionPane.showMessageDialog(this,
                "Produk berhasil disimpan!",
                "Sukses",
                JOptionPane.INFORMATION_MESSAGE);

            // Refresh table dan clear form
            loadData();
            clearForm();

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this,
                "Harga dan Stok harus berupa angka!",
                "Error",
                JOptionPane.ERROR_MESSAGE);

        } catch (IllegalArgumentException e) {
            JOptionPane.showMessageDialog(this,
                e.getMessage(),
                "Validasi Error",
                JOptionPane.WARNING_MESSAGE);

        } catch (Exception e) {
            JOptionPane.showMessageDialog(this,
                "Gagal menyimpan produk: " + e.getMessage(),
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    private void loadData() {
        DefaultTableModel model = (DefaultTableModel) tableProduk.getModel();
        model.setRowCount(0); // Clear table

        for (Produk p : produkService.semuaProduk()) {
            model.addRow(new Object[]{
                p.getId(),
                p.getNama(),
                FormatUtil.formatRupiah(p.getHarga()),
                FormatUtil.formatAngka(p.getStok())
            });
        }
    }

    private void clearForm() {
        txtNama.setText("");
        txtHarga.setText("");
        txtStok.setText("");
        txtNama.requestFocus();
    }
}`
      },
      afterCode: `<p><strong>Keuntungan Struktur yang Baik:</strong></p>
<ul>
<li><strong>Separation of Concerns</strong>: Setiap layer punya tanggung jawab yang jelas</li>
<li><strong>Reusability</strong>: Service dan DAO bisa dipakai di berbagai view</li>
<li><strong>Testability</strong>: Mudah di-test karena decoupled</li>
<li><strong>Maintainability</strong>: Mudah mencari dan modify kode</li>
<li><strong>Scalability</strong>: Mudah tambah fitur baru</li>
</ul>`
    },
    {
      id: 'naming-conventions',
      title: 'Naming Conventions dan Code Style',
      content: `Naming conventions yang konsisten membuat kode mudah dibaca dan dipahami. Di Java, ada standar yang diikuti oleh seluruh komunitas.

**Java Naming Conventions:**

1. **Class**: PascalCase (contoh: FormProduk, ProdukDAO)
2. **Method**: camelCase (contoh: tambahProduk, getAll)
3. **Variable**: camelCase (contoh: namaProduk, hargaTotal)
4. **Constant**: UPPER_SNAKE_CASE (contoh: MAX_RETRY, DEFAULT_TIMEOUT)
5. **Package**: lowercase (contoh: com.tokoapp.model)

**Nama yang Baik:**
- Descriptive (menjelaskan apa yang dilakukan)
- Not too short, not too long
- Menggunakan bahasa yang konsisten (semua Inggris atau semua Indonesia)`,
      code: {
        language: 'java',
        filename: 'NamingConventions.java',
        content: `// ❌ BAD NAMING
public class p {  // Terlalu pendek, tidak jelas
    private int x;  // Apa itu x?
    private String s;  // Apa itu s?

    public void m() {  // Method apa ini?
        int a = 10;  // Variable apa ini?
        // ...
    }
}

// ✅ GOOD NAMING
public class Produk {  // Jelas, PascalCase
    private int id;  // Jelas maksudnya
    private String nama;  // Descriptive
    private double harga;

    public void updateHarga(double hargaBaru) {  // Method name jelas, camelCase
        this.harga = hargaBaru;
    }

    public boolean isStokTersedia(int jumlahDiminta) {  // Boolean method dimulai dengan is/has
        return this.stok >= jumlahDiminta;
    }
}

// ❌ BAD: Inconsistent language
public class ProdukManager {
    private String nama;
    private String productName;  // Campur bahasa!
    private int jumlah;
    private int quantity;  // Tidak konsisten

    public void simpan() { }
    public void delete() { }  // Bahasa campur-campur!
}

// ✅ GOOD: Consistent language
public class ProdukManager {
    // Semua Indonesia
    private String nama;
    private int jumlah;
    private double harga;

    public void simpan() { }
    public void hapus() { }
    public void perbarui() { }
}

// atau semua Inggris
public class ProductManager {
    private String name;
    private int quantity;
    private double price;

    public void save() { }
    public void delete() { }
    public void update() { }
}

// ✅ GOOD: Constants
public class AppConfig {
    // Constants: UPPER_SNAKE_CASE
    public static final String DATABASE_URL = "jdbc:mysql://localhost:3306/toko_db";
    public static final int MAX_LOGIN_ATTEMPTS = 3;
    public static final int SESSION_TIMEOUT = 1800; // 30 minutes in seconds
    public static final double PAJAK_PPN = 0.11; // 11%
}

// ✅ GOOD: Boolean naming
public class User {
    private boolean aktif;  // atau isActive
    private boolean admin;  // atau isAdmin
    private boolean verified;

    // Boolean getter dengan prefix is/has
    public boolean isAktif() {
        return aktif;
    }

    public boolean isAdmin() {
        return admin;
    }

    public boolean hasVerified() {
        return verified;
    }
}

// ✅ GOOD: Collection naming
public class TokoManager {
    // Collection: gunakan plural
    private List<Produk> produkList;  // atau daftarProduk
    private Map<Integer, User> userMap;  // atau mapUser
    private Set<String> kategoriSet;  // atau setKategori

    // Array: gunakan array suffix atau plural
    private String[] namaKategori;
    private int[] hargaProduk;
}

// ✅ GOOD: Method naming patterns
public class ProdukService {

    // Get: mengambil data
    public Produk getProdukById(int id) { }
    public List<Produk> getAllProduk() { }

    // Set: mengubah nilai
    public void setHarga(double harga) { }

    // Is/Has: return boolean
    public boolean isProdukAktif(int id) { }
    public boolean hasStok(int id) { }

    // Add: menambah item
    public void addProduk(Produk produk) { }

    // Remove: menghapus item
    public void removeProduk(int id) { }

    // Create: membuat object baru
    public Produk createProduk(String nama, double harga) { }

    // Calculate: melakukan perhitungan
    public double calculateTotal(List<Produk> produk) { }

    // Validate: validasi data
    public boolean validateInput(String input) { }

    // Load/Save: file operations
    public void loadFromFile(String path) { }
    public void saveToFile(String path) { }
}

// ✅ GOOD: Descriptive variable names
public class KasirService {

    public double hitungTotalBelanja(List<Produk> produkDibeli, String kodeKupon) {
        // ❌ BAD
        // double t = 0;
        // for (Produk p : produkDibeli) {
        //     t += p.getHarga();
        // }

        // ✅ GOOD: Descriptive names
        double totalHarga = 0;

        for (Produk produk : produkDibeli) {
            totalHarga += produk.getHarga();
        }

        // Apply discount
        double diskon = getDiskonDariKupon(kodeKupon);
        double totalSetelahDiskon = totalHarga - (totalHarga * diskon);

        // Apply tax
        double pajak = totalSetelahDiskon * AppConfig.PAJAK_PPN;
        double totalAkhir = totalSetelahDiskon + pajak;

        return totalAkhir;
    }

    private double getDiskonDariKupon(String kodeKupon) {
        // Implementation
        return 0.1; // 10% discount
    }
}

// ✅ GOOD: Package naming
// com.namacompany.namaaplikasi.module

/*
com.tokoapp.
├── model
│   ├── Produk.java
│   ├── User.java
│   └── Transaksi.java
├── dao
│   ├── ProdukDAO.java
│   └── UserDAO.java
├── service
│   ├── ProdukService.java
│   └── UserService.java
└── view
    ├── FormProduk.java
    └── FormTransaksi.java
*/`
      },
      afterCode: `<p><strong>Tips Naming yang Baik:</strong></p>
<ul>
<li><strong>Be Consistent</strong>: Pilih satu bahasa (Indonesia/Inggris) dan stick with it</li>
<li><strong>Be Descriptive</strong>: Nama harus menjelaskan purpose-nya</li>
<li><strong>Avoid Abbreviations</strong>: Hindari singkatan yang tidak umum (prod, usr, tranx)</li>
<li><strong>Use Domain Language</strong>: Gunakan istilah yang dipakai di domain bisnis</li>
<li><strong>Follow Java Conventions</strong>: Ikuti standar yang sudah ada</li>
</ul>

<p><strong>Code Review Checklist:</strong></p>
<ul>
<li>☑️ Semua class menggunakan PascalCase?</li>
<li>☑️ Semua method dan variable menggunakan camelCase?</li>
<li>☑️ Constants menggunakan UPPER_SNAKE_CASE?</li>
<li>☑️ Boolean method dimulai dengan is/has?</li>
<li>☑️ Bahasa konsisten (tidak campur Indonesia-Inggris)?</li>
<li>☑️ Nama descriptive dan meaningful?</li>
</ul>`
    },
    {
      id: 'version-control-git',
      title: 'Version Control dengan Git',
      content: `Git adalah version control system yang wajib dikuasai programmer modern. Git membantu kita tracking perubahan kode, collaborate dengan tim, dan backup project dengan aman.

**Mengapa Perlu Git?**

1. **History Tracking** - Bisa lihat semua perubahan yang pernah dibuat
2. **Backup** - Kode tersimpan aman di cloud (GitHub/GitLab)
3. **Collaboration** - Bisa kerja bareng dengan tim tanpa conflict
4. **Branching** - Bisa develop fitur baru tanpa ganggu code yang stabil
5. **Rollback** - Bisa kembali ke versi sebelumnya jika ada masalah

**Workflow Git untuk Project Java Desktop:**

1. Init repository
2. Add .gitignore untuk exclude file yang tidak perlu
3. Commit secara berkala
4. Push ke remote (GitHub)
5. Gunakan branches untuk fitur baru`,
      code: {
        language: 'bash',
        filename: 'git-workflow.sh',
        content: `# 1. SETUP AWAL PROJECT

# Install Git dulu (download dari git-scm.com)

# Cek versi git
git --version

# Setup user (sekali saja di awal)
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"

# Masuk ke folder project
cd C:/Users/YourName/NetBeansProjects/TokoApp

# Initialize Git repository
git init

# Cek status
git status

# 2. CREATE .gitignore FILE

# Buat file .gitignore di root project
# Isi dengan file/folder yang TIDAK perlu di-commit

# ===== .gitignore untuk Java NetBeans =====
# Compiled class files
*.class

# Package files
*.jar
*.war
*.ear

# NetBeans specific
nbproject/private/
build/
nbbuild/
dist/
nbdist/
.nb-gradle/

# IDE files
.idea/
*.iml
.vscode/

# OS files
.DS_Store
Thumbs.db

# Log files
*.log

# Database files (jangan commit database!)
*.db
*.sqlite

# Config files dengan password (PENTING!)
config.properties
database.properties

# Temporary files
*.tmp
*.bak
*.swp
*~

# 3. FIRST COMMIT

# Add all files (yang tidak ada di .gitignore)
git add .

# Atau add file spesifik
git add src/com/tokoapp/model/Produk.java
git add src/com/tokoapp/view/FormProduk.java

# Cek apa yang akan di-commit
git status

# Commit dengan message yang jelas
git commit -m "Initial commit: Project structure and basic models"

# 4. REMOTE REPOSITORY (GitHub)

# Buat repository baru di GitHub (github.com)
# Jangan centang "Initialize with README"

# Add remote
git remote add origin https://github.com/username/toko-app.git

# Cek remote
git remote -v

# Push pertama kali
git push -u origin master

# Push berikutnya cukup:
git push

# 5. DAILY WORKFLOW

# Sebelum mulai coding, update dulu dari remote
git pull

# Lakukan perubahan pada code...
# Edit file, tambah file, dll

# Cek file apa yang berubah
git status

# Lihat detail perubahan
git diff

# Add file yang diubah
git add src/com/tokoapp/model/Produk.java
git add src/com/tokoapp/view/FormProduk.java

# Atau add semua perubahan
git add .

# Commit dengan message yang descriptive
git commit -m "Add validation to Produk form and fix price formatting"

# Push ke remote
git push

# 6. BRANCHING - Fitur Baru

# Buat branch baru untuk fitur
git checkout -b fitur-laporan

# Cek branch yang aktif
git branch

# Lakukan development di branch ini...
# Edit, add, commit seperti biasa

git add .
git commit -m "Add sales report feature"

# Push branch ke remote
git push -u origin fitur-laporan

# Setelah fitur selesai dan di-test, merge ke master

# Pindah ke master
git checkout master

# Update master
git pull

# Merge branch fitur
git merge fitur-laporan

# Push master yang sudah di-merge
git push

# Hapus branch yang sudah tidak terpakai (optional)
git branch -d fitur-laporan
git push origin --delete fitur-laporan

# 7. USEFUL COMMANDS

# Lihat history commit
git log

# Lihat history dengan grafik
git log --oneline --graph --all

# Lihat perubahan di commit tertentu
git show <commit-hash>

# Undo perubahan yang belum di-commit
git checkout -- namafile.java

# Undo commit terakhir (tapi keep changes)
git reset --soft HEAD~1

# Undo commit terakhir (discard changes) - HATI-HATI!
git reset --hard HEAD~1

# Lihat siapa yang ubah baris tertentu
git blame namafile.java

# Simpan perubahan sementara (tanpa commit)
git stash

# Apply stash
git stash pop

# 8. ROLLBACK KE COMMIT SEBELUMNYA

# Lihat history
git log --oneline

# Rollback ke commit tertentu (create new commit)
git revert <commit-hash>

# Atau reset hard ke commit tertentu (BAHAYA! Hilangkan history)
git reset --hard <commit-hash>

# 9. CONFLICT RESOLUTION

# Jika ada conflict saat merge/pull:
# 1. Git akan mark conflict di file
# 2. Buka file, cari marker <<<<<<< dan >>>>>>>
# 3. Edit manual untuk resolve conflict
# 4. Remove marker
# 5. Add dan commit

git add .
git commit -m "Resolve merge conflict in FormProduk.java"

# 10. CLONE PROJECT (untuk anggota tim lain)

# Clone repository
git clone https://github.com/username/toko-app.git

# Masuk ke folder
cd toko-app

# Buat branch untuk development
git checkout -b development

# Start coding!`
      },
      afterCode: `<p><strong>Git Commit Message Best Practices:</strong></p>
<ul>
<li><strong>Clear dan Descriptive</strong>: "Add validation to login form" bukan "update"</li>
<li><strong>Present Tense</strong>: "Add feature" bukan "Added feature"</li>
<li><strong>Capitalize First Letter</strong>: "Add feature" bukan "add feature"</li>
<li><strong>No Period at End</strong>: "Add feature" bukan "Add feature."</li>
<li><strong>Keep it Short</strong>: Max 50 karakter untuk judul</li>
</ul>

<p><strong>Kapan Harus Commit?</strong></p>
<ul>
<li>✅ Setelah menyelesaikan satu fitur kecil yang lengkap</li>
<li>✅ Setelah fix satu bug</li>
<li>✅ Sebelum refactoring besar</li>
<li>✅ Sebelum pulang kerja/belajar (end of day)</li>
<li>❌ Jangan commit kode yang error/belum selesai</li>
<li>❌ Jangan commit file besar (video, database backup)</li>
</ul>

<p><strong>PENTING:</strong> Jangan pernah commit file yang berisi password atau API keys! Gunakan environment variables atau config file yang di-ignore.</p>`
    },
    {
      id: 'javadoc-documentation',
      title: 'Dokumentasi dengan JavaDoc',
      content: `JavaDoc adalah tool bawaan Java untuk generate dokumentasi dari komentar di kode. Dokumentasi yang baik membuat kode mudah dipahami oleh programmer lain (atau diri sendiri di masa depan!).

**Kapan Perlu JavaDoc?**

1. Public class dan method (yang dipakai oleh class lain)
2. Complex algorithm atau business logic
3. API yang akan dipakai orang lain
4. Library atau framework yang Anda buat

**JavaDoc Tags yang Sering Dipakai:**

- @author - Nama pembuat
- @version - Versi
- @param - Parameter method
- @return - Return value
- @throws - Exception yang mungkin di-throw
- @see - Reference ke class/method lain
- @since - Sejak versi berapa
- @deprecated - Menandai method yang sudah tidak direkomendasikan`,
      code: {
        language: 'java',
        filename: 'JavaDocExample.java',
        content: `package com.tokoapp.model;

import java.util.Date;

/**
 * Class yang merepresentasikan data produk dalam sistem toko.
 * <p>
 * Class ini berisi informasi dasar produk seperti nama, harga, stok,
 * dan kategori. Digunakan sebagai model data untuk operasi CRUD produk.
 * </p>
 *
 * @author Nama Anda
 * @version 1.0
 * @since 2025-01-15
 */
public class Produk {

    /**
     * ID unik produk (auto-increment dari database)
     */
    private int id;

    /**
     * Nama produk (maksimal 100 karakter)
     */
    private String nama;

    /**
     * Harga produk dalam Rupiah
     */
    private double harga;

    /**
     * Jumlah stok yang tersedia
     */
    private int stok;

    /**
     * Kategori produk (contoh: Elektronik, Fashion, dll)
     */
    private String kategori;

    /**
     * Tanggal produk ditambahkan ke sistem
     */
    private Date tanggalDitambahkan;

    /**
     * Konstruktor untuk membuat object Produk baru.
     *
     * @param id ID unik produk
     * @param nama Nama produk (tidak boleh null atau kosong)
     * @param harga Harga produk (harus lebih dari 0)
     * @param stok Stok awal produk (tidak boleh negatif)
     * @throws IllegalArgumentException jika nama kosong atau harga/stok tidak valid
     */
    public Produk(int id, String nama, double harga, int stok) {
        if (nama == null || nama.trim().isEmpty()) {
            throw new IllegalArgumentException("Nama produk tidak boleh kosong");
        }

        if (harga <= 0) {
            throw new IllegalArgumentException("Harga harus lebih dari 0");
        }

        if (stok < 0) {
            throw new IllegalArgumentException("Stok tidak boleh negatif");
        }

        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
        this.tanggalDitambahkan = new Date();
    }

    /**
     * Mengurangi stok produk sesuai jumlah yang diminta.
     * <p>
     * Method ini akan mengurangi stok jika jumlah yang diminta tersedia.
     * Jika stok tidak cukup, akan throw exception.
     * </p>
     *
     * @param jumlah Jumlah stok yang akan dikurangi
     * @return true jika berhasil mengurangi stok
     * @throws IllegalArgumentException jika jumlah negatif atau lebih besar dari stok
     * @see #tambahStok(int)
     */
    public boolean kurangiStok(int jumlah) {
        if (jumlah < 0) {
            throw new IllegalArgumentException("Jumlah tidak boleh negatif");
        }

        if (jumlah > this.stok) {
            throw new IllegalArgumentException(
                "Stok tidak cukup. Tersedia: " + this.stok + ", Diminta: " + jumlah
            );
        }

        this.stok -= jumlah;
        return true;
    }

    /**
     * Menambah stok produk.
     *
     * @param jumlah Jumlah stok yang akan ditambahkan (harus positif)
     * @throws IllegalArgumentException jika jumlah tidak positif
     * @see #kurangiStok(int)
     */
    public void tambahStok(int jumlah) {
        if (jumlah <= 0) {
            throw new IllegalArgumentException("Jumlah harus lebih dari 0");
        }

        this.stok += jumlah;
    }

    /**
     * Cek apakah stok tersedia untuk jumlah tertentu.
     *
     * @param jumlah Jumlah yang ingin dicek
     * @return true jika stok mencukupi, false jika tidak
     */
    public boolean isStokTersedia(int jumlah) {
        return this.stok >= jumlah;
    }

    /**
     * Hitung total harga untuk jumlah tertentu.
     * <p>
     * Method ini mengalikan harga satuan dengan jumlah yang diminta.
     * Tidak mengecek ketersediaan stok.
     * </p>
     *
     * @param jumlah Jumlah produk
     * @return Total harga (harga × jumlah)
     */
    public double hitungTotalHarga(int jumlah) {
        return this.harga * jumlah;
    }

    /**
     * Apply diskon ke harga produk.
     *
     * @param persenDiskon Persentase diskon (0.0 - 1.0, contoh: 0.1 untuk 10%)
     * @return Harga setelah diskon
     * @throws IllegalArgumentException jika persenDiskon di luar range 0-1
     * @deprecated Gunakan {@link #hitungHargaSetelahDiskon(double)} sebagai gantinya.
     *             Method ini akan dihapus di versi 2.0
     */
    @Deprecated
    public double applyDiskon(double persenDiskon) {
        return hitungHargaSetelahDiskon(persenDiskon);
    }

    /**
     * Hitung harga setelah diskon.
     * <p>
     * Method ini menghitung harga akhir setelah dikurangi diskon.
     * Harga original tidak berubah.
     * </p>
     *
     * @param persenDiskon Persentase diskon (0.0 - 1.0)
     * @return Harga setelah diskon
     * @throws IllegalArgumentException jika persenDiskon < 0 atau > 1
     * @since 1.2
     */
    public double hitungHargaSetelahDiskon(double persenDiskon) {
        if (persenDiskon < 0 || persenDiskon > 1) {
            throw new IllegalArgumentException("Diskon harus antara 0 dan 1");
        }

        return this.harga - (this.harga * persenDiskon);
    }

    // Getters

    /**
     * Mendapatkan ID produk.
     *
     * @return ID produk
     */
    public int getId() {
        return id;
    }

    /**
     * Mendapatkan nama produk.
     *
     * @return Nama produk
     */
    public String getNama() {
        return nama;
    }

    /**
     * Mendapatkan harga produk.
     *
     * @return Harga produk dalam Rupiah
     */
    public double getHarga() {
        return harga;
    }

    /**
     * Mendapatkan stok produk yang tersedia.
     *
     * @return Jumlah stok
     */
    public int getStok() {
        return stok;
    }

    /**
     * Representasi string dari object Produk.
     * <p>
     * Format: "Produk{id=1, nama='Laptop', harga=5000000.0, stok=10}"
     * </p>
     *
     * @return String representation
     */
    @Override
    public String toString() {
        return "Produk{" +
                "id=" + id +
                ", nama='" + nama + '\'' +
                ", harga=" + harga +
                ", stok=" + stok +
                '}';
    }
}

// ===== GENERATE JAVADOC =====

/*
Di NetBeans:
1. Klik kanan pada project
2. Pilih "Generate JavaDoc"
3. Pilih scope (Public, Protected, dll)
4. Klik "Generate"
5. JavaDoc akan di-generate di folder dist/javadoc/

Atau via command line:
javadoc -d docs -sourcepath src -subpackages com.tokoapp

Hasilnya akan berupa HTML documentation yang bisa dibuka di browser!
*/`
      },
      afterCode: `<p><strong>JavaDoc Best Practices:</strong></p>
<ul>
<li><strong>Write for Users</strong>: Jelaskan WHAT dan WHY, bukan HOW (kode sudah jelaskan HOW)</li>
<li><strong>Be Concise</strong>: Singkat tapi jelas, tidak bertele-tele</li>
<li><strong>Document Public API</strong>: Semua public class/method harus punya JavaDoc</li>
<li><strong>Update Documentation</strong>: Jika ubah kode, update JavaDoc-nya juga</li>
<li><strong>Use @param and @return</strong>: Jelaskan semua parameter dan return value</li>
<li><strong>Document Exceptions</strong>: Gunakan @throws untuk exception yang mungkin terjadi</li>
<li><strong>Add Examples</strong>: Jika complex, tambahkan contoh penggunaan di JavaDoc</li>
</ul>

<p><strong>Kapan TIDAK Perlu JavaDoc:</strong></p>
<ul>
<li>Private method yang trivial</li>
<li>Getter/Setter yang standard (kecuali ada behavior khusus)</li>
<li>Self-explanatory method (contoh: isEmpty(), toString())</li>
<li>Implementation details (gunakan // comment biasa)</li>
</ul>`
    },
    {
      id: 'performance-optimization',
      title: 'Optimasi Performance',
      content: `Performance optimization membuat aplikasi lebih cepat dan responsive. Tapi ingat prinsip: "Premature optimization is the root of all evil". Optimize hanya ketika ada masalah performance yang terukur.

**Prinsip Optimasi:**

1. **Measure First** - Jangan optimize tanpa data (gunakan profiler)
2. **Optimize Bottleneck** - Focus pada bagian yang paling lambat
3. **Test After** - Pastikan optimization benar-benar improve performance
4. **Don't Break Readability** - Code yang readable > code yang sedikit lebih cepat

**Common Performance Issues di Java Desktop:**

1. UI freezing (operation berat di EDT)
2. Memory leaks
3. Slow database queries
4. Inefficient algorithms`,
      code: {
        language: 'java',
        filename: 'PerformanceOptimization.java',
        content: `import javax.swing.*;
import java.awt.*;
import java.sql.*;
import java.util.*;
import java.util.List;
import javax.swing.table.DefaultTableModel;

public class PerformanceOptimization {

    // ===== 1. UI FREEZING - EVENT DISPATCH THREAD =====

    // ❌ BAD: Operasi berat di EDT (UI akan freeze!)
    public class BadFormProduk extends JFrame {
        private JButton btnLoad;
        private JTable table;

        private void loadDataBad() {
            btnLoad.addActionListener(e -> {
                // BAHAYA! Operasi database di EDT
                // UI akan freeze sampai query selesai
                try {
                    Connection conn = getConnection();
                    Statement stmt = conn.createStatement();
                    ResultSet rs = stmt.executeQuery("SELECT * FROM produk");

                    DefaultTableModel model = (DefaultTableModel) table.getModel();
                    model.setRowCount(0);

                    while (rs.next()) {
                        // Ini bisa lama jika data banyak
                        model.addRow(new Object[]{
                            rs.getInt("id"),
                            rs.getString("nama"),
                            rs.getDouble("harga")
                        });
                    }

                    // User tidak bisa klik apapun sampai selesai!

                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            });
        }
    }

    // ✅ GOOD: Operasi berat di background thread (SwingWorker)
    public class GoodFormProduk extends JFrame {
        private JButton btnLoad;
        private JTable table;
        private JProgressBar progressBar;

        private void loadDataGood() {
            btnLoad.addActionListener(e -> {
                // Disable button saat loading
                btnLoad.setEnabled(false);
                progressBar.setVisible(true);

                // Jalankan di background thread
                SwingWorker<List<Object[]>, Void> worker = new SwingWorker<>() {
                    @Override
                    protected List<Object[]> doInBackground() throws Exception {
                        // Operasi berat di sini (BUKAN di EDT)
                        List<Object[]> data = new ArrayList<>();

                        try (Connection conn = getConnection();
                             Statement stmt = conn.createStatement();
                             ResultSet rs = stmt.executeQuery("SELECT * FROM produk")) {

                            while (rs.next()) {
                                data.add(new Object[]{
                                    rs.getInt("id"),
                                    rs.getString("nama"),
                                    rs.getDouble("harga")
                                });
                            }
                        }

                        return data;
                    }

                    @Override
                    protected void done() {
                        // Update UI di EDT
                        try {
                            List<Object[]> data = get();

                            DefaultTableModel model = (DefaultTableModel) table.getModel();
                            model.setRowCount(0);

                            for (Object[] row : data) {
                                model.addRow(row);
                            }

                            JOptionPane.showMessageDialog(GoodFormProduk.this,
                                "Data berhasil dimuat!");

                        } catch (Exception ex) {
                            JOptionPane.showMessageDialog(GoodFormProduk.this,
                                "Error: " + ex.getMessage(),
                                "Error",
                                JOptionPane.ERROR_MESSAGE);

                        } finally {
                            // Re-enable button dan hide progress
                            btnLoad.setEnabled(true);
                            progressBar.setVisible(false);
                        }
                    }
                };

                worker.execute(); // Start background task
                // UI tetap responsive!
            });
        }
    }

    // ===== 2. DATABASE QUERY OPTIMIZATION =====

    // ❌ BAD: N+1 Query Problem
    public void loadProdukWithKategoriBad() throws SQLException {
        // Query 1: Get all produk
        String sql1 = "SELECT * FROM produk";
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql1)) {

            while (rs.next()) {
                int produkId = rs.getInt("id");
                String produkNama = rs.getString("nama");

                // Query 2, 3, 4, ... N+1: Get kategori untuk setiap produk
                // SANGAT LAMBAT jika ada 1000 produk = 1001 queries!
                String sql2 = "SELECT nama FROM kategori WHERE id = " + rs.getInt("kategori_id");

                try (Statement stmt2 = conn.createStatement();
                     ResultSet rs2 = stmt2.executeQuery(sql2)) {

                    if (rs2.next()) {
                        String kategoriNama = rs2.getString("nama");
                        System.out.println(produkNama + " - " + kategoriNama);
                    }
                }
            }
        }
    }

    // ✅ GOOD: JOIN Query (hanya 1 query!)
    public void loadProdukWithKategoriGood() throws SQLException {
        // Hanya 1 query dengan JOIN!
        String sql = """
            SELECT p.id, p.nama, p.harga, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
        """;

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                System.out.println(
                    rs.getString("nama") + " - " + rs.getString("kategori_nama")
                );
            }
        }
        // JAUH LEBIH CEPAT! 1 query vs 1001 queries
    }

    // ✅ GOOD: Prepared Statement dengan Batch (untuk insert banyak)
    public void insertBanyakProdukGood(List<Produk> produkList) throws SQLException {
        String sql = "INSERT INTO produk (nama, harga, stok) VALUES (?, ?, ?)";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            conn.setAutoCommit(false); // Disable auto-commit untuk batch

            for (Produk p : produkList) {
                ps.setString(1, p.getNama());
                ps.setDouble(2, p.getHarga());
                ps.setInt(3, p.getStok());

                ps.addBatch(); // Add to batch

                // Execute every 100 records
                if (produkList.indexOf(p) % 100 == 0) {
                    ps.executeBatch();
                }
            }

            ps.executeBatch(); // Execute remaining
            conn.commit(); // Commit semua sekaligus

            // JAUH LEBIH CEPAT daripada insert satu-satu!
        }
    }

    // ===== 3. COLLECTION OPTIMIZATION =====

    // ❌ BAD: Inefficient collection choice
    public void cariProdukBad(List<Produk> produkList, int id) {
        // Linear search - O(n)
        // Jika ada 10,000 produk, worst case harus cek semua!
        for (Produk p : produkList) {
            if (p.getId() == id) {
                System.out.println("Found: " + p.getNama());
                return;
            }
        }
    }

    // ✅ GOOD: Gunakan HashMap untuk lookup cepat
    private Map<Integer, Produk> produkMap = new HashMap<>();

    public void cariProdukGood(int id) {
        // HashMap lookup - O(1)
        // Sangat cepat bahkan untuk jutaan data!
        Produk p = produkMap.get(id);

        if (p != null) {
            System.out.println("Found: " + p.getNama());
        }
    }

    // ===== 4. STRING CONCATENATION =====

    // ❌ BAD: String concatenation di loop
    public String buildReportBad(List<Produk> produkList) {
        String report = "";

        // SANGAT LAMBAT! String immutable, setiap += create object baru
        for (Produk p : produkList) {
            report += "ID: " + p.getId() + "\n";
            report += "Nama: " + p.getNama() + "\n";
            report += "Harga: " + p.getHarga() + "\n";
            report += "---\n";
        }
        // Jika 1000 produk, create 4000 object String!

        return report;
    }

    // ✅ GOOD: Gunakan StringBuilder
    public String buildReportGood(List<Produk> produkList) {
        StringBuilder sb = new StringBuilder();

        for (Produk p : produkList) {
            sb.append("ID: ").append(p.getId()).append("\n");
            sb.append("Nama: ").append(p.getNama()).append("\n");
            sb.append("Harga: ").append(p.getHarga()).append("\n");
            sb.append("---\n");
        }

        return sb.toString();
        // JAUH LEBIH CEPAT! Hanya 1 object StringBuilder
    }

    // ===== 5. LAZY LOADING =====

    // ❌ BAD: Load semua data di awal (slow startup)
    public class FormProdukBad extends JFrame {
        private List<Produk> allProduk;

        public FormProdukBad() {
            // Load 10,000 produk di constructor!
            // Aplikasi lama banget baru muncul
            try {
                allProduk = loadAllProduk(); // 10,000 records!
            } catch (SQLException e) {
                e.printStackTrace();
            }

            initComponents();
        }
    }

    // ✅ GOOD: Lazy loading (load on demand)
    public class FormProdukGood extends JFrame {
        private List<Produk> produkList = null;

        public FormProdukGood() {
            // Constructor cepat, tidak load data
            initComponents();
        }

        private void loadDataOnDemand() {
            // Load data hanya saat user butuh
            if (produkList == null) {
                try {
                    produkList = loadAllProduk();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

        // Atau gunakan pagination untuk data banyak
        private List<Produk> loadProdukPagination(int page, int pageSize) throws SQLException {
            int offset = (page - 1) * pageSize;

            String sql = "SELECT * FROM produk LIMIT ? OFFSET ?";

            try (Connection conn = getConnection();
                 PreparedStatement ps = conn.prepareStatement(sql)) {

                ps.setInt(1, pageSize);
                ps.setInt(2, offset);

                // Return hanya 20 records per page
                // Jauh lebih cepat daripada load 10,000 sekaligus!

                ResultSet rs = ps.executeQuery();
                List<Produk> list = new ArrayList<>();

                while (rs.next()) {
                    // ... create Produk object
                }

                return list;
            }
        }
    }

    // ===== 6. MEMORY LEAKS - LISTENER =====

    // ❌ BAD: Memory leak karena listener tidak di-remove
    public class DialogProduk extends JDialog {
        private JButton btnSave;

        public DialogProduk(JFrame parent) {
            super(parent);

            btnSave.addActionListener(e -> {
                // Save logic
            });

            // BAHAYA! Dialog di-close tapi listener masih ada
            // Object tidak bisa di-garbage collect = memory leak!
        }
    }

    // ✅ GOOD: Remove listener saat tidak dipakai
    public class DialogProdukGood extends JDialog {
        private JButton btnSave;

        public DialogProdukGood(JFrame parent) {
            super(parent);

            // Gunakan method reference untuk bisa remove later
            btnSave.addActionListener(this::handleSave);

            // Cleanup saat dialog closing
            addWindowListener(new java.awt.event.WindowAdapter() {
                @Override
                public void windowClosing(java.awt.event.WindowEvent e) {
                    cleanup();
                }
            });
        }

        private void handleSave(java.awt.event.ActionEvent e) {
            // Save logic
        }

        private void cleanup() {
            // Remove listener untuk prevent memory leak
            for (var listener : btnSave.getActionListeners()) {
                btnSave.removeActionListener(listener);
            }
        }
    }

    // Helper method
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/toko_db", "root", ""
        );
    }

    private List<Produk> loadAllProduk() throws SQLException {
        return new ArrayList<>();
    }

    // Dummy Produk class
    static class Produk {
        private int id;
        private String nama;
        private double harga;
        private int stok;

        public int getId() { return id; }
        public String getNama() { return nama; }
        public double getHarga() { return harga; }
        public int getStok() { return stok; }
    }
}

/* SUMMARY OPTIMIZATION TIPS:

1. ✅ Gunakan SwingWorker untuk operasi berat (database, file I/O)
2. ✅ Optimize database query (gunakan JOIN, PreparedStatement, Batch)
3. ✅ Pilih collection yang tepat (HashMap untuk lookup, ArrayList untuk iteration)
4. ✅ Gunakan StringBuilder untuk string concatenation di loop
5. ✅ Lazy loading - load data on demand, bukan di awal
6. ✅ Pagination untuk data banyak
7. ✅ Remove listener untuk prevent memory leaks
8. ✅ Close resource dengan try-with-resources

REMEMBER: Measure first, optimize second!
*/`
      },
      afterCode: `<p><strong>Performance Monitoring Tools:</strong></p>
<ul>
<li><strong>NetBeans Profiler</strong>: Profile → Profile Main Project → CPU/Memory analysis</li>
<li><strong>VisualVM</strong>: Monitor heap usage, threads, dan CPU</li>
<li><strong>System.currentTimeMillis()</strong>: Measure execution time sederhana</li>
</ul>

<p><strong>Performance Checklist:</strong></p>
<ul>
<li>☑️ Operasi berat (database, file I/O) dijalankan di background thread?</li>
<li>☑️ Database query sudah optimal (gunakan JOIN, tidak ada N+1 query)?</li>
<li>☑️ Gunakan StringBuilder untuk concatenation di loop?</li>
<li>☑️ Data banyak di-load pakai pagination?</li>
<li>☑️ Listener di-remove saat tidak dipakai?</li>
<li>☑️ Resource (Connection, Stream) di-close dengan try-with-resources?</li>
</ul>`
    },
    {
      id: 'packaging-deployment',
      title: 'Packaging dan Deployment',
      content: `Setelah aplikasi selesai, langkah terakhir adalah packaging dan deployment agar user bisa menggunakan aplikasi tanpa perlu install NetBeans atau Java development tools.

**Langkah Deployment:**

1. **Clean and Build** - Generate JAR file
2. **Include Dependencies** - Pastikan semua library ikut ter-package
3. **Database Setup** - Buat script untuk create database dan tables
4. **User Documentation** - Buat panduan instalasi dan penggunaan
5. **Installer (Optional)** - Buat installer untuk Windows/Mac/Linux

**Persyaratan untuk User:**

- Java Runtime Environment (JRE) harus terinstall
- MySQL Server (jika aplikasi pakai database)
- Koneksi internet (jika aplikasi perlu online)`,
      code: {
        language: 'java',
        filename: 'DeploymentGuide.java',
        content: `/* ===== STEP 1: CLEAN AND BUILD =====

Di NetBeans:
1. Klik kanan pada project
2. Pilih "Clean and Build"
3. JAR file akan ter-generate di folder dist/

Atau via command line:
cd C:/Users/YourName/NetBeansProjects/TokoApp
ant clean
ant jar

Output: dist/TokoApp.jar

*/

// ===== STEP 2: INCLUDE DEPENDENCIES =====

/*
Jika aplikasi menggunakan external libraries (MySQL Connector, dll),
library harus ikut di-package atau di-copy ke folder yang sama.

Option 1: Fat JAR (semua library di-merge ke 1 JAR)
- Klik kanan project → Properties
- Build → Packaging
- Centang "Copy Dependent Libraries"
- Build ulang

Option 2: Lib Folder
- Copy folder dist/lib/ bersamaan dengan dist/TokoApp.jar
- Struktur:
  TokoApp/
  ├── TokoApp.jar
  └── lib/
      ├── mysql-connector-java-8.0.30.jar
      └── library-lain.jar
*/

// ===== STEP 3: CONFIG FILE =====

/**
 * Buat config file agar user bisa ubah database setting tanpa recompile.
 * File: config.properties (di folder yang sama dengan JAR)
 */
public class AppConfig {
    private static Properties prop = new Properties();
    private static final String CONFIG_FILE = "config.properties";

    // Load config saat aplikasi start
    static {
        try (FileInputStream fis = new FileInputStream(CONFIG_FILE)) {
            prop.load(fis);
        } catch (IOException e) {
            // Jika file tidak ada, create default
            createDefaultConfig();
        }
    }

    private static void createDefaultConfig() {
        prop.setProperty("db.host", "localhost");
        prop.setProperty("db.port", "3306");
        prop.setProperty("db.name", "toko_db");
        prop.setProperty("db.user", "root");
        prop.setProperty("db.password", "");

        // Save to file
        try (FileOutputStream fos = new FileOutputStream(CONFIG_FILE)) {
            prop.store(fos, "Toko App Configuration");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getDbUrl() {
        return String.format("jdbc:mysql://%s:%s/%s",
            prop.getProperty("db.host"),
            prop.getProperty("db.port"),
            prop.getProperty("db.name")
        );
    }

    public static String getDbUser() {
        return prop.getProperty("db.user");
    }

    public static String getDbPassword() {
        return prop.getProperty("db.password");
    }
}

// Gunakan di DatabaseConfig
public class DatabaseConfig {
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
            AppConfig.getDbUrl(),
            AppConfig.getDbUser(),
            AppConfig.getDbPassword()
        );
    }
}

// ===== STEP 4: DATABASE SETUP SCRIPT =====

/*
Buat file SQL untuk setup database di komputer user.
File: database_setup.sql
*/

/*
-- Database Setup Script untuk Toko App
-- Author: Nama Anda
-- Date: 2025-01-15

-- 1. Create Database
CREATE DATABASE IF NOT EXISTS toko_db;
USE toko_db;

-- 2. Create Tables
CREATE TABLE IF NOT EXISTS kategori (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50) NOT NULL,
    deskripsi TEXT
);

CREATE TABLE IF NOT EXISTS produk (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    harga DOUBLE NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    kategori_id INT,
    tanggal_ditambahkan DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id)
);

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(100),
    level ENUM('admin', 'kasir') DEFAULT 'kasir',
    aktif BOOLEAN DEFAULT TRUE,
    tanggal_dibuat DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transaksi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tanggal DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    total DOUBLE NOT NULL,
    bayar DOUBLE NOT NULL,
    kembalian DOUBLE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS transaksi_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    transaksi_id INT,
    produk_id INT,
    jumlah INT NOT NULL,
    harga DOUBLE NOT NULL,
    subtotal DOUBLE NOT NULL,
    FOREIGN KEY (transaksi_id) REFERENCES transaksi(id),
    FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- 3. Insert Sample Data
INSERT INTO kategori (nama, deskripsi) VALUES
('Elektronik', 'Produk elektronik'),
('Fashion', 'Pakaian dan aksesoris'),
('Makanan', 'Makanan dan minuman');

INSERT INTO produk (nama, harga, stok, kategori_id) VALUES
('Laptop Asus', 5000000, 10, 1),
('Mouse Logitech', 150000, 50, 1),
('Keyboard Mechanical', 750000, 25, 1),
('Kaos Polos', 50000, 100, 2),
('Celana Jeans', 200000, 30, 2);

-- Default user: admin/admin123
INSERT INTO user (username, password, nama_lengkap, level) VALUES
('admin', 'admin123', 'Administrator', 'admin'),
('kasir', 'kasir123', 'Kasir 1', 'kasir');

-- 4. Create Indexes untuk Performance
CREATE INDEX idx_produk_nama ON produk(nama);
CREATE INDEX idx_transaksi_tanggal ON transaksi(tanggal);

-- DONE! Database siap digunakan.
*/

// ===== STEP 5: FIRST RUN CHECK =====

/**
 * Cek apakah database sudah ada, jika belum guide user untuk setup.
 */
public class FirstRunChecker {

    public static void checkDatabase() {
        try {
            Connection conn = DatabaseConfig.getConnection();

            // Cek apakah table produk ada
            DatabaseMetaData meta = conn.getMetaData();
            ResultSet rs = meta.getTables(null, null, "produk", null);

            if (!rs.next()) {
                // Table tidak ada, berarti first run
                showDatabaseSetupDialog();
            }

            rs.close();
            conn.close();

        } catch (SQLException e) {
            // Tidak bisa connect ke database
            showDatabaseSetupDialog();
        }
    }

    private static void showDatabaseSetupDialog() {
        String message = """
            Database belum tersetup!

            Langkah-langkah setup:
            1. Pastikan MySQL Server sudah berjalan
            2. Buka phpMyAdmin atau MySQL Workbench
            3. Import file 'database_setup.sql'
            4. Edit file 'config.properties' jika perlu (host, username, password)
            5. Restart aplikasi ini

            Apakah Anda ingin membuka panduan setup?
            """;

        int result = JOptionPane.showConfirmDialog(
            null,
            message,
            "Database Setup Required",
            JOptionPane.YES_NO_OPTION,
            JOptionPane.WARNING_MESSAGE
        );

        if (result == JOptionPane.YES_OPTION) {
            // Buka file README.txt atau URL dokumentasi
            try {
                Desktop.getDesktop().open(new File("README.txt"));
            } catch (IOException e) {
                JOptionPane.showMessageDialog(null,
                    "Silakan baca file README.txt untuk panduan setup.");
            }
        }

        System.exit(0); // Exit aplikasi
    }
}

// Main class - entry point aplikasi
public class Main {
    public static void main(String[] args) {
        // Set Look and Feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        // First run check
        FirstRunChecker.checkDatabase();

        // Show splash screen (optional)
        SplashScreen splash = new SplashScreen();
        splash.setVisible(true);

        // Simulate loading
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        splash.dispose();

        // Show login form
        SwingUtilities.invokeLater(() -> {
            FormLogin login = new FormLogin();
            login.setVisible(true);
        });
    }
}

// ===== STEP 6: AUTO-UPDATE (Advanced) =====

/**
 * Cek versi aplikasi dan notifikasi jika ada update baru.
 */
public class UpdateChecker {
    private static final String CURRENT_VERSION = "1.0.0";
    private static final String UPDATE_URL = "https://yoursite.com/tokoapp/version.txt";

    public static void checkForUpdates() {
        SwingWorker<String, Void> worker = new SwingWorker<>() {
            @Override
            protected String doInBackground() throws Exception {
                // Fetch latest version from server
                URL url = new URL(UPDATE_URL);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();

                try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()))) {

                    return reader.readLine(); // "1.0.1"
                }
            }

            @Override
            protected void done() {
                try {
                    String latestVersion = get();

                    if (!CURRENT_VERSION.equals(latestVersion)) {
                        int result = JOptionPane.showConfirmDialog(null,
                            "Update tersedia: v" + latestVersion + "\n" +
                            "Versi Anda: v" + CURRENT_VERSION + "\n\n" +
                            "Download update sekarang?",
                            "Update Available",
                            JOptionPane.YES_NO_OPTION);

                        if (result == JOptionPane.YES_OPTION) {
                            Desktop.getDesktop().browse(
                                new URI("https://yoursite.com/tokoapp/download")
                            );
                        }
                    }

                } catch (Exception e) {
                    // Gagal cek update, no problem
                }
            }
        };

        worker.execute();
    }
}`
      },
      afterCode: `<p><strong>File yang Harus Di-distribute:</strong></p>
<ul>
<li>✅ <strong>TokoApp.jar</strong> - Aplikasi utama</li>
<li>✅ <strong>lib/</strong> - Folder berisi library dependencies</li>
<li>✅ <strong>config.properties</strong> - File konfigurasi (atau akan auto-generate)</li>
<li>✅ <strong>database_setup.sql</strong> - Script untuk setup database</li>
<li>✅ <strong>README.txt</strong> - Panduan instalasi dan penggunaan</li>
<li>✅ <strong>CHANGELOG.txt</strong> - Log perubahan versi</li>
</ul>

<p><strong>README.txt Template:</strong></p>
<pre>
===========================================
 TOKO APP - Aplikasi Kasir Desktop
 Version 1.0.0
===========================================

PERSYARATAN SISTEM:
- Windows 7/8/10/11 (atau Mac/Linux)
- Java Runtime Environment (JRE) 8 atau lebih baru
- MySQL Server 5.7 atau lebih baru
- Minimal RAM 2GB
- Minimal HDD 100MB

CARA INSTALASI:
1. Install JRE dari https://java.com/download
2. Install MySQL dari https://dev.mysql.com/downloads/mysql
3. Extract file TokoApp.zip
4. Import database_setup.sql ke MySQL
5. Edit config.properties (jika perlu)
6. Double-click TokoApp.jar untuk menjalankan

USER DEFAULT:
Username: admin
Password: admin123

TROUBLESHOOTING:
- Jika aplikasi tidak jalan, pastikan Java sudah terinstall
- Jika error database, cek MySQL sudah berjalan
- Jika error koneksi, cek config.properties

KONTAK SUPPORT:
Email: support@tokoapp.com
Phone: +62 xxx xxxx xxxx

(C) 2025 TokoApp. All rights reserved.
</pre>`
    },
    {
      id: 'final-checklist',
      title: 'Final Checklist Sebelum Deploy',
      content: `Sebelum men-deploy aplikasi ke production, pastikan semua checklist ini sudah terpenuhi untuk menghindari masalah di kemudian hari.`,
      code: {
        language: 'java',
        filename: 'FinalChecklist.java',
        content: `/**
 * FINAL CHECKLIST SEBELUM DEPLOY
 *
 * Centang semua item di bawah sebelum release aplikasi!
 */

// ===== 1. CODE QUALITY =====

/* ☑ Code sudah clean dan readable?
   - Naming conventions konsisten
   - Tidak ada dead code (kode yang tidak terpakai)
   - Tidak ada komentar TODO yang belum selesai
   - Indentation konsisten
*/

// ❌ BAD: Dead code masih ada
public class ProdukService {
    public void tambahProduk(Produk p) {
        // TODO: Add validation <- Masih ada TODO!

        // Old implementation (tidak dipakai lagi)
        // if (p.getHarga() < 0) {
        //     throw new Exception();
        // }

        dao.save(p);
    }
}

// ✅ GOOD: Clean code
public class ProdukService {
    public void tambahProduk(Produk p) {
        // Validation complete
        if (p.getNama() == null || p.getNama().isEmpty()) {
            throw new IllegalArgumentException("Nama tidak boleh kosong");
        }

        if (p.getHarga() < 0) {
            throw new IllegalArgumentException("Harga tidak boleh negatif");
        }

        dao.save(p);
    }
}

// ===== 2. ERROR HANDLING =====

/* ☑ Semua exception di-handle dengan baik?
   - Tidak ada try-catch kosong
   - Error message user-friendly
   - Exception di-log untuk debugging
*/

// ❌ BAD: Silent failure
try {
    saveToDatabase();
} catch (Exception e) {
    // Kosong! Bug tersembunyi!
}

// ✅ GOOD: Proper error handling
try {
    saveToDatabase();
} catch (SQLException e) {
    logger.severe("Database error: " + e.getMessage());
    JOptionPane.showMessageDialog(null,
        "Gagal menyimpan data. Silakan coba lagi.",
        "Error",
        JOptionPane.ERROR_MESSAGE);
}

// ===== 3. SECURITY =====

/* ☑ Security checklist:
   - Password tidak di-hardcode di kode
   - Password di-hash sebelum disimpan
   - SQL Injection prevention (gunakan PreparedStatement)
   - Input validation
   - File path validation (prevent directory traversal)
*/

// ❌ BAD: Password hardcoded
public class DatabaseConfig {
    private static final String PASSWORD = "MySecretPass123"; // BAHAYA!
}

// ✅ GOOD: Password dari config file
public class DatabaseConfig {
    private static String password = AppConfig.getDbPassword();
}

// ❌ BAD: SQL Injection vulnerable
public void login(String username, String password) {
    String sql = "SELECT * FROM user WHERE username = '" + username +
                 "' AND password = '" + password + "'";
    // BAHAYA! Bisa di-inject: username = "admin' OR '1'='1"
}

// ✅ GOOD: Prepared Statement
public void login(String username, String password) {
    String sql = "SELECT * FROM user WHERE username = ? AND password = ?";

    try (PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setString(1, username);
        ps.setString(2, hashPassword(password)); // Hash password!

        ResultSet rs = ps.executeQuery();
        // Safe from SQL injection
    }
}

// ✅ GOOD: Hash password
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class SecurityUtil {
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));

            // Convert byte array to hex string
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
}

// ===== 4. RESOURCE MANAGEMENT =====

/* ☑ Resource management checklist:
   - Semua Connection di-close
   - Semua Stream di-close
   - Gunakan try-with-resources
   - Tidak ada memory leaks
*/

// ❌ BAD: Connection tidak di-close (memory leak!)
public void getData() throws SQLException {
    Connection conn = DriverManager.getConnection(...);
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery("SELECT * FROM produk");

    // Process data...

    // LUPA CLOSE! Memory leak!
}

// ✅ GOOD: Try-with-resources
public void getData() throws SQLException {
    try (Connection conn = DriverManager.getConnection(...);
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery("SELECT * FROM produk")) {

        // Process data...

    } // Auto-close semua resource!
}

// ===== 5. CONFIGURATION =====

/* ☑ Configuration checklist:
   - Database credentials dari config file, bukan hardcode
   - Config file di-ignore dari Git (.gitignore)
   - Ada config.properties.example sebagai template
*/

// config.properties.example
/*
# Database Configuration
db.host=localhost
db.port=3306
db.name=toko_db
db.user=root
db.password=

# Application Settings
app.title=Toko App
app.version=1.0.0
app.debug=false
*/

// ===== 6. TESTING =====

/* ☑ Testing checklist:
   - Test semua fitur utama
   - Test error handling (input salah, database error, dll)
   - Test di environment yang bersih (seperti komputer user)
   - Test dengan data yang banyak (performance)
   - Test semua user roles (admin, kasir, dll)
*/

public class TestingChecklist {
    public static void main(String[] args) {
        System.out.println("=== TESTING CHECKLIST ===\n");

        // Test 1: Login
        System.out.println("☑ Test login dengan user valid");
        System.out.println("☑ Test login dengan user invalid");
        System.out.println("☑ Test login dengan password salah");
        System.out.println("☑ Test login dengan field kosong\n");

        // Test 2: CRUD Produk
        System.out.println("☑ Test tambah produk");
        System.out.println("☑ Test tambah produk dengan data invalid");
        System.out.println("☑ Test edit produk");
        System.out.println("☑ Test hapus produk");
        System.out.println("☑ Test cari produk\n");

        // Test 3: Transaksi
        System.out.println("☑ Test buat transaksi normal");
        System.out.println("☑ Test buat transaksi dengan stok habis");
        System.out.println("☑ Test buat transaksi dengan bayar kurang");
        System.out.println("☑ Test print struk\n");

        // Test 4: Database Error
        System.out.println("☑ Test aplikasi saat database down");
        System.out.println("☑ Test aplikasi saat koneksi lambat");
        System.out.println("☑ Test aplikasi dengan data 1000+ records\n");

        // Test 5: UI/UX
        System.out.println("☑ Test semua button berfungsi");
        System.out.println("☑ Test keyboard shortcuts (Tab, Enter, Esc)");
        System.out.println("☑ Test window resizing");
        System.out.println("☑ Test dark mode (jika ada)\n");
    }
}

// ===== 7. DOCUMENTATION =====

/* ☑ Documentation checklist:
   - README.txt lengkap
   - JavaDoc untuk public API
   - User manual (jika perlu)
   - Database schema documentation
   - CHANGELOG.txt
*/

// CHANGELOG.txt
/*
===========================================
 CHANGELOG
===========================================

Version 1.0.0 (2025-01-15)
--------------------------
Initial Release

Features:
✨ Login system dengan role (admin, kasir)
✨ CRUD Produk
✨ CRUD Kategori
✨ Transaksi penjualan
✨ Laporan penjualan harian/bulanan
✨ Print struk
✨ Export laporan ke PDF/Excel

Bug Fixes:
🐛 N/A (initial release)

Known Issues:
⚠️ Print struk belum support semua jenis printer
⚠️ Export Excel butuh Microsoft Office terinstall

---

Version 1.0.1 (planned)
-----------------------
Planned Features:
- Barcode scanner support
- Dashboard dengan chart
- Backup/restore database
- Multi-branch support
*/

// ===== 8. PERFORMANCE =====

/* ☑ Performance checklist:
   - Aplikasi start dalam < 5 detik
   - UI tidak freeze saat operasi berat
   - Database query optimal (tidak ada N+1 query)
   - Memory usage reasonable (< 200MB untuk aplikasi kecil)
*/

// ===== 9. VERSION CONTROL =====

/* ☑ Git checklist:
   - Semua changes sudah di-commit
   - Tidak ada uncommitted changes
   - Tag versi sudah dibuat (git tag v1.0.0)
   - Push ke remote repository
*/

// Terminal:
// git status  (pastikan clean)
// git tag v1.0.0
// git push origin v1.0.0

// ===== 10. DEPLOYMENT PACKAGE =====

/* ☑ Package checklist:
   - JAR file ter-generate dengan benar
   - Semua dependencies included
   - database_setup.sql included
   - README.txt included
   - config.properties.example included
   - Semua file di-zip dengan rapi
*/

/*
TokoApp-v1.0.0.zip
├── TokoApp.jar
├── lib/
│   └── mysql-connector-java-8.0.30.jar
├── database_setup.sql
├── config.properties.example
├── README.txt
├── CHANGELOG.txt
└── LICENSE.txt
*/

// ===== FINAL CHECK =====
public class FinalDeploymentCheck {
    public static void main(String[] args) {
        System.out.println("===========================================");
        System.out.println(" FINAL DEPLOYMENT CHECKLIST");
        System.out.println("===========================================\n");

        System.out.println("☑ 1. Code quality - Clean, readable, no dead code");
        System.out.println("☑ 2. Error handling - All exceptions handled properly");
        System.out.println("☑ 3. Security - No hardcoded passwords, SQL injection safe");
        System.out.println("☑ 4. Resource management - All resources closed properly");
        System.out.println("☑ 5. Configuration - Config from file, not hardcoded");
        System.out.println("☑ 6. Testing - All features tested thoroughly");
        System.out.println("☑ 7. Documentation - README, JavaDoc, user manual complete");
        System.out.println("☑ 8. Performance - App fast, UI responsive");
        System.out.println("☑ 9. Version control - All changes committed, tagged");
        System.out.println("☑ 10. Deployment package - All files included\n");

        System.out.println("===========================================");
        System.out.println(" ✅ READY TO DEPLOY!");
        System.out.println("===========================================");
    }
}

/* SELAMAT! Aplikasi siap di-deploy ke production! 🎉 */`
      },
      afterCode: `<p><strong>Post-Deployment Tasks:</strong></p>
<ul>
<li>📝 Monitor error reports dari user</li>
<li>📊 Collect feedback untuk improvement</li>
<li>🐛 Fix bugs yang ditemukan segera</li>
<li>🔄 Plan untuk versi berikutnya</li>
<li>📚 Update dokumentasi jika ada perubahan</li>
<li>🎓 Provide training untuk user (jika perlu)</li>
</ul>

<p><strong>Version Numbering (Semantic Versioning):</strong></p>
<ul>
<li><strong>v1.0.0</strong> - MAJOR.MINOR.PATCH</li>
<li><strong>MAJOR</strong>: Breaking changes, incompatible dengan versi sebelumnya</li>
<li><strong>MINOR</strong>: New features, backward-compatible</li>
<li><strong>PATCH</strong>: Bug fixes, backward-compatible</li>
</ul>

<p><strong>Contoh:</strong></p>
<ul>
<li>v1.0.0 → Initial release</li>
<li>v1.0.1 → Bug fix</li>
<li>v1.1.0 → Tambah fitur barcode scanner</li>
<li>v2.0.0 → Redesign UI total (breaking changes)</li>
</ul>`
    }
  ]
};
