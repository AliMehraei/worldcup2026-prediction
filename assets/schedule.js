// ─── WC2026 FULL SCHEDULE — all 104 matches ──────────────────────────────────
// Times are US Eastern (ET). Source: Official FIFA WC2026 schedule.
// Venues: full name + city + abbreviation for display.

const VENUES = {
  ATL: { name: 'Mercedes-Benz Stadium',    city: 'Atlanta, GA',           short: 'Atlanta' },
  BOS: { name: 'Gillette Stadium',          city: 'Foxborough, MA',        short: 'Boston' },
  DAL: { name: 'AT&T Stadium',              city: 'Arlington, TX',         short: 'Dallas' },
  HOU: { name: 'NRG Stadium',               city: 'Houston, TX',           short: 'Houston' },
  KC:  { name: 'Arrowhead Stadium',         city: 'Kansas City, MO',       short: 'Kansas City' },
  LAR: { name: 'SoFi Stadium',              city: 'Inglewood, CA',         short: 'Los Angeles' },
  MIA: { name: 'Hard Rock Stadium',         city: 'Miami Gardens, FL',     short: 'Miami' },
  NYC: { name: 'MetLife Stadium',           city: 'East Rutherford, NJ',   short: 'New York/NJ' },
  PHI: { name: 'Lincoln Financial Field',   city: 'Philadelphia, PA',      short: 'Philadelphia' },
  SEA: { name: 'Lumen Field',               city: 'Seattle, WA',           short: 'Seattle' },
  SF:  { name: "Levi's Stadium",            city: 'Santa Clara, CA',       short: 'San Francisco' },
  TOR: { name: 'BMO Field',                 city: 'Toronto, Canada',       short: 'Toronto' },
  VAN: { name: 'BC Place',                  city: 'Vancouver, Canada',     short: 'Vancouver' },
  GDL: { name: 'Estadio Akron',             city: 'Guadalajara, Mexico',   short: 'Guadalajara' },
  MEX: { name: 'Estadio Azteca',            city: 'Mexico City, Mexico',   short: 'Mexico City' },
  MTY: { name: 'Estadio BBVA',              city: 'Monterrey, Mexico',     short: 'Monterrey' },
};

