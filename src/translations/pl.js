const pl = {
    // Nagłówek
    header: {
      home: "Strona główna",
      howItWorks: "Jak to działa",
      aboutUs: "O nas",
      contact: "Kontakt"
    },
    
    // Strona główna
    home: {
      title: "Usuń tło ze zdjęcia",
      subtitle: "Przeciągnij i upuść zdjęcie lub kliknij, aby wybrać plik",
      dropzoneActive: "Upuść zdjęcie tutaj...",
      dropzoneIdle: "Przeciągnij i upuść zdjęcie lub kliknij, aby wybrać",
      selectButton: "Wybierz zdjęcie",
      fileInfo: "Obsługiwane formaty: JPG, PNG",
      originalImage: "Oryginalne zdjęcie",
      processedImage: "Zdjęcie bez tła",
      loading: "Usuwanie tła...",
      placeholder: "Tutaj pojawi się Twoje zdjęcie bez tła",
      download: "Pobierz zdjęcie",
      errorFormat: "Proszę wybrać plik w formacie JPG lub PNG",
      errorProcessing: "Wystąpił problem z przetwarzaniem obrazu",
      successMessage: "Tło zostało pomyślnie usunięte!"
    },
    
    // Jak to działa
    howItWorks: {
      title: "Jak to działa?",
      step1Title: "Wybierz zdjęcie",
      step1Description: "Przeciągnij i upuść zdjęcie do obszaru przesyłania lub kliknij, aby wybrać plik z komputera. Obsługujemy formaty JPG i PNG.",
      step2Title: "Automatyczne przetwarzanie",
      step2Description: "Nasz zaawansowany algorytm wykorzystujący sztuczną inteligencję automatycznie wykryje i usunie tło z Twojego zdjęcia. Cały proces zajmuje zaledwie kilka sekund.",
      step3Title: "Pobierz wynik",
      step3Description: "Po zakończeniu przetwarzania zobaczysz podgląd zdjęcia bez tła. Możesz je pobrać w formacie PNG z przezroczystym tłem, gotowe do wykorzystania w Twoich projektach.",
      technologyTitle: "Technologia",
      technologyDescription1: "Nasza aplikacja wykorzystuje zaawansowane głębokie sieci neuronowe do precyzyjnego oddzielenia obiektów pierwszego planu od tła. System oparty jest na architekturze U-Net z dodatkowymi warstwami uwagi (attention layers), co pozwala na dokładne rozpoznawanie nawet skomplikowanych kształtów i detali.",
      technologyDescription2: "Proces przetwarzania obejmuje:",
      technologyList: [
        "Wstępną analizę obrazu przy użyciu konwolucyjnych sieci neuronowych (CNN)",
        "Segmentację semantyczną wykorzystującą głębokie uczenie i transformatory wizyjne",
        "Precyzyjne wyodrębnienie krawędzi z wykorzystaniem algorytmów wykrywania krawędzi wspieranych przez sieci neuronowe",
        "Przetwarzanie końcowe z zastosowaniem technik uczenia maszynowego dla zachowania najwyższej jakości"
      ],
      technologyDescription3: "", // Usunięty fragment
      useCasesTitle: "Zastosowania",
      useCase1Title: "E-commerce",
      useCase1Description: "Twórz profesjonalne zdjęcia produktów z przezroczystym tłem, idealne do sklepów internetowych.",
      useCase2Title: "Media społecznościowe",
      useCase2Description: "Przygotuj atrakcyjne grafiki profilowe i posty z usuniętym tłem.",
      useCase3Title: "Projektowanie graficzne",
      useCase3Description: "Łatwo wyodrębnij elementy do wykorzystania w projektach graficznych, kolaży i montaży.",
      useCase4Title: "Prezentacje",
      useCase4Description: "Twórz profesjonalne slajdy z czystymi, pozbawionymi tła obrazami."
    },
    
    // O nas
    aboutUs: {
      university: "Akademia Górniczo-Hutnicza",
      faculty: "Wydział Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej",
      field: "Kierunek: Informatyka i Systemy Inteligentne",
      semester: "Semestr: VI",
      course: "Przedmiot: Studio Projektowe 2",
      teamTitle: "Nasz zespół",
      studentId: "Nr indeksu",
      projectTitle: "O projekcie",
      projectDescription1: "BackgroundRemover to aplikacja webowa stworzona w ramach przedmiotu Studio Projektowe 2. Naszym celem było opracowanie intuicyjnego narzędzia do automatycznego usuwania tła ze zdjęć, wykorzystującego nowoczesne technologie i algorytmy sztucznej inteligencji.",
      projectDescription2: "Projekt łączy w sobie frontend napisany w React z backendem wykorzystującym zaawansowane algorytmy przetwarzania obrazu. Aplikacja powstała z myślą o użytkownikach potrzebujących szybkiego i efektywnego narzędzia do przygotowywania zdjęć z przezroczystym tłem.",
      technologiesTitle: "Technologie wykorzystane w projekcie:"
    },
    
    // Kontakt
    contact: {
      title: "Kontakt",
      subtitle: "Skontaktuj się z nami",
      description: "Masz pytania dotyczące aplikacji? Znalazłeś błąd? A może masz pomysł na nową funkcję? Skontaktuj się z nami!"
    },
    
    // Stopka
    footer: {
      rights: "Wszystkie prawa zastrzeżone.",
      privacy: "Polityka prywatności",
      terms: "Warunki korzystania",
      contact: "Kontakt"
    },
    
    // Przełącznik języka
    languageSwitch: {
      pl: "Polski",
      en: "English"
    }
  };
  
  export default pl;
  