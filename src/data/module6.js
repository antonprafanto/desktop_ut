export const module6Content = {
  title: "GUI Lanjutan - Komponen & Teknik Advanced",
  slug: "gui-lanjutan",
  sections: [
    {
      id: "intro-gui-lanjutan",
      title: "Pengenalan GUI Lanjutan",
      content: `
        <h2>Mengapa Perlu Mempelajari Komponen GUI Lanjutan?</h2>
        <p>Setelah menguasai dasar-dasar GUI, saatnya kita tingkatkan kemampuan dengan komponen-komponen yang lebih canggih dan teknik-teknik profesional.</p>

        <h3>Yang Akan Dipelajari di Modul Ini:</h3>
        <ul>
          <li><strong>JComboBox</strong> - Dropdown pilihan</li>
          <li><strong>JList</strong> - Daftar pilihan berganda</li>
          <li><strong>JCheckBox & JRadioButton</strong> - Pilihan checkbox dan radio</li>
          <li><strong>JTable</strong> - Tabel data yang powerful</li>
          <li><strong>JTextArea & JScrollPane</strong> - Area teks dengan scroll</li>
          <li><strong>JMenuBar & JMenu</strong> - Menu bar profesional</li>
          <li><strong>JDialog & JOptionPane</strong> - Dialog dan popup</li>
          <li><strong>Form Validation</strong> - Validasi input pengguna</li>
          <li><strong>Custom Styling</strong> - Styling font, warna, dan border</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
          <p><strong>💡 Tips:</strong> Modul ini akan banyak praktek! Pastikan NetBeans sudah siap dan ikuti setiap contoh dengan mengetiknya sendiri.</p>
        </div>
      `
    },
    {
      id: "jcombobox",
      title: "JComboBox - Dropdown Pilihan",
      content: `
        <h2>JComboBox - Komponen Dropdown</h2>
        <p><strong>JComboBox</strong> adalah komponen dropdown yang memungkinkan user memilih satu item dari daftar pilihan.</p>

        <h3>1. Membuat JComboBox Sederhana</h3>
        <p>Contoh membuat dropdown pilihan kota:</p>
      `,
      code: {
        language: "java",
        filename: "AplikasiComboBox.java",
        content: `import javax.swing.*;
import java.awt.*;

public class AplikasiComboBox extends JFrame {
    private JComboBox<String> comboKota;
    private JLabel labelHasil;

    public AplikasiComboBox() {
        setTitle("Demo JComboBox");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout(FlowLayout.LEFT, 20, 20));

        // Array pilihan kota
        String[] kota = {"Jakarta", "Bandung", "Surabaya", "Medan", "Makassar"};

        // Buat JComboBox
        comboKota = new JComboBox<>(kota);

        // Label untuk menampilkan hasil
        labelHasil = new JLabel("Pilih kota Anda");

        // Event listener
        comboKota.addActionListener(e -> {
            String kotaTerpilih = (String) comboKota.getSelectedItem();
            labelHasil.setText("Kota terpilih: " + kotaTerpilih);
        });

        add(new JLabel("Pilih Kota:"));
        add(comboKota);
        add(labelHasil);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiComboBox().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <h3>2. Menambahkan Item Secara Dinamis</h3>
        <p>Kita bisa menambah atau menghapus item dari ComboBox:</p>
      `,
      additionalCode: {
        language: "java",
        content: `// Menambah item baru
comboKota.addItem("Yogyakarta");

// Menghapus item
comboKota.removeItem("Jakarta");

// Menghapus semua item
comboKota.removeAllItems();

// Mendapatkan item terpilih
String selected = (String) comboKota.getSelectedItem();

// Mendapatkan index item terpilih
int index = comboKota.getSelectedIndex();`
      }
    },
    {
      id: "jlist-checkbox-radio",
      title: "JList, JCheckBox & JRadioButton",
      content: `
        <h2>Komponen Pilihan Multiple</h2>

        <h3>1. JList - Daftar Pilihan</h3>
        <p>JList memungkinkan user memilih satu atau beberapa item dari daftar:</p>
      `,
      code: {
        language: "java",
        filename: "DemoJList.java",
        content: `import javax.swing.*;
import java.awt.*;

public class DemoJList extends JFrame {
    public DemoJList() {
        setTitle("Demo JList");
        setSize(300, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Data untuk JList
        String[] mataKuliah = {
            "Pemrograman Desktop",
            "Basis Data",
            "Struktur Data",
            "Jaringan Komputer",
            "Sistem Operasi"
        };

        // Buat JList
        JList<String> list = new JList<>(mataKuliah);
        list.setSelectionMode(ListSelectionModel.MULTIPLE_INTERVAL_SELECTION);

        // Tambahkan ke ScrollPane
        JScrollPane scrollPane = new JScrollPane(list);

        // Button untuk menampilkan pilihan
        JButton btnTampilkan = new JButton("Tampilkan Pilihan");
        btnTampilkan.addActionListener(e -> {
            java.util.List<String> terpilih = list.getSelectedValuesList();
            String hasil = "Mata kuliah terpilih:\\n" + String.join("\\n", terpilih);
            JOptionPane.showMessageDialog(this, hasil);
        });

        add(scrollPane, BorderLayout.CENTER);
        add(btnTampilkan, BorderLayout.SOUTH);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new DemoJList().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <h3>2. JCheckBox - Checkbox</h3>
        <p>Checkbox untuk pilihan multiple (bisa pilih lebih dari satu):</p>
      `,
      additionalCode: {
        language: "java",
        filename: "DemoCheckBox.java",
        content: `import javax.swing.*;
import java.awt.*;

public class DemoCheckBox extends JFrame {
    private JCheckBox checkJava, checkPython, checkCpp;

    public DemoCheckBox() {
        setTitle("Demo CheckBox");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout(FlowLayout.LEFT, 20, 20));

        add(new JLabel("Pilih bahasa pemrograman yang dikuasai:"));

        checkJava = new JCheckBox("Java");
        checkPython = new JCheckBox("Python");
        checkCpp = new JCheckBox("C++");

        JButton btnSubmit = new JButton("Submit");
        btnSubmit.addActionListener(e -> {
            String hasil = "Bahasa yang dikuasai: ";
            if (checkJava.isSelected()) hasil += "Java ";
            if (checkPython.isSelected()) hasil += "Python ";
            if (checkCpp.isSelected()) hasil += "C++ ";
            JOptionPane.showMessageDialog(this, hasil);
        });

        add(checkJava);
        add(checkPython);
        add(checkCpp);
        add(btnSubmit);
    }
}`
      },
      additionalContent2: `
        <h3>3. JRadioButton - Radio Button</h3>
        <p>Radio button untuk pilihan tunggal (hanya bisa pilih satu):</p>
      `,
      additionalCode2: {
        language: "java",
        content: `import javax.swing.*;
import java.awt.*;

public class DemoRadioButton extends JFrame {
    private JRadioButton radioPria, radioWanita;
    private ButtonGroup group;

    public DemoRadioButton() {
        setTitle("Demo Radio Button");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout(FlowLayout.LEFT, 20, 20));

        add(new JLabel("Jenis Kelamin:"));

        radioPria = new JRadioButton("Pria");
        radioWanita = new JRadioButton("Wanita");

        // ButtonGroup untuk mengelompokkan radio button
        // Hanya 1 yang bisa dipilih dalam 1 group
        group = new ButtonGroup();
        group.add(radioPria);
        group.add(radioWanita);

        JButton btnSubmit = new JButton("Submit");
        btnSubmit.addActionListener(e -> {
            String jk = radioPria.isSelected() ? "Pria" : "Wanita";
            JOptionPane.showMessageDialog(this, "Jenis Kelamin: " + jk);
        });

        add(radioPria);
        add(radioWanita);
        add(btnSubmit);
    }
}`
      }
    },
    {
      id: "jtable",
      title: "JTable - Tabel Data",
      content: `
        <h2>JTable - Menampilkan Data Tabular</h2>
        <p><strong>JTable</strong> adalah komponen powerful untuk menampilkan data dalam bentuk tabel (baris dan kolom).</p>

        <h3>Membuat JTable Sederhana</h3>
        <p>Contoh menampilkan data mahasiswa dalam tabel:</p>
      `,
      code: {
        language: "java",
        filename: "AplikasiTabel.java",
        content: `import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class AplikasiTabel extends JFrame {
    private JTable table;
    private DefaultTableModel model;

    public AplikasiTabel() {
        setTitle("Data Mahasiswa");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Nama kolom
        String[] kolomNama = {"NIM", "Nama", "Jurusan", "IPK"};

        // Data mahasiswa (baris)
        Object[][] data = {
            {"2024001", "Budi Santoso", "Teknik Informatika", 3.75},
            {"2024002", "Siti Rahma", "Sistem Informasi", 3.82},
            {"2024003", "Andi Wijaya", "Teknik Informatika", 3.45},
            {"2024004", "Dewi Lestari", "Manajemen Informatika", 3.90},
            {"2024005", "Rudi Hartono", "Sistem Informasi", 3.65}
        };

        // Buat model tabel
        model = new DefaultTableModel(data, kolomNama);

        // Buat JTable dengan model
        table = new JTable(model);

        // Setting lebar kolom
        table.getColumnModel().getColumn(0).setPreferredWidth(80);
        table.getColumnModel().getColumn(1).setPreferredWidth(150);
        table.getColumnModel().getColumn(2).setPreferredWidth(180);
        table.getColumnModel().getColumn(3).setPreferredWidth(60);

        // Tambahkan ke ScrollPane (agar bisa scroll jika data banyak)
        JScrollPane scrollPane = new JScrollPane(table);

        // Panel button
        JPanel panelButton = new JPanel();
        JButton btnTambah = new JButton("Tambah Data");
        JButton btnHapus = new JButton("Hapus Data");

        btnTambah.addActionListener(e -> tambahData());
        btnHapus.addActionListener(e -> hapusData());

        panelButton.add(btnTambah);
        panelButton.add(btnHapus);

        add(scrollPane, BorderLayout.CENTER);
        add(panelButton, BorderLayout.SOUTH);
    }

    private void tambahData() {
        // Input data baru
        String nim = JOptionPane.showInputDialog("Masukkan NIM:");
        if (nim == null || nim.trim().isEmpty()) return;

        String nama = JOptionPane.showInputDialog("Masukkan Nama:");
        if (nama == null || nama.trim().isEmpty()) return;

        String jurusan = JOptionPane.showInputDialog("Masukkan Jurusan:");
        if (jurusan == null || jurusan.trim().isEmpty()) return;

        String ipkStr = JOptionPane.showInputDialog("Masukkan IPK:");
        if (ipkStr == null || ipkStr.trim().isEmpty()) return;

        try {
            double ipk = Double.parseDouble(ipkStr);

            // Tambahkan ke tabel
            Object[] barisBaru = {nim, nama, jurusan, ipk};
            model.addRow(barisBaru);

            JOptionPane.showMessageDialog(this, "Data berhasil ditambahkan!");
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "IPK harus berupa angka!",
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void hapusData() {
        int barisTerpilih = table.getSelectedRow();

        if (barisTerpilih == -1) {
            JOptionPane.showMessageDialog(this,
                "Pilih baris yang ingin dihapus!",
                "Peringatan", JOptionPane.WARNING_MESSAGE);
            return;
        }

        int konfirmasi = JOptionPane.showConfirmDialog(this,
            "Yakin ingin menghapus data ini?",
            "Konfirmasi", JOptionPane.YES_NO_OPTION);

        if (konfirmasi == JOptionPane.YES_OPTION) {
            model.removeRow(barisTerpilih);
            JOptionPane.showMessageDialog(this, "Data berhasil dihapus!");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiTabel().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4">
          <p><strong>⚠️ Catatan Penting:</strong></p>
          <ul>
            <li><code>DefaultTableModel</code> - Model untuk mengelola data tabel</li>
            <li><code>JScrollPane</code> - Agar tabel bisa di-scroll</li>
            <li><code>getSelectedRow()</code> - Mendapat baris yang dipilih</li>
            <li><code>addRow()</code> - Menambah baris baru</li>
            <li><code>removeRow()</code> - Menghapus baris</li>
          </ul>
        </div>
      `
    },
    {
      id: "jtextarea-scrollpane",
      title: "JTextArea & JScrollPane",
      content: `
        <h2>JTextArea - Area Teks Multi-baris</h2>
        <p><strong>JTextArea</strong> adalah komponen untuk input/output teks yang bisa lebih dari satu baris, biasa digunakan untuk catatan, komentar, atau log.</p>

        <h3>Membuat JTextArea dengan Scroll</h3>
      `,
      code: {
        language: "java",
        filename: "AplikasiCatatan.java",
        content: `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class AplikasiCatatan extends JFrame {
    private JTextArea textArea;
    private JLabel labelInfo;

    public AplikasiCatatan() {
        setTitle("Aplikasi Catatan Sederhana");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Buat JTextArea
        textArea = new JTextArea();
        textArea.setLineWrap(true); // Auto wrap text
        textArea.setWrapStyleWord(true); // Wrap per kata
        textArea.setFont(new Font("Monospaced", Font.PLAIN, 14));

        // Tambahkan ke JScrollPane
        JScrollPane scrollPane = new JScrollPane(textArea);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);

        // Panel atas dengan toolbar
        JPanel panelAtas = new JPanel(new FlowLayout(FlowLayout.LEFT));
        JButton btnBersihkan = new JButton("Bersihkan");
        JButton btnSalin = new JButton("Salin Semua");
        JButton btnHitung = new JButton("Hitung Kata");

        panelAtas.add(btnBersihkan);
        panelAtas.add(btnSalin);
        panelAtas.add(btnHitung);

        // Label info di bawah
        labelInfo = new JLabel("Karakter: 0 | Kata: 0");

        // Event handlers
        btnBersihkan.addActionListener(e -> {
            textArea.setText("");
            updateInfo();
        });

        btnSalin.addActionListener(e -> {
            textArea.selectAll();
            textArea.copy();
            JOptionPane.showMessageDialog(this, "Teks berhasil disalin!");
        });

        btnHitung.addActionListener(e -> {
            updateInfo();
        });

        // Update info saat mengetik
        textArea.addKeyListener(new KeyAdapter() {
            @Override
            public void keyReleased(KeyEvent e) {
                updateInfo();
            }
        });

        // Layout
        add(panelAtas, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);
        add(labelInfo, BorderLayout.SOUTH);
    }

    private void updateInfo() {
        String teks = textArea.getText();
        int jumlahKarakter = teks.length();

        // Hitung jumlah kata
        String[] kata = teks.trim().split("\\\\s+");
        int jumlahKata = teks.trim().isEmpty() ? 0 : kata.length;

        labelInfo.setText("Karakter: " + jumlahKarakter + " | Kata: " + jumlahKata);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiCatatan().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <h3>Method Penting JTextArea:</h3>
        <ul>
          <li><code>setText(String)</code> - Set teks</li>
          <li><code>getText()</code> - Ambil teks</li>
          <li><code>append(String)</code> - Tambah teks di akhir</li>
          <li><code>setLineWrap(boolean)</code> - Auto wrap baris</li>
          <li><code>setWrapStyleWord(boolean)</code> - Wrap per kata</li>
          <li><code>setEditable(boolean)</code> - Atur bisa edit atau tidak</li>
        </ul>
      `
    },
    {
      id: "jmenubar",
      title: "JMenuBar & JMenu - Menu Bar",
      content: `
        <h2>Membuat Menu Bar Profesional</h2>
        <p>Menu bar adalah komponen penting dalam aplikasi desktop profesional. Biasanya ada di bagian atas window.</p>

        <h3>Membuat Menu Bar Lengkap</h3>
      `,
      code: {
        language: "java",
        filename: "AplikasiDenganMenu.java",
        content: `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class AplikasiDenganMenu extends JFrame {
    private JTextArea textArea;

    public AplikasiDenganMenu() {
        setTitle("Aplikasi dengan Menu Bar");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Text area
        textArea = new JTextArea();
        add(new JScrollPane(textArea), BorderLayout.CENTER);

        // Buat menu bar
        buatMenuBar();
    }

    private void buatMenuBar() {
        // Menu Bar
        JMenuBar menuBar = new JMenuBar();

        // ========== MENU FILE ==========
        JMenu menuFile = new JMenu("File");
        menuFile.setMnemonic(KeyEvent.VK_F); // Alt+F

        JMenuItem itemNew = new JMenuItem("New", KeyEvent.VK_N);
        itemNew.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_N, ActionEvent.CTRL_MASK)); // Ctrl+N
        itemNew.addActionListener(e -> newFile());

        JMenuItem itemOpen = new JMenuItem("Open", KeyEvent.VK_O);
        itemOpen.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_O, ActionEvent.CTRL_MASK)); // Ctrl+O
        itemOpen.addActionListener(e -> openFile());

        JMenuItem itemSave = new JMenuItem("Save", KeyEvent.VK_S);
        itemSave.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_S, ActionEvent.CTRL_MASK)); // Ctrl+S
        itemSave.addActionListener(e -> saveFile());

        menuFile.add(itemNew);
        menuFile.add(itemOpen);
        menuFile.add(itemSave);
        menuFile.addSeparator(); // Garis pemisah

        JMenuItem itemExit = new JMenuItem("Exit", KeyEvent.VK_X);
        itemExit.addActionListener(e -> System.exit(0));
        menuFile.add(itemExit);

        // ========== MENU EDIT ==========
        JMenu menuEdit = new JMenu("Edit");
        menuEdit.setMnemonic(KeyEvent.VK_E);

        JMenuItem itemCut = new JMenuItem("Cut");
        itemCut.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_X, ActionEvent.CTRL_MASK));
        itemCut.addActionListener(e -> textArea.cut());

        JMenuItem itemCopy = new JMenuItem("Copy");
        itemCopy.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_C, ActionEvent.CTRL_MASK));
        itemCopy.addActionListener(e -> textArea.copy());

        JMenuItem itemPaste = new JMenuItem("Paste");
        itemPaste.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_V, ActionEvent.CTRL_MASK));
        itemPaste.addActionListener(e -> textArea.paste());

        menuEdit.add(itemCut);
        menuEdit.add(itemCopy);
        menuEdit.add(itemPaste);

        // ========== MENU VIEW ==========
        JMenu menuView = new JMenu("View");

        JCheckBoxMenuItem itemStatusBar = new JCheckBoxMenuItem("Status Bar");
        itemStatusBar.setSelected(true);
        itemStatusBar.addActionListener(e -> {
            // Toggle status bar
            JOptionPane.showMessageDialog(this,
                "Status bar: " + (itemStatusBar.isSelected() ? "ON" : "OFF"));
        });

        menuView.add(itemStatusBar);

        // ========== MENU HELP ==========
        JMenu menuHelp = new JMenu("Help");

        JMenuItem itemAbout = new JMenuItem("About");
        itemAbout.addActionListener(e -> {
            JOptionPane.showMessageDialog(this,
                "Aplikasi Demo Menu Bar\\nVersi 1.0\\n© 2024",
                "About", JOptionPane.INFORMATION_MESSAGE);
        });

        menuHelp.add(itemAbout);

        // Tambahkan semua menu ke menu bar
        menuBar.add(menuFile);
        menuBar.add(menuEdit);
        menuBar.add(menuView);
        menuBar.add(menuHelp);

        // Set menu bar ke frame
        setJMenuBar(menuBar);
    }

    private void newFile() {
        int result = JOptionPane.showConfirmDialog(this,
            "File belum tersimpan. Buat file baru?",
            "Konfirmasi", JOptionPane.YES_NO_OPTION);

        if (result == JOptionPane.YES_OPTION) {
            textArea.setText("");
        }
    }

    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();
        int result = fileChooser.showOpenDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            JOptionPane.showMessageDialog(this,
                "File dipilih: " + fileChooser.getSelectedFile().getName());
        }
    }

    private void saveFile() {
        JFileChooser fileChooser = new JFileChooser();
        int result = fileChooser.showSaveDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            JOptionPane.showMessageDialog(this,
                "File disimpan: " + fileChooser.getSelectedFile().getName());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiDenganMenu().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <h3>Komponen Menu:</h3>
        <ul>
          <li><code>JMenuBar</code> - Container untuk menu</li>
          <li><code>JMenu</code> - Menu utama (File, Edit, dll)</li>
          <li><code>JMenuItem</code> - Item dalam menu</li>
          <li><code>JCheckBoxMenuItem</code> - Menu item dengan checkbox</li>
          <li><code>addSeparator()</code> - Garis pemisah</li>
          <li><code>setMnemonic()</code> - Keyboard shortcut (Alt+huruf)</li>
          <li><code>setAccelerator()</code> - Keyboard shortcut (Ctrl+huruf)</li>
        </ul>
      `
    },
    {
      id: "jdialog-joptionpane",
      title: "JDialog & JOptionPane",
      content: `
        <h2>Dialog dan Popup Window</h2>

        <h3>1. JOptionPane - Dialog Cepat</h3>
        <p>JOptionPane menyediakan dialog standar yang mudah digunakan:</p>
      `,
      code: {
        language: "java",
        filename: "DemoJOptionPane.java",
        content: `import javax.swing.*;

public class DemoJOptionPane {
    public static void main(String[] args) {
        // 1. Message Dialog - Menampilkan pesan
        JOptionPane.showMessageDialog(null,
            "Ini adalah pesan informasi!",
            "Informasi",
            JOptionPane.INFORMATION_MESSAGE);

        // 2. Confirm Dialog - Konfirmasi Yes/No
        int result = JOptionPane.showConfirmDialog(null,
            "Apakah Anda yakin ingin keluar?",
            "Konfirmasi",
            JOptionPane.YES_NO_OPTION);

        if (result == JOptionPane.YES_OPTION) {
            System.out.println("User memilih Yes");
        }

        // 3. Input Dialog - Input dari user
        String nama = JOptionPane.showInputDialog(null,
            "Masukkan nama Anda:",
            "Input",
            JOptionPane.QUESTION_MESSAGE);

        System.out.println("Nama: " + nama);

        // 4. Option Dialog - Custom buttons
        Object[] options = {"Simpan", "Jangan Simpan", "Batal"};
        int pilihan = JOptionPane.showOptionDialog(null,
            "Simpan perubahan?",
            "Konfirmasi",
            JOptionPane.YES_NO_CANCEL_OPTION,
            JOptionPane.QUESTION_MESSAGE,
            null,
            options,
            options[0]);

        switch(pilihan) {
            case 0: System.out.println("Simpan"); break;
            case 1: System.out.println("Jangan Simpan"); break;
            case 2: System.out.println("Batal"); break;
        }

        // 5. Error Dialog
        JOptionPane.showMessageDialog(null,
            "Terjadi kesalahan!",
            "Error",
            JOptionPane.ERROR_MESSAGE);

        // 6. Warning Dialog
        JOptionPane.showMessageDialog(null,
            "Perhatian: Data akan dihapus!",
            "Peringatan",
            JOptionPane.WARNING_MESSAGE);
    }
}`
      },
      additionalContent: `
        <h3>2. JDialog - Custom Dialog</h3>
        <p>JDialog untuk membuat dialog window yang lebih custom:</p>
      `,
      additionalCode: {
        language: "java",
        filename: "CustomDialog.java",
        content: `import javax.swing.*;
import java.awt.*;

public class CustomDialog extends JDialog {
    private JTextField textNama;
    private JTextField textEmail;
    private String nama, email;
    private boolean isOk = false;

    public CustomDialog(JFrame parent) {
        super(parent, "Form Registrasi", true); // true = modal
        setSize(350, 200);
        setLocationRelativeTo(parent);
        setLayout(new BorderLayout(10, 10));

        // Panel form
        JPanel panelForm = new JPanel(new GridLayout(2, 2, 10, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));

        panelForm.add(new JLabel("Nama:"));
        textNama = new JTextField();
        panelForm.add(textNama);

        panelForm.add(new JLabel("Email:"));
        textEmail = new JTextField();
        panelForm.add(textEmail);

        // Panel button
        JPanel panelButton = new JPanel();
        JButton btnOk = new JButton("OK");
        JButton btnBatal = new JButton("Batal");

        btnOk.addActionListener(e -> {
            nama = textNama.getText();
            email = textEmail.getText();

            if (nama.isEmpty() || email.isEmpty()) {
                JOptionPane.showMessageDialog(this,
                    "Semua field harus diisi!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                return;
            }

            isOk = true;
            dispose();
        });

        btnBatal.addActionListener(e -> {
            isOk = false;
            dispose();
        });

        panelButton.add(btnOk);
        panelButton.add(btnBatal);

        add(panelForm, BorderLayout.CENTER);
        add(panelButton, BorderLayout.SOUTH);
    }

    public boolean isOk() {
        return isOk;
    }

    public String getNama() {
        return nama;
    }

    public String getEmail() {
        return email;
    }
}

// Cara menggunakan:
class MainApp extends JFrame {
    public MainApp() {
        setTitle("Main App");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JButton btnDaftar = new JButton("Daftar");
        btnDaftar.addActionListener(e -> {
            CustomDialog dialog = new CustomDialog(this);
            dialog.setVisible(true);

            if (dialog.isOk()) {
                JOptionPane.showMessageDialog(this,
                    "Registrasi berhasil!\\n" +
                    "Nama: " + dialog.getNama() + "\\n" +
                    "Email: " + dialog.getEmail());
            }
        });

        add(btnDaftar);
    }
}`
      }
    },
    {
      id: "form-validation",
      title: "Form Validation & Error Handling",
      content: `
        <h2>Validasi Input Pengguna</h2>
        <p>Validasi input sangat penting untuk memastikan data yang dimasukkan user valid dan aman.</p>

        <h3>Contoh Form dengan Validasi Lengkap</h3>
      `,
      code: {
        language: "java",
        filename: "FormRegistrasi.java",
        content: `import javax.swing.*;
import java.awt.*;
import java.util.regex.Pattern;

public class FormRegistrasi extends JFrame {
    private JTextField textNama, textEmail, textTelepon;
    private JPasswordField textPassword, textKonfirmasiPassword;
    private JComboBox<String> comboJurusan;
    private JTextArea textAlamat;

    public FormRegistrasi() {
        setTitle("Form Registrasi Mahasiswa");
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Panel form
        JPanel panelForm = new JPanel(new GridLayout(7, 2, 10, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));

        // Nama
        panelForm.add(new JLabel("Nama Lengkap:"));
        textNama = new JTextField();
        panelForm.add(textNama);

        // Email
        panelForm.add(new JLabel("Email:"));
        textEmail = new JTextField();
        panelForm.add(textEmail);

        // Telepon
        panelForm.add(new JLabel("Telepon:"));
        textTelepon = new JTextField();
        panelForm.add(textTelepon);

        // Jurusan
        panelForm.add(new JLabel("Jurusan:"));
        String[] jurusan = {"-- Pilih Jurusan --", "Teknik Informatika",
                           "Sistem Informasi", "Manajemen Informatika"};
        comboJurusan = new JComboBox<>(jurusan);
        panelForm.add(comboJurusan);

        // Password
        panelForm.add(new JLabel("Password:"));
        textPassword = new JPasswordField();
        panelForm.add(textPassword);

        // Konfirmasi Password
        panelForm.add(new JLabel("Konfirmasi Password:"));
        textKonfirmasiPassword = new JPasswordField();
        panelForm.add(textKonfirmasiPassword);

        // Alamat
        panelForm.add(new JLabel("Alamat:"));
        textAlamat = new JTextArea(3, 20);
        JScrollPane scrollAlamat = new JScrollPane(textAlamat);
        panelForm.add(scrollAlamat);

        // Button
        JPanel panelButton = new JPanel();
        JButton btnDaftar = new JButton("Daftar");
        JButton btnReset = new JButton("Reset");

        btnDaftar.addActionListener(e -> validasiDanDaftar());
        btnReset.addActionListener(e -> resetForm());

        panelButton.add(btnDaftar);
        panelButton.add(btnReset);

        add(panelForm, BorderLayout.CENTER);
        add(panelButton, BorderLayout.SOUTH);
    }

    private void validasiDanDaftar() {
        // 1. Validasi nama (tidak boleh kosong, min 3 karakter)
        String nama = textNama.getText().trim();
        if (nama.isEmpty()) {
            showError("Nama tidak boleh kosong!");
            textNama.requestFocus();
            return;
        }
        if (nama.length() < 3) {
            showError("Nama minimal 3 karakter!");
            textNama.requestFocus();
            return;
        }

        // 2. Validasi email (format email)
        String email = textEmail.getText().trim();
        if (!isValidEmail(email)) {
            showError("Format email tidak valid!\\nContoh: nama@email.com");
            textEmail.requestFocus();
            return;
        }

        // 3. Validasi telepon (hanya angka, 10-13 digit)
        String telepon = textTelepon.getText().trim();
        if (!isValidTelepon(telepon)) {
            showError("Telepon harus berupa angka 10-13 digit!\\nContoh: 08123456789");
            textTelepon.requestFocus();
            return;
        }

        // 4. Validasi jurusan (harus dipilih)
        if (comboJurusan.getSelectedIndex() == 0) {
            showError("Pilih jurusan terlebih dahulu!");
            comboJurusan.requestFocus();
            return;
        }

        // 5. Validasi password (min 6 karakter)
        String password = new String(textPassword.getPassword());
        if (password.length() < 6) {
            showError("Password minimal 6 karakter!");
            textPassword.requestFocus();
            return;
        }

        // 6. Validasi konfirmasi password (harus sama)
        String konfirmasiPassword = new String(textKonfirmasiPassword.getPassword());
        if (!password.equals(konfirmasiPassword)) {
            showError("Password dan konfirmasi password tidak sama!");
            textKonfirmasiPassword.requestFocus();
            return;
        }

        // 7. Validasi alamat (tidak boleh kosong)
        String alamat = textAlamat.getText().trim();
        if (alamat.isEmpty()) {
            showError("Alamat tidak boleh kosong!");
            textAlamat.requestFocus();
            return;
        }

        // Jika semua validasi lolos
        String hasil = "Registrasi Berhasil!\\n\\n" +
                      "Nama: " + nama + "\\n" +
                      "Email: " + email + "\\n" +
                      "Telepon: " + telepon + "\\n" +
                      "Jurusan: " + comboJurusan.getSelectedItem() + "\\n" +
                      "Alamat: " + alamat;

        JOptionPane.showMessageDialog(this, hasil, "Success",
            JOptionPane.INFORMATION_MESSAGE);

        resetForm();
    }

    private boolean isValidEmail(String email) {
        // Pattern untuk validasi email
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$";
        return Pattern.matches(emailRegex, email);
    }

    private boolean isValidTelepon(String telepon) {
        // Hanya angka, panjang 10-13
        return telepon.matches("\\\\d{10,13}");
    }

    private void showError(String message) {
        JOptionPane.showMessageDialog(this, message, "Validasi Error",
            JOptionPane.ERROR_MESSAGE);
    }

    private void resetForm() {
        textNama.setText("");
        textEmail.setText("");
        textTelepon.setText("");
        comboJurusan.setSelectedIndex(0);
        textPassword.setText("");
        textKonfirmasiPassword.setText("");
        textAlamat.setText("");
        textNama.requestFocus();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new FormRegistrasi().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
          <h4>✅ Best Practices Validasi:</h4>
          <ol>
            <li>Validasi di sisi client (GUI) untuk UX yang baik</li>
            <li>Berikan pesan error yang jelas dan spesifik</li>
            <li>Set focus ke field yang error</li>
            <li>Gunakan regex untuk validasi format (email, telepon, dll)</li>
            <li>Validasi range (min/max karakter, min/max nilai)</li>
            <li>Gunakan try-catch untuk parsing angka</li>
          </ol>
        </div>
      `
    },
    {
      id: "custom-styling",
      title: "Custom Styling - Font, Warna & Border",
      content: `
        <h2>Styling Komponen GUI</h2>
        <p>Membuat aplikasi lebih menarik dengan custom font, warna, dan border.</p>

        <h3>Contoh Aplikasi dengan Custom Styling</h3>
      `,
      code: {
        language: "java",
        filename: "AplikasiStyled.java",
        content: `import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;

public class AplikasiStyled extends JFrame {
    public AplikasiStyled() {
        setTitle("Demo Custom Styling");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Set warna background frame
        getContentPane().setBackground(new Color(240, 240, 245));

        // ========== PANEL HEADER ==========
        JPanel panelHeader = new JPanel();
        panelHeader.setBackground(new Color(63, 81, 181)); // Material Blue
        panelHeader.setPreferredSize(new Dimension(500, 80));

        JLabel labelJudul = new JLabel("Aplikasi dengan Custom Styling");
        labelJudul.setFont(new Font("Arial", Font.BOLD, 24));
        labelJudul.setForeground(Color.WHITE);
        panelHeader.add(labelJudul);

        // ========== PANEL KONTEN ==========
        JPanel panelKonten = new JPanel();
        panelKonten.setLayout(new BoxLayout(panelKonten, BoxLayout.Y_AXIS));
        panelKonten.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panelKonten.setBackground(new Color(240, 240, 245));

        // Card 1: Custom Font
        JPanel card1 = buatCard("Custom Font", new Color(76, 175, 80));
        JLabel label1 = new JLabel("Font: Arial Bold 16px");
        label1.setFont(new Font("Arial", Font.BOLD, 16));
        card1.add(label1);

        // Card 2: Custom Border
        JPanel card2 = buatCard("Custom Border", new Color(255, 152, 0));
        JLabel label2 = new JLabel("Border: Line Border 3px");
        label2.setBorder(BorderFactory.createLineBorder(Color.RED, 3));
        label2.setFont(new Font("Verdana", Font.PLAIN, 14));
        card2.add(label2);

        // Card 3: Rounded Border
        JPanel card3 = buatCard("Rounded Border", new Color(156, 39, 176));
        JButton btnRounded = new JButton("Button dengan Border Bulat");
        btnRounded.setFont(new Font("Segoe UI", Font.BOLD, 14));
        btnRounded.setBackground(new Color(233, 30, 99));
        btnRounded.setForeground(Color.WHITE);
        btnRounded.setFocusPainted(false);
        btnRounded.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(194, 24, 91), 2),
            BorderFactory.createEmptyBorder(10, 20, 10, 20)
        ));
        card3.add(btnRounded);

        // Card 4: Multiple Borders
        JPanel card4 = buatCard("Compound Border", new Color(0, 188, 212));
        JTextArea textArea = new JTextArea(2, 30);
        textArea.setFont(new Font("Courier New", Font.PLAIN, 12));
        textArea.setText("TextArea dengan multiple borders:\\n- Titled Border\\n- Empty Border untuk padding");

        // Compound border: Titled + Line + Empty (padding)
        Border titleBorder = BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(new Color(0, 150, 136), 2),
            "Input Area",
            TitledBorder.LEFT,
            TitledBorder.TOP,
            new Font("Arial", Font.BOLD, 12),
            new Color(0, 150, 136)
        );
        Border paddingBorder = BorderFactory.createEmptyBorder(10, 10, 10, 10);
        textArea.setBorder(BorderFactory.createCompoundBorder(titleBorder, paddingBorder));

        card4.add(textArea);

        panelKonten.add(card1);
        panelKonten.add(Box.createVerticalStrut(10));
        panelKonten.add(card2);
        panelKonten.add(Box.createVerticalStrut(10));
        panelKonten.add(card3);
        panelKonten.add(Box.createVerticalStrut(10));
        panelKonten.add(card4);

        // Scroll pane untuk konten
        JScrollPane scrollPane = new JScrollPane(panelKonten);
        scrollPane.setBorder(null);

        add(panelHeader, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);
    }

    private JPanel buatCard(String judul, Color warna) {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(Color.WHITE);
        card.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(200, 200, 200), 1),
            BorderFactory.createEmptyBorder(15, 15, 15, 15)
        ));
        card.setMaximumSize(new Dimension(Integer.MAX_VALUE, 150));

        JLabel labelJudul = new JLabel(judul);
        labelJudul.setFont(new Font("Arial", Font.BOLD, 16));
        labelJudul.setForeground(warna);
        labelJudul.setAlignmentX(Component.LEFT_ALIGNMENT);

        card.add(labelJudul);
        card.add(Box.createVerticalStrut(10));

        return card;
    }

    public static void main(String[] args) {
        // Set Look and Feel ke system
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        SwingUtilities.invokeLater(() -> {
            new AplikasiStyled().setVisible(true);
        });
    }
}`
      },
      additionalContent: `
        <h3>Referensi Styling:</h3>

        <h4>1. Font</h4>
        <ul>
          <li><code>new Font("Arial", Font.BOLD, 16)</code></li>
          <li>Style: PLAIN, BOLD, ITALIC, BOLD + ITALIC</li>
          <li>Common fonts: Arial, Verdana, Times New Roman, Courier New, Segoe UI</li>
        </ul>

        <h4>2. Warna (Color)</h4>
        <ul>
          <li><code>new Color(255, 0, 0)</code> - RGB</li>
          <li><code>Color.RED, Color.BLUE, Color.GREEN</code> - Predefined</li>
          <li><code>new Color(255, 0, 0, 128)</code> - RGBA (dengan transparansi)</li>
        </ul>

        <h4>3. Border</h4>
        <ul>
          <li><code>BorderFactory.createLineBorder(Color, thickness)</code> - Garis</li>
          <li><code>BorderFactory.createEmptyBorder(top, left, bottom, right)</code> - Padding</li>
          <li><code>BorderFactory.createTitledBorder("Title")</code> - Border dengan judul</li>
          <li><code>BorderFactory.createCompoundBorder(border1, border2)</code> - Kombinasi</li>
          <li><code>BorderFactory.createEtchedBorder()</code> - Border etched</li>
          <li><code>BorderFactory.createBevelBorder(type)</code> - Border 3D</li>
        </ul>

        <h4>4. Look and Feel</h4>
        <ul>
          <li><code>UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName())</code></li>
          <li>Membuat aplikasi mengikuti style system (Windows/Mac/Linux)</li>
        </ul>
      `
    },
    {
      id: "latihan-gui-lanjutan",
      title: "Latihan & Mini Project",
      content: `
        <h2>Latihan Praktik GUI Lanjutan</h2>

        <h3>Latihan 1: Form Pendaftaran Event</h3>
        <p><strong>Tugas:</strong> Buat form pendaftaran event dengan komponen:</p>
        <ul>
          <li>Nama (JTextField) - validasi min 3 karakter</li>
          <li>Email (JTextField) - validasi format email</li>
          <li>Jenis Event (JComboBox) - Workshop, Seminar, Webinar</li>
          <li>Sesi yang diikuti (JCheckBox) - Sesi 1, Sesi 2, Sesi 3</li>
          <li>Kategori Peserta (JRadioButton) - Mahasiswa, Dosen, Umum</li>
          <li>Catatan (JTextArea)</li>
          <li>Button Submit dengan validasi lengkap</li>
          <li>Tampilkan hasil dalam JTable</li>
        </ul>

        <h3>Latihan 2: Aplikasi To-Do List</h3>
        <p><strong>Tugas:</strong> Buat aplikasi To-Do List dengan fitur:</p>
        <ul>
          <li>Input task (JTextField + JButton "Add")</li>
          <li>Tampilkan tasks dalam JList</li>
          <li>Button "Delete" untuk menghapus task terpilih</li>
          <li>Button "Clear All" untuk menghapus semua tasks</li>
          <li>Counter jumlah tasks</li>
          <li>Menu Bar: File (New, Clear, Exit), Help (About)</li>
        </ul>

        <h3>Latihan 3: Kalkulator Sederhana</h3>
        <p><strong>Tugas:</strong> Buat kalkulator dengan:</p>
        <ul>
          <li>Display hasil (JTextField, setEditable(false))</li>
          <li>Button angka 0-9 (GridLayout 4x4)</li>
          <li>Button operasi (+, -, *, /)</li>
          <li>Button = untuk hasil</li>
          <li>Button C untuk clear</li>
          <li>Custom styling: warna button, font, border</li>
        </ul>

        <h3>Mini Project: Aplikasi Manajemen Kontak</h3>
        <p><strong>Deskripsi:</strong> Aplikasi lengkap untuk mengelola kontak dengan fitur:</p>
      `,
      code: {
        language: "java",
        filename: "ManajemenKontak.java",
        content: `// TEMPLATE MINI PROJECT
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class ManajemenKontak extends JFrame {
    // Komponen GUI
    private JTable table;
    private DefaultTableModel model;
    private JTextField textNama, textTelepon, textEmail;
    private JTextArea textAlamat;
    private JComboBox<String> comboKategori;

    public ManajemenKontak() {
        setTitle("Aplikasi Manajemen Kontak");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // TODO: Implementasikan komponen-komponen berikut:

        // 1. Menu Bar
        //    - Menu File: New, Open, Save, Exit
        //    - Menu Edit: Add, Edit, Delete, Clear
        //    - Menu Help: About

        // 2. Panel Input (Kiri)
        //    - Field: Nama, Telepon, Email, Kategori (JComboBox), Alamat
        //    - Button: Tambah, Update, Hapus, Clear

        // 3. Panel Tabel (Kanan)
        //    - JTable dengan kolom: ID, Nama, Telepon, Email, Kategori
        //    - JScrollPane
        //    - Search bar di atas tabel

        // 4. Status Bar (Bawah)
        //    - Label untuk menampilkan jumlah kontak

        // 5. Fitur yang harus ada:
        //    - Validasi input (semua field tidak boleh kosong)
        //    - Validasi format email
        //    - Validasi telepon (hanya angka)
        //    - Click row di tabel untuk edit
        //    - Search/filter kontak
        //    - Konfirmasi sebelum delete
        //    - Custom styling

        buatMenuBar();
        buatPanelInput();
        buatPanelTabel();
        buatStatusBar();
    }

    private void buatMenuBar() {
        // Implementasi menu bar
    }

    private void buatPanelInput() {
        // Implementasi panel input
    }

    private void buatPanelTabel() {
        // Implementasi tabel
    }

    private void buatStatusBar() {
        // Implementasi status bar
    }

    private void tambahKontak() {
        // Implementasi tambah kontak dengan validasi
    }

    private void updateKontak() {
        // Implementasi update kontak
    }

    private void hapusKontak() {
        // Implementasi hapus kontak
    }

    private void cariKontak(String keyword) {
        // Implementasi search/filter
    }

    private boolean validasiInput() {
        // Implementasi validasi
        return true;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ManajemenKontak().setVisible(true);
        });
    }
}

// TIPS PENGERJAAN:
// 1. Kerjakan step by step, jangan langsung semua
// 2. Test setiap fitur yang sudah dibuat
// 3. Gunakan try-catch untuk error handling
// 4. Tambahkan JOptionPane untuk feedback ke user
// 5. Gunakan border dan padding untuk UI yang rapi`
      },
      additionalContent: `
        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
          <h4>💡 Kriteria Mini Project:</h4>
          <ul>
            <li>✅ Semua fitur berfungsi dengan baik</li>
            <li>✅ Validasi input lengkap</li>
            <li>✅ UI rapi dan user-friendly</li>
            <li>✅ Error handling yang baik</li>
            <li>✅ Code terstruktur dan rapi</li>
            <li>✅ Ada komentar untuk code yang kompleks</li>
          </ul>
        </div>

        <h3>Bonus Challenge:</h3>
        <ul>
          <li>Tambahkan fitur export ke CSV</li>
          <li>Tambahkan fitur import dari CSV</li>
          <li>Tambahkan foto kontak (JLabel untuk display image)</li>
          <li>Dark mode toggle</li>
          <li>Sort berdasarkan kolom (click header tabel)</li>
        </ul>
      `
    },
    {
      id: "summary-gui-lanjutan",
      title: "Rangkuman Modul GUI Lanjutan",
      content: `
        <h2>🎯 Rangkuman Modul 6</h2>

        <h3>Yang Sudah Dipelajari:</h3>

        <h4>1. Komponen Input Lanjutan</h4>
        <ul>
          <li><strong>JComboBox</strong> - Dropdown pilihan, addItem(), removeItem()</li>
          <li><strong>JList</strong> - Daftar pilihan multiple dengan ScrollPane</li>
          <li><strong>JCheckBox</strong> - Checkbox untuk pilihan multiple</li>
          <li><strong>JRadioButton</strong> - Radio button dengan ButtonGroup</li>
        </ul>

        <h4>2. Komponen Display</h4>
        <ul>
          <li><strong>JTable</strong> - Tabel data dengan DefaultTableModel</li>
          <li><strong>JTextArea</strong> - Area teks multi-baris</li>
          <li><strong>JScrollPane</strong> - Scroll untuk komponen yang besar</li>
        </ul>

        <h4>3. Menu & Navigation</h4>
        <ul>
          <li><strong>JMenuBar</strong> - Menu bar utama</li>
          <li><strong>JMenu</strong> - Menu dropdown</li>
          <li><strong>JMenuItem</strong> - Item dalam menu</li>
          <li><strong>Keyboard Shortcuts</strong> - Mnemonic & Accelerator</li>
        </ul>

        <h4>4. Dialog & Popup</h4>
        <ul>
          <li><strong>JOptionPane</strong> - Dialog standar (message, confirm, input, option)</li>
          <li><strong>JDialog</strong> - Custom dialog window</li>
          <li><strong>JFileChooser</strong> - Dialog pilih file</li>
        </ul>

        <h4>5. Validasi & Error Handling</h4>
        <ul>
          <li>Validasi input field (kosong, min/max length)</li>
          <li>Validasi format (email, telepon dengan regex)</li>
          <li>Error message yang jelas</li>
          <li>Set focus ke field yang error</li>
        </ul>

        <h4>6. Custom Styling</h4>
        <ul>
          <li><strong>Font</strong> - new Font(name, style, size)</li>
          <li><strong>Color</strong> - new Color(r, g, b) atau Color.XXX</li>
          <li><strong>Border</strong> - Line, Empty, Titled, Compound</li>
          <li><strong>Look and Feel</strong> - UIManager untuk native look</li>
        </ul>

        <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
          <h4>✅ Checklist Kemampuan:</h4>
          <p>Setelah modul ini, Anda harus bisa:</p>
          <ul>
            <li>✅ Membuat form input lengkap dengan berbagai komponen</li>
            <li>✅ Menampilkan dan memanipulasi data dalam JTable</li>
            <li>✅ Membuat menu bar profesional dengan shortcuts</li>
            <li>✅ Menampilkan dialog dan mendapatkan input dari user</li>
            <li>✅ Melakukan validasi input yang comprehensive</li>
            <li>✅ Styling aplikasi agar terlihat menarik</li>
            <li>✅ Membuat aplikasi GUI yang kompleks dan user-friendly</li>
          </ul>
        </div>

        <h3>Tips Membuat Aplikasi GUI Profesional:</h3>
        <ol>
          <li><strong>Perencanaan</strong> - Buat mockup/sketch UI terlebih dahulu</li>
          <li><strong>Konsistensi</strong> - Gunakan font, warna, spacing yang konsisten</li>
          <li><strong>Feedback</strong> - Selalu beri feedback ke user (success, error, loading)</li>
          <li><strong>Validasi</strong> - Validasi semua input sebelum diproses</li>
          <li><strong>Error Handling</strong> - Tangkap dan handle semua possible error</li>
          <li><strong>Keyboard Support</strong> - Tambahkan shortcuts untuk efisiensi</li>
          <li><strong>Responsive</strong> - Pastikan UI tetap bagus di berbagai ukuran window</li>
          <li><strong>Clean Code</strong> - Pisahkan logic, UI, dan data</li>
        </ol>

        <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4">
          <h4>🚀 Langkah Selanjutnya:</h4>
          <p>Setelah menguasai GUI Lanjutan, Anda siap untuk:</p>
          <ul>
            <li>Modul 7: <strong>Database dengan Java</strong> - Koneksi ke MySQL, CRUD operations</li>
            <li>Modul 8: <strong>File Handling</strong> - Baca/tulis file, serialization</li>
            <li>Modul 9: <strong>Exception Handling</strong> - Handle error dengan baik</li>
            <li>Modul 10: <strong>Best Practices</strong> - Design patterns, deployment</li>
            <li>Modul 11: <strong>Project Akhir</strong> - Aplikasi CRUD lengkap dengan database</li>
          </ul>
        </div>

        <h3>Referensi Tambahan:</h3>
        <ul>
          <li><a href="https://docs.oracle.com/javase/tutorial/uiswing/" target="_blank">Oracle Java Swing Tutorial</a></li>
          <li><a href="https://docs.oracle.com/javase/8/docs/api/javax/swing/package-summary.html" target="_blank">Java Swing API Documentation</a></li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
          <p><strong>💪 Selamat!</strong> Anda telah menyelesaikan Modul 6 - GUI Lanjutan. Sekarang Anda memiliki kemampuan untuk membuat aplikasi desktop yang kompleks dan profesional!</p>
          <p>Jangan lupa praktik dengan mengerjakan latihan dan mini project. <em>Practice makes perfect!</em></p>
        </div>
      `
    }
  ]
};
