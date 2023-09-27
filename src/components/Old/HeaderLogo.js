import React from 'react'
import Link from 'next/link'
import { Box } from '@mui/material'
export default function HeaderLogo({themeColor}) {
	const colorLogo = process.env.NEXT_PUBLIC_LOGO_COLOR;
	const whiteLogo = process.env.NEXT_PUBLIC_LOGO_WHITE;
  return (
    <Link href="/" passHRef>
      <a style={{	marginTop:"15px"}}>
        <Box component="img"
          width="1250"
          height="334"
          src={themeColor=='light'?whiteLogo:colorLogo}
          sx={{ width: '100%', maxWidth: 200,marginTop:-1 }}
          alt="BareRock"
        />
      </a>
  </Link>
  )
}
