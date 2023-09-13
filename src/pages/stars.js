import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Typography from '@mui/material/Typography'
import { Button,Box } from '@mui/material'
import Header from '@/components/Layouts/Header'
import Anime from '@/components/Anime'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BareRock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
<Header />
<Anime />
<Box sx={{width:'100%;',height:'80vh',backgroundColor:'black'}}>
some stuff
</Box>
<Box sx={{width:'100%;',height:'80vh',backgroundColor:'blue'}}>
some stuff
</Box>
{/* <Typography variant="h1" component="h1" gutterBottom>Isn&apos;t it time</Typography> */}
    </main>
    </>
  )
}
