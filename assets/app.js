(() => {
  "use strict";
  const content = window.RESEARCH_CONTENT;
  if (!content) return;
  const $ = (id) => document.getElementById(id);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
  const methodLabels = { primary:"Primary data", dataset:"Data / computational", replication:"Replication" };
  const filters = { search:"", area:"all", method:"all" };
  const grid = $("topic-grid");
  const dialog = $("topic-dialog");
  const topicById = Object.fromEntries(content.topics.map(topic => [topic.id, topic]));

  function tags(topic) { return topic.approaches.map(method => `<span class="topic-tag ${escapeHTML(method)}">${methodLabels[method]}</span>`).join(""); }

  function renderTopics() {
    const query = filters.search.toLocaleLowerCase().trim();
    const topics = content.topics.filter(topic => {
      if (filters.area !== "all" && topic.area !== filters.area) return false;
      if (filters.method !== "all" && !topic.approaches.includes(filters.method)) return false;
      const searchable = [topic.id,topic.title,topic.question,content.areas[topic.area],topic.context,topic.approach,topic.data,topic.contribution,...topic.reading.map(item=>item[0]),...topic.approaches].join(" ").toLocaleLowerCase();
      return !query || searchable.includes(query);
    });
    grid.innerHTML = topics.map(topic => `
      <article class="topic-card" id="card-${topic.id}">
        <div class="topic-meta"><span class="topic-id">${topic.id} / RESEARCH TOPIC</span><span class="topic-area-name">${escapeHTML(content.areas[topic.area])}</span></div>
        <h3>${escapeHTML(topic.title)}</h3>
        <p class="topic-question">${escapeHTML(topic.question)}</p>
        <div class="tag-list">${tags(topic)}</div>
        <div class="topic-bottom"><span class="pathway">${escapeHTML(topic.route)}</span><button class="open-brief" type="button" data-topic="${topic.id}" aria-label="Read research brief for ${escapeHTML(topic.title)}">Read brief ↗</button></div>
      </article>`).join("");
    $("results-label").textContent = `Showing ${topics.length} of ${content.topics.length} research topics`;
    $("no-results").hidden = topics.length > 0;
  }

  function updateTopicUrl(id) {
    const url = new URL(window.location.href);
    if (id) url.searchParams.set("topic",id);
    else url.searchParams.delete("topic");
    window.history.replaceState(null, "", url.toString());
  }

  function openTopic(id, updateUrl = true) {
    const topic = topicById[id];
    if (!topic) return;
    $("dialog-code").textContent = `${topic.id} / RESEARCH BRIEF`;
    $("dialog-area").textContent = content.areas[topic.area];
    $("dialog-content").innerHTML = `
      <h2 id="dialog-title">${escapeHTML(topic.title)}</h2>
      <p class="dialog-lede">${escapeHTML(topic.question)}</p>
      <div class="dialog-meta">${tags(topic)}</div>
      <section class="dialog-section"><h3>Why this question matters</h3><p>${escapeHTML(topic.context)}</p></section>
      <section class="dialog-section"><h3>Possible research direction</h3><p>${escapeHTML(topic.approach)}</p></section>
      <section class="dialog-section"><h3>Data and practical considerations</h3><p>${escapeHTML(topic.data)}</p></section>
      <section class="dialog-section"><h3>What the research could contribute</h3><p>${escapeHTML(topic.contribution)}</p></section>
      <section class="dialog-section dialog-sources"><h3>Suggested starting points</h3>
        ${topic.reading.map(([label,url])=>`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`).join("")}
        <p>These papers are a starting point, not a complete reading list. You are expected to find and evaluate further research.</p>
      </section>
      ${topic.resources.length ? `<section class="dialog-section dialog-sources"><h3>Datasets and useful resources</h3>${topic.resources.map(([label,url])=>`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`).join("")}</section>` : ""}
      <div class="dialog-warning">These are starting ideas. You will need to identify a research gap, justify your approach and develop a feasible concept note. Participant studies require the relevant ethics approval before data collection.</div>
      <div class="dialog-bottom"><button class="copy-topic" type="button" id="share-topic">Copy link to this topic ↗</button><span id="topic-copy-status" class="copy-status" aria-live="polite"></span></div>`;
    if (!dialog.open) dialog.showModal();
    if (updateUrl) updateTopicUrl(id);
    $("share-topic").addEventListener("click", async () => {
      const url = new URL(window.location.href); url.searchParams.set("topic",id);
      const ok = await copyText(url.toString());
      $("topic-copy-status").textContent = ok ? "Link copied" : "Copy the URL from your browser";
    });
  }

  async function copyText(value) {
    try {
      if (!navigator.clipboard?.writeText) return fallbackCopy(value);
      await navigator.clipboard.writeText(value);
      return true;
    } catch (_) { return fallbackCopy(value); }
  }

  function fallbackCopy(value) {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.left = "-10000px";
    document.body.appendChild(textarea);
    textarea.select();
    let success = false;
    try { success = document.execCommand("copy"); } catch (_) { /* Some browsers disable fallback copying. */ }
    textarea.remove();
    return success;
  }

  function clearFilters() {
    filters.search="";filters.area="all";filters.method="all";
    $("search-topics").value="";
    $("filter-area").value="all";
    $("filter-method").value="all";
    renderTopics();
  }

  $("search-topics").addEventListener("input", e => {filters.search=e.target.value;renderTopics();});
  [["filter-area","area"],["filter-method","method"]].forEach(([id,key]) => {
    $(id).addEventListener("change",e=>{filters[key]=e.target.value;renderTopics();});
  });
  $("clear-filters").addEventListener("click",clearFilters);
  $("empty-reset").addEventListener("click",clearFilters);
  $("areas-grid").addEventListener("click", e => {
    const areaCard=e.target.closest("[data-area]");
    if(!areaCard) return;
    clearFilters();
    filters.area=areaCard.dataset.area;
    $("filter-area").value=filters.area;
    renderTopics();
    $("topics").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
  });
  grid.addEventListener("click", e => {
    const button=e.target.closest("[data-topic]");
    if(button) openTopic(button.dataset.topic);
  });
  $("dialog-close").addEventListener("click",()=>dialog.close());
  dialog.addEventListener("click", e=> {if(e.target===dialog)dialog.close();});
  dialog.addEventListener("close", () => updateTopicUrl(null));
  window.addEventListener("popstate", () => {
    const id=new URL(window.location.href).searchParams.get("topic");
    if(id && topicById[id])openTopic(id,false);
    else if(dialog.open)dialog.close();
  });

  $("menu-toggle").addEventListener("click", () => {
    const open = $("site-nav").classList.toggle("open");
    $("menu-toggle").setAttribute("aria-expanded",String(open));
    $("menu-toggle").setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  $("site-nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    $("site-nav").classList.remove("open");
    $("menu-toggle").setAttribute("aria-expanded","false");
    $("menu-toggle").setAttribute("aria-label","Open navigation");
  }));

  // Students can paste the copied template into an email or Teams message.
  // No email client is opened automatically and no data is collected by this site.
  const ENQUIRY_SUBJECT = "Prospective postgraduate research – [topic title]";
  const ENQUIRY_BODY = `Dear Ebrahim,

I am interested in discussing a potential postgraduate research topic.

Topic / topic ID: [title and ID, or proposed topic]

ONE-PAGE CONCEPT NOTE
Working title: [title]
Research problem: [describe the problem and why it matters]
Research question and objectives: [one focused question and 1–2 objectives]
Proposed method and data: [primary data / published dataset / replication]
Feasibility and potential contribution: [what can realistically be investigated?]

PERSONAL MOTIVATION (maximum 250 words)
[Explain your interest in this topic, relevant skills or experience, what you want to learn, and why it suits you.]

Kind regards,
[Your name]`;
  const enquiryTemplate = `Subject: ${ENQUIRY_SUBJECT}\n\n${ENQUIRY_BODY}`;
  $("copy-enquiry").addEventListener("click", async () => {
    const ok = await copyText(enquiryTemplate);
    $("copy-status").textContent = ok ? "Template copied" : "Copy unavailable in this browser";
  });
  // Always scroll to the true document top, unaffected by sticky-header anchor offsets.
  document.querySelectorAll("[data-back-to-top]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, left: 0, behavior: reduced ? "instant" : "smooth" });
      if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
    });
  });

  $("year").textContent=new Date().getFullYear().toString();
  renderTopics();
  const initialId=new URL(window.location.href).searchParams.get("topic");
  if(initialId && topicById[initialId])openTopic(initialId,false);
})();

// Light/dark control; default dark, remember preference when storage is available.
(() => {
  const html = document.documentElement;
  const control = document.getElementById('theme-toggle');
  const label = control?.querySelector('.theme-label');
  if (!control) return;
  function sync() {
    const isDark = html.dataset.theme !== 'light';
    if (label) label.textContent = isDark ? 'Dark' : 'Light';
    control.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    control.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#090c12' : '#fafbfc');
  }
  control.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    try { localStorage.setItem('research-theme', next); } catch (_) { /* preference cannot be persisted */ }
    sync();
  });
  sync();
})();
