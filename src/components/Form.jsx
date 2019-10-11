import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'telephone',
    'subject',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo requerido'
    }
  })  
  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)


const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="name"
          component={renderTextField}
          label="Insira seu nome"
        />
      </div>
      <div>
        <Field name="telephone" component={renderTextField} label="Telefone" />
      </div>
      <div>
        <Field
          classes={classes}
          name="subject"
          component={renderSelectField}
          label="Assunto"
        >
          <option value="" />
          <option value="">Financeiro</option>
          <option value="">Contato</option>
          <option value="">Outros</option>
        </Field>
      </div>
      <div />
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Mensagem"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Enviar
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Limpar Valores
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate
})(MaterialUiForm)