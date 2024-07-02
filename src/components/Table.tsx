import { useEffect, useState } from "react";
import { EmployeeType } from "../utils/types";
import formatDate from "../utils/formatDate";

export default function Table() {
    const [employees, setEmployees] = useState<EmployeeType[]>([]);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/employees');
            const data = await response.json();
            setEmployees(data);
        }
        fetchData();
    }, []);


    const toggleAccordion = (id:number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-t-lg">
            <table className="w-full text-sm text-left text-[#1C1C1C]">
                <thead className="text-xs text-gray-700 uppercase bg-gradient-to-b from-custom-blue to-custom-purple text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Foto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" className="px-6 py-3 md:hidden">
                            <span className="sr-only">Ver Mais</span>
                        </th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">
                            Cargo
                        </th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">
                            Data de emissão
                        </th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">
                            Telefone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <>
                        <tr key={employee.id} className="bg-[#FFFFFF] border-b-2  border-[#9E9E9E] hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium">
                                <img src={employee.image} width={34} height={34} className="rounded-full" alt="" />
                            </th>
                            <td className="px-6 py-4">
                                {employee.name}
                            </td>
                            <td className="px-6 py-4 md:hidden text-center">
                                <button onClick={() => toggleAccordion(employee.id)}>
                                    {openAccordion === employee.id ? '▲' : '▼'}
                                </button>
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                                {employee.job}
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                                {formatDate(employee.admission_date)}
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                                {employee.phone}
                            </td>
                        </tr>
                        {openAccordion === employee.id && (
                            <tr className="md:hidden">
                                <td colSpan={3} className="px-6 py-4">
                                    <div className="p-4 border-t border-gray-200">
                                        <p><strong>Cargo:</strong> {employee.job}</p>
                                        <p><strong>Data de emissão:</strong> {formatDate(employee.admission_date)}</p>
                                        <p><strong>Telefone:</strong> {employee.phone}</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>

    );
}