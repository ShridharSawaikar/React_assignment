import React,{useState,useEffect} from 'react'
import {TextField,IconButton,Grid, Card, CardMedia} from '@mui/material';
import styles from "./Home.module.css"
import SearchIcon from '@mui/icons-material/Search';
import Character from "../character/Character"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {

  const [characters,setCharacters] = useState();
  const [searchValue,setSearchValue] = useState("");

  const fetchCharacters = async(name) => {
    const data = await fetch(name != "" ? `https://rickandmortyapi.com/api/character/?name=${name}` : `https://rickandmortyapi.com/api/character`);
    const characters = await data.json();
    console.log(characters);
    setCharacters(characters.results);
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
    fetchCharacters("");
  },[])

  useEffect(() => {
    fetchCharacters(searchValue);
  },[searchValue,setSearchValue])
  return (
    <>    
      <div className={styles.container}>
        <TextField id="outlined-basic" label="Search" variant="standard" className={styles.input}
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          style:{borderRadius : "1000px",paddingLeft : "20px",}
        }}
        />
      </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Character Image</TableCell>
            <TableCell>Character Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Species</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters && characters.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Card>
                  <CardMedia sx={{ height: 300 }}
                    image={row.image}
                  />
                </Card>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.species}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Home