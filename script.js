document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        tr: {
            nav_home: "Anasayfa",
            nav_about: "Hakkımda",
            nav_skills: "Teknik Yetkinlikler",
            nav_works: "Çalışmalarım",
            nav_contact: "İletişim",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Sakarya Uygulamalı Bilimler Üniversitesi<br />İmalat Yürütme Sistemleri Operatörlüğü",
            btn_cv: "CV İndir",
            btn_contact: "Bana Ulaşın",
            about_title: "Hakkımda",
            about_text: `Merhaba, ben <strong>Muhammed Arda Sarı</strong>.<br />Sakarya Uygulamalı Bilimler Üniversitesi, İmalat Yürütme Sistemleri Operatörlüğü 2. sınıf öğrencisiyim. Teorik ve pratik eğitimlerim sayesinde; üretim hatları yönetimi, operasyonel verimlilik ve süreç optimizasyonu konularında güçlü bir altyapı oluşturdum. Modern üretim yaklaşımlarına odaklanarak, özellikle Endüstri 4.0 ve akıllı fabrika ortamlarında çalışmaya hazırım. Otomasyon süreçleri, SCADA sistemleri ve üretim denetleme konularındaki teknik bilgimi; C ve Python ile destekliyor, Java ile aktif olarak geliştiriyorum. Kestirimci Bakım (Predictive Maintenance) alanındaki yetkinliğimle, teknoloji yoğun üretim süreçlerine anında değer katmayı hedefliyorum.`,
            skills_title: "Teknik Yetkinlikler",
            topic_1: "İş Sağlığı ve Güvenliği",
            topic_2: "İmalat Operasyonları Yönetimi",
            topic_3: "Programlama",
            topic_4: "Görüntü İşleme",
            topic_5: "Kestirimci Bakım-Onarım",
            topic_6: "Malzeme ve Stok Yönetimi",
            topic_7: "Robotik Süreç Otomasyonu",
            topic_8: "SCADA",
            topic_9: "Yapay Zeka",
            topic_10: "Makine Öğrenmesi",
            topic_11: "Sistem Entegrasyonu",
            topic_12: "Zeki İmalat Sistemleri",
            topic_13: "Veri Toplama ve Analizi",
            topic_14: "MES Donanımları",
            topic_15: "MES Standartları",
            works_title: "Çalışmalarım",
            btn_open: "Dosyayı Aç",
            contact_title: "İletişim",
            footer_text: "© 2025 Muhammed Arda Sarı. Tüm hakları saklıdır."
        },
        en: {
            nav_home: "Home",
            nav_about: "About Me",
            nav_skills: "Technical Skills",
            nav_works: "My Works",
            nav_contact: "Contact",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Sakarya University of Applied Sciences<br />Manufacturing Execution Systems (MES) Operator",
            btn_cv: "Download CV",
            btn_contact: "Contact Me",
            about_title: "About Me",
            about_text: `Hello, I am <strong>Muhammed Arda Sarı</strong>.<br />I am a 2nd-year student of Manufacturing Execution Systems at Sakarya University of Applied Sciences. Through theoretical and practical training, I have built a strong foundation in production line management, operational efficiency, and process optimization. Focusing on modern manufacturing approaches, I am ready to work in Industry 4.0 and smart factory environments. I support my technical knowledge in automation processes, SCADA systems, and production supervision with C and Python, and actively develop with Java. With my competence in Predictive Maintenance, I aim to add immediate value to technology-intensive production processes.`,
            skills_title: "Technical Skills",
            topic_1: "Occupational Health & Safety",
            topic_2: "Manufacturing Ops. Management",
            topic_3: "Programming",
            topic_4: "Image Processing",
            topic_5: "Predictive Maintenance",
            topic_6: "Material & Stock Management",
            topic_7: "Robotic Process Automation",
            topic_8: "SCADA",
            topic_9: "Artificial Intelligence",
            topic_10: "Machine Learning",
            topic_11: "System Integration",
            topic_12: "Smart Manufacturing Systems",
            topic_13: "Data Collection & Analysis",
            topic_14: "MES Hardware",
            topic_15: "MES Standards",
            works_title: "My Works",
            btn_open: "Open File",
            contact_title: "Contact",
            footer_text: "© 2025 Muhammed Arda Sarı. All rights reserved."
        },
        de: {
            nav_home: "Startseite",
            nav_about: "Über Mich",
            nav_skills: "Technische Fähigkeiten",
            nav_works: "Projekte",
            nav_contact: "Kontakt",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Sakarya Hochschule für Angewandte Wissenschaften<br />Manufacturing Execution Systems (MES) Bediener",
            btn_cv: "Lebenslauf",
            btn_contact: "Kontaktieren",
            about_title: "Über Mich",
            about_text: `Hallo, ich bin <strong>Muhammed Arda Sarı</strong>.<br />Ich studiere im 2. Jahr Manufacturing Execution Systems an der Sakarya Hochschule für Angewandte Wissenschaften. Ich habe eine starke Basis in Produktionslinienmanagement und Prozessoptimierung aufgebaut. Mit Fokus auf moderne Fertigungsansätze bin ich bereit, in Industrie 4.0- und Smart-Factory-Umgebungen zu arbeiten. Ich unterstütze mein technisches Wissen in Automatisierungsprozessen, SCADA-Systemen und Produktionsüberwachung mit C und Python und entwickle aktiv mit Java. Mit meiner Kompetenz in Predictive Maintenance möchte ich technologieintensiven Produktionsprozessen sofortigen Mehrwert bieten.`,
            skills_title: "Technische Fähigkeiten",
            topic_1: "Arbeitsschutz",
            topic_2: "Fertigungsmanagement",
            topic_3: "Programmierung",
            topic_4: "Bildverarbeitung",
            topic_5: "Vorausschauende Wartung",
            topic_6: "Material- & Bestandsmanagement",
            topic_7: "Robotergestützte Prozessautomatisierung",
            topic_8: "SCADA",
            topic_9: "Künstliche Intelligenz",
            topic_10: "Maschinelles Lernen",
            topic_11: "Systemintegration",
            topic_12: "Intelligente Fertigungssysteme",
            topic_13: "Datenerfassung & Analyse",
            topic_14: "MES-Hardware",
            topic_15: "MES-Standards",
            works_title: "Meine Projekte",
            btn_open: "Datei Öffnen",
            contact_title: "Kontakt",
            footer_text: "© 2025 Muhammed Arda Sarı. Alle Rechte vorbehalten."
        },
        fr: {
            nav_home: "Accueil",
            nav_about: "À Propos",
            nav_skills: "Compétences Techniques",
            nav_works: "Travaux",
            nav_contact: "Contact",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Université des Sciences Appliquées de Sakarya<br />Opérateur de Systèmes d'Exécution de la Fabrication",
            btn_cv: "Télécharger CV",
            btn_contact: "Contactez-moi",
            about_title: "À Propos",
            about_text: `Bonjour, je suis <strong>Muhammed Arda Sarı</strong>.<br />Je suis étudiant en 2ème année en Systèmes d'Exécution de la Fabrication (MES). J'ai acquis une base solide en gestion des lignes de production et optimisation des processus. En me concentrant sur les approches de fabrication modernes, je suis prêt à travailler dans des environnements Industrie 4.0. Je soutiens mes connaissances techniques dans les processus d'automatisation, les systèmes SCADA et la supervision de la production avec C et Python, et je développe activement avec Java. Avec ma compétence en Maintenance Prédictive, je vise à apporter une valeur immédiate aux processus de production à forte intensité technologique.`,
            skills_title: "Compétences Techniques",
            topic_1: "Santé et Sécurité",
            topic_2: "Gestion des Opérations de Fab.",
            topic_3: "Programmation",
            topic_4: "Traitement d'Images",
            topic_5: "Maintenance Prédictive",
            topic_6: "Gestion des Stocks",
            topic_7: "Automatisation Robotisée (RPA)",
            topic_8: "SCADA",
            topic_9: "Intelligence Artificielle",
            topic_10: "Apprentissage Automatique",
            topic_11: "Intégration de Systèmes",
            topic_12: "Systèmes de Fabrication Intelligents",
            topic_13: "Collecte et Analyse de Données",
            topic_14: "Matériel MES",
            topic_15: "Normes MES",
            works_title: "Mes Travaux",
            btn_open: "Ouvrir le Fichier",
            contact_title: "Contact",
            footer_text: "© 2025 Muhammed Arda Sarı. Tous droits réservés."
        },
        es: {
            nav_home: "Inicio",
            nav_about: "Sobre Mí",
            nav_skills: "Habilidades Técnicas",
            nav_works: "Portafolio",
            nav_contact: "Contacto",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Universidad de Ciencias Aplicadas de Sakarya<br />Operador de Sistemas de Ejecución de Manufactura",
            btn_cv: "Descargar CV",
            btn_contact: "Contáctame",
            about_title: "Sobre Mí",
            about_text: `Hola, soy <strong>Muhammed Arda Sarı</strong>.<br />Soy estudiante de segundo año de Sistemas de Ejecución de Manufactura (MES). He construido una base sólida en gestión de líneas de producción y optimización de procesos. Centrándome en enfoques de fabricación modernos, estoy listo para trabajar en entornos de Industria 4.0. Apoyo mis conocimientos técnicos en procesos de automatización, sistemas SCADA y supervisión de producción con C y Python, y desarrollo activamente con Java. Con mi competencia en Mantenimiento Predictivo, aspiro a agregar valor inmediato a los procesos de producción intensivos en tecnología.`,
            skills_title: "Habilidades Técnicas",
            topic_1: "Salud y Seguridad",
            topic_2: "Gestión de Operaciones de Man.",
            topic_3: "Programación",
            topic_4: "Procesamiento de Imágenes",
            topic_5: "Mantenimiento Predictivo",
            topic_6: "Gestión de Materiales y Stock",
            topic_7: "Automatización Robótica (RPA)",
            topic_8: "SCADA",
            topic_9: "Inteligencia Artificial",
            topic_10: "Aprendizaje Automático",
            topic_11: "Integración de Sistemas",
            topic_12: "Sistemas de Manufactura Inteligente",
            topic_13: "Recopilación y Análisis de Datos",
            topic_14: "Hardware MES",
            topic_15: "Estándares MES",
            works_title: "Mis Trabajos",
            btn_open: "Abrir Archivo",
            contact_title: "Contacto",
            footer_text: "© 2025 Muhammed Arda Sarı. Todos los derechos reservados."
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
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            const aboutText = document.getElementById('about-text');
            if (aboutText && translations[lang]['about_text']) {
                aboutText.innerHTML = translations[lang]['about_text'];
            }
        });
    });


    const options = {
        threshold: 0.15 
    };

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


    const heroElems = [
        document.querySelector('.profile-img-wrapper'),
        document.querySelector('.hero-content h1'),
        document.querySelector('.hero-content p'),
        document.querySelector('.hero-buttons'),
        document.querySelector('.scroll-down')
    ];

    heroElems.forEach((el, i) => {
        if (el) { 
            setTimeout(() => {
                el.classList.add('active');
            }, i * 200); 
        }
    });


    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
});
