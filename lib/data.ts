export type Lang = "zh" | "en";

export type GalleryItem = {
  kind: "placeholder" | "photo";
  src?: string;
  badge: string;
  title: string;
  subtitle: string;
  cap: string;
};

export interface SiteContent {
  profile: {
    namePre: string;
    nameAccent: string;
    namePost: string;
    fullName: string;
    tag: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    contactTime: string;
  };
  stats: { n: string; l: string }[];
  aboutMeta: { k: string; v: string }[];
  gallery: GalleryItem[];
  jobs: { yr: string; role: string; org: string; desc: string }[];
  skills: { nm: string; pc: number }[];
  certs: string[];
  languages: { name: string; level: string }[];
  nav: { href: string; label: string }[];
  ui: {
    aboutLabel: string;
    galleryLabel: string;
    galleryHeading: string;
    galleryNote: string;
    galleryNoteTag: string;
    workLabel: string;
    workHeading: string;
    skillsLabel: string;
    skillsHeading: string;
    certsLabel: string;
    langLabel: string;
    contactLabel: string;
    contactTop: string;
    contactBottom: string;
    contactHours: string;
    heroCardLabel: string;
    heroCardSub: string;
    toggleTo: string;
  };
}

const zh: SiteContent = {
  profile: {
    namePre: "許",
    nameAccent: "芳",
    namePost: "瑜",
    fullName: "許芳瑜",
    tag: "行政專業 ・ 12 年資歷",
    role: "把混亂變秩序的人。從訂單、財務、出貨到籌辦年度大會 —— 行政是我的專業，細節是我的語言。",
    email: "z0930000580@gmail.com",
    phone: "0930-000-580",
    location: "新北市樹林區",
    contactTime: "13:00–22:00",
  },
  stats: [
    { n: "12+", l: "年工作經歷" },
    { n: "10+", l: "張專業證照" },
    { n: "8", l: "人團隊管理" },
    { n: "3", l: "語言能力" },
  ],
  aboutMeta: [
    { k: "現職", v: "世界華人工商婦女協會｜國際社團會務秘書" },
    { k: "學歷", v: "致理科技大學・企業管理（選修會議展覽）" },
    { k: "所在地", v: "新北市樹林區" },
    { k: "就業狀態", v: "在職中・錄取後一個月可上班" },
  ],
  gallery: [
    { kind: "placeholder", badge: "個人照", title: "許芳瑜", subtitle: "Fang-Yu Hsu", cap: "＊ 此為佔位圖，待提供照片替換" },
    { kind: "photo", src: "/jijin.png", badge: "現職", title: "行政人員", subtitle: "極勁股份", cap: "訂單・財務・採購・活動籌辦" },
    { kind: "photo", src: "/fanfantang.png", badge: "創業", title: "飯飯堂", subtitle: "自行開店", cap: "從 0 到 1 的小店經營" },
    { kind: "photo", src: "/kids-playground.png", badge: "管理", title: "門市組長", subtitle: "建築樂園", cap: "帶領 5–8 人團隊" },
    { kind: "photo", src: "/internship.png", badge: "會展", title: "展覽實習", subtitle: "石尚・人才天下", cap: "會議展覽專業基礎" },
  ],
  jobs: [
    {
      yr: "2023→",
      role: "行政人員 ・ 國際社團會務秘書",
      org: "極勁股份有限公司 ／ 世界華人工商婦女協會",
      desc: "訂單建檔、銀行收支、零用金、薪資計算、線上轉帳、保固卡製作、機器進銷存、計算獎金、客訴處理、對接分公司與廠商、採購，並籌辦年度大會、尾牙與員工旅遊。",
    },
    { yr: "2022", role: "自行開店・飯飯堂", org: "餐飲業 ／ 新北樹林", desc: "出攤前置作業、製作飯糰、餐點介紹、盤點叫貨。" },
    { yr: "2020", role: "門市人員（組長）", org: "Kid's 建築樂園 ／ 新北中和", desc: "管理 5–8 人，負責銷售、每月盤點與零用金、現場應變、客訴、報表更新、幼兒園團體方案接洽。" },
    { yr: "2018", role: "票務人員", org: "力行國際 ／ 新北樹林", desc: "管理 9–12 人，負責銷售、排班、每週每月盤點、零用金計算、現場應變與客訴處理。" },
    { yr: "2014", role: "展場工讀・安親助教・外場吧檯", org: "石尚企業 ／ 何嘉仁 ／ 地平線一號 等", desc: "會展工讀、教學助理與餐飲服務，奠定服務應對與會議展覽基本功。" },
  ],
  skills: [
    { nm: "行政事務 / 文書處理", pc: 95 },
    { nm: "Excel / 資料建檔", pc: 90 },
    { nm: "財務 / 收支 / 薪資", pc: 85 },
    { nm: "客訴處理 / 接待", pc: 88 },
    { nm: "採購 / 進銷存", pc: 82 },
    { nm: "活動 / 會展籌辦", pc: 80 },
  ],
  certs: [
    "會議展覽專業人員認證",
    "EEC 企業電子化助理規劃師",
    "TQC-DK 電子商務概論",
    "TQC-OA 中文輸入",
    "丙級飲料調製",
    "丙級餐旅服務",
    "JLPT N5",
    "TOEIC 多益",
    "PMA 專案助理",
    "兩岸經貿商務人才",
  ],
  languages: [
    { name: "英文", level: "聽說讀寫・略懂" },
    { name: "日文", level: "聽說讀寫・略懂・JLPT N5" },
    { name: "台語", level: "中等" },
  ],
  nav: [
    { href: "#about", label: "關於" },
    { href: "#gallery", label: "歷程" },
    { href: "#work", label: "經歷" },
    { href: "#skills", label: "技能" },
    { href: "#contact", label: "聯絡" },
  ],
  ui: {
    aboutLabel: "關於我",
    galleryLabel: "職涯切片",
    galleryHeading: "橫向回顧每個身分",
    galleryNote: "← 滑動探索 ・ SCROLL →",
    galleryNoteTag: "／ 個人照為佔位，待替換",
    workLabel: "完整工作經歷",
    workHeading: "12 年・一段段累積",
    skillsLabel: "核心技能",
    skillsHeading: "擅長的事",
    certsLabel: "資格認證",
    langLabel: "語言能力",
    contactLabel: "聯絡",
    contactTop: "一起",
    contactBottom: "共事吧。",
    contactHours: "聯絡時間",
    heroCardLabel: "個人照",
    heroCardSub: "待替換",
    toggleTo: "EN",
  },
};

