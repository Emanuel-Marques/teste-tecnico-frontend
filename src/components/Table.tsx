import { useEffect, useState } from "react";
import { EmployeeType } from "../utils/types";
import formatDate from "../utils/formatDate";
import arrowDown from '../assets/Icons/Vector.png';
import arrowUp from '../assets/Icons/charm_chevron-up-colored.png';
import elipse from '../assets/Icons/Ellipse 1.png';

export default function Table({ searchQuery }) {
    const [employees, setEmployees] = useState<EmployeeType[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<EmployeeType[]>([]);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/employees');
            const data = await response.json();
            setEmployees(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = employees.filter(employee => 
            employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            employee.job.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredEmployees(filtered);
    }, [searchQuery, employees]);


    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="relative overflow-x-auto shadow-md rounded-t-lg ">
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
                            <span className="text-right"><img src={elipse} alt="elipse" /></span>
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
                    {filteredEmployees.map(employee => (
                        <>
                            <tr key={employee.id} className="bg-[#FFFFFF] border-t-2  border-[#9E9E9E] hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium">
                                    <img src={employee.image} width={34} height={34} className="rounded-full" alt="" />
                                </th>
                                <td className="px-6 py-4">
                                    {employee.name}
                                </td>
                                <td className="px-6 py-4 md:hidden text-right">
                                    <button onClick={() => toggleAccordion(employee.id)}>
                                        {openAccordion === employee.id ?
                                            <img className="" src={arrowUp} alt="Seta virada para cima" /> : <img src={arrowDown} alt="Seta virada para baixo" />}
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
                                <tr key={employee.id} className="md:hidden">
                                    <td colSpan={3} className="px-6 py-4">
                                        <div className="flex justify-between border-dashed border-b-2 mt-3">
                                            <p><strong>Cargo:</strong></p>
                                            <p>{employee.job}</p>
                                        </div>
                                        <div className="flex justify-between border-dashed border-b-2 mt-3">
                                            <p><strong>Data de emissão:</strong></p>
                                            <p>{formatDate(employee.admission_date)}</p>
                                        </div>
                                        <div className="flex justify-between border-dashed border-b-2 mt-3">
                                            <p><strong>Telefone:</strong></p>
                                            <p>{employee.phone}</p>
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