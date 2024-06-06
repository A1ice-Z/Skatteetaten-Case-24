export type TaxModuleType = {
    id: number;
    moduleName: "Inntekt" | "Formue" | "Gjeld" | "Familie";
    money: string;
    children: string;
    description: string;
    married: boolean;
}

export type TaxType = {
    tax: number;
    taxPercentage: number;
    restPercentage: number;
}