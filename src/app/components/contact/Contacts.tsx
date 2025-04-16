import React from "react";
import { CONTACTS } from "../contants/Texts";

function Contacts() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tight">
        <p className="my-4">{CONTACTS.Address}</p>
        <p className="my-4">{CONTACTS.Phone}</p>
        <a href="mailto:singhkunal2211997@gmail.com" className="my-4">
          {CONTACTS.Email}
        </a>
      </div>
    </div>
  );
}

export default Contacts;
