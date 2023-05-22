const Register = () => {
  return (
    <form className="grid grid-cols-2 gap-4">
      {/* first name */}
      <div className={stylesContainer}>
        <label htmlFor="fname" className={stylesLabel}>Nombre</label>
        <input type="text" name="fname" id="fname" className={stylesInput} />
      </div>

      {/* last name */}
      <div className={stylesContainer}>
        <label htmlFor="lname" className={stylesLabel}>Apellido</label>
        <input type="text" name="lname" id="lname" className={stylesInput} />
      </div>

      {/* dni */}
      <div className={stylesContainer}>
        <label htmlFor="dni" className={stylesLabel}>DNI</label>
        <input type="text" name="dni" id="dni" className={stylesInput} />
      </div>

      {/* cuil / cuit */}
      <div className={stylesContainer}>
        <label htmlFor="cuit" className={stylesLabel}>CUIL/CUIT</label>
        <input type="text" name="cuit" id="cuit" className={stylesInput} />
      </div>
    </form>
  )
}

const stylesInput = "border-2 border-black rounded-md"
const stylesLabel = "relative w-[30px]"
const stylesContainer = "grid mb-1"

export default Register
