import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-row w-full h-[160px] bg-beige-default items-center px-[8%] font-inter">
                <div className="flex flex-row h-full w-full items-center justify-end  text-white-paper text-sm">
                    <p className="text-right">
                        Laget av{" "}
                        <a
                            href="https://github.com/Alice-Z/"
                            className="font-bold"
                        >
                            {" "}
                            Alice Zheng
                        </a>
                        <br />
                        <span className="text-base text-white-paper pt-2 tracking-wider">
                            Copyright SkatteRegnern © 2024
                        </span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
