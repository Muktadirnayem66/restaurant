const Footer = () => {
    return (
        <div className="sm:mt-80 w-[1920px] h-[720px] relative">
            {/* Background Image */}
            <div className="absolute inset-0 bg-footerImage bg-cover bg-center"></div>
            
            {/* Overlay with Opacity */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
                
                <p>We ready to have you the best dining experiences</p>
            </div>
        </div>
    );
};

export default Footer;
