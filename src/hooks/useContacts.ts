"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:3300/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      setError("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const submitContactForm = async (values: Omit<Contact, "id">) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3300/contacts", values);
      setContacts((prevContacts) => [...prevContacts, response.data]); 
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return { contacts, loading, error, fetchContacts, submitContactForm };
};

export default useContacts;
