import { useEffect, useState } from "react";
import {
    FiDollarSign,
    FiCreditCard,
    FiFrown,
    FiHome,
    FiPlus,
} from "react-icons/fi";
import { TaxModuleType } from "../../types/Modul";
import { useRouter } from "next/router";

interface TaxModuleCreatorProps {
    moduleName: "Inntekt" | "Gjeld" | "Familie" | "Formue";
    toggleClose: Function;
}

const TaxModuleCreator = ({
    moduleName,
    toggleClose,
}: TaxModuleCreatorProps) => {
    const [married, setMarried] = useState<boolean>(false);
    const [money, setMoney] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [children, setChildren] = useState<string>();
    const [items, setItems] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedItems = localStorage.getItem("module");
        setItems(JSON.parse(storedItems));
    }, []);

    const addModule = () => {
        const newItem: TaxModuleType = {
            moduleName: moduleName,
            money: money,
            description: description,
            children: children,
            married: married,
        };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        localStorage.setItem("module", JSON.stringify(updatedItems));
    };

    const createModule = () => {
        addModule();
        toggleClose();
        router.reload();
    };

    const handleMarriedChange = () => {
        setMarried(!married);
    };

    const handleMoneyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setMoney(newValue);
    };

    const handleChildrenChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.value;
        setChildren(newValue);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.value;
        setDescription(newValue);
    };

    return (
        <>
            <main className="bg-blue-default w-[100%] h-[55px] rounded-xl py-2 px-2 shadow-md">
                <div className="flex w-full h-full items-center">
                    <div className="flex justify-start items-center w-full gap-2 text-beige-default">
                        <div className="text-beige-default text-3xl cursor-default">
                            {moduleName == "Inntekt" && <FiDollarSign />}
                            {moduleName == "Familie" && <FiHome />}
                            {moduleName == "Gjeld" && <FiFrown />}
                            {moduleName == "Formue" && <FiCreditCard />}
                        </div>

                        <p className="font-bold text-[20px] tracking-wider w-[100px] cursor-default">
                            {moduleName}
                        </p>
                        <div className="flex px-5 gap-4">
                            <div className="flex gap-1 h-full items-center">
                                <input
                                    className="w-[140px] h-[30px] bg-transparent font-light"
                                    type="text"
                                    placeholder={
                                        !(moduleName == "Familie")
                                            ? "Skriv inn antall kr"
                                            : "Skriv inn antall barn"
                                    }
                                    value={
                                        !(moduleName == "Familie")
                                            ? money
                                            : children
                                    }
                                    onChange={
                                        !(moduleName == "Familie")
                                            ? handleMoneyChange
                                            : handleChildrenChange
                                    }
                                />
                            </div>

                            <div>
                                {moduleName == "Familie" ? (
                                    <div className="flex gap-3 h-full items-center">
                                        <p className="text-beige-default cursor-default">
                                            GIFT?
                                        </p>
                                        <input
                                            className="w-[25px] h-[25px] cursor-pointer"
                                            type="checkbox"
                                            checked={married}
                                            onChange={handleMarriedChange}
                                        />
                                    </div>
                                ) : (
                                    <input
                                        className="w-[120px] h-[30px] bg-transparent font-light"
                                        type="text"
                                        placeholder="ARBEIDSGIVER"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-light rounded-md">
                        <FiPlus
                            onClick={() => createModule()}
                            className="text-4xl cursor-pointer text-beige-default"
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default TaxModuleCreator;
