"use client";
import useContacts from "@/hooks/useContacts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactTable from "@/components/Table/ContactTable";
import { FC } from "react";

const ShowForm :FC=()=>{
    const {contacts,loading,error}=useContacts()
    return(
        <div className="bg-gray-100">
        <div className="flex flex-col gap-10 min-h-screen bg-gray-100 p-6">
          <Header />
          <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-semibold mb-4">Contact Form Submissions</h1>
            <ContactTable contacts={contacts} loading={loading} error={error} />
          </div>
        </div>
        <Footer />
      </div>
    )
}
export default ShowForm