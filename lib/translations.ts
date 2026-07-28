// cv-website/lib/translations.ts
// The record is issued in two languages. Neither is a translation of the other:
// both are complete. Every key must exist in both.
export const translations = {
  ro: {
    nav: {
      about: 'Despre',
      experience: 'Experiență',
      education: 'Educație',
      skills: 'Competențe',
      projects: 'Proiecte',
      hobbies: 'Interese',
      contact: 'Contact',
      downloadCV: 'Descarcă CV (EN)',
      reference: 'VB-2026-RO',
      openIndex: 'Deschide cuprinsul',
      closeIndex: 'Închide cuprinsul',
    },
    controls: {
      daylight: 'Lumină de zi',
      uv: 'Lampă UV',
      toUV: 'Comută la lampa UV',
      toDaylight: 'Comută la lumină de zi',
    },
    cover: {
      givenName: 'Valentin',
      familyName: 'Bejan',
      denomination: 'Absolvent de Calculatoare & pasionat de inteligență artificială',
      issuedLabel: 'Eliberat',
      issuedValue: 'IUL. 2026',
      placeLabel: 'Locul',
      placeValue: 'Galați, RO',
      statusLabel: 'Statut',
      statusValue: 'Masterand TIA',
      languagesLabel: 'Limbi',
      languagesValue: 'RO · EN',
      certifiedCopy: 'Copie certificată · PDF (EN)',
      verify: 'Verifică anexele',
      sealLegend: 'VALENTIN BEJAN · GALAȚI · ROMÂNIA · ACT PROPRIU · ',
      photoAlt: 'Valentin Bejan, fotografie de la absolvire.',
    },
    about: {
      title: 'Declarația titularului',
      reference: 'DECLARAȚIE',
      description:
        'Sunt absolvent de Calculatoare și în prezent masterand, cu experiență practică în dezvoltare software și un interes puternic pentru inteligența artificială. De la aplicații React și Java și instrumente mobile, până la experimente cu modele AI moderne și LLM-uri, mă conduce curiozitatea și îmi place să abordez provocări noi prin hackathoane și proiecte personale.',
      photoAlt:
        'Valentin Bejan la absolvire, ținând toca pe care scrie „Trust me, I’m an Engineer”.',
      capQuote: '„Trust me, I’m an Engineer”',
      capCaption: 'Inscripția de pe tocă, la absolvire',
      signedLabel: 'Semnat',
      dateLabel: 'Data',
      dateValue: 'Galați, 2026',
      stampLine1: 'Act propriu',
      stampLine2: 'GALAȚI · 2026',
    },
    experience: {
      title: 'Experiență profesională',
      reference: '{n, plural, one {# POZIȚIE} few {# POZIȚII} other {# DE POZIȚII}}',
      jobs: [
        {
          company: 'LILT AI · Freelancer',
          location: 'Remote',
          position: 'Romanian AI Content Expert',
          period: 'Ian. 2026 – prezent',
          description: '',
          link: 'https://lilt.com',
        },
        {
          company: 'Thecon',
          location: 'Galați, România',
          position: 'Practicant',
          period: '08/01/2024 – 29/03/2024',
          description:
            'Am dobândit cunoștințe practice și abilități în dezvoltarea web utilizând JavaScript și React.',
          link: 'https://thecon.ro',
        },
        {
          company: 'Still-Co',
          location: 'Galați, România',
          position: 'Practicant',
          period: '26/06/2023 – 14/07/2023',
          description:
            'Am dobândit cunoștințe practice și abilități în dezvoltarea web utilizând JavaScript și React.',
        },
      ],
    },
    education: {
      title: 'Educație',
      reference:
        '{n, plural, one {# CREDENȚIAL} few {# CREDENȚIALE} other {# DE CREDENȚIALE}}',
      schools: [
        {
          name: 'Universitatea „Dunărea de Jos", Galați',
          degree:
            'Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică',
          field: 'Master: Tehnologii Informatice Avansate',
          period: '2025 – prezent',
          status: 'Masterand',
          link: 'https://www.ugal.ro',
        },
        {
          name: 'Universitatea „Dunărea de Jos", Galați',
          degree:
            'Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică',
          field: 'Licență: Calculatoare și Tehnologia Informației',
          period: '2021 – 2025',
          status: 'Inginer',
          link: 'https://www.ugal.ro',
        },
        {
          name: 'Liceul Teoretic „Dunărea", Galați',
          degree: 'Bacalaureat',
          field: 'Matematică-Informatică',
          period: '2017 – 2021',
          status: '',
        },
      ],
    },
    skills: {
      title: 'Competențe',
      reference:
        '{n, plural, one {# CATEGORIE} few {# CATEGORII} other {# DE CATEGORII}}',
      categories: {
        programming: {
          title: 'Programare',
          items: ['React', 'JavaScript', 'Java', 'C#', 'Python'],
        },
        ai: {
          title: 'Inteligență artificială',
          items: [
            'Antrenare modele Stable Diffusion',
            'Antrenare modele LLM',
            'Creare seturi de date AI',
            'LangChain',
          ],
        },
        database: {
          title: 'Baze de date',
          items: ['Oracle SQL Plus', 'MySQL', 'Prisma', 'Supabase'],
        },
        graphics: {
          title: 'Grafică și video',
          items: ['Blender', 'Premiere Pro', 'After Effects'],
        },
        languages: {
          title: 'Limbi străine',
          items: ['Română (nativ)', 'Engleză (avansat)'],
        },
      },
    },
    projects: {
      title: 'Anexe',
      reference: '{n, plural, one {# ANEXĂ} few {# ANEXE} other {# DE ANEXE}}',
      note: 'Primele patru sunt lucrările care contează acum. Fiecare duce direct la codul sursă sau la aplicația care rulează.',
      annexRef: 'ANEXA {n}',
      proofSource: 'Cod sursă public',
      proofLive: 'Aplicație live',
      furtherTitle: 'Lucrări anterioare',
      items: [
        {
          name: 'LLM UI — Chat cu RAG',
          description:
            'Lucrare de licență (2025): interfață de chat self-hosted pentru LLM-uri locale. Next.js peste PostgreSQL 16 + pgvector, cu RAG pe istoricul conversațiilor, ingestie de documente, căutare web și TTS. Include un pipeline de fine-tuning ORPO pentru un model Llama 3.2 1B personalizat.',
          tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'pgvector', 'Prisma', 'Ollama', 'RAG'],
          link: 'https://github.com/Valentinbejan/ollama-ui-llm-rag',
          linkType: 'github',
          tier: 'principal',
        },
        {
          name: 'Japanese Voice Studio',
          description:
            'Studio text-to-speech cu frontend Next.js și backend serverless Modal pe GPU, cu curățare audio în WASM și transcriere WebGPU.',
          tech: ['Next.js', 'Modal', 'WASM', 'WebGPU', 'Cloudflare R2'],
          link: 'https://irodori-tts-studio.vercel.app/',
          linkType: 'website',
          tier: 'principal',
        },
        {
          name: 'Maritime DB Monitor',
          description:
            'Dashboard de sănătate PostgreSQL alimentat de AI: un daemon colectează metrici și loguri, iar un LLM conștient de context analizează scheme, planuri de execuție și tuning-ul de vacuum.',
          tech: ['Python', 'PostgreSQL', 'Streamlit', 'Docker', 'LLM'],
          link: 'https://github.com/Valentinbejan/maritime-db-monitor',
          linkType: 'github',
          tier: 'principal',
        },
        {
          name: 'VibeScout (TheCon 2025)',
          description:
            'Aplicație de hackathon: descoperă locații din România prin hărți, filtre, chatbot AI. Participare individuală - locul 4 la general (cel mai bun proiect realizat de o singură persoană) din ~30 de echipe; primele 3 au fost echipe formate din mai mulți membri.',
          tech: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
          link: 'https://github.com/Valentinbejan/thecon-2025',
          linkType: 'github',
          tier: 'principal',
        },
        {
          name: 'LangGraph Excel Agent',
          description:
            'Un agent AI construit cu LangChain și LangGraph, capabil să interacționeze inteligent cu fișiere Excel și să le modifice pe baza comenzilor în limbaj natural.',
          tech: ['LangChain', 'LangGraph', 'Python', 'AI'],
          link: 'https://github.com/Valentinbejan/langgraph-excel-agent',
          linkType: 'github',
        },
        {
          name: 'Aplicație OCR',
          description:
            'Aplicație web cu Flask, Celery și Docker care extrage text din imagini folosind Tesseract OCR, procesarea fiind realizată în fundal.',
          tech: ['Flask', 'Celery', 'Docker', 'Python'],
          link: 'https://github.com/Valentinbejan/flask-ocr-celery-app',
          linkType: 'github',
        },
        {
          name: 'Counting Coins in an Image',
          description:
            'Proiect Python care folosește computer vision și machine learning pentru a detecta și număra automat monedele dintr-o imagine.',
          tech: ['Python', 'Computer Vision'],
          link: 'https://www.linkedin.com/in/bejan-valentin-702b53287/details/projects/1635535867960/single-media-viewer/?profileId=ACoAAEXCYTIB0-88okoetGMjAUEE0eyTrzlE4bU',
          linkType: 'linkedin',
        },
        {
          name: 'Food-Ordering-App',
          description:
            'Aplicație mobilă pentru gestionarea produselor și comenzilor, cu roluri de utilizator și administrator.',
          tech: ['React Native', 'Supabase', 'Expo'],
          link: 'https://github.com/Valentinbejan/Food-Ordering-App',
          linkType: 'github',
        },
        {
          name: 'Recipe-App',
          description:
            'Aplicație de rețete cu frontend React și backend Node.js cu Prisma, peste ElephantSQL și API-ul Spoonacular.',
          tech: ['React', 'Node.js', 'Prisma'],
          link: 'https://github.com/Valentinbejan/recipe-app',
          linkType: 'github',
        },
        {
          name: 'Using AI in Game Creation',
          description:
            '„Echoes of Solitude" este un joc video care folosește inteligența artificială pentru fiecare aspect al creării sale, de la artă și voce la cod și poveste.',
          tech: ['AI', 'Game Development'],
          link: 'https://github.com/Valentinbejan/Using_AI_in_game_creation',
          linkType: 'github',
        },
        {
          name: 'Sistem de Management Bacalaureat',
          description:
            'Aplicație web Java pentru gestionarea datelor examenului de Bacalaureat, cu funcționalități separate pentru administratori și elevi.',
          tech: ['Java', 'Web App'],
          link: 'https://github.com/Valentinbejan/BaccalaureateProject',
          linkType: 'github',
        },
        {
          name: 'Aparate Electrice',
          description:
            'Interfață grafică Java Swing care accesează și filtrează baze de date cu aparate electrice, cu export și import al seturilor filtrate.',
          tech: ['Java', 'Java Swing'],
          link: 'https://github.com/Valentinbejan/AparateElectrice/tree/Valentin2',
          linkType: 'github',
        },
        {
          name: 'Pizza Site',
          description:
            'Aplicație web a unei pizzerii, cu înregistrare și logare, selectarea produsului și validarea utilizatorilor.',
          tech: ['React', 'JavaScript'],
          link: 'https://github.com/Valentinbejan/pizza',
          linkType: 'github',
        },
        {
          name: 'Pagină de înregistrare și logare',
          description:
            'Pagină de înregistrare cu validare și verificarea existenței utilizatorului, plus conținut restricționat pentru utilizatorii autentificați.',
          tech: ['React', 'JavaScript'],
          link: 'https://github.com/Valentinbejan/Pagina_de_inregistrare_si_logare',
          linkType: 'github',
        },
        {
          name: 'proiect-react5',
          description:
            'Conversie de temperaturi, maparea produselor în componente și manipularea proprietăților obiectelor.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react5',
          linkType: 'github',
        },
        {
          name: 'proiect-react4',
          description:
            'UserCard, ProductItem, Counter, Timer, Form, Accordion și ProductList cu afișarea detaliilor la selectare.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react4',
          linkType: 'github',
        },
        {
          name: 'proiect-react3',
          description:
            'Contor, cronometru, convertor valutar, listă de contacte gestionabilă și un calculator simplu.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react3/tree/master',
          linkType: 'github',
        },
        {
          name: 'proiect-react2',
          description:
            'Pagină interactivă care prezintă seturi de date distincte în funcție de butoanele apăsate.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react2',
          linkType: 'github',
        },
        {
          name: 'proiect-react1',
          description:
            'Aplicație pe două coloane, cu selecție multiplă, saluturi aleatorii, butoane și un tabel de date dinamic.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react1',
          linkType: 'github',
        },
      ],
    },
    hobbies: {
      title: 'Interese',
      reference:
        '{n, plural, one {# MENȚIUNE} few {# MENȚIUNI} other {# DE MENȚIUNI}}',
      endorsementRef: 'MENȚIUNEA {n}',
      visit: 'Deschide canalul',
      items: [
        {
          title: 'Animare și editare video',
          description:
            'Gestionez un canal de YouTube dedicat animațiilor create cu Blender, Premiere Pro și After Effects.',
          link: 'https://www.youtube.com/@Valentinebej/featured',
          icon: 'youtube',
        },
        {
          title: 'Explorarea tehnologiilor AI',
          description:
            'Interes activ în evoluția AI, cu experimentare practică pe modele lingvistice mari (LLM), text-to-image și text-to-speech (TTS).',
          link: null,
          icon: 'ai',
        },
      ],
    },
    contact: {
      title: 'Contrasemnătură',
      phone: 'Telefon',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Localizare',
      youtube: 'YouTube',
      copy: 'Copiază',
      copied: 'Copiat',
      sealLegend: 'VALENTIN BEJAN · GALAȚI · ROMÂNIA · ACT PROPRIU · ',
      issuance:
        'Actul acesta este emis de titular. Nu este un document oficial și nu pretinde să fie: valoarea lui stă în referințele pe care le poți verifica singur.',
    },
    footer: {
      rights: '© 2026 Valentin Bejan. Toate drepturile rezervate.',
      built: 'NEXT.JS · TAILWIND · VERCEL',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      hobbies: 'Interests',
      contact: 'Contact',
      downloadCV: 'Download CV',
      reference: 'VB-2026-EN',
      openIndex: 'Open the index',
      closeIndex: 'Close the index',
    },
    controls: {
      daylight: 'Daylight',
      uv: 'UV lamp',
      toUV: 'Switch to the UV lamp',
      toDaylight: 'Switch to daylight',
    },
    cover: {
      givenName: 'Valentin',
      familyName: 'Bejan',
      denomination: 'Computer Engineering graduate & Artificial Intelligence Enthusiast',
      issuedLabel: 'Issued',
      issuedValue: 'JUL 2026',
      placeLabel: 'Place',
      placeValue: 'Galați, RO',
      statusLabel: 'Status',
      statusValue: 'MSc student, TIA',
      languagesLabel: 'Languages',
      languagesValue: 'RO · EN',
      certifiedCopy: 'Certified copy · PDF',
      verify: 'Verify the annexes',
      sealLegend: 'VALENTIN BEJAN · GALAȚI · ROMANIA · SELF-ISSUED · ',
      photoAlt: 'Valentin Bejan, graduation photograph.',
    },
    about: {
      title: 'Statement of the bearer',
      reference: 'STATEMENT',
      description:
        "Computer Engineering graduate currently pursuing a master's degree, with hands-on experience in software development and a strong interest in AI. From building React and Java apps and mobile tools to experimenting with modern AI models and LLMs, I'm driven by curiosity and enjoy tackling new challenges through hackathons and personal projects.",
      photoAlt:
        'Valentin Bejan at graduation, holding a cap reading “Trust me, I’m an Engineer”.',
      capQuote: '“Trust me, I’m an Engineer”',
      capCaption: 'The inscription on the cap, at graduation',
      signedLabel: 'Signed',
      dateLabel: 'Date',
      dateValue: 'Galați, 2026',
      stampLine1: 'Self-issued',
      stampLine2: 'GALAȚI · 2026',
    },
    experience: {
      title: 'Professional experience',
      reference: '{n, plural, one {# POSITION} other {# POSITIONS}}',
      jobs: [
        {
          company: 'LILT AI · Freelance',
          location: 'Remote',
          position: 'Romanian AI Content Expert',
          period: 'Jan. 2026 – present',
          description: '',
          link: 'https://lilt.com',
        },
        {
          company: 'Thecon',
          location: 'Galați, Romania',
          position: 'Intern',
          period: '08/01/2024 – 29/03/2024',
          description:
            'Gained practical knowledge and skills in web development using JavaScript and React.',
          link: 'https://thecon.ro',
        },
        {
          company: 'Still-Co',
          location: 'Galați, Romania',
          position: 'Intern',
          period: '26/06/2023 – 14/07/2023',
          description:
            'Gained practical knowledge and skills in web development using JavaScript and React.',
        },
      ],
    },
    education: {
      title: 'Education',
      reference: '{n, plural, one {# CREDENTIAL} other {# CREDENTIALS}}',
      schools: [
        {
          name: '"Dunărea de Jos" University, Galați',
          degree:
            'Faculty of Automation, Computers, Electrical and Electronic Engineering',
          field: "Master's: Advanced Information Technologies",
          period: '2025 – present',
          status: 'MSc student',
          link: 'https://www.ugal.ro',
        },
        {
          name: '"Dunărea de Jos" University, Galați',
          degree:
            'Faculty of Automation, Computers, Electrical and Electronic Engineering',
          field: "Bachelor's: Computers and Information Technology",
          period: '2021 – 2025',
          status: 'Engineer',
          link: 'https://www.ugal.ro',
        },
        {
          name: '"Dunărea" Theoretical High School, Galați',
          degree: 'Baccalaureate',
          field: 'Mathematics-Computer Science',
          period: '2017 – 2021',
          status: '',
        },
      ],
    },
    skills: {
      title: 'Competences',
      reference: '{n, plural, one {# CATEGORY} other {# CATEGORIES}}',
      categories: {
        programming: {
          title: 'Programming',
          items: ['React', 'JavaScript', 'Java', 'C#', 'Python'],
        },
        ai: {
          title: 'Artificial intelligence',
          items: [
            'Stable Diffusion model training',
            'LLM model training',
            'AI dataset creation',
            'LangChain',
          ],
        },
        database: {
          title: 'Databases',
          items: ['Oracle SQL Plus', 'MySQL', 'Prisma', 'Supabase'],
        },
        graphics: {
          title: 'Graphics and video',
          items: ['Blender', 'Premiere Pro', 'After Effects'],
        },
        languages: {
          title: 'Languages',
          items: ['Romanian (native)', 'English (advanced)'],
        },
      },
    },
    projects: {
      title: 'Annexes',
      reference: '{n, plural, one {# ANNEX} other {# ANNEXES}}',
      note: 'The first four are the work that matters now. Each one goes straight to its source code or to the app running in production.',
      annexRef: 'ANNEX {n}',
      proofSource: 'Public source',
      proofLive: 'Live app',
      furtherTitle: 'Earlier work',
      items: [
        {
          name: 'LLM UI — Chat with RAG',
          description:
            "Bachelor's thesis (2025): self-hosted chat UI for local LLMs. Next.js over PostgreSQL 16 + pgvector, with RAG across conversation history, document ingestion, web search and TTS. Ships an ORPO fine-tuning pipeline for a custom Llama 3.2 1B.",
          tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'pgvector', 'Prisma', 'Ollama', 'RAG'],
          link: 'https://github.com/Valentinbejan/ollama-ui-llm-rag',
          linkType: 'github',
          tier: 'principal',
        },
        {
          name: 'Japanese Voice Studio',
          description:
            'Text-to-speech studio with a Next.js frontend and a serverless Modal GPU backend, featuring WASM audio clean-up and WebGPU transcription.',
          tech: ['Next.js', 'Modal', 'WASM', 'WebGPU', 'Cloudflare R2'],
          link: 'https://irodori-tts-studio.vercel.app/',
          linkType: 'website',
          tier: 'principal',
        },
        {
          name: 'Maritime DB Monitor',
          description:
            'AI-powered PostgreSQL health dashboard: a daemon collects metrics and logs, and a context-aware LLM analyses schemas, execution plans and vacuum tuning.',
          tech: ['Python', 'PostgreSQL', 'Streamlit', 'Docker', 'LLM'],
          link: 'https://github.com/Valentinbejan/maritime-db-monitor',
          linkType: 'github',
          tier: 'principal',
        },
        {
          name: 'VibeScout (TheCon 2025)',
          description:
            'Hackathon app: discover Romanian venues via maps, filters, AI chatbot. Solo entry — 4th place overall (best one-person project) out of ~30 teams; the top 3 were multi-person teams.',
          tech: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
          link: 'https://github.com/Valentinbejan/thecon-2025',
          linkType: 'github',
          tier: 'principal',
        },
        {
          name: 'LangGraph Excel Agent',
          description:
            'An AI agent built with LangChain and LangGraph that reads and edits Excel files from natural-language instructions.',
          tech: ['LangChain', 'LangGraph', 'Python', 'AI'],
          link: 'https://github.com/Valentinbejan/langgraph-excel-agent',
          linkType: 'github',
        },
        {
          name: 'OCR Application',
          description:
            'Flask, Celery and Docker web app that extracts text from images with Tesseract OCR, processing in the background.',
          tech: ['Flask', 'Celery', 'Docker', 'Python'],
          link: 'https://github.com/Valentinbejan/flask-ocr-celery-app',
          linkType: 'github',
        },
        {
          name: 'Counting Coins in an Image',
          description:
            'A Python project using computer vision and machine learning to detect and count coins in an image automatically.',
          tech: ['Python', 'Computer Vision'],
          link: 'https://www.linkedin.com/in/bejan-valentin-702b53287/details/projects/1635535867960/single-media-viewer/?profileId=ACoAAEXCYTIB0-88okoetGMjAUEE0eyTrzlE4bU',
          linkType: 'linkedin',
        },
        {
          name: 'Food-Ordering-App',
          description:
            'A mobile app for managing products and orders, with separate user and administrator roles.',
          tech: ['React Native', 'Supabase', 'Expo'],
          link: 'https://github.com/Valentinbejan/Food-Ordering-App',
          linkType: 'github',
        },
        {
          name: 'Recipe-App',
          description:
            'A recipe app with a React frontend and a Node.js + Prisma backend, over ElephantSQL and the Spoonacular API.',
          tech: ['React', 'Node.js', 'Prisma'],
          link: 'https://github.com/Valentinbejan/recipe-app',
          linkType: 'github',
        },
        {
          name: 'Using AI in Game Creation',
          description:
            '"Echoes of Solitude" is a video game that uses artificial intelligence for every aspect of its creation, from art and voice acting to code and story.',
          tech: ['AI', 'Game Development'],
          link: 'https://github.com/Valentinbejan/Using_AI_in_game_creation',
          linkType: 'github',
        },
        {
          name: 'Baccalaureate Management System',
          description:
            'A Java web application for managing Baccalaureate exam data, with separate features for administrators and students.',
          tech: ['Java', 'Web App'],
          link: 'https://github.com/Valentinbejan/BaccalaureateProject',
          linkType: 'github',
        },
        {
          name: 'Electrical Appliances',
          description:
            'A Java Swing interface that queries and filters appliance databases, with export and import of the filtered sets.',
          tech: ['Java', 'Java Swing'],
          link: 'https://github.com/Valentinbejan/AparateElectrice/tree/Valentin2',
          linkType: 'github',
        },
        {
          name: 'Pizza Site',
          description:
            'A pizzeria web app with registration and login, product selection and user validation.',
          tech: ['React', 'JavaScript'],
          link: 'https://github.com/Valentinbejan/pizza',
          linkType: 'github',
        },
        {
          name: 'Registration and Login Page',
          description:
            'A registration page with validation and duplicate-user checks, plus content restricted to authenticated users.',
          tech: ['React', 'JavaScript'],
          link: 'https://github.com/Valentinbejan/Pagina_de_inregistrare_si_logare',
          linkType: 'github',
        },
        {
          name: 'proiect-react5',
          description:
            'Temperature conversion, mapping products into components, and manipulating object properties.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react5',
          linkType: 'github',
        },
        {
          name: 'proiect-react4',
          description:
            'UserCard, ProductItem, Counter, Timer, Form, Accordion and ProductList with detail-on-select.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react4',
          linkType: 'github',
        },
        {
          name: 'proiect-react3',
          description:
            'A counter, a stopwatch, a currency converter, a manageable contact list and a simple calculator.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react3/tree/master',
          linkType: 'github',
        },
        {
          name: 'proiect-react2',
          description:
            'An interactive page that presents distinct data sets depending on the buttons pressed.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react2',
          linkType: 'github',
        },
        {
          name: 'proiect-react1',
          description:
            'A two-column app with multi-select, random greetings, buttons and a dynamic data table.',
          tech: ['React'],
          link: 'https://github.com/Valentinbejan/proiect-react1',
          linkType: 'github',
        },
      ],
    },
    hobbies: {
      title: 'Interests',
      reference: '{n, plural, one {# ENTRY} other {# ENTRIES}}',
      endorsementRef: 'ENTRY {n}',
      visit: 'Open the channel',
      items: [
        {
          title: 'Animation and video editing',
          description:
            'I run a YouTube channel dedicated to animations made with Blender, Premiere Pro and After Effects.',
          link: 'https://www.youtube.com/@Valentinebej/featured',
          icon: 'youtube',
        },
        {
          title: 'Exploring AI technologies',
          description:
            'An active interest in how AI is developing, with hands-on work on large language models, text-to-image and text-to-speech.',
          link: null,
          icon: 'ai',
        },
      ],
    },
    contact: {
      title: 'Countersignature',
      phone: 'Phone',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      youtube: 'YouTube',
      copy: 'Copy',
      copied: 'Copied',
      sealLegend: 'VALENTIN BEJAN · GALAȚI · ROMANIA · SELF-ISSUED · ',
      issuance:
        'This record is issued by its bearer. It is not an official document and does not pretend to be one: its value is in the references you can check yourself.',
    },
    footer: {
      rights: '© 2026 Valentin Bejan. All rights reserved.',
      built: 'NEXT.JS · TAILWIND · VERCEL',
    },
  },
} as const;

export type Locale = keyof typeof translations;
