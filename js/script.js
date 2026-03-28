/* ============================================================
   RipNotice.lk — Main Script  (Fixed)
   ============================================================ */

/* ── DATA ── */
const obituaries = [
    { id:1,  name:"Mrs Vijayalatha Vijayaratnam",    birth:"1952", death:"2026", location:"Mullaitivu, Sri Lanka<br>Batticaloa, Canada",          tributes:15, avatar:"https://i.pravatar.cc/150?img=1",  time:"13 hours ago", country:"Sri Lanka",     district:"Mullaitivu",   postType:"Obituary",             religion:"Hinduism",     age:74, biography:"A beloved mother and grandmother who touched the lives of everyone she met. She was known for her kindness, wisdom, and unwavering faith." },
    { id:2,  name:"Mrs Kannatammal Ponnusamy",       birth:"1939", death:"2026", location:"Manipay East, Sri Lanka<br>Jaffna, Sri Lanka",          tributes:5,  avatar:"https://i.pravatar.cc/150?img=5",  time:"1 day ago",    country:"Sri Lanka",     district:"Jaffna",       postType:"Obituary",             religion:"Hinduism",     age:87, biography:"A respected community leader who dedicated her life to helping others. Her legacy of compassion will live on forever." },
    { id:3,  name:"Mr Subramaniam Ramasamy",         birth:"1939", death:"2026", location:"Kondavil South, Sri Lanka<br>Jaffna, Canada",           tributes:5,  avatar:"https://i.pravatar.cc/150?img=13", time:"1 day ago",    country:"Canada",        district:"Jaffna",       postType:"1st Year Remembrance", religion:"Hinduism",     age:87, biography:"An accomplished educator and devoted family man. He inspired countless students with his dedication to learning." },
    { id:4,  name:"Mr Rajakulendran Arulananthar",   birth:"1952", death:"2026", location:"Jaffna, Sri Lanka",                                    tributes:4,  avatar:"https://i.pravatar.cc/150?img=12", time:"3 days ago",   country:"Sri Lanka",     district:"Jaffna",       postType:"Obituary",             religion:"Christianity", age:74, biography:"A successful businessman who built his legacy through hard work and integrity." },
    { id:5,  name:"Mr Sivasthurai Mylvaganam",       birth:"1936", death:"2026", location:"Jaffna, Sri Lanka",                                    tributes:9,  avatar:"https://i.pravatar.cc/150?img=14", time:"4 days ago",   country:"Sri Lanka",     district:"Jaffna",       postType:"2nd Year Remembrance", religion:"Hinduism",     age:90, biography:"A talented artist whose work brought joy to many. His creative spirit continues to inspire." },
    { id:6,  name:"Mrs Selvakurani Kanagaratnam",    birth:"1953", death:"2026", location:"Kosgodavil East, Sri Lanka<br>Manila, Canada",          tributes:3,  avatar:"https://i.pravatar.cc/150?img=9",  time:"4 days ago",   country:"Canada",        district:"Batticaloa",   postType:"Obituary",             religion:"Buddhism",     age:73, biography:"A devoted nurse who cared for patients with compassion and skill." },
    { id:7,  name:"Mr Sockalingam Sri Rajalingam",   birth:"1927", death:"2026", location:"Colombo, Sri Lanka",                                   tributes:27, avatar:"https://i.pravatar.cc/150?img=33", time:"1 week ago",   country:"Sri Lanka",     district:"Colombo",      postType:"5th Year Remembrance", religion:"Hinduism",     age:99, biography:"A war veteran who served his country with honor and bravery." },
    { id:8,  name:"James Anderson",                  birth:"1945", death:"2026", location:"Sydney, Australia",                                    tributes:12, avatar:"https://i.pravatar.cc/150?img=52", time:"2 days ago",   country:"Australia",     district:"Vavuniya",     postType:"Obituary",             religion:"Christianity", age:81, biography:"A loving father and successful engineer who contributed greatly to his field." },
    { id:9,  name:"Sophie Martin",                   birth:"1958", death:"2026", location:"Melbourne, Australia",                                 tributes:8,  avatar:"https://i.pravatar.cc/150?img=26", time:"5 days ago",   country:"Australia",     district:"Kilinochchi",  postType:"3rd Year Remembrance", religion:"Christianity", age:68, biography:"A passionate teacher who inspired generations of students." },
    { id:10, name:"Elizabeth Windsor",               birth:"1944", death:"2026", location:"London, United Kingdom",                               tributes:35, avatar:"https://i.pravatar.cc/150?img=27", time:"1 day ago",    country:"United Kingdom",district:"Nuwara Eliya",  postType:"Obituary",             religion:"Christianity", age:82, biography:"A philanthropist who dedicated her life to charitable causes." },
    { id:11, name:"Hans Mueller",                    birth:"1948", death:"2026", location:"Berlin, Germany",                                      tributes:14, avatar:"https://i.pravatar.cc/150?img=70", time:"4 days ago",   country:"Germany",       district:"Ampara",       postType:"Obituary",             religion:"Christianity", age:78, biography:"A talented musician who enriched lives through his beautiful compositions." },
    { id:12, name:"Mr Suthusan Sivasalan",           birth:"1960", death:"2026", location:"Puthukkudiyiruppu, United Kingdom",                    tributes:18, avatar:"https://i.pravatar.cc/150?img=52", time:"2 days ago",   country:"United Kingdom",district:"Jaffna",        postType:"1st Year Remembrance", religion:"Hinduism",     age:66, biography:"A dedicated professional who always put family first." }
];

