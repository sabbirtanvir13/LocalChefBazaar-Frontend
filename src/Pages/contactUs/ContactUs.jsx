import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
                <img
                    src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                    alt="Contact"
                    className="w-40 mx-auto mb-6"
                />
                <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                    If you have any questions, feel free to reach out. We are always here to help!
                </p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg focus:outline-none"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-3 border rounded-lg focus:outline-none"
                    ></textarea>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