// Each match: { m, date, time, venue, grp, round, teams }
// date: 'YYYY-MM-DD', time: 'HH:MM' (24h ET)
// teams: [iso2A, nameA, iso2B, nameB] — null for knockout TBD matches
const SCHEDULE = [

  // ── GROUP A — Mexico, South Korea, Czechia, South Africa ─────────────────
  { m:1,  date:'2026-06-11', time:'14:00', venue:'MEX', grp:'A', round:'Group A', teams:['mx','Mexico','za','South Africa'] },
  { m:2,  date:'2026-06-11', time:'22:00', venue:'GDL', grp:'A', round:'Group A', teams:['kr','South Korea','cz','Czechia'] },
  { m:3,  date:'2026-06-18', time:'12:00', venue:'ATL', grp:'A', round:'Group A', teams:['cz','Czechia','za','South Africa'] },
  { m:4,  date:'2026-06-18', time:'23:00', venue:'GDL', grp:'A', round:'Group A', teams:['mx','Mexico','kr','South Korea'] },
  { m:5,  date:'2026-06-24', time:'21:00', venue:'MEX', grp:'A', round:'Group A', teams:['cz','Czechia','mx','Mexico'] },
  { m:6,  date:'2026-06-24', time:'21:00', venue:'MTY', grp:'A', round:'Group A', teams:['za','South Africa','kr','South Korea'] },

  // ── GROUP B — Canada, Bosnia & Herzegovina, Qatar, Switzerland ───────────
  { m:7,  date:'2026-06-12', time:'15:00', venue:'TOR', grp:'B', round:'Group B', teams:['ca','Canada','ba','Bosnia & Herz.'] },
  { m:8,  date:'2026-06-13', time:'15:00', venue:'SF',  grp:'B', round:'Group B', teams:['qa','Qatar','ch','Switzerland'] },
  { m:9,  date:'2026-06-18', time:'15:00', venue:'LAR', grp:'B', round:'Group B', teams:['ch','Switzerland','ba','Bosnia & Herz.'] },
  { m:10, date:'2026-06-18', time:'18:00', venue:'VAN', grp:'B', round:'Group B', teams:['ca','Canada','qa','Qatar'] },
  { m:11, date:'2026-06-24', time:'15:00', venue:'VAN', grp:'B', round:'Group B', teams:['ch','Switzerland','ca','Canada'] },
  { m:12, date:'2026-06-24', time:'15:00', venue:'SEA', grp:'B', round:'Group B', teams:['ba','Bosnia & Herz.','qa','Qatar'] },

  // ── GROUP C — Brazil, Morocco, Haiti, Scotland ───────────────────────────
  { m:13, date:'2026-06-13', time:'18:00', venue:'NYC', grp:'C', round:'Group C', teams:['br','Brazil','ma','Morocco'] },
  { m:14, date:'2026-06-13', time:'21:00', venue:'BOS', grp:'C', round:'Group C', teams:['ht','Haiti','gb-sct','Scotland'] },
  { m:15, date:'2026-06-19', time:'18:00', venue:'BOS', grp:'C', round:'Group C', teams:['gb-sct','Scotland','ma','Morocco'] },
  { m:16, date:'2026-06-19', time:'21:00', venue:'PHI', grp:'C', round:'Group C', teams:['br','Brazil','ht','Haiti'] },
  { m:17, date:'2026-06-24', time:'18:00', venue:'MIA', grp:'C', round:'Group C', teams:['gb-sct','Scotland','br','Brazil'] },
  { m:18, date:'2026-06-24', time:'18:00', venue:'ATL', grp:'C', round:'Group C', teams:['ma','Morocco','ht','Haiti'] },

  // ── GROUP D — USA, Paraguay, Australia, Türkiye ──────────────────────────
  { m:19, date:'2026-06-12', time:'21:00', venue:'LAR', grp:'D', round:'Group D', teams:['us','USA','py','Paraguay'] },
  { m:20, date:'2026-06-13', time:'00:00', venue:'VAN', grp:'D', round:'Group D', teams:['au','Australia','tr','Türkiye'] },
  { m:21, date:'2026-06-19', time:'15:00', venue:'SEA', grp:'D', round:'Group D', teams:['us','USA','au','Australia'] },
  { m:22, date:'2026-06-19', time:'00:00', venue:'SF',  grp:'D', round:'Group D', teams:['tr','Türkiye','py','Paraguay'] },
  { m:23, date:'2026-06-25', time:'22:00', venue:'LAR', grp:'D', round:'Group D', teams:['tr','Türkiye','us','USA'] },
  { m:24, date:'2026-06-25', time:'22:00', venue:'SF',  grp:'D', round:'Group D', teams:['py','Paraguay','au','Australia'] },

  // ── GROUP E — Germany, Curaçao, Ivory Coast, Ecuador ─────────────────────
  { m:25, date:'2026-06-14', time:'13:00', venue:'HOU', grp:'E', round:'Group E', teams:['de','Germany','cw','Curaçao'] },
  { m:26, date:'2026-06-14', time:'19:00', venue:'PHI', grp:'E', round:'Group E', teams:['ci','Ivory Coast','ec','Ecuador'] },
  { m:27, date:'2026-06-20', time:'16:00', venue:'TOR', grp:'E', round:'Group E', teams:['de','Germany','ci','Ivory Coast'] },
  { m:28, date:'2026-06-20', time:'20:00', venue:'KC',  grp:'E', round:'Group E', teams:['ec','Ecuador','cw','Curaçao'] },
  { m:29, date:'2026-06-25', time:'16:00', venue:'NYC', grp:'E', round:'Group E', teams:['ec','Ecuador','de','Germany'] },
  { m:30, date:'2026-06-25', time:'16:00', venue:'PHI', grp:'E', round:'Group E', teams:['cw','Curaçao','ci','Ivory Coast'] },

  // ── GROUP F — Netherlands, Japan, Sweden, Tunisia ────────────────────────
  { m:31, date:'2026-06-14', time:'16:00', venue:'DAL', grp:'F', round:'Group F', teams:['nl','Netherlands','jp','Japan'] },
  { m:32, date:'2026-06-14', time:'22:00', venue:'MTY', grp:'F', round:'Group F', teams:['se','Sweden','tn','Tunisia'] },
  { m:33, date:'2026-06-20', time:'13:00', venue:'HOU', grp:'F', round:'Group F', teams:['nl','Netherlands','se','Sweden'] },
  { m:34, date:'2026-06-20', time:'00:00', venue:'MTY', grp:'F', round:'Group F', teams:['tn','Tunisia','jp','Japan'] },
  { m:35, date:'2026-06-25', time:'19:00', venue:'DAL', grp:'F', round:'Group F', teams:['jp','Japan','se','Sweden'] },
  { m:36, date:'2026-06-25', time:'19:00', venue:'KC',  grp:'F', round:'Group F', teams:['tn','Tunisia','nl','Netherlands'] },

  // ── GROUP G — Iran, New Zealand, Belgium, Egypt ───────────────────────────
  { m:37, date:'2026-06-15', time:'21:00', venue:'LAR', grp:'G', round:'Group G', teams:['ir','Iran','nz','New Zealand'] },
  { m:38, date:'2026-06-15', time:'15:00', venue:'SEA', grp:'G', round:'Group G', teams:['be','Belgium','eg','Egypt'] },
  { m:39, date:'2026-06-21', time:'15:00', venue:'LAR', grp:'G', round:'Group G', teams:['be','Belgium','ir','Iran'] },
  { m:40, date:'2026-06-21', time:'21:00', venue:'VAN', grp:'G', round:'Group G', teams:['nz','New Zealand','eg','Egypt'] },
  { m:41, date:'2026-06-26', time:'23:00', venue:'SEA', grp:'G', round:'Group G', teams:['eg','Egypt','ir','Iran'] },
  { m:42, date:'2026-06-26', time:'23:00', venue:'VAN', grp:'G', round:'Group G', teams:['nz','New Zealand','be','Belgium'] },

  // ── GROUP H — Spain, Cape Verde, Saudi Arabia, Uruguay ───────────────────
  { m:43, date:'2026-06-15', time:'12:00', venue:'ATL', grp:'H', round:'Group H', teams:['es','Spain','cv','Cape Verde'] },
  { m:44, date:'2026-06-15', time:'18:00', venue:'MIA', grp:'H', round:'Group H', teams:['sa','Saudi Arabia','uy','Uruguay'] },
  { m:45, date:'2026-06-21', time:'12:00', venue:'ATL', grp:'H', round:'Group H', teams:['es','Spain','sa','Saudi Arabia'] },
  { m:46, date:'2026-06-21', time:'18:00', venue:'MIA', grp:'H', round:'Group H', teams:['uy','Uruguay','cv','Cape Verde'] },
  { m:47, date:'2026-06-26', time:'20:00', venue:'HOU', grp:'H', round:'Group H', teams:['cv','Cape Verde','sa','Saudi Arabia'] },
  { m:48, date:'2026-06-26', time:'20:00', venue:'GDL', grp:'H', round:'Group H', teams:['uy','Uruguay','es','Spain'] },

  // ── GROUP I — France, Senegal, Iraq, Norway ───────────────────────────────
  { m:49, date:'2026-06-16', time:'15:00', venue:'NYC', grp:'I', round:'Group I', teams:['fr','France','sn','Senegal'] },
  { m:50, date:'2026-06-16', time:'18:00', venue:'BOS', grp:'I', round:'Group I', teams:['iq','Iraq','no','Norway'] },
  { m:51, date:'2026-06-22', time:'17:00', venue:'PHI', grp:'I', round:'Group I', teams:['fr','France','iq','Iraq'] },
  { m:52, date:'2026-06-22', time:'20:00', venue:'NYC', grp:'I', round:'Group I', teams:['no','Norway','sn','Senegal'] },
  { m:53, date:'2026-06-26', time:'15:00', venue:'BOS', grp:'I', round:'Group I', teams:['no','Norway','fr','France'] },
  { m:54, date:'2026-06-26', time:'15:00', venue:'TOR', grp:'I', round:'Group I', teams:['sn','Senegal','iq','Iraq'] },

  // ── GROUP J — Argentina, Algeria, Austria, Jordan ────────────────────────
  { m:55, date:'2026-06-16', time:'21:00', venue:'KC',  grp:'J', round:'Group J', teams:['ar','Argentina','dz','Algeria'] },
  { m:56, date:'2026-06-16', time:'00:00', venue:'SF',  grp:'J', round:'Group J', teams:['at','Austria','jo','Jordan'] },
  { m:57, date:'2026-06-22', time:'13:00', venue:'DAL', grp:'J', round:'Group J', teams:['ar','Argentina','at','Austria'] },
  { m:58, date:'2026-06-22', time:'23:00', venue:'SF',  grp:'J', round:'Group J', teams:['jo','Jordan','dz','Algeria'] },
  { m:59, date:'2026-06-27', time:'22:00', venue:'KC',  grp:'J', round:'Group J', teams:['dz','Algeria','at','Austria'] },
  { m:60, date:'2026-06-27', time:'22:00', venue:'DAL', grp:'J', round:'Group J', teams:['jo','Jordan','ar','Argentina'] },

  // ── GROUP K — Portugal, DR Congo, Uzbekistan, Colombia ───────────────────
  { m:61, date:'2026-06-17', time:'13:00', venue:'HOU', grp:'K', round:'Group K', teams:['pt','Portugal','cd','DR Congo'] },
  { m:62, date:'2026-06-17', time:'22:00', venue:'MEX', grp:'K', round:'Group K', teams:['uz','Uzbekistan','co','Colombia'] },
  { m:63, date:'2026-06-23', time:'13:00', venue:'HOU', grp:'K', round:'Group K', teams:['pt','Portugal','uz','Uzbekistan'] },
  { m:64, date:'2026-06-23', time:'22:00', venue:'GDL', grp:'K', round:'Group K', teams:['co','Colombia','cd','DR Congo'] },
  { m:65, date:'2026-06-27', time:'19:30', venue:'MIA', grp:'K', round:'Group K', teams:['co','Colombia','pt','Portugal'] },
  { m:66, date:'2026-06-27', time:'19:30', venue:'ATL', grp:'K', round:'Group K', teams:['cd','DR Congo','uz','Uzbekistan'] },

  // ── GROUP L — England, Croatia, Ghana, Panama ────────────────────────────
  { m:67, date:'2026-06-17', time:'16:00', venue:'DAL', grp:'L', round:'Group L', teams:['gb-eng','England','hr','Croatia'] },
  { m:68, date:'2026-06-17', time:'19:00', venue:'TOR', grp:'L', round:'Group L', teams:['gh','Ghana','pa','Panama'] },
  { m:69, date:'2026-06-23', time:'16:00', venue:'BOS', grp:'L', round:'Group L', teams:['gb-eng','England','gh','Ghana'] },
  { m:70, date:'2026-06-23', time:'19:00', venue:'TOR', grp:'L', round:'Group L', teams:['pa','Panama','hr','Croatia'] },
  { m:71, date:'2026-06-27', time:'17:00', venue:'NYC', grp:'L', round:'Group L', teams:['pa','Panama','gb-eng','England'] },
  { m:72, date:'2026-06-27', time:'17:00', venue:'PHI', grp:'L', round:'Group L', teams:['hr','Croatia','gh','Ghana'] },

  // ── ROUND OF 32 ──────────────────────────────────────────────────────────
  { m:73,  date:'2026-06-28', time:'15:00', venue:'LAR', grp:null, round:'Round of 32', teams:null },
  { m:74,  date:'2026-06-29', time:'16:30', venue:'BOS', grp:null, round:'Round of 32', teams:null },
  { m:75,  date:'2026-06-29', time:'21:00', venue:'MTY', grp:null, round:'Round of 32', teams:null },
  { m:76,  date:'2026-06-29', time:'13:00', venue:'HOU', grp:null, round:'Round of 32', teams:null },
  { m:77,  date:'2026-06-30', time:'17:00', venue:'NYC', grp:null, round:'Round of 32', teams:null },
  { m:78,  date:'2026-06-30', time:'13:00', venue:'DAL', grp:null, round:'Round of 32', teams:null },
  { m:79,  date:'2026-06-30', time:'21:00', venue:'MEX', grp:null, round:'Round of 32', teams:null },
  { m:80,  date:'2026-07-01', time:'12:00', venue:'ATL', grp:null, round:'Round of 32', teams:null },
  { m:81,  date:'2026-07-01', time:'20:00', venue:'SF',  grp:null, round:'Round of 32', teams:null },
  { m:82,  date:'2026-07-01', time:'16:00', venue:'SEA', grp:null, round:'Round of 32', teams:null },
  { m:83,  date:'2026-07-02', time:'19:00', venue:'TOR', grp:null, round:'Round of 32', teams:null },
  { m:84,  date:'2026-07-02', time:'15:00', venue:'LAR', grp:null, round:'Round of 32', teams:null },
  { m:85,  date:'2026-07-02', time:'23:00', venue:'VAN', grp:null, round:'Round of 32', teams:null },
  { m:86,  date:'2026-07-03', time:'18:00', venue:'MIA', grp:null, round:'Round of 32', teams:null },
  { m:87,  date:'2026-07-03', time:'21:30', venue:'KC',  grp:null, round:'Round of 32', teams:null },
  { m:88,  date:'2026-07-03', time:'14:00', venue:'DAL', grp:null, round:'Round of 32', teams:null },

  // ── ROUND OF 16 ──────────────────────────────────────────────────────────
  { m:89,  date:'2026-07-04', time:'17:00', venue:'PHI', grp:null, round:'Round of 16', teams:null },
  { m:90,  date:'2026-07-04', time:'13:00', venue:'HOU', grp:null, round:'Round of 16', teams:null },
  { m:91,  date:'2026-07-05', time:'16:00', venue:'NYC', grp:null, round:'Round of 16', teams:null },
  { m:92,  date:'2026-07-05', time:'20:00', venue:'MEX', grp:null, round:'Round of 16', teams:null },
  { m:93,  date:'2026-07-06', time:'15:00', venue:'DAL', grp:null, round:'Round of 16', teams:null },
  { m:94,  date:'2026-07-06', time:'20:00', venue:'SEA', grp:null, round:'Round of 16', teams:null },
  { m:95,  date:'2026-07-07', time:'12:00', venue:'ATL', grp:null, round:'Round of 16', teams:null },
  { m:96,  date:'2026-07-07', time:'16:00', venue:'VAN', grp:null, round:'Round of 16', teams:null },

  // ── QUARTERFINALS ────────────────────────────────────────────────────────
  { m:97,  date:'2026-07-09', time:'16:00', venue:'BOS', grp:null, round:'Quarterfinals', teams:null },
  { m:98,  date:'2026-07-10', time:'15:00', venue:'LAR', grp:null, round:'Quarterfinals', teams:null },
  { m:99,  date:'2026-07-11', time:'17:00', venue:'MIA', grp:null, round:'Quarterfinals', teams:null },
  { m:100, date:'2026-07-11', time:'21:00', venue:'KC',  grp:null, round:'Quarterfinals', teams:null },

  // ── SEMIFINALS ───────────────────────────────────────────────────────────
  { m:101, date:'2026-07-14', time:'15:00', venue:'DAL', grp:null, round:'Semifinal', teams:null },
  { m:102, date:'2026-07-15', time:'15:00', venue:'ATL', grp:null, round:'Semifinal', teams:null },

  // ── THIRD PLACE ──────────────────────────────────────────────────────────
  { m:103, date:'2026-07-18', time:'17:00', venue:'MIA', grp:null, round:'3rd Place', teams:null },

  // ── FINAL ────────────────────────────────────────────────────────────────
  { m:104, date:'2026-07-19', time:'15:00', venue:'NYC', grp:null, round:'Final', teams:null },
];

// ─── BUILD LOOKUP MAP ─────────────────────────────────────────────────────────
const SCHED_MAP = {};
SCHEDULE.forEach(s => SCHED_MAP[s.m] = s);

// ─── TIMEZONE SYSTEM ──────────────────────────────────────────────────────────
// All times in data are US Eastern (UTC-4 during DST, which covers entire tournament).
// We parse them as America/New_York and reformat in whatever TZ the user picks.

const TIMEZONES = [
  { id:'Asia/Tehran',        label:'Tehran',        labelFa:'تهران',       flag:'🇮🇷', offset:'UTC+3:30' },
  { id:'America/New_York',   label:'New York (ET)', labelFa:'نیویورک (ET)',flag:'🇺🇸', offset:'UTC-4'    },
  { id:'America/Los_Angeles',label:'Los Angeles',   labelFa:'لس‌آنجلس',   flag:'🇺🇸', offset:'UTC-7'    },
  { id:'America/Chicago',    label:'Chicago (CT)',   labelFa:'شیکاگو (CT)',flag:'🇺🇸', offset:'UTC-5'    },
  { id:'Europe/London',      label:'London (BST)',   labelFa:'لندن',       flag:'🇬🇧', offset:'UTC+1'    },
  { id:'Europe/Paris',       label:'Paris (CEST)',   labelFa:'پاریس',      flag:'🇫🇷', offset:'UTC+2'    },
  { id:'Asia/Dubai',         label:'Dubai',          labelFa:'دبی',        flag:'🇦🇪', offset:'UTC+4'    },
  { id:'Asia/Karachi',       label:'Karachi',        labelFa:'کراچی',      flag:'🇵🇰', offset:'UTC+5'    },
  { id:'Asia/Kolkata',       label:'India (IST)',    labelFa:'هند',        flag:'🇮🇳', offset:'UTC+5:30' },
  { id:'Asia/Tokyo',         label:'Tokyo',          labelFa:'توکیو',      flag:'🇯🇵', offset:'UTC+9'    },
  { id:'Australia/Sydney',   label:'Sydney',         labelFa:'سیدنی',      flag:'🇦🇺', offset:'UTC+10'   },
];

const TZ_KEY = 'wc2026_tz';
let activeTZ = localStorage.getItem(TZ_KEY) || 'Asia/Tehran';

function setTZ(tz) {
  activeTZ = tz;
  localStorage.setItem(TZ_KEY, tz);
  // Update all TZ picker buttons on page
  document.querySelectorAll('.tz-btn').forEach(b =>
    b.classList.toggle('on', b.dataset.tz === tz));
  // Re-inject schedule with new times
  injectSchedule();
  // If schedule page renderer exists, re-render
  if (typeof renderContent === 'function') renderContent();
  if (typeof renderCountdown === 'function') renderCountdown();
}

// Parse a match's kickoff as an absolute UTC moment.
// Data times are America/New_York (EDT = UTC-4 for the whole June–July tournament).
function kickoffUTC(s) {
  const [h, m] = s.time.split(':').map(Number);
  // Tournament runs entirely during EDT (UTC-4)
  const etOffsetMs = 4 * 3600000;
  const [Y, Mo, D] = s.date.split('-').map(Number);
  const utcMs = Date.UTC(Y, Mo - 1, D, h, m) + etOffsetMs;
  return new Date(utcMs);
}

function tzLabel() {
  const t = TIMEZONES.find(t => t.id === activeTZ);
  return t ? t.label : activeTZ;
}

