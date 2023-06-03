// import styled from "styled-components";
import DocuPDF from "../PDF/PDF";
import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Downloads = () => {
	// const data =
	const { allWages } = useSelector((s) => s);
	const { id } = useParams();
	const find = allWages?.find((wage) => wage.id === id);
	console.log(find);
	return (
		<div className="min-h-screen">
			{/* <StyledDownloads> */}
			{/* <Menu/> */}
			<h1>Descarga de recibos de pago</h1>
			{find && (
				<PDFViewer className="w-full h-screen">
					<DocuPDF data={find} />
				</PDFViewer>
			)}
			{/* </StyledDownloads> */}
		</div>
	);
};

// const StyledDownloads = styled.div`
// 	width: 100%;
// `;

export default Downloads;
