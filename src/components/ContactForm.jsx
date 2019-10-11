import React from 'react';
import InputMask from 'react-input-mask'

import Grid from '@material-ui/core/Grid';
import {
  Typography,
  TextField,  
} from '@material-ui/core'

export default function ContactForm() {  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact form
      </Typography>
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
            id="tell"
            name="tell"
            label="Telefone"
            type="tel"
            fullWidth
            autoComplete="ftell"
          >
            <InputMask mask ="(0)99999-9999" maskChar=" " />
          </TextField>  
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="zip"
            name="zip"
            label="CEP / Código Postal"
            fullWidth
            autoComplete="postal-code"
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
          Inserir Combobox assunto          
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="subject"
            name="subject"
            label="Texto"
            placeholder="Digite sua mensagem"
            multiline={true}
            rows={2}
            rowsMax={4}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}