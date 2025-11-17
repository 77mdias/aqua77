"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Fish,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Produtos",
    href: "/produtos",
    icon: Package,
  },
  {
    title: "Vendas",
    href: "/vendas",
    icon: ShoppingCart,
  },
  {
    title: "Clientes",
    href: "/clientes",
    icon: Users,
  },
  {
    title: "Relatórios",
    href: "/relatorios",
    icon: BarChart3,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      {/* Logo/Header */}
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-ocean">
          <Fish className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold">Aqua77</span>
          <span className="text-xs text-muted-foreground">Gestão Aquarismo</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <Separator className="mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-medium">Tema</span>
            <span className="text-xs text-muted-foreground">Modo claro/escuro</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
