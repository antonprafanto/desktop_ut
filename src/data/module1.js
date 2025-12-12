export const module1Content = {
  title: "Pengenalan Pemrograman Desktop & Setup",
  sections: [
    {
      id: "intro",
      title: "Apa itu Aplikasi Desktop?",
      content: `
Aplikasi desktop adalah program komputer yang dijalankan secara lokal di komputer atau laptop Anda,
tidak seperti aplikasi web yang berjalan di browser. Contoh aplikasi desktop yang sering Anda gunakan:

- **Microsoft Word** - Pengolah kata
- **Adobe Photoshop** - Editor gambar
- **VLC Media Player** - Pemutar video
- **Visual Studio Code** - Editor kode
- **NetBeans IDE** - Yang akan kita gunakan!

Aplikasi desktop memiliki beberapa keunggulan:
- **Performa lebih cepat** karena berjalan langsung di sistem
- **Akses penuh ke hardware** (file system, printer, dll)
- **Bisa berjalan offline** tanpa koneksi internet
- **Keamanan data** karena tersimpan lokal
      `,
    },
    {
      id: "comparison",
      title: "Perbedaan Desktop vs Web vs Mobile",
      content: `
Mari kita bandingkan ketiga jenis aplikasi ini:

| Aspek | Desktop | Web | Mobile |
|-------|---------|-----|--------|
| **Platform** | Windows, Mac, Linux | Browser (Chrome, Firefox) | Android, iOS |
| **Instalasi** | Perlu install | Tidak perlu install | Install dari store |
| **Update** | Manual/otomatis | Otomatis | Dari app store |
| **Akses Offline** | ✅ Ya | ❌ Terbatas | ✅ Ya |
| **Performa** | ⚡ Sangat cepat | 🐢 Tergantung koneksi | ⚡ Cepat |
| **Akses Hardware** | ✅ Penuh | ❌ Terbatas | ⚙️ Terbatas (API) |

**Kapan menggunakan Desktop App?**
- Aplikasi yang membutuhkan performa tinggi (editing video, 3D rendering)
- Aplikasi yang perlu akses penuh ke file system
- Aplikasi yang harus berjalan offline
- Aplikasi enterprise/internal perusahaan
      `,
    },
    {
      id: "why-java",
      title: "Kenapa Java untuk Desktop?",
      content: `
Java adalah pilihan yang sangat baik untuk pemrograman desktop, terutama untuk pemula. Berikut alasannya:

**1. Cross-Platform (Write Once, Run Anywhere)**
   - Aplikasi Java bisa berjalan di Windows, Mac, dan Linux
   - Tidak perlu compile ulang untuk setiap OS

**2. Mudah Dipelajari**
   - Sintaks yang jelas dan terstruktur
   - Dokumentasi lengkap
   - Banyak tutorial dan komunitas besar

**3. GUI Framework Mature**
   - Java Swing - Framework GUI yang sudah teruji
   - NetBeans GUI Builder - Drag & drop visual designer

**4. Gratis dan Open Source**
   - JDK (Java Development Kit) gratis
   - NetBeans IDE gratis
   - Library dan tools gratis

**5. Dipakai di Industri**
   - Banyak perusahaan menggunakan Java
   - Skill yang marketable
   - Banyak lowongan kerja

**Contoh Aplikasi Desktop Java:**
- NetBeans IDE
- IntelliJ IDEA
- Eclipse IDE
- Android Studio (berbasis IntelliJ)
      `,
    },
    {
      id: "setup-jdk",
      title: "Download & Install JDK",
      content: `
**JDK (Java Development Kit)** adalah toolkit yang berisi semua yang Anda butuhkan untuk membuat aplikasi Java.

### Langkah-langkah Install JDK:

**1. Download JDK**
   - Kunjungi: [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)
   - Pilih versi: **JDK 17 LTS** atau **JDK 21 LTS** (Long Term Support)
   - Pilih sesuai OS Anda:
     - Windows: x64 Installer
     - Mac: macOS Installer
     - Linux: .deb atau .rpm

**2. Install JDK**
   - Jalankan installer yang sudah didownload
   - Ikuti wizard instalasi
   - Default location: \`C:\\Program Files\\Java\\jdk-17\` (Windows)
   - Klik Next > Next > Finish

**3. Verifikasi Instalasi**
   Buka Command Prompt (Windows) atau Terminal (Mac/Linux), ketik:
      `,
      code: {
        language: 'bash',
        code: `java -version`,
      },
      afterCode: `
Output yang diharapkan:
      `,
      code2: {
        language: 'text',
        code: `java version "17.0.x"
Java(TM) SE Runtime Environment (build 17.0.x)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.x)`,
      },
      afterCode2: `
Jika muncul output seperti di atas, berarti JDK sudah terinstall dengan benar! ✅

**Troubleshooting:**
- Jika muncul error "java is not recognized", Anda perlu set JAVA_HOME dan PATH
- Restart komputer setelah install
- Google: "how to set JAVA_HOME" + OS Anda
      `,
    },
    {
      id: "setup-netbeans",
      title: "Download & Install NetBeans IDE",
      content: `
**NetBeans** adalah IDE (Integrated Development Environment) yang sangat cocok untuk pemula karena memiliki GUI Builder visual.

### Langkah-langkah Install NetBeans:

**1. Download NetBeans**
   - Kunjungi: [https://netbeans.apache.org/download/](https://netbeans.apache.org/download/)
   - Pilih versi terbaru (misal: NetBeans 19)
   - Download installer untuk OS Anda

**2. Install NetBeans**
   - Jalankan installer
   - Pastikan JDK sudah terdeteksi
   - Pilih komponen: **Java SE** (minimal)
   - Klik Next > Install
   - Tunggu proses instalasi (5-10 menit)

**3. Jalankan NetBeans**
   - Buka NetBeans dari Start Menu (Windows) atau Applications (Mac)
   - Tunggu NetBeans loading (pertama kali agak lama)
   - Jika ada update tersedia, update nanti saja

**Tampilan NetBeans:**
Ketika pertama kali dibuka, Anda akan melihat:
- **Menu Bar** - File, Edit, View, dll
- **Toolbar** - Tombol-tombol shortcut
- **Projects Panel** - Daftar project Anda
- **Editor Area** - Tempat menulis code
- **Output Panel** - Hasil compile/run program

Tips: Biasakan dengan tampilan NetBeans, karena ini akan menjadi "rumah" Anda selama belajar! 🏡
      `,
    },
    {
      id: "first-project",
      title: "Membuat Project Java Pertama",
      content: `
Mari kita buat project Java pertama! Ikuti langkah-langkah ini dengan hati-hati:

### Langkah 1: New Project
1. Buka NetBeans
2. Klik **File > New Project** (atau Ctrl+Shift+N)
3. Pilih **Categories: Java with Maven**
4. Pilih **Projects: Java Application**
5. Klik **Next**

### Langkah 2: Configure Project
1. **Project Name:** HelloJava
2. **Project Location:** Pilih folder di Documents Anda
3. **Create Main Class:** ✅ Centang (otomatis membuat class Main)
4. Klik **Finish**

### Langkah 3: Explore Project
Setelah project dibuat, Anda akan melihat struktur seperti ini:

\`\`\`
HelloJava/
├── Source Packages
│   └── com.mycompany.hellojava
│       └── HelloJava.java  ← File utama kita
├── Libraries
│   └── JDK 17
└── pom.xml
\`\`\`

**Penjelasan:**
- **Source Packages** - Tempat kode Java Anda
- **Libraries** - Library/dependency yang digunakan
- **pom.xml** - File konfigurasi Maven (ignore dulu)

### Langkah 4: Lihat Code
Double-click **HelloJava.java**, Anda akan melihat code template:
      `,
      code: {
        language: 'java',
        filename: 'HelloJava.java',
        code: `package com.mycompany.hellojava;

public class HelloJava {

    public static void main(String[] args) {
        // TODO code application logic here
    }
}`,
      },
      afterCode: `
**Penjelasan Code:**
- \`package\` - Organisasi code (seperti folder)
- \`public class HelloJava\` - Nama class (harus sama dengan nama file)
- \`public static void main\` - Method utama, entry point program
- \`// TODO\` - Komentar, diabaikan saat dijalankan

Selamat! Anda sudah membuat project Java pertama! 🎉
      `,
    },
    {
      id: "hello-world",
      title: "Menjalankan Program Hello World",
      content: `
Sekarang saatnya menulis code pertama dan menjalankannya!

### Langkah 1: Edit Code
Ganti comment \`// TODO\` dengan code ini:
      `,
      code: {
        language: 'java',
        filename: 'HelloJava.java',
        code: `package com.mycompany.hellojava;

public class HelloJava {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        System.out.println("Selamat datang di dunia Java!");
        System.out.println("Nama saya: [isi nama Anda]");
    }
}`,
      },
      afterCode: `
**Penjelasan:**
- \`System.out.println()\` - Mencetak text ke console
- Text harus di dalam tanda kutip \`"..."\`
- Setiap statement diakhiri dengan \`;\`

### Langkah 2: Run Program
Ada beberapa cara run program:

**Cara 1:** Klik kanan file > Run File (Shift+F6)
**Cara 2:** Klik tombol ▶️ hijau di toolbar
**Cara 3:** Tekan F6

### Langkah 3: Lihat Output
Setelah run, lihat panel **Output** di bawah. Anda akan melihat:
      `,
      code2: {
        language: 'text',
        code: `Hello World!
Selamat datang di dunia Java!
Nama saya: [isi nama Anda]
BUILD SUCCESS`,
      },
      afterCode2: `
**BUILD SUCCESS** artinya program Anda berhasil dijalankan! 🎉

### Latihan Mandiri:
1. Coba ganti text dalam \`println()\`
2. Tambahkan lebih banyak baris \`println()\`
3. Apa yang terjadi jika Anda lupa tanda \`;\`?
4. Apa yang terjadi jika Anda lupa tanda kutip \`"\`?

**Tips:** Jangan takut untuk bereksperimen dan membuat error!
Error adalah guru terbaik dalam programming. 💪
      `,
    },
    {
      id: "summary",
      title: "Ringkasan Modul 1",
      content: `
Selamat! Anda telah menyelesaikan Modul 1! 🎊

**Yang sudah Anda pelajari:**
✅ Apa itu aplikasi desktop
✅ Perbedaan desktop, web, dan mobile
✅ Kenapa Java cocok untuk desktop
✅ Install JDK dan NetBeans
✅ Membuat project Java pertama
✅ Menulis dan menjalankan program Hello World

**Next Steps:**
Di modul berikutnya, kita akan belajar:
- Variabel dan tipe data
- Input dari user
- Operator matematika
- Dan banyak lagi!

**Tips Belajar:**
- Practice makes perfect! Jangan hanya baca, tapi ketik ulang codenya
- Jika ada error, baca pesan errornya dengan teliti
- Google adalah teman terbaik programmer
- Jangan skip modul, pelajari secara berurutan

Siap lanjut ke Modul 2? Let's go! 🚀
      `,
    },
  ],
};
