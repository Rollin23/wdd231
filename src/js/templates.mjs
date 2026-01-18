
export function mediaCardTemplate(link) {
  return `
    <div class="media-card">
      <img src="${link.image}" alt="${link.name}">
      <h3>${link.name}</h3>
      <p>${link.description}</p>
    </div>
  `;
}

export function contactTemplate(data) {
  const mailing = data.addresses.find(a => a.type === "Mailing");
  const phone = data.contacts.phoneNumbers.find(n => n.type === "Voice")?.phoneNumber ?? "N/A";
  const email = data.contacts.emailAddresses[0]?.emailAddress ?? "N/A";

  return `
    <section class="contact">
      <h2>CONTACT INFO</h2>
      <h3>Mailing Address:</h3>
      <p>${mailing ? mailing.line1 : "N/A"}</p>
      <p>${mailing ? `${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}` : ""}</p>

      <h3>Phone:</h3>
      <p>${phone}</p>

      <h3>Email:</h3>
      <p>${email}</p>
    </section>
  `;
}