// import React from "react";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black login">
//       <div className="card p-4 shadow-lg" style={{ 
//           background: 'linear-gradient(135deg, #3b0f94, #1f005c)', 
//           borderRadius: '20px', 
//           width: '100%', 
//           maxWidth: '400px',
//           color: 'white'
//         }}>
        
//         <h2 className="text-center mb-4 fw-bold">Create Account 🚀</h2>

//         <form>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control rounded-pill bg-blue text-white border-0"
//               placeholder="Full Name"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control rounded-pill bg-blue text-white border-0"
//               placeholder="Email Address"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="password"
//               className="form-control rounded-pill bg-blue text-white border-0"
//               placeholder="Password"
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary rounded-pill fw-bold">
//               Sign Up
//             </button>
//           </div>
//         </form>

//         <p className="text-center mt-4">
//           <span className="text-light">Already have an account? </span>
//           <Link to="/login" className="text-info fw-semibold">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
// import { Link } from "react-router-dom";
// import React, { useState } from 'react';
// import { motion } from "framer-motion";
// import { FaLock, FaEnvelope, FaUser, FaEye, FaEyeSlash, FaCrown } from "react-icons/fa";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState({
//     password: false,
//     confirmPassword: false
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const togglePasswordVisibility = (field) => {
//     setShowPassword({
//       ...showPassword,
//       [field]: !showPassword[field]
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//       setError('All fields are required');
//       setIsLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setError('');
//       setSuccess(true);
//       setFormData({ name: '', email: '', password: '', confirmPassword: '' });
//     } catch (err) {
//       setError('Signup failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5
//       }
//     })
//   };

//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
//       <motion.div
//         className="card p-4 p-md-5 border-0"
//         style={{ 
//           background: 'rgba(23, 25, 35, 0.95)',
//           borderRadius: '16px',
//           width: '100%',
//           maxWidth: '450px',
//           color: 'white',
//           border: '1px solid rgba(255, 255, 255, 0.08)',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
//         }}
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div custom={0} variants={itemVariants}>
//           <div className="text-center mb-4">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="d-inline-block bg-gradient-primary rounded-circle p-3 mb-3"
//               style={{
//                 background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
//                 boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
//               }}
//             >
//               <FaCrown size={28} className="text-white" />
//             </motion.div>
//             <h2 className="fw-bold mb-2" style={{ color: '#e0e7ff' }}>Create Account</h2>
//             <p className="text-muted">Join us today</p>
//           </div>
//         </motion.div>

//         {error && (
//           <motion.div 
//             className="alert alert-danger rounded-lg mb-3" 
//             role="alert"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             {error}
//           </motion.div>
//         )}

//         {success && (
//           <motion.div 
//             className="alert alert-success rounded-lg mb-3" 
//             role="alert"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             Account created successfully!
//           </motion.div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <motion.div custom={1} variants={itemVariants} className="mb-3">
//             <div className="input-group">
//               <span className="input-group-text bg-gray-800 border-gray-700 text-indigo-300">
//                 <FaUser />
//               </span>
//               <input
//                 type="text"
//                 className="form-control bg-gray-800 border-gray-700 text-white"
//                 placeholder="Full Name"
//                 name="name" 
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={{ height: '48px' }}
//               />
//             </div>
//           </motion.div>

//           <motion.div custom={2} variants={itemVariants} className="mb-3">
//             <div className="input-group">
//               <span className="input-group-text bg-gray-800 border-gray-700 text-indigo-300">
//                 <FaEnvelope />
//               </span>
//               <input
//                 type="email"
//                 className="form-control bg-gray-800 border-gray-700 text-white"
//                 placeholder="Email Address"
//                 name="email" 
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{ height: '48px' }}
//               />
//             </div>
//           </motion.div>

//           <motion.div custom={3} variants={itemVariants} className="mb-3">
//             <div className="input-group">
//               <span className="input-group-text bg-gray-800 border-gray-700 text-indigo-300">
//                 <FaLock />
//               </span>
//               <input
//                 type={showPassword.password ? "text" : "password"}
//                 className="form-control bg-gray-800 border-gray-700 text-white"
//                 placeholder="Password"
//                 name="password" 
//                 value={formData.password}
//                 onChange={handleChange}
//                 style={{ height: '48px' }}
//               />
//               <button 
//                 type="button" 
//                 className="input-group-text bg-gray-800 border-gray-700 text-indigo-300"
//                 onClick={() => togglePasswordVisibility('password')}
//               >
//                 {showPassword.password ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </motion.div>

