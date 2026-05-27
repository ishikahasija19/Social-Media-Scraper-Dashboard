const posts = [
  {
    id: 1,
    platform: "Twitter/X",
    creator: "@passporthelpdesk",
    region: "India",
    language: "English",
    category: "Appointments",
    sentiment: "Neutral",
    engagement: 1840,
    minutesAgo: 22,
    title: "Users report fresh appointment slots for Delhi passport seva kendras",
    content: "Fresh appointment slots opened for Delhi PSKs after several users refreshed the portal this morning. People are advising applicants to keep documents ready before booking.",
    summary: "Delhi users say new passport appointment slots opened today, with applicants advising others to keep documents ready and act quickly before slots disappear.",
    cluster: "Delhi appointment availability",
    duplicates: 18,
    spam: false,
    source: "https://x.com/search?q=passport%20appointment",
  },
  {
    id: 2,
    platform: "Reddit",
    creator: "u/travelpapertrail",
    region: "United States",
    language: "English",
    category: "Renewal",
    sentiment: "Negative",
    engagement: 633,
    minutesAgo: 64,
    title: "Expedited passport renewal still has no tracking update",
    content: "My expedited passport renewal was delivered last week but the tracker still says not available. Need it before a June visa appointment and getting nervous.",
    summary: "A traveler is worried because an expedited passport renewal has not appeared in tracking, and a visa appointment is approaching soon.",
    cluster: "US renewal tracking delays",
    duplicates: 12,
    spam: false,
    source: "https://www.reddit.com/search/?q=passport%20renewal",
  },
  {
    id: 3,
    platform: "YouTube",
    creator: "VisaLine Updates",
    region: "India",
    language: "Hindi",
    category: "Tatkal",
    sentiment: "Positive",
    engagement: 9480,
    minutesAgo: 136,
    title: "Tatkal passport ke liye document checklist explained",
    content: "Video explains which address proof, police verification details, and identity documents are commonly needed for Tatkal passport applications.",
    summary: "A Hindi explainer video walks applicants through Tatkal passport documents, address proof, police verification expectations, and identity requirements.",
    cluster: "Tatkal document checklist",
    duplicates: 25,
    spam: false,
    source: "https://www.youtube.com/results?search_query=tatkal+passport",
  },
  {
    id: 4,
    platform: "Facebook",
    creator: "Punjab Travel Forum",
    region: "India",
    language: "Punjabi",
    category: "Personal Experiences",
    sentiment: "Neutral",
    engagement: 420,
    minutesAgo: 204,
    title: "Jalandhar passport office crowd update",
    content: "Community members say the Jalandhar passport office queue moved faster after lunch, but applicants should carry original Aadhaar and old passport copies.",
    summary: "Forum members report faster afternoon queues at Jalandhar passport office and remind applicants to bring Aadhaar and old passport copies.",
    cluster: "Punjab PSK crowd updates",
    duplicates: 7,
    spam: false,
    source: "https://www.facebook.com/search/posts?q=passport",
  },
  {
    id: 5,
    platform: "Instagram",
    creator: "@studyabroaddesk",
    region: "Canada",
    language: "English",
    category: "Visa",
    sentiment: "Negative",
    engagement: 3120,
    minutesAgo: 255,
    title: "Students warned to renew passports before visa filing",
    content: "Advisors are warning students that passports expiring within six months may complicate fall visa filing, especially for Canada and Schengen travel.",
    summary: "Study abroad advisors warn that passports expiring within six months may disrupt student visa filings for Canada and Schengen destinations.",
    cluster: "Student visa passport validity",
    duplicates: 21,
    spam: false,
    source: "https://www.instagram.com/explore/tags/passport/",
  },
  {
    id: 6,
    platform: "LinkedIn",
    creator: "Global Mobility Network",
    region: "United Kingdom",
    language: "English",
    category: "Government Announcements",
    sentiment: "Positive",
    engagement: 1175,
    minutesAgo: 332,
    title: "UK passport office publishes summer travel readiness notice",
    content: "A mobility update says travelers should check passport validity early and avoid last-minute renewals before peak summer travel demand.",
    summary: "A mobility notice urges UK travelers to check passport validity early and avoid last-minute renewals ahead of summer demand.",
    cluster: "Summer travel readiness notices",
    duplicates: 14,
    spam: false,
    source: "https://www.linkedin.com/search/results/content/?keywords=passport",
  },
  {
    id: 7,
    platform: "TikTok",
    creator: "@airportstories",
    region: "United Arab Emirates",
    language: "Arabic",
    category: "Travel Issues",
    sentiment: "Negative",
    engagement: 22100,
    minutesAgo: 411,
    title: "Traveler denied boarding over passport validity rule",
    content: "A short video describes a traveler being denied boarding because the passport had less than six months validity for the destination.",
    summary: "A viral travel clip says a passenger was denied boarding because the destination required six months of remaining passport validity.",
    cluster: "Six-month validity boarding issues",
    duplicates: 33,
    spam: false,
    source: "https://www.tiktok.com/search?q=passport%20validity",
  },
  {
    id: 8,
    platform: "Twitter/X",
    creator: "@cybersafetywatch",
    region: "Global",
    language: "English",
    category: "Scams/Fraud",
    sentiment: "Negative",
    engagement: 3880,
    minutesAgo: 498,
    title: "Fake passport appointment agents circulating payment links",
    content: "Users are reporting scam accounts that promise passport appointment slots and ask for advance payment through suspicious links.",
    summary: "Cyber safety users warn that fake agents are selling passport appointment slots through suspicious advance-payment links.",
    cluster: "Fake appointment agent scam",
    duplicates: 29,
    spam: false,
    source: "https://x.com/search?q=fake%20passport%20appointment",
  },
  {
    id: 9,
    platform: "Reddit",
    creator: "u/nomadqueue",
    region: "Germany",
    language: "German",
    category: "Application",
    sentiment: "Neutral",
    engagement: 280,
    minutesAgo: 548,
    title: "Question about child passport application documents",
    content: "Parent asks whether both guardians must be present for a child passport appointment and which translated birth certificate copies are accepted.",
    summary: "A parent asks about child passport application rules, guardian presence, and accepted translated birth certificate copies.",
    cluster: "Child passport documents",
    duplicates: 6,
    spam: false,
    source: "https://www.reddit.com/search/?q=child%20passport",
  },
  {
    id: 10,
    platform: "Facebook",
    creator: "Local News Desk",
    region: "France",
    language: "French",
    category: "News",
    sentiment: "Neutral",
    engagement: 1540,
    minutesAgo: 705,
    title: "Municipal passport appointment backlog covered by local outlet",
    content: "A local report says several municipal counters are adding temporary staff to reduce passport appointment backlogs before school holidays.",
    summary: "A French local news post says municipal counters are adding temporary staff to reduce passport appointment backlogs before school holidays.",
    cluster: "Municipal backlog staffing",
    duplicates: 11,
    spam: false,
    source: "https://www.facebook.com/search/posts?q=passeport",
  },
  {
    id: 11,
    platform: "Instagram",
    creator: "@random_cash_948",
    region: "Global",
    language: "English",
    category: "Spam",
    sentiment: "Neutral",
    engagement: 12,
    minutesAgo: 815,
    title: "Passport cash win now",
    content: "passport passport free money qqqxzz apply now link bio 999 winner winner",
    summary: "",
    cluster: "Spam removed",
    duplicates: 1,
    spam: true,
    source: "#",
  },
  {
    id: 12,
    platform: "TikTok",
    creator: "@bot_travel_fast",
    region: "Global",
    language: "English",
    category: "Spam",
    sentiment: "Neutral",
    engagement: 4,
    minutesAgo: 920,
    title: "Fast passport magic",
    content: "aaa passport vvvv instant 100 percent no docs no verify no verify no verify",
    summary: "",
    cluster: "Spam removed",
    duplicates: 1,
    spam: true,
    source: "#",
  },
];

