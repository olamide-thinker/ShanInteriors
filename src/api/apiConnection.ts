
const config = {
  development: {
      baseURL: 'http://localhost:3001/'
  },
  testing: {
      baseURL: 'http://localhost:3001/'
  },
  production: {
    baseURL: "https://api.shanInteriors.org",
  },
};


export const getBaseUrl = () => {

  // if (
  //   process.env.NODE_ENV === "production" && typeof window !== 'undefined' &&
  //   window?.location.href.includes(targetURL)
  // ) {
  //   return config.production.baseURL;
  // } else 
  if (process.env.NODE_ENV === "development") {
    return config.development.baseURL;
  } else {
    return config.testing.baseURL;
  }
};

export const baseUrl = getBaseUrl()