/* Google Tag Manager with Consent Mode v2. The container carries the Google
   Analytics 4 tag; nothing else is loaded from other companies. Set GTM_ID to
   null to switch analytics off on every page.

   The consent defaults below run before the container loads. In the EEA, the
   UK and Switzerland nothing is stored on the visitor's device: there is no
   consent banner, so Google receives cookieless pings only. Elsewhere the
   default is granted. Same policy as realzero.es and vendcaptain.com, and the
   footer says so; keep the two in step. */
export const GTM_ID: string | null = "GTM-MMJMN9Z8";

const NO_STORAGE_REGIONS = [
  "ES", "FR", "DE", "IT", "PT", "NL", "BE", "LU", "IE", "AT", "FI", "DK", "SE",
  "GR", "PL", "CZ", "HU", "RO", "BG", "SK", "SI", "HR", "LT", "LV", "EE", "MT",
  "CY", "IS", "LI", "NO", "GB", "CH",
];

export const consentDefaultScript = [
  "window.dataLayer=window.dataLayer||[];",
  "function gtag(){dataLayer.push(arguments);}",
  "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:" +
    JSON.stringify(NO_STORAGE_REGIONS) +
    "});",
  "gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});",
].join("");
