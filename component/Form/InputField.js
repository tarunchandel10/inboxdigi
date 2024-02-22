function FormField({ icon, type, name, placeholder, value, onChange }) {
  return (
      <div className="create-form-feild">
          {icon}
          <input type={type} className="form-control" name={name} placeholder={placeholder} value={value} onChange={onChange}/>
      </div>
  );
}
export default FormField;