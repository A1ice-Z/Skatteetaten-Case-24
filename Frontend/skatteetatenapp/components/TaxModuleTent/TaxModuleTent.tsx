import { useEffect, useState } from "react";
import { TaxModuleType } from "../../types/Modul";
import TaxModule from "../TaxModule/TaxModule";

interface TaxModuleTentProps {
    modules: Array<TaxModuleType>;
}

const TaxModuleTent = ({ modules }: TaxModuleTentProps) => {
    return (
        <>
            <main className="bg-beige-default w-[49%] h-[600px] rounded-xl py-[25px] px-[30px] shadow-md">
                <p className="font-inter font-medium text-blue-default text-[24px]">
                    Skattemoduler
                </p>
                <div className="my-[10px] h-[2px] w-full bg-blue-light"></div>
                {modules.length > 0 ? (
                    <div className="flex flex-wrap gap-4 overflow-y-auto h-[90%]">
                        {modules?.map((mod: TaxModuleType, index) => (
                            <TaxModule key={index} {...mod} />
                        ))}
                    </div>
                ) : (
                    <div className="h-[85%] w-full justify-center flex items-center pb-[20px]">
                        <p>Ingen skattemoduler er lagt til enda!</p>
                    </div>
                )}
            </main>
        </>
    );
};

export default TaxModuleTent;