const translationSamples = {
  English: "English translation: ",
  Hindi: "Hindi translation: ",
  Punjabi: "Punjabi translation: ",
  Spanish: "Spanish translation: ",
  French: "French translation: ",
  German: "German translation: ",
  Arabic: "Arabic translation: ",
  Chinese: "Chinese translation: ",
  Russian: "Russian translation: ",
  Japanese: "Japanese translation: ",
};

const state = {
  search: "",
  platform: "All",
  region: "All",
  language: "All",
  category: "All",
  sentiment: "All",
  sort: "time",
  translateTo: "English",
};

const selectors = {
  searchInput: document.querySelector("#searchInput"),
  platformFilter: document.querySelector("#platformFilter"),
  regionFilter: document.querySelector("#regionFilter"),
  languageFilter: document.querySelector("#languageFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  sentimentFilter: document.querySelector("#sentimentFilter"),
  sortSelect: document.querySelector("#sortSelect"),
  globalLanguage: document.querySelector("#globalLanguage"),
  postGrid: document.querySelector("#postGrid"),
  template: document.querySelector("#postCardTemplate"),
  resultCount: document.querySelector("#resultCount"),
  updatedAt: document.querySelector("#updatedAt"),
  metricPosts: document.querySelector("#metricPosts"),
  metricClusters: document.querySelector("#metricClusters"),
  metricEngagement: document.querySelector("#metricEngagement"),
  metricSpam: document.querySelector("#metricSpam"),
};

function uniqueValues(key) {
  return ["All", ...new Set(posts.filter((post) => !post.spam).map((post) => post[key]))].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return a.localeCompare(b);
  });
}

function populateSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function setupFilters() {
  populateSelect(selectors.platformFilter, uniqueValues("platform"));
  populateSelect(selectors.regionFilter, uniqueValues("region"));
  populateSelect(selectors.languageFilter, uniqueValues("language"));
  populateSelect(selectors.categoryFilter, uniqueValues("category"));
  populateSelect(selectors.sentimentFilter, uniqueValues("sentiment"));

  selectors.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });

  [
    ["platformFilter", "platform"],
    ["regionFilter", "region"],
    ["languageFilter", "language"],
    ["categoryFilter", "category"],
    ["sentimentFilter", "sentiment"],
  ].forEach(([selectorKey, stateKey]) => {
    selectors[selectorKey].addEventListener("change", (event) => {
      state[stateKey] = event.target.value;
      render();
    });
  });

  selectors.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });

  selectors.globalLanguage.addEventListener("change", (event) => {
    state.translateTo = event.target.value;
    document.querySelectorAll(".post-card").forEach((card) => {
      const id = Number(card.dataset.postId);
      const post = posts.find((item) => item.id === id);
      const translated = card.querySelector(".translated");
      translated.textContent = buildTranslation(post);
    });
  });

  document.querySelector("#resetFilters").addEventListener("click", resetFilters);
  document.querySelector("#refreshButton").addEventListener("click", simulateRefresh);
  document.querySelector("#exportCsv").addEventListener("click", exportCsv);
  document.querySelector("#exportPdf").addEventListener("click", exportPdf);
}

function resetFilters() {
  Object.assign(state, {
    search: "",
    platform: "All",
    region: "All",
    language: "All",
    category: "All",
    sentiment: "All",
    sort: "time",
  });

  selectors.searchInput.value = "";
  selectors.platformFilter.value = "All";
  selectors.regionFilter.value = "All";
  selectors.languageFilter.value = "All";
  selectors.categoryFilter.value = "All";
  selectors.sentimentFilter.value = "All";
  selectors.sortSelect.value = "time";
  render();
}

function meaningfulPosts() {
  return posts.filter((post) => !post.spam);
}

function filteredPosts() {
  const filtered = meaningfulPosts().filter((post) => {
    const translatedNeedle = `${translationSamples[state.translateTo]}${post.summary}`.toLowerCase();
    const haystack = [post.title, post.content, post.summary, post.creator, post.region, translatedNeedle].join(" ").toLowerCase();
    return (
      (!state.search || haystack.includes(state.search)) &&
      (state.platform === "All" || post.platform === state.platform) &&
      (state.region === "All" || post.region === state.region) &&
      (state.language === "All" || post.language === state.language) &&
      (state.category === "All" || post.category === state.category) &&
      (state.sentiment === "All" || post.sentiment === state.sentiment)
    );
  });

  return filtered.sort((a, b) => {
    if (state.sort === "engagement") return b.engagement - a.engagement;
    if (state.sort === "cluster") return b.duplicates - a.duplicates;
    if (state.sort === "sentiment") return sentimentWeight(b.sentiment) - sentimentWeight(a.sentiment);
    return a.minutesAgo - b.minutesAgo;
  });
}

function sentimentWeight(sentiment) {
  return { Negative: 3, Positive: 2, Neutral: 1 }[sentiment] ?? 0;
}

function aggregateBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function renderMetrics(items) {
  const spamCount = posts.filter((post) => post.spam).length;
  const clusters = new Set(items.map((post) => post.cluster)).size;
  const engagement = items.reduce((total, post) => total + post.engagement, 0);

  selectors.metricPosts.textContent = items.length;
  selectors.metricClusters.textContent = clusters;
  selectors.metricEngagement.textContent = Intl.NumberFormat("en", { notation: "compact" }).format(engagement);
  selectors.metricSpam.textContent = spamCount;
  selectors.resultCount.textContent = `Showing ${items.length} topics`;
  selectors.updatedAt.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function renderCharts(items) {
  const categoryData = aggregateBy(items, "category");
  const platformData = aggregateBy(items, "platform");
  drawDonutChart(document.querySelector("#categoryChart"), categoryData);
  drawBarChart(document.querySelector("#platformChart"), platformData);
}

function drawDonutChart(canvas, data) {
  const ctx = canvas.getContext("2d");
  const labels = Object.keys(data);
  const values = Object.values(data);
  const total = values.reduce((sum, value) => sum + value, 0) || 1;
  const colors = ["#0f766e", "#355e9f", "#b94700", "#157f3b", "#9a6700", "#7c3aed", "#be123c"];
  const { width, height } = fitCanvas(canvas);
  const radius = Math.min(width, height) * 0.28;
  const centerX = width * 0.32;
  const centerY = height * 0.48;
  let start = -Math.PI / 2;

  ctx.clearRect(0, 0, width, height);
  values.forEach((value, index) => {
    const angle = (value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start, start + angle);
    ctx.closePath();
    ctx.fillStyle = colors[index % colors.length];
    ctx.fill();
    start += angle;
  });

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.58, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";

  labels.forEach((label, index) => {
    const x = width * 0.62;
    const y = 24 + index * 18;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(x, y - 9, 10, 10);
    ctx.fillStyle = "#35413d";
    ctx.font = "12px Segoe UI, sans-serif";
    ctx.fillText(`${label} (${data[label]})`, x + 16, y);
  });
}

function drawBarChart(canvas, data) {
  const ctx = canvas.getContext("2d");
  const labels = Object.keys(data);
  const values = Object.values(data);
  const max = Math.max(...values, 1);
  const { width, height } = fitCanvas(canvas);
  const chartLeft = 24;
  const chartBottom = height - 34;
  const barGap = 10;
  const barWidth = Math.max(14, (width - chartLeft - 20 - barGap * labels.length) / Math.max(labels.length, 1));

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#dfe5dd";
  ctx.beginPath();
  ctx.moveTo(chartLeft, 14);
  ctx.lineTo(chartLeft, chartBottom);
  ctx.lineTo(width - 12, chartBottom);
  ctx.stroke();

  labels.forEach((label, index) => {
    const barHeight = (values[index] / max) * (chartBottom - 28);
    const x = chartLeft + 12 + index * (barWidth + barGap);
    const y = chartBottom - barHeight;
    ctx.fillStyle = platformColor(label);
    roundRect(ctx, x, y, barWidth, barHeight, 5);
    ctx.fill();
    ctx.fillStyle = "#35413d";
    ctx.font = "11px Segoe UI, sans-serif";
    ctx.save();
    ctx.translate(x + barWidth / 2, chartBottom + 8);
    ctx.rotate(-0.35);
    ctx.textAlign = "right";
    ctx.fillText(label, 0, 0);
    ctx.restore();
  });
}

function fitCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(320, Math.floor(rect.width || canvas.clientWidth || 420));
  const height = Math.max(130, Math.floor(rect.height || canvas.clientHeight || 130));
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { width, height };
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function buildTranslation(post) {
  return `${translationSamples[state.translateTo]}${post.summary}`;
}

function platformColor(platform) {
  return {
    "Twitter/X": "#111827",
    Reddit: "#d94100",
    YouTube: "#c21717",
    Facebook: "#1d5fbf",
    Instagram: "#b93676",
    LinkedIn: "#0a66c2",
    TikTok: "#17211f",
  }[platform] || "#355e9f";
}

function renderPosts(items) {
  selectors.postGrid.innerHTML = "";

  if (!items.length) {
    selectors.postGrid.innerHTML = `<div class="empty-state"><h3>No posts match these filters</h3><p>Try broadening the platform, language, or keyword filters.</p></div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((post) => {
    const card = selectors.template.content.firstElementChild.cloneNode(true);
    card.dataset.postId = post.id;

    const badge = card.querySelector(".platform-badge");
    badge.textContent = post.platform;
    badge.style.background = platformColor(post.platform);

    card.querySelector("time").textContent = `${post.minutesAgo}m ago`;
    card.querySelector(".creator-row strong").textContent = post.creator;
    card.querySelector(".creator-row span").textContent = `${post.region} · ${post.language}`;
    card.querySelector("h4").textContent = post.title;
    card.querySelector(".summary").textContent = post.summary;

    const translated = card.querySelector(".translated");
    translated.textContent = buildTranslation(post);

    const meta = card.querySelector(".meta-row");
    meta.innerHTML = [
      `<span class="tag">${post.category}</span>`,
      `<span class="tag ${post.sentiment.toLowerCase()}">${post.sentiment}</span>`,
      `<span class="tag">${Intl.NumberFormat("en", { notation: "compact" }).format(post.engagement)} engagements</span>`,
    ].join("");

    card.querySelector(".cluster-row").innerHTML = `<i data-lucide="git-merge"></i><span>${post.duplicates} related posts grouped in "${post.cluster}"</span>`;

    card.querySelector(".translate-button").addEventListener("click", () => {
      translated.classList.toggle("hidden");
    });

    card.querySelector(".source-button").addEventListener("click", () => {
      window.open(post.source, "_blank", "noopener,noreferrer");
    });

    fragment.appendChild(card);
  });

  selectors.postGrid.appendChild(fragment);
  decorateIcons();
}

function render() {
  const items = filteredPosts();
  renderMetrics(items);
  renderCharts(items);
  renderPosts(items);
}

function simulateRefresh() {
  const button = document.querySelector("#refreshButton");
  const status = document.querySelector("#pipelineStatus");
  button.disabled = true;
  status.innerHTML = `<i data-lucide="loader"></i> Scraping feeds`;
  decorateIcons();

  setTimeout(() => {
    button.disabled = false;
    status.innerHTML = `<i data-lucide="sparkles"></i> NLP processed`;
    posts.forEach((post) => {
      if (!post.spam) post.minutesAgo += 2;
    });
    render();
  }, 850);
}

function exportRows() {
  return filteredPosts().map((post) => ({
    platform: post.platform,
    region: post.region,
    creator: post.creator,
    language: post.language,
    category: post.category,
    sentiment: post.sentiment,
    engagement: post.engagement,
    minutesAgo: post.minutesAgo,
    title: post.title,
    summary: post.summary,
    translation: buildTranslation(post),
    cluster: post.cluster,
    duplicates: post.duplicates,
  }));
}

function exportCsv() {
  const rows = exportRows();
  const headers = Object.keys(rows[0] || { platform: "", title: "", summary: "" });
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => `"${String(row[header]).replaceAll('"', '""')}"`).join(",")),
  ].join("\n");

  downloadBlob(csv, "passport-social-posts.csv", "text/csv;charset=utf-8");
}

function exportPdf() {
  const rows = exportRows();
  const lines = [
    "Passport Social Intelligence Export",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    ...rows.flatMap((row, index) => [
      `${index + 1}. [${row.platform}] ${row.title}`,
      `${row.category} | ${row.sentiment} | ${row.region} | ${row.creator}`,
      row.summary,
      "",
    ]),
  ];

  downloadBlob(buildPdf(lines), "passport-social-posts.pdf", "application/pdf");
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

setupFilters();
render();
decorateIcons();

function decorateIcons() {
  const iconMap = {
    "sliders-horizontal": "≡",
    search: "⌕",
    "rotate-ccw": "↻",
    languages: "文",
    "refresh-cw": "↻",
    "file-spreadsheet": "▦",
    "file-text": "▤",
    sparkles: "✦",
    loader: "…",
    "git-merge": "⎇",
    "external-link": "↗",
  };

  document.querySelectorAll("i[data-lucide]").forEach((icon) => {
    icon.textContent = iconMap[icon.dataset.lucide] || "";
    icon.setAttribute("aria-hidden", "true");
  });
}

function buildPdf(lines) {
  const objects = [];
  const pageObjects = [];
  const escapedLines = lines.map((line) => String(line).replace(/[\\()]/g, "\\$&"));
  const pages = [];
  const linesPerPage = 44;

  for (let index = 0; index < escapedLines.length; index += linesPerPage) {
    pages.push(escapedLines.slice(index, index + linesPerPage));
  }

  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("PAGES_PLACEHOLDER");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  pages.forEach((pageLines) => {
    const content = ["BT", "/F1 10 Tf", "50 790 Td"];
    pageLines.forEach((line, lineIndex) => {
      if (lineIndex) content.push("0 -16 Td");
      content.push(`(${line.slice(0, 110)}) Tj`);
    });
    content.push("ET");
    const stream = content.join("\n");
    const contentObjectNumber = objects.length + 1;
    objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    const pageObjectNumber = objects.length + 1;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`);
    pageObjects.push(pageObjectNumber);
  });

  objects[1] = `<< /Type /Pages /Kids [${pageObjects.map((objectNumber) => `${objectNumber} 0 R`).join(" ")}] /Count ${pageObjects.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

  return pdf;
}
