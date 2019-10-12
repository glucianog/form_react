import React, { useState  } from 'react';

import Grid from '@material-ui/core/Grid';
import {
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,  
} from '@material-ui/core'

import { phoneMask } from './masks/phoneMask'
import { cepMask } from './masks/cepMask'
import { useStyles } from '../pages/Form'

export default function ContactForm(props) {  
  const classes = useStyles();
  const { handleSubmit, pristine, submitting } = props;

  const [values, setValues] = useState({
    subject: '',
  });

  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    street: '',
    neighbourhood: '',
    city : ''
  });
  

function changeAddress(value) { 
  fetch(`https://viacep.com.br/ws/${value}/json`)
    .then(results => results.json())
    .then(data => {
      setAddress({
        street: data.logradouro,
        neighbourhood: data.bairro,
        city: data.localidade,
      });
    });      
}

const handleChange = event => {
  setValues(oldValues => ({
    ...oldValues,
    [event.target.name]: event.target.value,
  }));
};

  const handleChangeCep = event => {
    if (event.target.value.length === 9) {
      changeAddress(event.target.value);
    }
    setCep(cepMask(event.target.value));
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
              onChange={handleChangeCep}
              autoComplete="postal-code"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="street"
              name="street"
              value={address.street}
              label="Logradouro"
              fullWidth
            />
          </Grid>                   
          <Grid item xs={12} sm={6}>
            <TextField
              id="neighbourhood"
              name="neighbourhood"
              value={address.neighbourhood}
              label="Bairro"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              value={address.city}
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
              name="subject"
              required
            >
              <InputLabel htmlFor="subject">Assunto</InputLabel>
              <Select
                required
                value={values.subject}
                onChange={handleChange}
                inputProps={{
                  name: 'subject',
                  required: true,
                }}
              >
                <MenuItem value={10}>Financeiro</MenuItem>
                <MenuItem value={20}>Contato</MenuItem>
                <MenuItem value={30}>Outros</MenuItem>
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