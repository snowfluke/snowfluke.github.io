(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{425:function(a,e,t){"use strict";t.r(e);var n=t(15),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("Head",{attrs:{ke:"blog",alt:"Perbandingan ukuran oleh Awal Ariansyah"}}),a._v(" "),t("p",[a._v("Photo by "),t("a",{attrs:{href:"#"}},[a._v("Awal Ariansyah")]),a._v(" on "),t("a",{attrs:{href:"#"}},[a._v("My Notebook")])]),a._v(" "),t("h2",{attrs:{id:"pengenalan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pengenalan"}},[a._v("#")]),a._v(" Pengenalan")]),a._v(" "),t("p",[a._v("Halo semua, kali ini saya akan menuliskan pengalaman saya dalam mengurangi ukuran aplikasi android yang dibuat menggunakan expo/react-native. Sebenarnya artikel ini hanya menterjemahkan apa yang sudah saya publish di Dev.to dengan judul "),t("a",{attrs:{href:"https://dev.to/awalariansyah/a-tale-of-reducing-expo-react-native-android-application-3cgb",target:"_blank",rel:"noopener noreferrer"}},[a._v("A Tale of Reducing Expo/React Native Android Application "),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Oke, sebelumnya mari melihat development environment yang saya gunakan. Saya menggunakan "),t("code",[a._v("Lubuntu 20.04 focal")]),a._v(", dengan Desktop Environment "),t("code",[a._v("LxQt 0.14.1")]),a._v(" seperti yang tertera di gambar bawah ini. Bagi rekan-rekan yang menggunakan Windows, kurang lebih langkahnya sama.")]),a._v(" "),t("Img",{attrs:{url:"post/devto1.webp",alt:"Desktop Environment"}}),a._v(" "),t("p",[a._v("Setelah mengalami banyak "),t("i",[a._v("error")]),a._v(", akhirnya saya berhasil mengurangi aplikasi android yang saya buat dari 52MB menjadi 27MB, penurunan sebanyak 49%! Dan setelah mengetahui "),t("i",[a._v("error-error")]),a._v(" apa saja yang saya hadapi, saya tulis artikel ini dengan harapan rekan-rekan bisa mengurangi "),t("i",[a._v("error")]),a._v(" yang ada.")]),a._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),t("p",[a._v("Ada beberapa paket/aplikasi yang harus disiapkan yaitu sebagai berikut, jika kalian menggunakan Windows cukup install Java dan SDK atau langsung install Android Studio. Namun karena saya menggunakan Ubuntu, persiapannya agak berbeda.")]),a._v(" "),t("h3",{attrs:{id:"install-jre"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-jre"}},[a._v("#")]),a._v(" Install JRE")]),a._v(" "),t("blockquote",[t("p",[a._v("sudo apt-get install default-jre")])]),a._v(" "),t("p",[a._v("Cek instalasi")]),a._v(" "),t("blockquote",[t("p",[a._v("java -version")])]),a._v(" "),t("h3",{attrs:{id:"install-jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-jdk"}},[a._v("#")]),a._v(" Install JDK")]),a._v(" "),t("blockquote",[t("p",[a._v("sudo apt-get install defalut-jdk")])]),a._v(" "),t("p",[a._v("Cek instalasi")]),a._v(" "),t("blockquote",[t("p",[a._v("javac -version")])]),a._v(" "),t("Img",{attrs:{url:"post/devto2.webp",alt:"Install JRE dan JDK"}}),a._v(" "),t("h3",{attrs:{id:"install-expo-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-expo-command-line"}},[a._v("#")]),a._v(" Install Expo Command Line")]),a._v(" "),t("blockquote",[t("p",[a._v("sudo npm install --global expo-cli")])]),a._v(" "),t("h3",{attrs:{id:"install-android-command-line-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-android-command-line-tools"}},[a._v("#")]),a._v(" Install Android Command Line Tools")]),a._v(" "),t("blockquote",[t("p",[a._v("sudo export ANDROID_HOME=/usr/lib/android-sdk")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("blockquote",[t("p",[a._v("sudo unzip commandlinetools-linux-6609375_latest.zip -d cmdline-tools")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo mv cmdline-tools $ANDROID_HOME/")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo export PATH=$ANDROID_HOME/cmdline-tools/tools/bin:$PATH")])]),a._v(" "),t("h3",{attrs:{id:"mengatur-lisensi-dari-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengatur-lisensi-dari-sdk"}},[a._v("#")]),a._v(" Mengatur lisensi dari sdk")]),a._v(" "),t("p",[a._v("Pergi ke folder "),t("code",[a._v("/usr/lib/android-sdk/")])]),a._v(" "),t("blockquote",[t("p",[a._v("cd /usr/lib/android-sdk/")])]),a._v(" "),t("p",[a._v("Kita harus menyetujui semua lisensi dari sdk sebelum menggunakannya")]),a._v(" "),t("blockquote",[t("p",[a._v("sudo yes | sdkmanager --licenses")])]),a._v(" "),t("p",[a._v("Serta kita perlu mengatur ulang "),t("i",[a._v("permission")]),a._v(" dari folder "),t("code",[a._v("/tmp")]),a._v(" untuk menghindari masalah "),t("i",[a._v("permission")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo chmod -R 0777 /tmp")])]),a._v(" "),t("h2",{attrs:{id:"aksi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aksi"}},[a._v("#")]),a._v(" Aksi")]),a._v(" "),t("p",[a._v("Langkah pertama yang harus rekan-rekan lakukan adalah membuka folder project expo/react-native yang ingin di kurangi ukuran aplikasinya menggunakan terminal. Pastikan rekan-rekan mencadangkan terlebih dahulu file-file tersebut.")]),a._v(" "),t("h3",{attrs:{id:"eject-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eject-project"}},[a._v("#")]),a._v(" Eject project")]),a._v(" "),t("p",[a._v("Jalankan perintah berikut untuk meng-eject file project expo ke dalam folder android dan iOs.")]),a._v(" "),t("blockquote",[t("p",[a._v("expo eject")])]),a._v(" "),t("p",[a._v("Rekan-rekan akan diberikan beberapa pertanyaan, cukup isikan sesuai dengan informasi project yang ada. Setelah selesai, akan ada 2 folder baru yaitu android dan iOs.")]),a._v(" "),t("h3",{attrs:{id:"buat-file-local-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buat-file-local-properties"}},[a._v("#")]),a._v(" Buat file local.properties")]),a._v(" "),t("p",[a._v("Pergi ke folder "),t("code",[a._v("android")]),a._v(" dan buat file baru dengan nama "),t("code",[a._v("local.properties")]),a._v(". File ini akan digunakan untuk menunjukkan lokasi sdk ke gradle saat mem-"),t("code",[a._v("build")]),a._v(" aplikasi.")]),a._v(" "),t("blockquote",[t("p",[a._v("cd android")])]),a._v(" "),t("blockquote",[t("p",[a._v("touch local.properties")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo nano local.properties")])]),a._v(" "),t("p",[a._v("Buat variable "),t("code",[a._v("sdk.dir")]),a._v(" seperti berikut")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("sdk.dir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/usr/lib/android-sdk/")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("Img",{attrs:{url:"post/devto3.webp",alt:"Membuat local properties untuk gradle"}}),a._v(" "),t("p",[t("code",[a._v("Ctrl + O")]),a._v(", "),t("code",[a._v("Enter")]),a._v(", "),t("code",[a._v("Ctrl + x")]),a._v(" untuk menyimpan dan keluar dari teks editor nano.")]),a._v(" "),t("h3",{attrs:{id:"membuat-keystore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#membuat-keystore"}},[a._v("#")]),a._v(" Membuat keystore")]),a._v(" "),t("p",[a._v("Selanjutnya ke folder "),t("code",[a._v("android/app")]),a._v(" pada terminal dan buat sebuah "),t("b",[a._v("keystore")]),a._v(" sehingga kita bisa mem-publish aplikasi kita ke Google Play Store.")]),a._v(" "),t("blockquote",[t("p",[a._v("cd android/app")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo keytool -genkey -v -keystore yourkeyname.keystore -alias yourkeyaliasname -keyalg RSA -keysize 2048 -validity 10000")])]),a._v(" "),t("p",[a._v("Ganti "),t("code",[a._v("yourkeyname")]),a._v(" dan "),t("code",[a._v("yourkeyaliasname")]),a._v(" dan rekan-rekan akan ditanyai password untuk "),t("b",[a._v("keystoremu")]),a._v(" dan beberapa pertanyaan. Pastikan rekan-rekan mencatat passwordnya supaya tidak lupa.")]),a._v(" "),t("p",[a._v("Setelah selesai, sebuah file baru akan muncul dengan ekstensi (.keystore). Itu adalah "),t("b",[a._v("keystore")]),a._v(" rekan-rekan.")]),a._v(" "),t("h3",{attrs:{id:"mengubah-gradle-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengubah-gradle-properties"}},[a._v("#")]),a._v(" Mengubah gradle.properties")]),a._v(" "),t("p",[a._v("Sekarang kembali ke direktori sebelumnya dan ubah file "),t("code",[a._v("gradle.properties")]),a._v(".")]),a._v(" "),t("blockquote",[t("p",[a._v("cd ..")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo nano gradle.properties")])]),a._v(" "),t("p",[a._v("Tambahkan script berikut")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("MYAPP_UPLOAD_STORE_FILE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yourkeyname.keystore")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("MYAPP_UPLOAD_KEY_ALIAS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yourkeyaliasname")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("MYAPP_UPLOAD_STORE_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yourkeypassword")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("MYAPP_UPLOAD_KEY_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yourkeypassword")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("org.gradle.jvmargs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("-Xmx4096m")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("Img",{attrs:{url:"post/devto4.webp",alt:"Mengubah properties gradle"}}),a._v(" "),t("p",[a._v("Ganti "),t("code",[a._v("yourkeyname")]),a._v(", "),t("code",[a._v("yourkeyaliasname")]),a._v(" dan "),t("code",[a._v("yourkeypassword")]),a._v(" sesuai dengan "),t("b",[a._v("keystore")]),a._v(" yang telah kalian buat lalu simpan.")]),a._v(" "),t("h3",{attrs:{id:"mengubah-build-gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengubah-build-gradle"}},[a._v("#")]),a._v(" Mengubah build.gradle")]),a._v(" "),t("p",[a._v("Sekarang, pergi ke folder "),t("code",[a._v("app")]),a._v(" dan ubah file "),t("code",[a._v("build.gradle")]),a._v(".")]),a._v(" "),t("blockquote",[t("p",[a._v("cd app")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo nano build.gradle")])]),a._v(" "),t("p",[a._v("Ubah baris berikut dari "),t("code",[a._v("false")]),a._v(" ke "),t("code",[a._v("true")])]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("enableSeparateBuildPerCPUArchitecture = false")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("enableProguardInReleaseBuilds = false")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("Img",{attrs:{url:"post/devto5.webp",alt:"Mengubah build gradle"}}),a._v(" "),t("p",[a._v("Scroll ke bawah ke bagian "),t("code",[a._v("signingConfigs")]),a._v(" dan tambahkan konfigurasi berikut dibawah "),t("code",[a._v("debug")])]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("\trelease")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("            if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("(project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("                storeFile")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("file(MYAPP_UPLOAD_STORE_FILE)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("                storePassword")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("MYAPP_UPLOAD_STORE_PASSWORD")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("                keyAlias")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("MYAPP_UPLOAD_KEY_ALIAS")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("                keyPassword")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("MYAPP_UPLOAD_KEY_PASSWORD")]),a._v("\n        }\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("Lalu, di bagian "),t("code",[a._v("buildTypes")]),a._v(" cari kurung kurawal "),t("code",[a._v("release")]),a._v(" dan ubah baris berikut (gunanya untuk merilis aplikasi kita pada versi release bukan versi percobaan/debug)")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("signingConfig")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("signingConfigs.debug")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("menjadi")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("signingConfig")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("signingConfigs.release")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("dan tambahkan baris berikut dibawah  "),t("code",[a._v("minifyEnabled")])]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("shrinkResources")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("Img",{attrs:{url:"post/devto6.webp",alt:"Mengubah build gradle"}}),a._v(" "),t("h3",{attrs:{id:"lainnya"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lainnya"}},[a._v("#")]),a._v(" Lainnya")]),a._v(" "),t("p",[a._v("Lalu scroll ke bawah ke baris paling akhir, tambahkan kurung kurawal penutup "),t("code",[a._v("}")]),a._v(". Tanpa kurung ini rekan-rekan akan mengalami "),t("code",[a._v("error")]),a._v(".")]),a._v(" "),t("Img",{attrs:{url:"post/devto7.webp",alt:"Menambah kurung kurawal"}}),a._v(" "),t("p",[a._v("Terakhir, jika rekan-rekan ingin mem-build file .apk secara universal, maka scroll ke atas dan cari kata "),t("code",[a._v("splits")]),a._v(", lalu di dalam "),t("code",[a._v("abi")]),a._v(" ubah "),t("code",[a._v("universalApk")]),a._v(" dari "),t("code",[a._v("false")]),a._v(" ke "),t("code",[a._v("true")]),a._v(". Lalu simpan.")]),a._v(" "),t("Img",{attrs:{url:"post/devto8.webp",alt:"Mengubah universal apk"}}),a._v(" "),t("h2",{attrs:{id:"build-aplikasi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-aplikasi"}},[a._v("#")]),a._v(" Build aplikasi")]),a._v(" "),t("p",[a._v("Sekarang semua sudah siap, waktunya mem-build. Kembali ke folder "),t("code",[a._v("android")]),a._v(" di mana ada file dengan nama "),t("code",[a._v("gradlew")]),a._v(". Ubah user di terminal menjadi superuser, untuk menghindari permasalahan "),t("i",[a._v("permission")]),a._v(".")]),a._v(" "),t("blockquote",[t("p",[a._v("cd ..")])]),a._v(" "),t("blockquote",[t("p",[a._v("sudo su")])]),a._v(" "),t("p",[a._v("Jika rekan-rekan ingin mem-build file "),t("code",[a._v(".apk")]),a._v(", jalankan perintah berikut")]),a._v(" "),t("blockquote",[t("p",[a._v("./gradlew assembleRelease")])]),a._v(" "),t("p",[a._v("atau jika rekan-rekan ingin mem-build menjadi file "),t("code",[a._v(".aab")]),a._v(", jalankan perintah berikut")]),a._v(" "),t("blockquote",[t("p",[a._v("./gradlew buildRelease")])]),a._v(" "),t("p",[a._v("Dalam kasus saya, membutuhkan 5-18 menit tergantung spek komputer dan besarnya project rekan-rekan. Hasilnya akan berada di folder "),t("code",[a._v("app/build/outputs/apk/release")]),a._v(" untuk file "),t("code",[a._v(".apk")]),a._v(" dan "),t("code",[a._v("app/build/outputs/bundle/release")]),a._v(" untuk "),t("code",[a._v(".aab")]),a._v(".")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Tips Publish Google Play Store")]),a._v(" "),t("p",[a._v("Jika rekan-rekan punya aplikasi android yang tidak butuh izin atau "),t("code",[a._v("permission")]),a._v(" apapun, pastikan sebelum mem-build buka file "),t("code",[a._v("AndroidManifest.xml")]),a._v(" di folder "),t("code",[a._v("android/app/src/main")]),a._v(" lalu hapus kode yang mengandung keyword "),t("code",[a._v("use permission")]),a._v(".")])]),a._v(" "),t("p",[a._v("Oke, mungkin itu saja, terima kasih telah membaca. Semoga bermanfaat."),t("br"),a._v("\nSelamat malam~")]),a._v(" "),t("h2",{attrs:{id:"referensi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#referensi"}},[a._v("#")]),a._v(" Referensi")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.facebook.com/rizbud16",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rizki Budi"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=CYjADMhxu_g",target:"_blank",rel:"noopener noreferrer"}},[a._v("ZeroGraivity"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/16333635/keytool-error-bash-keytool-command-not-found",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chaminda Bandara"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://askubuntu.com/questions/1072501/android-sdk-location-in-ubuntu-18-04-1",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tshilidzi Mudau"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil",target:"_blank",rel:"noopener noreferrer"}},[a._v("Marcel Hofgesang"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/54273412/failed-to-install-the-following-android-sdk-packages-as-some-licences-have-not",target:"_blank",rel:"noopener noreferrer"}},[a._v("Felix Too"),t("OutboundLink")],1)])]),a._v(" "),t("Disqus",{attrs:{title:a.$frontmatter.title}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);