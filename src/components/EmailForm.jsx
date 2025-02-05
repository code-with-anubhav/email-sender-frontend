// import { useState } from "react";
// import axios from "axios";

// const EmailForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/send-email",
//         formData
//       );
//       alert(response.data.message);
//     } catch (error) {
//       alert("Error sending email");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-zinc-800 bg-[url('https://www.pharmdel.com/public/frontend/assets/images/repeat-logo.png')] bg-contain bg-no-repeat bg-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Send Email</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Client's Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Client's Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//           >
//             Send Email
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmailForm;

import { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://email-sender-backend-b57c.onrender.com/send-email",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      alert("Error sending email");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800 bg-[url('https://www.pharmdel.com/public/frontend/assets/images/repeat-logo.png')] bg-contain bg-no-repeat bg-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 animate-fade-in">
          Send Email
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Client's Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Client's Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
