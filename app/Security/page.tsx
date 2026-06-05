"use client";

import { CheckCircle2 } from "lucide-react";

export default function Security() {
  return (
    <section
      id="security"
      className="py-28 relative bg-forest-dark border-y border-forest-mid/50"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-5">
          <span className="text-xs font-bold text-mint uppercase tracking-widest block mb-3">
            Defensive Architecture
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Impenetrable.
            <br />
            Completely Compliant.
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            ZEDTRUST treats security as a core architectural feature, not an
            afterthought. Your structural liquidity values are isolated within
            strict hardware security modules.
          </p>

          <ul className="space-y-4">
            {[
              "AES-256 GCM authenticated file level payload protection",
              "Multi-Sig vault execution protocol authorizations",
              "Continuous automated fuzzing and threat vector auditing",
              "Real-time fraud isolation engines matching Basel III guidelines",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <CheckCircle2
                  size={16}
                  className="text-lemon mt-1 shrink-0"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 bg-[#020805] border border-forest-mid p-6 rounded-2xl font-mono text-xs text-gray-400 shadow-3xl">
          <div className="flex items-center justify-between pb-4 border-b border-forest-mid/60 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-lemon/40" />
            </div>

            <span className="text-[10px] text-gray-500 tracking-wider">
              SECURE_TUNNEL_INITIALIZATION.LOG
            </span>
          </div>

          <div className="space-y-2 text-gray-500">
            <p>
              <span className="text-lemon">
                zedtrust-node-01:~$
              </span>{" "}
              initialize --hsm-handshake
            </p>

            <p className="text-gray-400">
              [INFO] Requesting secure handshake with Hardware Security
              Module...
            </p>

            <p className="text-mint">
              [OK] Cryptographic identity verified via Ephemeral ECDH Key
              exchange.
            </p>

            <p className="text-gray-400">
              [INFO] Enforcing Zero-Knowledge pipeline structure state...
            </p>

            <p className="text-mint">
              [OK] Transport layer security configured to TLS_1_3_GCM_SHA384.
            </p>

            <p>
              <span className="text-lemon">
                zedtrust-node-01:~$
              </span>{" "}
              status --audit-compliance
            </p>

            <p className="text-white">
            Security Profile Checklist Configuration:
            </p>

            <p className="text-gray-300">
              - SOC2 Type II Framework Verification &nbsp;&nbsp;[ACTIVE]
            </p>

            <p className="text-gray-300">
              - ISO 27001 ISMS Infrastructure &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[VERIFIED]
            </p>

            <p className="text-gray-300">
              - GDPR Data Sovereignty Protocol &nbsp;&nbsp;&nbsp;&nbsp;[ENFORCED]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}