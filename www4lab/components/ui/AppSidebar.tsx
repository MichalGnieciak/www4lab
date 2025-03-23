import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Blue",
    url: "https://michalgnieciak.github.io/posts/Learn-about-blue/",
  },
  {
    title: "Red",
    url: "https://michalgnieciak.github.io/posts/Learn-about-red/",
  },
  {
    title: "Green",
    url: "https://michalgnieciak.github.io/posts/Learn-about-green/",
  },
  {
    title: "Purple",
    url: "https://michalgnieciak.github.io/posts/Learn-about-purple/",
  },
  {
    title: "Black",
    url: "https://michalgnieciak.github.io/posts/Learn-about-black/",
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-[#CEAB93]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-center bg-[#CEAB93] text-4xl font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>Colors list</SidebarGroupLabel>
          <SidebarGroupContent className="bg-[#CEAB93]">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild >
                    <a href={item.url}>
                      <span className="text-center bg-[#E3CAA5 text-xl font-bold text-[#FFFBE9]" style={{ textShadow: "2px 2px 5px #AD8B73" }}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