/* ── AUTO GENERATE DISTRICTS ── */
const districts = Object.values(
    obituaries.reduce((acc, obj) => {
        const district = obj.district;
        if (!acc[district]) acc[district] = { name: district, count: 0 };
        acc[district].count++;
        return acc;
    }, {})
);

districts.sort((a, b) => b.count - a.count);

/* ── Recent Comments data ── */
const recentComments = [
    { name:"திருமதி செல்வரட்ணம்",      time:"2 weeks ago",   comments:1, avatar:"https://i.pravatar.cc/150?img=9"  },
    { name:"திருமதி. நிர்மலா யோக",     time:"2 weeks ago",   comments:1, avatar:"https://i.pravatar.cc/150?img=5"  },
    { name:"திரு இளையதம்பி பரம",       time:"1 month ago",   comments:1, avatar:"https://i.pravatar.cc/150?img=13" }
];

/* ── Tribute Types ── */
const TRIBUTE_TYPES = {
    cards:   { icon:'💌', name:'Cards',               desc:'Send a tribute card.',       fields:[{id:'sfmTributeName',label:'Your Name',type:'text',placeholder:'Enter your name'},{id:'sfmCardMessage',label:'Card Message',type:'textarea',placeholder:'Write your message on the tribute card…'}] },
    candle:  { icon:'🕯️', name:'Lighting of Candle',  desc:'Mark your condolences.',    fields:[{id:'sfmTributeName',label:'Your Name',type:'text',placeholder:'Enter your name'},{id:'sfmCandleMsg',label:'Prayer / Message',type:'textarea',placeholder:'Share a prayer or message while lighting a virtual candle…'}] },
    wreath:  { icon:'💐', name:'Wreath of Love',       desc:'Show your last respect.',   fields:[{id:'sfmTributeName',label:'Your Name',type:'text',placeholder:'Enter your name'},{id:'sfmWreathMsg',label:'Dedication Message',type:'textarea',placeholder:'Dedicate this wreath with your words of respect…'}] },
    letter:  { icon:'✍️', name:'Letter',               desc:'Say the words you missed.', fields:[{id:'sfmTributeName',label:'Your Name',type:'text',placeholder:'Enter your name'},{id:'sfmLetterBody',label:'Your Letter',type:'textarea',placeholder:'Write your heartfelt letter here…'}] },
    moments: { icon:'📸', name:'Treasured Moments',    desc:'Share memorable photos.',   fields:[{id:'sfmTributeName',label:'Your Name',type:'text',placeholder:'Enter your name'},{id:'sfmMomentsCaption',label:'Caption / Memory',type:'textarea',placeholder:'Share a memory or describe this moment…'},{id:'sfmMomentsPhoto',label:'Upload Photo',type:'file',placeholder:''}] },
    message: { icon:'💬', name:'Message',              desc:'Send a heartfelt message.', fields:[{id:'sfmTributeName',label:'Your Name',type:'text',placeholder:'Enter your name'},{id:'sfmMessageBody',label:'Your Message',type:'textarea',placeholder:'Write your heartfelt condolence message…'}] }
};

/* ── Reactions ── */
const REACTIONS = {
    pray:   { emoji:'🙏', label:'Pray'   },
    candle: { emoji:'🕯️', label:'Candle' },
    flower: { emoji:'🌸', label:'Flower' }
};

const reactions     = {};
const userReactions = {};
const tributeComments = {};

function initReactions(id) {
    if (!reactions[id])                  reactions[id]     = { pray: Math.floor(Math.random()*12), candle: Math.floor(Math.random()*8), flower: Math.floor(Math.random()*6) };
    if (userReactions[id] === undefined) userReactions[id] = null;
}

