import { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);


    return (
        <div className="c_container !mt-[220px]">
            <div className="flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8"
                >
                    <h1 className="text-2xl font-bold text-center mb-2">
                        {isLogin ? "ورود به حساب کاربری" : "ثبت‌نام"}
                    </h1>
                    <p className="text-gray-500 text-center mb-6">
                        {isLogin
                            ? "برای ادامه وارد حساب خود شوید"
                            : "اطلاعات خود را برای ساخت حساب وارد کنید"}
                    </p>

                    <div className="mb-4">
                        <label className="block text-right text-sm mb-1">شماره تماس</label>
                        <input
                            type="tel"
                            placeholder="مثال: 09121234567"
                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-right text-sm mb-1">نام و نام خانوادگی</label>
                            <input
                                type="text"
                                placeholder="نام کامل شما"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    )}

                    <button onClick={() => setIsLogin(false)} className="w-full bg-purple-600 !text-white p-3 rounded-xl font-semibold hover:bg-purple-700 transition mb-4">
                        {isLogin ? "ورود" : "ثبت‌نام"}
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 border !mt-4 p-3 rounded-xl hover:bg-gray-50 transition mb-6">
                        <FcGoogle size={22} />
                        <span>ادامه با گوگل</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
