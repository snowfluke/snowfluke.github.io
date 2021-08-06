(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{521:function(a,n,t){"use strict";t.r(n);var s=t(13),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("Head",{attrs:{ke:"blog",alt:"Cara Menghilangkan Iklan Disqus Dengan 3 Baris Javascript",by:"Awal Ariansyah",bylink:"#",src:"Canva",srclink:"#"}}),a._v(" "),t("p",[a._v("Disqus merupakan salah satu plugin komentar yang sangat populer karena kemudahannya dalam menggunakan dan mengelola komentar. Bahkan dalam halaman statis seperti blog ini bisa menggunakan fitur komentar berkat adanya Disqus. Namun seringkali iklannya sangat menggangu kenyaman dalam membaca blog dan saya pribadi cenderung ingin cepat-cepat scroll keatas dikarenakan iklan disqus yang terkadang tidak senonoh.")]),a._v(" "),t("p",[a._v("Kali ini berbekal pengetahuan saya di bidang Javascript dan sangat sering melakukan manipulasi DOM. Saya akan menunjukkan bagaimana proses dalam menghilangkan iklan Disqus hanya dengan 3 baris kode Javascript.")]),a._v(" "),t("h2",{attrs:{id:"menganalisis-pola-penamaan-elemen-disqus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menganalisis-pola-penamaan-elemen-disqus"}},[a._v("#")]),a._v(" Menganalisis pola penamaan elemen Disqus")]),a._v(" "),t("p",[a._v("Hal pertama yang saya lakukan tentu saja adalah mengetahui elemen HTML mana yang menampilkan iklan, bermodalkan Developer Tools (Klik kanan > Inspect Element) saya berhasil menemukan elemen yang menampilkan iklan yaitu berupa tag iframe.")]),a._v(" "),t("Img",{attrs:{url:"post/dsq.webp",alt:"Inspect Element Disqus Ads"}}),a._v(" "),t("p",[a._v("Kesimpulan pertama yang didapatkan adalah")]),a._v(" "),t("ol",[t("li",[a._v("Disqus menggunakan iframe untuk menampilkan iklannya")]),a._v(" "),t("li",[a._v("Pola penamaan id elemennya adalah "),t("strong",[a._v("dsq-app(nomor)")])]),a._v(" "),t("li",[a._v("Nomor untuk elemen iklan yang terdapat di halaman ini adalah "),t("strong",[a._v("5028")])])]),a._v(" "),t("h2",{attrs:{id:"mengambil-elemen-dan-pola-urutan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengambil-elemen-dan-pola-urutan"}},[a._v("#")]),a._v(" Mengambil elemen dan pola urutan")]),a._v(" "),t("Img",{attrs:{url:"post/dsq-iframe.webp",alt:"Iframe Disqus"}}),a._v(" "),t("p",[a._v("Disqus tentu saja tidak hanya membawa satu iframe, pasti membawa iframe lain untuk hal yang lain. Jika kita analisis berdasarkan tampilan disqus, maka terdapat setidaknya 2 buah iframe untuk menampilkan iklan dan komentar.")]),a._v(" "),t("p",[a._v("Selanjutnya kita coba ambil semua elemen dengan pola penamaan "),t("strong",[a._v("dsq-app")]),a._v(" menggunakan kode seperti terlihat di gambar.")]),a._v(" "),t("Img",{attrs:{url:"post/dsq2.webp",alt:"Disqus Element Query"}}),a._v(" "),t("p",[a._v("Ternyata benar asumsi kita bahwa elemen Disqus tidak hanya 1, disini terlihat disqus memiliki 3 elemen iframe dengan pola penamaan yang ada. Kemudian kita tahu bahwa iframe iklan pada halaman ini memiliki angka "),t("strong",[a._v("5028")]),a._v(". Kita dapat menarik kesimpulan lagi sebagai berikut:")]),a._v(" "),t("ol",[t("li",[a._v("Elemen iframe Disqus berjumlah 3")]),a._v(" "),t("li",[a._v("Elemen iklan Disqus berada pada index ke-0")])]),a._v(" "),t("p",[a._v("Maka selanjutnya kita hanya perlu melakukan manipulasi DOM dengan elemen ke-0 iframe Disqus")]),a._v(" "),t("h2",{attrs:{id:"menimpa-inline-style-iframe-disqus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menimpa-inline-style-iframe-disqus"}},[a._v("#")]),a._v(" Menimpa inline style iframe Disqus")]),a._v(" "),t("p",[a._v("Disqus cerdik, mereka menempatkan styling elemen tidak hanya menggunakan eksternal CSS namun juga inline styling dan semua nilai properti cssnya diberikan kode "),t("strong",[a._v("!important")]),a._v(" untuk memberikan prioritas stylingnya.")]),a._v(" "),t("p",[a._v("Kita akan menghapus inline styling atau lebih tepatnya me-replace inline style iframe Disqus menjadi inline style kosong. Lihat gambar.")]),a._v(" "),t("Img",{attrs:{url:"post/dsq3.webp",alt:"Removing Inline Style Disqus"}}),a._v(" "),t("p",[a._v("Lihat yang terjadi adalah tinggi dari iframe iklan Disqus mengecil menjadi satu blok, namun iklan masih tetap ada. Selanjutnya bisa kita lakukan langkah final.")]),a._v(" "),t("h2",{attrs:{id:"menghilangkan-semua-style-eksternal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menghilangkan-semua-style-eksternal"}},[a._v("#")]),a._v(" Menghilangkan semua style eksternal")]),a._v(" "),t("p",[a._v("Kita hanya tinggal memberikan style "),t("strong",[a._v("display: 'none'")]),a._v(" maka iklan akan menghilang. Tadaaa.")]),a._v(" "),t("Img",{attrs:{url:"post/dsq4.webp",alt:"Display None Disqus"}}),a._v(" "),t("p",[a._v("Selanjutnya tinggal menggabungkan seluruh kode menjadi sebuah skrip Javascript yang utuh, seperti dibawah. Bungkus dengan tag "),t("code",[a._v("<script>")]),a._v(" lalu letakkan diatas tag "),t("code",[a._v("</body>")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Mengambil elemen iframe iklan disqus di index ke-0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" ads "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("querySelectorAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[id^=\"dsq-app\"]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Menghapus inline style Disqus")]),a._v("\nads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"style"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Menghilangkan iklan Disqus")]),a._v("\nads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("display "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"none"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"pengembangan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pengembangan"}},[a._v("#")]),a._v(" Pengembangan")]),a._v(" "),t("p",[a._v("Terkadang kita harus menunggu sampai konten Disqus dimuat terlebih dahulu baru mengeksekusi skrip menghilangkan iklan Disqus. Kita bisa memodifikasi kode diatas menjadi seperti berikut:")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Membuat interval per 100ms untuk mengecek apakah elemen Disqus sudah benar-benar dimuat")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Jika sudah maka jalankan skrip menghilangkan iklan Disqus")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Var digunakan untuk redeklarasi variable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" editable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" interval "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("querySelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#disqus_thread"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("querySelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#disqus_thread"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("clientHeight "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("editable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" ads "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("querySelectorAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[id^=\"dsq-app\"]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t\t\tads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"style"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t\t\tads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("display "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"none"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Hapus 2 baris dibawah untuk web PWA")]),a._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clearInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("interval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t\t\teditable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Ubah 100 menjadi 2000 untuk web PWA")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Tips untuk web PWA")]),a._v(" "),t("p",[a._v("Jika komentar disqus me-reload tanpa reload page (studi kasus untuk web PWA), maka otomatis iklan akan muncul kembali karena kita tidak me-reload page. Solusinya adalah dengan menghapus "),t("strong",[a._v("clearInterval(interval)")]),a._v(" dan "),t("strong",[a._v("editable = false")]),a._v(" kemudian naikkan angka interval dari "),t("strong",[a._v("100")]),a._v(" menjadi "),t("strong",[a._v("2000")]),a._v(" hal ini bertujuan untuk terus menjalankan interval dengan waktu 2 detik sekali jika iklan disqus me-reload tanpa reload page.")])]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),t("p",[a._v("Cara ini baru diuji di web ini, untuk web lain diperlukan pengujian lebih lanjut. Kemungkinan besar di web lain Disqus menggunakan pola penamaan yang berbeda, oleh karena itu sesuaikan nama id diatas sesuai dengan pola penamaan Disqus di web kamu.")])]),a._v(" "),t("Disqusa",{attrs:{title:a.$frontmatter.title}})],1)}),[],!1,null,null,null);n.default=e.exports}}]);