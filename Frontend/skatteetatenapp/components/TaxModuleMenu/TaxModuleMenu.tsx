import TaxModuleCreator from "./TaxModuleCreator";
import { FiX } from "react-icons/fi";

interface TaxModuleMenuProps {
    toggleClose: Function;
}

const TaxModuleMenu = ({ toggleClose }: TaxModuleMenuProps) => {
    return (
        <>
            <main className="bg-beige-default w-[49%] h-[400px] rounded-xl py-[25px] px-[30px] shadow-md">
                <div className="flex">
                    <div className="w-full">
                        <p className="font-inter font-medium text-blue-default text-[24px]">
                            Legg inn en skattemodul
                        </p>
                    </div>
                    <div>
                        <FiX
                            onClick={() => toggleClose(false)}
                            className="flex justify-end w-full text-3xl h-full items-center cursor-pointer"
                        />
                    </div>
                </div>

                <div className="my-[10px] h-[2px] w-full bg-blue-light"></div>
                <div className="flex flex-col gap-y-4">
                    <TaxModuleCreator
                        moduleName="Inntekt"
                        toggleClose={toggleClose}
                    />
                    <TaxModuleCreator
                        moduleName="Formue"
                        toggleClose={toggleClose}
                    />
                    <TaxModuleCreator
                        moduleName="Gjeld"
                        toggleClose={toggleClose}
                    />
                    <TaxModuleCreator
                        moduleName="Familie"
                        toggleClose={toggleClose}
                    />
                </div>
            </main>
        </>
    );
};

export default TaxModuleMenu;
