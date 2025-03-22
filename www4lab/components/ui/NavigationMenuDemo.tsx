"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Learn More",
    href: "https://michalgnieciak.github.io/about/",
    description:
      "Learn more about the colors website and other interesting facts about colors!",
  },
  {
    title: "See Templates",
    href: "https://ui.shadcn.com/docs",
    description:
      "You can learn more about the templates used by visitng the source website.",
  },
  {
    title: "Colors",
    href: "https://coolors.co/",
    description:
      "If you want to know how the palette for this website was chosen visit this link.",
  },
  {
    title: "Github",
    href: "https://github.com/MichalGnieciak/www4lab",
    description: "If you'd like to see the results code you can visit the github repository for this website.",
  },
  {
    title: "Content",
    href: "https://michalgnieciak.github.io/www2lab/",
    description:
      "The content fot this webpage was taken from another project which you can visit by this link.",
  },
  {
    title: "Author",
    href: "https://github.com/MichalGnieciak",
    description:
      "If you want to see more of my work you can visit my github profile.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="justify-end flex-row">
        <NavigationMenuItem className="mr-auto list-none mt-1 md-1">
          <Link href="https://michalgnieciak.github.io/" legacyBehavior passHref>
            <NavigationMenuLink>
                <Avatar>
                    <AvatarImage src="/assets/color-wheel.png" />
                </Avatar>
            </NavigationMenuLink>
          </Link>
      </NavigationMenuItem>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-center bg-[#E3CAA5 text-l font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Michal Gnieciak
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      This website was designed and written by me.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="How it started">
               This webpage was designed with tailwind css and shadcn components.
              </ListItem>
              <ListItem href="/docs/installation" title="How it's going">
                Currently this webpage is being develop to mimic the previous lab2 webpage.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="How it will be going">
                This website and other templates could get used to create an impressive portfolio.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-center text-l font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Info</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/MichalGnieciak?tab=repositories" legacyBehavior passHref>
            <NavigationMenuLink className="text-center text-l font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>
              See more
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
