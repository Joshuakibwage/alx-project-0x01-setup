import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested fields
    if (name.startsWith("address.") || name.startsWith("company.") || name.startsWith("geo.")) {
      const [section, key] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onAddUser(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl text-gray-800">
        <h2 className="text-xl text-gray-800 font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
          <input name="name" placeholder="Name" onChange={handleChange} className="input" />
          <input name="username" placeholder="Username" onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
          <input name="website" placeholder="Website" onChange={handleChange} className="input" />

          <input name="address.street" placeholder="Street" onChange={handleChange} className="input" />
          <input name="address.suite" placeholder="Suite" onChange={handleChange} className="input" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="input" />
          <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} className="input" />
          <input name="geo.lat" placeholder="Geo Lat" onChange={handleChange} className="input" />
          <input name="geo.lng" placeholder="Geo Lng" onChange={handleChange} className="input" />

          <input name="company.name" placeholder="Company Name" onChange={handleChange} className="input" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} className="input" />
          <input name="company.bs" placeholder="BS" onChange={handleChange} className="input" />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button className="px-4 py-2 bg-gray-400 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
