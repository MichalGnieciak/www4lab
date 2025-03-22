"use client";

import NavigationMenuDemo from "@/components/ui/NavigationMenuDemo"; // Adjust path if necessary

import HoverCardDemo from "@/components/ui/HoverCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main> 
      <NavigationMenuDemo />
      <div className="flex flex-col justify-center gap-10">
      <Card className="m-10 rounded-lg bg-[#CEAB93]  px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="text-center bg-[#E3CAA5 text-3xl font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>What colors are the most favored?</CardTitle>
          <CardDescription className="text-center bg-[#E3CAA5 text-xl font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Get to know that by reading the below article.</CardDescription>
        </CardHeader>
        <div className="flex flex-col justify-center items-center">
        <CardContent>
          <p className="text-center bg-[#E3CAA5 text-l font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>(Be aware that most of the data is made up)</p>
        </CardContent>
        <CardFooter className="flex flex-col itmes-center space-around">
          <p className="text-center bg-[#E3CAA5 text-l font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>This is a place for a footer but had no idea what to put here</p>
        </CardFooter>
        </div>
      </Card>

      <Table>
        <TableCaption className="text-center bg-[#E3CAA5] text-xl font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>
          Color stats:
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="text-center bg-[#AD8B73] text-xl text-[#FFFBE9] font-bold hover:bg-[#FFFBE9] hover:text-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Name</TableHead>
            <TableHead colSpan={2} className="text-center bg-[#AD8B73] text-xl text-[#FFFBE9] font-bold hover:bg-[#FFFBE9] hover:text-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>
              Cool
            </TableHead>
            <TableHead rowSpan={2} className="text-center bg-[#AD8B73] text-xl text-[#FFFBE9] font-bold hover:bg-[#FFFBE9] hover:text-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Wavelength</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center bg-[#AD8B73] text-l text-[#FFFBE9] font-bold hover:bg-[#FFFBE9] hover:text-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Has been</TableHead>
            <TableHead className="text-center bg-[#AD8B73] text-l text-[#FFFBE9] font-bold hover:bg-[#FFFBE9] hover:text-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Still is</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center bg-[#CEAB93] text-l font-bold text-[#FFFBE9] hover:bg-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Blue</TableCell>
            <TableCell className="text-center bg-[#FFFBE9] text-[#AD8B73]">Y</TableCell>
            <TableCell className="text-center bg-[#FFFBE9] text-[#AD8B73]">N</TableCell>
            <TableCell className="text-center bg-[#FFFBE9] text-[#AD8B73]">432</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center bg-[#CEAB93] text-l font-bold text-[#FFFBE9] hover:bg-[#AD8B73]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Red</TableCell>
            <TableCell className="text-center bg-[#FFFBE9] text-[#AD8B73]">N</TableCell>
            <TableCell className="text-center bg-[#FFFBE9] text-[#AD8B73]">N</TableCell>
            <TableCell className="text-center bg-[#FFFBE9] text-[#AD8B73]">332</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <HoverCardDemo />
      </div>
    </main>
  );
}
