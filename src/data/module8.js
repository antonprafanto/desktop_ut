export const module8Content = {
  title: "File Handling - Baca, Tulis & Export Data",
  slug: "file-handling",
  sections: [
    {
      id: "intro-file",
      title: "Pengenalan File Handling",
      content: `
Selamat datang di modul File Handling! 📁

**Apa itu File Handling?**

File handling adalah kemampuan aplikasi untuk **membaca dan menulis file** di sistem file komputer. Ini sangat penting untuk:

✅ **Menyimpan data** tanpa database
✅ **Export data** ke Excel/CSV
✅ **Import data** dari file external
✅ **Konfigurasi aplikasi** (settings, preferences)
✅ **Logging** - Catat aktivitas aplikasi
✅ **Backup & Restore** data

**Jenis File yang Akan Dipelajari:**

**1. Text Files (.txt)**
- File text biasa
- Mudah dibaca manusia
- Cocok untuk log, notes, konfigurasi sederhana

**2. CSV (Comma-Separated Values)**
- Format untuk data tabular
- Bisa dibuka di Excel
- Cocok untuk export/import data

**3. Properties Files (.properties)**
- Menyimpan konfigurasi key=value
- Standard untuk aplikasi Java
- Mudah di-maintain

**4. Serialization (.ser)**
- Simpan object Java langsung
- Binary format (tidak bisa dibaca manusia)
- Cocok untuk save/load state aplikasi

**5. JSON/XML (Bonus)**
- Format data yang populer
- Cross-platform
- Mudah di-parse

**Class Penting dalam Java File Handling:**

\`\`\`
java.io Package:
  ├── File           - Representasi file/folder
  ├── FileReader     - Baca file text
  ├── FileWriter     - Tulis file text
  ├── BufferedReader - Baca file efisien (per baris)
  ├── BufferedWriter - Tulis file efisien
  ├── Scanner        - Baca file dengan parsing
  └── PrintWriter    - Tulis file dengan format

java.nio Package (New IO - Lebih modern):
  └── Files          - Utility untuk file operations
\`\`\`

**Path & File:**
- Windows: \`C:\\\\Users\\\\Documents\\\\data.txt\`
- Linux/Mac: \`/home/user/documents/data.txt\`
- Relative: \`data/mahasiswa.txt\` (dari folder project)
      `
    },
    {
      id: "file-basics",
      title: "File Class - Operasi Dasar File",
      content: `
**File Class** adalah representasi file atau folder dalam Java. Kita bisa cek apakah file ada, buat folder, hapus file, dll.

**Operasi Dasar dengan File Class:**
      `,
      code: {
        language: "java",
        filename: "FileBasics.java",
        code: `import java.io.File;
import java.io.IOException;

public class FileBasics {
    public static void main(String[] args) {
        // 1. Buat object File
        File file = new File("data.txt");

        // 2. Cek apakah file ada
        if (file.exists()) {
            System.out.println("✅ File sudah ada");

            // Info file
            System.out.println("Nama: " + file.getName());
            System.out.println("Path: " + file.getAbsolutePath());
            System.out.println("Ukuran: " + file.length() + " bytes");
            System.out.println("Bisa dibaca: " + file.canRead());
            System.out.println("Bisa ditulis: " + file.canWrite());

        } else {
            System.out.println("❌ File belum ada");

            // Buat file baru
            try {
                if (file.createNewFile()) {
                    System.out.println("✅ File berhasil dibuat!");
                }
            } catch (IOException e) {
                System.out.println("❌ Gagal membuat file!");
                e.printStackTrace();
            }
        }

        // 3. Buat folder
        File folder = new File("data");
        if (!folder.exists()) {
            if (folder.mkdir()) {
                System.out.println("✅ Folder 'data' berhasil dibuat!");
            }
        }

        // 4. Buat file di dalam folder
        File fileInFolder = new File("data/mahasiswa.txt");
        try {
            fileInFolder.createNewFile();
            System.out.println("✅ File di folder berhasil dibuat!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 5. List semua file di folder
        File[] files = folder.listFiles();
        if (files != null) {
            System.out.println("\\nFile di folder 'data':");
            for (File f : files) {
                System.out.println("  - " + f.getName());
            }
        }

        // 6. Hapus file (hati-hati!)
        // if (file.delete()) {
        //     System.out.println("File dihapus!");
        // }

        // 7. Rename file
        File newName = new File("data_baru.txt");
        if (file.renameTo(newName)) {
            System.out.println("✅ File berhasil direname!");
        }
    }
}`
      },
      afterCode: `
**Method Penting File Class:**

| Method | Fungsi |
|--------|--------|
| \`exists()\` | Cek file ada atau tidak |
| \`createNewFile()\` | Buat file baru |
| \`mkdir()\` | Buat folder (1 level) |
| \`mkdirs()\` | Buat folder (multi-level) |
| \`delete()\` | Hapus file/folder |
| \`renameTo()\` | Rename/move file |
| \`isFile()\` | Cek apakah file (bukan folder) |
| \`isDirectory()\` | Cek apakah folder |
| \`length()\` | Ukuran file dalam bytes |
| \`listFiles()\` | List semua file di folder |
| \`getAbsolutePath()\` | Path lengkap file |

⚠️ **PENTING:**
- \`createNewFile()\` dan \`mkdir()\` bisa throw **IOException**
- Selalu cek dengan \`exists()\` sebelum operasi
- Hati-hati dengan \`delete()\` - tidak bisa di-undo!
      `
    },
    {
      id: "write-file",
      title: "Menulis File Text",
      content: `
Ada beberapa cara menulis file di Java. Mari kita pelajari dari yang sederhana sampai yang efisien!

**Cara 1: FileWriter - Sederhana**
      `,
      code: {
        language: "java",
        filename: "WriteFileSimple.java",
        code: `import java.io.FileWriter;
import java.io.IOException;

public class WriteFileSimple {
    public static void main(String[] args) {
        String fileName = "catatan.txt";
        String content = "Ini adalah baris pertama.\\n" +
                        "Ini adalah baris kedua.\\n" +
                        "Belajar Java File Handling!";

        try (FileWriter writer = new FileWriter(fileName)) {
            writer.write(content);
            System.out.println("✅ File berhasil ditulis!");

        } catch (IOException e) {
            System.out.println("❌ Gagal menulis file!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode: `
**Cara 2: BufferedWriter - Lebih Efisien**
      `,
      code2: {
        language: "java",
        filename: "WriteFileBuffered.java",
        code: `import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileBuffered {
    public static void main(String[] args) {
        String fileName = "mahasiswa.txt";

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {

            // Tulis baris per baris
            writer.write("Daftar Mahasiswa:");
            writer.newLine(); // Baris baru
            writer.newLine();

            writer.write("1. Budi Santoso - 2024001");
            writer.newLine();

            writer.write("2. Siti Rahma - 2024002");
            writer.newLine();

            writer.write("3. Andi Wijaya - 2024003");
            writer.newLine();

            System.out.println("✅ Data mahasiswa berhasil ditulis!");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
      },
      afterCode2: `
**Cara 3: PrintWriter - Paling Mudah (Recommended)**
      `,
      additionalCode: {
        language: "java",
        filename: "WriteFilePrintWriter.java",
        content: `import java.io.PrintWriter;
import java.io.IOException;

public class WriteFilePrintWriter {
    public static void main(String[] args) {
        String fileName = "data.txt";

        try (PrintWriter writer = new PrintWriter(fileName)) {

            // Seperti System.out.println()!
            writer.println("=== DATA MAHASISWA ===");
            writer.println();

            writer.printf("Nama: %s%n", "Budi Santoso");
            writer.printf("NIM: %s%n", "2024001");
            writer.printf("IPK: %.2f%n", 3.75);

            writer.println();
            writer.println("=== END ===");

            System.out.println("✅ File berhasil ditulis dengan PrintWriter!");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
      },
      additionalContent: `
<h3>⚠️ Append vs Overwrite</h3>

<p>Secara default, <code>FileWriter</code> akan <strong>overwrite</strong> (timpa) file yang sudah ada.</p>

<p><strong>Untuk APPEND (tambahkan di akhir):</strong></p>

<pre><code class="language-java">// Append mode - data ditambahkan di akhir file
FileWriter writer = new FileWriter("data.txt", true); // true = append
writer.write("Baris baru di akhir file\\n");
</code></pre>

<h3>Perbandingan:</h3>

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Kelebihan</th>
      <th>Kapan Digunakan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>FileWriter</strong></td>
      <td>Paling sederhana</td>
      <td>Tulis string pendek</td>
    </tr>
    <tr>
      <td><strong>BufferedWriter</strong></td>
      <td>Lebih cepat untuk file besar</td>
      <td>Tulis banyak data</td>
    </tr>
    <tr>
      <td><strong>PrintWriter</strong></td>
      <td>Paling mudah (ada println, printf)</td>
      <td>Recommended untuk general purpose</td>
    </tr>
  </tbody>
</table>
      `
    },
    {
      id: "read-file",
      title: "Membaca File Text",
      content: `
**Cara 1: Scanner - Paling Mudah**
      `,
      code: {
        language: "java",
        filename: "ReadFileScanner.java",
        code: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileScanner {
    public static void main(String[] args) {
        String fileName = "mahasiswa.txt";

        try (Scanner scanner = new Scanner(new File(fileName))) {

            System.out.println("=== ISI FILE ===");

            // Baca baris per baris
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
            }

        } catch (FileNotFoundException e) {
            System.out.println("❌ File tidak ditemukan: " + fileName);
        }
    }
}`
      },
      afterCode: `
**Cara 2: BufferedReader - Lebih Efisien**
      `,
      code2: {
        language: "java",
        filename: "ReadFileBuffered.java",
        code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileBuffered {
    public static void main(String[] args) {
        String fileName = "mahasiswa.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {

            String line;
            int lineNumber = 1;

            // Baca sampai akhir file
            while ((line = reader.readLine()) != null) {
                System.out.printf("%d: %s%n", lineNumber, line);
                lineNumber++;
            }

        } catch (IOException e) {
            System.out.println("❌ Error saat membaca file!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode2: `
**Cara 3: Files.readAllLines() - Paling Praktis (Java 7+)**
      `,
      additionalCode: {
        language: "java",
        filename: "ReadFileNIO.java",
        content: `import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.List;

public class ReadFileNIO {
    public static void main(String[] args) {
        Path path = Paths.get("mahasiswa.txt");

        try {
            // Baca semua baris sekaligus ke List
            List<String> lines = Files.readAllLines(path);

            System.out.println("Total baris: " + lines.size());
            System.out.println("\\n=== ISI FILE ===");

            for (String line : lines) {
                System.out.println(line);
            }

            // Atau baca semua jadi satu String
            String content = Files.readString(path); // Java 11+
            System.out.println("\\n" + content);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
      },
      additionalContent: `
<h3>Parsing Data dari File</h3>

<p>Contoh: Baca data mahasiswa dari file dengan format: <code>NIM|Nama|IPK</code></p>
      `,
      additionalCode2: {
        language: "java",
        content: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

class Mahasiswa {
    String nim, nama;
    double ipk;

    public Mahasiswa(String nim, String nama, double ipk) {
        this.nim = nim;
        this.nama = nama;
        this.ipk = ipk;
    }

    @Override
    public String toString() {
        return String.format("%s - %s (IPK: %.2f)", nim, nama, ipk);
    }
}

public class ParseFile {
    public static void main(String[] args) {
        List<Mahasiswa> listMahasiswa = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader("data_mahasiswa.txt"))) {

            String line;
            while ((line = reader.readLine()) != null) {
                // Skip baris kosong atau komentar
                if (line.trim().isEmpty() || line.startsWith("#")) {
                    continue;
                }

                // Parse: 2024001|Budi Santoso|3.75
                String[] parts = line.split("\\\\|");

                if (parts.length == 3) {
                    String nim = parts[0].trim();
                    String nama = parts[1].trim();
                    double ipk = Double.parseDouble(parts[2].trim());

                    listMahasiswa.add(new Mahasiswa(nim, nama, ipk));
                }
            }

            // Tampilkan hasil
            System.out.println("=== DATA MAHASISWA ===");
            for (Mahasiswa mhs : listMahasiswa) {
                System.out.println(mhs);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
      }
    },
    {
      id: "csv-handling",
      title: "Export & Import CSV",
      content: `
**CSV (Comma-Separated Values)** adalah format file yang sangat populer untuk data tabular. Bisa dibuka di Excel!

**Format CSV:**
\`\`\`csv
NIM,Nama,Jurusan,IPK
2024001,Budi Santoso,Teknik Informatika,3.75
2024002,Siti Rahma,Sistem Informasi,3.82
2024003,Andi Wijaya,Teknik Informatika,3.45
\`\`\`

**Export Data ke CSV**
      `,
      code: {
        language: "java",
        filename: "ExportToCSV.java",
        code: `import java.io.PrintWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

class Mahasiswa {
    String nim, nama, jurusan;
    double ipk;

    public Mahasiswa(String nim, String nama, String jurusan, double ipk) {
        this.nim = nim;
        this.nama = nama;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    // Convert ke CSV format
    public String toCSV() {
        return String.format("%s,%s,%s,%.2f", nim, nama, jurusan, ipk);
    }
}

public class ExportToCSV {
    public static void main(String[] args) {
        // Data mahasiswa
        List<Mahasiswa> listMahasiswa = new ArrayList<>();
        listMahasiswa.add(new Mahasiswa("2024001", "Budi Santoso", "Teknik Informatika", 3.75));
        listMahasiswa.add(new Mahasiswa("2024002", "Siti Rahma", "Sistem Informasi", 3.82));
        listMahasiswa.add(new Mahasiswa("2024003", "Andi Wijaya", "Teknik Informatika", 3.45));

        String fileName = "data_mahasiswa.csv";

        try (PrintWriter writer = new PrintWriter(fileName)) {

            // Header CSV
            writer.println("NIM,Nama,Jurusan,IPK");

            // Data rows
            for (Mahasiswa mhs : listMahasiswa) {
                writer.println(mhs.toCSV());
            }

            System.out.println("✅ Data berhasil di-export ke " + fileName);
            System.out.println("Buka file dengan Excel untuk melihat hasilnya!");

        } catch (IOException e) {
            System.out.println("❌ Gagal export data!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode: `
**Import Data dari CSV**
      `,
      code2: {
        language: "java",
        filename: "ImportFromCSV.java",
        code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ImportFromCSV {
    public static void main(String[] args) {
        String fileName = "data_mahasiswa.csv";
        List<Mahasiswa> listMahasiswa = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {

            // Skip header (baris pertama)
            String header = reader.readLine();
            System.out.println("Header: " + header);

            String line;
            int count = 0;

            while ((line = reader.readLine()) != null) {
                // Parse CSV: 2024001,Budi Santoso,Teknik Informatika,3.75
                String[] data = line.split(",");

                if (data.length == 4) {
                    String nim = data[0].trim();
                    String nama = data[1].trim();
                    String jurusan = data[2].trim();
                    double ipk = Double.parseDouble(data[3].trim());

                    Mahasiswa mhs = new Mahasiswa(nim, nama, jurusan, ipk);
                    listMahasiswa.add(mhs);
                    count++;
                }
            }

            System.out.println("\\n✅ Berhasil import " + count + " data mahasiswa!");

            // Tampilkan data
            System.out.println("\\n=== DATA MAHASISWA ===");
            for (Mahasiswa mhs : listMahasiswa) {
                System.out.printf("%s | %s | %s | %.2f%n",
                    mhs.nim, mhs.nama, mhs.jurusan, mhs.ipk);
            }

        } catch (IOException e) {
            System.out.println("❌ Gagal import data!");
            e.printStackTrace();
        } catch (NumberFormatException e) {
            System.out.println("❌ Format IPK tidak valid!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode2: `
**Handle CSV dengan Koma dalam Data**

Masalah: Kalau data ada koma, parsing jadi error.
Contoh: \`"Budi, S.Kom"\` → akan di-split jadi 2 kolom!

**Solusi:** Gunakan quotes untuk data yang ada koma:
\`\`\`csv
NIM,Nama,Jurusan,IPK
2024001,"Budi Santoso, S.Kom","Teknik Informatika",3.75
\`\`\`

**Library Recommended untuk CSV Complex:**
- **OpenCSV** - https://opencsv.sourceforge.net/
- **Apache Commons CSV** - https://commons.apache.org/proper/commons-csv/

Untuk project sederhana, split manual sudah cukup!
      `
    },
    {
      id: "properties-file",
      title: "Properties File - Konfigurasi Aplikasi",
      content: `
**Properties File** adalah cara standard Java untuk menyimpan konfigurasi aplikasi dalam format **key=value**.

**Format properties:**
\`\`\`properties
# Database Configuration
db.url=jdbc:mysql://localhost:3306/java_belajar
db.username=root
db.password=root123

# Application Settings
app.name=Aplikasi Mahasiswa
app.version=1.0.0
app.theme=dark
\`\`\`

**Menulis Properties File**
      `,
      code: {
        language: "java",
        filename: "WriteProperties.java",
        code: `import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class WriteProperties {
    public static void main(String[] args) {
        Properties prop = new Properties();

        // Set properties
        prop.setProperty("db.url", "jdbc:mysql://localhost:3306/java_belajar");
        prop.setProperty("db.username", "root");
        prop.setProperty("db.password", "root123");
        prop.setProperty("app.name", "Aplikasi Mahasiswa");
        prop.setProperty("app.version", "1.0.0");

        String fileName = "config.properties";

        try (FileOutputStream output = new FileOutputStream(fileName)) {

            // Simpan ke file dengan komentar
            prop.store(output, "Database & Application Configuration");

            System.out.println("✅ Config berhasil disimpan ke " + fileName);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
      },
      afterCode: `
**Membaca Properties File**
      `,
      code2: {
        language: "java",
        filename: "ReadProperties.java",
        code: `import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ReadProperties {
    public static void main(String[] args) {
        Properties prop = new Properties();
        String fileName = "config.properties";

        try (FileInputStream input = new FileInputStream(fileName)) {

            // Load properties dari file
            prop.load(input);

            // Baca property
            String dbUrl = prop.getProperty("db.url");
            String dbUser = prop.getProperty("db.username");
            String dbPassword = prop.getProperty("db.password");
            String appName = prop.getProperty("app.name");
            String appVersion = prop.getProperty("app.version");

            // Tampilkan
            System.out.println("=== KONFIGURASI APLIKASI ===");
            System.out.println("Nama Aplikasi: " + appName);
            System.out.println("Versi: " + appVersion);
            System.out.println();
            System.out.println("=== DATABASE CONFIG ===");
            System.out.println("URL: " + dbUrl);
            System.out.println("Username: " + dbUser);
            System.out.println("Password: " + dbPassword);

            // Property dengan default value
            String theme = prop.getProperty("app.theme", "light"); // default: light
            System.out.println("\\nTheme: " + theme);

        } catch (IOException e) {
            System.out.println("❌ Gagal membaca config file!");
            e.printStackTrace();
        }
    }
}`
      },
      afterCode2: `
**Class ConfigManager - Best Practice**
      `,
      additionalCode: {
        language: "java",
        filename: "ConfigManager.java",
        content: `import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigManager {
    private static final String CONFIG_FILE = "app.properties";
    private static Properties properties;

    // Load config saat pertama kali dipanggil
    static {
        properties = new Properties();
        try (FileInputStream input = new FileInputStream(CONFIG_FILE)) {
            properties.load(input);
        } catch (IOException e) {
            System.out.println("Config file tidak ditemukan, menggunakan default.");
            setDefaultConfig();
        }
    }

    // Get config value
    public static String get(String key) {
        return properties.getProperty(key);
    }

    // Get dengan default value
    public static String get(String key, String defaultValue) {
        return properties.getProperty(key, defaultValue);
    }

    // Set config value
    public static void set(String key, String value) {
        properties.setProperty(key, value);
    }

    // Save config ke file
    public static void save() {
        try (FileOutputStream output = new FileOutputStream(CONFIG_FILE)) {
            properties.store(output, "Application Configuration");
            System.out.println("✅ Config berhasil disimpan!");
        } catch (IOException e) {
            System.out.println("❌ Gagal menyimpan config!");
            e.printStackTrace();
        }
    }

    // Set default config
    private static void setDefaultConfig() {
        properties.setProperty("db.url", "jdbc:mysql://localhost:3306/db");
        properties.setProperty("db.username", "root");
        properties.setProperty("db.password", "");
        properties.setProperty("app.theme", "light");
    }

    // Test
    public static void main(String[] args) {
        // Cara pakai
        String dbUrl = ConfigManager.get("db.url");
        System.out.println("DB URL: " + dbUrl);

        // Update config
        ConfigManager.set("app.theme", "dark");
        ConfigManager.save();
    }
}`
      }
    },
    {
      id: "serialization",
      title: "Object Serialization - Save Object ke File",
      content: `
**Serialization** adalah proses convert object Java menjadi byte stream yang bisa disimpan ke file atau dikirim via network.

**Kapan Digunakan:**
- Save/Load state aplikasi
- Save game progress
- Cache data object
- Kirim object via network

**Cara Kerja:**
\`\`\`
Object Java → Serialize → File .ser → Deserialize → Object Java
\`\`\`

**Contoh: Save & Load Object Mahasiswa**
      `,
      code: {
        language: "java",
        filename: "MahasiswaSerializable.java",
        code: `import java.io.*;

// Class harus implement Serializable
class Mahasiswa implements Serializable {
    // serialVersionUID untuk version control
    private static final long serialVersionUID = 1L;

    private String nim;
    private String nama;
    private String jurusan;
    private double ipk;

    public Mahasiswa(String nim, String nama, String jurusan, double ipk) {
        this.nim = nim;
        this.nama = nama;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    @Override
    public String toString() {
        return String.format("%s - %s (%s) - IPK: %.2f", nim, nama, jurusan, ipk);
    }

    // Getters
    public String getNim() { return nim; }
    public String getNama() { return nama; }
    public String getJurusan() { return jurusan; }
    public double getIpk() { return ipk; }
}

public class SerializationExample {
    public static void main(String[] args) {
        // 1. SAVE OBJECT
        Mahasiswa mhs = new Mahasiswa("2024001", "Budi Santoso",
            "Teknik Informatika", 3.75);

        String fileName = "mahasiswa.ser";

        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(fileName))) {

            oos.writeObject(mhs);
            System.out.println("✅ Object berhasil disimpan ke " + fileName);

        } catch (IOException e) {
            e.printStackTrace();
        }

        // 2. LOAD OBJECT
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(fileName))) {

            Mahasiswa loaded = (Mahasiswa) ois.readObject();
            System.out.println("\\n✅ Object berhasil dimuat!");
            System.out.println("Data: " + loaded);

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`
      },
      afterCode: `
**Save Multiple Objects (List)**
      `,
      code2: {
        language: "java",
        filename: "SerializeList.java",
        code: `import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class SerializeList {
    public static void main(String[] args) {
        // Buat list mahasiswa
        List<Mahasiswa> listMahasiswa = new ArrayList<>();
        listMahasiswa.add(new Mahasiswa("2024001", "Budi", "TI", 3.75));
        listMahasiswa.add(new Mahasiswa("2024002", "Siti", "SI", 3.82));
        listMahasiswa.add(new Mahasiswa("2024003", "Andi", "TI", 3.45));

        String fileName = "data_mahasiswa.ser";

        // SAVE List
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(fileName))) {

            oos.writeObject(listMahasiswa);
            System.out.println("✅ List berhasil disimpan!");

        } catch (IOException e) {
            e.printStackTrace();
        }

        // LOAD List
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(fileName))) {

            @SuppressWarnings("unchecked")
            List<Mahasiswa> loaded = (List<Mahasiswa>) ois.readObject();

            System.out.println("\\n✅ List berhasil dimuat!");
            System.out.println("Total data: " + loaded.size());

            for (Mahasiswa mhs : loaded) {
                System.out.println("  - " + mhs);
            }

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`
      },
      afterCode2: `
**transient Keyword - Field yang Tidak Disimpan**

Kalau ada field yang tidak mau di-save (misal: password):
\`\`\`java
class User implements Serializable {
    private String username;
    private transient String password; // Tidak akan di-serialize!

    // ...
}
\`\`\`

**⚠️ Catatan:**
- File .ser adalah **binary**, tidak bisa dibaca manusia
- Class harus **implement Serializable**
- Kalau class berubah (tambah field), bisa error saat load (gunakan serialVersionUID)
- Untuk data yang perlu dibaca manusia, lebih baik pakai CSV/JSON
      `
    },
    {
      id: "file-chooser",
      title: "JFileChooser - Dialog Pilih File",
      content: `
**JFileChooser** adalah dialog GUI untuk memilih file atau folder. Seperti dialog "Open File" dan "Save File" di aplikasi pada umumnya.

**Open File Dialog**
      `,
      code: {
        language: "java",
        filename: "FileChooserExample.java",
        code: `import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class FileChooserExample extends JFrame {
    private JTextArea textArea;

    public FileChooserExample() {
        setTitle("File Chooser Demo");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Text area untuk display isi file
        textArea = new JTextArea();
        textArea.setEditable(false);
        add(new JScrollPane(textArea), "Center");

        // Menu bar
        JMenuBar menuBar = new JMenuBar();
        JMenu menuFile = new JMenu("File");

        JMenuItem itemOpen = new JMenuItem("Open File");
        itemOpen.addActionListener(e -> openFile());
        menuFile.add(itemOpen);

        JMenuItem itemSave = new JMenuItem("Save File");
        itemSave.addActionListener(e -> saveFile());
        menuFile.add(itemSave);

        menuBar.add(menuFile);
        setJMenuBar(menuBar);
    }

    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();

        // Set dialog title
        fileChooser.setDialogTitle("Pilih File untuk Dibuka");

        // Filter file type (optional)
        fileChooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter(
            "Text Files (*.txt)", "txt"));

        // Tampilkan dialog
        int result = fileChooser.showOpenDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try {
                // Baca isi file
                String content = Files.readString(file.toPath());
                textArea.setText(content);

                JOptionPane.showMessageDialog(this,
                    "File berhasil dibuka!\\n" + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "Gagal membaca file!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void saveFile() {
        JFileChooser fileChooser = new JFileChooser();

        // Set default filename
        fileChooser.setSelectedFile(new File("untitled.txt"));

        // Tampilkan Save dialog
        int result = fileChooser.showSaveDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            // Cek apakah file sudah ada
            if (file.exists()) {
                int confirm = JOptionPane.showConfirmDialog(this,
                    "File sudah ada. Timpa?",
                    "Konfirmasi", JOptionPane.YES_NO_OPTION);

                if (confirm != JOptionPane.YES_OPTION) {
                    return;
                }
            }

            try {
                // Tulis isi text area ke file
                Files.writeString(file.toPath(), textArea.getText());

                JOptionPane.showMessageDialog(this,
                    "File berhasil disimpan!\\n" + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "Gagal menyimpan file!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new FileChooserExample().setVisible(true);
        });
    }
}`
      },
      afterCode: `
**Customize JFileChooser:**
      `,
      code2: {
        language: "java",
        content: `JFileChooser fileChooser = new JFileChooser();

// 1. Set direktori awal
fileChooser.setCurrentDirectory(new File(System.getProperty("user.home")));

// 2. Filter multiple extensions
FileNameExtensionFilter filter = new FileNameExtensionFilter(
    "Images (*.jpg, *.png, *.gif)", "jpg", "png", "gif");
fileChooser.setFileFilter(filter);

// 3. Pilih folder (bukan file)
fileChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);

// 4. Multi-select files
fileChooser.setMultiSelectionEnabled(true);

int result = fileChooser.showOpenDialog(parent);
if (result == JFileChooser.APPROVE_OPTION) {
    File[] files = fileChooser.getSelectedFiles();
    for (File file : files) {
        System.out.println("File: " + file.getName());
    }
}`
      }
    },
    {
      id: "praktik-lengkap",
      title: "Praktik: Aplikasi CRUD dengan Export/Import",
      content: `
Sekarang kita buat aplikasi lengkap yang menggabungkan Database + File Handling!

**Mini Project: Aplikasi Mahasiswa dengan Export/Import CSV**

Fitur:
- CRUD mahasiswa (database)
- Export data ke CSV
- Import data dari CSV
- Backup data (serialization)
- Restore data dari backup
      `,
      code: {
        language: "java",
        filename: "MahasiswaExportImport.java",
        code: `import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.List;

public class MahasiswaExportImport extends JFrame {
    private MahasiswaDAO dao;

    public MahasiswaExportImport() {
        dao = new MahasiswaDAO();

        setTitle("Aplikasi Mahasiswa - Export/Import");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Menu bar
        JMenuBar menuBar = new JMenuBar();

        JMenu menuFile = new JMenu("File");
        JMenuItem itemExport = new JMenuItem("Export to CSV");
        JMenuItem itemImport = new JMenuItem("Import from CSV");
        JMenuItem itemBackup = new JMenuItem("Backup Data");
        JMenuItem itemRestore = new JMenuItem("Restore Data");

        itemExport.addActionListener(e -> exportToCSV());
        itemImport.addActionListener(e -> importFromCSV());
        itemBackup.addActionListener(e -> backupData());
        itemRestore.addActionListener(e -> restoreData());

        menuFile.add(itemExport);
        menuFile.add(itemImport);
        menuFile.addSeparator();
        menuFile.add(itemBackup);
        menuFile.add(itemRestore);

        menuBar.add(menuFile);
        setJMenuBar(menuBar);

        // Content
        JLabel label = new JLabel("Gunakan menu File untuk Export/Import data",
            SwingConstants.CENTER);
        add(label, BorderLayout.CENTER);
    }

    private void exportToCSV() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setSelectedFile(new File("mahasiswa_export.csv"));

        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (PrintWriter writer = new PrintWriter(file)) {

                // Header
                writer.println("NIM,Nama,Jurusan,IPK");

                // Data dari database
                List<Mahasiswa> list = dao.getAll();
                for (Mahasiswa mhs : list) {
                    writer.printf("%s,%s,%s,%.2f%n",
                        mhs.getNim(), mhs.getNama(),
                        mhs.getJurusan(), mhs.getIpk());
                }

                JOptionPane.showMessageDialog(this,
                    "✅ Export berhasil!\\n" +
                    "Total: " + list.size() + " data\\n" +
                    "File: " + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Export gagal!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void importFromCSV() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter(
            "CSV Files", "csv"));

        if (fileChooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {

                // Skip header
                reader.readLine();

                int count = 0;
                String line;

                while ((line = reader.readLine()) != null) {
                    String[] data = line.split(",");

                    if (data.length == 4) {
                        Mahasiswa mhs = new Mahasiswa(
                            data[1].trim(), // nama
                            data[0].trim(), // nim
                            data[2].trim(), // jurusan
                            Double.parseDouble(data[3].trim()) // ipk
                        );

                        if (dao.insert(mhs)) {
                            count++;
                        }
                    }
                }

                JOptionPane.showMessageDialog(this,
                    "✅ Import berhasil!\\n" +
                    "Total: " + count + " data ditambahkan");

            } catch (IOException | NumberFormatException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Import gagal!\\nCek format CSV!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void backupData() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setSelectedFile(new File("backup_mahasiswa.ser"));

        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {

                List<Mahasiswa> list = dao.getAll();
                oos.writeObject(list);

                JOptionPane.showMessageDialog(this,
                    "✅ Backup berhasil!\\n" +
                    "Total: " + list.size() + " data\\n" +
                    "File: " + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Backup gagal!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void restoreData() {
        int confirm = JOptionPane.showConfirmDialog(this,
            "Restore akan menimpa data yang ada.\\nLanjutkan?",
            "Konfirmasi", JOptionPane.YES_NO_OPTION);

        if (confirm != JOptionPane.YES_OPTION) return;

        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter(
            "Serialized Files", "ser"));

        if (fileChooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {

                @SuppressWarnings("unchecked")
                List<Mahasiswa> list = (List<Mahasiswa>) ois.readObject();

                int count = 0;
                for (Mahasiswa mhs : list) {
                    if (dao.insert(mhs)) {
                        count++;
                    }
                }

                JOptionPane.showMessageDialog(this,
                    "✅ Restore berhasil!\\n" +
                    "Total: " + count + " data dipulihkan");

            } catch (IOException | ClassNotFoundException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Restore gagal!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new MahasiswaExportImport().setVisible(true);
        });
    }
}

// Note: Pastikan class Mahasiswa implement Serializable!
// class Mahasiswa implements Serializable { ... }`
      },
      afterCode: `
**Fitur yang Sudah Diimplementasikan:**
✅ Export data dari database ke CSV (bisa dibuka di Excel)
✅ Import data dari CSV ke database
✅ Backup semua data ke file binary (.ser)
✅ Restore data dari backup
✅ JFileChooser untuk pilih lokasi file
✅ Validasi & error handling

Aplikasi ini sudah production-ready dan sangat berguna!
      `
    },
    {
      id: "summary-file",
      title: "Rangkuman Modul File Handling",
      content: `
**🎯 Yang Sudah Dipelajari:**

**1. File Basics**
- File class - Operasi dasar (create, delete, rename, check exists)
- Folder operations (mkdir, list files)
- Path handling

**2. Write File**
- FileWriter - Sederhana
- BufferedWriter - Efisien
- PrintWriter - Paling mudah (recommended)
- Append vs Overwrite mode

**3. Read File**
- Scanner - Mudah untuk beginners
- BufferedReader - Efisien, baca per baris
- Files.readAllLines() - Modern & praktis (Java 7+)

**4. CSV Handling**
- Export data ke CSV (bisa dibuka Excel)
- Import data dari CSV
- Parse dengan split(",")

**5. Properties File**
- Simpan konfigurasi app (key=value)
- Properties class (load, store)
- ConfigManager pattern

**6. Object Serialization**
- Save object ke file binary (.ser)
- Serializable interface
- ObjectOutputStream & ObjectInputStream
- transient keyword

**7. GUI Integration**
- JFileChooser - Dialog pilih file
- Open & Save dialog
- File filter & multi-select

<div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <h4>✅ Checklist Kemampuan:</h4>
  <p>Setelah modul ini, Anda harus bisa:</p>
  <ul>
    <li>✅ Membaca dan menulis file text</li>
    <li>✅ Export data ke CSV</li>
    <li>✅ Import data dari CSV</li>
    <li>✅ Simpan konfigurasi aplikasi dengan Properties</li>
    <li>✅ Serialize & deserialize object</li>
    <li>✅ Gunakan JFileChooser di aplikasi GUI</li>
    <li>✅ Backup & restore data aplikasi</li>
    <li>✅ Handle IOException dengan baik</li>
  </ul>
</div>

**📚 Best Practices File Handling:**

1. **Selalu gunakan try-with-resources**
   \`\`\`java
   try (BufferedReader reader = new BufferedReader(...)) {
       // Auto close!
   }
   \`\`\`

2. **Cek file exists sebelum operasi**
   \`\`\`java
   if (file.exists()) {
       // Safe to read
   }
   \`\`\`

3. **Handle IOException**
   - Semua file operation bisa throw IOException
   - Berikan pesan error yang jelas ke user

4. **Validasi data saat import**
   - Cek format data
   - Handle NumberFormatException
   - Skip baris yang invalid

5. **Gunakan path yang portable**
   \`\`\`java
   // ❌ Jangan hardcode path
   File file = new File("C:\\\\\\\\Users\\\\\\\\...\\\\\\\\data.txt");

   // ✅ Gunakan relative path atau user.home
   File file = new File("data/mahasiswa.txt");
   String home = System.getProperty("user.home");
   \`\`\`

**Common Use Cases:**
- 📋 Export report ke Excel (CSV)
- ⚙️ Save user preferences
- 💾 Backup & restore application data
- 📝 Logging aplikasi
- 📊 Import data dari external source

<div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <h4>🚀 Langkah Selanjutnya:</h4>
  <p>Anda sudah menguasai GUI + Database + File Handling!</p>
  <p>Tinggal 3 modul lagi untuk menyelesaikan course:</p>
  <ul>
    <li><strong>Modul 9:</strong> Exception Handling & Debugging</li>
    <li><strong>Modul 10:</strong> Best Practices & Deployment</li>
    <li><strong>Modul 11:</strong> Project Akhir - Aplikasi CRUD Professional</li>
  </ul>
</div>

**💡 Project Ideas untuk Praktek:**
1. Aplikasi To-Do List dengan save/load ke file
2. Contact Manager dengan export ke CSV
3. Simple Text Editor dengan save/open file
4. Application Logger - catat semua aktivitas ke log file
5. Settings Manager - simpan preferences user

**Selamat!** File Handling adalah skill penting yang membuat aplikasi Anda lebih powerful! 🎉
      `
    }
  ]
};
