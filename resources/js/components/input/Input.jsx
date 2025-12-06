import './Input.css';

const Input = ({ 
  label,
  type = 'text', // text, email, password, number, tel, url, date, select, textarea
  placeholder,
  value,
  onChange,
  error,
  success,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  size = 'medium', // small, medium, large
  variant = 'default', // default, filled, outlined
  icon,
  iconPosition = 'left', // left, right
  className = '',
  // Select props
  options = [],
  // Textarea props
  rows = 4,
  resize = 'vertical', // none, both, horizontal, vertical
  ...props
}) => {
  const renderInput = () => {
    // Render Select
    if (type === 'select') {
      return (
        <select
          className={`
            input-field 
            input-${size} 
            input-${variant}
            input-select
            ${error ? 'input-error' : ''} 
            ${success ? 'input-success' : ''}
          `.trim().replace(/\s+/g, ' ')}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          {...props}
        >
          <option value="" disabled>{placeholder || 'Pilih...'}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    // Render Textarea
    if (type === 'textarea') {
      return (
        <textarea
          className={`
            input-field 
            input-${size} 
            input-${variant}
            input-textarea
            input-resize-${resize}
            ${error ? 'input-error' : ''} 
            ${success ? 'input-success' : ''}
          `.trim().replace(/\s+/g, ' ')}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={rows}
          {...props}
        />
      );
    }

    // Render Regular Input
    return (
      <>
        {icon && iconPosition === 'left' && <span className="input-icon input-icon-left">{icon}</span>}
        <input
          type={type}
          className={`
            input-field 
            input-${size} 
            input-${variant} 
            ${icon ? `has-icon-${iconPosition}` : ''} 
            ${error ? 'input-error' : ''} 
            ${success ? 'input-success' : ''}
          `.trim().replace(/\s+/g, ' ')}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...props}
        />
        {icon && iconPosition === 'right' && <span className="input-icon input-icon-right">{icon}</span>}
      </>
    );
  };

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <div className="input-container">
        {renderInput()}
      </div>
      {error && <span className="error-message">{error}</span>}
      {success && <span className="success-message">{success}</span>}
      {helperText && !error && !success && <span className="helper-text">{helperText}</span>}
    </div>
  );
};

export default Input;
