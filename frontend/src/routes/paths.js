/* eslint-disable */
// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  register: path(ROOTS_AUTH, "/register"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
  components: "/components",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
    booking: path(ROOTS_DASHBOARD, "/booking"),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, "/mail"),
    all: path(ROOTS_DASHBOARD, "/mail/all"),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, "/chat"),
    new: path(ROOTS_DASHBOARD, "/chat/new"),
    conversation: path(ROOTS_DASHBOARD, "/chat/:conversationKey"),
  },
  calendar: path(ROOTS_DASHBOARD, "/calendar"),
  kanban: path(ROOTS_DASHBOARD, "/kanban"),
  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    profile: path(ROOTS_DASHBOARD, "/user/profile"),
    cards: path(ROOTS_DASHBOARD, "/user/cards"),
    list: path(ROOTS_DASHBOARD, "/user/list"),
    newUser: path(ROOTS_DASHBOARD, "/user/new"),
    editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    account: path(ROOTS_DASHBOARD, "/user/account"),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, "/e-commerce"),
    shop: path(ROOTS_DASHBOARD, "/e-commerce/shop"),
    product: path(ROOTS_DASHBOARD, "/e-commerce/product/:name"),
    productById: path(
      ROOTS_DASHBOARD,
      "/e-commerce/product/nike-air-force-1-ndestrukt"
    ),
    list: path(ROOTS_DASHBOARD, "/e-commerce/list"),
    newProduct: path(ROOTS_DASHBOARD, "/e-commerce/product/new"),
    editById: path(
      ROOTS_DASHBOARD,
      "/e-commerce/product/nike-blazer-low-77-vintage/edit"
    ),
    checkout: path(ROOTS_DASHBOARD, "/e-commerce/checkout"),
    invoice: path(ROOTS_DASHBOARD, "/e-commerce/invoice"),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, "/blog"),
    posts: path(ROOTS_DASHBOARD, "/blog/posts"),
    post: path(ROOTS_DASHBOARD, "/blog/post/:title"),
    postById: path(
      ROOTS_DASHBOARD,
      "/blog/post/apply-these-7-secret-techniques-to-improve-event"
    ),
    newPost: path(ROOTS_DASHBOARD, "/blog/new-post"),
  },
  hospital: path(ROOTS_DASHBOARD, "/hospital"),

  medicalStaff: {
    root: path(ROOTS_DASHBOARD, "/medical-staff"),
    doctor: path(ROOTS_DASHBOARD, "/medical-staff/doctors"),
    nurse: path(ROOTS_DASHBOARD, "/medical-staff/nurses"),
    technician: path(ROOTS_DASHBOARD, "/medical-staff/technicians"),
  },

  patient: path(ROOTS_DASHBOARD, "/patient"),
  pharmacy: {
    root: path(ROOTS_DASHBOARD, "/pharmacy"),
    inHospital: path(ROOTS_DASHBOARD, "/pharmacy/inHospital"),
    outpatient: path(ROOTS_DASHBOARD, "/pharmacy/outPatient"),
  },

  medicalEquipment: {
    root: path(ROOTS_DASHBOARD, "/medical-equipment"),
    imagingEquip: path(ROOTS_DASHBOARD, "/medical-equipment/imaging-equipment"),
    surgicalEquip: path(
      ROOTS_DASHBOARD,
      "/medical-equipment/surgical-equipment"
    ),
  },
  department: {
    root: path(ROOTS_DASHBOARD, "/department"),
    orthopedics: path(ROOTS_DASHBOARD, "/department/orthopedics"),
    radiology: path(ROOTS_DASHBOARD, "/department/radiology"),
    surgical: path(ROOTS_DASHBOARD, "/department/surgical"),
    pediatrics: path(ROOTS_DASHBOARD, "/department/pediatrics"),
    cardiology: path(ROOTS_DASHBOARD, "/department/cardiology"),
    emergency: path(ROOTS_DASHBOARD, "/department/emergency"),
    neurology: path(ROOTS_DASHBOARD, "/department/neurology"),
  },

  appointments: {
    root: path(ROOTS_DASHBOARD, "/appointments"),
    regularCheckup: path(ROOTS_DASHBOARD, "/appointments/regular-checkup"),
    followUp: path(ROOTS_DASHBOARD, "/appointments/followUp"),
    emergencyVisit: path(ROOTS_DASHBOARD, "/appointments/emergencyVisit"),
  },

  medicalRecords: path(ROOTS_DASHBOARD, "/medical-records"),
};

export const PATH_DOCS = "https://docs-minimals.vercel.app/introduction";
