import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    content: "",
    loading: false,
    show: false,
    alertMessage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ loading: true });

    // TO-DO: actually email
    console.log(formData);
  };

  return <form></form>;
};
