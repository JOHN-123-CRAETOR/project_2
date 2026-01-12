
import React, {useState} from 'react';

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        
            <section>
                <div className="flex justify-between items-center m-auto p-4 text-sm shadow-lg sm:text-base shadow-lg">    
                    <p>JB</p>
                        <div>
                            <ul className="flex gap-2 hidden sm:gap-4 hidden hidden sm:flex sm:pl-150 ">
                                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">Home</li>
                                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">About</li>
                                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">Services</li>
                                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">Contact</li>        
                            </ul>   
                        </div>

                                <button
                                    onClick={() => setIsOpen(!isOpen)}>
                                    <img 
                                    src={isOpen ? "/close.webp" : "/open.png"}
                                    alt="menu toggler"
                                    className="w-6 h-6 flex justify-center sm:hidden "/>
                                </button>
                        </div>   
                
                    {isOpen && (
            <ul className=" inline-block gap-2 ">
                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">Home</li>
                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">About</li>
                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">Services</li>
                <li className="hover:text-blue-500 cursor-pointer p-1 hover:bg-blue-100 rounded cursor-pointer">Contact</li>
            </ul> 
        )} 
            </section>   
        
    );
} 

export default Navbar