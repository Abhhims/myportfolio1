import { useState } from "react";
import { TextField, Button, Typography, Grid, Box, Stack } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { WhatsApp } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Stack align="center" mb={1}>
            <span className="aboutheadder">Get in touch</span>
            </Stack>
            <Stack align="center" mb={2}>
            <span >contact me</span>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                 
                   <Stack  fullWidth spacing={2} margin={4}>
                    <Stack  fullWidth><MailIcon ></MailIcon></Stack>
                    <Stack  fullWidth> abhishekmschota@gmail.com</Stack>
                   </Stack>
                     <Stack  fullWidth spacing={2} margin={4}> 
                    <Stack  fullWidth><WhatsApp></WhatsApp></Stack>
                    <Stack  fullWidth>678998765</Stack>
                   </Stack>
                      <Stack  fullWidth spacing={2} margin={4}> 
                    <Stack  fullWidth><InstagramIcon></InstagramIcon></Stack>
                    <Stack  fullWidth>@abhi360</Stack>
                   </Stack>
                   <Stack  fullWidth spacing={2} margin={4}> 
                    <Stack  fullWidth>Rateing</Stack>
                    <Stack  fullWidth>stars</Stack>
                   </Stack>
                 
                
                 
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );}