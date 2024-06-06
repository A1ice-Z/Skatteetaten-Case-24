import { useEffect, useState } from "react";
import { FiDollarSign, FiCreditCard, FiFrown, FiHome } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface TaxModuleProps {
    id: number;
    moduleName: "Inntekt" | "Formue" | "Gjeld" | "Familie";
    money: string;
    children: string;
    description: string;
    married: boolean;
}

const TaxModule = ({
    id,
    moduleName,
    money,
    children,
    description,
    married,
}: TaxModuleProps) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("module");
        setItems(JSON.parse(storedItems));
    }, []);

    const removeModule = () => {
        const updatedItems = items.filter(x => x.id != id)
        setItems(updatedItems);
        localStorage.setItem("module", JSON.stringify(updatedItems));
        location.reload();
    }

    return (
        <>
            <main onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="w-[180px] h-[180px] bg-blue-default rounded-lg overflow-hidden text-beige-default shadow-md">
                <div className="flex w-full items-center py-2 px-4">
                    <div className="flex justify-start w-full text-3xl">
                        {!hovered ? (
                            <>
                                {moduleName == "Inntekt" && <FiDollarSign />}
                                {moduleName == "Familie" && <FiHome />}
                                {moduleName == "Gjeld" && <FiFrown />}
                                {moduleName == "Formue" && <FiCreditCard />}
                            </>
                        ) :
                            (
                                <MdOutlineDeleteOutline onClick={() => removeModule()} className="cursor-pointer" />
                            )}
                    </div>
                    <div className="flex justify-end cursor-default">
                        <p className="font-bold tracking-wider">{moduleName}</p>
                    </div>
                </div>

                <div className="flex relative justify-center w-full h-full py-8 bg-blue-light rounded-lg tracking-wide text-blue-default">
                    {money && (
                        <div className="flex flex-col gap-y-8 w-full justify-center text-center py-2 pb-10 cursor-default">
                            <p className="text-[22px] font-bold ">{money} kr</p>
                            <p>{description}</p>
                        </div>
                    )}
                    {children && (
                        <div className="flex flex-col gap-y-8 w-full justify-center text-center py-2 pb-10 cursor-default">
                            <p className="text-[22px] font-bold ">
                                {children} barn
                            </p>
                            {married ? <p>Gift</p> : <p>Ikke Gift</p>}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default TaxModule;
