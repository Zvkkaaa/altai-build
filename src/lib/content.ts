// Localized content modules — shaped like CMS records so they can be
// swapped to Lovable Cloud queries without touching components.
import type { Locale } from "./i18n";
import projectResidential from "@/assets/project-residential.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectGov from "@/assets/project-government.jpg";
import projectLuxury from "@/assets/project-luxury.jpg";
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

export const projects: Project[] = [
  {
    slug: "khangai-residences",
    title: { mn: "Хангай Резиденс", en: "Khangai Residences" },
    category: "apartment",
    location: { mn: "Улаанбаатар, Хан-Уул дүүрэг", en: "Khan-Uul District, Ulaanbaatar" },
    status: "completed", year: 2024, image: projectResidential,
    description: {
      mn: "480 айлын орон сууцны иж бүрэн цогцолбор. Ажиглалтын дунд талбай, далд зогсоол, эрчим хүчний А зэрэг.",
      en: "A 480-unit residential complex with central courtyard, underground parking, and A-class energy rating.",
    },
  },
  {
    slug: "central-tower",
    title: { mn: "Сэнтрал Тауэр", en: "Central Tower" },
    category: "office",
    location: { mn: "Сүхбаатар дүүрэг", en: "Sukhbaatar District" },
    status: "completed", year: 2023, image: projectOffice,
    description: {
      mn: "32 давхар, А зэрэглэлийн оффисын барилга. LEED Gold гэрчилгээтэй.",
      en: "32-storey Grade-A office tower. LEED Gold certified.",
    },
  },
  {
    slug: "tuul-bridge",
    title: { mn: "Туул голын гүүр", en: "Tuul River Bridge" },
    category: "infrastructure",
    location: { mn: "Төв аймаг", en: "Tuv Province" },
    status: "completed", year: 2022, image: projectInfra,
    description: {
      mn: "640 метр урт автозамын гүүр, 4 эгнээ, өндөр ачаалал даах загвар.",
      en: "640m highway bridge, four lanes, heavy-load engineered design.",
    },
  },
  {
    slug: "erdenet-plant",
    title: { mn: "Эрдэнэт үйлдвэрийн өргөтгөл", en: "Erdenet Plant Expansion" },
    category: "industrial",
    location: { mn: "Орхон аймаг", en: "Orkhon Province" },
    status: "ongoing", year: 2025, image: projectIndustrial,
    description: {
      mn: "Зэсийн баяжуулах үйлдвэрийн III ээлжийн өргөтгөл, 28,000 м² талбай.",
      en: "Phase-III expansion of the copper concentration plant, 28,000 m² floor area.",
    },
  },
  {
    slug: "ministry-hq",
    title: { mn: "Яамны төв байр", en: "Ministry Headquarters" },
    category: "government",
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    status: "completed", year: 2021, image: projectGov,
    description: {
      mn: "Төрийн захиргааны байгууллагын төв байрны иж бүрэн барилга.",
      en: "Fully equipped government administrative headquarters building.",
    },
  },
  {
    slug: "bogd-villa",
    title: { mn: "Богд Вилла", en: "Bogd Villa Estate" },
    category: "luxury",
    location: { mn: "Зайсан, Улаанбаатар", en: "Zaisan, Ulaanbaatar" },
    status: "completed", year: 2024, image: projectLuxury,
    description: {
      mn: "12 хувийн вилла, тансаг зэрэглэлийн дотоод засал, ландшафт.",
      en: "12 private villas with luxury interior fit-out and landscape design.",
    },
  },
];

export interface Service {
  slug: string;
  title: L<string>;
  summary: L<string>;
}

export const services: Service[] = [
  { slug: "residential", title: { mn: "Орон сууцны барилга", en: "Residential Construction" },
    summary: { mn: "Олон давхар орон сууц, цогцолбор, иргэний барилга.", en: "Multi-storey residential blocks, complexes, and civil buildings." } },
  { slug: "commercial", title: { mn: "Арилжааны барилга", en: "Commercial Buildings" },
    summary: { mn: "А зэрэглэлийн оффис, худалдааны төв, зочид буудал.", en: "Grade-A offices, shopping centers, and hotels." } },
  { slug: "infrastructure", title: { mn: "Дэд бүтэц", en: "Infrastructure" },
    summary: { mn: "Зам, гүүр, инженерийн шугам сүлжээ, нийтийн үйлчилгээ.", en: "Roads, bridges, utilities, and public works." } },
  { slug: "architecture", title: { mn: "Архитектурын зураг төсөл", en: "Architecture Design" },
    summary: { mn: "Концепцээс ажлын зураг хүртэлх бүх үе шат.", en: "Concept through construction documentation." } },
  { slug: "interior", title: { mn: "Дотоод засал", en: "Interior Design" },
    summary: { mn: "Орчны загвар, материал, гүйцэтгэлийн менежмент.", en: "Spatial design, materials, and fit-out management." } },
  { slug: "engineering", title: { mn: "Инженерийн зөвлөгөө", en: "Engineering Consulting" },
    summary: { mn: "Бүтэц, цахилгаан, механик, хяналтын зөвлөх үйлчилгээ.", en: "Structural, electrical, mechanical, and supervision consulting." } },
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
    slug: "tuul-bridge-opened",
    title: { mn: "Туул голын гүүр ашиглалтад орлоо", en: "Tuul River Bridge officially opens" },
    excerpt: { mn: "Төв аймгийн Зуунмод чиглэлийн авто замын гүүрийн нээлт боллоо.", en: "The new four-lane bridge on the Zuunmod corridor is now in service." },
    category: { mn: "Дэд бүтэц", en: "Infrastructure" },
    date: "2026-03-14", image: news1,
  },
  {
    slug: "iso-45001-recertified",
    title: { mn: "ISO 45001 гэрчилгээгээ дахин баталгаажууллаа", en: "ISO 45001 recertification awarded" },
    excerpt: { mn: "Хөдөлмөрийн аюулгүй ажиллагааны олон улсын стандартыг 3 дахь удаагаа баталгаажуулав.", en: "Our occupational health & safety system meets ISO 45001 for the third cycle." },
    category: { mn: "Корпораци", en: "Corporate" },
    date: "2026-02-02", image: news2,
  },
  {
    slug: "erdenet-phase-three",
    title: { mn: "Эрдэнэт үйлдвэрийн III ээлжийн өргөтгөл эхэллээ", en: "Erdenet Plant Phase-III expansion begins" },
    excerpt: { mn: "28,000 м² өргөтгөлийн ажил 2026 онд эхэлж, 2027 онд ашиглалтад орно.", en: "The 28,000 m² expansion has broken ground; commissioning targeted for 2027." },
    category: { mn: "Төсөл", en: "Projects" },
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
  { name: "Д. Оюунчимэг", role: { mn: "Гүйцэтгэх захирлын орлогч", en: "Chief Operating Officer" }, initials: "ДО" },
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
      mn: "Цаг хугацаанд нь, төсөвт багтаасан. Албан ёсны төслүүдэд итгэлтэй сонголт.",
      en: "Delivered on time and within budget. A reliable partner for government projects.",
    },
    author: "Г. Цэрэндорж",
    org: { mn: "Барилга, хот байгуулалтын яам", en: "Ministry of Construction" },
  },
  {
    quote: {
      mn: "Чанарын стандарт нь олон улсын түвшний. Манай төв байрны төслийг гайхалтай гүйцэтгэсэн.",
      en: "International-grade quality. Our headquarters project was executed flawlessly.",
    },
    author: "M. Anderson",
    org: { mn: "Глобал Майнинг ХХК", en: "Global Mining LLC" },
  },
  {
    quote: {
      mn: "Хариуцлага, технологи, мэргэжлийн баг — гурвуулаа давамгайлсан компани.",
      en: "Accountable, technology-driven, and deeply professional from start to finish.",
    },
    author: "Б. Сараа",
    org: { mn: "Хангай Холдинг", en: "Khangai Holding" },
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
  { slug: "project-manager", title: { mn: "Төслийн менежер", en: "Project Manager" }, location: { mn: "Улаанбаатар", en: "Ulaanbaatar" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "Менежмент", en: "Management" } },
  { slug: "architect", title: { mn: "Архитектор", en: "Architect" }, location: { mn: "Улаанбаатар", en: "Ulaanbaatar" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "Дизайн", en: "Design" } },
  { slug: "qhse-officer", title: { mn: "ХАБЭА мэргэжилтэн", en: "QHSE Officer" }, location: { mn: "Эрдэнэт", en: "Erdenet" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "ХАБЭА", en: "HSE" } },
  { slug: "estimator", title: { mn: "Төсөвчин", en: "Quantity Surveyor" }, location: { mn: "Улаанбаатар", en: "Ulaanbaatar" }, type: { mn: "Бүтэн цаг", en: "Full-time" }, department: { mn: "Төсөв", en: "Commercial" } },
];

export const partners = [
  "MCS", "Erdenet", "MIAT", "Rio Tinto", "Khan Bank", "Newcom", "UB City", "Tavan Bogd",
];

export const stats = [
  { value: 25, suffix: "+", label: { mn: "Жилийн туршлага", en: "Years of experience" } },
  { value: 340, suffix: "", label: { mn: "Гүйцэтгэсэн төсөл", en: "Projects delivered" } },
  { value: 1200, suffix: "+", label: { mn: "Ажилтан", en: "Professionals" } },
  { value: 21, suffix: "", label: { mn: "Аймагт үйл ажиллагаа", en: "Provinces covered" } },
];
