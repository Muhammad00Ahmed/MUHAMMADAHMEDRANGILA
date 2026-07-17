import type { Metadata } from "next";
import type { SoftwareApplication, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import {
  ShopFlowCTA,
  ShopFlowDemo,
  ShopFlowFeatures,
  ShopFlowHero,
  ShopFlowTechStack,
} from "@/features/products/shopflow/components";
import { USER } from "@/features/profile/data/user";

const TITLE = "ShopFlow — Shop Management System";
const DESCRIPTION =
  "ShopFlow is a PERN-stack shop management system with real-time dashboards, inventory tracking, invoice management, and financial analytics.";
const OG_IMAGE = "/images/blogs/shopflow.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/products/shopflow",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/products/shopflow",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

function getJsonLd(): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ShopFlow",
    description: DESCRIPTION,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_INFO.url}/products/shopflow`,
    image: new URL(OG_IMAGE, SITE_INFO.url).toString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  };
}

export default function ShopFlowPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <ShopFlowHero />
      <ShopFlowDemo />
      <ShopFlowFeatures />
      <ShopFlowTechStack />
      <ShopFlowCTA />
    </div>
  );
}
