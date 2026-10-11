export const site = {
  name: "Salman Alameer",
  role: "AI Officer",
  location: "Dammam, Saudi Arabia",
  timezone: "GMT+3",
  email: "salmanalameer2@gmail.com",
  // Saudi number first, then Malaysian
  phones: [
    { label: "Saudi Arabia", display: "+966 55 682 5219", tel: "+966556825219" },
    { label: "Malaysia", display: "+60 11-3973 2242", tel: "+601139732242" },
  ],
  github: "https://github.com/Alameer32",
  linkedin: "https://www.linkedin.com/in/salman-alameer-6084b1173",
  resumeUrl: "/resume.pdf",
  available: true,
  tagline: "I build software that ships and scales.",
  subtagline:
    "AI Officer at Teleperformance and Software Engineering graduate from UTM. I ship enterprise automation, document-AI pipelines, and full-stack products end-to-end.",
  stats: [
    { value: "$500K+", label: "ROI delivered" },
    { value: "7 countries", label: "production deployments" },
    { value: "3.88", label: "GPA / 4.00" },
  ],
} as const;