function reactToPost(id, type, event) {
    if (event) event.stopPropagation();
    initReactions(id);
    const prev = userReactions[id];
    if (prev === type) {
        reactions[id][type] = Math.max(0, reactions[id][type] - 1);
        userReactions[id] = null;
    } else {
        if (prev) reactions[id][prev] = Math.max(0, reactions[id][prev] - 1);
        reactions[id][type]++;
        userReactions[id] = type;
        if (event) spawnBurst(event.currentTarget, REACTIONS[type].emoji);
    }
    document.querySelectorAll(`.reaction-group[data-id="${id}"]`).forEach(g => renderRGroup(g, id));
}

function spawnBurst(btn, emoji) {
    for (let i = 0; i < 5; i++) {
        const el = document.createElement('span');
        el.className = 'reaction-burst';
        el.textContent = emoji;
        const rect = btn.getBoundingClientRect();
        el.style.cssText = `left:${rect.left + rect.width/2}px;top:${rect.top}px;`;
        el.style.setProperty('--dx', (Math.random()*80 - 40) + 'px');
        el.style.setProperty('--dy', -(30 + Math.random()*60) + 'px');
        el.style.animationDelay = (i * 60) + 'ms';
        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
    }
}

function renderRGroup(group, id) {
    initReactions(id);
    const active = userReactions[id];
    group.innerHTML = Object.entries(REACTIONS).map(([type, def]) => {
        const count = reactions[id][type], isActive = active === type;
        return `<button class="reaction-btn ${isActive ? 'reaction-active' : ''}"
            onclick="reactToPost(${id},'${type}',event)" title="${def.label}">
            <span class="reaction-emoji">${def.emoji}</span>
            <span>${def.label}</span>
            ${count > 0 ? `<span class="reaction-count">${count}</span>` : ''}
        </button>`;
    }).join('');
}

/* ── State ── */
let selectedDistrict     = null;
let currentPage          = 'home';
let currentTributePostId = null;

/* ── Navigation ── */
function showMainPage() {
    const mp = document.getElementById('mainPage');
    const dp = document.getElementById('detailPage');
    if (mp) mp.style.display = 'block';
    if (dp) dp.classList.remove('active');
    window.scrollTo(0, 0);
    filterByPage('home');
}

function filterByPage(page) {
    currentPage      = page;
    selectedDistrict = null;
    document.querySelectorAll('.page-nav-link').forEach(l => l.classList.remove('active'));
    const navId = 'nav' + page.charAt(0).toUpperCase() + page.slice(1);
    const an    = document.getElementById(navId);
    if (an) an.classList.add('active');
    let filtered = obituaries;
    if (page === 'obituary')      filtered = obituaries.filter(o => o.postType === 'Obituary');
    else if (page === 'memorial') filtered = obituaries.filter(o => o.postType !== 'Obituary');
    renderObituaries(filtered);
    renderDistrictList();
}

/* ── District sidebar ── */
function renderDistrictList() {
    /* 
     * FIX: Each district item now shows the filter panel with that district
     * pre-filled when clicked, instead of just filtering the feed directly.
     * A small filter icon also gives a secondary entry point.
     */
    const html = districts.map(d => `
        <div class="district-item ${selectedDistrict === d.name ? 'active' : ''}"
             onclick="onDistrictClick('${d.name}')">
            <span class="district-name">${d.name}</span>
            <span class="district-count">${d.count}</span>
        </div>`).join('');

    ['districtList','mobileDistrictList'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    });
}

/* FIX: clicking a district now:
   1. Marks it as selected (highlights it)
   2. Opens the filter panel with the district pre-filled
   3. The feed filters immediately as well                    */
function onDistrictClick(districtName) {
    selectedDistrict = districtName;
    renderDistrictList();               // re-render so active class appears

    // Pre-fill the filter panel inputs
    const fd = document.getElementById('filterDistrict');
    if (fd) fd.value = districtName;

    // Clear other filters so only district is active
    ['filterName','filterBirthplace','filterLived','filterFrom','filterTo'].forEach(fid => {
        const el = document.getElementById(fid);
        if (el) el.value = '';
    });

    // Show the filter panel
    showFilterPanel();

    // Also immediately filter the feed
    filterByDistrict(districtName);
}

function filterByDistrict(districtName) {
    const filtered = obituaries.filter(o => o.district === districtName);
    renderObituaries(filtered.length ? filtered : obituaries);
}

/* FIX: show / hide filter panel correctly */
function showFilterPanel() {
    const fp = document.getElementById('filterPanel');
    const dv = document.getElementById('districtView');
    if (fp) { fp.style.display = 'block'; fp.style.visibility = 'visible'; }
    if (dv) dv.style.display = 'none';
}

