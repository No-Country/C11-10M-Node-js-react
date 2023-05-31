import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const stylePadding = "p-2";

const Wage = () => {
  const { allWages } = useSelector((s) => s);
  return (
    <div>
      <Link to="/wageForm">Formulario</Link>
      {allWages.length>0 ? <table className="bg-white">
					<thead className="border-2">
						<tr>
							<th className={stylePadding}>Salario</th>
              <th className={stylePadding}>Horas</th>
              <th className={stylePadding}>Horas Ex.</th>
              <th className={stylePadding}>Deducciones</th>
              <th className={stylePadding}>Total</th>
						</tr>
					</thead>
					<tbody className="border-2 capitalize">
						{allWages?.map((wage) => (
							<tr key={wage?.id} className="border-y-[">
								<td className={stylePadding}>{wage?.payment}</td>
                <td className={stylePadding}>{wage?.nhours}</td>
                <td className={stylePadding}>{wage?.ehours}</td>
                <td className={stylePadding}>{wage?.deductions}</td>
                <td className={stylePadding}>{wage?.nincome}</td>
							</tr>
						))}
					</tbody>
				</table> 
				: <p>Ningún sueldo cargado todavía</p>}
    </div>
  )
}

export default Wage
