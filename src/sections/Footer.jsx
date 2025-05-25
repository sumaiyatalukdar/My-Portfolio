const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms and Privacy */}
      <div className="text-white-500 flex gap-2">
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <span>|</span>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a href="https://github.com/sumaiyatalukdar" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/sumaiya-talukdar/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="Twitter" className="w-1/2 h-1/2" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-500">© 2025 Sumaiya Talukdar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
