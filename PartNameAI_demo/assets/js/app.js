// Dummy data with AI translation features
const DUMMY_DATA = [
  {
    pn: "ENG-001",
    groups: ["Engine"],
    subgroups: ["Diesel", "4-Cylinder"],
    series: ["100", "105"],
    models: ["Hino 300"],
    note: "Common on commercial vehicles",
    names: [
      {
        name: "4-Cylinder Diesel Engine",
        grpVn: "Động cơ",
        vn1: "Động cơ diesel 4 xi lanh",
        s1: "0.95",
        n1: "Reviewed by expert",
        vn2: "Động cơ diesel bốn xy lanh",
        s2: "0.88",
        n2: "Gemini translation",
        vn3: "Động cơ xăng 4 xi lanh",
        s3: "0.72",
        n3: "Ollama suggestion",
        vn4: "Motor diesel"
      }
    ]
  },
  {
    pn: "ENG-002",
    groups: ["Engine"],
    subgroups: ["Diesel", "6-Cylinder"],
    series: ["200", "300"],
    models: ["Hino 500"],
    note: "Used in heavy trucks",
    names: [
      {
        name: "6-Cylinder Diesel Engine",
        grpVn: "Động cơ",
        vn1: "Động cơ diesel 6 xi lanh",
        s1: "0.97",
        n1: "Verified translation",
        vn2: "Động cơ diesel sáu xy lanh",
        s2: "0.89",
        n2: "Gemini variant",
        vn3: "Động cơ 6 xy lanh",
        s3: "0.81",
        n3: "Alternative",
        vn4: "Motor diesel 6 xi"
      }
    ]
  },
  {
    pn: "FLT-001",
    groups: ["Filters"],
    subgroups: ["Air"],
    series: ["100"],
    models: ["Hino 300", "Hino 500"],
    note: "Standard part for air intake",
    names: [
      {
        name: "Air Filter Assembly",
        grpVn: "Bộ lọc",
        vn1: "Bộ lọc không khí",
        s1: "0.96",
        n1: "Expert verified",
        vn2: "Cụm bộ lọc không khí",
        s2: "0.91",
        n2: "Gemini",
        vn3: "Lọc khí",
        s3: "0.85",
        n3: "Shortened form",
        vn4: "Filter không khí"
      }
    ]
  },
  {
    pn: "FLT-002",
    groups: ["Filters"],
    subgroups: ["Oil"],
    series: ["100", "200"],
    models: ["All"],
    note: "Replace every 10,000 km",
    names: [
      {
        name: "Engine Oil Filter",
        grpVn: "Bộ lọc",
        vn1: "Bộ lọc dầu động cơ",
        s1: "0.98",
        n1: "Standard translation",
        vn2: "Bộ lọc dầu máy",
        s2: "0.87",
        n2: "Gemini alternative",
        vn3: "Lọc dầu động cơ",
        s3: "0.89",
        n3: "Common variant",
        vn4: "Filter dầu"
      }
    ]
  },
  {
    pn: "SUP-001",
    groups: ["Suspension"],
    subgroups: ["Spring"],
    series: ["100"],
    models: ["Hino 300"],
    note: "Leaf spring system",
    names: [
      {
        name: "Suspension Spring Assembly",
        grpVn: "Hệ thống treo",
        vn1: "Bộ lò xo hệ thống treo",
        s1: "0.94",
        n1: "Technical term verified",
        vn2: "Lò xo treo xe",
        s2: "0.86",
        n2: "Simplified",
        vn3: "Spring suspension",
        s3: "0.75",
        n3: "Mixed language",
        vn4: "Lò xo"
      }
    ]
  },
  {
    pn: "PAD-001",
    groups: ["Brakes"],
    subgroups: ["Disc Pad"],
    series: ["100", "200"],
    models: ["All"],
    note: "Front brake application",
    names: [
      {
        name: "Front Disc Brake Pad",
        grpVn: "Má phanh",
        vn1: "Má phanh đĩa trước",
        s1: "0.99",
        n1: "Industry standard",
        vn2: "Má phanh đĩa phía trước",
        s2: "0.93",
        n2: "Alternative phrasing",
        vn3: "Má phanh trước",
        s3: "0.88",
        n3: "Shortened",
        vn4: "Brake pad"
      }
    ]
  },
  {
    pn: "CAB-001",
    groups: ["HVAC"],
    subgroups: ["Air Conditioning"],
    series: ["100", "200"],
    models: ["Hino 300", "Hino 500"],
    note: "Climate control component",
    names: [
      {
        name: "Cabin Air Duct",
        grpVn: "Điều hòa",
        vn1: "Ống dẫn khí cabin",
        s1: "0.92",
        n1: "Technical specification",
        vn2: "Ống dẫn không khí cabin",
        s2: "0.89",
        n2: "Alternative form",
        vn3: "Dây dẫn lạnh",
        s3: "0.81",
        n3: "Older terminology",
        vn4: "Air duct"
      }
    ]
  },
  {
    pn: "LGT-001",
    groups: ["Lighting"],
    subgroups: ["Headlight"],
    series: ["200", "300"],
    models: ["Hino 500", "Hino 700"],
    note: "Latest LED technology",
    names: [
      {
        name: "Front LED Headlight",
        grpVn: "Đèn",
        vn1: "Đèn pha LED phía trước",
        s1: "0.96",
        n1: "Modern standard",
        vn2: "Đèn pha điện tử trước",
        s2: "0.84",
        n2: "Alternative",
        vn3: "Đèn LED trước",
        s3: "0.91",
        n3: "Simplified form",
        vn4: "Headlight LED"
      }
    ]
  },
  {
    pn: "BAT-001",
    groups: ["Electrical"],
    subgroups: ["Battery"],
    series: ["100", "200"],
    models: ["All"],
    note: "Deep-cycle battery",
    names: [
      {
        name: "24V 200Ah Battery",
        grpVn: "Pin xích điện",
        vn1: "Pin ắc quy 24V 200Ah",
        s1: "0.97",
        n1: "Verified specification",
        vn2: "Bình pin 24 volt 200 amh",
        s2: "0.85",
        n2: "Written form",
        vn3: "Ắc quy 24V",
        s3: "0.89",
        n3: "Common abbreviation",
        vn4: "Battery 24V"
      }
    ]
  }
];

// Initialize
let currentData = DUMMY_DATA;
const searchInput = document.getElementById('searchInput');
const fuzzyDropdown = document.getElementById('fuzzyDropdown');
const resultsContainer = document.getElementById('resultsContainer');
const noResults = document.getElementById('noResults');
const searchInfo = document.getElementById('searchInfo');
const thinkingContainer = document.getElementById('thinkingContainer');
const thinkingSteps = document.getElementById('thinkingSteps');
const thinkingProgressBar = document.getElementById('thinkingProgressBar');
const thinkingComplete = document.getElementById('thinkingComplete');

// Event listeners
searchInput.addEventListener('input', handleFuzzySearch);
searchInput.addEventListener('keydown', handleSearchKeydown);
document.addEventListener('click', closeFuzzyDropdown);

// ===== Thinking Phase Functions =====

function showThinking(query, results) {
  // Reset and show thinking container
  thinkingContainer.style.display = 'block';
  thinkingSteps.innerHTML = '';
  thinkingProgressBar.style.width = '0%';
  thinkingComplete.classList.remove('visible');
  resultsContainer.innerHTML = '';
  noResults.style.display = 'none';

  // Generate contextual thinking steps based on query and results
  const steps = generateThinkingSteps(query, results);
  let currentStep = 0;
  const totalSteps = steps.length;

  function revealNextStep() {
    if (currentStep >= totalSteps) {
      finishThinking(results);
      return;
    }

    const step = steps[currentStep];
    const stepEl = document.createElement('div');
    stepEl.className = 'thinking-step';
    stepEl.innerHTML = `
      <div class="step-status"></div>
      <div class="step-content">
        <div class="step-label">${step.label}</div>
        <div class="step-detail">${step.detail}</div>
      </div>
    `;
    thinkingSteps.appendChild(stepEl);

    // Trigger active state after a tiny delay for animation
    requestAnimationFrame(() => {
      stepEl.classList.add('visible', 'active');
    });

    // Mark previous step as completed
    const prevSteps = thinkingSteps.querySelectorAll('.thinking-step');
    for (let i = 0; i < prevSteps.length - 1; i++) {
      prevSteps[i].classList.remove('active');
      prevSteps[i].classList.add('completed');
    }

    // Update progress
    const progress = ((currentStep + 1) / totalSteps) * 100;
    thinkingProgressBar.style.width = progress + '%';

    currentStep++;

    // Schedule next step with varying delays
    const delay = step.duration || 400 + Math.random() * 300;
    setTimeout(revealNextStep, delay);
  }

  revealNextStep();
}