//           <motion.div custom={4} variants={itemVariants} className="mb-4">
//             <div className="input-group">
//               <span className="input-group-text bg-gray-800 border-gray-700 text-indigo-300">
//                 <FaLock />
//               </span>
//               <input
//                 type={showPassword.confirmPassword ? "text" : "password"}
//                 className="form-control bg-gray-800 border-gray-700 text-white"
//                 placeholder="Confirm Password"
//                 name="confirmPassword" 
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 style={{ height: '48px' }}
//               />
//               <button 
//                 type="button" 
//                 className="input-group-text bg-gray-800 border-gray-700 text-indigo-300"
//                 onClick={() => togglePasswordVisibility('confirmPassword')}
//               >
//                 {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </motion.div>

//           <motion.div custom={5} variants={itemVariants} className="mb-3">
//             <button 
//               type="submit" 
//               className="btn btn-primary w-100 rounded-lg fw-bold py-2"
//               disabled={isLoading}
//               style={{
//                 background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
//                 border: 'none',
//                 height: '48px'
//               }}
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//             >
//               {isLoading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Creating Account...
//                 </>
//               ) : (
//                 'Sign Up'
//               )}
//             </button>
//           </motion.div>

//           <motion.div custom={6} variants={itemVariants} className="text-center mt-4 pt-2">
//             <p className="text-muted mb-0">
//               Already have an account?{' '}
//               <Link 
//                 to="/login" 
//                 className="text-indigo-300 fw-semibold text-decoration-none"
//               >
//                 Login
//               </Link>
//             </p>
//           </motion.div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-vh-80 d-flex align-items-center justify-content-center bg-light log">
      <motion.div 
        className="auth-container bg-white p-4 p-md-5"
        initial="hidden"
        animate="show"
        variants={container}
        style={{
          width: '100%',
          maxWidth: '440px',
          borderRadius: '8px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className="text-center mb-5">
          <motion.div variants={item}>
            <h1 className="h3 fw-bold mb-2">Create Account</h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-muted">Join the community of enthusiasts</p>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit}>
          <motion.div variants={item} className="mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  height: '56px',
                  borderColor: '#e9ecef',
                  backgroundColor: '#f8f9fa'
                }}
              />
              <label htmlFor="name" className="text-muted">
                <FaUser className="me-2" />
                Full Name
              </label>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-3">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  height: '56px',
                  borderColor: '#e9ecef',
                  backgroundColor: '#f8f9fa'
                }}
              />
              <label htmlFor="email" className="text-muted">
                <FaEnvelope className="me-2" />
                Email Address
              </label>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-3">
            <div className="form-floating position-relative">
              <input
                type={showPassword.password ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  height: '56px',
                  borderColor: '#e9ecef',
                  backgroundColor: '#f8f9fa',
                  paddingRight: '50px'
                }}
              />
              <label htmlFor="password" className="text-muted">
                <FaLock className="me-2" />
                Password
              </label>
              <button
                type="button"
                className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-3"
                onClick={() => togglePasswordVisibility('password')}
                style={{
                  color: '#6c757d',
                  zIndex: 5
                }}
              >
                {showPassword.password ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-4">
            <div className="form-floating position-relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  height: '56px',
                  borderColor: '#e9ecef',
                  backgroundColor: '#f8f9fa',
                  paddingRight: '50px'
                }}
              />
              <label htmlFor="confirmPassword" className="text-muted">
                <FaLock className="me-2" />
                Confirm Password
              </label>
              <button
                type="button"
                className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-3"
                onClick={() => togglePasswordVisibility('confirm')}
                style={{
                  color: '#6c757d',
                  zIndex: 5
                }}
              >
                {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-4">
            <button
              type="submit"
              className="btn btn-dark w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
              disabled={isLoading}
              style={{
                borderRadius: '8px',
                height: '56px'
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isLoading ? (
                <div className="spinner-border spinner-border-sm me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  Continue <FiArrowRight className="ms-2" />
                </>
              )}
            </button>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <p className="text-muted mb-0">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-dark fw-semibold text-decoration-none"
              >
                Sign In
              </Link>
            </p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;