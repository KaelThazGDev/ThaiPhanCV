document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // Theme Toggle Functionality
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Retrieve saved theme or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }

  // Toggle theme handler
  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });

  // ==========================================================================
  // Language Toggle (EN / VN) - page text translation
  // ==========================================================================
  const langEnBtn = document.getElementById('lang-en');
  const langVnBtn = document.getElementById('lang-vn');
  const i18nElements = document.querySelectorAll('[data-i18n]');

  const translations = {
    en: {
      headerContact: 'Contact: +84-762078988',
      bioSubtitle: 'Automotive Engineer & Technical Specialist',
      bioDesc: 'Drawing from over nine years of experience as an Aftersales Service Engineer and Technical Specialist with international companies, I possess the expertise and competence required to drive customer satisfaction, optimize operations, and support sustainable business growth.',
      basicInfoTitle: 'BASIC INFO',
      bornLabel: 'Born:',
      bornValue: '24/12/1993',
      genderLabel: 'Gender:',
      genderValue: 'Male',
      maritalLabel: 'Marital:',
      maritalValue: 'Married',
      statusLabel: 'Status:',
      statusValue: 'Vietnamese',
      educationTitle: 'EDUCATION',
      educationHustName: 'HUST',
      educationHustSub: 'Bachelors - Automotive Eng.',
      educationGiftedName: 'Nguyen Hue Gifted',
      educationGiftedSub: 'Programming (2008-2011)',
      objectivesTitle: 'OBJECTIVES',
      objectiveText: 'Drive customer satisfaction, optimize operations, and support sustainable business growth.',
      overlayTitle: 'Automotive Engineer',
      contactTitle: 'CONTACT ME',
      contactEmailLabel: 'Email:',
      contactPhoneLabel: 'Phone:',
      contactLocLabel: 'Loc:',
      skillsTitle: 'SKILLS',
      skillA: 'Excel & Power BI',
      skillB: 'Power Automate',
      skillC: 'Python',
      skillD: 'Diagnostics',
      knowledgeTitle: 'KNOWLEDGE',
      knowledgeToeicLabel: 'TOEIC:',
      knowledgeToeicValue: '970 pts (2019)',
      knowledgeTbpLabel: 'TBP:',
      knowledgeTbpValue: 'Toyota 8-steps solving',
      role2015: 'Automotive Intern',
      task2015Header: 'Observe & on-site support assembly line:',
      task2015A: 'Cabin welding',
      task2015B: 'Chassis assembling',
      task2015C: 'Engine assembling',
      task2015D: 'Powertrain assembling',
      task2015E: 'Suspension assembling',
      task2015F: 'Painting line',
      role2016: 'Automotive Technician',
      task2016A: 'Maintain vehicle periodically',
      task2016B: 'Diagnosis & repair vehicle',
      task2016C: 'Maintain tools & equipment',
      task2016D: 'Follow up technical report',
      role2017: 'Equipment Salesman',
      task2017A: 'Look for potential customers',
      task2017B: 'Maintain customers relationship',
      task2017C: 'Prepare quotations, contracts, payment proposals and related documents',
      task2017D: 'Translate instruction manual',
      role2018: 'Service Engineer',
      task2018A: 'Supervise Northside service station network',
      task2018B: 'Provide technical support for factory & end-user.',
      task2018C: 'Research product\'s performance, issues, regulation',
      task2018D: 'Conduct & support engine emission test at NETC',
      task2018E: 'Develop Adblue & Spare part sales channel',
      role2022: 'Dealer Operation Support',
      task2022A: 'Support Dealers achieve business\'s target',
      task2022B: 'Ensure Dealers compile with SOP & policies',
      task2022C: 'Analyze Dealer\'s performance & KPI',
      task2022D: 'Support developing ERP & CRM software',
      task2022E: 'Provide Standard Operation Procedure training',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Showcasing my technical expertise and accomplishments',
      project1Name: 'Hino Part Name Standardization',
      project1Desc: 'AI-powered part lookup tool with fuzzy search, bilingual support, and multiple translation variants from different AI sources (Reviewed, Gemini, Ollama).',
      project1Feature1: '🔍 Smart fuzzy matching with Levenshtein distance',
      project1Feature2: '🤖 Multiple AI translation sources with quality scoring',
      project1Feature3: '🇻🇳 Bilingual Vietnamese/English interface',
      project1Feature4: '📱 Fully responsive across all devices',
      project2Name: 'HinoPartWeb Dashboard',
      project2Desc: 'Interactive management dashboard for Hino parts inventory with real-time data visualization, hierarchical category navigation, and comprehensive analytics.',
      project2Feature1: '📊 Interactive dashboard with real-time data',
      project2Feature2: '🗂️ Hierarchical category and model navigation',
      project2Feature3: '📈 Comprehensive analytics and KPI tracking',
      project2Feature4: '🎨 Modern responsive design with dark/light modes',
      viewDemo: 'View Demo',
      footerText: '© 2026 Thai Phan. All Rights Reserved. Crafted with passion.',
    },
    vn: {
      headerContact: 'Liên hệ: +84-762078988',
      bioSubtitle: 'Kỹ sư ô tô và chuyên gia kỹ thuật',
      bioDesc: 'Với hơn chín năm kinh nghiệm là kỹ sư dịch vụ hậu mãi và chuyên gia kỹ thuật tại các công ty quốc tế, tôi sở hữu chuyên môn và năng lực cần thiết để nâng cao sự hài lòng khách hàng, tối ưu hóa hoạt động và hỗ trợ tăng trưởng kinh doanh bền vững.',
      basicInfoTitle: 'THÔNG TIN CƠ BẢN',
      bornLabel: 'Sinh ngày:',
      bornValue: '24/12/1993',
      genderLabel: 'Giới tính:',
      genderValue: 'Nam',
      maritalLabel: 'Tình trạng hôn nhân:',
      maritalValue: 'Đã kết hôn',
      statusLabel: 'Quốc tịch:',
      statusValue: 'Việt Nam',
      educationTitle: 'HỌC VẤN',
      educationHustName: 'ĐH Bách Khoa HN',
      educationHustSub: 'Cử nhân - Kỹ thuật ô tô',
      educationGiftedName: 'Chuyên Nguyễn Huệ',
      educationGiftedSub: 'Chuyên Toán-Tin (2008-2011)',
      objectivesTitle: 'MỤC TIÊU',
      objectiveText: 'Nâng cao sự hài lòng khách hàng, tối ưu hóa quy trình và hỗ trợ tăng trưởng kinh doanh bền vững.',
      overlayTitle: 'Kỹ sư ô tô',
      contactTitle: 'LIÊN HỆ',
      contactEmailLabel: 'Email:',
      contactPhoneLabel: 'Điện thoại:',
      contactLocLabel: 'Địa chỉ:',
      skillsTitle: 'KỸ NĂNG',
      skillA: 'Excel & Power BI',
      skillB: 'Power Automate',
      skillC: 'Python',
      skillD: 'Chẩn đoán',
      knowledgeTitle: 'KIẾN THỨC',
      knowledgeToeicLabel: 'TOEIC:',
      knowledgeToeicValue: '970 điểm (2019)',
      knowledgeTbpLabel: 'TBP:',
      knowledgeTbpValue: 'Giải quyết theo 8 bước Toyota',
      role2015: 'Thực tập sinh ô tô',
      task2015Header: 'Quan sát & hỗ trợ trực tiếp dây chuyền lắp ráp:',
      task2015A: 'Hàn vỏ cabin',
      task2015B: 'Lắp ráp khung gầm',
      task2015C: 'Lắp ráp động cơ',
      task2015D: 'Lắp ráp hệ truyền động',
      task2015E: 'Lắp ráp hệ treo',
      task2015F: 'Dây chuyền sơn',
      role2016: 'Kỹ thuật viên ô tô',
      task2016A: 'Bảo dưỡng xe định kỳ',
      task2016B: 'Chẩn đoán & sửa chữa xe',
      task2016C: 'Bảo trì dụng cụ & thiết bị',
      task2016D: 'Theo dõi báo cáo kỹ thuật',
      role2017: 'Nhân viên kinh doanh thiết bị',
      task2017A: 'Tìm kiếm khách hàng tiềm năng',
      task2017B: 'Duy trì mối quan hệ khách hàng',
      task2017C: 'Chuẩn bị báo giá, hợp đồng, đề xuất thanh toán và hồ sơ liên quan',
      task2017D: 'Dịch hướng dẫn sử dụng',
      role2018: 'Kỹ sư dịch vụ',
      task2018A: 'Giám sát mạng lưới trạm dịch vụ khu vực phía Bắc',
      task2018B: 'Hỗ trợ kỹ thuật cho nhà máy và người dùng cuối',
      task2018C: 'Nghiên cứu hiệu suất sản phẩm, sự cố và quy định',
      task2018D: 'Thực hiện và hỗ trợ thử nghiệm khí thải động cơ tại NETC',
      task2018E: 'Phát triển kênh bán AdBlue và phụ tùng',
      role2022: 'Hỗ trợ vận hành đại lý',
      task2022A: 'Hỗ trợ đại lý đạt mục tiêu kinh doanh',
      task2022B: 'Đảm bảo đại lý tuân thủ SOP và chính sách',
      task2022C: 'Phân tích hiệu suất và KPI của đại lý',
      task2022D: 'Hỗ trợ phát triển phần mềm ERP và CRM',
      task2022E: 'Đào tạo quy trình vận hành chuẩn',
      projectsTitle: 'Dự án tiêu biểu',
      projectsSubtitle: 'Giới thiệu kỹ năng kỹ thuật và những thành tựu của tôi',
      project1Name: 'Hino Công cụ tiêu chuẩn hóa tên phụ tùng',
      project1Desc: 'Công cụ tìm kiếm phụ tùng do AI hỗ trợ với tìm kiếm mờ, hỗ trợ đa ngôn ngữ, và nhiều biến thể dịch thuật từ các nguồn AI khác nhau (Reviewed, Gemini, Ollama).',
      project1Feature1: '🔍 Khớp mờ thông minh với thuật toán Levenshtein',
      project1Feature2: '🤖 Nhiều nguồn dịch thuật AI có điểm chất lượng',
      project1Feature3: '🇻🇳 Giao diện đa ngôn ngữ Việt/Anh',
      project1Feature4: '📱 Đáp ứng đầy đủ trên tất cả các thiết bị',
      project2Name: 'Dashboard HinoPartWeb',
      project2Desc: 'Bảng điều khiển quản lý tương tác cho kho phụ tùng Hino với trực quan hóa dữ liệu thời gian thực, điều hướng danh mục phân cấp, và phân tích toàn diện.',
      project2Feature1: '📊 Bảng điều khiển tương tác với dữ liệu thời gian thực',
      project2Feature2: '🗂️ Điều hướng danh mục và mô hình phân cấp',
      project2Feature3: '📈 Theo dõi phân tích toàn diện và KPI',
      project2Feature4: '🎨 Thiết kế hiện đại, đáp ứng với chế độ tối/sáng',
      viewDemo: 'Xem Demo',
      footerText: '© 2026 Thai Phan. Bản quyền thuộc về Thai Phan. Được tạo bằng đam mê.',
    }
  };

  const translatePage = (lang) => {
    if (!translations[lang]) return;
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  };

  const setActiveLang = (lang) => {
    if (!langEnBtn || !langVnBtn) return;
    if (lang === 'vn') {
      langEnBtn.classList.remove('active');
      langEnBtn.setAttribute('aria-pressed', 'false');
      langVnBtn.classList.add('active');
      langVnBtn.setAttribute('aria-pressed', 'true');
    } else {
      langVnBtn.classList.remove('active');
      langVnBtn.setAttribute('aria-pressed', 'false');
      langEnBtn.classList.add('active');
      langEnBtn.setAttribute('aria-pressed', 'true');
    }
    localStorage.setItem('lang', lang);
    translatePage(lang);
  };

  // Initialize language from localStorage (default EN)
  const savedLang = localStorage.getItem('lang') || 'en';
  setActiveLang(savedLang);

  if (langEnBtn) langEnBtn.addEventListener('click', () => setActiveLang('en'));
  if (langVnBtn) langVnBtn.addEventListener('click', () => setActiveLang('vn'));

  // ==========================================================================
  // Entrance Animations (Intersection Observer)
  // ==========================================================================
  const timelineNodes = document.querySelectorAll('.timeline-node');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const nodeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add class to trigger animation
        entry.target.classList.add('active');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply observer to all timeline nodes
  // On large desktop, add a staggered transition when first visible
  const isDesktop = window.innerWidth > 1024;
  
  if (isDesktop) {
    // If desktop, apply delay to make horizontal entrance look elegant
    timelineNodes.forEach((node, index) => {
      // Set inline animation delay
      node.style.animationDelay = `${index * 150}ms`;
      nodeObserver.observe(node);
    });
  } else {
    // On mobile, trigger as they scroll in
    timelineNodes.forEach(node => {
      nodeObserver.observe(node);
    });
  }

  // ==========================================================================
  // Project Cards Animation (Intersection Observer)
  // ==========================================================================
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 150}ms`;
    nodeObserver.observe(card);
  });

  // Dynamic axis fill animation on mobile scroll
  const handleMobileScroll = () => {
    if (window.innerWidth <= 1024) {
      const container = document.querySelector('.timeline-container');
      const progress = document.querySelector('.timeline-progress');
      if (!container || !progress) return;
      
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline container has been scrolled through
      const totalHeight = containerRect.height;
      const scrolledPast = Math.max(0, -containerRect.top + (windowHeight / 2));
      
      const percent = Math.min(100, Math.max(0, (scrolledPast / totalHeight) * 100));
      progress.style.height = `${percent}%`;
    } else {
      // Reset progress width for desktop
      const progress = document.querySelector('.timeline-progress');
      if (progress) {
        progress.style.height = '100%';
      }
    }
  };

  // Attach scroll handler for vertical timeline progression
  window.addEventListener('scroll', handleMobileScroll);
  window.addEventListener('resize', () => {
    handleMobileScroll();
  });
  
  // Run once to initialize
  handleMobileScroll();
});