function generateThinkingSteps(query, results) {
  const q = query.toUpperCase();
  const steps = [];

  steps.push({
    label: `Nhận diện truy vấn: "${query}"`,
    detail: `Phân tích mã số và từ khóa đầu vào`,
    duration: 500
  });

  steps.push({
    label: `Quét cơ sở dữ liệu phụ tùng...`,
    detail: `Tìm kiếm trong ${currentData.length} bản ghi`,
    duration: 600
  });

  // Check if query looks like a part number
  const isPartCode = /^[A-Z]{2,4}/i.test(query);
  if (isPartCode) {
    const matchedGroups = [...new Set(results.map(r => r.groups[0]))];
    steps.push({
      label: `Phát hiện mã phụ tùng`,
      detail: `Nhóm phụ tùng: ${matchedGroups.join(', ') || 'Đa dạng'}`,
      duration: 500
    });
  } else {
    steps.push({
      label: `Phân tích ngữ nghĩa tìm kiếm`,
      detail: `Đối chiếu từ khóa với danh mục phụ tùng`,
      duration: 500
    });
  }

  if (results.length > 0) {
    const totalTranslations = results.reduce((sum, r) => sum + r.names.length, 0);
    steps.push({
      label: `Tìm thấy ${results.length} kết quả phù hợp`,
      detail: `Tổng số bản dịch: ${totalTranslations} phiên bản`,
      duration: 600
    });

    // Add translation analysis steps for each result
    results.forEach((result, idx) => {
      const firstName = result.names[0];
      const topScore = firstName?.s1 || '0';
      const scorePercent = (parseFloat(topScore) * 100).toFixed(0);

      steps.push({
        label: `Đánh giá bản dịch cho ${result.pn}`,
        detail: `Điểm tin cậy cao nhất: ${scorePercent}% — "${firstName?.vn1}"`,
        duration: 500
      });

      // Compare translations
      const scores = [firstName?.s1, firstName?.s2, firstName?.s3].filter(Boolean).map(s => parseFloat(s));
      if (scores.length > 1) {
        const avgScore = (scores.reduce((a, b) => a + b, 0) / scores.length * 100).toFixed(0);
        steps.push({
          label: `Tổng hợp các phiên bản dịch`,
          detail: `Điểm trung bình: ${avgScore}% — Đối chiếu ${scores.length} nguồn`,
          duration: 400
        });
      }
    });

    steps.push({
      label: `Áp dụng thuật toán xếp hạng`,
      detail: `Sắp xếp theo độ chính xác và nguồn dữ liệu`,
      duration: 500
    });
  } else {
    steps.push({
      label: `Không tìm thấy kết quả`,
      detail: `Thử lại với từ khóa khác hoặc kiểm tra mã phụ tùng`,
      duration: 800
    });
  }

  steps.push({
    label: `Hoàn tất phân tích`,
    detail: `Chuẩn bị hiển thị kết quả...`,
    duration: 400
  });

  return steps;
}

function finishThinking(results) {
  // Mark last step as completed
  const allSteps = thinkingSteps.querySelectorAll('.thinking-step');
  allSteps.forEach(s => {
    s.classList.remove('active');
    s.classList.add('completed');
  });

  // Complete progress
  thinkingProgressBar.style.width = '100%';

  // Show completion message
  thinkingComplete.classList.add('visible');

  // After a brief delay, hide thinking and show results
  setTimeout(() => {
    thinkingContainer.style.display = 'none';
    thinkingComplete.classList.remove('visible');
    if (results && results.length > 0) {
      renderResults(results);
    } else {
      renderNoResults('Không tìm thấy phụ tùng phù hợp');
    }
  }, 600);
}

function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = [];

  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[len2][len1];
}

function fuzzySearch(query, topN = 5) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results = currentData.map(item => {
    const pn = item.pn.toLowerCase();
    const allText = [
      item.pn,
      ...item.groups,
      ...item.subgroups,
      ...item.series,
      ...item.names.map(n => n.name + ' ' + n.grpVn)
    ].join(' ').toLowerCase();
    
    const pnDist = levenshteinDistance(q, pn);
    const textDist = levenshteinDistance(q, allText);
    
    const pnMatch = pn.includes(q) ? 0 : pnDist;
    const textMatch = allText.includes(q) ? 1 : textDist;
    const score = Math.min(pnMatch, textMatch);
    
    return { ...item, score };
  });

  return results
    .filter(r => r.score < 5)
    .sort((a, b) => a.score - b.score)
    .slice(0, topN);
}

function handleFuzzySearch(e) {
  const query = e.target.value.trim();
  
  if (!query) {
    fuzzyDropdown.classList.remove('show');
    resultsContainer.innerHTML = '';
    noResults.style.display = 'block';
    searchInfo.innerHTML = '';
    thinkingContainer.style.display = 'none';
    return;
  }

  // Hide previous thinking/results when typing new query
  thinkingContainer.style.display = 'none';

  const results = fuzzySearch(query);
  
  if (results.length === 0) {
    fuzzyDropdown.classList.remove('show');
    renderNoResults('Không tìm thấy kết quả');
    searchInfo.innerHTML = '0 kết quả';
    return;
  }

  renderFuzzyDropdown(results, query);
}

function handleSearchKeydown(e) {
  const items = fuzzyDropdown.querySelectorAll('.fuzzy-item');
  
  if (e.key === 'Enter') {
    e.preventDefault();
    const activeItem = fuzzyDropdown.querySelector('.fuzzy-item.active');
    if (activeItem) {
      activeItem.click();
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    const activeItem = fuzzyDropdown.querySelector('.fuzzy-item.active');
    if (!activeItem && items.length > 0) {
      items[0].classList.add('active');
    } else if (activeItem) {
      const nextItem = activeItem.nextElementSibling;
      if (nextItem && nextItem.classList.contains('fuzzy-item')) {
        activeItem.classList.remove('active');
        nextItem.classList.add('active');
        nextItem.scrollIntoView({ block: 'nearest' });
      }
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const activeItem = fuzzyDropdown.querySelector('.fuzzy-item.active');
    if (activeItem) {
      const prevItem = activeItem.previousElementSibling;
      if (prevItem && prevItem.classList.contains('fuzzy-item')) {
        activeItem.classList.remove('active');
        prevItem.classList.add('active');
        prevItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }
}

function renderFuzzyDropdown(results, query) {
  const html = results.map((item, idx) => {
    const pnHighlight = highlightMatch(item.pn, query);
    const partName = item.names[0]?.name || item.groups[0] || '';
    return `
      <div class="fuzzy-item" data-pn="${item.pn}" onclick="selectPart('${item.pn}')">
        <span class="fuzzy-pn">${pnHighlight}</span>
        <span class="fuzzy-name">${partName}</span>
      </div>
    `;
  }).join('');

  fuzzyDropdown.innerHTML = html;
  fuzzyDropdown.classList.add('show');
  searchInfo.innerHTML = `${results.length} kết quả`;
}

function highlightMatch(text, query) {
  const q = query.toLowerCase();
  const idx = text.toLowerCase().indexOf(q);
  
  if (idx === -1) return text;
  
  return text.substring(0, idx) +
    `<mark>${text.substring(idx, idx + q.length)}</mark>` +
    text.substring(idx + q.length);
}

function selectPart(pn) {
  const part = currentData.find(p => p.pn === pn);
  if (part) {
    searchInput.value = part.pn;
    fuzzyDropdown.classList.remove('show');
    showThinking(part.pn, [part]);
  }
}

function renderResults(results) {
  if (!results || results.length === 0) {
    renderNoResults('Không tìm thấy phụ tùng');
    searchInfo.innerHTML = '';
    return;
  }

  resultsContainer.innerHTML = results.map(part => {
    const firstName = part.names[0];
    const groups = part.groups.join(' > ');
    const subgroups = part.subgroups.join(', ');
    
    const translations = [
      { vn: firstName?.vn1, score: firstName?.s1, note: firstName?.n1, source: 'Reviewed' },
      { vn: firstName?.vn2, score: firstName?.s2, note: firstName?.n2, source: 'Gemini' },
      { vn: firstName?.vn3, score: firstName?.s3, note: firstName?.n3, source: 'Ollama' },
    ].filter(t => t.vn); // Only show translations that exist

    return `
      <div class="result-card">
        <div class="part-header">
          <span class="part-number">${part.pn}</span>
        </div>
        
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #f0f0f0;">
          <div style="font-size: 13px; color: #5f6368; margin-bottom: 8px;">
            <strong>📂 Category:</strong> ${groups}
          </div>
          <div style="font-size: 13px; color: #5f6368;">
            <strong>📌 Parts:</strong> ${subgroups}
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <div style="font-size: 13px; color: #5f6368; margin-bottom: 8px;">
            <strong>🌐 English:</strong> <em>${firstName?.name}</em>
          </div>
          <div style="font-size: 13px; color: #5f6368;">
            <strong>📋 Category:</strong> ${firstName?.grpVn}
          </div>
        </div>

        <div style="background: #f8faff; border-radius: 12px; padding: 16px; border: 1px solid #e1e8f5; margin-bottom: 16px;">
          <div style="font-size: 12px; font-weight: 700; color: #1a73e8; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px;">
            🤖 AI Translation Options
          </div>
          
          <div style="display: grid; gap: 12px;">
            ${translations.map(t => `
              <div style="background: #fff; padding: 12px; border-radius: 8px; border-left: 3px solid ${getScoreColor(t.score)};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                  <span style="font-size: 12px; font-weight: 600; color: #1a73e8;">${t.source}</span>
                  <span style="font-size: 11px; background: ${getScoreBg(t.score)}; color: ${getScoreText(t.score)}; padding: 2px 8px; border-radius: 12px; font-weight: 700;">
                    Score: ${(parseFloat(t.score) * 100).toFixed(0)}%
                  </span>
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #1a202c; margin-bottom: 4px;">${t.vn}</div>
                <div style="font-size: 11px; color: #70757a;">💡 ${t.note}</div>
              </div>
            `).join('')}
          </div>
        </div>

        ${firstName?.vn4 ? `
          <div style="background: #fff9e6; border-radius: 8px; padding: 12px; border: 1px solid #f0d787; margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 700; color: #9c6c00; margin-bottom: 4px;">📚 Legacy Translation</div>
            <div style="font-size: 13px; color: #1a202c;">${firstName?.vn4}</div>
          </div>
        ` : ''}

        <div class="part-meta">
          <span class="meta-badge">Series: ${part.series.join(', ')}</span>
          <span class="meta-badge">Models: ${part.models.join(', ')}</span>
        </div>

        ${part.note ? `
          <div style="margin-top: 12px; font-size: 12px; color: #5f6368; padding: 8px; background: #f1f3f4; border-radius: 6px;">
            <strong>📝 Note:</strong> ${part.note}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  noResults.style.display = 'none';
  searchInfo.innerHTML = `${results.length} kết quả`;
}

function getScoreColor(score) {
  const s = parseFloat(score);
  if (s >= 0.95) return '#10b981';
  if (s >= 0.85) return '#3b82f6';
  if (s >= 0.75) return '#f59e0b';
  return '#ef4444';
}

function getScoreBg(score) {
  const s = parseFloat(score);
  if (s >= 0.95) return '#d1fae5';
  if (s >= 0.85) return '#dbeafe';
  if (s >= 0.75) return '#fef3c7';
  return '#fee2e2';
}

function getScoreText(score) {
  const s = parseFloat(score);
  if (s >= 0.95) return '#065f46';
  if (s >= 0.85) return '#1e40af';
  if (s >= 0.75) return '#92400e';
  return '#7f1d1d';
}

function renderNoResults(message) {
  resultsContainer.innerHTML = `<div class="empty-result"><p>${message}</p></div>`;
  noResults.style.display = 'none';
}

function searchByName() {
  const query = searchInput.value.trim();
  if (!query) {
    searchInput.focus();
    return;
  }

  const results = fuzzySearch(query, 50);
  fuzzyDropdown.classList.remove('show');
  showThinking(query, results);
}

function clearSearch() {
  searchInput.value = '';
  searchInput.focus();
  resultsContainer.innerHTML = '';
  noResults.style.display = 'block';
  fuzzyDropdown.classList.remove('show');
  searchInfo.innerHTML = '';
  thinkingContainer.style.display = 'none';
}

function closeFuzzyDropdown(e) {
  if (!e.target.closest('.search-container')) {
    fuzzyDropdown.classList.remove('show');
  }
}
