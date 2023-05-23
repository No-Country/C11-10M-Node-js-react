import { stylesContainer, stylesInput, stylesLabel } from "../../styles";

export const InputText = ({ type, title, name, value, onChange, autofocus = false }) => {
	return (
		<div>
			<div className={stylesContainer}>
				<label htmlFor={name} className={stylesLabel}>
					{title}
				</label>
				<input
					autoFocus={autofocus}
					type={type}
					name={name}
					id={name}
					className={stylesInput}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export const InputSelect = ({ title, name, value, onChange, options }) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={name} className={stylesLabel}>
				{title}
			</label>
			<select
				className={stylesInput}
				name={name}
				value={value}
				onChange={onChange}
			>
				<option value=""></option>
				{options?.map((val, index)=>{
          return <option key={index} value={val}>{val}</option>
        })}
			</select>
		</div>
	);
};