function showDistrictList() {
    const fp = document.getElementById('filterPanel');
    const dv = document.getElementById('districtView');
    if (fp) fp.style.display = 'none';
    if (dv) { dv.style.display = 'block'; dv.style.visibility = 'visible'; }
}

function applyFilters() {
    const name     = (document.getElementById('filterName')?.value     || '').toLowerCase().trim();
    const district = (document.getElementById('filterDistrict')?.value || '').toLowerCase().trim();
    const birth    = (document.getElementById('filterBirthplace')?.value || '').toLowerCase().trim();
    const lived    = (document.getElementById('filterLived')?.value    || '').toLowerCase().trim();
    let filtered = obituaries.filter(o => {
        const matchName     = !name     || o.name.toLowerCase().includes(name);
        const matchDistrict = !district || o.district?.toLowerCase().includes(district) || o.location.toLowerCase().includes(district);
        const matchBirth    = !birth    || o.location.toLowerCase().includes(birth);
        const matchLived    = !lived    || o.location.toLowerCase().includes(lived);
        return matchName && matchDistrict && matchBirth && matchLived;
    });
    renderObituaries(filtered);
    showDistrictList();
}

/* ── Recent Comments ── */
function renderRecentComments() {
    const html = recentComments.map(c => `
        <div class="rc-item">
            <img src="${c.avatar}" alt="${c.name}" class="rc-avatar">
            <div class="rc-info">
                <div class="rc-name">${c.name}</div>
                <div class="rc-comment-ct"><i class="bi bi-chat-left-text"></i> ${c.comments} Comment · ${c.time}</div>
            </div>
        </div>`).join('');
    ['recentCommentsList','mobileCommentsList'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    });
}

