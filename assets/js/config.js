/*
 * Codename Hennur (off Outer Ring Road, Hennur, Bengaluru) landing page: deployment configuration.
 * Everything that differs between preview and production lives here.
 * Nothing secret belongs in this file: it is shipped to the browser.
 */
window.SS_CONFIG = {
  /* Lead delivery. POST target that accepts the lead and returns 2xx on success
   * (Pabbly / Zapier / Make webhook, Google Apps Script, Leadrat proxy).
   * Empty until a real endpoint exists: the form then refuses to submit
   * instead of showing a fake success message. */
  leadEndpoint: "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjUwNTY1MDYzNTA0MzY1MjZjNTUzNyI_3D_pc/IjU3NjcwNTZiMDYzMjA0MzY1MjY0NTUzMzUxMzci_pc",

  /* "form" = URL-encoded POST without a CORS preflight (right for Pabbly / Zapier / Make webhooks).
   * "json" = JSON POST (for your own endpoint that answers CORS). */
  leadEndpointMode: "form",
  leadEndpointSimpleRequest: false,

  /* Redirect here after a confirmed submission. Empty = inline success message. */
  thankYouUrl: "thank-you.html",

  /* Google Tag Manager container, e.g. "GTM-XXXXXXX". Loaded only when set. */
  gtmId: "",

  /* Sales number. The header call button stays hidden until both are set
   * (the header shows "Enquire Now" instead).
   * Example: phoneDisplay "98765 43210", phoneE164 "+919876543210". */
  phoneDisplay: "",
  phoneE164: "",

  /* WhatsApp number, digits only with country code (e.g. "919876543210"). WhatsApp buttons stay hidden until set. */
  whatsappNumber: "",
  whatsappMessage: "Hi, I'm interested in Codename Hennur, off Outer Ring Road. Please share the price sheet and floor plans.",

  /* Auto-open the enquiry popup after this many seconds, or at 50% scroll if that comes first (once per session, never after a form is started). 0 disables. */
  popupDelaySeconds: 30,

  /* Optional public brochure URL, shown after a successful "Download Brochure" enquiry. */
  brochureUrl: "",

  /* Channel-partner K-RERA agent registration, shown in the footer when set. */
  agentRera: "",

  /* Named in the consent line: who will contact the enquirer. Confirm before launch. */
  consentEntity: "the Codename Hennur sales team and its authorised channel partners",

  siteUrl: "https://www.purvacodenamehennur.in/",
  privacyUrl: ""
};
