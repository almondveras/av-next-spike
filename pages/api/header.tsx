import { NextRequest, NextResponse } from "next/server"

const Header = (req: any, res: any) => {
  res.send({message: 'helo'})
}

export default Header