# AI Kullanım ve Kod İnceleme Notları (AI_NOTLARI.md)

Bu belge, **BPR201 İnternet Tabanlı Programlama** ödevi kapsamında yapay zekâ (GitHub Copilot / AI) araçlarıyla yapılan çalışmaları, kullanılan prompt'ları, öneri değerlendirmesini ve kod açıklamalarını içerir.

---

## 1. Kullanılan Prompt'lar ve Amaçları

### Prompt 1: Arama Özelliği Mimarisini Planlama
> **Prompt:** *"HTML ve JavaScript öğrenmeye yeni başladım. etkinlikler.html ve style.css dosyalarını incele. Mevcut tasarımı koruyarak etkinlik başlıklarında arama yapabileceğim bir özellik için kısa bir plan öner. Henüz dosyaları değiştirme. Hangi dosyalarda değişiklik gerektiğini ve özelliği nasıl test edeceğimi açıkla."*
- **Amacı:** Doğrudan kod yazdırmadan önce hangi HTML etiketlerine (`label`, `input`, `button`, sayaç ve boş durum mesajı) ihtiyacımız olduğunu belirlemek ve `script.js` dosyasının çalışma mantığını planlamak.

### Prompt 2: Türkçe Karakter ve Boşluk Duyarsız Filtreleme Yazımı
> **Prompt:** *"etkinlikler.html içindeki .event-card sınıfına sahip article kartlarını h2 başlıklarına göre filtreleyen script.js kodunu yaz. Kullanıcı yazdıkça çalışsın, baştaki/sondaki boşlukları yok saysın, Türkçe büyük/küçük harf (İ/i, I/ı) farkından etkilenmesin, görünen kart sayısını #event-counter içinde güncellesin ve 0 sonuçta #no-results-message öğesini göstersin."*
- **Amacı:** Ödevin kabul ölçütlerinde (Acceptance Criteria) belirtilen tüm JavaScript gereksinimlerini temiz ve anlaşılır bir fonksiyon içinde oluşturmak.

### Prompt 3: Mobil Uyumluluk (390px) ve Klavye Erişilebilirliği İyileştirmesi
> **Prompt:** *"style.css dosyasını 390px mobil ekran genişliğinde hiç yatay taşma (horizontal scroll) yapmayacak şekilde güncelle. Ayrıca Tab tuşuyla gezinirken arama kutusu, Temizle düğmesi ve menü bağlantılarında belirgin bir :focus-visible çerçevesi görünmesini sağla."*
- **Amacı:** Zorunlu testlerdeki 390px dar ekran kontrolünü ve klavye (`Tab` tuşu) erişilebilirlik şartını eksiksiz karşılamak.

---

## 2. Kabul Edilen / Değiştirilen Bir AI Önerisinin Değerlendirmesi

- **AI'ın İlk Önerisi:** Yapay zekâ ilk önerisinde metinleri küçük harfe çevirmek için standart `text.toLowerCase()` metodunu kullandı ve kartları gizlemek için `card.style.display = "none"` / `card.style.display = "block"` yöntemini önerdi.
- **Yaptığım Değişiklik ve Nedeni (Code Review):**
  1. Türkçe'de `"İ"` harfi standart `toLowerCase()` ile çevrildiğinde bazen tarayıcı diline bağlı olarak uyumsuzluk çıkarabildiği için bunu `text.trim().toLocaleLowerCase("tr-TR")` olarak değiştirdim. Böylece *"İdeathon"* veya *"YAPAY ZEKÂ"* aramaları büyük/küçük harf fark etmeksizin tam eşleşti.
  2. Kartlarımız `style.css` içinde `display: flex` yapısına sahip olduğu için `card.style.display = "block"` kullanmak kart içi hizalamayı bozuyordu. Bunun yerine standart HTML5 `card.hidden = true / false` özelliğini kabul edip uyguladım. Bu sayede CSS'teki `flex` düzeni bozulmadan kartlar temiz bir şekilde gizlenip gösterildi.

---

## 3. Kod Açıklamaları (Kendi Cümlelerimle)

### A. Bir Event Listener'ın Açıklaması (`input` Olay Dinleyicisi)
```javascript
searchInput.addEventListener("input", filterEvents);
```
**Açıklama:** Bu satır, `etkinlikler.html` sayfasındaki arama kutusunu (`#search-input`) sürekli dinler. Kullanıcı klavyeden her harf yazdığında, bir harf sildiğinde veya metin yapıştırdığında `"input"` olayı tetiklenir ve `filterEvents` adlı fonksiyon otomatik olarak çağrılır. Böylece kullanıcının ayrıca "Ara" butonuna basmasına gerek kalmadan kartlar anlık olarak filtrelenir.

### B. Bir Filtreleme Koşulunun Açıklaması
```javascript
const isMatch = query === "" || titleText.includes(query);
```
**Açıklama:** Bu koşul, her bir etkinlik kartının ekranda kalıp kalmayacağına karar verir. `query` değişkeni kullanıcının arama kutusuna yazdığı (boşlukları temizlenmiş ve küçük harfe çevrilmiş) metindir; `titleText` ise o kartın `<h2>` başlığındaki küçük harfli metindir. Eğer arama kutusu tamamen boşsa (`query === ""`) **veya** (`||`) kartın başlığı aranan ifadeyi içeriyorsa (`titleText.includes(query)`), `isMatch` değeri `true` olur ve kart ekranda gösterilir (`card.hidden = false`). Aksi halde `false` döner ve kart gizlenir (`card.hidden = true`).
