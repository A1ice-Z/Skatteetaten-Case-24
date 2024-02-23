import { FiDollarSign, FiCreditCard, FiFrown, FiHome } from "react-icons/fi";

interface TaxModuleProps {
    moduleName: "Inntekt" | "Formue" | "Gjeld" | "Familie";
    money: string;
    children: string;
    description: string;
    married: boolean;
}

const TaxModule = ({
    moduleName,
    money,
    children,
    description,
    married,
}: TaxModuleProps) => {
    return (
        <>
            <main className="w-[180px] h-[180px] bg-blue-default rounded-lg overflow-hidden text-beige-default shadow-md">
                <div className="flex w-full items-center py-2 px-4">
                    <div className="flex justify-start w-full text-3xl">
                        {moduleName == "Inntekt" && <FiDollarSign />}
                        {moduleName == "Familie" && <FiHome />}
                        {moduleName == "Gjeld" && <FiFrown />}
                        {moduleName == "Formue" && <FiCreditCard />}
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
