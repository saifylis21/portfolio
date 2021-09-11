import React from "react";
import PortableText from "react-portable-text";
import classes from "./Contacts.module.css";
import ContactsContent from '../../models/ContactsContent';

type ContactsProps = {
  contacts: ContactsContent | null;
};

const Contacts: React.FC<ContactsProps> = ({ contacts }) => (
  <section>
    <div className={classes.Contacts}>

      {contacts && (<h1><PortableText 
        content={contacts?.contactLinks}
        className="dummyStyles"
        serializers={{}}
      /></h1>)}
    </div>
  </section>
);

export default Contacts;
