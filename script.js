document.addEventListener('DOMContentLoaded', () => {
    
    // Terminal Yazı Efekti (Typewriter)
    const typeText = "MES Adayı | Veri & Otomasyon | FOT-M Kurucusu";
    const typeElem = document.getElementById('typewriter');
    let i = 0;
    
    function typeWriter() {
        if (i < typeText.length) {
            typeElem.innerHTML += typeText.charAt(i);
            i++;
            setTimeout(typeWriter, 60); // Hacker yazım hızı
        }
    }
    setTimeout(typeWriter, 800);

    // Çeviri Sözlüğü (Terminal Konseptine Uygun)
    const translations = {
        tr: {
            nav_home: "<span class='nav-num'>01.</span> Anasayfa",
            nav_about: "<span class='nav-num'>02.</span> Profil",
            nav_experience: "<span class='nav-num'>03.</span> Deneyim",
            nav_skills: "<span class='nav-num'>04.</span> Modüller",
            nav_works: "<span class='nav-num'>05.</span> Veritabanı",
            hero_name: "MUHAMMED ARDA SARI",
            btn_cv: "[ İNDİR_CV.exe ]",
            btn_contact: "[ BAĞLANTI_KUR ]",
            about_title: ">> SİSTEM_PROFİLİ",
            exp_title: ">> İŞLEM_GEÇMİŞİ",
            exp_1_title: "KADİFETEKS | BİLGİ TEKNOLOJİLERİ STAJYERİ",
            exp_1_date: "23.02.2026 - 14.06.2026",
            exp_1_desc: "> İmalat Yürütme Sistemleri (MES) üzerinden üretim verilerinin anlık takibi. Endüstriyel el terminallerinin ağ sorunlarının çözümü ve PLC sistem mimarisinin saha uygulamaları.",
            exp_2_title: "PLASTSONİK MAKİNA | STAJYER",
            exp_2_date: "04.08.2025 - 12.09.2025",
            exp_2_desc: "> HF makinelerin mekanik montajı ve elektrik pano kablolaması. Saha makinelerinin periyodik bakımı, sensör testleri ve sistem devreye alma operasyonları.",
            skills_title: ">> AKTİF_MODÜLLER",
            topic_1: "SYS.PYTHON_JAVA_C_SQL",
            topic_2: "MOD.KESTİRİMCİ_BAKIM",
            topic_3: "SYS.SCADA_MES_ENTEGRASYON",
            topic_4: "NET.ENDÜSTRİYEL_PROTOKOLLER",
            topic_5: "AI.GÖRÜNTÜ_İŞLEME",
            topic_6: "AUTO.ROBOTİK_SÜREÇ_RPA",
            topic_7: "HW.ELEKTRİK_PANO_PLC",
            topic_8: "OPS.İMALAT_YÖNETİMİ",
            works_title: ">> VERİTABANI_SORGUSU",
            btn_open: "EXECUTE_READ.sh",
            contact_title: ">> AĞ_BAĞLANTISI",
            footer_text: "SİSTEM ÇEVRİMİÇİ || © 2026 M. ARDA SARI"
        },
        en: {
            nav_home: "<span class='nav-num'>01.</span> Home",
            nav_about: "<span class='nav-num'>02.</span> Profile",
            nav_experience: "<span class='nav-num'>03.</span> Experience",
            nav_skills: "<span class='nav-num'>04.</span> Modules",
            nav_works: "<span class='nav-num'>05.</span> Database",
            hero_name: "MUHAMMED ARDA SARI",
            btn_cv: "[ DOWNLOAD_CV.exe ]",
            btn_contact: "[ ESTABLISH_LINK ]",
            about_title: ">> SYSTEM_PROFILE",
            exp_title: ">> PROCESS_HISTORY",
            exp_1_title: "KADIFETEKS | IT INTERN",
            exp_1_date: "Feb 23, 2026 - Jun 14, 2026",
            exp_1_desc: "> Real-time tracking of production data via MES. Resolving industrial handheld terminal network issues and field applications of PLC system architecture.",
            exp_2_title: "PLASTSONIK MAKINA | INTERN",
            exp_2_date: "Aug 04, 2025 - Sep 12, 2025",
            exp_2_desc: "> Mechanical assembly of HF machines and electrical panel wiring. Periodic maintenance, sensor tests, and system commissioning.",
            skills_title: ">> ACTIVE_MODULES",
            topic_1: "SYS.PYTHON_JAVA_C_SQL",
            topic_2: "MOD.PREDICTIVE_MAINTENANCE",
            topic_3: "SYS.SCADA_MES_INTEGRATION",
            topic_4: "NET.INDUSTRIAL_PROTOCOLS",
            topic_5: "AI.IMAGE_PROCESSING",
            topic_6: "AUTO.ROBOTIC_PROCESS_RPA",
            topic_7: "HW.ELECTRICAL_PANEL_PLC",
            topic_8: "OPS.MANUFACTURING_MGT",
            works_title: ">> DATABASE_QUERY",
            btn_open: "EXECUTE_READ.sh",
            contact_title: ">> NETWORK_LINK",
            footer_text: "SYSTEM ONLINE || © 2026 M. ARDA SARI"
        }
    };

    const flags = document.querySelectorAll('.flag-btn');

    flags.forEach(btn => {
        btn.addEventListener('click', () => {
            flags.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            const lang = btn.getAttribute('data-lang');

            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        });
    });

    // Intersection Observer (Scroll Animasyonları)
    const options = { threshold: 0.1 };
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(revealCallback, options);
    
    document.querySelectorAll('.reveal').forEach(elem => {
        observer.observe(elem);
    });
});