/* ── Detail Page ── */
function showDetailPage(id) {
    const obit = obituaries.find(o => o.id === id);
    if (!obit) return;
    currentTributePostId = id;
    if (!tributeComments[id]) tributeComments[id] = [];

    const bd  = new Date(parseInt(obit.birth), Math.floor(Math.random()*12), Math.floor(Math.random()*28)+1);
    const dd  = new Date(parseInt(obit.death), Math.floor(Math.random()*12), Math.floor(Math.random()*28)+1);
    const bDay = bd.getDate().toString().padStart(2,'0'), bMon = bd.toLocaleString('default',{month:'short'});
    const dDay = dd.getDate().toString().padStart(2,'0'), dMon = dd.toLocaleString('default',{month:'short'});
    const locClean  = obit.location.replace(/<br>/g, ', ');
    const locParts  = obit.location.split('<br>');
    const bornIn    = locParts[0] || locClean;
    const residedIn = locParts[1] ? locParts[1].split(',')[0].trim() : obit.country;

    document.getElementById('detailContent').innerHTML = `
        <div class="memorial-hero">
            <div class="hero-corner hero-corner-tl"></div>
            <div class="hero-corner hero-corner-tr"></div>
            <div class="hero-corner hero-corner-bl"></div>
            <div class="hero-corner hero-corner-br"></div>
            <button class="dl-btn" onclick="alert('Download feature coming soon!')"><i class="bi bi-download"></i></button>
            <div class="hero-title-tamil">கண்ணீர் அஞ்சலி</div>
            <div class="hero-dates-wrap">
                <div class="hero-date-col">
                    <div class="hero-date-label">தோற்றம்</div>
                    <div class="hero-date-day">${bDay}</div>
                    <div class="hero-date-month">${bMon}</div>
                    <div class="hero-date-year">${obit.birth}</div>
                </div>
                <div class="hero-photo-frame">
                    <div class="hero-photo-outer"></div>
                    <div class="hero-photo-inner"></div>
                    <img src="${obit.avatar}" alt="${obit.name}" class="hero-photo">
                </div>
                <div class="hero-date-col">
                    <div class="hero-date-label">மறைவு</div>
                    <div class="hero-date-day">${dDay}</div>
                    <div class="hero-date-month">${dMon}</div>
                    <div class="hero-date-year">${obit.death}</div>
                </div>
            </div>
            <h1 class="hero-name">${obit.name}</h1>
            <div class="hero-age">Age ${obit.age}</div>
            <div class="hero-loc">${locClean}</div>
            <div class="hero-actions">
                <button class="hero-action-btn" onclick="openShareFeeling(${obit.id})"><i class="bi bi-heart-fill"></i> Share Your Feeling</button>
                <button class="hero-action-btn" onclick="openSendFlowers(${obit.id})"><i class="bi bi-flower1"></i> Send Flowers</button>
                <button class="hero-action-btn" onclick="openDonate(${obit.id})"><i class="bi bi-coin"></i> Donate</button>
                <button class="hero-action-btn" onclick="sharePost(${obit.id})"><i class="bi bi-share-fill"></i> Share</button>
            </div>
        </div>

        <div class="detail-grid">
            <div class="detail-left">
                <div class="detail-card">
                    <div class="detail-card-header"><span class="detail-card-title">About</span></div>
                    <div class="detail-card-body"><p class="about-text">${obit.biography}</p></div>
                </div>
                <div class="detail-card">
                    <div class="detail-card-header">
                        <span class="detail-card-title"><i class="bi bi-heart-fill me-2" style="color:var(--gold)"></i>Comments &amp; Condolences</span>
                        <span class="count-badge" id="commentCountBadge-${id}">${tributeComments[id].length}</span>
                    </div>
                    <div class="detail-card-body" id="commentsList-${id}" style="padding-bottom:0;">
                        ${renderCommentsList(id)}
                    </div>
                    <div class="tribute-form-wrap">
                        <p class="detail-card-title" style="margin-bottom:12px;">Share Your Feelings</p>
                        <label class="form-label-gold">Your Name</label>
                        <input type="text" class="gold-input" id="tributeName-${id}" placeholder="Enter your name">
                        <label class="form-label-gold">Message</label>
                        <textarea class="gold-input gold-textarea" id="tributeMsg-${id}" placeholder="Share your memories, prayers or condolences"></textarea>
                        <div style="display:flex;justify-content:flex-end;margin-top:4px;">
                            <button class="btn-post" onclick="postTribute(${id})">Post Tribute</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-sidebar-col">
                <div class="detail-card">
                    <div class="detail-card-header"><span class="detail-card-title">Summary</span></div>
                    <div class="detail-card-body">
                        <div class="summary-row">
                            <div class="summary-icon"><i class="bi bi-geo-alt-fill"></i></div>
                            <div><div class="summary-label">பிறந்த இடம்</div><div class="summary-value">${bornIn}</div></div>
                        </div>
                        <div class="summary-row">
                            <div class="summary-icon"><i class="bi bi-house-fill"></i></div>
                            <div><div class="summary-label">வாழ்ந்த இடம்</div><div class="summary-value">${residedIn}</div></div>
                        </div>
                        <div class="summary-row">
                            <div class="summary-icon"><i class="bi bi-person-fill"></i></div>
                            <div><div class="summary-label">Religion</div><div class="summary-value">${obit.religion}</div></div>
                        </div>
                    </div>
                </div>
                <div class="detail-card">
                    <div class="sponsored-hd">
                        <span class="sponsored-label">Sponsored</span>
                        <button class="add-ad-btn">+ Add Your Ad</button>
                    </div>
                    <img src="https://picsum.photos/300/200?random=77" class="sponsored-img" alt="Sponsored">
                    <div class="sponsored-btns">
                        <button class="sp-wa"><i class="bi bi-whatsapp"></i> Contact</button>
                        <button class="sp-view">View more</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('detailPage').classList.add('active');
    window.scrollTo(0, 0);
}

function renderCommentsList(id) {
    const comments = tributeComments[id] || [];
    if (!comments.length) return '<div style="padding:10px 0;color:var(--grey-dim);font-size:0.8rem;">Be the first to leave a tribute.</div>';
    return comments.map(c => `
        <div class="comment-item">
            <div class="comment-author">${c.name}</div>
            <div class="comment-msg">${c.message}</div>
            <div class="comment-time">${c.time}</div>
        </div>`).join('');
}

function postTribute(id) {
    const nameEl = document.getElementById(`tributeName-${id}`);
    const msgEl  = document.getElementById(`tributeMsg-${id}`);
    if (!nameEl || !msgEl) return;
    const name = nameEl.value.trim(), message = msgEl.value.trim();
    if (!name || !message) { alert('Please enter your name and message.'); return; }
    if (!tributeComments[id]) tributeComments[id] = [];
    tributeComments[id].unshift({ name, message, time: 'Just now' });
    const obit = obituaries.find(o => o.id === id);
    if (obit) obit.tributes++;
    nameEl.value = ''; msgEl.value = '';
    const listEl  = document.getElementById(`commentsList-${id}`);
    if (listEl)  listEl.innerHTML = renderCommentsList(id);
    const countEl = document.getElementById(`commentCountBadge-${id}`);
    if (countEl) countEl.textContent = tributeComments[id].length;
    recentComments.unshift({ name, time:'Just now', comments:1, avatar:`https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)}` });
    renderRecentComments();
}

/* ── Share Feeling Modal ── */
function openShareFeeling(id) {
    currentTributePostId = id;
    document.getElementById('sfmStep1').style.display = '';
    document.getElementById('sfmStep2').style.display = 'none';
    document.getElementById('sfmFooter').style.display = '';
    new bootstrap.Modal(document.getElementById('shareFeelingModal')).show();
}

function selectTributeType(type) {
    const def = TRIBUTE_TYPES[type]; if (!def) return;
    document.getElementById('sfmFormHeader').innerHTML =
        `<span class="sfm-form-header-icon">${def.icon}</span>
         <div><h5>${def.name}</h5><p>${def.desc}</p></div>`;
    document.getElementById('sfmFormBody').innerHTML =
        def.fields.map(f => {
            if (f.type === 'textarea')
                return `<div class="sfm-field"><label>${f.label}</label><textarea id="${f.id}" placeholder="${f.placeholder}"></textarea></div>`;
            if (f.type === 'file')
                return `<div class="sfm-field"><label>${f.label}</label><input type="file" id="${f.id}" accept="image/*" style="width:100%;padding:8px 12px;background:var(--black-mid);border:1px solid rgba(201,168,76,0.2);border-radius:var(--radius);color:var(--offwhite);"></div>`;
            return `<div class="sfm-field"><label>${f.label}</label><input type="text" id="${f.id}" placeholder="${f.placeholder}"></div>`;
        }).join('') +
        `<div style="display:flex;justify-content:flex-end;margin-top:12px;">
             <button class="sfm-submit" onclick="submitTribute('${type}')">${def.icon} Submit ${def.name}</button>
         </div>`;
    document.getElementById('sfmStep1').style.display = 'none';
    document.getElementById('sfmStep2').style.display = '';
    document.getElementById('sfmFooter').style.display = 'none';
}

function sfmGoBack() {
    document.getElementById('sfmStep1').style.display = '';
    document.getElementById('sfmStep2').style.display = 'none';
    document.getElementById('sfmFooter').style.display = '';
}

function submitTribute(type) {
    const nameEl = document.getElementById('sfmTributeName');
    const name   = nameEl ? nameEl.value.trim() : '';
    if (!name) { alert('Please enter your name.'); return; }
    const def = TRIBUTE_TYPES[type], id = currentTributePostId;
    if (id) {
        if (!tributeComments[id]) tributeComments[id] = [];
        tributeComments[id].unshift({ name, message: `${def.icon} ${def.name}`, time: 'Just now' });
        const obit = obituaries.find(o => o.id === id);
        if (obit) obit.tributes++;
        const listEl  = document.getElementById(`commentsList-${id}`);
        if (listEl)  listEl.innerHTML = renderCommentsList(id);
        const countEl = document.getElementById(`commentCountBadge-${id}`);
        if (countEl) countEl.textContent = tributeComments[id].length;
    }
    bootstrap.Modal.getInstance(document.getElementById('shareFeelingModal')).hide();
    alert(`Thank you! Your ${def.name} has been submitted.`);
}

/* ── Send Flowers ── */
function openSendFlowers(id) {
    currentTributePostId = id;
    ['flowersName','flowersEmail','flowersPhone','flowersCountry','flowersMessage'].forEach(fid => {
        const el = document.getElementById(fid); if (el) el.value = '';
    });
    new bootstrap.Modal(document.getElementById('sendFlowersModal')).show();
}

function submitFlowersRequest() {
    const name    = document.getElementById('flowersName').value.trim();
    const email   = document.getElementById('flowersEmail').value.trim();
    const phone   = document.getElementById('flowersPhone').value.trim();
    const country = document.getElementById('flowersCountry').value.trim();
    if (!name || !email || !phone || !country) { alert('Please fill in all required fields.'); return; }
    bootstrap.Modal.getInstance(document.getElementById('sendFlowersModal')).hide();
    alert('Your flower request has been submitted! Our team will contact you shortly.');
}

/* ── Donate ── */
function openDonate(id) {
    currentTributePostId = id;
    ['donateName','donateEmail','donatePhone','donateCountry','donateAmount','donateNotes'].forEach(fid => {
        const el = document.getElementById(fid); if (el) el.value = '';
    });
    new bootstrap.Modal(document.getElementById('donateModal')).show();
}

function submitDonateRequest() {
    const name    = document.getElementById('donateName').value.trim();
    const email   = document.getElementById('donateEmail').value.trim();
    const phone   = document.getElementById('donatePhone').value.trim();
    const country = document.getElementById('donateCountry').value.trim();
    if (!name || !email || !phone || !country) { alert('Please fill in all required fields.'); return; }
    bootstrap.Modal.getInstance(document.getElementById('donateModal')).hide();
    alert('Thank you for your generous donation! Our team will contact you with bank account details shortly.');
}

/* ── Render Obituaries ── */
function renderObituaries(data) {
    if (data === undefined) data = obituaries;
    const container = document.getElementById('obituaryContainer');
    if (!container) return;
    if (!data.length) {
        container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--grey-dim);font-family:Cinzel,serif;letter-spacing:1px;">No notices found.</div>';
        return;
    }
    container.innerHTML = data.map(obit => {
        initReactions(obit.id);
        const active = userReactions[obit.id];
        const rbHtml = Object.entries(REACTIONS).map(([type, def]) => {
            const count = reactions[obit.id][type], isActive = active === type;
            return `<button class="reaction-btn ${isActive ? 'reaction-active' : ''}"
                onclick="reactToPost(${obit.id},'${type}',event)" title="${def.label}">
                <span class="reaction-emoji">${def.emoji}</span>
                <span>${def.label}</span>
                ${count > 0 ? `<span class="reaction-count">${count}</span>` : ''}
            </button>`;
        }).join('');
        return `
            <div class="obituary-card" onclick="showDetailPage(${obit.id})">
                <div class="card-top">
                    <div class="post-badge">${obit.postType}</div>
                    <div class="time-label">${obit.time}</div>
                </div>
                <div class="card-center">
                    <div class="card-photo-wrap">
                        <img src="${obit.avatar}" alt="${obit.name}" class="card-photo">
                        <div class="card-years">${obit.birth} — ${obit.death}</div>
                    </div>
                    <div class="card-info">
                        <div class="card-name">${obit.name}</div>
                        <div class="card-location"><i class="bi bi-geo-alt-fill"></i>${obit.location.replace('<br>', ', ')}</div>
                        <div class="card-footer">
                            <div class="tributes-ct"><i class="bi bi-heart-fill"></i> ${obit.tributes} Tributes</div>
                            <div class="reaction-group" data-id="${obit.id}">${rbHtml}</div>
                            <button class="share-btn" onclick="event.stopPropagation();sharePost(${obit.id})">
                                <i class="bi bi-share-fill"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join('');
}

