import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-primary-light/10 bg-primary-dark/95 backdrop-blur-sm py-6 px-6 mt-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <h4 className="font-bold text-white tracking-widest text-sm">FLUXARA</h4>
                    <p className="text-[10px] font-mono text-primary-light/50 mt-1">
                        SYSTEM_ID: 8F2-A91 • <span className="hover:text-accent-pop cursor-pointer">PRIVACY_PROTOCOL</span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <SocialLink icon={Github} />
                    <SocialLink icon={Twitter} />
                    <SocialLink icon={Linkedin} />
                    <SocialLink icon={Mail} />
                </div>

                <div className="text-[10px] font-mono text-primary-light/30">
                    © 2024 FLUXARA SYSTEMS. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon: Icon }: { icon: any }) => (
    <a href="#" className="text-primary-light/50 hover:text-accent-pop transition-colors p-2 hover:bg-primary-light/5 rounded-full">
        <Icon className="w-4 h-4" />
    </a>
);

export default Footer;
