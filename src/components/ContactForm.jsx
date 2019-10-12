import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,  
} from '@material-ui/core'

import { phoneMask } from './masks/phoneMask'
import { cepMask } from './masks/cepMask'

const useStyles = makeStyles(theme => ({    
  button: {
    background: 'blue',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function ContactForm(props) {  
  const classes = useStyles();
  const { handleSubmit, pristine, submitting } = props;
  const [values, setValues] = useState({
    subject: '',
  });

  const [phone, setPhone] = useState('');

  const [cep, setCep] = useState('')

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Nome"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm ={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Telefone"
              value={phone}
              onChange={event => setPhone(phoneMask(event.target.value))}
              fullWidth
              autoComplete="ftell"
            >
            </TextField>  
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              id="zip"
              name="zip"
              label="CEP / Código Postal"
              fullWidth
              value={cep}
              onChange={event => setCep(cepMask(event.target.value))}
              autoComplete="postal-code"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="street"
              name="street"
              label="Logradouro"
              fullWidth
            />
          </Grid>                   
          <Grid item xs={12} sm={6}>
            <TextField
              id="neighbourhood"
              name="neighbourhood"
              label="Bairro"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="Cidade"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="number"
              name="number"
              label="Numero"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              required
              name="subject"
            >
              <InputLabel htmlFor="subject">Assunto</InputLabel>
              <Select
                required
                value={values.subject}
                onChange={handleChange}
                inputProps={{
                  name: 'subject',
                }}
              >
                <MenuItem value={10}>Financeiro</MenuItem>
                <MenuItem value={20}>Contato</MenuItem>
                <MenuItem value={30}>Outro</MenuItem>
              </Select>
            </FormControl> 
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="notes"
              name="notes"
              label="Texto"
              placeholder="Digite sua mensagem"
              multiline={true}
              rows={2}
              rowsMax={4}
              fullWidth
            />
          </Grid>
          <Grid >
            <button
              variant="contained"
              color="primary"
              disabled={pristine || submitting}
              className={classes.button}
            >
              Enviar
            </button>
               
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}