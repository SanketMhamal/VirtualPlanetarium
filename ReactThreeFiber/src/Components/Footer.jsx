import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <p className="text-lg mb-2">Developed By:</p>
                <div className="flex space-x-4 mb-4">
                    <p href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <span className="fab fa-facebook-f">Vinay</span>
                    </p>
                    <p href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <span className="fab fa-twitter">Sanket</span>
                    </p>
                    <p href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <span className="fab fa-instagram">Prapti</span>
                    </p>
                    <p href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <span className="fab fa-instagram">Smruthul</span>
                    </p>
                    <p href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <span className="fab fa-instagram">Samson</span>
                    </p>
                </div>
                <p className="text-sm">&copy; 2024 Celestia. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;