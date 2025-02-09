// import { useState } from "react";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       // Submit form data to your server or service here (use fetch/axios)
//       // For example:
//       const res = await fetch("http://localhost:5000/contactus", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) throw new Error("Failed to send message");

//       setSuccess(true);
//       setFormData({ name: "", email: "", message: "" });
//       setError(null);
//     } catch (error) {
//       setError("Error sending message. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-sky-700 text-center mb-6">Contact Us</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {success && (
//           <p className="text-green-500 text-center">
//             Thank you for reaching out! We will get back to you soon.
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-gray-700">Your Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg mt-2"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700">Your Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg mt-2"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-gray-700">Your Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg mt-2"
//               placeholder="Write your message"
//               rows="4"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
