// BPR201 - Dijital Girişimcilik Kulübü Etkinlik Arama ve Arayüz Etkileşimleri

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dinamik Navbar Scroll Efekti (Tüm sayfalarda çalışır)
  const siteHeader = document.getElementById("site-header");
  if (siteHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    });
  }

  // 2. Etkinlik Başlıklarında Arama ve Filtreleme Özelliği
  const searchInput = document.getElementById("search-input");
  const clearButton = document.getElementById("clear-button");
  const eventCounter = document.getElementById("event-counter");
  const noResultsMessage = document.getElementById("no-results-message");
  const eventCards = document.querySelectorAll(".event-card");

  // Eğer bu sayfada arama bileşenleri yoksa (Ana Sayfa / Hakkımızda) çalışmayı durdur
  if (!searchInput || !clearButton || eventCards.length === 0) {
    return;
  }

  // Türkçe karakter duyarlı küçük harfe çevirme ve boşluk temizleme yardımcı fonksiyonu
  function normalizeText(text) {
    return text.trim().toLocaleLowerCase("tr-TR");
  }

  // Etkinlikleri filtreleyen ana fonksiyon
  function filterEvents() {
    const query = normalizeText(searchInput.value);
    let visibleCount = 0;

    eventCards.forEach((card) => {
      const titleElement = card.querySelector("h2");
      const titleText = titleElement ? normalizeText(titleElement.textContent) : "";

      // Filtreleme koşulu: Arama kutusu boşsa veya başlık aranan ifadeyi içeriyorsa göster
      const isMatch = query === "" || titleText.includes(query);

      if (isMatch) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    // Sayacı güncelle
    if (query === "") {
      eventCounter.textContent = `Toplam ${visibleCount} etkinlik gösteriliyor.`;
    } else {
      eventCounter.textContent = `Arama sonucu: ${visibleCount} etkinlik gösteriliyor.`;
    }

    // Eşleşme yoksa uyarı mesajını göster, varsa gizle
    if (visibleCount === 0) {
      noResultsMessage.hidden = false;
    } else {
      noResultsMessage.hidden = true;
    }
  }

  // Kullanıcı arama kutusuna her karakter yazdığında veya sildiğinde filtrelemeyi çalıştır
  searchInput.addEventListener("input", filterEvents);

  // Temizle düğmesine basıldığında aramayı sıfırla ve tüm kartları göster
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterEvents();
    searchInput.focus();
  });

  // Sayfa ilk yüklendiğinde başlangıç sayacını doğrula
  filterEvents();
});
