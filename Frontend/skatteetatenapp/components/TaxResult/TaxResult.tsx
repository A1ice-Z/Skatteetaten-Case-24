import { useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

interface TaxResult {
    income: number;
    debt: number;
    savings: number;
    tax: number;
    taxPercentage: number;
    restPercentage: number;
}

const TaxResult = ({ income, debt, savings, tax, taxPercentage, restPercentage }: TaxResult) => {

    return (
        <>
            <main className="bg-beige-default w-[39%] h-[600px] rounded-xl py-[25px] px-[30px] shadow-md">
                <p className="font-inter font-medium text-blue-default text-[24px]">
                    Resultat
                </p>
                {
                    tax !== undefined ? (<div><div className="my-[10px] h-[2px] w-full bg-blue-light"></div>
                        <div className='py-4 flex justify-center w-full'>
                            <PieChart
                                className='w-[180px]'
                                data={[
                                    { title: 'Total Skatt', value: taxPercentage, color: '#AAD7D9' },
                                    { title: 'Netto Lønn', value: restPercentage, color: '#265073' },
                                ]}
                            />;
                        </div>
                        <div className='flex pt-[100px]'>
                            <p className='flex justify-start font-medium w-full'>Bruttolønn </p>
                            <p className='flex justify-end font-regular w-full'>{income} kr</p>
                        </div>
                        <div className='flex'>
                            <p className='flex justify-start font-medium w-full'>Formue </p>
                            <p className='flex justify-end font-regular w-full'>{savings} kr</p>
                        </div>
                        <div className='flex'>
                            <p className='flex justify-start font-medium w-full'>Gjeld </p>
                            <p className='flex justify-end font-regular w-full'>{debt} kr</p>
                        </div>
                        <div className="my-[10px] h-[2px] w-full bg-blue-light"></div>
                        <div className='flex pt-[10px]'>
                            <p className='flex justify-start font-medium w-full'>Nettolønn </p>
                            <p className='flex justify-end font-semibold w-full'>{Math.round(income - tax)} kr</p>
                        </div>
                        <div className='flex '>
                            <p className='flex justify-start font-medium w-full'>Skatt Prosent </p>
                            <p className='flex justify-end font-semibold w-full'>{taxPercentage} %</p>
                        </div></div>) : <div className="h-[85%] w-full justify-center flex items-center pb-[20px]">
                        <p>Ingen resultat er generert enda!</p>
                    </div>
                }

            </main>
        </>
    );
};

export default TaxResult;
