import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@highlifeshowband.ro";
// Resend requires the "from" address to be on a domain verified in your
// Resend account. Until highlifeshowband.ro is verified there, this falls
// back to Resend's shared sandbox sender so emails can still go out.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Highlife Showband <onboarding@resend.dev>";

const EVENT_TYPE_LABELS: Record<string, string> = {
  nunta: "Nuntă",
  botez: "Botez",
  corporate: "Eveniment Corporate",
  petrecere: "Petrecere Privată",
  gala: "Gală & Seri de Premii",
  lansare: "Lansare de Produs",
  altul: "Altul",
};

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  date?: string;
  guests?: string;
  message?: string;
  gdprConsent?: boolean;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }

  const { name, email, phone, eventType, date, guests, message, gdprConsent } =
    payload;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Numele, email-ul și telefonul sunt obligatorii." },
      { status: 400 },
    );
  }

  if (!gdprConsent) {
    return NextResponse.json(
      { error: "Este necesar acordul pentru prelucrarea datelor." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set — contact form email was not sent.",
    );
    return NextResponse.json(
      { error: "Serviciul de email nu este configurat momentan." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const eventTypeLabel = eventType
    ? EVENT_TYPE_LABELS[eventType] ?? eventType
    : "—";

  const rows: Array<[string, string]> = [
    ["Nume", name],
    ["Email", email],
    ["Telefon", phone],
    ["Tip eveniment", eventTypeLabel],
    ["Data evenimentului", date || "—"],
    ["Nr. invitați", guests || "—"],
  ];

  const html = `
    <div style="font-family: sans-serif; color: #191919; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Cerere nouă de pe highlifeshowband.ro</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight: 600; vertical-align: top;">${escapeHtml(label)}:</td>
            <td>${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="font-weight: 600; margin-top: 20px; margin-bottom: 4px;">Mesaj:</p>
      <p style="white-space: pre-wrap;">${escapeHtml(message || "—")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Cerere nouă — ${name} (${eventTypeLabel})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Nu am putut trimite mesajul. Încearcă din nou." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Nu am putut trimite mesajul. Încearcă din nou." },
      { status: 500 },
    );
  }
}