function tzShortName() {
  // Use Intl to get the short abbreviation (e.g. "IRST", "EDT")
  try {
    const fmt = new Intl.DateTimeFormat('en-US', { timeZone: activeTZ, timeZoneName:'short' });
    const parts = fmt.formatToParts(new Date());
    const tzPart = parts.find(p => p.type === 'timeZoneName');
    return tzPart ? tzPart.value : '';
  } catch { return ''; }
}

// ─── STATUS HELPERS ───────────────────────────────────────────────────────────
function matchStatus(s) {
  const now  = new Date();
  const kick = kickoffUTC(s);
  const end  = new Date(kick.getTime() + 105 * 60000);
  // "today" check in user's selected timezone
  const todayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: activeTZ });
  const nowStr   = todayFmt.format(now);
  const kickStr  = todayFmt.format(kick);
  if (now > end)   return 'past';
  if (now >= kick) return 'live';
  if (nowStr === kickStr) return 'today';
  return 'upcoming';
}

function formatMatchDate(s) {
  const kick = kickoffUTC(s);
  return kick.toLocaleDateString('en-US', {
    timeZone: activeTZ,
    weekday:'short', month:'short', day:'numeric'
  });
}

function formatMatchTime(s) {
  const kick = kickoffUTC(s);
  const tzName = tzShortName();
  const time = kick.toLocaleTimeString('en-US', {
    timeZone: activeTZ,
    hour:'numeric', minute:'2-digit', hour12: true
  });
  return `${time} ${tzName}`;
}

