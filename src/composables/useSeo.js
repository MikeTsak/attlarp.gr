import { useHead } from "@unhead/vue";

const SITE_NAME = "Athens Through Time";
const SITE_URL = "https://attlarp.gr";
const DEFAULT_IMAGE = `${SITE_URL}/img/logo-insta.jpg`;

/**
 * Sets per-page title/description/canonical/OG/Twitter tags.
 * `path` must start with "/" (e.g. "/setting"); pass "" for the homepage.
 */
export function useSeo({ title, description, path = "", image = DEFAULT_IMAGE, jsonLd = null }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${SITE_NAME}`;

  const head = {
    title: fullTitle,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "twitter:title", content: fullTitle },
      { property: "twitter:description", content: description },
      { property: "twitter:image", content: image },
      { property: "twitter:url", content: url },
    ],
    link: [{ rel: "canonical", href: url }],
  };

  if (jsonLd) {
    head.script = [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ];
  }

  useHead(head);
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE };
