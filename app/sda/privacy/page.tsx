import type { Metadata } from "next";
import Link from "next/link";
import SdaLegalShell, { SdaSection, SdaContactCard } from "@/components/legal/SdaLegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — SDA Worship and Hymnal | ShelNova Labs",
  description:
    "Privacy Policy for SDA Worship and Hymnal, a hymnal and Bible app developed by ShelNova Labs Ltd.",
};

const strong = "text-snl-text font-medium";
const link = "text-snl-violet hover:underline";

export default function SdaPrivacyPolicy() {
  return (
    <SdaLegalShell
      eyebrow="Legal · SDA Worship and Hymnal"
      title="Privacy Policy"
      updated="13 November 2026"
      backHref="/privacy"
      backLabel="← All Privacy Policies"
    >
      <SdaSection n={1} title="Overview">
        <p>
          This policy explains how ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;) handles
          information in <span className={strong}>SDA Worship and Hymnal</span> (&quot;the App&quot;), an Android hymnal and
          Bible app available in English and Kiswahili. The App has <span className={strong}>no user accounts</span>: you do
          not register, sign in, or give us your name, email address, or phone number to use it.
        </p>
      </SdaSection>

      <SdaSection n={2} title="Data Stored on Your Device">
        <p className="mb-3">The following stays on your device and is not uploaded to our servers:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Your favourite hymns and Bible verses</li>
          <li>Worship services you create</li>
          <li>Settings such as language, theme, text size, and reminder times</li>
          <li>Your reading position and the timing of in-app prompts</li>
        </ul>
        <p className="mt-3">
          You can remove all of this at any time. See{" "}
          <Link href="/sda/delete-data" className={link}>Delete My Data</Link>.
        </p>
      </SdaSection>

      <SdaSection n={3} title="Information Collected Automatically">
        <p className="mb-3">
          To keep the App working, understand how it is used, and show ads, the App and the services it uses collect limited
          technical information. We do not link this information to your name or contact details.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            <span className={strong}>Firebase Analytics</span> (Google): an app-instance identifier, device model, operating
            system version, approximate location derived from IP address, and usage events: screens viewed, hymns opened,
            Bible chapters read, content shared, services presented, premium screens viewed, and ads shown or rewarded. It
            also records two settings: your app language and whether Supporter Premium is active.
          </li>
          <li>
            <span className={strong}>Firebase Crashlytics</span> (Google, release versions only): crash reports and
            diagnostics, including an installation identifier, device model, OS version, and app state at the time of a crash.
          </li>
          <li>
            <span className={strong}>Firebase Cloud Messaging</span> (Google): a push-notification token so we can send you
            notifications. The App subscribes you to general and language topics. You can turn notifications off in Android
            settings.
          </li>
          <li>
            <span className={strong}>Firebase Firestore</span> (Google): the App reads remote configuration (for example, how
            often ads appear and occasional announcements). It does not write your personal data to it.
          </li>
        </ul>
      </SdaSection>

      <SdaSection n={4} title="Advertising">
        <p className="mb-3">
          The App is free and supported by ads served by <span className={strong}>Google AdMob</span>. AdMob may collect and
          use your device&apos;s advertising ID, IP address, and ad interaction data to deliver and measure ads and to prevent
          fraud. Ad formats include banners, interstitial ads, app-open ads, and optional rewarded ads that unlock a temporary
          benefit.
        </p>
        <p className="mb-3">
          In the European Economic Area, the United Kingdom, and other regions where required, the App shows a consent form
          (Google&apos;s User Messaging Platform) before ads are served. You can change your choice later in{" "}
          <span className={strong}>Settings → Ad privacy choices</span> when it is shown. You can also reset your advertising
          ID or opt out of ad personalisation in your Android settings (Settings → Google → Ads).
        </p>
        <p>No pop-up ads are shown while a hymn is displayed in sing mode or projector mode.</p>
      </SdaSection>

      <SdaSection n={5} title="Purchases and Subscriptions">
        <p>
          Optional Supporter Premium purchases (monthly, yearly, or lifetime) are processed entirely by Google Play. We do not
          receive or store your payment card details. We receive confirmation of whether a purchase is active so we can unlock
          premium features. Manage or cancel subscriptions in the Google Play Store.
        </p>
      </SdaSection>

      <SdaSection n={6} title="Permissions">
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><span className={strong}>Internet:</span> to load ads, configuration, and notifications.</li>
          <li><span className={strong}>Notifications:</span> to send optional reminders and announcements.</li>
          <li><span className={strong}>Run at startup:</span> so scheduled reminders continue after you restart your phone.</li>
        </ul>
        <p className="mt-3">
          The App does not access your contacts, photos, microphone, camera, or precise location.
        </p>
      </SdaSection>

      <SdaSection n={7} title="How We Use Information">
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>To operate, maintain, and improve the App</li>
          <li>To find and fix crashes and performance problems</li>
          <li>To show ads and keep the App free</li>
          <li>To send notifications you have allowed</li>
        </ul>
        <p className="mt-3">We do not sell your personal information.</p>
      </SdaSection>

      <SdaSection n={8} title="Sharing and Third Parties">
        <p className="mb-3">
          We share information only with the service providers that make the App work. They process it under their own
          privacy terms:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            Google (Firebase, AdMob, Google Play) —{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>
              policies.google.com/privacy
            </a>
          </li>
        </ul>
        <p className="mt-3">We may also disclose information if required by law.</p>
      </SdaSection>

      <SdaSection n={9} title="Data Retention and Deletion">
        <p>
          Data on your device remains until you delete it or uninstall the App. Analytics and crash data held by Firebase is
          kept for the retention periods set in our Firebase project and then deleted automatically. You can ask us to delete
          data associated with you at any time using our{" "}
          <Link href="/sda/delete-data" className={link}>data deletion page</Link>.
        </p>
      </SdaSection>

      <SdaSection n={10} title="Your Rights">
        <p>
          Depending on where you live (including under the GDPR, UK GDPR, and similar laws), you may have the right to access,
          correct, delete, or restrict the use of your personal data, to object to its processing, and to withdraw consent. To
          exercise these rights, contact us using the details below or use the{" "}
          <Link href="/sda/delete-data" className={link}>data deletion page</Link>.
        </p>
      </SdaSection>

      <SdaSection n={11} title="Children's Privacy">
        <p>
          The App is intended for a general audience and is not directed at children under 13. We do not knowingly collect
          personal information from children. If you believe a child has provided us data, contact us and we will delete it.
        </p>
      </SdaSection>

      <SdaSection n={12} title="Security">
        <p>
          Information sent between the App and Google services is encrypted in transit. No method of electronic storage or
          transmission is completely secure, so we cannot guarantee absolute security.
        </p>
      </SdaSection>

      <SdaSection n={13} title="Changes to This Policy">
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date above shows when it last changed.
          Continued use of the App after an update means you accept the revised policy.
        </p>
      </SdaSection>

      <SdaSection n={14} title="Contact Us">
        <p>Questions about this policy or your data? Contact us:</p>
        <SdaContactCard />
      </SdaSection>
    </SdaLegalShell>
  );
}