function countdownTo(s) {
  const kick = kickoffUTC(s);
  const diff = kick - new Date();
  if (diff <= 0) return null;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (d > 0)  return `${d}d ${h}h`;
  if (h > 0)  return `${h}h ${m}m`;
  return `${m}m`;
}

// ─── RENDER TZ PICKER (injected into any .tz-picker-host element) ─────────────
function renderTZPicker(host) {
  if (!host) return;
  const isFa = document.body.classList.contains('fa');
  host.innerHTML = `<div class="tz-picker">
    <span class="tz-picker-label">${isFa ? 'منطقه زمانی:' : 'Time Zone:'}</span>
    ${TIMEZONES.map(t => `
      <button class="tz-btn${t.id === activeTZ ? ' on' : ''}"
              data-tz="${t.id}"
              onclick="setTZ('${t.id}')"
              title="${t.label} (${t.offset})">
        ${t.flag} <span class="tz-btn-label">${isFa ? t.labelFa : t.label}</span>
      </button>`).join('')}
  </div>`;
}

// Re-render all pickers on lang toggle (hook into existing toggleLang)
const _origToggleLang = typeof toggleLang !== 'undefined' ? toggleLang : null;

// ─── INJECT SCHEDULE INFO INTO MATCH CARDS ───────────────────────────────────
function injectSchedule() {
  document.querySelectorAll('.mc').forEach(card => {
    const mnEl = card.querySelector('.mn');
    if (!mnEl) return;
    const num = parseInt(mnEl.textContent.trim(), 10);
    const s   = SCHED_MAP[num];
    if (!s) return;

    // Remove existing injected row to re-inject with fresh status
    const existing = card.querySelector('.mc-sched');
    if (existing) existing.remove();
    card.classList.remove('mc-live','mc-today','mc-past','mc-upcoming');

    const status  = matchStatus(s);
    const venue   = VENUES[s.venue];
    const dateStr = formatMatchDate(s);
    const timeStr = formatMatchTime(s);
    const cd      = countdownTo(s);

    let statusBadge = '';
    if (status === 'live')     statusBadge = '<span class="ms-badge ms-live">LIVE</span>';
    else if (status === 'today') statusBadge = '<span class="ms-badge ms-today">TODAY</span>';
    else if (status === 'past')  statusBadge = '<span class="ms-badge ms-past">FT</span>';

    const cdHtml = (cd && status === 'upcoming')
      ? `<span class="ms-cd">${cd}</span>` : '';

    card.insertAdjacentHTML('beforeend',
      `<div class="mc-sched">
        ${statusBadge}
        <span class="ms-date">${dateStr}</span>
        <span class="ms-time">${timeStr}</span>
        <span class="ms-venue">${venue.short}</span>
        ${cdHtml}
      </div>`);

    card.classList.add(`mc-${status}`);
  });
}

// ─── AUTO-REFRESH EVERY MINUTE ────────────────────────────────────────────────
function startScheduleUpdater() {
  // Render TZ picker on groups/bracket pages (host element may not exist on schedule.html)
  const host = document.getElementById('tz-picker-host');
  if (host) renderTZPicker(host);

  injectSchedule();

  const msUntilNextMinute = 60000 - (Date.now() % 60000);
  setTimeout(() => {
    injectSchedule();
    setInterval(injectSchedule, 60000);
  }, msUntilNextMinute);
}

// Re-render TZ picker labels when language toggled (for groups/bracket pages)
document.addEventListener('DOMContentLoaded', () => {
  startScheduleUpdater();

  // Patch toggleLang only once, and only if not already patched by schedule.html
  if (typeof toggleLang === 'function' && !toggleLang._tzPatched) {
    const _orig = toggleLang;
    toggleLang = function() {
      _orig();
      const h = document.getElementById('tz-picker-host');
      if (h) renderTZPicker(h);
    };
    toggleLang._tzPatched = true;
  }
});
