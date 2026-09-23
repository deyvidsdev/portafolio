export type ContactDraft = { name: string; email: string; subject: string; message: string };

// Produces only a draft URL; delivery is performed explicitly in the visitor's email client.
export function createMailtoDraft(recipient: string, draft: ContactDraft): string {
  const subject = draft.subject.trim() || 'Contacto · Portafolio';
  const body = `${draft.name.trim()} <${draft.email.trim()}>\r\n\r\n${draft.message.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
