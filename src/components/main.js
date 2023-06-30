import React, { useState } from 'react'
import { Button } from '@mui/material'
import QuickreplyIcon from '@mui/icons-material/Quickreply'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import cheetah from '../assets/cheetah.mp4'
import { RingLoader } from 'react-spinners'

const Main = () => {
    const [textInput, setTextInput] = useState("")
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(textInput)
        setLoading(loading => !loading)
        console.log(loading)
      };

  return (
    <div className='main'>
        <video src={cheetah} autoPlay loop/>
        <div className='content'>
            <h1>aiOS Job Search Path Finder</h1>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField 
                    required
                    onChange={e => setTextInput(e.target.value)}
                    id="outlined-basic" label="Job Title" variant="outlined" 
                    size="small">
                </TextField>
                <br></br>
                <Button variant="contained" 
                type="submit"
                endIcon={<QuickreplyIcon/>}
                sx={{
                    ":hover": {
                        bgcolor: "#a9a9a9",
                        color: "white"
                    },
                    backgroundColor: "#5A5A5A",
                    mt: 2, mb: 2
                }}>
               {loading ? "Downloading..." : "Download"}
                </Button>
            </Box>
            {loading ? <RingLoader color="#00008B" loading={loading}/> : null}
            <br></br>
            <br></br>
            {loading? <p>Query might take a couple minutes...</p> : null}
        </div>
    </div>
  )
}

export default Main