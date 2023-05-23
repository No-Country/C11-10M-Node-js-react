import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { stylesButton } from "../../styles";

const Employees = () => {
	const { allEmployees } = useSelector((s) => s);
	const stylePadding = "p-2";
	return (
		<div className="">
			<div className="p-2 bg-input-green min-h-[84vh]">
				<p className="text-xl underline pb-2">Empleados registrados:</p>
				<table className="bg-white">
					<thead className="border-2">
						<tr>
							<th className={stylePadding}>N°</th>
							<th className={stylePadding}>Nombre</th>
              <th className={stylePadding}>DNI</th>
							<th className={stylePadding}>Puesto</th>
							<th className={stylePadding}>Contrato</th>
						</tr>
					</thead>
					<tbody className="border-2 capitalize">
						{allEmployees?.map((employee, index) => (
							<tr key={employee?.id} className="border-y-[">
								<td className={stylePadding}>{index + 1}.</td>
								<td className={stylePadding}>
									{employee?.fname + " " + employee?.lname}
								</td>
                <td className={stylePadding}>{employee?.dni}</td>
								<td className={stylePadding}>{employee?.position}</td>
								<td className={stylePadding}>{employee?.contractType}</td>
							</tr>
						))}
					</tbody>
				</table>

				<hr className="border-1 border-main-green my-4 w-1/2"></hr>

				<NavLink
					to="/registerEmployee"
					className={`border-2 border-main-green text-main-green
      p-2 ${stylesButton}`}
				>
					Registrar más empleados
				</NavLink>
			</div>
		</div>
	);
};

export default Employees;
