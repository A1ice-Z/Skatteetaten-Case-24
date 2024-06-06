import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Toolbar from "../components/Toolbar/Toolbar";
import TaxModuleTent from "../components/TaxModuleTent/TaxModuleTent";
import TaxResult from "../components/TaxResult/TaxResult";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import TaxModuleMenu from "../components/TaxModuleMenu/TaxModuleMenu";
import { TaxModuleType, TaxType } from "../types/Modul";

const Home = () => {
    const [income, setIncome] = useState<number>(0);
    const [debt, setDebt] = useState<number>(0);
    const [savings, setSavings] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [marriageStatus, setMarriageStatus] = useState<boolean>(false);
    const [visibleAddModule, setVisibleAddModule] = useState<boolean>(false);
    const [modules, setModules] = useState<Array<TaxModuleType>>([]);
    const [tax, setTax] = useState<TaxType>();

    useEffect(() => {
        //localStorage.clear(); // CLEAR THE LOCALSTORAGE
        const storedItems = localStorage.getItem("module");
        if (storedItems == null) {
            localStorage.setItem("module", JSON.stringify(modules));
        }
        setModules(JSON.parse(storedItems));
    }, []);

    useEffect(() => {
        if (modules.length <= 0) {
            return;
        }
        updateParams();
    }, [modules]);

    useEffect(() => {
        console.log(savings, children, marriageStatus, income, debt);
    }, [children]);

    const updateResults = async () => {
        await axios.post(`${process.env.endpoint}/get_tax`, { "income": income, "amount_of_children": children, "marital_status": marriageStatus, "savings": savings, "debt": debt }).then((res) => setTax(res.data)).catch((err) => console.error(err));
    }

    const updateParams = () => {
        let income = 0;
        let savings = 0;
        let debt = 0;
        let children = 0;
        let marriageStatus = false;
        modules.map((module: TaxModuleType) => {
            if (module.moduleName == "Familie") {
                children += parseInt(module.children);
                marriageStatus = module.married;
            } else if (module.moduleName == "Formue") {
                savings += parseInt(module.money);
            } else if (module.moduleName == "Inntekt") {
                income += parseInt(module.money);
            } else {
                debt += parseInt(module.money);
            }
        });
        setChildren(children);
        setDebt(debt);
        setIncome(income);
        setMarriageStatus(marriageStatus);
        setSavings(savings);
    };

    return (
        <>
            <Head>
                <title>SkatteRegnern | Skattekalkulator</title>
            </Head>

            {visibleAddModule && (
                <div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="fixed flex justify-center items-center h-full w-full z-[60] "
                    >
                        <TaxModuleMenu toggleClose={setVisibleAddModule} />
                    </div>
                    <div className="z-50 w-full h-full bg-black bg-opacity-50 top-0 left-0 fixed"></div>
                </div>
            )}

            <main className="h-[1100px] w-full font-inter bg-blue-light">
                <section className="flex justify-center bg-beige-default px-[60px] h-fit gap-[160px]">
                    <div className=" text-blue-default pt-[180px]">
                        <p className="font-bold text-[40px] tracking-wider">
                            Skattekalkulatoren
                        </p>
                        <p className="font-medium text-[20px] tracking-wide">
                            Regn ut skatten din i dag! Enkelt og fort!
                        </p>
                    </div>

                    <div>
                        <Image
                            src="/homepageArt.svg"
                            height={400}
                            width={400}
                            alt={"Business Art"}
                        />
                    </div>
                </section>
                <section className="px-[60px]">
                    <div className="w-full flex justify-center py-[30px]">
                        <Toolbar
                            visibleToggle={setVisibleAddModule}
                            showResults={updateResults}
                        />
                    </div>
                    <div className="flex justify-center w-full gap-[2%]">
                        <TaxModuleTent modules={modules} />
                        <TaxResult income={income} debt={debt} savings={savings} {...tax} />

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
