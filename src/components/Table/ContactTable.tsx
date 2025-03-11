import { FC } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactTableProps {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const ContactTable: FC<ContactTableProps> = ({ contacts, loading, error }) => {
  return (
    <div className="overflow-x-auto">
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-100 transition">
                <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
                <td className="border border-gray-300 px-4 py-2">{contact.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactTable;