/* ── Create Memorial ── */
function createMemorial() {
    const postType  = document.getElementById('postType').value.trim();
    const name      = document.getElementById('memorialName').value;
    const birthDate = document.getElementById('birthDate').value;
    const deathDate = document.getElementById('deathDate').value;
    const country   = document.getElementById('country').value;
    const location  = document.getElementById('location').value;
    const religion  = document.getElementById('religion').value || 'Not specified';
    const biography = document.getElementById('biography').value;
    if (!postType || !name || !birthDate || !deathDate || !country || !location) {
        alert('Please fill in all required fields'); return;
    }
    const by = new Date(birthDate).getFullYear(), dy = new Date(deathDate).getFullYear();
    const newM = {
        id: obituaries.length + 1, name, birth: by.toString(), death: dy.toString(),
        location: location + ', ' + country, tributes: 0,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)}`,
        time: 'Just now', country, district: location, postType, religion, age: dy - by,
        biography: biography || 'A beloved individual who will be deeply missed.'
    };
    obituaries.unshift(newM);
    const di = districts.find(d => d.name.toLowerCase() === location.toLowerCase());
    if (di) di.count++;
    else districts.push({ name: location, count: 1 });
    filterByPage(currentPage);
    renderDistrictList();
    bootstrap.Modal.getInstance(document.getElementById('createMemorialModal')).hide();
    ['postType','memorialName','birthDate','deathDate','country','location','religion','biography'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
    });
    alert('Notice created successfully!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Share ── */
function sharePost(id) {
    const obit = obituaries.find(o => o.id === id); if (!obit) return;
    if (navigator.share) {
        navigator.share({ title: obit.name, text: `In memory of ${obit.name} (${obit.birth}–${obit.death})`, url: window.location.href }).catch(() => {});
    } else {
        const tmp = document.createElement('input'); tmp.value = window.location.href;
        document.body.appendChild(tmp); tmp.select(); document.execCommand('copy'); document.body.removeChild(tmp);
        alert('Link copied to clipboard!');
    }
}

/* ── Scroll Top ── */
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) btn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('centerFeed');
    if (feed) {
        feed.addEventListener('scroll', () => {
            const btn = document.getElementById('scrollTopBtn');
            if (btn) btn.style.display = feed.scrollTop > 200 ? 'flex' : 'none';
        });
    }
});

/* ── Search ── */
function initSearch() {
    const si = document.getElementById('searchInput');
    if (!si) return;
    si.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        if (!term) { filterByPage(currentPage); return; }
        const filtered = obituaries.filter(o =>
            o.name.toLowerCase().includes(term) ||
            o.location.toLowerCase().includes(term) ||
            o.country.toLowerCase().includes(term) ||
            o.postType.toLowerCase().includes(term) ||
            (o.district || '').toLowerCase().includes(term)
        );
        renderObituaries(filtered);
    });
}

/* ── Mobile Sidebar Tabs ── */
function switchMobileTab(tab) {
    document.querySelectorAll('.mobile-sidebar-tab').forEach(t  => t.classList.remove('active'));
    document.querySelectorAll('.mobile-sidebar-panel').forEach(p => p.classList.remove('active'));
    const tabEl   = document.querySelector(`.mobile-sidebar-tab[data-tab="${tab}"]`);
    const panelEl = document.getElementById(`mobilePanel-${tab}`);
    if (tabEl)   tabEl.classList.add('active');
    if (panelEl) panelEl.classList.add('active');
}

/* ============================================================
   LANGUAGE DROPDOWN + GOOGLE TRANSLATE — FIXED
   - Uses cookie-based approach that works immediately
   - Targets Sri Lankan Tamil (ta) specifically
   - Falls back gracefully if Google widget is slow
   ============================================================ */

/* Set / clear the googtrans cookie on both root and hostname */
function setGoogTransCookie(value) {
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `googtrans=${value}; path=/; expires=${expires}`;
    document.cookie = `googtrans=${value}; path=/; expires=${expires}; domain=${location.hostname}`;
}

function clearGoogTransCookie() {
    const past = 'Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = `googtrans=; path=/; expires=${past}`;
    document.cookie = `googtrans=; path=/; expires=${past}; domain=${location.hostname}`;
}

/*
 * FIX: Improved Google Translate trigger.
 * Strategy:
 *   1. Write the cookie first (instant).
 *   2. Try to find and trigger the hidden <select> inside any iframe.
 *   3. If the widget isn't ready yet, retry up to 30 times with 150ms gap.
 *   4. As last resort, reload — cookie ensures correct language loads.
 *
 * For Sri Lankan Tamil we use lang code "ta" which Google Translate maps
 * to Tamil. There is no separate "ta-LK" code in GT, but "ta" covers
 * Sri Lankan Tamil text correctly.
 */
function doGoogleTranslate(lang) {
    if (lang === 'en') {
        clearGoogTransCookie();
        location.reload();
        return;
    }

    // Write cookie immediately so even a reload lands in correct lang
    setGoogTransCookie('/en/' + lang);

    let attempts = 0;
    const MAX    = 30;
    const DELAY  = 150; // ms

    function tryTrigger() {
        // 1. Try direct select in main document
        const directSel = document.querySelector('select.goog-te-combo');
        if (directSel) {
            directSel.value = lang;
            directSel.dispatchEvent(new Event('change'));
            return;
        }

        // 2. Try inside every iframe (Google injects its widget in an iframe)
        const frames = document.querySelectorAll('iframe');
        for (const frame of frames) {
            try {
                const fd   = frame.contentDocument || frame.contentWindow?.document;
                if (!fd) continue;
                const fSel = fd.querySelector('select.goog-te-combo');
                if (fSel) {
                    fSel.value = lang;
                    fSel.dispatchEvent(new Event('change'));
                    return;
                }
            } catch (_) { /* cross-origin, skip */ }
        }

        // 3. Retry or reload
        if (attempts++ < MAX) {
            setTimeout(tryTrigger, DELAY);
        } else {
            // Cookie is already set — reload will apply translation
            location.reload();
        }
    }

    tryTrigger();
}

function initLangDropdown() {
    const langBtn  = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    if (!langBtn || !langMenu) return;

    langBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = langMenu.classList.contains('open');
        langMenu.classList.toggle('open', !isOpen);
        langBtn.classList.toggle('open', !isOpen);
    });

    document.addEventListener('click', () => {
        langMenu.classList.remove('open');
        langBtn.classList.remove('open');
    });

    langMenu.addEventListener('click', e => e.stopPropagation());

    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            const langCode  = item.getAttribute('data-lang');
            const langLabel = item.getAttribute('data-label');

            document.querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const ll = document.getElementById('langLabel');
            if (ll) ll.textContent = langLabel;

            langMenu.classList.remove('open');
            langBtn.classList.remove('open');

            doGoogleTranslate(langCode);
        });
    });
}

/* Google Translate widget init callback (called by GT script) */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ta,si',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
    renderDistrictList();
    renderObituaries();
    renderRecentComments();
    initSearch();

    // Give navbar time to inject, then init lang dropdown
    setTimeout(initLangDropdown, 600);

    // Footer year
    const yr = document.getElementById('footerYear');
    if (yr) yr.textContent = new Date().getFullYear();
});