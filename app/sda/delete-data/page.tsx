import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SdaLegalShell, { SdaSection, SdaContactCard } from "@/components/legal/SdaLegalShell";

export const metadata: Metadata = {
  title: "Delete My Data — SDA Worship and Hymnal | ShelNova Labs",
  description:
    "Request deletion of your data for SDA Worship and Hymnal, an Android hymnal and Bible app developed by ShelNova Labs Ltd.",
};

const strong = "text-snl-text font-medium";
const link = "text-snl-violet hover:underline";

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="bg-snl-violet/20 text-snl-violet font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0 mt-0.5">
        {n}
      </span>
      <p className="text-snl-text">{children}</p>
    </div>
  );
}

export default function SdaDeleteData() {
  const subject = encodeURIComponent("SDA Worship and Hymnal Data Deletion Request");
  const body = encodeURIComponent(
    "Hello,\n\nI would like to request deletion of the data associated with my use of SDA Worship and Hymnal.\n\nDevice model (optional):\nAndroid version (optional):\n\nThank you."
  );
  const mailto = `mailto:hello@shelnovalabs.com?subject=${subject}&body=${body}`;

  return (
    <SdaLegalShell
      eyebrow="Data Safety · SDA Worship and Hymnal"
      title="Delete My Data"
      updated="13 November 2026"
      backHref="/sda/privacy"
      backLabel="← SDA Privacy Policy"
    >
      <SdaSection n={1} title="Overview">
        <p>
          <span className={strong}>SDA Worship and Hymnal</span> does not have user accounts, so there is no account to close.
          The information tied to your use of the App falls into two groups: data stored on your own device, which you can
          delete yourself right now, and limited technical data held by Firebase, which you can ask us to delete.
        </p>
      </SdaSection>

      <SdaSection n={2} title="Delete Data on Your Device">
        <p className="mb-4">
          Your favourites, services, and settings are stored only on your phone. To remove them:
        </p>
        <div className="bg-snl-card border border-snl-border rounded-xl p-6 space-y-3">
          <Step n={1}>
            Open Android <span className="font-semibold">Settings → Apps → SDA Worship and Hymnal</span>.
          </Step>
          <Step n={2}>
            Tap <span className="font-semibold">Storage</span> (or <span className="font-semibold">Storage &amp; cache</span>).
          </Step>
          <Step n={3}>
            Tap <span className="font-semibold text-red-400">Clear storage</span> (or{" "}
            <span className="font-semibold text-red-400">Clear data</span>) and confirm.
          </Step>
        </div>
        <p className="mt-4 text-sm">Uninstalling the App also removes all data stored on your device.</p>
      </SdaSection>

      <SdaSection n={3} title="Request Deletion of Data We Hold">
        <p className="mb-4">
          To request deletion of analytics, crash-report, and notification data associated with your use of the App, send us a
          request:
        </p>
        <div className="bg-snl-card border border-snl-border rounded-xl p-6 space-y-3">
          <p className="text-snl-text font-medium">Send an email to:</p>
          <p>
            <a href={mailto} className="text-snl-violet hover:underline text-lg font-semibold">
              hello@shelnovalabs.com
            </a>
          </p>
          <p className="text-xs text-snl-muted">
            Subject: <span className="text-snl-text font-mono">SDA Worship and Hymnal Data Deletion Request</span>
          </p>
          <a
            href={mailto}
            className="inline-block mt-2 bg-snl-violet text-white font-semibold rounded-lg px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
          >
            Request data deletion
          </a>
          <p className="text-sm">
            Because the App does not collect your name or email, we may ask for details such as your device model so we can
            locate the correct records. We aim to respond within 7 business days and complete deletion within 30 days.
          </p>
        </div>
      </SdaSection>

      <SdaSection n={4} title="What Is Deleted">
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Firebase Analytics data linked to your app-instance identifier</li>
          <li>Crash reports and diagnostics linked to your installation</li>
          <li>Your push-notification token and topic subscriptions</li>
        </ul>
        <p className="mt-3">
          To stop new data being collected, you can uninstall the App, turn off notifications in Android settings, and reset
          or opt out of your advertising ID in Settings → Google → Ads.
        </p>
      </SdaSection>

      <SdaSection n={5} title="What May Be Kept">
        <p>
          Aggregated, anonymous statistics that cannot identify you may be kept. Records of Google Play purchases are held by
          Google under its own policies; contact Google Play support to manage those. Advertising data collected by Google
          AdMob is controlled by Google; see{" "}
          <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer" className={link}>
            Google My Ad Center
          </a>
          .
        </p>
      </SdaSection>

      <SdaSection n={6} title="More Information">
        <p>
          See how we handle information in our{" "}
          <Link href="/sda/privacy" className={link}>Privacy Policy</Link>. For anything else, contact us:
        </p>
        <SdaContactCard />
      </SdaSection>
    </SdaLegalShell>
  );
}
