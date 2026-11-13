import type { Metadata } from "next";
import Link from "next/link";
import SdaLegalShell, { SdaSection, SdaContactCard } from "@/components/legal/SdaLegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — SDA Worship and Hymnal | ShelNova Labs",
  description:
    "Terms of Service for SDA Worship and Hymnal, a hymnal and Bible app developed by ShelNova Labs Ltd.",
};

const strong = "text-snl-text font-medium";

export default function SdaTermsOfService() {
  return (
    <SdaLegalShell
      eyebrow="Legal · SDA Worship and Hymnal"
      title="Terms of Service"
      updated="13 November 2026"
      backHref="/sda/privacy"
      backLabel="← SDA Privacy Policy"
    >
      <SdaSection n={1} title="Acceptance of Terms">
        <p>
          By downloading, installing, or using <span className={strong}>SDA Worship and Hymnal</span> (&quot;the App&quot;),
          provided by ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;), you agree to these Terms
          of Service. If you do not agree, please do not use the App.
        </p>
      </SdaSection>

      <SdaSection n={2} title="Description of Service">
        <p>
          The App provides a hymnal and Bible in English and Kiswahili, with tools for favourites, worship service planning,
          sing mode, and projector mode. It is provided for personal, church, and non-commercial devotional use.
        </p>
      </SdaSection>

      <SdaSection n={3} title="Acceptable Use">
        <p className="mb-3">You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Use the App for any unlawful or unauthorised purpose</li>
          <li>Decompile, reverse engineer, or extract source code from the App</li>
          <li>Interfere with the security or operation of the App or its supporting services</li>
          <li>Scrape or copy the App&apos;s content in bulk, or redistribute it commercially, without written permission</li>
          <li>Interact with ads artificially, including clicking them yourself or using bots to inflate ad activity</li>
        </ul>
      </SdaSection>

      <SdaSection n={4} title="Content and Intellectual Property">
        <p>
          The App&apos;s software, design, branding, and original material belong to ShelNova Labs Ltd. Hymn texts and Bible
          translations are included under the permissions or licences held for them and remain the property of their
          respective owners. Using the App gives you a limited, non-exclusive, non-transferable right to use that content
          within the App for personal and congregational worship, including projecting hymns during a church service with the
          App&apos;s projector mode.
        </p>
      </SdaSection>

      <SdaSection n={5} title="Ads">
        <p>
          The free version of the App displays advertising provided by third parties. Optional rewarded ads let you earn
          temporary benefits, such as a period without pop-up ads or extra favourites, by choosing to watch an ad. Rewards
          have no cash value and may be changed or withdrawn.
        </p>
      </SdaSection>

      <SdaSection n={6} title="Supporter Premium and Purchases">
        <p className="mb-3">
          Supporter Premium is an optional upgrade offered as a monthly subscription, a yearly subscription, or a one-time
          lifetime purchase. It removes pop-up ads and raises limits on favourites and services.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Payments are processed by Google Play and are governed by Google Play&apos;s payment and refund policies.</li>
          <li>Subscriptions renew automatically until you cancel them in the Google Play Store before the renewal date.</li>
          <li>Prices are shown in the App before you buy. Price changes apply to future renewals as permitted by Google Play.</li>
          <li>Lifetime access lasts for as long as we offer the App and ends if we stop offering it.</li>
        </ul>
      </SdaSection>

      <SdaSection n={7} title="Privacy">
        <p>
          Your use of the App is also governed by our{" "}
          <Link href="/sda/privacy" className="text-snl-violet hover:underline">Privacy Policy</Link>, which describes how
          information is handled.
        </p>
      </SdaSection>

      <SdaSection n={8} title="Disclaimer of Warranties">
        <p>
          The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind,
          express or implied. We take care to keep hymn and Bible text accurate, but we do not guarantee that the App will be
          uninterrupted or error-free. Please check important texts against your own printed copy before official use.
        </p>
      </SdaSection>

      <SdaSection n={9} title="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, ShelNova Labs Ltd. is not liable for any indirect, incidental, or
          consequential damages arising from your use of, or inability to use, the App.
        </p>
      </SdaSection>

      <SdaSection n={10} title="Termination">
        <p>
          You may stop using the App at any time by uninstalling it. We may suspend or end access to the App for anyone who
          breaks these terms.
        </p>
      </SdaSection>

      <SdaSection n={11} title="Changes to These Terms">
        <p>
          We may update these terms from time to time and will post the revised version on this page. Continued use of the App
          after changes are published means you accept the updated terms.
        </p>
      </SdaSection>

      <SdaSection n={12} title="Contact Us">
        <p>Questions about these Terms of Service? Contact us:</p>
        <SdaContactCard />
      </SdaSection>
    </SdaLegalShell>
  );
}
