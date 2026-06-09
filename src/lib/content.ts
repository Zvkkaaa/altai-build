// Localized content modules — shaped like CMS records so they can be
// swapped to Lovable Cloud queries without touching components.
import type { Locale } from "./i18n";
import projectOffice from "@/assets/project-office.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectGov from "@/assets/project-government.jpg";
import projectLuxury from "@/assets/project-luxury.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import amgalanHero from "@/assets/amgalan-residence-hero.jpg";
import amgalanTowers from "@/assets/amgalan-residence-towers.jpg";
import amgalanMasterplan from "@/assets/amgalan-residence-masterplan.jpg";
import amgalanAmenities from "@/assets/amgalan-residence-amenities.jpg";
import amgalanInterior from "@/assets/amgalan-residence-interior.jpg";
import amgalanLocation from "@/assets/amgalan-residence-location.jpg";
import amgalanSecurity from "@/assets/amgalan-residence-security.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

type L<T> = Record<Locale, T>;

export type ProjectCategory =
  | "apartment" | "office" | "government" | "industrial" | "infrastructure" | "luxury";

export interface Project {
  slug: string;
  title: L<string>;
  category: ProjectCategory;
  location: L<string>;
  status: "completed" | "ongoing" | "planned";
  year: number;
  image: string;
  description: L<string>;
}

export const amgalanGallery = [
  amgalanHero, amgalanTowers, amgalanMasterplan, amgalanAmenities, amgalanInterior, amgalanLocation, amgalanSecurity,
];

export const projects: Project[] = [
  {
    slug: "amgalan-residence",
    title: { mn: "AMGALAN RESIDENCE", en: "AMGALAN RESIDENCE" },
    category: "apartment",
    location: { mn: "Улаанбаатар, Богд уулын бэлд", en: "Foot of Bogd Mountain, Ulaanbaatar" },
    status: "ongoing", year: 2026, image: amgalanHero,
    description: {
      mn: "5 блок, 15 давхар орон сууцны цогцолбор. 100% цутгамал төмөр бетон бүтэц, эрчим хүчний хэмнэлттэй шийдэл, нарны хавтан, 24 цагийн харуул хамгаалалт, далд болон ил зогсоол.",
      en: "Five-block, 15-storey residential complex. 100% cast-in-place reinforced concrete, energy-efficient design, rooftop solar, 24/7 security, heated underground and surface parking.",
    },
  },
  {
    slug: "oyu-tolgoi-shaft-2",
    title: { mn: "Оюу Толгой — Босоо ам 2", en: "Oyu Tolgoi — Shaft 2" },
    category: "industrial",
    location: { mn: "Өмнөговь аймаг", en: "Umnugovi Province" },
    status: "completed", year: 2017, image: projectIndustrial,
    description: {
      mn: "Уурхайн агаар халаах байгууламж, наран байрны түр оффис, дэд бүтцийн ажлууд (НБИК ХХК хамтран).",
      en: "Mine air-heating facility, Naran site office, and supporting infrastructure (delivered with NBIK LLC).",
    },
  },
  {
    slug: "shangri-la-ub",
    title: { mn: "Шангри-Ла зочид буудал", en: "Shangri-La Hotel" },
    category: "luxury",
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    status: "completed", year: 2013, image: projectLuxury,
    description: {
      mn: "Олон улсын 5 одтой зочид буудлын барилга угсралтын ажилд оролцсон.",
      en: "Contributed to construction works on the international 5-star hotel complex.",
    },
  },
  {
    slug: "new-ulaanbaatar-airport",
    title: { mn: "Шинэ Чингис хаан нисэх буудал", en: "New Chinggis Khaan Airport" },
    category: "infrastructure",
    location: { mn: "Хөшигийн хөндий", en: "Khushig Valley" },
    status: "completed", year: 2014, image: projectInfra,
    description: {
      mn: "Шинэ нисэх буудлын дэд бүтэц, барилга угсралтын ажлууд.",
      en: "Infrastructure and construction works for the new international airport.",
    },
  },
  {
    slug: "cmcc-training",
    title: { mn: "СиЭмТиСи Сургалтын төв", en: "CMCC Training Centre" },
    category: "office",
    location: { mn: "Оюу Толгой уурхай", en: "Oyu Tolgoi Mine" },
    status: "completed", year: 2013, image: projectOffice,
    description: {
      mn: "Уул уурхайн сургалтын төвийн иж бүрэн барилга.",
      en: "Full-scope construction of the mining training centre.",
    },
  },
  {
    slug: "manlai-sports-hall",
    title: { mn: "Манлай Спорт танхим", en: "Manlai Sports Hall" },
    category: "government",
    location: { mn: "Өмнөговь, Манлай сум", en: "Manlai Soum, Umnugovi" },
    status: "completed", year: 2015, image: projectGov,
    description: {
      mn: "Орон нутгийн спорт танхимын төсөл.",
      en: "Regional sports hall delivered for the local administration.",
    },
  },
];

export interface Service {
  slug: string;
  title: L<string>;
  summary: L<string>;
  features: L<string[]>;
  image: string;
  gallery?: string[];
}

export const services: Service[] = [
  {
    slug: "residential",
    title: { mn: "Орон сууцны барилга", en: "Residential Construction" },
    summary: {
      mn: "Олон давхар орон сууц, хотхон, цогцолбор, иргэний барилгын зураг төсөл, гүйцэтгэл, хяналт.",
      en: "Design, delivery and supervision of multi-storey residential blocks and civil buildings.",
    },
    features: {
      mn: ["Техникийн нөхцөл, судалгаа", "Архитектурын зураг төсөл", "Барилгын угсралт", "Чанарын хяналт", "Ашиглалтад хүлээлгэн өгөх"],
      en: ["Technical feasibility", "Architectural design", "Construction & assembly", "Quality control", "Handover & commissioning"],
    },
    image: amgalanTowers,
    gallery: [amgalanHero, amgalanInterior, amgalanAmenities],
  },
  {
    slug: "commercial",
    title: { mn: "Арилжааны барилга", en: "Commercial Construction" },
    summary: {
      mn: "Оффис, худалдааны төв, үйлчилгээний цогцолборын иж бүрэн шийдэл.",
      en: "End-to-end delivery of offices, retail centres and service hubs.",
    },
    features: {
      mn: ["Концепц төлөвлөлт", "Төсөв", "Барилгын менежмент", "Дотоод засал", "Хүлээлгэн өгөх"],
      en: ["Concept planning", "Cost estimation", "Construction management", "Interior fit-out", "Handover"],
    },
    image: projectOffice,
    gallery: [projectLuxury, projectGov],
  },
  {
    slug: "infrastructure",
    title: { mn: "Дэд бүтэц", en: "Infrastructure" },
    summary: {
      mn: "Зам, гүүр, инженерийн шугам сүлжээ, нийтийн үйлчилгээний байгууламж.",
      en: "Roads, bridges, utility networks and public service facilities.",
    },
    features: {
      mn: ["Судалгаа, төлөвлөлт", "Инженерийн шийдэл", "Угсралт", "Туршилт", "Хяналт"],
      en: ["Surveys & planning", "Engineering solutions", "Assembly", "Testing", "Supervision"],
    },
    image: projectInfra,
    gallery: [projectIndustrial, projectGov],
  },
  {
    slug: "architecture",
    title: { mn: "Архитектурын зураг төсөл", en: "Architectural Design" },
    summary: {
      mn: "Концепцээс эхлэн ажлын зураг хүртэлх архитектурын бүх үе шат.",
      en: "Every stage from concept through construction documentation.",
    },
    features: {
      mn: ["Концепц дизайн", "3D визуал", "Ажлын зураг", "BIM шийдэл", "Барилгын зөвшөөрөл"],
      en: ["Concept design", "3D visualisation", "Working drawings", "BIM solutions", "Building permits"],
    },
    image: amgalanMasterplan,
    gallery: [amgalanLocation, amgalanInterior],
  },
  {
    slug: "construction-assembly",
    title: { mn: "Барилга угсралт", en: "Construction & Assembly" },
    summary: {
      mn: "Цутгамал төмөр бетон, металл бүтээц, угсармал бүтээцийн иж бүрэн угсралт.",
      en: "Reinforced concrete, steel and precast structural assembly to international standards.",
    },
    features: {
      mn: ["Суурийн ажил", "Каркасын угсралт", "Хана, дам нуруу", "Хучилт, дээвэр", "Гадна засал"],
      en: ["Foundations", "Frame assembly", "Walls & beams", "Slabs & roofing", "Façade works"],
    },
    image: heroConstruction,
    gallery: [projectResidential, projectIndustrial],
  },
  {
    slug: "engineering-consulting",
    title: { mn: "Инженерийн зөвлөгөө", en: "Engineering Consulting" },
    summary: {
      mn: "Бүтээц, цахилгаан, механик, сантехник болон хяналтын зөвлөх үйлчилгээ.",
      en: "Structural, electrical, mechanical, plumbing and supervision consulting.",
    },
    features: {
      mn: ["Техникийн үнэлгээ", "Инженерийн зөвлөгөө", "Эрсдэлийн үнэлгээ", "Хяналт", "Тайлагнал"],
      en: ["Technical assessment", "Engineering consulting", "Risk assessment", "Supervision", "Reporting"],
    },
    image: news1,
    gallery: [news2, news3],
  },
  {
    slug: "supply",
    title: { mn: "Хангамж", en: "Supply" },
    summary: {
      mn: "Барилгын материал, тоног төхөөрөмж, сэлбэг хэрэгслийн нийлүүлэлт.",
      en: "Supply of construction materials, equipment and spare parts.",
    },
    features: {
      mn: ["Бетон, цемент", "Металл бүтээц", "Тусгай хэрэгсэл", "Логистик", "Агуулахын үйлчилгээ"],
      en: ["Concrete & cement", "Steel structures", "Special tools", "Logistics", "Warehousing"],
    },
    image: projectIndustrial,
  },
  {
    slug: "lifting-systems",
    title: { mn: "Өргөх байгууламж", en: "Lifting Systems" },
    summary: {
      mn: "Кран, өргөгч төхөөрөмж, барилгын лифтийн угсралт, ашиглалт.",
      en: "Cranes, hoists and construction lifts — installation and operation.",
    },
    features: {
      mn: ["Цамхаг кран", "Гадна лифт", "Барилгын өргөгч", "Угсралт, буулгалт", "Ашиглалт, үйлчилгээ"],
      en: ["Tower cranes", "External lifts", "Construction hoists", "Erection & dismantling", "Operation & service"],
    },
    image: amgalanAmenities,
  },
  {
    slug: "geodesy",
    title: { mn: "Геодезийн хэмжилт", en: "Geodetic Survey" },
    summary: {
      mn: "Газар хэмжилт, тэгшилгээний хяналт, барилгын тэнхлэгийн засвар.",
      en: "Land survey, levelling control and structural axis verification.",
    },
    features: {
      mn: ["Топографийн зураглал", "Тэнхлэг тавилт", "Тэгшилгээ", "Хяналтын хэмжилт", "BIM координатчлал"],
      en: ["Topographic mapping", "Axis setting", "Levelling", "Monitoring", "BIM coordination"],
    },
    image: news2,
  },
  {
    slug: "equipment-rental",
    title: { mn: "Тоног төхөөрөмжийн засвар, түрээс", en: "Equipment Service & Rental" },
    summary: {
      mn: "Барилгын тоног төхөөрөмжийн засвар үйлчилгээ, түрээс.",
      en: "Repair, maintenance and rental of construction equipment.",
    },
    features: {
      mn: ["Засвар үйлчилгээ", "Урт богино хугацааны түрээс", "Операторын үйлчилгээ", "Сэлбэг хэрэгсэл", "Тээвэр"],
      en: ["Repair & service", "Long & short-term rental", "Operator service", "Spare parts", "Transport"],
    },
    image: projectLuxury,
  },
  {
    slug: "scaffolding",
    title: { mn: "Барилгын шат угсрах, буулгах", en: "Scaffolding Erection & Dismantling" },
    summary: {
      mn: "Метал шат, тулгуур бүтээцийн угсралт болон буулгалтын мэргэжлийн үйлчилгээ.",
      en: "Professional scaffolding erection, modification and dismantling services.",
    },
    features: {
      mn: ["Зураг төсөл", "Угсралт", "Хяналтын баталгаажуулалт", "Аюулгүй ажиллагаа", "Буулгалт"],
      en: ["Design", "Erection", "Inspection sign-off", "Safety control", "Dismantling"],
    },
    image: projectGov,
  },
];

export interface NewsPost {
  slug: string;
  title: L<string>;
  excerpt: L<string>;
  category: L<string>;
  date: string;
  image: string;
}

export const news: NewsPost[] = [
  {
    slug: "amgalan-residence-sales-open",
    title: { mn: "AMGALAN RESIDENCE — борлуулалт нээгдлээ", en: "AMGALAN RESIDENCE — sales now open" },
    excerpt: { mn: "5 блок, 15 давхар, 46-70 м² хүртэлх 2-3 өрөө орон сууцны борлуулалт эхэллээ.", en: "Two- and three-bedroom units, 46-70 m², across our 5-block, 15-storey complex are now available." },
    category: { mn: "Борлуулалт", en: "Sales" },
    date: "2026-04-10", image: news1,
  },
  {
    slug: "top-100-mongolia",
    title: { mn: "НБИК ХХК — Монгол улсын ТОП 100 ААН-ийн нэг", en: "NBIK LLC named in Mongolia's TOP 100 companies" },
    excerpt: { mn: "Хамтрагч НБИК ХХК 2019 онд Монгол улсын ТОП 100 аж ахуйн нэгжид багтсан.", en: "Our partner NBIK LLC was recognised among Mongolia's TOP 100 enterprises in 2019." },
    category: { mn: "Хүлээн зөвшөөрөгдөл", en: "Recognition" },
    date: "2026-02-02", image: news2,
  },
  {
    slug: "best-construction-2019",
    title: { mn: "Шилдэг барилга угсралтын компани — 2018, 2019", en: "Best construction company — 2018, 2019" },
    excerpt: { mn: "Барилга, хот байгуулалтын яамнаас 2 жил дараалан шилдэг барилгын компаниар шалгарлаа.", en: "Recognised by the Ministry of Construction as best construction company two years running." },
    category: { mn: "Шагнал", en: "Awards" },
    date: "2026-01-20", image: news3,
  },
];

