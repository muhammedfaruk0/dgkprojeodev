# Zorunlu Test Kayıtları (TEST_NOTLARI.md)

Bu belge, **BPR201 İnternet Tabanlı Programlama** Haftalık Proje Ödevi 1 kapsamında gerçekleştirilen 6 zorunlu testin girdi, beklenen sonuç, gerçekleşen sonuç ve başarı durumlarını içerir.

---

## Test Tablosu

| Test No | Test / İşlem | Girdi / Uygulanan Adım | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Başlığın tamamını veya bir bölümünü arama** | Arama kutusuna `"Startup"` yazıldı. Ardından `"Yatırımcı Sunumu ve Pitch Deck Hazırlama"` yazıldı. | Yalnızca başlığında ilgili ifade geçen kartlar görünür; sayaç doğru sayıyı gösterir. | `"Startup"` yazıldığında yalnızca *Yalın Startup ve Fikir Doğrulama Atölyesi* kartı göründü ve sayaç `"Arama sonucu: 1 etkinlik gösteriliyor."` olarak güncellendi. Tam başlık aramasında da aynı şekilde 1 kart gösterildi. | **GEÇTİ** |
| **2** | **Aynı kelimeyi büyük ve küçük harfle arama** | Arama kutusuna önce `"YAPAY ZEKÂ"`, sonra `"yapay zekâ"` ve `"YaPaY zEkÂ"` yazıldı. | Her iki/üç girişte de büyük-küçük harf farkından etkilenmeden aynı kartlar görünür. | Tüm girişlerde *No-Code ve Yapay Zekâ ile MVP Geliştirme* kartı sorunsuz listelendi ve sayaç `1` olarak gösterildi. | **GEÇTİ** |
| **3** | **Hiçbir başlıkta bulunmayan bir ifade yazma** | Arama kutusuna `"Astronomi"` kelimesi yazıldı. | Sayaç 0 olur; tüm kartlar gizlenir ve ekranda açıklayıcı sonuç bulunamadı mesajı görünür. | Tüm etkinlik kartları gizlendi, sayaç `"Arama sonucu: 0 etkinlik gösteriliyor."` oldu ve kırmızı uyarı kutusunda *"Aradığınız ifadeyle eşleşen bir etkinlik başlığı bulunamadı..."* mesajı göründü. | **GEÇTİ** |
| **4** | **Yalnızca boşluk yazma / Temizle'ye basma** | Arama kutusuna `"     "` (5 adet boşluk) yazıldı. Ardından `"SaaS"` yazılıp **"Temizle"** düğmesine basıldı. | Her iki işlemde de filtre sıfırlanır ve 6 etkinliğin tamamı görünür. | Yalnızca boşluk yazıldığında `trim()` sayesinde tüm 6 etkinlik görünmeye devam etti. `"SaaS"` aramasından sonra *Temizle* düğmesine basıldığında kutu sıfırlandı ve `"Toplam 6 etkinlik gösteriliyor."` yazısıyla 6 kartın tamamı listelendi. | **GEÇTİ** |
| **5** | **Üç sayfanın menü bağlantılarını açma** | Üst menüdeki `Ana Sayfa`, `Etkinlikler` ve `Hakkımızda` bağlantılarına sırasıyla her sayfadan tıklandı. | Tüm bağlantılar kırık link olmadan doğru sayfalara (`index.html`, `etkinlikler.html`, `hakkimizda.html`) gider ve aktif sayfa menüde vurgulanır. | Üç sayfa arasındaki tüm geçişler sorunsuz çalıştı; bulunulan sayfanın menü bağlantısı `aria-current="page"` ile gradyan dolgulu olarak vurgulandı. | **GEÇTİ** |
| **6** | **390 px genişlikte ve Tab tuşuyla kontrol** | Tarayıcı Geliştirici Araçları (DevTools) ile ekran genişliği **390 px** yapıldı. Ardından fare kullanmadan klavyedeki `Tab` tuşuyla gezildi. | 390 px genişlikte sağa-sola yatay taşma olmaz; `Tab` tuşuyla menüye, arama alanına ve Temizle düğmesine ulaşılır. | 390 px genişlikte kartlar tek sütuna düştü ve yatay kaydırma çubuğu oluşmadı. `Tab` tuşuna basıldığında odak sırasıyla logoya, menü linklerine, arama kutusuna ve Temizle düğmesine sarı çerçeve (`:focus-visible`) ile ulaştı. | **GEÇTİ** |

---

## Ekran Görüntüsü Kontrol Listesi (Teslim Paketi İçin)
Teslim klasörüne eklenecek 3 ekran görüntüsü:
1. `1_normal_arama.png` -> Arama kutusunda bir ifade yazılıyken eşleşen kartların ve sayacın görünümü.
2. `2_bos_sonuc.png` -> Eşleşmeyen bir kelime yazıldığında `0` sayacı ve uyarı mesajının görünümü.
3. `3_mobil_390px.png` -> Tarayıcıda 390px genişlikte sitenin yatay taşma olmadan mobil görünümü.
