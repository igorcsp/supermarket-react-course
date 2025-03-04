const AddProductForm = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          onChange={props.onNameChange}
          value={props.productName}
          type="text"
          placeholder="Enter the name"
          className="textfield"
        />
        <div className="validation-message">{props.validation}</div>
      </div>
      <div>
        <label htmlFor="input-description">Description</label>
        <input
          id="input-description"
          onChange={props.onDescriptionChange}
          value={props.productDescription}
          type="text"
          placeholder="Enter the description"
          className="textfield"
        />
        <div className="validation-message">{props.validation}</div>
      </div>
      <div className="form-footer">
        <div className="validation-message"></div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
};

export default AddProductForm;
