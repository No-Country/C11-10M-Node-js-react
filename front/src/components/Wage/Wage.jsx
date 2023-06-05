import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { stylesButton } from "../../styles";

const Wage = () => {
	const { allWages } = useSelector((s) => s);
	const stylePadding = "p-2 p-2 text-sm md:text-md xl:text-lg";
	return (
		<div>
			<div className="mobile:overflow-hidden">
				<div className="mobile:overflow-x-auto scroll scroll-smooth ">
					{allWages.length > 0 ? (
						<table className="bg-white">
							<thead className="border-2">
								<tr>
									<th className={stylePadding}>Empleado</th>
									<th className={stylePadding}>Salario</th>
									<th className={stylePadding}>Horas</th>
									<th className={stylePadding}>Horas Ex.</th>
									<th className={stylePadding}>Deducciones</th>
									<th className={stylePadding}>Total</th>
									<th className={stylePadding}>Download</th>
								</tr>
							</thead>
							<tbody className="border-2 capitalize">
								{allWages?.map((wage) => {
									const name = wage?.employee?.fname + " " + wage?.employee?.lname;
									return (
										<tr key={wage?.id} className="border-y-[">
											<td className={stylePadding}>{name}</td>
											<td className={stylePadding}>${wage?.payment}</td>
											<td className={stylePadding}>{wage?.nhours}</td>
											<td className={stylePadding}>{wage?.ehours}</td>
											<td className={stylePadding}>${wage?.deductions}</td>
											<td className={stylePadding}>${wage?.nincome}</td>
											<td className={stylePadding}>
												<NavLink to={`/wage/${wage?.id}`} className="text-black underline">
													Link
												</NavLink>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					) : (
						<p>Ningún sueldo cargado todavía</p>
					)}
					<div className="pt-4">
						<NavLink
							to="/wageForm"
							className={`border-2 border-main-green text-main-green
	p-2 ${stylesButton}`}
						>
							Registrar más liquidaciones
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wage;
