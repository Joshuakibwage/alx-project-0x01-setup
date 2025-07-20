import { UserProps } from "@/interfaces";


export default function UserCard({ 
  name, 
  email, 
  phone, 
  website, 
  company, 
  address 
}: UserProps) {
  return (
    <div className="p-4 rounded-2xl shadow-md border bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-600">📧 {email}</p>
      <p className="text-sm text-gray-600">📞 {phone}</p>
      <p className="text-sm text-gray-600">🌐 {website}</p>
      <p className="text-sm mt-2 font-medium">🏢 {company.name}</p>
      <p className="text-xs text-gray-500 italic">{company.catchPhrase}</p>
      <p className="text-sm mt-2">📍 {address.city}, {address.street}</p>
    </div>
  );
}
