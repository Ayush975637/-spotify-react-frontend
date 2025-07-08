
import React from 'react'

const TermsPage = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Use of Services:</strong> You agree to use this platform only for lawful and intended purposes.
        </li>
        <li>
          <strong>User Data:</strong> You are responsible for the accuracy of your data provided on this platform.
        </li>
        <li>
          <strong>Prohibited Activities:</strong> Any misuse, hacking, or unauthorized access is strictly prohibited.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All logos, names, and content are property of [Your App Name].
        </li>
        <li>
          <strong>Account Termination:</strong> We reserve the right to suspend any account violating these terms.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-blue-700 mb-4">Privacy Policy</h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Information Collected:</strong> We collect personal info like email, name, and transactional data.
        </li>
        <li>
          <strong>Usage of Data:</strong> We use your data to enhance your experience, generate insights, and process payments.
        </li>
        <li>
          <strong>Third-Party Sharing:</strong> Your data is only shared securely with payment processors like Razorpay.
        </li>
        <li>
          <strong>Security:</strong> We store all data securely and encrypt sensitive information.
        </li>
        <li>
          <strong>User Rights:</strong> You may request data updates or deletion by contacting us.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-700 mb-2">Contact Us</h3>
      <p>
        📧 Email: <a href="mailto:aa7782549@gmail.com" className="text-blue-500 underline">aa7782549@gmail.com</a><br />
        🌐 Website: <a href="https://spotify-react-frontend.vercel.app/" className="text-blue-500 underline">Sangeet</a>
      </p>

      <div className="mt-8 text-sm text-gray-500">
        Note: This is a placeholder policy for testing/deployment purposes. Please replace with a legal version before publishing.
      </div>
    </div>
    </div>
  )
}

export default TermsPage
