// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLocationDot,
//   faPhone,
//   faAt,
// } from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { useState } from "react";

// const Contacts = (props) => {
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [github, setGithub] = useState("");
//   const [linkedin, setLinkedin] = useState("");

//   const changeLocationHandler = (event) => {
//     setLocation(event.target.value);
//   };

//   const changePhoneNumberHandler = (event) => {
//     setPhoneNumber(event.target.value);
//   };
//   const changeEmailHandler = (event) => {
//     setEmail(event.target.value);
//   };
//   const changeGithubHandler = (event) => {
//     setGithub(event.target.value);
//   };
//   const changeLinkedinHandler = (event) => {
//     setLinkedin(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const contactInfo = {
//       location,
//       phoneNumber,
//       email,
//       github,
//       linkedin,
//     };
//     onGetContactData(contactInfo);
//   };a

//   return (
//     <form className="flex flex-col gap-2" onSubmit={submitHandler}>
//       <div className="flex gap-4 items-center">
//         <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
//         <input
//           type="text"
//           placeholder="City"
//           className="p-1"
//           value={location}
//           onChange={changeLocationHandler}
//         />
//       </div>
//       <div className="flex gap-4 items-center">
//         <FontAwesomeIcon icon={faPhone} />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="p-1"
//           value={phoneNumber}
//           onChange={changePhoneNumberHandler}
//         />
//       </div>
//       <div className="flex gap-4 items-center">
//         <FontAwesomeIcon icon={faAt} />
//         <input
//           type="text"
//           placeholder="Email Address"
//           className="p-1"
//           value={email}
//           onChange={changeEmailHandler}
//         />
//       </div>
//       <div className="flex gap-4 items-center">
//         <FontAwesomeIcon icon={faGithub} />
//         <input
//           type="text"
//           placeholder="Github Profile"
//           className="p-1"
//           value={github}
//           onChange={changeGithubHandler}
//         />
//       </div>
//       <div className="flex gap-4 items-center">
//         <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
//         <input
//           type="text"
//           placeholder="LinkedIn Profile"
//           className="p-1"
//           value={linkedin}
//           onChange={changeLinkedinHandler}
//         />
//       </div>
//       <button type="submit">Submit Contact</button>
//     </form>
//   );
// };

// export default Contacts;
