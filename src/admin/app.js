import en from "./extensions/locales/en";

const translations = {

  en: en,
};

export default {
  config: {
    locales: ["en"],
    translations: translations,
    tutorials: false,
    notifications: {
      releases: false,
    },
    onboarding: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