export interface TeamMember {
  name: string;
  role: L<string>;
  initials: string;
}

export const team: TeamMember[] = [
  { name: "Б. Энхбаатар", role: { mn: "Гүйцэтгэх захирал", en: "Chief Executive Officer" }, initials: "БЭ" },
  { name: "Д. Оюунчимэг", role: { mn: "Борлуулалтын захирал", en: "Sales Director" }, initials: "ДО" },
  { name: "Ц. Ганбат", role: { mn: "Ерөнхий инженер", en: "Chief Engineer" }, initials: "ЦГ" },
  { name: "С. Болормаа", role: { mn: "Санхүүгийн захирал", en: "Chief Financial Officer" }, initials: "СБ" },
];

export interface Testimonial {
  quote: L<string>;
  author: string;
  org: L<string>;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      mn: "Оюу Толгойн төслүүдэд цаг хугацаа, чанарын стандартыг өндөр түвшинд биелүүлдэг найдвартай хамтрагч.",
      en: "A reliable partner on Oyu Tolgoi projects — delivering to the highest quality and schedule standards.",
    },
    author: "Oyu Tolgoi",
    org: { mn: "Шилдэг хангагч — 2014, 2016", en: "Best supplier — 2014, 2016" },
  },
];

export interface JobPost {
  slug: string;
  title: L<string>;
  location: L<string>;
  type: L<string>;
  department: L<string>;
}

export const jobs: JobPost[] = [
  { slug: "site-engineer", title: { mn: "Талбайн инженер", en: "Site Engineer" }, location: { mn: "Улаанбаатар", en: "Ulaanbaatar" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "Гүйцэтгэл", en: "Operations" } },
  { slug: "sales-consultant", title: { mn: "Борлуулалтын зөвлөх", en: "Sales Consultant" }, location: { mn: "Улаанбаатар", en: "Ulaanbaatar" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "Борлуулалт", en: "Sales" } },
  { slug: "architect", title: { mn: "Архитектор", en: "Architect" }, location: { mn: "Улаанбаатар", en: "Ulaanbaatar" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "Дизайн", en: "Design" } },
];

export const partners = [
  { name: "NBIK", logo: "/partner-logos/nbik.png", featured: true },
  { name: "Oyu Tolgoi", logo: "/partner-logos/oyu-tolgoi.png" },
  { name: "MMSE", logo: "/partner-logos/mmse.png" },
  { name: "Jacobs", logo: "/partner-logos/jacobs.png" },
  { name: "Bayan Airag", logo: "/partner-logos/bayan-airag.png" },
  { name: "Хасу Мегаватт", logo: "/partner-logos/khasu-megawatt.png" },
  { name: "Golomt Bank", logo: "/partner-logos/golomt-bank.png" },
  { name: "HLB", logo: "/partner-logos/hlb.png" },
  { name: "Мандал Даатгал", logo: "/partner-logos/mandal-daatgal.png" },
  { name: "Samsung", logo: "/partner-logos/samsung.png" },
  { name: "Monadelphous", logo: "/partner-logos/monadelphous.png" },
  { name: "LG Hausys", logo: "/partner-logos/lg-hausys.png" },
  { name: "Steppe Arena", logo: "/partner-logos/steppe-arena.png" },
  { name: "Wave", logo: "/partner-logos/wave.png" },
  { name: "Shangri-La", logo: "/partner-logos/shangri-la.png" },
  { name: "Dayan Contract Mining", logo: "/partner-logos/dayan-contract-mining.png" },
  { name: "Worley", logo: "/partner-logos/worley.png" },
  { name: "Wagner CAT", logo: "/partner-logos/wagner-cat.png" },
  { name: "Global Auto Rental", logo: "/partner-logos/global-auto-rental.png" },
  { name: "Alimak", logo: "/partner-logos/alimak.png" },
  { name: "Huawei", logo: "/partner-logos/huawei.png" },
  { name: "MSM", logo: "/partner-logos/msm.png" },
];

export const stats = [
  { value: 15, suffix: "+", label: { mn: "Жилийн туршлага", en: "Years of experience" } },
  { value: 120, suffix: "+", label: { mn: "Хэрэгжүүлсэн төсөл", en: "Completed projects" } },
  { value: 500, suffix: "+", label: { mn: "Мэргэжлийн баг", en: "Professional team" } },
  { value: 100, suffix: "%", label: { mn: "Үйлчлүүлэгчийн сэтгэл ханамж", en: "Client satisfaction" } },
];
