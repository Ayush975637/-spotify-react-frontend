
// import { Link } from "react-router-dom";
// import React, { useState } from 'react';


 





// const Login = () => {
//   const [formData, setFormData] = useState({
    
//     email: '',
//     password: ''
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!formData.email || !formData.password) {
//       setError('All fields are required');
//       return;
//     }

//     setError('');
//     setSuccess(true);

//     // Clear the form
//     setFormData({  email: '', password: '' });

//     // Optional: send data to backend
//   };
//   return (
   
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black login">
//       <div className="card p-4 shadow-lg" style={{ 
//           background: 'linear-gradient(135deg, #6f00ff, #240046)', 
//           borderRadius: '20px', 
//           width: '100%', 
//           maxWidth: '400px',
//           color: 'white'
//         }}>
        
//         <h2 className="text-center mb-4 fw-bold">Welcome Back 👑</h2>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>Thank you for your feedback!</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control rounded-pill bg-blue text-green color-green border-0"
//               placeholder="Email Address"
//               name="email" 
//               value={formData.email}
//               onChange={handleChange}
  
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="password"
//               className="form-control rounded-pill bg-blue text-green color-red border-0"
//               placeholder="Password"
//               name="password" 
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary rounded-pill fw-bold">
//               Login
//             </button>
//           </div>
//         </form>

//         <p className="text-center mt-4">
//           <span className="text-light">Don't have an account? </span>
//           <Link to="/signup" className="text-warning fw-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaCrown } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!formData.email || !formData.password) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setError('');
      setSuccess(true);
      setFormData({ email: '', password: '' });
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center  log">
      {/* Animated background elements */}
      <motion.div 
        className="position-absolute w-100 h-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-radial from-purple-900 to-black opacity-70"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="position-absolute rounded-circle bg-purple opacity-10"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="card p-4 p-md-5 border-0 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(111, 0, 255, 0.2), rgba(36, 0, 70, 0.3))',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '450px',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px -12px rgba(111, 0, 255, 0.25)',
          zIndex: 10
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glow effect */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-50 start-50 translate-middle w-150 h-150 rounded-circle bg-purple opacity-10 blur-100"></div>
        </div>

        <motion.div custom={0} variants={itemVariants}>
          <div className="text-center mb-4 position-relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="d-inline-block bg-gradient-primary rounded-circle p-3 mb-3"
              style={{
                background: 'linear-gradient(135deg, #9d4edd, #7b2cbf)',
                boxShadow: '0 10px 20px rgba(157, 78, 221, 0.3)'
              }}
            >
              <FaCrown size={32} className="text-white" />
            </motion.div>
            <h2 className="fw-bold mb-2 text-gradient" style={{
              background: 'linear-gradient(90deg, #ffffff, #e0aaff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Welcome Back</h2>
            <p className="text-white">Sign in to your royal account</p>
          </div>
        </motion.div>

        {error && (
          <motion.div 
            className="alert alert-danger rounded-pill" 
            role="alert"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div 
            className="alert alert-success rounded-pill" 
            role="alert"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Login successful! Redirecting...
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <motion.div custom={1} variants={itemVariants} className="mb-4">
            <div className="input-group">
              <span className="input-group-text bg-red bg-opacity-50 border-end-0 text-purple">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control bg-red bg-opacity-50 border-start-0 text-black"
                placeholder="Email Address"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                style={{
                  height: '50px',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          </motion.div>

          <motion.div custom={2} variants={itemVariants} className="mb-4">
            <div className="input-group">
              <span className="input-group-text bg-red bg-opacity-50 border-end-0 text-purple">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control bg-red bg-opacity-50 border-start-0 text-black"
                placeholder="Password"
                name="password" 
                value={formData.password}
                onChange={handleChange}
                style={{
                  height: '50px',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              />
              <button 
                type="button" 
                className="input-group-text bg-green bg-opacity-50 text-purple border-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <Link to="/forgot-password" className="text-purple text-decoration-none small">
                Forgot password?
              </Link>
            </div>
          </motion.div>

          <motion.div custom={3} variants={itemVariants} className="mb-3">
            <button 
              type="submit" 
              className="btn btn-primary w-100 rounded-pill fw-bold py-3"
              disabled={isLoading}
              style={{
                background: 'linear-gradient(135deg, #9d4edd, #7b2cbf)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(157, 78, 221, 0.4)'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Signing In...
                </>
              ) : (
                'Login'
              )}
            </button>
          </motion.div>

          <motion.div custom={4} variants={itemVariants} className="text-center mt-4">
            <p className="text-light mb-0">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="text-gradient fw-semibold text-decoration-none"
                style={{
                  background: 'linear-gradient(90deg, #e0aaff, #c77dff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Sign Up
              </Link>
            </p>
          </motion.div>
        </form>

        <motion.div 
          custom={5} 
          variants={itemVariants} 
          className="position-absolute bottom-0 start-0 w-100 overflow-hidden"
          style={{ height: '10px' }}
        >
          <motion.div
            className="bg-gradient-primary w-100 h-100"
            style={{
              background: 'linear-gradient(90deg, #9d4edd, #7b2cbf)'
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;