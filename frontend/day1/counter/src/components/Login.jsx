// import { useState } from 'react'

// const Login = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [showPassword, setShowPassword] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('Login attempt:', { email, password })
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
//             <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h1>
//                 <p className="text-gray-500 text-center mb-8">Sign in to your account</p>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="your@email.com"
//                             className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                         <div className="relative">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="Enter your password"
//                                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
//                             >
//                                 {showPassword ? '👁️' : '👁️‍🗨️'}
//                             </button>
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center text-sm">
//                         <label className="flex items-center">
//                             <input type="checkbox" className="mr-2 w-4 h-4" />
//                             <span className="text-gray-600">Remember me</span>
//                         </label>
//                         <a href="#" className="text-blue-500 hover:text-blue-700">Forgot password?</a>
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105"
//                     >
//                         Sign In
//                     </button>
//                 </form>

//                 <p className="text-center text-gray-600 mt-6">
//                     Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Sign up</a>
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Login