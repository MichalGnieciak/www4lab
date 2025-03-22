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
      <Card className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="dark:text-white">Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <div className="flex flex-col justify-center items-center">
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex flex-col itmes-center space-around">
          <p>Card Footer</p>
        </CardFooter>
        </div>
      </Card>

      <Table>
        <TableCaption className="text-sm text-muted-foreground">
          Color stats:
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="text-center">Name</TableHead>
            <TableHead colSpan={2} className="text-center">
              Cool
            </TableHead>
            <TableHead rowSpan={2} className="text-center">Wavelength</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Has been</TableHead>
            <TableHead className="text-center">Still is</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center font-medium">Blue</TableCell>
            <TableCell className="text-center">Y</TableCell>
            <TableCell className="text-center">N</TableCell>
            <TableCell className="text-center">432</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">Red</TableCell>
            <TableCell className="text-center">N</TableCell>
            <TableCell className="text-center">N</TableCell>
            <TableCell className="text-center">332</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <HoverCardDemo />
      </div>
    </main>
  );
}
