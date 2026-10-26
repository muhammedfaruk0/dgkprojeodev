# Dijital Girişimcilik Kulübü Web Sitesi

Bu proje, **BPR201 - İnternet Tabanlı Programlama** dersi *Haftalık Proje Ödevi 1* kapsamında geliştirilmiş, yapay zekâ destekli modern bir öğrenci topluluğu web sitesidir.

## 🔗 GitHub Repository Bağlantısı
- **Repository URL:** `https://github.com/muhammedfaruk0/dgkprojeodev`

## 🎯 Projenin Amacı
Üniversite bünyesindeki **Dijital Girişimcilik Kulübü**'nün vizyonunu tanıtmak, girişimcilik ve ürün geliştirme odaklı etkinlik takvimini duyurmak ve ziyaretçilerin etkinlik başlıkları arasında anlık olarak arama yapabilmesini sağlamaktır.

## 📄 Sayfalar ve Yapı
1. **`index.html` (Ana Sayfa):** Kulüp başlığı, değer önerisi, hızlı yönlendirme düğmeleri ve 3 temel çalışma alanını (Fikir Doğrulama, MVP Geliştirme, Yatırım ve Sunum) tanıtan kartlar yer alır.
2. **`etkinlikler.html` (Etkinlikler):** 6 özgün dijital girişimcilik etkinliği (tarih, saat, başlık, açıklama ve konum bilgileriyle) listelenir. Sayfada anlık çalışan başlık arama çubuğu, dinamik etkinlik sayacı, "Temizle" düğmesi ve sonuç bulunamadı uyarısı mevcuttur.
3. **`hakkimizda.html` (Hakkımızda):** Topluluğun vizyonu, projenin eğitim amacı ve yapay zekâ destekli çalışma yöntemi açıklanır.
4. **`style.css`:** Üç sayfanın ortak kullandığı modern koyu tema (Dark Glassmorphism), duyarlı (responsive) ızgara yapısı ve klavye erişilebilirlik (`:focus-visible`) stillerini içerir.
5. **`script.js`:** Tarayıcı üzerinde çalışan etkinlik başlığı filtreleme algoritmasını, dinamik sayacı ve üst menü kaydırma efektini barındırır.

## 🚀 Çalıştırma Adımları
Proje herhangi bir arka uç (backend) veya veritabanı gerektirmez; doğrudan tarayıcı üzerinde çalışır:
1. Proje klasörünü bilgisayarınıza indirin veya GitHub Codespaces üzerinde açın.
2. Klasör içerisindeki `index.html` dosyasına çift tıklayarak varsayılan web tarayıcınızda açın (veya VS Code / Codespaces içinde **Live Server** eklentisini başlatın).
3. Üst menüyü kullanarak **Etkinlikler** sayfasına geçin ve arama kutusunu test edin.