const en: SiteContent = {
  profile: {
    namePre: "Fang-",
    nameAccent: "Yu",
    namePost: " Hsu",
    fullName: "Fang-Yu Hsu",
    tag: "Admin Professional ・ 12 Yrs Exp",
    role: "The person who turns chaos into order. From order entry and finance to organizing annual conferences — administration is my craft, detail is my language.",
    email: "z0930000580@gmail.com",
    phone: "0930-000-580",
    location: "Shulin Dist., New Taipei City",
    contactTime: "13:00–22:00",
  },
  stats: [
    { n: "12+", l: "Years experience" },
    { n: "10+", l: "Certifications" },
    { n: "8", l: "People managed" },
    { n: "3", l: "Languages" },
  ],
  aboutMeta: [
    { k: "Current", v: "Intl. Affairs Secretary — World Chinese Business Women's Assoc." },
    { k: "Education", v: "Chihlee Univ. of Technology — Business Admin. (MICE elective)" },
    { k: "Location", v: "Shulin District, New Taipei City" },
    { k: "Status", v: "Employed・Available one month after offer" },
  ],
  gallery: [
    { kind: "placeholder", badge: "Photo", title: "Fang-Yu Hsu", subtitle: "Portrait", cap: "* Placeholder image, to be replaced" },
    { kind: "photo", src: "/jijin.png", badge: "Current", title: "Administrator", subtitle: "Ji-Jin Corp.", cap: "Orders・Finance・Procurement・Events" },
    { kind: "photo", src: "/fanfantang.png", badge: "Startup", title: "Fan-Fan-Tang", subtitle: "My own shop", cap: "Built a small eatery from scratch" },
    { kind: "photo", src: "/kids-playground.png", badge: "Manage", title: "Store Lead", subtitle: "Kid's Awesome Land", cap: "Led a team of 5–8" },
    { kind: "photo", src: "/internship.png", badge: "MICE", title: "Expo Intern", subtitle: "Shihshang・Talent", cap: "Foundation in exhibitions" },
  ],
  jobs: [
    {
      yr: "2023→",
      role: "Administrator ・ Intl. Affairs Secretary",
      org: "Ji-Jin Corp. ／ World Chinese Business Women's Assoc.",
      desc: "Order entry, banking, petty cash, payroll, online transfers, warranty cards, inventory, bonus calculation, complaint handling, liaison with branches and vendors, procurement — plus organizing the annual conference, year-end party and staff trip.",
    },
    { yr: "2022", role: "Own Shop ・ Fan-Fan-Tang", org: "F&B ／ Shulin, New Taipei", desc: "Stall prep, making rice balls, menu introduction, stocktaking and ordering." },
    { yr: "2020", role: "Store Staff (Lead)", org: "Kid's Awesome Land ／ Zhonghe", desc: "Led 5–8 staff: sales, monthly stocktake & petty cash, on-site handling, complaints, report updates and kindergarten group plans." },
    { yr: "2018", role: "Ticketing Staff", org: "Lixing Intl. ／ Shulin", desc: "Led 9–12 staff: sales, scheduling, weekly/monthly stocktake, petty cash, on-site handling and complaints." },
    { yr: "2014", role: "Expo Staff・Tutor・Bar & Floor", org: "Shihshang ／ Hess ／ Horizon No.1, etc.", desc: "Expo part-time, teaching assistant and F&B service — building service and MICE fundamentals." },
  ],
  skills: [
    { nm: "Admin / Documentation", pc: 95 },
    { nm: "Excel / Data Entry", pc: 90 },
    { nm: "Finance / Payroll", pc: 85 },
    { nm: "Complaints / Reception", pc: 88 },
    { nm: "Procurement / Inventory", pc: 82 },
    { nm: "Events / MICE Planning", pc: 80 },
  ],
  certs: [
    "MICE Professional Certification",
    "EEC e-Business Assistant Planner",
    "TQC-DK E-commerce",
    "TQC-OA Chinese Typing",
    "Beverage Preparation (Class C)",
    "Hospitality Service (Class C)",
    "JLPT N5",
    "TOEIC",
    "PMA Project Assistant",
    "Cross-Strait Business Talent",
  ],
  languages: [
    { name: "English", level: "Basic — L / S / R / W" },
    { name: "Japanese", level: "Basic・JLPT N5" },
    { name: "Taiwanese", level: "Intermediate" },
  ],
  nav: [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Journey" },
    { href: "#work", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  ui: {
    aboutLabel: "About Me",
    galleryLabel: "Career Snapshots",
    galleryHeading: "Scroll through each role",
    galleryNote: "← DRAG ・ SCROLL →",
    galleryNoteTag: "／ portrait is a placeholder",
    workLabel: "Full Experience",
    workHeading: "12 years, step by step",
    skillsLabel: "Core Skills",
    skillsHeading: "What I do well",
    certsLabel: "Certifications",
    langLabel: "Languages",
    contactLabel: "Contact",
    contactTop: "Let's work",
    contactBottom: "together.",
    contactHours: "Contact hours",
    heroCardLabel: "Photo",
    heroCardSub: "to be replaced",
    toggleTo: "中",
  },
};

export const content: Record<Lang, SiteContent> = { zh, en };
