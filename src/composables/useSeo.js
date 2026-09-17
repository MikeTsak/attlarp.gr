import { useHead } from "@unhead/vue";
import { unref } from "vue";

const SITE_NAME = "Athens Through Time";
const SITE_URL = "https://attlarp.gr";
const DEFAULT_IMAGE = `${SITE_URL}/img/logo-insta.jpg`;

/**
 * Sets per-page title/description/canonical/OG/Twitter tags.
 * `path` must start with "/" (e.g. "/setting"); pass "" for the homepage.
 * Supports reactive refs, computeds, and getters for title and description.
 */
export function useSeo({ title, description, path = "", image = DEFAULT_IMAGE, jsonLd = null }) {
  const url = `${SITE_URL}${path}`;

  useHead(() => {
    const rawTitle = typeof title === "function" ? title() : unref(title);
    const rawDesc = typeof description === "function" ? description() : unref(description);
    const fullTitle = path === "" ? rawTitle : `${rawTitle} | ${SITE_NAME}`;

    const head = {
      title: fullTitle,
      meta: [
        { name: "description", content: rawDesc },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: rawDesc },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "twitter:title", content: fullTitle },
        { property: "twitter:description", content: rawDesc },
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

    return head;
  });
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE };
