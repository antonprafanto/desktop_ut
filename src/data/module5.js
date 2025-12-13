export const module5Content = {
  title: "GUI dengan NetBeans - Dasar",
  sections: [
    {
      id: "intro-gui",
      title: "Pengenalan Java Swing",
      content: `
Selamat datang di bagian paling SERU! 🎨

Sekarang kita akan membuat aplikasi dengan **GUI (Graphical User Interface)** - tampilan visual yang bisa diklik-klik, tidak lagi text-based di console!

**Java Swing** adalah framework GUI untuk Java yang:
- ✅ **Mature & Stable** - Sudah teruji puluhan tahun
- ✅ **Rich Components** - Banyak komponen siap pakai (Button, TextField, Table, dll)
- ✅ **Visual Editor** - NetBeans punya GUI Builder drag & drop!
- ✅ **Cross-platform** - Jalan di Windows, Mac, Linux dengan tampilan sama

**Perbedaan Console vs GUI:**

**Console (yang sudah kita pelajari):**
\`\`\`
Masukkan nama: █
\`\`\`

**GUI (yang akan kita buat):**
\`\`\`
┌─────────────────────────┐
│ Nama:  [____________] │
│                         │
│      [ Submit ]         │
└─────────────────────────┘
\`\`\`

Jauh lebih menarik kan? Mari kita mulai! 🚀

**Komponen Utama Swing:**
- **JFrame** - Window/jendela aplikasi
- **JPanel** - Container untuk komponen lain
- **JButton** - Tombol yang bisa diklik
- **JLabel** - Text label
- **JTextField** - Input text
- **JTable** - Tabel data
- Dan masih banyak lagi!
      `,
    },
    {
      id: "jframe-pertama",
      title: "Membuat JFrame Pertama",
      content: `
**JFrame** adalah window/jendela aplikasi. Semua komponen GUI akan ditaruh di JFrame.

**Cara 1: Code Manual (untuk belajar konsep)**
      `,
      code: {
        language: 'java',
        filename: 'FramePertama.java',
        code: `import javax.swing.JFrame;

public class FramePertama {
    public static void main(String[] args) {
        // Buat JFrame
        JFrame frame = new JFrame("Aplikasi Pertama Saya");

        // Set ukuran (width, height)
        frame.setSize(400, 300);

        // Set posisi di tengah layar
        frame.setLocationRelativeTo(null);

        // Set aksi saat close button diklik
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Tampilkan frame
        frame.setVisible(true);

        System.out.println("Frame ditampilkan!");
    }
}`,
      },
      afterCode: `
**Jalankan program**, dan... BOOM! 🎉 Window pertama Anda muncul!

**Penjelasan Method:**
- \`setSize(width, height)\` - Ukuran window dalam pixel
- \`setLocationRelativeTo(null)\` - Posisi di tengah layar
- \`setDefaultCloseOperation()\` - Apa yang terjadi saat user close window
  - \`EXIT_ON_CLOSE\` - Program berhenti
  - \`HIDE_ON_CLOSE\` - Window sembunyi tapi program masih jalan
  - \`DO_NOTHING_ON_CLOSE\` - Tidak ada aksi
- \`setVisible(true)\` - Tampilkan window (harus di akhir!)

**Cara 2: Extend JFrame (OOP approach - recommended)**
      `,
      code2: {
        language: 'java',
        filename: 'AplikasiBelajar.java',
        code: `import javax.swing.JFrame;

public class AplikasiBelajar extends JFrame {

    public AplikasiBelajar() {
        // Set title
        setTitle("Aplikasi Belajar Java");

        // Set ukuran
        setSize(500, 400);

        // Posisi tengah
        setLocationRelativeTo(null);

        // Close operation
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public static void main(String[] args) {
        // Buat instance dan tampilkan
        AplikasiBelajar app = new AplikasiBelajar();
        app.setVisible(true);
    }
}`,
      },
      afterCode2: `
Dengan extend JFrame, kita bisa customize window lebih mudah. Ini approach yang lebih OOP dan akan kita pakai terus!
      `,
    },
    {
      id: "komponen-dasar",
      title: "Komponen Dasar: JLabel, JButton, JTextField",
      content: `
Mari tambahkan komponen ke JFrame kita!

**JLabel** - Menampilkan text
**JButton** - Tombol yang bisa diklik
**JTextField** - Input text dari user
      `,
      code: {
        language: 'java',
        filename: 'FormSederhana.java',
        code: `import javax.swing.*;

public class FormSederhana extends JFrame {

    // Deklarasi komponen
    private JLabel labelNama;
    private JTextField textNama;
    private JButton buttonSubmit;

    public FormSederhana() {
        setTitle("Form Sederhana");
        setSize(400, 200);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Buat komponen
        labelNama = new JLabel("Nama:");
        textNama = new JTextField(20); // 20 = lebar kolom
        buttonSubmit = new JButton("Submit");

        // Buat panel untuk taruh komponen
        JPanel panel = new JPanel();
        panel.add(labelNama);
        panel.add(textNama);
        panel.add(buttonSubmit);

        // Tambahkan panel ke frame
        add(panel);
    }

    public static void main(String[] args) {
        FormSederhana form = new FormSederhana();
        form.setVisible(true);
    }
}`,
      },
      afterCode: `
**Jalankan!** Anda akan lihat:
- Label "Nama:"
- Text field untuk input
- Button "Submit"

Semua dalam satu baris karena JPanel default pakai **FlowLayout**.

**Komponen Properties:**
      `,
      code2: {
        language: 'java',
        code: `// JLabel
JLabel label = new JLabel("Text di sini");
label.setText("Ganti text");           // Ganti text
label.setFont(new Font("Arial", Font.BOLD, 16));  // Ganti font

// JTextField
JTextField text = new JTextField(20);
text.setText("Default value");         // Set value
String input = text.getText();         // Ambil value
text.setEditable(false);               // Read-only

// JButton
JButton button = new JButton("Klik Saya");
button.setText("Text baru");           // Ganti text
button.setEnabled(false);              // Disable button`,
      },
    },
    {
      id: "event-handling",
      title: "Event Handling - Membuat Button Interaktif",
      content: `
Sekarang kita buat button yang **benar-benar berfungsi** saat diklik!

**Event Handling** = Merespon aksi user (klik, ketik, dll)

**ActionListener** = Interface untuk handle button click
      `,
      code: {
        language: 'java',
        filename: 'FormInteraktif.java',
        code: `import javax.swing.*;
import java.awt.event.*;

public class FormInteraktif extends JFrame {

    private JLabel labelNama, labelHasil;
    private JTextField textNama;
    private JButton buttonSapa;

    public FormInteraktif() {
        setTitle("Form Interaktif");
        setSize(400, 200);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Komponen
        labelNama = new JLabel("Nama:");
        textNama = new JTextField(15);
        buttonSapa = new JButton("Sapa Saya!");
        labelHasil = new JLabel("");

        // Event handling - saat button diklik
        buttonSapa.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ambil input dari textfield
                String nama = textNama.getText();

                // Set ke label hasil
                labelHasil.setText("Halo, " + nama + "! Selamat belajar!");
            }
        });

        // Panel
        JPanel panel = new JPanel();
        panel.add(labelNama);
        panel.add(textNama);
        panel.add(buttonSapa);
        panel.add(labelHasil);

        add(panel);
    }

    public static void main(String[] args) {
        FormInteraktif form = new FormInteraktif();
        form.setVisible(true);
    }
}`,
      },
      afterCode: `
**Coba jalankan:**
1. Ketik nama Anda di text field
2. Klik button "Sapa Saya!"
3. Lihat hasil muncul di bawah! 🎉

**Penjelasan Event:**
- \`addActionListener()\` - Tambah event listener ke button
- \`ActionEvent e\` - Object yang berisi info event
- \`actionPerformed()\` - Method yang dipanggil saat button diklik

**Cara lain (Lambda - Java 8+):**
      `,
      code2: {
        language: 'java',
        code: `// Lebih ringkas dengan lambda
buttonSapa.addActionListener(e -> {
    String nama = textNama.getText();
    labelHasil.setText("Halo, " + nama + "!");
});`,
      },
    },
    {
      id: "layout-manager",
      title: "Layout Manager",
      content: `
**Layout Manager** mengatur posisi dan ukuran komponen di container.

**3 Layout Paling Umum:**

**1. FlowLayout** - Default, komponen berjajar horizontal
      `,
      code: {
        language: 'java',
        code: `JPanel panel = new JPanel(new FlowLayout());
panel.add(new JButton("1"));
panel.add(new JButton("2"));
panel.add(new JButton("3"));
// Hasil: [1] [2] [3]`,
      },
      afterCode: `
**2. BorderLayout** - 5 region (NORTH, SOUTH, EAST, WEST, CENTER)
      `,
      code2: {
        language: 'java',
        code: `JFrame frame = new JFrame();
frame.setLayout(new BorderLayout());

frame.add(new JButton("North"), BorderLayout.NORTH);
frame.add(new JButton("South"), BorderLayout.SOUTH);
frame.add(new JButton("East"), BorderLayout.EAST);
frame.add(new JButton("West"), BorderLayout.WEST);
frame.add(new JButton("Center"), BorderLayout.CENTER);

/*
┌──────────────────┐
│      North       │
├───┬─────────┬────┤
│   │         │    │
│ W │ Center  │ E  │
│   │         │    │
├───┴─────────┴────┤
│      South       │
└──────────────────┘
*/`,
      },
    },
    {
      id: "gridlayout",
      title: "GridLayout & Contoh Layout",
      content: `
**3. GridLayout** - Grid seperti tabel (rows x cols)
      `,
      code: {
        language: 'java',
        code: `// Grid 3 baris x 2 kolom
JPanel panel = new JPanel(new GridLayout(3, 2));
panel.add(new JButton("1"));
panel.add(new JButton("2"));
panel.add(new JButton("3"));
panel.add(new JButton("4"));
panel.add(new JButton("5"));
panel.add(new JButton("6"));

/*
┌────┬────┐
│ 1  │ 2  │
├────┼────┤
│ 3  │ 4  │
├────┼────┤
│ 5  │ 6  │
└────┴────┘
*/`,
      },
      afterCode: `
**Contoh Aplikasi dengan BorderLayout:**
      `,
      code2: {
        language: 'java',
        filename: 'AplikasiLayout.java',
        code: `import javax.swing.*;
import java.awt.*;

public class AplikasiLayout extends JFrame {

    public AplikasiLayout() {
        setTitle("Contoh BorderLayout");
        setSize(500, 400);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("Aplikasi Kalkulator", JLabel.CENTER);
        header.setFont(new Font("Arial", Font.BOLD, 20));
        add(header, BorderLayout.NORTH);

        // Panel tengah dengan GridLayout
        JPanel panelTengah = new JPanel(new GridLayout(2, 2, 10, 10));
        panelTengah.add(new JLabel("Angka 1:"));
        panelTengah.add(new JTextField());
        panelTengah.add(new JLabel("Angka 2:"));
        panelTengah.add(new JTextField());
        add(panelTengah, BorderLayout.CENTER);

        // Panel button di bawah
        JPanel panelButton = new JPanel(new FlowLayout());
        panelButton.add(new JButton("Tambah"));
        panelButton.add(new JButton("Kurang"));
        panelButton.add(new JButton("Kali"));
        panelButton.add(new JButton("Bagi"));
        add(panelButton, BorderLayout.SOUTH);
    }

    public static void main(String[] args) {
        AplikasiLayout app = new AplikasiLayout();
        app.setVisible(true);
    }
}`,
      },
      afterCode2: `
**Tips Layout:**
- **FlowLayout** - Form sederhana, toolbar
- **BorderLayout** - Aplikasi dengan header/footer
- **GridLayout** - Kalkulator, keypad
- **null layout** - Positioning manual (tidak recommended)
      `,
    },
    {
      id: "jpanel",
      title: "JPanel untuk Grouping",
      content: `
**JPanel** adalah container untuk grouping komponen. Sangat berguna untuk layout complex!

**Kenapa pakai JPanel?**
- 🎯 Grouping komponen logis
- 🎨 Beda layout di tiap panel
- 📦 Modular dan reusable

**Contoh: Form dengan Multiple Panels**
      `,
      code: {
        language: 'java',
        filename: 'FormDenganPanel.java',
        code: `import javax.swing.*;
import java.awt.*;

public class FormDenganPanel extends JFrame {

    public FormDenganPanel() {
        setTitle("Form Registrasi");
        setSize(400, 300);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Panel Header
        JPanel panelHeader = new JPanel();
        panelHeader.setBackground(Color.BLUE);
        JLabel labelJudul = new JLabel("FORM REGISTRASI");
        labelJudul.setForeground(Color.WHITE);
        labelJudul.setFont(new Font("Arial", Font.BOLD, 18));
        panelHeader.add(labelJudul);
        add(panelHeader, BorderLayout.NORTH);

        // Panel Form (tengah)
        JPanel panelForm = new JPanel(new GridLayout(3, 2, 10, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        panelForm.add(new JLabel("Nama:"));
        panelForm.add(new JTextField());
        panelForm.add(new JLabel("Email:"));
        panelForm.add(new JTextField());
        panelForm.add(new JLabel("Password:"));
        panelForm.add(new JPasswordField());

        add(panelForm, BorderLayout.CENTER);

        // Panel Button (bawah)
        JPanel panelButton = new JPanel(new FlowLayout());
        JButton btnDaftar = new JButton("Daftar");
        JButton btnBatal = new JButton("Batal");

        // Event
        btnDaftar.addActionListener(e -> {
            JOptionPane.showMessageDialog(this, "Registrasi berhasil!");
        });

        btnBatal.addActionListener(e -> {
            System.exit(0);
        });

        panelButton.add(btnDaftar);
        panelButton.add(btnBatal);
        add(panelButton, BorderLayout.SOUTH);
    }

    public static void main(String[] args) {
        FormDenganPanel form = new FormDenganPanel();
        form.setVisible(true);
    }
}`,
      },
      afterCode: `
**Fitur Baru:**
- \`JPasswordField\` - Input password (hidden)
- \`setBorder()\` - Tambah padding/margin
- \`setBackground()\` - Warna background
- \`setForeground()\` - Warna text
- \`JOptionPane.showMessageDialog()\` - Popup message

**Panel Nesting:**
Panel bisa berisi panel lain! Sangat powerful untuk layout complex.
      `,
    },
    {
      id: "netbeans-gui-builder",
      title: "NetBeans GUI Builder (Drag & Drop)",
      content: `
Menulis code GUI manual itu bagus untuk belajar, tapi **NetBeans punya GUI Builder** yang bisa drag & drop! 🎨

**Cara Menggunakan GUI Builder:**

**1. Buat JFrame Form:**
- File > New File
- Categories: Java GUI Forms
- File Types: **JFrame Form**
- Klik Next
- Class Name: misalnya \`FormMahasiswa\`
- Klik Finish

**2. Design Mode:**
Anda akan lihat:
- **Design Area** - Canvas untuk drag & drop
- **Palette** - Komponen yang bisa ditambahkan
- **Properties** - Properties komponen yang dipilih
- **Navigator** - Hirarki komponen

**3. Drag & Drop Komponen:**
- Drag JLabel dari Palette ke Design Area
- Drag JTextField
- Drag JButton
- Atur posisi dengan drag
- Resize dengan handle di sudut

**4. Set Properties:**
- Klik komponen
- Lihat Properties panel
- Edit:
  - \`text\` - Text yang ditampilkan
  - \`font\` - Font
  - \`foreground\` - Warna text
  - \`variable name\` - Nama variable (penting!)

**5. Add Event:**
- Klik kanan button
- Events > Action > actionPerformed
- NetBeans generate method otomatis
- Tulis code di method tersebut

**Contoh Generated Code:**
NetBeans generate code di bagian "Generated Code" (collapsed, jangan edit manual!)

**Tips:**
- ✅ Pakai GUI Builder untuk layout complex
- ✅ Beri nama variable yang jelas (txtNama, btnSubmit, lblHasil)
- ✅ Design dulu baru code event
- ❌ Jangan edit "Generated Code" manual (bisa crash!)

**Advantages GUI Builder:**
- ⚡ Cepat untuk prototype
- 👁️ Visual feedback langsung
- 📐 Alignment otomatis
- 🎨 Bisa atur detail tanpa code banyak

**Best Practice:**
Untuk belajar, pahami dulu **code manual** (seperti yang kita pelajari).
Setelah paham konsep, pakai GUI Builder untuk productive! 🚀
      `,
    },
    {
      id: "latihan",
      title: "Latihan & Mini Project",
      content: `
Saatnya praktik! Coba buat aplikasi berikut:

**Latihan 1: Kalkulator Sederhana**
Buat aplikasi dengan:
- 2 JTextField untuk input angka
- 4 JButton (+, -, *, /)
- 1 JLabel untuk hasil
- Event: saat button diklik, hitung dan tampilkan hasil

**Latihan 2: Form Login**
Buat form login dengan:
- JTextField untuk username
- JPasswordField untuk password
- JButton Login
- Event: cek username="admin" dan password="123"
  - Jika benar: popup "Login berhasil!"
  - Jika salah: popup "Login gagal!"

**Latihan 3: Konversi Suhu**
Buat aplikasi konversi Celsius ↔ Fahrenheit:
- JTextField input
- JComboBox pilih arah konversi
- JButton Konversi
- JLabel hasil
- Formula: F = (C × 9/5) + 32

**Mini Project: Aplikasi Biodata**
Buat form input biodata:
- Nama (JTextField)
- Jenis Kelamin (JRadioButton)
- Hobi (JCheckBox - multiple)
- Alamat (JTextArea)
- Button Simpan & Clear
- Event Simpan: tampilkan semua data di JTextArea hasil

**Challenge: Kombinasi Layout**
Buat aplikasi dengan layout:
- Header (NORTH) - Judul aplikasi
- Sidebar (WEST) - Menu button
- Content (CENTER) - Form/konten
- Footer (SOUTH) - Status bar

Tips: Pakai nested panels untuk struktur yang rapi!
      `,
    },
    {
      id: "summary",
      title: "Ringkasan Modul 5",
      content: `
Mantap! Anda sudah bisa buat GUI! 🎨🎉

**Yang Sudah Dipelajari:**
✅ Pengenalan Java Swing
✅ JFrame - window aplikasi
✅ Komponen dasar: JLabel, JButton, JTextField
✅ Event handling dengan ActionListener
✅ Layout Manager (FlowLayout, BorderLayout, GridLayout)
✅ JPanel untuk grouping
✅ NetBeans GUI Builder (drag & drop)

**Komponen Swing:**
- \`JFrame\` - Window utama
- \`JPanel\` - Container
- \`JLabel\` - Text label
- \`JButton\` - Button
- \`JTextField\` - Input text
- \`JPasswordField\` - Input password

**Layout Manager:**
- \`FlowLayout\` - Horizontal flow
- \`BorderLayout\` - 5 regions
- \`GridLayout\` - Grid/tabel

**Event Handling:**
- \`ActionListener\` - Handle button click
- \`actionPerformed()\` - Method yang dipanggil

**Next: Modul 6 - GUI Lanjutan**
Di modul berikutnya kita akan belajar:
- JComboBox, JRadioButton, JCheckBox
- JTable untuk data tabular
- JTextArea, JScrollPane
- JMenu dan JMenuBar
- JDialog dan JOptionPane
- Form validation
- Custom styling

GUI dasar sudah dikuasai! Sekarang kita buat aplikasi yang lebih complex dan professional! 💼

**Tips Lanjutan:**
- Praktik dengan GUI Builder NetBeans
- Buat aplikasi kecil setiap hari
- Kombinasikan dengan OOP (tiap form = class)
- Lihat aplikasi existing untuk inspirasi layout

Happy GUI Programming! 🚀
      `,
    },
  ],
};
