export default [
  'strapi::errors',
  {
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'connect-src': ["'self'", 'https:'],
        // 'res.cloudinary.com' सोबतच 'https:' सुद्धा ॲड करा
        'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'https:'],
        'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'https:'],
        upgradeInsecureRequests: null,
      },
    },
  },
},
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: "256mb",
      jsonLimit: "256mb",
      textLimit: "256mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];