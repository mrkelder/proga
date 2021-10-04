function validation(who, contact, text) {
  try {
    const phoneRE = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const emailRE =
      /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const nameRE = /[\wа-яА-ЯёЁЇїІіЄєҐґ]+/gi;

    if (
      who.match(nameRE).length === 3 &&
      (emailRE.test(contact) || phoneRE.test(contact)) &&
      text.length > 0 &&
      text.length <= 600
    )
      return true;
    else return false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export default async function handler(req, res) {
  try {
    const { who, text, contact } = req.query;
    if (who && text && contact && validation(who, contact, text)) {
      const url = `${process.env.API_HOST}/t?who=${encodeURIComponent(
        who
      )}&text=${encodeURIComponent(text)}&contact=${encodeURIComponent(
        contact
      )}`;

      const result = await fetch(url, { method: "POST" });
      if (result.ok) res.status(200).send("Success");
      else throw new Error("Client: Server denied a request");
    } else throw new Error("Client: Received the invalid request queries");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}
